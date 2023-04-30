const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { ENTITIES } = require("./constants/entities");
admin.initializeApp();

// get db instance
const db = admin.firestore();

exports.createDefaultDataForUser = functions.auth.user().onCreate(async (user) => {
    const { uid } = user;

    await db.collection('user_account').doc(uid).set({
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        userId: uid
    });

    await db.collection('user_preference').doc(uid).set({
        theme: 'light',
        userId: uid,

    });

    for (const category of ENTITIES.CATEGORIES) {
        await db.collection(`users/${uid}/categories`).add({
            name: category.name,
            color: category.color,
            icon: category.icon,
            userId: uid,
        });
    }

})