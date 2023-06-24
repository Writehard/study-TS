let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
let str3 = 'johnwick'.split('');
let Arr = Array(Math.ceil(canvas.width / 10)).fill(0);
console.log(Arr);
const rain = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    Arr.forEach((item, index) => {
        ctx.fillText(str3[Math.floor(Math.random() * str3.length)], index * 10, item + 10);
        Arr[index] = item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
    });
};
setInterval(rain, 10);
