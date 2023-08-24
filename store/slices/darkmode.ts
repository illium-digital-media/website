import { createSlice } from "@reduxjs/toolkit";

export interface DarkModeState {
    showDarkMode: boolean;
}

const initialState: DarkModeState = {
    showDarkMode: false,
}

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: initialState,
    reducers: {
        toggle(state) {
            state.showDarkMode = !state.showDarkMode;
            const body = document.body;
            body.classList.remove(state.showDarkMode ? "light-theme" : "dark-theme");
            body.classList.add(state.showDarkMode ? "dark-theme" : "light-theme");
        }
    }
});

export const darkModeActions = darkModeSlice.actions;

export default darkModeSlice;