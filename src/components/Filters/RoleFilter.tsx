import { useContext, useEffect, SetStateAction } from "react";
import { Radio, FormControl, FormLabel, FormControlLabel, RadioGroup } from "@mui/material";
import ChampContext from "../ChampContext";
import { Models }  from "../../types/main";
import allChampions from "../../fetchChamps";

interface RoleFilterProps {
  filter: Models.RolePosition;
  filterSetter: React.Dispatch<SetStateAction<Models.RolePosition>>;

}

const RoleFilter = ({ filter, filterSetter }: RoleFilterProps) => {
  const roles: Models.RolePosition[] = ["any", "mage", "assassin", "marksman", "fighter", "tank", "support"]

  const { setChampions } = useContext(ChampContext);

  const apply = () => {
    const filtered = allChampions.filter((champ) => champ.roles.includes(filter))

    setChampions(filtered)
  }

  const label = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  useEffect(apply, [filter, setChampions])


  return (
    <div className="filter">
      <FormControl>
        <FormLabel id="radio-group-label">Role</FormLabel>
        <RadioGroup
            aria-labelledby="radio-group-label"
            name="radio-group"
            onChange={e => filterSetter(e.target.value as Models.RolePosition)}
            value={filter}
          
        >
          {roles.map(role => 
            <FormControlLabel value={role} control={<Radio/>} label={label(role)}/>
          )}
        </RadioGroup>
      </FormControl>
    </div>
  )
};

export default RoleFilter;
