import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton, SignUp, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Home Page
      <SignedOut>
        <SignUpButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

    </div>
  );
}
