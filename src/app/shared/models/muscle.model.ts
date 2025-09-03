export class Muscle {
  id: number;
  name: string;
  subGroup: string;
  group: string;
  popularName: string;
  description: string;

  constructor(
    id: number,
    name: string,
    subGroup: string,
    group: string,
    popularName: string,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.subGroup = subGroup;
    this.group = group;
    this.popularName = popularName;
    this.description = description;
  }
}
