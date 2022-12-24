import {
  Button,
  Card,
  Container,
  Image,
  Link,
  Navbar,
  Row,
  Text,
  Grid,
  Popover,
} from "@nextui-org/react";
import { Game } from "../../../types";
import { AnswerPop } from "../../commons/AnswerPop";
import { GameNav } from "../../commons/GameNav";

const RainbowBackGround = ({
  currentLife,
  currentAnswer,
  handleClickAnswer,
  questionNum,
  setShowAnswer,
  showAnswer,
}: Game) => {
  const handleClickText = (e: React.MouseEvent<unknown, MouseEvent>) => {
    handleClickAnswer(e, 2);
    e.stopPropagation();
  };
  return (
    <>
      <Grid.Container justify="center">
        <GameNav
          questionNum={questionNum}
          currentLife={currentLife}
          currentAnswer={currentAnswer}
          setShowAnswer={setShowAnswer}
          showAnswer={showAnswer}
        />

        <Card

          css={{
            $$cardColor: "#fff",
            h: "100%",
            minHeight: "100vh",
            minWidth: "100vw",
            alignItems: "center",
          }}
        >
          <Card.Header>
            <Text h6 size={40} color="brack" css={{ m: 0 }}>
              マイ食べ歩き録
            </Text>
          </Card.Header>
          <Card.Divider />
          <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
            <Popover.Trigger>
              <Card.Body
                css={{
                  width: "80%",
                  padding: "0",
                  background:
                    "linear-gradient(to right,#c70000,#d28300,#dfd000,#00873c,#005aa0,#181878,#800073)",
                }}
                onClick={(e) => handleClickAnswer(e, 1)}
              >
                <Navbar isBordered variant="static">
                  <Navbar.Content hideIn="xs">
                    <Navbar.Link>TOP</Navbar.Link>

                    <Navbar.Link isActive>お店一覧</Navbar.Link>

                    <Navbar.Link>Profile</Navbar.Link>
                    <Navbar.Link>コンタクト</Navbar.Link>
                  </Navbar.Content>
                </Navbar>
                <Text h6 size={20} color="brack" css={{ m: 0 }}>
                  おいしかったお店を50音順に紹介していきます。
                </Text>
                <Popover
                  placement="top"
                  isDismissable={false}
                  isOpen={showAnswer ? true : undefined}
                >
                  <Popover.Trigger>
                    <Text
                      h6
                      size={300}
                      color="brack"
                      css={{ m: 0 }}
                      onClick={(e) => handleClickAnswer(e, 2)}
                    >
                      お店一覧
                    </Text>
                  </Popover.Trigger>
                  <AnswerPop showAnswer={showAnswer} questionNum={2}/>
                </Popover>

                <Text h2>麺処からすみ</Text>
                <Image
                  width={640}
                  height={320}
                  objectFit="contain"
                  src={"/imgs/ramen1.jpg"}
                  alt="塩ラーメン"
                />
               <Popover
                  placement="left"
                  isDismissable={false}
                  isOpen={showAnswer ? true : undefined}
                >
                  <Popover.Trigger>
                    <Text h4 onClick={(e) => handleClickAnswer(e, 4)}>
                      続きは<span style={{ textDecoration: "underline" }}>こちら</span>
                    </Text>
                  </Popover.Trigger>
                  <AnswerPop showAnswer={showAnswer} />
                </Popover>

                <Text h2>らぁめん亭</Text>
                <Popover
                  placement="left"
                  isDismissable={false}
                  isOpen={showAnswer ? true : undefined}
                >
                  <Popover.Trigger>
                    <Image
                      width={1280}
                      height={320}
                      objectFit="fill"
                      src={"/imgs/ramen2.jpg"}
                      alt="塩ラーメン"
                      onClick={(e) => handleClickAnswer(e, 3)}
                    />
                  </Popover.Trigger>
                  <AnswerPop showAnswer={showAnswer} />
                </Popover>
                <Popover
                  placement="left"
                  isDismissable={false}
                  isOpen={showAnswer ? true : undefined}
                >
                  <Popover.Trigger>
                    <Text h4 onClick={(e) => handleClickAnswer(e, 4)}>
                      続きは<span style={{ textDecoration: "underline" }}>こちら</span>
                    </Text>
                  </Popover.Trigger>
                  <AnswerPop showAnswer={showAnswer} />
                </Popover>
              </Card.Body>
            </Popover.Trigger>
            <AnswerPop showAnswer={showAnswer} />
          </Popover>
        </Card>
      </Grid.Container>
    </>
  );
};

export default RainbowBackGround;
