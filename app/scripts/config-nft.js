import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x78b7F7972AbFe583A3Ce2e4949637960913F8C35",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "IIITK-DAO NFT Vaporwave",
        description: "This NFT will give you access to IIITK-DAO!",
        image: readFileSync("scripts/assets/nft.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()