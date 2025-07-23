declare module '@dwallet-network/dwallet.js' {
  export class Ed25519Keypair {
    static fromSecretKey(secretKey: Uint8Array): Ed25519Keypair;
    static generate(): Ed25519Keypair;
    getSecretKey(): Uint8Array;
    getPublicKey(): Uint8Array;
  }

  export interface DWalletClientConfig {
    url: string;
  }

  export class DWalletClient {
    constructor(config: DWalletClientConfig);
  }
}
