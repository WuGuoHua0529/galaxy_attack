<template>
  <q-page>
    <div class="text-lg text-white text-weight-800 text-center q-my-sm">探勘機器人</div>
    <q-infinite-scroll
      class="row q-py-md"
      @load="onLoad"
      :offset="50"
    >
      <div
        v-for="(item, index) in robotCouponData"
        :key="`robot_${index}`"
        class="col-4 q-my-sm text-center"
      >
        <q-img
          class="theme_img"
          :src="`statics/img/robot/robot_Lv${item.lv}.png`"
          no-spinner
          no-transition
        />
        <div class="text-sm text-center text-white q-mt-xs q-px-sm">{{ item.usdt }} 宇宙貨幣</div>
        <q-btn
          rounded
          size="sm"
          text-color="white"
          class="theme_btn btn_buy text-center text-weight-800 q-mt-sm"
          @click="buyProps"
        >購買</q-btn>
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
  name: 'Rober',
  data () {
    return {
      robotCouponData: [
        { lv: 1, usdt: 20 },
        { lv: 2, usdt: 49 },
        { lv: 3, usdt: 120 }
      ],
      dialogStatus: false
    }
  },
  methods: {
    buyProps () {
      this.dialogStatus = true
    },
    onLoad (index, done) {
      setTimeout(() => {
        this.robotCouponData.push(
          { lv: 1, usdt: 10 },
          { lv: 2, usdt: 18 },
          { lv: 3, usdt: 28 },
          { lv: 1, usdt: 10 },
          { lv: 2, usdt: 18 },
          { lv: 3, usdt: 28 }
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
</style>
