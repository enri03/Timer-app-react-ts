import { type ReactNode, createContext, useContext, useReducer } from "react";
 export type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};
const initialState: TimerState = {
  isRunning: true,
  timers: [],
};
type TimerConxetValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};
const TimerContex = createContext<TimerConxetValue | null>(null);
export function useTimerContex() {
  const timerCtx = useContext(TimerContex);
  if (timerCtx === null) {
    throw Error("timer contex is null");
  }
  return timerCtx;
}

type TimerContexProvider = {
  children: ReactNode;
};
type StartTimer = {
  type: "Start_timer";
};
type StopTimer = {
  type: "Stop_timer";
};
type AddTimer = {
  type: "Add_timer";
  payload: Timer;
};
type Action = StartTimer | StopTimer | AddTimer;
function timersReducer(state: TimerState, action: Action): TimerState {
  if (action.type === "Start_timer") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === "Stop_timer") {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === "Add_timer") {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }
  return state;
}
export default function TimerContexProvider({ children }: TimerContexProvider) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimerConxetValue = {
    isRunning: timersState.isRunning,
    timers: timersState.timers,
    addTimer(timerData) {
      dispatch({
        type: "Add_timer",
        payload: timerData,
      });
    },
    startTimer() {
      dispatch({ type: "Start_timer" });
    },
    stopTimer() {
      dispatch({ type: "Stop_timer" });
    },
  };
  return <TimerContex.Provider value={ctx}>{children}</TimerContex.Provider>;
}
