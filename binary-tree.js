class TreeNode{
    constructor(val){
        this.left = null
        this.right = null
        this.value = val
    }
}


function reverse_binary_tree(node){
    if(!node){
        return
    }

    let temp = node.left
    node.left = node.right
    node.right = temp

    reverse_binary_tree(node.left)
    reverse_binary_tree(node.right)
}