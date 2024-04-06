//path: src\components\PixiJsCanvas.tsx

import { Stage, Container } from "@pixi/react";
import { X, Y } from "../Utils/Unit";
import Card from "./Card";

const PixiJsCanvas = () => {
  const twoHearts =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/418px-2_of_hearts.svg.png";
  const aceDiamonds =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/418px-Ace_of_diamonds.svg.png"; //upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/418px-2_of_hearts.svg.png";

  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-red-500">
        O
      </div>
      <div className="center absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col text-center font-bold text-white">
        <span>Hello</span>
        <span>World</span>
      </div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        options={{ background: 0x1099bb }}>
        <Container x={window.innerWidth / 2} y={window.innerHeight / 2}>
          <Card
            suit="hearts"
            rank="2"
            imageUrl={twoHearts}
            position={{ x: X(-10), y: Y(0) }}
            scale={0.2}
          />
          <Card
            suit="diamonds"
            rank="Ace"
            imageUrl={aceDiamonds}
            position={{ x: X(10), y: Y(0) }}
            scale={0.2}
          />
        </Container>
      </Stage>
    </>
  );
};

export default PixiJsCanvas;
