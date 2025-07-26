# README 이전 이력 모음



## 💡2025-07-26 : Yarn 에서 pnpm로 패키지 매니저 변경

> Yarn 에서 pnpm로 변경으로 인해 이전 내용 이력 보관 



### 스터디 프로젝트  구성 (Yarn)

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



---

## 💡2025-07-25 : Jest 에서 Vitest로 변경

> Jest에서 vitest로 바꿔서 다음 내용은 이제 유효하진 않지만, 이력용으로 남긴다.

### Jest 테스트

문제가 쉬울 때는, 반드시 Jest 프로젝트를 만들 필요없이 소스코드 내에서 solution()메서드를 실행해서 결과를 눈으로 확인해도 될 것 같은데... 나중에 문제가 너무 어려워질 때를 대비해서 Jest 테스트가 가능하도록 설정해두었다.

* 전체 테스트 실행

  ```sh
  yarn test
  ```

* 개별 테스트

  * WebStorm 환경이라면 IDE에서 자체지원함.
  
  * VSCode는 Jest Runner 확장을 설치해서 사용했을 때, 단순하고 편리 했었다.
    * https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner
    
    * settings.json 예시
    
      ```json
      {
        ...
        "terminal.integrated.defaultProfile.windows": "Command Prompt", // 💡jest runner 실행시 Git-Bash와는 호환이 안된다.
        "jestrunner.jestCommand": "yarn cross-env NODE_OPTIONS=\"--experimental-vm-modules --no-deprecation --disable-warning=ExperimentalWarning\" yarn jest",
        "jestrunner.enableYarnPnpSupport": true,
        ...
      }
      ```
    
      


* Jest 없이 단순하게 코드를 실행하고 싶을 때
  * 코드와 입출력 값이 너무 단순할 때는 반드시 테스트 케이스를 만들지 않아도 되겠다. 😅
  * VSCode 환경에서는 Code Runner를 사용하자!
    * https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
