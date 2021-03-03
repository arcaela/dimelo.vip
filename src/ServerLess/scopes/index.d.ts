import firebase from 'firebase'
type FirebaseCollection<T> = { [P in keyof T]?: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>; }



const scopes: FirebaseCollection<{
    users,
    posts,
}>;
export default scopes;