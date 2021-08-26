// Sempre que um componente se repetir várias vezes no projeto criamos um componente.
// Para utilizar o componente passamos ele no nosso HTML com letra maiúscula. <Button />

import { ButtonHTMLAttributes } from 'react'

// importando style <button></button>
import '../styles/button.scss';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    <button className="button"{...props} />
  )
}

