import icon from 'assets/bergamota.jpg'

export default {
  name: 'bergamota',
  sci: 'citrus bergamia',
  icon,
  description: [
    'es una fruta cítrica de pequeño tamaño y de forma ligeramente similar a la del limon, al igual que su tallo. su sabor es agrio y su aromática piel se utiliza para obtener aceite esencial.',
    '## toxicología',
    'acetato de linalilo (35-45%), limoneno (50%) y linalol (20-30 %) y bergapteno un compuesto de la furonocumarina, esta sustancia es la que puede provocar inflamaciones en la piel, ya que es sensible a la luz.',
  ],
  note: 'alta',
  uses: [
    {
      name: 'circulatorias',
      description: 'alta temperatura corporal, estimula la producción de glóbulos blancos.'
    },
    {
      name: 'cabeza',
      description: 'amigdalitis, caspa, dolor de garganta, estomatitis, glositis, halitosis, seborrea del cuero cabelludo'
    },
    {
      name: 'piel',
      description: 'abscesos, acné, carbunclos, desodorante, eczema (supurante), fiebres, heridas, herpes, irritación, obesidad, piel grasosa, piojos, psoriasis, sarampión, sarna, transpiración, úlceras, varicela, zoster.'
    },
    {
      name: 'digestivo',
      description: 'álculos biliares, cólico, colitis, estimula la digestión, flatulencia, gastralgia, gastroenteritis, indigestión, heimintiasis, pérdida del apetito.'
    },
    {
      name: 'emocionales',
      description: 'anorexia, ansiedad, depresión, histeria, insomnio, pánico, tensión.'
    },
    {
      name: 'respiratorio',
      description: 'bronquitis, catarro, difteria, tos (seca o dolorosa), tuberculosis.'
    }
  ],
  concerns: [
    'es una esencia fotosensibilizante por lo que no se debe usar antes de exponerse al sol o los rayos uv, puede provocar irritación y manchas en la piel. usarlo siempre diluido, si se pone directamente en contacto con la piel puede causar quemaduras graves. puede causar sensibilización y en dosis altas puede provocar sudoración.'
  ],
  tags: [
    'analgésico',
    'antiespasmódico',
    'antiinflamatorio',
    'antiséptico',
    'antiviral',
    'relajante',
    'digestivo',
    'respiratorio',
  ]
}
