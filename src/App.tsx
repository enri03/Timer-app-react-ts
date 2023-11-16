import AddTimer from './components/AddTimer.tsx';
import Header from './components/Header.tsx';
import Timers from './components/Timers.tsx';
import TimerContexProvider from './store/TimerContext.tsx';

function App() {
  return (
    <TimerContexProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimerContexProvider>
  );
}

export default App;
