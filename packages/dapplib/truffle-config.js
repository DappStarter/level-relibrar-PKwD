require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hockey close off success strong crawl random clump include argue metal gasp'; 
let testAccounts = [
"0x272e073eecfec310f32e2e949414043506f35b914f38cc6037e3441f39f12d7b",
"0xd017661eb899c202d34e4222e3e598ff91be1a414ba93e538f15893bade974fb",
"0xe8642f63cff079c5affe35d99d54ed4b1e1be85f231ba7ee3715a7273c51c402",
"0x73d928045d4050ca58f03624b298a816a6dc66ba6389032885cfb5d083f20330",
"0x3471bc75e8d2da46b1d87244b8698c2a5d858c624b3e97dbc581bad6f06130d2",
"0xc6c3d7ffdeae82349cde7cc74f9bfead73a709b92f4715f10984340ed775a894",
"0x53d53b26943a96bb79955aba8fc4f6086ce9af33ae579c8fcc6f40debf3d1d38",
"0x65ba1e4b5a2fcb0f8f217adc11ef66e31fffbde9289dc6a73c60172b5882ae89",
"0x2ba4768f5e16c54b8ed3e642c64e83e3818337fa2891bfd8fc890d6f8cb0a305",
"0x7610aef439243873bebd232361716010acc15c3072760d9b7562b4054c03cf4f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


