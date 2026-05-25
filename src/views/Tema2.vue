<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión técnica de habitaciones
    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(src="@/assets/curso/tema2/1.png", alt="" data-aos="zoom-in-up").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La gestión técnica de habitaciones comprende el conjunto de procedimientos, estándares y actividades orientadas a garantizar el adecuado funcionamiento, mantenimiento, presentación y disponibilidad de las habitaciones dentro de un establecimiento de alojamiento. Este proceso involucra la coordinación de recursos humanos, materiales y operativos necesarios para ofrecer espacios confortables, higiénicos y acordes con las expectativas del huésped y las políticas de calidad de la organización.

    .p-4.rounded-4.bg-secundario-s10
      p.mb-0 Asimismo, la gestión técnica permite optimizar la operación del área de alojamiento mediante la correcta clasificación de habitaciones, el control de su estado operativo, la verificación de la dotación y el cumplimiento de estándares técnicos de servicio.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Tipologías y características de las habitaciones

    p Las tipologías de habitaciones corresponden a la clasificación de los espacios de alojamiento según su capacidad, distribución, nivel de confort, servicios ofrecidos y segmento de mercado al que están dirigidos. Esta clasificación permite a los establecimientos hoteleros organizar su oferta de hospedaje de acuerdo con las necesidades y expectativas de los huéspedes, facilitando la gestión operativa, comercial y administrativa del servicio de alojamiento.
    p.mb-4.mb-lg-5 Clasificación de habitaciones por acomodación y servicio

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        SlyderF(columnas="col-xl-6").mb-4.mb-lg-5
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/3.svg' alt='')
            h4.text-center Sencilla (#[em Single])
            p.text-center.mb-0 Una cama individual; diseñada para una sola persona usuaria.
            p.text-center.mb-4 #[strong Estándares de servicio]: estándar operativo básico con todos los servicios de confort.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/4.svg' alt='')
            h4.text-center Doble (#[em double/twin])
            p.text-center.mb-0 Puede contar con una cama matrimonial o dos camas individuales.
            p.text-center.mb-4 #[strong Estándares de servicio]: configuración versátil para parejas o acompañantes.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/5.svg' alt='')
            h4.text-center Triple
            p.text-center.mb-0 Espacio diseñado para tres personas, usualmente con tres camas individuales o combinación.
            p.text-center.mb-4 #[strong Estándares de servicio]: requiere mayor dotación de lencería y suministros de aseo.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/6.svg' alt='')
            h4.text-center #[em Suite / junior suite]
            p.text-center.mb-0 Áreas diferenciadas (dormitorio y zona social o salón); mobiliario superior.
            p.text-center.mb-4 #[strong Estándares de servicio]: atención personalizada; amenidades de lujo y servicios VIP.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema2/7.svg' alt='')
            h4.text-center Habitación accesible
            p.text-center.mb-0 Diseñada bajo normas de accesibilidad universal; espacios amplios para giro de silla de ruedas.
            p.text-center.mb-4 #[strong Estándares de servicio]: equipamiento especializado en baños y sistemas de emergencia visual/sonoro.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Estados de la habitación (status)

    .row.g-0.rounded-4.bg-acento-contenido-a5.mb-5.justify-content-center
      .col-sm-6.col-lg-3.d-flex
        figure.m-0
          img(src="@/assets/curso/tema2/8.png", alt="alt text" data-aos="zoom-in-down")
      .col-lg-9.p-4.p-xl-0
        .d-flex.align-items-center.h-100
          p.px-lg-4.mb-0 Los estados de la habitación corresponden a la clasificación operativa utilizada en los establecimientos de alojamiento para identificar la condición física, funcional y de ocupación de cada habitación en un momento determinado. Este sistema de control permite mantener una comunicación eficiente entre las áreas de alojamiento, recepción, mantenimiento y reservas, facilitando la coordinación de actividades relacionadas con limpieza, disponibilidad, mantenimiento y asignación de habitaciones.

    SlyderF(columnas="col-sm-6 col-lg-6 col-xl-4")
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        h4.text-center Disponible (limpia)
        p.text-center.mb-0 Habitación que ha pasado por el proceso de limpieza y supervisión, lista para ser rentada.
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        h4.text-center Ocupada
        p.text-center.mb-0 Habitación donde se encuentra alojada una persona usuaria y sus pertenencias.
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        h4.text-center Sucia (salida/#[em check-out])
        p.text-center.mb-0 Habitación donde se encuentra alojada una persona usuaria y sus pertenencias.
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        h4.text-center En mantenimiento (bloqueada)
        p.text-center.mb-0 Unidad que presenta averías técnicas y no puede ser comercializada hasta su reparación.
      .tarjeta.bg-img.bg-img--3.p-4.py-5
        h4.text-center En repaso
        p.text-center.mb-0 Habitación limpia que requiere una verificación rápida tras un periodo de inactividad.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Dotación y estándares de servicio según tipo

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La dotación y los estándares de servicio según el tipo de habitación constituyen elementos fundamentales para garantizar la calidad, funcionalidad y confort en la prestación del servicio de alojamiento. Cada categoría de habitación requiere una dotación específica de mobiliario, lencería, amenidades, equipos y suministros, definidos de acuerdo con las características del establecimiento, el nivel de servicio ofrecido y las necesidades del huésped.
        .p-4.rounded-4.bg-secundario-s5
          p.mb-0 Asimismo, los estándares de servicio permiten establecer criterios técnicos relacionados con la presentación, limpieza, organización y acondicionamiento de las habitaciones, asegurando uniformidad y cumplimiento de las políticas de calidad institucional.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema2/10.svg' alt='')
          h5.text-center Lencería de cama
          p.text-center.mb-4 Incluye protectores de colchón, sábanas, fundas, mantas, colchas o edredones, siguiendo los estándares de hilaje definidos por el establecimiento.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema2/11.svg' alt='')
          h5.text-center Lencería de baño
          p.text-center.mb-4 Toallas de cuerpo, manos, faciales y tapetes de salida de ducha, garantizando suavidad e higiene absoluta.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema2/12.svg' alt='')
          h5.text-center Suministros (#[em amenities])
          p.text-center.mb-4 Elementos de aseo personal como jabón, champú, acondicionador y complementos (kit de costura, gorros de ducha).
      .col-sm-6.col-lg-5.col-xl-3
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema1/35.svg' alt='')
          h5.text-center Papelería y conectividad
          p.text-center.mb-4 Directorio de servicios, información de emergencia, material para notas y accesos a redes de comunicación.










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
