import { useAuthUser } from "@react-query-firebase/auth";
import { onAuthStateChanged, User as UserRes } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../plugins/firebaes/client";
import { User } from "../../types";
import { useDidUpdateEffect } from "../useDidUpdateEffect";

export const useAuth = () => {
  const currentUser = auth.currentUser;
  const [user, setUser] = useState<User | undefined>();

  useDidUpdateEffect(() => {
    if (!currentUser) return;
    setUser(convert(currentUser));
  }, [currentUser]);

  return { user, isLoading: true } as const;
};

const convert = (res: UserRes): User => {
  return {
    uid: res.uid,
    imagePath: res.photoURL || undefined,
    email: res.email || undefined,
    name: res.displayName || undefined,
  };
};
