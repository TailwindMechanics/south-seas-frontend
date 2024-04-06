//path: src\components\Card.tsx

import { Container, Sprite } from "@pixi/react";
import { FC } from "react";

import { Vector2 } from "../types/types";

interface CardProps {
  suit: string;
  rank: string;
  children?: React.ReactNode;
  imageUrl: string;
  position: Vector2;
  scale: number;
}

const Card: FC<CardProps> = (props) => {
  return (
    <Container>
      <Sprite
        x={props.position.x}
        y={props.position.y}
        scale={props.scale}
        image={props.imageUrl}
      />
    </Container>
  );
};

export default Card;
