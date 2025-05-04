import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva("rounded-3xl py-2 text-white", {
  variants: {
    intent: {
      primary: "bg_primary",
      secondary: "bg_secondary",
    },
    defaultVariants: {
      intent: "primary",
    },
  },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
}

export default function Button({ intent, text, ...props }: ButtonProps) {
  return (
    <button className={buttonStyles({ intent })} {...props}>
      {text}
    </button>
  );
}
