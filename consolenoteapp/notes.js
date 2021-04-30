const fs = require('fs');
const chalk = require('chalk');
const getNotes = function (str) {
    return str
}
const addNotes = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes=notes.filter((note)=>{return note.title===title})

    
    if(duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
        }) 
        console.log("New note added!");
    }else{
        console.log("Note title taken");
    }
    saveNotes(notes)
}

const saveNotes = function (notes) {
    const dataJSON =JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const removeNotes = function (title) {
    let notes = loadNotes()
    notes=notes.filter((note)=>{return note.title!==title})
    saveNotes(notes)
}
const listNotes = function () {
    const notes =loadNotes()
    console.log(chalk.inverse("Your notes"));
    notes.forEach(note => {
        console.log(note.title);
    });
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes:listNotes,
    readNote:readNote
}
