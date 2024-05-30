import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { projectFirestore } from '../firebase/config';

const useFireStore = (collectionName) => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(projectFirestore, collectionName), orderBy('createdAt', 'desc'));

        const unsub = onSnapshot(q, (snapshot) => {
            let documents = [];
            snapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
            setLoading(false)
        });

        // Clean up the subscription on unmount
        return () => unsub();
    }, [collectionName]);

    return { docs, loading };
};

export default useFireStore;
