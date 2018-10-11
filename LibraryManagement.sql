-- MySQL dump 10.13  Distrib 5.7.21, for osx10.13 (x86_64)
--
-- Host: localhost    Database: LibraryManagement
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Authorization`
--

DROP TABLE IF EXISTS `Authorization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Authorization` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(35) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `EmailId` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Authorization`
--

LOCK TABLES `Authorization` WRITE;
/*!40000 ALTER TABLE `Authorization` DISABLE KEYS */;
INSERT INTO `Authorization` VALUES (7,'AdMenon','gold','ghfishf'),(27,'junaidasads','lol','adssadsad');
/*!40000 ALTER TABLE `Authorization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BookDetail`
--

DROP TABLE IF EXISTS `BookDetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BookDetail` (
  `BookId` int(11) NOT NULL,
  `BookName` varchar(40) DEFAULT NULL,
  `BookType` varchar(20) DEFAULT NULL,
  `BookEdition` int(11) DEFAULT NULL,
  `TotalQuantity` int(11) DEFAULT NULL,
  `AvailableQuantity` int(11) DEFAULT NULL,
  `BookDescription` varchar(100) DEFAULT NULL,
  `Premium` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`BookId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BookDetail`
--

LOCK TABLES `BookDetail` WRITE;
/*!40000 ALTER TABLE `BookDetail` DISABLE KEYS */;
INSERT INTO `BookDetail` VALUES (1,'ASE_TEST','TEST',1,3,3,'TEST BOOK',1),(2,'ASE_TEST2','TEST',1,3,3,'TEXT',0);
/*!40000 ALTER TABLE `BookDetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CurrentBookStatus`
--

DROP TABLE IF EXISTS `CurrentBookStatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CurrentBookStatus` (
  `HBookId` int(11) NOT NULL,
  `BookId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `IssueDate` date DEFAULT NULL,
  `EReturnDate` date DEFAULT NULL,
  `ApprovedByAdmin` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`HBookId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CurrentBookStatus`
--

LOCK TABLES `CurrentBookStatus` WRITE;
/*!40000 ALTER TABLE `CurrentBookStatus` DISABLE KEYS */;

INSERT INTO `CurrentBookStatus` VALUES (1,1,NULL,NULL,NULL,NULL),(2,1,NULL,NULL,NULL,NULL),(3,1,NULL,NULL,NULL,NULL),(4,2,NULL,NULL,NULL,NULL),(5,2,NULL,NULL,NULL,NULL),(6,2,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `CurrentBookStatus` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;


-- Dump completed on 2018-10-11 20:01:50

-- Dump completed on 2018-10-11 22:50:30

