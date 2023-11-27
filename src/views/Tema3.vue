<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Economía Circular

    .bg_grad-10
      .row.mb-5
        .col-auto.mb-3.mb-xl-0
          figura
            img.d-none.d-lg-flex(src='@/assets/curso/temas/tema3/t3-1.svg' alt='')
        .col-12.col-lg-11.d-flex.align-items-center
          p.mb-0 Es un modelo de consumo y producción que involucra reducir, renovar, reparar, reutilizar y reciclar materiales o productos todas las veces posibles para generar un valor diferenciador. De este modo, el ciclo de vida de los productos se prolonga.

    .bg_grad-07
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-12.col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 7
            span Economía circular
          figura
            img(src='@/assets/curso/temas/tema3/t3-2.svg' alt='La figura ilustra el concepto de Economía Circular, un ciclo en el que se destacan siete etapas: Materias primas y Residuos, Innovación, Producción y reelaboración, Distribución, Consumo, reutilización y reparación, Recogida y Reciclaje.')
          figcaption.mt-5 Nota. Adaptado de Morlo (2021). ¿Qué es la economía circular?

    .tarjeta.color-primario.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/dwv.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 La economía circular en 4 minutos
              p.text-small Para ampliar el tema sobre la Economía circular, se recomienda ver el video sobre: “La economía circular en 4 minutos” que se encuentra en el material complementario de este componente formativo.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=ZEgLWrMJd2M" target="_blank")
                span Ir al enlace

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Principios, beneficios y modelos de pensamiento de la economía circular

    p La economía circular es un sistema de aprovechamiento de recursos que prioriza la minimización de factores. Este enfoque busca reducir la producción y, cuando sea necesario, el uso de productos, dando prioridad a la reutilización de recursos y materiales que no se reintegran al medio ambiente debido a sus propiedades.

    p.mb-5 Son diez principios que abarca la economía circular, conozcámoslos:

    h3.bgr_4.p-3.mb-5 Principios de la Economía Circular

    .bg_grad-11
      .row.mb-5.p-3.p-lg-5
        .col-12.col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
          figura.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema3/t3-3.svg' alt='')
        .col-12.col-lg-5(data-aos="fade-left")
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span 1
              span Ecología industrial y territorial
            li
              .lista-ol--cuadro__vineta
                span 2
              span El residuo se convierte en recurso
            li
              .lista-ol--cuadro__vineta
                span 3
              span Segundo uso
            li
              .lista-ol--cuadro__vineta
                span 4
              span Reutilización
            li
              .lista-ol--cuadro__vineta
                span 5
              span Reparación
            li
              .lista-ol--cuadro__vineta
                span 6
              span Reciclaje
            li
              .lista-ol--cuadro__vineta
                span 7
              span Valorización
            li
              .lista-ol--cuadro__vineta
                span 8
              span Economía de la funcionalidad
            li
              .lista-ol--cuadro__vineta
                span 9
              span Energía de fuentes renovables
            li
              .lista-ol--cuadro__vineta
                span 10
              span Eco-concepción

    .bg_grad-12
      .row.mb-5
        .col-12.col-lg-10.d-flex.align-items-center
          p.mb-0.text-white Mediante los cuales busca utilizar la mayor cantidad posible de materiales biodegradables en la producción de bienes de consumo (nutrientes biológicos), para que puedan ser devueltos a la naturaleza sin dañar el medio ambiente, ámbito en el que se agota su vida útil.
        .col-12.col-lg-2
          figura.d-flex.justify-content-center
            img.img180(src='@/assets/curso/temas/tema3/t3-4.svg' alt='')

    p.mb-5 La economía circular también contempla varios
      span.colr.text-bold modelos económicos y escuelas de pensamiento
      | que buscan mejorar y optimizar los recursos mediante la reutilización, obteniendo beneficios rentables y que los consumidores finales tengan precios más accesibles. A continuación, se presentan los siguientes modelos económicos enfocados y direccionados a la economía circular:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bgr_20(data-aos="zoom-in")
      .row(titulo="<em>Cradle to cradle</em> (de la cuna a la cuna)").justify-content-center
        .col-12.col-lg-8.mb-4.mb-lg-0
          p Es un concepto postulado por el arquitecto suizo Walter R. Stahel en los años 70. Hace referencia a la necesidad de usar materiales durables en el tiempo y que no se acabe su uso cuando sean desechados, al contrario, se puedan reutilizar íntegramente para elaborar algo nuevo, cuando su función para lo que habían sido diseñados haya terminado.
          p.mb-0 Por ejemplo, Volta ha diseñado una batería que se puede recargar en un baño de agua sal y vinagre, sin embargo, la batería es totalmente reciclable. Para el desarrollo, la empresa utilizó un generador de biomoléculas Ingeo certificado por C2C; el diseño permite que se cambien las piezas y los componentes de la carcasa, que se pueden quitar y descargar para su recuperación y reutilización.
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/t3-5.png', alt='')
      .row(titulo="<em>Biomimicry</em> (biomímesis)").justify-content-center
        .col-12.col-lg-8.mb-4.mb-lg-0
          p La biomímesis es un campo interdisciplinario en el que se aplican los fundamentos de la ingeniería, la química y la biología para sintetizar materiales, sistemas o máquinas que simulan procesos biológicos. En otras palabras, estudia el camino humano a través de la ciencia y la capacidad de resolver problemas utilizando la naturaleza como fuente de inspiración. Un ejemplo de ello es el sistema de alarma inspirado en los ojos de los insectos.
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/t3-6.png', alt='')
      .row(titulo="Capital natural").justify-content-center
        .col-12.col-lg-8.mb-4.mb-lg-0
          p Este concepto es definido por Robert Constanza y Herman Daly en los años 90’s, se refiere al stock o inventario de recursos naturales renovables y no renovables que, al ser juntados, aportan beneficios a las personas. Un caso particular del capital natural es la regulación de gases (captura de carbono y generación de oxígeno) proporcionan una mejor calidad a la tierra, aire y agua, además, estos servicios no se transforman, ni se acaban.
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/t3-7.png', alt='')
      .row(titulo="Ecología industrial").justify-content-center
        .col-12.col-lg-8.mb-4.mb-lg-0
          p Es una corriente que promueve el desarrollo sostenible elaborando ciclos de materia prima cerrados con el objetivo de minimizar en lo posible los desechos. Esta teoría expone que el sistema industrial como un ecosistema, debe usar materia prima y energía al mismo tiempo en que la biosfera pueda sustituirlo. Por ejemplo, una refinería de petróleo.
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/t3-8.png', alt='')
      .row(titulo="Producción más limpia").justify-content-center
        .col-12.col-lg-8.mb-4.mb-lg-0
          p Es la aplicación continua de una estrategia de prevención ambiental integrada en las operaciones, bienes y servicios, con el fin de reducir los riesgos para las personas y el medio ambiente, aumentar la competitividad de la empresa y garantizar la seguridad de la economía. Los equipos de bajo consumo energético son un ejemplo de producción más limpia.
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/t3-9.png', alt='')
      .row(titulo="Economía azul").justify-content-center
        .col-12.col-lg-8.mb-4.mb-lg-0
          p La economía azul se refiere al uso sostenible, la gestión y la conservación de los recursos marinos a través de actividades que promuevan el desarrollo económico y la mejora de los estilos de vida, así como la preservación de la riqueza de la biodiversidad en las áreas afectadas. Los ejemplos de una economía verde incluyen el monitoreo de animales marinos; Actividad responsable y sostenible relacionada con el ecoturismo, realizada en alta mar sin interrupción de la migración, pesca o daños de ningún tipo.
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/t3-10.png', alt='')
      .row(titulo="Diseño regenerativo").justify-content-center
        .col-12.col-lg-8.mb-4.mb-lg-0
          p El diseño regenerativo describe procesos que renuevan, restauran y revitalizan sus propias fuentes de energía y materiales con los que se elaboran sistemas que relacionan las necesidades de la sociedad con las de la naturaleza. Por ejemplo, la permacultura se basa en el diseño de una casa, si una casa está mal diseñada puede causar muchos problemas en un futuro con la calidad de los materiales de construcción o uso de energía de forma excesiva. Ahora con un diseño regenerativo, se pueden utilizar materiales de origen biológico, por ejemplo, cemento de cáñamo o instalar paneles solares para generar luz eléctrica.
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/t3-11.png', alt='')
      div(titulo="<em>Performance economy</em> (Economía de rendimiento)")
        p.mb-5 La economía de rendimiento es otra de las teorías postuladas por Walter R. Stahel, este modelo económico consiste en evaluar el impacto en la generación de empleo en la competitividad económica, el uso sensato de los recursos y en la disminución de residuos de la economía circular, esta se fundamenta en cuatro objetivos: el ciclo de vida del producto, los bienes de larga duración, las operaciones de reacondicionamiento y la disminución de residuos. Estos objetivos se basan en cinco pilares de una sociedad sostenible según Stahel:
        .row.justify-content-center
          .col-12.col-lg-10
            figure
              img(src='@/assets/curso/temas/tema3/t3-12.svg', alt='La figura presenta los cinco pilares de una sociedad sostenible cada uno representando un pilar específico. Estos pilares son: Conservación de la naturaleza, Toxicidad limitada, Producción de recursos, Ecología cultural y Ecología social.')

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Marco normativo nacional de economía circular

    p.mb-5 El marco normativo tiene un papel fundamental para alcanzar los objetivos que plantea la economía circular, estos facilitan los procesos de implementación en las organizaciones de manera clara y pertinente otorgándole garantías y herramientas de fácil análisis y comprensión. A continuación, se presentan las normas nacionales de economía circular que sirven de apoyo en los diferentes sectores económicos:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Marco normativo nacional de economía circular

    .tabla-a.color-acento-contenido.mb-5(data-aos="flip-left")
      table
        thead
          tr.bgr_21.text-white
            th Política
            th Descripción
        tbody
          tr.bgr_22
            td.text-bold.p-4 Plan Nacional de Desarrollo 2018-2022
            td Impulso de la Economía Circular en los procesos Productivos.
          tr
            td.text-bold.p-4 Política Nacional de Desarrollo Productivo
            td Desarrollo de Negocios Verdes.
          tr.bgr_22
            td.text-bold.p-4 Política Nacional de Crecimiento Verde
            td Bases para crear una hoja de ruta de Economía Circular en el país.
          tr
            td.text-bold.p-4 Estrategia Nacional de Economía Circular
            td Mayor valor añadido a los sistemas de producción y consumo gracias a estrategias económicas circulares.
          tr.bgr_22
            td.text-bold.p-4 Ley 142 de 1994
            td Configura el régimen de los servicios públicos domiciliarios.
          tr
            td.text-bold.p-4 Ley 143 de 1994
            td Define las actividades de cómo se produce, entrega, transmite, distribuye y comercializa la electricidad.
          tr.bgr_22
            td.text-bold.p-4 Ley 697 de 2001
            td Se fomenta el uso racional y eficiente de la energía, mediante el uso de energías alternativas y se regulan otras normativas.
          tr
            td.text-bold.p-4 Ley 1715 de 2014
            td Fomento a la eficiencia energética y uso de fuentes no convencionales de energía.
          tr.bgr_22
            td.text-bold.p-4 Ley 1819 de 2016
            td A partir de 2017 se aplica un impuesto al carbono de 15.000 pesos por tonelada de CO#[sub 2] (alrededor de $5).
          tr
            td.text-bold.p-4 Resolución 1207 de 2014
            td Fomento a la reutilización del agua.
          tr.bgr_22
            td.text-bold.p-4 Resolución 0472 de 2017
            td Aprovechamiento de residuos de construcción y demolición (RCDs).
          tr
            td.text-bold.p-4 Resolución 1407 de 2018
            td Responsabilidad Extendida del Productor para envases y empaques.

    p Si desea conocer en detalle cada una de las normativas descritas, puede ingresar en la <em>web</em> y consultarlas.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Incentivos para la implementación de proyectos de economía circular

    p.mb-5 En Colombia se pueden acceder a varios incentivos tributarios si se implementa ya sea uno o varios proyectos de economía circular como los siguientes:

    .bg_grad-13
      .row.mb-5.p-4
        .col-12.col-lg-7.mb-3
          .row.mb-3
            .col-12.col-md-6.col-lg-6.mb-3
              .row.justify-content-center(data-aos="fade-right")
                .col-4.col-lg-4.bgr_23
                  figure.p-2.d-flex.justify-content-center
                    img.img70(src='@/assets/curso/temas/tema3/t3-13.svg', alt='')
                .col-7.col-lg-7.bgr_24.d-flex.align-items-center
                  p.text-bold.mb-0 Eliminación del IVA.
            .col-12.col-md-6.col-lg-6
              .row.justify-content-center(data-aos="fade-left")
                .col-4.col-lg-4.bgr_23
                  figure.p-2.d-flex.justify-content-center
                    img.img70(src='@/assets/curso/temas/tema3/t3-14.svg', alt='')
                .col-7.col-lg-7.bgr_24.d-flex.align-items-center
                  p.text-bold.mb-0 Descuento de renta.
          .row.mb-3
            .col-12.col-md-6.col-lg-6.mb-3
              .row.justify-content-center(data-aos="fade-right")
                .col-4.col-lg-4.bgr_23
                  figure.p-2.d-flex.justify-content-center
                    img.img70(src='@/assets/curso/temas/tema3/t3-15.svg', alt='')
                .col-7.col-lg-7.bgr_24.d-flex.align-items-center
                  p.text-bold.mb-0 Desgravación de renta.
            .col-12.col-md-6.col-lg-6
              .row.justify-content-center(data-aos="fade-left")
                .col-4.col-lg-4.bgr_23
                  figure.p-2.d-flex.justify-content-center
                    img.img70(src='@/assets/curso/temas/tema3/t3-16.svg', alt='')
                .col-7.col-lg-7.bgr_24.d-flex.align-items-center
                  p.text-bold.mb-0 Devaluación acelerada.
          .row
            .col-12.col-md-6.col-lg-6
              .row.justify-content-center(data-aos="fade-right")
                .col-4.col-lg-4.bgr_23
                  figure.p-2.d-flex.justify-content-center
                    img.img70(src='@/assets/curso/temas/tema3/t3-17.svg', alt='')
                .col-7.col-lg-7.bgr_24.d-flex.align-items-center
                  p.text-bold.mb-0 Cero en arancel.

        .col-12.col-lg-4(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.img350(src='@/assets/curso/temas/tema3/t3-18.svg', alt='')

    .row
      .col-12.col-lg-5.mb-3.mb-lg-0.d-lg-flex.align-items-center(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.img500(src='@/assets/curso/temas/tema3/t3-19.png', alt='')
      .col-12.col-lg-7(data-aos="fade-right")
        .bgr_2.p-4.mb-3
          p.mb-0 Durante el año 2019, la Autoridad Nacional de Licencias Ambientales (ANLA) obtuvo más de 600 solicitudes, por consiguiente, destino 462 incentivos, el 68% fue incorporado a inversiones de control, monitoreo y programas ambientales, en fuentes no convencionales de energía fue el 23%, mientras que, el 9% a eficiencia energética.
        p Los Incentivos fiscales relacionados con los beneficios ambientales, se han destinado en 338 mil millones de pesos tanto a la exclusión del impuesto al valor agregado, como a la deducción del impuesto a la renta. La inversión en las industrias del país se vio incentivada por más de $1.700 millones de pesos en 2019.

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Casos de éxito en la implementación de la economía circular

    p.mb-5 La aplicación de la economía circular puede generar en las organizaciones grandes beneficios en el ámbito económico con enormes utilidades y ahorros. En aspectos sociales, permite que se incrementen los empleos formales, asimismo, el enfoque ambiental es fundamental por el uso de los recursos de manera sostenible mediante mecanismos de reutilización y transformación de nuevos productos. En la siguiente tabla se presentan casos de éxitos de distintas empresas de marcas registradas que han optado por modelos sostenibles en sus organizaciones:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      span Casos de éxito de empresas con modelos sostenibles

    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table
        caption Nota. Adaptado de la guía empresarial Economía Circular: Una forma diferente de hacer negocios sostenibles.
        thead
          tr.bgr_21.text-white
            th Empresa
            th Proyecto
            th Impacto
        tbody
          tr.bgr_22
            td
              figure.d-flex.justify-content-center.mb-3
                img.img120(src='@/assets/curso/temas/tema3/t3-20.png', alt='')
              p.text-bold.text-center Caterpillar - Equipos de construcción y minería
            td Fabricación de equipos nuevos con equipos inservibles (re-fabricación).
            td Ahorro de 1,7 millones de dólares en 2018.
          tr
            td
              figure.d-flex.justify-content-center.mb-3
                img.img160(src='@/assets/curso/temas/tema3/t3-21.png', alt='')
              p.text-bold.text-center C&A - Tienda de ropa
            td Ropa hecha de algodón orgánico, materiales y cosas que son seguras para los humanos y el medio ambiente.
            td En dos años se han vendido más de millones de prendas con un impacto positivo en el medio ambiente.
          tr.bgr_22
            td
              figure.d-flex.justify-content-center.mb-3
                img.img180(src='@/assets/curso/temas/tema3/t3-22.png', alt='')
              p.text-bold.text-center Unilever_ Empresa multinacional de bienes de consumo
            td Planta CreaSolv para recuperar polietileno de bolsas y reintegrarlo a nuevos productos de empaque.
            td Recolección de tres toneladas de materia prima por día de envases desechados en 2018.
          tr
            td
              figure.d-flex.justify-content-center.mb-3
                img.img100(src='@/assets/curso/temas/tema3/t3-23.png', alt='')
              p.text-bold.text-center MUD Jeans- Empresa de moda circular
            td Modelo "arriendo de ropa" con posibilidad de reparar jeans y reponerlos con el pago de una suscripción mensual.
            td Apertura de mercado en 29 países, con un crecimiento en ventas en 147% en los últimos tres años.


</template>

<script>
export default {
  name: 'Tema3',
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
