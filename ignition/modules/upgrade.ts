import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


export default buildModule("implementationDeployment", (m) => {

    const owner = m.getAccount(0);

    // Deploy the implementation contract
    const newImplementation = m.contract(
        "Implementation_v2"
    );
    
    // Will need to encode the function call 
    // Create the initialization data
    const initData = m.encodeFunctionCall(
      newImplementation, 
        "initialize", 
        [owner,"0x8E639e937A81c8249c1E19d1357E7d0ec8965498"]
    );

    const proxyAdmin = m.contractAt("ProxyAdmin", "0x16c92E48DeCeeD38e57349d450E689A2EDE0aAb9");
    const proxy = m.contractAt("TransparentUpgradeableProxy", "0x4BC64B0894201d5f3835C0Cf126EddDb17d5AE14");
    
    m.call(
      proxyAdmin,
      "upgradeAndCall",
      [
          proxy,
          newImplementation,
          initData
      ],
      {
          from: owner,
      }
  );

    return {
    };
});