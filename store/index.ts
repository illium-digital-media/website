import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkmode";

const store = configureStore({
    reducer: darkModeSlice.reducer
});

export default store;