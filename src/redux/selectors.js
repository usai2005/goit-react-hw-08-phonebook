export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user?.name;

export const selectIsUserLoading = state => state.auth.isUserLoading;
