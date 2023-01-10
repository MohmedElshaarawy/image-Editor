let upload = document.getElementById('uploa');
let saturate = document.getElementById('staturate');
let contrast = document.getElementById('contrast')
let Brightness = document.getElementById('Brightness');
let Sepia = document.getElementById('Sepia');
let GrayScale = document.getElementById('GrayScale');
let blur = document.getElementById('blur');
let HueRotate= document.getElementById('HueRotate');
let reset = document.getElementById('reset');
let download = document.getElementById('download');
let img = document.getElementById('img');
let imgBox = document.querySelector('.imgBox');
let btn = document.getElementById('bb');
let filters = document.querySelectorAll('input[type="range"]');

window.onload = ()=>{
    bb.style.display='none'
    reset.style.display='none'
    imgBox.style.display='none'
}

upload.onchange = ()=>{
    ResetValue()
    bb.style.display='block'
    reset.style.display='block'
    imgBox.style.display='block'
    let image = new FileReader();
    image.readAsDataURL(upload.files[0]);
    image.onload = ()=>{
        img.src = image.result;
    }
}

filters.forEach((filter)=>{
    filter.addEventListener('input',()=>{
       img.style.filter = `
       saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${Brightness.value}%)
    sepia(${Sepia.value}%)
    grayscale(${GrayScale.value})
    blur(${blur.value}px)
    hue-rotate(${HueRotate.value}deg)
       `
    })
})

function ResetValue(){
img.style.filter='none'
saturate.value = '100'
contrast.value = '100'
Brightness.value = '100'
Sepia.value = '0'
GrayScale.value = '0'
blur.value = '0'
HueRotate.value = '0'
}

download.onclick = ()=>{
    download.href = img.src;
}





