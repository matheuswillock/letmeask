type ButtonProps = {
  children?: string; // ?: valor opcional;
  
 // text?: sting[]; para tipar um array; 
  
}

export function Button(props: ButtonProps) {
  return (
    <button>{

      props.children || 'default'

    }</button>
  )
}

