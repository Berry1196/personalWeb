import Image from "next/image";
import Link from "next/link";
import Box from "./box/box";

export default function Home() {
  return (
    <div>
      <div className='grid grid-flow-col place-items-center'>
        <Box>
          <p>This is some text!</p>
        </Box>
        <Box className='bg-blue-500'>
          <p>This is some text!</p>
        </Box>
      </div>
    </div>
  );
}
