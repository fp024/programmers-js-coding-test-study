import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 길 찾기 게임 - 이진트리 생성 / 전위 순회 / 후위 순회를 재귀로 만들기!
 *   https://school.programmers.co.kr/learn/courses/30/lessons/42892
 */

/*
   문제 풀이 전략
     ...
     이번에는 트리 생성, 전위순회, 후위순회를 재귀 대신 반복문으로 만들어보자!
*/

/**
 * 노드 클래스
 */
class Node {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly nodeNumber: number,
    public left: Node | null = null,
    public right: Node | null = null
  ) {}
}

/**
 * 문제 해결 함수
 *
 * @param nodeInfo 이진 트리를 구성하는 각 노드의 좌표가 1번 노드 부터 순서대로 들어 있는 2차원 배열
 * @returns [전위 순회,후위 순외] 결과 배열
 */
function solution(nodeInfo: number[][]) {
  const nodes: Node[] = nodeInfo.map(
    ([x, y], i) => new Node(x, y, i + 1) //
  );
  // 레벨을 맞추기 위해 y축 기준으로 내림차순 정렬
  nodes.sort((a, b) => b.y - a.y);

  const rootNode = createBinaryTree(nodes);

  const preOrderResult: number[] = [];
  const postOrderResult: number[] = [];

  preOrder(rootNode, preOrderResult);
  postOrder(rootNode, postOrderResult);

  return [preOrderResult, postOrderResult];
}

/**
 * 노드 정보로 이진 트리 생성
 *
 * @param nodes
 * @returns 루트 노드 반환
 */
function createBinaryTree(nodes: Node[]) {
  const rootNode = nodes[0];
  for (let i = 1; i < nodes.length; i++) {
    insertNode(rootNode, nodes[i]);
  }
  return rootNode;
}

/**
 * 노드 삽입
 *
 * @param parentNode 현재 노드
 * @param node 삽입할 노드
 */
function insertNode(parentNode: Node, node: Node) {
  let currentParentNode = parentNode;
  while (true) {
    if (node.x < currentParentNode.x) {
      if (currentParentNode.left === null) {
        currentParentNode.left = node;
        return;
      }
      currentParentNode = currentParentNode.left;
    } else if (node.x > currentParentNode.x) {
      if (currentParentNode.right === null) {
        currentParentNode.right = node;
        return;
      }
      currentParentNode = currentParentNode.right;
    }
  }
}

/**
 * 전위 순회: P(방문) -> L -> R
 *
 * 스택을 활용한다면...
 *
 * 1. 일단 루트를 스택에 넣음.
 * 2. 방문의 경우는 일단 스택에 넣음.
 * 3. 반복
 *   1) 스택에서 꺼내서 방문 처리
 *   2) L, R 순으로 방문 해야하는데, 스택은 LIFO 이므로 R, L 순으로 스택에 넣음
 *   3) 스택이 비워질 때까지 1) ~ 3) 반복
 *
 * @param rootNode 현재 노드
 * @param visitedNodeNumber 방문 노드 넘버 목록
 */
function preOrder(rootNode: Node, visitedNodeNumber: number[]) {
  const stack = [rootNode];

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    visitedNodeNumber.push(currentNode.nodeNumber);

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }

    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }
}

/**
 * 스택 프레임 타입 정의: { 노드, 노드 방문여부}
 */
type StackFrame = {
  node: Node;
  visited: boolean;
};
/**
 * 후위 순회: L -> R -> P(방문)
 *
 * 자식 부터 순회하고, 부모를 방문하므로
 * 부모를 방문 했는지 플레그를 별도로 설정하고
 * 자식을 순회후 부모를 방문 하는 식으로 진행한다.
 *
 * 1. 스텍 프레임 타입 정의: { 노드, 노드 방문여부}
 * 2. 스택에 방문 전 상태의 루트 노드 삽입
 * 3. 반복
 *   1) 스택에서 꺼내기
 *   2) 방문 여부
 *      a. 방문 했다면 답안에 노드 번호 추가
 *      b. 방문 하지 않았다면.
 *         💡 스택은 LIFO이므로 P, R, L 순으로 스택에 넣는다.
 *         1: 스택에 현재 노드를 방문으로 마킹하고 스택에 넣음
 *         2: 현재 노드의 오른쪽 노드가 있다면 방문 전 상태로 스택에 넣음
 *         3: 현재 노드의 왼쪽 노드가 있다면 방문 전 상태로 스택에 넣음
 *
 * @param rootNode 루트 노드
 * @param visitedNodeNumber 방문 노드 넘버 목록
 */
function postOrder(rootNode: Node, visitedNodeNumber: number[]) {
  const stack: StackFrame[] = [{ node: rootNode, visited: false }];

  while (stack.length > 0) {
    const { node: currentNode, visited } = stack.pop()!;

    if (visited) {
      visitedNodeNumber.push(currentNode.nodeNumber);
    } else {
      stack.push({ node: currentNode, visited: true });

      if (currentNode.right !== null) {
        stack.push({ node: currentNode.right, visited: false });
      }
      if (currentNode.left !== null) {
        stack.push({ node: currentNode.left, visited: false });
      }
    }
  }
}

// === 단순 실행 테스트 ===
// NOSONAR // cspell:disable
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
// cspell:enable
// === 문제 읽고 첫 느낌 ===
// C# 풀이
// * https://github.com/fp024/programmers-csharp-coding-test-study/blob/master/Programmers.Solutions/Lv03/Exam42892.cs
//
// 재귀 코드를 반복문으로 바꿔보니 좀 더 나아진 것 같다. 👍👍
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
