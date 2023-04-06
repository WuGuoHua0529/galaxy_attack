<template>
  <q-page class="q-px-md">
    <BulletinInfo :data="bulletinData" />
  </q-page>
</template>

<script>
import BulletinInfo from 'src/components/bulletin/BulletinInfo.vue'

export default {
  name: 'Bulletin',
  components: {
    BulletinInfo
  },
  data () {
    return {
      bulletinData: [
        { date: '2023/10/10', info: '歡慶國慶日！ 登入就送1010宇宙貨幣！！' },
        { date: '2023/11/12', info: '＠＠＠＠版本大更新，薩諾斯來襲，宇宙將受重大威脅＠＠＠＠' },
        { date: '2023/11/23', info: '簽到活動開始！！！登入就抽特斯拉，號招各位士官進行宇宙探險' },
        { date: '2023/12/21', info: '＠＠＠＠版本大更新，太空戰士連動活動，登入就抽ＳＳＲ＠＠＠＠' },
        { date: '2023/12/31', info: '跟者宇宙夥伴一起跨年，領取煙火獎勵，在地球集合 < 3' }
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
