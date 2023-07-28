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

## Frequência

O número de restaurantes em cada piso recebe o nome de frequência:

```
frequência relativa = frequencia / número total de valores
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
| Jun | 73 |
| Yumi | 124 |
| Shizuka | 111 |
| Touko | 90 |
| Kaede | 38 |

### Equipe B
| Jogadora | Pontuação |
|---|---|
| Kimiko | 84 |
| Megumi | 71 |
| Yoshimi | 103 |
| Mei | 85 |
| Kaori | 90 |
| Yukiko | 89 |

### Equipe C
| Jogadora | Pontuação |
|---|---|
| Shinobu | 229 |
| Yuka | 77 |
| Sakura | 59 |
| Kanako | 95 |
| Kumiko | 70 |
| Hirono | 88 |

Nesse momento eles têm a ideia de calcular a média de cada equipe.
Você calcula o valor médio dividindo o total dos pontos pelo número de integrantes da equipe.

```
Equipe A: 522/6 = 87
Equipe B: 522/6 = 87
Equipe C: 618/6 = 103
```

Fiz a seguinte função em js:

```js
const mean = (data) => data.reduce((a, b) => a + b, 0) / (data.length || 1)
```

Onde o `data.reduce` faz a soma e divide pelo `length` do *array*, mas se for `0 então divide por 1`.

O valor médio é chamado de média estatística. E a média em questão agora é o que chamamos de média aritmética.

Também existe a média geométrica e média harmônica.

> Média geométrica = raiz enésima da multiplicação dos valores

![Média geométrica](https://blog.professorferretto.com.br/wp-content/uploads/2019/05/formula-da-media-geometrica.png)

```js
const geometricAverage = (data) => Math.pow(data.reduce((a, b) => a * b), 1 / data.length)
```

> Média harmônica = 1 dividido ( (1/x1 + 1/x2 + ... + 1/xn) / n )

![Média harmônica](https://pt-static.z-dn.net/files/dc5/5fec6ffa9a7b05f02ee0ec4cc0cf5652.png)

```js
const harmonicAverage = (data) => data.length / data.reduce((a, b) => a + 1 / b, 0)
```

A mediana é o valor central quando se coloca os valores em ordem do menor pro maior.

```
Equipe A
38 - 73 - 86 - 90 - 111 - 124

Equipe B
71 - 84 - 85 - 89 - 90 - 103

Equipe C
59 - 70 - 77 - 88 - 95 - 229
```

Se o número de valores for ímpar então pega o valor do meio, se for par pega o valor médio dos 2 números do meio.

A mediana da Equipe C é (77 + 88) = 82,5

```js
const median = (data) => {
  data.sort((a, b) => a - b);
  const length = data.length;
  if (length === 0) return undefined;
  if (length % 2 === 0) {
    return (data[length / 2] + data[length / 2 - 1]) / 2;
  }

  return data[Math.floor(length / 2)];
};
```

Onde o `data.sort` arranja os valores do menor para o maior, o `if (length % 2 === 0)` testa se o tamanho é par e retorna a
média da soma dos valores do meio, se não for retorna apenas o valor do meio, uso Math.floor porque a divisão por 2 sempre será terá um decimal
e como o *array* começa em 0 então tem que ser o arredondado para baixo.

Exemplo:

```
5 = 5/2 = 2.5 = 2 => (0, 1, |2|, 3, 4)
13 = 13/2 = 6.5 = 6 => (0, 1, 2, 3, 4, 5, |6|, 7, 8, 9, 10, 11, 12)
```

## Desvio-padrão

O desvio-padrão é um indicador que mostra a diferença da média de cada valor nesse conjunto. 
O desvio-padrão mínimo é 0 e na medida que a "dispersão de dados" aumenta, o mesmo ocorre com o desvio-padrão.

![Desvio-padrão gráfico](https://proeducacional.com/packages/uploads/2020/08/img_5f2ae87aaa0c2.png)

A fómula é a seguinte:

```
raiz quadrada da soma de (cada valor - média)² divididos pelo total de valores
√∑(xi - x̅)²/n
```

![Fórmula do desvio-padrão](https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/desvio-padrao-matematica.jpg)

Como você pode ver na tabela abaixo, o intervalo da classe é 100. O intervalo não foi determinado de acordo com nenhum
tipo de  padrão matemático - foi definido de forma subjetiva. Determinar o intervalo de classe cabe a quem está
analisando os dados.


|Classe (igual ou <br> maior/menor que) | Ponto médio <br>da classe | Frequência | Frequência <br>relativa|
|---|---|---|---|
| 500-600 | 550 | 4 | 0,08 |
| 600-700 | 650 | 13 | 0,26 |
| 700-800 | 750 | 18 | 0,36 |
| 800-900 | 850 | 12 | 0,24 |
| 900-1000 | 950 | 3 | 0,06 |
| Total | | 50 | 1,00 |



Há um jeito de determinar o intervalo de classe matematicamente. Isso é feito com a **Regra de Sturges**.

### Etapa 1

```
1 + (log10 (número de valores) / log10 2)

