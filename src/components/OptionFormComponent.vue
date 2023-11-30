<template>
  <div class="w-full">
    <ul>
      <li v-for="(option, index) in options" :key="index">
        {{ option.text }}
        <button @click="removeOption(index)">Remove</button>
      </li>
    </ul>
    <input
      type="text"
      v-model="newOption"
      placeholder="Enter option..."
      class="w-full rounded-[10px] h-[40px]"
    />
    <button @click="addOption" class="bg-[#0d2137] text-[#fff] p-[10px] rounded-[10px]">Add Option</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    options: Array,
  },
  setup(props, { emit }) {
    const newOption = ref("");

    const addOption = () => {
      if (newOption.value.trim() !== "") {
        emit("addOption", { text: newOption.value, correct: false });
        // Reset input field
        newOption.value = "";
      }
    };

    const removeOption = (index) => {
      emit("removeOption", index);
    };

    return {
      newOption,
      addOption,
      removeOption,
    };
  },
};
</script>
