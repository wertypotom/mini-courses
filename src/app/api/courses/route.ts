import { NextResponse } from "next/server";
import { dbClient } from "@/shared/lib/dbClient";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const courses = await dbClient.course.findMany();

    console.log("Courses ", courses);
    return NextResponse.json({ courses });
  } catch (e) {
    console.error("GET /api/courses error:", e);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 },
    );
  }
}
