<template>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex mt-16">
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
      <div class="font-montserrat text-2xl font-semibold text-yellow-700">
        All Parties
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
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8"
      >
        <div v-for="party in parties" :key="party.id">
          <div
            class="shadow-lg transition duration-500 ease-in-out transform hover:scale-105 truncate"
          >
            <div class="flex flex-row shadow-lg border border-gray-300">
              <div
                class="flex px-2 py-2 text-xs md:text-sm bg-gray-400 text-white"
              >
                id
              </div>
              <div
                class="flex px-2 py-2 text-xs md:text-sm text-blue-600 hover:text-blue-900"
              >
                {{ party.id }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import partyQuery from "../graphql/parties.query.gql";
import { useQuery, useResult } from "@vue/apollo-composable";
export default {
  name: "Parties",
  setup() {
    const { result, loading, error } = useQuery(partyQuery);

    const parties = useResult(result, null, (data) => data.parties);

    return { parties, loading, error };
  },
};
</script>
