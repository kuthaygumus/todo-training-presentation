export class Model {
  user;
  items;

  constructor() {
    this.user = 'Kamil';
    this.items = [
      new TodoItem('Buy Flowers', true),
      new TodoItem('Get Shoes', false),
      new TodoItem('Collect Tickets', false),
      new TodoItem('Call Joe', false)
    ];
  }
}

export class TodoItem {
  description: string;
  action: boolean;
  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
