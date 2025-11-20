import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton, SignUp, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

/**
 * Render the home page with authentication-aware sign-up and sign-out controls.
 *
 * @returns A JSX element containing the home page content; shows a modal sign-up button when the user is signed out and a sign-out button when the user is signed in.
 */
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