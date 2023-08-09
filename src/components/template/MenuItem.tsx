'use client'
import Link from 'next/link'

type MenuItemProps = {
  texto: string
  icone: any
  url?: string
  className?: string
  onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {
  const url = props.url ? props.url : ''
  const classLink = `flex flex-col justify-center items-center w-20 h-20 text-gray-600 dark:text-gray-200 ${props.className}`

  return (
    <li className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" onClick={props.onClick}>
      {props.url ? (
        <Link href={url} className={classLink}>
          {props.icone}
          <span className="text-xs font-light ">
            {props.texto}
          </span>
        </Link>
      ) : (
        <a className={classLink}>
          {props.icone}
          <span className="text-xs font-light">
            {props.texto}
          </span>
        </a>
      )}
    </li>
  )
}
