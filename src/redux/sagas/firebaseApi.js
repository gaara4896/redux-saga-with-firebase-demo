import { firestore } from '../../firebase'

export function getCollection(typeElements) {
  return firestore
    .collection(typeElements)
    .get();
}

export function getDocById(typeElements, id) {
  return firestore
    .collection(typeElements)
    .doc(id)
    .get();
}

export function addDoc(typeElements, doc) {
  return firestore
    .collection(typeElements)
    .add(doc);
}

export function updateDoc(typeElements, id, newDoc) {
  return firestore
    .collection(typeElements)
    .doc(id)
    .update(newDoc);
}

export function deleteDoc(typeElements, id) {
  firestore
    .collection(typeElements)
    .doc(id)
    .delete();
}
