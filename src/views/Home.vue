<template>
    <div class="home">
        <div class="container">
            <h3 class="mstuca">Федеральое образовательное учреждение высшего профессионального образования московский государственный
                технический университет гражданской авиации</h3>

            <h4 class="iam">Романов Никита Вячеславович</h4>

            <h1 class="name">Распределенная система сбора, хранения и распространения аэронавигационных данных
                на базе глобальных сетевых технологий</h1>

            <h4 class="diss">
                Диссертация на соискание ученой степени кандидата технических наук
            </h4>

            <h4 class="master">
                <span>Научный руководитель</span>
                <span>доктор технических наук, профессор</span>
                <span style="text-transform: uppercase">Феоктистова Оксана Геннадьевна</span>
            </h4>

            <h4 class="date">
                Москва {{ new Date().getFullYear() }}
            </h4>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
    .container {
        max-width: 1280px;
        padding:10px;
        margin: auto;
    }

    h3, h1, .iam {
        text-transform: uppercase;
    }

    h3 {
        font-weight: bold;
    }

    h1 {
        margin: 100px auto 40px;
        font-size: 1.5em;
    }

    .diss {
        font-size: 18px;
        margin-bottom: 75px;
    }

    .master {
        text-align: right;
        line-height: 30px;
        font-size: 20px;
    }

    .master span {
        display: block;
    }

    .date {
        margin-top: 80px;
    }
</style>
