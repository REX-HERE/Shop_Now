drop database shopnow;

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
	productid int auto_increment,
    pname varchar(225) ,
    price int,
    availablequantity int default 100,
    ratings int default 4,
    imageURl varchar(516) default "image url",
    verificationstatus varchar(225) default "verified",
    primary key (productid)

);
alter table product auto_increment = 100000;




create table brand (
	productid int,
    brandtype varchar(225),
    foreign key(productid) references product(productid),
    primary key (productid , brandtype)
);



create table gender(
	productid int,
    gendertype varchar(225),
    foreign key(productid) references product(productid),
    primary key (productid,gendertype)
);




create table apparel (
	productid int,
    appareltype varchar(225),
    foreign key(productid) references product(productid),
    primary key (productid,appareltype)
);



create table price(
	productid int,
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
    productid int,
    productquantity int default 0,
    foreign key (userid) references user(userid),
    foreign key (productid) references product(productid),
    primary key (userid,price,productid)
);

create table seller(
	sellerid varchar(225),
    firstname varchar(225),
    lastname varchar(225),
    password varchar(225),
    status varchar(40) default "verified",
    deliveryaddress varchar(512),
    primary key(sellerid)
    );

drop table orders;
create table orders(
	orderid int auto_increment,
    userid varchar(225),
    ordertime timestamp not null default current_timestamp,
    deliverystatus varchar(225) default "possible",
    foreign key (userid) references user(userid),
    primary key (orderid)

);



create table sellercontactinfo (
	sellerid varchar(225) not null,
    phoneno varchar(225),
    foreign key(sellerid) references seller(sellerid),
    primary key (sellerid,phoneno)
);

create table selleremailinfo (
	sellerid varchar(225) not null,
    email varchar(225),
	foreign key(sellerid) references seller(sellerid),
    primary key(sellerid,email)
);

create table admin (
	adminid varchar(225) not null,
    firstname varchar(225) ,
    lastname varchar(225),
    password varchar(225),
	primary key (adminid)
);


create table admincontactinfo(
	adminid varchar(225),
    phoneno varchar(225),
    primary key(adminid , phoneno),
    foreign key (adminid) references admin(adminid)
);



create table soldby (
	sellerid varchar(225),
    productid int,
    availability varchar(50) default "available",
    discount int default 0,
    primary key(sellerid , productid),
    foreign key (sellerid) references seller(sellerid),
    foreign key (productid) references product(productid)
);

insert into product values (1,"x", 300 , 10 , 4 , "img1" , "verified");
insert into product values (2,"y", 300 , 15 , 4 , "img2" , "verified");
insert into product values (3,"z", 300 , 78 , 4 , "img3" , "verified");
insert into product values (4,"w", 300 , 70 , 4 , "img4" , "verified");

insert into user  values ("1","Chirag","Tank","Chirag123","Nawalgarh");
insert into user  values ("2","Punit","Meena","Punit123","Sawaimadhopur");
insert into user  values ("3","Anand","Mishra","Anand123","Godha");
insert into user  values ("4","Jayesh","Gat","Jayesh123","Maharastra");



insert into usercontactinfo values ( "1" , "123456787");
insert into usercontactinfo values ( "2" , "123456788");
insert into usercontactinfo values ( "3" , "123456789");
insert into usercontactinfo values ( "4" , "123456780");

insert into useremailinfo values ("1" , "chi@g.com");
insert into useremailinfo values ("2" , "pun@g.com");
insert into useremailinfo values ("3" , "ana@g.com");
insert into useremailinfo values ("4" , "jay@g.com");

insert into brand values (1 , "puma");
insert into brand values (2 , "abibas");
insert into brand values (3 , "nike");
insert into brand values (4 , "vanhussen");

insert into gender values ( 1 , "female");
insert into gender values ( 2 , "male");
insert into gender values ( 3 , "female");
insert into gender values ( 4 , "male");

insert into apparel values ( 1 , "Tshirt");
insert into apparel values ( 2 , "Shirt");
insert into apparel values ( 3 , "Croptop");
insert into apparel values ( 4 , "Jacket");

insert into price values ( 1 , 100 , 300) ;
insert into price values (2 , 200 , 350) ;
insert into price values (3 , 80 , 250) ;
insert into price values (4 , 50 , 450) ;


insert into shoppingcart values ("1", 0 );
insert into shoppingcart values ("2", 0 );
insert into shoppingcart values ("3", 0 );
insert into shoppingcart values ("4", 0 );

insert into cartcontains values ("1", 150 , 1 , 5);
insert into cartcontains values ("2", 120 , 2 , 5);
insert into cartcontains values ("3", 160 , 3 , 5);
insert into cartcontains values ("4", 260 , 4 , 4);

insert into seller values ("1","Chirag_s","Tank","Chirag123","verified","Nawalgarh");
insert into seller values ("2","Punit_s","Meena","Punit123","verified","Sawaimadhopur");
insert into seller values ("3","Anand_s","Mishra","Anand123","verified","Godha");
insert into seller values ("4","Jayesh_s","Gat","Jayesh123","verified","Maharastra");

insert into orders(orderid , userid) values ( 1, "1");
insert into orders(orderid , userid) values ( 2, "2");
insert into orders(orderid , userid) values ( 3, "3");
insert into orders(orderid , userid) values ( 4, "4");

insert into admin values ( "ad1" , "fn1" , "ln1" , "adps1");
insert into admin values ( "ad2" , "fn2" , "ln2" , "adps2");
insert into admin values ( "ad3" , "fn3" , "ln3" , "adps3");
insert into admin values ( "ad4" , "fn4" , "ln4" , "adps4");

insert into admincontactinfo values ( "ad1" , "9911736429");
insert into admincontactinfo values ( "ad2" , "9273653856");
insert into admincontactinfo values ( "ad3" , "6381017466");
insert into admincontactinfo values ( "ad4" , "6184972648");


insert into soldby values ( "1", 1 , "available" , 10);
insert into soldby values ( "2", 2 , "available" , 30);
insert into soldby values ( "3", 3 , "available" , 0);
insert into soldby values ( "4", 4 , "available" , 5);

insert into sellercontactinfo values( "1" , "8293056274");
insert into sellercontactinfo values( "2" , "8293073954");
insert into sellercontactinfo values( "3" , "8287492274");
insert into sellercontactinfo values( "4" , "9376296274");

insert into selleremailinfo values("1" , "user1@gmail.com");
insert into selleremailinfo values("2" , "user2@gmail.com");
insert into selleremailinfo values("3" , "user3@gmail.com");
insert into selleremailinfo values("4" , "user4@gmail.com");


insert into user  values ("69","Punit","Meena","Punit123","Sawaimadhopur");
insert into product values (69,"w", 300 , 70 , 4 , "img4" , "verified");

show tables;








