import icon from 'assets/toronja.jpg'

export default {
  name: 'toronja',
  sci: 'citrus paradisi',
  icon,
  note: 'alta',
  description: [
    'es una planta del género citrus, de la familia de las rutáceas, cultivado por su fruta.',
    'el aceite esencial que se extrae de la cáscara del fruto, categorizado dentro de la familia de los aromas agrios, caracterizado por un aroma limpio, fresco, energizante y vigorizante.',
  ],
  uses: [
    {
      name: 'piel',
      description: 'tonifica la piel y los tejidos. estimula el crecimiento del cabello. en cosmética se usa para pieles congestionadas y grasas y en tratamientos para el acné. utilizado en masaje, ayuda a combatir la celulitis por sus propiedades astringentes.'
    },
    {
      name: 'sangre',
      description: 'ayuda en la purificación de la sangre.',
    },
    {
      name: 'digestivo',
      description: 'y tónico estomacal.'
    },
    {
      name: 'emocional',
      description: 'ayuda a levantar el ánimo.'
    }
  ],
  concerns: [
    'puede provocar que la piel sea más sensible a la luz y aumentar la posibilidad de sufrir quemaduras solares e irritaciones  por lo que se recomienda evitar la exposición al sol durante las 12-14 horas siguientes despues de un masaje de aromaterapia con algún aceite de la familia de los cítricos.',
  ],
  tags: [
    'revitalizante',
    'tonificante',
    'relajante',
    'digestivo',
    'estimulante',
    'astringente'
  ]
}
