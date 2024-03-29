select TB_NF.CPF, TB_CLIENTES.NOME, date_format(TB_NF.DATA_VENDA, '%m-%y') as MES_ANO,
SUM(TB_ITENS_NF.QUANTIDADE) as QUANTIDADE_DE_COMRPAS, TB_CLIENTES.VOLUME_DE_COMPRA as QUANTIDADE_LIMITE,
case
	when SUM(TB_ITENS_NF.QUANTIDADE) > TB_CLIENTES.VOLUME_DE_COMPRA THEN 'NAO OK'
	else 'OK'
END as STATUS_COMPRA
from notas_fiscais TB_NF
inner join tabela_de_clientes TB_CLIENTES on TB_NF.CPF = TB_CLIENTES.CPF
inner join itens_notas_fiscais TB_ITENS_NF on TB_NF.NUMERO = TB_ITENS_NF.NUMERO
group by TB_NF.CPF, TB_CLIENTES.NOME, date_format(TB_NF.DATA_VENDA, '%m-%y');

select X.CPF, X.NOME, X.MES_ANO, X.STATUS_COMPRA from
(select TB_NF.CPF, TB_CLIENTES.NOME, date_format(TB_NF.DATA_VENDA, '%m-%y') as MES_ANO,
SUM(TB_ITENS_NF.QUANTIDADE) as QUANTIDADE_DE_COMRPAS, TB_CLIENTES.VOLUME_DE_COMPRA as QUANTIDADE_LIMITE,
case
	when SUM(TB_ITENS_NF.QUANTIDADE) > TB_CLIENTES.VOLUME_DE_COMPRA THEN 'NAO OK'
	else 'OK'
END as STATUS_COMPRA
from notas_fiscais TB_NF
inner join tabela_de_clientes TB_CLIENTES on TB_NF.CPF = TB_CLIENTES.CPF
inner join itens_notas_fiscais TB_ITENS_NF on TB_NF.NUMERO = TB_ITENS_NF.NUMERO
group by TB_NF.CPF, TB_CLIENTES.NOME, date_format(TB_NF.DATA_VENDA, '%m-%y')) X
where X.STATUS_COMPRA = 'NAO OK'
order by  X.CPF, X.NOME, X.MES_ANO, X.STATUS_COMPRA