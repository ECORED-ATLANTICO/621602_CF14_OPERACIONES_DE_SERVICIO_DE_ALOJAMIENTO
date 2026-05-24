<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/intro.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 En el ecosistema organizacional de un establecimiento de alojamiento, determinar la jerarquía de importancia entre sus dependencias resulta complejo, dado que la calidad del servicio integral depende de la sinergia y articulación de todos los procesos. No obstante, el departamento de ama de llaves (o #[em Housekeeping]) ejerce una influencia determinante en la percepción de las personas usuarias y en la reputación de la marca.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro-img.png", alt="")
      .col-lg-9
        .p-4.bg-secundario-s5.rounded-4.mb-3
          p.mb-0 Históricamente, la gestión de este departamento ha sido subestimada en diversos establecimientos, limitándose a una labor operativa de limpieza sin una estructura sistémica. La ausencia de procedimientos técnicos, evidenciada en la falta de inventarios, asignaciones de áreas inadecuadas y carencia de estándares de inspección de lencería y suministros, se traduce directamente en quejas recurrentes, pérdidas económicas y un servicio deficiente.
        p El presente componente formativo aborda los sistemas de gestión fundamentales para optimizar la operación del departamento de ama de llaves. El objetivo es garantizar la prestación de un servicio de excelencia, fundamentado en la eficiencia de costos y el cumplimiento de los procedimientos técnicos de planeación y estándares de calidad vigentes.
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
