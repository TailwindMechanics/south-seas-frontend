//path: src\components\ui\Login.tsx

import { User } from "@supabase/supabase-js";
import { Tab } from "@headlessui/react";
import { FC, useState } from "react";

import { SupabaseClient } from "../../utils/SupabaseClient";
import { Button } from "./Button";

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  async function onLoginClick() {
    const supabase = SupabaseClient;
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (response.error) {
      console.error("Error signing in:", response.error.message);
    } else {
      console.log("User signed in:", response.data.user);
      setUser(response.data.user);
    }
  }

  async function onSignupClick() {
    const supabase = SupabaseClient;
    const response = await supabase.auth.signUp({ email, password });

    if (response.error) {
      console.error("Error signing up:", response.error.message);
    } else {
      console.log("User signed up:", response.data.user);
      setUser(response.data.user);
    }
  }

  async function onLogoutClick() {
    const supabase = SupabaseClient;
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      console.log("User signed out");
      setUser(null);
    }
  }

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      {user ? (
        <>
          <Button className="w-full" onClick={onLogoutClick}>
            Logout
          </Button>
          <span>Logged in as: {user.email}</span>
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center">
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
              <div className="flex w-full flex-col items-center space-y-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="w-full" onClick={onLoginClick}>
                  Login
                </Button>
                <a href="#" className="text-blue-500">
                  Forgot password?
                </a>
              </div>
            </Tab.Panel>
            <Tab.Panel className="flex w-full items-center justify-center">
              <div className="flex w-full flex-col items-center space-y-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="w-full" onClick={onSignupClick}>
                  Signup
                </Button>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      )}
    </Tab.Group>
  );
};
