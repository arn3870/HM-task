<template>
  <div>
     <h3 class="text-center text-[40px] font-bold">Preview</h3>
     <ul>
       <li v-for="(question, index) in questions" :key="index" class="font-bold">
         {{ question.question }}
         <ul>
           <li v-for="(option, i) in question.options" :key="i" class="font-normal">
             {{ option.value }}
             <span v-if="option.correct">(correct)</span>
           </li>
         </ul>
       </li>
     </ul>
  </div>
 </template>
 
 <script>
 import { defineComponent } from 'vue';
 
 export default defineComponent({
  props: {
     questions: Array,
  },
 });
 </script>