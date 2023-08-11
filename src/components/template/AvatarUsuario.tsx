import useAuth from '@/data/hook/useAuth'
import Link from 'next/link'

type AvatarUsuarioProps = {
  className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  const { usuario } = useAuth()

  return (
    <Link href={'/perfil'}>
      <picture>
        <img
          src={usuario?.imagemUrl ?? '/images/avatar.svg'}
          alt="Avatar do usuário"
          className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
        />
      </picture>
    </Link>
  )
}
