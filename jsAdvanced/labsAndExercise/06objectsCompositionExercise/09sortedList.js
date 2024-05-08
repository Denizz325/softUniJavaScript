function createSortedList() {
    let collection = [];

    const add = (num) => {
        collection.push(num);
        collection.sort((a, b) => a - b);
    }

    const remove = (index) => {
        if (index >= 0 && index < collection.length) {
            collection.splice(index, 1);
          }
    }

    const get = (index) => {
        if (index >= 0 && index < collection.length) {
            return collection[index];
          }
    }

    const size = () => {
        return collection.length;
    }

    return {
        add,
        remove,
        get,
        size
    }

}

//не е готова тъпата задача

let list = createSortedList();
console.log(list.size())
list.add(5);
list.add(6);
console.log(list.size())
list.add(7); 
console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));
console.log(list.size())