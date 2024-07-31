// Import the functions you need from the SDKs you need
import { collection, getDocs, addDoc} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js'
import { ref, uploadBytes, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";
import { db, storage } from './env';


async function getCollection() {
    const col = collection(db, "products");
    const snapshot = await getDocs(col);

    const products = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            name: data.name,
            description: data.description,
            img: data.img
        };
    });

    return products;
}


async function createProduct(name, description, quantity, category, file) {
  try {
    // upload do arquivo para o Firebase Storage
    const storageRef = ref(storage, 'products/' + file.name);
    const snapshot = await uploadBytes(storageRef, file);
    console.log('Imagem enviada com sucesso:', snapshot);

    // pega a imagem do Firebase Storage
    const imageUrl = await getDownloadURL(snapshot.ref);
    console.log('URL da imagem:', imageUrl);

    // salva o produto no Firestore
    const docRef = await addDoc(collection(db, 'products'), {
        name: name,
        description: description,
        quantity: quantity,
        category: category,
        img: imageUrl,
    });

    console.log('Produto criado com sucesso:', docRef.id);
    alert('Produto criado com sucesso!');

    window.location.reload();


    } catch (error) {
        console.error('Erro ao criar produto:', error);
        alert('Erro ao criar produto. Verifique o console para mais detalhes.');
    }
}

export {getCollection}
export {createProduct}