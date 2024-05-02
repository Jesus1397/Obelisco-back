import { Injectable } from '@nestjs/common';

@Injectable()
export class FooterService {
  private host = process.env.HOST || 'http://localhost:3000';

  private _footerPhonesData = {
    sectionTitle: 'Teléfonos útiles',
    phoneNumbers: [
      {
        title: '102 - Niñez y Adolescencia',
        number: 'tel:102',
      },
      {
        title: '103 - Emergencias',
        number: 'tel:103',
      },
      {
        title: '107 - SAME',
        number: 'tel:107',
      },
      {
        title: '911 - Policía',
        number: 'tel:911',
      },
      {
        title: '144 - Violencia de género',
        number: 'tel:144',
      },
      {
        title: '147 - Atención ciudadana',
        number: 'tel:147',
      },
    ],
  };

  private _footerNetworksData = {
    sectionTitle: 'Redes de la ciudad',
    networks: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/GCBA',
        icon: 'bx bxl-facebook-circle',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/gcba/',
        icon: 'bx bxl-instagram-alt',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/buenosaires',
        icon: 'bx bxl-twitter',
      },
      {
        title: 'YouTube',
        url: 'https://www.youtube.com/user/GCBA',
        icon: 'bx bxl-youtube',
      },
      {
        title: 'LinkedIn',
        url: 'https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires',
        icon: 'bx bxl-linkedin-square',
      },
      {
        title: 'TikTok',
        url: 'https://www.tiktok.com/@buenosaires',
        icon: 'bx bxl-tiktok',
      },
      {
        title: 'Pinterest',
        url: 'https://www.pinterest.es/buenosaires/',
        icon: 'bx bxl-pinterest',
      },
    ],
  };

  private _footerLinksData = {
    sectionTitle: '',
    links: [
      {
        title: 'Boletín oficial',
        url: 'https://boletinoficial.buenosaires.gob.ar',
      },
      {
        title: 'Términos y condiciones',
        url: 'https://buenosaires.gob.ar/terminos-y-condiciones',
      },
      {
        title: 'Política de privacidad',
        url: 'https://buenosaires.gob.ar/privacidad',
      },
      {
        title: 'Oficios judiciales',
        url: 'https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales',
      },
      {
        title: 'Transparencia',
        url: 'https://buenosaires.gob.ar/gobierno/transparencia',
      },
    ],
  };

  private _footerImagesIndexData = {
    1: 'ciudad-ba.svg',
    2: 'ciudad-ba-sm.svg',
    3: 'vamos-ba.svg',
  };

  private _footerImagesData = {
    images: [
      {
        id: 1,
        name: 'ciudad-ba.svg',
        alt: 'Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/footer/images/1`,
      },
      {
        id: 2,
        name: 'ciudad-ba-sm.svg',
        alt: 'Ciudad de Buenos Aires',
        url: `${this.host}/api/obelisco/footer/images/2`,
      },
      {
        id: 3,
        name: 'vamos-ba.svg',
        alt: 'Vamos Buenos Aires',
        url: `${this.host}/api/obelisco/footer/images/3`,
      },
    ],
  };

  private _footerAllData = {
    phones: this.footerPhonesData,
    networks: this.footerNetworksData,
    links: this.footerLinksData,
    images: this.footerImagesData,
  };

  public get footerAllData() {
    return this._footerAllData;
  }

  public get footerPhonesData() {
    return this._footerPhonesData;
  }

  public get footerNetworksData() {
    return this._footerNetworksData;
  }

  public get footerLinksData() {
    return this._footerLinksData;
  }

  public get footerImagesData() {
    return this._footerImagesData;
  }

  public get footerImagesIndexData() {
    return this._footerImagesIndexData;
  }
}
