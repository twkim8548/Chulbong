import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface Chulbong {
    id: string,
    lat: number,
    lng: number,
    locationText: string,
    reportCount: number,
    images: string[],
    description: string,
    createdAt: Timestamp
}