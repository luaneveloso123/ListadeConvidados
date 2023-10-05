# ListadeConvidados
Lista de Convidados

//o código está obtendo referências dos elementos HTML usando seus IDs e armazenando essas referências em variáveis para uso posterior. Além disso, está definindo o estilo do botão "Adicionar"

![image](https://github.com/luaneveloso123/ListadeConvidados/assets/113206170/b3640e9a-2989-430a-bb65-984675bd1c74)

//Evento de clique é adicionado ao botão "Excluir Todos". Quando este botão é clicado, todas as tarefas são removidas da lista, document.querySelectorAll("#taskList li") seleciona todos os elementos <li> dentro da lista com o ID taskList. Em seguida, forEach é usado para percorrer cada tarefa (<li>) e o método remove() é chamado para excluí-la.

![image](https://github.com/luaneveloso123/ListadeConvidados/assets/113206170/e2e409cb-50b2-4903-bfb7-c15d8765eda2)

//Essa função é chamada quando o botão "Adicionar" é clicado ou quando a tecla Enter é pressionada. Ela verifica se o campo está vazio. Se não estiver vazio, altera a cor de fundo do botão para uma cor aleatória, define seu texto para "Convidado Adicionado" e chama a função changeButtonColorAndText(). Após um segundo, o botão é revertido para o seu estado original chamando reverterbotao()

![image](https://github.com/luaneveloso123/ListadeConvidados/assets/113206170/b8eb87c0-98f5-4331-9bc4-8718ba94a4ea)
![image](https://github.com/luaneveloso123/ListadeConvidados/assets/113206170/e4aede2b-3e64-439f-8d4e-421462d1d2ee)
![image](https://github.com/luaneveloso123/ListadeConvidados/assets/113206170/9a1fb97c-4c8f-479f-80a4-aa229f50c1ae)
![image](https://github.com/luaneveloso123/ListadeConvidados/assets/113206170/fe2c2a6e-857d-4c28-a94e-5fff83474780)

//Essa função cria elementos HTML para uma nova tarefa (caixa de seleção, texto e botão de excluir) apenas se o texto inserido contiver apenas letras. Se o texto inserido não for válido, exibe um alerta. Risca o convidado assim que há o clique no checkbox, criação do botão de excluir convidados individualemnte

![image](https://github.com/luaneveloso123/ListadeConvidados/assets/113206170/0d2aeb8f-51d1-4346-9709-2a806db34c07)

