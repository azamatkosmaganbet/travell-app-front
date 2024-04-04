import { FC, PropsWithChildren, ReactNode } from "react";
import "./Catalog.scss";

interface IContainer {
  className?: string;
  children: ReactNode;
}

module Catalog {
  export const Container: FC<IContainer> = ({
    children,
    className,
  }: PropsWithChildren<IContainer>) => {
    return (
      <div className={`content`}>
        <div className={`content-text ${className}`}>{children}</div>
      </div>
    );
  };
}

export { Catalog };
