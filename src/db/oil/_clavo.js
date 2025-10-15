import icon from 'assets/clavo-de-olor.jpg'

export default {
  name: 'clavo',
  sci: 'syzygium aromaticum',
  icon,
  description: [
    'el árbol del clavo de olor, es un árbol de la familia myrtaceae, nativo de indonesia. sus botones (flores que aún no se han abierto) secos se denominan clavos de olor se usan como especia en las cocinas de todo el mundo.',
    'el aceite esencial se obtiene por destilación con agua o al vapor de los capullos aún no abiertos de las flores o de las hojas del árbol su rendimiento es muy elevado del 15 al 20%. el aceite es más pesado que el agua y tiene un color amarillo que se vuelve pardo cuando entra en contacto con el aire, su aroma es fuerte y dulzón.',
    '## componentes activos',
    'eugenol (80-90%), aceteugenol, cariofileno, óxido de cariofileno y otros.',
  ],
  note: 'media',
  uses: [
    {
      name: 'coagulante',
      description: 'es muy beneficioso para la coagualación sanguínea.'
    },
    {
      name: 'analgesico',
      label: 'analgésico',
      description: 'contine eugenol lo cual lo hace un potente analgesico. es muy común el uso del calvo para tratar inflamaciones bucales, dolores de muela, dolores por raices expuestas y problemas de encias.'
    },
    {
      name: 'antibacteriano',
      description: 'es útil para combatir infecciones. gracias también a su propiedades analgésicas es muy utilizado en procedimientos odontológicos como anestésico local.'
    },
    {
      name: 'afrodisiaco',
      label: 'afrodisíaco',
      description: 'las propiedades afrodisíacas y estimulantes del apetito sexual del clavo están muy presentes en culturas orientales. muchos platos afrodisíacos, así como pócimas para despertar el deseo sexual están compuestas de este, ya que el eugenol tiene estas propiedades, y el clavo es uno de los vegetales que más tienen.'
    },
    {
      name: 'expectorante',
      description: 'expulsar las mucosidades y flemas en caso de resfriado o gripe.'
    },
    {
      name: 'colicos',
      label: 'cólicos',
      description: 'los clavos se utilizan como carminativo, para aumentar el ácido clorhídrico en el estómago y reducier la generación de gases en el tracto digestivo y con ello reducen las flatulencias y cólicos.'
    },
    {
      name: 'digestivo',
      description: 'se dice que una aplicacion tópica sobre el estómago o en el abdomen calienta el tracto digestivo.'
    },
    {
      name: 'piel',
      description: 'ayudar a abordar problemas de piel como verrugas, acné, flacidez y arrugas.'
    }
  ],
  concerns: [
    'emplear siempre bien diluido en proporciones no mayores al 1%. puede causar dermatitis, alergia o irritación. es irritante de mucuosas.'
  ],
  tags: [
    'analgésico',
    'afrodisiaco',
    'expectorante',
    'digestivo',
    'antimicótico'
  ]
}
