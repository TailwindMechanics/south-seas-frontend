import { Container, Sprite } from "@pixi/react";
import { Vector2 } from "../types/types";
import { FC } from "react";

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
