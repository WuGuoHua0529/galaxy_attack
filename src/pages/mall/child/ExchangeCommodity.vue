<template>
  <q-page>
    <div class="text-lg text-white text-weight-800 text-center q-my-md">兌換商品</div>
    <input
      v-model="exchangeNumber"
      class="theme_input q-my-sm text-center text-sm"
      placeholder="請輸入兌換序號"
    />
    <div class="flex flex-center">
      <q-btn
        rounded
        text-color="white"
        class="theme_btn btn_exchange text-center text-weight-800 q-my-sm"
      >兌換</q-btn>
    </div>
  </q-page>
</template>

<script>

export default {
    name: 'exchangeCommodity',
    data () {
        return {
            exchangeNumber: ''
        }
    }
}
</script>
<style lang="sass" scoped>
.btn_exchange
  width: 134px
</style>
