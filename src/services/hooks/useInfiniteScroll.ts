import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { useFetchData } from "./useFetchData";

export type scrollDirectionTypes = "top" | "bottom";

interface useInfiniteScrollProps<T> {
  url: string;
  data?: T[];
  setData?: (a: T[]) => void;
  fetchingData: (
    url: string,
    page?: number,
    username?: string
  ) => Promise<AxiosResponse<any, any>>;
  refElement: HTMLDivElement | null;
  startPositionRef?: HTMLDivElement | null;
  offset: number;
  username?: string;
  scrollDirection: scrollDirectionTypes;
}

const useInfiniteScroll = <T>({
  url,
  refElement,
  data,
  fetchingData,
  setData,
  startPositionRef,
  scrollDirection = "bottom",
  username,
  offset,
}: useInfiniteScrollProps<T>) => {
  const { page, isLoading, hasMore, fetchData } = useFetchData<T>({
    gettingData: fetchingData,
    setData,
    data,
    username,
    scrollDirection,
    url,
  });
  const [scrollBalance, setScrollBalance] = useState<number>(0);

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      let container = e.currentTarget;
      if (!container) return;
      switch (scrollDirection) {
        case "top": {
          console.log("top scrolling");
          if (container.scrollTop <= offset) {
            if (refElement) {
              setScrollBalance(refElement.scrollHeight - container.scrollTop);
            }
            fetchData(page);
          }
          break;
        }
        case "bottom": {
          console.log("bottom scrolling");
          if (
            container.scrollHeight -
              container.scrollTop -
              container.clientHeight <
            offset
          ) {
            fetchData(page);
          }
          break;
        }
        default: {
          console.log(
            "default case in custom infinite scroll",
            scrollDirection
          );
          break;
        }
      }
    },
    [offset, fetchData]
  );
  useEffect(() => {
    scrollBalance &&
      setScrollBalance((prev) => {
        let addedHeight = 0;
        if (refElement) addedHeight = refElement.scrollHeight - prev;
        if (prev === 0) return 0;
        if (refElement) {
          refElement.scrollTop = addedHeight;
        }
        return 0;
      });
  }, [data]);
  // Check if the content is scrollable, and fetch more data if necessary
  const checkIfScrollable = useCallback(() => {
    const container = refElement;
    console.log("checkisScrollable");
    // console.log(
    //   "scrollHeight : " +
    //     container?.scrollHeight +
    //     " clientHeight : " +
    //     container?.clientHeight +
    //     " offset " +
    //     offset +
    //     " hasMore : " +
    //     hasMore
    // );

    if (
      container &&
      container.clientHeight &&
      container.scrollHeight <= container.clientHeight + offset &&
      hasMore
    ) {
      console.log("inside if condition befor fetching data");
      fetchData(page).then(() => {
        startPositionRef?.scrollIntoView({ behavior: "instant" });
        setScrollBalance(0);
      });
    }
  }, [refElement, refElement?.offsetTop, page]);
  useEffect(() => {
    checkIfScrollable();
  }, [checkIfScrollable]);

  return { handleScroll, isLoading, hasMore };
};

export { useInfiniteScroll };
