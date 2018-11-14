const fs = require('fs');

const isDuplicated = (notes, title) => {
    let array = searchForTitle(notes,title);
    if (array.indexOf(true) == -1) {
        return false;
    } else {
        return true;
    }
}
//finding out if the title is present in the array
const searchForTitle = (notes,title)=>{
    return notes.map((el) => el.title === title);
}
//getting an existing note or a blank array
const gettingNotes = () => {
    try {
        let notesGot = fs.readFileSync('notes-data.json');
        return JSON.parse(notesGot);
    } catch (e) {
        return [];
    }
}
//transform note to json and write it to the file
let writeNotes = (notes) =>{
    let notesString = JSON.stringify(notes);
    fs.writeFileSync('notes-data.json', notesString);
}
const addNote = (title, body) => {
    let notes = gettingNotes();
    let noteObj = {
        title,
        body
    };
    if (!isDuplicated(notes, title)) {
        notes.push(noteObj);
        writeNotes(notes);
        console.log(`A note with a title \"${title}\" has been created.`)
    } else {
        console.log('A note with this title already exists.')
    }
};

const editNote = (title,body) =>{
    removeNote(title);
    addNote(title,body);
}

const listNote = () => {
    let notes =  gettingNotes();
    console.log(`The are ${notes.length} note(s).`);
    notes.forEach(note => {
        console.log(`Title : ${note.title}`);
        console.log(`Body : ${note.body}`);
        console.log('-----');
    });
};

const readNote = (title) => {
    let notes = gettingNotes();
    let array = searchForTitle(notes, title);
    let index = array.indexOf(true);
    if (index != -1) {
        let note = notes[index];
        console.log(`Note \"${title}\": `);
        if(note.body)
            console.log(note.body)
        else
            console.log('This note has no body')
    } else {
        console.log('There is no notes with that title');
    }
};

const removeNote = (title) => {
    let notes = gettingNotes();
    let array = searchForTitle(notes,title);
    let index = array.indexOf(true);
    if(index !=-1){
        notes.splice(index, 1);
        writeNotes(notes);
        console.log("the note was removed")
    }else{
        console.log('There is no notes with that title');
    }
    
};
module.exports = {
    addNote,
    listNote,
    readNote,
    removeNote,
    editNote
};