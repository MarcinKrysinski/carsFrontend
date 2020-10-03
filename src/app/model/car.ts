import {Color} from './color.enum';

export class Car {
  id: number;
  mark: string;
  model: string;
  color: Color;

  constructor(id: number, mark: string, model: string, color: Color){
    this.id = id;
    this.mark = mark;
    this.model = model;
    this.color = color;
  }
}
