import React from "react";
import { Box } from "../../commons/Box";
import { Text } from "@nextui-org/react";
export const RuleBody = () => {
  const titleList = [
    "第1条(適用)",
    "第2条(利用登録)",
    "第3条(ユーザーID及びパスワードの管理)",
    "第4条(禁止事項)",
    "第5条(本サービスの提供の停止等)",
    "第6条(利用制限および登録抹消)",
    "第7条(退会)",
    "第8条(保証の否認および免責事項)",
    "第9条(サービス内容の変更等)",
    "第10条(利用規約の変更)",
    "第11条(個人情報の取扱い)",
    "第12条(通知または連絡)",
    "第13条(権利義務の譲渡の禁止)",
    "第14条(準拠法)",
  ];

  return (
    <Box>
      {titleList.map((title) => {
        return (
          <>
            <Text h2 css={{ fontSize: 18 }}>
              {title}
            </Text>
            <Text>
              本規約は、登録ユーザーと当社の間における、本サービスの利用につき生じるすべての法律関係に適用されます。登録ユーザーは本規約に同意のうえ本サービスを利用するものとします。
              登録ユーザーが本アカウントの登録を行った場合、本規約に同意したものとみなします。
              当社は、次の各号のいずれかに該当する場合、登録ユーザーの承諾を得ることなく本規約の内容を変更（追加を含む）できるものとします。
              本規約の変更が、登録ユーザーの一般の利益に適合するとき。
              本規約の変更が、登録ユーザーが本サービスの利用登録をした目的に反せず、かつ、変更の必要性、変更後の内容の相当性、変更の内容その他の変更に係る事情に照らして合理的なものであるとき。
            </Text>
          </>
        );
      })}
    </Box>
  );
};
