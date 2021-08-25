import { useState } from "react";

export function Button2() {
  /*
    // let in change => Pode mudar.
    // let counter = 0;
      Se utilizarmos uma variável, como essa acima, não vamos alterar o estado
    do nosso button.

    - A o método useState utiliza um objeto de estado que tem que ser importado
    acima do nosso component.
    - Passo como parâmetro qual o valor que eu quero iniciar para essa variável
    no caso zero.
    - Para manipular o estado, para que o estado do componente mude na nossa 
    interface. Devemos,utilizar para acessarmos a array do useState:

      1. variável é o valor do estado, no caso counter.
      2. variável é uma função. Ela serve para alterar o valor ce counter.

    Sempre que quero alterar o valor do contador vou chamar a function 
    setCounter.

    A partir de agora quando clicarmos no button ele vai alterar o valor do seu 
    conteúdo.

  */
    
  const [counter, setCounter] = useState(0);

  function increment() {
    // counter ++;
    setCounter(counter + 1);
    // console.log(counter)
  }


  return (
    <button onClick={increment} >
      {
        counter
      }

      {/* Chaves:{} sempre indicam que estou colocando uma variável que foi 
      declarada acima. */}
    </button>
  )
}

