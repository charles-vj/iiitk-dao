import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const tokenModule = sdk.getTokenModule(
  "0x30369105cf4D364c244bB6C578352F34c61EbFFa",
);

(async () => {
  try {
    const amount = 1_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();
    
    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$PPP in circulation",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();