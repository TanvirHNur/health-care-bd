

import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeFirebaseAuth from "../componets/login/firebase/firebase-init";


initializeFirebaseAuth();

const useFirebase=()=>{
    const  [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth=getAuth();
    const GoogleProvider=new GoogleAuthProvider();
    const  histroy=useHistory();



    const signInWithGoogle=()=>{
          return  signInWithPopup(auth, GoogleProvider)
            
    }
     
    const createUser=(name, email, password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then( result =>{
            setUser(result.user)
            updateProfile(auth.currentUser, {
                displayName: name,
            })
            setError('Logged in Successfully');
            window.location.reload();
        })
        .finally(() => {
            histroy.push('/')
        })
        .catch( error=>{
            setError(error.message);
            console.log(error.message)
        })
    }

    
    // const location=useLocation();
    // const redirect_uri= location.state?.from || '/';
        const url = '/home'

    // login
    const login = (email, password) => {
            signInWithEmailAndPassword(auth, email, password)
            .then(result =>{
                setUser(result.user)
                setError('Logged in Successfully');
                // window.location.reload();
                
            })
            .finally( () => {
                histroy.push('/')
            })
            .catch(error=>{
                setError(error.message)
            })
    }

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
            setError('Logged out Successfully')
        })
        .finally( () => {
            setIsLoading(false);
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
            
            setIsLoading(false)
        })
    } , [auth])
    return {
        user,
        setUser,
        setError,
        error,
        createUser,
        login,
        signInWithGoogle,
        setIsLoading,
        isLoading,
        logOut
        
    }
}
export default useFirebase;