import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface Comment {
    id: string,
    content: string,
    createdAt: Timestamp
}