import { useContext, useEffect, useState } from "react";
import RoleFilter from "./RoleFilter";
import SelectedFilter from "./SelectedFilter";
import { Models } from "../../types/main";
import allChampions from "../../fetchChamps";
import ChampContext from "../ChampContext";

const Filters = () => {
  const [hide, setHide] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<Models.RolePosition>('any')
  const { setChampions } = useContext(ChampContext)

  
  useEffect(() => {
    const filter = (champs: Models.Champion[]) => {
      return champs.filter(champ => {
        let f = champ.roles.includes(selectedRole)
        if (hide) f = f && !champ.selected;
        return f;
      })
    }


    setChampions(filter(allChampions))

  }, [hide, setChampions, selectedRole])

  return (
    <div>
      <SelectedFilter filter={hide} filterSetter={setHide} />
      <RoleFilter filter={selectedRole} filterSetter={setSelectedRole} />
    </div>
  )
}

export default Filters
