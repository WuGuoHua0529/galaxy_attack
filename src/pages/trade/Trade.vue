<template>
  <q-page>
    <UserInfo />

    <div class="content q-pa-md">
      <div class="flex flex-center">
        <q-img
          v-for="(item, index) in navData"
          :key="`navData_${index}`"
          class="img_themeNav q-mx-sm"
          no-spinner
          no-transition
          :src="`statics/svg/${item.key}${item.key === nowNav ? '_active' : '' }.svg`"
          @click="changeNav(item.key)"
        />
      </div>
      <router-view></router-view>
    </div>
  </q-page>
</template>

<script>
import UserInfo from 'src/components/UserInfo.vue'

export default {
  name: 'Mall',
  components: {
    UserInfo
  },
  data () {
    return {
      nowNav: 'sale',
      navData: [
        { key: 'sale' },
        { key: 'map' }
      ]
    }
  },
  created () {
    this.nowNav = this.$route.name
  },
  methods: {
    changeNav (key) {
      this.nowNav = key
      this.$router.push({ name: key })
    }
  }
}
</script>
