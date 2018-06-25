
Promise.all([
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json"),
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json"),
    fetch("../data/cohorts.json")
]).then((datosj) => {
        return Promise.all(datosj.map((respuesta) => {
                return respuesta.json();
}));

}
).then((respuestajson)=>{
console.log(respuestajson);
let users = respuesta[0];
let progress = respuesta[1];
let courses = respuesta[2];
}).catch((error)=>{

});



).then((respuestajson)=>{
let usuarios = respuestajson[0]
let progresos = respuestajson[1]
let cohorts = respuestajson[2] //variable funcion muestraCorhots// 
muestraCorhots(cohorts);
const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
const cursos = Object.keys(cohort.coursesIndex);
computeUserStats(usuarios, progresos,cursos)


}).catch((error)=>{

});

// funcion que llama a los cohorts//
muestraCorhots= (corhots)=> {
    const cohortsId =corhots.map(element => element.id);
    const contenedor = document.getElementById("cohortsdata"); //se le asigna una variable para poder llamar selector que esta en el html donde estaran los cohorts//
    cohortsId.forEach(element => { 
    const item = document.createElement("option"); //se crea un contenedor para albergar los cohorts//
    item.innerText=element;
    contenedor.appendChild(item);
   });
   
   
}
