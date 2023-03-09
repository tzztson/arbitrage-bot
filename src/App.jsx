

import { DarkProvider } from './context/darkThemeContext';
import Container from './pages/container';



export default function App() {



  return (
    <div>
      <DarkProvider>
        <Container />
      </DarkProvider>
    </div>
  )
}
