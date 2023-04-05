<script setup lang="ts">
import { defineProps } from "vue";
import type { BaseValidation } from "@vuelidate/core";

const props = defineProps<{
  fieldName: BaseValidation;
}>();
</script>

<style scoped>
form > .error {
  color: red;
  text-align: right;
}
</style>

<template>
  <template v-if="props.fieldName.$error">
    <span
      class="error"
      v-for="error of props.fieldName.$errors"
      :key="error.$uid"
      >{{ error.$message }}</span
    >
  </template>
</template>
