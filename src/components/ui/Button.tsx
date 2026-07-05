import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700">
      {children}
    </button>
  );
}