CREATE TABLE `project` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY, 
  `name` varchar(255),
  `name_en` varchar(255),
  `province` varchar(255),
  `subdistrict` varchar(255),
  `start_working` varchar(255),
  `finish_working` varchar(255),
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP

)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `project_detail` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY, 
  `project_id` int(11) NOT NULL,
  `manager_id` int(11) NOT NULL,
  `suplier_id` int(11) NOT NULL,
  `camp_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP

)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `manager_detail` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY, 
  `username` varchar(255),
  `password` varchar(255),
  `name` varchar(255),
  `phoneNo` varchar(255),
  `email` varchar(255),
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP

)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `suplier_detail` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY, 
  `username` varchar(255),
  `password` varchar(255),
  `name` varchar(255),
  `phoneNo` varchar(255),
  `email` varchar(255),
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP

)ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE `camp` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY, 
  `construction_name` varchar(255),
  `name` varchar(255),
  `phoneNo` varchar(255),
  `email` varchar(255),
  `goodspace` varchar(255),
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP

)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `labor` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY, 
  `name` varchar(255),
  `phoneNo` varchar(255),
  `numberId` varchar(255),
  `nationality` varchar(255),
  `follower` varchar(255),
  `type` varchar(255),
  `husband` varchar(255),
  `wife` varchar(255),
  `child` varchar(255),
  `other` varchar(255),
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP

)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `child` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY, 
  `prefix` varchar(255),
  `name` varchar(255),
  `birthDay` varchar(255),
  `nationality` varchar(255),
  `gender` varchar(255),
  `school_check` varchar(255),
  `school_detail` varchar(255),
  `vaccine_check` varchar(255),
  `labor_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP

)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `vaccine_history` (
  `id` int(11) AUTO_INCREMENT PRIMARY KEY, 
  `one_month` varchar(255),
  `four_month` varchar(255),
  `six_month` varchar(255),
  `nine_month` varchar(255),
  `one_yearSix` varchar(255),
  `two_year` varchar(255),
  `two_yearSix` varchar(255),
  `four_year` varchar(255),
  `other` varchar(255),
  `child_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP

)ENGINE=InnoDB DEFAULT CHARSET=utf8;





