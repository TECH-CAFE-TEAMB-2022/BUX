import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../hooks/auth/useAuth";
import { useSignOut } from "../../hooks/auth/useSignOut";
import { pagesPath } from "../../lib/$path";
import { User } from "../../types";

export const Header = () => {
  const { user, isLoading } = useAuth();
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
        {user && <IconDropDown user={user} signOut={handleClickSignOut} />}
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
            {user.name}
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
