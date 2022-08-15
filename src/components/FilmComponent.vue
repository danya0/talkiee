<template>
  <div
    class="group cursor-pointer"
    :class="{ 'w-full h-full': slideMode, 'h-[325px] w-[220px]': !slideMode }"
  >
    <div
      class="relative rounded-lg h-full w-full bg-green-700 overflow-hidden mb-1"
    >
      <img
        :src="img"
        class="transition-transform duration-[300ms] ease-in-out h-full w-full object-cover group-hover:scale-105 with-before"
      />
      <div
        class="transition-opacity duration-[300ms] h-full w-full absolute top-0 left-0 bg-black group-hover:opacity-60 opacity-0"
      />
      <div
        class="transition-transform duration-[300ms] group-hover:translate-y-0 absolute bottom-0 w-full h-1/4 p-2 flex items-center justify-between rounded-lg bg-black text-white translate-y-full"
      >
        <button>Смотреть</button>
        <button>В избранное</button>
      </div>
    </div>
    <p v-if="!noTitle" class="text-lg truncate">
      Реальные упыри 229 львдлыфв и алал ла
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    noTitle: {
      type: Boolean,
      default: false
    },
    slideMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/3d4d23ac-812a-4654-9672-5c8c91308587/300x450'
    }
  }
})
</script>
