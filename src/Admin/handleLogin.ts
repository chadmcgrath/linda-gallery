import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const handleLogin = async (auth: Auth) => {
  try {

    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
};