select p.id, p.name, t.type, p.smallImg, p.largeImg from products p
join typetable t on t.id = p.typeId
where t.id in (1,2,3,4,5,6)
