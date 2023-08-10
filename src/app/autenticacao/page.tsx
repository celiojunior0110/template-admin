'use client'

import AuthInput from '@/components/auth/AuthInput'
import Image from 'next/image'
import { useState } from 'react'

export default function Autenticacao() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function submeter() {
    if (modo === 'login') {
      console.log('Login')
    } else {
      console.log('Cadastrar')
    }
  }

  return (
    <div className='flex h-screen items-center justify-center'>
      <picture className='hidden md:block md:w-1/2 lg:w-2/3'>
        <img src="https://source.unsplash.com/random" alt="Imagem da tela de autenticação" className='h-screen w-full object-cover' />
      </picture>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-xl font-bold mb-5">
          {modo === 'login'
            ? 'Entre com a sua conta'
            : 'Cadastre-se na plataforma'}
        </h1>
        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
        <button
          onClick={submeter}
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
        >
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={submeter}
          className="w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3"
        >
          Entrar com Google
        </button>

        {modo === 'login' ? (
          
        ) : (
          
        )}
      </div>
    </div>
  )
}
