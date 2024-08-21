<template>
  <div>
    <button
      @click="showModal('center')"
      class="rounded mx-2 bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Open Center Modal
    </button>
    <button
      @click="showModal('left')"
      class="rounded mx-2 bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Open Left Modal
    </button>
    <button
      @click="showModal('right')"
      class="rounded mx-2 bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Open Right Modal
    </button>
    <button
      @click="showModal('top')"
      class="rounded mx-2 bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Open Top Modal
    </button>
    <button
      @click="showModal('bottom')"
      class="rounded mx-2 bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Open Bottom Modal
    </button>

    <Modal
      v-if="isModal"
      v-model="isModal"
      :position="modalPosition"
      :width="modalWidth"
      :height="modalHeight"
    >
      <h2>{{ modalPosition }} Modal</h2>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isModal = ref(false);
const modalPosition = ref("");
const modalWidth = ref("");
const modalHeight = ref("");

function showModal(type: string) {
  modalPosition.value = type;
  switch (type) {
    case "top" || "bottom":
      modalHeight.value = "400px";
      modalWidth.value = "";
      break;
    case "left" || "right":
      modalHeight.value = "";
      modalWidth.value = "400px";
      break;
    default:
      modalHeight.value = "400px";
      modalWidth.value = "400px";
      break;
  }
  isModal.value = true;
  //   setTimeout(() => {
  //   }, 400);
}
</script>
