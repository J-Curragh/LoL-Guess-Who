import { Models } from "./types/main";
import {Dispatch, SetStateAction} from "react";

interface Props {
  x: number,
  champ: Models.Champion;
  champions: Models.Champion[];
  setChampions: Dispatch<SetStateAction<Models.Champion[]>>;
}

const Champ = ({ x, champ, champions, setChampions }: Props) => {

  const selectChampion = () => {
    const newChampions = [...champions];
    newChampions[x].selected = !champ.selected;

    setChampions(newChampions);
  }


  return (
    <div className="champ-container" onClick={selectChampion}>
      <img className="champ-icon" src={champ.icon} alt={champ.title} />
      <img className="champ-overlay" src="/Red_Cross.png" height={120} width={120} hidden={!champ.selected} />
    </div>
  )
}

export default Champ;