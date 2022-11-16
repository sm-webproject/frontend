import { getFetcher } from "../utils/fetcher";
import { useEffect } from "react";
import { useWindowScroll } from "react-use";
import { KeyedMutator } from "swr";
import useSWRInfinite from "swr/infinite";

/**
 * window에서 무한스크롤을 적용하는 훅, T : Response 형태 , L : 리턴되는 리스트의 형태
 * @param {(number) => string} url 페이지네이션이 적용된 url 입력
 * @param {(any) => any[]} getData 리스트가 반환되는 위치
 * @param {string} totalKey 리스트의 전체길이가 반환되는 위치
 * @returns items : 데이터 리스트  , mutate : 리스트 새로고침 , total : 리스트의 전체 길이 , isValidating : 로딩 표시
 * */

function useInfinityScroll<T, L>(
  url: (index: number) => string, // index 를 통해 페이지를 지정
  getData: (el: T) => L[], // 리스트를 반환해주는 함수
  totalKey?: string // T에서 전체 데이터 갯수를 가지는 변수 이름
): {
  items: L[];
  mutate: KeyedMutator<T[]>;
  total: number;
  isValidating: boolean;
} {
  const scroll = useWindowScroll();

  const { data, size, mutate, setSize, isValidating } = useSWRInfinite<T>(url, getFetcher);

  const items = data ? ([] as L[]).concat(...data.map(getData)) : [];

  const total = totalKey && data ? (data[0] as any)[totalKey] : undefined;

  useEffect(() => {
    if (
      Math.ceil(scroll.y + document.documentElement.clientHeight) >=
      document.documentElement.scrollHeight
    ) {
      if (!data) return;
      if (!total && data.map(getData)[data.length - 1].length === 0) return;
      if (total <= items.length) return;
      setSize(size + 1).then();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  return { items, mutate, total , isValidating };
}

export default useInfinityScroll;
