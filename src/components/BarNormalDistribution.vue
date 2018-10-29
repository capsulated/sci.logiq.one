<template>
    <div class="bar-place">
        <BarChart :chart-data="datacollection"></BarChart>
        <span>Сгенерировать <input class="trials" v-model="trials" type="text" title="trials"> значений</span>
        <br>
        <button class="startExp btn-standard" @click="fillData()">Смоделировать</button>
    </div>
</template>

<script>
  import BarChart from './BarChart'
  import axios from 'axios'

  export default {
    components: {
      BarChart
    },
    data () {
      return {
        datacollection: null,
        trials: 100,
        host: window.location.protocol + '//' + window.location.hostname + ':8000' + '/modeling/normal'
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        if (parseInt(this.trials) > 100000) {
          document.getElementById('loader').style.display = 'block'
        }
        axios
          .post(this.host, {
            trials: parseInt(this.trials)
          })
          .then(response => {
            document.getElementById('loader').style.display = 'none'

            let bins = response.data.Bins
            let values = response.data.Values

            console.log(bins)
            console.log(values)

            this.datacollection = {
              labels: bins,
              datasets: [
                {
                  label: 'Количество появлений',
                  backgroundColor: '#41b883',
                  data: values
                }
              ]
            }
          })
          .catch(e => {
            console.log('TwoDiceError: ' + e)
            document.getElementById('loader').style.display = 'none'
            this.datacollection = {
              labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
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
