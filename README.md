# Editor de letras LRC

Aplicativo local para sincronizar letras com músicas. Requer Python 3 e um navegador moderno; não precisa instalar pacotes Python para executar. O iniciador tenta localizar Python pelo launcher `py`, pelo comando `python` ou por uma instalação do `uv` no perfil do usuário.

## Como usar

1. Execute `Abrir LRC Editor.bat` ou rode `py -3 lrc_editor.py` nesta pasta.
2. Selecione a música e carregue um arquivo `.txt` ou `.lrc`. Cada linha aparece como um parágrafo editável com botões de reprodução, marcação e exclusão. Pressione **Enter** para dividir uma linha ou **Backspace** no início para juntá-la à anterior.
3. Use **⏱** na linha desejada, ou pressione **Espaço** para marcar a linha selecionada, inserindo ou substituindo o tempo atual no formato `[mm:ss.xx]`. A reprodução continua e a linha seguinte fica selecionada.
4. Use **▶** para voltar à marcação de tempo da linha e continuar a reprodução a partir dela.
5. Use **Remover linhas [texto]** para apagar linhas com marcadores entre colchetes, como `[Refrão]` e `[Verso 1]`; marcações de tempo LRC são preservadas. **Limpar tempos** remove apenas os tempos.
6. Informe o nome do arquivo e clique em **Salvar .lrc**. Navegadores compatíveis permitem escolher o local; nos demais, o arquivo é baixado pelo navegador.

Os arquivos de áudio e letra são carregados localmente pelo navegador. A reprodução depende dos formatos e codecs suportados pelo navegador e pelo Windows; se uma música não tocar, tente MP3 ou WAV. A interface é servida somente em `127.0.0.1`; mantenha a janela do terminal aberta enquanto usa o editor e pressione `Ctrl+C` para encerrá-lo.

## Gerar executável para Windows

Execute `build_windows.bat`. O script cria [dist/Editor LRC.exe](./dist/Editor%20LRC.exe), que inclui a interface e o runtime Python; o usuário final não precisa instalar Python. O aplicativo abre no navegador padrão, então requer um navegador moderno instalado. A compilação precisa de conexão com a internet para instalar o PyInstaller.

## Versão desktop (sem navegador)

A versão desktop usa PySide6 e QtMultimedia para abrir uma janela própria e reproduzir áudio, sem abrir navegador. Abra [dist/Editor LRC Desktop.exe](./dist/Editor%20LRC%20Desktop.exe). O programa permite abrir áudio e letras `.txt`/`.lrc`, marcar o tempo com **⏱** ou **Espaço**, tocar a partir da marcação **▶**, editar, dividir, juntar e excluir linhas, remover cabeçalhos entre colchetes e salvar LRC.

Para gerar outra compilação, execute `build_native_windows.bat`. Ele instala PySide6 Essentials, QtMultimedia e PyInstaller em um ambiente virtual isolado; precisa de conexão com a internet. O executável inclui o runtime e as bibliotecas Qt, então não requer Python nem navegador instalados. A reprodução depende dos formatos/codecs do Qt no Windows.
