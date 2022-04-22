const names = [
    { name: 'asadul', age: 2, father: 'Sayed', mother: 'Sonia' },
]

for (const name of names) {
    // console.log(name.father)
}

const students = ['asadul', 'amin', 'akhand']
// console.log(students) 

const products = {
    name: 'asadul', age: 2, father: 'Sayed', mother: 'Sonia'
}
// console.log(products.father)

let db = {};
const addToDb = item => {
    const storedData = localStorage.getItem(db)
    if (storedData) {
        db = JSON.parse(storedData)
    }

    // db.alam = 1;
    // db['alam'] = 1
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    localStorage.setItem('name', JSON.stringify(db))
    // console.log(db)
}

const removeItem = item => {
    const storedItem = localStorage.getItem('name')
    if (storedItem) {
        const stored = JSON.parse(storedItem)
        delete stored[item];
        localStorage.setItem('names', JSON.stringify(stored))
    }
}
