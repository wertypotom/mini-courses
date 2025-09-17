import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { diff } = await request.json();

    if (!diff || !process.env.ABACUS_API_KEY) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const response = await fetch(
      "https://routellm.abacus.ai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.ABACUS_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `Generate a conventional commit message for frontend development. Format:

HEADER: type(scope): description (max 50 chars)
BLANK LINE
BULLET LIST: specific changes

Frontend types:
- feat: new features, components, pages
- fix: bug fixes, error handling  
- refactor: code restructuring, component extraction
- style: CSS, styling, UI improvements, linting fixes
- perf: performance optimizations, bundle size
- test: adding/updating tests
- build: webpack, build tools, dependencies
- ci: GitHub Actions, deployment configs
- docs: README, comments, documentation
- chore: maintenance, cleanup, tooling

Example:
feat(auth): implement OAuth login system

- Add GitHub OAuth provider configuration
- Create login/logout components and hooks
- Implement protected route middleware
- Add user session state management
- Update navigation with user profile dropdown

Keep it concise, specific, and actionable. No body paragraphs.`,
            },
            {
              role: "user",
              content: `Generate a frontend commit message for this diff:\n\n${diff}`,
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      return NextResponse.json({ error: "API call failed" }, { status: 500 });
    }

    const result = await response.json();
    let message =
      result.choices?.[0]?.message?.content || "feat: update components";

    // Clean up message
    message = message
      .replace(/```[\s\S]*?```/g, "")
      .replace(/`([^`]*)`/g, "$1")
      .replace(/[^\w\s\(\):,.\n-]/g, "")
      .trim();

    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
