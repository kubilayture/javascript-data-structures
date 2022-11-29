# Binary Search

When given a sorted array of data, binary search is a way of searching through that data to find an element in O(log n) time using a divide and conquer approach. It doesn’t require you to look through the entire array in a linear way, which would have a linear big O runtime of O(n).

# Binary Search Trees

Binary search trees are a type of tree data structure with the added condition that each element to the left of a node must be less than that parent node, and each element to the right of a node must be greater than that parent node. Each left and right subtree is also itself a binary search tree, which makes searching for elements more efficient.

# Depth-First Search

Simply put, a depth-first graph search continues down a path until it reaches the end. It is helpful for determining if a path exists between two vertices. DFS has many applications, including topological sorting and detecting cycles, but one of the more interesting real-world applications is that it can be used to solve problems that have a singular correct answer (a path between the start state and end state), such as a sudoku exercise.

# Breadth-First Search

On the other hand, a breadth-first graph search approach checks the values of all neighboring vertices before moving into another level of depth. This is an incredibly inefficient way to find just any path between two vertices, but it’s an excellent way to identify the shortest path between them. Because of this, BFS is helpful for figuring out directions from one place to another.

# Dijkstra’s Algorithm

Dijkstra’s algorithm is a method for finding the shortest distance from a given point to every other point in a weighted graph. The algorithm works by keeping track of all the distances and updating the distances as it conducts a breadth-first search. A common application of this algorithm is to find the quickest route from one destination to another.
