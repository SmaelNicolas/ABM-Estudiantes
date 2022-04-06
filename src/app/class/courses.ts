export class Courses {
  name: string;
  description: string;
  imageUrl: string;
  isAvailable: boolean;
  constructor(
    name: string,
    description: string,
    imageUrl: string,
    isAvailable: boolean
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.isAvailable = isAvailable;
  }
}
