import { useTimerContex } from '../store/TimerContext.tsx';
import Button from './UI/Button.tsx';
export default function Header() {
 const timerCtx = useTimerContex()

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={timerCtx.isRunning? timerCtx.stopTimer:timerCtx.startTimer}>{timerCtx.isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
