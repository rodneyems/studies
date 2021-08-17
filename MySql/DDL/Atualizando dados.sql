update clientes set NOME = 'Rodney' where CPF = '1471156710';

select * from clientes;

select * from sucos_vendas.tabela_de_produtos;

select * from produtos;

update produtos set preco_lista = preco_lista * 1.5 where sabor = 'Manga';

select * from produtos;


select * from vendedores;
select * from sucos_vendas.tabela_de_vendedores;

update vendedores A 
inner join sucos_vendas.tabela_de_vendedores B
on A.MATRICULA = substr(B.MATRICULA, 3,3)
SET A.NOME = B.NOME;

UPDATE CLIENTES A INNER JOIN VENDEDORES B
ON A.BAIRRO = B.BAIRRO
SET A.VOLUME_COMPRA = A.VOLUME_COMPRA * 1.30;

DELETE A FROM NOTAS A
INNER JOIN CLIENTES B ON A.CPF = B.CPF
WHERE B.IDADE <= 18