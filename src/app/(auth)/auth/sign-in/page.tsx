import { SignInForm } from "@/features/auth/sign-in-form.server";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import Link from "next/link";

export default function AuthenticationPage() {
  return (
    <>
      {" "}
      <div className="container relative  flex-col items-center justify-center self-center pt-24">
        <Card className="max-w-[350px] mx-auto">
          <CardHeader className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Log in</h1>
          </CardHeader>
          <CardContent className="grid gap-4">
            <SignInForm />
            <p className="px-0 text-center text-sm text-muted-foreground">
              Pressing continue you are agreeing with{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                User agreement
              </Link>{" "}
              an{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Policy of confidentiality
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
