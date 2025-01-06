import { GET_THREAD_TYPE } from '@/constant/enum/feed'
import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './app.slice'
import { settingReducer } from './settings.slice'
import { combineReducers } from 'redux'
import {
  createMigrate,
  FLUSH,
  MigrationManifest,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  version: 2,
  migrate: (state: any) => {
    return Promise.resolve({
      ...state,
      settings: {
        ...state?.settings,
        isShowConnectModal: false,
      }
    })
  }
}

const rootReducer = combineReducers({
  appStore: appReducer,
  settings: settingReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const reduxPersistor = persistStore(store)

export type TRootState = ReturnType<typeof rootReducer>
export type TAppDispatch = typeof store.dispatch

export default store
