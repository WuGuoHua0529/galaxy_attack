<template>
  <q-page>
    <UserInfo />

    <div class="content q-pa-md">
      <div class="flex flex-center">
        <div class="treasureChest_title text-center text-weight-800">
          行星
        </div>
      </div>
      <q-infinite-scroll
        class="row q-py-md"
        @load="onLoad"
        :offset="50"
      >
        <div
          v-for="(item, index) in treasureChestData"
          :key="`treasureChest_${index}`"
          class="col-4 q-my-md flex flex-center"
        >
          <div class="w-100 flex flex-center">
            <q-img
              class="theme_img"
              :src="`statics/img/planet/planet_${item.lv}.png`"
              no-spinner
              no-transition
            />
          </div>
          <div class="go_planet text-center text-white q-mt-sm q-px-sm text-xs">前往探勘</div>
        </div>
      </q-infinite-scroll>
    </div>
  </q-page>
</template>

<script>
import UserInfo from 'src/components/UserInfo.vue'

export default {
  name: 'Home',
  components: {
    UserInfo
  },
  data () {
    return {
      treasureChestData: [
        { lv: 1 },
        { lv: 2 },
        { lv: 3 },
        { lv: 4 },
        { lv: 5 },
        { lv: 2 }
      ],
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    onLoad (index, done) {
      setTimeout(() => {
        this.treasureChestData.push(
          { lv: 1 },
          { lv: 2 },
          { lv: 3 }
        )
        done()
      }, 2000)
    }
  }
}
</script>

<style lang="sass" scoped>
.go_planet
  background: #00000066 0% 0% no-repeat padding-box
  border: 2px solid #836999
  border-radius: 50px
  width: 80%
  max-width: 120px
</style>
