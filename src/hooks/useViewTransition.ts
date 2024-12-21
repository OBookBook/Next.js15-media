type CallbackFunction<TArgs extends unknown[]> = (
  ...args: TArgs
) => void | Promise<void>;

export const useViewTransition = <TArgs extends unknown[]>(
  callback: CallbackFunction<TArgs>
) => {
  const startViewTransition = (...args: TArgs) => {
    if (!("startViewTransition" in document)) {
      callback(...args);
      return;
    }

    (
      document as unknown as {
        startViewTransition: (callback: () => Promise<void>) => void;
      }
    ).startViewTransition(async () => {
      await Promise.resolve(callback(...args));
    });
  };

  return { startViewTransition };
};
