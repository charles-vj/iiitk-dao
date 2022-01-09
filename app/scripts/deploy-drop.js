import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";
import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x9b05632eDddE6DDA5804e44B3d630Ce27FE85A7A");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      
      name: "iiitk-dao membership",
      
      description: "A DAO for students of IIITK.",
      
      image: readFileSync("scripts/assets/nft.jpg"),

      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()