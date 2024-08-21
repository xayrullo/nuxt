<template>
  <div class="text-red-400">Lorem ipsum dolor sit.</div>
  <div class="app-text">Lorem ipsum dolor sit amet.</div>
  <ModalExample />
  <div>
    <button
      v-for="(locale, ind) in locales"
      :key="ind"
      @click="changeLocale(locale)"
      class="rounded mx-2 bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {{ locale.name }}
    </button>
    {{ $t("welcome") }}
  </div>
</template>
<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n";
const i18n = useI18n();
const switchLocalePath = useSwitchLocalePath();

console.log(i18n.locale.value);
const locales = computed(() => i18n.locales.value);

function changeLocale(loc: LocaleObject) {
  i18n.setLocale(loc.code);
}
</script>
