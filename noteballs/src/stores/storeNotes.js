import { defineStore } from 'pinia';

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
});
