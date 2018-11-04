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
console.log(argv._);

if(argv._ == 'add'){
    let handle = note.addNote(argv.title,argv.body);
    if(handle == -1) console.log('A note with this title already exists.')
    else console.log(`A note with a title \"${handle}\" has been created.`)
}else if(argv._ == 'list'){
    note.listNote();
}else if(argv._ =='read'){
    note.readNote(argv.title)
}else if(argv._ =='remove'){
    note.removeNote(argv.title)
}else{
    console.log('Command not recognised')
}
