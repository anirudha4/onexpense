import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@config/firebase";
import { COLLECTIONS } from "@config/collections";

export const getOne = async (id) => {
    const userRef = doc(firestore, COLLECTIONS.USERS, id);
    return getDoc(userRef);
}

export const User = {
    getOne
}