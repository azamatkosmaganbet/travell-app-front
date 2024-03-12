import { FC, PropsWithChildren } from "react";
import "./Title.scss";
import classNames from "classnames";

interface TitleProps {
  className?: string;
  variant?: Sizes;
  type?: "button" | "regular";
  color?: string;
}

type Sizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  className,
  variant = "h2",
  children,
  type,
  color,
  ...props
}) => {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={classNames(
        type === "button" && "button-title",
        type === "regular" && "regular",
        variant === "h2" ? "section-title" : "",
        className
      )}
      style={{color: color}}
      {...props}
    >
      {children}
    </Tag>
  );
};
