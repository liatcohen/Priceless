-- USE priceless;


-- INSERT INTO user (name, email, phone_number)
-- VALUES ('Ofer Gilboa', 'ofer1gilboa@gmail.com', 0528283312);

-- INSERT INTO user (name, email, phone_number)
-- VALUES ('Liat Cohen', 'liatcohen9@gmail.com', 0504211600);
-- VALUES ('Hadar Alon', 'hadaralon3@gmail.com', 0528528402);

-- INSERT INTO user (name, email, phone_number)
-- VALUES ('Zohar Pfeffer', 'pfzohar@gmail.com', 0526052344);

-- INSERT INTO user (name, email, phone_number)
-- VALUES ('Ofer Gilboa', 'ofer1gilboa@gmail.com', 0528283312);

-- INSERT INTO user (name, email, phone_number)
-- VALUES ('Liat Cohen', 'liatcohen9@gmail.com', 0504211600);


-- INSERT INTO concert
-- VALUES(null, 'Mercedes Band', '2019-09-07 08:30:00', 'Israel', 'Tel Aviv', 'Habarbi', 3, 100, 150, 'A really great band', 3, 'active', 'https://sheva7.co.il/wp-content/uploads/2017/12/mercedes-band.jpg', '2019-08-27 12:58:00');

-- INSERT INTO concert
-- VALUES(null, 'Beyonce', '2019-09-14 20:15:00', 'USA', 'New York City', 'Hard Rock Cafe', 2, 200, 300, 'The one and only, BEYONCE', 1, 'active', 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/04/13/beyonce.jpg', '2019-08-27 13:44:00');


-- INSERT INTO favorite VALUES(1, 2);
-- INSERT INTO favorite VALUES(1, 3);
-- INSERT INTO favorite VALUES(2, 2);
-- INSERT INTO favorite VALUES(4, 4);


-- INSERT INTO biddable (initial_amount, end_at, concert_id)
-- VALUES (80, '2019-09-19 14:00:00', 3);

-- INSERT INTO biddable (initial_amount, end_at, concert_id)
-- VALUES (80, '2019-09-01 12:00:00', 5);

-- INSERT INTO biddable (initial_amount, end_at, concert_id)
-- VALUES (80, '2019-09-26 10:00:00', 8);


-- INSERT INTO bid (amount, biddable, bidder)
-- VALUES (90, 1, 3);

-- INSERT INTO bid (amount, biddable, bidder)
-- VALUES (95, 2, 4);

-- INSERT INTO bid (amount, biddable, bidder)
-- VALUES (110, 3, 1);


-- SELECT * FROM user;
-- SELECT * FROM concert;
-- SELECT * FROM favorite;
-- SELECT * FROM biddable;
-- SELECT * FROM bid;