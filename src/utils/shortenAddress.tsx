const TRUNCATED_NAME_CHAR_LIMIT = 11
const TRUNCATED_ADDRESS_START_CHARS = 5
const TRUNCATED_ADDRESS_END_CHARS = 4

export const shortenAddress = (
  _address = '',
  from = TRUNCATED_ADDRESS_START_CHARS,
  to = TRUNCATED_ADDRESS_END_CHARS,
  limit = TRUNCATED_NAME_CHAR_LIMIT
) => {
  const address = _address || ''
  if (address?.length < limit) {
    return address
  }

  return `${address.slice(0, from)}...${address.slice(-to)}`
}
