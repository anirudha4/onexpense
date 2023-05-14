import { firestore } from "@config/firebase";
import { collection } from "firebase/firestore";

const getCollectionRef = (collectionName) => collection(firestore, collectionName);
export {
    getCollectionRef
};