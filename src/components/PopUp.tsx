// components/PopupAlert.tsx
"use client";

import { useState, useEffect } from "react";

export default function PopupAlert() {
  const [visible, setVisible] = useState(false);

  // Show the popup when the component mounts
  useEffect(() => {
    setVisible(true);
  }, []);

  // Don't render anything if not visible
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">DSS 2025 Postponement</h2>
          <button
            onClick={() => setVisible(false)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none font-semibold text-3xl leading-none"
          >
            &times;
          </button>
        </div>
        <p className="mt-4 text-gray-700">
        Due to pressing national considerations, DSS 2025 cannot proceed as planned. We will get back to you with rescheduled dates at the earliest.
        </p>
      </div>
    </div>
  );
}
