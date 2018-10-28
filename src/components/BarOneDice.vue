<template>
    <div class="bar-place">
        <BarChart :chart-data="datacollection"></BarChart>
        <span>Подбросить кубик <input class="trials" v-model="trials" type="text" title="trials"> раз</span>
        <br>
        <button class="startExp btn-standard" @click="fillData()">Подбросить 1x🎲</button>
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
        if (parseInt(this.trials) > 1000000) {
          document.getElementById('loader').style.display = 'block'
        }
        axios
          .post('http://localhost:8000/modeling/onedice', {
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
            document.getElementById('loader').style.display = 'none'
            alert('Ошибка моделирования одного кубика:' + e)
            // this.datacollection = {
            //   labels,
            //   datasets: [
            //     {
            //       label: 'Количество появлений',
            //       backgroundColor: '#41b883',
            //       data: [0, 17, 18, 12, 15, 21, 17]
            //     }
            //   ]
            // }
          })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
