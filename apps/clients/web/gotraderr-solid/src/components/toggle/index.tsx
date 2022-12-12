import { Component, createSignal, JSX, Show } from 'solid-js';
import { Motion, Presence } from '@motionone/solid';
import { styled } from 'emotion-solid';

type ContainerProps = {
  children: JSX.Element;
};

const Container = styled('div')<ContainerProps>({
  color: 'red',
  backgroundColor: 'lightblue',
  padding: '1rem',
  margin: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid blue',
  height: '100px',
});

export const Toggle: Component = () => {
  const [toggle, setToggle] = createSignal(true);
  return (
    <Container>
      <Presence exitBeforeEnter>
        <Show when={toggle()}>
          <Motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            style={{ 'background-color': 'red', height: '100%' }}
          />
        </Show>
      </Presence>
      <button onClick={() => setToggle(!toggle())}>Toggle</button>
    </Container>
  );
};

export default Toggle;
