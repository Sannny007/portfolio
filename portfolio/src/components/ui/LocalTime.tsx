"use client";

import { useEffect, useState } from "react";

type Props = { location: string; timeZone: string; abbr: string };
export default function LocalTime({ location, timeZone, abbr }: Props) {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });

    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span>
      {location} - {time} {abbr}
    </span>
  );
}