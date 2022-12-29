export const timeout = (ms) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
