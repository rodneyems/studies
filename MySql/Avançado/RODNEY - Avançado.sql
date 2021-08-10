-- SELETORES SIMPLES -- 
select * from tabela_de_clientes;
select * from tabela_de_produtos;
select * from tabela_de_vendedores;

-- COMPOSTOS COM ALIAS --
select CPF as ID_USER, NOME as NOME_USER from tabela_de_clientes;

-- COM CONDICIONAIS --
select * from tabela_de_produtos where not (EMBALAGEM = 'PET' or TAMANHO = '700 ml' or SABOR = 'Laranja');
select * from tabela_de_produtos where EMBALAGEM = 'PET' or TAMANHO = '700 ml' or SABOR = 'Laranja';
select * from tabela_de_produtos where EMBALAGEM <> 'PET' and TAMANHO <> '350 ml';
select * from tabela_de_produtos where EMBALAGEM <> 'PET' and not (TAMANHO <> '350 ml');
select * from tabela_de_produtos where SABOR in ('Laranja', 'Manga');

-- COM LIKE (NÃO PRECISA DE MATCH 100%) --
select * from tabela_de_produtos where sabor like '%Maça%';
select * from tabela_de_produtos where sabor like 'Ma%';
select * from tabela_de_clientes where NOME like '%Mattos';

-- DISTINCT SELECIONA OS VALORES DISTINTOS OU SEJA DIFERENTES (É POSSÍVEL FILTRAR DEPOIS) -- 
select distinct EMBALAGEM, TAMANHO FROM tabela_de_produtos; 
select distinct EMBALAGEM, TAMANHO, SABOR FROM tabela_de_produtos where SABOR = 'Laranja'; 
select distinct EMBALAGEM, TAMANHO, SABOR FROM tabela_de_produtos;
select distinct SABOR as Lista_de_sabores FROM tabela_de_produtos;
select EMBALAGEM, TAMANHO, SABOR FROM tabela_de_produtos; 
select distinct BAIRRO, CIDADE from tabela_de_clientes where CIDADE = 'Rio de Janeiro';
select BAIRRO, CIDADE from tabela_de_clientes where CIDADE = 'Rio de Janeiro';

-- LIMIT QUANDO COM 2 NUMEROS O PRIMEIRO EH O START E O SEGUNDO EH O NUMERO DE OCORRENCIAS --
select * from tabela_de_produtos limit 2,3;
select * from notas_fiscais where DATA_VENDA = '2017/01/01' limit 10;

-- ORDER BY PARA ORDENAR OS ITENS, PODE HVAER MAIS DE UM CAMPO --
select * from tabela_de_produtos order by PRECO_DE_LISTA;
select * from tabela_de_produtos order by PRECO_DE_LISTA DESC;
select * from tabela_de_produtos order by EMBALAGEM, TAMANHO DESC;
select * from tabela_de_produtos where SABOR = 'Manga' order by EMBALAGEM ASC, TAMANHO DESC;
select * from tabela_de_produtos where NOME_DO_PRODUTO = 'Linha Refrescante - 1 Litro - Morango/Limão';
select * from itens_notas_fiscais where CODIGO_DO_PRODUTO = '1101035' ORDER BY QUANTIDADE DESC;

