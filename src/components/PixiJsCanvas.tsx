//path: src\components\PixiJsCanvas.tsx

import { Stage, Container } from "@pixi/react";
import { useEffect } from "react";

import { AceDiamonds, TwoHearts } from "../data/ImageUrls";
import { X, Y } from "../utils/Unit";
import Card from "./Card";
import supaClient from "../utils/SupaClient";

const PixiJsCanvas = () => {
  useEffect(() => {
    const realtimeScene = supaClient
      .channel("realtime_scene")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "cards_scene_7" },
        (payload) => {
          console.log(`>>> Received payload:`, payload);
        },
      )
      .subscribe();

    console.log(">>> Channel subscription created");

    return () => {
      realtimeScene.unsubscribe();
      console.log(">>> Channel subscription terminated");
    };
  }, []);

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
            imageUrl={TwoHearts}
            position={{ x: X(1), y: Y(0) }}
            scale={0.2}
          />
          <Card
            suit="diamonds"
            rank="Ace"
            imageUrl={AceDiamonds}
            position={{ x: X(-10), y: Y(0) }}
            scale={0.2}
          />
        </Container>
      </Stage>
    </>
  );
};

export default PixiJsCanvas;
