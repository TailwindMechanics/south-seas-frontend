//path: src\App.tsx

import Login from "./components/ui/Login";

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-900">
      <div className="flex w-1/4 flex-col space-y-2 rounded-md bg-zinc-600 p-4 shadow-2xl">
        <Login />
      </div>
    </div>
  );
}

export default App;