-- GROUP BY PARA AGRUPAR ITENS E SOMAR, CALCULAR MEDIA, PEGAR MAIOR OU MENOR VALOR --
select EMBALAGEM, SUM(PRECO_DE_LISTA) AS SOMA_DOS_VALORES from tabela_de_produtos GROUP BY EMBALAGEM;
select EMBALAGEM, MAX(PRECO_DE_LISTA) AS MAIOR_PRECO from tabela_de_produtos GROUP BY EMBALAGEM;
select EMBALAGEM, MIN(PRECO_DE_LISTA) AS MENOR_PRECO from tabela_de_produtos GROUP BY EMBALAGEM;
select EMBALAGEM, AVG(PRECO_DE_LISTA) AS MENOR_PRECO from tabela_de_produtos GROUP BY EMBALAGEM;
select EMBALAGEM, COUNT(*) AS QUANTIDADE_ITENS from tabela_de_produtos GROUP BY EMBALAGEM;
select ESTADO, BAIRRO, SUM(LIMITE_DE_CREDITO) as LIMITE_TOTAL from tabela_de_clientes
WHERE CIDADE in ('Rio de Janeiro', 'Sao paulo')
GROUP BY ESTADO, BAIRRO
ORDER BY LIMITE_DE_CREDITO DESC;
select CODIGO_DO_PRODUTO, MAX(QUANTIDADE) AS MAIOR_PEDIDO from itens_notas_fiscais where CODIGO_DO_PRODUTO = '1101035' GROUP BY CODIGO_DO_PRODUTO;
select CODIGO_DO_PRODUTO, COUNT(*) from itens_notas_fiscais where CODIGO_DO_PRODUTO = '1101035' and QUANTIDADE = 99 GROUP BY CODIGO_DO_PRODUTO; 

-- HAVING SERVE PARA FILTRAR POR VALORES DE UM AGRUPAMENTO O HAVING EH INDEPENDENDO DO GROUP BY --
select EMBALAGEM, MAX(PRECO_DE_LISTA) AS PRECO_MAX, MIN(PRECO_DE_LISTA) AS MENOR_PRECO from tabela_de_produtos
GROUP BY EMBALAGEM HAVING SUM(PRECO_DE_LISTA) >= 80;
select EMBALAGEM, MAX(PRECO_DE_LISTA) AS PRECO_MAX, MIN(PRECO_DE_LISTA) AS MENOR_PRECO from tabela_de_produtos
GROUP BY EMBALAGEM HAVING MAX(PRECO_DE_LISTA) >= 10 and MIN(PRECO_DE_LISTA) <= 5;
select CPF, COUNT(*) from notas_fiscais where year(DATA_VENDA) = 2016 GROUP BY CPF HAVING COUNT(*) > 2000;

-- SWITCH CASE --
select COUNT(*) AS PRODUTOS, AVG(PRECO_DE_LISTA) AS MEDIA from tabela_de_produtos;

select EMBALAGEM,
case
	when PRECO_DE_LISTA >= 12 THEN 'PRODUTO CARO'
    when PRECO_DE_LISTA >= 7 AND PRECO_DE_LISTA < 12 THEN 'PRODUTO EM CONTA'
	when EMBALAGEM = 'Lata' and PRECO_DE_LISTA > 4 THEN 'LATAS CARISSIMA'
    when EMBALAGEM = 'Lata' and PRECO_DE_LISTA < 4 THEN 'LATAS EM CONTA'
    ELSE 'PRODUTO BARATO'
END AS STATUS_PRECO, AVG(PRECO_DE_LISTA) AS PRECO_MEDIO
FROM tabela_de_produtos
group by EMBALAGEM,
case
	when EMBALAGEM = 'Lata' and PRECO_DE_LISTA > 4 THEN 'a'
    when EMBALAGEM = 'Lata' and PRECO_DE_LISTA < 4 THEN 'b'
	when PRECO_DE_LISTA >= 12 THEN 'c'
    when PRECO_DE_LISTA >= 7 AND PRECO_DE_LISTA < 12 THEN 'd'
    ELSE 'e'
END
order by EMBALAGEM;

select NOME, 
case
	when year(DATA_DE_NASCIMENTO) < 1990 then 'Velho'
	when year(DATA_DE_NASCIMENTO) >= 1990 and year(DATA_DE_NASCIMENTO) <= 1995 then 'Jovem'
    when year(DATA_DE_NASCIMENTO) > 1995 then 'Criança'
	else 'ALGUMA COISA ERRADA'
END AS CLASSIFICACAO, year(DATA_DE_NASCIMENTO) AS ANO_DE_NASCIMENTO
from tabela_de_clientes
order by year(DATA_DE_NASCIMENTO) DESC

