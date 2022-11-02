create database shopnow;
use shopnow;

create table user (
  userid varchar(225) primary key not NULL,
  firstname varchar(225),
  lastname varchar(225),
  password varchar(225),
  address varchar(516)
);

create table usercontactinfo (
	userid varchar(225) not null,
    phoneno varchar(225),
    foreign key(userid) references user(userid),
    primary key (userid,phoneno)
);

create table useremailinfo (
	userid varchar(225) not null,
    email varchar(225),
	foreign key(userid) references user(userid),
    primary key(userid,email)
);
create table product (
	productid varchar(225),
    pname varchar(225),
    price int,
    availablequantity int default 100,
    ratings int default 4,
    imageURl varchar(516),
    deleverytime int default 7,
    verificationstatus varchar(225) default "verified",
    primary key (productid)

);

create table brand (
	productid varchar(225),
    brandtype varchar(225),
    foreign key(productid) references product(productid),
    primary key (productid , brandtype)
);

create table gender(
	productid varchar(225),
    gendertype varchar(225),
    foreign key(productid) references product(productid),
    primary key (productid,gendertype)
);


create table apparel (
	productid varchar(225),
    appareltype varchar(225),
    foreign key(productid) references product(productid),
    primary key (productid,appareltype)
);

create table price(
	productid varchar(225),
	lowerprice int,
    upperprice int,
	foreign key(productid) references product(productid),
    primary key(productid , lowerprice , upperprice)
);

create table shoppingcart (
	userid varchar(225),
    price int default 0,
    foreign key (userid) references user(userid)
);

create table cartcontains(
	userid varchar(225),
    price  int default 0,
    productid varchar(225),
    productquantity int default 0,
    foreign key (userid) references user(userid),
    foreign key (productid) references product(productid),
    primary key (userid,price,productid)
);

insert into user  values ("1","Chirag","Tank","Chirag123","Nawalgarh");
insert into user  values ("2","Punit","Meena","Punit123","Sawaimadhopur");
insert into user  values ("3","Anand","Mishra","Anand123","Godha");
insert into user  values ("4","Jayesh","Gat","Jayesh123","Maharastra");
insert into user  values ("69","Punit","Meena","Punit123","Sawaimadhopur");

insert into usercontactinfo values ( "1" , "123456787");
insert into usercontactinfo values ( "2" , "123456788");
insert into usercontactinfo values ( "3" , "123456789");
insert into usercontactinfo values ( "4" , "123456780");

insert into useremailinfo values ("1" , "chi@g.com");
insert into useremailinfo values ("2" , "pun@g.com");
insert into useremailinfo values ("3" , "ana@g.com");
insert into useremailinfo values ("4" , "jay@g.com");

insert into product values ("p1","x", 300 , 10 , 4 , "img1" , 7 , "verified");
insert into product values ("p2","y", 300 , 15 , 4 , "img2" , 6 , "verified");
insert into product values ("p3","z", 300 , 78 , 4 , "img3" , 5 , "verified");
insert into product values ("p4","w", 300 , 70 , 4 , "img4" , 5 , "verified");
insert into product values ("p69","w", 300 , 70 , 4 , "img69" , 5 , "verified");

insert into brand values ("p1" , "puma");
insert into brand values ("p2" , "abibas");
insert into brand values ("p3" , "nike");
insert into brand values ("p4" , "vanhussen");

insert into gender values ( "p1" , "female");
insert into gender values ( "p2" , "male");
insert into gender values ( "p3" , "female");
insert into gender values ( "p4" , "male");

insert into apparel values ( "p1" , "Tshirt");
insert into apparel values ( "p2" , "Shirt");
insert into apparel values ( "p3" , "Croptop");
insert into apparel values ( "p4" , "Jacket");

insert into price values ("p1" , 100 , 300) ;
insert into price values ("p2" , 200 , 350) ;
insert into price values ("p3" , 80 , 250) ;
insert into price values ("p4" , 50 , 450) ;


insert into shoppingcart values ("1", 0 );
insert into shoppingcart values ("2", 0 );
insert into shoppingcart values ("3", 0 );
insert into shoppingcart values ("4", 0 );

insert into cartcontains values ("1", 150 ,"p1" , 5);
insert into cartcontains values ("2", 120 ,"p2" , 5);
insert into cartcontains values ("3", 160 ,"p3" , 5);
insert into cartcontains values ("4", 260 ,"p4" , 4);

SELECT * FROM product
select * from cartcontains where userid=1

