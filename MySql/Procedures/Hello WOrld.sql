USE `vendas_sucos`;
DROP procedure IF EXISTS `hello_world`;

DELIMITER $$
USE `vendas_sucos`$$
CREATE PROCEDURE `hello_world` ()
BEGIN
select 'hello world';
END$$

DELIMITER ;