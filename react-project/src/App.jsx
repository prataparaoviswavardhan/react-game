import { Game } from './Game';
import { createContext } from 'react'; 
import './App.css'

export const GameContext = createContext();
function App() {
 const enemy = {
         health :100,
         attack : 40,
    }

  return (
    <GameContext.Provider value={enemy}>
    <>
    <Game/>
    </>
    </GameContext.Provider>
  );
}

export default App
