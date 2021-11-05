[getBilling]
select 
	p.objid,
	p.orgcode,
	p.paypartnerid,
	p.paymentrefid,
	p.txndate,
	p.tracedate,
	p.traceid,
	p.amount,
	p.amount + po.txnfee as txnamount,
	po.refno,
	po.txnfee,
	po.webfee,
	po.checkouttype,
	ppo.info
from payment p 
inner join paymentorder_paid po on p.paymentrefid = po.objid 
inner join payment_partner_option ppo on p.orgcode = ppo.partnerid and p.paypartnerid = ppo.paypartnerid
where p.paypartnerid = $P{paypartnerid}
and p.tracedate >= $P{startdate} 
and p.tracedate < $P{enddate}
order by p.orgcode, p.tracedate
