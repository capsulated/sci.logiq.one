<template>
    <div class="bar-place">
        <BarChart :chart-data="datacollection"></BarChart>
        <span>Подбросить кубики <input class="trials" v-model="trials" type="text" title="trials"> раз</span>
        <br>
        <button class="startExp btn-standard" @click="fillData()">Смоделировать</button>
    </div>
</template>

<script>
  import BarChart from './BarChart'
  import axios from 'axios'
  const labels = ['0', '.05', '.1', '.15', '.2', '.25', '.3', '.35', '.4', '.45', '.5', '.55', '.6']

  export default {
    components: {
      BarChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.trials = 100
      this.fillData()
    },
    methods: {
      fillData () {
        axios
          .post('http://localhost:8000/modeling/exponential', {
            trials: parseInt(this.trials)
          })
          .then(response => {
            this.datacollection = {
              labels,
              datasets: [
                {
                  label: 'Количество появлений',
                  backgroundColor: '#41b883',
                  data: response.data
                }
              ]
            }
          })
          .catch(e => {
            console.log(e)
            this.datacollection = {
              labels,
              datasets: [
                {
                  label: 'Количество появлений',
                  backgroundColor: '#41b883',
                  data: [0, 160, 80, 60, 62, 40, 25, 10, 12, 9, 8, 2, 4]
                }
              ]
            }
          })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
