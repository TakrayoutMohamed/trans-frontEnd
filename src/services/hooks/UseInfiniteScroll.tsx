import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import UseAxiosPrivate from "./UseAxiosPrivate";

interface UseInfiniteScrollProps<T> {
  url: string;
  setData: React.Dispatch<React.SetStateAction<T[]>>;
  data: T[];
  refElement: HTMLDivElement | null;
  messageEndRef?: HTMLDivElement | null;
  offset: number;
  username?: string;
}

const UseInfiniteScroll = <T,>({
  url,
  setData,
  data,
  refElement,
  offset,
}: UseInfiniteScrollProps<T>) => {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const axiosPrivateHook = UseAxiosPrivate();

  const fetchData = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    try {
      const res = await axiosPrivateHook.get(url, { params: { page: page } });
      const newData: T[] = res.data.results;
      setData([...newData, ...data]);
      setHasMore(newData.length >= 10);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      setHasMore(false);
      console.error("Error fetching data:");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      let container = e.currentTarget;
      if (container && container.scrollTop <= offset) {
        fetchData();
      }
    },
    [offset, fetchData]
  );
  // Automatically fetch more data if the content is too small
  const checkIfScrollable = useCallback(() => {
    const container = refElement
    if (container && container.scrollHeight <= container.clientHeight) {
      fetchData();
    }
  }, [refElement?.clientHeight, fetchData]);
  useLayoutEffect(() => {
    checkIfScrollable();
  }, [data, checkIfScrollable]);
  useLayoutEffect(() => {
    setData([]);
    setPage(1);
    setHasMore(true);
  },[url])
  return { handleScroll, isLoading, hasMore };
};

export { UseInfiniteScroll };
