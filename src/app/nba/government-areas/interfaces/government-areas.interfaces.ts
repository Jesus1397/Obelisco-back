export interface Area {
  name: string;
  information: {
    leader: {
      name: string;
      image: string;
      position: string;
    };
    contact: {
      email?: string;
      address?: string;
      phone?: string;
    };
    networks: [
      {
        title?: string;
        url?: string;
        icon?: string;
      },
    ];
    map: {
      address: string;
      src: string;
    };
  };
}
