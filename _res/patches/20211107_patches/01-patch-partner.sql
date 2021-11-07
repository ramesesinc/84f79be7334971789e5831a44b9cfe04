/* PARTNER */


/* exclude terminalpass on all partners except aklan */
update partner set 
	excludeservices = case 
							when excludeservices is null then 'terminalpass' 
							else concat(excludeservices, '|terminalpass')
						end 
where id not in ('038')
;


/* include terminalpass to aklan */
update partner set 
	includeservices = case 
							when includeservices is null then 'terminalpass' 
							else concat(includeservices, '|terminalpass')
						end 
where id in ('038')
and includeservices not like '%terminalpass%'
;


