import { firestore } from "@config/firebase";
import { collection, query, where } from "firebase/firestore";

const getCollectionRef = (collectionName, q) => {
    const collectionRef = collection(firestore, collectionName);
    if (q?.length > 0) {
        const [field, operator, value] = q;
        return query(collectionRef, where(field, operator, value));
    }
    return collectionRef;
}
export {
    getCollectionRef
};