import { getClient } from "./client_loader";
import { log } from "./utils";

async function main() {
    const grid3 = await getClient();
    const nodeId = 7;
    const contractId = 2766;
    try {
        log(await grid3.zos.pingNode({ nodeId }));
    } catch (e) {
        log(`Couldn't ping node ${nodeId} due to ${e}`);
    }
    try {
        log(await grid3.zos.getDeployment({ contractId }));
    } catch (e) {
        log(`Couldn't get deployment with contractId ${contractId} due to ${e}`);
    }
    try {
        log(await grid3.zos.hasPublicIPv6({ nodeId }));
    } catch (e) {
        log(`Couldn't reach node ${nodeId} due to ${e}`);
    }

    try {
        log(await grid3.zos.listNetworkInterfaces({ nodeId }));
    } catch (e) {
        log(`Couldn't reach node ${nodeId} due to ${e}`);
    }

    try {
        log(await grid3.zos.listNetworkPublicIPs({ nodeId }));
    } catch (e) {
        log(`Couldn't reach node ${nodeId} due to ${e}`);
    }
    try {
        log(await grid3.zos.getNetworkPublicConfig({ nodeId }));
    } catch (e) {
        log(`Couldn't reach node ${nodeId} due to ${e}`);
    }
    await grid3.disconnect();
}

main();
