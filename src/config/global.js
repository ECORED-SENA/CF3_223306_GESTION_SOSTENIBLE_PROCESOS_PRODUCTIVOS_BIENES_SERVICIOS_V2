export default {
  global: {
    componenteFormativo:
      'Ciclo de vida en los procesos de la organización y Economía Circular',
    descripcionCurso:
      'Este componente se centra en identificar las definiciones y teorías de los ecosistemas, cuáles son los modelos económicos, los principios y pensamientos de la economía circular, su marco normativo, incentivos y casos de éxito. Así mismo, conceptos de bioeconomía, tipo de materiales y productos sostenibles, responsabilidad social empresarial, cadena de valor y logística inversa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        titulo: 'Ecosistema',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Límites ecológicos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Relación del hombre con la naturaleza',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Teoría ecológica general del sistema',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Metabolismo de la economía colombiana',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelos Económicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Contexto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Economía de rosquilla',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Economía del Bien Común',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Economía Circular',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Principios, beneficios y modelos de pensamiento de la economía circular',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Marco normativo nacional de economía circular',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Incentivos para la implementación de proyectos de economía circular',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Casos de éxito en la implementación de la economía circular',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Bioeconomía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Producción más limpia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Ahorro y uso eficiente del agua y la energía',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Indicadores de uso de los recursos naturales',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Cálculos de la demanda del agua y energía',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Responsabilidad social empresarial',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cadena de valor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Análisis y etapas del ciclo de vida del producto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Logística de ciclo cerrado y cadena de suministro',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Logística inversa',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Materias primas sostenibles',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Empaques y embalajes',
            hash: 't_5_5',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '1. Ecosistema',
      referencia:
        'Ecología Verde. [EcologíaVerde].(2020, 19 de abril). Definición y Tipos de Ecosistema',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3LeeVif_qSQ',
    },
    {
      tema: '2.2 Economía de rosquilla',
      referencia:
        '<em>Sustainable Brands</em> Buenos Aires. [<em>Sustainable Brands</em> Buenos Aires]. (2019, 26 de noviembre). Kate Raworth, <em>Doughnut Economics</em> | Una economía diseñada para prosperar.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CBaRe0Q5mL8',
    },
    {
      tema: '3.Economia Circular',
      referencia:
        '<em>Pixtin Design. [Pixtin Design].</em> (2018, 28 de marzo). La economía circular en 4 minutos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZEgLWrMJd2M',
    },
    {
      tema: '4.Bioeconomia',
      referencia:
        'Ecología Verde. [Ecología Verde]. (2018, 30 de diciembre). Bioeconomía ¿Qué es la bioeconomía? ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=M6Kl1IKEytM',
    },
    {
      tema: '5.Cadena de valor',
      referencia:
        'Unidad de Desarrollo Productivo [Unidad de Desarrollo Productivo]. (2014, 4 de septiembre). ¿Qué es una cadena de valor?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1TTImw_WLWY',
    },
    {
      tema: '5.3 Logística Inversa',
      referencia:
        '<em>Brain Logistics. [Brain Logistics]</em>. (2021, 3 de noviembre). Logística Inversa.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qwZg7zLS_Ms',
    },
  ],
  glosario: [
    {
      termino: 'Biomimesis',
      significado:
        'Es un campo multidisciplinario en el cual se aplican fundamentos de la ingeniería, la química y la biología a la síntesis de los materiales, sistemas o máquinas con funciones que imiten los procesos biológicos.',
    },
    {
      termino: 'Crecimiento',
      significado:
        'Es una etapa estratégica del ciclo de vida de un producto, en la que se puede evidenciar la competencia a través de su imagen corporativa, relaciones con los clientes y posicionamiento.',
    },
    {
      termino: 'Declive',
      significado:
        'Es la fase final del ciclo de vida del producto y es el resultado de una reducción considerable de las ventas o un estancamiento.',
    },
    {
      termino: 'Ecosistema',
      significado:
        'Es un conjunto de organismos vivos y seres no vivos que se relacionan entre sí y comparten el mismo hábitat.',
    },
    {
      termino: 'Empaque',
      significado: 'Es el que protege, sostiene y conserva la mercancía.',
    },
    {
      termino: 'Gaseosos',
      significado:
        'Son aquellos en los que participa la atmósfera para el transporte de los componentes químicos del ciclo del oxígeno, carbono y nitrógeno.',
    },
    {
      termino: 'Hidrológicos',
      significado:
        'Son aquellos en los que participa el ciclo del agua, funciona de intermediario de transporte para componentes de un lugar a otro.',
    },
    {
      termino: 'Macroeconómicos',
      significado:
        'Identifican fenómenos a nivel macro o general de la economía como la inflación, el nivel de producción, etc.',
    },
    {
      termino: 'Microeconómicos',
      significado:
        'Hace referencia al estudio de mercado en específico o comportamiento de actores a nivel particular o en un mercado.',
    },
    {
      termino: 'Sedimentarios',
      significado:
        'Son aquellos en los que el transporte del componente químico resulta por sedimentación, es decir, por su reducida acumulación e intercambio en la corteza terrestre, en particular, el ciclo del fósforo. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, D. O. (2021). <em>Ciclos Biogeoquímicos - Concepto, importancia, tipos y ejemplos.</em> Enciclopedia Concepto.',
      link: 'https://concepto.de/ciclos-biogeoquimicos/',
    },
    {
      referencia:
        'Colombia productiva. (s.f.). <em>Economía circular: Una forma diferente de hacer negocios sostenibles.</em>',
      link:
        'https://www.colombiaproductiva.com/ptp-capacita/publicaciones/transversales/guia-empresarial-de-economia-circular/200310-cartilla-economia-circular',
    },
    {
      referencia:
        'Grupo Pantoja. (2021). <em>Logística inversa: todo lo que necesitas saber. Pantoja grupo logístico.</em>',
      link:
        'https://grupopantoja.com/logistica-inversa-todo-lo-que-necesitas-saber-2/',
    },
    {
      referencia:
        'Iberdrola S.A. (2021). <em>Bioeconomía: los desafíos de un modelo clave para el desarrollo sostenible.</em> Iberdrola.',
      link: 'https://www.iberdrola.com/sostenibilidad/bioeconomia-que-es',
    },
    {
      referencia:
        'Mediapost. (2019). <em>La “Economía rosquilla”: ¿Somos adictos al crecimiento económico? Ideas imprescindibles</em>.',
      link:
        'https://www.ideasimprescindibles.es/economia-rosquilla-adictos-crecimiento-economico/ ',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2018). <em>Guía para el uso eficiente y ahorro del agua: Una visión colectiva para el uso sostenible y responsable del agua</em>. Gov.co.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/4.-Anexo-4-Guia-Uso-Eficiente.pdf',
    },
    {
      referencia:
        'Negocios Verdes Corpamag. (2020) <em>¿Qué es Responsabilidad Social Empresarial?<em> (RSE COLOMBIA).',
      link:
        'https://corpamag.gov.co/blogs/negociosverdes/index.php/2020/12/06/que-es-responsabilidad-social-empresarial-rse-colombia/',
    },
    {
      referencia:
        'Peña, D. M. (2018). <em>Responsabilidad social empresarial en Colombia, una visión actual frente a Latinoamérica y España</em>. [Universidad Nacional de Colombia].',
      link:
        'https://repositorio.unal.edu.co/bitstream/handle/unal/68720/15445398.2018.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Residuos morlo. (2021). <em>Qué es la economía circular</em>. MeH.',
      link:
        'https://residuosmorlo.com/medio-ambiente/que-es-la-economia-circular/',
    },
    {
      referencia:
        'Soluciones empresariales grupo Trevenque (2021). <em>La cadena de valor: qué es y cómo hacerla</em>. Grupo Trevenque.',
      link:
        'https://solucionesempresariales.trevenque.es/la-cadena-de-valor-que-es-y-como-hacerla/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'May Stefanny González Verjel',
          cargo: 'Experta Temática',
          centro:
            'Centro de la Industria la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fabian Zarate',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Animador y Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
