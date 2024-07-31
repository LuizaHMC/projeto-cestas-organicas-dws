import { auth } from './env';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export const register = (email, senha) => {
  createUserWithEmailAndPassword(auth, email, senha)
    .then((credentials) => {
      console.log("Usuário criado com sucesso", credentials);
      toast.success("Usuário criado com sucesso!");
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
    });
};

