<template>
    <div>
        <div id="loader" class="loader">
            <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                <circle fill="none" stroke="#41b883" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48"/>
                <line fill="none" stroke-linecap="round" stroke="#41b883" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
                  <animateTransform
                       attributeName="transform"
                       dur="2s"
                       type="rotate"
                       from="0 50 50"
                       to="360 50 50"
                       repeatCount="indefinite" />
                </line>
                <line fill="none" stroke-linecap="round" stroke="#41b883" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
                  <animateTransform
                       attributeName="transform"
                       dur="15s"
                       type="rotate"
                       from="0 50 50"
                       to="360 50 50"
                       repeatCount="indefinite" />
                </line>
            </svg>
        </div>
        <carousel :per-page="1" paginationActiveColor="#42b983" paginationColor="#b2ebd1" :paginationSize="11">
            <slide class="slide">
                <div class="container">
                    <h1>
                        Метод оптимизации процесса производства аэронавигационной информации
                    </h1>
                    <h2>
                        Аннотация
                    </h2>
                    <p>
                        В этой статье представлена методология оптимизации процесса производства документов
                        аэронавигационной
                        информации, базирующаяся на моделировании Системы Массового Обслуживания (далее СМО).
                        Рассмотрены
                        многофазные системы массового обслуживания, как базис для изучаемых процессов. Язык
                        программирования
                        Golang и параллельные вычисления в данном исследовании выступают как основные инструменты для
                        реализации имитационных моделей. Предоставляется программный код и результаты стохастического
                        моделирования.
                    </p>
                    <h2>
                        1. Моделирование случайных величин и распределений на языке <b>Golang</b>
                    </h2>
                    <p>
                        Рассмотрим простейшие модели на примере подбрасывали одного и нескольких кубиков для игры в
                        кости.
                        Эти модели затронут вероятностные распределения, а также инструментарий параллельных вычислений
                        для
                        моделирования.
                    </p>
                </div>
            </slide>

            <slide class="slide">
                <div class="container">
                    <h3>
                        1.1. Модель подбрасывания одного кубика
                    </h3>
                    <p>
                        Программный код модели представлен на листинге 1.
                        Результат моделирования представлен представлен на рисунке 1.
                    </p>
                    <div class="bar-place">
                        <BarOneDice/>
                    </div>
                </div>
            </slide>

            <slide class="slide">
                <div class="container">
                    <h3>
                        1.2. Модель подбрасывания двух кубиков
                    </h3>
                    <p>
                        Программный код модели представлен на листинге 2.
                        Результат моделирования представлен представлен на рисунке 2.
                    </p>
                    <div class="bar-place">
                        <div class="bar-place">
                            <BarTwoDice/>
                        </div>
                    </div>
                </div>
            </slide>

            <slide class="slide">
                <div class="container">
                    <h3>
                        1.3. Модель нормального распределения
                    </h3>
                    <p>
                        Задача, на данном этапе, показать как предыдущий случай с несколькими
                        кубиками коррелирует с нормальным распределением.
                        Программный код модели представлен на листинге 3.
                        Результат моделирования представлен представлен на рисунке 3.
                    </p>
                    <div class="bar-place">
                        <BarNormalDistribution/>
                    </div>
                </div>
            </slide>

            <slide class="slide">
                <div class="container">
                    <h3>
                        1.4. Модель экспоненциального распределения
                    </h3>
                    <p>
                        Финальным шагом является демонстрация экспоненциального распределения.
                        Экспоненциальное распределение используется для моделирования длительности интервалов между
                        моментами поступления требований в СМО разного типа.
                        Программный код модели представлен на листинге 4.
                        Результат моделирования представлен представлен на рисунке 4.
                    </p>
                    <div class="bar-place">
                        <BarExponentialDistribution/>
                    </div>
                </div>
            </slide>

            <slide class="slide">
                <div class="container">
                    <h3>1.5. Стохастическое моделирование</h3>
                    <p>
                        Метод Монте-Карло [расписать подробнее]
                    </p>
                    <p>
                        Программный код модели представлен на листинге 5.
                        Результат моделирования представлен представлен на рисунке 5.
                    </p>
                    <div class="bar-place">
                        <BarAdvancedNormalDistribution/>
                    </div>
                </div>
            </slide>

            <slide class="slide">
                <div class="container">
                    <h2>
                        2. Метод оптимизации процесса производства документов аэронавигационной информации на основе
                        моделирования многофазной системы массового обслуживания упрощенной схемы циркуляции
                        аэронавигационных документов
                        между ЦАИ и региональными САИ.
                    </h2>
                    <p>
                        Информации по СМО полно читать там [ссылки]. Почему многофазные? Описать точки соприкосновения
                        текущей системы аэронавигационной информации с моделируемыми СМО КРАТКО
                    </p>
                </div>
            </slide>

            <slide class="slide">
                <div class="container">
                    <h3>
                        2.1. Golang
                    </h3>
                    <p>
                        Go очень интересный язык. Компиляция в native-code (никаких виртуальных машин, JIT-компиляций и т.д.),
                        при этом автоматическая сборка мусора и встроенная поддержка многопоточности, объектно-ориентированная модель,
                        и в довершение всего - очень быстрая компиляция.

                        <!--Метод Монте-Карло и СМО М/М/1 [расписать подробнее]. Задача: нормальное распределение со-->
                        <!--следующими-->
                        <!--характеристиками: кубиков: 200 штук, число попыток: 150000 попыток. Основная идея - -->
                        <!--использование-->
                        <!--<b>горутин</b>. -->
                        Программный код модели представлен на листинге 6. Результат моделирования представлен
                        представлен на рисунке 6.
                    </p>
                </div>
            </slide>

            <slide class="slide">
                <div class="container">
                    <h3>
                        2.2. Имитационная модель упрощённой схемы циркуляции аэронавигационных документов между ЦАИ и
                        региональными САИ
                    </h3>
                    <p>
                        Описание имитационной модели.
                    </p>
                </div>
            </slide>

            <slide class="slide">
                <div class="container">
                    <h3>
                        2.3. Статистическая модель упущенной схемы циркуляции аэронавигационных документов между ЦАИ и
                        региональными САИ
                    </h3>
                    <p>
                        Описание статистической модели.
                    </p>
                </div>
            </slide>

            <slide class="slide">
                <div class="container">
                    <h3>
                        2.3. Статистическая модель упущенной схемы циркуляции аэронавигационных документов между ЦАИ и
                        региональными САИ
                    </h3>
                    <p>
                        Описание статистической модели.
                    </p>
                </div>
            </slide>

        </carousel>
    </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  import BarOneDice from '@/components/BarOneDice'
  import BarTwoDice from '@/components/BarTwoDice'
  import BarNormalDistribution from '@/components/BarNormalDistribution'
  import BarExponentialDistribution from '@/components/BarExponentialDistribution'
  import BarAdvancedNormalDistribution from '@/components/BarAdvancedNormalDistribution'

  export default {
    name: 'Publication1',
    components: {
      Carousel,
      Slide,
      BarOneDice,
      BarTwoDice,
      BarNormalDistribution,
      BarExponentialDistribution,
      BarAdvancedNormalDistribution
    }
  }
</script>

<style lang="scss" scoped>
    .slide {
    }

    .bar-place {
        width: 450px;
        margin: 50px auto 50px auto;
    }

    .loader {
        display: none;
        background-color: rgba(255, 255, 255, .85);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        opacity: 1;
        transition: 0.5s ease-out;
    }

    svg {
        width: 100px;
        height: 100px;
        margin-top: 45vh;
        display: inline-block;
    }
</style>
