/*
  문자열 출력하기
    https://school.programmers.co.kr/learn/courses/30/lessons/181952

  한줄 입력을 하고 Ctrl + C로 끝내면 close 이벤트 부분이 실행되서 출력이 된다.
 */
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  let str = input[0];
  console.log(str);
});
