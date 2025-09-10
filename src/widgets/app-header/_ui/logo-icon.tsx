import { HeaderLogo } from "@/shared/ui/header-logo";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <HeaderLogo className="h-6 w-6" />
      <span className="font-bold inline-block">Micro courses</span>
    </Link>
  );
}
