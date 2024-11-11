import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


export default buildModule("implementationDeployment", (m) => {

    const owner = m.getAccount(0);

    // Deploy the implementation contract
    const implementation = m.contract(
        "Implementation_v1"
    );
    
    // Will need to encode the function call 
    // Create the initialization data
    const initData = m.encodeFunctionCall(
        implementation, 
        "initialize", 
        [owner]
    );

    // Deploy the TransparentUpgradeableProxy contract
    const proxy = m.contract("TransparentUpgradeableProxy", [
        implementation,
        owner,
        initData
    ]);

    // Get the ProxyAdmin address
    const proxyAdminAddress = m.readEventArgument(
        proxy,
        "AdminChanged",
        "newAdmin"
    );

    // Deploy the ProxyAdmin contract with unique ID
    m.contractAt("ProxyAdmin", proxyAdminAddress);


    return {};
});