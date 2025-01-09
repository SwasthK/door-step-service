import { Ban } from "lucide-react";

export const Support = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-6rem)]">
      <div className="flex flex-col items-center gap-4">
        <p className="text-7xl">Support</p>
        <div className="flex gap-2 items-center">
          <p>Content unavailable </p>
          <Ban className="ml-1 h-5 w-5 inline-block"></Ban>
        </div>
        <p className="text-sm font-mono">
          This page is under construction . Stay tuned.
        </p>
      </div>
    </div>
  );
};
