<template>
  <q-page>
    <UserInfo />

    <div class="content q-pa-md">
      <div class="flex flex-center">
        <q-btn
          v-for="(item, index) in navData"
          :key="`navData_${index}`"
          class="btn_header q-mx-sm"
          :label="item.label"
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
      nowNav: 'props',
      navData: [
        { key: 'rober', label: '機器人' },
        { key: 'myRober', label: '我的機器人' }
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
<style lang="sass" scoped>
.btn_header
  width: 130px
</style>
