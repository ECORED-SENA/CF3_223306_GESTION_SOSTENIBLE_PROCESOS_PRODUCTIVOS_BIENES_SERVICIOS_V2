<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ecosistema

    p.mb-5 Un ecosistema es un conjunto de organismos vivos y elementos no vivos interdependientes que comparten el mismo hábitat. Estos se relacionan entre sí y con su entorno, participando en el ciclo de energía y de nutrientes a través de procesos como el parasitismo, la simbiosis, la competencia y la depredación.

    .row.justify-content-center
      .col-12.col-xl-9
        .titulo-sexto.color-acento-contenido(data-aos="fade-down-right")
          h5 Figura 1
          span Bosque manglar de día

        figura(data-aos="zoom-in-up").mb-5
          img.mb-3(src='@/assets/curso/temas/tema1/img1.png' alt='Ilustración de un bosque de manglar durante el día, con aves volando, una garza parada junto al agua y vida marina visible bajo la superficie del agua.')

        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema1/img2.svg", style="max-width: 82px")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 “Definición y Tipos de Ecosistema” de Ecología Verde (2020)
                  p.text-small.mb-0 Para ampliar el tema sobre el Ecosistema, se recomienda ver el video sobre: “Definición y Tipos de Ecosistema” de Ecología Verde (2020), que se encuentra en el material complementario de este componente formativo.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=3LeeVif_qSQ" target="_blank")
                    span Ver video
                    i.fas.fa-video

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1	Límites ecológicos

    p.mb-5 Un límite ecológico o planetario es aquel espacio puntual en función de un proceso ambiental global, con el fin de procurar no sobrepasar cierto límite, para evitar catástrofes al ser humano. Además, establece un lugar seguro para el hombre con respecto a la definición de procesos biofísicos que controla la estabilidad y funcionamiento del planeta.

    .row.justify-content-center.mb-5
      .col-12.col-lg-5.pst.mb-3.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img.img200.w-100(src='@/assets/curso/temas/tema1/v2022/t1-2.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4.bgr_3.h-100
              p.mb-0 Acciones como el uso del agua, la limitación de ríos, la sobrepoblación humana, el uso de fertilizantes en los cultivos, la cantidad de vehículos, el uso del papel, entre otros; han definido la era actual (antropoceno) de nuestro planeta desde los años cincuenta.
      .col-12.col-lg-5.pst(data-aos="fade-left")
        .tarjeta-avatar
          img.img200.w-100(src='@/assets/curso/temas/tema1/v2022/t1-3.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4.bgr_31.h-100
              p.mb-0 Antropoceno significa la época geológica definida por el impacto de la humanidad sobre la Tierra, donde las actividades del hombre han transformado fuertemente al sistema global que persevera la vida en el planeta.

    p.mb-5 Si los límites ecológicos exceden sus topes, pueden existir consecuencias catastróficas o destructivas en el planeta, estos se relacionan con la extinción de flora y fauna, la concentración de gases como el nitrógeno y el fósforo en la atmósfera y en los océanos, la reducción del ozono estratosférico, la acidificación de océanos, los cambios en la utilización de la tierra, el uso de agua dulce, la contaminación química y la carga de aerosol en la atmósfera. En el siguiente gráfico se muestran los límites en la Tierra impuestos por la naturaleza y el desarrollo:

    .bg_grad-02
      .row.justify-content-center
        .col-12.col-lg-8(data-aos="zoom-in")
          .titulo-sexto.color-acento-contenido
            h5 Figura 2
            span Límites planetarios
          figura
            img(src='@/assets/curso/temas/tema1/v2022/t1-4.svg' alt='La figura del gráfico de Límites planetarios. ofrece una representación visual que evalúa el estado actual de diversas dimensiones críticas que afectan la sostenibilidad y equilibrio ecológico del planeta. Diferenciadas por zonas de color, las áreas rojas indican un alto riesgo de haber superado límites seguros, las naranjas señalan riesgos crecientes, las verdes muestran que estamos dentro de límites seguros y las grises indican dimensiones no cuantificadas.Los componentes del gráfico abarcan una amplia gama de dimensiones ecológicas, que van desde el cambio climático y la integridad de la biosfera, hasta cuestiones como la diversidad genética, la introducción de nuevas sustancias químicas en el ambiente, y la disponibilidad de agua dulce. También se incluyen factores como los cambios en el uso de la tierra y la alteración de ciclos biogeoquímicos, como los del nitrógeno y fósforo, y la acidificación de los océanos. Estas dimensiones ayudan a comprender de forma integral los desafíos a los que nos enfrentamos en la búsqueda de un planeta más sostenible.')
            figcaption.mt-3 Nota. Límites planetarios. Adaptado de Rodríguez M. (2017). Los límites impuestos por la naturaleza y el desarrollo. Pág. 20.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Relación del hombre con la naturaleza

    .row.mb-5
      .col-12.col-xl-6.mb-3.mb-xl-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/temas/tema1/v2022/t1-5.png' alt='')
      .col-12.col-xl-6(data-aos="fade-left")
        p A través de la historia el ser humano ha dependido de la naturaleza para su supervivencia, por esta razón, el hombre siempre ha buscado conocerla y comprenderla. Gracias a la capacidad de razonamiento del ser humano y su inteligencia, se ha adaptado al entorno según sus necesidades y deseos. No solo se quedó en recolectar los frutos que le proporciona la naturaleza, más bien aprendió a sembrar, cosechar y mantener sus cultivos a lo largo del tiempo, mediante el desarrollo científico, industrial y tecnológico; sin embargo, el hombre no ha cuidado la naturaleza y se ha encargado de destruirla como consecuencia del impacto producido por este desarrollo.
        .bgr_2.p-4
          p.mb-0 El hombre ha explotado de manera excesiva su hábitat, sobrepasando los límites de la regeneración de las cadenas alimenticias, perjudicándose así mismo. La pérdida de biodiversidad, la deforestación, la contaminación del agua y el aire, son consecuencias de las actividades humanas, lo que ha dado como resultado el cambio climático.

    h4.bgr_4.py-3.px-5.mb-5(data-aos="fade-down-right") Los equilibrios ecosistémicos

    p.mb-5 La contribución de la biodiversidad a la vida del hombre y sus sistemas productivos es numerosa. En particular, la agricultura ayuda a preservar el equilibrio del medio ambiente, garantizando con ello los ciclos globales de los nutrientes, la restauración del suelo degradado, la descomposición de la materia orgánica, el control de plagas y virus, la polinización y demás. Por consiguiente, el restablecimiento de la diversidad biológica facilita disminuir la dependencia de insumos en los procesos agropecuarios y forestales como fertilizantes, acondicionadores del suelo, agua, herbicidas, insecticidas, entre otros.

    .bloque-texto-g.color-acento-contenido.pst_1.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-left")
      .bloque-texto-g__img.d-flex.align-items-end(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/v2022/1.png')})`}"
      )
        .bgr_32.px-4.py-3.mb-5.mb-lg-3
          p.mb-0 Iguana marítima de islas Galápagos
      .bloque-texto-g__texto.p-4
        p.mb-0 Los cambios en el entorno son continuos procesos adaptativos de especies que evolucionan con el fin de poder permanecer, adecuándose y enfrentándose a estos cambios, por esto, se plantea el equilibrio ecosistémico. Un ejemplo son las iguanas marinas que regresaron al mar a lo largo de varias generaciones; sus cuerpos que ya no estaban adecuados para vivir y alimentarse en el mar, debido a que absorben agua salada y la sal acumulada en la sangre era muy peligrosa en ellas, lograron a lo largo de los años, desarrollar una glándula donde acumulan la sal para después expulsarla.


    h4.bgr_4.py-3.px-5.mb-5(data-aos="fade-down-right") La resiliencia como estrategia adaptiva

    .row.mb-5
      .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
        p La preservación de un ambiente sano influye en gran medida en una región o país. El desarrollo sustentable o sostenible se enfoca en hacer uso responsable de los recursos naturales con la intención de conservar los ecosistemas.
        .bgr_5.p-4
          p.mb-0 La resiliencia de los ecosistemas se define como la capacidad de recuperarse de un trauma o resistir tensiones en curso. Esto significa que los complejos procesos físicos y ciclos biogeoquímicos, llevados a cabo por los factores bióticos y abióticos de un ecosistema en un período determinado, tienen como objetivo restaurar su estado anterior. Esta restauración se produce en respuesta a cambios inducidos por factores externos. En este sentido, la meta es recuperar y mantener la estabilidad del ecosistema.

      .col-12.col-lg-4(data-aos="fade-left")
        figura.d-flex.justify-content-center
          img.img400(src='@/assets/curso/temas/tema1/v2022/t1-7.png' alt='')


      h4.bgr_4.py-3.px-5.mb-5(data-aos="fade-down-right") Ciclos biogeoquímicos

      .bg_grad-03.mb-5
        .row.mb-5
          .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
            figura
              img(src='@/assets/curso/temas/tema1/v2022/t1-8.svg' alt='')
          .col-12.col-lg-8.d-flex.align-items-center(data-aos="fade-left")
            div.mt-5
              p.mb-0 Los ciclos biogeoquímicos o ciclos de la materia son procesos de intercambio de elementos químicos (agua, nitrógeno, oxígeno y demás) con los seres vivos y el medio ambiente, a través de un conjunto de procesos de producción, transporte y descomposición. En estos ciclos intervienen diferentes formas de vidas como la microscópica, vegetal, animal, entre otras; también elementos naturales inorgánicos como el viento, la lluvia, etc.

      h4.bgr_4.p-3.mb-5(data-aos="fade-down-right") Tipos de ciclos biogeoquímicos

      .row.mb-5
        .col-12.col-lg-4.mb-5.mb-lg-0(data-aos="flip-right")
          .tarjeta-avatar
            img.img120(src='@/assets/curso/temas/tema1/v2022/t1-9.svg' alt='')
            .tarjeta.bgr_7
              .row.justify-content-center
                .col-auto
                  h4.p-4.text-center.bgr_6.mb-0  Ciclos Hidrológicos
              p.p-4.mb-0 Son aquellos en los que participa el agua. Funciona de intermediario para el transporte de los componentes de un lugar a otro. El ciclo del agua pertenece a esta categoría.
        .col-12.col-lg-4.mb-5.mb-lg-0(data-aos="flip-left")
          .tarjeta-avatar
            img.img120(src='@/assets/curso/temas/tema1/v2022/t1-10.svg' alt='')
            .tarjeta.bgr_8
              .row.justify-content-center
                .col-auto
                  h4.p-4.text-center.bgr_6.mb-0  Ciclos Gaseosos
              p.p-4.mb-0 Son aquellos en los que participa la atmósfera para el transporte de los componentes químicos del ciclo; el ciclo del oxígeno, carbono y nitrógeno, son pertenecientes de esta categoría.
        .col-12.col-lg-4.mb-5.mb-lg-0(data-aos="flip-right")
          .tarjeta-avatar
            img.img120(src='@/assets/curso/temas/tema1/v2022/t1-11.svg' alt='')
            .tarjeta.bgr_7
              .row.justify-content-center
                .col-auto
                  h4.p-4.text-center.bgr_6.mb-0  Ciclos Sedimentarios
              p.p-4.mb-0 Son aquellos en los que el transporte del componente químico resulta por sedimentación, es decir, por su reducida acumulación e intercambio en la corteza terrestre, en particular, el ciclo del fósforo.

      .row.bgr_5.p-4.mb-5
        .col-12.col-lg-10.mb-3.mb-lg-0
          p Estos ciclos son responsables de que los elementos químicos esenciales sean reciclados; de lo contrario, se agotarían, haciendo imposible la vida en el planeta.
          p.mb-0 De esta manera, los ciclos biogeoquímicos son los distintos procesos mediante los cuales la naturaleza facilita la circulación de la materia entre diversos seres vivos, asegurando así su disponibilidad continua. Los seres vivos no deben retener los nutrientes indefinidamente; estos deben ser devueltos al entorno para que puedan ser reciclados por otros organismos.
        .col-12.col-lg-2.d-flex.align-items-center
          figure
            img.img100.m-auto(src='@/assets/curso/temas/tema1/v2022/t1-30.svg', alt='')


      p A continuación, se describen algunos tipos de #[span.colr.text-bold ciclos biogeoquímicos]:

    .tarjeta.bgr_9.p-4.mt-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.p-3.p-lg-5
          .col-12.col-xl-6.mb-4.mb-xl-0
            h4 Ciclo del nitrógeno
            p El ciclo del nitrógeno se fundamenta en la acción de microorganismos procariotas, más conocidos como bacterias, y de las plantas. Estos organismos incorporan nitrógeno en sus cuerpos y sintetizan a partir de él moléculas orgánicas que son esenciales y útiles para las plantas. Posteriormente, los animales herbívoros consumen estas plantas, y a través de sus tejidos, el nitrógeno se transfiere a los animales carnívoros y omnívoros. Finalmente, el nitrógeno retorna al ambiente mediante la orina y la descomposición de los organismos muertos, seguida de su transformación bacteriana en nitrógeno atmosférico. Cabe destacar que el nitrógeno es uno de los gases predominantes en la atmósfera.
            a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
              span Ampliar imagen
              i.fas.fa-search-plus
              .indicador--click(v-if="mostrarIndicador")
          .col-12.col-xl-6
            figure
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='La imagen ilustra cómo el nitrógeno circula a través de la atmósfera, el suelo, las plantas y los animales, y cómo diferentes procesos biológicos y químicos facilitan este ciclo en la naturaleza.')

        .row.p-3.p-lg-5
          .col-12.col-xl-6.mb-4.mb-xl-0
            h4 Ciclo del carbono
            p Es el más complejo e importante de todos los ciclos biogeoquímicos, puesto que toda la vida existente requiere de compuestos derivados de estos elementos. Este ciclo incorpora procesos metabólicos vitales de las plantas y animales como la fotosíntesis y la respiración.


            p La captación del dióxido de carbono (CO2) se realiza desde la atmósfera a través de plantas, algas y algunas bacterias. Estos organismos transforman el CO2 en azúcares simples mediante procesos fotosintéticos, lo que facilita su ingreso y circulación en la cadena trófica. Finalmente, el CO2 retorna al ambiente a través de la respiración de los organismos y de su degradación tras la muerte.
            a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
              span Ampliar imagen
              i.fas.fa-search-plus
              .indicador--click(v-if="mostrarIndicador")
          .col-12.col-xl-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='La imagen  ilustra la compleja red de interacciones que mueven el carbono entre la tierra, la atmósfera, y los océanos, y cómo los diferentes procesos naturales contribuyen a este ciclo continuo.')

        .row.p-3.p-lg-5
          .col-12.col-xl-6.mb-4.mb-xl-0
            h4 Ciclo del fósforo
            p Es uno de los más complejos porque es un componente abundante en la corteza terrestre de clase mineral, aunque los seres vivos especialmente, lo requieren en cantidades leves. Este elemento forma parte de compuestos importantes como el ADN y el ARN.
            p El fósforo ingresa a la cadena trófica a través de las plantas y los microorganismos y, proviene principalmente de la degradación de minerales, sus principales vías de movimiento son por medio acuático.
            a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
              span Ampliar imagen
              i.fas.fa-search-plus
              .indicador--click(v-if="mostrarIndicador")
          .col-12.col-xl-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='La imagen muestra una representación esquemática del ciclo de los fosfatos en el medio ambiente, destacando la relación entre sistemas terrestres y marinos.')


    ModalA(:abrir-modal.sync="modal1")
      figure
        img(src='@/assets/curso/temas/tema1/img3.svg', alt='La imagen ilustra cómo el nitrógeno circula a través de la atmósfera, el suelo, las plantas y los animales, y cómo diferentes procesos biológicos y químicos facilitan este ciclo en la naturaleza.')
    ModalA(:abrir-modal.sync="modal2")
      figure
        img(src='@/assets/curso/temas/tema1/img4.svg', alt='La imagen  ilustra la compleja red de interacciones que mueven el carbono entre la tierra, la atmósfera, y los océanos, y cómo los diferentes procesos naturales contribuyen a este ciclo continuo.')
    ModalA(:abrir-modal.sync="modal3")
      figure
        img(src='@/assets/curso/temas/tema1/img5.svg', alt='La imagen muestra una representación esquemática del ciclo de los fosfatos en el medio ambiente, destacando la relación entre sistemas terrestres y marinos.')



    h4.bgr_4.p-3.mb-5(data-aos="fade-down-right") Flujos y transformación de energía

    p.mb-5 Los seres vivos que habitan en un ecosistema necesitan energía y materia para la realización de sus ocupaciones primordiales. Por lo tanto, para poder realizar su ciclo de vida, los seres vivos están clasificados en diferentes niveles, según el modo que obtienen la materia o energía; estos niveles son:

    .row.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-up")
        .bgr_10.p-4.h-100
          figure.mb-3.d-flex.justify-content-center
            img.img120(src='@/assets/curso/temas/tema1/v2022/t1-15.svg', alt='')
          .text-center
            h4 Productores
            p.mb-0 Son los que atraen y utilizan la energía solar para transformar la materia inorgánica en orgánica como son los organismos autótrofos.
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-down")
        .bgr_10.p-4.h-100
          figure.mb-3.d-flex.justify-content-center
            img.img120(src='@/assets/curso/temas/tema1/v2022/t1-16.svg', alt='')
          .text-center
            h4 Consumidores
            p.mb-0 Son los que se alimentan de los productores obteniendo así la energía y materia que necesita conocidos como organismos heterótrofos y están clasificados en consumidores primarios, secundarios y terciarios según la depredación.
      .col-12.col-lg-4(data-aos="flip-up")
        .bgr_10.p-4.h-100
          figure.mb-3.d-flex.justify-content-center
            img.img120(src='@/assets/curso/temas/tema1/v2022/t1-17.svg', alt='')
          .text-center
            h4 Descomponedores
            p.mb-0 Son los que transforman los residuos orgánicos e inorgánicos en materia después de haber sido usada por los productores como son las bacterias y hongos.

    p.mb-5 Estos procesos de transformación ocurren en un ecosistema para que la energía sea capturada y fijada en forma de materia por los productores, y posteriormente transmitida a los demás niveles a través de las relaciones de depredación. Esto da como resultado un flujo de materia y energía en el ecosistema. A continuación, se presentan los niveles tróficos del ecosistema terrestre.

    .row.bgr_11.px-4.py-5.justify-content-center(data-aos="zoom-out")
      .col-12.col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span Pirámide de niveles tróficos ecosistema terrestre
        figure
          img(src='@/assets/curso/temas/tema1/v2022/t1-18.png', alt='La imagen muestra una pirámide trófica del ecosistema terrestre. En la base están los productores (plantas). Les siguen los consumidores primarios (herbívoros como ciervos y pájaros), después los consumidores secundarios (como lagartos y peces) y en la cima, los consumidores terciarios (grandes felinos). A un lado, los descomponedores (insectos) descomponen materia orgánica, reciclando nutrientes en el ecosistema. La pirámide representa el flujo de energía entre los niveles alimenticios.')
          figcaption.mt-3 Nota. Niveles tróficos en los seres vivos. Adaptado de OVACEN (2018). Niveles tróficos: Productores, consumidores y descomponedores.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Teoría ecológica general del sistema

    .bg_grad-04
      .row.mb-5
        .col-12.col-lg-4(data-aos="fade-right")
          figura.d-flex.justify-content-center.mb-3.mb-lg-0
            img.img350(src='@/assets/curso/temas/tema1/v2022/t1-19.svg' alt='')
        .col-12.col-lg-8.d-flex.align-items-center(data-aos="fade-left")
          div
            p El psicólogo ruso Urie Bronfenbrenner postuló la teoría ecológica en el año 1979, donde justifica el impacto de los diferentes grupos sociales en el desarrollo humano de niños y adolescentes. Él identificó que la manera de ser de los niños y adolescentes cambiaba de acuerdo al contexto en el que se desenvuelven, como ejemplo, si alguien que vive en Europa se muda a Asia, es muy posible que su forma de pensar, sus gustos y emociones cambien a través de la modificación del entorno.

            p.mb-0 El entorno se entiende como un conjunto de sistemas interconectados en el que se establecen cinco distintos entornos que influyen en el desarrollo del niño o joven, situando y jerarquizando estos sistemas desde el más próximo hasta el más distante de él.


    p.mb-5 Los sistemas de la teoría ecológica se encuentran organizados como se muestra en el siguiente gráfico interactivo:

    .row.mb-5.justify-content-center(data-aos="flip-left")
      .col-12.col-lg-9
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/v2022/t1-20.svg', alt='La figura muestra el diagrama circular centrado en el "Sistemas del Modelo Ecológico de Bronfenbrenner"')
          .tarjeta.bgr_12.p-3(x="13%" y="3%" numero="+")
            .h5.mb-2 Cronosistema
            p Este nivel está definido por el momento actual que se esté experimentando y el grado de estabilidad en el entorno del individuo. Es decir, es diferente la educación que se enseñe ahora, que la que tenía lugar a lo largo de un conflicto civil en el pasado.
          .tarjeta.bgr_12.p-3(x="85%" y="3%" numero="+")
            .h5.mb-2 Macrosistema
            p Es comprendido por elementos de la cultura del entorno en el que vive el niño, como los valores éticos, tradiciones o religión.
          .tarjeta.bgr_12.p-3(x="2%" y="43%" numero="+")
            .h5.mb-2 Mesosistema
            p Está compuesto por las relaciones presentes entre los miembros del microsistema, por ejemplo, como se vincule la familia con los docentes o los padres con los amigos del individuo, impacta de manera directa sobre él. Por esta razón, es importante mantener una relación saludable con los miembros de cada nivel por su influencia en el comportamiento en el niño.
          .tarjeta.bgr_12.p-3(x="98%" y="43%" numero="+")
            .h5.mb-2 Exosistema
            p Está formado por los componentes que perjudican la vida del individuo, aunque no se relacionen de manera directa con él, afectan de forma indirecta a través de los miembros que componen el microsistema. Un ejemplo, podría ser las relaciones laborales de sus padres, sus tiempos de descanso y las emociones o alteraciones que experimenten en su ambiente de trabajo, que impactan finalmente al niño.
          .tarjeta.bgr_12.p-3(x="70%" y="85%" numero="+")
            .h5.mb-2 Microsistema
            p Está conformado por el nivel más cercano como los padres, la familia y el colegio. La relación de este nivel y el desarrollo del niño es más notable, ya que influyen de manera determinante las creencias de sus padres en su comportamiento. La familia es clave en el desarrollo emocional y el colegio en la socialización del niño.

    p.mb-5 De igual manera, en la figura a continuación, observa otra forma de ver los entornos que conforman la teoría ecológica social:

    .bg_grad-02
      .row.justify-content-center(data-aos="flip-right")
        .col-12.col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 4
            span La teoría ecológica

          figura
            img.pst_7(src='@/assets/curso/temas/tema1/v2022/t1-21.svg' alt='La figura representa la teoría ecológica; muestra cómo cada nivel del sistema tiene un impacto sobre el individuo, desde las interacciones más inmediatas hasta las influencias culturales y societales más amplias.')
            figcaption.mt-3 Nota. Entornos de la Teoría ecológica. Adaptado de Psicología II (3 de mayo, 2019). Teoría Ecológica: Urie Bronfenbrenner.

    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Metabolismo de la economía colombiana

    .bloque-texto-a.bgr_13.p-4.p-md-5.mb-5(data-aos="flip-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.order-2.order-lg-1
          .bloque-texto-a__texto.px-4.py-5
            p.mb-0 La necesidad de adoptar una economía circular en Colombia surge de los desafíos de conservar los recursos disponibles en el país y de la habilidad para reutilizarlos en diversos ciclos productivos, generando valor agregado. Esto impulsa la productividad y busca abrir nuevos mercados de exportación con productos innovadores.
        .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
          figura.d-flex.justify-content-center
            img.img250(src='@/assets/curso/temas/tema1/v2022/t1-22.svg' alt='')

    h4.bgr_4.p-3.mb-5(data-aos="fade-down-right") Metabolismo de materiales, agua y energía

    .row.bgr_14.p-4
      .col-12.col-lg-5.d-flex.align-items-center(data-aos="fade-left")
        p.mb-0 El equilibrio del metabolismo es analizado por el uso de agua, energía y la extracción de materia prima, así como las importaciones y exportaciones de acuerdo con el consumo. Es el fundamento para comprender la sostenibilidad ambiental de un país, de acuerdo con su uso, exceso o escasez de recursos; a la vez, es el análisis de materias primas y recursos lo que proporciona un indicador del tamaño y escala de la actividad económica en el país.
      .col-12.col-lg-7(data-aos="fade-right")
        figura
          img(src='@/assets/curso/temas/tema1/v2022/t1-23.png' alt='')


    .tarjeta.bgr_9.p-4.mt-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.p-3.p-lg-5
          h4 Metabolismo de la economía Colombiana
          .col-12.col-xl-5.mb-4.mb-xl-0
            p Según la OCDE y CEPAL (2014), Colombia posee y se caracteriza por su riqueza en los recursos naturales y el país tiene el 10 % de la biodiversidad a nivel mundial, compuesta por un territorio predominante del 50 % de bosque.
            .bgr_2.p-3.mb-3
              p.mb-0 La economía colombiana se posiciona en el puesto 39 con una participación del 0,39 % de la economía mundial
            p Según FEDESARROLLO (2018), las actividades económicas que más se destacan son el comercio (12,2 %), la industria (10,9 %), la construcción (7,2 %), el transporte (7 %), la agricultura (7,4 %) y la minería (6,1 %).
            p Colombia ha sido una de las economías más fuertes de la región con un promedio de 3% anual durante las últimas dos décadas. Además, dispone con 1’214,258 Mm#[sup 3]/año de recurso hídrico disponible, es decir, equivale a un per cápita de 28,370 m3 de agua comparado con  900m#[sup 3] per cápita en países de la OCDE.
          .col-12.col-xl-7
            figure
              img(src='@/assets/curso/temas/tema1/v2022/t1-24.png', alt='')
        .row.p-3.p-lg-5
          h4 Metabolismo de la economía Colombiana
          .col-12.col-xl-5.mb-4.mb-xl-0
            p Además, dispone de fuentes de agua entre las que se encuentran, la subterránea, agua lluvia y la superficial. Están localizadas de forma moderada en regiones vulnerables al desabastecimiento.
            .bgr_2.p-3.mb-3
              p.mb-0 Con respecto a la producción del uso del agua, Colombia está relacionada con la baja productividad del sector agropecuario, una de las principales industrias consumidoras de agua. Colombia genera 18.9 de dólares por cada metro cúbico de agua extraída.
            p En tal sentido, en el agua utilizada para riego en actividades agrícolas, la pérdida es del 48 % (7.732,9 millones m#[sup 3]), pese a que, para la industria ganadera la pérdida es cercana al 40 %, al igual que para el sector ganadero con industria.
          .col-12.col-xl-7
            figure
              img(src='@/assets/curso/temas/tema1/v2022/t1-25.png', alt='')
        .row.p-3.p-lg-5
          h4 Metabolismo de la economía Colombiana
          .col-12.col-xl-5.mb-4.mb-xl-0
            p Los insumos de materias primas, agua y energía en la economía colombiana se reflejan en la extracción interna de 400 millones toneladas de materias primas, y las importaciones calculadas en 21 millones de toneladas.
            p En el caso particular de las fuentes de energía primaria, el país cuenta con una oferta neta de 1.884 Pj  las cuales están representadas en gran parte por hidrocarburos con un 76 %, la energía hidráulica con el 12 %, la biomasa con el  11 % y solamente el 1 % representa otras energías renovables.
            p Cabe señalar que casi el 80 % los hidrocarburos que se extraen en el país se exportan y las importaciones no constituyen un valor significativo.
          .col-12.col-xl-7
            figure
              img(src='@/assets/curso/temas/tema1/v2022/t1-26.png', alt='')


    .row.bgr_5.p-4.mb-5
      .col-12.col-lg-2.d-flex.align-items-center.mb-3.mb-lg-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.img120(src='@/assets/curso/temas/tema1/v2022/t1-27.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-10(data-aos="fade-left")
        p.mb-0 La economía colombiana está representada en el volumen de exportaciones con más de 98 toneladas y el consumo interno se evalúa en 305 millones de toneladas. Este equilibrio entre entradas y salidas se concluye con el volumen de materiales que no representa un valor dentro de la economía, como por ejemplo, los residuos originados de materiales de la minería y la biomasa no empleada. En relación a los residuos domésticos, se calcula que son desechados alrededor de 18 millones de toneladas equivalentes a un 4.5 % de la extracción doméstica. Los residuos domésticos están conformados por residuos orgánicos (59 %), otros (16 %), plásticos (13 %), papel y cartón (9 %), vidrios (2 %) y metales (1 %). En el siguiente gráfico se puede observar una estimación del metabolismo de estos materiales:


    .bg_grad-05
      .row.justify-content-center(data-aos="flip-right")
        .col-12.col-lg-8
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/v2022/t1-28.svg', alt='La figura ilustra el flujo de la economía colombiana. Los insumos entran en la economía, se procesan y generan salidas, dejando ciertos residuos como subproducto')
            .tarjeta.bgr_15.p-3(x="5%" y="20%" numero="+")
              .h5.mb-2 Extracción doméstica (400 Mton)
              ul.fa-ul
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Biomasa  de madera y pescado (3 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Ganadería (23 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Biomasa de cultivos (13 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Materiales de construcción (25 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Metales (5 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Minerales y materiales industriales (2 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Hidrocarburos (29 %)
              .h5.mb-2 Importaciones (21 Mton)
              ul.fa-ul
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Biomasa  de madera y pescado (5 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Biomasa de cultivos (40 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Materiales de construcción (1 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Minerales y materiales industriales (25 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Hidrocarburos (29 %)

            .tarjeta.bgr_15.p-3(x="34%" y="95%" numero="+")
              .h5.mb-2 Disposición doméstico (18 Mton)
              ul.fa-ul
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Residuos
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Materia estéril
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Biomasa
            .tarjeta.bgr_15.p-3(x="99%" y="34%" numero="+")
              .h5.mb-2 Exportaciones (98 Mton)
              ul.fa-ul
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Biomasa (8 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Materiales de Construcción (1,5 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Minerales y materiales industriales (0,5 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Hidrocarburos (90 %)
              .h5.mb-2 Consumo interno (305 Mton)
              ul.fa-ul
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Biomasa  de madera y pescado (2 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Biomasa de cultivos (50 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Materiales de construcción (30 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Minerales y materiales industriales (8 %)
                li
                  i.fa-li.fas.fa-chevron-right.colr_1
                  span Hidrocarburos (10 %)

    h4.bgr_4.p-3.mb-5(data-aos="fade-down-right") Flujos de materiales prioritarios

    p.mb-5 La importancia de los flujos de materiales como enfoque vital en la economía circular, contempla la capacidad de aprovechamiento del flujo con respecto a su valor diferenciador, tecnología existente, el volumen del flujo y tendencias internacionales de acuerdo con las necesidades de circularidad. Con base en el análisis del metabolismo de la economía colombiana, se establecen seis líneas de acción que plantean diferentes flujos de materiales y energías:

    .row.justify-content-center(data-aos="zoom-in")
      .col-12.col-lg-9
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/v2022/t1-29.svg', alt='La imagen ilustra un esquema integral de las líneas de acción de flujos de materiales y energías. Se abordan seis áreas clave: flujos de materiales industriales, fuentes de energía, gestión del agua, materiales de construcción, biomasa y envases')
          .tarjeta.bgr_12.p-3(x="10%" y="3%" numero="+")
            .h5.mb-2 Flujo de materiales industriales y productos de consumo masivo
            p.mb-0 Está compuesto por materiales utilizados en procesos industriales donde la responsabilidad radica en el productor. Entre los residuos se encuentran los de aparatos eléctricos y electrónicos y los residuos peligrosos y especiales.
          .tarjeta.bgr_12.p-3(x="2%" y="45%" numero="+")
            .h5.mb-2 Flujo de envases y empaques
            p.mb-0 Se caracterizan por lo general, por su ciclo de vida y uso corto. Los materiales más utilizados en la elaboración de empaques y envases son: plástico, cartón, papel, vidrios y metales, y son utilizados en la industria de alimentos, bebidas, cosméticos y farmacéuticos.
          .tarjeta.bgr_12.p-3(x="11%" y="84%" numero="+")
            .h5.mb-2 Flujos de biomasa
            p.mb-0 Uno de los sectores que generan grandes volúmenes de biomasa residual es el agroalimentario, y está relacionado con la escasa productividad de la tierra.
          .tarjeta.bgr_12.p-3(x="90%" y="3%" numero="+")
            .h5.mb-2 Fuentes y flujos de energía
            p.mb-0 En esta línea se deben utilizar estrategias para optimizar la producción de energía que requieren las materias primas que se utilizan, como el agua y los combustibles fósiles. Es por esto, que se deben implementar energías renovables o transferencia tecnológica para disminuir las pérdidas y emplear recursos con medidas de eficiencia energética.
          .tarjeta.bgr_12.p-3(x="98%" y="45%" numero="+")
            .h5.mb-2 Flujos de agua
            p.mb-0 Representa las fuentes de agua superficial, subterránea y de lluvia. Los principales consumidores de agua son el sector agrícola, energético, consumo doméstico e industrial; también, el sector pecuario, piscícola, minero e hidrocarburos, entre otros.
          .tarjeta.bgr_12.p-3(x="89%" y="84%" numero="+")
            .h5.mb-2 Flujo de materiales de construcción
            p.mb-0 Es un flujo importante por su incremento durante la última década, causado por la construcción de edificios, viviendas y obras civiles, y por las necesidades de área para su ordenamiento final. Estos materiales están conformados por cemento, arcillas, plásticos, madera, vidrio y yeso, entre otros materiales.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
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
