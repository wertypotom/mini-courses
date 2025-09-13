import { ToggleTheme } from "@/features/theme/toggle-theme";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo-icon";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";

type TAppHeaderProps = {
  variant: "private" | "public" | "auth";
};

export function AppHeader({ variant }: TAppHeaderProps) {
  const isAuthenticated = variant !== "auth";

  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isAuthenticated && <Profile />}
      actions={<ToggleTheme />}
    />
  );
}
