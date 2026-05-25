export default {
  global: {
    Name:
      'Coordinar servicios de alojamiento de acuerdo a procedimientos técnicos y técnicas de planeación',
    Description:
      'Este componente formativo tiene como objetivo fundamental desarrollar competencias relacionadas con la coordinación de los servicios de alojamiento mediante la aplicación de procedimientos técnicos y técnicas de planeación propias del sector hotelero y turístico, contribuyendo al mejoramiento de la calidad, la satisfacción del huésped y la eficiencia en la prestación del servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Area de habitaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Nivel directivo y de apoyo administrativo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Nivel de supervisión (mandos medios)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Nivel operativo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gestión de controles y auditoría operativa',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Supervisión técnica y control de calidad',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión técnica de habitaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipologías y características de las habitaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estados de la habitación (status)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Dotación y estándares de servicio según tipo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Procedimientos técnicos: higiene, alistamiento y rutinas de limpieza',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Limpieza y desinfección: protocolos de bioseguridad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnica de arreglo de cama (tendido de camas)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Clasificación de las rutinas de aseo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Contextualización técnica: el estándar europeo y español',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Procedimiento técnico para el alistamiento de la base',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Variaciones internacionales en la técnica de tendido',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Marco normativo aplicable a la coordinación de alojamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normativa de sostenibilidad: la norma NTC 6503',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Seguridad y salud en el trabajo (SST)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Normativa ambiental aplicable al departamento de habitaciones',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Procedimientos técnicos: profundización en limpieza y desinfección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Fundamentos técnicos: el círculo de Sinner',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Procedimiento técnico de alistamiento del carro de camarería',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Procedimiento técnico de arreglo de cama (tendido de precisión)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Preparación y desarmado (protocolo de higiene)',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Especificaciones técnicas de la lencería de cama',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Amonio cuaternario',
      significado:
        'Desinfectante de amplio espectro (preferiblemente de 5ta generación) de baja toxicidad, usado para eliminar virus y bacterias en superficies inertes.',
    },
    {
      termino: '<em>Amenities</em>',
      significado:
        'Artículos de aseo personal y cortesía (jabón, champú, gorro de ducha) dispuestos en el baño para el uso del huésped.',
    },
    {
      termino: 'Ángulo de Mitra',
      significado:
        'Técnica de doblado en las esquinas de las sábanas a 45 grados, que permite una tensión máxima y una estética impecable en la cama.',
    },
    {
      termino: 'Bloqueo <em>(out of order)</em>',
      significado:
        'Estado de una habitación que no puede ser vendida debido a reparaciones, mantenimiento profundo o desinfección programada.',
    },
    {
      termino: '<em>Check-in</em>',
      significado:
        'Proceso de registro de entrada del huésped, donde se formaliza el uso de la unidad de alojamiento.',
    },
    {
      termino: '<em>Check-out</em>',
      significado:
        'Proceso de salida del huésped. La habitación pasa a estado "sucio" y requiere prioridad para su limpieza y rotación.',
    },
    {
      termino: 'Círculo de Sinner',
      significado:
        'Modelo técnico que equilibra cuatro factores para una limpieza exitosa: Químico, Mecánico, Térmico y Tiempo.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Proceso de traslación de microorganismos de una zona sucia a una limpia por el uso incorrecto de herramientas de aseo.',
    },
    {
      termino: 'Discrepancia',
      significado:
        'Inconsistencia entre el reporte de estado de habitación de Recepción y la realidad física encontrada por la camarera.',
    },
    {
      termino: 'Embozo',
      significado:
        'Doblez decorativo y técnico de la sábana encimera sobre la manta o edredón en la parte superior de la cama (cabecera).',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Disciplina que busca adaptar el trabajo y las herramientas al cuerpo humano para prevenir lesiones osteomusculares en el personal.',
    },
    {
      termino: 'Ficha de datos de seguridad',
      significado:
        'Documento obligatorio que detalla las propiedades, riesgos y medidas de auxilio de cada producto químico utilizado.',
    },
    {
      termino: 'Muletón / protector',
      significado:
        'Pieza textil acolchada e impermeable que se coloca sobre el colchón para protegerlo de fluidos, manchas y desgaste.',
    },
    {
      termino: '<em>Stay-over</em>',
      significado:
        'Término para referirse a una habitación ocupada por un huésped que permanece una o más noches adicionales en el hotel.',
    },
    {
      termino: '<em>Turndown</em> (Cobertura)',
      significado:
        'Servicio nocturno de cortesía donde se prepara la cama para el descanso, se ajusta la iluminación y se aromatiza la habitación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boullón, R. C. (2006). <em>Planificación del espacio turístico</em>. Trillas.',
      link: '',
    },
    {
      referencia:
        'Cobo, C. (2013). Orientación geográfica: la geoperspectiva integral. <em>Geograficando</em>, <em>9</em>(9).',
      link: '',
    },
    {
      referencia:
        'Comisión Europea, Fondo Monetario Internacional, Organización de Cooperación y Desarrollo Económicos, Naciones Unidas y Banco Mundial. (2008). <em>Sistema de cuentas nacionales 2008</em>. Naciones Unidas.',
      link: '',
    },
    {
      referencia:
        'Coque, M. y Arroyo, E. (2017). <em>Información y atención al visitante</em>. Paraninfo.',
      link: '',
    },
    {
      referencia: 'FONTUR. (s. f.). Glosario. Fondo Nacional de Turismo.',
      link: '',
    },
    {
      referencia:
        'García Silberman, A. (1970). Clasificación de los recursos turísticos. <em>Investigaciones Geográficas</em>, <em>1</em>(3).',
      link: '',
    },
    {
      referencia: 'Luna, N. (s. f.). Comunicación asertiva con turistas. SENA.',
      link: '',
    },
    {
      referencia:
        'Martín, B. (2013, 24 de octubre). Cadena de valor en turismo [Entrada de blog]. Turismo y sostenibilidad.',
      link: '',
    },
    {
      referencia:
        'ONU Turismo. (s. f.). Glosario de términos de turismo. ONU Turismo. (anteriormente Organización Mundial del Turismo, OMT)',
      link: '',
    },
    {
      referencia:
        'Ruano, C. (2012). <em>Promoción y comercialización de productos y servicios turísticos locales</em>. Alianza Editorial.',
      link: '',
    },
    {
      referencia:
        'SENA. (s. f.). El turismo rural en Colombia [Video]. YouTube.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Celmira Pereira Franco',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico SENA - Regional Santander',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
