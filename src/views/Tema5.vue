<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Cadena de valor

    .bg_grad-19
      .row.mb-5.justify-content-center
        .col-12.col-lg-6.d-flex.align-items-center.mb-3.mb-lg-0(data-aos="fade-right")
          p.mb-0 La cadena de valor es un modelo económico que describe todas las actividades necesarias para crear un producto o servicio. Para las organizaciones que fabrican mercancías, esta cadena incluye los pasos que llevan el producto desde la etapa de diseño hasta la etapa de entrega. Su objetivo es aumentar la eficiencia de la producción para ofrecer el mayor valor al menor costo posible. Este concepto fue introducido por Michael E. Porter en 1985 en su libro Ventaja Competitiva: Creación y sostenimiento de su desempeño superior.
        .col-12.col-lg-4(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema5/t5-1.png', alt='')

    p.mb-5 En el siguiente diagrama se observan las actividades que son básicas para la creación de un producto o servicio:

    .bg_grad-07
      .row.justify-content-center.mb-5
        .col-12.col-lg-8(data-aos="zoom-in")
          .titulo-sexto.color-acento-contenido
            h5 Figura 10
            span Cadena de valor
          figura
            img(src='@/assets/curso/temas/tema5/t5-2.svg' alt='La figura ilustra una Cadena de valor que categoriza las actividades empresariales en Actividades de soporte, como aprovisionamiento y gestión de recursos humanos, y Actividades primarias, como logística y marketing.')
          figcaption.mt-5 Nota. Adaptado de Grupo Trevenque (2021). La cadena de valor: qué es y cómo hacerla.

    p.mb-5 La importancia de aplicar la cadena de valor son diversas razones, aunque se destacan los siguientes:

    .bg_grad-13
      .row.mb-5
        .col-12.col-lg-7.p-4.mb-3.mb-lg-0.d-flex.align-items-center(data-aos="fade-right")
          ul.fa-ul
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Impulsar una mejora continua de los productos y servicios ofertados.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Optimizar de forma eficiente los procesos internos.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Incrementar la productividad de cada departamento.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Fomentar la reducción de los costes de actividad.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Identificar ventajas competitivas.
            li
              i.fa-li.fas.fa-check-circle.colr
              span Fidelizar clientes generando valor.
        .col-12.col-lg-4(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema5/t5-3.svg' alt='')

    p.mb-5 En la cadena de valor se dan dos tipos de actividades: primarias y secundarias:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").bgr_20(data-aos="zoom-out")
      .row(titulo="Actividades primarias")
        .col-12.col-xl-8.mb-4.mb-xl-0.px-5.py-3
          p El propósito principal es agregar valor y diseñar una ventaja competitiva. Estas actividades se componen por cinco aspectos:
          ol.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta
                span 1
              span Logística de entrada: las funciones son recibir, almacenar y gestionar el inventario.
            li
              .lista-ol--cuadro__vineta
                span 2
              span Operaciones: consiste en los procesos que la empresa desarrollar para transformar las materias primas en productos finales.
            li
              .lista-ol--cuadro__vineta
                span 3
              span Logística de salida: incluye todas las operaciones relacionadas a la distribución del producto terminado hacia los consumidores.
            li
              .lista-ol--cuadro__vineta
                span 4
              span <em>Marketing</em> y ventas: está conformada por las estrategias pertinentes para mejorar la imagen y llegar de manera adecuada a los clientes, por medio de la publicidad, la promoción y la fijación de precios.
            li
              .lista-ol--cuadro__vineta
                span 5
              span Servicio: el último aspecto trata de los programas de mejora de la experiencia del cliente y del producto, a través de la atención al cliente, el mantenimiento, la reparación, la sustitución o el cambio de producto.
        .col-12.col-xl-4
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema5/t5-4.png', alt='')
      .row(titulo="Actividades secundarias ")
        .col-12.col-xl-8.mb-4.mb-xl-0.px-5.py-3
          p Su función principal es de incrementar la eficiencia de las actividades primarias. Están compuestas por:
          ol.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta
                span 1
              span Adquisición: son todas las operaciones que la empresa lleva a cabo para adquirir las materias primas.
            li
              .lista-ol--cuadro__vineta
                span 2
              span Desarrollo tecnológico: es la etapa comprendida por la investigación y desarrollo que abarca actividades como preparar técnicas y automatización en los procesos del producto.
            li
              .lista-ol--cuadro__vineta
                span 3
              span Gestión de recursos humanos: incluye la contratación y captación de colaboradores que realicen de manera eficiente la estrategia de la empresa. Adicionalmente, estos contribuirán al diseño, comercialización y venta del producto.
            li
              .lista-ol--cuadro__vineta
                span 4
              span Infraestructura: son los sistemas y departamentos que lo conforman como contabilidad, finanzas, producción, control de calidad y demás.
        .col-12.col-xl-4
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema5/t5-5.png', alt='')

    .tarjeta.color-primario.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/dwv.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 ¿Qué es una cadena de valor?
              p.text-small.mb-0 Para ampliar el tema sobre la cadena de valor, se recomienda ver en el material complementario, el video de la Unidad de Desarrollo productivo, “¿Qué es una cadena de valor?”.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=1TTImw_WLWY" target="_blank")
                span Ir al enlace

    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Análisis y etapas del ciclo de vida del producto

    .bg_grad-14
      .row.mb-5
        .col-12.col-lg-10.d-flex.align-items-center
          p.mb-0 El ciclo de vida de un producto surge de la comparación que tienen los seres vivos frente a la evolución en la que se enfrenta a varias etapas a lo largo de la vida. En relación con el producto cumple un ciclo similar y que para las organizaciones permite analizar la introducción y salida de un producto en el mercado. En el siguiente gráfico revisaremos las etapas del ciclo de vida de un producto:
        .col-12.col-lg-2
          figure
            img.d-none.d-lg-flex(src='@/assets/curso/temas/tema5/t5-6.svg', alt='')

    .bg_grad-20
      h3.bgr_4.p-3.mb-5 Ciclo de vida de un producto

      .row.mb-5.justify-content-center
        .col-12.col-lg-8(data-aos="zoom-in")
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema5/t5-7.svg', alt='La figura representa el Ciclo de vida de un producto, un concepto que describe las distintas etapas que atraviesa un producto desde su introducción en el mercado hasta su eventual retirada. En el eje vertical, se muestran las ventas, mientras que el eje horizontal refleja el tiempo.')
            .tarjeta.bgr_12.p-3(x="4%" y="98%" numero="+")
              .h5.mb-2 Introducción:
              p.mb-0 Es una etapa creada después del desarrollo del producto e incluye una etapa de inicio lento para las ventas. Esto sucede mientras lleva tiempo darse a conocer a los consumidores. La desventaja es la necesidad de invertir mucho en <em>marketing</em> y comunicaciones. Por lo tanto, para aumentar la visibilidad de la oferta y ganar los primeros clientes, es necesario realizar campañas promocionales  con promociones agresivas.
            .tarjeta.bgr_12.p-3(x="27%" y="98%" numero="+")
              .h5.mb-2 Crecimiento:
              p.mb-0 Es el período de crecimiento de las ventas que facilitará la recuperación de las inversiones anteriores. Durante este período, la competencia por el producto se vuelve notoria; por ello, es adecuado aplicar técnicas de <em>market share</em> y <em>marketing mix</em> para desarrollar la analítica de productos, la innovación y conquistar nuevos segmentos de mercado. Este es un movimiento estratégico porque la competencia se muestra a través de su imagen, relación con los clientes y posicionamiento.
            .tarjeta.bgr_12.p-3(x="60%" y="98%" numero="+")
              .h5.mb-2 Madurez:
              p.mb-0 La demanda y los beneficios son mayores en esta etapa. La tasa de utilización del producto está en su tope. Sin embargo, es la etapa, que la competencia suele ser más intensa. La clave está en la diferenciación de la competencia, por lo tanto, es vital realizar inversiones en publicidad e identificar la satisfacción del cliente para aprovecharla al máximo y evitar un declive.
            .tarjeta.bgr_12.p-3(x="91%" y="98%" numero="+")
              .h5.mb-2 Declive:
              p.mb-0 Esta es la última etapa del ciclo de vida del producto y es el resultado de una caída o estancamiento significativo en las ventas. La caída en las ventas se debe a los cambios en los gustos y preferencias de los consumidores, así como a las nuevas tendencias y al surgimiento de productos alternativos.

    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2	Logística de ciclo cerrado y cadena de suministro

    .bg_grad-21
      .row.mb-5
        .col-12.col-xl-8.px-5.py-3.mb-3.mb-xl-0(data-aos="fade-right")
          .row.d-flex.align-items-center
            .col-12.col-xl-auto
              figure
                img.mb-3.img100.d-none.d-xl-flex(src='@/assets/curso/temas/tema5/t5-8.svg', alt='')
            .col-12.col-xl-10
                p El objetivo de la cadena de suministro de circuito cerrado o modelo de suministro de circuito cerrado es reducir el volumen de materias primas esenciales en la cadena de producción a través de la recuperación y reutilización de materiales después del consumo. Se deben hacer esfuerzos para garantizar que el desarrollo del producto se diseñe con materiales que se puedan convertir, reciclar y reutilizar para su reintegración en la cadena de producción.
          p.mb-0 Los beneficios de la integración de la cadena de suministro de circuito cerrado no son inmediatos, incluso es posible que la empresa incurra inicialmente en más costos de los que ahorra al adoptar el modelo, debido a las inversiones en logística inversa, la adaptabilidad de la cadena de producción y el desarrollo de productos como los envases más ecológicos, entre otras cosas. Los beneficios de este modelo de abastecimiento son una mayor competitividad, retornos financieros, menos desperdicio y mayor conocimiento de la marca.
        .col-12.col-xl-4(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema5/t5-9.png', alt='')

    p.mb-5 Las etapas que conforman las cadenas de suministro de circuito cerrado son las siguientes:

    .bgr_12.p-2.p-lg-5.mb-5(data-aos="flip-down")
      .titulo-sexto.color-acento-contenido
        h5 Figura 11
        span Etapas de la cadena de suministro
      figure
        .d-none.d-lg-block
          img(src='@/assets/curso/temas/tema5/t5-10.svg', alt='La imagen muestra las etapas que conforman las cadenas de suministro: desde su producción, pasando por la distribución y ventas, seguido de su posible reparación y reutilización, hasta su reciclaje o eliminación final.')
        .d-lg-none
          img(src='@/assets/curso/temas/tema5/t5-10b.svg', alt='La imagen muestra las etapas que conforman las cadenas de suministro: desde su producción, pasando por la distribución y ventas, seguido de su posible reparación y reutilización, hasta su reciclaje o eliminación final.')

    p.mb-5 A continuación, en la siguiente figura del modelo de suministro podemos observar que el éxito de su implementación es el de extraer el valor total de un material en la cadena del ciclo de vida del producto; la clave está en la línea de producción y el desarrollo del producto.

    .bg_grad-18
      .titulo-sexto.color-acento-contenido
        h5 Figura 12
        span Ejemplo de Cadena de suministros de círculo cerrado

      .row
        .col-12.col-lg-6(data-aos="fade-left")
          figure
            img.d-none.d-lg-flex(src='@/assets/curso/temas/tema5/t5-11.svg', alt='')
        .col-12.col-lg-6(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema5/t5-12.svg', alt='La gráfica muestra una Cadena de Suministro de Ciclo Cerrado, desde la producción y venta del producto hasta su reciclaje y reutilización. Incluye prácticas como la repoblación forestal para asegurar la sostenibilidad, minimizando así el desperdicio y promoviendo la reutilización eficiente de recursos.')
        figcaption.mt-3 Nota. Adaptado de Solupartes (2018). <em>Closed loop supply chain:</em> concepto y relevancia en el mercado.

    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3	Logística inversa

    p.mb-5 La logística inversa es una fase en la cadena de suministro que ocurre después de la entrega al cliente final y su intención es devolver el producto del cliente al distribuidor o proveedor. Existen dos tipos de logística inversa:

    .bg_grad-22
      .row.mb-5
        .col-12.col-lg-8.d-flex.align-items-center(data-aos="fade-right")
          ol.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta
                span a
              span #[strong Logística inversa de residuos:] se ocupa de recoger, reciclar y tratamiento de los residuos del producto final, que luego se ofrece a la venta. Con ello, se pretende reducir el impacto ambiental de los citados residuos, respetando los objetivos logísticos de utilizarlos para reponer valor de los mismos como materias primas, repuestos, etc.
            li
              .lista-ol--cuadro__vineta
                span b
              span #[strong Logística inversa de devoluciones:]  esta logística se encarga de devolver el producto desde el cliente final hasta el punto de origen. Esto puede ser generado por insatisfacción del cliente, entrega incorrecta, productos imperfectos y demás.
        .col-12.col-lg-4(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema5/t5-13.png', alt='')

    .bg_grad-14.p-4
      .titulo-sexto.color-acento-contenido
        h5 Figura 13
        span Ejemplo de Logística inversa

      .row
        .col-12.col-lg-6(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema5/t5-14.svg', alt='La gráfica ofrece una visión completa del ciclo de vida de un producto dentro del contexto de la Logística Inversa. El proceso comienza con la industria fabricando y empaquetando los productos, seguido de su distribución para comercialización. A continuación, los productos se venden directamente a los consumidores y, al alcanzar el final de su vida útil, son recolectados. Finalmente, se envían para reciclaje, cerrando así el ciclo completo')
        .col-12.col-lg-6(data-aos="fade-right")
          figure
            img.d-none.d-lg-flex(src='@/assets/curso/temas/tema5/t5-15.svg', alt='')

    .row.mb-5.mt-5
      .col-12.col-lg-4(data-aos="fade-right")
        figure
          img.d-none.d-lg-flex(src='@/assets/curso/temas/tema5/t5-16.png', alt='')
      .col-12.col-lg-8.d-flex.align-items-center(data-aos="fade-left")
        div
          p En los <em>e-commerce</em> (comercio electrónico), se deben optimizar los costos logísticos; por esta razón, el proceso de logística inversa debe estar bien organizado y ejecutado de modo sustentable en aspectos económicos porque permite el ahorro de dinero y tiempo.
          .bgr_5.p-4
            p.mb-0 La importancia de la logística inversa ejerce un rol esencial para brindar un buen servicio de devolución, la cual mejora la experiencia de compra, fomenta la fidelización del cliente, aumenta las ventas e impulsan la competitividad en el mercado.

    .tarjeta.color-primario.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/dwv.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 <em>Brain Logistics</em>, Logística Inversa
              p.text-small.mb-0 Para conocer más acerca de este tema, se recomienda ver el video de <em>Brain Logistics</em>, "Logística inversa" que se encuentra en el material complementario de este componente formativo.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=qwZg7zLS_Ms" target="_blank")
                span Ir al enlace

    separador

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Materias primas sostenibles

    .bg_grad-23
      .row.mb-5
        .col-12.col-lg-8.mb-3.mb-lg-0.d-flex.align-items-center(data-aos="fade-right")
          div.p-4
            p Un material se considera sostenible cuando procede de fuentes renovables, compartidas y cercanas, consume poca energía y no contamina en ningún momento de su ciclo de vida. Aún, si se tiene un porcentaje del material que se recicla, se puede decir que es sostenible, reciclable o biodegradable.
            p.mb-0 Desde el punto de vista económico, debe ser un material que se ajuste al modelo de desarrollo equilibrado y de asequibilidad. En el plano social, debe ser el resultado de la producción equitativa, el apoyo a los valores culturales de su entorno y la promoción del desarrollo comunitario. Algunas materias primas sostenibles son:
        .col-12.col-lg-4(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema5/t5-17.png', alt='')

    h3.bgr_4.p-3.mb-5 Materias Primas Sostenibles

    TabsA.color-acento-contenido.mb-5(data-aos="zoom-in")
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Bambú")
        .row.p-4
          .col-12.col-lg-8.mb-3.mg-lg-0
            h4 Bambú
            p.mb-0 El bambú o también conocido como acero vegetal, es un recurso sustitutivo de la madera en todas sus versiones. Es sostenible desde su cultivo, ya que mantiene los niveles hídricos de la tierra, evade la erosión y su crecimiento es tres veces más rápido que un árbol maderable convencional. Generalmente, se emplea como material estructural, para elaborar bioplásticos y fibras textiles.
          .col-12.col-lg-4.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/temas/tema5/t5-18.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Lana y Seda")
        .row.p-4
          .col-12.col-lg-8.mb-3.mg-lg-0
            h4 Lana y Seda
            p.mb-0 Los fundamentos de la sostenibilidad se pueden incorporar a productos textiles donde el origen y uso de las materias primas utilizadas sean 100% naturales y responsables, como por ejemplo, la lana o la seda que provienen de una producción respetuosa con el medio ambiente y los involucrados en el proceso de cosecha y producción, pueden beneficiarse de buenas condiciones de salud, seguridad y compensación económica. El proceso de fabricación puede tener menos impacto en el medio ambiente, porque se produce en pequeñas cantidades sucesivas. El producto final del ciclo de vida y la larga vida útil, serán materiales reciclables y, finalmente, materiales degradables.
          .col-12.col-lg-4.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/temas/tema5/t5-19.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Fibras vegetales")
        .row.p-4
          .col-12.col-lg-8.mb-3.mg-lg-0
            h4 Fibras vegetales
            p.mb-0 Aquellas fibras vegetales como el esparto, el mimbre, el abacá, el cáñamo, entre otros, son considerados materiales sostenibles. Si se han aplicado con barniz sintético o pegamentos ajenos ya no son considerados como materiales sostenibles.
          .col-12.col-lg-4.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/temas/tema5/t5-20.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Corcho")
        .row.p-4
          .col-12.col-lg-8.mb-3.mg-lg-0
            h4 Corcho
            p.mb-0 El alcornocal es un ecosistema cerrado, habitado y protegido por muchas especies diferentes de plantas y animales, que es resistente a la erosión, repone los niveles freáticos, produce oxígeno y reduce las emisiones de dióxido de carbono. El control y procesamiento exitoso del alcornoque proporciona un recurso constantemente renovable. Es un buen amortiguador, soporta el impacto sin deformarse, es aislante acústico y térmico, además, es un material ligero. El corcho proporciona una arquitectura climática de alto rendimiento.
          .col-12.col-lg-4.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/temas/tema5/t5-21.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Algas")
        .row.p-4
          .col-12.col-lg-8.mb-3.mg-lg-0
            h4 Algas
            p.mb-0 Desde el inicio y el fin del ciclo de vida del cultivo de las algas, es un material sostenible. Cuando el producto ya no se usa, el material se biodegrada sin dejar huella, ni residuo.
          .col-12.col-lg-4.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/temas/tema5/t5-22.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Residuos de Agricultura")
        .row.p-4
          .col-12.col-lg-8.mb-3.mg-lg-0
            h4 Residuos de Agricultura
            p.mb-0 Residuos como semillas, espigas o cáscaras se pueden utilizar para la elaboración de nuevos materiales sustitutos de plásticos, papeles o madera. Por ejemplo, hay paneles hechos del bagazo de la caña de azúcar y se elaboran estos revestimientos con texturas en 3D. Ahora, las empresas manufactureras recuperan sobrantes, desarrollando con ellos nuevas aplicaciones y materiales que disminuyan la explotación de otras materias primas.
          .col-12.col-lg-4.d-flex.align-items-center
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/temas/tema5/t5-23.png', alt='')

    separador

    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.5	Empaques y embalajes

    p.mb-5 Los envases y embalajes protegen las mercancías, facilitan su transporte y su diseño es fundamental para su comercialización. Se distinguen por:

    .row.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-down")
        .bgr_25.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.img100(src='@/assets/curso/temas/tema5/t5-24.svg', alt='')
          .row.justify-content-center
            .col-12.col-xl-8.text-center
              p.text-bold.bgr_6 1. Empaque
              p Es el que protege, sostiene y conserva la mercancía. Por ejemplo: cartones, botellas, paquetes, sobres, etc.
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-up")
        .bgr_26.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.img100(src='@/assets/curso/temas/tema5/t5-25.svg', alt='')
          .row.justify-content-center
            .col-12.col-xl-8.text-center
              p.text-bold.bgr_6 2. Embalaje secundario
              p Son los cartones de carga para almacenamiento o transporte que están fabricados con diferentes materiales de soporte.
      .col-12.col-lg-4(data-aos="flip-down")
        .bgr_25.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.img100(src='@/assets/curso/temas/tema5/t5-26.svg', alt='')
          .row.justify-content-center
            .col-12.col-xl-8.text-center
              p.text-bold.bgr_6 3. Embalaje terciario
              p Destinado a soportar grandes cantidades de embalaje secundario para que no se dañen durante el transporte o almacenamiento.

    p.mb-5 De igual manera, dentro de los tipos de embalajes más utilizados podemos encontrar:

    .bg_grad-04
      .row.mb-5.justify-content-center
        .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-down")
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema5/t5-27.png', alt='')
        .col-12.col-lg-3.d-flex.align-items-center(data-aos="fade-right")
          ul.fa-ul
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Bandeja.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Caja dispensadora de líquidos.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Caja envolvente.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Caja con tapa.
        .col-12.col-lg-3.d-flex.align-items-center(data-aos="fade-left")
          ul.fa-ul
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Caja de madera.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Caja de plástico.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Cartón ondulado.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Filmo plástico.
            li.mb-2
              i.fa-li.fas.fa-check-circle.colr
              span Saco de papel.

    h3.bgr_4.p-3.mb-5 <em>Packaging</em> sostenible

    .bg_grad-24
      .row.mb-5
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema5/t5-28.png', alt='')
        .col-12.col-lg-8.d-flex.align-items-center(data-aos="fade-left")
          div
            p El <em>packaging</em> sostenible o verde consiste en un embalaje más sostenible. Entre sus lineamientos están, reducir el uso de residuos peligrosos, promover el uso de materiales reciclados y reciclados para el transporte, reducir la cantidad de envases producidos y reducir los costos en este rubro. Se tienen en cuenta los siguientes aspectos:
            ul.fa-ul
              li
                i.fa-li.fas.fa-check-circle.colr_2
                p.mb-0 #[strong Cantidad:] emplear el menor número de empaques y embalajes, en lo posible, porque ayudan al planeta y a la empresa a economizar gastos.
              li
                i.fa-li.fas.fa-check-circle.colr_2
                p.mb-0 #[strong Materiales:] los materiales biodegradables son óptimos para los empaques y embalajes reciclables o reutilizables.
              li
                i.fa-li.fas.fa-check-circle.colr_2
                p.mb-0 #[strong Innovación] un ecodiseño del <em>packaging</em> hace la diferencia del producto y crea un valor agregado a este.

    h3.bgr_4.p-3.mb-5 <em>Tips</em> para un embalaje más sostenible

    p.mb-5 Los embalajes cumplen una función importante en la protección de los productos, para el transporte y entrega al comprador en excelente calidad. Los compradores son más conscientes del impacto que estos embalajes traen para el medio ambiente por eso las organizaciones cada vez buscan implementar materiales que respondan a las necesidades de reducir el impacto utilizando materias renovables o recicladas.

    .bg_grad-01
      .titulo-sexto.color-acento-contenido
        h5 Figura 14
        span 5 R para un embalaje más sostenible
      .row.justify-content-end.p-4
        .col-12.col-lg-5.mb-3.mb-lg-0(data-aos="flip-down")
          figure
            img(src='@/assets/curso/temas/tema5/t5-29.svg', alt='La gráfica presenta las 5 R para un embalaje sostenible: Reciclar, Reducir, Reutilizar, Renovar y Reemplazar. Estas acciones buscan promover prácticas ambientalmente responsables en el manejo de embalajes.')
        .col-12.col-lg-3.mb-3.mb-lg-0.d-flex.align-items-center(data-aos="flip-up")
          p.mb-0 En la actualidad las empresas están optando por un modelo circular que busca reducir el impacto sobre el medio ambiente y presenta las 5-R del embalaje que están dadas por un enfoque de reducir, reutilizar, reemplazar, renovar y reciclar.
        .col-12.col-lg-3.d-flex.align-items-end(data-aos="flip-down")
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/temas/tema5/t5-30.svg', alt='')
</template>

<script>
export default {
  name: 'Tema5',
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
