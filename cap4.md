# Valor-padrão e valor do desvio

Nesse episódio a Luy pede pra aprender sobre valor-padrão porque ela e uma amiga tiraram 90 em testes diferentes. Por algum motivo Yumi teve a nota ajustada maior em japonês clássico do que a Luy em inglês.

> O ajuste de resultados de um teste com base no valor-padrão é conhecido como padronização das notas.


É assim que se calcula a padronização. Os dados padronizados recebem o nome de valor-padrão.



Podemos pensar no valor-padrão como o número de desvios-padrão que um valor está acima ou abaixo da média. 
Por exemplo, um valor padrão 1 significa que os resultados do teste estão 1 desvio-padrão acima da média.]

Resultados iniciais dos testes (de 100)

| aluno | inglês | japonês |
|-------|--------|---------|
| Luy | 90 | 71 |
| Yumi | 81 | 73 |
| A | 73 | 79 |
| B | 97 | 70 |
| C | 85 | 67 |
| D | 60 | 66 |
| E | 74 | 60 |
| F | 64 | 83 |
| G | 72 | 57 |
| H | 67 | 85 |
| I | 87 | 93 |
| J | 78 | 89 |
| K | 85 | 78 |
| L | 96 | 74 |
| M | 77 | 65 |
| N | 100 | 78 |
| O | 92 | 53 |
| P | 86 | 80 |

Calcule a média de cada matéria:


| inglês | japonês |
|--------|---------|
| 81,3 | 74,3 |


Inglês |------------------------------|média 81,3------|90-------|  Luy<br>
Japonês |-------------------------|média 74,3---------|90-------|   Yumi

Compare a distância de cada nota da média. Isso vai mostrar a diferença entre  anota da Luy e da Yumi.


| aluno | história | biologia |
|-------|--------|---------|
| Luy | 73 | 59 |
| Yumi | 61 | 73 |
| A | 14 | 47 |
| B | 41 | 38 |
| C | 49 | 63 |
| D | 87 | 56 |
| E | 69 | 15 |
| F | 65 | 53 |
| G | 36 | 80 |
| H | 7 | 50 |
| I | 53 | 41 |
| J | 100 | 62 |
| K | 57 | 44 |
| L | 45 | 26 |
| M | 56 | 91 |
| N | 34 | 35 |
| O | 37 | 53 |
| P | 70 | 68 |
| média | 53 | 53 |

Qual é o desvio-padrão dessas disciplinas?

Precisamos aplicar a fórmula `√∑(xi - x̅)²/n`

| história | biologia |
|----------|----------|
| 22,7 | 18,3 |

Agora veremos sobre normalização também chamada de padronização.

É um cálculo que usa uma distância de uma média e o desvio-padrão dos dados. 
E torna mais fácil descobrir quanto vale uma nota.


É assim que se calcula a padronização os dados padronizados recebem o nome de **valor-padrão**.

```
valor-padrão = (cada valor - média) / desvio-padrão
```

Podemos pensar no valor-padrão como o número de desvios-padrão que um valor está acima ou abaixo da média.
Por exemplo, um valor-padrão de 1 significaque os resultados do teste estão 1 desvio-padrão (neste caso 22,7 pontos)
acima da média da turma. E um valor-padrão de -1 significa que os resultados estão um desvio-padrão abaixo da média da classe.
Vamos aplicar isso tudo ˙as notas em questão.


| aluno | história | biologia |
|-------|--------|---------|
| Luy | 73 | 59 |
| Yumi | 61 | 73 |
| A | 14 | 47 |
| B | 41 | 38 |
| C | 49 | 63 |
| D | 87 | 56 |
| E | 69 | 15 |
| F | 65 | 53 |
| G | 36 | 80 |
| H | 7 | 50 |
| I | 53 | 41 |
| J | 100 | 62 |
| K | 57 | 44 |
| L | 45 | 26 |
| M | 56 | 91 |
| N | 34 | 35 |
| O | 37 | 53 |
| P | 70 | 68 |
| média | 53 | 53 |
| desvio-padrão | 22,7 | 18,3 |


| aluno | história | biologia | valor-padrão<br> de história | valor-padrão<br> de biologia |
|-------|--------|---------|--------|---------|
| Luy | 73 | 59 | 0,88 | 0,33 |
| Yumi | 61 | 73 | 0,35 | 1,09 |
| A | 14 | 47 | -1,71 | -0,33 |
| B | 41 | 38 | -0,53 | -0,82 |
| C | 49 | 63 | -0,18 | 0,55 |
| D | 87 | 56 | 1,49 | 0,16 |
| E | 69 | 15 | 0,70 | -2,08 |
| F | 65 | 53 | 0,53 | 0 |
| G | 36 | 80 | -0,75 | 1,48 |
| H | 7 | 50 | -2,02 | -0,16 |
| I | 53 | 41 | 0 | -0,66 |
| J | 100 | 62 | 2,07 | 0,49 |
| K | 57 | 44 | 0,18 | -0,49 |
| L | 45 | 26 | -0,35 | -1,48 |
| M | 56 | 91 | 0,13 | 2,08 |
| N | 34 | 35 | -0,84 | -0,98 |
| O | 37 | 53 | -0,70 | 0 |
| P | 70 | 68 | 0,75 | 0,82 |
| média | 53 | 53 | 0 | 0 |
| desvio-padrão | 22,7 | 18,3 | 1 | 1 |


