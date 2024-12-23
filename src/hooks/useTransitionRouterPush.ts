import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useViewTransition } from "./useViewTransition";

export const useTransitionRouterPush = () => {
  const router = useRouter();
  const routerPush = useCallback(
    async (to: string) => {
      await router.push(to);
    },
    [router]
  );

  const { startViewTransition: routerPushWithTransition } =
    useViewTransition<[string]>(routerPush);

  return { routerPushWithTransition };
};
