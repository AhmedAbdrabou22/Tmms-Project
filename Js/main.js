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