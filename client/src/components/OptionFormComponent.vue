<template>
  <div class="w-full items-center my-3">
    <div class="flex flex-row items-center space-x-2">
      <input
        v-model.trim="option.value"
        type="text"
        placeholder="Enter option value"
        class="w-full rounded-md p-2"
        required
      />
      <input v-model="option.correct" type="checkbox" />
      <div @click="removeOption" class="cursor-pointer">
        <remove-icon></remove-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import RemoveIcon from "./icons/RemoveIcon.vue";

export default defineComponent({
  components: { RemoveIcon },
  props: {
    option: Object,
  },
  setup(props, { emit }) {
    const removeOption = () => {
      emit("remove-option", props.option);
    };

    return {
      removeOption,
    };
  },
});
</script>