import React, { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string;
  [key: string]: any; // This will allow any other prop with a string key
}

const Box = ({ children, className = "", ...props }: BoxProps) => {
  return (
    <div className='border-white outline-1 border-2 w-20 rounded-lg'>
      <div className={`box ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Box;
