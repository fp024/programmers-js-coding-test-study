import { isDirectRun } from '../../utils/isDirectRun.js';
/**
 * 길 찾기 게임
 *   https://school.programmers.co.kr/learn/courses/30/lessons/42892
 */

/*
   문제 풀이 전략
     1. 기초 데이터에서 이진트리의 레벨이 구분되는 데이터 만들기
        - y축 기준으로 정렬해서 트리의 레벨이 구분되는 데이터를 만든다.
        - 정렬이 되면 첫번째 요소가 루트가 된다.
     2. 1에서 얻은 루트를 기준으로 삼아, 이진 트리를 만든다.
        - ...
     3. 전위순회, 후위순회를 합쳐서 답안 반환
*/

/**
 * 문제 해결 함수
 *
 * @param nodeInfo 이진 트리를 구성하는 각 노드의 좌표가 1번 노드 부터 순서대로 들어 있는 2차원 배열
 * @returns [전위 순회,후위 순외] 결과 배열
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

function solution(nodeInfo: number[][]) {
  const nodes: Node[] = new Array(nodeInfo.length);
  for (let i = 0; i < nodeInfo.length; i++) {
    nodes[i] = new Node(nodeInfo[i][0], nodeInfo[i][1], i + 1);
  }
  // 레벨을 맞추기 위해 y축 기준으로 내림차순 정렬
  nodes.sort((a, b) => b.y - a.y);

  const rootNode = createBinaryTree(nodes);

  const preOrderResult: number[] = [];
  const postOrderResult: number[] = [];

  preOrder(rootNode, preOrderResult);
  postOrder(rootNode, postOrderResult);

  return [[...preOrderResult], [...postOrderResult]];
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
 * @param parentNode 부모 노드
 * @param node 삽입할 노드
 */
function insertNode(parentNode: Node, node: Node) {
  if (node.x < parentNode.x) {
    if (parentNode.left === null) {
      parentNode.left = node;
    } else {
      insertNode(parentNode.left, node);
    }
  } else {
    if (parentNode.right === null) {
      parentNode.right = node;
    } else {
      insertNode(parentNode.right, node);
    }
  }
}

/**
 * 전위 순회: P(방문) -> L -> R
 *
 * @param parentNode 부모노드
 * @param visitedNodeNumber 방문 노드 넘버 목록
 */
function preOrder(parentNode: Node | null, visitedNodeNumber: number[]) {
  if (parentNode === null) {
    return;
  }
  visitedNodeNumber.push(parentNode.nodeNumber);
  preOrder(parentNode.left, visitedNodeNumber);
  preOrder(parentNode.right, visitedNodeNumber);
}

/**
 * 후위 순회: L -> R -> P(방문)
 *
 * @param parentNode 부모노드
 * @param visitedNodeNumber 방문 노드 넘버 목록
 */
function postOrder(node: Node | null, visitedNodeNumber: number[]) {
  if (node === null) {
    return;
  }
  postOrder(node.left, visitedNodeNumber);
  postOrder(node.right, visitedNodeNumber);
  visitedNodeNumber.push(node.nodeNumber);
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
// C#으로 먼저 풀어본걸 뭔가 외워서 풀게된 느낌이 난다. 😂
// 재귀를 쓰지않고 풀어볼려했는데, 도저히 생각이 안난다. 😂😂
//
// === 다른 사람 풀이 확인 이후 의견 ===
// ...
//
export default solution;
