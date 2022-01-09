import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x15B5230a6b8A46C4472EdF3001b1645A1FdC42e6",
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