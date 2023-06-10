import { getCollectionRef } from "@lib/firebase";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const useCollection = (path, query) => {
    const collectionRef = getCollectionRef(path, query);
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onSnapshot(collectionRef, (snapshot) => {
            setEntries(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        });
        return () => unsub && unsub();
    }, [path]);
    return { entries, loading };
};

export default useCollection;
