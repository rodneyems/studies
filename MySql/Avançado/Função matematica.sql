SELECT (10+(20*2)) as RESULTADO;
select ceiling(12.33333333) as resultado;
select floor(12.33333333) as resultado;
select round(12.33333333) as resultado;
select round(12.63333333, 2) as resultado;
select round((rand()*100)) as resultado;

select floor(SUM(QUANTIDADE * PRECO * IMPOSTO)) as VALOR_DA_NOTA from itens_notas_fiscais
inner join notas_fiscais
on itens_notas_fiscais.NUMERO = notas_fiscais.NUMERO
where year(DATA_VENDA) = '2016';

SELECT YEAR(DATA_VENDA), FLOOR(SUM(IMPOSTO * (QUANTIDADE * PRECO))) 
FROM notas_fiscais NF
INNER JOIN itens_notas_fiscais INF ON NF.NUMERO = INF.NUMERO
WHERE YEAR(DATA_VENDA) = 2016
GROUP BY YEAR(DATA_VENDA)