![Gráfico de linhas das notas e valores-padrão](https://github.com/suissa/livro-guia-de-manga-estatistica/blob/main/grafico-notas-e-valores-padronizados.jpg?raw=true)

Percebem como os gráficos parecem iguais? *Essa adição foi minha, não existe no livro*


> O que são esses números? 0,88 e 1,09

Existem algumas características dos valores-padrão que são revelados pela padronização.

1. Seja qual for o valor máximo de sua variável, a média aritmética do valor-padrão é sempre 0 e o devio-padrão é sempre 1.
2. Qualquer que seja a unidade da variável em questão, a média aritmética do valor-padrão é sempre 0 e o desvio-padrão é sempre 1.

Podemos comparar as notas de dois testes, com valores máximos de 100 e 200.

É possível comparar valores com diferentes unidades, como passes e números de gol.

Olhando os valores-padrão de 0,88 (história) e 1,09 (biologia), fica claro qual nota teve 
um valor relativo maior em relação ˙a outra no mesmo teste.


#### Valor do desvio

Vamos passar para o valor do desvio. Trata-se de uma simples versão transformada do valor padrão.
É baseada em 50 em vez de 0 e tem um descio padão de 1.

Aqui está a fórmula:


> valor do desvio = valor-padrão * 10 + 50

Aqui está os valores de desvio das meninas:

> Luy (história) 0,88 * 10 + 50 = 58,8
> Luy (biologia) 1,09 * 10 + 50 = 60,9

Esses resultados são exatamente o que a escola informou.

Vou explicar as características:

##### valor-padrão

1. Seja qual for o valor máximo de sua variável, a média aritmética do valor-padrão é sempre 0.
2. Qualquer que seja a unidade da variável em questão, a média aritmética no valor-padrão é sempre 0 e o desvio-padrão é sempre.


##### valor do desvio

1. Seja qual for o valor máximo de sua variável, a média aritmética do valor do desvio é sempre 50 e o desvio-padrão é sempre 10.
2. Qualquer que sejam as unidades da variável usada, a média aritmética do valor do desvio é sempre 50 e o desvio-padrão é sempre 10.


### Intterpetação do valor do desvio

> valor do desvio = valor-padrão * 10 + 50 = (cada valor - média) / desvio-padrão * 10 + 50

#### Exercício

Confira a seguir os resultados da corrida de 100m das meninas da escola.

| Atleta | Corrida de 100m<br> (segundos)|
|----|----|
| A | 16,3|
| B | 22,4|
| C | 18,5|
| D | 18,7|
| E | 20,1|
|Média | 19,2|
| Desvio-padrão | 2,01|

1. Demonstre a média dos valores-padrão da corrida 100m é 0.
2. Demonstre que o desvio-padrão do valor-padrão da corrida ed 100m é 1.


##### Resposta

1. Média do valor-padrão da corrida 100m

```
( 16,3 - 19,2 )     ( 22,4 - 19,2 )   ( 18,5 - 19,2 )   ( 18,7 - 19,2 )   ( 20,1 - 19,2 )
(_____________)  +  (_____________) + (_____________) + (_____________) + (_____________)
(    2,01     )     (    2,01     )   (     2,01    )   (     2,01    )   (     2,01    ) 
___________________________________________________________________________________________
                                         5


( 16,3 - 19,2 )  +  ( 22,4 - 19,2 ) + ( 18,5 - 19,2 ) + ( 18,7 - 19,2 ) + ( 20,1 - 19,2 )
(_______________________________________________________________________________________)
(                                      2,01                                             )
___________________________________________________________________________________________
                                         5


( 16,3 - 19,2 )+( 22,4 - 19,2 )  + ( 18,5 - 19,2 )  +    18,7 - 19,2     +   20,1 - 19,2 )
(_______________________________________________________________________________________)
(                                      2,01                                             )
___________________________________________________________________________________________
                                         5


( 16,3  +  22,4  +  18,5  +  18,7  +  20,1  - 19,2  -  19,2  -  19,2   -  19,2  -  19,2 )
(_______________________________________________________________________________________)
(                                      2,01                                             )
___________________________________________________________________________________________
                                         5


(   96   -   19,2   *    5)
(__________________________)
(           2,01           )
____________________________
              5

(       96    -   96       )   
(__________________________)
(           2,01           )
____________________________
              5

        0
__________________
        5
```

