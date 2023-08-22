const elUl = document.querySelector('.d-list')

fetch('./js/data/md.json')
.then(res=>res.json())
.then(data=>{   
    let k = localStorage.getItem("pagecode")
    
    if(!k) {
        alert("정상적인 접근 해주세요.")
        location.href='./';
        return false;
    }
    elUl.innerHTML = `
    <li class="d-on" >
                    <b>${data[k].name}</b>
                    <p>${data[k].description}</p>
                    <figure>
                        <img src="${data[k].images}" alt="">
                    </figure>
                    <p>${data[k].menus}</p>
                    <p class = "ad1">
                    <i class="fa-solid fa-location-dot"></i>
                        ${data[k].adress}
                    </p>
                    <p>${data[k].phone}</p>
                    <p>${data[k].time}</p>
                </li>
    `
});
