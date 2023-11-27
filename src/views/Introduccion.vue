<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .bg-full.bg-purple-ligth(style="margin-top: 100px")
      .row.justify-content-center
        .col-xl-4.col-lg-12
          figure.position-relative
            img(src="@/assets/curso/temas/intro/img1.svg", style="max-width: 352px; margin-top: -50px", alt="").mx-auto
        .col-xl-8
          .pt-4.pb-2
            p Bienvenidos al componente formativo #[strong.txt-color-acento-contenido "Ciclo de vida en los procesos de la organización y Economía Circular"]. A continuación, se explorará cómo la inteligencia y la tecnología han permitido a la humanidad adaptarse y beneficiarse de la naturaleza, aunque no siempre de manera sostenible. El enfoque estará en entender y promover una relación más equilibrada entre el ser humano y el medio ambiente. Se abordaran conceptos clave como la bioeconomía, la economía circular y modelos económicos sostenibles, poniendo un énfasis especial en el contexto colombiano.
            p Como punto de partida, los invitamos a ver el siguiente video de bienvenida y a familiarizarse con este componente formativo.

    figure(data-aos="zoom-in").mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/mlDzuYiUlcY?si=GQKSeV1e89EcpBN6" title="Ciclo de vida en los procesos de la organización y Economía Circular" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Ciclo de vida en los procesos de la organización y Economía Circular

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
