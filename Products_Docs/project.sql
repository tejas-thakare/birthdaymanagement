-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: project
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
  `billing_id` int NOT NULL,
  `billing_extra_charges` double DEFAULT NULL,
  `billing_total_cost` double DEFAULT NULL,
  `booking_date_times` date DEFAULT NULL,
  `billing_booking_id` int DEFAULT NULL,
  PRIMARY KEY (`billing_id`),
  KEY `billing_booking_id` (`billing_booking_id`),
  CONSTRAINT `billing_info_table_ibfk_1` FOREIGN KEY (`billing_booking_id`) REFERENCES `booking_info_table` (`booking_number`)
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
  `booking_number` int NOT NULL,
  `booking_user_id` int DEFAULT NULL,
  `booking_package_id` int DEFAULT NULL,
  `booking_date_times` date DEFAULT NULL,
  `booking_amount` double DEFAULT NULL,
  `booking_status` tinyint DEFAULT NULL,
  PRIMARY KEY (`booking_number`),
  KEY `booking_user_id` (`booking_user_id`),
  KEY `booking_package_id` (`booking_package_id`),
  CONSTRAINT `booking_info_table_ibfk_1` FOREIGN KEY (`booking_user_id`) REFERENCES `user_info_table` (`user_id`),
  CONSTRAINT `booking_info_table_ibfk_2` FOREIGN KEY (`booking_package_id`) REFERENCES `package_info_table` (`package_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_info_table`
--

LOCK TABLES `booking_info_table` WRITE;
/*!40000 ALTER TABLE `booking_info_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_info_table`
--

DROP TABLE IF EXISTS `package_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package_info_table` (
  `package_id` int NOT NULL,
  `package_name` varchar(50) DEFAULT NULL,
  `package_ser_id` int DEFAULT NULL,
  `package_ven_id` int DEFAULT NULL,
  `package_cost` double DEFAULT NULL,
  PRIMARY KEY (`package_id`),
  KEY `package_ser_id` (`package_ser_id`),
  KEY `package_ven_id` (`package_ven_id`),
  CONSTRAINT `package_info_table_ibfk_1` FOREIGN KEY (`package_ser_id`) REFERENCES `service_info_table` (`service_id`),
  CONSTRAINT `package_info_table_ibfk_2` FOREIGN KEY (`package_ven_id`) REFERENCES `venue_info_table` (`venue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_info_table`
--

LOCK TABLES `package_info_table` WRITE;
/*!40000 ALTER TABLE `package_info_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review_info_table`
--

DROP TABLE IF EXISTS `review_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review_info_table` (
  `review_user_id` int DEFAULT NULL,
  `review_text` varchar(255) DEFAULT NULL,
  `review_rating` int DEFAULT NULL,
  KEY `review_user_id` (`review_user_id`),
  CONSTRAINT `review_info_table_ibfk_1` FOREIGN KEY (`review_user_id`) REFERENCES `user_info_table` (`user_id`)
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
  `service_type` varchar(250) DEFAULT NULL,
  `service_images` blob,
  `service_details` varchar(250) DEFAULT NULL,
  `service_cost` double DEFAULT NULL,
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
  `user_firstName` varchar(50) DEFAULT NULL,
  `user_lastName` varchar(50) DEFAULT NULL,
  `user_contactNo` varchar(50) DEFAULT NULL,
  `user_email` varchar(50) DEFAULT NULL,
  `user_login_id` varchar(50) DEFAULT NULL,
  `user_password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info_table`
--

LOCK TABLES `user_info_table` WRITE;
/*!40000 ALTER TABLE `user_info_table` DISABLE KEYS */;
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
  `vendor_name` varchar(50) DEFAULT NULL,
  `vendor_contact_No` varchar(50) DEFAULT NULL,
  `vendor_email` varchar(50) DEFAULT NULL,
  `vendor_login_id` varchar(50) DEFAULT NULL,
  `vendor_password` varchar(50) DEFAULT NULL,
  `vendor_service_id` int DEFAULT NULL,
  `vendor_rating` int DEFAULT NULL,
  PRIMARY KEY (`vendor_id`),
  KEY `vendor_service_id` (`vendor_service_id`),
  CONSTRAINT `vendor_info_table_ibfk_1` FOREIGN KEY (`vendor_service_id`) REFERENCES `service_info_table` (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_info_table`
--

LOCK TABLES `vendor_info_table` WRITE;
/*!40000 ALTER TABLE `vendor_info_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_info_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venue_info_table`
--

DROP TABLE IF EXISTS `venue_info_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venue_info_table` (
  `venue_id` int NOT NULL,
  `venue_name` varchar(100) DEFAULT NULL,
  `venue_contact` varchar(50) DEFAULT NULL,
  `venue_location` varchar(100) DEFAULT NULL,
  `venue_cost` double DEFAULT NULL,
  `venue_rating` int DEFAULT NULL,
  PRIMARY KEY (`venue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venue_info_table`
--

LOCK TABLES `venue_info_table` WRITE;
/*!40000 ALTER TABLE `venue_info_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `venue_info_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-10 10:41:59
