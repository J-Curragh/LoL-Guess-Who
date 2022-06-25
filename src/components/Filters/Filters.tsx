import { useContext, useEffect, useState, useCallback } from "react";
import RoleFilter from "./RoleFilter";
import SelectedFilter from "./SelectedFilter";
import { Models } from "../../types/main";
import allChampions from "../../fetchChamps";
import ChampContext from "../ChampContext";

const Filters = () => {
  const [hide, setHide] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<Models.RolePosition>('any')
  const { champions, setChampions } = useContext(ChampContext)

  
  const doFilter = useCallback(() => {   
    return allChampions.filter(champ => {
      let f = champ.roles.includes(selectedRole)
      if (hide) f = f && !champ.selected;
      return f;
    })
  }, [hide, selectedRole])

  // Apply Role and Selection filters when either filter changes.
  useEffect(() => {
    setChampions(doFilter());
  }, [doFilter, champions, setChampions, selectedRole, hide])

  return (
    <div>
      <SelectedFilter filter={hide} filterSetter={setHide} />
      <RoleFilter filter={selectedRole} filterSetter={setSelectedRole} />
    </div>
  )
}

export default Filters
