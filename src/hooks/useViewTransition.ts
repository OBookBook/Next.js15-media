export const useViewTransition = (callback: any) => {
  const startViewTransition = (...args: any) => {
    if (!(document as any).startViewTransition) {
      callback(...args);
      return;
    }

    (document as any).startViewTransition(async () => {
      await Promise.resolve(callback(...args));
    });
  };

  return { startViewTransition };
};
