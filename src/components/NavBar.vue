<template>
  <nav class="mt-5 mb-14 flex justify-between items-center h-[35px]">
    <ul class="flex gap-2 text-lg">
      <li>
        <router-link active-class="active-link" to="/">Главная</router-link>
      </li>
      <li>
        <router-link active-class="active-link" to="/favorite">
          Избранное
        </router-link>
      </li>
    </ul>
    <AppSearch />
  </nav>
</template>
<script>
import AppSearch from '@/components/AppSearch'
export default {
  components: { AppSearch }
}
</script>

<style>
.active-link {
  position: relative;
}

.active-link:before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  @apply bg-green-700;
}
</style>
