import React, { FC } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isToggled: boolean;
  children: React.ReactNode;
}

const ToggleButton: FC<Props> = ({ isToggled, children, ...props }) => {
  return (
    <button
      {...props}
      className={`btn ${
        isToggled ? "btn-warning text-black" : "btn-ghost text-gray-500"
      }`}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
