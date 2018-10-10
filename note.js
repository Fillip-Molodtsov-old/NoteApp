const addNote = (title,body)=>{
    console.log(`Adding a note "${title}" with the body:\n${body}`)
};
const listNote = () => {
    console.log(`That's the List`)
};
const readNote = (title) => {
    console.log(`That's the note "${title}"\n`)
};
const removeNote = (title) => {
    console.log(`Note "${title}" has been removed`)
};
module.exports = {
    addNote,
    listNote,
    readNote,
    removeNote,
};