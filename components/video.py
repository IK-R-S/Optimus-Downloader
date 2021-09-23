# Download de vídeos com Python3

import pytube
import os

def video():
    link = str(input('\n LINK DO VÍDEO: '))
    print(' ')
    video =  pytube.YouTube(link)
    source = video.streams.get_highest_resolution()
    print(f'\033[1;41m [{video.title} -- {video.author}]\033[0;0m')
    print('\033[1;31m \n Fazendo o download, espere um pouco...')
    destino = source.download(output_path='/home/krs/programação/projetos/Pytube_Downloader/downloads')
    base, ext = os.path.splitext(destino)
    new_file = base + '.mp4'
    os.rename(destino, new_file)
    print('\033[1;33m \n Concluído!\n')
