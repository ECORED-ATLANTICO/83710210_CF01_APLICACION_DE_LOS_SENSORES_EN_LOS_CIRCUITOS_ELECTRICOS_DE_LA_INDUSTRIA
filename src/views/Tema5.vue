<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Sistemas electrónicos básicos de control

    .bloque-texto-g.bg-color-04.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez capturadas las variables mediante sensores, procesadas por los transductores y acondicionadas las señales, es posible utilizar esta información para realizar acciones básicas de control.

    p.mb-3 En los procesos industriales, los sistemas electrónicos permiten recibir información proveniente de los sensores, analizar las condiciones del proceso y generar una respuesta de acuerdo con los valores establecidos.
    p.mb-3 El material de formación plantea esta etapa como una aproximación a las aplicaciones de la automatización industrial, mediante circuitos básicos que permiten realizar pequeñas acciones de control.
    p.mb-4 La relación general puede representarse de la siguiente manera:

    .bg-color-02.p-3.p-md-4.br-15.mb-5.d-flex.align-items-center.max-cont-md
      i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
      p.mb-0.fw-bold Variable &rarr; sensor &rarr; señal &rarr; acondicionamiento &rarr; sistema electrónico &rarr; acción de control

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Electricidad y electrónica en los sistemas de control

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-9.col-md-12.mb-4.mb-lg-0
        p.mb-3 Los sistemas electrónicos de control requieren elementos eléctricos y electrónicos que permitan recibir, procesar y modificar señales.
        p.mb-0 La electricidad proporciona las condiciones necesarias para el funcionamiento de los circuitos, mientras que la electrónica permite procesar señales y establecer respuestas de acuerdo con las condiciones determinadas.

      .col-lg-3.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2
          h5.text-bold.mb-2 Figura 5.
          span Señal
        img(src="@/assets/curso/tema5/img2.png", data-aos="zoom-in").d-none.d-lg-block
        img(src="@/assets/curso/tema5/img02-m.png", data-aos="zoom-in").d-lg-none
        figcaption Nota. SENA, (2026).

    .row.mb-3.align-items-center
      .col-lg-6.mb-3.mb-lg-0
        p.mb-2 Dentro de este contexto, los sensores y transductores proporcionan información sobre el proceso y los circuitos electrónicos utilizan dicha información para generar una respuesta.
      .col-lg-6
        .bg-color-02.p-3.p-md-4.br-15.d-flex.align-items-center.max-cont-md
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Información del proceso &rarr; circuito electrónico &rarr; respuesta
        
    p.mb-4 La relación puede expresarse así:

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Amplificador operacional

    .row.mb-4.justify-content-center
      .col-lg-6.mb-4.mb-lg-0
        p.mb-3 El amplificador operacional es un dispositivo electrónico que comúnmente se encuentra en forma de circuito integrado o chip.

        .bg-color-02.p-3.p-md-4.br-15.mb-3.d-flex.align-items-center
          .row.align-items-center.mb-0
            .col-lg-8
              span.mb-0 Para su funcionamiento como comparador se consideran dos entradas:
            .col-lg-4
              span.fw-bold.ms-lg-2 V1 y V2

        .row.align-items-center.mb-4.g-3
          .col-sm-4
            .bg-color-01.p-4.br-15.d-flex.align-items-center.justify-content-between
              span.mb-0 y una salida:
              span.fw-bold.ms-2 VOUT
          .col-sm-8
            p.mb-0 Además, el dispositivo requiere una alimentación positiva VS+ y una alimentación negativa VS-. La estructura básica puede representarse como:

        figure.mt-3
          img(src="@/assets/curso/tema5/img03.png", alt="")

      .col-lg-6.mb-0.mb-lg-0
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-contenido.mb-4
            h5.text-bold.mb-2 Figura 5.
            span Señal
          img.mb-3(data-aos="fade-up", src="@/assets/curso/tema5/img02.png", alt="").mx-auto
          figcaption Nota. SENA, (2026).
        p.mt-3 En esta aplicación, el amplificador operacional permite comparar dos valores de tensión y generar una salida de acuerdo con la relación existente entre ellos.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Amplificador operacional como comparador

    .row.mb-5.align-items-center.justify-content-center
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        .bg-color-08.p-3.br-15.mb-3
          .p-2.br-12.mb-2(style="border: 2px solid #74A2F2;").br-15
            .row.justify-content-center.mb-0.align-items-center
              .col-10
                p.mb-0 Cuando el amplificador operacional se utiliza como comparador, la salida depende de la relación entre V1 y V2. Si:
              .col-2
                p.mb-0.text-bold V1 > V2

          p.mb-2 el voltaje de salida será igual al de la alimentación positiva:
          p.mb-0.fw-bold VOUT = VS+
            span.fw-normal.ms-4 Si:
            span.fw-bold.ms-2 V1 < V2

        
        .bg-color-02.p-3.br-15
          .p-3.br-12.mb-2(style="border: 2px solid #049767;").br-15
            .row.justify-content-center.mb-0.align-items-center
              .col-8
                p.mb-0  el voltaje de salida será igual al de la alimentación negativa:
              .col-4
                p.mb-0.text-bold VOUT = VS-
                
          p.mb-0.d-flex.align-items-center
            span.me-2 Si:
            span.fw-bold.me-3 V1 = V2
            span.me-3 el voltaje de salida será:
            span.fw-bold VOUT = 0

      .col-lg-2.col-md-6.mb-4.mb-lg-0.text-center.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema5/img04.png", data-aos="zoom-in").mx-auto

      .col-lg-4.col-md-12.mb-0.mb-lg-0
        p.mb-3 La relación puede organizarse de la siguiente manera:
        .bg-color-01.p-4.br-15.h-100
          .row.mb-2
            .col-6
              span Condición
            .col-6
              span Salida
          .row.mb-1
            .col-6.fw-bold V1 > V2
            .col-6 VOUT = VS+
          .row.mb-1
            .col-6.fw-bold V1 < V2
            .col-6 VOUT = VS-
          .row.mb-3
            .col-6.fw-bold V1 = V2
            .col-6 VOUT = 0

          p.mb-0 De esta manera, el amplificador operacional puede utilizarse para establecer una condición de decisión dentro de un circuito electrónico.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Comparación de señales

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img05.png", data-aos="zoom-in")

      .col-lg-9.col-md-12
        p.mb-1 La función de comparación permite determinar si una señal se encuentra por encima, por debajo o en el mismo nivel que otra señal de referencia.
        p.mb-3 Por ejemplo, si una señal proveniente de un sensor representa la temperatura de un proceso y otra señal representa el valor de referencia, el comparador puede establecer una condición de acuerdo con la relación entre ambas.

        p.mb-3 Conceptualmente:

        .bg-color-02.p-3.p-md-4.br-15.mb-4.d-flex.align-items-center.max-cont-md
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Señal del sensor &rarr; comparación con referencia &rarr; respuesta

        p.mb-0 Esta estructura permite transformar la información proveniente del sensor en una condición que posteriormente puede utilizarse para activar o desactivar un elemento.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Compuertas lógicas

    p.mb-2 Una compuerta lógica es un circuito electrónico que recibe una o más entradas y genera una salida de acuerdo con una determinada condición lógica.
    p.mb-4 La información puede representarse mediante valores binarios:

    .row.mb-5.align-items-center
      .col-lg-6.col-md-12.mb-3.mb-lg-0
        .row.g-3
          .col-sm-6
            .bg-color-01.p-3.br-15.text-center
              p.mb-0.fw-bold 0 &rarr; condición no activa
          .col-sm-6
            .bg-color-01.p-3.br-15.text-center
              p.mb-0.fw-bold 1 &rarr; condición activa
      .col-lg-6.col-md-12
        p.mb-0 La salida depende de la combinación de los estados presentes en las entradas. Esta lógica permite establecer relaciones entre diferentes condiciones de un proceso.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Lógica aplicada a un proceso

    .row.mb-5.justify-content-center.align-items-stretch
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        p.mb-2 Supóngase que un sistema debe activar una salida cuando se cumplen determinadas condiciones.
        p.mb-2 Cada condición puede representarse mediante una señal binaria.
        p.mb-3 Por ejemplo:

        .row.g-3.align-items-center.mb-3
          .col-sm-5
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold Sensor 1 &rarr; 1
          .col-sm-7
            p.mb-0 indica que la primera condición se encuentra activa.

        .row.g-3.align-items-center.mb-0
          .col-sm-5
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold Sensor 2 &rarr; 1
          .col-sm-7
            p.mb-0 indica que la segunda condición también se encuentra activa.

      .col-lg-6.col-md-12
        .bg-color-0.p-4.br-15.h-100
          p.mb-3 El circuito lógico puede determinar si ambas condiciones deben cumplirse para generar una salida
          p.mb-2 La estructura general sería:
          p.mb-3.fw-bold Entrada 1 + Entrada 2 &rarr; lógica de decisión &rarr; salida
          p.mb-0 Esta forma de procesamiento constituye uno de los fundamentos de los sistemas electrónicos básicos de control.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto El relé

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-9.col-md-12.mb-0.mb-lg-0.order-2.order-lg-1
        p.mb-2 El relé es un dispositivo que permite utilizar una pequeña corriente para controlar el paso de corriente a través de unos contactos.
        p.mb-3 El material de formación describe el relé sencillo como un dispositivo constituido por un electroimán y un interruptor de contactos. Cuando circula una pequeña corriente por la bobina, el núcleo se imanta y atrae el inducido, provocando el movimiento de los contactos.
        p.mb-3 Su funcionamiento puede representarse:

        .bg-color-02.p-3.p-md-4.br-15.mb-3.d-flex.align-items-center.max-cont-md
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Señal de control &rarr; bobina &rarr; electroimán &rarr; movimiento del contacto &rarr; circuito controlado

      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img06.png", data-aos="zoom-in")

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Funcionamiento básico del relé

    .row.mb-5.align-items-center.justify-content-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img07.png", data-aos="zoom-in").mx-auto

      .col-lg-9.col-md-12
        p.mb-1 Cuando no circula corriente por la bobina, los contactos permanecen en su estado inicial.
        p.mb-2 Cuando se aplica corriente a la bobina:

        .bg-color-02.p-3.p-md-4.br-15.mb-lg-2.mb-4.d-flex.align-items-center.max-cont-md
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Corriente &rarr; campo magnético &rarr; movimiento del inducido &rarr; cambio de contactos

        p.mb-0 El cambio de estado de los contactos permite controlar otro circuito.
        p.mb-0 Por esta razón, el relé puede utilizarse como elemento de salida en aplicaciones donde una señal electrónica debe generar una acción.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Relación entre sensor, comparador y relé

    .row.mb-4.align-items-stretch
      .col-lg-7.mb-3.mb-lg-0
        p.mb-2 Los elementos estudiados pueden integrarse en una aplicación básica.
        p.mb-2 Un sensor obtiene información sobre una variable.
        p.mb-0 La señal puede ser comparada con un valor de referencia mediante un amplificador operacional.
      .col-lg-5
        p.mb-2 La salida del comparador puede utilizarse como señal de control.
        p.mb-2 Esta señal puede activar un relé.
        p.mb-0 El relé puede modificar el estado de otro circuito.

    .bg-color-02.p-3.p-md-4.br-15.mb-5.d-flex.align-items-center.max-cont-md
      span.me-3.text-nowrap La secuencia puede representarse:
      i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
      p.mb-0.fw-bold Variable &rarr; Sensor &rarr; Señal &rarr; Comparador &rarr; Señal de control &rarr; Relé &rarr; Acción

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 La secuencia puede representarse:

    .row.mb-4.mb-lg-5.align-items-stretch
      .col-lg-6.mb-4.mb-lg-0
        .bg-color-0.p-4.br-15.h-100
          p.mb-3 Los sistemas electrónicos digitales requieren representar la información mediante sistemas numéricos.
          p.mb-3 El sistema decimal utiliza diez símbolos:
          .row.align-items-center.mb-0
            .col-sm-5
              .bg-color-02.p-3.br-15.text-center.mb-0.max-cont-md
                p.mb-0.fw-bold 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9.
            .col-sm-5
              p.mb-0 El sistema binario utiliza únicamente dos símbolos:
            .col-sm-2
              .bg-color-02.p-3.br-15.text-center.max-cont-md.mb-0
                p.mb-0.fw-bold 0 y 1.

      .col-lg-6
        p.mb-3 El sistema binario es fundamental para representar los estados utilizados por los circuitos digitales.
        p.mb-3 Por ejemplo:

        .row.g-3.mb-3
          .col-sm-6
            .bg-color-01.p-3.br-15.text-center
              p.mb-0.fw-bold 0 &rarr; estado lógico bajo
          .col-sm-6
            .bg-color-01.p-3.br-15.text-center
              p.mb-0.fw-bold 1 &rarr; estado lógico alto

        p.mb-0 La representación binaria permite que las señales puedan ser interpretadas y procesadas por los sistemas electrónicos digitales.

    .row.mb-4.align-items-stretch
      .col-lg-6.mb-4.mb-lg-0.col-md-12
        .container
          .titulo-con-imagen.mb-4(data-aos="fade-right")
            .titulo-con-imagen__fondo_2
              h3.titulo-con-imagen__texto_2 Conversión entre decimal y binario

        p.mb-4 Cada posición dentro de un número binario representa una potencia de dos.

        figure.mb-2
          img(src="@/assets/curso/tema5/img12.svg")

        p.mb-0 La conversión entre sistemas numéricos permite interpretar los valores que se utilizan dentro de los sistemas electrónicos.
        //- .bg-color-0.p-4.br-15.h-100
        //-   .d-flex.align-items-center.mb-3
        //-     .px-3.py-2.bg-white.br-12(style="border: 2px solid #0F8268;")
        //-       span.fw-bold 101₂
        //-     span.ms-3 corresponde a:

        //-   p.mb-2 Por ejemplo:

        //-   .row.align-items-center
        //-     .col-sm-7
        //-       p.mb-1 1 &times; 2² + 0 &times; 2¹ + 1 &times; 2⁰
        //-       p.mb-1 = 4 + 0 + 1
        //-       p.mb-0 = 5₁₀
        //-     .col-sm-5
        //-       .p-3.br-15.bg-white.text-center(style="border: 2px solid #0F8268;")
        //-         span.fw-bold 101₂ = 5₁₀

      .col-lg-6.col-md-12
        .container
          .titulo-con-imagen.mb-4(data-aos="fade-right")
            .titulo-con-imagen__fondo_2
              h3.titulo-con-imagen__texto_2 Medidas análogas y códigos binarios

        p.mb-3 Una variable física puede generar una medida análoga que posteriormente debe representarse mediante un código digital.
        p.mb-2 Para ello, el sistema puede utilizar un conversor análogo digital.
        p.mb-2 El material de formación establece que un conversor ADC toma valores analógicos de tensión y los convierte en códigos binarios.
        p.mb-3 La secuencia es:

        .bg-color-02.p-3.p-md-4.br-15.d-flex.align-items-center.max-cont-md.mb-2
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Medida análoga &rarr; ADC &rarr; código binario

        p.mb-0 Este proceso permite que la información obtenida mediante un sensor pueda ser interpretada por un sistema digital.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Convertidor análogo digital

    .bg-full-width.bg-fondo-010.px-5.py-4
      img(src="@/assets/curso/tema5/img08.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text El conversor análogo digital, identificado como ADC, constituye el enlace entre una señal análoga y su representación digital. Su función consiste en tomar un valor analógico de tensión y convertirlo en un código binario.

    .row.mb-5.align-items-center
      .col-lg-3.col-md-12.mb-3.mb-lg-0
        p.mb-0 La estructura puede representarse así:
      .col-lg-6.col-md-12.mb-3.mb-lg-0
        .bg-color-02.p-3.br-15.d-flex.align-items-center
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Señal análoga &rarr; ADC &rarr; código binario &rarr; sistema digital
      .col-lg-3.col-md-12
        p.mb-0 La conversión permite trabajar con la información de una variable dentro de un sistema digital.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Integración del sistema electrónico básico de control

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img09.png", data-aos="zoom-in")
      .col-lg-8.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-4 col-md-6 col-sm-12 p-2")
          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 1
            p.mb-0 Los elementos estudiados pueden integrarse en una cadena de control.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 2
            p.mb-0 Una variable física es captada por un sensor.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 3
            p.mb-0 El sensor genera una señal.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 4
            p.mb-0 El transductor puede adaptar dicha señal.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 5
            p.mb-0 Cuando la información es análoga, puede convertirse a un código binario mediante un ADC.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 6
            p.mb-0 El sistema electrónico puede comparar o procesar la información.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 7
            p.mb-0 Se genera una señal de control o decisión.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 8
            p.mb-0 Finalmente, una salida puede generar una acción mediante un dispositivo como el relé.

    p.mb-3 La estructura general puede representarse:

    .bg-color-02.p-3.p-md-4.br-15.mb-4.d-flex.align-items-center.max-cont-md
      i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
      p.mb-0.fw-bold Variable física &rarr; sensor &rarr; señal &rarr; acondicionamiento &rarr; ADC &rarr; Código binario &rarr; comparación / procesamiento &rarr; relé &rarr; acción

    p.mb-5 Esta integración permite comprender cómo los diferentes elementos estudiados pueden participar en un sistema electrónico básico de control.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Aplicación de un sistema básico de control

    p.mb-4 Considérese un sistema en el que se requiere controlar el funcionamiento de un elemento cuando una variable supera un valor de referencia.

    .row.mb-4.align-items-stretch
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-0.p-4.br-15.h-100
          p.mb-1 El sensor capta la variable.
          p.mb-1 La señal obtenida es enviada al sistema electrónico.
          p.mb-0 La señal puede ser comparada con el valor de referencia.
      .col-lg-6
        .bg-color-01.p-4.br-15.h-100
          p.mb-1 Cuando se cumple la condición establecida, el sistema genera una señal de salida.
          p.mb-1 Esta señal puede activar un relé.
          p.mb-0 El relé modifica el estado del circuito controlado.

    .row.mb-5.align-items-center
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-02.p-3.p-md-4.br-15.d-flex.align-items-center.max-cont-md
          span.me-3.text-nowrap La secuencia puede resumirse así:
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Captación &rarr; comparación &rarr; decisión &rarr; activación &rarr; acción
      .col-lg-4
        p.mb-0 Este principio constituye una aplicación básica de la utilización de sensores en sistemas de control.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Automatización industrial

    .container
      .row.mb-4.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.mb-4.mb-lg-0.col-md-12.order-1.order-lg-1.p-0.p-lg-2.p-xl-0
          figure
            img(src="@/assets/curso/tema5/img10.png", data-aos="zoom-in")
        .col-lg-7.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0.p-lg-3.p-xl-4.p-3
          p.mb-0 La automatización industrial integra elementos de medición, adquisición, procesamiento y control para permitir que determinadas operaciones se realicen de manera automática.

    .row.mb-4.align-items-center
      .col-lg-6.mb-3.mb-lg-0
        p.mb-0 Los sensores proporcionan información sobre el proceso.
        p.mb-0 Los sistemas electrónicos procesan dicha información.
        p.mb-0 Los elementos de salida ejecutan las acciones correspondientes.
        p.mb-0 La estructura general puede expresarse como:
      .col-lg-6
        .bg-color-02.p-3.p-md-4.br-15.d-flex.align-items-center.max-cont-md
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Sensar &rarr; procesar &rarr; decidir &rarr; actuar

    p.mb-3 Esta secuencia constituye una base para comprender sistemas de automatización de mayor complejidad.
    p.mb-5 La automatización industrial y la instrumentación industrial forman parte de los conocimientos de concepto establecidos en el material de formación para este Resultado de Aprendizaje.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Potencia y control

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-9.col-md-12.mb-4.mb-lg-0
        p.mb-1 En un sistema de control es importante diferenciar la señal utilizada para tomar una decisión de la energía necesaria para ejecutar una acción.
        p.mb-1 Una señal de control puede tener características que no sean suficientes para alimentar directamente un elemento de mayor demanda de potencia.
        p.mb-1 Por esta razón, pueden utilizarse dispositivos de salida que permitan controlar otro circuito.
        p.mb-2 El relé constituye un ejemplo de esta relación, ya que una corriente aplicada a su bobina produce el movimiento de sus contactos y permite controlar el paso de corriente por otro circuito.
        p.mb-0 La relación funcional puede representarse:

      .col-lg-3.col-md-8.mb-0.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img11.png", data-aos="zoom-in")

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-7.col-md-12.mb-0
        .bg-color-02.p-3.p-md-4.br-15.d-flex.align-items-center
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Señal de control &rarr; dispositivo de salida &rarr; circuito de potencia &rarr; acción

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
