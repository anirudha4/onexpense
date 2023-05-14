import { useState } from 'react';
import { collection, doc, setDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { firestore } from '@config/firebase';

const useMutation = (collectionPath) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const createDocument = async (data) => {
        try {
            setIsLoading(true);
            setError(null);
            const newDocRef = await addDoc(collection(firestore, collectionPath), data);
            setIsLoading(false);
            return newDocRef.id;
        } catch (error) {
            setIsLoading(false);
            setError(error);
            console.error('Error creating document:', error);
        }
    };

    const updateDocument = async (documentId, data) => {
        try {
            setIsLoading(true);
            setError(null);
            await setDoc(doc(firestore, collectionPath, documentId), data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error);
            console.error('Error updating document:', error);
        }
    };

    const deleteDocument = async (documentId) => {
        try {
            setIsLoading(true);
            setError(null);
            await deleteDoc(doc(firestore, collectionPath, documentId));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error);
            console.error('Error deleting document:', error);
        }
    };

    return { isLoading, error, createDocument, updateDocument, deleteDocument };
};

export default useMutation;
