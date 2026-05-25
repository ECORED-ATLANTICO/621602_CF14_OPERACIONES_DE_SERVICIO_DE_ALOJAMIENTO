<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Procedimientos técnicos: higiene, alistamiento y rutinas de limpieza

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(src="@/assets/curso/tema3/1.png", alt="" data-aos="zoom-in-up").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La ejecución de los procedimientos técnicos garantiza la inocuidad de los espacios y la satisfacción de la persona usuaria. Estos procesos se dividen según su profundidad, frecuencia y técnica aplicada.

      .row.justify-content-center.align-items-center.z-2
        .col-lg-8
          .p-4.rounded-4.bg-secundario-s5.mb-4.mb-lg-0
            p.mb-0 Asimismo, la aplicación de técnicas de limpieza y alistamiento contribuye a preservar la salud de los usuarios y trabajadores, optimizar el uso de recursos y mantener ambientes higiénicos y funcionales. La correcta ejecución de las rutinas operativas fortalece la productividad del área de alojamiento, facilita el control de procesos y promueve el cumplimiento de protocolos de bioseguridad, sostenibilidad y servicio establecidos por la organización y la normatividad vigente.
        .col-sm-8.col-lg-4
          figure
            img(data-aos="fade-down-right", src="@/assets/curso/tema3/2.png", alt="")
      
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Limpieza y desinfección: protocolos de bioseguridad

    .p-4.rounded-4.bg-secundario-s5.mb-5
      p.mb-0.text-center Es fundamental diferenciar entre limpiar (eliminar suciedad visible) y desinfectar (eliminar microorganismos no visibles).
      
    .row.justify-content-center
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/common/newspaper.png", class="img-fluid cita-decorada__imagen-flotante-4 cita-decorada__imagen-flotante-4--bigger")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start #[strong Anexo]. Limpieza y desinfección: protocolos de bioseguridad.
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/1_Limpieza_y_desinfeccion.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Técnica de arreglo de cama (tendido de camas)
      
    p.mb-4.mb-lg-5 El tendido de cama es la "carta de presentación" de la habitación. Un estándar profesional sigue estos pasos técnicos: 

    .row.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema3/3.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .ps-1.py-4.pe-4
              h5 Desvestido de la unidad
              p.mb-0 Retirar la lencería sucia con cuidado, evitando sacudirla para no dispersar partículas en el aire.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema3/4.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .ps-1.py-4.pe-4
              h5 Revisión del protector
              p.mb-0 Verificar la limpieza y ajuste del protector de colchón.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema3/5.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .ps-1.py-4.pe-4
              h5 Colocación de sábanas
              p.mb-0 Aplicar la técnica de "mitra" o "ángulo de 45 grados" en las esquinas para un ajuste firme y estético.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema3/23.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .ps-1.py-4.pe-4
              h5 Montaje final
              p.mb-0 Colocación de sábana encimera, manta o edredón, y disposición de almohadas con sus fundas perfectamente alineadas.
        
    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Clasificación de las rutinas de aseo

    .row.g-0.rounded-4.bg-acento-contenido-a5.mb-5.justify-content-center
      .col-sm-6.col-lg-3.d-flex
        figure.m-0
          img(src="@/assets/curso/tema3/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-9.p-4.p-xl-0
        .d-flex.flex-column.justify-content-center.h-100
          p.px-lg-3 La clasificación de las rutinas de aseo permite organizar y estandarizar las actividades de limpieza y mantenimiento desarrolladas en habitaciones y áreas comunes dentro de un establecimiento de alojamiento. Estas rutinas se establecen de acuerdo con la frecuencia, el nivel de intervención y las necesidades operativas del servicio, facilitando la planificación de tareas, la asignación de recursos y el control de los procesos de higiene y presentación.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 1.
      span Clasificación de los recursos turísticos
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2024).
        thead
          tr(style="background-color: #F0F6F9")
            th Categoría
            th(colspan="2") Subcategoría
            th Elementos
        tbody
          tr
            td Aseo diario (rutina).
            td(colspan="2") Limpieza superficial, ventilación, arreglo de cama y reposición de amenities en habitaciones ocupadas o disponibles.
            td Diaria.
          tr
            td Aseo general (salida).
            td(colspan="2") Limpieza profunda tras el check-out; incluye desinfección integral del baño y cambio total de lencería.
            td Según ocupación.
          tr
            td Aseo a fondo (#[em deep cleaning]).
            td(colspan="2") Limpieza detallada que incluye movimiento de mobiliario pesado, lavado de cortinas y limpieza de techos.
            td Semanal / Quincenal.
          tr
            td Aseo detallado (mantenimiento).
            td(colspan="2") Intervención en puntos específicos: limpieza de rieles de ventanas, pulido de metales y tratamiento de pisos.
            td Mensual.

    .p-4.bg-secundario-s10.rounded-4
      p.mb-0 El alistamiento de la unidad de descanso es un proceso técnico que presenta variaciones significativas según la ubicación geográfica, el clima y los estándares corporativos del establecimiento de alojamiento. Comprender estas diferencias permite al personal de alojamiento estandarizar la calidad y adaptarse a las expectativas de diversas personas usuarias internacionales.

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Contextualización técnica: el estándar europeo y español

    p.mb-4.mb-lg-5 Los estándares europeos y españoles aplicados al área de alojamiento constituyen referentes técnicos reconocidos en la organización, limpieza, presentación y control de calidad de habitaciones y zonas comunes dentro de la industria hotelera. Estos modelos se caracterizan por la implementación de procedimientos estandarizados, técnicas especializadas de alistamiento y criterios rigurosos de higiene, orientados a garantizar altos niveles de confort, eficiencia operativa y satisfacción del huésped.

    .row.justify-content-center.align-items-center
      .col-sm-11.col-lg-6
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-6
        SlyderA(tipo="b").bg-acento-botones-a5.p-4.tarjeta.h-100
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Soportes de descanso
              p.mb-0 El proceso inicia con la verificación y disposición del somier (soporte) y el cubre-somier, asegurando una base firme para el colchón.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Protección del colchón
              p.mb-0 Se utiliza una funda protectora o muletón para preservar la integridad del colchón y mejorar la suavidad del contacto.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Técnica de tensión
              p.mb-0 El muletón debe extenderse eliminando cualquier pliegue o arruga, garantizando que el textil quede completamente tirante.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Ajuste perimetral
              p.mb-0 En piezas de tamaño completo, el textil se remete bajo el colchón, prestando especial atención a que las esquinas queden técnicamente definidas.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 AVariaciones de protección
              p.mb-0 En casos donde se utiliza un muletón parcial (un tercio de la cama), este se asegura lateralmente manteniendo la misma exigencia de tensión y ausencia de arrugas.

    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Procedimiento técnico para el alistamiento de la base
      
    p.mb-4.mb-lg-5 El procedimiento técnico para el alistamiento de la base corresponde al conjunto de actividades realizadas para preparar adecuadamente la estructura de la cama antes de efectuar el tendido y acondicionamiento de la habitación. Este proceso incluye la verificación de limpieza, estabilidad, estado físico y correcta disposición de los elementos que conforman la base de descanso, garantizando condiciones óptimas de higiene, presentación y confort para el huésped.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 2.
      span Pasos críticos en la preparación del colchón y protección
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. SENA, (2024).
        thead
          tr(style="background-color: #F0F6F9")
            th(style="width: 200px") Categoría
            th(colspan="2") Subcategoría
            th(colspan="2") Elementos
        tbody
          tr
            td(style="width: 200px") Acondicionamiento.
            td(colspan="2") Disposición de somier y protector de base.
            td(colspan="2") Alineación perfecta con la estructura de la cama.
          tr
            td(style="width: 200px") Protección.
            td(colspan="2") Colocación del muletón o funda de colchón.
            td(colspan="2") Superficie lisa, sin presencia de partículas o humedad.
          tr
            td(style="width: 200px") Fijación.
            td(colspan="2") Remetido y ajuste de esquinas.
            td(colspan="2") Textil tirante; esquinas con ángulo técnico para evitar desplazamientos.

    .row.justify-content-center.align-items-center
      .col-xl-10
        .p-4.bg-secundario-s5.rounded-4.mb-5
          p.mb-0.text-center Procedimiento para la preparación del colchón

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        PasosA.color-amarillo(tipo="n")
          .row.align-items-center.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h3 Ubicación y alineación de la sábana.
              p Extienda la sábana sobre el colchón, verificando que quede centrada y con el mismo espacio en cada lado.
            .col-6.col-md-3
              figure
                img(src='@/assets/curso/tema3/8.png', alt='')
          .row.align-items-center.justify-content-center
            .col-6.col-md-3.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/9.png', alt='')
            .col-md-9
              h3.text-start Ajuste de las esquinas.
              p.text-start Tome uno de los extremos de la sábana y doble cuidadosamente la tela en la esquina para formar un ajuste limpio y uniforme.
          .row.align-items-center.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h3 Tensado y fijación.
              p Estire la sábana suavemente hacia abajo y asegure los laterales, evitando arrugas o pliegues para lograr una superficie lisa.
            .col-6.col-md-3
              figure
                img(src='@/assets/curso/tema3/10.png', alt='')
          .row.align-items-center.justify-content-center
            .col-6.col-md-3.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema3/11.png', alt='')
            .col-md-9
              h3.text-start Acabado final.
              p.text-start Revise que todas las esquinas queden bien sujetas y que la sábana cubra el colchón de manera uniforme y ordenada.

    p.mb-4.mb-lg-5 Una vez preparada la base y el muletón, se procede con la disposición de las capas superiores. Este proceso requiere precisión en el centrado y la tensión para garantizar la estética y el confort térmico de la unidad de alojamiento.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Colocación de la colcha de día

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/12.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Este elemento cumple funciones estéticas, de protección y presentación, contribuyendo a mantener la lencería en condiciones adecuadas de higiene y a proyectar una imagen organizada y confortable de la habitación. Su correcta instalación debe realizarse siguiendo criterios de simetría, tensión, alineación y presentación establecidos por los estándares del establecimiento de hospedaje.
        p.mb-0 Una vez que la cama está hecha, se procede a colocar la colcha de día. Esta debe extenderse sobre el colchón, asegurando que la tela cubra completamente el somier y el protector de base. La colcha debe estar centrada y ajustada de manera uniforme, sin pliegues ni arrugas, para garantizar un aspecto limpio y profesional.

    SlyderF(columnas="col-lg-6 col-xl-4 mb-5")
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/13.svg' alt='')
        p.text-center La colcha se coloca empezando por los pies de la cama, asegurándose de encajar correctamente las esquinas.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/14.svg' alt='')
        p.text-center Luego se estira cuidadosamente hacia la cabecera, procurando que quede lisa y bien alineada.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/15.svg' alt='')
        p.text-center En la parte superior, del lado de la cabecera, se deja una sección de la colcha doblada, formando un embozo.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/16.svg' alt='')
        p.text-center Este embozo será el espacio donde se colocará la almohada.
      .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
        .row.justify-content-center.mb-3
          .col-6
            img.w-90.mb-4(src='@/assets/curso/tema3/17.svg' alt='')
        p.text-center Finalmente, se coloca la almohada sobre esta parte doblada y se vuelve la colcha junto con el embozo, de manera que la almohada quede cubierta por la colcha de día.
    
    .row.justify-content-center.align-items-center
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/18.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Acomodar en los pies")
            .col-auto
              p.mb-0 Encaja las esquinas en los pies de la cama.
          .row(numero="2" titulo="Estirar hacia la cabecera")
            .col-auto
              p.mb-0 Estira la colcha hacia arriba.
          .row(numero="3" titulo="Embozar en la cabecera")
            .col-auto
              p.mb-0 Dobla una sección en la parte superior.
          .row(numero="4" titulo="Colocar la almohada")
            .col-auto
              p.mb-0 Coloca la almohada sobre el embozo.
          .row(numero="5" titulo="Cubrir la almohada")
            .col-auto
              p.mb-0 Vuelve a colocar la colcha sobre la almohada.

    separador

    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Variaciones internacionales en las técnicas de tendido
      
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/19.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Las técnicas de tendido de camas varían según la región, el clima y los materiales disponibles, influyendo en la comodidad y percepción de calidad del servicio de alojamiento. Conocer estas diferencias permite al personal de camarería adaptarse a las necesidades de una demanda turística diversa y mantener estándares de calidad.
        p.mb-0 Por otro lado, el estándar alemán y nórdico.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t5").mb-5
      .row.justify-content-center.align-items-center.z-2(titulo="Estándar Frances")
        .col-sm-10.col-lg-7.mb-4.mb-lg-0
          p El estándar francés se enfoca en la suavidad y el confort, utilizando plumones sobre el colchón y sábanas bajeras largas que permiten envolver almohadas cilíndricas sin necesidad de fundas adicionales.
          p.mb-1 Las características son:
          ul.checklist
            li.d-flex.ms-3
              p.mb-0 Almohada cilíndrica envuelta en sábana bajera extendida.
            li.d-flex.ms-3
              p.mb-0 Plumón suelto de plumas sobre el colchón.
            li.d-flex.ms-3
              p.mb-0 Colchón mullido y suave.
        .col-sm-6.col-lg-3
          figure
            img(src='@/assets/curso/tema3/20.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Estándar ingles")
        .col-sm-10.col-lg-7.mb-4.mb-lg-0
          p El estándar inglés, más complejo y voluminoso, incorpora varias capas como manta, edredón y cojines decorativos, además de una colcha de día que aporta una apariencia robusta.
          p.mb-1 Las características son:
          ul.checklist
            li.d-flex.ms-3
              p.mb-0 Cuadrante decorativo sobre la almohada.
            li.d-flex.ms-3
              p.mb-0 Edredón de plumas sobre manta y sábana encimera.
            li.d-flex.ms-3
              p.mb-0 Almohada cilíndrica envuelta en sábana bajera extendida.
        .col-sm-6.col-lg-3
          figure
            img(src='@/assets/curso/tema3/21.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Estándar alemán / nórdico")
        .col-sm-10.col-lg-7.mb-4.mb-lg-0
          p Prioriza la firmeza y la funcionalidad del mobiliario. Emplea colchones segmentados ajustados en bastidores de madera y materiales más densos como lana o crin, garantizando estabilidad, durabilidad y resistencia en el tendido.
          .mb-1 Las características son:
          ul.checklist
            li.d-flex.ms-3
              p.mb-0 Colchón segmentado en bastidor de madera.
            li.d-flex.ms-3
              p.mb-0 Almohada tradicional de pluma o rellenos firmes.
            li.d-flex.ms-3
              p.mb-0 Crin de caballo o lana prensada.
            li.d-flex.ms-3
              p.mb-0 Ajuste sobre colchón segmentado y bastidor.
        .col-sm-6.col-lg-3
          figure
            img(src='@/assets/curso/tema3/22.png', alt='')

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 3.
      span Comparativa técnica de estándares internacionales de tendido
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-4
      table
        caption Nota. SENA, (2026).
        thead
          tr(style="background-color: #F0F6F9")
            th Estándar
            th Forma de la almohada
            th Materiales predominantes
            th Técnica de sábana bajera
        tbody
          tr
            td Francés.
            td Cilíndrica (redonda).
            td Plumas y plumón suave.
            td Longitud extra para envolver la almohada.
          tr
            td Inglés.
            td Cilíndrica + cuadrante.
            td Edredones de gran volumen.
            td Envuelta en cabecera con capas de abrigo.
          tr
            td Alemán / Nórdico.
            td Tradicional / firme.
            td Crin de caballo o lana prensada.
            td Ajuste sobre colchón segmentado y bastidor.







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
