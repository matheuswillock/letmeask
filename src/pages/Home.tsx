// importação de Navegação
import { useHistory } from 'react-router-dom'; 

// importar uma img
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';

// importando componentes
import { Button } from '../components/Button'; 

// importando style scss
import '../styles/auth.scss';

export function Home() {
  const history = useHistory();

  function navegateToRoom() {
    history.push('/rooms/new')
  }

  return (
    <div id="page-auth">
      <aside>

        <img 
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas." 
        />
        
        <strong>Crie salas de Q&amp;A ao vivo</strong>

        <p>Tire as dúvidas da sua audiência em tempo real.</p>

      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />

          <button onClick={navegateToRoom} className="create-room">
            <img src={googleImg} alt="Logo do Google"  />
            Crie sua sala com o Google.
          </button>

          <div className="separator"> ou entre em uma sala</div>

          <form>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            
            />

            <Button type="submit">
              Entrar na sala
            </Button>

          </form>

        </div>
      </main>
    </div>
  )


}
 