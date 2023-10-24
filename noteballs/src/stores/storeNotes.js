import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [
      {
        id: 'id1',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi facilis nam repellat cumque autem est laborum, modi officia culpa dignissimos sit ad repudiandae quia? Iusto officia illo rem!Assumenda!',
      },
      {
        id: 'id2',
        content: 'Short note',
      },
    ],
  }),
  actions: {
    addNote(newNoteContent) {
      let note = {
        id: uuidv4(),
        content: newNoteContent,
      };
      this.notes.unshift(note);
      newNote.value = '';
      newNoteRef.value.focus();
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete;
      });
    },
  },
});
