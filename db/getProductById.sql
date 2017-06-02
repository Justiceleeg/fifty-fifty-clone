select * from products p
join typetable t on t.id = p.typeId
where p.id = $1
