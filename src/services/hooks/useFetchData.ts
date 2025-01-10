import { useCallback, useEffect, useState } from "react";
import { CanceledError } from "../api/axios";
import { AxiosResponse } from "axios";
import { scrollDirectionTypes } from "./useInfiniteScroll";

interface useFetchDataProps<T> {
  data?: T[];
  setData?: (a: T[]) => void;
  gettingData: (
    url: string,
    page?: number,
    username?: string
  ) => Promise<AxiosResponse<any, any>>;
  username?: string;
  scrollDirection?: scrollDirectionTypes;
  url: string;
}

export const useFetchData = <T>({
  gettingData,
  setData,
  data,
  username,
  scrollDirection = "bottom",
  url,
}: useFetchDataProps<T>) => {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    setPage(1);
    setIsLoading(false);
    setHasMore(true);
    fetchData(1);
  }, [username]);
  useEffect(() => {}, []);
  const fetchData = useCallback(
    async (page: number) => {
      if (isLoading || (!hasMore && page !== 1)) return;
      setIsLoading(true);
      try {
        const res = await gettingData(url, page, username);
        console.log(res.data);
        let tmp: T[];
        if (scrollDirection === "top") {
          if (page === 1) {
            tmp = res.data.results.reverse();
          } else {
            if (data && data.length) {
              tmp = [...res.data.results.reverse(), ...data];
            } else {
              tmp = res.data.results.reverse();
            }
          }
        } else {
          if (page === 1) {
            tmp = res.data.results.users;
          } else {
            if (data && data.length) {
              tmp = [...data, ...res.data.results.users];
            } else {
              tmp = res.data.results.users;
            }
          }
        }
        setData && setData(tmp);
        setHasMore(res.data.next !== null);
        setPage(page + 1);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (err instanceof CanceledError) return;
        console.log(
          "In Catch err is loading : " +
            isLoading +
            " hasMore: " +
            hasMore +
            " page : " +
            page
        );
        console.error("Error fetching data:");
        console.error(err);
      }
    },
    [page, isLoading, hasMore, username]
  );
  return { page, isLoading, hasMore, fetchData };
};
