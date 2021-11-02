USE cloud_obo2;

CREATE TABLE `obo_permit_type_blocked`  (
  `permittypeid` varchar(50) NOT NULL,
  `orgcode` varchar(50) NOT NULL,
  PRIMARY KEY (`permittypeid`, `orgcode`)
) CHARACTER SET = utf8 COLLATE = utf8_general_ci;

ALTER TABLE `obo_permit_type_blocked` 
ADD CONSTRAINT `fk_obo_permit_type_blocked_permittypeid` 
FOREIGN KEY (`permittypeid`) REFERENCES `obo_permit_type` (`objid`);

INSERT INTO obo_permit_type_blocked (permittypeid, orgcode)
VALUES
('architectural', '173'), ('civil_structural', '173');