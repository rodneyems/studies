call hello_world;
call variavel;
call Calcula_Idade;
call inclui_por_parametro('000008', 'SUCO DE UVA - MUITO GOSTOSO', 'UVA' , '1 L', 'PET', 10.50);
select * from produtos where sabor LIKE '%UVA%';

select * from vendedores;
call Reajuste_Comissao(0.09);
select * from vendedores;

call Reajuste_Comissao('238', 0.15);
select * from vendedores;

select * from notas;
call Quantidade_notas;