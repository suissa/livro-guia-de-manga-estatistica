# Guia Mangá de Estatística

Esse repositório armazena todas as fórmulas e exercícios do livro Guia Mangá de Estatística. 
Será atualizado a medida que vou lendo.

# Cap 1 - Determinação de tipos de Dados

Podem ser de 2 tipos: qualitativo e quantitativo ou dados categóricos e dados numéricos.

Dados categóricos são os que não são medidos com números, os que não podem ser medidos.
Dados numéricos são aqueles que podem ser medidos, onde os intervalos entre cada graduação são iguais.


Na ficha:

```
01. Qual sua opinião sobre História da Escola Melon Vol. 5?

  1. Muito divertida.
  2. Divertida.
  3. Mais ou menos.
  4. Um pouco chata
  5. Muito chata.

02. Sexo
  1. Masculino
  2. Feminino

03. Idade
  ____________ anos

04. Quantas revistas em quadrinhos você compra por mês
  ____________ revistas  
``` 

Dados categóricos: 01 e 02.
Dados numéricos: 03 e 04.

## Exercício:

```md
Determine se os dados das seguintes tabelas são categóricos ou numéricos.

```



| Respondente | Tipo sanguíneo | Opinião sobre<br> a bebida <br>energética X | Temperatura <br>ideal do ar<br> condicionado (°C) | Recorde em <br>corrida de 100 <br>metros rasos <br>(segundos)
|---|---|---|---|---|
| Sr/Sra A | B | Insatisfatório | 25 | 14.1 |
| Sr/Sra B | A | Satisfatório | 25 | 14.1 |
| Sr/Sra C | AB | atisfatório | 25 | 14.1 |
| Sr/Sra D | O | Insatisfatório | 25 | 14.1 |
| Sr/Sra E | A | Insatisfatório | 25 | 14.1 |


### Resposta

Tipo sanguíneo e opiniões sobre a bebida energética X são exemplos de dados categóricos.<br>
Temperatura adequada de ar condicionado e histórico de recordes de corrida de <br>
100m são exemplos de dados numéricos.


# Cap 2 - Compreendendo o quadro geral: a essência dos dados numéricos

Tabela de preços de lámen:

```
1 - 700
2 - 850
3 - 600
4 - 650
5 - 980
6 - 750
7 - 500
8 - 890
9 - 888
10 - 700
11 - 890
12 - 720
13 - 680
14 - 650
15 - 790
16 - 670
17 - 680
18 - 900
19 - 880
20 - 720
21 - 850
22 - 700
23 - 780
24 - 850
25 - 750
26 - 780
27 - 590
28 - 650
29 - 580
30 - 750
31 - 800
32 - 550
33 - 750
34 - 700
35 - 600
36 - 800
37 - 800
38 - 880
39 - 790
40 - 790
41 - 780
42 - 600
43 - 670
44 - 680
45 - 650
46 - 890
47 - 930
48 - 650
49 - 777
50 - 700
```


Há um shopping center gigante composto de 50 restaurantes de lámen... e somente restaurantes de lámen!

```

5P 900-1000: 5, 18, 47
4P 800-900: 2, 8, 9, 11, 19, 21, 24, 31, 36, 37, 38, 46
3P 700-800: 1, 6, 10, 12, 15, 20, 22, 23, 25, 26, 30, 33, 39, 40, 41, 49, 50
2P 600-700: 3, 4, 13, 14, 16, 17, 28, 35, 42, 43, 44, 45, 48
1P 500-600: 7, 27, 29, 32

```

> Coloquei esses dados em `data.restaurants.js`

Em cada piso uma placa indica o preço central da classe:

```
5p: 950
4p: 850
3p: 750
2p: 650
1p: 550
```

Isso recebe o nome de `ponto médio da classe`.
O número de restaurantes em cada piso recebe o nome de frequência:

```
frequência relativa = número de valores incluídos em uma classe / número total de valores
```
 Em JS fica assim:

```js
const relative_frequency = (data_class, data_total) => data_class.length / data_total.length
```

Há 18 restaurantes no terceiro piso e 50 restaurantes no total... então...

```
18/50 = 36/100 = 0.36
```

Restaurantes com a média de 750 ienes é de 0,36. A porcentagem é obtida multiplicando a frequência por 100, 
sendo que o resultado é 36%.

| Classe (igual<br> ou maior que/<br> menor que) | Média da <br>classe | Frequência | Frequência <br>relativa
|---|---|---|---|
| 500-600 | 550 | 4 | 0,08 |
| 600-700 | 650 | 13 | 0,26 |
| 700-800 | 750 | 18 | 0,36 |
| 800-900 | 850 | 12 | 0,24 |
| 900-1000 | 950 | 3 | 0,06 |

Talvez pareça difícil porque há muitos números. Pode ficar mais fácil se usarmos um gráfico.

> O gráfico utilizado no livro é um histograma, não colocarei aqui.

**Formar uma imagem é importante. A tabela de frequência e o histograma servem para dar uma noção geral de todos os dados.**

Agora o livro fala sobre um jogo de boliche com todas as amigas da Luy, a protagonista.

### Equipe A
| Jogadora | Pontuação |
|---|---|
| Luy-luy | 86 |
| Jun | 86 |
| Yumi | 86 |
| Shizuka | 86 |
| Kaede | 86 |