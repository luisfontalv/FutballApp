import { collection, getDocs, updateDoc, deleteDoc , addDoc, doc} from 'firebase/firestore';
import { db } from '../database/firebase'; 

const playersCollections = collection(db, 'players');

export const getPlayers = async () => {

    const data = await getDocs(playersCollections);
    const resp = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return resp;
}

export const insertPlayer = async (data) => {

    const resp = await addDoc(playersCollections, data);

    return resp;
}

export const deletePlayer = async (id) => {

    const data = doc(db, 'players', id);
    const resp = await deleteDoc(data);

    return resp;

}

export const updatePlayer = async (dataUpdate) => {

    const data = doc(db, 'players', dataUpdate.id);
    const resp = await updateDoc(data, dataUpdate);
    

    return resp;

}
