import { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';
function App() {
    const [notes, setNotes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
        if (savedNotes) {
            setNotes(savedNotes);
        }
    },[])
    useEffect(() => {
        localStorage.setItem('react-notes-app-data',
            JSON.stringify(notes))
    }, [notes])
    function addNote(text) {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }
    function deleteNode(id) {
        const filterNotes = notes.filter((note) => note.id !== id);
        setNotes(filterNotes);
    }
    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header handleToggleDarkMode={setDarkMode} />
                <Search handleSearchNote={setSearchText} />
                <NotesList
                    notes={notes.filter((note) =>
                        note.text.toLowerCase().includes(searchText)
                    )}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNode} />
            </div>
        </div>
     
  );
}

export default App;
