drop database shopNow;

create database shopNow;

use shopNow;
create table user (
  userId varchar(225) primary key not NULL,
  firstName varchar(225),
  lastName varchar(225),
  type varchar(225) default "customer",
  password varchar(225),
  address varchar(516)
);

insert into user values ("1","Chirag","Tank","customer","Chirag123","Nawalgarh");
insert into user values ("2","Punit","Meena","admin","Punit123","Sawaimadhopur");
insert into user values ("3","Anand","Mishra","seller","Anand123","Godha");
insert into user values ("4","Jayesh","Gat","seller","Jayesh123","Maharashtra");
insert into user values ("5","Shivam","Kulhari","customer","Shivam123","Chirawa");
insert into user values ("6","Snehal","Singh","customer","Snehal123","Banaras");
insert into user values ("7","Rohan","Kaushal","customer","Rohan123","Patiala");
insert into user values ("8","Milan","Somani","customer","Milan123","MadhyaPradesh");
insert into user values ("9","Subhash","Sheoran","customer","Subhash123","Haryana");
insert into user values ("10","Gourav","Kumar","seller","Gourav123","Delhi");






create table userContactInfo (
	userId varchar(225) not null,
    phoneNo varchar(225),
    foreign key(userId) references user(userId) on delete cascade,
    primary key (userId,phoneNo)
);

insert into userContactInfo values ("1","123456789");
insert into userContactInfo values ("1","123456780");
insert into userContactInfo values ("2","123456700");




create table userEmailInfo (
	userId varchar(225) not null,
    email varchar(225),
	foreign key(userId) references user(userId) on delete cascade,
    primary key(userId,email)
);

insert into userEmailInfo values ("1","chirag@gmail.com");
insert into userEmailInfo values ("2","punit@gmail.com");
insert into userEmailInfo values ("3","anand@gmail.com");



create table product (
	productId varchar(255) ,
    productName varchar(225) ,
    price int,
    productDescription varchar(512),
    brandName varchar(255) ,
    categoryName varchar(255),
    availableQuantity int default 100,
    ratings int default 4,
    imageUrl varchar(516) default "image url",
    verificationStatus varchar(225) default "verified",
    primary key (productId)

);

insert into product values ("1","Blue Shirt",600,"cotton fabric","Van Hussen","Shirt",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/Blue_Shirt_oyf1rm.jpg","verified");
insert into product values ("2","Blue Jeans",900,"cotton fabric","US Polo","Jeans",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/Blue_Jeans_xwqyvp.jpg","verified");
insert into product values ("3","M32",9000,"cotton fabric","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/M32_vu4kvj.jpg","verified");
insert into product values ("4","Airdopes 141",2000,"cotton fabric","Boat","Earphones",150,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/Airdopes_141_omoytr.jpg","verified");
insert into product values ("5","Inspiron",50000,"cotton fabric","Dell","Laptop",25,3,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Dell_Inspiron_qgmtjr.jpg","verified");
insert into product values ("6","Black Shoes",7000,"cotton fabric","Puma","Shoes",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Black_Shoes_trgml0.jpg","verified");
insert into product values ("7","Rich Dad Poor Dad",600,"cotton fabric","Solomon","Book",200,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/RichDadPoorDad_lkhgjp.jpg","verified");
insert into product values ("8","Blue Pen",300,"cotton fabric","Pilot","Pen",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Blue_pen_mfawlz.webp","verified");
insert into product values ("9","Wrist Watch",800,"cotton fabric","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Titan_Wrist_Watch_kah5bw.jpg","verified");
insert into product values ("10","Water Bottle",1000,"cotton fabric","Milton","Bottle",150,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Water_Bottle_us6u9g.jpg","verified");








create table shoppingCart(
	userId varchar(225),
    productId varchar(255),
    productQuantity int default 1,
    foreign key (userId) references user(userId) on delete cascade,
    foreign key (productId) references product(productId) on delete cascade,
    primary key (userId,productId)
);

insert into shoppingCart values ("1","1",2);
insert into shoppingCart values ("5","3",1);
insert into shoppingCart values ("5","5",1);
insert into shoppingCart values ("5","4",2);
insert into shoppingCart values ("6","10",4);
insert into shoppingCart values ("7","9",1);
insert into shoppingCart values ("8","7",20);
insert into shoppingCart values ("9","8",12);
insert into shoppingCart values ("9","2",4);




create table orders(
	orderId  varchar(255),
    userId varchar(225),
    orderTime timestamp not null default current_timestamp,
    deliveryAddress varchar(512) ,
    foreign key (userId) references user(userId)on delete cascade,
    primary key (orderId)

);


insert into orders (orderId,userId,deliveryAddress) values ("1","1","Nawalgarh");
insert into orders (orderId,userId,deliveryAddress) values ("2","5","Chirawa");
insert into orders (orderId,userId,deliveryAddress) values ("3","6","Banaras");
insert into orders (orderId,userId,deliveryAddress) values ("4","7","Patiala");
insert into orders (orderId,userId,deliveryAddress) values ("5","8","Haryana");
insert into orders (orderId,userId,deliveryAddress) values ("6","9","Delhi");


create table orderInfo(
	orderId varchar(255),
    productId varchar(255),
    foreign key(orderId) references orders(orderId) on delete cascade,
    foreign key(productId) references product(productId) on delete cascade,
    primary key(orderId , productId)
);



create table soldBy (
	userId varchar(225),
    productId varchar(255),
    discount int default 0,
    primary key(userId , productId),
    foreign key (userid) references  user(userId) on delete cascade,
    foreign key (productId) references product(productId) on delete cascade
);


insert into soldBy values ("3",1,20);
insert into soldBy values ("3",2,10);
insert into soldBy values ("3",3,20);
insert into soldBy values ("4",4,30);
insert into soldBy values ("4",5,10);
insert into soldBy values ("4",6,40);
insert into soldBy values ("4",7,20);
insert into soldBy values ("10",8,30);
insert into soldBy values ("10",9,10);
insert into soldBy values ("10",10,10);