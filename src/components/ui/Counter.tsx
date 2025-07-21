"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function Counter({
  end,
  duration = 2.75,
  className,
  suffix,
  prefix,
}: CounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          separator=","
          suffix={suffix}
          prefix={prefix}
        />
      ) : null}
    </div>
  );
}
