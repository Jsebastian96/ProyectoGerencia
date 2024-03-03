import React, { createContext, useState, useContext } from 'react';
import { registerRequest,loginRequest } from '../../api/auth';
import { array } from 'zod';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors,setErrors] = useState([])

  const signup = async (userData) => {
    try {
      const res = await registerRequest(userData);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data)
    }
    };

    const signin = async (userData) =>{
      try {
        const res = await loginRequest(userData)
       
      } catch (error) {
        if(Array.isArray(error.response.data))
       return setErrors(error.response.data)
       setErrors([error.response.data.message])
      }
      
    }
  
    return (
        <AuthContext.Provider
          value={{
            user,
            signup,
            isAuthenticated,
            errors,
            signin
        }}
        >
          {children}
        </AuthContext.Provider>
      );
    
  };

export default AuthContext;
   