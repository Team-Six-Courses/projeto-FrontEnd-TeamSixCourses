import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../component/Input';
import { Link } from 'react-router-dom';
import { StyledFormRegister, StyledMainRegister } from './style';
import { SchemaRegister } from './schema';
import { Header } from '../../component/Header';


interface Iform {
  email: string,
  name: string,
  password: string,
  confirmPassword: string,
}

export const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors }
  } = useForm<Iform>({
    mode: 'onChange',
    resolver: yupResolver(SchemaRegister),
  })

  return (
    <StyledMainRegister>
      <Header background='rgba(116, 158, 169, 0.38)'/>
      <StyledFormRegister>
        <h2>Cadastre-se</h2>
        <Input type='text' label='nome' placeholder='Digite seu nome' register={register('name')} error={errors.name} />
        <Input type='email' label='email' placeholder='Digite seu email' register={register('email')} error={errors.email} />
        <Input type='password' label='senha' placeholder='Digite sua senha' register={register('password')} error={errors.password} />
        <Input type='password' label='confirme Senha' placeholder='Confirme a senha' register={register('confirmPassword')} error={errors.confirmPassword} />
        <button type='submit'>Cadastrar</button>
        <small> Já possui uma conta? <Link to='/login'>entre aqui</Link> </small>
      </StyledFormRegister>
    </StyledMainRegister>
  )
};
