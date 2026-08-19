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
      .col-lg-9.mx-auto
        .bg-fondo-01.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-4.col-xl-auto.d-none.d-lg-flex.order-lg-2
              img(src="@/assets/curso/tema1/img08.svg").mx-auto
            .col-lg-11.col-xl-9.order-1.order-lg-1.p-4
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
        .tarjeta.bg-color-07.p-4.h-100.text-center
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
          .col-9.ms-lg-2.ms-0
            p.mb-2 <b>Ejemplo de aplicación</b>
            p.mb-1 En una máquina, un elemento móvil debe detenerse cuando llega al final de su recorrido.
            p.mb-2 La secuencia puede representarse:
            p.mb-0.text-bold Movimiento → llegada a posición → accionamiento del final de carrera → cambio de contactos → señal para el sistema

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
        .col-lg-10.mx-auto
          .bg-fondo-07.br-15.mb-5
            .row.align-items-center.justify-content-center(data-aos="fade-right")
              .col-lg-4.col-xl-auto.d-none.d-lg-flex.order-lg-2
                img(src="@/assets/curso/tema1/img36.png").mx-auto
              .col-lg-11.col-xl-9.order-1.order-lg-1.p-4
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
        .col-lg-7.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0.p-lg-3.p-xl-0.p-3
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



    
    //- .bg-full-width.bg-fondo-3.px-5.py-4
    //-   img(src="@/assets/curso/tema2/img01.png", alt="")
    //- .row.justify-content-center.align-items-center.z-2.mb-5
    //-   .col-lg-11(data-aos="fade-right")
    //-     p.banner-text La verificación constituye un proceso técnico y sistemático orientado a obtener evidencia objetiva de que las actividades se han ejecutado conforme a lo planificado y de que son eficaces para controlar los peligros. En el contexto de los programas de saneamiento, la verificación permite confirmar que los procedimientos establecidos se implementan de manera adecuada y que los peligros potenciales se encuentran bajo control. De esta manera, constituye un elemento fundamental para demostrar la eficacia de los programas de saneamiento y fortalecer el aseguramiento de la inocuidad alimentaria.

  
    //- separador
    
    //- #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 2.1 Programa de limpieza y desinfección
      
    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-6.col-md-12.mb-0.mb-lg-0.order-2.order-lg-2
    //-     figure
    //-       img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in")
    //-   .col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0
    //-     .bg-color-02.p-4.br-15.mb-3
    //-       p.mb-0 El objetivo de este programa es reducir la carga microbiana en superficies, equipos y utensilios a niveles seguros, y eliminar la suciedad visible que puede albergar microorganismos y protegerlos de la acción de los desinfectantes. Para que sea efectivo, debe basarse en Procedimientos Operativos Estandarizados de Saneamiento (POES), que son descripciones detalladas e inequívocas de las tareas de limpieza.

    //- p.mb-5 La verificación de este programa constituye un proceso fundamental para garantizar eficacia y se desarrolla a través de tres tipos enfoques complementarios:

    
    //- .row.justify-content-center.mb-5
    //-   .col-md-12.col-lg-6.col-xl-5.mb-4
    //-     .tarjeta-avatar-b.h-100
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img03.svg' alt='')
    //-       .tarjeta.bg-color-0.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Verificación visual:</b> es la primera línea de control, la más rápida y la que debe realizarse siempre. Consiste en inspeccionar, preferiblemente con buena iluminación, que no haya residuos de alimentos, jabón, sarro, incrustaciones, moho visible o cualquier otro tipo de suciedad en las superficies después de la limpieza. Se revisan esquinas, uniones, empaques, etc.


    //-   .col-md-12.col-lg-6.col-xl-5.mb-4
    //-     .tarjeta-avatar-b.h-100
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img04.svg' alt='')
    //-       .tarjeta.bg-color-0.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Verificación operacional:</b> se enfoca en el cumplimiento del procedimiento. Se debe confirmar que el personal sigue el POES al pie de la letra: utiliza los implementos de aseo asignados (escobas, baldes, cepillos de color específico por área para evitar contaminación cruzada), respeta los tiempos de contacto del desinfectante, prepara las soluciones en las concentraciones indicadas (verificando con tiras reactivas si es necesario) y usa el equipo de protección personal adecuado.

    //-   .col-md-12.col-lg-10.col-xl-10.mb-4
    //-     .tarjeta-avatar-b.h-100
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img05.svg' alt='')
    //-       .tarjeta.bg-color-0.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Verificación analítica:</b> constituye el método de verificación con mayor nivel de objetividad, ya que consiste en tomar muestras de las superficies para su análisis mediante pruebas de laboratorio o equipos portátiles. Entre los métodos utilizados se encuentran:


    //- .row.justify-content-center.mb-5
    //-   .col-xl-5.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
    //-     .crd_hover_txt(data-aos="flip-left").tarjeta
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema2/img06.png", alt="Hisopados microbiológicos")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-center Hisopados microbiológicos
    //-         p.mb-0 Se toman muestras de áreas definidas (por ejemplo, 100 cm²) para realizar el recuento de microorganismos indicadores, como aerobios mesófilos, enterobacterias y coliformes, o para detectar microorganismos patógenos específicos.

    //-   .col-xl-5.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
    //-     .crd_hover_txt(data-aos="flip-left").tarjeta
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema2/img07.png", alt="Bioluminiscencia (ATP)")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-center Bioluminiscencia (ATP)
    //-         p.mb-0 Utiliza un equipo que mide la cantidad de trifosfato de adenosina (ATP), molécula presente en todas las células vivas, incluidos los microorganismos y los residuos orgánicos. Un resultado superior a 100 Unidades Relativas de Luz (URL) indica la presencia de residuos orgánicos, lo que evidencia una limpieza deficiente.

    //- .row.mb-3.mb-lg-5.justify-content-center.align-items-center
    //-   .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
    //-     figure
    //-       img(src="@/assets/curso/tema2/img08.png", data-aos="zoom-in")
    //-   .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
    //-     p.mb-4(data-aos="fade-right") Para garantizar la confiabilidad de los resultados durante la verificación analítica, se debe establecer un plan de muestreo que defina las superficies que serán objeto de evaluación —priorizando aquellas que están en contacto directo con los alimentos—, la frecuencia del muestreo (diaria, semanal o mensual), los métodos de análisis que se utilizarán y los criterios de aceptación establecidos.

    //-     .bg-color-02.p-4.br-15.mb-0
    //-       p.mb-2 Algunos ejemplos de criterios de aceptación son los siguientes:
    //-       ul.lista-ul--color.mb-0
    //-         li.d-flex 
    //-           i.fas.fa-circle-check.me-2
    //-           span <b>Bioluminiscencia (ATP):</b> &lt; 30 URL = limpio; 30-100 URL = aceptable (requiere revisión); &gt; 100 URL = sucio (requiere acción correctiva).
    //-         li.d-flex 
    //-           i.fas.fa-circle-check.me-2
    //-           span <b>Criterio microbiológico:</b> recuento de aerobios mesófilos &lt; 100 UFC/100 cm² en superficies en contacto con alimentos después del proceso de desinfección.

    //- separador
    
    //- #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 2.2 Programa de Control de Plagas

      
    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
    //-     figure
    //-       img(src="@/assets/curso/tema2/img09.png", data-aos="zoom-in")
    //-   .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
    //-     .bg-color-0.p-4.br-15.mb-4
    //-       p.mb-0 Un programa de control de plagas efectivo es aquel que previene la entrada y la proliferación de insectos, roedores y aves, que son vectores de enfermedades y fuentes de contaminación física (pelos, excrementos, fragmentos de alas) y biológica (microorganismos patógenos como Salmonella). Su verificación debe ser tanto interna como externa y constante, basándose en un enfoque de Manejo Integrado de Plagas (MIP).

    //-     p.mb-0 Para lograr este propósito. El control de plagas se basa en la combinación de diferentes tipos de barreras preventivas:

    //- .bg-full-width.bg-fondo-1
    //-   .row.mb-5.justify-content-center.align-items-center
    //-     .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
    //-       figure
    //-         img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in")
    //-     .col-lg-8.order-2.order-lg-2.col-md-12.mb-4.mb-lg-0
    //-       SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
    //-         .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-           .row.justify-content-center.mb-3
    //-             .col-8
    //-               img(src='@/assets/curso/tema2/img11.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
    //-           p <b>Barreras físicas</b>: Son la primera y más importante línea de defensa. Incluyen: mosquiteros en ventanas, cortinas de aire en puertas de acceso, sellos en puertas y ventanas, tapones en tuberías y drenajes, y mantenimiento de la estructura para eliminar grietas y huecos.

    //-         .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-           .row.justify-content-center.mb-3
    //-             .col-8
    //-               img(src='@/assets/curso/tema2/img12.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
    //-           p <b>Barreras químicas</b>: Se refieren al uso de plaguicidas (insecticidas, rodenticidas) de manera controlada y estratégica, generalmente en estaciones de cebo para roedores en el exterior y en trampas de luz ultravioleta con bandejas adhesivas para insectos voladores en el interior.

    //-         .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-           .row.justify-content-center.mb-3
    //-             .col-8
    //-               img(src='@/assets/curso/tema2/img13.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
    //-           p <b>Barreras biológicas</b>: Son menos comunes en plantas de alimentos, pero pueden incluir el uso de feromonas para la confusión sexual de ciertos insectos.

    //- p.mb-5 La eficacia de esta medida debe evaluarse mediante actividades permanentes, de monitoreo y verificación tales como:

    //- .row.justify-content-center.mb-5
    //-   .col-md-12.col-lg-6.col-xl-5.mb-4.mb-lg-0
    //-     .tarjeta-avatar-b.h-100
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img14.svg' alt='')
    //-       .tarjeta.bg-color-01.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>La inspección de dispositivos:</b> revisar las estaciones de cebo para roedores (ubicadas en el perímetro externo y en puntos críticos internos) y las trampas de luz ultravioleta para insectos (en el interior). Se debe verificar que estén en buen estado, numeradas, ubicadas en un croquis actualizado y que su revisión por parte de la empresa contratada o del personal capacitado sea periódica y esté debidamente registrada en una bitácora.


    //-   .col-md-12.col-lg-6.col-xl-5.mb-0.mb-lg-0
    //-     .tarjeta-avatar-b.h-100
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img15.svg' alt='')
    //-       .tarjeta.bg-color-01.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>El análisis de informes y tendencias:</b> el profesional de calidad o el supervisor debe analizar los informes del servicio de control de plagas, prestando especial atención a las "capturas incidentales" o hallazgos de plagas. Un aumento en el número de capturas en una zona específica a lo largo del tiempo es una señal de alerta que requiere una acción correctiva, como una limpieza profunda de un área, el sellado de una nueva entrada o la rotación del cebo utilizado.

    //- separador
    
    //- #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 2.3 Programa de manejo de residuos sólidos y líquidos

      
      
    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-5.col-md-12.mb-0.mb-lg-0.order-2.order-lg-1
    //-     figure
    //-       img(src="@/assets/curso/tema2/img16.png", data-aos="zoom-in")
    //-   .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
    //-     .bg-color-0.p-4.br-15.mb-0
    //-       p.mb-0 Este programa tiene como finalidad gestionar adecuadamente los residuos sólidos y líquidos generados durante el proceso productivo, con el propósito de evitar que se conviertan en fuentes de contaminación o favorezcan la proliferación de plagas. Una gestión inadecuada de los residuos puede comprometer la eficacia de los demás programas de saneamiento, al generar condiciones que faciliten el ingreso y la presencia de roedores, insectos u otros vectores dentro del establecimiento.

      
      
    //- p.mb-5 La verificación de este programa inicia con la correcta clasificación y segregación de los residuos en el lugar donde se generan, de acuerdo con los procedimientos establecidos por la organización y la normativa aplicable.



    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-12
    //-     AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1")
    //-       div(titulo="Residuos aprovechables (reciclables)")
    //-         .row.align-items-center.justify-content-center
    //-           .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
    //-             figure
    //-               img(src="@/assets/curso/tema2/img17.png", data-aos="zoom-in").mx-auto
    //-           .col-lg-7.order-1.mb-3.mb-lg-0
    //-             p.mb-3 Son materiales que pueden reincorporarse a un proceso productivo para ser transformados en nuevos productos.
    //-             p.mb-2 <b>Ejemplos:</b>
    //-             ul.lista-ul
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Papel limpio.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Cartón seco.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Botellas PET.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Envases de vidrio.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Latas de aluminio.

    //-       div(titulo="Residuos orgánicos biodegradables")
    //-         .row.align-items-center.justify-content-center
    //-           .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
    //-             figure
    //-               img(src="@/assets/curso/tema2/img18.png", data-aos="zoom-in").mx-auto
    //-           .col-lg-7.order-1.mb-3.mb-lg-0
    //-             p.mb-3 Son residuos de origen biológico que se descomponen naturalmente.
    //-             p.mb-2 <b>Ejemplos:</b>
    //-             ul.lista-ul
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Cáscaras de frutas.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Restos de verduras.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Restos de preparación.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Borra de café.

    //-       div(titulo="Residuos no aprovechables")
    //-         .row.align-items-center.justify-content-center
    //-           .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
    //-             figure
    //-               img(src="@/assets/curso/tema2/img19.png", data-aos="zoom-in").mx-auto
    //-           .col-lg-7.order-1.mb-3.mb-lg-0
    //-             p.mb-3 Son residuos que no tienen potencial de reciclaje o valorización.
    //-             p.mb-2 <b>Ejemplos:</b>
    //-             ul.lista-ul
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Papel higiénico usado.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Servilletas contaminadas.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Plásticos contaminados.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Residuos de barrido.

    //-       div(titulo="Residuos peligrosos")
    //-         .row.align-items-center.justify-content-center
    //-           .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
    //-             figure
    //-               img(src="@/assets/curso/tema2/img20.png", data-aos="zoom-in").mx-auto
    //-           .col-lg-7.order-1.mb-3.mb-lg-0
    //-             p.mb-3 Son residuos que presentan características corrosivas, reactivas, explosivas, tóxicas, inflamables o infecciosas.
    //-             p.mb-2 <b>Ejemplos:</b>
    //-             ul.lista-ul
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Envases de plaguicidas.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Aerosoles.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Pilas.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Bombillas.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Aceites usados.

    //-       div(titulo="Residuos con riesgo biológico")
    //-         .row.align-items-center.justify-content-center
    //-           .col-lg-5.col-md-10.order-2.mb-0.mb-lg-0
    //-             figure
    //-               img(src="@/assets/curso/tema2/img21.png", data-aos="zoom-in").mx-auto
    //-           .col-lg-7.order-1.mb-3.mb-lg-0
    //-             p.mb-3 Son residuos que contienen agentes patógenos y pueden causar enfermedades infecciosas.
    //-             p.mb-2 <b>Ejemplos:</b>
    //-             ul.lista-ul
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Material de curación.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Guantes.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Tapabocas.
    //-               li 
    //-                 i.lista-ul__vineta(style="color: #8AB064")
    //-                 | Muestras contaminadas.
 
    //- p.mb-5 Además de la adecuada segregación de los residuos, la verificación comprende la revisión de la infraestructura destinada a su manejo y de las frecuencias de recolección establecidas. Para ello, se deben considerar los siguientes aspectos:

    //- .row.justify-content-center.mb-5
    //-   .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
    //-     .crd_hover_txt(data-aos="flip-left").tarjeta
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema2/img22.png", alt="Recipientes")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-center Recipientes
    //-         p.mb-0 Verificar que los contenedores de residuos se encuentren en buen estado (sin roturas y de fácil limpieza), dispongan de tapa con accionamiento no manual (pedal) y estén claramente identificados mediante colores o etiquetas, de acuerdo con el tipo de residuo.

    //-   .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
    //-     .crd_hover_txt(data-aos="flip-left").tarjeta
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema2/img23.png", alt="Frecuencia de remoción")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-center Frecuencia de remoción
    //-         p.mb-0 Verificar que los residuos sean retirados de las áreas de producción con la frecuencia necesaria para evitar su acumulación y la generación de malos olores. Como buena práctica, se recomienda que los residuos orgánicos no permanezcan dentro del establecimiento durante la noche, salvo que sean almacenados en un cuarto de refrigeración destinado específicamente para este fin.

    //-   .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
    //-     .crd_hover_txt(data-aos="flip-left").tarjeta
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema2/img24.png", alt="Manejo de residuos líquidos (efluentes)")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-center Manejo de residuos líquidos (efluentes)
    //-         p.mb-0 Comprobar que los pisos cuenten con la pendiente adecuada (mínimo 2 %) hacia los drenajes, que estos tengan la capacidad suficiente para evacuar el agua de manera eficiente y que dispongan de rejillas o trampas para la retención de sólidos y grasas. Asimismo, se debe verificar que las trampas de grasa sean limpiadas periódicamente y que esta actividad quede registrada en el formato de control correspondiente.

    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-12.col-md-12.mb-0.mb-lg-0
    //-     .titulo-sexto.color-acento-contenido.mb-3
    //-       h5 
    //-         b Tabla 2.
    //-       span Lista de verificación para el programa de manejo de residuos sólidos y líquidos
    //-     .tabla-a.color-acento-contenido.tb-custom.mb-0
    //-       table
    //-         caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
    //-         thead
    //-           tr
    //-             th Aspecto por verificar
    //-             th Conforme
    //-             th No conforme
    //-             th Observaciones
    //-         tbody
    //-           tr
    //-             td Los recipientes tienen tapa y están en buen estado.
    //-             td.text-center X
    //-             td.text-center -
    //-             td.text-center -
    //-           tr
    //-             td Los recipientes están identificados por tipo de residuo.
    //-             td.text-center -
    //-             td.text-center X
    //-             td.text-center -
    //-           tr
    //-             td No hay acumulación de basura fuera de los recipientes.
    //-             td.text-center -
    //-             td.text-center X
    //-             td.text-center -
    //-           tr
    //-             td El área de almacenamiento central de residuos está limpia y organizada.
    //-             td.text-center X
    //-             td.text-center -
    //-             td.text-center -
    //-           tr
    //-             td Las trampas de grasa tienen registro de limpieza.
    //-             td.text-center -
    //-             td.text-center X
    //-             td.text-center -

    //- separador
    
    //- #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 2.4 Programa de abastecimiento de agua potable

      
    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-4.col-md-12.mb-0.mb-lg-0.order-2.order-lg-1
    //-     figure
    //-       img(src="@/assets/curso/tema2/img25.png", data-aos="zoom-in")
    //-   .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
    //-     .bg-color-02.p-4.br-15.mb-0
    //-       p.mb-0 El agua constituye un insumo fundamental en la elaboración de numerosos alimentos y un recurso indispensable para las actividades de limpieza y desinfección. El programa de abastecimiento de agua potable tiene como finalidad garantizar que el agua utilizada en contacto con los alimentos, las superficies, los equipos o las manos del personal manipulador cumpla con las condiciones de potabilidad establecidas en la Resolución 2115 de 2007, mediante la cual se señalan las características, los instrumentos básicos y las frecuencias del sistema de control y vigilancia para la calidad del agua destinada al consumo humano.

    //- p.mb-5 La verificación de este programa comprende el monitoreo de diferentes parámetros de control, como el cloro residual libre, el pH y la calidad microbiológica del agua. Para ello, se desarrollan las siguientes actividades:
    

    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-10.col-md-12
    //-     .row.justify-content-center.align-items-center.mb-0
    //-       .col-lg-8.mb-4.mb-lg-0
    //-         AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-03 bg-color-nuevo")
    //-           div(titulo="Monitoreo de cloro residual libre")
    //-             p.mb-0 Consiste en medir el cloro residual libre en los puntos de uso, como grifos, tanques de lavado y mangueras, diariamente o con la frecuencia establecida por la organización (generalmente cada cuatro horas en procesos de producción continua). El resultado debe encontrarse dentro del rango establecido por la normativa vigente (entre 0,3 y 2,0 ppm). Para esta actividad se emplean kits colorimétricos o tiras reactivas.

    //-           div(titulo="Medición del pH")
    //-             p.mb-0 Consiste en determinar el pH del agua, ya que este parámetro puede influir en la eficacia de los desinfectantes y en la calidad de determinados productos. La medición se realiza mediante un pH-metro o tiras indicadoras.

    //-           div(titulo="Análisis microbiológico y fisicoquímico")
    //-             p.mb-0 Consiste en tomar muestras de agua con la periodicidad establecida por la normativa vigente o el análisis de riesgos y remitirlas a un laboratorio acreditado por el IDEAM. El propósito es confirmar la ausencia de microorganismos indicadores, como coliformes totales y Escherichia coli, así como verificar parámetros fisicoquímicos, entre ellos turbiedad, color, olor, sólidos disueltos y metales pesados.


    //-       .col-lg-4.col-md-8.mb-0
    //-         img(src="@/assets/curso/tema2/img26.png", data-aos="zoom-in")

    //- p.mb-5 Además del control de estos parámetros, la verificación incluye la evaluación de la infraestructura asociada al sistema de abastecimiento y distribución de agua. Para ello, se recomienda realizar periódicamente las siguientes actividades:



    //- .row.justify-content-center.mb-5
    //-   .col-md-12.col-lg-6.col-xl-5.mb-4.mb-lg-0
    //-     .tarjeta-avatar-b.h-100
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img27.svg' alt='')
    //-       .tarjeta.bg-color-01.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Revisión de la red de distribución:</b> verificar que no existan conexiones cruzadas entre la red de agua potable y las redes de agua no potable, utilizadas, por ejemplo, en sistemas de enfriamiento o calderas. Estas conexiones pueden generar reflujo y provocar la contaminación de la red principal de agua potable. Asimismo, se debe verificar la instalación y el correcto funcionamiento de los dispositivos antirretorno o válvulas de retención. 


    //-   .col-md-12.col-lg-6.col-xl-5.mb-0.mb-lg-0
    //-     .tarjeta-avatar-b.h-100
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img28.svg' alt='')
    //-       .tarjeta.bg-color-01.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Tanques de almacenamiento:</b> verificar que los tanques permanezcan tapados, se encuentren en buen estado, estén libres de grietas y reciban procesos periódicos de limpieza y desinfección, al menos cada seis meses, dejando evidencia de esta actividad en los registros correspondientes.

    //- separador
    
    //- #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 2.5 Programa de mantenimiento de instalaciones y equipos

    
    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1.d-none.d-lg-block
    //-     figure
    //-       img(src="@/assets/curso/tema2/img29.png", data-aos="zoom-in")
    //-   .col-lg-9.order-1.order-lg-2.mb-0.mb-lg-0
    //-     p.mb-3 Aunque en ocasiones su importancia puede subestimarse, el estado físico de las instalaciones y los equipos constituye un factor determinante para garantizar la inocuidad alimentaria. La presencia de grietas en paredes, pintura descascarada, empaques deteriorados, pernos sueltos o equipos con fugas de lubricantes puede convertirse en una fuente potencial de contaminación física y química, comprometiendo la eficacia del sistema de saneamiento.
    //-     p.mb-4 En este programa resulta fundamental diferenciar los tipos de mantenimiento que se aplican en la industria alimentaria:

    //-     .tarjeta-avatar-b.h-100.mb-4.mb-lg-5
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img30.svg' alt='')
    //-       .tarjeta.bg-color-0.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Mantenimiento correctivo:</b> corresponde a las actividades que se realizan una vez se presenta una falla en el equipo. Se caracteriza por ser un mantenimiento reactivo, que puede incrementar los costos operativos y representar un riesgo para la inocuidad, debido a que la falla pudo haber ocasionado contaminación del producto. Un ejemplo de ello es el desprendimiento de un tornillo que cae sobre el alimento durante el proceso de producción. 

    //-     .tarjeta-avatar-b.h-100.mb-0
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img31.svg' alt='')
    //-       .tarjeta.bg-color-0.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Mantenimiento preventivo:</b> corresponde a las actividades programadas para prevenir fallas y prolongar la vida útil de los equipos. Se desarrolla con base en un cronograma que contempla actividades como la lubricación de rodamientos, la revisión de sellos o la calibración de sensores. Este constituye el enfoque recomendado para garantizar la continuidad operacional y la inocuidad de los procesos. 

    //- p.mb-5 Asimismo, para garantizar la eficacia del programa, la verificación debe incluir actividades orientadas a confirmar el adecuado estado de las instalaciones y los equipos, entre las cuales se destacan:


    //- .row.mb-3.mb-lg-5.justify-content-center.align-items-center
    //-   .col-lg-4.col-md-10.mb-0.mb-lg-0.order-2.order-lg-2
    //-     figure
    //-       img(src="@/assets/curso/tema2/img33.png", data-aos="zoom-in").mx-auto
    //-   .col-lg-8.col-md-12.order-1.order-lg-1.mb-5.mb-lg-0
    //-     .bg-fondo-5.p-4
    //-       SlyderA(tipo="b").bg-color-white.p-3.tarjeta
    //-         .tarjeta.p-4.h-100.mb-0
    //-           h4 Inspección visual rutinaria
    //-           p.mb-0 Verificar que el personal de producción y calidad identifique y reporte oportunamente cualquier anomalía mediante listas de chequeo de las condiciones de la planta.

    //-         .tarjeta.p-4.h-100.mb-0
    //-           h4 Revisión del plan de mantenimiento preventivo
    //-           p.mb-0 Verificar el cumplimiento del cronograma de mantenimiento de los equipos críticos y confirmar que todas las intervenciones se encuentren registradas, indicando las actividades realizadas, el responsable de su ejecución, los repuestos utilizados y el uso de lubricantes de grado alimenticio (NSF H1), cuando corresponda.

    //-         .tarjeta.p-4.h-100.mb-0
    //-           h4 Verificación posterior al mantenimiento (liberación)
    //-           p.mb-0 Comprobar que, una vez finalizada una reparación o intervención de mantenimiento, el equipo y el área circundante se encuentren libres de herramientas, residuos de soldadura, virutas metálicas, partes sueltas o lubricantes que puedan representar un riesgo de contaminación, especialmente cuando estos no correspondan a lubricantes de grado alimenticio. Cuando sea necesario, se debe verificar la realización de una limpieza y desinfección profunda del equipo antes de reanudar la producción, dejando evidencia de esta actividad en los registros correspondientes como parte del proceso de liberación del equipo.

    //- separador
    
    //- #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 2.6 Programa de control de proveedores y materias primas


      
    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-6.col-md-12.mb-0.mb-lg-0.order-2.order-lg-1
    //-     figure
    //-       img(src="@/assets/curso/tema2/img34.png", data-aos="zoom-in")
    //-   .col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
    //-     .bg-color-02.p-4.br-15.mb-0
    //-       p.mb-0 La inocuidad alimentaria inicia desde la selección de los proveedores y el control de las materias primas que ingresan al establecimiento. Por esta razón, el programa de control de proveedores y materias primas constituye un elemento fundamental para garantizar que los insumos utilizados durante el proceso productivo cumplan con los requisitos de calidad e inocuidad establecidos.

    //- p.mb-5 Para alcanzar este objetivo, el programa contempla las siguientes actividades de evaluación y aprobación de proveedores:


    //- .row.justify-content-center.mb-5
    //-   .col-md-12.col-lg-6.col-xl-5.mb-4.mb-lg-0
    //-     .tarjeta-avatar-b.h-100
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img35.svg' alt='')
    //-       .tarjeta.bg-color-01.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Evaluación inicial:</b> antes de establecer una relación comercial con un nuevo proveedor, se debe realizar una evaluación mediante auditorías, revisión de la documentación (registros sanitarios, certificaciones de Buenas Prácticas de Manufactura (BPM) y del sistema HACCP, cuando aplique) y análisis de los productos suministrados.  


    //-   .col-md-12.col-lg-6.col-xl-5.mb-0.mb-lg-0
    //-     .tarjeta-avatar-b.h-100
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img36.svg' alt='')
    //-       .tarjeta.bg-color-01.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Lista de proveedores aprobados:</b> verificar que las materias primas sean adquiridas únicamente a proveedores previamente evaluados y aprobados. Asimismo, se debe confirmar que la lista de proveedores aprobados permanezca actualizada. 

    //- p.mb-5 Adicionalmente, la verificación durante la recepción de las materias primas constituye un punto crítico de control dentro del programa. En esta etapa se deben evaluar los siguientes aspectos:

    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
    //-     figure
    //-       img(src="@/assets/curso/tema2/img41.png", data-aos="zoom-in")
    //-   .col-lg-8.order-2.order-lg-1.col-md-12.mb-4.mb-lg-0
    //-     SlyderF(columnas="col-lg-12 col-xl-6 col-md-12 col-sm-12 p-2")
    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema2/img37.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
    //-         h4.text-center Documentación
    //-         p.text-center Verificar que el proveedor se encuentre incluido en la lista de proveedores aprobados, que el producto cuente con el registro sanitario correspondiente y que se adjunten los certificados de análisis del lote, cuando aplique.

    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema2/img38.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
    //-         h4.text-center Condiciones del vehículo de transporte
    //-         p.text-center Comprobar las condiciones de limpieza, la ausencia de plagas y el mantenimiento de la temperatura requerida para el transporte de las materias primas, cuando corresponda.

    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema2/img39.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
    //-         h4.text-center Inspección de las materias primas
    //-         p.text-center Verificar el cumplimiento de las especificaciones establecidas, incluyendo temperatura, color, olor, textura, ausencia de daños físicos, evidencia de plagas e integridad de los empaques.

    //-       .tarjeta.tarjeta--blanca.shadow-sm.p-4.h-100
    //-         .row.justify-content-center.mb-3
    //-           .col-8
    //-             img(src='@/assets/curso/tema2/img40.svg' alt='', style="width: 100px; height: 100px; ").mx-auto
    //-         h4.text-center Muestreo y análisis
    //-         p.text-center Cuando se trate de materias primas de alto riesgo, se podrán tomar muestras representativas del lote para realizar análisis rápidos o ensayos de laboratorio antes de autorizar su recepción.

    
    //- .bg-full-width.bg-fondo-1
    //-   .row.justify-content-center.align-items-center.z-2.mb-5
    //-     .col-lg-10
    //-       .titulo-sexto.color-acento-contenido.mb-4
    //-         h5.text-bold.mb-2 Figura 2.
    //-         span Flujograma de verificación en la recepción de materias primas
    //-       img.mb-2(data-aos="fade-up", src="@/assets/curso/tema2/img42.svg", alt="La figura 2 corresponde a un diagrama de flujo que describe el procedimiento de verificación durante la recepción de materias primas en una planta de alimentos. El proceso inicia con la llegada del vehículo y la validación de que el proveedor se encuentre aprobado por la organización. Posteriormente, se inspeccionan la documentación, la temperatura, la ausencia de plagas y el cumplimiento de las especificaciones del producto. Si se detecta alguna no conformidad, la materia prima se rechaza o se envía a cuarentena y se notifica a las áreas responsables para la implementación de las acciones correctivas. Cuando todos los requisitos se cumplen, el producto es liberado para su almacenamiento y se registra el resultado de la verificación. El diagrama evidencia la secuencia de actividades y los puntos de decisión que garantizan el ingreso al proceso productivo únicamente de materias primas que cumplen los requisitos de calidad e inocuidad.").w-75.mx-auto
    //-       figcaption Nota. Adaptado de la Resolución 2674 de 2013 y del Decreto 60 de 2002.
    
    //- separador
    
    //- #t_2_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 2.7 Programa de capacitación del personal

    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
    //-     figure
    //-       img(src="@/assets/curso/tema2/img43.png", data-aos="zoom-in")
    //-   .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
    //-     p.mb-4 El personal constituye un elemento fundamental para garantizar la inocuidad alimentaria. Sin la formación adecuada, las actividades de manipulación pueden convertirse en una fuente potencial de contaminación. Por esta razón, el programa de capacitación del personal representa un componente esencial dentro de los programas de saneamiento.
    //-     .bg-color-0.p-4.br-15.mb-0
    //-       p.mb-0 Con el propósito de fortalecer las competencias del talento humano y garantizar el cumplimiento de las condiciones de inocuidad, todo el personal que ingrese a la organización debe recibir capacitación en Buenas Prácticas de Manufactura (BPM) y programas de saneamiento antes de iniciar las actividades de producción. Asimismo, la organización debe disponer de un plan de capacitación continua que permita actualizar y reforzar los conocimientos relacionados con las actividades desarrolladas en el proceso productivo.


    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
    //-     figure
    //-       img(src="@/assets/curso/tema2/img44.png", data-aos="zoom-in")
    //-   .col-lg-9.order-1.order-lg-1.mb-5.mb-lg-0
    //-     .bg-color-02.p-4.br-15.mb-0
    //-       p.mb-2 Entre los temas que deben incluirse en el programa de capacitación se encuentran:

    //-       .row.align-items-center.justify-content-center
    //-         .col-lg-7.mb-0.mb-lg-0
    //-           ul.lista-ul--color.mb-0
    //-             li.d-flex 
    //-               i.fas.fa-circle-check.me-2
    //-               span Lavado de manos. 
    //-             li.d-flex 
    //-               i.fas.fa-circle-check.me-2
    //-               span Manejo de residuos. 
    //-             li.d-flex 
    //-               i.fas.fa-circle-check.me-2
    //-               span Reporte de condiciones inseguras. 
    //-             li.d-flex 
    //-               i.fas.fa-circle-check.me-2
    //-               span Buenas Prácticas de Manufactura (BPM). 
    //-             li.d-flex 
    //-               i.fas.fa-circle-check.me-2
    //-               span Programas de saneamiento e inocuidad alimentaria. 

    //-         .col-lg-5.col-md-8.d-none.d-lg-block
    //-           figure
    //-             img(src="@/assets/curso/tema2/img45.png", data-aos="zoom-in").mx-auto

    //- p.mb-5 La eficacia del programa de capacitación debe verificarse periódicamente para comprobar que los conocimientos adquiridos se reflejen en el desempeño del personal durante el desarrollo de sus actividades. Para ello, pueden implementarse los siguientes mecanismos de evaluación:



    //- .row.justify-content-center.mb-5
    //-   .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
    //-     .crd_hover_txt(data-aos="flip-left").tarjeta
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema2/img46.png", alt="Evaluaciones escritas o prácticas")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-center Evaluaciones escritas o prácticas
    //-         p.mb-0.p-lg-0.p-1 Permiten valorar el nivel de comprensión alcanzado al finalizar las actividades de capacitación.

    //-   .col-xl-4.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
    //-     .crd_hover_txt(data-aos="flip-left").tarjeta
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema2/img47.png", alt="Observación directa de las actividades")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-center Observación directa de las actividades
    //-         p.mb-0 Consiste en verificar que el personal aplique correctamente los procedimientos establecidos durante el desarrollo de sus funciones, como la técnica adecuada para el lavado de manos.

    //-   .col-xl-4.col-lg-6.col-md-12.col-12.mb-0.mb-xl-0
    //-     .crd_hover_txt(data-aos="flip-left").tarjeta
    //-       .crd_hover_txt--img
    //-         figure
    //-           img(src="@/assets/curso/tema2/img48.png", alt="Indicadores de desempeño")
    //-       .crd_hover_txt--body
    //-         h4.mb-3.text-center Indicadores de desempeño
    //-         p.mb-0 Permiten monitorear aspectos como el número de no conformidades asociadas al incumplimiento de las Buenas Prácticas de Manufactura, por ejemplo, el uso inadecuado de la dotación o el incumplimiento de las normas de higiene personal.



    //- .row.mb-3.justify-content-center.align-items-center
    //-   .col-lg-12
    //-     .bg-color-01.p-4.br-15
    //-       p.mb-0 Estas actividades permiten evaluar el nivel de apropiación de los conocimientos por parte del personal, identificar necesidades de capacitación o refuerzo y contribuir al mejoramiento continuo de las prácticas de inocuidad dentro de la organización.
    

    //- separador
    
    //- #t_2_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
    //-   h2 2.8 Verificación, registros y acciones correctivas

    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-4.col-md-10.mb-0.mb-lg-0.order-2.order-lg-1
    //-     figure
    //-       img(src="@/assets/curso/tema2/img49.png", data-aos="zoom-in")
    //-   .col-lg-8.order-1.order-lg-1.mb-4.mb-lg-0
    //-     .bg-color-02.p-4.br-15.mb-4
    //-       p.mb-0 La verificación de los programas de saneamiento debe estar respaldada por registros que constituyan la evidencia objetiva de la ejecución de las actividades y de los resultados obtenidos durante el proceso de verificación. Estos registros deben elaborarse de forma clara y legible, diligenciarse con tinta indeleble, sin enmendaduras y contener la fecha, la firma del responsable de la actividad y, cuando corresponda, la firma de quien realiza la verificación.

    //-     p.mb-0 Los registros permiten demostrar el cumplimiento de los procedimientos establecidos, facilitan la trazabilidad de la información y constituyen un soporte para los procesos de inspección, auditoría y mejora continua.


    //- .row.mb-3.justify-content-center.align-items-center
    //-   .col-lg-12
    //-     .bg-color-01.p-4.br-15
    //-       p.mb-0 Cuando durante la verificación se identifica una no conformidad, como niveles inadecuados de cloro residual, resultados no conformes en pruebas de ATP, evidencia de plagas o fallas en las instalaciones y equipos, se deben implementar las acciones correctivas establecidas por la organización. Estas acciones tienen como propósito eliminar la causa de la no conformidad y prevenir su recurrencia.
    
    //- p.mb-5 Para ello, el proceso de acción correctiva comprende las siguientes etapas:


    
    //- .row.mb-5.justify-content-center.align-items-center
    //-   .col-lg-3.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2.d-none.d-lg-block
    //-     figure
    //-       img(src="@/assets/curso/tema2/img50.png", data-aos="zoom-in")
    //-   .col-lg-9.order-1.order-lg-1.mb-4.mb-lg-0
    //-     .tarjeta-avatar-b.h-100.mb-4 
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img51.svg' alt='')
    //-       .tarjeta.bg-color-0.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Corrección inmediata:</b> implementar las medidas necesarias para controlar o eliminar la no conformidad identificada.

    //-     .tarjeta-avatar-b.h-100.mb-4 
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img51.svg' alt='')
    //-       .tarjeta.bg-color-0.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Contención del producto potencialmente afectado:</b> evaluar el riesgo asociado y definir el tratamiento que debe darse al producto involucrado.

    //-     .tarjeta-avatar-b.h-100.mb-4 
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img51.svg' alt='')
    //-       .tarjeta.bg-color-0.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Análisis de la causa raíz:</b> identificar el origen de la no conformidad mediante herramientas de análisis, como la técnica de los cinco porqués.

    //-     .tarjeta-avatar-b.h-100.mb-0 
    //-       .tarjeta-avatar-b__img
    //-         img(src='@/assets/curso/tema2/img51.svg' alt='')
    //-       .tarjeta.bg-color-0.h-100
    //-         .px-2.py-3
    //-           p.mb-0.p-1 <b>Implementación y verificación de acciones correctivas:</b> establecer las medidas necesarias para evitar la recurrencia de la no conformidad y verificar posteriormente su eficacia.



    
    //- .bg-full-width.bg-fondo-1
    //-   .row.justify-content-center.align-items-center.z-2.mb-5
    //-     .col-lg-10
    //-       .titulo-sexto.color-acento-contenido.mb-4
    //-         h5.mb-2.text-bold Figura 3.
    //-         span Ciclo de verificación y mejora en los programas de saneamiento
    //-       img.mb-2(data-aos="fade-up", src="@/assets/curso/tema2/img52.svg", alt="La figura 3 presenta un diagrama de flujo que representa el ciclo de verificación y mejora continua aplicado a los programas de saneamiento. El proceso inicia con la ejecución de las actividades de saneamiento de acuerdo con los Procedimientos Operativos Estandarizados de Saneamiento (POES) y continúa con el registro de las actividades realizadas. Posteriormente, se verifica la eficacia de las acciones implementadas mediante verificaciones visuales, operacionales o analíticas. Cuando los resultados son conformes, se registra la conformidad y se archiva el registro correspondiente. En caso de identificarse una no conformidad, se implementa una acción correctiva inmediata para controlar la situación, seguida de la investigación de la causa raíz que originó el incumplimiento. A partir de este análisis se establece e implementa una acción correctiva definitiva para evitar la recurrencia de la no conformidad. Finalmente, se verifica la eficacia de las acciones correctivas implementadas y, una vez comprobada su efectividad, el proceso retorna a la ejecución de las actividades de saneamiento, evidenciando el carácter cíclico del mejoramiento continuo y el fortalecimiento permanente de la inocuidad alimentaria.").w-75.mx-auto
    //-       figcaption Nota. Elaboración propia, adaptada de la Resolución 2674 de 2013, el Decreto 60 de 2002 y las Buenas Prácticas de Manufactura (BPM).
    

    //- p.mb-5 Con el propósito de fortalecer los conocimientos desarrollados sobre la verificación de los programas que soportan las condiciones de saneamiento, se invita a escuchar el siguiente pódcast. En este recurso se profundiza en la importancia de los programas de limpieza y desinfección, control de plagas, manejo de residuos, abastecimiento de agua, mantenimiento de instalaciones y demás actividades de verificación que contribuyen al aseguramiento de la inocuidad alimentaria y al cumplimiento de la normatividad sanitaria.



    //- .container
    //-   .row.justify-content-center.align-items-center.mb-3
    //-     .col-lg-7.order-lg-2.order-2
    //-       .row.bg-color-3.align-items-center.justify-content-center.br-15.p-0
    //-         .col-md-8.col-lg-5.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1.p-0
    //-           figure
    //-             img(src="@/assets/curso/tema2/img55.png", data-aos="fade-right").w-md-75.mx-auto
    //-         .col-lg-7.order-1.order-md-1.order-lg-2.p-4.p-lg-3
    //-           p(data-aos="fade-left").mb-4 A continuación, se invita a ir al siguiente podcast: 
    //-           TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
    //-             texto="Podcast pendiente"
    //-             tiempo
    //-             :audio="require_src('@/assets/curso/audio/2.mp3')"
    //-           )
    //-     .col-lg-5.col-md-10.order-lg-1.order-1.mb-4.mb-lg-0
    //-       figure
    //-         img(src="@/assets/curso/tema2/img53.png", data-aos="zoom-in")


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
