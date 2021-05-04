<template>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex mt-16">
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
      <div class="font-montserrat text-2xl font-semibold text-yellow-700">
        All Assets
      </div>
    </div>
  </div>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto mt-2">
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
      <div
        v-if="loading"
        class="max-w-screen-lg xl:max-w-screen-xl mx-auto mt-2">
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
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8"
      >
        <div v-for="asset in assets" :key="asset.id">
          <div>
            <div
              class="shadow-lg transition duration-500 ease-in-out transform hover:scale-105 truncate"
            >
              <div class="shadow-lg border border-gray-300">
                <div class="relative pb-5/6">
                  <span
                    class="font-montserrat text-white text-xs px-2 right-0 mt-2 -mr-1 rounded-md font-semibold absolute tracking-wide z-20"
                    :class="
                      asset.source.__typename != 'BuiltinAsset' ? 'bg-indigo-500' : 'bg-pink-500'
                    "
                  >
                    {{ asset.source.__typename }}
                  </span>
                </div>
                <div>
                  <div class="font-montserrat bg-white px-1 py-1 rounded-b-lg">
                    <div
                      class="mt-1 font-semibold text-sm leading-tight truncate"
                    >
                      <a
                        href="#/release/1"
                        class="no-underline text-yellow-500 hover:text-yellow-600"
                      >
                        {{ asset.name }}
                      </a>
                    </div>
                    <div
                      class="flex flex-col mt-1 text-gray-700 font-semibold text-sm leading-tight truncate"
                    >
                      <div class="flex">symbol:&nbsp;{{ asset.symbol }}</div>
                    </div>
                    <div class="divide-y divide-gray-200"></div>
                    <div
                      class="flex flex-col mt-1 text-gray-700 font-light text-sm leading-tight truncate"
                    >
                      <div class="flex">
                        total supply:&nbsp;{{ asset.totalSupply }}
                      </div>
                      <div class="flex">
                        decimals:&nbsp;{{ asset.decimals }}
                      </div>
                      <div class="flex">
                        balance:&nbsp;{{
                          asset.infrastructureFeeAccount.balance
                        }}
                      </div>
                      <div class="flex">
                        type:&nbsp;{{ asset.infrastructureFeeAccount.type }}
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
import assetQuery from "../graphql/assets.query.gql";
import { useQuery, useResult } from "@vue/apollo-composable";
export default {
  name: "Assets",
  setup() {
    const { result, loading, error } = useQuery(assetQuery);
    const assets = useResult(result, null, (data) => data.assets);
    return { assets, loading, error };
  },
};
</script>
