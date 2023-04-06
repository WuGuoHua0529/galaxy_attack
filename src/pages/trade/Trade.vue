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
      nowNav: 'sale',
      navData: [
        { key: 'sale', label: '購買航線' },
        { key: 'map', label: '我的航線' }
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
