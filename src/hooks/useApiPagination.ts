import { queryStringToObject } from "@utils/queryStringUtils";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

/**
 *
 * @param initialSearchParams
 * @param converter
 * @return {number, Dispatch<SetStateAction<number>>, number, Dispatch<SetStateAction<number>>, Record<string, any>,
 *   Dispatch<SetStateAction<Record<string, any>>>}
 */

function useApiPagination<
  T extends Record<"pageSize" | "current" | string, string | string[]>,
  V extends Record<keyof T, any>
>(
  initialSearchParams: T,
  converter?: (data: T) => V
): [
  number,
  Dispatch<SetStateAction<number>>,
  number,
  Dispatch<SetStateAction<number>>,
  ReturnType<(data: T) => V>,
  Dispatch<SetStateAction<T>>
] {
  const [searchParams, setSearchParams] = useSearchParams(initialSearchParams);
  const [search, setSearch] = useState(
    converter
      ? () => converter(queryStringToObject(searchParams))
      : queryStringToObject(searchParams)
  );

  const [current, setCurrent] = useState(
    parseInt(searchParams.get("current") ?? "1")
  );
  const [pageSize, setPageSize] = useState(
    parseInt(searchParams.get("pageSize") ?? "20")
  );

  useEffect(() => {
    const obj = {
      ...search,
      current: current.toString(),
      pageSize: pageSize.toString(),
    };
    setSearchParams(obj, {
      replace: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, pageSize, current]);

  const setterWr = <S>(
    setter: Dispatch<SetStateAction<S>>
  ): Dispatch<SetStateAction<S>> => {
    return (value) => {
      setter(value);
      setCurrent(1);
    };
  };

  return [
    current,
    setCurrent,
    pageSize,
    setterWr(setPageSize),
    search,
    setterWr(setSearch),
  ];
}

export default useApiPagination;
