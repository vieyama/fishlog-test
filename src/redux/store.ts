import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cakeReducer from "@/redux/cakeStore";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: process.env.NEXT_PUBLIC_FINGERPRINT_NAME as string,
  storage,
  whitelist: ["cake"],
};
const rootReducer = combineReducers({
  cake: cakeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type CakeState = ReturnType<typeof store.getState>
