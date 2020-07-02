require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski story dash still assume hunt person equal gather'; 
let testAccounts = [
"0xa479bcb5e29c899bab66d1313516e1246f04530340b14833a0459695149fd814",
"0x2cdefca8bbb1fde5d8d2d08a6420fdc7c773fb8a896ed108da9f1cc61012599d",
"0x6af7088d5dbf3d9ccb09dbda4bea735ab99403bd5bcc539bb9095ef8069165bc",
"0xe6e11d050ac5b0a2cd50c8c57e3edc88ac3b838ee391372ae77346ec9c55dfa3",
"0xa24d7f9baf097db24c24dad7300d500bf190103af3577a9a448a7bce385ee178",
"0x325805a45554e29d690e0f476f4dc7b8f1b2968d8a120c4bdced697302a7beec",
"0xa241c7a19625c615551c1658b171aa5da4f3e4344f4c4e3cd0274bddfd7f8b3c",
"0x2a651e410e75e9df780beef8fff9f62d9e22d998ef6d174f75f0d0479bafdcfd",
"0xe7e1eb014e0842be52f6d57ad9490c80d09acde76ef47a8ea74154aaa97c09ca",
"0xb3c6c9160d6cfb9b969c9c4a304cec042451470403c39ba90db8925e89b55cc7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
