CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `vw_minha_view` AS
    SELECT 
        `notas_fiscais`.`CPF` AS `CPF`, COUNT(0) AS `COUNT(*)`
    FROM
        `notas_fiscais`
    WHERE
        (YEAR(`notas_fiscais`.`DATA_VENDA`) = 2016)
    GROUP BY `notas_fiscais`.`CPF`