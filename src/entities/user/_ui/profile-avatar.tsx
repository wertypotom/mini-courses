import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { ProfileEntity } from "../_domain/types";
import { cn } from "@/shared/lib/utils";
import { getProfileLetters } from "../_vm/get-profile-letters";

export const ProfileAvatar = ({
  profile,
  className,
}: {
  profile?: ProfileEntity;
  className?: string;
}) => {
  if (!profile) {
    return null;
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={profile.image ?? ""} className="object-cover" />
      <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback>
    </Avatar>
  );
};
