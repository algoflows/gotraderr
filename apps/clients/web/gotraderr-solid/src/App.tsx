import { Component, createSignal } from 'solid-js';
import { Motion, Presence } from '@motionone/solid';
import { Rerun } from '@solid-primitives/keyed';
import { Toggle } from './components/toggle';

const App: Component = () => {
  const [count, setCount] = createSignal(1);
  const increment = () => setCount((p) => ++p);
  return (
    <>
      <Presence exitBeforeEnter>
        <Rerun on={count()}>
          <Motion
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.05 } }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0, x: -50 }}
          >
            {count()}
          </Motion>
        </Rerun>
      </Presence>
      <button onClick={increment}>Next</button>
      <Toggle />
    </>
  );
};

export default App;
