CREATE TABLE `payment_partner_webfee` (
  `objid` varchar(50) NOT NULL,
  `type` varchar(5) NOT NULL COMMENT 'FIX|RANGE',
  `fee` decimal(16,2) NOT NULL,
  `ranges` text,
  PRIMARY KEY (`objid`),
  CONSTRAINT `fk_payment_partner_option_payment_partner_webfee` FOREIGN KEY (`objid`) REFERENCES `payment_partner_option` (`objid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
;

