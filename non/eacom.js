class Tree {
    constructor(root) {
        this._root = root || [];
    }

    updateRoot(node) {
        if (this._root && this._root.length) {
            this._root = node;
        }
    }
}

// Example usage
let myTree = new Tree(['initial']);
console.log(myTree._root);  // Output: ['initial']

myTree.updateRoot('newRoot');
console.log(myTree._root);  // Output: 'newRoot'
