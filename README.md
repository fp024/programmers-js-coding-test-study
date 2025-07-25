# 프로그래머스 JS/TS 코딩 테스트 - 스터디

> 머리를 좀 돌리려고... 하려고하는데... 쉬운 것부터 하면될 것 같다.
>
> 너무 막이는 문제를 만나면 일단 그냥 넘어가자! 😅
>
> JavaScript 언어를 사용해서 프로그래머스의 코딩 테스트 문제를 풀어보고, Jest로 테스트하자 👍



### 스터디 프로젝트  구성

Yarn 프로젝트이고, Prettier 설정을 위해 다음 설정을 하였었는데, 이후에 TypeScript도 사용하게 되었다.

* [Editor SDKs | Yarn](https://yarnpkg.com/getting-started/editor-sdks)

* TypeScript 관련 라이브러리가 버전없되었을 때, 다음 명령을 실행해주자!
  ```sh
  yarn dlx @yarnpkg/sdks vscode
  ```



### 프로젝트 초기화

* yarn을 사용하므로 node를 다시 설치했을 경우 다음 명령을 실행해주자!

  ```sh
  corepack enable
  ```

* 프로젝트 디펜던시 설치

  ```sh
  yarn install
  ```



### Vitest 테스트

문제가 쉬울 때는, 반드시 Vitest 테스트 코드를 만들 필요없이 소스코드 내에서 solution()메서드를 실행해서 결과를 눈으로 확인해도 될 것 같은데... 나중에 문제가 너무 어려워질 때를 대비해서 Vitest 테스트가 가능하도록 설정해두었다.

* 전체 테스트 실행

  ```sh
  yarn test
  ```

* 개별 테스트

  * WebStorm 환경이라면 IDE에서 자체지원함.
  * VSCode는 Vitest 확장을 설치해서 사용했을 때, 단순하고 편리 했었다.
    * https://marketplace.visualstudio.com/items?itemName=vitest.explorer


* Vitest 없이 단순하게 코드를 실행하고 싶을 때
  * 코드와 입출력 값이 너무 단순할 때는 반드시 테스트 케이스를 만들지 않아도 되겠다. 😅
  * VSCode 환경에서는 Code Runner를 사용하자!
    * https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner

