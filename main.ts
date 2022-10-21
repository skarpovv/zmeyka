class Snake {
    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    x: number;
    y: number;
    color: string;
}

let elem = document.getElementById('snake')

setTimeout(()=>{
   elem!.style.left = '30px'
}, 2000)

console.log()