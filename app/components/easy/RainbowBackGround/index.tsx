import { Button, Card, Container, Image, Link, Navbar, Row, Text } from "@nextui-org/react";

const RainbowBackGround = () => {
  return (
    <Container
      css={{
        // background:
        //   "linear-gradient(to right,#c70000,#d28300,#dfd000,#00873c,#005aa0,#181878,#800073)",
        // padding: "50px",
        // h: "100%",
        // minHeight: "100vh",
        // minWidth: "100vw",
        margin: 0,
        padding: 0,
      }}
      fluid
    >
      <Card css={{ $$cardColor: "#fff", h: "100%", minHeight: "100vh", minWidth: "100vw" }}>
        <Card.Header>
          <Text h6 size={40} color="brack" css={{ m: 0 }}>
            マイ食べ歩き録
          </Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body
          css={{
            width: "80%",
            margin: "0 auto",
            padding: "0",
            background:
              "linear-gradient(to right,#c70000,#d28300,#dfd000,#00873c,#005aa0,#181878,#800073)",
          }}
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
          <Text h6 size={300} color="brack" css={{ m: 0 }}>
            お店一覧
          </Text>

          <Text h2>麺処からすみ</Text>
          <Image
            width={640}
            height={320}
            objectFit="contain"
            src={"/imgs/ramen1.jpg"}
            alt="塩ラーメン"
          />
          <Text h4>
            続きは<span style={{ textDecoration: "underline" }}>こちら</span>
          </Text>

          <Text h2>らぁめん亭</Text>
          <Image
            width={1280}
            height={320}
            objectFit="fill"
            src={"/imgs/ramen2.jpg"}
            alt="塩ラーメン"
          />
          <Text h4>
            続きは<span style={{ textDecoration: "underline" }}>こちら</span>
          </Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RainbowBackGround;
