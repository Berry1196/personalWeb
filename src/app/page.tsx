"use client";
import Image from "next/image";
import Link from "next/link";
import Box from "./box/box";
import Counter from "./counter/counter";
import Joke from "./joke/joke";

export default function Home() {
  return (
    <div>
      <div className='grid grid-flow-col place-items-center mt-5'>
        <Box>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Box>
        <Box className='bg-blue-500'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Testing
            to see how this works
          </p>
        </Box>
      </div>
      <Counter />
      <Joke />
    </div>
  );
}
