import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Maybe my second note',
      date: '1/1/2021',
    },
    {
      id: nanoid(),
      text: 'Maybe my fifth note',
      date: '1/23/2021',
    },
    {
      id: nanoid(),
      text: 'Maybe my third note',
      date: '1/31/2021',
    },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
