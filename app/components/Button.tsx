import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface BaseProps {
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

type Props = LinkProps | ButtonProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-dark-gradient text-[#e6c96a] ring-1 ring-[#d1ae37]/50 hover:ring-[#d1ae37] shadow-[0_12px_30px_rgba(31,31,29,0.32)] hover:shadow-[0_16px_36px_rgba(209,174,55,0.28)]",
  secondary:
    "bg-white text-[#1f1f1d] border border-[#A6A7AB]/40 hover:border-[#d1ae37] hover:bg-[#fdfaf0] shadow-elegant",
};

export default function Button(props: Props) {
  const { variant = "primary", icon, className = "", children } = props;

  const base =
    "flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-base font-bold tracking-tight transition-all duration-200 active:scale-[0.99]";

  const inner = (
    <>
      <span>{children}</span>
      {icon && <span className="flex items-center justify-center">{icon}</span>}
    </>
  );

  const finalClass = `${base} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={finalClass}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={finalClass}
    >
      {inner}
    </button>
  );
}
