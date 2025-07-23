import { useEffect, useState } from 'react';
import { loadOrCreateKeypair } from '../ika/loadOrCreateKeypair';
import { initDWallet } from '../ika/dwalletclient';
import { deriveBTCAddress, fetchBTCBalance } from '../utils/btc';
import SignatureBox from '../components/SignatureBox';
import WalletCard from '../components/WalletCard';
import { useSession } from '../auth/useSession';

export default function Dashboard() {
  const { logout } = useSession();
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);
  const [dwallet, setDwallet] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const kp = loadOrCreateKeypair();
      const { client, publicKey } = await initDWallet(kp);
      setDwallet(client);

      // publicKey is Uint8Array, so pass directly
      const btcAddress = deriveBTCAddress(publicKey as unknown as Uint8Array);
      setAddress(btcAddress);

      const bal = await fetchBTCBalance(btcAddress);
      setBalance(bal);
    })();
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl mb-4">IKA Wallet Dashboard</h1>
      <button
        onClick={() => logout()}
        className="mb-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
      <WalletCard address={address} balance={balance} />
      <SignatureBox onSign={(msg) => dwallet && dwallet.signMessage(Buffer.from(msg)).then(sig => Buffer.from(sig).toString('base64'))} />
    </div>
  );
}
