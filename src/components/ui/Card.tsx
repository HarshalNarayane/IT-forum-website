import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500">
      {children}
    </div>
  );
}