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
insert into product values ("3","M32",9000,"Android v10.0, Quad Camera 64MP, 6000 mAh Battery","Samsung","Mobile",10,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/M32_vu4kvj.jpg","verified");
insert into product values ("4","Airdopes 141",2000,"42H playtime, Water Resistance, Smooth Touch Controls","Boat","Earphones",150,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421780/DBMS/Airdopes_141_omoytr.jpg","verified");
insert into product values ("5","Inspiron",50000,"intel i5-1115G4, 8GB, 2GB SSD, Win 11, Carbon Black","Dell","Laptop",25,3,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Dell_Inspiron_qgmtjr.jpg","verified");
insert into product values ("6","Black Shoes",7000,"Sole: Rubber,CLosure: Lace Up, Superior flexibility, cushioning and stability","Puma","Shoes",15,5,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Black_Shoes_trgml0.jpg","verified");
insert into product values ("7","Rich Dad Poor Dad",600," What The Rich Teach Their Kids About Money That The Poor And Middle Class Do Not","Solomon","Book",200,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/RichDadPoorDad_lkhgjp.jpg","verified");
insert into product values ("8","Blue Pen",300,"3 dimple tip technology, 0.7mm fine tip","Pilot","Pen",80,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Blue_pen_mfawlz.webp","verified");
insert into product values ("9","Wrist Watch",800,"Analog Dial, Quartz, Case Shape Round","Titan","Watch",100,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Titan_Wrist_Watch_kah5bw.jpg","verified");
insert into product values ("10","Water Bottle",1000,"Stainless Steel 950 ml Silver Freezer Safe Insulated","Milton","Bottle",150,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667421779/DBMS/Water_Bottle_us6u9g.jpg","verified");


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

# select * from shoppingCart;



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

# select * from orders;
create table orderInfo(
	orderId varchar(255),
    productId varchar(255),
  	productQuantity int,
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


insert into product values("11","Skipping Rope",300,"Jump Rope for Exercise Workout & Weight Loss - Tangle Free Jumping Rope for Kids","BoldFit","Health",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Skipping_rope_n4ehm3.webp","verified");
insert into product values("12","Crocs",700,"Crostile Material, Light weight, Easy to Clean and dry","Crocs","Footwear",100,3,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664618/DBMS2/Crocs_bagb5t.jpg","verified");
insert into product values("13","Blue Shoes",8000,"Sole: Ethylene Vinyl Acetate, Closure: Lace-Up","Adidas","Footwear",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664618/DBMS2/Blue_Shoes_aee7ob.jpg","verified");
insert into product values("14","Extension Board",900,"10V Heavy Duty 6A Four-Way 2400W Extension Board and Wire","Havells","Electronics",10,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Ext_Board_e6y1zy.jpg","verified");
insert into product values("15","Apple iPhone 13",100000,"15 cm (6.1-inch) Super Retina XDR display, Cinematic mode, Advanced Dual Camera","Apple","Mobile",30,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Iphone_coh1pi.jpg","verified");
insert into product values("16","HP Laptop",60000,"Screen Size 14 inches, Colour Silver CPU Model Core i5,RAM 16GB , OS Windows 11","HP","Laptop",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/hp_laptop_qjkvvz.webp","verified");
insert into product values("17","Refrigerator",50000,"Samsung 253 L 2 Star Frost-Free Double Door Refrigerator (RT28B3922S9/HL, Refined Inox, Convertible)","Samsung","Electronics",20,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664616/DBMS2/Refrigerator_auequ1.jpg","verified");
insert into product values("18","Wireless Mouse",400,"Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black","Logitech","Electronics",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Wireless_Mouse_bjdyoa.jpg","verified");
insert into product values("19","Sweat Shirt",700,"The Modern Soul Men's Printed Sweatshirt Hoodie","Adidas","Fashion",40,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Sweat_shirt_bjwpiz.jpg","verified");
insert into product values("20","Women Shoes",600,"Running Shoes, Rubber Sole, Closure Lace Up, Fit type Regular, pink color","Campus","Footwear",50,4,"https://res.cloudinary.com/dxo3abzy2/image/upload/v1667664617/DBMS2/Women_Footwear_nemlpc.jpg","verified");


select * from product;

select p.productId, p.productName, p.price, p.productDescription, p.brandName, p.categoryName, p.availableQuantity, p.ratings, p.imageUrl, p.verificationStatus, o.productQuantity
                from product as p, orderInfo as o where p.productId=o.productId and o.orderId="07fc83fe-c663-4ba9-b218-8e6ffdc7f038";


insert into orderInfo values("3","1");

select * from shoppingCart;
insert into shoppingCart values("5","1","6");
