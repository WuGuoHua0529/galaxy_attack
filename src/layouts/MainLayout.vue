<template>
  <q-layout view="lHh lpr lFf">
    <q-header class="text-white q-pa-sm">
      <q-toolbar class="justify-between q-px-xs">
        <div
          class="header_title"
          @click="goHome"
        >Galaxy Attack</div>
        <div>
          <q-btn
            label="登入"
            rounded
            class="btn_header q-px-sm"
            icon="img:statics/svg/account.svg"
            :to="{ name: 'login' }"
          />
        </div>
      </q-toolbar>
    </q-header>

    <keep-alive>
      <q-page-container>
        <router-view />
      </q-page-container>
    </keep-alive>

    <q-footer class="bg-footers text-white">
      <q-tabs
        no-caps
        active-color="yellow"
        indicator-color="transparent"
        v-model="tab"
        class="tabs_footer"
      >
        <q-route-tab
          v-for="item in navData"
          :key="item.key"
          :name="item.key"
          :to="{ name: item.key }"
          @click="checkAuth"
        >
          <q-icon
            :name="`img:statics/img/menuIcon/${ item.img }`"
            size="50px"
            class="footer-icon q-mt-sm"
          />
          <p class="text-xxs q-mt-xs">{{ item.name }}</p>
        </q-route-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {
      tab: 'home',
      alert: false,
      navData: [
        { key: 'bulletin', name: '公告', img: 'MenuIcon_Post.png' },
        { key: 'mall', name: '商城', img: 'MenuIcon_equipment.png' },
        { key: 'trade', name: '交易', img: 'MenuIcon_trade.png' },
        { key: 'partner', name: '夥伴', img: 'MenuIcon_partner.png' },
        { key: 'mine', name: '我的', img: 'MenuIcon_My.png' }
      ]
    }
  },
  computed: {
    ...mapState(['authorization']),
    lang () {
      const langList = {
        'en-us': 'EN',
        'zh-tw': '繁中'
      }

      return langList[this.$i18n.locale] || '語言'
    }
  },
  methods: {
    setLang (val) {
      this.$i18n.locale = val
      localStorage.setItem('locale', val)
    },
    checkAuth () {
      if (!this.authorization) {
        this.alert = true
      }
    },
    goHome () {
      this.$router.push({ name: 'home' })
    }
  }

}
</script>
<style lang="sass">
.q-layout
  background-size: cover
  // background-image: url(/statics/img/home/BodyBG.jpg)
  background-image: url(/galaxy_attack/statics/img/home/BodyBG.jpg)
  max-width: 520px

.q-header
  background-color: #412a56e6
  position: sticky

.q-footer
  position: sticky

.header_title
  color: transparent
  background-image: linear-gradient(45deg, #F37335, #FDC830 80%)
  -webkit-background-clip: text
  font-family: fantasy
  font-weight: bolder
  font-size: 1.3rem

.tabs_footer
  position: absolute
  width: 100%
  margin-top: -30px
  display: flex
  justify-content: space-around

  .q-tab
    padding: 0
    width: 20%

    &:not(:last-child)::before
      content: ""
      border-right: 1px solid #3E1404
      width: 100%
      height: 45%
      position: absolute
      top: 50%

  .q-tabs__content
    justify-content: space-evenly !important

.btn_header
  color: #D8C0A1
  white-space: nowrap
  background: #582f5a 0% 0% no-repeat padding-box !important
  border: 2px solid #836999

  .on-left
    margin-right: 5px
</style>
