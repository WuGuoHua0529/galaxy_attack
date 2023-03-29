<template>
  <q-page>
    <div class="text-lg text-white text-weight-800 text-center q-my-sm">宇宙探勘圖</div>
    <div class="row flex-center">
      <q-btn
        class="col-12 trade_btn"
        :class="{ 'trade_btnActive': sortKey === 'time'  }"
        label="依時間排序 ▼"
        dense
        @click="sortKey = 'time'"
      />
    </div>
    <q-infinite-scroll
      class="row q-py-md"
      @load="onLoad"
      :offset="50"
    >
      <div
        v-for="(item, index) in treasureChestData"
        :key="`robot_${index}`"
        class="col-4 q-my-sm flex flex-center"
      >
        <q-img
          class="theme_img"
          :src="`statics/img/map/map_${item.lv}.png`"
          no-spinner
          no-transition
        />
        <div class="w-100 text-center">
          <q-btn
            v-if="item.status"
            rounded
            text-color="white"
            class="theme_btn btn_exchange text-center text-weight-800 q-mt-sm"
          >01:55:32</q-btn>
          <q-btn
            v-else
            rounded
            text-color="white"
            class="theme_btn btn_buy text-center text-weight-800 q-mt-sm"
          >開始專賣</q-btn>
        </div>
      </div>
    </q-infinite-scroll>
  </q-page>
</template>

<script>

export default {
  name: 'Map',
  data () {
    return {
      treasureChestData: [
        { lv: 1, status: true },
        { lv: 2, status: true },
        { lv: 3, status: false }
      ],
      sortKey: 'time'
    }
  },
  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        this.treasureChestData.push(
          { lv: 1, status: true },
          { lv: 2, status: true },
          { lv: 3, status: false },
          { lv: 1, status: true },
          { lv: 2, status: true },
          { lv: 3, status: false }
        )
        done()
      }, 2000)
    }
  }
}
</script>
<style lang="sass" scoped>
.btn_buy
  width: 80px
  height: 30px

.btn_close
  width: 100px

.theme_btn
  width: 100px

.trade_btn
  width: 120px
  background: #000000D6 0% 0% no-repeat padding-box
  border: 2px solid #836999
  border-radius: 8px
  color: #FFF

.trade_btnActive
  color: #FBED2E

.btn_exchange
  height: 30px
  text-transform: none
  background: #00000066 0% 0% no-repeat padding-box
  border: 2px solid #836999
</style>
