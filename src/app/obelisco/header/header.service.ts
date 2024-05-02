import { Injectable } from '@nestjs/common';

@Injectable()
export class HeaderService {
  private host = process.env.HOST || 'http://localhost:3000';

  private _headerImagesData = {
    images: [
      {
        id: 1,
        name: 'logotipo_ba.svg',
        alt: 'Gobierno de la Ciudad de Buenos Aires - Inicio',
        url: `${this.host}/api/obelisco/header/images/logo`,
      },
    ],
  };

  private _headerImagesIndexData = {
    1: 'logotipo_ba.svg',
  };

  public get headerImagesData() {
    return this._headerImagesData;
  }

  public get headerImagesIndexData() {
    return this._headerImagesIndexData;
  }
}
