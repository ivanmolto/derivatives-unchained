<template>
  <div
    class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-center mt-12"
  >
    <div class="px-4 sm:px-6 md:px-8 mb-6 xl:mb-8">
      <div
        class="font-montserrat text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-700"
      >
        Start Uncovering Insights
      </div>
    </div>
  </div>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto mt-2">
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
      >
        <div v-for="(market, index) in markets" :key="index">
          <div v-if="index <= 5">
            <div
              class="shadow-lg transition duration-500 ease-in-out transform hover:scale-105 truncate"
            >
              <div class="shadow-lg border border-gray-300">
                <div class="relative pb-5/6">
                  <span
                    class="font-montserrat text-white text-xs px-2 right-0 mt-2 -mr-1 rounded-md font-semibold absolute lowercase tracking-wide z-20"
                    :class="
                      market.state != 'REJECTED' ? 'bg-green-400' : 'bg-red-400'
                    "
                  >
                    {{ market.state }}
                  </span>
                </div>
                <div>
                  <div class="font-montserrat bg-white px-1 py-1 rounded-b-lg">
                    <div
                      class="mt-1 font-semibold text-sm leading-tight truncate"
                    >
                      <div class="no-underline text-yellow-500">
                        {{ market.name }}
                      </div>
                    </div>
                    <div
                      class="flex flex-col mt-1 text-gray-700 font-semibold text-sm leading-tight truncate"
                    >
                      <div class="flex lowercase">
                        product:&nbsp;{{
                          market.tradableInstrument.instrument.product
                            .__typename
                        }}
                      </div>
                      <div class="flex lowercase">
                        trading mode:&nbsp;{{ market.tradingMode }}
                      </div>
                    </div>
                    <div class="divide-y divide-gray-200"></div>
                    <div
                      class="flex flex-col mt-1 text-gray-700 font-light text-sm leading-tight truncate"
                    >
                      <div class="flex">
                        maker fee:&nbsp;{{ market.fees.factors.makerFee }}
                      </div>
                      <div class="flex">
                        infrastructure fee:&nbsp;{{
                          market.fees.factors.infrastructureFee
                        }}
                      </div>
                      <div class="flex">
                        liquidity fee:&nbsp;{{ market.fees.factors.liquidityFee }}
                      </div>
                    </div>
                    <div class="flex flex-row flex-wrap">
                      <div
                        v-for="(tag, index) in market.tradableInstrument.instrument.metadata.tags" :key="index">
                        <div
                          class="ml-1 flex place-self-center text-xs text-white font-semibold bg-indigo-400 rounded-3xl my-2 px-2.5 py-0.5 lowercase"
                        >
                          {{ tag }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="-mt-4 max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-center"
  >
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8 mt-6 xl:mt-10">
      <router-link
        to="/markets"
        class="shadow-lg font-montserrat w-full sm:w-auto flex-none bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-white font-semibold leading-6 py-3 px-6 border border-transparent rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-900 focus:outline-none inline-flex items-baseline"
        href="#/home"
      >
        Discover More<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="18px"
          height="18px"
          class="h-6 w-6 fill-current place-self-end ml-1">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
import marketQuery from "../graphql/markets.query.gql";
import { useQuery, useResult } from "@vue/apollo-composable";
export default {
  name: "LandingMarkets",
  setup() {
    const { result } = useQuery(marketQuery);

    const markets = useResult(result, null, (data) => data.markets);

    return { markets };
  },
};
</script>
