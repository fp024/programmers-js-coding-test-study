# 열거형 대신 문자열 리터럴 UNION 타입 사용하기



```ts
const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;
type Direction = (typeof Direction)[keyof typeof Direction];
```



이 코드에서는 TypeScript의 `const` assertions과 타입 추론을 사용하여 열거형(Enum)과 유사한 구조를 만드는 방법을 보여줍니다. 각 부분을 살펴보면 다음과 같습니다:

### 1. `const Direction` 객체

```typescript
const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;
```

이 부분에서는 `Direction` 객체를 정의하고 있습니다. `as const`는 TypeScript에 이 객체가 상수임을 알리는 역할을 합니다. 이를 통해 객체의 각 속성은 읽기 전용(`readonly`) 속성이 되며, 값이 변경될 수 없음을 보장합니다. 즉, `Direction.UP`은 항상 `'UP'` 문자열로 고정됩니다.

### 2. `type Direction` 타입

```typescript
type Direction = (typeof Direction)[keyof typeof Direction];
```

이 부분에서는 `Direction` 타입을 정의하고 있습니다. 이를 통해 `Direction` 객체의 값들을 타입으로 사용하게 됩니다. 각 구성 요소를 자세히 살펴보면:

- `typeof Direction`: `Direction` 객체의 타입을 얻습니다. 이 타입은 `{ UP: string, DOWN: string, LEFT: string, RIGHT: string }`와 같습니다.
- `keyof typeof Direction`: `Direction` 객체의 키들(`'UP' | 'DOWN' | 'LEFT' | 'RIGHT'`)을 얻습니다.
- `(typeof Direction)[keyof typeof Direction]`: 객체 인덱싱을 사용하여, `Direction` 객체의 값들(`'UP' | 'DOWN' | 'LEFT' | 'RIGHT'`)을 가져옵니다. 결과적으로 `Direction` 타입은 `'UP' | 'DOWN' | 'LEFT' | 'RIGHT'`와 같습니다.

### 결과

이제 `Direction` 타입은 `'UP' | 'DOWN' | 'LEFT' | 'RIGHT'` 문자열 리터럴 유니언 타입을 갖게 됩니다. 이는 TypeScript의 열거형과 유사한 기능을 제공하지만, 열거형을 사용하지 않고 더 나은 타입 안전성을 제공합니다.

예제:

```typescript
let direction: Direction;

direction = Direction.UP;  // 올바름
direction = "UP";  // 올바름
direction = "LEFT";  // 올바름
direction = "FORWARD";  // 오류: Type '"FORWARD"' is not assignable to type 'Direction'.
```

