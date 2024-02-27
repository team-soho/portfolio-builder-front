import { ChangeEvent, useState, useCallback } from 'react';

interface IUseArrayReturn<T> {
  array: Array<T>;
  mutableKeys: Array<keyof T>;
  update: (
    index: number,
    keyName: keyof T
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  add: (item: T) => () => void;
  remove: (index: number) => () => void;
}

/**
 * useArray는 배열 상태 관리를 위한 커스텀 훅입니다.
 *
 * 기능:
 * - 초기 배열 값을 설정하고, 배열 내 아이템들을 업데이트하는 기능 제공
 * - 배열에 새 아이템을 추가하거나 기존 아이템을 제거하는 기능 제공
 * - 특정 키를 변경 불가능하도록 설정하여 안정적인 데이터 관리 가능
 * - 배열의 최대(5 or 설정)/최소(1) 길이를 설정하여 자동으로 추가/삭제 제한
 *
 * 반환 값:
 * - array: 현재 상태의 배열
 * - mutableKeys: 업데이트 가능한 키 목록
 * - update: 특정 인덱스의 아이템을 업데이트하는 함수
 * - add: 배열에 새 아이템을 추가하는 함수
 * - remove: 특정 인덱스의 아이템을 제거하는 함수
 */
export default function useArray<T extends Record<string, any>>(
  initArray: Array<T>,
  maxLength: number = 5, // array의 최대 개 수
  immutableKeys: Array<keyof T> = ['id'] // 업데이트 할 수 없는 key 값
): IUseArrayReturn<T> {
  const [array, setArray] = useState<Array<T>>(initArray);
  const mutableKeys: Array<keyof T> =
    initArray.length > 0
      ? Object.keys(initArray[0]).filter((key) => !immutableKeys.includes(key))
      : [];

  const update = useCallback(
    (index: number, keyName: keyof T) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        if (immutableKeys.includes(keyName)) return;
        setArray((currentItems) => {
          const updatedItem = {
            ...currentItems[index],
            [keyName]: event.target.value
          };
          return [
            ...currentItems.slice(0, index),
            updatedItem,
            ...currentItems.slice(index + 1)
          ];
        });
      },
    [immutableKeys]
  );

  const add = useCallback(
    (item: T) => () => {
      if (array.length >= maxLength) return;
      setArray((currentItems) => [...currentItems, item]);
    },
    [array.length, maxLength]
  );

  const remove = useCallback(
    (index: number) => () => {
      if (array.length <= 1) return;
      setArray((currentItems) =>
        currentItems.filter((_, idx) => idx !== index)
      );
    },
    [array.length]
  );

  return { array, mutableKeys, update, add, remove };
}
