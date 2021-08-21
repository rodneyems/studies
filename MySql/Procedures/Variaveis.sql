CREATE PROCEDURE `variavel` ()
BEGIN

declare minha_variavel char(12) default 'SOU EU SUA VARIAVEL';
declare meu_timestamp timestamp default timestamp();
select minha_variavel as VAR, meu_timestamp as meu_ts;

END
