import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { api } from "../../API";

export interface IUserContext {
    registerUser: (formData: IRegisterUser) => Promise<void>
}

export interface IUserDefaultProps {
    children: React.ReactNode;
}

export interface IRegisterUser {
    id: string;
    name: string;
    email: string;
    avatar: 'null';
    password: string;
    confirmPassword: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserDefaultProps) => {
    const navigate = useNavigate()

    const registerUser = async (formData: IRegisterUser) => {
        try {
            await api.post('/register', formData)
            toast.success('Cadastro Realizado com sucesso')
            navigate('/login')
        } catch (error) {
            toast.error(error)
        }
    }

    return(
        <UserContext.Provider value={{registerUser}}>
            {children}
        </UserContext.Provider>
    )
}
