import React, {useEffect, useState} from 'react';
import './App.css';
import fetchChamps from "./fetchChamps";
import Champ from "./Champ";
import {Models} from "./types/main";

function App() {
  const [champions, setChampions] = useState<Models.Champion[]>([])

  useEffect(() => {
    setChampions(fetchChamps());
  }, [])

  return (
    <div className="App">
      <div id="champion-grid">
        {champions.map((champ: Models.Champion, index: number) =>
          <Champ x={index}
                 key={champ.id}
                 champ={champ}
                 champions={champions}
                 setChampions={setChampions}/>)
        }
      </div>
      <div id="filters">

      </div>
    </div>
  );
}

export default App;
