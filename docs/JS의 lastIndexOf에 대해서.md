# JS의 lastIndexOf()에 대해서...

> 문제와 관련이 있길레 한번 물어봤음 😅
>
> **관련 문제**
>
> [exam031-142086.ts](../src/ts/lv_1/exam031-142086.ts)



## 나

js의 lastIndexOf에 대해 설명해줄래?

## AI Assistant

JavaScript와 TypeScript의 `lastIndexOf` 메서드에 대해 설명해 드리겠습니다.

## String.prototype.lastIndexOf

`lastIndexOf` 메서드는 문자열 내에서 특정 문자나 문자열이 마지막으로 등장하는 위치의 인덱스를 반환합니다.

### 기본 구문

```
str.lastIndexOf(searchValue[, fromIndex])
```

### 매개변수

1. `searchValue`: 찾고자 하는 문자 또는 문자열
2. `fromIndex` (선택적): 검색을 시작할 위치. 기본값은 문자열의 끝(`+Infinity`)입니다. 음수 값은 문자열의 시작에서부터의 오프셋으로 처리됩니다.

### 반환값

- 문자열에서 지정된 `searchValue`가 마지막으로 나타나는 인덱스를 반환합니다.
- 문자열에 `searchValue`가 없는 경우 `-1`을 반환합니다.
- `fromIndex`가 제공되면, 해당 인덱스 이하에서 마지막으로 나타나는 위치를 찾습니다.

### 예제

```ts
const str = "Hello world, welcome to the universe.";

console.log(str.lastIndexOf("e"));         // 결과: 26
console.log(str.lastIndexOf("e", 10));     // 결과: 1
console.log(str.lastIndexOf("x"));         // 결과: -1

const name = "banana";
console.log(name.lastIndexOf("a"));        // 결과: 5
console.log(name.lastIndexOf("a", 4));     // 결과: 3
console.log(name.lastIndexOf("n"));        // 결과: 4
```

### 코드 예시 설명

제시된 코드에서 `lastIndexOf`는 다음과 같이 사용되고 있습니다:

```ts
const preIdx = s.lastIndexOf(f, i - 1);
```

이 코드는 문자열 `s`에서 현재 문자 `f`가 현재 인덱스 `i` 이전(즉, `i-1` 이하의 인덱스)에서 마지막으로 등장한 위치를 찾습니다. 이는 현재 위치 이전에 동일한 문자가 있었는지 확인하고, 있었다면 그 위치를 알아내는 데 사용됩니다.

### 유용한 팁

- `lastIndexOf`는 대소문자를 구분합니다.
- 배열에서도 동일한 이름의 메서드가 있으며, 유사한 방식으로 작동합니다.
- 문자열에서 모든 일치하는 항목을 찾으려면 정규식과 함께 `match()` 또는 `matchAll()`을 사용하는 것이 좋습니다.

## 나

그런데.. lastIndexOf의 position이 음수가 되면 어떻게 되는거지?

## AI Assistant

`lastIndexOf` 메서드에서 두 번째 매개변수인 `position`(또는 `fromIndex`)이 음수인 경우에 대해 설명해 드리겠습니다.

## lastIndexOf와 음수 위치값

`lastIndexOf` 메서드에서 `position` 매개변수가 음수일 때의 동작은 다음과 같습니다:

### 기본 동작

- 음수 `position` 값이 주어지면, JavaScript는 이를 **0으로 처리**합니다.
- 즉, 음수 값은 문자열의 시작 부분(인덱스 0)부터 검색을 시작하는 것과 같은 효과를 가집니다.`lastIndexOf` 메서드에서 `position`(또는 `fromIndex`) 매개변수가 음수인 경우에 대해 설명해 드리겠습니다.

## lastIndexOf와 음수 위치 매개변수

JavaScript의 `lastIndexOf` 메서드에서 `position`(또는 `fromIndex`) 매개변수가 음수일 때는 다음과 같이 처리됩니다:

1. **음수 값이 제공되면**: 메서드는 이 값을 `0`으로 처리합니다. 즉, 음수 위치는 문자열의 시작 부분(인덱스 0)부터 검색을 시작한다는 의미입니다.
2. **동작 방식**: 
   - 음수 값이 제공되면 → 0으로 취급
   - `0`부터 검색 → 문자열의 맨 앞에서부터 검색을 시작

이는 `String.indexOf()` 메서드와는 다르게 동작합니다. `indexOf()`의 경우 음수 위치는 문자열 시작 위치부터의 상대적 위치로 계산되지만, `lastIndexOf()`의 경우 음수 값은 단순히 `0`으로 취급됩니다.

### 예제

```ts
const str = "Hello World";

// 음수 위치를 사용한 경우
console.log(str.lastIndexOf("o", -5));  // 결과: -1 (0부터 검색하지만 "o"는 인덱스 4에 있음)
console.log(str.lastIndexOf("H", -1));  // 결과: 0 (0부터 검색, "H"는 인덱스 0에 있음)

// 비교를 위한 정상 사용
console.log(str.lastIndexOf("o"));      // 결과: 7 (뒤에서부터 "o" 검색)
console.log(str.lastIndexOf("o", 5));   // 결과: 4 (인덱스 5 이하에서 "o" 검색)
```

### 중요 특징

- `lastIndexOf(x, -1)`은 실질적으로 `lastIndexOf(x, 0)`과 동일합니다.
- 음수 위치를 사용하면, 검색 범위가 매우 제한되어 대부분의 경우 찾고자 하는 문자/문자열을 찾지 못할 가능성이 높습니다.
- 대부분의 실용적인 사용 사례에서는 양수 위치 값이나 위치 매개변수를 생략하는 것이 좋습니다.

요약하자면, `lastIndexOf` 메서드에서 음수 위치 매개변수는 항상 `0`으로 처리되어, 문자열의 시작 부분(인덱스 0)부터 검색을 수행합니다. 이는 일반적인 사용 사례에서는 거의 사용되지 않는 특성입니다.