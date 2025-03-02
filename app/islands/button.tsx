import { JSX } from "hono/jsx";

type ButtonType = "button" | "submit";
type ButtonVariant = "primary" | "secondary";
type ButtonProps = {
  type: ButtonType;
  title: string;
  variant?: ButtonVariant;
} & JSX.IntrinsicElements["button"];

const Button = ({
  type,
  title,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      class={`text-sm h-9 px-4 py-2 rounded-md cursor-pointer ${
        variant === "primary" ? "bg-black text-white shadow" : ""
      } ${variant === "secondary" ? "bg-slate-100 text-black shadow-sm" : ""}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
