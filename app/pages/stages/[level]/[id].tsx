import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { Stages } from "../../../components/pages/stages/level/Stages";

const Main: NextPage = () => {
  const router = useRouter();
  const { level, id } = router.query;
  if (!id) return null;
  return <Stages id={Number(id)} />;
};

export default Main;
