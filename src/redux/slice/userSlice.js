import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    token: '',
    uuid: '',
    sportsbookToken: '',
    betbyBrandId: '',
    lang: '',
    currency: '',
    themeName: ''
  },
  reducers: {
    setUser: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    logout: state => {
      Object.keys(state).forEach((key) => {
        state[key] = '';
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions;

export const selectCurrentUser = (state) => state?.user;

export const selectCurrentUserUuid = (state) => state?.user?.puuid;

export const selectCurrentUsername = (state) => state?.user?.username;

export const selectSportsbookInfo = (state) => ({
  token: state?.user?.sportsbookToken,
  betbyBrandId: state?.user?.betbyBrandId,
  lang: state?.user?.lang,
  currency: state?.user?.currency,
  themeName: state?.user?.themeName,
});

export default userSlice.reducer;
