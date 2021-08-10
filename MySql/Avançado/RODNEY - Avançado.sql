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
