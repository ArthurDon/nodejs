const novaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10); // entre 0 e 9
    setInterval(() => {
        if(valor % 2 === 0){
            resolve(`o valor ${valor} é par...`);
        }else{
            reject(`O valor ${valor} é impar...`)
        }
    }, 2000);
});

async function executarPromise(){
    try{
        const response = await novaPromise();
        console.log(response);
    }catch(reject){
        console.log(reject);
    }
}

executarPromise();