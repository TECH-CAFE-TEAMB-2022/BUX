import { useAuthUser } from "@react-query-firebase/auth";
import { User as UserRes } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../plugins/firebaes/client";
import { User } from "../../types";
import { useDidUpdateEffect } from "../useDidUpdateEffect";

export const useAuth = () => {
  const { data: userRes, isLoading } = useAuthUser(["user"], auth);

  const [user, setUser] = useState<User | undefined>();

  useDidUpdateEffect(() => {
    if (!userRes) return;
    setUser(convert(userRes));
  }, [userRes]);

  return { user, isLoading } as const;
};

const convert = (res: UserRes): User => {
  return {
    uid: res.uid,
    imagePath: res.photoURL || undefined,
    email: res.email || undefined,
    name: res.displayName || undefined,
  };
};
