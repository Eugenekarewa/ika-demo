import * as bitcoin from 'bitcoinjs-lib';
import axios from 'axios';

export function deriveBTCAddress(pubkey: Uint8Array): string {
  const { address } = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(pubkey),
    network: bitcoin.networks.bitcoin,
  });
  return address!;
}

export async function fetchBTCBalance(address: string): Promise<number> {
  const url = `https://mempool.space/api/address/${address}`;
  const res = await axios.get(url);
  const stats = res.data.chain_stats;
  return stats.funded_txo_sum - stats.spent_txo_sum;
}
