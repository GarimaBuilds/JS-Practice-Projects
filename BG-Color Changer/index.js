const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id=="red"){
            body.style.backgroundColor = 'red'
        }

        if(color.target.id=="blue"){
            body.style.backgroundColor = 'blue'
        }

        if(color.target.id=="green"){
            body.style.backgroundColor = 'green'
        }

        if(color.target.id=="yellow"){
            body.style.backgroundColor = 'yellow'
        }

        if(color.target.id=="pink"){
            body.style.backgroundColor = 'pink'
        }
    })
})


