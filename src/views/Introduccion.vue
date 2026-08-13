<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
        p.mb-4(data-aos="fade-right") En los procesos industriales es necesario conocer el comportamiento de diferentes variables para realizar seguimiento, verificar condiciones de operación y favorecer el control de los procesos. La medición permite obtener información sobre estas variables y constituye un elemento fundamental de la instrumentación industrial.
        .container
          .row.align-items-center.bg-color-0.p-4.mb-0.br-15
            .col-lg-auto.d-none.d-lg-block.order-2
              img(src="@/assets/curso/intro/img02.svg", style="max-width: 90px").mx-auto
            .col-lg.order-1
              p.mb-0 En este componente formativo se abordan los fundamentos de la medición, los instrumentos, los sensores y los transductores, así como las variables y señales que intervienen en los sistemas de adquisición. También se estudian conceptos relacionados con señales análogas y digitales, niveles lógicos, representación binaria y conversión análogo-digital.

    p.mb-0(data-aos="fade-right") El desarrollo de estos contenidos permite establecer la relación entre una variable física, su captación mediante sensores, la generación y adquisición de señales y su utilización en sistemas electrónicos básicos de control. De esta manera, se favorece la comprensión de situaciones presentes en diferentes procesos industriales.

</template>

<script>
export default {
  name: 'Introduccion',
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
