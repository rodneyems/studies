-- INNER JOIN RETORNA TODAS AS CORRESPONDECIAS ENTRE TABELAS --
select * from tabela_de_vendedores;
select MATRICULA, count(*) AS NUMERO_TOTAL_VENDAS from notas_fiscais group by MATRICULA;
select * from notas_fiscais limit 9999999999999;

select * from tabela_de_vendedores A 
inner join notas_fiscais B
ON A.MATRICULA = B.MATRICULA;
-- OBS FORMA CERTA E MAIS PERFOMATICA --
select A.MATRICULA, A.NOME, COUNT(*) FROM
tabela_de_vendedores A 
inner join notas_fiscais B
ON A.MATRICULA = B.MATRICULA
group by A.MATRICULA;
-- OBS FORMA ANTIGA E MENOS PERFOMATICA --
select A.MATRICULA, A.NOME, COUNT(*) FROM
tabela_de_vendedores A, notas_fiscais B
WHERE A.MATRICULA = B.MATRICULA
group by A.MATRICULA, A.NOME;

select SUM(QUANTIDADE * PRECO) as FATURAMENTO_TOTAL 
from itens_notas_fiscais A 
inner join notas_fiscais B 
on A.NUMERO = B.NUMERO
group by year(B.DATA_VENDA);

SELECT YEAR(DATA_VENDA), SUM(QUANTIDADE * PRECO) AS FATURAMENTO
FROM notas_fiscais NF INNER JOIN itens_notas_fiscais INF 
ON NF.NUMERO = INF.NUMERO
GROUP BY YEAR(DATA_VENDA);

-----
-- LEFT JOIN TRAZ TODOS DA TABALA DA ESQUERDA E NA DIREITA SOH OS CORRESPONDENTES --
-----
----
-- RIGHT JOIN FAZ A MSM PARA A DIREITA
----
-- obs group by mamis perfomatico --
select A.NOME, A.CPF, B.CPF from tabela_de_clientes A
left join notas_fiscais B
on A.CPF = B.CPF
where B.CPF is null
group by A.CPF;

select distinct A.NOME, A.CPF, B.CPF from tabela_de_clientes A
left join notas_fiscais B
on A.CPF = B.CPF;
-----
-- FULL JOIN TRAZ TODOS MAS COM NULL QUANDO NAO CORRESPONDENTE
-- NAO EXISTE FUNCAO NO MYSQL MAS EH POSSIVEL FAZER USANDO UNION E JUNTANDO
-- DUAS QUERYS E PRECISA TER O MESMO NUMERO DE COLUNAS E DE TIPOS NAS DUAS
-- O UNION JA FAZ O DISTINCT/GROUP O UNION ALL ELE VAI REPETIR OS CAMPOS MESMO QUE AJA ITENS REPETIDOS
-----
select tabela_de_clientes.BAIRRO, tabela_de_clientes.NOME,
tabela_de_vendedores.BAIRRO, tabela_de_vendedores.NOME 
from tabela_de_clientes
left join tabela_de_vendedores
on tabela_de_clientes.BAIRRO = tabela_de_vendedores.BAIRRO
UNION
select tabela_de_clientes.BAIRRO, tabela_de_clientes.NOME,
tabela_de_vendedores.BAIRRO, tabela_de_vendedores.NOME 
from tabela_de_clientes
right join tabela_de_vendedores
on tabela_de_clientes.BAIRRO = tabela_de_vendedores.BAIRRO;


-- CROSS JOIN TRAZ TODAS AS POSSIVEIS COMBINAÇÕES --
select tabela_de_clientes.BAIRRO, tabela_de_clientes.NOME,
tabela_de_vendedores.BAIRRO, tabela_de_vendedores.NOME 
from tabela_de_clientes , tabela_de_vendedores;