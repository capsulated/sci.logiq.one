<template>
    <div class="bar-place">
        <BarChart :chart-data="datacollection"></BarChart>
        <span>Подбросить кубики <input class="trials" v-model="trials" type="text" title="trials"> раз</span>
        <br>
        <button class="startExp btn-standard" @click="fillData()">Подбросить 2x🎲</button>
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
        datacollection: null,
        trials: 100
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        axios
          .post('http://localhost:8000/modeling/twodice', {
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
                  data: [0, 0, 10, 20, 30, 40, 50, 55, 50, 35, 23, 18, 6]
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
