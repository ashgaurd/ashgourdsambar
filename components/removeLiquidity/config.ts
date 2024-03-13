import {
  ENDPOINT as _ENDPOINT,
  Currency,
  LOOKUP_TABLE_CACHE,
  MAINNET_PROGRAM_ID,
  RAYDIUM_MAINNET,
  Token,
  TOKEN_PROGRAM_ID,
  TxVersion,
} from '@raydium-io/raydium-sdk';
import {
  Connection,
  Keypair,
  PublicKey,
} from '@solana/web3.js';
import base58 from 'bs58';

export const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=d9e80c44-bc75-4139-8cc7-084cefe506c7');

export const PROGRAMIDS = MAINNET_PROGRAM_ID;

export const ENDPOINT = _ENDPOINT;

export const RAYDIUM_MAINNET_API = RAYDIUM_MAINNET;

export const makeTxVersion = TxVersion.V0; // LEGACY

export const addLookupTableInfo = LOOKUP_TABLE_CACHE

export const DEFAULT_TOKEN = {
  'SOL': new Currency(9, 'USDC', 'USDC'),
  'WSOL': new Token(TOKEN_PROGRAM_ID, new PublicKey('So11111111111111111111111111111111111111112'), 9, 'WSOL', 'WSOL'),
  'USDC': new Token(TOKEN_PROGRAM_ID, new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'), 6, 'USDC', 'USDC'),
  'RAY': new Token(TOKEN_PROGRAM_ID, new PublicKey('8WsJDk89JMYEGoJCaU7zGfj3Cupq2pR2oKHZW3rUf6Qk'), 6, 'RAY', 'RAY'),
  'RAY_USDC-LP': new Token(TOKEN_PROGRAM_ID, new PublicKey('FGYXP4vBkMEtKhxrmEBcWN8VNmXX8qNgEJpENKDETZ4Y'), 6, 'RAY-USDC', 'RAY-USDC'),
}


export const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIxZTYwQ2VlQjc5YTlmZTFFQzM1NjhBZkEwMDNFM2Q1MmVCODU4YWQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwODc5MTgyMTg2MiwibmFtZSI6Ik1pbnRlclRva2VuIn0.6h3W2Y9X0WYEioBZhA0va-TqYBT95O48hfxT-y6Fi6I';


// define these
export const blockEngineUrl = 'tokyo.mainnet.block-engine.jito.wtf';
// const jito_auth_private_key = "aaaaaaaaaaaaaaaa";
// const wallet_2_pay_jito_fees = "aaaaaaaaaaaaaaaa";


const LP_wallet_private_key = "aaaaaaaaaaaaaaaa";

// const swap_wallet_private_key = "aaaaaaaaaaaaaaaa";

export const rpc_https_url = "https://mainnet.helius-rpc.com/?api-key=d9e80c44-bc75-4139-8cc7-084cefe506c7";


// export const market_id = new PublicKey("aaaaaaaaaaaaaaaaaaag6snCe2iUR3A");
export const input_baseMint_tokens_percentage = 1; //ABC-Mint amount of tokens you want to add in Lp e.g. 1% = 100%. 0.9= 90%
export const delay_pool_open_time = Number(0); //dont change it because then you wont be able to perform swap in bundle.
export const quote_Mint_amount = 0.5; //COIN-SOL, amount of SOL u want to add to Pool amount

// remove lp:
export const LP_remove_tokens_percentage = 1; //ABC-Mint amount of tokens in Lp that you want to remove e.g. 1% = 100%. 0.9= 90%
export const LP_remove_tokens_take_profit_at_sol = 2; //I want to remove all lp when sol reached 2 SOL



// swap info:
export const swap_sol_amount = 0.5; //Amount of SOl u want to invest
export const sell_swap_tokens_percentage = 0.5; // % of tokens u want to sell=> 1 means 100%
export const sell_swap_take_profit_ratio = 2; // take profit e.g. 2x 3x

// swap sell and remove lp fees in lamports.
export const sell_remove_fees = 5000000;


// ignore these
export const jito_auth_keypair = Keypair.fromSecretKey(new Uint8Array([198, 214, 173, 4, 113, 67, 147, 103, 75, 216, 80, 150, 174, 158, 63, 61, 10, 228, 165, 151, 189, 0, 34, 29, 24, 166, 40, 136, 166, 58, 116, 242, 35, 218, 175, 128, 50, 244, 240, 13, 176, 112, 152, 243, 132, 142, 93, 20, 112, 225, 9, 103, 175, 8, 161, 234, 247, 176, 242, 78, 131, 96, 57, 100]));
// export const wallet_2_pay_jito_fees_keypair = Keypair.fromSecretKey(new Uint8Array(bs58.decode(wallet_2_pay_jito_fees)));

// export const LP_wallet_keypair = Keypair.fromSecretKey(new Uint8Array(bs58.decode(LP_wallet_private_key)));
// export const swap_wallet_keypair = Keypair.fromSecretKey(new Uint8Array(bs58.decode(swap_wallet_private_key)));

export function LP_wallet_keypair() {
  return Keypair.fromSecretKey(new Uint8Array(base58.decode(LP_wallet_private_key)));
}

export const lookupTableCache = {}


// const [formData, setFormData] = useState({
//   tokenName: "",
//   tokenSymbol: "",
//   tokenDescription: "",
//   iconUrl: "",
//   websiteUrl: "",
//   twitterUrl: "",
//   telegramUrl: "",
//   discordUrl: "",
//   tokenDecimals: "",
//   supply: "",
//   uploadedImage: uploadedImage,
//   freezeAuthority: false,
//   revokeMintAuthority: false,
//   revokeMetadataUpdateAuthority: false
// });


export interface tokenData {
  tokenName: string;
  tokenSymbol: string;
  tokenDescription: string;
  iconUrl: string;
  websiteUrl: string;
  twitterUrl: string;
  telegramUrl: string;
  discordUrl: string;
  tokenDecimals: string;
  supply: string;
  uploadedImage: string | null;
  freezeAuthority: boolean;
  revokeMintAuthority: boolean;
  revokeMetadataUpdateAuthority: boolean;
}