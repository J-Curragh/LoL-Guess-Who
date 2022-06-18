export namespace Models {
  export interface Champion {
    id: number;
    name: string;
    title: string;
    icon: string;
    selected: boolean;
    roles: RolePosition[];
    damage: DamageType
  }

  export interface RawChampion {
    id: number,
    name: string,
    title: string,
    damageType: DamageType,
    roles: RolePosition[]
  }

  type RolePosition = 'Top' | 'Jungle' | 'Middle' | 'Bottom' | 'Support';
  type DamageType = 'kPhysical' | 'kMixed' | 'kMagic';
}

declare module "*.json" {
  const value: Models.RawChampion[];
  export default value;
}