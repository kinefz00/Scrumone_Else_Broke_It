INSERT INTO APP_USER
values ('Fabi',10,'Fabian.Klaerer@hs-aalen.de','Fabian','Klärer', 'password', 'ADMIN');
INSERT INTO APP_USER
values ('Kim',10,'kim.neuhaeusler@studmail.hs-aalen.de', 'Kim','Neuhaeusler', 'password', 'USER');
INSERT INTO APP_USER
values('Toni',10, 'toni.zubac@studmain.hs-aalen.de','Toni', 'Zubac', 'password','PUSER');

insert into impressum
values (1, 'Hier könnte das Impressum stehen');

insert into product (CATEGORY, CURRENCY, DESCRIPTION, NAME,PRICE)
values
    ('Electronics', '€', 'Personal use Gaming computer', 'PC', 1200.98),
    ('Dog', '€', 'Stuffed dog for children', 'little childrens accessory', 23.99);

insert into technical_details (DETAIL_TEXT, DETAIL_TITLE, PRODUCT_ID)
values
    ('8kg', 'Weight', 1),
    ('200x75x100','Size', 1),
    ('100% Cotton', 'Material', 2);

insert into delivery_address (CITY, HOUSE_NUMBER, STREET, ZIP_CODE, USERNAME)
values ('oko', 7, 'Pulfrichstr', 73477, 'Fabi'),
       ('oko', 7, 'Pulfrichstr', 73433, 'Fabi'),
       ('Aalen',22,'Achatstr', 73433,'Kim');
