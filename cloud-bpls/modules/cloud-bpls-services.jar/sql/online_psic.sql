[getClasses]
select 
	c.*,
	g.objid as group_objid,
	g.name as group_name,
	d.objid as division_objid,
	d.name as division_name
from online_psic_class c 
inner join online_psic_group g on c.parentid = g.objid 
inner join online_psic_division d on g.parentid = d.objid
where c.name like $P{searchtext}
    or c.code like $P{searchtext}
order by c.name