import { Avatar, Navbar, Spacer } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TopNav: NextPage = () => {
  const router = useRouter();
  const [active, setActive] = useState("");

  const handleClickAll = () => {
    setActive("all");
    router.push("/stages/all");
  };
  const handleClickEasy = () => {
    setActive("easy");
    router.push("/stages/easy");
  };
  const handleClickNormal = () => {
    setActive("normal");
    router.push("/stages/normal");
  };
  const handleClickHard = () => {
    setActive("hard");
    router.push("/stages/hard");
  };

  useEffect(() => {
    const level = typeof router.query.level === "string" ? router.query.level : null;
    setActive(level ? level : "");
  }, [router]);

  return (
    <Navbar isBordered variant="floating">
      <Spacer />
      <Navbar.Content
        activeColor="default"
        hideIn="xs"
        variant={"highlight-rounded"}
        gap="$15"
        enableCursorHighlight
      >
        <Navbar.Link onPress={handleClickAll} isActive={active == "all"}>
          ALL
        </Navbar.Link>
        <Navbar.Link onPress={handleClickEasy} isActive={active == "easy"}>
          EASY
        </Navbar.Link>
        <Navbar.Link onPress={handleClickNormal} isActive={active == "normal"}>
          NORMAL
        </Navbar.Link>
        <Navbar.Link onPress={handleClickHard} isActive={active == "hard"}>
          HARD
        </Navbar.Link>
      </Navbar.Content>
      <Spacer />
    </Navbar>
  );
};

export default TopNav;
