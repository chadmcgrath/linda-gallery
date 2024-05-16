import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { onAuthStateChanged, getAuth, User, Auth} from "firebase/auth";

import { handleLogin } from './handleLogin';
import DropZone from './DropZone';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const Admin: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [auth, setAuth] = useState<Auth | null>(null);
  const [images, setImages] = useState<{id: any, src: any}[]>([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID
    };
    let app = initializeApp(firebaseConfig);;
    // if (!getApps().length) {
    //     app
    // } else {
    //     app = getApp();
    // }

    const authInstance = getAuth(app);
    setAuth(authInstance);



    //TODO: REMOVE IMAGES FROM HERE

      const loadImages = async () => {
        const imageModules = import.meta.glob('../assets/Gallery/*.jpg');
        const imagePaths = [];
        for (const path of Object.keys(imageModules)) {
          const image = await imageModules[path]() as any;
          imagePaths.push({id:image.default, src:image.default});
        }
        setImages(imagePaths);
      };
  
      loadImages();

    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
        setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <><DndProvider backend={HTML5Backend}>
        <DropZone onDrop={(id) => console.log(id)} images={images}/>
    </DndProvider>
    <div>
      {user ? (
        <div>Welcome, {user.displayName}</div>
      ) : (
        auth ? <button onClick={() => handleLogin(auth)}>Login with Google</button> : null
      )}
    </div>
    </>
  );
};