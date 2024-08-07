/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
  let res = [];
  helper(root);

  function helper(root) {
    if (root != null) {
      helper(root.left);
      res.push(root.val);
      helper(root.right);
    }
  }
  return res;
};