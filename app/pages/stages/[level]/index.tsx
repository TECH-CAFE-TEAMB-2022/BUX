import { useState } from "react";
import TopNav from "../../../components/TopNav";
import { useRouter } from "next/router";
import { Layout } from "../../../components/layouts/Layout";
import SelectLevel from "../../../components/SelectLevel";
import { Container } from "@nextui-org/react";

const level = () => {
  return (
    <Layout>
      <Container display="flex" alignItems="center">
        <TopNav></TopNav>
        <SelectLevel />
      </Container>
    </Layout>
  );
};

export default level;
