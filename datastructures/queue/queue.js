class Queue {
  constructor(items = {}) {
    this._items = items;
    this._count = 0;
    this._firstElement = 0;
  }

  enqueue(item) {
    if (!item) return;
    this._items[this._count] = item;
    this._count++;
  }

  dequeue() {
    if (this.isEmpty()) return;

    const item = this._items[this._firstElement];
    delete this._items[this._firstElement];
    this._firstElement++;
    return item;
  }

  peek() {
    if (this.isEmpty()) return;
    return this._items[this._firstElement];
  }

  isEmpty() {
    return this._count - this._firstElement === 0;
  }

  size() {
    return this._count - this._firstElement;
  }
}

const queue = new Queue();
console.log("Fila vazia?", queue.isEmpty());

queue.enqueue("usuario1@gmail.com");
queue.enqueue("usuario2@gmail.com");
queue.enqueue("usuario3@gmail.com");

queue.dequeue();
queue.dequeue();

console.log("Itens da fila", queue._items);
console.log("Primeiro elemento da fila:", queue.peek());
console.log("tamanho da fila:", queue.size());
