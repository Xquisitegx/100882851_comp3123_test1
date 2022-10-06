import fs from 'fs';

if(!fs.existsSync("Logs")){
    fs.mkdirSync("Logs");
}

process.chdir("Logs");

for(let x = 0; x < 10; x++){
    const file = `log${x}.txt`;
    fs.writeFileSync(file, 'testing', (error) => {
        if(error){
            throw error;
        }
    });
    console.log(file);
}