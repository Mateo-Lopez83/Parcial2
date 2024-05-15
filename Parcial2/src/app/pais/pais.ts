export class Pais {
    id: number;
    name: string;
    formation_year: number;
    capital:string;
    description: string;
    flag: string;
    constructor(
      id: number,
      name: string,
      formation_year: number,
      capital:string,
      description: string,
      flag: string,
    ) {
      this.id = id;
      this.name = name;
      this.formation_year = formation_year;
      this.description = description;
      this.capital=capital;
      this.flag = flag;
    }
}