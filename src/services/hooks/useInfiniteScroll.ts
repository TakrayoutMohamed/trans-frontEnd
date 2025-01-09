import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { AxiosResponse } from "axios";
import { useFetchData } from "./useFetchData";

type scrollDirectionTypes = "top" | "bottom";

interface useInfiniteScrollProps<T> {
  url: string;
  data?: T[];
  setData?: (a: T[])=> void;
  fetchingData: (url: string, page?: number, username?: string) => Promise<AxiosResponse<any, any>>;
  refElement: HTMLDivElement | null;
  startPositionRef?: HTMLDivElement | null;
  offset: number;
  username?: string;
  scrollDirection: scrollDirectionTypes
}

const useInfiniteScroll = <T,>({
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
  // const [page, setPage] = useState<number>(1);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [hasMore, setHasMore] = useState<boolean>(true);
  const {page, isLoading, hasMore, fetchData} = useFetchData<T>({gettingData : fetchingData, setData, data, username, url})
  const [scrollBalance, setScrollBalance] = useState<number>(0);

  // const fetchData = useCallback(async (page: number) => {
  //   if (isLoading || (!hasMore && page !== 1)) return;
  //   setIsLoading(true);
  //   try {
  //     const res = await fetchingData(url, page, username);
  //     setData &&
  //       setData(
  //         page === 1
  //           ? res.data.results.reverse()
  //           : data
  //           ? [...res.data.results.reverse(), ...data]
  //           : res.data.results.reverse()
  //       );
  //     setHasMore(res.data.next !== null);
  //     setPage(page + 1);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setIsLoading(false);
  //     if (err instanceof CanceledError) return;
  //     console.log("In Catch err is loading : "+ isLoading + " hasMore: "+ hasMore + " page : "+ page);
  //     console.error("Error fetching data:");
  //     console.error(err);
  //   }
  // }, [page, isLoading, hasMore, username])

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      let container = e.currentTarget;
      if (!container) return ;
      switch (scrollDirection) {
        case "top":{
          console.log("top scrolling");
          if (container.scrollTop <= offset) {
            if (refElement) {
              setScrollBalance(refElement.scrollHeight - container.scrollTop);
            }
            fetchData(page);
          }
          break;
        }
        case "bottom":{
          console.log("bottom scrolling");
          
          if (container.scrollHeight - container.scrollTop <= offset) {
            if (refElement) {
              setScrollBalance(refElement.scrollHeight - container.scrollTop);
            }
            fetchData(page);
          }
          break;
        }
        default:{
          console.log("default case in custom infinite scroll", scrollDirection);
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
    if (container && container.scrollHeight <= container.clientHeight && hasMore) {
      fetchData(page).then(() => {
        startPositionRef?.scrollIntoView({ behavior: "instant" });
        setScrollBalance(0)
      });
    }
  }, [refElement,refElement?.offsetTop]);
  useEffect (() => {
    checkIfScrollable()
  },[checkIfScrollable])

  return { handleScroll, isLoading, hasMore };
};

export {useInfiniteScroll};
