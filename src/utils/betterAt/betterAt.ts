export const betterAt = <Arr extends unknown[], Index extends number>(
  arr: Arr,
  index: Index,
): Arr[Index] => {
  return arr.at(index);
};
