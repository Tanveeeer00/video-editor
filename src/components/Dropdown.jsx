import React from "react";

export default function Dropdown() {
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <select
          id="zoom"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
        >
          <option selected value="sm">
            50%
          </option>
          <option value="xs">25%</option>
          <option value="md">75%</option>
          <option value="lg">100%</option>
          <option value="xl">150%</option>
        </select>
      </form>
    </div>
  );
}
