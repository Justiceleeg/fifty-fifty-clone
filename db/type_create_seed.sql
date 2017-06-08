DROP TABLE IF EXISTS products;

DROP TABLE IF EXISTS typetable;

CREATE TABLE typetable (
  id serial primary key,
  type TEXT
);

INSERT INTO typetable (id, type)
VALUES (1, 'Double-Wall Vacuum-Insulated Bottles')
      ,(2, 'Single-Wall Stainless Steel Smart Source Bottles')
      ,(3, 'Plastic Tritan Water Bottles')
      ,(4, 'Wine Growlers')
      ,(5, 'Beer Growlers')
      ,(6, 'River Growlers')
      ,(7, 'Cups & Silicon Handle')
      ,(8, 'Food Storage Containers')
      ,(9, 'Lids')
      ,(10, 'Paracord Handles')
      ,(11, 'Tumblers')
