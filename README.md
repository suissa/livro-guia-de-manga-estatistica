# Guia Mangá de Estatística

Esse repositório armazena todas as fórmulas e exercícios do livro Guia Mangá de Estatística. 
Será atualizado a medida que vou lendo.

[Capítulo 1](cap1.md)

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

Onde o `data.reduce` faz a soma e divide pelo `length` do *array*, mas se for `0`` então divide por `1`.

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
  } else {
    return data[Math.floor(length / 2)];
  }
};
```