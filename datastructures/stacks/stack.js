const Stack = () => {
  let top = -1;
  const data = [];

  const push = (value) => {
    top++;
    data[top] = value;
    console.log(data);
  };

  const pop = () => {
    if (top < 0) {
      return "lista ordenada está vazia.";
    } else {
      const itemToReturn = data[top];
      delete data[top];
      top--;
      return itemToReturn;
    }
  };

  return { push, pop };
};

const stack = Stack();
stack.push(1);
stack.push(2);

stack.pop();
