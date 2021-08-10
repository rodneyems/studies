select * from tabela_de_clientes;
select * from tabela_de_produtos;
select * from tabela_de_vendedores;

select CPF as ID_USER, NOME as NOME_USER from tabela_de_clientes;

select * from tabela_de_produtos where not (EMBALAGEM = 'PET' or TAMANHO = '700 ml' or SABOR = 'Laranja');
select * from tabela_de_produtos where EMBALAGEM = 'PET' or TAMANHO = '700 ml' or SABOR = 'Laranja';
select * from tabela_de_produtos where EMBALAGEM <> 'PET' and TAMANHO <> '350 ml';
select * from tabela_de_produtos where EMBALAGEM <> 'PET' and not (TAMANHO <> '350 ml');
select * from tabela_de_produtos where SABOR in ('Laranja', 'Manga');

select * from tabela_de_produtos where sabor like '%Maça%';
select * from tabela_de_produtos where sabor like 'Ma%';
select * from tabela_de_clientes where NOME like '%Mattos';

select distinct EMBALAGEM, TAMANHO FROM tabela_de_produtos; 
select distinct EMBALAGEM, TAMANHO, SABOR FROM tabela_de_produtos where SABOR = 'Laranja'; 
select distinct EMBALAGEM, TAMANHO, SABOR FROM tabela_de_produtos;
select distinct SABOR as Lista_de_sabores FROM tabela_de_produtos;
select EMBALAGEM, TAMANHO, SABOR FROM tabela_de_produtos; 

select distinct BAIRRO, CIDADE from tabela_de_clientes where CIDADE = 'Rio de Janeiro';
select BAIRRO, CIDADE from tabela_de_clientes where CIDADE = 'Rio de Janeiro';

select * from tabela_de_produtos limit 2,3;
select * from notas_fiscais where DATA_VENDA = '2017/01/01' limit 10;

select * from tabela_de_produtos order by PRECO_DE_LISTA;
select * from tabela_de_produtos order by PRECO_DE_LISTA DESC;
select * from tabela_de_produtos order by EMBALAGEM, TAMANHO DESC;
select * from tabela_de_produtos where SABOR = 'Manga' order by EMBALAGEM ASC, TAMANHO DESC;

select * from tabela_de_produtos where NOME_DO_PRODUTO = 'Linha Refrescante - 1 Litro - Morango/Limão';
select * from itens_notas_fiscais where CODIGO_DO_PRODUTO = '1101035' ORDER BY QUANTIDADE DESC;

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

select EMBALAGEM, MAX(PRECO_DE_LISTA) AS PRECO_MAX, MIN(PRECO_DE_LISTA) AS MENOR_PRECO from tabela_de_produtos
GROUP BY EMBALAGEM HAVING SUM(PRECO_DE_LISTA) >= 80;
select EMBALAGEM, MAX(PRECO_DE_LISTA) AS PRECO_MAX, MIN(PRECO_DE_LISTA) AS MENOR_PRECO from tabela_de_produtos
GROUP BY EMBALAGEM HAVING MAX(PRECO_DE_LISTA) >= 10 and MIN(PRECO_DE_LISTA) <= 5;
select CPF, COUNT(*) from notas_fiscais where year(DATA_VENDA) = 2016 GROUP BY CPF HAVING COUNT(*) > 2000;