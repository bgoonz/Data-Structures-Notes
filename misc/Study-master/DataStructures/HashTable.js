class HashTable {
  // default bucket size of 42
  constructor(size=42) {
    this.buckets = new Array(size)
    this.size = size
  }

  // our hashing function
  // it converts the input key to a string, then mods it's length by the size of the bucket
  hash(key) {
    return key.toString().length % this.size;
    console.log(this)
  }

  // if a key, value pair doesn't already exist in the buckets array for this index / hash of this key
  // set it equal to an empty array
  set(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value])

    return index 
  }

  // retrieve data by key
  // hash the key to get the index of that bucket
  // if there's no bucket at that index, return null
  // else for loop through the key/value pairs stored in that bucket
  // if the first element in a pair === the key, then the second element is the data that you are looking for
  get(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) return null;

    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        return bucket[1]
      }
    }
  }
}

let hash = new HashTable();
hash.set("california", "home");
hash.set("tokyo", "favorite");
hash.set("london", "second home")
console.log(hash.get("tokyo"))
console.log(hash.get("california"))
console.log(hash.get("london"))