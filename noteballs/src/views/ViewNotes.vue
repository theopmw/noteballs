<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <div v-for="note in notes" :key="note.id" class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
// IMPORTS
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// NOTES

const newNote = ref('');
const newNoteRef = ref(null);

const notes = ref([
  {
    id1: 'id1',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi facilis nam repellat cumque autem est laborum, modi officia culpa dignissimos sit ad repudiandae quia? Iusto officia illo rem!Assumenda!',
  },
  {
    id2: 'id2',
    content: 'Short note',
  },
]);

const addNote = () => {
  let note = {
    id: uuidv4(),
    content: newNote.value,
  };
  notes.value.unshift(note);

  newNote.value = '';

  newNoteRef.value.focus();
};
</script>
