USE sucos;

insert into tbproduto (
PRODUTO,
NOME,
EMBALAGEM,
TAMANHO,
SABOR,
preco_lista) values (
'1040107',
'Light - 350 ml - melancia',
'Lata',
'350 ml',
'melancia',
4.56);

insert into tabela_de_vendedores (MATRICULA,NOME,PERCENTUAL_DE_COMISSAO) values ('00233', 'Joao Geraldo da Fonseca', 10);

insert into tbproduto (
PRODUTO,
NOME,
EMBALAGEM,
TAMANHO,
SABOR,
preco_lista) values (
'1033797', 'Clean - 2 Litros - Laranja', 'PET', '2 L', 'laranja', 16.01);
insert into tbproduto (
PRODUTO,
NOME,
EMBALAGEM,
TAMANHO,
SABOR,
preco_lista) values (
'1000457', 'Coca - 2 Litros', 'PET', '2 L', 'cola', 18.51);
insert into tbproduto (
PRODUTO,
NOME,
EMBALAGEM,
TAMANHO,
SABOR,
preco_lista) values (
'2020204', 'Dolly - 700 ml - Uva', 'PET', '700 ml', 'uva', 3.50);

insert into tabela_de_vendedores (MATRICULA,NOME,PERCENTUAL_DE_COMISSAO) values ('00233', 'Joao Geraldo da Fonseca', 10);
insert into tabela_de_vendedores (MATRICULA,NOME,PERCENTUAL_DE_COMISSAO) values ('00235', 'Márcio Almeida Silva', 8);
insert into tabela_de_vendedores (MATRICULA,NOME,PERCENTUAL_DE_COMISSAO) values ('00236', 'Cláudia Morais', 8);

USE sucos;

INSERT INTO tbproduto (
PRODUTO,  NOME, EMBALAGEM, TAMANHO, SABOR,
PRECO_LISTA) VALUES
('544931', 'Frescor do Verão - 350 ml - Limão', 'PET', '350 ml','Limão',3.20);

INSERT INTO tbproduto (
PRODUTO,  NOME, EMBALAGEM, TAMANHO, SABOR,
PRECO_LISTA) VALUES
('1078680', 'Frescor do Verão - 470 ml - Manga', 'Lata', '470 ml','Manga',5.18);

UPDATE tbproduto SET EMBALAGEM = 'Lata', PRECO_LISTA = 10.89 WHERE PRODUTO = '544931';
UPDATE tbproduto SET EMBALAGEM = 'PET' WHERE PRODUTO = '1078680';
UPDATE tabela_de_vendedores SET PERCENTUAL_DE_COMISSAO = 11 WHERE MATRICULA = '00236';
UPDATE tabela_de_vendedores SET NOME = 'Joao Geraldo da Fonseca Junior' WHERE MATRICULA = '00233';

DELETE FROM tbproduto WHERE PRODUTO = '1078680';
DELETE FROM tabela_de_vendedores WHERE MATRICULA = '00233';

ALTER table tbproduto ADD primary key (PRODUTO);

USE sucos;

alter table tbcliente ADD primary key (CPF);

alter table tbcliente add column (DATA_NASCIMENTO DATE);

insert into tbcliente (
CPF,
NOME,
ENDERECO,
BAIRRO,
CIDADE,
ESTADO,
CEP,
IDADE,
SEXO,
LIMITE_DE_CREDITO,
VOLUME_COMPRA,
PRIMEIRA_COMPRA,
DATA_NASCIMENTO
) values (
'45678912345',
'Joao da Silva',
'R. Padre Irineu, 25',
'Jd Germania',
'Sao paulo',
'SP',
'05848130',
25,
'M',
1000.00,
50.0,
0,
'1994-04-17'
);

alter table tabela_de_vendedores add column (DATA_ADMISSÃO DATE, DE_FERIAS bit(1));
alter table tabela_de_vendedores add primary key (MATRICULA);
insert into tabela_de_vendedores (MATRICULA, NOME, PERCENTUAL_DE_COMISSAO, DATA_ADMISSÃO, DE_FERIAS) values ('00237', 'Roberta Martins', 11, '2017-03-18', 0);
insert into tabela_de_vendedores (MATRICULA, NOME, PERCENTUAL_DE_COMISSAO, DATA_ADMISSÃO, DE_FERIAS) values ('00238', 'Péricles Alves', 11, '2016-08-16', 0);
update tabela_de_vendedores SET DATA_ADMISSÃO = '2011-05-04', DE_FERIAS = 0 where NOME = 'Claudia Morais' ;