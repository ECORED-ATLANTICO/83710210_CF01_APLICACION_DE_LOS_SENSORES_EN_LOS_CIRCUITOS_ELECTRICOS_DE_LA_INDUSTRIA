<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Sensores, medición y adquisición',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar y reforzar su capacidad para identificar los conceptos relacionados con la medición, los sensores, los transductores, las señales, el acondicionamiento de señales y los sistemas electrónicos básicos de control, aplicados a procesos industriales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra sólidos conocimientos sobre los sensores, la medición, la adquisición de señales y los sistemas electrónicos básicos de control.',
      mensaje_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto: '¿En qué consiste la medición en un entorno industrial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En comparar una variable física con una unidad de medida estándar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En eliminar la corriente de los circuitos de control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En sustituir la señal del sensor por una fuente fija.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En cambiar la frecuencia de trabajo de los actuadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La medición es el proceso mediante el cual se determina el valor de una variable física comparándola con un patrón o unidad de medida preestablecida.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes conceptos corresponde a una característica relacionada con la medición?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exactitud.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aislamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Programación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conmutación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. La exactitud es una característica importante para determinar qué tan cercana es una medición al valor real de la variable.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal de un sensor en un proceso industrial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar únicamente señales digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Detectar una variable física y proporcionar información sobre ella.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir todos los elementos de control.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar automáticamente la potencia del circuito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El sensor permite captar información relacionada con una variable física presente en un proceso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes opciones corresponde a una variable física susceptible de ser medida en la industria?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Temperatura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Programa informático.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contraseña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nombre del operador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La temperatura es una variable física que puede ser detectada y medida mediante sensores.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿A qué se refiere el rango de un instrumento de medición?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La velocidad de comunicación del sensor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El intervalo de valores que puede medir el instrumento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de cables utilizados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tamaño físico del sensor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El rango establece los límites inferior y superior dentro de los cuales un instrumento puede realizar una medición.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿En qué consiste el proceso de captación dentro de un sistema de medición?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La identificación y adquisición de una variable del proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La eliminación de todos los componentes eléctricos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La programación del operador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El aumento de la temperatura del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La captación permite obtener información de una variable física mediante los elementos destinados para su medición.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función principal de un transductor en un sistema electrónico?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transformar una forma de energía o señal en otra.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la variable que se desea medir.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir el sistema de alimentación eléctrica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desconectar automáticamente todos los sensores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El transductor permite transformar una magnitud o forma de energía en una señal que pueda ser utilizada por el sistema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes afirmaciones describe mejor a una señal analógica?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo puede tener los valores cero y uno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Puede representar valores variables dentro de un intervalo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No puede ser medida por sensores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Siempre corresponde a una señal binaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Una señal analógica puede variar de manera continua y representar diferentes valores de una variable física.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuál es la característica principal de una señal binaria?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tener infinitos estados posibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Representar dos estados o valores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ser exclusivamente una señal de temperatura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No poder utilizarse en sistemas electrónicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Las señales binarias utilizan dos estados para representar información, comúnmente asociados con los valores 0 y 1.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la finalidad del acondicionamiento de señal en un circuito industrial?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Adaptar una señal para que pueda ser procesada adecuadamente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar completamente la información del sensor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la variable física del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impedir la adquisición de señales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El acondicionamiento adapta las señales provenientes de sensores para facilitar su adecuada adquisición y procesamiento.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Por qué es indispensable el acondicionamiento de la señal antes de su procesamiento digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque todas las señales tienen automáticamente las condiciones requeridas por el procesador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque algunas señales pueden ser demasiado pequeñas, demasiado grandes o no cumplir los requerimientos eléctricos del procesador.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque los sensores no producen ningún tipo de señal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque el procesador no necesita recibir información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El acondicionamiento permite adaptar las señales para que puedan ser captadas correctamente por el elemento procesador.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la función del conversor análogo-digital (ADC) en la adquisición de datos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convertir valores analógicos en códigos binarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Convertir códigos binarios en señales mecánicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar las señales provenientes de sensores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la temperatura del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El conversor análogo-digital toma valores analógicos y los transforma en códigos binarios para facilitar su procesamiento electrónico.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'En la estructura de un sistema de medición, ¿qué papel desempeña el sensor?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Captar información relacionada con la variable física del proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Realizar únicamente operaciones matemáticas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir al procesador electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el circuito de acondicionamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El sensor constituye uno de los elementos que permiten obtener información de las variables presentes en el proceso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la secuencia lógica general en la adquisición de señales de un proceso?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Variable física → sensor → señal → procesamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Procesador → variable física → sensor → eliminación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Señal → variable física → eliminación → sensor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actuador → sensor → variable → desconexión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. En términos generales, el sensor permite captar la variable y generar una señal que posteriormente puede ser acondicionada y procesada.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el propósito central de la instrumentación industrial?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Medir y controlar variables que intervienen en los procesos industriales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar todos los sensores de una industria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de sistemas electrónicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. La instrumentación permite obtener información de las variables del proceso y contribuir a su control.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué beneficio aporta el procesamiento de datos obtenidos por los sensores?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tomar decisiones relacionadas con el comportamiento del proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la medición de las variables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desconectar permanentemente los dispositivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el procesamiento de señales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La información captada por los sensores puede ser procesada para establecer acciones de control sobre el proceso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de los siguientes elementos forma parte de los sistemas electrónicos básicos de control?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compuerta lógica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Documento administrativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inventario de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Las compuertas lógicas hacen parte de los elementos utilizados en sistemas electrónicos básicos de control.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué dispositivo permite representar valores continuos mediante códigos binarios en un sistema de control?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conversor análogo-digital.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un interruptor mecánico únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una señal de voz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un elemento de protección personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El conversor análogo-digital permite representar valores analógicos mediante códigos binarios.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el criterio fundamental para la selección adecuada de un sensor en la industria?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener información pertinente sobre la variable que se desea medir.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de controlar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar cualquier tipo de procesamiento electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Convertir automáticamente toda señal en potencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. La selección del sensor debe responder a la variable que se desea captar y a las condiciones del proceso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'En conjunto, ¿cuál es la utilidad del sistema de adquisición de señales y control en una planta industrial?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener información del proceso y utilizarla para establecer acciones de control.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar las variables del proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impedir la comunicación entre los dispositivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir todos los componentes electrónicos por elementos mecánicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! La adquisición de señales mediante sensores permite obtener información del proceso y utilizarla como base para implementar sistemas electrónicos básicos de control.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
