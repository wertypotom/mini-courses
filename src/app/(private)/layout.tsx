import AuthorizedGuard from "@/features/auth/auth-guard";
import { AppHeader } from "@/widgets/app-header/app-header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant="private" />
      <AuthorizedGuard>{children}</AuthorizedGuard>
    </>
  );
}
