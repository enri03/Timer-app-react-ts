import { useTimerContex } from "../store/TimerContext";
import Timer from "./Timer";

export default function Timers() {
  const timersCtx = useTimerContex();
  return (
    <ul>
      {timersCtx.timers.map((timer) => {
        return <li key={timer.name}> <Timer name={timer.name} duration={timer.duration} /> </li>;
      })}
    </ul>
  );
}
