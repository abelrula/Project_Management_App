import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import apiSlice from "../api/apiSlice";
import modalReducer from "./slices/modalsSlice";

// const store = configureStore({
// [apiSlice.reducerPath]: apiSlice.reducer,
// reducer: {
//   modal: modalReducer,
// },
// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: false,
//     immutableCheck: false,
//   }),
// });

// const persistSto = persistStore(store);
// const { dispatch } = store;

// export { store, persistSto, dispatch };

// export default store;
