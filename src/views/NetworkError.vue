<template>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex mt-16">
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
      <div class="font-montserrat text-2xl font-semibold text-yellow-700">
        Uh-Oh!
      </div>
      <div class="font-montserrat text-2xl font-semibold text-yellow-700">It looks like you're experiencing some network issues, please take a</div>
      <div class="font-montserrat text-2xl font-semibold text-yellow-700">
        breath and <a href="#" @click="$router.go(-1)">click here</a>to try again.
      </div>
    </div>
  </div>
</template>
