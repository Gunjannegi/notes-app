import { useState } from "react"

export default function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('');
    const charactrLimit = 1000;

    function handleChange(event) {
        if ((charactrLimit - event.target.value.length) >= 0) {
            setNoteText(event.target.value);
        }
    }
    function handleSave() {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    return (
        <div className='note new'>
            <textarea rows='8'
                cols='10'
                placeholder='Type to add a note...'
                onChange={handleChange}
                value={noteText}>
            </textarea>
            <div className='note-footer'>
                <small>{charactrLimit - noteText.length}</small>
                <button className='save' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}