import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x78d7154A5ffa41240D1957ee39ceCA1B5080A966");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      
      name: "iiitk-dao membership",
      
      description: "A DAO for students of IIITK.",
      
      image: readFileSync("scripts/assets/nft.jpeg"),

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