import { collection, doc, setDoc } from "firebase/firestore"; 

async function addDocument(db: Firestore, data: any) {
  try {
    const collectionRef = collection(db, "yourCollectionName"); // Replace "yourCollectionName"
    const newDocRef = doc(collectionRef); // This creates a document with an auto-generated ID

    await setDoc(newDocRef, data);
    console.log("Document written with ID: ", newDocRef.id);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}