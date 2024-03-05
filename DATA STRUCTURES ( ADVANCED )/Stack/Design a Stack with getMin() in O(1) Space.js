// *****THIS SOLUTION WORKS IN NON NEGATIVE ARRAY ELEMENTS*****
//FORMULA using for this approach👇
// t = min - prevMin
// prevMin = min - t

let st = [];
let min;

function getMin() {
  return min;
}

function push(x) {
  if (st.length === 0) {
    min = x;
    st.push(x);
  } else if (x <= min) {
    st.push(x - min);
    min = x;
  } else {
    st.push(x);
  }
}

function pop() {
  let t = st.pop();
  if (t <= 0) {
    let res = min;
    min = min - t;
    return res;
  } else {
    return t;
  }
}

function peek() {
  let t = st[st.length - 1];
  return t <= 0 ? min : t;
}

push(9);
push(2);
push(5);
push(3);
console.log(st);
console.log("peek", peek());

console.log(getMin());
pop();
console.log(st);

console.log("peek", peek());

// *****THIS SOLUTION WORKS FOR BOTH POSITIVE / NEGATIVE ARRAY ELEMENTS*****
//FORMULA using for this approach👇
// t = min - prevMin
// prevMin = min - t

let st2 = [];
let min2;

function getMin() {
  return min2;
}

function push(x) {
  if (st2.length === 0) {
    min2 = x;
    st2.push(x);
  } else if (x <= min2) {
    st2.push(x - min2);
    min2 = x;
  } else {
    st2.push(x);
  }
}

function pop() {
  let t = st2.pop();
  if (t <= 0) {
    let res = min2;
    min2 = min2 - t;
    return res;
  } else {
    return t;
  }
}

function peek() {
  let t = st2[st2.length - 1];
  return t <= 0 ? min2 : t;
}

push(9);
push(2);
push(5);
push(3);
console.log(st2);
console.log("peek", peek());

console.log(getMin());
pop();
console.log(st2);

console.log("peek", peek());
