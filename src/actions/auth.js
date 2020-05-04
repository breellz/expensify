import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid)=> ({
    type:'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}

export const logout =() => ({
    type:'LOGOUT'
})