1 + log10 50 / log10 2 = 1 + 5,6438... = 6,6438 ~= 7
```

### Etapa 2

Calcule o intervalo de classe usando a fórmula abaixo:

```
(valor mínimo - valor máximo) / número de classes calculado com a Regra de Sturges

(980 - 500) / 7 = 480 / 7 = 68,5714 ~= 69
```

Tabela dos 50 melhores restaurantes de lámen com intervalo de classe determinado matematicamente


|Classe (igual ou <br> maior/menor que) | Ponto médio <br>da classe | Frequência | Frequência <br>relativa|
|---|---|---|---|
| 500-569 | 534,5 | 2 | 0,08 |
| 569-638 | 603,5 | 5 | 0,26 |
| 638-707 | 672,5 | 15 | 0,36 |
| 707-776 | 741,5 | 6 | 0,24 |
| 776-845 | 810,5 | 10 | 0,06 |
| 845-914 | 879,5 | 10 | 0,06 |
| 914-983 | 948,5 | 2 | 0,06 |
| Total | | 50 | 1,00 |

## Inferência estatística e Estatística descritiva

A inferência estatística utiliza o método estatístico em dados amostrais e tira conclusões sobre a população de interesse, descrevendo-a ou testando hipóteses. Em outras palavras: A inferência estatística é um processo de inferir características de uma população por meio da observação de uma amostra.

A estatística descritiva é a etapa inicial da análise de dados e tem por objetivo descrever os dados observados. Na sua função de descrição dos dados, esta tem as seguintes atribuições: a obtenção, organização, redução e representação dos dados estatísticos de forma a auxiliar a descrição do fenômeno observado.

### Exercícios e respostas

A tabela seguinte é o registro de corrida de 100m de várias meninas.

| Atleta | Corrida de 100m <br>(segundos) |
|---|---|
| Sra. A | 16,3 |
| Sra. B | 22,4 |
| Sra. C | 18,5 |
| Sra. D | 18,7 |
| Sra. E | 20,1 |

> 1. Qual é o valor médio?
> 2. Qual é a mediana?
> 3. Qual é o desvio padrão?

```
1. A média aritmética é (16,3 + 22,4 + 18,5 + 18,7 + 20,1) / 5 = 96/5 = 19,2
2. A mediana é 18,5
3. √((16,3 - 19,2)² + (22,4 - 19,2)² + (18,5 - 19,2)² + (18,7 - 19,2)² + (20,1 - 19,2)²) / 5
√((-2,9)² + (3,2)² + (-0,7)² + (-0,5)² + (0,9)²) / 5
√(8,41 + 10,24 + 0,49 + 0,25 + 0,81) / 5
√20,2 / 5
√4,04 ~= 2,01

```

## Resumo

- Para visualizar o panorama geral dos dados intuitivamente, crie uma tabela de frequência ou desenhe um histograma