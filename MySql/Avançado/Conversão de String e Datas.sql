select date_format('2021-04-17', '%d-%m-%Y');
-- 17-04-2021

select date_format('2021-04-17', '%d-%c-%y');
-- 17-4-21

select convert(1000.50, char);

SELECT CONCAT('O cliente ', TC.NOME, ' faturou ', 
CAST(SUM(INF.QUANTIDADE * INF.preco) AS char (20))
 , ' no ano ', CAST(YEAR(NF.DATA_VENDA) AS char (20))) AS SENTENCA FROM notas_fiscais NF
INNER JOIN itens_notas_fiscais INF ON NF.NUMERO = INF.NUMERO
INNER JOIN tabela_de_clientes TC ON NF.CPF = TC.CPF
WHERE YEAR(DATA_VENDA) = 2016
GROUP BY TC.NOME, YEAR(DATA_VENDA);

select concat('O cliente ', TB_CLIENTE.NOME, ' faturou ', SUM(TB_ITENS_NF.QUANTIDADE * TB_ITENS_NF.PRECO), ' no ano ', year(TB_NF.DATA_VENDA)) as FATURAMENTO from notas_fiscais TB_NF
inner join itens_notas_fiscais TB_ITENS_NF ON TB_NF.NUMERO = TB_ITENS_NF.NUMERO
inner join tabela_de_clientes TB_CLIENTE ON TB_NF.CPF = TB_CLIENTE.CPF
WHERE year(TB_NF.DATA_VENDA) = 2016
GROUP BY TB_CLIENTE.NOME

