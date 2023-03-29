<template>
  <q-page>
    <div class="text-lg text-white text-weight-800 text-center q-my-sm">探勘機器人</div>
    <div class="row q-py-md">
      <div
        v-for="(item, index) in robotData"
        :key="`robot_${index}`"
        class="col-4 q-mb-xs text-center"
      >
        <q-img
          class="theme_img"
          :src="`statics/img/robot/robot_Lv${item.lv}.png`"
          no-spinner
          no-transition
        />
        <div>
          <q-btn
            rounded
            text-color="white"
            class="theme_btn btn_use text-center text-weight-800 q-my-sm"
            :class="{ btn_close: item.status }"
          >{{ item.status ? '使用中' : '使用' }}</q-btn>
        </div>
        <div class="text-sm text-center text-white q-mt-xs q-px-sm">{{ item.status ? `剩餘 ${ item.day } 天` : '尚未使用' }}</div>
      </div>
    </div>
    <div class="text-lg text-white text-weight-800 text-center q-my-sm">探勘機器人 兌換序號</div>
    <div class="row q-py-md">
      <div
        v-for="(item, index) in robotCouponData"
        :key="`robot_${index}`"
        class="col-4 q-mb-xs text-center"
      >
        <q-img
          class="theme_img"
          :src="`statics/img/robot/robot_Lv${item.lv}.png`"
          no-spinner
          no-transition
        />
        <div class="text-sm text-center text-white q-mt-xs q-px-sm">兌換碼</div>
        <q-btn
          rounded
          text-color="white"
          class="theme_btn btn_exchange text-center text-weight-800 q-mt-sm"
        >{{ item.code }}</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'MyCommodity',
  data () {
    return {
      robotData: [
        { lv: 1, status: true, day: 30 },
        { lv: 2, status: true, day: 10 },
        { lv: 3, status: false, day: 0 }
      ],
      robotCouponData: [
        { lv: 2, code: 'DJeFEd' },
        { lv: 3, code: 'Gh96dr' },
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.btn_use
  width: 80px
  height: 30px

.btn_exchange
  width: 80px
  height: 30px
  text-transform: none
  background: #00000066 0% 0% no-repeat padding-box
  border: 2px solid #C27400
</style>
