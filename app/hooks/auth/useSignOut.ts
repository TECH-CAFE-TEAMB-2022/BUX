import { useAuthSignOut } from "@react-query-firebase/auth";
import { auth } from "../../plugins/firebaes/client";

export const useSignOut = () => {
  return useAuthSignOut(auth);
};
