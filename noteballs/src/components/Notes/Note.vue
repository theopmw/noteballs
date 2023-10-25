<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <!-- Display note length in characters using .length -->
        <!-- <small>{{ note.content.length }}</small>  -->
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" href="#" class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        @click.prevent="storeNotes.deleteNote(note.id)"
        href="#"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
// IMPORTS
import { useStoreNotes } from '@/stores/storeNotes';
import { computed } from 'vue';

// STORE

const storeNotes = useStoreNotes();

// PROPS

const props = defineProps({
  note: {
    type: Object,
    reqiured: true,
  },
});

// CHARACTER LENGTH

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? 'characters' : 'character';
  return `${length} ${description}`;
});
</script>
