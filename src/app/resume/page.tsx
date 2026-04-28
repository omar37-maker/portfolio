"use client";

import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    document.title = "Omar Mohamed Saeed CV";
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      <iframe
        src="/Omar-Mohammed-Saeed-CV .pdf"
        title="Omar Mohamed Saeed CV"
        className="w-[90%] h-[90%] rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-700"
      />
    </div>
  );
}
