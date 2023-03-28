<template>
  <div>
    <div
      v-for="(item, index) in data"
      :key="`BulletinInfo_${index}`"
    >
      <div
        class="bulletinInfo row q-my-md q-py-xs q-px-md rounded-sm"
        @click="openDialog(item)"
      >
        <div class="col-11 q-pr-sm">
          <div class="date q-py-xs">{{ item.date }}</div>
          <div class="info text-white q-mt-md q-mb-sm">{{ item.info }}</div>
        </div>
        <div class="col-1 text-white flex flex-center">
          <div class="arrow"></div>
        </div>
      </div>
    </div>
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
            <div class="text-h7 text-weight-800 dialogTitle">網站維護公告</div>
            <div class="dialogDate text-xs">{{ openData.date }}</div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-sm q-pb-xl">
          {{ openData.info }}
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
    name: 'BulletinInfo',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            dialogStatus: false,
            openData: {}
        }
    },
    created () {
    },
    mounted () {
    },
    methods: {
        openDialog (data) {
            this.dialogStatus = true
            this.openData = data
        }
    }
}
</script>
<style lang="sass" scoped>
.bulletinInfo
  background: #0000008A 0% 0% no-repeat padding-box
  border: 1px solid #5F4C19
  border-radius: 8px
  min-height: 105px

  .date
    color: #A6A391
    border-bottom: 1px solid #707070

  .info
    max-height: 50px
    overflow: hidden

  .arrow
    width: 18px
    height: 18px
    border-top: 2px solid #9D925C
    border-right: 2px solid #9D925C
    transform: rotate(45deg)
</style>
