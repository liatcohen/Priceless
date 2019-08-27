USE priceless;

-- CREATE TABLE concert (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     artist VARCHAR(50) NOT NULL,
--     date DATETIME NOT NULL,
--     country VARCHAR(30) NOT NULL,
--     city VARCHAR(30) NOT NULL,
--     venue VARCHAR(50) NOT NULL,
--     num_of_tickets INT NOT NULL,
--     asked_price FLOAT NOT NULL,
--     original_price FLOAT,
--     additional_info VARCHAR(300),
--     seller INT NOT NULL,
--     status ENUM ('active', 'sold', 'deleted'),
--     img_url VARCHAR(300) NOT NULL,
--     uploaded_at DATETIME NOT NULL,

--     FOREIGN KEY (seller) REFERENCES user (id)
-- );

-- CREATE TABLE user (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30) NOT NULL,
--     email VARCHAR(50),
--     phone_number INT
-- );

CREATE TABLE favorite (
    user_id INT,
    concert_id INT,

    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (concert_id) REFERENCES concert (id)
);