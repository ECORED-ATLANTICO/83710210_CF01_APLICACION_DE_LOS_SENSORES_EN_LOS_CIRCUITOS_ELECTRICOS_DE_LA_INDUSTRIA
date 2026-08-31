<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/intro/img03.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-1 La siguiente estructura permite visualizar la relación jerárquica entre los principales conceptos desarrollados en el componente formativo Sensores, medición y adquisición. A partir de una variable física, se establece un proceso que integra la medición, la captación, la generación y adquisición de señales y su posterior procesamiento.
        p.mb-3 Esta organización facilita la comprensión de cómo los diferentes elementos estudiados se articulan dentro de un proceso industrial, desde la identificación de una variable hasta su utilización en sistemas electrónicos básicos de control.
      
        .bg-color-02.p-3.br-15.mb-0
         p.mb-0 La estructura permite reconocer que la medición, los sensores, los transductores y las señales no constituyen conceptos aislados, sino elementos relacionados que contribuyen a la obtención y utilización de información para apoyar el funcionamiento y control de los procesos.

    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="Diagrama jerárquico que representa la relación entre los principales conceptos del componente formativo Sensores, medición y adquisición. En la parte superior se ubica el proceso industrial, del cual se deriva la variable física. Esta conduce a la medición, relacionada con rango, exactitud y resolución. Posteriormente se presenta la captación, mediante sensores y transductores, que genera una señal análoga o digital. La información pasa a la adquisición, donde se realiza la conversión y el procesamiento, para finalmente llegar al sistema electrónico y al control, que comprende comparación, lógica y acción.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
