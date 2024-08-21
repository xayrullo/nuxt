<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    @click="close"
  >
    <div
      :class="['modal-content', positionClass]"
      @click.stop
      class="absolute bg-white py-2 px-1"
    >
      <slot></slot>
      {{ width }}
      {{ height }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  position: {
    type: String,
    default: "center",
    validator: (value: string) =>
      ["center", "left", "right", "top", "bottom"].includes(value),
  },
  width: {
    type: String,
    default: "400px",
  },
  height: {
    type: String,
    default: "400px",
  },
});

const emit = defineEmits(["update:modelValue"]);

const isVisible = ref(props.modelValue);

watch(isVisible, (newValue) => {
  emit("update:modelValue", newValue);
});

const close = () => {
  isVisible.value = false;
};

const positionClass = computed(() => {
  switch (props.position) {
    case "left":
      return `top-1/2 left-0 -translate-y-1/2 h-full w-[${props.width}]`;
    case "right":
      return `top-1/2 right-0 transform -translate-y-1/2 h-full w-[${props.width}]`;
    case "top":
      return `top-0 left-1/2 transform -translate-x-1/2 w-full h-[${props.height}]`;
    case "bottom":
      return `bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[${props.height}]`;
    default:
      return `top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg h-[${props.height}] w-[${props.width}]`;
  }
});
</script>

<style scoped>
.modal-content {
  @apply bg-white p-6 rounded-lg max-w-lg w-full relative;
}
</style>
