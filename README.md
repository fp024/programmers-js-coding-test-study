# 프로그래머스 JS/TS 코딩 테스트 - 스터디

> 머리를 좀 돌리려고... 하려고하는데... 쉬운 것부터 하면될 것 같다.
>
> 너무 막이는 문제를 만나면 일단 그냥 넘어가자! 😅
>
> JavaScript 언어를 사용해서 프로그래머스의 코딩 테스트 문제를 풀어보고, Vitest로 테스트하자 👍



### 📚 스터디 프로젝트  구성

**pnpm** 프로젝트이고, 처음에는 JS로만 진행하다가 이후에는 TypeScript도 사용하게 되었다.

---
### 🚀 프로젝트 초기화

> 💡Node 25 부터는 Corepack이 기본 포함되어있지 않아서 먼저 corepack을 전역 설치를 해줘야한다.
>
> ```sh
> npm install -g corepack
> ```

* corepack 활성화

  ```sh
  corepack enable
  ```

* 프로젝트 디펜던시 설치

  ```sh
  pnpm install
  ```

---
### 🐛 디버깅 

> WebStorm은 원래 디버깅 하기 쉽게 되어있어서, 
> 따로 적진 않지만 VSCode는 내용을 추가한다. 😅

#### VS Code에서 TypeScript/JavaScript 디버깅하기

1. **중단점(Breakpoint) 설정**
   - 디버깅하고 싶은 코드 줄 번호 왼쪽을 클릭해서 빨간 점을 찍습니다.

2. **디버깅 시작**
   - `F5` 키를 누르거나 "Run and Debug" 메뉴 클릭
   - 처음 실행 시 런타임 환경 선택 (Node.js)

3. **디버깅 제어**
   - `F10`: 한 줄씩 실행 (Step Over)
   - `F11`: 함수 안으로 들어가기 (Step Into)
   - `Shift+F11`: 함수 밖으로 나가기 (Step Out)
   - `F5`: 다음 중단점까지 계속 실행

4. **변수 확인**
   - 왼쪽 패널의 "Variables"에서 현재 변수 값 확인
   - 마우스를 변수 위에 올려도 값 확인 가능

---
### 🧪 Vitest 테스트

문제가 쉬울 때는, 반드시 Vitest 테스트 코드를 만들 필요없이 소스코드 내에서 solution()메서드를 실행해서 결과를 눈으로 확인해도 될 것 같은데... 나중에 문제가 너무 어려워질 때를 대비해서 Vitest 테스트가 가능하도록 설정해두었다.

* 전체 테스트 실행

  ```sh
  pnpm test
  ```

* 개별 테스트

  * WebStorm 환경이라면 IDE에서 자체지원함.
  * VSCode는 Vitest 확장을 설치해서 사용했을 때, 단순하고 편리 했었다.
    * https://marketplace.visualstudio.com/items?itemName=vitest.explorer


* Vitest 없이 단순하게 코드를 실행하고 싶을 때
  * 코드와 입출력 값이 너무 단순할 때는 반드시 테스트 케이스를 만들지 않아도 되겠다. 😅
  * VSCode 환경에서는 Code Runner를 사용하자!
    * https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
    * 💡 **ts-node-esm** 을 사용하게되서 import 문으로 js를 불러올 때... 상대 경로로 설정해줄 필요가 있었다.

