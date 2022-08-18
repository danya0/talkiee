<template>
  <div class="flex items-center">
    <transition name="search-input">
      <form @submit.prevent="search">
        <input
          v-model="searchInput"
          ref="searchInput"
          class="border-2 h-auto mr-2 border-green-700 px-3 py-2 rounded-lg text-black placeholder:text-black w-[300px] placeholder:text-gray-400"
          :placeholder="randomFilmName"
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
  props: {
    searchArray: {
      type: Array,
      default: () => []
    },
    randomFilmName: {
      type: String,
      default: ''
    }
  },
  components: {
    SvgIcons
  },
  data() {
    return {
      searchInput: '' as string
    }
  },
  computed: {
    filmsGreedRef(): HTMLDivElement {
      return this.$store.search.filmsGreedRef
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchInput)
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
