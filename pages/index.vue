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
  <div id="swiper">
    <Swiper
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
      :autoplay="{ delay: 2500, disableOnInteraction: true }"
      :modules="[
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperPagination,
        SwiperNavigation,
      ]"
      :pagination="{
        type: 'progressbar',
      }"
      :navigation="true"
    >
      <SwiperSlide>
        <img
          src="../public/images/banner1.jpg"
          alt="Image 1"
          class="w-full h-96 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../public/images/banner2.avif"
          alt="Image 2"
          class="w-full h-96 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../public/images/banner3.jpg"
          alt="Image 3"
          class="w-full h-96 object-cover"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n";

// import { useProductsStore } from "../stores/products";

const i18n = useI18n();
const switchLocalePath = useSwitchLocalePath();

// const productsStore = useProductsStore();

// console.log("ProductsStore", productsStore);

// async function fetchData() {}

const locales = computed(() => i18n.locales.value);

function changeLocale(loc: LocaleObject) {
  i18n.setLocale(loc.code);
}
</script>
