import { title } from 'process';
import { Area } from '../interfaces/government-areas.interfaces';

export const GOVERNMENT_AREAS: Area[] = [
  {
    name: 'Jefatura de Gobierno',
    information: {
      leader: {
        name: 'Jorge Macri',
        position: 'Jefe de Gobierno',
        image:
          'https://buenosaires.gob.ar/sites/default/files/2023-09/Jorge_Macri_perfil_home.jpg',
      },
      contact: {
        email: ' jmacri@buenosaires.gob.ar',
      },
      networks: [
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/',
          icon: 'bx bxl-facebook-circle',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/',
          icon: 'bx bxl-instagram-alt',
        },
        {
          title: 'YouTube',
          url: 'https://www.youtube.com/',
          icon: 'bx bxl-youtube',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/',
          icon: 'bx bxl-twitter',
        },
      ],
      map: {
        address: 'Uspallata 3160',
        src: 'mapa.com',
      },
    },
  },
];
