//path: src\components\pixi\PixiStage.tsx

import { Stage, Container } from "@pixi/react";

import { AceDiamonds, TwoHearts } from "../../data/PlayingCardUrls";
import { X, Y } from "../../utils/Unit";
import PlayingCard from "./PlayingCard";

const PixiStage = () => {
  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        options={{ background: 0x1099bb }}>
        <Container
          anchor={0.5}
          x={window.innerWidth / 2}
          y={window.innerHeight / 2}>
          <PlayingCard
            suit="hearts"
            rank="2"
            imageUrl={TwoHearts}
            position={{ x: X(0), y: Y(0) }}
          />
          <PlayingCard
            suit="diamonds"
            rank="Ace"
            imageUrl={AceDiamonds}
            position={{ x: X(0), y: Y(-60) }}
          />
        </Container>
      </Stage>
    </>
  );
};

export default PixiStage;
