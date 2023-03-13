import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { api } from "../../API";

export interface IUserContext {
    registerUser: (formData: IRegisterUser) => Promise<void>
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loginUser: (formData: ILoginUser) => Promise<void>
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

export interface ILoginUser{
    email: string;
    password: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserDefaultProps) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const registerUser = async (formData: IRegisterUser) => {
        const newForm = { 
            name: formData.name,
            password: formData.password,
            email: formData.email,
            avatar: 'null'
        }
        try {
            setLoading(true)
            await api.post('/register', newForm)
            toast.success('Cadastro Realizado com sucesso')
            navigate('/')
        } catch (error) {
            toast.error('Cadastro não realizado')
        }finally{
            setLoading(false)
        }
    }

    const loginUser = async ( formData: ILoginUser) => {
        try {
            setLoading(true)
            const response = await api.post('/login', formData)
            console.log(response)            
            // localStorage.setItem('@TOKEN', )
            toast.success('Login Realizado')
            navigate('/home')
        } catch (error) {
            toast.error('Falha no Login,Tente Novamente!')
        }finally{
            setLoading(false)
        }

    }

    return (
        <UserContext.Provider value={{ registerUser, loading, setLoading, loginUser }}>
            {children}
        </UserContext.Provider>
    )
}
