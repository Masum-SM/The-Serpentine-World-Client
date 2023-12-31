import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    const googleProvider = new GoogleAuthProvider();
    

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIN = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log("current User",currentUser);
            setLoading(false)
        })
        return()=>{
            return unsubscribe();
        }
    },[])

    const logout =()=>{
        setLoading(true);
        return signOut(auth);

    }

    const updateUserProfile = (name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo

          });
          
    }




    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        updateUserProfile ,
        googleSignIN,
        
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;