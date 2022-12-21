import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { useSignOut } from "../../hooks/auth/useSignOut";
import { pagesPath } from "../../lib/$path";
import { User } from "../../types";
import { Box } from "./Box";

const dummyUser: User = {
  email: "zoey@example.com",
  name: "jon",
  imagePath: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  uid: "",
};

export const Header = () => {
  const { mutate: signOut } = useSignOut();
  const router = useRouter();
  const handleClickIcon = () => {
    router.push(pagesPath.$url());
  };
  const handleClickSignOut = () => {
    signOut();
    router.push(pagesPath.$url());
  };
  return (
    <Navbar>
      <Navbar.Brand onClick={handleClickIcon} css={{ cursor: "pointer" }}>
        <Text b color="inherit" hideIn="xs" css={{ fontSize: "$2xl" }}>
          BUX
        </Text>
      </Navbar.Brand>

      <Navbar.Content>
        <IconDropDown user={dummyUser} signOut={handleClickSignOut} />
      </Navbar.Content>
    </Navbar>
  );
};

type DropdownProps = {
  user: User;
  signOut: () => void;
};

const IconDropDown = ({ user, signOut }: DropdownProps) => {
  const handleAction = (key: React.Key) => {
    key === "singOut" && signOut();
  };
  return (
    <Dropdown placement="bottom-right">
      <Navbar.Item>
        <Dropdown.Trigger>
          <Avatar bordered as="button" color="secondary" size="md" src={user.imagePath} />
        </Dropdown.Trigger>
      </Navbar.Item>
      <Dropdown.Menu
        aria-label="User menu actions"
        color="secondary"
        onAction={(key) => handleAction(key)}
      >
        <Dropdown.Item key="profile" css={{ height: "$18" }}>
          <Text b color="inherit" css={{ d: "flex" }}>
            Signed in as
          </Text>
          <Text b color="inherit" css={{ d: "flex" }}>
            {user.email}
          </Text>
        </Dropdown.Item>
        <Dropdown.Item key="singOut" withDivider color="error">
          Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
