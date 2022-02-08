// Download de músicas
const  fs  =  require ( 'fs' ) ; 
const colors = require ( 'colors') ;
const  ytdl  =  require ( 'ytdl-core' ) ; 

const downloadList = [

    'https://www.youtube.com/watch?v=bFUbaOTuWcg',
    'https://www.youtube.com/watch?v=On3b_3v26YU',
    'https://www.youtube.com/watch?v=cWA81k-7kp0',
    'https://www.youtube.com/watch?v=6qmmG7v1eSk',
    'https://www.youtube.com/watch?v=1VjIAuWhv4E',
    'https://www.youtube.com/watch?v=4MolXZnSD6U',
    'https://www.youtube.com/watch?v=5x6CldCImSQ',
    'https://www.youtube.com/watch?v=rQsnIBDhAys',
    'https://www.youtube.com/watch?v=mGVlRuv_P-c',
    'https://www.youtube.com/watch?v=X3tK1cpP7YU',
    'https://www.youtube.com/watch?v=dANcAGydlsM',
    'https://www.youtube.com/watch?v=KiAHJdtusvc',
    'https://www.youtube.com/watch?v=guRD77aReu0',
    'https://www.youtube.com/watch?v=fwlf1G2c7es',
    'https://www.youtube.com/watch?v=jApvWOGhKyo',
    'https://www.youtube.com/watch?v=zx7QrUOScXw',
    'https://www.youtube.com/watch?v=kSxGn4CWgKo',
    'https://www.youtube.com/watch?v=QpBNXkKIYZw',
    'https://www.youtube.com/watch?v=6T_Yret4NRw',
    'https://www.youtube.com/watch?v=LTUN4X0IuVw',
    'https://www.youtube.com/watch?v=mdAw7U_pBKs',
    'https://www.youtube.com/watch?v=gs-V3_9eqX8',

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


