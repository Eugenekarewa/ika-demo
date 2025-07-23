import { DWalletClient } from '@dwallet-network/dwallet.js/client';
import { Ed25519Keypair } from '@dwallet-network/dwallet.js/keypairs/ed25519';

export async function initDWallet(keypair: Ed25519Keypair) {
  const client = new DWalletClient({
    url: 'https://devnet.api.ika.xyz',
  });

  const publicKey = keypair.getPublicKey();

  return { client, publicKey };
}
