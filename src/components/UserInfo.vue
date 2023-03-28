<template>
  <div class="userinfo column text-sm">
    <div class="userinfo_row q-py-sm q-px-xs flex">
      <div class="img_userinfo relative-position">
        <q-img
          src="/statics/img/home/user.png"
          class="img_user absolute"
          no-spinner
          no-transition
        />
      </div>
      <div class="info_userinfo q-px-xs">
        <div class="info_user flex w-100 justify-between items-center">
          <div>玩家</div>
          <div class="user_id q-px-sm q-mx-xs">探險家零壹</div>
          <div class="relative-position">
            <q-img
              src="/statics/img/home/key.png"
              width="84px"
              height="46px"
              no-spinner
              no-transition
            >
              <div class="div_key text-lg absolute-bottom text-center text-weight-800 background-none theme-color q-pa-xs">4</div>
            </q-img>
          </div>
        </div>
        <div class="row q-mt-xs">
          <div class="col-2 text-no-wrap">燃料</div>
          <div class="col-10 q-px-xs">
            <div class="scale＿bar relative-position">
              <div
                class="life＿nowBar absolute h-100"
                style="width: 40%;"
              ></div>
              <div class="flex justify-between items-center absolute h-100 w-100 text-white q-px-sm">
                <div>40</div>
                <div>100</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row q-mt-md">
          <div class="col-12 q-pr-xs">
            <div class="scale＿bar relative-position">
              <div
                class="exp＿nowBar absolute h-100"
                style="width: 20%;"
              ></div>
              <div class="flex justify-between items-center absolute h-100 w-100 text-white q-px-sm">
                <div>20</div>
                <div>100</div>
              </div>
            </div>
            <div class="flex justify-between text-xs">
              <div>
                <span>目前軍階</span>
                <span class="q-ml-xs">下士</span>
              </div>
              <div>
                <span>下一軍階</span>
                <span class="q-ml-xs">上尉</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.userinfo
  height: 150px
  background-color: #0000008f
  position: relative
  font-weight: bolder
  color: #FFF
  border-bottom: 1px solid#FFF

  .userinfo_row
    z-index: 2

  .img_userinfo
    width: 30%

  .info_userinfo
    width: 70%

  .info_user
    flex-flow: inherit
    white-space: nowrap

  .user_id
    width: 100%
    height: 35px
    background: transparent linear-gradient(180deg, #5B390B 0%, #290C0C 100%) 0% 0% no-repeat padding-box
    box-shadow: inset 0px 3px 6px #00000029
    border-radius: 8px
    color: #FFF
    line-height: 35px

.div_key
  padding-bottom: 12px
  padding-left: 30px

@media screen and (min-width: 521px)
  .img_avatar
    width: 85%

  .img_user
    width: 70%

@media screen and (min-width: 481px) and (max-width: 520px)
  .img_avatar
    width: 85%

  .img_user
    width: 70%

@media screen and (max-width: 480px)
  .img_avatar
    width: 100%

  .img_user
    width: 76%
</style>
