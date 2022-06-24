import React from 'react';
import { Models } from "../types/main";
import allChampions from '../fetchChamps';

interface Props {
  champions: Models.Champion[];
  setChampions: React.Dispatch<React.SetStateAction<Models.Champion[]>>
}

const defaultValue: Props = {
  champions: allChampions, 
  setChampions: () => {/**/}
};

const ChampContext = React.createContext(defaultValue);

export default ChampContext;
