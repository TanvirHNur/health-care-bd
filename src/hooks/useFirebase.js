

import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeFirebaseAuth from "../componets/login/firebase/firebase-init";


initializeFirebaseAuth();

const useFirebase=()=>{
    const  [user,setUser]=useState({});
    const [error,setError]=useState('')
    const auth=getAuth();
    const histroy = useHistory();
    const GoogleProvider=new GoogleAuthProvider();

    const signInWithGoogle=()=>{
            signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
                setError('Loged in Successfully')
            })
            .catch(error=>{
                setError(error.message)
            })
    }
     
    const createUser=(email, password, name)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then( result =>{
            setUser(result.user)
            updateProfile(auth.currentUser, {
                displayName: name,
            })
            console.log(result.user);
            setError('Loged in Successfully')
            
        })
        .then( () => {
            histroy.push("/")
        })
        .catch( error=>{
            setError(error.message)
        })
    }


    // login
    const login = (email, password) => {
            signInWithEmailAndPassword(auth, email, password)
            .then(result =>{
                setUser(result.user)
                setError('Loged in Successfully')
            })
            .catch(error=>{
                setError(error.message)
            })
    }

    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
            setError('Log out Successfully')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    useEffect( ()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
        })
    } , [])
    return {
        user,
        error,
        createUser,
        login,
        signInWithGoogle,
        logOut
        
    }
}
export default useFirebase;