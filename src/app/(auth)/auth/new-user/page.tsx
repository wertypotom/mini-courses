import { Separator } from "@/shared/ui/separator";

export default async function NewUserPage() {
  return (
    <main className="space-y-6 py-14 container  max-w-[600px]">
      <div>
        <h3 className="text-lg font-medium">Almost there !</h3>
        <p className="text-sm text-muted-foreground">
          Update your profile so users can see you.
        </p>
      </div>
      <Separator />
    </main>
  );
}
