<template>
  <div class="home">
    <h1>距離吃爆肉次方倒數:</h1>
    <p id="remain-time">{{ remainTime }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      remainTime: ''
    }
  },
  created () {
    this.eatTimeCountDown()
  },
  methods: {
    eatTimeCountDown () {
      const eatTime = new Date('2022-04-17 12:00:00 +08:00').getTime()
      const currentTime = Date.now()
      const millisecondsRemain = eatTime - currentTime
      this.remainTime = this.convertMillisecond(millisecondsRemain)
      setTimeout(this.eatTimeCountDown, 1000)
    },
    convertMillisecond (milliseconds) {
      let seconds = Math.floor(milliseconds / 1000)
      let minutes = Math.floor(seconds / 60)
      let hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      seconds = seconds % 60
      minutes = seconds >= 30 ? minutes + 1 : minutes
      minutes = minutes % 60
      hours = hours % 24

      return `距離吃爆肉次方倒數: ${days}天 ${hours}小時 ${minutes}分鐘 ${seconds}秒`
    }

  }
}
</script>
