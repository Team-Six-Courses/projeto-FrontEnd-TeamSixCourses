import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../component/Input';
import { Link } from 'react-router-dom';
import { StyledFormRegister, StyledMainRegister } from './style';
import { SchemaRegister } from './schema';
import { IRegisterUser, UserContext } from '../../Providers/userContext/userContext';


interface Iform {
  id: string,
  email: string,
  name: string,
  password: string,
  avatar: 'null'
  confirmPassword: string,
}

export const RegisterPage = () => {
  const { registerUser } = useContext(UserContext)

  const { register, handleSubmit, formState: { errors }
  } = useForm<Iform>({
    mode: 'onChange',
    resolver: yupResolver(SchemaRegister),
  })

  const submit: SubmitHandler<Iform> = (form) => {
    registerUser(form)
  }

  return (
    <StyledMainRegister>
      <StyledFormRegister onSubmit={handleSubmit(submit)}>
        <h2>Cadastre-se</h2>
        <Input type='text' label='nome' placeholder='Digite seu nome' register={register('name')} error={errors.name} />
        <Input type='email' label='email' placeholder='Digite seu email' register={register('email')} error={errors.email} />
        <Input type='password' label='senha' placeholder='Digite sua senha' register={register('password')} error={errors.password} />
        <Input type='password' label='confirme Senha' placeholder='Confirme a senha' register={register('confirmPassword')} error={errors.confirmPassword} />
        <button type='submit' >Cadastrar</button>
        <small> Já possui uma conta? <Link to='/'>entre aqui</Link> </small>
      </StyledFormRegister>
    </StyledMainRegister>
  )
};
