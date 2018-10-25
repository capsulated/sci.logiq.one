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
  const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
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
          .post('http://localhost:8000/modeling/normal', {
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
                  data: [0, 0, 6, 18, 33, 44, 49, 51, 50, 37, 21, 20, 8]
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
