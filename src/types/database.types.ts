//path: src\types\database.types.ts

export interface Movement {
  speed: number;
  direction: number;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Transform {
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
}

export interface Entity {
  id: string;
  tags: string[] | null;
  transform: Transform;
  movement: Movement | null;
  created_at: string;
  updated_at: string;
}
