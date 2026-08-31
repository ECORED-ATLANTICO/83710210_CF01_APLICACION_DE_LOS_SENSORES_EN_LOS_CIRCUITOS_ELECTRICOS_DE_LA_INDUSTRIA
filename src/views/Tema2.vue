<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sensores, transductores y captadores
    
    .bloque-texto-g.bg-color-10.p-3.p-sm-3.p-md-3.p-lg-4.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En los sistemas de adquisición de datos intervienen diferentes elementos que permiten obtener información sobre las variables presentes en un proceso. El material de formación identifica como elementos básicos de un sistema de medición al sensor, el transductor y el sistema electrónico. 
    
    .bg-full-width.bg-fondo-1

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12.col-xl-6.col-md-12.mb-4.mb-lg-4.order-2.order-lg-2
          p.mb-3 La función de estos elementos puede comprenderse a partir de una secuencia general:

          .container
            .row.align-items-center.bg-color-02.p-4.mb-0.br-15.max-cont-md
              .col-lg-auto.d-none.d-lg-block
                img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0.text-bold Variable física → sensor → transductor → sistema electrónico

        .col-lg-12.col-xl-6.col-md-12.mb-0.mb-lg-0.order-2.order-lg-2
          p.mb-3 Esta relación permite transformar una condición presente en un proceso en una señal que pueda ser utilizada posteriormente para su procesamiento.
          p.mb-0 El estudio de los sensores y transductores resulta fundamental para comprender cómo se obtiene información de variables como posición, proximidad, desplazamiento, velocidad, presión, temperatura o luz.

      separador
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Sensor

      p.mb-3 El sensor es el elemento encargado de captar el valor de una variable del proceso y generar una señal de salida. 
      p.mb-5 El material de formación, tomando como referencia a Creus, establece que los sensores captan el valor de la variable de proceso y envían una señal de salida predeterminada. En términos funcionales, el sensor establece el primer vínculo entre la variable física y el sistema de adquisición.

      .row.align-items-center(data-aos="fade-right")
        .col-lg-10.mx-auto
          .bg-fondo-01.br-15.mb-5
            .row.align-items-center.justify-content-center(data-aos="fade-right")
              .col-lg-auto.d-none.d-lg-flex.order-lg-2
                img(src="@/assets/curso/tema1/img08.svg").mx-auto
              .col-lg-8.order-1.order-lg-1.p-4
                p.mb-0 <b>Por ejemplo:</b> en un proceso donde se necesita detectar la presencia de una pieza, el sensor debe responder a la condición de presencia y generar una señal que pueda ser utilizada por el sistema.
    
  
    .row.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        figure 
          img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in")

      .col-lg-9.mb-0.mb-lg-0
        p.mb-2 De acuerdo con la variable que se desea detectar, pueden encontrarse sensores relacionados con:
        .bg-color-05-degrade.p-3.br-15.mb-2.max-cont-md
          .row
            .col-lg-4.col-md-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Posición;
            .col-lg-4.col-md-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Proximidad;
            .col-lg-4.col-md-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Desplazamiento;
            .col-lg-4.col-md-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Velocidad;
            .col-lg-4.col-md-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Presión;
            .col-lg-4.col-md-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Temperatura;
            .col-lg-4.col-md-6
              ul.lista-ul--color.mb-0
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Luz.
        p.mb-0 La selección depende de la variable que se desea captar y de las características de la aplicación.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Transductor

    p.mb-4 El transductor recibe una señal de entrada relacionada con una o más cantidades físicas y la convierte, modificada o no, en una señal de salida. 

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-8.col-md-12.mb-0.mb-lg-0.order-2.order-lg-1
        p.mb-3 En el sistema descrito en el material de formación, el sensor recibe la magnitud física y proporciona información al transductor. Posteriormente, el transductor adapta la señal para que pueda ser utilizada por el sistema electrónico encargado de su procesamiento. 
        p.mb-3 Esta relación puede representarse así:

        .container
          .row.align-items-center.bg-color-02.p-4.mb-0.br-15.max-cont-md
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Magnitud física → sensor → transductor → sistema electrónico → Procesamiento

      .col-lg-4.col-md-12.mb-0.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in")
    
    p.mb-4 El transductor puede, por tanto, cumplir una función de transformación o adaptación de la señal dentro de la cadena de adquisición.

    separador
    
    //- #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 2.3 Sensor y transductor: relación funcional

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Sensor y transductor: relación funcional
          
    p.mb-4 Aunque sensor y transductor son conceptos estrechamente relacionados, dentro del material de formación se establece una diferencia funcional.


    .row.justify-content-center.mb-4
      .col-md-12.col-lg-6.col-xl-3.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-4.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0.ms-3.text-center El sensor recibe o capta la magnitud física correspondiente a la variable del proceso.

      .col-md-12.col-lg-6.col-xl-4.mb-4(data-aos="fade-up")
        .tarjeta-numerada.color-secundario.p-4.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0.ms-3.text-center El transductor recibe la señal asociada a esa magnitud y la adapta o transforma en otra señal adecuada para el sistema electrónico.

      .col-md-12.col-lg-6.col-xl-5.mb-4(data-aos="fade-left")
        .tarjeta-numerada.color-acento-contenido.p-4.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0.ms-3.text-center Esta relación resulta especialmente importante cuando la señal generada por la captación no presenta todavía las características requeridas por el sistema que realizará el procesamiento.

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.col-xl-9.mx-auto
        .bg-fondo-01.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.col-xl-auto.d-none.d-lg-flex.order-lg-2
              img(src="@/assets/curso/tema1/img08.svg").mx-auto
            .col-lg-9.col-xl-9.order-1.order-lg-1.p-4
              p.mb-1 <b>Por ejemplo:</b> en un proceso se requiere detectar una condición física. 
              p.mb-1 <b>Variable</b> → <b>sensor</b> → <b>señal</b> → <b>transductor</b> → <b>señal adecuada</b> → <b>sistema electrónico</b>.
              p.mb-0 La señal puede cambiar de acuerdo con las características del transductor y de la aplicación.
    
      .col-lg-3.col-md-12
        h4 Captador
        p.mb-0 El concepto de captador se encuentra relacionado con la función de obtener información de una magnitud o condición del proceso.

    //- .container
    //-   .titulo-con-imagen.mb-4(data-aos="fade-right")
    //-     .titulo-con-imagen__fondo_2
    //-       h3.titulo-con-imagen__texto_2 Captador

    //- p.mb-4 El concepto de captador se encuentra relacionado con la función de obtener información de una magnitud o condición del proceso.

    h4.mb-4 Diferenciar los conceptos de transductor, sensor y captador.
    
    .row.mb-3.justify-content-center.align-items-stretch
      .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta.bg-color-04.p-4.h-100.text-center
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img04.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
          h4 Sensor
          p.mb-0 Capta el valor de una variable del proceso y genera una señal de salida.

      .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta.bg-color-07.p-4.h-100.text-center
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img05.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
          h4 Transductor
          p.mb-0 Recibe una señal asociada a una magnitud física y la convierte o adapta en una señal de salida.

      .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta.bg-color-08.p-4.h-100.text-center
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img06.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
          h4 Captador
          p.mb-0 Se relaciona con el elemento encargado de captar una magnitud o condición del proceso.

    .bg-full-width.bg-fondo-2
      p.mb-5 Esta distinción permite analizar con mayor claridad los diferentes componentes que participan en la adquisición de señales.

      separador
      
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.3 Clasificación de los transductores
        
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-3.mb-4.mb-lg-0.col-md-12
          p.mb-2 Los transductores pueden clasificarse de acuerdo con la magnitud o variable que permiten detectar o medir.
          p.mb-0 El material de formación desarrolla los siguientes grupos:

        .col-lg-6.mb-0.mb-lg-0.col-md-12
          .bg-color-05-degrade.p-3.br-15.mb-0
            .row
              .col-lg-6
                ul.lista-ul--color.mb-1
                  li.d-flex.mb-0 
                    i.fas.fa-solid.fa-square.me-2
                    span Transductores de posición; 
              .col-lg-6
                ul.lista-ul--color.mb-1
                  li.d-flex.mb-0 
                    i.fas.fa-solid.fa-square.me-2
                    span Transductores de proximidad; 
              .col-lg-6
                ul.lista-ul--color.mb-1
                  li.d-flex.mb-0 
                    i.fas.fa-solid.fa-square.me-2
                    span Transductores de desplazamiento; 
              .col-lg-6
                ul.lista-ul--color.mb-1
                  li.d-flex.mb-0 
                    i.fas.fa-solid.fa-square.me-2
                    span Transductores de velocidad; 
              .col-lg-6
                ul.lista-ul--color.mb-1
                  li.d-flex.mb-0 
                    i.fas.fa-solid.fa-square.me-2
                    span Transductores de presión; 
              .col-lg-6
                ul.lista-ul--color.mb-1
                  li.d-flex.mb-0 
                    i.fas.fa-solid.fa-square.me-2
                    span Transductores de temperatura; 
              .col-lg-6
                ul.lista-ul--color.mb-0
                  li.d-flex.mb-0 
                    i.fas.fa-solid.fa-square.me-2
                    span Transductores de luz.

        .col-lg-3.mb-0.mb-lg-0.col-md-12
          p.mb-0 Esta clasificación permite relacionar directamente una variable del proceso con el tipo de dispositivo que puede utilizarse para obtener información sobre ella.


      .container
        .titulo-con-imagen.mb-4(data-aos="fade-right")
          .titulo-con-imagen__fondo_2
            h3.titulo-con-imagen__texto_2 Transductores de posición


        
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-3.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img08.png", data-aos="zoom-in")
        .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-0 Los transductores de posición permiten determinar la posición de un objeto o de una pieza móvil.
          p.mb-2 Dentro del material se presentan como ejemplo los finales de carrera. Estos dispositivos actúan cuando un objeto o pieza alcanza una determinada posición y produce el accionamiento de una palanca, émbolo o varilla, generando el cambio de unos contactos. 
          p.mb-0 Su funcionamiento permite transformar una condición mecánica —haber alcanzado una posición— en una condición que puede ser utilizada dentro de un circuito.

    
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-02.br-15.mb-4.p-4
          .col-lg-9.col-12
            p.mb-2.fw-bold Ejemplo de aplicación:
            p.mb-1 En una máquina, un elemento móvil debe detenerse cuando llega al final de su recorrido.
            p.mb-2 La secuencia puede representarse:
            p.mb-0.fw-bold Movimiento &rarr; llegada a posición &rarr; accionamiento del final de carrera &rarr; cambio de contactos &rarr; señal para el sistema

        p.mb-0 Este tipo de aplicación permite relacionar la posición física de un elemento con una acción posterior del sistema.


    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Transductores de proximidad

    

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img09.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-2 Los detectores de proximidad son dispositivos eléctricos, electromecánicos o electrónicos que reaccionan ante un objeto situado dentro de un entorno definido.
        p.mb-0 Este entorno corresponde al campo de sensibilidad.
        p.mb-0 Una característica importante es que la detección puede producirse por la proximidad física entre el objeto y el detector sin que exista contacto mecánico. 
        p.mb-0 Esto permite diferenciar un detector de proximidad de un dispositivo que necesita contacto directo para producir una acción.


    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-fondo-01.br-15.mb-3
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.col-xl-auto.d-none.d-lg-flex.order-lg-2
              img(src="@/assets/curso/tema1/img08.svg").mx-auto
            .col-lg-11.col-xl-9.order-2.order-lg-1.p-4
              p.mb-0 <b>Ejemplo:</b> En una banda transportadora se requiere detectar la presencia de una pieza antes de que llegue a una estación.
              p.mb-0 La pieza puede ingresar al campo de sensibilidad del detector y producir una señal.
              p.mb-0.text-bold Pieza → campo de sensibilidad → detección → señal

        p.mb-0 La aplicación permite realizar detecciones sin necesidad de detener físicamente la pieza para activar el dispositivo.


    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Transductores de desplazamiento


    .row.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0

        p.mb-3 Los transductores de desplazamiento permiten obtener información relacionada con la distancia o el desplazamiento de un objeto.

        .bg-color-01.p-4.br-15.mb-3
          p.mb-0 El material presenta el radar como un sistema capaz de detectar, mediante ondas electromagnéticas, la presencia y la distancia a la que se encuentran objetos que interceptan su propagación. 
        
        p.mb-3 Para distancias cortas se presentan diferentes principios de funcionamiento.
  
        .bg-color-05-degrade.p-4.br-15.mb-0
          h4 Resistivos
          ul.lista-ul--color.mb-0
            li.d-flex.mb-0 
              i.fas.fa-solid.fa-square.me-2
              span Los transductores resistivos pueden utilizar resistencias de hilo metálico o material semiconductor diseñadas para modificar su resistencia cuando son deformadas. 
            li.d-flex.mb-0 
              i.fas.fa-solid.fa-square.me-2
              span Las bandas extensiométricas constituyen un ejemplo. Se adhieren sobre un soporte y permiten medir su deformación a partir de la variación de la resistencia. 
            li.d-flex.mb-0 
              i.fas.fa-solid.fa-square.me-2
              span La relación básica puede representarse:


    .container.mb-4
      .row.align-items-center.bg-color-02.p-4.mb-0.br-15.max-cont-md
        .col-lg-auto.d-none.d-lg-block
          img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0.text-bold Deformación → variación de resistencia → señal

    p.mb-4 De la siguiente manera:
    
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img11.png", alt="Inductivos")
          .crd_hover_txt--body
            h4.mb-3.text-center Inductivos
            p.mb-0 Los transductores inductivos descritos en el material utilizan un sistema formado por devanados, uno fijo y otro móvil. Cuando el devanado fijo es alimentado mediante corriente alterna, se induce una señal en el devanado secundario. La señal depende de la posición relativa entre los devanados. La variación de posición se convierte así en una variación de la señal obtenida.

      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img12.png", alt="Capacitivos")
          .crd_hover_txt--body
            h4.mb-3.text-center Capacitivos
            p.mb-0 Los transductores capacitivos pueden utilizarse para medir distancias y se basan en la variación de la capacidad de un condensador. El material señala que pueden medir distancias de algunos metros y que presentan poca exactitud.

      .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img13.png", alt="Encoders")
          .crd_hover_txt--body
            h4.mb-3.text-center Encoders
            p.mb-0 Los encoders permiten medir posiciones lineales o angulares y proporcionan una señal de salida digital. El material los describe como dispositivos constituidos por discos que se acoplan directamente o mediante un sistema de engranajes al eje de un motor-reductor cuya posición se desea determinar.

    .bg-full-width.bg-fondo-1

      p.mb-4 La relación puede visualizarse como:

      
      .row.mb-4.justify-content-center.align-items-center
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-2.order-lg-1
          .container
            .row.align-items-center.bg-color-02.p-4.mb-0.br-15.max-cont-md
              .col-lg-auto.d-none.d-lg-block
                img(src="@/assets/curso/tema1/img13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0.text-bold Posición del eje → encoder → señal digital

        .col-lg-7.col-md-12.mb-4.mb-lg-0.order-2.order-lg-1
          .bg-color-01.br-15.mb-0.px-4.py-3
            p.mb-0 Esta característica permite que la información sobre la posición pueda ser utilizada posteriormente por sistemas electrónicos.


      .container
        .titulo-con-imagen.mb-4(data-aos="fade-right")
          .titulo-con-imagen__fondo_2
            h3.titulo-con-imagen__texto_2 Transductores de velocidad


      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img14.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
          p.mb-0 Una de las mediciones importantes en aplicaciones industriales corresponde a la velocidad angular. 
          p.mb-3 El material de formación presenta los tacómetros como dispositivos utilizados para realizar este tipo de medición. Estos pueden ser mecánicos o eléctricos. 
          p.mb-3 En una aplicación industrial, la información sobre la velocidad puede utilizarse para supervisar el funcionamiento de un motor o de otro elemento giratorio. 
          p.mb-0 La relación funcional puede representarse como:



      .container
        .titulo-con-imagen.mb-4(data-aos="fade-right")
          .titulo-con-imagen__fondo_2
            h3.titulo-con-imagen__texto_2 Transductores de presión

      p.mb-4 Los transductores de presión pueden realizar la medición de manera directa o indirecta. 

      .row.align-items-center.justify-content-center.mb-5
        .col-md-8.col-lg-3.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/img15.png", data-aos="zoom-in")
        .col-lg-9
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-04")
            div(titulo="Medición directa")
              p.mb-2 La presión puede determinarse mediante la comparación con la presión ejercida por un líquido de densidad y altura conocidas.
              p.mb-2 El material presenta como ejemplo el tubo en U.
              p.mb-0 El manómetro de tubo en U se utiliza para medir presiones cercanas a la atmosférica. Está constituido por un tubo en forma de U que contiene generalmente un líquido y presenta una rama abierta, mientras que en la otra se aplica la presión que se desea medir.

            div(titulo="Medición indirecta")
              p.mb-0 La presión también puede determinarse mediante la deformación de elementos elásticos.
              p.mb-2 Entre los elementos mencionados se encuentran:
              
              ul.lista-ul--color.mb-2
                li.d-flex.mb-1 
                  i.fas.fa-solid.fa-square.me-2
                  span Tubo Bourdon;
                li.d-flex.mb-1 
                  i.fas.fa-solid.fa-square.me-2
                  span Tubo en espiral;
                li.d-flex.mb-1 
                  i.fas.fa-solid.fa-square.me-2
                  span Tubo en hélice;
                li.d-flex.mb-1 
                  i.fas.fa-solid.fa-square.me-2
                  span Diafragma;
                li.d-flex.mb-0 
                  i.fas.fa-solid.fa-square.me-2
                  span Fuelle.

              p.mb-3 En este caso, la presión produce una deformación y dicha deformación se utiliza para obtener información relacionada con la magnitud aplicada.
              
              p.mb-0.text-bold Presión → deformación → señal de medición

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Transductores electromecánicos

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-09.p-3.p-sm-3.p-md-3.p-lg-4.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los transductores electromecánicos utilizan un elemento mecánico combinado con un transductor eléctrico encargado de generar la señal eléctrica correspondiente. 
        p.mb-0 Esta configuración permite relacionar una magnitud física con una señal que puede ser procesada por un sistema electrónico.

    .container
      .titulo-con-imagen.mb-4(data-aos="fade-right")
        .titulo-con-imagen__fondo_2
          h3.titulo-con-imagen__texto_2 Transductores de temperatura

    p.mb-2 La medición de temperatura constituye una aplicación frecuente en la industria.
    p.mb-4 El material de formación presenta cuatro tipos principales:

    .bg-full-width.bg-fondo-2

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img17.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img20.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 Termorresistencias
              p.text-center Se basan en la variación de la resistencia de un conductor con la temperatura.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img21.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 Termistores
              p.text-center Se basan en la variación de la resistencia de un semiconductor con la temperatura.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img18.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 Termopares
              p.text-center Se basan en la fuerza electromotriz generada en la unión de dos metales distintos por uno de sus extremos, fenómeno asociado al efecto Seebeck.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img19.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center.bg-color-02(style="width: 80%;").mx-auto.p-1 Pirómetros
              p.text-center Permiten medir la temperatura de una sustancia sin estar en contacto con ella.


      p.mb-4 La clasificación puede sintetizarse de la siguiente manera:

      .row.align-items-center(data-aos="fade-right")
        .col-lg-12.col-xl-10.mx-auto
          .bg-fondo-07.br-15.mb-5
            .row.align-items-center.justify-content-center(data-aos="fade-right")
              .col-lg-auto.col-xl-auto.d-none.d-lg-flex.order-lg-2
                img(src="@/assets/curso/tema1/img36.png").mx-auto
              .col-lg-9.col-xl-9.order-1.order-lg-1.p-4
                p.mb-0 <b>Principio señalado en el material</b>
                p.mb-0 <b>Termorresistencia:</b> Variación de la resistencia de un conductor.
                p.mb-0 <b>Termistor:</b> Variación de la resistencia de un semiconductor.
                p.mb-0 <b>Termopar:</b> Fuerza electromotriz generada por la unión de dos metales distintos.
                p.mb-0 <b>Pirómetro:</b> Medición de temperatura sin contacto.


      .container
        .titulo-con-imagen.mb-4(data-aos="fade-right")
          .titulo-con-imagen__fondo_2
            h3.titulo-con-imagen__texto_2 Transductores de luz

      p.mb-4 Los transductores de luz utilizan radiaciones luminosas para generar una respuesta relacionada con la cantidad de luz recibida.

      .row.mb-5.align-items-center
        .col-lg-12.col-xl-10
          .bg-color-05-degrade.p-3.br-15.mb-0
            .row.align-items-center.justify-content-around
              .col-lg-auto.mb-2.mb-lg-0
                p.mb-0 El material presenta como principales dispositivos:
              .col-lg-auto.mb-2.mb-lg-0
                ul.lista-ul--color.mb-0
                  li.d-flex.mb-0 
                    i.fas.fa-solid.fa-square.me-2
                    span.text-bold Fotorresistencias o LDR
              .col-lg-auto.mb-2.mb-lg-0
                ul.lista-ul--color.mb-0
                  li.d-flex.mb-0 
                    i.fas.fa-solid.fa-square.me-2
                    span.text-bold Fotodiodos
              .col-lg-auto.mb-2.mb-lg-0
                ul.lista-ul--color.mb-0
                  li.d-flex.mb-0 
                    i.fas.fa-solid.fa-square.me-2
                    span.text-bold Fototransistores

      .row.mb-5.justify-content-center.align-items-center
        .col-md-8.col-lg-4.mb-4.mb-lg-0.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img22.png", data-aos="zoom-in")
        .col-lg-8.order-lg-2
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Fotorresistencias o LDR")
              p.mb-3 Las LDR modifican su resistencia dependiendo de la cantidad de luz que incide sobre ellas.
              p.mb-2 La relación puede expresarse:
              p.mb-0.text-bold Luz → variación de resistencia → señal

            .tarjeta.color-acento-botones--borde.p-4(titulo="Fotodiodos")
              p.mb-0 El funcionamiento del fotodiodo se basa en la conducción inversa de un diodo cuando se encuentra sometido a la acción de la luz.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Fototransistores")
              p.mb-3 El fototransistor presenta un funcionamiento similar al de un transistor, pero la corriente asociada a la base es suministrada por la acción de la luz.
              p.mb-0 Estos dispositivos permiten incorporar la detección de luz dentro de sistemas electrónicos.
            
            .tarjeta.color-acento-botones--borde.p-4(titulo="Selección del sensor o transductor")
              p.mb-0 La selección del dispositivo debe responder a la variable que se desea captar y a las características de la aplicación.

    p.mb-3 La relación puede organizarse mediante las siguientes preguntas:

    .row.mb-4.justify-content-center.align-items-stretch
      .col-lg-6.mb-4.mb-lg-0
        .bg-color-08.p-4.br-15.h-100
          .row.align-items-center.h-100
            .col-lg-auto
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img23.png", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold ¿Qué variable se desea detectar o medir? 
              p.mb-2 Determina el tipo de dispositivo requerido.
              p.mb-0.text-bold ¿La detección requiere contacto físico? 
              p.mb-2 Permite establecer si resulta apropiado un dispositivo como un final de carrera o un detector de proximidad.
              p.mb-0.text-bold ¿Qué distancia debe medirse? 
              p.mb-0 Permite considerar diferentes principios de desplazamiento.

      .col-lg-6.mb-0.mb-lg-0
        .bg-color-02.p-4.br-15.h-100
          .row.align-items-center.h-100
            .col-lg-auto.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/img24.png", style="max-width: 90px").mx-auto
            .col-lg.order-lg-1
              p.mb-0.text-bold ¿Qué tipo de señal necesita el sistema electrónico?
              p.mb-2 Permite establecer las características requeridas para la salida del dispositivo.
              p.mb-0.text-bold ¿Qué condiciones presenta el proceso?
              p.mb-0 Permite considerar las características de operación del sensor o transductor.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Relación entre variable y dispositivo


    .row.mb-4.justify-content-center.align-items-center
      .col-md-8.col-lg-3.mb-4.mb-lg-0.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img25.png", data-aos="zoom-in")
      .col-lg-9.order-lg-2
        p.mb-2 La clasificación estudiada puede resumirse de la siguiente manera:
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 3.
          span Relación variable y dispositivo
        .tabla-a.color-acento-contenido.tb-custom.mb-0
          table(style="min-width:440px")
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th(width="40%") Variable o condición
                th(width="60%") Ejemplos presentados
            tbody
              tr
                td Posición
                td Final de carrera
              tr
                td Proximidad
                td Detector de proximidad
              tr
                td Desplazamiento
                td Radar, resistivo, inductivo, capacitivo, encoder
              tr
                td Velocidad
                td Tacómetro
              tr
                td Presión
                td Tubo en U, Bourdon, diafragma, fuelle, electromecánico
    
    p.mb-4 Esta clasificación permite relacionar una necesidad de medición o captación con los dispositivos disponibles para obtener información de la variable.

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Integración del sensor, transductor y sistema electrónico
    
    p.mb-4 Un sistema de adquisición puede comprenderse como una cadena en la que cada elemento cumple una función determinada:

    .bg-color-02.p-4.mb-5.br-15.max-cont-md
      p.mb-0.text-bold Variable física → Sensor → Transductor → Señal de salida → Sistema electrónico → Procesamiento
    
    .bg-full-width.bg-fondo-2

      .row.justify-content-center.mb-5
        .col-md-6.col-lg-6.col-xl-3.mb-4(data-aos="fade-right")
          .tarjeta-numerada.color-primario.p-4.h-100.align-content-center
            .tarjeta-numerada__numero
              .h2 1
            p.mb-0.ms-3.text-center El sensor permite captar la variable.

        .col-md-6.col-lg-6.col-xl-3.mb-4(data-aos="fade-up")
          .tarjeta-numerada.color-secundario.p-4.h-100.align-content-center
            .tarjeta-numerada__numero
              .h2 2
            p.mb-0.ms-3.text-center El transductor recibe y transforma o adapta la señal.

        .col-md-6.col-lg-6.col-xl-3.mb-4(data-aos="fade-down")
          .tarjeta-numerada.color-acento-contenido.p-4.h-100.align-content-center
            .tarjeta-numerada__numero
              .h2 3
            p.mb-0.ms-3.text-center El sistema electrónico recibe la señal para realizar el procesamiento correspondiente.

        .col-md-6.col-lg-6.col-xl-3.mb-4(data-aos="fade-left")
          .tarjeta-numerada.color-acento-botones.p-4.h-100.align-content-center
            .tarjeta-numerada__numero
              .h2 4
            p.mb-0.ms-3.text-center Esta estructura constituye la base para el estudio posterior de las variables y señales y de los sistemas de adquisición de señales.



      .container
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
            h3.titulo-con-imagen__texto Aplicación industrial

      p.mb-1 Considérese una banda transportadora en la que se requiere identificar cuándo una pieza alcanza una determinada estación.
      p.mb-4 La necesidad puede analizarse de la siguiente manera:



      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/img31.png", data-aos="zoom-in")
        .col-lg-8.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0
          SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img29.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center.bg-color-02(style="width: 85%;").mx-auto.p-1 Condición
              p.text-center Llegada de una pieza.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img30.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center.bg-color-02(style="width: 85%;").mx-auto.p-1 Variable
              p.text-center Presencia o posición.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img28.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center.bg-color-02(style="width: 85%;").mx-auto.p-1 Elemento de captación
              p.text-center Sensor adecuado para la condición.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img27.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center.bg-color-02(style="width: 85%;").mx-auto.p-1 Señal
              p.text-center Información generada por el dispositivo.

            .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img26.svg' alt='', style="width: 90px; height: 90px; ").mx-auto
              h4.text-center.bg-color-02(style="width: 85%;").mx-auto.p-1 Sistema electrónico
              p.text-center Elemento encargado de recibir y procesar la señal.

      p.mb-1 A partir de la información obtenida, el sistema puede determinar la acción que corresponda al proceso.
      p.mb-5 Este ejemplo permite observar que la selección de un sensor no depende únicamente de su disponibilidad, sino de la relación entre la variable, las condiciones de operación y las características de la señal requerida. 

    

    .container
      .row.mb-5.justify-content-center.align-items-center.bg-color-08
        .col-lg-5.mb-4.mb-lg-0.col-md-12.order-1.order-lg-1.p-0.p-lg-2.p-xl-0
          figure
            img(src="@/assets/curso/tema2/img32.png", data-aos="zoom-in")
        .col-lg-7.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0.p-lg-3.p-xl-2.p-3
          p.mb-0 En los procesos industriales es necesario obtener información confiable sobre las variables que intervienen en el funcionamiento de un proceso. Para ello, la medición y el uso de sensores permiten identificar diferentes condiciones físicas y transformarlas en señales que pueden ser interpretadas por sistemas de instrumentación y control.

    p.mb-4 En el siguiente podcast se abordará la relación entre variable física, medición, sensor, transductor y señal, destacando la función que cumple cada elemento dentro del proceso de instrumentación industrial.


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
                texto="Podcast pendiente"
                tiempo
                :audio="require_src('@/assets/curso/audio/2.mp3')"
              )




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
