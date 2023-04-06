<template>
  <div class="partnerTopOne theme_frame row q-pa-sm q-pb-md items-center">
    <div class="col-4 relative-position h-100">
      <q-img
        src="statics/img/home/user.png"
        class="img_user absolute"
        no-spinner
        no-transition
      />
      <q-img
        src="statics/img/partner/chevron06.png"
        class="img_levelIcon absolute"
        no-spinner
        no-transition
      />
    </div>
    <div class="col-8 text-white text-sm q-pl-md text-weight-800">
      <div>
        <span>t001@gmali.com</span>
      </div>
      <div class="partnerTopOne_name q-my-sm">探險家零壹</div>
      <div class="scale＿bar relative-position w-100">
        <div
          class="exp＿nowBar absolute h-100"
          style="width: 100%;"
        ></div>
        <div class="flex justify-between items-center absolute h-100 w-100 text-white q-px-sm">
          <div>工會貢獻度</div>
          <div>100%</div>
        </div>
      </div>
      <div class="flex justify-between text-xs q-mt-md">
        <div>
          <span>職位</span>
          <span class="q-ml-xs">會長</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerTopOne',
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
.partnerTopOne
  height: 150px

  .img_levelIcon
    z-index: 3

  .partnerTopOne_name
    color: #E89B00

@media screen and (min-width: 521px)
  .img_avatar
    width: 80%

  .img_user
    width: 60%

  .img_levelIcon
    right: 0%
    bottom: 0%
    width: 25%

@media screen and (min-width: 481px) and (max-width: 520px)
  .img_avatar
    width: 85%

  .img_user
    width: 65%

  .img_levelIcon
    right: -4%
    bottom: 0%
    width: 30%

@media screen and (max-width: 480px)
  .img_avatar
    width: 100%

  .img_user
    width: 75%

  .img_levelIcon
    right: -15%
    bottom: -8%
    width: 35%
</style>
