export const selectIsLoggedIn = (state) => state.auth.isLoggedIn; 
// export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsRegistering = (state) => state.auth.isRegistering;
export const selectIsRegistrationError = (state) => state.auth.registrationError;