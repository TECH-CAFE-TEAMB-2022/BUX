import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { Stages } from "../../../components/Stages";

const Main:NextPage = () => {
  const router = useRouter();
  const { level, id } = router.query;

  if (!level || !id) return null;
  return <Stages level={String(level)} id={Number(id)} />;
};

export default Main;
