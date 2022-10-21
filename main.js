const snake = document.getElementById('snake');
snake.style.position = 'absolute'

const field = {
  width: document.querySelector('.field').getBoundingClientRect().width,
  height: document.querySelector('.field').getBoundingClientRect().height
} 

const Direction = {
  left: "left",
  right: "right",
  top: "top",
  bottom: "bottom",
}

for (key in Direction) {
  snake.style[Direction[key]] = '0px';

}

console.log(snake.style.top);

console.log(snake);
console.log(snake.getBoundingClientRect());


setInterval(() => {
  snake.style.left = `${(Number((snake.style[Direction.left]).replace('px','')) + 10)}px`;
  console.log('snake: ', snake.style.left);
  if (dirToNumber(snake.style.left) >= field.width) {
    snake.style.left = `${(Number((snake.style[Direction.left]).replace('px','')) - 100)}px`;
  }
}, 1002);


function dirToNumber(dir) {
  return Number(dir.replace('px', ''))
}