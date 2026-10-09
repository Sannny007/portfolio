let done = false;
const listeners = new Set<() => void>();

export const finishedIntro = () => {
  done = true;
  listeners.forEach((cb) => cb());
  listeners.clear();
};

export const onIntroDone = (cb: () => void) => {
  if (done) {
    cb();
    return () => {};
  }
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};