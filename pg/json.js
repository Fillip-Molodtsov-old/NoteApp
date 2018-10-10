const fs = require('fs');
let personObj = {
    name:'Phil',
    age:17,
    isMarried:false,
};
const personObjString = JSON.stringify(personObj);
fs.writeFileSync('note.json',personObjString);

const noteJSON = fs.readFileSync('note.json');
let note = JSON.parse(noteJSON);
console.log(note.age+1);

