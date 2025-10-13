import clavoImg from 'assets/clavo-de-olor.jpg'
import lavandaImg from 'assets/lavanda.png'

const oilList = [
  {
    name: 'clavo',
    sci: 'syzygium aromaticum',
    icon: clavoImg,
    tags: [
      {
        name: 'coagulante',
        description: 'es muy beneficioso para la coagualación sanguínea.'
      },
      {
        name: 'corazon',
        label: 'corazón',
        description: 'sirve para prevenir problemas del corazón.'
      },
      {
        name: 'analgesico',
        label: 'analgésico',
        description: 'contine eugenol lo cual lo hace un potente analgesico. es muy común el uso del calvo para tratar inflamaciones bucales, dolores de muela, dolores por raices expuestas y problemas de encias.'
      },
      {
        name: 'antibacteriano',
        description: 'es útil para conbatir infecciones. gracias también a su propiedades analgésicas es muy utilizado en procedimientos odontológicos como anestésico local.'
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
        name: 'anestesico',
        label: 'anestésico'
      },
      {
        name: 'colicos',
        label: 'cólicos',
        description: 'los clavos se utilizan como carminativo, para aumentar el ácido clorhídrico en el estómago y reducier la generación de gases en el tracto digesvo y con ello reducen las flatulencias y cólicos.'
      },
      {
        name: 'digesvo',
        description: 'se dice que una aplicacion tópica sobre el estómago o en el abdomen calienta el tracto digestivo.'
      }
    ]
  },
  {
    name: 'lavanda',
    sci: 'lavandula officinalis',
    icon: lavandaImg,
    tags: [
      {
        name: 'insomnio',
        description: 'alivia síntomas emocionales como el estrés, la ansiedad y el insomnio.'
      },
      {
        name: 'hipertension',
        label: 'hipertensión',
        description: 'la infucion de lavanda ayuda con el tratamiento de la hipertensión.'
      },
      {
        name: 'sistema nervioso',
        description: 'ayuda a un mejoramiento del funcionamiento del sistema nervioso.'
      }
    ]
  }
]

export {
  oilList
}
