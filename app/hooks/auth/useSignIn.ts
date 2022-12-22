import { useAuthSignInWithPopup } from "@react-query-firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useCallback } from "react";
import { MutateOptions, UseQueryOptions } from "react-query";
import { auth } from "../../plugins/firebaes/client";

export const useSignInWithGoogle = () => {
  const mutation = useAuthSignInWithPopup(auth);
  const signIn = useCallback((options?: UseQueryOptions) => {
    mutation.mutate(
      {
        provider: new GoogleAuthProvider(),
      },
      { ...options },
    );
  }, []);
  return {
    ...mutation,
    mutate: signIn,
  } as const;
};
