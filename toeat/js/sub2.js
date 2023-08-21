let s_code = ['1721530874','31564605','13321644','11717437','12788575','13113902','1555782691','11717437','13321644'],
    w_code = ['31564605','13321644','31564605','13321644'];

sessionStorage.setItem('s_code',JSON.stringify(s_code))
localStorage.setItem('w_code',JSON.stringify(w_code))


const con = document.querySelector('.con')
let tag ='', 
    s_arr = JSON.parse(sessionStorage.s_code),
    l_arr = JSON.parse(localStorage.w_code);


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


function list(q) {
    fetch('./js/data/md.json')
    .then(res=>res.json())
    .then(data=>{   
        data.forEach((v,k)=>{
            for(let i=0; i<q.length; i++){
                if(v.code == q[i]){
                    tag += `
                    <li class="on2" onclick="pageMove(${k})">
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

list(s_arr,l_arr)

function pageMove(e){
    localStorage.setItem("pagecode",e);
    location.href='./detail.html';
}


