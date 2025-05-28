/**
 * 성격 유형 검사하기
 *   https://school.programmers.co.kr/learn/courses/30/lessons/118666
 *
 * 그동안 얼마간 Java로 Lv1 문제를 풀었었는데, 다시 돌아왔다.😅 확실히 JS/TS가 테이터 정의하기가 편함. 👍
 */
function solution(survey: string[], choices: number[]) {
  let answer = '';

  // 설문지 점수 정의 배열
  const SCORES = [3, 2, 1, 0, 1, 2, 3];
  // 점수를 얻지 못하는 선택 번호
  const ZERO_CHOICES = 4;

  // 성격 유형별 총점
  const totalScorePerType: Record<string, number> = {};

  for (let [i, s] of survey.entries()) {
    const choice = choices[i];
    const first = s.charAt(1);
    const second = s.charAt(0);

    totalScorePerType[first] = totalScorePerType[first] ?? 0;
    totalScorePerType[second] = totalScorePerType[second] ?? 0;

    if (ZERO_CHOICES < choice) {
      totalScorePerType[first] = totalScorePerType[first] + SCORES[choice - 1];
    } else if (ZERO_CHOICES > choice) {
      totalScorePerType[second] = totalScorePerType[second] + SCORES[choice - 1];
    }
  }

  // 출력 양식에 맞게 점수 머지
  const printType = ['RT', 'CF', 'JM', 'AN'];

  for (let p of printType) {
    const left = p.charAt(0);
    const right = p.charAt(1);

    if (totalScorePerType[left] > totalScorePerType[right]) {
      answer = answer + left;
    } else if (totalScorePerType[left] < totalScorePerType[right]) {
      answer = answer + right;
    } else if (left.localeCompare(right)) {
      answer = answer + left;
    } else {
      answer = answer + right;
    }
  }

  return answer;
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3]));

// cspell:enable
//
// === 문제 읽고 첫 느낌 ===
//   이렇게 하면 될까?
//     1. 성격 유형에 대한 총점 객체를 우선 만듬. - totalScorePerType
//     2. 출력 양식(printType)에 맞게 점수를 머지해서 문자열로 반환
//
//   문제가 너무 길어서 뭔말인가 했는데, 진행하다보니 결국 기본 테스트는 풀었다. 😅
//   일반 객체로 바뀌겠지만 타입 스크립트로 Record<string, number> 정의하는 것은 꽤 편해보였다.
//   통과는 했음 +1점..
//
// === 다른 사람 풀이 확인 이후 의견 ===
//   다른 분들 플이들을 보니.. 엄청 짧게 잘 푸신 것 같다.
//   개념은 내가 푼 내용하고 비슷한 것 같긴한데... 😅😅
//
export default solution;
