import rpcApi from '@/api/helper/rpc'
import { RPC_CONFIG, RPC_CONFIG_WS } from '@/constant/rpcConfigg'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'

import BigNumber from 'bignumber.js'

export const defaultEndpoint = RPC_CONFIG
export const defaultWsEndpoint = RPC_CONFIG_WS
export const defaultPriorityFee: number = 0.015
export const MICRO_LAMPORTS_PER_LAMPORTS = 1000000
export const MINIMUM_TRANSACTION_FEE_IN_SOL = 0.000005 // Only 1 signature, and fee per signature is 5000 lamports
export const DEFAULT_SLIPPAGE = 2
export const SOL_ADDRESS = '11111111111111111111111111111111'


type IState = {
  balance: number
  balanceMax: number
  rpcNodeUrl: string
  wsNodeUrl: string
  connected: boolean
  slippage: number | string
  priorityFee: number
  isAutoSlippge: boolean
  wallet: string | null
  frontRunProtect: boolean
}

export const fetchBalance = createAsyncThunk('app/fetchBalance', async (address: string) => {
  try {
    const response = await rpcApi.getBalance(address)
    if (response) {
      let balance = response?.result?.value || 0
      let balanceBig = new BigNumber(balance).div(LAMPORTS_PER_SOL)
      let balanceMax = balanceBig.gt(defaultPriorityFee) ? balanceBig.minus(defaultPriorityFee).toNumber() : 0
      return [balanceBig.toNumber(), balanceMax]
    }
    return [0, 0]
  } catch (error) {
    console.log(error)
    return [0, 0]
  }
})

const updateConnect = (state: IState, action: PayloadAction<boolean>) => {
  state.connected = action.payload
}
const updateSlippage = (state: IState, action: PayloadAction<number | string>) => {
  state.slippage = action.payload
}
const updatePriorityFee = (state: IState, action: PayloadAction<number>) => {
  state.priorityFee = action.payload
}
const updateIsAutoSlippge = (state: IState, action: PayloadAction<boolean>) => {
  state.isAutoSlippge = action.payload
}

const updateWallet = (state: IState, action: PayloadAction<string | null>) => {
  state.wallet = action.payload
}
const updateFrontRunProtect = (state: IState, action: PayloadAction<boolean>) => {
  state.frontRunProtect = action.payload
}
const updateBalance = (state: IState, action: PayloadAction<number[]>) => {
  state.balance = action.payload[0]
  state.balanceMax = action.payload[1]
}
const resetBalance = (state: IState) => {
  state.balance = 0
  state.balanceMax = 0
}
const initialState: IState = {
  balance: 0,
  balanceMax: 0,
  rpcNodeUrl: defaultEndpoint,
  wsNodeUrl: defaultWsEndpoint,
  connected: false,
  slippage: DEFAULT_SLIPPAGE,
  priorityFee: 0.003,
  isAutoSlippge: true,
  wallet: null,
  frontRunProtect: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateConnect,
    updateSlippage,
    updatePriorityFee,
    updateIsAutoSlippge,
    updateWallet,
    updateFrontRunProtect,
    resetBalance,
    updateBalance
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBalance.fulfilled, (state, action) => {
      console.log(action.payload)
      state.balance = action.payload[0]
      state.balanceMax = action.payload[1]
    })
  }
})
export const appReducer = appSlice.reducer
export const appActions = appSlice.actions
