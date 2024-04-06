//path: src\components\PixiJsCanvas.tsx

import { Stage, Container, Sprite } from "@pixi/react";
import { X, Y } from "../Utils/Unit";
import Card from "./Card";

const PixiJsCanvas = () => {
  const twoHearts =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/418px-2_of_hearts.svg.png";
  const aceDiamonds =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ace_of_diamonds.svg/418px-Ace_of_diamonds.svg.png"; //upload.wikimedia.org/wikipedia/commons/thumb/3/39/2_of_hearts.svg/418px-2_of_hearts.svg.png";

  return (
    <>
      <div className="center absolute left-1/2 top-1/2 flex flex-col text-center font-bold text-white">
        <span>Hello</span>
        <span>World</span>
      </div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        options={{ background: 0x1099bb }}>
        <Container x={window.innerWidth / 2} y={window.innerHeight / 2}>
          <Card suit="hearts" rank="2" imageUrl={twoHearts} />
          {/* <Sprite image={twoHearts} scale={0.2} x={X(15)} y={Y(0)} />
          <Sprite image={aceDiamonds} scale={0.2} x={X(-15)} y={Y(0)} /> */}
        </Container>
      </Stage>
    </>
  );
};

export default PixiJsCanvas;
