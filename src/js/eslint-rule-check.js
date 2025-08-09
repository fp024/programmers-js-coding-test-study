// 💡 ESLint 규칙 확인용 파일 (규칙 변경시 이 파일로 바로 확인!)
/* eslint-disable */

// 1. no-unused-vars: 사용하지 않는 변수 경고
let unusedVar = 123;

// 2. no-undef: 정의되지 않은 변수 사용 시 오류
console.log(notDefinedVar);

// 3. no-console: console.log 허용 (off)
console.log('이건 허용됨');

// 4. prefer-const: 재할당(변경) 없는 변수만 const 사용 권장 (warn)
let shouldBeConst = 10;

// 5. no-var: var 키워드 사용 금지 (error)
var oldStyle = 1;

// 6. eqeqeq: == 대신 === 사용 권장 (warn)
if (shouldBeConst == 11) {
  console.log('== 사용');
}

// 7. curly: if문 등에서 중괄호 생략 금지 (warn)
if (shouldBeConst === 11) console.log('중괄호 없음');

// 8. no-implicit-coercion: 암시적 타입 변환 허용 (off, 코딩테스트에서 자주 사용)
const num = '1';
if (!num) {
  console.log('암시적 변환');
}

if (+num) {
  console.log('num은 숫자 문자열');
}
