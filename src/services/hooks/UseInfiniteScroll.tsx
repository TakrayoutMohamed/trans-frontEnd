import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import UseAxiosPrivate from "./UseAxiosPrivate";
import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
import { setMessagesData } from "@/src/pages/modules/setAuthenticationData";
import { useParams } from "react-router-dom";

interface UseInfiniteScrollProps<T> {
  url: string;
  refElement: HTMLDivElement | null;
  messageEndRef?: HTMLDivElement | null;
  offset: number;
  username?: string;
}

const UseInfiniteScroll = <T,>({
  url,
  refElement,
  messageEndRef,
  offset,
}: UseInfiniteScrollProps<T>) => {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { userName } = useParams();
  const [scrollBalance, setScrollBalance] = useState<number>(0);
  const messages = useSelector((state: RootState) => state.messages.value);
  const axiosPrivateHook = UseAxiosPrivate();
  const abortControlerRef = useRef<AbortController | null>(null);
  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      let container = e.currentTarget;
      if (container && container.scrollTop <= offset) {
        let previousScrollHeight = 0;
        if (refElement) {
          previousScrollHeight = refElement.scrollHeight;
          setScrollBalance(refElement.scrollHeight - container.scrollTop)
          console.log("first ");
          console.log("scrollHeight : " + refElement.scrollHeight + " scrollTop : " +refElement.scrollTop);
        }
        fetchData(page)
      }
    },
    [offset, fetchData]
  );
  useEffect(() => {
    abortControlerRef.current?.abort();
    setPage(1);
    setHasMore(true);
    setIsLoading(false);
    fetchData(1).then(async () => {
      messageEndRef?.scrollIntoView({ behavior: "instant" });
    });

    console.log("reset data hook after change the url (userName)");
    console.log("messages length : " + messages.length);
    console.log("messages : ", messages);
    console.log("url : ", url);
    console.log(
      "is loading :" + isLoading + " hasMore: " + hasMore + " page : " + page
    );
  }, [userName, messageEndRef]);
  useEffect(() => {
    scrollBalance && setScrollBalance((prev) => {
      let addedHeight = 0;
      console.log("previous scrollHeight is : " + prev)
      console.log("new scrollHeight is : " + refElement?.scrollHeight)
      if (refElement)
        addedHeight = refElement.scrollHeight - prev;
      console.log("height added "+ addedHeight);
      

      if (prev === 0)
        return 0;
      if (refElement)
      {
        // refElement.scrollTo({top: 0, "behavior": "instant"});
        refElement.scrollTop = addedHeight
      }
      return (0);
    })
  },[messages])
  async function fetchData(page: number) {
    if (isLoading || (!hasMore && page !== 1)) return;
    setIsLoading(true);
    try {
      abortControlerRef.current?.abort();
      const res = await axiosPrivateHook.get(url, {
        params: { page: page, username: userName },
        signal: abortControlerRef.current?.signal,
      });
      setMessagesData(
        page === 1
          ? res.data.results.reverse()
          : [...res.data.results.reverse(), ...messages]
      );
      setHasMore(res.data.next !== null);
      setPage(page + 1);
    } catch (err) {
      // setHasMore(false);
      console.error("Error fetching data:");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }
  return { handleScroll, isLoading, hasMore };
};

export default UseInfiniteScroll;
