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
  /** Opens in a new tab; use for external URLs (e.g. Google Maps). */
  external?: boolean;
  /**
   * Use a plain anchor element for tel: and mailto: links (not Next.js Link).
   */
  native?: boolean;
}

interface ButtonProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

type Props = LinkProps | ButtonProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "text-[#f7f1e0] bg-[linear-gradient(135deg,#0d0b09,#1a1612_50%,#2a241e)] shadow-[0_12px_28px_rgba(13,11,9,0.35),inset_0_0_0_1px_rgba(201,160,74,0.28)] hover:brightness-115 hover:shadow-[0_14px_32px_rgba(13,11,9,0.42),inset_0_0_0_1px_rgba(232,204,126,0.5)] active:scale-[0.99]",
  secondary:
    "bg-white/40 text-[#1a1612] border border-[#c9a04a] backdrop-blur-sm hover:bg-[#c9a04a]/12 hover:border-[#a07628] active:scale-[0.99]",
};

export default function Button(props: Props) {
  const { variant = "primary", icon, className = "", children } = props;

  const base =
    "flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-base font-bold transition-all";

  const inner = (
    <>
      <span>{children}</span>
      {icon && <span className="flex items-center justify-center">{icon}</span>}
    </>
  );

  const finalClass = `${base} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { external, href, native } = props;

    if (native) {
      return (
        <a href={href} className={finalClass}>
          {inner}
        </a>
      );
    }

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={finalClass}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={finalClass}>
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
