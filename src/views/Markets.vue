<template>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex mt-16">
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
      <div class="font-montserrat text-2xl font-semibold text-yellow-700">
        All Markets
      </div>
    </div>
  </div>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto mt-2">
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
      <div
        v-if="loading"
        class="max-w-screen-lg xl:max-w-screen-xl mx-auto mt-2"
      >
        Loading...
      </div>
      <div
        v-else-if="error"
        class="max-w-screen-lg xl:max-w-screen-xl mx-auto mt-2"
      >
        {{ error.message }}
      </div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8"
      >
        <div v-for="(market, index) in markets" :key="index">
          <div>
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
                        liquidity fee:&nbsp;{{
                          market.fees.factors.liquidityFee
                        }}
                      </div>
                    </div>
                    <div class="flex flex-row flex-wrap">
                      <div
                        v-for="(tag, index) in market.tradableInstrument.instrument.metadata.tags"
                        :key="index"
                      >
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
</template>

<script>
import marketQuery from "../graphql/markets.query.gql";
import { useQuery, useResult } from "@vue/apollo-composable";
export default {
  name: "LandingMarkets",
  setup() {
    const { result, loading, error } = useQuery(marketQuery);

    const markets = useResult(result, null, (data) => data.markets);

    return { markets, loading, error };
  },
};
</script>
