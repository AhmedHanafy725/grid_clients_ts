import { env } from "process";

import { GridClient } from "../src";
import { NetworkEnv } from "../src/config";
import config from "./config.json";
import { log } from "./utils";

async function main() {
    let network;

    if (env.NETWORK) {
        network = env.NETWORK as NetworkEnv;
    } else {
        network = config.network as NetworkEnv;
    }

    const client = new GridClient({ mnemonic: "", network, storeSecret: "test" });
    client._connect();

    const urls = client.getDefaultUrls(network);
    const relay = urls.relay.slice(6);

    const createdAccount = await client.tfchain.createAccount(relay);
    log(createdAccount);
    client.disconnect();
}

main();
