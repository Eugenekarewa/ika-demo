import { useState } from 'react';

export default function SignatureBox({ onSign }: { onSign: (msg: string) => Promise<string> }) {
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');

  const handleSign = async () => {
    const sig = await onSign(message);
    setSignature(sig);
  };

  return (
    <div className="mt-4">
      <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" className="p-2 border w-full" />
      <button onClick={handleSign} className="mt-2 bg-green-600 text-white px-4 py-1 rounded">
        Sign
      </button>
      {signature && <pre className="text-xs mt-2 break-all">{signature}</pre>}
    </div>
  );
}
