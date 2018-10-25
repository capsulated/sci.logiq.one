<template>
    <div class="small">
        <BarChart :chart-data="datacollection"></BarChart>

        Подбросить кубик <input class="trials" v-model="trials" type="text" title="trials"> раз
        <button class="startExp" @click="fillData()">🎲</button>
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
          .post('http://localhost:8000/modeling/onedice', {
            trials: parseInt(this.trials)
          })
          .then(response => {
            this.datacollection = {
              labels: ['0', '1', '2', '3', '4', '5', '6'],
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
              labels: ['0', '1', '2', '3', '4', '5', '6'],
              datasets: [
                {
                  label: 'Количество появлений',
                  backgroundColor: '#41b883',
                  data: [0, 17, 18, 12, 15, 21, 17]
                }
              ]
            }
          })
      }
    }
  }
</script>

<style>
    .small {
        max-width: 600px;
        margin: 50px auto;
    }

    .startExp {
        position: relative;
        top: 6px;
        border: none;
        font-size: 40px;
        cursor: pointer;
        height: 50px;
        background: none;
        outline: none;
        opacity: .5;
        margin-left: 15px;
    }

    .startExp:hover {
        opacity: 1;
    }

    .trials {
        font-family: "Times New Roman", serif;
        padding: 4px;
        width: 70px;

        border: 1px solid #dadada;
        outline: none;
        font-size: 24px;
        text-align: center;
    }
</style>
