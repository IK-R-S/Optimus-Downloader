// Download de músicas
const  fs  =  require ( 'fs' ) ; 
const colors = require ( 'colors') ;
const  ytdl  =  require ( 'ytdl-core' ) ; 

const downloadList = [

    'SEUS LINKS DO YOUTUBE',

]    

async function audioDownload() {
    try{
        
        console.log('DOWNLOAD DE ÁUDIO INICIADO \n'.red.bold)

        for(index = 0; index < downloadList.length; index++) {

            const videoID  = await ytdl.getURLVideoID(downloadList[index])
            const info = await ytdl.getInfo(videoID)
            const title = await info.videoDetails.title    
            console.log(index + 1, 'BAIXANDO:', title.red, '\n')
            ytdl(downloadList[index], { filter: 'audioonly', quality: 'highestaudio' }).pipe(fs.createWriteStream(`./downloads/audio/${title}.mp3`));

        }

        console.log()
        console.log('DOWNLOAD CONCLUÍDO!\n'.bold)
    
    }
    catch{
        console.log('OPS! ERRO DURANTE O DOWNLOAD - 400 code (-_-;)'.red.bold)
    }
}

audioDownload()


