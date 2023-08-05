import { useContext } from "react";

import { LoaderContext } from "../context/loader";
import { NotificationContext } from "../context/notification";

/**
 * Hook that calls an API endpoint and handles setting notifications based on the outcome
 */
export const useAsyncAction = () => {
  const [_notification, setNotification] = useContext(NotificationContext);
  const [_loader, setLoader] = useContext(LoaderContext);

  return async (
    route: string,
    errorMessage: string,
    successCallback: (data: any) => void
  ) => {
    setLoader(true);

    try {
      const response = await fetch(route);
      // TODO move rejections into same code area. Use logical || probably
      if (!response.ok) {
        setNotification({
          type: "error",
          message: errorMessage,
        });
      }
      const data = await response.json();
      if (data.Error) {
        setNotification({
          type: "error",
          message: errorMessage,
        });
      } else {
        successCallback(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        setNotification({ type: "error", message: errorMessage });
      }
    }
    setLoader(false);
  };
};
