class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   //constructor needs property root
   constructor () {
    this.root = null;
   }

   findNode(val) {
    let currentNode = this.root;
    let found = false;
    while( !found ) {
        if (val < currentNode.val) {
             if (currentNode.left === null) {
                 return currentNode;
             } else {
                currentNode = currentNode.left;
             }
        } else if (val >= currentNode.val) {
            if (currentNode.right === null) {
                return currentNode;
            } else {
                currentNode = currentNode.right;
            }
        } else {
            console.log(`NOT FOUND!!!`);
            found = true;
        }

    }
   }
   insertOrig(val) {
        let newNode = new TreeNode(val);
        //console.log("This root: ", this.root);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // find insertion point
        let currentNode = this.findNode(val);

        if (currentNode != undefined ) {
        if (val < currentNode.val) {
            //left is null & right is null;
                currentNode.left = newNode;
            } else { // >=
                currentNode.right = newNode;
            }
        } else {
            return undefined;
        }
    }

    insert (val, currentNode=this.root) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }

        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = new TreeNode(val);
            } else {
                this.insert(val, currentNode.left);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = new TreeNode(val);
            } else {
                this.insert(val, currentNode.right);
            }
        }
    }

    searchRecur(val, currentNode = this.root){
        if (!currentNode) return false;

        if (val < currentNode.val) {
            return this.searchRecur(val, currentNode.left);
        } else if ( val > currentNode.val) {
            return this.searchRecur(val, currentNode.right);
        } else {
            return true;
        }
    }

    searchIter(val) {
        let currentNode = this.root;

        while (currentNode) {
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};
