import { isDirectRun } from '../../utils/isDirectRun.js';
/*
 * 길 찾기 게임
 *   https://school.programmers.co.kr/learn/courses/30/lessons/42892
 */
/* === [문제 풀이 전략] ===
   💡 다른 언어로 재귀로 먼저 풀어보긴 했는데, 재귀를 쓰지말고 반복문으로 도전해보자!
*/

/**
 * 노드
 */
class Node {
  x;
  y;
  id;
  left;
  right;
  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.left = null;
    this.right = null;
  }
}

/**
 * 문제 해결 함수
 *
 * @param {number[][]} nodeInfo - 각 노드의 [x, y] 좌표 배열. 예: [[5, 3], [11, 5], ...]
 * @returns {number[][]} - [전위 순회 결과 배열, 후위 순회 결과 배열]
 */
function solution(nodeInfo) {
  // y축 기준으로 레벨링된 노드 배열
  const leveledNodes = nodeInfo
    .map(([x, y], index) => new Node(x, y, index + 1))
    .sort((a, b) => b.y - a.y);

  const rootNode = createBinaryTree(leveledNodes);

  const preOrderResult = [];
  const postOrderResult = [];

  preOrder(rootNode, preOrderResult);
  postOrder(rootNode, postOrderResult);

  return [preOrderResult, postOrderResult];
}

/**
 * 이진 트리 생성
 *
 * @param {Node[]} leveledNodes - y축 기준으로 레벨링된 노드 배열
 * @returns {Node} - 루트 노드
 */
function createBinaryTree(leveledNodes) {
  const rootNode = leveledNodes[0];

  for (let i = 1; i < leveledNodes.length; i++) {
    insertNode(rootNode, leveledNodes[i]);
  }

  return rootNode;
}

/**
 * 노드 삽입
 *
 * @param rootNode - 루트 노드
 * @param newNode - 추가할 신규 노드
 */
function insertNode(rootNode, newNode) {
  let parentNode = rootNode;
  while (true) {
    // 완쪽 노드 삽입
    if (newNode.x < parentNode.x) {
      if (parentNode.left) {
        parentNode = parentNode.left;
      } else {
        parentNode.left = newNode;
        break;
      }
      //오른쪽 노드 삽입
    } else if (newNode.x > parentNode.x) {
      if (parentNode.right) {
        parentNode = parentNode.right;
      } else {
        parentNode.right = newNode;
        break;
      }
    }
  }
}

/**
 * 전위 순회 P(방문) -> L -> R
 *
 * 💡 Stack이 LIFO이므로 [P 스택 POP(방문)] -> [R 스택 PUSH] -> [L 스택 PUSH] 순으로 처리
 *
 * @param {Node} rootNode - 루트 노드
 * @param {number[]} visitedNodeNumbers - 순서대로 방문한 노드 번호를 저장할 배열
 */
function preOrder(rootNode, visitedNodeNumbers) {
  const stack = [rootNode];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    visitedNodeNumbers.push(currentNode.id);
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
  }
}

/**
 * 후위 순회 L -> R -> P(방문)
 *
 * 💡 L -> R -> P 순서를 만들기 위해서
 *      Stack이 LIFO이므로 [P 스택 POP(방문)] -> [L 스택 PUSH] -> [R 스택 PUSH] 순으로 처리합니다.
 *      마지막에 결과 배열을 reverse() 함.
 *
 * @param {Node} rootNode - 루트 노드
 * @param {number[]} visitedNodeNumbers - 순서대로 방문한 노드 번호를 저장할 배열
 */
function postOrder(rootNode, visitedNodeNumbers) {
  const stack = [rootNode];
  while (stack.length > 0) {
    const currentNode = stack.pop();
    visitedNodeNumbers.push(currentNode.id);

    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }
  visitedNodeNumbers.reverse();
}

export default solution;

/* ========== [단순 실행 테스트]  ========== */
// cspell:disable
if (isDirectRun(import.meta.url)) {
  console.log(
    solution([
      [5, 3],
      [11, 5],
      [13, 3],
      [3, 5],
      [6, 1],
      [1, 3],
      [8, 6],
      [7, 2],
      [2, 2],
    ])
  );
}

// === 문제 후기 ===
//   근데 이진 트리 생성까지는 자력으로 하긴 했는데,
//   전위 순회, 후위순회는 AI에게 힌트 요청해서 풀었다. 😅
//
