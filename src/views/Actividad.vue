<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Coordinar servicios de alojamiento de acuerdo a procedimientos técnicos y técnicas de planeación',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos del aprendiz sobre la gestión operativa del área de habitaciones y zonas comunes, verificando su comprensión de la estructura organizacional, los procedimientos técnicos de limpieza y arreglo, la normativa aplicable, la planeación de actividades, el manejo de suministros y activos, así como los procesos de supervisión y mantenimiento, con el fin de fortalecer las competencias requeridas para la coordinación eficiente del servicio de alojamiento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!.',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función del departamento de pisos en un establecimiento de alojamiento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar únicamente la limpieza de las habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Administrar únicamente los servicios de alimentos y bebidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar la limpieza, conservación de activos y calidad de la experiencia del huésped.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Realizar funciones contables del hotel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende que el departamento de pisos no solo limpia, también protege activos, mantiene estándares de calidad y contribuye a la experiencia del huésped.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de principal función del departamento de pisos en un establecimiento de alojamiento',
        },
        {
          id: 2,
          texto:
            '¿Quién lidera el departamento de pisos en la estructura organizacional del hotel?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Supervisor de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ama de Llaves Ejecutiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Recepcionista.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gerente de alimentos y bebidas..',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende que el Ama de Llaves es la responsable de la dirección y coordinación del departamento.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente el departamento de pisos en la estructura organizacional del hotel.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de comunicación ocurre cuando una camarera reporta una avería al supervisor?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comunicación ascendente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Comunicación descendente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicación horizontal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comunicación externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la información fluye desde un nivel operativo hacia un nivel superior.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente sobre el tipo de comunicación ocurre cuando una camarera reporta una avería al supervisor',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes habitaciones está diseñada para personas con movilidad reducida?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Triple.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Habitación accesible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Habitación sencilla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende porque cumple normas de accesibilidad universal.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente habitaciones diseñadas para personas con movilidad reducida.',
        },
        {
          id: 5,
          texto:
            '¿Qué estado tiene una habitación que ya fue limpiada y está lista para la venta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ocupada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sucia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disponible.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende el componente de turismo de los pilares del desarrollo sostenible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente del concepto de sostenibilidad.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el objetivo del tendido técnico de camas en hotelería?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el tiempo de limpieza',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lograr tensión, simetría e higiene en la cama.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizar la menor cantidad de lencería posible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilitar el almacenamiento de lencería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende que el estándar hotelero exige precisión, higiene y estética.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de tendido técnico de camas en hotelería.',
        },
        {
          id: 7,
          texto: 'Según el protocolo técnico, la limpieza debe realizarse:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De abajo hacia arriba.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'De afuera hacia adentro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De arriba hacia abajo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'De sucio a limpio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende porque evita que el polvo vuelva a contaminar superficies ya limpias.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente del protocolo técnico, la limpieza.',
        },
        {
          id: 8,
          texto: '¿Qué significa desinfectar?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar suciedad visible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar microorganismos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Retirar polvo de superficies.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar la lencería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la desinfección elimina microorganismos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de desinfección.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una rutina de aseo que se realiza tras el check-out del huésped?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aseo detallado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aseo mensual.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aseo diario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aseo general o de salida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende lo que implica limpieza profunda después de la salida del huésped.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente rutina de aseo que se realiza tras el check-out del huésped.',
        },
        {
          id: 10,
          texto:
            '¿Qué instrumento se utiliza para visualizar el cronograma de actividades en el tiempo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Matriz DOFA.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Balance general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diagrama de Gantt.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de programar actividades en el tiempo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente instrumentos que se utiliza para visualizar el cronograma de actividades en el tiempo.',
        },
        {
          id: 11,
          texto:
            '¿Qué norma colombiana establece criterios de sostenibilidad para el sector alojamiento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'NTC 6503.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'ISO 9001.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Decreto 1072.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 100.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de conocer la norma que regula sostenibilidad en el sector turístico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de norma colombiana establece criterios de sostenibilidad para el sector alojamiento',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una regla básica de la biomecánica para prevenir lesiones?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Girar el tronco al levantar cargas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener la carga lejos del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener los pies juntos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener la carga cerca del cuerpo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de reducir la presión sobre la columna.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente regla básica de la biomecánica para prevenir lesiones.',
        },
        {
          id: 13,
          texto:
            '¿Qué sistema se utiliza para identificar los peligros de productos químicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ISO.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'HACCP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'SGA.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'BPM.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de que el Sistema Globalmente Armonizado regula el etiquetado químico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente del sistema que se utiliza para identificar los peligros de productos químicos.',
        },
        {
          id: 14,
          texto: '¿Por qué está prohibido mezclar cloro con amoníaco?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce la limpieza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Daña los pisos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reduce la espuma.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Produce gases tóxicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende que se  generan gases peligrosos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente donde se explica por qué está prohibido mezclar cloro con amoníaco.',
        },
        {
          id: 15,
          texto:
            '¿Qué se debe hacer con la lencería usada al retirarla de la cama?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sacudirla para quitar el polvo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Doblarla sobre la cama.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enrollarla con la parte sucia hacia adentro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Colocarla sobre el piso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de evitar dispersión de microorganismos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de qué se debe hacer con la lencería usada al retirarla de la cama.',
        },
        {
          id: 16,
          texto:
            '¿Qué color de paño se utiliza normalmente para sanitarios según el código de colores?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verde.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Azul.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Amarillo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rojo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de que  se destina a zonas de alto riesgo biológico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de color de paño se utiliza normalmente para sanitarios según el código de colores.',
        },
        {
          id: 17,
          texto: '¿Cuál es la función del carro de camarería?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transportar huéspedes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Transportar suministros, lencería y químicos para la limpieza',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Guardar documentos administrativos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transportar alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia del carro en la organización de los insumos de limpieza.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente función del carro de camarería.',
        },
        {
          id: 18,
          texto: '¿Qué es el pronóstico de ocupación en hotelería?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Control de suministros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estimación futura de habitaciones ocupadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evaluación de empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de  planificar personal y recursos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente pronóstico de ocupación en hotelería.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el primer paso del método L.E.A.S. para manejar quejas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Empatizar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escuchar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Resolver.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disculparse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de que el proceso inicia escuchando al huésped.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de los pasos del método L.E.A.S. para manejar quejas.',
        },
        {
          id: 20,
          texto:
            '¿Qué se debe hacer cuando se encuentra un objeto olvidado en una habitación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guardarlo personalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Balance general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrarlo en el protocolo de objetos olvidados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Entregarlo a otro huésped.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de garantizar la  trazabilidad y seguridad.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de que se debe hacer cuando se encuentra un objeto olvidado en una habitación.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
