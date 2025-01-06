import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
type IState = {
  isShowConnectModal: boolean
}

const initialState: IState = {
  isShowConnectModal: false,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState: { ...initialState },
  reducers: {
    toggleConnectModal: (state: IState, action: PayloadAction<boolean>) => {
      state.isShowConnectModal = action.payload
    },
  }
})
export const settingReducer = settingsSlice.reducer
export const settingActions = settingsSlice.actions
