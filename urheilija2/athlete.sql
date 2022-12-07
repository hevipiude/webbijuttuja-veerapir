use urheilijat;

drop USER 'sampleuser1'@'localhost';
CREATE USER 'sampleuser1'@'localhost' IDENTIFIED BY 'oranges';
GRANT SELECT, INSERT, UPDATE, DELETE ON athlete TO 'sampleuser1'@'localhost';

select * from athlete;

INSERT INTO athlete(firstname, surname, nickname, birthyear, weight, photo_link, sport, acc) 


VALUES("Titta","Keinänen","Titta", "1993-10-28", 68, "https://urheilugaala.fi/wp/wp-content/uploads/2018/12/52A6680.jpg", "Karate", "EM-pronssi 2019"),

("Jaana","Ronkainen","Jaana", "1965-11-25", 52, "https://ojk.fi/wp-content/uploads/jaana1.jpg", "Judo", "EM-kulta 1989"),

("Maarit Katariina","Kallio","Maarit", "1975-10-08", 48, "http://d2a3o6pzho379u.cloudfront.net/92294.jpg", "Judo", "Minskin maailmancup voitto 1998");

select * from athlete;