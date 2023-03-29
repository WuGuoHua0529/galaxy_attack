<template>
  <div class="partnerMember">
    <template
      v-for="(item, index) in data"
      :key="`PartnerMember_${index}`"
    >
      <div class="row relative-position">
        <div
          class="tree col-1 relative-position"
          :class="{ treeEnd: index === data.length - 1 }"
        ></div>
        <div class="col-11 q-py-sm">
          <div class="partnerMember_row row items-center q-pa-sm h-100">
            <div class="col-4 relative-position h-100">
              <q-img
                src="statics/img/home/user.png"
                class="img_user absolute"
                no-spinner
                no-transition
              />
              <q-img
                :src="`statics/img/partner/Icon_Level_M0${item.level}.png`"
                class="img_levelIcon absolute"
                no-spinner
                no-transition
              />
            </div>
            <div class="col-8 text-white text-xs q-pl-md">
              <div class="partnerMember_name text-sm text-weight-800">{{ item.name }}</div>
              <div>帳號 : {{ item.account }}</div>
              <div>等級 : {{ item.levelText }}</div>
              <div>星球 : {{ item.hp }}</div>
              <div>加入時間 : {{ item.date }}</div>
              <div>探看時數 : {{ item.total }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'PartnerMember',
  props: {
    data: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
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
.partnerMember_row
  background: #000000 0% 0% no-repeat padding-box
  border: 1px solid #7D7D7D
  border-radius: 10px

  .col-8
    line-height: 22px

  .partnerMember_name
    color: #E89B00

  .img_levelIcon
    z-index: 3

.tree:after
  content: ""
  position: absolute
  top: 0
  bottom: 0
  left: 50%
  border-left: 1px solid #7D7D7D

.tree:before
  content: ""
  position: absolute
  bottom: 50%
  width: 48%
  left: 53%
  border-bottom: 1px solid #7D7D7D

.treeEnd:after
  bottom: 50%

@media screen and (min-width: 521px)
  .img_avatar
    width: 80%

  .img_user
    width: 65%

  .img_levelIcon
    right: 0%
    bottom: 1%
    width: 33%

@media screen and (min-width: 481px) and (max-width: 520px)
  .img_avatar
    width: 85%

  .img_user
    width: 65%

  .img_levelIcon
    right: 0%
    bottom: 1%
    width: 35%

@media screen and (max-width: 480px)
  .img_avatar
    width: 100%

  .img_user
    width: 75%

  .img_levelIcon
    right: -10%
    bottom: 8%
    width: 40%
</style>
