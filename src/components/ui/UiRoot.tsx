//path: src\components\ui\UiRoot.tsx

import { useEffect, useState } from "react";

import { supabaseClient } from "../../utils/SupabaseClient";
import { SceneRow } from "../../types/database.types";
import { SceneName } from "../../data/SceneInfo";

export const UiRoot = () => {
  const [payload, setPayload] = useState<SceneRow>();
  useEffect(() => {
    const realtimeScene = supabaseClient
      .channel("realtime_scene")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: SceneName },
        (payload) => {
          console.log(`>>> Received payload:`, payload);
          setPayload(payload.new as SceneRow);
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-2xl font-semibold text-slate-900">
        +
      </div>
      <div className="center absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col text-center font-bold text-white">
        <span>{payload?.rank}</span>
      </div>
    </>
  );
};
