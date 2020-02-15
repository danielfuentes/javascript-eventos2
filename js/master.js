window.onload = function(){
    let logo = document.querySelector('.logo');
    let dog1 = document.querySelector('.dog1');
    console.log(dog1);
    
    let dog2 = document.querySelector('.dog2');
    let dog3 = document.querySelector('.dog3');  

    dog1.onmouseover = function(){
        dog1.classList.add('animated','tada');
    }
    dog1.onmouseout = function(){
        dog1.classList.remove('animated','tada');
    }

    dog2.onmouseover = function(){
        dog2.classList.add('animated','bounce');
    }
    dog2.onmouseout = function(){
        dog2.classList.remove('animated','bounce');
    }

    dog3.onmouseover = function(){
        dog3.classList.add('animated','shake');
    }
    dog3.onmouseout = function(){
        dog3.classList.remove('animated','shake');
    }
    logo.onclick = function(){
        Swal.fire(
            'Saludos!',
            'Espero te sirva de apoyo!',
            'success'
          )
    }
}