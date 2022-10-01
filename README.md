# Corrida com barreiras

Seus amigos a acabaram de inventar um jogo muito legal e você resolveu programá-lo para poder
brinar à vontade. Voê preisa ler os dados a seguir para poder jogar:

- quatro números k, a, b e c
- com eles voce cria uma lista L de 1000 inteiros de acordo com as **regras [1]**

## regras 1

- A lista com l[o] = k. ou seja o primerio item da lista é k
- para todos os outros se utiliza a fórmula L[i + 1] = (((L[i] * a) % b) + c);

## regras 2

1. O jogador iniia em L[0], o primeiro número da lista (vamos chamar este número de s).
1. Se s > 0 o jogador se move s posições para o final da lista e diminui uma unidade do número de onde saiu.
1. Se s < 0 o jogador se move s posições para o iníio da lista mas aumenta uma unidade do número de onde saiu.
1. Se for preiso, o jogador dá a volta no vetor e continua pela outra ponta.
1. se o jogador cair em zero o jogo acaba

## solução 
para fazer a solução utilizaresmos a línguagem de programação **javaScript** primeiro passo é criar a lista e para isso utilizaremos as **regras [1]**.<br/>
```js
let board = new Array(); // ou let borad = [];

board.push(k);

for (let i = 1; i < len; i++) // len é o tamanho do array que você quer criar, isso é só um exemplo de como pode ser feito
    board.push(((board[i-1] * a) % b) + c);
```

depois que o array foi criado com as regras definidas precisamos achar
como será feito a parte de andar no vetor conforme as **regras [2]**.
Um jeito de andar pelo vetor conforne o número que está dentro da posição i
é sabendo a posição que nós nos encontramos e adicionando o valor que está
naquela posição, por exemplo: O jogador está na posição 5 de um vetor de 10
elementos e o valor contido nessa posição é 4, assim sabemos
que o jogador tem que andar até a posição 5 + 4 = 9. Mas também não podemos
esquecer de diminuir uma unidade do valor na posição 5. fazendo desse jeito
nós nos encontramos uma situação inesperada, pois isso funciona para
qualquer soma p + v < len, onde 'p' é a posição, 'v' o valor dentro dela e
'len' o tamanho do vetor. Veja o que acontece se nós aplicamos isso, O
jogador está na mesma posição 5 de um vetor de 10 elementos e o valor
contido na posição 5 é de 6, então o jogador deve andar até a posição 5 + 6
= 11, o perigo está ai, não existem posição 11 num vetor de 10 elementos,
já que seu range é de **o até 9**. então como podemos solucionar esse problema?
Simple nós podemos nos aproveitar do operador de resto (%), pois veja o que
acontece nos cassos descrito antes.
### Primeiro caso:<br/>
- Vetor de 10 elementos
- player está na posição 5
- valor na posição 5 é 4
- 'len' é o tamanho do vetor

então podemos fazer (5 + 4) % len, veja o que acontece. 9 % 10, como não há
divisão inteira de 9 por 10 (9/10), então o retorno é o próprio 9

### segundo caso
- Vetor de 10 elementos
- player está na posição 5
- valor na posição 5 é 6
- 'len' é o tamanho do vetor

então podemos fazer (5 + 6) % len -> 11 % 10, com 11 é maior que 10 então o operador divide a quantidade de vezes que da, no caso acima é uma é retorna a quantidade que falto a ser dividida, 11 - 10 = 1, logo o resto é 1, que também é a posição que queremos estar logo após da a volta no vetor