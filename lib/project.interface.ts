export interface Project {
  id: string;
  name: { [key: string]: string };
  address: string;
  owner: string;
  lca_advisor: string;
  building_regulation_version: 'BR2018' | string;
}
