import { useAppSession } from "./use-app-sesion";

export const useRole = () => {
  const session = useAppSession();
  return session?.data?.user?.role;
};
