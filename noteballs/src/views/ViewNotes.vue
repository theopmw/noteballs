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
    </div>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

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
</template>

<script setup>
// IMPORTS
import { ref } from 'vue';
import Note from '@/components/Notes/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';

// NOTES

const newNote = ref('');
const newNoteRef = ref(null);

// STORE

const storeNotes = useStoreNotes();

const addNote = () => {
  storeNotes.addNote(newNote.value);
};
</script>
