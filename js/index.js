
let input = document.getElementById('number');
let select = document.getElementById('section');
const list = document.getElementById('myListNumber');
let multiplica = document.getElementById('multiplicar') 
const botton = document.getElementById('btn');
const form = document.getElementById('form');
const operations = document.getElementById('operations')

let listNumbers = [];
let lisMiltiplica = [];
let totalMultiplicacion ;    

const validateFields = () =>{
    if(input.value === "" || select.value == 0 ){
        alert('Los campos no pueden estar vacios');
        return false
    }else if(isNaN(input.value)){
        alert('Solo se permiten números');
        return false
    }else {
        MyList();
    }

  
}

const  validateOptions = () => {

  

    for(let i=0; i< listNumbers.length; i++){

        totalMultiplicacion = listNumbers[i] * listNumbers[i];  
    }
    
    lisMiltiplica.push(totalMultiplicacion); 
    console.log(lisMiltiplica);
    console.log('hola');

    if( select.value == 1 ){
       return totalMayorMenor();

    }else if(select.value == 2){
        return  TotalMenorMayor();

    }else if(select.value == 3){
        return  TotalSumar();

    }else if(select.value == 4){
        return   TotalMultilicar();
  }

  
}

const MyList = () => {
    listNumbers.push(parseInt(input.value));       
    list.innerHTML = `<li> ${listNumbers}</li> ` ;
    console.log(listNumbers) ;

   
}

const TotalMenorMayor = () =>{
    let menorMayor = document.getElementById('menorMayor');
    console.log(menorMayor);
   
    menorMayor.innerText = listNumbers.sort( function (prev, next){
        if( prev > next){
            
            return 1;
        }

        if(prev < next){
            return -1;
        }

        return 0;
})};

const totalMayorMenor = () =>{

    let mayorMenor = document.getElementById('mayorMenor');
    mayorMenor.innerHTML = listNumbers.sort( function (prev, next){
        if( prev > next){
            return -1;
        }
    
        if(prev < next){
            return 1;
        }
    
        return 0;
    })
    }

const TotalSumar = () => {
    let sumar = document.getElementById('sumar');

    sumar.innerHTML = listNumbers.reduce((a, b) => a + b, 0);
   
 }

 const TotalMultilicar = () => {
    multiplica.innerHTML = lisMiltiplica;
    }  



botton.addEventListener('click', (e) => {
    e.preventDefault();
    validateFields();
    validateOptions(); 
    form.reset(); 
})


clear.addEventListener('click', () => {
      listNumbers = []
      lisMiltiplica = []
      list.innerHTML = `<li> ${listNumbers}</li> ` ; 
      multiplica.innerHTML = lisMiltiplica;
      sumar.innerHTML  = "";
      mayorMenor.innerHTML = "";
      menorMayor.innerHTML = "";
    
})



