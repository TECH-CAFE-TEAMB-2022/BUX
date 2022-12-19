import { useAuthSignInWithPopup } from "@react-query-firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../plugins/firebaes/client";

export const useSignInWithGoogle = () => {
  const mutation = useAuthSignInWithPopup(auth);

  return {
    ...mutation,
    mutate: mutation.mutate({
      provider: new GoogleAuthProvider(),
    }),
  } as const;
};
