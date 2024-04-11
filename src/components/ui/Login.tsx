//path: src\components\ui\Login.tsx

import { User } from "@supabase/supabase-js";
import { Tab } from "@headlessui/react";
import { useState } from "react";

import { SbClient } from "../../utilities/SbClient";
import { Button } from "./Button";

const inputStyle: string =
  "w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
const panelStyle: string = "flex flex-col items-center space-y-2";
const tabStyle: string =
  "w-full cursor-pointer px-4 py-2 text-xl focus:outline-none";
const tabSelectedStyle = "font-semibold text-white underline";
const tabUnselectedStyle = "text-gray-400";

export const Login = () => {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");

  async function onLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await SbClient.auth.signInWithPassword({
      email,
      password,
    });

    if (response.error) {
      SetStatusAndClear(response.error.message);
    } else {
      setUser(response.data.user);
    }
  }

  async function onSignupSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await SbClient.auth.signUp({ email, password });

    if (response.error) {
      SetStatusAndClear(response.error.message);
    } else {
      setUser(response.data.user);
    }
  }

  function SetStatusAndClear(message: string) {
    setStatusMessage(message);
    setTimeout(() => {
      setStatusMessage("");
    }, 3500);
  }

  return (
    <>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        {!user && (
          <div>
            <Tab.List className="flex ">
              <Tab
                className={`${tabStyle} ${
                  selectedIndex === 0 ? tabSelectedStyle : tabUnselectedStyle
                }`}>
                Sign In
              </Tab>
              <Tab
                className={`${tabStyle} ${
                  selectedIndex === 1 ? tabSelectedStyle : tabUnselectedStyle
                }`}>
                Sign Up
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <form onSubmit={onLoginSubmit}>
                  <div className={panelStyle}>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="current-password"
                      className={inputStyle}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      className={inputStyle}
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
              <Tab.Panel>
                <form onSubmit={onSignupSubmit}>
                  <div className={panelStyle}>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="current-password"
                      className={inputStyle}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      className={inputStyle}
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      autoComplete="current-password"
                      className={inputStyle}
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
