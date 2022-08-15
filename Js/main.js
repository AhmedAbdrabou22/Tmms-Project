let inputs = document.querySelectorAll('.form-control')
inputs.forEach(input =>{
    input.addEventListener('focus', ()=>{
        input.style.backgroundColor = 'white'
        input.style.opacity = '1'
        input.style.color = 'black';
    })
})
inputs.forEach(input =>{
    input.addEventListener('blur', ()=>{
        input.style.backgroundColor = '#666666'
        input.style.opacity = '0.08'
        input.style.color = 'black';
    })
})



let faBarIcon = document.querySelector('.fa-bars');
let sidebar = document.querySelector('.sidebar');
let bodyContent = document.querySelector('.bodyContent');
faBarIcon.addEventListener('click',()=>{
    if(sidebar.classList.contains('activeFaBar')){
        sidebar.classList.remove('activeFaBar');
        sidebar.style.transition = '0.3s all ease';
        bodyContent.classList.remove('body')
        bodyContent.style.transition = '0.3s all ease';
    }else{
        sidebar.classList.add('activeFaBar');
        bodyContent.classList.add('body')
        bodyContent.style.transition = '0.3s all ease';
    }
})

let sidebaraAnchor = document.querySelectorAll('.sidebar a');
sidebaraAnchor.forEach((sidebara)=>{
    sidebara.addEventListener('click',()=>{
        sidebaraAnchor.forEach((ele)=>{
            ele.classList.remove('active')
        })
        sidebara.classList.add('active')
    })

})