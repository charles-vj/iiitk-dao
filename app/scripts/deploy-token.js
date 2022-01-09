import sdk from "./initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x9b05632eDddE6DDA5804e44B3d630Ce27FE85A7A");

(async () => {
  try {
    
    const tokenModule = await app.deployTokenModule({
      
      name: "IIITK-DAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "PPP",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();