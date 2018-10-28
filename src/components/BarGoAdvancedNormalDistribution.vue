<template>
    <div class="bar-place">
        <BarChart :chart-data="datacollection"></BarChart>
        <span>Подкинуть <input class="dices" v-model="dices" type="text" title="dices"> кубиков <input class="trials" v-model="trials" type="text" title="trials"> раз</span>
        <br>
        <button class="startExp btn-standard" @click="fillData()">Подбросить {{ this.dices}} кубиков</button>
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
        trials: 5000,
        dices: 200
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        if (parseInt(this.trials) > 2000) {
          document.getElementById('loader').style.display = 'block'
        }
        axios
          .post('http://localhost:8000/modeling/goadvanced', {
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
    .dices {
        width: 60px;
    }
    .trials {
        width: 85px;
    }
</style>
