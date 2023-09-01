export class TodoItem {
  id: number;
  description: string;
  action: boolean;

  constructor(id: number, description: string, action: boolean) {
    this.id = id;
    this.description = description;
    this.action = action;
  }
}

export class Movie {
  id: number;
  name: string;
  action: boolean;

  constructor(id: number, name: string, action: boolean) {
    this.id = id;
    this.name = name;
    this.action = action;
  }
}
