function solve(input, criteria) {
    const [key, value] = criteria.split('-');
    const objects = JSON.parse(input);
    const result = [];
    let count = -1;

    for (let [index, obj] of objects.entries()) {
        for (let item in obj) {
            if (obj[item] == value) {
                count += 1
                let str = `${count}. ${obj.first_name} ${obj.last_name} - ${obj.email}`;
                result.push(str);
                break; // Необходимо е да прекъснете цикъла след намирането на съвпадение
            }
        }
    }

    console.log(result.join('\n'));
}

solve(`[{

    "id": "1",
    
    "first_name": "Kaylee",
    
    "last_name": "Johnson",
    
    "email": "k0@cnn.com",
    
    "gender": "Female"
    
    }, { 
    
    "id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`, 'last_name-Johnson')