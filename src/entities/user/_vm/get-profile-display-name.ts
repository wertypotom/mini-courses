import { ProfileEntity } from "../_domain/types";

export const getProfileDisplayName = (profile: ProfileEntity) => {
  return profile.name ? profile.name : profile.email;
};
