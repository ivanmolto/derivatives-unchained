<template>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex mt-16">
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
      <div class="font-montserrat text-2xl font-semibold text-yellow-700">
        Oops!
      </div>
      <div class="font-montserrat text-2xl font-semibold text-yellow-700">The {{ resource }} you're looking for is not here.</div>
      <div class="font-montserrat text-2xl font-semibold text-yellow-700">
        <router-link :to="{ name: 'Home' }">Back to the home page</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: "page",
    },
  },
};
</script>
