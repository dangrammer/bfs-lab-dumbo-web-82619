function bfs(startingNode, vertices, edges){
  startingNode.distance = 0
  let discoveredNodes = [startingNode]
  let nodeQueue = [startingNode]
  while (discoveredNodes.length !== 0) {
    let currentNode = discoveredNodes.shift()
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    nodeQueue = nodeQueue.concat(adjacentNodes)
    markDistanceAndPredecessor(currentNode, adjacentNodes)
    discoveredNodes = discoveredNodes.concat(adjacentNodes)
  }
  return nodeQueue
}

function findAdjacent(nodeName, vertices, edges) {
  let edgeList = edges.filter(edge => edge.includes(nodeName))
  let nameList = [].concat.apply([], edgeList)
  let targets = nameList.filter(name => name !== nodeName)
  let adjacents = vertices.filter(vertex => targets.includes(vertex.name))

  return adjacents.filter(vertex => vertex.distance === null)
}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  adjacentNodes.map(node => {
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  })
}