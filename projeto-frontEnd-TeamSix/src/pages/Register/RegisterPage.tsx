import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../component/Input';

interface Iform {
  email: string,
  nome: string,
  senha: string,
}

export const RegisterPage = () => {
  const { register, handleSubmit, formState:{ errors }
} = useForm<Iform>()

return <form>
  <Input type='text' label='nome' register={register('nome')} error={errors.nome} />
</form>;
};
