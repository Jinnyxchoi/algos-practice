function cycleInGraph(edges) {
  const visited = new Array(edges.length).fill(0);
  const inStack = new Array(edges.length).fill(0);

  for (const i in edges) {
    if (visited[i]) continue;
    if (DFS(i, edges, visited, inStack)) return true;
  }
  return false;
}

function DFS(node, edges, visited, inStack) {
  console.log('node', node);
  console.log('now i have to go', visited[node]);
  if (visited[node] === 1) {
    if (inStack[node] === 1) return true;
    else return false;
  }
  visited[node] = 1;
  inStack[node] = 1;

  for (const descendent of edges[node]) {
    if (DFS(descendent, edges, visited, inStack)) return true;
  }
  inStack[node] = 0;
  return false;
}
