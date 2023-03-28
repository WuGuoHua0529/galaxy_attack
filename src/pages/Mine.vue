<template>
  <q-page class="q-pa-md">
    <div class="theme_frame row items-center q-pa-md q-my-md">
      <div class="col-3">
        <q-img
          src="/statics/img/mine/coin.png"
          no-spinner
          no-transition
        />
      </div>
      <div class="col-9 text-white text-sm q-pl-md">
        <div class="wallet_info q-py-sm">
          <span class="text-lg text-weight-800 q-mr-sm">飛官資訊</span>
          <span class="wallet_mail">test001@gmail.com</span>
        </div>
        <div>
          <span>宇宙貨幣</span>
          <span class="text-2xl text-weight-800 q-mx-sm">888,679</span>
        </div>
      </div>
    </div>

    <div class="theme_frame items-center text-white q-pa-md q-my-md">
      <div class="mine_title text-weight-800 q-mt-sm q-pb-sm">
        佔領紀錄
      </div>
      <div
        v-for="(item, index) in buyRecordData"
        :key="`buyRecordData_${index}`"
        class="row q-py-sm items-center mine_recordInfoRow"
      >
        <div class="col-2">
          <q-img
            :src="`/statics/img/planet/planet_${ item.lv }.png`"
            no-spinner
            no-transition
          />
        </div>
        <div class="col-10 text-sm q-pl-md">
          <div class="text-weight-800">
            <span>{{ item.name }}</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="buy_recordDate">佔領日 {{ item.date }}</span>
            <span class="text-weight-800">得 {{ item.score }} 分</span>
          </div>
        </div>
      </div>
    </div>

    <div class="theme_frame items-center text-white q-pa-md q-my-md">
      <div class="mine_title text-weight-800 q-mt-sm q-pb-sm">
        探勘紀錄
      </div>
      <div
        v-for="(item, index) in findRecordData"
        :key="`findRecordData_${index}`"
        class="row q-py-sm items-center mine_recordInfoRow"
      >
        <div class="col-2">
          <q-img
            :src="`/statics/img/planet/planet_${ item.lv }.png`"
            no-spinner
            no-transition
          />
        </div>
        <div class="col-10 text-sm q-pl-md">
          <div class="text-weight-800">
            {{ item.name }}
          </div>
          <div class="find_recordDate text-xs">
            探索時間 {{ item.date }}
          </div>
        </div>
      </div>
    </div>

    <div class="theme_frame items-center text-white q-pa-md q-my-md">
      <div class="mine_title text-weight-800 q-mt-sm q-pb-sm">
        商城紀錄
      </div>
      <div
        v-for="(item, index) in mallRecordData"
        :key="`mallRecordData_${index}`"
        class="row q-py-sm items-center mine_recordInfoRow"
      >
        <div class="col-2">
          <q-img
            :src="`/statics/img/robot/robot_Lv${ item.lv }.png`"
            no-spinner
            no-transition
          />
        </div>
        <div class="col-10 text-sm q-pl-md">
          <div class="mallRecord_date text-xs">購買日 {{ item.date }}</div>
          <div class="text-weight-800">
            <span>{{ item.name }}</span>
          </div>
          <div class="flex justify-between text-xs">
            <span>數量 {{ item.num }}</span>
            <span class="text-weight-800">{{ item.score }} 宇宙貨幣</span>
          </div>
        </div>
      </div>
    </div>

    <div class="theme_frame items-center text-white q-pa-md q-my-md">
      <div class="mine_title text-weight-800 q-mt-sm q-pb-sm">
        物品使用紀錄
      </div>
      <div
        v-for="(item, index) in itemUseRecordData"
        :key="`itemUseRecordData_${index}`"
        class="row q-py-sm items-center mine_recordInfoRow"
      >
        <div class="col-2">
          <q-img
            :src="`/statics/img/map/map_${ item.lv }.png`"
            no-spinner
            no-transition
          />
        </div>
        <div class="col-10 text-sm q-pl-md">
          <div class="text-weight-800">
            <span>{{ item.name }}</span>
          </div>
          <div class="text-xs">
            <span>使用數量 {{ item.num }}</span>
            <span class="mallRecord_date text-weight-800 q-ml-sm">使用日期 {{ item.date }}</span>
          </div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
    name: 'Mine',
    data () {
        return {
            buyRecordData: [
                { name: '行星 002', date: '2023/11/02', score: 15, lv: 1 },
                { name: '行星 978', date: '2023/08/05', score: 23, lv: 2 },
                { name: '行星 334', date: '2023/01/22', score: 50, lv: 3 },
                { name: '行星 013', date: '2022/11/02', score: 15, lv: 5 },
                { name: '行星 222', date: '2022/08/05', score: 223, lv: 3 },
            ],
            findRecordData: [
                { name: '行星 334242', date: '2023/01/12 00:00:00 - 2023/02/22 07:00:00', lv: 1 },
                { name: '行星 433', date: '2023/10/23 00:00:00 - 2023/12/02 07:00:00', lv: 4 },
                { name: '行星 267659', date: '2023/08/15 00:00:00 - 2023/11/31 07:00:00', lv: 5 }
            ],
            mallRecordData: [
                { name: '探勘機器人(10天)', date: '2023/12/02', num: 10, score: 181, lv: 1 },
                { name: '探勘機器人(15天)', date: '2023/10/12', num: 13, score: 56, lv: 2 },
                { name: '探勘機器人(30天)', date: '2023/09/29', num: 22, score: 108, lv: 3 },
                { name: '探勘機器人(30天)', date: '2023/08/19', num: 11, score: 28, lv: 3 },
                { name: '探勘機器人(10天)', date: '2023/05/29', num: 1, score: 18, lv: 1 },
            ],
            itemUseRecordData: [
                { name: '破舊藏寶圖', date: '2023/12/16', num: 1, lv: 1 },
                { name: '完整藏寶圖', date: '2023/10/20', num: 1, lv: 2 },
                { name: '寶藏藏寶圖', date: '2023/05/12', num: 1, lv: 3 },
                { name: '破舊藏寶圖', date: '2023/03/16', num: 1, lv: 1 }
            ]
        }
    },
    created () {
    },
    mounted () {
    },
    methods: {
    }
}
</script>
<style lang="sass" scoped>
.wallet_mail
  color: #E89B00

.wallet_info
  border-bottom: 1px solid #8B6D1C

.mine_title
  border-bottom: 1px solid #8B6D1C

.mine_recordInfoRow:not(:last-child)
  border-bottom: 1px solid #474747

.buy_recordDate
  color: #8F8F8F

.find_recordDate
  color: #A98648

.mallRecord_date
  color: #8F8F8F

.mallRecord_date
  color: #8F8F8F
</style>
