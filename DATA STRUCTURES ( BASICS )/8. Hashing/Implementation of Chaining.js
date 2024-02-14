class MyHash {
  //b is size for bucket
  constructor(b) {
    this.BUCKET = b;
    this.table = [];
    //creating bucket of size b provide by user
    for (let i = 0; i < b; i++) {
      this.table[i] = [];
    }
  }

  //insert method
  insert(x) {
    let i = x % this.BUCKET;
    this.table[i].push(x);
  }

  //search method
  search(x) {
    let i = x % this.BUCKET;
    for (let j = 0; j < this.table[i].length; j++) {
      if (this.table[i][j] === x) {
        return true;
      }
    }
    return false;
  }

  //remove method
  remove(x) {
    let i = x % this.BUCKET;
    if (this.table[i].indexOf(x) === -1) {
      return;
    }
    this.table[i].splice(this.table[i].indexOf(x), 1);
  }
}

let h = new MyHash(7);
h.insert(70)
h.insert(71)
h.insert(56)
console.log(h.search(71));
h.remove(56)
console.log(h.search(56));
console.log(h.search(86));
console.log(h.table);
