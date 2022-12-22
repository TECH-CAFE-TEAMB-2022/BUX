import { useState } from "react";
import TopNav from "../../../components/TopNav";
import { useRouter } from "next/router";
import { Layout } from "../../../components/layouts/Layout";
import SelectLevel from "../../../components/SelectLevel";

const level = () => {
  return (
    <Layout>
      <TopNav></TopNav>
      <SelectLevel />
    </Layout>
  );
};

export default level;
