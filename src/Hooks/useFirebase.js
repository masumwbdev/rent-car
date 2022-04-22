import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // signup
    const registerAuth = (email, password, name, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);
                // ..
            });
    }

    // signin
    const loginAuth = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                // Signed in 
                const user = userCredential.user;
                setError('')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);
            });
    }

    // login with google
    const loginUsingGoogle = (location, navigate) => {
        
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    // update login history
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
    }, [])

    // logout
    const logOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    return {
        loginUsingGoogle,
        user,
        loginAuth,
        error,
        registerAuth,
        logOut
    }
}
export default useFirebase;