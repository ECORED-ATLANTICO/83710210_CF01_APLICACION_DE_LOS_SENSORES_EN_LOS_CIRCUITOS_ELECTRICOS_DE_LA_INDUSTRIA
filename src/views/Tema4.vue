<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sistemas de adquisición de señales

    .container
      .row.mb-5.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.mb-4.mb-lg-0.col-md-12.order-1.order-lg-2.p-0.p-lg-2.p-xl-0
          figure
            img(src="@/assets/curso/tema4/img01.png", data-aos="zoom-in")
        .col-lg-7.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0.p-lg-3.p-xl-4.p-3
          p.mb-0 Los sistemas de adquisición de señales permiten obtener información proveniente de las variables de un proceso y disponerla para su utilización dentro de un sistema electrónico. En los materiales de formación, la adquisición de datos se relaciona directamente con tres elementos fundamentales: sensor, transductor y sistema electrónico.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img02.png", data-aos="zoom-in")

      .col-lg-9.col-md-12.mb-0.mb-lg-0
        p.mb-2 La adquisición constituye, por tanto, una etapa en la que la información física del proceso es captada y transformada en una señal que puede ser recibida y procesada por un sistema electrónico.
        p.mb-3 La estructura básica puede representarse así:

        .bg-color-02.p-3.p-md-4.br-15.mb-3.d-flex.align-items-center.max-cont-md
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Variable física &rarr; sensor &rarr; transductor &rarr; sistema electrónico

        p.mb-0 Cada elemento cumple una función específica dentro del proceso de adquisición.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Elementos de un sistema de adquisición

    p.mb-4 Los elementos básicos identificados en el material de formación son:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img03.png", alt="Sensor")
          .crd_hover_txt--body
            h4.mb-3.text-center Sensor
            p.mb-0 Capta el valor de la variable del proceso y genera una señal de salida.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img04.png", alt="Transductor")
          .crd_hover_txt--body
            h4.mb-3.text-center Transductor
            p.mb-0 Convierte la señal producida por el sensor en una forma adecuada para el sistema.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-0.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img05.png", alt="Sistema electrónico")
          .crd_hover_txt--body
            h4.mb-3.text-center Sistema electrónico
            p.mb-0 Recibe la información adaptada y realiza el procesamiento o control.

    p.mb-4 La relación entre estos elementos permite establecer una cadena de adquisición:

    .bg-color-02.p-3.p-md-4.br-15.mb-4.d-flex.align-items-center.max-cont-md
      i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
      p.mb-0.fw-bold Proceso &rarr; Variable física &rarr; Sensor &rarr; Transductor &rarr; Señal para el sistema &rarr; Sistema electrónico

    p.mb-5 Esta estructura constituye la base para comprender cómo una variable física puede convertirse en información utilizable por un sistema electrónico.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Módulo de sensado

    p.mb-2 El módulo de sensado corresponde al conjunto de elementos que intervienen en la captación de una variable y en la generación de la información que será entregada al sistema electrónico.
    p.mb-4 Dentro de este proceso pueden identificarse tres etapas fundamentales:

    .row.mb-4.g-4.justify-content-center.align-items-stretch
      .col-lg-4.col-md-6
        .position-relative.h-100.pt-2.ps-3
          .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.justify-content-center(style="border: 2px solid #5C84CE;")
            p.mb-2.fw-bold Captación de la variable
            p.mb-0 El sensor recibe información relacionada con una magnitud física presente en el proceso.
          .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.text-white.fw-bold(style="width: 45px; height: 45px; background-color: #5C84CE; margin-left: -5px;") 1

      .col-lg-4.col-md-6
        .position-relative.h-100.pt-2.ps-3
          .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.justify-content-center(style="border: 2px solid #9CA3AF;")
            p.mb-2.fw-bold Transformación o adaptación de la señal
            p.mb-0 El transductor recibe la señal proveniente del sensor y puede transformarla o adaptarla para que resulte adecuada para el sistema electrónico.
          .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.text-white.fw-bold(style="width: 45px; height: 45px; background-color: #9CA3AF; margin-left: -5px;") 2

      .col-lg-4.col-md-6
        .position-relative.h-100.pt-2.ps-3
          .p-4.br-15.h-100.bg-white.text-center.d-flex.flex-column.justify-content-center(style="border: 2px solid #48D1B1;")
            p.mb-2.fw-bold Entrega de la señal
            p.mb-0 La señal resultante es puesta a disposición del sistema electrónico para su posterior procesamiento.
          .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.text-white.fw-bold(style="width: 45px; height: 45px; background-color: #48D1B1; margin-left: -5px;") 3

    .row.mb-5.align-items-center
      .col-lg-2.col-md-12.mb-3.mb-lg-0
        p.mb-0 La secuencia puede expresarse como:
      .col-lg-6.col-md-12.mb-3.mb-lg-0
        .bg-color-02.p-3.br-15.d-flex.align-items-center
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Variable &rarr; captación &rarr; adaptación &rarr; señal &rarr; procesamiento
      .col-lg-4.col-md-12
        p.mb-0 Reconocer la función de cada elemento permite comprender el recorrido que sigue la información desde el proceso hasta el sistema electrónico.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Captación de la variable

    p.mb-4 La captación constituye el primer paso para obtener información de una variable. El sensor recibe la magnitud física y genera una señal de salida asociada con la condición detectada.

    .row.mb-4.g-3.justify-content-center.align-items-stretch
      .col-lg-5.col-md-6
        .bg-color-0.p-3.br-15.h-100
          p.mb-3 Por ejemplo, si se requiere conocer la temperatura de un proceso:
          .bg-color-02.p-3.br-15.text-center
            p.mb-0.fw-bold Temperatura &rarr; sensor &rarr; señal
      .col-lg-3.col-md-6
        .bg-color-01.p-3.br-15.h-100
          p.mb-3 Si se requiere detectar una posición:
          .bg-color-02.p-3.br-15.text-center
            p.mb-0.fw-bold Posición &rarr; sensor &rarr; señal
      .col-lg-4.col-md-6
        .bg-color-0.p-3.br-15.h-100
          p.mb-3 Si se requiere conocer la velocidad:
          .bg-color-02.p-3.br-15.text-center
            p.mb-0.fw-bold Velocidad &rarr; sensor &rarr; señal

    p.mb-2 En cada caso, el dispositivo debe responder a la variable que se desea obtener.
    p.mb-5 La naturaleza de la variable determina las características que deberá presentar el sistema de captación.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Transformación y adaptación de la señal

    .bg-full-width.bg-fondo-010.px-5.py-4
      img(src="@/assets/curso/tema4/img06.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text La señal generada por un sensor debe llegar al sistema electrónico en condiciones que permitan su utilización. El transductor cumple una función importante en este proceso, debido a que recibe la señal enviada por el sensor y puede adaptarla a otra adecuada para el sistema electrónico.

    .row.mb-4.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        p.mb-0 De esta manera, la adquisición no consiste simplemente en conectar un sensor a un sistema electrónico. Es necesario considerar la relación entre:
      .col-lg-7.mb-3.mb-lg-0
        .bg-color-02.p-3.br-15.d-flex.align-items-center.max-cont-md
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold señal de entrada &rarr; transformación o adaptación &rarr; señal de salida

    p.mb-5 El tipo de transformación dependerá de las características de la variable, del sensor utilizado y de los requerimientos del sistema electrónico.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Señal de entrada y señal de salida

    .row.mb-4.align-items-stretch
      .col-lg-3.mb-3.mb-lg-0.d-flex.align-items-center
        p.mb-0 En un sistema de adquisición pueden diferenciarse una señal de entrada y una señal de salida.
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .bg-color-02.p-4.br-15.h-100
          p.mb-0 La señal de entrada corresponde a la información que recibe el transductor.
      .col-lg-5.col-md-6.mb-3.mb-lg-0
        .bg-color-0.p-4.br-15.h-100
          p.mb-0 La señal de salida corresponde a la información resultante después de la transformación o adaptación.

    .bloque-texto-g.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El material de formación define el transductor precisamente a partir de esta relación: recibe una señal de entrada relacionada con una o más cantidades físicas y la convierte, modificada o no, en una señal de salida.

    .row.mb-5.align-items-center
      .col-lg-7.mb-3.mb-lg-0
        .bg-color-02.p-3.br-15.d-flex.align-items-center.d-none.d-lg-flex
          span.me-3.text-nowrap La relación puede representarse:
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold señal de entrada &rarr; transductor &rarr; señal de salida
        .bg-color-02.p-3.br-15.align-items-center.d-lg-none
          .row
            .col-lg-2.col-md-12.mb-2
              p.mb-2 La relación puede representarse:
            .col-lg-10.col-md-12.mb-2.d-flex.align-items-center
              i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
              p.mb-0.fw-bold señal de entrada &rarr; transductor &rarr; señal de salida

      .col-lg-5
        p.mb-0 Esta estructura permite comprender por qué el transductor ocupa una posición intermedia entre la captación de la variable y el sistema electrónico.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Tipos de información obtenida

    .row.mb-3.justify-content-center.align-items-center
      .col-lg-9.col-md-12.mb-4.mb-lg-0
        p.mb-2 La señal obtenida durante el proceso de adquisición puede ser análoga o digital, de acuerdo con la naturaleza de la información y del sistema empleado.
        p.mb-2 En una señal análoga, la información puede presentar diferentes valores dentro de un intervalo.
        p.mb-3 En una señal digital, la información se representa mediante estados definidos.
        p.mb-3 Una señal binaria, por ejemplo, puede utilizar:

        .row.mb-3.g-3
          .col-sm-auto
            .bg-color-02.p-4.br-15.text-center.max-cont-md
              p.mb-0.fw-bold 0 &rarr; estado 0
          .col-sm-auto
            .bg-color-02.p-4.br-15.text-center.max-cont-md
              p.mb-0.fw-bold 1 &rarr; estado 1

      .col-lg-3.col-md-8.mb-0.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img08.png", data-aos="zoom-in")

    p.mb-5 La diferencia entre estos tipos de señales resulta importante porque el sistema electrónico debe ser capaz de interpretar correctamente la información recibida.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Conversión de señales análogas

    p.mb-2 Cuando una señal análoga debe ser procesada mediante un sistema digital, puede utilizarse un conversor análogo digital (ADC).
    p.mb-3 El material de formación correspondiente a los sistemas electrónicos básicos define el conversor ADC como un circuito que toma valores analógicos de tensión y los convierte en códigos binarios.
    p.mb-4 La función puede representarse así:

    .row.mb-5.align-items-center
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-02.p-3.p-md-4.br-15.d-flex.align-items-center
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Señal análoga &rarr; Conversor análogo-digital &rarr; Código binario &rarr; Sistema digital
      .col-lg-4
        p.mb-0 El proceso permite que una señal asociada con una variable física pueda ser representada mediante información digital.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Conversión de una medida en información digital

    p.mb-4 El proceso completo puede comprenderse mediante el siguiente ejemplo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img09.png", data-aos="zoom-in")
      .col-lg-8.col-md-12.mb-4.mb-lg-0
        SlyderF(columnas="col-lg-12 col-xl-4 col-md-6 col-sm-12 p-2")
          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 1
            p.mb-0 Un sensor obtiene información relacionada con una variable de temperatura.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 2
            p.mb-0 La variable genera una señal análoga.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 3
            p.mb-0 Esta señal es recibida por un conversor análogo digital.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 4
            p.mb-0 El conversor transforma el valor de tensión en un código binario.

          .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100.text-center
            .rounded-circle.d-flex.align-items-center.justify-content-center.mx-auto.mb-3.fw-bold(style="width: 45px; height: 45px; background-color: #B9F6DF; color: #12263F;") 5
            p.mb-0 El sistema electrónico recibe el código y puede procesarlo.

    .bg-color-02.p-3.p-md-4.br-15.mb-3.d-lg-flex.align-items-center.d-none.d-lg-block
      span.me-3.text-nowrap La secuencia queda establecida como:
      i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
      p.mb-0.fw-bold Temperatura &rarr; sensor &rarr; señal análoga &rarr; ADC &rarr; código binario &rarr; sistema electrónico

    .bg-color-02.p-3.p-md-4.br-15.mb-3.align-items-center.d-lg-none
      .row
        .col-lg-2.col-md-12.mb-2
          p.mb-2 La secuencia queda establecida como:
        .col-lg-10.col-md-12.mb-2.d-flex.align-items-center
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Temperatura &rarr; sensor &rarr; señal análoga &rarr; ADC &rarr; código binario &rarr; sistema electrónico

    p.mb-4 La conversión permite establecer un vínculo entre el comportamiento continuo de una variable física y la representación digital utilizada por el sistema electrónico.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Relación entre adquisición y procesamiento

    .row.mb-4.align-items-stretch
      .col-lg-3.mb-3.mb-lg-0.d-flex.align-items-center
        p.mb-0 La adquisición de señales y el procesamiento son etapas relacionadas, pero cumplen funciones diferentes.
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .bg-color-01.p-4.br-15.h-100
          p.mb-0 La adquisición permite obtener y entregar la información proveniente de la variable.
      .col-lg-5.col-md-6.mb-3.mb-lg-0
        .bg-color-0.p-4.br-15.h-100
          p.mb-0 El procesamiento utiliza esa información para realizar una operación determinada dentro del sistema.

    .row.mb-4.align-items-center
      .col-lg-7.col-md-12.mb-3.mb-lg-0
        .bg-color-02.p-3.br-15.d-flex.align-items-center
          span.me-3.text-nowrap Por ejemplo:
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Variable &rarr; adquisición &rarr; información &rarr; procesamiento
      .col-lg-5.col-md-12
        .row.align-items-center
          .col-auto
            img(src="@/assets/curso/tema4/img15.svg", style="max-width: 90px;").mx-auto
          .col
            p.mb-0 En una aplicación de control, el procesamiento puede posteriormente utilizar la información adquirida para determinar una acción.

    p.mb-4 Por esta razón, la adquisición constituye una etapa fundamental dentro de los sistemas electrónicos aplicados a procesos industriales.

    p.mb-2.fw-bold Ejemplo de un sistema de adquisición
    p.mb-2 Considérese un proceso industrial en el que se requiere conocer la posición de una pieza. La pieza se desplaza dentro de la máquina y el sistema necesita identificar su posición.
    p.mb-4 El proceso puede desarrollarse de la siguiente manera:

    .bg-color-02.p-3.p-md-4.br-15.mb-4.d-flex.align-items-center.max-cont-md
      span.me-3.text-nowrap Por ejemplo:
      i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
      p.mb-0.fw-bold Posición de la pieza &rarr; sensor &rarr; señal &rarr; transductor &rarr; señal adecuada &rarr; sistema electrónico &rarr; procesamiento

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-04.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La información sobre la posición pasa así desde el proceso físico hasta el sistema electrónico. Si el dispositivo genera una señal digital, el sistema puede procesarla directamente según sus características. Si genera una señal análoga, puede requerirse una conversión antes del procesamiento digital.

    p.mb-2.fw-bold Ejemplo de adquisición de una variable análoga
    p.mb-4 En un proceso se requiere adquirir una variable que cambia continuamente.

    .row.mb-4.g-4.justify-content-center.align-items-stretch
      .col-lg-4.col-md-6
        .position-relative.h-100.pt-2.ps-3
          .p-4.br-15.h-100.bg-white.text-center.d-flex.align-items-center.justify-content-center(style="border: 2px solid #5C84CE;")
            p.mb-0 El sensor genera una señal análoga relacionada con dicha variable.
          .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.text-white.fw-bold(style="width: 45px; height: 45px; background-color: #5C84CE; margin-left: -5px;") 1

      .col-lg-4.col-md-6
        .position-relative.h-100.pt-2.ps-3
          .p-4.br-15.h-100.bg-white.text-center.d-flex.align-items-center.justify-content-center(style="border: 2px solid #9CA3AF;")
            p.mb-0 La señal es recibida por el sistema de adquisición y posteriormente convertida mediante un ADC.
          .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.text-white.fw-bold(style="width: 45px; height: 45px; background-color: #9CA3AF; margin-left: -5px;") 2

      .col-lg-4.col-md-6
        .position-relative.h-100.pt-2.ps-3
          .p-4.br-15.h-100.bg-white.text-center.d-flex.align-items-center.justify-content-center(style="border: 2px solid #48D1B1;")
            p.mb-0 El resultado es un código binario.
          .position-absolute.top-50.start-0.translate-middle-y.rounded-circle.d-flex.align-items-center.justify-content-center.text-white.fw-bold(style="width: 45px; height: 45px; background-color: #48D1B1; margin-left: -5px;") 3

    .bg-color-02.p-3.p-md-4.br-15.mb-4.d-flex.align-items-center.max-cont-md.d-none.d-lg-block
      span.me-3.fw-bold.text-nowrap Puede representarse así:
      i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
      p.mb-0.fw-bold Variable física &rarr; Sensor &rarr; Señal análoga &rarr; ADC &rarr; Código binario &rarr; Sistema electrónico

    .bg-color-02.p-3.p-md-4.br-15.mb-4.d-flex.align-items-center.d-lg-none
      .row
        .col-lg-2.col-md-12.mb-2
          p.mb-2 Puede representarse así:
        .col-lg-10.col-md-12.mb-2.d-flex.align-items-center
          i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
          p.mb-0.fw-bold Variable física &rarr; Sensor &rarr; Señal análoga &rarr; ADC &rarr; Código binario &rarr; Sistema electrónico


    p.mb-5 Esta secuencia permite relacionar los contenidos desarrollados anteriormente sobre variables análogas, señales análogas, señales digitales y señales binarias.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Importancia de la adquisición en la instrumentación industrial

    .container
      .row.mb-5.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.mb-4.mb-lg-0.col-md-12.order-1.order-lg-1.p-0.p-lg-2.p-xl-0
          figure
            img(src="@/assets/curso/tema4/img17.png", data-aos="zoom-in")
        .col-lg-7.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0.p-lg-3.p-xl-4.p-3
          p.mb-0 La instrumentación industrial requiere disponer de información sobre las condiciones del proceso. Los sensores permiten captar las variables y los sistemas de adquisición permiten llevar esta información hacia los elementos encargados de procesarla.

    .bg-color-02.p-3.p-md-4.br-15.mb-4.d-flex.align-items-center.max-cont-md
      i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
      p.mb-0.fw-bold Proceso &rarr; variable &rarr; captación &rarr; señal &rarr; adquisición &rarr; procesamiento &rarr; control

    p.mb-5 La adquisición constituye el enlace entre el comportamiento físico del proceso y la información que utilizará el sistema electrónico.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Integración del sistema de adquisición

    .row.align-items-center.mb-4
      .col-lg-2.col-md-12.mb-4.mb-lg-0
        img(src="@/assets/curso/tema4/img15.svg", style="max-width: 90px;").mb-3.d-none.d-lg-block
        p.mb-0 La integración de los elementos puede observarse en la siguiente representación:

      .col-lg-10.col-md-12
        .row.justify-content-center.mb-3
          .titulo-sexto.color-acento-contenido.mb-4
            h5.text-bold.mb-2 Figura 4.
            span Integración al sistema
          img.mb-3(data-aos="fade-up", src="@/assets/curso/tema4/img18.svg", alt="").mx-auto
          figcaption Nota. SENA, (2026).

    p.mb-5 Esta representación resume la función de los elementos esenciales de un sistema de adquisición.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-fondo-11.br-15.p-4.p-md-5.mb-0(data-aos="fade-right")
          h5.fw-bold.mb-2 Relación entre los componentes
          p.mb-3 El sistema de adquisición funciona como una cadena en la que cada elemento cumple una función determinada.

          ul.lista-ul--color.mb-3
            li.d-flex.mb-2
              i.fas.fa-square.me-2(style="color: #74A2F2;")
              span <b>1.</b> El sensor establece el contacto funcional con la variable.
            li.d-flex.mb-2
              i.fas.fa-square.me-2(style="color: #74A2F2;")
              span <b>2.</b> El transductor recibe y transforma o adapta la señal.
            li.d-flex.mb-2
              i.fas.fa-square.me-2(style="color: #74A2F2;")
              span <b>3.</b> El sistema electrónico recibe la información para su procesamiento.
            li.d-flex.mb-0
              i.fas.fa-square.me-2(style="color: #74A2F2;")
              span <b>4.</b> Cuando la información corresponde a una señal análoga y debe ser procesada digitalmente, interviene el conversor análogo digital, encargado de convertir los valores analógicos de tensión en códigos binarios.

          p.mb-3 Así, los elementos estudiados pueden relacionarse de la siguiente manera:

          .bg-color-02.p-3.p-md-4.br-15.d-flex.align-items-center.mb-0
            i.fas.fa-angles-right.fa-2x.me-3(style="color: #0F8268;")
            p.mb-0.fw-bold Variable &rarr; sensor &rarr; transductor &rarr; señal &rarr; conversión &rarr; procesamiento

    .row.mb-5.align-items-center.justify-content-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img19.png", data-aos="zoom-in").mx-auto
      .col-lg-9.col-md-12
        p.mb-3 La información obtenida mediante los sensores debe ser adquirida y procesada para que pueda ser utilizada por un sistema electrónico. Dependiendo de sus características, las señales pueden requerir procesos de adaptación, conversión y procesamiento antes de generar una respuesta dentro del sistema de control.
        p.mb-0 En el siguiente podcast se abordará el recorrido de la información desde la adquisición de la señal hasta su procesamiento y utilización en sistemas electrónicos básicos de control, relacionando conceptos como señales análogas y digitales, conversión, comparación y acción.

    .container
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10.order-lg-2.order-2
          .row.bg-fondo-08.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-5.mb-3.mb-lg-0.order-2.order-md-2.order-lg-2.p-0
              figure
                img(src="@/assets/curso/tema2/img33.png", data-aos="fade-right").w-50.mx-auto
            .col-lg-7.order-1.order-md-1.order-lg-1.p-4.p-lg-4
              p(data-aos="fade-left").mb-4 A continuación, se invita a ir al siguiente podcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="xxxxx"
                tiempo
                :audio="require_src('@/assets/curso/audio/2.mp3')"
              )

</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
