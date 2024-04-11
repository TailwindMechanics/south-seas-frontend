//path: src\components\ui\Login.tsx

import { User } from "@supabase/supabase-js";
import { Tab } from "@headlessui/react";
import { useState } from "react";

import { SbClient } from "../../utilities/SbClient";
import { Button } from "./Button";

export const Login = () => {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");

  async function onLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("onLoginSubmit");

    event.preventDefault();

    const response = await SbClient.auth.signInWithPassword({
      email,
      password,
    });

    if (response.error) {
      SetStatusAndClear(response.error.message);
    } else {
      console.log("User signed in:", response.data.user);
      setUser(response.data.user);
    }
  }

  async function onSignupSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("onSignupSubmit");

    event.preventDefault();

    const response = await SbClient.auth.signUp({ email, password });

    if (response.error) {
      SetStatusAndClear(response.error.message);
    } else {
      console.log("User signed up:", response.data.user);
      setUser(response.data.user);
    }
  }

  function SetStatusAndClear(message: string) {
    setStatusMessage(message);
    setTimeout(() => {
      setStatusMessage("");
    }, 3000);
  }

  return (
    <>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        {!user && (
          <div className="h-full w-full flex-col items-center justify-center">
            <Tab.List className="flex w-full justify-around rounded-t-lg">
              <Tab
                className={`w-full cursor-pointer px-4 py-2 text-xl focus:outline-none ${
                  selectedIndex === 0
                    ? "font-semibold text-white underline"
                    : "text-gray-400"
                }`}>
                Sign In
              </Tab>
              <Tab
                className={`w-full cursor-pointer px-4 py-2 text-xl focus:outline-none ${
                  selectedIndex === 1
                    ? "font-semibold text-white underline"
                    : "text-gray-400"
                }`}>
                Sign Up
              </Tab>
            </Tab.List>
            <Tab.Panels className="flex w-full flex-grow flex-col rounded">
              <Tab.Panel className="flex w-full items-center justify-center">
                <form className="w-full" onSubmit={onLoginSubmit}>
                  <div className="flex w-full flex-col items-center space-y-2">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="current-password"
                      className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                    <a href="#" className="text-blue-500">
                      Forgot password?
                    </a>
                  </div>
                </form>
              </Tab.Panel>
              <Tab.Panel className="flex w-full items-center justify-center">
                <form className="w-full" onSubmit={onSignupSubmit}>
                  <div className="flex w-full flex-col items-center space-y-2">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="current-password"
                      className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      autoComplete="current-password"
                      className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button type="submit" className="w-full">
                      Signup
                    </Button>
                  </div>
                </form>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        )}
      </Tab.Group>
      <div className="text-center text-sm leading-none text-red-400">
        {statusMessage}
      </div>
    </>
  );
};
