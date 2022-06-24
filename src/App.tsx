import React, {useEffect, useState} from 'react';
import './App.css';
import fetchChamps from "./fetchChamps";
import Champ from "./Champ";
import {Models} from "./types/main";
import ChampContext from "./components/ChampContext";
import Filters from "./components/Filters/Filters";

function App() {
  const [champions, setChampions] = useState<Models.Champion[]>([])

  useEffect(() => {
    setChampions(fetchChamps());
  }, [])

  return (
    <ChampContext.Provider value={{ champions, setChampions }}>
      <div className="App">
        <div id="champion-grid">
          {champions.map((champ: Models.Champion, index: number) =>
            <Champ x={index}
                   key={champ.id}
                   champ={champ} />
          )}
        </div>
        <div id="filters">
          <Filters />
        </div>
      </div>
    </ChampContext.Provider>
  );
}

export default App;
