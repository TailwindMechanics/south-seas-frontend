//path: src\components\pages\LandingPage.tsx

import { FC } from "react";

import { useAuthUser } from "../../hooks/useAuthUser";
import { MainMenu } from "../ui/MainMenu";
import { Login } from "../ui/Login";

export const LandingPage: FC = () => {
  const { user, loading } = useAuthUser();

  console.log("user", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex w-1/3 flex-col space-y-2 rounded-md bg-zinc-600 px-4 py-2 shadow-2xl">
        {user == null || user == undefined ? <Login /> : <MainMenu />}
      </div>
    </>
  );
};
