export const selectContacts = state => state.contacts.contacts;

// export const selectIsLoading = state => state.contacts.isLoading;

// export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.userName;

export const selectIsUserLoading = state => state.isUserLoading;
