import {useEffect, useState} from 'react';
import './App.css';
import Champ from "./Champ";
import {Models} from "./types/main";
import ChampContext from "./components/ChampContext";
import Filters from "./components/Filters/Filters";
import allChampions from './fetchChamps';

function App() {
  const [champions, setChampions] = useState<Models.Champion[]>([])

  useEffect(() => {
    setChampions(allChampions);
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
        <div id="filter-section">
          <h1>Settings</h1>
          <Filters />
        </div>
      </div>
    </ChampContext.Provider>
  );
}

export default App;
