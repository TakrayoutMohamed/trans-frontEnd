import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { CanceledError, axiosPrivate } from "../api/axios";

type scrollDirectionTypes = "top" | "bottom";

interface UseInfiniteScrollProps<T> {
  url: string;
  data?: T[];
  setData?: (a: T[])=> void;
  refElement: HTMLDivElement | null;
  startPositionRef?: HTMLDivElement | null;
  offset: number;
  username?: string;
  scrollDirection: scrollDirectionTypes
}

const UseInfiniteScroll = <T,>({
  url,
  refElement,
  data,
  setData,
  startPositionRef,
  scrollDirection = "bottom",
  username,
  offset,
}: UseInfiniteScrollProps<T>) => {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [scrollBalance, setScrollBalance] = useState<number>(0);
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
    console.log(" is loading : "+ isLoading + " hasMore: "+ hasMore + " page : "+ page);
    setPage(1);
    setHasMore(true);
    setIsLoading(false);
    fetchData(1).then(() => {
      startPositionRef?.scrollIntoView({ behavior: "instant" });
    });
  }, [username]);
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

  async function fetchData(page: number) {
    if (isLoading || (!hasMore && page !== 1)) return;
    setIsLoading(true);
    try {
      const res = await axiosPrivate.get(url, {
        params: { page: page, username: username },
      });
      setData &&
        setData(
          page === 1
            ? res.data.results.reverse()
            : data
            ? [...res.data.results.reverse(), ...data]
            : res.data.results.reverse()
        );
      setHasMore(res.data.next !== null);
      setPage(page + 1);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      if (err instanceof CanceledError) return;
      console.log("In Catch err is loading : "+ isLoading + " hasMore: "+ hasMore + " page : "+ page);
      console.error("Error fetching data:");
      console.error(err);
    }
  }
  return { handleScroll, isLoading, hasMore };
};

export default UseInfiniteScroll;
