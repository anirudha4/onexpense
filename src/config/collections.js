export const COLLECTIONS = {
    USERS: 'users',
    CATEGORIES: (uid) => `users/${uid}/categories`,
    transactions: (uid) => 'transactions'
}