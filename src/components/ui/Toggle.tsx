//path: src\components\ui\Toggle.tsx

import { Switch } from "@headlessui/react";
import { useState } from "react";
import { FC } from "react";

export const Toggle: FC = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-green-400"
      } relative inline-flex h-6 w-11 items-center rounded-full`}>
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
