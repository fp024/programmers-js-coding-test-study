import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Jest의 testEnvironment: 'node'와 동일
    environment: 'node',

    // Jest의 testMatch와 동일한 패턴
    include: ['**/?(*.)+(spec|test).[jt]s'],

    // 전역 테스트 함수 사용 (describe, it, expect 등)
    // Jest처럼 import 없이 사용하려면 true로 설정
    globals: false,

    // 파일 변경 시 자동 재실행 (watch 모드에서)
    watch: false,

    // TypeScript 지원 (ts-jest 대신 Vite가 처리)
    // 별도 설정 불필요, tsconfig.json을 자동으로 참조
  },
});
