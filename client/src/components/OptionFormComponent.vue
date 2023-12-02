<template>
  <div class="w-full items-center my-3">
    <div class="flex flex-row items-center space-x-2">
      <input
        v-model="option.value"
        type="text"
        placeholder="Enter option value"
        class="w-full rounded-md p-2"
      />
      <input v-model="option.correct" type="checkbox" />
      <div @click="removeOption">
        <remove-icon></remove-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import RemoveIcon from "./icons/RemoveIcon.vue";

export default defineComponent({
  components: { RemoveIcon },
  props: {
    option: Object,
  },
  setup(_, { emit }) {
    function removeOption() {
      emit("remove-option", option);
    }

    return {
      removeOption,
    };
  },
});
</script>
