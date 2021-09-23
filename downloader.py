# Download de vídeos com Python3

from components.video import *
from components.audio import *
import os

while True:
    os.system('clear')
    print('DOWNLOADS COM PYTUBE - Aúdio [a] | Vídeos [v]')
    type = ' '
    while type not in 'av':
        type = input('\n> ')
    if type == 'a':
        audio()
    elif type == 'v':
        video()
    else:
        print('\nerro inesperado')

    repeat = input('\nDeseja fazer outro download? [s][n]> ')
    if repeat != 's':
        print('Programa finalizado')
        break
