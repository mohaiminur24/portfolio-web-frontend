import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface theme_types {
  isDarkMode: boolean;
}

const initialState: theme_types = {
  isDarkMode: true,
};

const themeMode = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<theme_types>) => {
      return action.payload;
    },
  },
});

export const {setTheme}= themeMode.actions;
export default themeMode.reducer;
