// const fs = require('fs');
// const os = require('os');
// const user = os.userInfo();
// const note = require('./note.js');
// console.log(note.add(5,-3));
// fs.appendFile('hello.txt',`hello ${user.username}!\n`,()=>{});

// const _ = require('lodash')

// console.log(_.nth([5,6,7,8],2))


//----------------------------------------------
const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');

const note = require('./note.js');

let argv = yargs.argv;
let parameter = process.argv[2];
console.log(argv);

if(parameter == 'add'){
    note.addNote(argv.title,argv.body);
}else if(parameter == 'list'){
    note.listNote();
}else if(parameter =='read'){
    note.readNote(argv.title)
}else if(parameter =='remove'){
    note.removeNote(argv.title)
}else{
    console.log('Command not recognised')
}
