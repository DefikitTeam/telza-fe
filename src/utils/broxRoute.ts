import { PublicKey, TransactionInstruction } from '@solana/web3.js'

const BX_MEMO_MARKER_MSG = 'Powered by bloXroute Trader Api'
const TRADER_API_MEMO_PROGRAM = 'HQ2UUt18uJqKaQFJhgV9zaTdQxUZjNrsKFgoEDquBkcx'

export function createTraderAPIMemoInstruction(msg: string): TransactionInstruction {
  if (msg == '') {
    msg = BX_MEMO_MARKER_MSG
  }
  return new TransactionInstruction({
    keys: [],
    programId: new PublicKey(TRADER_API_MEMO_PROGRAM),
    data: Buffer.from(msg)
  })
}
