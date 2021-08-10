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