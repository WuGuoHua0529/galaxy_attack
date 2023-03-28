<template>
  <q-page>
    <div class="text-lg text-white text-weight-800 text-center q-my-sm">宇宙探勘圖</div>
    <div class="row flex-center">
      <q-btn
        class="col-4 trade_btn q-mx-xs"
        :class="{ 'trade_btnActive': sortKey === 'money' }"
        label="依價格排序 ▼"
        dense
        @click="sortKey = 'money'"
      />
      <q-btn
        class="col-4 trade_btn q-mx-xs"
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
          :src="`/statics/img/map/map_${item.lv}.png`"
          no-spinner
          no-transition
        />
        <div class="text-sm text-center text-white q-mt-xs q-px-sm w-100">{{ item.usdt }} 宇宙貨幣</div>
        <q-btn
          rounded
          size="sm"
          text-color="white"
          class="theme_btn btn_buy text-center text-weight-800 q-my-sm"
          @click="buyMap"
        >搶購</q-btn>
      </div>
    </q-infinite-scroll>
    <q-dialog v-model="dialogStatus">
      <q-card>
        <q-card-section class="row items-center q-pa-none">
          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
            class="w-100 items-end q-mr-xs"
          />
          <div class="dialogHeader w-100 q-mx-md q-pb-sm">
            <div class="text-h7 text-weight-800 dialogTitle text-center">確認購買嗎？</div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-sm">
          <div class="text-sm">確認購買後，將會從您的錢包進行扣款</div>
          <div class="row justify-center q-my-lg">
            <q-btn
              flat
              label="取消"
              v-close-popup
              rounded
              color="white"
              class="btn_close col-4 q-mr-xs"
            />
            <q-btn
              flat
              label="確認"
              v-close-popup
              rounded
              color="white"
              class="theme_btn col-4 q-ml-xs"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>

export default {
  name: 'Sale',
  data () {
    return {
      treasureChestData: [
        { lv: 1, usdt: 15 },
        { lv: 2, usdt: 50 },
        { lv: 3, usdt: 110 },
        { lv: 1, usdt: 15 },
        { lv: 2, usdt: 50 },
        { lv: 3, usdt: 110 }
      ],
      dialogStatus: false,
      sortKey: 'money'
    }
  },
  methods: {
    buyMap () {
      this.dialogStatus = true
    },
    onLoad (index, done) {
      setTimeout(() => {
        this.treasureChestData.push(
          { lv: 1, usdt: 15 },
          { lv: 2, usdt: 50 },
          { lv: 3, usdt: 110 },
          { lv: 1, usdt: 15 },
          { lv: 2, usdt: 50 },
          { lv: 3, usdt: 110 }
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
</style>
