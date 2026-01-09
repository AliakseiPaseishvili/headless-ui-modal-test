import React, { FC, PropsWithChildren } from "react";

type ButtonProps = {
  onClick?: () => void;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ onClick, children }) => (
  <div className="flex gap-4 p-12">
    <button onClick={onClick}>{children}</button>
  </div>
);
