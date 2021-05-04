<template>
  <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto flex mt-16">
    <div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
      <div class="font-montserrat text-2xl font-semibold text-yellow-700">
        All Statistics
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
      <div v-else>
        <div class="-mt-4 mb-4 flex justify-center font-semibold">
          <div
            :class="
              statistics.status != 'CHAIN_STATUS_CONNECTED'
                ? 'text-red-500'
                : 'text-green-500'
            "
          >
            {{ statistics.status }}
          </div>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 text-gray-600"
        >
          <div class="shadow-lg border border-gray-300">
            <div class="px-4 py-4">
              <div class="text-yellow-600 font-semibold">General</div>
              App version:&nbsp;{{ statistics.appVersion }}<br />
              Chain version:&nbsp;{{ statistics.chainVersion }}<br />
              Block height:&nbsp;{{ statistics.blockHeight }}<br />
              Tx per block:&nbsp;{{ statistics.txPerBlock }}<br />
              Average orders per block:&nbsp;{{
                statistics.averageOrdersPerBlock
              }}
              <br />
              Total peers:&nbsp;{{ statistics.totalPeers }}<br />
            </div>
          </div>
          <div class="shadow-lg border border-gray-300">
            <div class="px-4 py-4">
              <div class="text-yellow-600 font-semibold">Time</div>
              Orders per second:&nbsp;{{ statistics.ordersPerSecond }} <br />
              Trades per second:&nbsp;{{ statistics.tradesPerSecond }} <br />
              Current Time:&nbsp;{{ statistics.currentTime }} <br />
              Genesis Time:&nbsp;{{ statistics.genesisTime }} <br />
              Up time:&nbsp;{{ statistics.upTime }} <br />
              Vega time:&nbsp;{{ statistics.vegaTime }} <br />
            </div>
          </div>
          <div class="shadow-lg border border-gray-300">
            <div class="px-4 py-4">
              <div class="text-yellow-600 font-semibold">Subscriptions</div>
              Candle subscriptions:&nbsp;{{ statistics.candleSubscriptions
              }}<br />
              Market depth subscriptions:&nbsp;{{
                statistics.marketDepthSubscriptions
              }}<br />
              Market depth update subscriptions:&nbsp;{{
                statistics.marketDepthUpdateSubscriptions
              }}<br />
              Order subscriptions:&nbsp;{{ statistics.orderSubscriptions }}
              <br />
              Positions subscriptions:&nbsp;{{
                statistics.positionsSubscriptions
              }}<br />
              Trade subscriptions:&nbsp;{{ statistics.tradeSubscriptions }} <br />
            </div>
          </div>
          <div class="shadow-lg border border-gray-300">
            <div class="px-4 py-4">
              <div class="text-yellow-600 font-semibold">Totals</div>
              Total amend order:&nbsp;{{ statistics.totalAmendOrder }} <br />
              Total cancel order:&nbsp;{{ statistics.totalCancelOrder }} <br />
              Total create order:&nbsp;{{ statistics.totalCreateOrder }} <br />
              Total markets:&nbsp;{{ statistics.totalMarkets }} <br />
              Total orders:&nbsp;{{ statistics.totalOrders }} <br />
              Total trades:&nbsp;{{ statistics.totalTrades }} <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import statisticQuery from "../graphql/statistics.query.gql";
import { useQuery, useResult } from "@vue/apollo-composable";

export default {
  name: "Statistics",
  setup() {
    const { result, loading, error } = useQuery(statisticQuery);
    const statistics = useResult(result, null, (data) => data.statistics);
    return { statistics, loading, error };
  },
};
</script>
