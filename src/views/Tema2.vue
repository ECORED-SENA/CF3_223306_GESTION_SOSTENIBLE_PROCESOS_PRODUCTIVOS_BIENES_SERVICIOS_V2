<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelos Económicos

    .row.bg_grad-06.d-flex.align-items-center.justify-content-end
      .col-12.col-lg-7.mb-lg-0.d-md-flex.d-lg-none.align-items-center
        figure.d-flex.justify-content-center
          img.img120.mb-3(src='@/assets/curso/temas/tema2/t2-1.svg', alt='Texto que describa la imagen')
        p.mb-0 Un modelo económico es una representación elemental de la vinculación entre las diversas variables que explican el desempeño de una economía o un fenómeno en particular.
      .col-12.col-lg-7.mb-3.mb-lg-0.d-none.d-lg-flex.align-items-center(data-aos="fade-right")
        div
          figure
            img.img120.mb-3(src='@/assets/curso/temas/tema2/t2-1.svg', alt='Texto que describa la imagen')
          p.mb-0 Un modelo económico es una representación elemental de la vinculación entre las diversas variables que explican el desempeño de una economía o un fenómeno en particular.
      .col-12.col-lg-4(data-aos="fade-left")
        figure
          img.d-none.d-lg-flex(src='@/assets/curso/temas/tema2/t2-2.png', alt='Texto que describa la imagen')

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1	Contexto

    .bg_grad-03
      .row.mb-5
        .col-12.col-lg-4(data-aos="fade-left")
          figura.d-flex.justify-content-center
            img.img250(src='@/assets/curso/temas/tema2/t2-3.svg' alt='Texto que describa la imagen')
        .col-12.col-lg-8.d-flex.align-items-center(data-aos="fade-right")
          div.mt-5
            p Los modelos económicos facilitan evaluar fenómenos complejos y realizan predicciones en cuanto al comportamiento futuro de las variables. Puesto que la realidad es muy compleja, el modelo trata de capturar solo las variables más relevantes del fenómeno en estudio y así, permite una mejor comprensión y simpleza.

    p.mb-5 Los principales usos de los modelos económicos son:

    .row.bgr_16.p-4.mb-3
      .col-12.col-lg-9(data-aos="fade-right")
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span a
            span Comprender la relación entre las variables económicas, ya sea en formulación y comprobación de hipótesis.
          li
            .lista-ol--cuadro__vineta
              span b
            span Diagnosticar un fenómeno o situación en particular.
          li
            .lista-ol--cuadro__vineta
              span c
            span Proyectar el comportamiento futuro de las variables.
          li
            .lista-ol--cuadro__vineta
              span d
            span Diseñar políticas económicas.
      .col-12.col-lg-3(data-aos="fade-left")
        figura.d-flex.justify-content-center
            img.img120(src='@/assets/curso/temas/tema2/t2-4.svg' alt='Texto que describa la imagen')

    p.mb-5 Además, los modelos económicos se dividen en dos categorías:

    .row.justify-content-center.mb-5
      .col-12.col-lg-5.pst_2(data-aos="flip-right")
        .tarjeta-avatar
          img.img250.w-100(src='@/assets/curso/temas/tema2/t2-5.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4.bgr_3.h-100
              h4.text-center Macroeconómicos
              p.mb-0 Identifican fenómenos a nivel macro o general de la economía como la inflación, el nivel de producción, etc.
      .col-12.col-lg-5.pst_2(data-aos="flip-left")
        .tarjeta-avatar
          img.img250.w-100(src='@/assets/curso/temas/tema2/t2-6.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4.bgr_31.h-100
              h4.text-center Microeconómicos
              p.mb-0 Hace referencia al estudio de mercado en específico o comportamiento de actores a nivel particular o en un mercado. Por ejemplo, la determinación del precio de un producto de cierto país

    p.mb-5 No obstante, otra manera de entender el concepto de modelo económico es cuando se hace referencia a los sistemas económicos o el modo en el que se organiza la economía de un país. Generalmente, existen tres sistemas económicos como se observa a continuación:

    .bg_grad-07
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-12.col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 5
            span Sistemas económicos
          figura
            img(src='@/assets/curso/temas/tema2/t2-7.svg' alt='La figura presenta los tres sistemas económicos principales: el modelo capitalista, que se basa en el mercado para asignar recursos; el modelo Socialista, que interviene en la economía para lograr objetivos específicos; y la economía Mixta, que combina elementos de ambos modelos anteriores.')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Economía de rosquilla

    p La economía de rosquilla o <em>donut</em>, es una teoría planteada por una economista británica Kate Raworth en el año 1970, en la cual conciencia la necesidad de enfrentar los desafíos sociales y económicos del siglo XXI con un pensamiento totalmente distinto.
    p.mb-5 Esta economista postula una nueva forma de pensar la economía del siglo en curso y la representa en dos círculos concéntricos donde forma una especie de rosquilla o <em>donut</em> como lo muestra la siguiente figura:

    .bg_grad-02
      .row.justify-content-end
        .col-12.col-lg-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 6
            span Teoría de la economía de rosquilla
      .row.justify-content-center.mb-3(data-aos="zoom-out")
        .col-12.col-lg-8
          figura
            img(src='@/assets/curso/temas/tema2/t2-8.svg' alt='La figura ilustra la "teoría de la economía de rosquilla", representando un equilibrio entre las necesidades humanas básicas (base social) y los límites ecológicos del planeta (techo ecológico). Dentro de esta estructura, se destaca la importancia de evitar el déficit en las necesidades básicas y el excedente en los límites ecológicos para lograr una economía sostenible y justa.')
      .row.justify-content-center
        .col-12.col-lg-4.mb-3.mb-lg-0
          .cajon.bgr_17
            p.mb-0.ms-5 Este círculo representa las necesidades básicas que solo pueden satisfacerse a través de una economía renovada y distribuida.
        .col-12.col-lg-6
          .bgr_18.p-3
            p.mb-0 En  la parte externa se  advierten excesos y peligros para la existencia humana, como el cambio climático o la contaminación.
      .row.justify-content-center.mb-5
        .col-12.col-lg-10
          figcaption.mt-3 Nota. Economía rosquilla de Kate Raworth. Adaptada de Ideas Imprescindibles (2019). La «Economía rosquilla»: ¿Somos adictos al crecimiento económico?

    .row.mb-5
      .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
        p Hoy vivimos en una época de consumo masivo y los países desarrollados buscan constantemente formas de continuar con el crecimiento económico. Asimismo, el sistema financiero actual siempre está dispuesto a maximizar la rentabilidad, presionando a las empresas para que aumenten gradualmente sus ganancias, al mismo tiempo que los bancos continúan prestando y obteniendo altos intereses de mercado sobre sus deudas.
        .bgr_11.p-4
          p.mb-0 Por esta razón, las empresas requieren enormes cantidades de recursos naturales para producir bienes esenciales que millones de consumidores en todo el mundo tienen que adquirir, situación insostenible según Kate Raworth (2018), quien señala que la actividad económica debe primar en un espacio soportado por las normas ambientales y sociales.
        p.mt-3 En la práctica, esto significa que cada individuo tiene acceso a bienes básicos como alimentación, salud y vivienda con los recursos disponibles en el planeta. Kate Raworth (2018), resalta que es necesario avanzar y fortalecer las acciones distributivas y regenerativas, por lo que se deben planificar actividades para que esos valores se transfieran desde el inicio, a través de la redistribución de la riqueza, que no solo se refiere al dinero, sino también a la tierra, los vehículos y los negocios que pueden generar ganancias.
      .col-12.col-lg-4(data-aos="fade-left").d-flex.align-items-center
        figurad.d-flex.justify-content-center
          img.img400(src='@/assets/curso/temas/tema2/t2-9.png' alt='Texto que describa la imagen')

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/dwv.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 <em>Doughnut Economics</em> | Una economía diseñada para prosperar
              p.text-small Para ampliar el tema sobre la economía de rosquilla, se recomienda ver el video de Kate Raworth: “<em>Doughnut Economics</em> | Una economía diseñada para prosperar” que se encuentra en el material complementario de este componente formativo.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=CBaRe0Q5mL8" target="_blank")
                span Ir al enlace

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Economía del Bien Común

    .bloque-texto-a.bgr_19.p-4.p-md-5.mb-5(data-aos="flip-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figura.d-flex.justify-content-center
            img.img250(src='@/assets/curso/temas/tema2/t2-11.svg' alt='Texto que describa la imagen')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Es un modelo socioeconómico sustituto que consiste en los principios de la valoración y de la dignidad, la responsabilidad con el medio ambiente y los derechos humanos. Este modelo reemplaza el desenfrenado interés económico de la actualidad y lo alterna por el bienestar social como indicador del éxito de las organizaciones. Es decir, es un modelo económico enfocado hacia la solidaridad y la sostenibilidad en vez del crecimiento.

    p.mb-5 El video que se presenta a continuación pone de relieve las características distintivas de este modelo en el ámbito de la Economía del Bien Común (EBC).

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Z8XcVBhYPHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3.bgr_4.p-3.mb-5 Problemas identificados en la EBC

    p El principal problema que se identifica en la Economía del Bien Común, está en cómo funciona la economía en el mundo actualmente. En otras palabras, se expone una oposición de los valores defendidos por las tendencias económicas actuales. Aunque la mayoría de las constituciones y declaraciones de principios de los diferentes países contemplan explícitamente el bienestar social de sus ciudadanos, la economía ahora se expone como una lucha bárbara y egoísta, que no apunta al bien común.

    .bg_grad-08
      .row.mb-5
        .col-12.col-lg-4(data-aos="fade-right")
          figura.d-flex.justify-content-center
            img.img350(src='@/assets/curso/temas/tema2/t2-12.svg' alt='Texto que describa la imagen')
        .col-12.col-lg-8.d-flex.align-items-center(data-aos="fade-left")
          div.mt-5
            p Una de las problemáticas que establece la EBC es la acumulación de dinero, donde el propósito no tiene nada que ver con el bienestar social; la meta es la adquisición de bienes de valor como las propiedades o el dinero. No se toma en consideración el deterioro que se produce en la posesión de estos bienes.
            p.mb-0 Esto crea un daño continuo y avanzado del medio ambiente y se intensifica el calentamiento global o la generación progresiva y extralimitada de especulación, resultando una gran inestabilidad financiera. Otra de las problemáticas es la desigualdad económica en el mundo.

    p El éxito de las empresas está determinado por el balance económico, mientras que el de los países por su Producto Interno Bruto (PIB). La EBC genera valores determinados por índices monetarios cuyo valor real es un medio necesario para alcanzar el fin de la economía: el bien común. La meta es encontrar la manera para que el dinero sea el mecanismo utilizado para lograr el bienestar social.

    p.mb-5 Algunas soluciones propuestas por la Economía del Bien Común para lograr un modelo económico más sostenible y que apunte al bienestar social son:

    h3.bgr_4.p-3.mb-5 Soluciones propuestas por la EBC

    .row.mb-5
      .col-12.col-lg-4(data-aos="fade-left")
        figura
          img(src='@/assets/curso/temas/tema2/t2-13.svg' alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-right")
        .tarjeta.bgr_5.p-4
          p La Economía del Bien Común no procura criticar los errores del modelo económico definido actual, sino que facilita impactar de manera positiva y aporta soluciones.
          p Algunas de las propuestas de solución basadas en el modelo EBC son:
          ul.fa-ul
            li
              i.fa-li.fas.fa-check-circle.colr
              | Priorizar los valores humanos y cooperativos.
            li
              i.fa-li.fas.fa-check-circle.colr
              | Desaparecer las diferencias económicas.
            li
              i.fa-li.fas.fa-check-circle.colr
              | Implementar instituciones públicas.
            li
              i.fa-li.fas.fa-check-circle.colr
              | Reducir la huella ecológica.

    .row.justify-content-center(data-aos="flip-down")
      .col-12.col-lg-10
        .row.bg_grad-09.justify-content-center
          .col-12.col-md-2.d-flex.align-items-center.justify-content-center.mb-3.mb-md-0
            figura
              img(src='@/assets/curso/temas/tema2/t2-14.svg' alt='Texto que describa la imagen')
          .col-12.col-md-9.d-flex.align-items-center.p-lg-5
            p.mb-0.mt-xl-4 Las soluciones rendirán resultados a mediano y largo plazo, aunque primero se debe hacer una concientización social para que este modelo económico sea un éxito; generando una transformación sustancial en el sistema económico de ahora, privilegiando las relaciones sociales y el beneficio común.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
