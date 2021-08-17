select * from sucos_vendas.tabela_de_clientes;

insert into clientes
select CPF, NOME, ENDERECO_1 as ENDERECO, BAIRRO, CIDADE, ESTADO, CEP, DATA_DE_NASCIMENTO as DATA_NASCIMENTO, 
IDADE, SEXO, LIMITE_DE_CREDITO as LIMITE_CREDITO, VOLUME_DE_COMPRA as VOLUME_COMPRA, PRIMEIRA_COMPRA 
from sucos_vendas.tabela_de_clientes
where CPF not in (select cpf from clientes);

insert into produtos
select CODIGO_DO_PRODUTO AS CODIGO, NOME_DO_PRODUTO AS DESCRITOR, SABOR, TAMANHO, 
EMBALAGEM, PRECO_DE_LISTA AS PRECO_LISTA 
from sucos_vendas.tabela_de_produtos;

select * from clientes;
select * from vendedores;
select * from notas;