//path: src\types\database.types.ts

export interface Player {
  name: string;
}

export interface Transform {
  position: number[];
  rotation: number[];
  scale: number[];
}

export interface SceneRow {
  rowId: string;
  tags: string[] | null;
  suit: string | null;
  rank: string | null;
  owner: Player | null;
  player: Player | null;
  transform: Transform | null;
  imageUrl: string | null;
}
