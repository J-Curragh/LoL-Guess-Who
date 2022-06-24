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

  export type RolePosition = 'any' | 'mage' | 'assassin' | 'marksman' | 'fighter' | 'tank' | 'support';
  export type DamageType = 'kPhysical' | 'kMixed' | 'kMagic';
}

declare module "*.json" {
  const value: Models.RawChampion[];
  export default value;
}
