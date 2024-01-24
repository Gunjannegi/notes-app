import AddNote from "./AddNote";
import Note from "./Note";

export default function NotesList({ notes, handleAddNote, handleDeleteNote }) {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote} />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}