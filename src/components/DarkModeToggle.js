import React from "react";
import { Switch } from "@headlessui/react";
import classnames from "classnames";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <Switch
    checked={darkMode}
    onChange={setDarkMode}
    className={classnames(
      darkMode ? "bg-rose-300" : "bg-gray-200",
      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-rose-500"
    )}
  >
    <span className="sr-only">Toggle light and dark mode</span>
    <span
      className={classnames(
        darkMode ? "translate-x-5" : "translate-x-0",
        "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
      )}
    >
      <span
        className={classnames(
          darkMode
            ? "opacity-0 ease-out duration-100"
            : "opacity-100 ease-in duration-200",
          "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
        )}
        aria-hidden="true"
      >
        <SunIcon className="w-3 h-3 text-yellow-500" />
      </span>
      <span
        className={classnames(
          darkMode
            ? "opacity-100 ease-in duration-200"
            : "opacity-0 ease-out duration-100",
          "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
        )}
        aria-hidden="true"
      >
        <MoonIcon className="w-3 h-3 text-rose-600" />
      </span>
    </span>
  </Switch>
);

export default DarkModeToggle;
