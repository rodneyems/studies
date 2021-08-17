start transaction;
update vendedores set comissao = 0.15;
select * from vendedores;
rollback

start transaction;
update vendedores set comissao = 0.15;
select * from vendedores;
commit