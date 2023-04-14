import { betterAt } from './betterAt';

describe('betterAt function', () => {
  it('should find element at selected position', () => {
    // given
    const exampleArray = [1, 2, 3, 4, 5, 6];
    const searchedElementIndex = 2;
    // when
    const foundElement = betterAt(exampleArray, searchedElementIndex);
    // then
    expect(foundElement).toBe(exampleArray[searchedElementIndex]);
  });

  it('should return a last element of the given array', () => {
    // given
    const exampleArray = [1, 2, 3, 4, 5, 6];
    const lastElementIndex = exampleArray.length - 1;
    // when
    const foundElement = betterAt(exampleArray, -1);
    // then
    expect(foundElement).toBe(exampleArray[lastElementIndex]);
  });
});
