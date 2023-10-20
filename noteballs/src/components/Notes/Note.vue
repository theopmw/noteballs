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
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
// IMPORTS
import { computed } from 'vue';

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

//
</script>
