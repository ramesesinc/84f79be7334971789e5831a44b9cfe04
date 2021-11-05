alter table paymentorder add txnfee decimal(16,2) default 0
;
alter table paymentorder_paid add txnfee decimal(16,2) default 0
;
alter table paymentorder_cancelled add txnfee decimal(16,2) default 0
;

update paymentorder_paid set txnfee = 0, webfee = 20
;

update paymentorder_paid po, payment p set 
	po.txnfee = 30
where po.objid = p.paymentrefid
and paypartnerid in ('PAYMAYA', 'GCASH')
and po.checkouttype = 'wallet'
;

update paymentorder_paid po, payment p  set 
	po.txnfee = po.webfee + round((round((p.amount / (1 - 0.015) - p.amount) * 100, 2) / 100),2)
where po.objid = p.paymentrefid
and paypartnerid in ('PAYMAYA', 'GCASH')
and po.checkouttype = 'card'
;


