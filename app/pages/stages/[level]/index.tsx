import { useState } from "react";
import TopNav from "../../../components/TopNav";
import { useRouter } from "next/router";
import { Layout } from "../../../components/layouts/Layout";

const level = () => {
  return (
    <Layout>
      <TopNav></TopNav>;
    </Layout>
  );
};

export default level;
