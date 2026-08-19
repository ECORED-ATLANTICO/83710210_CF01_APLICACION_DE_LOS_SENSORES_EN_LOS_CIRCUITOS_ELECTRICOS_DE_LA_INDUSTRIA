<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Variables y señales


    .bg-full-width.bg-fondo-010.px-5.py-4
      img(src="@/assets/curso/tema3/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text En los procesos industriales, la información obtenida mediante los sensores y transductores debe ser representada mediante señales que puedan ser interpretadas por los sistemas electrónicos. Por esta razón, después de estudiar la captación de variables, es necesario comprender cómo se representan y diferencian las señales que transportan la información del proceso.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-9.col-md-12.mb-0.mb-lg-0.order-2.order-lg-2
        p.mb-2 En un sistema de adquisición de datos intervienen el sensor, el transductor y el sistema electrónico. La función de estos elementos permite establecer una relación entre la magnitud física presente en el proceso y la información que posteriormente será procesada. 
        p.mb-2 La relación general puede expresarse de la siguiente manera:

        .container
          .row.align-items-center.bg-color-02.p-4.mb-3.br-15.max-cont-md
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Variable física → sensor → transductor → señal → sistema electrónico

        p.mb-0 Comprender esta secuencia permite diferenciar una variable de una señal y reconocer las características de las señales análogas y digitales.

      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in")
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Variables

    .row.mb-4.justify-content-center.align-items-stretch
      .col-lg-7.mb-4.mb-lg-0.order-lg-1
        p.mb-3 Una variable es una magnitud o condición del proceso que puede cambiar y cuya información resulta de interés para el sistema. 
        p.mb-3 En una aplicación industrial pueden existir diferentes variables, entre ellas:

        .bg-color-05-degrade.p-3.br-15.mb-3
          .row
            .col-lg-3.col-md-6.col-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-2 
                  i.fas.fa-solid.fa-square.me-2
                  span Temperatura
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Presión

            .col-lg-3.col-md-6.col-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-2 
                  i.fas.fa-solid.fa-square.me-2
                  span Posición
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Desplazamiento

            .col-lg-3.col-md-6.col-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-2 
                  i.fas.fa-solid.fa-square.me-2
                  span Velocidad
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Nivel

            .col-lg-3.col-md-6.col-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Iluminación

        p.mb-0 Cuando una variable es captada por un sensor, la información obtenida debe representarse mediante una señal que pueda ser utilizada por el sistema electrónico.

      .col-lg-5.mb-4.mb-lg-0.order-lg-2.col-md-12
        .bg-color-0.p-4.br-15.h-100
          p.mb-4 Por ejemplo, en un proceso de calentamiento, la temperatura constituye la variable que se desea conocer.
          
          .row.align-items-center.bg-color-02.p-4.br-15.mb-4
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.fw-bold Temperatura &rarr; sensor &rarr; señal

          p.mb-0 La señal constituye entonces la representación de la información asociada con la variable.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Variable análoga

    .bloque-texto-g.bg-color-01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una variable análoga puede presentar diferentes valores dentro de un intervalo determinado. En un proceso físico, muchas variables presentan un comportamiento continuo. La temperatura, por ejemplo, puede aumentar progresivamente desde un valor hasta otro sin limitarse necesariamente a valores enteros.

    p.mb-4 Puede presentarse una secuencia como:

    .row.mb-5.justify-content-center.align-items-stretch
      .col-lg-5.mb-4.mb-lg-0
        .row.align-items-center.bg-color-02.p-3.p-md-4.br-15.h-100
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.fw-bold 20 °C &rarr; 20,5 °C &rarr; 21 °C &rarr; 21,5 °C &rarr; 22 °C

      .col-lg-7.mb-0.mb-lg-0
        .bg-color-0.p-3.p-md-4.br-15.h-100.d-flex.align-items-center
          p.mb-0 La variación de la magnitud se refleja en la información que debe ser captada y posteriormente procesada.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Señal

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img04.png", data-aos="zoom-in")

      .col-lg-8.mb-0.mb-lg-0
        p.mb-2 Una señal corresponde a la representación de información relacionada con una variable.
        p.mb-2 En un sistema de adquisición, el sensor capta una condición física y genera una señal que puede ser utilizada posteriormente por el sistema electrónico.
        p.mb-3 La señal puede representar diferentes características de la variable dependiendo del tipo de sensor y del sistema utilizado.

        .row.align-items-center.bg-color-02.p-4.br-15.mb-0.max-cont-md
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.fw-bold Variable física &rarr; captación &rarr; señal

    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-01.br-15.mb-5
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-flex.order-lg-2
              img(src="@/assets/curso/tema1/img08.svg").mx-auto
            .col-lg-8.order-1.order-lg-1.p-4
              p.mb-1 <b>Por ejemplo:</b>
              p.mb-1.text-bold Temperatura → sensor de temperatura → señal relacionada con la temperatura
              p.mb-0 La señal obtenida constituye la información que posteriormente puede ser procesada.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Señal análoga
    

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-xl-3.col-md-12.mb-4.mb-lg-4.mb-xl-0
        p.mb-3 Una señal análoga presenta valores que pueden variar de manera continua dentro de un intervalo.
        p.mb-0 Cuando una variable física cambia, la señal asociada puede cambiar de manera proporcional o relacionada con dicha variación.

      .col-lg-12.col-xl-9.col-md-12.mb-0.mb-lg-0
        .bg-color-0.p-4.br-15
          .row.align-items-center.justify-content-around
            .col-lg-4.col-md-12.mb-3.mb-lg-0
              p.mb-0 Por ejemplo, si un sensor produce una señal de tensión relacionada con la temperatura, diferentes temperaturas pueden generar diferentes valores de tensión:

            .col-lg-3.col-md-12.mb-3.mb-lg-0
              .p-3.br-15(style="border: 2px solid #5C84CE; background-color: #EBF7FF;")
                .row.text-start.g-2
                  .col-7
                    p.fw-bold.mb-2 Temperatura
                    p.mb-1 20 °C
                    p.mb-1 25 °C
                    p.mb-1 30 °C
                    p.mb-0 35 °C
                  .col-5
                    p.fw-bold.mb-2 Señal
                    p.mb-1 1,0 V
                    p.mb-1 1,5 V
                    p.mb-1 2,0 V
                    p.mb-0 2,5 V

            .col-lg-3.col-md-12.mb-3.mb-lg-0
              p.mb-0 La señal cambia a medida que cambia la variable.

            .col-lg-2.col-md-6.text-center.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img12.svg", style="max-width: 85px;").mx-auto

    .row.align-items-center.mb-4.justify-content-center
      .col-lg-8.col-md-12
        .row.justify-content-center.mb-0
          .titulo-sexto.color-acento-contenido.mb-4
            h5.text-bold.mb-2 Figura 2.
            span Señal
          img.mb-3(data-aos="fade-up", src="@/assets/curso/tema3/img13.svg", alt="").mx-auto.d-none.d-lg-block
          img.mb-3(data-aos="fade-up", src="@/assets/curso/tema3/img14.svg", alt="").mx-auto.d-lg-none
          figcaption Nota. SENA, (2026).
    
    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Señal digital


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img05.png", data-aos="zoom-in")

      .col-lg-9.col-md-12.mb-0.mb-lg-0
        p.mb-2 Una señal digital representa información mediante valores discretos. 
        p.mb-2 A diferencia de una señal análoga, que puede presentar diferentes valores dentro de un intervalo, una señal digital utiliza estados definidos por el sistema.
        p.mb-2 En aplicaciones electrónicas es habitual relacionar estos estados con niveles lógicos.
        p.mb-3 En un sistema digital básico pueden encontrarse dos estados:

        .row.mb-3.g-3
          .col-sm-6
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold 0 &rarr; nivel lógico bajo
          .col-sm-6
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold 1 &rarr; nivel lógico alto

        p.mb-0 La señal puede cambiar entre estos estados de acuerdo con la condición que se desea representar.


    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Señal binaria

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        .bg-color-0.p-4.br-15.h-100
          p.mb-3 La señal binaria utiliza dos estados para representar información. Estos estados pueden representarse mediante:
          
          .bg-color-02.p-3.br-15.text-center.mb-2.max-cont-md
            p.mb-0.fw-bold.fs-5 0 y 1

          p.mb-0 La representación binaria resulta fundamental para los sistemas electrónicos digitales porque permite expresar diferentes condiciones mediante combinaciones de estos dos valores.

      .col-lg-6.mb-0.mb-lg-0
        .row.align-items-center.mb-4
          .col-auto
            img(src="@/assets/curso/tema3/img17.svg", style="max-width: 85px;").mx-auto
          .col
            p.mb-0 Por ejemplo, una señal puede utilizarse para representar la presencia o ausencia de una pieza:

        .row.mb-4.g-3
          .col-sm-6
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold 0 &rarr; pieza ausente
          .col-sm-6
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold 1 &rarr; pieza presente

        p.mb-0 De esta manera, una condición física puede convertirse en información que el sistema electrónico puede interpretar.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Nivel lógico

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-9.col-md-12.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-2 Los sistemas digitales utilizan niveles de tensión para representar los estados lógicos.
        p.mb-3 De manera conceptual:

        .row.mb-4.g-3
          .col-sm-auto
            .bg-color-02.p-3.br-15.text-center.max-cont-md
              p.mb-0.fw-bold Nivel lógico bajo &rarr; 0
          .col-sm-auto
            .bg-color-02.p-3.br-15.text-center.max-cont-md
              p.mb-0.fw-bold Nivel lógico alto &rarr; 1

        p.mb-3 La correspondencia exacta entre tensión y estado lógico depende del sistema electrónico utilizado. Por esta razón, un nivel lógico no debe entenderse únicamente como un valor abstracto de 0 o 1, sino como un estado representado eléctricamente dentro de un circuito.

        p.mb-0 Esta relación será especialmente importante al estudiar posteriormente las compuertas lógicas y los circuitos electrónicos básicos.

      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img06.png", data-aos="zoom-in")



    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Señales análogas y digitales

    p.mb-4 La diferencia entre ambos tipos de señal puede sintetizarse de la siguiente manera:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 4.
          span Señales análogas y digitales
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Característica
                th Señal análoga
                th Señal digital
            tbody
              tr
                td.fw-bold Representación
                td Continua
                td Discreta
              tr
                td.fw-bold Valores
                td Puede presentar diferentes valores dentro de un intervalo
                td Utiliza estados definidos
              tr
                td.fw-bold Ejemplo
                td Variación continua de una tensión
                td 0 y 1
              tr
                td.fw-bold Aplicación
                td Representación de variables físicas
                td Procesamiento electrónico y lógico



    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-01.br-15.mb-5
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-flex.order-lg-2
              img(src="@/assets/curso/tema1/img08.svg").mx-auto
            .col-lg-8.order-1.order-lg-1.p-4
              p.mb-1 <b>Por ejemplo</b>
              p.mb-1 Un sensor puede captar una variación de temperatura y generar una señal análoga. Posteriormente, esta señal puede ser convertida en información digital para que un sistema electrónico pueda procesarla.
              p.mb-0 La secuencia sería: 
              p.mb-0.fw-bold Temperatura → sensor → señal análoga → conversión → señal digital → procesamiento

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Conversión de información análoga a digital

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img18.png", data-aos="zoom-in")

      .col-lg-8.col-md-12.mb-0.mb-lg-0
        p.mb-1 Los sistemas electrónicos pueden requerir que una señal análoga sea convertida a una representación digital.
        p.mb-1 Para esta función se utiliza un conversor análogo digital (ADC).
        p.mb-2 El material de formación lo describe como un circuito que toma valores analógicos de tensión y los convierte en códigos binarios.
        p.mb-3 La función puede representarse de la siguiente manera:

        .row.align-items-center.bg-color-02.p-4.br-15
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.fw-bold Señal análoga &rarr; Conversor análogo-digital &rarr; Código binario &rarr; Sistema electrónico
    
    p.mb-5 Por ejemplo, una señal de tensión proveniente de un sensor puede ser recibida por el conversor y transformada en un código binario que posteriormente pueda ser interpretado por el sistema electrónico.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Sistemas numéricos

    p.mb-4 La representación digital requiere utilizar sistemas numéricos que permitan expresar información mediante códigos.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        .bg-color-0.p-4.br-15.h-100
          p.mb-3 Dentro de los sistemas electrónicos digitales, el sistema binario tiene especial importancia porque utiliza únicamente dos valores:
          
          .bg-color-02.p-3.br-15.text-center.mb-2.max-cont-md
            p.mb-0.fw-bold.fs-5 0 y 1

          p.mb-2 El sistema decimal, por su parte, utiliza diez símbolos:
          
          .bg-color-02.p-3.br-15.text-center.mb-2.max-cont-md
            p.mb-0.fw-bold.fs-5 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9

      .col-lg-5.mb-0.mb-lg-0
        p.mb-3 La relación entre ambos sistemas permite representar un mismo valor mediante diferentes códigos.

        .row.mb-4.g-3
          .col-sm-6
            .bg-color-02.p-3.br-15.text-center
              p.mb-0.fw-bold Decimal 5 = Binario 101

        p.mb-2 La conversión entre sistemas numéricos permite interpretar la información que circula dentro de los sistemas digitales.

        p.mb-0 El material de formación relacionado con la implementación de sistemas electrónicos básicos incluye los sistemas numéricos como parte de su desarrollo. 




    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Representación binaria

    .row.mb-5.justify-content-center.align-items-stretch
      .col-lg-7.mb-4.mb-lg-0
        .row.mb-3.align-items-center
          .col-auto
            p.mb-0 El sistema binario utiliza únicamente dos dígitos:
          .col-auto
            .bg-color-02.py-2.px-4.br-15
              p.mb-0.fw-bold 0 y 1

        .bg-color-0.p-4.br-15.mb-0
          p.mb-1 Cada posición de un número binario representa una potencia de dos.
          p.mb-3 Por ejemplo:

          .d-flex.align-items-center.mb-4
            .bg-color-02.py-2.px-4.br-15.me-3
              p.mb-0.fw-bold
                | 101
                sub 2
            p.mb-0 puede desarrollarse como:

          .row.align-items-center.g-3.mb-0
            .col-md-6
              .p-3.br-15.text-center(style="border: 2px solid #0F8268;")
                p.mb-1.fw-bold
                  | 1 &times; 2
                  sup 2
                  |  + 0 &times; 2
                  sup 1
                  |  + 1 &times; 2
                  sup 0
                p.mb-1.fw-bold = 4 + 0 + 1
                p.mb-0.fw-bold
                  | = 5
                  sub 10
            .col-md-auto.text-center
              p.mb-0 Por tanto:
            .col-md
              .p-4.br-15.text-center(style="border: 2px solid #0F8268;")
                p.mb-0.fw-bold.fs-5
                  | 101
                  sub 2
                  |  = 5
                  sub 10

      .col-lg-5.mb-4.mb-lg-0
        figure.mb-3
          img(src="@/assets/curso/tema3/img08.png", data-aos="zoom-in")
        p.mb-0 Esta forma de representación resulta fundamental para comprender cómo una señal o una medida puede convertirse en un código que posteriormente será interpretado por un sistema electrónico.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Relación entre una medida y un código binario

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img09.png", data-aos="zoom-in")

      .col-lg-8.col-md-12.mb-0.mb-lg-0
        p.mb-2 Cuando una variable análoga es captada por un sensor, la información puede representarse mediante una señal eléctrica.
        p.mb-2 Si el sistema requiere procesar esta información digitalmente, la señal debe convertirse a un código binario.
        p.mb-3 La secuencia puede expresarse así:

        .row.align-items-center.bg-color-02.p-4.br-15.mb-3
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.fw-bold Variable física &rarr; Sensor &rarr; Señal análoga &rarr; Conversor análogo digital &rarr; Código binario &rarr; Procesamiento electrónico

        p.mb-2 Este proceso permite comprender la relación entre la variable física, la señal y la información digital.
        p.mb-0.fw-bold Ejemplo de conversión

    .bg-full-width.bg-fondo-010.px-5.py-4
      img(src="@/assets/curso/tema3/img10.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Supóngase que un sistema de adquisición recibe una señal análoga correspondiente a una determinada medida. El conversor análogo digital toma el valor de tensión recibido y lo representa mediante un código binario. De esta manera, el sistema puede trabajar con información digital en lugar de procesar directamente la señal análoga.

    .row.mb-5.align-items-center
      .col-lg-6.mb-3.mb-lg-0
        .row.align-items-center.bg-color-02.p-4.br-15
          .col-12.mb-2
            span.fw-bold El principio general es:
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.fw-bold Valor análogo &rarr; conversión &rarr; código binario

      .col-lg-6
        p.mb-0 La cantidad de valores digitales que puede representar el conversor depende de su resolución. Por ello, los conceptos estudiados anteriormente sobre medida, resolución y exactitud se relacionan directamente con la adquisición de señales.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Señales en un sistema de adquisición

    .row.mb-4.align-items-center
      .col-auto.d-none.d-lg-block
        img(src="@/assets/curso/tema3/img11.svg", style="max-width: 90px;").mx-auto
      .col
        p.mb-0 Los sensores y transductores permiten obtener información de las variables del proceso. Sin embargo, para que esta información pueda ser utilizada por un sistema electrónico, debe presentar características compatibles con el sistema de adquisición.
        p.mb-2 El material de formación establece que los elementos básicos de un sistema de medición son el sensor, el transductor y el sistema electrónico.
        p.mb-0 Por tanto, puede establecerse la siguiente relación:



    .row.align-items-center.mb-4.justify-content-center
      .col-lg-12
        .row.justify-content-center.mb-4
          .titulo-sexto.color-acento-contenido.mb-4
            h5.text-bold.mb-2 Figura 3.
            span Señales y conversión
          img.mb-3(data-aos="fade-up", src="@/assets/curso/tema3/img15.svg", alt="").mx-auto.d-none.d-lg-block
          img.mb-3(data-aos="fade-up", src="@/assets/curso/tema3/img16.svg", alt="").mx-auto.d-lg-none
          figcaption Nota. SENA, (2026).
    
    p.mb-5 Esta estructura permite observar que una señal puede atravesar diferentes etapas antes de convertirse en información útil para el sistema.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Diferencia entre variable, señal y código

    p.mb-4 Es importante diferenciar estos tres conceptos.

    .row.mb-4.g-3.justify-content-center.align-items-stretch
      .col-lg-4.col-md-6
        .bg-color-02.p-4.br-15.h-100
          p.mb-0 La variable corresponde a la magnitud o condición presente en el proceso.
      .col-lg-4.col-md-6
        .bg-color-08.p-4.br-15.h-100
          p.mb-0 La señal representa la información relacionada con esa variable.
      .col-lg-4.col-md-12
        .bg-color-01.p-4.br-15.h-100
          p.mb-0 El código representa la información mediante una forma determinada que puede ser interpretada por el sistema.

    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-01.br-15.mb-5
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-flex.order-lg-2
              img(src="@/assets/curso/tema1/img08.svg").mx-auto
            .col-lg-8.order-1.order-lg-1.p-4
              p.mb-1.fw-bold Ejemplo:
              p.mb-1.fw-bold Temperatura = 30 &deg;C
              p.mb-0 corresponde a una condición de la variable.

    p.mb-1 Un sensor puede generar una determinada señal eléctrica relacionada con esos 30 &deg;C.
    p.mb-1 Posteriormente, un conversor puede representar esa señal mediante un código binario.
    p.mb-5 La información ha pasado entonces por diferentes formas de representación sin perder su relación con la variable original.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Aplicación en un proceso industrial

    .row.mb-5.justify-content-center.align-items-stretch
      .col-lg-6.mb-4.mb-lg-0
        p.mb-2 Considérese un sistema encargado de supervisar la temperatura de una máquina.
        p.mb-2 La temperatura cambia de acuerdo con las condiciones de funcionamiento.
        p.mb-2 El sensor capta esta variable y genera una señal relacionada con ella.
        p.mb-2 Si la señal es análoga, puede presentar diferentes valores de acuerdo con la variación de temperatura.
        p.mb-2 Posteriormente, un conversor análogo digital puede transformar la señal en un código binario.
        p.mb-0 El sistema electrónico recibe este código y puede utilizarlo para interpretar la condición de la máquina.

      .col-lg-6.mb-0.mb-lg-0
        .bg-color-05-degrade.p-4.br-15.h-100
          p.mb-3 La secuencia puede representarse:

          .row.align-items-center.bg-color-02.p-4.br-15.mb-4
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.fw-bold Temperatura &rarr; sensor &rarr; señal análoga &rarr; ADC &rarr; código binario &rarr; procesamiento

          p.mb-0 Este proceso constituye una de las bases para la adquisición electrónica de variables industriales.


    .row.align-items-center.mb-4.justify-content-center
      .col-lg-10.mx-auto
        .bg-fondo-09.br-15.p-4.p-md-5.mb-0(data-aos="fade-right")
          h5.fw-bold.mb-2 Integración conceptual
          p.mb-4 Los conceptos estudiados pueden relacionarse de la siguiente manera:

          .row
            .col-lg-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-2
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span <b>Variable:</b> Representa una magnitud o condición del proceso.
                li.d-flex.mb-2
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span <b>Sensor:</b> Capta información relacionada con la variable.
                li.d-flex.mb-2
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span <b>Señal:</b> Representa la información obtenida.
                li.d-flex.mb-2
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span <b>Señal análoga:</b> Representa información mediante una variación continua.
                li.d-flex.mb-0
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span <b>Señal digital:</b> Representa información mediante estados discretos.

            .col-lg-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-2
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span <b>Señal binaria:</b> Utiliza dos estados representados mediante 0 y 1.
                li.d-flex.mb-2
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span <b>Nivel lógico:</b> representa los estados utilizados por un sistema digital.
                li.d-flex.mb-2
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span <b>Conversor análogo digital:</b> convierte valores analógicos de tensión en códigos binarios.
                li.d-flex.mb-0
                  i.fas.fa-square.me-2(style="color: #74A2F2;")
                  span <b>Sistema binario:</b> representa información utilizando los valores 0 y 1.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
