<template>
  <div class="flex items-center">
    <transition name="search-input">
      <form @submit.prevent>
        <input
          ref="searchInput"
          v-if="isSearch"
          class="border-2 h-auto mr-2 border-green-700 px-3 py-2 rounded-lg text-black placeholder:text-black w-[300px]"
          placeholder="Ищете что-то конкретное?"
          type="text"
        />
      </form>
    </transition>
    <SvgIcons
      class="w-[35px] h-[35px] mr-2 cursor-pointer"
      svg="search"
      @click="search"
    />
  </div>
</template>

<script lang="ts">
import SvgIcons from '@/components/SvgIcons.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    SvgIcons
  },
  data() {
    return {
      isSearch: false
    }
  },
  methods: {
    search() {
      if (this.isSearch) {
        ;(this.$refs.filmsGreed as any).scrollTo()
      }
      this.isSearch = true
      ;(this.$refs.searchInput as any).select()
    }
  }
})
</script>

<style>
.search-input-enter-active,
.search-input-leave-active {
  transition: opacity 0.5s ease;
}

.search-input-enter-from,
.search-input-leave-to {
  opacity: 0;
}
</style>
