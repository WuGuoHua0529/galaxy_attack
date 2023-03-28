<template>
  <q-page class="q-pa-md">
    <PartnerTopOne />

    <div class="theme_frame text-white flex justify-between items-center q-pa-md text-weight-800 q-mt-sm">
      <div class="text-sm">探險公會分數</div>
      <div>
        <span class="text-xl">667,520,123</span>
        <span class="text-sm q-ml-sm">分</span>
      </div>
    </div>

    <div>
      <PartnerMember :data="partnerMemberData" />
    </div>
  </q-page>
</template>

<script>
import PartnerTopOne from 'src/components/partner/PartnerTopOne.vue'
import PartnerMember from 'src/components/partner/PartnerMember.vue'

export default {
    name: 'Partner',
    components: {
        PartnerMember,
        PartnerTopOne
    },
    data () {
        return {
            partnerMemberData: [
                { name: '探險家 001', account: '001@gmail.com', level: '5', levelText: '將軍', hp: '6', date: '2022/01/01', total: '513,555,779' },
                { name: '探險家 002', account: '002@gmail.com', level: '4', levelText: '上尉', hp: '3', date: '2022/03/05', total: '423,444,749' },
                { name: '探險家 003', account: '003@gmail.com', level: '3', levelText: '中士', hp: '5', date: '2022/06/18', total: '33,336,345' },
                { name: '探險家 004', account: '004@gmail.com', level: '2', levelText: '下士', hp: '4', date: '2023/02/01', total: '23,256,576' },
                { name: '探險家 005', account: '005@gmail.com', level: '1', levelText: '士兵', hp: '4', date: '2023/02/01', total: '12,151,763' },
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
