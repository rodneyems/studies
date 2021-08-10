create database if not exists clientes;
drop database if exists clientes;

create table if not exists TABELA_DE_VENDEDORES
(MATRICULA varchar(5),
NOME varchar(100),
PERCENTUAL_DE_COMISSAO float);

create table if not exists tbCliente
(CPF varchar(11),
NOME varchar(100),
ENDERECO varchar (150),
ENDERECO2 varchar (150),
BAIRRO varchar(50),
CIDADE varchar(50),
ESTADO varchar(50),
CEP varchar(8),
IDADE smallint,
SEXO varchar(1),
LIMITE_DE_CREDITO float,
VOLUME_COMPRA float,
PRIMEIRA_COMPRA bit(1));