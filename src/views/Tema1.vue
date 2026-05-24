<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Area de habitaciones

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(src="@/assets/curso/tema1/1.png", alt="" data-aos="zoom-in-up").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La eficiencia operativa en la coordinación de servicios de alojamiento reside en la solidez de su estructura organizacional y la claridad en sus flujos de comunicación. Según la norma técnica y las tendencias de gestión actuales, el departamento de pisos no solo garantiza la limpieza, sino que es el custodio de los activos y la experiencia de la persona usuaria.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-11.col-lg-6
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-6
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          p.mb-0 La configuración del departamento sigue una estructura piramidal que asegura la supervisión y el control de calidad. La autoridad fluye desde la ama de llaves ejecutiva hacia los niveles operativos. Esta jerarquía no debe entenderse como una división rígida, sino como una cadena de responsabilidades donde la comunicación asertiva es el eje transversal.
      
    .row.justify-content-center.align-items-center.z-2.mb-5.bg-secundario-s5.pt-3.rounded-4
      .col-lg-10.col-xl-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Jerarquía del departamento de pisos
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/3-mob.png", alt="La figura muestra la estructura organizacional del departamento de pisos, conformada por el nivel directivo, nivel de supervisión y nivel operativo.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/3.png", alt="La figura muestra la estructura organizacional del departamento de pisos, conformada por el nivel directivo, nivel de supervisión y nivel operativo.")
        figcaption  Nota. SENA, (2024).

    .p-4.bg-acento-botones-a5.rounded-4.mb-4.mb-lg-5
      p.mb-0.text-center Para evitar reprocesos, la comunicación debe ser multidireccional:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/4.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-center Comunicación descendente
            p.mb-0.text-center Instrucciones técnicas, cambios en protocolos de bioseguridad y asignación de turnos.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/5.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-center Comunicación ascendente
            p.mb-0.text-center Reporte de averías, novedades en el inventario o requerimientos especiales de las personas usuarias.
    
      .col-xl-4.col-lg-6.col-md-9.col-11
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/6.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-center Comunicación horizontal
            p.mb-0.text-center Coordinación directa con el departamento de recepción para la gestión de estados de habitación (limpia, sucia, en mantenimiento) y con mantenimiento para reparaciones preventivas y correctivas.

    .p-4.bg-secundario-s5.rounded-4
      p.mb-0 De acuerdo con la estructura organizacional del departamento de pisos, las responsabilidades se distribuyen en tres niveles de mando que aseguran la trazabilidad del servicio y el cumplimiento de los procedimientos técnicos (García & López, 2023).

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Nivel directivo y de apoyo administrativo

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El nivel directivo y de apoyo administrativo en el área de alojamiento desempeña un papel fundamental en la planeación, organización y control de las operaciones relacionadas con el servicio de habitaciones y zonas comunes dentro de un establecimiento de hospedaje. Este nivel se encarga de establecer lineamientos estratégicos, coordinar recursos y garantizar que los procesos operativos se desarrollen de acuerdo con los estándares de calidad, sostenibilidad y satisfacción del huésped definidos por la organización. 
        .p-4.bg-acento-contenido-a5.rounded-4
          p.mb-0 Su gestión permite fortalecer la eficiencia operativa, optimizar recursos y asegurar la adecuada prestación del servicio de alojamiento conforme a los procedimientos técnicos y las políticas institucionales.

    .row.align-items-stretch
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden
          figure
            img(src="@/assets/curso/tema1/8.png", alt="", data-aos="fade-down-right")
          .p-4.bg-secundario-s5.h-100
            h5 Ama de llaves (dirección)
            p.mb-0 Responsable de liderar el departamento, gestionar presupuestos, definir estándares de calidad y coordinar con la gerencia general el cumplimiento de la promesa de valor hacia la persona usuaria.
      
      .col-lg-6
        .rounded-4.h-100.overflow-hidden
          figure
            img(src="@/assets/curso/tema1/9.png", alt="", data-aos="fade-down-left")
          .p-4.bg-secundario-s5
            h5 Asistencia de ama de llaves
            p.mb-0 Ejerce como el enlace técnico-administrativo. Su función principal es apoyar en la programación de turnos, control de inventarios de lencería y suministros, y asegurar que el flujo de comunicación entre la dirección y los mandos medios sea eficiente.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Nivel de supervisión (mandos medios)

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p Constituye el enlace entre el nivel directivo y el personal operativo del área de alojamiento, garantizando que las actividades programadas se ejecuten de manera eficiente, organizada y conforme a los estándares establecidos por el establecimiento de hospedaje. Este nivel tiene la responsabilidad de coordinar, orientar y verificar el cumplimiento de los procedimientos técnicos relacionados con el arreglo de habitaciones, limpieza, alistamiento y atención de requerimientos del huésped.
        .p-4.rounded-4.bg-acento-contenido-a5.mb-3
          p.mb-0 Su labor contribuye al fortalecimiento de la comunicación interna, la solución oportuna de novedades operativas y la mejora continua de los procesos asociados al servicio de alojamiento.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/10.png", alt="")

    TabsB.color-primario
      .py-4.py-md-5(titulo="Supervisión de ama de llaves" :icono="require('@/assets/curso/tema1/11.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Supervisión de ama de llaves
            p.mb-0 Responsable de inspeccionar el alistamiento de las habitaciones, verificar el cumplimiento de los protocolos de limpieza y asegurar que las camarerías cuenten con los insumos necesarios para su labor.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/14.png', alt='')
      .py-4.py-md-5(titulo="Jefatura de lavandería" :icono="require('@/assets/curso/tema1/12.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Jefatura de lavandería
            p.mb-0 Encargada de coordinar el proceso de lavado, planchado y mantenimiento de la lencería del hotel y la mantelería. Debe garantizar la disponibilidad constante de blancos en condiciones óptimas de higiene.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/15.png', alt='')
      .py-4.py-md-5(titulo="Supervisión de áreas públicas" :icono="require('@/assets/curso/tema1/13.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Supervisión de áreas públicas
            p.mb-0 Coordina y verifica la limpieza y desinfección de las zonas sociales, (lobby, pasillos), asegurando que los estándares estéticos se mantengan para todos los que transitan por el establecimiento.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/16.png', alt='')

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Nivel operativo

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p Está conformado por el personal encargado de ejecutar directamente las actividades relacionadas con la limpieza, preparación, mantenimiento básico y alistamiento de habitaciones y zonas comunes, siguiendo los procedimientos técnicos y estándares de calidad establecidos por el establecimiento de hospedaje. Este nivel representa el contacto más cercano con la operación diaria del servicio, siendo fundamental para garantizar la comodidad, higiene, presentación y satisfacción del huésped.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/17.png", alt="")
    
    .row.mb-4.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/18.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Personal de camarería
              p.mb-0 Ejecutan la limpieza, desinfección y dotación de las habitaciones asignadas, siguiendo las técnicas ergonómicas y las normas de seguridad química vigentes.
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/19.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Operación de lavandería
              p.mb-0 Personal encargado de operar la maquinaria industrial y ejecutar los procesos de clasificación, lavado y secado de los textiles del hotel.
      .col-sm-8.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/20.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Auxiliares de áreas públicas
              p.mb-0 Responsables del mantenimiento preventivo y la higiene de los espacios comunes y de servicio, garantizando ambientes seguros y acogedores.

    .row.justify-content-center.align-items-center.z-2.mb-5.bg-secundario-s5.py-4.rounded-4
      .col-lg-8.col-xl-6
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Estructura organizacional del área de habitaciones
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/21-mob.svg", alt="En la figura se presenta la estructura organizacional del área de habitaciones, en cada uno de sus niveles.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/21.svg", alt="En la figura se presenta la estructura organizacional del área de habitaciones, en cada uno de sus niveles.")
        figcaption  Nota. SENA, (2024).

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.order-1.order-lg-0
        figure
          img(src="@/assets/curso/tema1/22.png", alt="" data-aos="zoom-in-down")
      .col-lg-8.order-0.order-lg-1.mb-4.mb-lg-0
        p El ama de llaves es el talento humano designado por la dirección para liderar el departamento de pisos. Su gestión es transversal a la operación del hotel, pues garantiza la calidad estética y de higiene en las habitaciones, la conservación de los activos (mobiliario) y la eficiencia en el uso de los recursos del establecimiento.
        .p-4.rounded-4.bg-secundario-s5.mb-3
          p.mb-0 De acuerdo con las tendencias actuales en hospitalidad, este rol requiere una visión sistémica de la operación, donde la economía de lencería y el control de suministros impactan directamente en la rentabilidad (García & López, 2023). Asimismo, es la persona responsable de brindar la atención protocolaria necesaria ante situaciones de salud o requerimientos especiales de las personas usuarias.
        p La gestión del ama de llaves se divide en procesos de organización, supervisión y coordinación interdepartamental.
        p.mb-0 Matriz de misiones y funciones del ama de llaves

    TabsB.color-primario
      .py-4.py-md-5(titulo="Talento humano" :icono="require('@/assets/curso/tema1/23.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Talento humano
            p.mb-0 Organización y distribución equitativa de cargas laborales; programación de turnos, días de descanso y periodos vacacionales del personal a cargo.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/27.png', alt='')
      .py-4.py-md-5(titulo="Control de calidad" :icono="require('@/assets/curso/tema1/24.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Control de calidad
            p.mb-0 Supervisión técnica y minuciosa de habitaciones; reporte y seguimiento de averías en las áreas de pisos; gestión de bloqueos y cambios de habitación por razones técnicas o de servicio.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/28.png', alt='')
      .py-4.py-md-5(titulo="Coordinación" :icono="require('@/assets/curso/tema1/25.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Coordinación
            p.mb-0 Comunicación constante con el departamento de Recepción para la actualización de estados de habitación y atención de solicitudes.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/29.png', alt='')
      .py-4.py-md-5(titulo="Ambientación" :icono="require('@/assets/curso/tema1/26.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Ambientación
            p.mb-0 Supervisión de la decoración y estética en habitaciones, recepción y áreas comunes para mantener la identidad visual del hotel.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/30.png', alt='')

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Gestión de controles y auditoría operativa

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(src="@/assets/curso/tema1/31.png", alt="" data-aos="zoom-in-up").z-2
      
    .row.justify-content-center.z-2.mb-3
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Para asegurar la transparencia y la eficiencia, el ama de llaves debe ejecutar controles periódicos sobre los recursos y activos del departamento. La gestión de controles y la auditoría operativa en el área de alojamiento permiten verificar el cumplimiento de los procedimientos técnicos, estándares de calidad y lineamientos organizacionales establecidos para la prestación del servicio. Estos procesos facilitan el seguimiento permanente de las actividades desarrolladas en habitaciones y zonas comunes, contribuyendo a identificar oportunidades de mejora, prevenir fallas operativas y garantizar una adecuada experiencia para el huésped.

    .row.justify-content-center.mb-5
      .col-xl-10
        .p-4.bg-secundario-s10.rounded-4
          p.mb-0.text-center Instrumentos de control y seguimiento

    .row.justify-content-center.align-items-stretch.mb-5
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema1/32.svg' alt='')
          h5.text-center Control de habitaciones
          p.text-center.mb-4 Auditoría del estado físico y de limpieza de cada unidad habitacional de acuerdo con el checklist institucional.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-xl-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema1/33.svg' alt='')
          h5.text-center Objetos olvidados
          p.text-center.mb-4 Custodia y registro detallado de pertenencias olvidadas por las personas usuarias, siguiendo el protocolo de seguridad.
      .col-sm-6.col-lg-5.col-xl-3.mb-4.mb-sm-0
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema1/34.svg' alt='')
          h5.text-center Insumos y suministros
          p.text-center.mb-4 Control de existencias de material de aseo y productos de limpieza para evitar desperdicios y garantizar el stock.
      .col-sm-6.col-lg-5.col-xl-3
        .tarjeta.bg-img.bg-img--3.p-4.py-5.h-100
          .row.justify-content-center.mb-3
            .col-6
              img.w-125.mb-4(src='@/assets/curso/tema1/35.svg' alt='')
          h5.text-center Inventarios
          p.text-center.mb-4 Realización periódica de conteos de lencería, activos fijos y "mini-vales" (o consumos internos) del departamento.

    .p-4.rounded-4.bg-acento-contenido-a5
      p.mb-0 La efectividad del departamento de pisos radica en la rigurosidad de sus procesos de planeación y supervisión. El ama de llaves debe ejecutar las siguientes líneas de acción para garantizar la calidad del servicio.

    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Supervisión técnica y control de calidad

    .row.g-0.rounded-4.bg-acento-botones-a5.mb-5.justify-content-center
      .col-sm-6.col-lg-3.d-flex
        figure.m-0
          img(src="@/assets/curso/tema1/36.png", alt="alt text" data-aos="zoom-in-down")
      .col-lg-9.p-4.p-xl-0
        .d-flex.flex-column.justify-content-center.h-100
          p.px-lg-3 Son procesos orientados a garantizar que las actividades operativas se ejecuten conforme a los procedimientos establecidos, los estándares institucionales y las expectativas del huésped. Mediante la supervisión permanente de habitaciones, zonas comunes, dotación y presentación general del servicio, se busca asegurar condiciones óptimas de higiene, orden, confort y funcionalidad en el establecimiento de hospedaje.

    .row.justify-content-center.mb-5
      .col-xl-10
        .p-4.bg-secundario-s5.rounded-4
          p.mb-0.text-center Protocolo de inspección y reporte de averías

    .row.mb-5.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/37.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Infraestructura y acabados
              p.mb-0 Verificación de pintura, alfombras, tapicerías y estado de armarios.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/38.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Instalaciones hidrosanitarias
              p.mb-0 Revisión de funcionamiento de sanitarios, cisternas y grifería.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/39.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Sistemas eléctricos y conectividad
              p.mb-0 Comprobación de iluminación (bombillos), cables de comunicación y aparatos eléctricos.
      .col-sm-6.col-lg-5.col-xl-3.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/40.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Dotación de lencería
              p.mb-0 Auditoría del estado y limpieza de toallas y lencería de cama.

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-lg-10
        .bg-acento-contenido-a5.bg-special.rounded-4.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.position-lg-relative.z-2
              img.position-lg-absolute.img-flotante(src="@/assets/curso/tema1/41.png", alt="").img-fluid.d-none.d-lg-block
            .col-lg-10
              p.mb-0 #[strong Nota:]. Todas las averías detectadas deben reportarse mediante un documento técnico (con duplicado) al servicio de mantenimiento, el cual debe ser firmado por el encargado de dicha dependencia para asegurar la trazabilidad.




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
