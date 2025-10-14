import icon from 'assets/ylang-ylang.jpg'

export default {
  name: 'ylang ylang',
  sci: 'cananga odorata',
  icon,
  note: 'baja',
  description: [
    'es un árbol oriundo de la india, java y filipinas conocido comúnmente con el nombre de cananga, de la familia de las anonáceas y que se ha extendido a muchos países de la zona intertropical, en especial a centroamérica y el norte de sudamérica siendo muy abundante en las regiones cálidas del norte de venezuela.',
    'el aceite esencial de la flor se obtiene por destilación de las flores.',
    'los componentes aromáticos del aceite de ylang-ylang son benzil acetato, linalol y p-cresil metil éter y metil benzoato, responsable de su característico olor.',
    '## componentes activos',
    'eugenol, geraniol, linalol, safrol, ylangol, terpenos, pineno, benzoato de bencilo, y una combinación de ácidos acético, benzoico, fórmico, salicílico y valérico.',
  ],
  uses: [
    {
      name: 'relajante',
      description: 'sus propiedades tranquilizantes sobre el sistema nervioso lo convierten en un aliado para personas con ansiedad, depresión, taquicardia, ataques de pánico, insomnio y otras patologías relacionadas con el estrés. por otro lado, su aroma dulce y agradable ayuda a mejorar el humor y estimula las emociones positivas. en la aromaterapia es una de las esencias más utilizadas para tratar la depresión y la tristeza.'
    },
    {
      name: 'antiseptico',
      name: 'antiséptico',
      description: 'ideal para tratar problemas de acné, pieles grasas, psoriasis y eczemas.'
    },
    {
      name: 'afrodisíaco',
      description: 'su aroma crea un ambiente relajante y afrodisíaco. estimula la producción de adrenalina. tonifica el corazón, es antidepresivo, relajante y antiséptico.'
    },
    {
      name: 'alopecia',
      description: 'la combinación con el aceite de coco y la cúrcuma, resulta efectivo para contrarrestar la caída del cabello. estos compuestos estimulan el cuero cabelludo y nutren el cabello.'
    },
    {
      name: 'vasodilatador',
      description: 'debido a que contiene ácido salicílico, ayuda a bajar un poco la presión arterial.'
    }
  ],
  concerns: [
    'no excederse en la dosificación, puede provocar nauseas o cefaleas. es importante en esta esencia en particular que antes de usarla se pruebe los efectos del aroma en la persona, porque así como en algunas personas resulta muy atrayente en otras puede resultar repulsiva y provocar malestares emocionales y físicos.'
  ],
  tags: [
    'regenerador celular',
    'antiespasmódico',
    'hipotensor',
    'antiséptico',
    'relajante',
    'afrodisíaco',
    'antidepresivo'
  ]
}
