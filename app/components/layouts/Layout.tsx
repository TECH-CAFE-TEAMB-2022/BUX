import { ReactNode } from "react";
import { Box } from "../commons/Box";
import { Header } from "../commons/Header";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    <Header />
    {children}
  </Box>
);
