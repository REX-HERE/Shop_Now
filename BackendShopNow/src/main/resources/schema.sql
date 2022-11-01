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