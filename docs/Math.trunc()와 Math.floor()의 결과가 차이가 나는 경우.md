# Math.trunc()와 Math.floor()의 결과가 차이가 나는 경우

-----

JavaScript에서 `Math.trunc()`와 `Math.floor()`가 **결과값이 달라지는 예시**는 **음수(negative number)를 다룰 때** 발생합니다.

양수에서는 두 함수 모두 소수점 이하를 버리는 동일한 동작을 합니다.

### `Math.trunc()` vs `Math.floor()`

  * **`Math.trunc(x)`**: 숫자의 **소수 부분(decimal part)을 잘라내어(truncate) 정수 부분만 반환**합니다. 양수든 음수든 관계없이 0에 더 가깝게(towards zero) 값을 만듭니다.
  * **`Math.floor(x)`**: 숫자보다 **작거나 같은 가장 큰 정수(greatest integer less than or equal to the number)를 반환**합니다. 이는 항상 **음의 무한대 방향(towards negative infinity)으로 내림**하는 것과 같습니다.

-----

### 차이가 나는 예시 (음수)

```javascript
console.log("--- 양수 (차이 없음) ---");
console.log("Math.trunc(3.7): ", Math.trunc(3.7));   // 3
console.log("Math.floor(3.7): ", Math.floor(3.7));   // 3
console.log("Math.trunc(3.0): ", Math.trunc(3.0));   // 3
console.log("Math.floor(3.0): ", Math.floor(3.0));   // 3

console.log("\n--- 음수 (차이 발생) ---");
console.log("Math.trunc(-3.7): ", Math.trunc(-3.7));  // -3 (0에 더 가까워짐)
console.log("Math.floor(-3.7): ", Math.floor(-3.7));  // -4 (음의 무한대 방향으로 내림)

console.log("Math.trunc(-3.0): ", Math.trunc(-3.0));  // -3
console.log("Math.floor(-3.0): ", Math.floor(-3.0));  // -3 (정수는 차이가 없음)

console.log("Math.trunc(-0.9): ", Math.trunc(-0.9));  // -0
console.log("Math.floor(-0.9): ", Math.floor(-0.9));  // -1
```

**출력 결과:**

```
--- 양수 (차이 없음) ---
Math.trunc(3.7):  3
Math.floor(3.7):  3
Math.trunc(3.0):  3
Math.floor(3.0):  3

--- 음수 (차이 발생) ---
Math.trunc(-3.7):  -3
Math.floor(-3.7):  -4
Math.trunc(-3.0):  -3
Math.floor(-3.0):  -3
Math.trunc(-0.9):  -0
Math.floor(-0.9):  -1
```

### 요약

  * **양수**: `Math.trunc()`와 `Math.floor()`는 항상 **동일한 결과**를 반환합니다.
  * **음수**: `Math.trunc()`는 **0에 가까운 정수**를 반환하는 반면, `Math.floor()`는 **음의 무한대 방향으로 내림**하므로, 음수에서 소수 부분이 있는 경우 결과가 달라집니다. (예: `-3.7`은 `Math.trunc`로 `-3`, `Math.floor`로 `-4`)

이 차이점을 이해하는 것이 중요합니다\!
