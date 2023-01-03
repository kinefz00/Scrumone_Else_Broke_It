INSERT INTO APP_USER
values ('Fabi',10,'Fabian.Klaerer@hs-aalen.de','Fabian','Klärer', 'password', 'ADMIN');
INSERT INTO APP_USER
values ('Kim',10,'kim.neuhaeusler@studmail.hs-aalen.de', 'Kim','Neuhaeusler', 'password', 'USER');
INSERT INTO APP_USER
values('Toni',10, 'toni.zubac@studmain.hs-aalen.de','Toni', 'Zubac', 'password','PUSER');

insert into impressum
values (1, 'Hier könnte das Impressum stehen');

insert into product
values
    (1, 'Electronics', '€', 'Personal use Gaming computer', 'PC', 1200.98),
    (2, 'Dog', '€', 'Stuffed dog for children', 'little childrens accessory', 23.99);

insert into technical_details
values
    (1, '8kg', 'Weight', 1),
    (2, '200x75x100','Size', 1),
    (3,'100% Cotton', 'Material', 2);

insert into delivery_address
values ( 1,'oko', 7, 'Pulfrichstr', 73477, 'Fabi' ),(2,'oko', 7, 'Pulfrichstr', 73433, 'Fabi' )