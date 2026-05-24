<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img(src="@/assets/curso/sintesis.png", alt="")
      .col-lg-9
        p El componente formativo Coordinar servicios de alojamiento de acuerdo a procedimientos técnicos y técnicas de planeación orienta a los aprendices al desarrollo de competencias relacionadas con la organización, supervisión y control de las actividades operativas del área de habitaciones dentro de establecimientos de alojamiento, mediante la aplicación de procedimientos técnicos, estándares de calidad y lineamientos normativos propios del sector hotelero y turístico.
        p Durante el proceso formativo se abordan temas relacionados con la estructura y funcionamiento del área de habitaciones, la gestión técnica de habitaciones, los procedimientos de higiene, limpieza y alistamiento, las técnicas de tendido y arreglo de cama, y los estándares internacionales aplicados al servicio de alojamiento.
        p.mb-0 Asimismo, el componente integra contenidos asociados al marco normativo aplicable al área de alojamiento, incluyendo sostenibilidad, seguridad y salud en el trabajo y gestión ambiental, fortaleciendo prácticas responsables y seguras dentro de la operación hotelera. Finalmente, se promueve el desarrollo de habilidades para la planeación, supervisión y control de las actividades operativas del servicio de alojamiento, contribuyendo al mejoramiento de la calidad del servicio y la satisfacción del huésped.

    .row.justify-content-center
      .col-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="El componente formativo desarrolla contenidos relacionados con la organización y funcionamiento del área de habitaciones, incluyendo niveles operativos, supervisión, control y calidad del servicio. Asimismo, aborda la gestión técnica de habitaciones, estándares de dotación y estados operacionales (status). De igual manera, integra procedimientos técnicos de limpieza, desinfección, bioseguridad y tendido de camas, junto con referentes internacionales aplicados al área de alojamiento. Finalmente, incorpora aspectos normativos relacionados con sostenibilidad, SST y gestión ambiental, fortaleciendo competencias para la coordinación eficiente de los servicios de alojamiento en el sector hotelero y turístico.")
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
