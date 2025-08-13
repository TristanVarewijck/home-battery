CREATE TABLE `submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`postcode` varchar(10) NOT NULL,
	`huisnummer` varchar(10) NOT NULL,
	`straat` varchar(255) NOT NULL,
	`plaatsnaam` varchar(255) NOT NULL,
	`toevoeging` varchar(10),
	`has_solar_panels` boolean NOT NULL,
	`yearly_consumption` varchar(10) NOT NULL,
	`daytime_usage` varchar(20) NOT NULL,
	`first_name` varchar(100) NOT NULL,
	`last_name` varchar(100) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(50) NOT NULL,
	`user_agent` text,
	`ip_hash` varchar(64),
	CONSTRAINT `submissions_id` PRIMARY KEY(`id`)
);
