<template>
  <header
    class="font-montserrat mt-8 sm:flex sm:items-center sm:justify-between bg-white"
  >
    <div class="flex justify-between px-4 py-3">
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="#F59E0B"
        >
          <g>
            <rect fill="none" height="24" width="24" />
            <path
              d="M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z"
            />
          </g>
        </svg>
      </router-link>
      <div class="flex sm:hidden">
        <button
          @click="toggle"
          type="button"
          class="px-2 text-yellow-500 hover:text-yellow-600 focus:outline-none focus:text-yellow-500"
        >
          <svg
            class="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      class="sm:flex sm:items-center sm:px-4"
      :class="{ 'hidden': !isOpen, 'block': isOpen }">
      <div class="sm:flex">
        <div
          class="px-2 pt-2 pb-5 border-b border-yellow-500 sm:flex sm:border-b-0 sm:py-0 sm:px-0"
        >
          <router-link
            to="/markets"
            class="block px-3 py-1 rounded font-semibold sm:text-base text-yellow-500 sm:px-2 hover:bg-yellow-500 hover:text-white leading-6 hover:py-3 hover:px-6 hover:border hover:border-transparent hover:rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-600 focus:outline-none"
          >
            Markets
          </router-link>
          <router-link
            to="/trades"
            class="mt-1 block px-3 py-1 rounded font-semibold sm:mt-0 sm:text-base sm:px-2 sm:ml-2 text-yellow-500 hover:bg-yellow-500 hover:text-white leading-6 hover:py-3 hover:px-6 hover:border hover:border-transparent hover:rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-600 focus:outline-none"
          >
            Trades
          </router-link>
          <router-link
            to="/orders"
            class="mt-1 block px-3 py-1 rounded font-semibold sm:mt-0 sm:text-base sm:px-2 sm:ml-2 text-yellow-500 hover:bg-yellow-500 hover:text-white leading-6 hover:py-3 hover:px-6 hover:border hover:border-transparent hover:rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-600 focus:outline-none"
          >
            Orders
          </router-link>
          <router-link
            to="/assets"
            class="mt-1 block px-3 py-1 rounded font-semibold sm:mt-0 sm:text-base sm:px-2 sm:ml-2 text-yellow-500 hover:bg-yellow-500 hover:text-white leading-6 hover:py-3 hover:px-6 hover:border hover:border-transparent hover:rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-600 focus:outline-none"
          >
            Assets
          </router-link>
          <router-link
            to="/parties"
            class="mt-1 block px-3 py-1 rounded font-semibold sm:mt-0 sm:text-base sm:px-2 sm:ml-2 text-yellow-500 hover:bg-yellow-500 hover:text-white leading-6 hover:py-3 hover:px-6 hover:border hover:border-transparent hover:rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-600 focus:outline-none"
          >
            Parties
          </router-link>
          <router-link
            to="/statistics"
            class="mt-1 block px-3 py-1 rounded font-semibold sm:mt-0 sm:text-base sm:px-2 sm:ml-2 text-yellow-500 hover:bg-yellow-500 hover:text-white leading-6 hover:py-3 hover:px-6 hover:border hover:border-transparent hover:rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-600 focus:outline-none"
          >
            Stats
          </router-link>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
  <footer
    class="mt-8 font-montserrat sm:flex sm:items-center sm:justify-between bg-white"
  >
    <div class="flex justify-between px-4 py-3">
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="#F59E0B"
        >
          <g>
            <rect fill="none" height="24" width="24" />
            <path
              d="M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z"
            />
          </g>
        </svg>
      </router-link>
    </div>
    <div class="font-montserrat text-yellow-500 px-4 py-3">Built with love from Web3</div>
  </footer>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
