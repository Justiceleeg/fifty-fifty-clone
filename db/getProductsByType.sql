select p.id, p.name, t.type, p.smallImg, p.largeImg from products p
join typetable t on t.id = p.typeId
where t.id = $1
