import { BigNumber } from 'bignumber.js'

type AnyNumber = string | number | BigNumber | undefined

export const removeTrailingZero = (_value: string | number) => {
  const value = String(_value)
  return value.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1')
  // return value.replace(/(\.0*|(?<=(\..*))0*)$/, '')
}

export const removeComma = (value: string) => {
  return value.replace(/,/g, '')
}

// expand amount to number of decimals: expandToNumDecimals('100', 18) => '100000000000000000000'
export const expandToNumDecimals = (amount: AnyNumber, decimals: number | string) => {
  try {
    const _powDecimal = new BigNumber(10).pow(Number(decimals || 1))
    const result = new BigNumber(amount || '0').mul(_powDecimal).toFormat()
    return removeComma(result)
  } catch (e) {
    return '0'
  }
}

// get amount buy number of decimals: shrinkToNumDecimals('100000000000000000000', 18) => '100'
export const shrinkToNumDecimals = (
  amount: string | number | BigNumber | undefined,
  decimals: number | string | undefined
) => {
  try {
    const _powDecimal = new BigNumber(10).pow(Number(decimals || 1))
    const result = new BigNumber(amount || '0').div(_powDecimal).toFormat()
    return removeComma(result)
  } catch (e) {
    return '0'
  }
}

// convert big number to string: bigNumberToString('100000000000000000000') => '100000000000000000000'
export const bigNumberToString = (amount: AnyNumber) => {
  try {
    const result = new BigNumber(amount || 0).toFormat()
    return removeTrailingZero(removeComma(result))
  } catch (e) {
    return '0'
  }
}

// format
export const formatAmount = (value: AnyNumber, toFixed = 5, isPrecision = true) => {
  try {
    const _valStr = `${value || 0}`
    const _val = new BigNumber(_valStr || '0')

    if (_val.lt(1) && isPrecision) {
      const _precision = _val.toPrecision(toFixed, BigNumber.ROUND_DOWN)
      return new BigNumber(_precision).toFormat()
    }

    if (toFixed) {
      return _val.toFormat(toFixed, BigNumber.ROUND_DOWN).replace(/\.?0+$/, '')
    }
    return _val.toFormat().replace(/\.?0+$/, '')
  } catch (e) {
    return '0'
  }
}

// Multiply with
export const multiplyWith = (
  amount: string | number | BigNumber | undefined,
  multiplier: string | number | BigNumber
) => {
  try {
    const result = new BigNumber(amount || '0').mul(multiplier).toFormat()
    return removeComma(result)
  } catch (e) {
    return '0'
  }
}
