import { collection, getDocs, updateDoc, deleteDoc , addDoc, doc} from 'firebase/firestore';
import axios from 'axios';
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

export const getPlayersApi = async (data) => {
    const config = '2730a6685617829eb6de15b420f8bc33b596b4c5ee0f269f9a788294542908d2'
    const URL = `https://apiv2.allsportsapi.com/football/?&met=Players&playerName=${data}&APIkey=${config}`;

    let resp = [];

    await axios.get(URL)
        .then(function(response) {
            resp = response.data.result;
        })
        .catch(function(error) {
            console.log(error);
        })

    return resp;

}
