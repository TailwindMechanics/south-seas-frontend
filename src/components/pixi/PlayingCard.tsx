//path: src\components\pixi\PlayingCard.tsx

import { Sprite } from "@pixi/react";
import { FC } from "react";

import { Vector2 } from "../../types/types";

interface CardProps {
  suit: string;
  rank: string;
  children?: React.ReactNode;
  imageUrl: string;
  position: Vector2;
}

export const PlayingCard: FC<CardProps> = (props) => {
  return (
    <Sprite
      x={props.position.x}
      y={props.position.y}
      image={props.imageUrl}
      anchor={0.5}
      scale={0.2}
    />
  );
};
