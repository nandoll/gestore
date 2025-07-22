"use client";

import { cn } from "@/lib/utils";
import React,
{
  useEffect,
  useState,
  createContext,
  useContext,
  useRef,
} from "react";

interface InfiniteMovingCardsProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMovingCardsContext = createContext<{
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}>({
  direction: "left",
  speed: "normal",
  pauseOnHover: true,
});

export const InfiniteMovingCards = ({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStart(true);
    }, 200); // Delay to prevent hydration errors

    return () => clearTimeout(timeout);
  }, []);

  return (
    <InfiniteMovingCardsContext.Provider
      value={{ direction, speed, pauseOnHover }}
    >
      <div
        className={cn(
          "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
          style={
            {
              "--animation-direction": direction === "left" ? "forwards" : "reverse",
              "--animation-duration":
                speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
            } as React.CSSProperties
          }
        >
          {children}
          {children}
        </ul>
      </div>
    </InfiniteMovingCardsContext.Provider>
  );
};
