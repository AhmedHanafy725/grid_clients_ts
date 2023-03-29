import { env } from "process";

import { NetworkEnv } from "../../src/config";
import config from ".././config.json";
import { getClient } from "../client_loader";

async function main() {
    let network;
    if (env.NETWORK) {
        network = env.NETWORK as NetworkEnv;
    } else {
        network = config.network as NetworkEnv;
    }
    const grid3 = await getClient();
    const relay = grid3.getDefaultUrls(network).relay.slice(6);
    const res = await grid3.tfchain.create({
        relay: relay,
        name: "newacc",
    });
    console.log(res);
    await grid3.disconnect();
}

main();
