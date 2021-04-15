import { auth, googleAuth } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Enter() {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// sign in button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuth);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
}

// sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}> Sign out</button>;
}

function UsernameForm() {
  return <SignOutButton />;
}
