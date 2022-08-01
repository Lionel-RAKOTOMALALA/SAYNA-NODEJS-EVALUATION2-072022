-- Active: 1659073932341@@127.0.0.1@3306@d_clic
CREATE DATABASE d_clic;

use d_clic;

CREATE TABLE contact(
  id INT AUTO_INCREMENT,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  avis TEXT,
  note INT(1),
  formation VARCHAR(20),
  PRIMARY KEY(id)
) ENGINE=InnoDB;

SELECT *FROM contact