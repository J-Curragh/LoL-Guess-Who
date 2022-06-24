import { Models } from "./types/main";
import { useContext } from "react";
import ChampContext from "./components/ChampContext";

interface Props {
  x: number,
  champ: Models.Champion;
}

const Champ = ({ x, champ }: Props) => {
  const { champions, setChampions } = useContext(ChampContext);

  const selectChampion = () => {
    const newChampions = [...champions];
    newChampions[x].selected = !champ.selected;

    setChampions(newChampions);
  }


  return (
    <div className="champ-container" onClick={selectChampion}>
      <img className="champ-icon" src={champ.icon} alt={champ.title} />
      <img className="champ-overlay" src="/Red_Cross.png" height={120} width={120} hidden={!champ.selected} alt={champ.title} />
    </div>
  )
}

export default Champ;