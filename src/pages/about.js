import { useContext } from "react";
import { UserContext } from "../UserContext";

export function About() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => setUser("Hardik")}>change Value</button>
    </div>
  );
}
