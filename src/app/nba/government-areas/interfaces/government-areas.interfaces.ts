interface Contact {
  emails?: string[];
  address?: string;
  phone?: string;
}

interface Network {
  title?: string;
  url?: string;
  icon?: string;
}

interface Map {
  address?: string;
  src?: string;
}

interface Leader {
  name?: string;
  image?: string;
  position?: string;
}

interface Information {
  leader?: Leader;
  contact?: Contact;
  networks?: Network[];
  map?: Map;
}

export interface Area {
  id: number;
  name?: string;
  information?: Information;
}
