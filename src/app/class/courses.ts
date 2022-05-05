import { CourseInterface } from '../interfaces/course';

export class Courses implements CourseInterface {
  name: string;
  description: string;
  imageUrl: string;
  isAvailable: boolean;
  id: number | undefined;
  constructor(
    name: string,
    description: string,
    imageUrl: string,
    isAvailable: boolean,
    id: number | undefined
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.isAvailable = isAvailable;
    this.id = id;
  }
}
