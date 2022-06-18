import { Models } from "./types/main";
import data from "./data.json";

const fetchChamps = () => {
  const res: Models.Champion[] = []
  data.forEach(champ => {
    const champion: Models.Champion = {
      id: champ.id,
      name: champ.name,
      title: champ.title,
      roles: champ.roles as Models.RolePosition[],
      damage: champ.damageType as Models.DamageType,
      icon: `/champs/${champ.id}.png`,
      selected: false
    };

    res.push(champion);
  })

  return res;
}

export default fetchChamps;