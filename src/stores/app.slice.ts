import { CHAIN_TYPE } from '@/constant/enum/chain'
import { RPC_CONFIG, RPC_CONFIG_WS } from '@/constant/rpcConfigg'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const defaultEndpoint = RPC_CONFIG
export const defaultWsEndpoint = RPC_CONFIG_WS
export const defaultPriorityFee: number = 0.015
export const DEFAULT_SLIPPAGE = 2
export const SOL_ADDRESS = '11111111111111111111111111111111'


type IState = {
  rpcNodeUrl: string
  wsNodeUrl: string
  slippage: number | string
  priorityFee: number
  isAutoSlippge: boolean
  wallet: string | null
  type: CHAIN_TYPE | null
  connectSolana: boolean
  connectEvm: boolean
  connectTon: boolean
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

const updateType = (state: IState, action: PayloadAction<CHAIN_TYPE | null>) => {
  state.type = action.payload
}

const updateConnectSolana = (state: IState, action: PayloadAction<boolean>) => {
  state.connectSolana = action.payload
  state.connectEvm = false
  state.connectTon = false
}

const updateConnectEvm = (state: IState, action: PayloadAction<boolean>) => {
  state.connectEvm = action.payload
  state.connectSolana = false
  state.connectTon = false
}

const updateConnectTon = (state: IState, action: PayloadAction<boolean>) => {
  state.connectTon = action.payload
  state.connectSolana = false
  state.connectEvm = false
}

const initialState: IState = {
  rpcNodeUrl: defaultEndpoint,
  wsNodeUrl: defaultWsEndpoint,
  slippage: DEFAULT_SLIPPAGE,
  priorityFee: 0.003,
  isAutoSlippge: true,
  wallet: null,
  type: null,
  connectSolana: false,
  connectEvm: false,
  connectTon: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateSlippage,
    updatePriorityFee,
    updateIsAutoSlippge,
    updateWallet,
    updateType,
    updateConnectSolana,
    updateConnectEvm,
    updateConnectTon
  },
})
export const appReducer = appSlice.reducer
export const appActions = appSlice.actions
