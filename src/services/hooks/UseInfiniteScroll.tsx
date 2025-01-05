import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import UseAxiosPrivate from "./UseAxiosPrivate";
import { useParams } from "react-router-dom";

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
  const { userName } = useParams();
  const [scrollBalance, setScrollBalance] = useState<number>(0);
  const axiosPrivateHook = UseAxiosPrivate();
  const abortControlerRef = useRef<AbortController | null>(null);
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
    abortControlerRef.current?.abort();
    setPage(1);
    setHasMore(true);
    setIsLoading(false);
    fetchData(1).then(() => {
      startPositionRef?.scrollIntoView({ behavior: "instant" });
    });
  }, [userName, startPositionRef]);
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

  async function fetchData(page: number) {
    if (isLoading || (!hasMore && page !== 1)) return;
    setIsLoading(true);
    try {
      abortControlerRef.current?.abort();
      const res = await axiosPrivateHook.get(url, {
        params: { page: page, username: username },
        signal: abortControlerRef.current?.signal,
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
    } catch (err) {
      console.error("Error fetching data:");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }
  return { handleScroll, isLoading, hasMore };
};

export default UseInfiniteScroll;
