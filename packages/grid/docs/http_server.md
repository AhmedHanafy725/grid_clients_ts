# Http server

Http server is an express http server that exposes the functionality of the grid3 client over http requests.

## Configuration

Add substrate url and account's mnemonics in `config.json` in [server directory](../src/server/config.json) before running the server. [see](./test_setup.md#create-twin)

```json
{
    "network": "<network environment dev, qa or test>",
    "mnemonic": "<your account mnemonics>",
    "storeSecret": "secret", // secret used for encrypting/decrypting the values in tfkvStore
    "keypairType": "sr25519" // keypair type for the account created on substrate
}
```

You can also use another configuration file by using `--config` or `-c` option.

````bash
 yarn http_server -c pathToConfigFile.json
 # or 
 yarn http_server --config pathToConfigFile.json
````

## Life cycle

- User from the outside sends an http post request(with payload) to the HTTP server.
- Http server checks if there is a post request that its endpoint is registered on the express http server.
- If this endpoint is registered, the http server will pick up this post request.
- Http server starts to execute it using the Grid3 client.
- After finishing the execution, the Http server puts the result back to the user once it's ready.

## Running

```bash
npm run http_server
```

or

```bash
yarn run http_server
```

## Usage

This is an example of getting a twin.
Put the following content in a file `test_twin.ts`

```ts
import axios from "axios";

async function main() {
    const payload = { 'id': 1 }
    axios
      .post("http://localhost:3000/twins/get", payload)
      .then(function (response: any) {
          console.log(response);
      })
      .catch(function (error: any) {
          console.log(error.response.data);
    });
}
main()
```

And then run this file by `yarn run ts-node test_twin.ts`

see more examples in [modules](./module.md)
