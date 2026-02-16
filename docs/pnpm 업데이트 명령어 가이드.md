# pnpm 업데이트 명령어 가이드

## 명령어 비교

### 1. `pnpm up` (인자 없음)

```bash
pnpm up
```

- `package.json`의 **모든 dependencies**를 버전 범위 내에서 업데이트
- **semver 범위를 존중** (예: `^1.2.0`이면 1.x 내에서만 업데이트)
- `package.json` 파일은 **수정되지 않음**
- 가장 간단하고 명확한 방법

### 2. `pnpm up "*"` (와일드카드)

```bash
pnpm up "*"
```

- 패키지 **이름 패턴 매칭**으로 업데이트
- **semver 범위 내에서만** 업데이트 (pnpm up과 동일한 동작)
- `package.json` 파일은 **수정되지 않음**
- 패턴 매칭으로 특정 패키지 그룹 선택 가능

**결론: `pnpm up`와 `pnpm up "*"`는 거의 동일합니다.**

### 3. `pnpm up --latest` 또는 `pnpm up -L`

```bash
pnpm up --latest
pnpm up -L
```

- **semver 범위를 무시**하고 실제 최신 버전으로 업데이트
- `package.json` 파일도 **함께 수정됨**
- 메이저 버전 업데이트 포함 (breaking changes 가능)
- 가장 강력한 업데이트 방법

## 예시 비교

```json
// package.json (초기 상태)
{
  "dependencies": {
    "react": "^17.0.0",
    "lodash": "^4.17.0"
  }
}
```

### `pnpm up` 또는 `pnpm up "*"` 실행 시

```json
// 결과: semver 범위 내에서만 업데이트
{
  "dependencies": {
    "react": "^17.0.0",    // 17.0.2로 업데이트 (package.json은 그대로)
    "lodash": "^4.17.0"    // 4.17.21로 업데이트 (package.json은 그대로)
  }
}
```

- 실제 설치된 버전: react 17.0.2, lodash 4.17.21
- `package.json`은 변경 없음

### `pnpm up --latest` 실행 시

```json
// 결과: 최신 버전으로 업데이트 + package.json 수정
{
  "dependencies": {
    "react": "^18.3.1",    // package.json도 변경됨
    "lodash": "^5.0.0"     // package.json도 변경됨 (있다면)
  }
}
```

- 실제 설치된 버전: react 18.3.1, lodash 5.0.0
- `package.json`도 함께 변경됨

## 패턴 매칭 활용

와일드카드는 특정 패키지 그룹을 선택할 때 유용합니다:

```bash
# @types로 시작하는 패키지만 업데이트
pnpm up "@types/*"

# eslint 관련 패키지만 업데이트
pnpm up "eslint-*"

# react 관련 패키지만 업데이트
pnpm up "react*"
```

## Bash/Shell에서 주의사항

### 문제: glob 패턴 확장

Bash 및 대부분의 셸에서 `*`는 **glob 패턴**으로 인식되어 현재 디렉토리의 파일/폴더 이름으로 확장됩니다.

```bash
# ❌ 잘못된 사용 (bash에서 * 가 파일명으로 확장됨)
pnpm up *
```

### 해결 방법

#### 1. 따옴표로 감싸기 (권장)

```bash
pnpm up "*"
```

#### 2. Escape 문자 사용

```bash
pnpm up \*
```

#### 3. Glob 기능 비활성화

```bash
set -o noglob
pnpm up *
set +o noglob
```

### PowerShell에서도 마찬가지

Windows PowerShell에서도 `*`가 glob으로 동작할 수 있으므로 따옴표 사용 권장:

```powershell
pnpm up "*"
```

## 권장 사용법

### 일반적인 업데이트 (안전)

```bash
# 간단하고 명확
pnpm up
```

### 메이저 버전 업데이트 (주의 필요)

```bash
# 최신 버전으로 강제 업데이트
pnpm up --latest

# 또는 대화형으로 선택
pnpm up --interactive
```

### Workspace 전체 업데이트

```bash
# 모든 workspace 패키지 재귀적 업데이트
pnpm up -r

# workspace 전체를 최신으로
pnpm up -r --latest
```

### 특정 패키지만 업데이트

```bash
# 특정 패키지만 (semver 범위 내)
pnpm up react

# 특정 패키지를 최신으로
pnpm up react --latest

# 여러 패키지
pnpm up react react-dom --latest
```

## Yarn과의 차이점 ⚠️

**중요: Yarn과 pnpm은 업데이트 동작이 완전히 다릅니다!**

### Yarn (v2+, Berry)의 동작

```bash
# 1. yarn up (인자 없음)
yarn up
# → 에러! 패키지 지정 필수

# 2. yarn up "*" (와일드카드)
yarn up "*"
# → 모든 패키지를 최신 버전으로 업데이트 (강제)
# → package.json도 수정됨
# → pnpm up --latest와 유사!

# 3. yarn up package-name
yarn up lodash
# → lodash를 최신 버전으로 업데이트
```

### 핵심 차이점 정리

| 명령어 | pnpm | Yarn (v2+) |
|--------|------|------------|
| `up` (인자 없음) | 모든 패키지 안전 업데이트 | ❌ 에러 |
| `up "*"` | semver 범위 내 업데이트 | **최신 버전 강제 업데이트** |
| package.json 수정 | ❌ | ✅ |

**Yarn은 기본적으로 최신 버전 업데이트가 기본값입니다!**

### Yarn에서 semver 범위 유지하기

semver 범위를 존중하며 업데이트하려면 플래그 필요:

```bash
# ^1.0.0 형태로 유지하며 업데이트
yarn up "*" --caret

# ~1.0.0 형태로 유지하며 업데이트
yarn up "*" --tilde
```

### 왜 헷갈릴까?

만약 Yarn에서 pnpm으로 마이그레이션했다면:

- **Yarn 습관**: `yarn up "*"` → 최신 버전으로 업데이트됨
- **pnpm에서 같은 명령어**: `pnpm up "*"` → semver 범위 내에서만 업데이트
- **pnpm에서 Yarn과 같은 동작**: `pnpm up --latest` 사용해야 함

**결론: Yarn에서 온 경우 `pnpm up --latest`를 사용해야 예전처럼 최신 버전으로 업데이트됩니다!**

## 요약 표

| 명령어 | semver 존중 | package.json 수정 | 용도 |
|--------|-------------|-------------------|------|
| `pnpm up` | ✅ | ❌ | 안전한 업데이트 |
| `pnpm up "*"` | ✅ | ❌ | 패턴 매칭 업데이트 |
| `pnpm up --latest` | ❌ | ✅ | 강제 최신 업데이트 |

## 참고 자료

- [pnpm CLI 문서](https://pnpm.io/cli/update)
- [Yarn CLI 문서 (upgrade)](https://yarnpkg.com/cli/up)
- [Semantic Versioning](https://semver.org/)
