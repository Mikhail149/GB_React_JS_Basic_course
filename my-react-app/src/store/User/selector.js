export const getUser = (state) => state.user.user.email;
export const getIsAuth = (state) => state.user.user !== null;