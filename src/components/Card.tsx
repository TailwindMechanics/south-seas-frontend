import { Sprite } from "@pixi/react";
import { FC } from "react";
import { Vector2 } from "../types/types";
import { X, Y } from "../Utils/Unit";

interface CardProps {
  suit: string;
  rank: string;
  children?: React.ReactNode;
  imageUrl: string;
  position: Vector2;
  scale: Vector2;
}

const Card: FC<CardProps> = (props) => {
  return (
    <Sprite
      x={X(props.position.x)}
      y={Y(props.position.y)}
      image={props.imageUrl}></Sprite>
  );
};

export default Card;
