import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const loginInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              const uid = user.uid;
            } else {
              setUser({});
            }
          });
          return () => unsubscribe;
    } , [])

    const logOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    return {
        loginInUsingGoogle,
        user,
        logOut
    }
}
export default useFirebase;