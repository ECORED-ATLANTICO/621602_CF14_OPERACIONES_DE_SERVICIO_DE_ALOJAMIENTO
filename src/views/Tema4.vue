<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Marco normativo aplicable a la coordinación de alojamiento

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El marco normativo aplicable a la coordinación de alojamiento en Colombia comprende el conjunto de leyes, normas técnicas, lineamientos y disposiciones que regulan la prestación de los servicios de hospedaje, garantizando condiciones adecuadas de calidad, seguridad, sostenibilidad y protección tanto para los huéspedes como para los trabajadores del sector hotelero y turístico. Estas disposiciones orientan la ejecución de los procesos operativos y administrativos del área de alojamiento conforme a criterios legales y técnicos establecidos a nivel nacional e internacional. La observancia de estas directrices es obligatoria para la coordinación de servicios bajo estándares de excelencia.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Normativa de sostenibilidad: la norma NTC 6503

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La norma NTC 6503, emitida por la Organización Colombiana de Normalización (ICONTEC), es una referencia clave para la prestación de servicios de alojamiento en el país. Esta normativa establece criterios de sostenibilidad, seguridad y calidad que orientan la planeación, ejecución y control de los procesos operativos del área de alojamiento. Su cumplimiento es obligatorio para garantizar condiciones adecuadas de servicio, cumplimiento de estándares internacionales y protección de los intereses de los huéspedes y trabajadores del sector.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Dimensión ambiental

    p.mb-4 Orientada a la aplicación de prácticas responsables para la conservación de los recursos naturales, el manejo adecuado de residuos, el uso eficiente del agua y la energía, así como la implementación de acciones que minimicen los impactos ambientales generados por la operación del establecimiento de alojamiento.

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/3.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Uso eficiente del agua y energía
            p.mb-0.text-center Supervisión de protocolos de lavado de lencería y uso de iluminación de bajo consumo en las unidades de alojamiento.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/4.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Gestión de residuos
            p.mb-0.text-center Aplicación estricta del código de colores y reducción del uso de plásticos de un solo uso en las amenidades (#[em amenities]).
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/5.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Control de emisiones y vertimientos
            p.mb-0.text-center Uso de productos de limpieza biodegradables para proteger las fuentes hídricas.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Dimensión sociocultural

    .p-4.bg-acento-contenido-a5.rounded-4.mb-5
      p.mb-0 Enfocada en el respeto y fortalecimiento de la identidad cultural, las tradiciones locales y el patrimonio de las comunidades, promoviendo relaciones responsables con empleados, huéspedes y entorno social, además de fomentar prácticas de inclusión, equidad y responsabilidad social empresarial.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-6
        .row.justify-content-center.mb-5
          .col-lg-6.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/7.svg', alt='')
              .tarjeta.bg-acento-botones-a5
                .p-4.text-center
                  h4.text-center Promoción del destino
                  p.text-center.mb-0 Inclusión de información sobre atractivos locales y respeto por las comunidades anfitrionas.
          .col-lg-6.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/8.svg', alt='')
              .tarjeta.bg-acento-botones-a5
                .p-4.text-center
                  h4.text-center Prevención de la ESCNNA
                  p.text-center.mb-0 Implementación rigurosa del Código de Conducta para prevenir la explotación sexual comercial de niños, niñas y adolescentes.

    .bg-title.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Dimensión económica

    p.mb-4 Relacionada con la sostenibilidad financiera y la eficiencia operativa del establecimiento, mediante el uso racional de recursos, la optimización de procesos, el mejoramiento continuo del servicio y la generación de valor económico que contribuya a la competitividad y permanencia del establecimiento en el sector turístico.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/9.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          h5 Contratación local: 
          p.mb-0 priorización de proveedores de la región para el abastecimiento de insumos de camarería.
        .p-4.bg-acento-contenido-a5.rounded-4.mb-3
          h5 Calidad en el servicio:
          p.mb-0 mejora continua de los procesos de alojamiento para asegurar la satisfacción y fidelización de la persona usuaria.
      

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 4.
      span Acciones de coordinación según la NTC 6503
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. SENA, (2024).
        thead
          tr(style="background-color: #F0F6F9")
            th Eje de sostenibilidad
            th Acción técnica de coordinación
            th Evidencia de cumplimiento
        tbody
          tr
            td Ambiental.
            td Control de recambio de lencería bajo criterios de ahorro.
            td Registros de consumo de agua y energía por habitación.
          tr
            td Sociocultural.
            td Capacitación del personal en protección del patrimonio.
            td Certificados de formación del talento humano.
          tr
            td Económico.
            td Evaluación de proveedores de insumos eco-amigables.
            td Fichas técnicas de productos de limpieza sostenibles.

    .p-4.bg-acento-contenido-a5.rounded-4.mb-5
      p.mb-0 La coordinación del servicio de alojamiento debe traducir los requisitos de la NTC 6503 en protocolos operativos que el personal de pisos (camareras y auxiliares) pueda ejecutar. Esta norma se divide en criterios de cumplimiento que impactan directamente la unidad de alojamiento.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 5.
      span Matriz de cumplimiento NTC 6503 en habitaciones
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        caption Nota. SENA, (2024).
        thead
          tr(style="background-color: #F0F6F9")
            th Requisito NTC 6503
            th Acción en el departamento de habitaciones
            th Indicador de seguimiento
        tbody
          tr
            td Ahorro de agua.
            td Uso de técnicas de limpieza que minimicen el consumo de agua por habitación.
            td Litros de agua consumidos por habitación ocupada.
          tr
            td Insumos sostenibles.
            td Uso de productos de limpieza con etiquetas ecológicas (biodegradables).
            td Inventario de químicos con ficha técnica ambiental.
          tr
            td Compromiso social.
            td Vigilancia y reporte de conductas sospechosas relacionadas con ESCNNA.
            td Número de reportes o verificaciones de protocolo.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Seguridad y salud en el trabajo (SST)

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/10.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La seguridad y salud en el trabajo en el área de alojamiento comprende el conjunto de medidas, procedimientos y acciones preventivas orientadas a proteger la integridad física, mental y social de los trabajadores durante el desarrollo de las actividades operativas y administrativas del servicio de hospedaje. Su aplicación permite identificar, evaluar y controlar los riesgos asociados a las labores de limpieza, manipulación de productos químicos, movimientos repetitivos, levantamiento de cargas y desplazamientos constantes dentro de las instalaciones.
        p.mb-0 Regulado principalmente por el Decreto 1072 de 2015, este eje busca proteger la integridad física y mental del talento humano del área de pisos.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-sm-10.col-lg-6.mb-4.mb-lg-0
        .p-4.bg-img.bg-img--10.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 #[strong Riesgos ergonómicos]: protocolos para el levantamiento de cargas y posturas durante el tendido de camas y limpieza.
      .col-sm-10.col-lg-6
        .p-4.bg-img.bg-img--10.rounded-4
          p.mb-0 #[strong Riesgos químicos]: manejo seguro de detergentes y desinfectantes, incluyendo el uso obligatorio de elementos de protección personal (EPP) y la disponibilidad de fichas de seguridad.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Dimensión ergonómica: higiene postural y biomecánica

    .p-4.bg-acento-contenido-a5.rounded-4.mb-5
      p.mb-0 En la coordinación de servicios de alojamiento, la prevención de trastornos musculoesqueléticos (TME) no es solo un requisito legal de la Resolución 0312 de 2019, sino una estrategia de productividad. El esfuerzo físico debe ser sustituido por técnica y uso correcto de herramientas.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Principios de biomecánica aplicada

    p.mb-4 Para proteger la zona lumbar y cervical, el personal debe interiorizar tres reglas de oro:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/11.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-center Alineación:
            p.mb-0.text-center Mantener los hombros alineados con la cadera y evitar giros de tronco (torsiones). Es preferible pivotar con los pies.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/12.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-center Base de sustentación: 
            p.mb-0.text-center Mantener los pies ligeramente separados para aumentar el equilibrio y la estabilidad.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/13.png", alt="")
          .crd_hover_txt--body.bg-acento-contenido-a5
            h4.mb-3.text-center Control de emisiones y vertimientos
            p.mb-0.text-center Uso de productos de limpieza biodegradables para proteger las fuentes hídricas.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Protocolos técnicos de movimiento (basados en el manual de buenas prácticas)

    .p-4.bg-acento-botones-a5.rounded-4.mb-5
      p.mb-0 Estas prácticas están enfocadas en prevenir lesiones musculoesqueléticas, reducir la fatiga laboral y promover el bienestar del personal durante tareas relacionadas con el arreglo de habitaciones, manipulación de lencería, movilización de equipos y ejecución de rutinas de limpieza.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Tendido y alistamiento de la unidad de descanso

    p.mb-4 El tendido de camas es la tarea con mayor riesgo de lesiones de espalda y hombros.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-11.col-lg-6
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/14.png", alt="" data-aos="zoom-in-down")
      .col-lg-6
        SlyderA(tipo="b").bg-acento-botones-a5.p-4.tarjeta.h-100
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Retirada de la cama
              p.mb-0 No arrastrar la cama con los brazos extendidos. Se debe empujar con el peso del cuerpo, flexionando las rodillas y manteniendo la espalda recta.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Técnica de la rodilla
              p.mb-0 Al remeter las sábanas en las esquinas bajas, se debe evitar el encorvamiento. Lo técnico es flexionar las rodillas o apoyar una de ellas en el suelo (siempre utilizando una protección si el piso es duro) para mantener la columna neutra.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Alcance
              p.mb-0 No estirarse de forma excesiva sobre la cama para alisar las sábanas. Es preferible rodear la cama para trabajar siempre en el lado que se está tendiendo.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Limpieza de zonas de acceso difícil (baños y alturas)

    .row.align-items-stretch.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden
          figure
            img(src="@/assets/curso/tema4/15.png", alt="", data-aos="fade-down-right")
          .p-4.bg-secundario-s5.h-100
            h5 Zonas bajas:
            p.mb-0 Para la limpieza de sanitarios y bañeras, evitar la flexión del tronco. Se recomienda la posición de "estocada" (una pierna delante de la otra) para distribuir el peso.
      
      .col-lg-6
        .rounded-4.h-100.overflow-hidden
          figure
            img(src="@/assets/curso/tema4/16.png", alt="", data-aos="fade-down-left")
          .p-4.bg-secundario-s5
            h5 Zonas altas:
            p.mb-0 Está prohibido el uso de sillas o elementos improvisados. Se debe utilizar equipo de largo alcance (mangos telescópicos) para mantener los brazos por debajo del nivel de los hombros, evitando la fatiga del manguito rotador.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/common/newspaper.png", class="img-fluid cita-decorada__imagen-flotante-4 cita-decorada__imagen-flotante-4--bigger")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start #[strong Anexo]. Ergonomía y biomédica aplicada al servicio de alojamiento. 
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/5_Ergonomia_para_el_servicio_de_alojamiento.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Dimensión de riesgo químico y biológico

    .p-4.rounded-4.bg-secundario-s5.mb-5
      p.mb-0 En la coordinación de servicios de alojamiento, la seguridad química y la bioseguridad no solo protegen la salud del talento humano, sino que garantizan la inocuidad de la unidad de alojamiento para la persona usuaria.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Gestión segura de productos químicos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/17.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La gestión segura de productos químicos busca prevenir riesgos por inhalación, contacto o ingestión accidental durante el uso de desinfectantes, detergentes y desengrasantes. Todos los productos deben estar correctamente identificados y rotulados según el Sistema Globalmente Armonizado (SGA), utilizando etiquetas con pictogramas de peligro, advertencias y recomendaciones de seguridad. Además, está prohibido almacenar químicos en envases de alimentos o bebidas.
        .p-4.bg-acento-contenido-a10.rounded-4.mb-3
          p.mb-0 Cada carro de camarería debe contar con las Fichas de Datos de Seguridad (FDS), ya que estas indican cómo actuar en caso de derrames, emergencias o contacto accidental.
        p.mb-0 En la preparación de diluciones, se debe respetar la dosificación indicada por el fabricante, evitando concentraciones excesivas que puedan generar vapores tóxicos o irritaciones. Como regla fundamental, nunca se deben mezclar productos químicos, especialmente cloro con amoníaco o ácidos, debido al riesgo de producir gases peligrosos.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Gestión de riesgo biológico y fluidos corporales

    .row.g-0.rounded-4.bg-acento-botones-a5.mb-5.justify-content-center
      .col-sm-6.col-lg-3.d-flex
        figure.m-0
          img(src="@/assets/curso/tema4/18.png", alt="alt text" data-aos="zoom-in-down")
      .col-lg-9.p-4.p-xl-0
        .d-flex.flex-column.justify-content-center.h-100
          p.px-lg-3 Comprende las medidas preventivas y los procedimientos técnicos orientados a minimizar la exposición del personal a agentes biológicos que puedan representar riesgos para la salud durante el desarrollo de las actividades operativas. En el servicio de hospedaje, estas situaciones pueden presentarse durante la limpieza y desinfección de habitaciones, el manejo de residuos, la manipulación de lencería contaminada o la atención de novedades relacionadas con fluidos corporales.
          p.px-lg-3 Actividades de gestión de riesgo

    TabsB.color-primario.mb-4.mb-lg-5
      .py-4.py-md-5(titulo="Protocolo de 'no sacudido'" :icono="require('@/assets/curso/tema4/19.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Protocolo de "no sacudido"
            p.mb-0 Al retirar la lencería de la cama, está prohibido sacudirla, ya que esto dispersa ácaros y patógenos en el aire. La ropa debe enrollarse con la cara sucia hacia adentro y depositarse de inmediato en la bolsa del carro.
          .col-sm-8.col-lg-3
            figure
              img(src='@/assets/curso/tema4/22.png', alt='')
      .py-4.py-md-5(titulo="Manejo de fluidos corporales (sangre, orina, vómito)" :icono="require('@/assets/curso/tema4/20.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Manejo de fluidos corporales (sangre, orina, vómito)
            p.mb-0 Ante la presencia de fluidos, se debe aplicar el protocolo de "derrame biológico": delimitar el área, aplicar un agente absorbente y desinfectar con hipoclorito de sodio en la concentración técnica requerida (habitualmente 5000 ppm para áreas críticas).
          .col-sm-8.col-lg-3
            figure
              img(src='@/assets/curso/tema4/23.png', alt='')
      .py-4.py-md-5(titulo="Gestión de elementos cortopunzantes" :icono="require('@/assets/curso/tema4/21.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Gestión de elementos cortopunzantes
            p.mb-0 En caso de encontrar jeringas o vidrios rotos, estos nunca deben manipularse con la mano directamente, ni depositarse en bolsas plásticas. Se deben usar pinzas y un contenedor rígido (guardián) de color rojo.
          .col-sm-8.col-lg-3
            figure
              img(src='@/assets/curso/tema4/24.png', alt='')

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Elementos de protección personal (EPP)

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/25.png", alt="")
      .col-lg-9
        p Los elementos de protección personal (EPP) son dispositivos y accesorios utilizados para proteger la integridad física del trabajador frente a los riesgos presentes durante el desarrollo de las actividades operativas en el área de alojamiento. Su uso adecuado permite prevenir accidentes laborales y reducir la exposición a riesgos físicos, químicos, biológicos y ergonómicos asociados a labores de limpieza, desinfección y manipulación de insumos y equipos.
        p.mb-0 La NTC y el SG-SST exigen el suministro y uso obligatorio de:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        .p-4.rounded-4.bg-img.bg-img--12.h-100
          h5.text-center Guantes de nitrilo
          p.mb-0.text-center De caña larga para la limpieza de baños, protegiendo contra químicos y agentes biológicos.
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        .p-4.rounded-4.bg-img.bg-img--12.h-100
          h5.text-center Protección respiratoria
          p.mb-0.text-center Mascarillas con filtros adecuados si se trabaja en espacios con poca ventilación o vapores fuertes.
      .col-sm-6.col-lg-4.col-xl-3
        .p-4.rounded-4.bg-img.bg-img--12.h-100
          h5.text-center Calzado de seguridad
          p.mb-0.text-center Con suela antideslizante y puntera reforzada para evitar caídas en superficies húmedas y golpes.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Protocolos de seguridad en limpieza hotelera

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/26.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p.mb-0 Los protocolos de seguridad en limpieza hotelera comprenden el conjunto de normas, procedimientos y medidas preventivas orientadas a garantizar la protección de los trabajadores, huéspedes e instalaciones durante el desarrollo de las actividades de limpieza y desinfección en establecimientos de alojamiento. Su aplicación permite minimizar riesgos asociados al manejo de productos químicos, exposición a agentes biológicos, accidentes laborales y contaminación cruzada, promoviendo ambientes seguros e higiénicos dentro de la operación hotelera.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/common/newspaper.png", class="img-fluid cita-decorada__imagen-flotante-4 cita-decorada__imagen-flotante-4--bigger")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start #[strong Anexo]. Claves para un trabajo seguro en alojamiento. 
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/6_Claves_para_un_trabajo_seguro_en_alojamiento.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Dimensión de hábitos saludables y preparación física

    .row.mb-5
      .col-xl-9
        p.mb-0 En la coordinación de servicios de alojamiento, el cuerpo es la herramienta principal de trabajo. La Resolución 0312 de 2019 enfatiza la importancia de los programas de estilos de vida saludable. Inspirados en técnicas de Pilates, estos ejercicios buscan fortalecer el "core" (centro del cuerpo) y flexibilizar los grupos musculares más exigidos.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Preparación del cuerpo: el calentamiento inicial

    .p-4.rounded-4.bg-secundario-s5.mb-5
      p.mb-0 Antes de iniciar la jornada de tendido y limpieza, el talento humano debe preparar sus articulaciones.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/27.png", alt="" data-aos="fade-down-right")
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        .p-4.rounded-4.bg-img.bg-img--3.h-100
          h5.text-center Activación de muñecas
          p.mb-0.text-center Realizar círculos suaves con las muñecas en ambos sentidos y estiramientos de flexores y extensores. Esto previene el síndrome del túnel carpiano.
      .col-sm-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        .p-4.rounded-4.bg-img.bg-img--3.h-100
          h5.text-center Movilidad de hombros
          p.mb-0.text-center Elevación y descenso de hombros, y rotaciones hacia atrás para liberar la tensión acumulada en el trapecio.
      .col-sm-6.col-lg-4.col-xl-3
        .p-4.rounded-4.bg-img.bg-img--3.h-100
          h5.text-center Desbloqueo de cadera
          p.mb-0.text-center Realizar movimientos circulares con la pelvis para lubricar la articulación coxofemoral antes de las flexiones repetitivas.

    .p-4.rounded-4.bg-secundario-s10
      p.mb-0 La coordinación de servicios de alojamiento debe alinearse con las políticas nacionales de protección del entorno y los recursos naturales. En el departamento de pisos, la gestión ambiental no es opcional; es una responsabilidad operativa que garantiza la viabilidad del destino turístico.

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Normativa ambiental aplicable al departamento de habitaciones

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/28.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La normativa ambiental aplicable al departamento de habitaciones comprende el conjunto de disposiciones legales, lineamientos técnicos y buenas prácticas orientadas a promover la protección del medio ambiente y el uso responsable de los recursos naturales dentro de los establecimientos de alojamiento. Estas normas buscan minimizar los impactos ambientales derivados de la operación hotelera mediante la implementación de acciones relacionadas con el ahorro de agua y energía, la gestión integral de residuos, el manejo adecuado de productos químicos y la promoción de prácticas sostenibles en las actividades de limpieza, lavandería y mantenimiento de habitaciones.
        .p-4.rounded-4.bg-acento-contenido-a5.mb-3
          p.mb-0 En el área de alojamiento, la aplicación de la normativa ambiental permite desarrollar procesos operativos más eficientes y responsables, contribuyendo al fortalecimiento de la sostenibilidad turística y al cumplimiento de estándares nacionales e internacionales de calidad ambiental. Entre los aspectos más relevantes se encuentran la clasificación y disposición adecuada de residuos sólidos, gestión estratégica para el uso eficiente de agua y energía, clasificación detallada y manejo de residuos especiales y por último control técnico de vertimientos y calidad del agua.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Gestión integral de residuos sólidos 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p En el departamento de habitaciones, la generación de residuos se produce principalmente durante las actividades de limpieza, cambio de lencería, reposición de amenities, mantenimiento y atención al huésped. Por esta razón, es fundamental implementar procedimientos que permitan separar adecuadamente los residuos ordinarios, reciclables, orgánicos y de manejo especial, conforme a los lineamientos establecidos en la normatividad ambiental vigente y las políticas institucionales de sostenibilidad.
        .p-4.rounded-4.bg-acento-contenido-a5.mb-3
          .row.align-items-center
            .d-none.d-lg-block.col-lg-2
              figure
                img.w-65(src="@/assets/curso/tema4/30.svg", alt="")
            .col-12.col-lg-10
              p.mb-0 De acuerdo con la #[strong Resolución 2184 de 2019], el personal de pisos debe aplicar el código de colores unificado para la separación en la fuente desde el momento de la retirada de desechos en la unidad de alojamiento.
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/29.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/31.png", alt="" data-aos="zoom-in-down")
      .col-lg-8  
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t5").mb-4
          .row.justify-content-center.align-items-center.z-2(titulo="Color blanco")
            .col-sm-10.col-lg-7.mb-4.mb-lg-0
              p Residuos aprovechables limpios y secos (plástico, vidrio, metales, papel y cartón).
            .col-sm-6.col-lg-3
              figure
                img(src='@/assets/curso/tema4/32.png', alt='')
          .row.justify-content-center.align-items-center.z-2(titulo="Color negro")
            .col-sm-10.col-lg-7.mb-4.mb-lg-0
              p Residuos no aprovechables (papel higiénico, servilletas, papeles y cartones contaminados con comida, papeles metalizados).
            .col-sm-6.col-lg-3
              figure
                img(src='@/assets/curso/tema4/33.png', alt='')
          .row.justify-content-center.align-items-center.z-2(titulo="Color verde")
            .col-sm-10.col-lg-7.mb-4.mb-lg-0
              p Residuos orgánicos aprovechables (restos de comida, desechos agrícolas).
            .col-sm-6.col-lg-3
              figure
                img(src='@/assets/curso/tema4/34.png', alt='')

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Gestión estratégica para el uso eficiente de agua y energía

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/35.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La gestión eficiente del agua y la energía en el área de habitaciones es fundamental para reducir costos y minimizar el impacto ambiental en los establecimientos de alojamiento. Según el SENA (2024), estas acciones hacen parte del compromiso con la sostenibilidad y requieren procesos estandarizados y supervisión constante.
        .p-4.rounded-4.bg-acento-contenido-a5.mb-3
          p.mb-0 En la gestión hídrica, el uso de ecotecnologías como aireadores y duchas de bajo flujo, junto con políticas de lavado de lencería bajo demanda, permite disminuir el consumo de agua y la generación de aguas residuales.
        p.mb-0 En cuanto a la eficiencia energética, la implementación de iluminación LED, sensores de presencia y el control del apagado de equipos y sistemas de climatización en habitaciones desocupadas contribuyen al ahorro energético y al cumplimiento de la NTC 6503.
  
    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Clasificación detallada y manejo de residuos especiales

    .p-4.rounded-4.bg-secundario-s5.mb-5
      p.mb-0 Más allá de los residuos convencionales, el departamento de pisos genera elementos que requieren una disposición diferenciada para evitar la contaminación cruzada y riesgos legales, la clasificación detallada y manejo de residuos especiales:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .p-4.rounded-4.bg-img.bg-img--11.mb-3
          h5 Residuos peligrosos (RESPEL)
          p.mb-0 Se definen como aquellos que poseen características de corrosividad, reactividad, explosividad, toxicidad o inflamabilidad.
        .p-4.rounded-4.bg-img.bg-img--11.mb-4.mb-lg-0
          h5 Residuos de riesgo biológico
          p.mb-0 Son residuos contaminados con fluidos corporales, microorganismos o material infeccioso generado durante las labores de limpieza y atención en alojamiento.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/36.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4.order-1.order-lg-0
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/37.png", alt="")
      .col-lg-8.order-0.order-lg-1.mb-4.mb-lg-0
        .p-4.rounded-4.bg-img.bg-img--11.mb-3
          h5 Residuos químicos
          p.mb-0 Son desechos provenientes de productos de limpieza, desinfección o mantenimiento que pueden causar contaminación o afectar la salud si no se manejan adecuadamente.
        .p-4.rounded-4.bg-img.bg-img--11
          h5 Residuos de aparatos eléctricos y electrónicos (RAEE)
          p.mb-0 Son equipos eléctricos o electrónicos en desuso, como televisores, secadores o lámparas, que requieren disposición especializada para evitar impactos ambientales.
        

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4(data-aos="fade-down-right")
      h5.mb-0 Control técnico de vertimientos y calidad del agua

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9.mb-4.mb-lg-0
        p En el departamento de habitaciones, el consumo de agua está asociado principalmente a las actividades de limpieza, lavandería, desinfección, mantenimiento de baños y reposición de servicios para el huésped. Por esta razón, es fundamental implementar prácticas de ahorro, control y monitoreo que permitan optimizar el consumo del recurso hídrico sin afectar la calidad y eficiencia del servicio prestado.
        .p-4.bg-img.rounded-4.mb-4.mg-lg-0
          p.mb-0.pe-lg-5 Asimismo, el control de vertimientos implica la correcta gestión de las aguas residuales y de los productos químicos utilizados durante las labores operativas, evitando descargas inadecuadas que puedan afectar las redes sanitarias, fuentes hídricas o el medio ambiente. La utilización responsable de detergentes, desinfectantes y demás sustancias químicas contribuye a reducir los niveles de contaminación y favorece el cumplimiento de los estándares ambientales establecidos por las autoridades competentes.
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/38.png", alt="")
    
    .p-4.rounded-4.bg-acento-contenido-a5.mb-5
      p.mb-0.text-center Los vertimientos generados en el aseo de habitaciones contienen cargas orgánicas y químicas que afectan las plantas de tratamiento de aguas residuales (PTAR) de la ciudad

    .row.align-items-stretch.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.h-100.overflow-hidden
          figure
            img(src="@/assets/curso/tema4/39.png", alt="", data-aos="fade-down-right")
          .p-4.bg-acento-botones-a5.h-100
            h5 Sustancias tensoactivas y biodegradabilidad
            p.mb-0 La normativa colombiana, a través de la NTC 6503, exige que los productos de limpieza empleados sean altamente biodegradables para reducir la demanda química de oxígeno (DQO) en los vertimientos (Icontec, 2020). El coordinador debe verificar que los detergentes no contengan fosfatos, los cuales provocan la eutrofización (exceso de algas) en los cuerpos de agua receptores.
      
      .col-lg-6
        .rounded-4.h-100.overflow-hidden
          figure
            img(src="@/assets/curso/tema4/40.png", alt="", data-aos="fade-down-left")
          .p-4.bg-acento-botones-a5.h-100
            h5 Prevención de obstrucciones y grasas
            p.mb-0 Se deben implementar rejillas de retención en duchas y sifones para evitar que cabellos y residuos sólidos ingresen a la red. El SENA (2024) subraya que "la educación del personal de pisos en el vertido responsable es la herramienta más económica y efectiva para prevenir daños en la infraestructura hidráulica y sanciones ambientales".

















</template>

<script>
export default {
  name: 'Tema4',
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
