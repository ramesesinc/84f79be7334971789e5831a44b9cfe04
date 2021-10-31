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
	po.txntype,
	po.txntypename,
	po.refno,
	po.paidby,
	po.particulars,
	po.email,
	po.mobileno,
	po.phoneno,
	po.origin,
	case when po.webfee = 0 or po.webfee is null then 20 else po.webfee end as webfee,
	po.checkouttype
from payment p 
inner join paymentorder_paid po on p.paymentrefid = po.objid 
where p.paypartnerid = $P{paypartnerid}
and p.tracedate >= $P{startdate} 
and p.tracedate < $P{enddate}
order by p.tracedate
