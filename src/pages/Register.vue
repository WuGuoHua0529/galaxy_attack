<template>
  <q-page>
    <div class="text-center text-white q-py-lg text-weight-800">會員註冊</div>
    <div class="q-px-md text-xs">
      <div>
        <div class="text-white q-my-sm">會員帳號*</div>
        <input
          class="theme_input q-px-sm"
          placeholder="Email"
        />
        <div class="text-white q-my-sm">密碼*</div>
        <input
          class="theme_input q-px-sm"
          placeholder="8位數以上，英文數字組合"
        />
        <div class="text-white q-my-sm">推薦碼*</div>
        <input
          class="theme_input q-px-sm"
          placeholder="介紹人推薦碼(必填)"
        />
        <div class="text-white q-my-sm">驗證碼*</div>
        <div class="row">
          <div class="col-8 q-pr-sm">
            <input
              class="theme_input q-px-sm"
              placeholder="Email驗證碼"
            />
          </div>
          <q-btn
            rounded
            text-color="white"
            class="theme_btn col-4 text-center text-weight-800 rounded-sm"
          >傳送驗證碼</q-btn>
        </div>
      </div>
      <div class="flex flex-center q-mt-lg">
        <q-btn
          rounded
          text-color="white"
          class="theme_btn text-center text-weight-800"
        >註冊會員</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
    name: 'Register',
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
