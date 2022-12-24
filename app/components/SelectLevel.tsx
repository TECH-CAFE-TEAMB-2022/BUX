import { Button, Card, Grid, Link, Text } from "@nextui-org/react";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MoldQuestion, MoldQuestions, Questions } from "../types/question";
import { Box } from "./commons/Box";
import { Image } from "@nextui-org/react";

const dummy: Questions = require("../data/dummy.json");

export const mold = (): MoldQuestions => {
  const obj: MoldQuestions = [];
  for (const [id, value] of Object.entries(dummy)) {
    obj.push({ id: Number(id), value });
  }
  return obj;
};

const SelectLevel = () => {
  const router = useRouter();
  const [active, setActive] = useState("");
  const dummyData = mold();

  const MockItem = ({ question }: { question: MoldQuestion }) => {
    return (
      <Card
        css={{ textAlign: "center" }}
        isPressable
        isHoverable
        onClick={() => {
          router.push(`/stages/${question.value.level}/${question.id}`);
        }}
      >
        <Card.Body css={{ h: "100%", justifyContent: "center" }}>
          <Image
            width={400}
            height={240}
            src={question.value.imagePath}
            alt={question.value.displayName}
            objectFit="cover"
            css={{ border: "1px solid #ddd" }}
          ></Image>

          <Text h6 size={15} css={{ pt: 12, width: "100%", textAlign: "center", marginBottom: 0 }}>
            {question.value.displayName}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  useEffect(() => {
    const level = typeof router.query.level === "string" ? router.query.level : null;
    setActive(level ? level : "");
  }, [router]);

  // クライアントが読み込まれたときに実行
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <Box css={{ maxW: "100" }}>
      <Grid.Container
        gap={2}
        justify="flex-start"
        // css={{ margin: "0 42px", width: "calc(100% - 84px)", maxWidth: "100%" }}
      >
        {dummyData.map((obj) =>
          obj.value.level === active ? (
            <Grid key={obj.id}>
              <MockItem question={obj} />
            </Grid>
          ) : active === "all" ? (
            <Grid key={obj.id}>
              <MockItem question={obj} />
            </Grid>
          ) : null,
        )}
      </Grid.Container>
    </Box>
  );
};

export default SelectLevel;
