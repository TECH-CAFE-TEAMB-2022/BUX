import { Grid, Card, Text, Spacer } from "@nextui-org/react";
import { SP } from "next/dist/shared/lib/utils";
import React from "react";

type Props={
    src:string,
    title:string,
    text:string
}
export const AnswerBody = ({src,title,text}:Props) => {
  return (
    <Grid.Container direction="row" gap={2} justify="space-evenly" css={{ overflow: "hidden" }} alignItems={"center"}>
      <Grid>
        <Card css={{ width: "100%", height: "100%" }}>
          <Card.Image
            src={src}
            objectFit="cover"
            width="100%"
            height="500px"
            alt="Card image background"
          />
        </Card>
      </Grid>
      <Grid css={{ maxWidth: "50%" }}>
        <Text b size={25}>
         {title}
        </Text>
        <Spacer y={2} />
        <Text>
          {text}
        </Text>
      </Grid>
    </Grid.Container>
  );
};