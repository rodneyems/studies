create table tab_default(
id int auto_increment,
nome varchar(50),
endereco varchar(100),
cidade varchar(50) default 'SÃO PAULO',
data_criacao timestamp default current_timestamp(),
primary key(id)
);

insert into tab_default (nome, endereco) values ('Rodney', 'Rua das Dores');
insert into tab_default (nome, endereco, cidade) values ('Martinha', 'Rua das Dores', 'Ceará');
select * from tab_default;