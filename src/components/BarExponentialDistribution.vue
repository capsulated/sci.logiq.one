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
        trials: 100
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
          .post('http://localhost:8000/modeling/exponential', {
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
            alert(e)
            this.datacollection = {
              labels: ['0', '.05', '.1', '.15', '.2', '.25', '.3', '.35', '.4', '.45', '.5', '.55', '.6'],
              datasets: [
                {
                  label: 'Количество появлений',
                  backgroundColor: '#41b883',
                  data: [11, 5, 6, 2, 2, 2, 1, 1, 0, 0, 0, 1]
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
