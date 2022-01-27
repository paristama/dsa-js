class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i) * 23;
        }
        
        return hash % this.dataMap.length;
    }

    set(key, value){
        const index = this._hash(key);
        if (!this.dataMap[index]) this.dataMap[index] = [];
        this.dataMap[index].push([key, value]);

        return this;
    }

    get(key) {
        const index = this._hash(key);
        const temp = this.dataMap[index];
        if (temp) {
           for (let i = 0; i < temp.length; i++) {
               if (temp[i][0] === key) return temp[i][1];
           }   
        }
        
        return undefined;
    }

    keys(){
        let allKeys = [];
        for (let i = 0; i < this.dataMap.length; i++){
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0]);
                } 
            }
        }

        return allKeys;
    }
}

const myHashTable = new HashTable();
myHashTable.set('lumber', 70);
myHashTable.set('washers', 50);
myHashTable.set('bolts', 1400);
myHashTable.get('washers');
myHashTable.keys();