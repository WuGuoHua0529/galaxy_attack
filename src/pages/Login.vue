<template>
  <q-page>
    <div class="text-center text-white q-py-lg text-weight-800">會員登入</div>
    <div class="q-px-md text-xs">
      <div>
        <div class="text-white q-my-sm">會員帳號</div>
        <input
          class="theme_input q-px-sm"
          placeholder="Email"
        />
        <div class="text-white q-my-sm">密碼</div>
        <input
          class="theme_input q-px-sm"
          placeholder="8位數以上，英文數字組合"
        />
      </div>
      <div class="text-right q-my-md">
        <a
          href="#"
          class="text-right text-white"
        >忘記密碼？</a>
      </div>
      <div class="flex flex-center">
        <q-btn
          rounded
          text-color="white"
          class="theme_btn text-center text-weight-800"
        >登入</q-btn>
      </div>
      <div class="text-center q-mt-lg">
        <router-link
          :to="{ name: 'register' }"
          class="text-white"
        >還不是會員嗎？前往註冊會員</router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
    name: 'Login',
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
