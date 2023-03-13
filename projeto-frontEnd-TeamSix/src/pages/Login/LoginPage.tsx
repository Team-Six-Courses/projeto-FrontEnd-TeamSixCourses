import React, { useContext } from 'react';
import { Input } from '../../component/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledFormLogin, StyledMainLogin } from './style';
import { SchemaLogin } from './schema';
import { Button } from '../../component/Button';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../Providers/userContext/userContext';

interface Iform {
  id: string,
  email: string,
  name: string,
  password: string,
  avatar: 'null'
  confirmPassword: string,
}

export const LoginPage = () => {
  const { loading, loginUser } = useContext(UserContext)

  const token = localStorage.getItem("@TOKEN")


  const { register, handleSubmit, formState: { errors }
  } = useForm<Iform>({
    mode: 'onChange',
    resolver: yupResolver(SchemaLogin),
  })

  const submit: SubmitHandler<Iform> = (form) => {
    loginUser(form)
  }

  if (token){
   return <Navigate to="/home"/> 
  }

  return (
    <StyledMainLogin>
      <StyledFormLogin onSubmit={handleSubmit(submit)}>
        <h2>Login</h2>
        <Input type='email' label='email' placeholder='Digite seu email' register={register('email')} error={errors.email} />
        <Input type='password' label='senha' placeholder='Digite sua senha' register={register('password')} error={errors.password} />
        <Button $background='rgba(255, 255, 255, 0.85)' $color='rgba(0, 0, 0, 1)'type='submit' name='Login'></Button>
        <p>Não possui uma conta?</p>
        <Link to='/cadastro'>Cadastrar</Link>
      </StyledFormLogin>
    </StyledMainLogin>
  )
};
