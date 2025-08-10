// ESLint Flat Config for JS & TS coding test practice
// 참고: https://eslint.org/docs/latest/use/configure/configuration-files-new
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vitest from 'eslint-plugin-vitest';

/**
 * 설계 원칙
 * 1. 오류 가능성 높은 규칙(error) 우선
 * 2. 학습/풀이 편의 위해 스타일 과도 제약 X (Prettier 별도)
 * 3. 미사용 변수는 _ prefix 허용
 * 4. 테스트 파일은 vitest 전역 허용 및 집중 규칙 적용
 */

export default [
  // 무시 경로
  {
    ignores: [
      'node_modules/**',
      '.yarn/**',
      '*.log',
      'coverage/**',
      'dist/**',
      'build/**',
      '*.d.ts',
    ],
  },
  // 공통 (JS/TS) 기본
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.es2022,
        ...globals.node,
      },
    },
    plugins: { vitest },
    rules: {
      ...js.configs.recommended.rules,
      // 일반 규칙 조정
      'no-unused-vars': 'off', // TS 쪽에서 처리
      'no-undef': 'error',
      'no-console': 'off',
      'prefer-const': 'warn',
      'no-var': 'error',
      eqeqeq: 'warn',
      curly: 'warn',
      'no-implicit-coercion': 'off',
    },
  },
  // TypeScript 전용 (타입 기반 규칙은 초기부담 줄이기 위해 project 미지정)
  ...tseslint.config({
    files: ['**/*.ts'],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parserOptions: {
        // project: './tsconfig.json', // 필요시 활성화하여 타입 기반 규칙 강화
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      // TS 파일에서도 prefer-const는 경고 수준 유지
      'prefer-const': 'warn',
    },
  }),
  // Vitest 테스트 파일
  {
    files: ['**/*.test.js', '**/*.test.ts'],
    plugins: { vitest },
    languageOptions: {
      globals: {
        ...globals.es2022,
        ...globals.node,
        ...vitest.environments.env.globals,
      },
    },
    rules: {
      ...vitest.configs.recommended.rules,
      'vitest/no-disabled-tests': 'warn',
      'vitest/no-focused-tests': 'error',
    },
  },
];
