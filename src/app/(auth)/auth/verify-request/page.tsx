import { Card, CardContent, CardHeader } from "@/shared/ui/card";

export default function VerifyRequestPage() {
  return (
    <>
      <div className="container relative  flex-col items-center justify-center self-center pt-24">
        <Card className="max-w-[350px] mx-auto">
          <CardHeader className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Check your mail box
            </h1>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="px-0 text-center text-sm text-muted-foreground">
              Authorization ling has been sent to your email address
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
