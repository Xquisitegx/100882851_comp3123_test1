import fs from 'fs';
import path from 'path';

if(fs.existsSync("Logs")){
    fs.readdir("Logs", (error, files) => {
        if(error){
            throw error;
        }

        for(const file of files){
            const filePath = path.join("Logs", file);
            fs.unlink(filePath, error => {
                if(error){
                    throw error;
                }
            })
            console.log(`delete files...${file}`);
        }
        fs.rmdirSync("Logs");
    })
}