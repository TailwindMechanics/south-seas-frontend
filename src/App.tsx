//path: src\App.tsx

import { LogoutButton } from "./components/ui/LogoutButton";
import { LoggedOut } from "./components/ui/LoggedOut";
import { LoggedIn } from "./components/ui/LoggedIn";
import { MainMenu } from "./components/ui/MainMenu";
import { AuthProvider } from "./hooks/AuthProvider";
import { Login } from "./components/ui/Login";

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-900">
      <div className="flex w-1/3 flex-col space-y-2 rounded-md bg-zinc-600 p-4 shadow-2xl">
        <AuthProvider>
          <LoggedIn>
            <MainMenu />
            <LogoutButton />
          </LoggedIn>
          <LoggedOut>
            <Login />
          </LoggedOut>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
