import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto mt-36 flex flex-col items-center justify-center">
      <p className="text-gray-700 font-xs">Do you want to leave app?</p>
      <SignOutButton>
        <button className="border bg-black text-white font-medium rounded  py-2 px-4">
          Log Out{" "}
        </button>
      </SignOutButton>
    </div>
  );
}
