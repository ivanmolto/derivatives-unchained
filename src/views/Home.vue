<template>
  <div
    class="-mt-6 max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center">
    <div class="px-4 mt-16 sm:px-6 md:px-8 mb-6 sm:mb-10 xl:mb-4">
      <div
        class="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black">
        Data To Boost Your
      </div>
    </div>
  </div>
  <div
    class="flex-col max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-center"
  >
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
      <div
        class="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-gradient-to-r bg-clip-text from-yellow-500 to-yellow-700">
        Derivatives Trading
      </div>
    </div>
  </div>
  <LandingTrades />
  <LandingMarkets class="-mt-20" />
  <LandingShares />
  <LandingApi class="-mt-8" />
</template>

<script>
import LandingTrades from "../components/LandingTrades";
import LandingShares from "../components/LandingShares";
import LandingApi from "../components/LandingApi";
import LandingMarkets from "../components/LandingMarkets";

export default {
  name: "Home",
  components: {
    LandingTrades,
    LandingShares,
    LandingApi,
    LandingMarkets,
  },
  setup() {},
};
</script>
