import React, {useState} from 'react';

export const AuthContext = React.createContext();

export function AuthProvider(Props){
    const [auth,setAuth] =useState({     
        isAuthenticated : true,
    })
    function toggleAuth(){
        setAuth({
        isAuthenticated : !auth.isAuthenticated });
    }

    return (
        <AuthContext.Provider value={{...auth, toggleAuth}}>
            {Props.children}
        </AuthContext.Provider>
    );

}
