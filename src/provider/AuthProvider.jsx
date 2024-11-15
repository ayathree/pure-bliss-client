import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log("AuthProvider currentUser:", currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const allInfo = { user, createUser, loading, signIn, logOut, updateUser };

    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
