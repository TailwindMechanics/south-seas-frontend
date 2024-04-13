//path: src\components\pages\GamePage.tsx

import { Stage, Container } from "@pixi/react";
import { FC } from "react";

import { AceDiamonds, TwoHearts } from "../../data/PlayingCardUrls";
import { AuthedSession } from "../ui/AuthedSession";
import { LogoutButton } from "../ui/LogoutButton";
import { PlayingCard } from "../pixi/PlayingCard";
import { X, Y } from "../../utilities/Unit";

export const GamePage: FC = () => {
  return (
    <AuthedSession>
      <LogoutButton className="absolute bottom-0 left-0 w-20" />
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
    </AuthedSession>
  );
};
