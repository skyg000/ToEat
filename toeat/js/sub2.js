let s_code = ['1721530874','31564605','13321644','11717437','12788575','13113902','1555782691','11717437'],
    w_code = ['31564605','13321644','31564605','13321644'];

sessionStorage.setItem('s_code',s_code)
localStorage.setItem('w_code',w_code)


const con = document.querySelector('.con')
let tag ='', s_arr = sessionStorage.s_code.split(','), l_arr = localStorage.w_code.split(',');

$(document).ready(function(){
    $(".list ul li a").each(function(k,v){
        $(this).click(function(e){
            e.preventDefault();
            con.innerHTML=``;
            $(".list ul li").removeClass('on')
            $(".list ul li").eq(k).addClass('on')
            if(v.innerText == "최근 본 맛집"){
                tag ='';
                list(s_arr)
            } else {
                tag ='';
                list(l_arr)
            }
        })
    })

})

function list(q) {
    fetch('./js/data/md.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach((v,k)=>{
            for(let i=0; i<q.length; i++){
                if(v.code == q[i]){
                    tag += `
                    <li class="on2">
                        <figure>
                            <img src="${v.images}" alt="">
                            <p class = "ad">
                            ${v.adress}
                            </p>
                            <i class="fa-solid fa-location-dot"></i>
                        </figure>
                            <b>${v.name}</b>
                            <p>${v.time}</p>
                            <p>${v.phone}</p>
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