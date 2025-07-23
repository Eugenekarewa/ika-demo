export default function WalletCard({ address, balance }: { address: string, balance: number }) {
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h3 className="text-lg">BTC Address</h3>
      <p className="text-sm text-yellow-400">{address}</p>
      <p className="mt-2">Balance: {balance / 1e8} BTC</p>
    </div>
  );
}
