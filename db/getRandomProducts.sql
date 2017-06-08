select id, name, smallImg from products
where id in (select CEIL(RANDOM()*(select count(id) from products)) from products LIMIT 6)
