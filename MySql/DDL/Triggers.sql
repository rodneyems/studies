SELECT CPF, IDADE, DATA_NASCIMENTO, timestampdiff(YEAR, DATA_NASCIMENTO, NOW()) AS ANOS FROM
CLIENTES

DELIMITER //
CREATE TRIGGER TG_CLIENTES_IDADE_INSERT BEFORE INSERT ON CLIENTES
FOR EACH ROW
BEGIN
SET NEW.IDADE = timestampdiff(YEAR, NEW.DATA_NASCIMENTO, NOW());
END//

create table if not exists LOG(log varchar(50));

DELIMITER //
CREATE TRIGGER TG_LOG_CLIENT_INSERT after INSERT ON CLIENTES
FOR EACH ROW BEGIN
insert into log values ('AGORA VAI IHU');
END//

insert into clientes values ('123456','Rodney','Rua das dores','Jd Guaruja','Sao Paulo','SP','0584844','1994-04-17',0,'M',1000.00,50.00,0);

select * from LOG;

select * from clientes;