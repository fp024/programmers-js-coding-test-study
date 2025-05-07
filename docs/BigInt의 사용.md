# BigInt의 사용

> 3진법, 10진법 변환 문제에서, 내가 생각한 로직은 맞을 것이라 생각했는데,
>
> 제출시 10번 테스트케이스만 계속 틀려서, AI에게 비교를 부탁했다.
>
> 결국 다음 부분이 문제였다. BigInt로 바꾸니 10번 테스트 케이스가 통과했다.
>
> ```ts
> return Number(t.join(''));
> ```
>
> 
>
> **관련 문제**
>
> * 처음 생각한 내용
>   * [exam026-68935.ts](../src/ts/lv_1/exam026-68935.ts)
> * parseInt로 진법 처리
>   * [exam026-68935-a.ts](../src/ts/lv_1/exam026-68935-a.ts)



## 나

\#file:exam026-68935.ts   이게 코딩 테스트 사이트에 제출하면 10번 테스트케이스가 틀리는데, 문제가 뭔지 모르겠어..

\#file:exam026-68935-a.js 로 한것은 이거는 parseInt활용해서 3진법 수를 10진법으로 바꾼 코드거든 그런데 이건 10번 테스트 케이스가 성공을 해... 문제가 뭐인 것 같니?

## AI Assistant

네, 두 코드를 비교해보니 문제점을 찾을 수 있을 것 같습니다.

주요 문제는 `decimalToReverseBase3` 함수에서 발생하는 것으로 보입니다. 현재 코드에서는 3진법으로 변환한 숫자들을 배열에 담은 후 `join()`으로 합쳐서 `Number`로 변환하고 있는데, 이 과정에서 큰 숫자의 경우 정밀도 손실이 발생할 수 있습니다.

JavaScript/TypeScript에서 `Number` 타입은 IEEE 754 표준을 따르는 64비트 부동소수점을 사용하며, 이는 정수를 다룰 때 약 15-17자리까지만 정확성을 보장합니다.

해결 방법을 제안드리면:

1. 숫자를 문자열로 유지하는 방법:

```ts
function decimalToReverseBase3(n: number) {
  let t: number[] = [];
  let divResult = n;
  while (divResult >= 3) {
    t.push(divResult % 3);
    divResult = Math.trunc(divResult / 3);
  }
  t.push(divResult);
  
  return t.join(''); // 문자열로 반환
}

function base3ToDecimal(n: string) { // 매개변수 타입을 string으로 변경
  const nArr = n.split('').reverse();
  
  return nArr.reduce((acc, f, i) => acc + Number(f) * Math.pow(3, i), 0);
}
```

1. 또는 처음부터 문자열로 처리하는 방법:

```ts
function solution(n: number) {
  // 3진법으로 변환하고 바로 뒤집기
  const reversed = n.toString(3).split('').reverse().join('');
  // 뒤집은 3진법 숫자를 10진법으로 변환
  return parseInt(reversed, 3);
}
```

두 번째 방법이 `solution_a.js`와 비슷한 접근 방식이며, `parseInt()`를 사용하면 큰 숫자도 정확하게 처리할 수 있습니다.

이러한 문제가 발생하는 테스트 케이스는 보통 매우 큰 숫자를 입력으로 주었을 때입니다. 예를 들어:

- 큰 수를 3진법으로 변환하면 매우 긴 숫자가 됩니다
- 이를 `Number`로 변환하는 과정에서 정밀도 손실이 발생할 수 있습니다
- 반면 `parseInt()`를 사용하면 문자열을 직접 파싱하므로 이러한 정밀도 문제가 발생하지 않습니다

따라서 큰 숫자를 처리할 때는 문자열 형태로 유지하거나 `parseInt()`를 사용하는 것이 안전합니다.

## 나

너 말이 맞다...

정밀도 손상이 있었던 것 같아..

완전 문자열로 처리할 것이 아니였으면 BigInt로 바꾸니까 해결이 되었어..

```ts
function decimalToReverseBase3(n: number) {
  let t: number[] = [];
  let divResult = n;
  while (divResult >= 3) {
    t.push(divResult % 3);
    divResult = Math.trunc(divResult / 3);
  }
  t.push(divResult);

  return BigInt(t.join(''));
}
```

## AI Assistant

네, 정확히 이해하셨네요! `BigInt`를 사용한 것이 아주 좋은 해결책입니다.

`BigInt`는 JavaScript에서 `Number` 원시 값이 안전하게 표현할 수 있는 최대치(2^53 - 1)보다 큰 정수를 다룰 때 사용하기 좋은 내장 객체입니다.

예를 들어, 다음과 같은 경우에서 차이가 발생할 수 있습니다:

```ts
// Number를 사용할 경우
console.log(Number('12345678901234567890')); // 12345678901234567000 (부정확)

// BigInt를 사용할 경우
console.log(BigInt('12345678901234567890')); // 12345678901234567890n (정확)
```

코딩 테스트에서 이런 정밀도 관련 문제를 마주칠 때는 항상 다음 세 가지 해결책을 고려하면 좋습니다:

1. `BigInt` 사용
2. 문자열로 처리
3. `parseInt()`/`toString()` 활용

특히 진법 변환 문제에서는 이러한 정밀도 이슈가 자주 발생하므로, 큰 숫자를 다룰 때는 항상 주의가 필요합니다. 좋은 해결책을 찾으셨네요!