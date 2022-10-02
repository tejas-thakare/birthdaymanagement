-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: project_database2
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `billing_info_table`
--

DROP TABLE IF EXISTS `billing_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billing_info_table` (
  `billing_id` int NOT NULL AUTO_INCREMENT,
  `billing_booking_id` int DEFAULT NULL,
  `billing_date` date DEFAULT NULL,
  `billing_extra_charges` double DEFAULT NULL,
  `billing_total_cost` double DEFAULT NULL,
  `billing_user_id` int DEFAULT NULL,
  PRIMARY KEY (`billing_id`),
  KEY `FK7rmlu82a2odgyx6i8eblg4q2n` (`billing_user_id`),
  CONSTRAINT `FK7rmlu82a2odgyx6i8eblg4q2n` FOREIGN KEY (`billing_user_id`) REFERENCES `user_info_table` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing_info_table`
--

LOCK TABLES `billing_info_table` WRITE;
/*!40000 ALTER TABLE `billing_info_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `billing_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_info_table`
--

DROP TABLE IF EXISTS `booking_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_info_table` (
  `booking_number` int NOT NULL AUTO_INCREMENT,
  `book_date` varchar(255) DEFAULT NULL,
  `booking_date` date DEFAULT NULL,
  `booking_amount` double DEFAULT NULL,
  `booking_user_id` int DEFAULT NULL,
  `booking_package_cost` int DEFAULT NULL,
  `booking_venue_cost` int DEFAULT NULL,
  PRIMARY KEY (`booking_number`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_info_table`
--

LOCK TABLES `booking_info_table` WRITE;
/*!40000 ALTER TABLE `booking_info_table` DISABLE KEYS */;
INSERT INTO `booking_info_table` VALUES (1,NULL,'2022-09-22',64000,2,42000,22000),(2,NULL,'2022-09-23',64000,2,42000,22000),(3,NULL,'2022-09-29',54000,4,32000,22000),(5,NULL,'2022-09-30',64000,7,42000,22000),(6,NULL,'2022-09-30',54000,8,32000,22000),(7,NULL,'2022-10-13',54000,8,32000,22000),(16,NULL,'2022-09-29',67000,9,45000,22000),(17,NULL,'2022-09-30',55000,10,35000,20000),(18,NULL,'2022-09-28',57000,8,35000,22000),(19,NULL,'2022-09-28',57000,8,35000,22000),(20,NULL,'2022-09-28',57000,8,35000,22000),(21,NULL,'2022-09-28',57000,8,35000,22000),(22,NULL,'2022-09-28',57000,8,35000,22000),(23,NULL,'2022-09-29',57000,10,35000,22000),(24,NULL,'2022-09-29',57000,10,35000,22000),(25,NULL,'2022-09-29',55000,11,35000,20000),(26,NULL,'2022-09-26',55000,15,35000,20000),(27,NULL,'2022-10-04',57000,16,35000,22000);
/*!40000 ALTER TABLE `booking_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_info_table`
--

DROP TABLE IF EXISTS `package_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package_info_table` (
  `package_id` int NOT NULL AUTO_INCREMENT,
  `package_cost` int NOT NULL,
  `package_name` varchar(255) NOT NULL,
  PRIMARY KEY (`package_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_info_table`
--

LOCK TABLES `package_info_table` WRITE;
/*!40000 ALTER TABLE `package_info_table` DISABLE KEYS */;
INSERT INTO `package_info_table` VALUES (1,25000,'Silver'),(2,45000,'Platinum'),(3,35000,'Gold');
/*!40000 ALTER TABLE `package_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review_info_table`
--

DROP TABLE IF EXISTS `review_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review_info_table` (
  `review_no` int NOT NULL AUTO_INCREMENT,
  `review_rating` int DEFAULT NULL,
  `review_text` varchar(255) DEFAULT NULL,
  `review_user_id` int DEFAULT NULL,
  PRIMARY KEY (`review_no`),
  KEY `FKcpxsi7dotkguno03qt3hgnc8y` (`review_user_id`),
  CONSTRAINT `FKcpxsi7dotkguno03qt3hgnc8y` FOREIGN KEY (`review_user_id`) REFERENCES `user_info_table` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_info_table`
--

LOCK TABLES `review_info_table` WRITE;
/*!40000 ALTER TABLE `review_info_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `review_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_info_table`
--

DROP TABLE IF EXISTS `service_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service_info_table` (
  `service_id` int NOT NULL,
  `service_package_id` int DEFAULT NULL,
  `service_cost` int DEFAULT NULL,
  `service_details` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_info_table`
--

LOCK TABLES `service_info_table` WRITE;
/*!40000 ALTER TABLE `service_info_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info_table`
--

DROP TABLE IF EXISTS `user_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info_table` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_contact_no` bigint NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_first_name` varchar(255) NOT NULL,
  `user_last_name` varchar(255) NOT NULL,
  `user_login_id` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info_table`
--

LOCK TABLES `user_info_table` WRITE;
/*!40000 ALTER TABLE `user_info_table` DISABLE KEYS */;
INSERT INTO `user_info_table` VALUES (1,8329175067,'pranali@gmail.com','pranali','mundale','pranali','pranali123'),(2,9766255595,'tanmay@gmail.com','tanmay','bhat','tanmay','tanmay123'),(3,8877334455,'rajest@gmail.com','rajest','gupta','rajesh','rajesh123'),(4,9921314151,'raghav@gmail.com','Raghav','Joshi','raghav','raghav123'),(5,7972456765,'rajesh123@gmail.com','Rajesh','Mishra','Rajesh','Rajesh123'),(6,8877665544,'Tushar@gmail.com','Tushar','Gabhane','tushar123','tushar123'),(7,8977112233,'Akshata@gmail.com','Akshata','Bhave','akshata1999','akshata123'),(8,7755664433,'ajaygupta12@gmail.com','Ajay','Gupta','ajay@12','ajay123'),(9,7233445467,'Aadesh@gmail.com','Aadesh','Rane','aadesh','aadesh123'),(10,8668463651,'ankit77@gmail.com','Ankit','Jadhav','ankit','ankit123'),(11,7876345567,'vishal@gmail.com','Vishal','Thite','vishal','vishal123'),(15,9988776655,'shubham@gmail.com','Shubham','Pawar','shubham','shubham123'),(16,9822108869,'sumedh@gmail.com','Sumedh','Zende','sumedh','sumedh123');
/*!40000 ALTER TABLE `user_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_info_table`
--

DROP TABLE IF EXISTS `vendor_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_info_table` (
  `vendor_id` int NOT NULL AUTO_INCREMENT,
  `vendor_booking_id` int DEFAULT NULL,
  `vendor_contact_no` bigint NOT NULL,
  `vendor_email` varchar(255) NOT NULL,
  `vendor_login_id` varchar(255) NOT NULL,
  `vendor_name` varchar(255) NOT NULL,
  `vendor_password` varchar(255) DEFAULT NULL,
  `vendor_rating` int DEFAULT NULL,
  `vendor_service_id` int DEFAULT NULL,
  `vendor_status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_info_table`
--

LOCK TABLES `vendor_info_table` WRITE;
/*!40000 ALTER TABLE `vendor_info_table` DISABLE KEYS */;
INSERT INTO `vendor_info_table` VALUES (1,1,7676768899,'shubham@gmail.com','shubham','Shubham','shubham123',0,0,1),(2,26,9090884432,'kartik@gmail.com','kartik','Kartik','kartik123',0,0,0),(3,27,7756884432,'Ashwin@gmail.com','Ashwin','Ashwin','ashwin123',0,0,0),(4,6,7566443322,'prasad@gmail.com','prasad','Prasad Sharma','prasad123',0,0,1),(7,7,8899776655,'tejas@gmail.com','tejas','Tejas','tejas123',0,0,1);
/*!40000 ALTER TABLE `vendor_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venue_info_table`
--

DROP TABLE IF EXISTS `venue_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venue_info_table` (
  `venue_id` int NOT NULL AUTO_INCREMENT,
  `venue_contact` bigint DEFAULT NULL,
  `venue_cost` int DEFAULT NULL,
  `venue_location` varchar(255) DEFAULT NULL,
  `venue_name` varchar(255) NOT NULL,
  `venue_rating` int DEFAULT NULL,
  PRIMARY KEY (`venue_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venue_info_table`
--

LOCK TABLES `venue_info_table` WRITE;
/*!40000 ALTER TABLE `venue_info_table` DISABLE KEYS */;
INSERT INTO `venue_info_table` VALUES (1,8883334440,18000,'Nashik','Nakshatra Hall',3),(2,8787898990,22000,'Nashik','Five Elements',4),(3,9997778890,20000,'Nashik','Express-In',4);
/*!40000 ALTER TABLE `venue_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venue_info_table_vendors`
--

DROP TABLE IF EXISTS `venue_info_table_vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venue_info_table_vendors` (
  `venue_entity_venue_id` int NOT NULL,
  `vendors_vendor_id` int NOT NULL,
  KEY `FKcebkc601yha31o3h7uw71f422` (`vendors_vendor_id`),
  KEY `FKncohv835jxcf9dyxstqgcamfm` (`venue_entity_venue_id`),
  CONSTRAINT `FKcebkc601yha31o3h7uw71f422` FOREIGN KEY (`vendors_vendor_id`) REFERENCES `vendor_info_table` (`vendor_id`),
  CONSTRAINT `FKncohv835jxcf9dyxstqgcamfm` FOREIGN KEY (`venue_entity_venue_id`) REFERENCES `venue_info_table` (`venue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venue_info_table_vendors`
--

LOCK TABLES `venue_info_table_vendors` WRITE;
/*!40000 ALTER TABLE `venue_info_table_vendors` DISABLE KEYS */;
/*!40000 ALTER TABLE `venue_info_table_vendors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-02 12:46:07
