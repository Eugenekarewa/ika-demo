export async function signMessage(dwallet, msg: string): Promise<string> {
  const signature = await dwallet.signMessage(Buffer.from(msg));
  return Buffer.from(signature).toString('base64');
}
