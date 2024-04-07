//path: src\App.tsx

import PixiStage from "./components/pixi/PixiStage";
import UiRoot from "./components/ui/UiRoot";

function App() {
  return (
    <div className="h-full w-full bg-red-500">
      <UiRoot />
      <PixiStage />
    </div>
  );
}

export default App;
