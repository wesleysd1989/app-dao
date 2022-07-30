import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x414Af5A79cf1dABF6551Cd021a841A34FA7FB692"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Bronze membership",
        description: "Esse NFT vai te dar acesso ao DONATEDAO!",
        image: readFileSync("scripts/assets/member.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})();
