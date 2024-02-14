const images = document.querySelectorAll(".headerSider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control-next");


const scrolcontainerAll = document.querySelectorAll(".products");

console.log(images)
console.log(prev_btn)
let n = 0;

function changeslide() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[n].style.display = "block";
}


changeslide();


prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
      n --
    }else{
        n = images.length - 1;
    }

    changeslide();
});


next_btn.addEventListener('click', (e) => {
    if (n < images.length - 1) {
      n ++
    }else{
        n =0
    }

    changeslide();
});




for(const item of scrolcontainerAll){
    console.log(item)
    item.addEventListener('wheel' , (evt)=> {
        evt.preventDefault()
        item.scrollLeft += evt.deltay
    })
}