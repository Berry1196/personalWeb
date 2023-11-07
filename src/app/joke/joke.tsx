import apiFacade from "@/app/apiFacade";
import { useEffect, useState } from "react";

export default function Joke() {
  const [joke, setJoke] = useState<string>("");

  useEffect(() => {
    apiFacade
      .getJoke()
      .then((jokeValue: any) => {
        setJoke(jokeValue);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>{joke}</h1>
    </div>
  );
}
