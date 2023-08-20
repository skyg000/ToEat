

const con = document.querySelector('.d-list')
let tag ='', s_arr = sessionStorage.s_code.split(','), l_arr = localStorage.w_code.split(',');

function list(q) {
    fetch('./js/data/md.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach((v,k)=>{
            for(let i=0; i<q.length; i++){
                if(v.code == q[i]){
                    tag += `
                    <li class="d-on">
                        <b>${v.name}</b>
                        <p>${v.description}</p>
                        <figure>
                            <img src="${v.images}" alt="">
                        </figure>
                        <p>${v.menus}</p>
                        <p class = "ad">
                        <i class="fa-solid fa-location-dot"></i>
                            ${v.adress}
                        </p>
                        <p>${v.phone}</p>
                        <p>${v.time}</p>
                    </li>
                
                    `
                    
                }
            }
        })
        con.innerHTML = tag;
    })
}

list(s_arr)



/* function con (){
    const ele = document.querySelectorAll('.test li ')
    let pageNum = sessionStorage.pageNum;
        if(pageNum)ele[pageNum].style.backgroundcolor='black'
        ele.forEach(function(m,k){
            m.onclick=function(e){
                sessionStorage.pageNum=k;
            }
        })
} */



/* fetch('./js/data/md.json')
.then(res=>res.json())
.then(data=>{
    const stores = document.querySelector('.stores')
    data.data.forEach(obj => {
        stores.innerHTML += obj.code;
    });
})


$(".store").click(function(e){
    e.preventDefault();

}) */