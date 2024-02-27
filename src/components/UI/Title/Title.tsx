import { FC, PropsWithChildren } from "react";
import "./Title.scss";
import classNames from "classnames";

interface TitleProps {
  className?: string;
  variant?: Sizes;
}

type Sizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  className,
  variant = "h2",
  children,
  ...props
}) => {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={classNames(variant === "h2" ? "section-title" : "", className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
