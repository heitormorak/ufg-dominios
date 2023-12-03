-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: geomapa1.clkxdg877ck5.us-east-2.rds.amazonaws.com    Database: geomapa1
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `amostras`
--

DROP TABLE IF EXISTS `amostras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amostras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `num_rel` int NOT NULL,
  `cooX` double NOT NULL,
  `cooY` double NOT NULL,
  `nspt12` int DEFAULT NULL,
  `nspt23` int DEFAULT NULL,
  `num_amostra` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amostras`
--

LOCK TABLES `amostras` WRITE;
/*!40000 ALTER TABLE `amostras` DISABLE KEYS */;
INSERT INTO `amostras` VALUES (1,1168,-49.2436268614198,-16.6629636126964,0,38,17),(2,1174,-49.2485243160358,-16.6698581949717,0,50,11),(3,1177,-49.2670622802817,-16.6848671809183,NULL,52,25),(4,1177,-49.266889422433,-16.6848225398796,NULL,50,25),(5,1177,-49.2667686684229,-16.6847805940815,NULL,52,24),(6,1177,-49.2669604659287,-16.6850123561371,NULL,52,21),(7,1177,-49.2668618930729,-16.6849227033706,NULL,92,23),(8,1180,-49.2667319352521,-16.6869106086867,NULL,63,13),(9,1181,-49.2667801139126,-16.7134847492153,NULL,71,16),(10,1181,-49.266716228718,-16.7135397869532,NULL,40,13),(11,1181,-49.2666416976925,-16.71349651038,NULL,46,17),(12,1181,-49.266523512287,-16.7133862698337,NULL,150,16),(13,1181,-49.2664422141067,-16.7134485712344,NULL,150,16),(14,1181,-49.2664481125539,-16.7133042200211,NULL,60,16),(15,1181,-49.2666575136672,-16.7132299806522,40,NULL,15),(16,1181,-49.2667241888232,-16.713291715828,NULL,40,16),(17,1181,-49.2667960071376,-16.713220027376,NULL,71,17),(18,1182,-49.2882495996516,-16.6765058362642,NULL,41,14),(19,1184,-49.2687057236159,-16.6669262843458,NULL,37,13),(20,1185,-49.2522730047375,-16.6985033133834,NULL,80,15),(21,1189,-49.2741614218589,-16.704519541986,NULL,19,15),(22,1190,-49.2723192095098,-16.6894105204396,NULL,44,18),(23,1193,-49.239736431425,-16.6657903114504,NULL,27,15),(24,1193,-49.2399219492164,-16.6658112250358,NULL,31,15),(25,1193,-49.2401094062477,-16.6658251066393,NULL,23,15),(26,1275,-49.264893452401,-16.6876495590205,NULL,48,14),(27,1279,-49.2490474397063,-16.6930376377271,NULL,60,10),(28,1279,-49.2490754417849,-16.6929485058439,NULL,54,10),(29,1280,-49.2788840509743,-16.6785798715147,NULL,44,14),(30,1282,-49.2649303663302,-16.6813661678317,NULL,29,11),(31,1284,-49.2398314294641,-16.7216789466306,NULL,100,11),(32,1284,-49.2400910864068,-16.7215868205842,NULL,72,10),(33,1284,-49.2403403036095,-16.7214878280979,NULL,39,8),(34,1284,-49.2397119404457,-16.7213544317203,NULL,41,9),(35,1284,-49.2399646592048,-16.7212621563182,NULL,300,9),(36,1284,-49.2402138138558,-16.7211699405878,NULL,129,8),(37,1284,-49.2396062702448,-16.7210568721008,NULL,56,8),(38,1284,-49.2398413916318,-16.7209713144026,NULL,133,9),(39,1284,-49.2400905467635,-16.720879008433,NULL,60,9),(40,1284,-49.2404095564584,-16.7207975080355,NULL,50,9),(41,1284,-49.2394866592567,-16.720755940613,NULL,240,8),(43,1284,-49.2397321574915,-16.7206738148372,NULL,54,8),(44,1284,-49.2399744043563,-16.7205781067138,NULL,100,14),(45,1284,-49.2403068590483,-16.7205540106499,NULL,80,10),(46,1284,-49.2395632623589,-16.7204094216365,NULL,75,7),(47,1284,-49.2397309763182,-16.7204244049713,NULL,86,6),(48,1284,-49.2403656728489,-16.7198669450216,NULL,109,9),(49,1284,-49.2402430005158,-16.7198894847725,NULL,300,10),(50,1284,-49.2393232055755,-16.7198884257007,NULL,93,14),(51,1284,-49.239963022508,16.7199073410658,80,NULL,7),(52,1284,-49.2402196095915,-16.7197713627772,NULL,120,9),(53,1284,-49.2387341789927,-16.7189027945419,NULL,133,6),(54,1286,-49.2655841456484,-16.7130213634788,NULL,31,19),(55,1288,-49.2652527980444,-16.7112953536977,NULL,80,18),(56,1288,-49.2651997029798,-16.7111836708119,NULL,1200,6),(57,1288,-49.2651903425173,-16.7111714835641,NULL,600,6),(58,1288,-49.2651190512872,-16.7112367601107,NULL,17,15),(59,1291,-49.2755650182716,-16.6469133282639,NULL,1200,14),(60,1291,-49.2756467795853,-16.6471099177723,NULL,120,14),(61,1291,-49.2757503235661,-16.6473549428728,NULL,22,14),(62,1292,-49.2948186699074,-16.6680388074105,30,NULL,15),(63,1292,-49.2947565637692,-16.66800151774,120,NULL,15),(64,1293,-49.3851261715947,-16.6745175018863,19,NULL,10),(65,1293,-49.3851679076241,-16.6728398686908,NULL,46,10),(66,1293,-49.3901565942985,-16.676144617601,NULL,6,5),(67,1294,-49.2701822157317,-16.7007290632485,39,NULL,11),(68,1294,-49.2703108045425,-16.7008600816186,57,NULL,11),(69,1294,-49.2701349115563,-16.700890508861,44,NULL,13),(70,1294,-49.2699437420989,-16.7009305674315,35,14,13),(71,1294,-49.2701793239262,-16.7010501914107,120,NULL,12),(72,1295,-49.2890967055878,-16.6890829040379,12,NULL,15),(73,1295,-49.2892366863001,-16.6893674442669,NULL,19,15),(74,1295,-49.2892875234957,-16.68966019362,NULL,16,11),(75,1295,-49.2895146364817,-16.6891722050266,NULL,27,15),(76,1297,-49.2750264555241,-16.7728496274895,NULL,240,6),(77,1314,-49.2657834229482,-16.7005815303722,NULL,48,9),(78,1318,-49.2650919707201,-16.6773568241451,NULL,67,30),(79,1318,-49.2651221696256,-16.6771580964684,NULL,43,30),(80,1318,-49.2649523702664,-16.6773780646846,NULL,100,30),(81,1318,-49.2650132589446,-16.6772068839864,NULL,29,30),(82,1318,-49.2648861504226,-16.677287959497,NULL,48,30),(83,1318,-49.2648144525175,-16.6775037795524,NULL,57,30),(84,1318,-49.2648817531548,-16.6771934023186,NULL,33,30),(85,1318,-49.2647204183522,-16.6774831115781,NULL,67,30),(86,1318,-49.264759464768,-16.6773117479398,NULL,34,29),(87,1318,-49.2651563098098,-16.6773748033535,NULL,25,16),(88,1318,-49.2650574681292,-16.6774609954123,NULL,1800,15),(89,1360,-49.26537245886,-16.6894364468784,NULL,58,13),(90,1376,-49.2607617370955,-16.6860065917821,NULL,59,13);
/*!40000 ALTER TABLE `amostras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `riscos`
--

DROP TABLE IF EXISTS `riscos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `riscos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `num_rel` int NOT NULL,
  `cooX` float NOT NULL,
  `cooY` float NOT NULL,
  `num_morad` int NOT NULL,
  `num_pessoa` int NOT NULL,
  `grau_risco` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `grau_vulne` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `riscos`
--

LOCK TABLES `riscos` WRITE;
/*!40000 ALTER TABLE `riscos` DISABLE KEYS */;
INSERT INTO `riscos` VALUES (1,1,-49.2136,-16.6557,100,400,'Alto','Presença de residências na planície de inundação do rio Meia Ponte, a cota de alagamento chega a atingir mais de 2,0 metros de acordo com relatos','Alto'),(2,2,-49.2916,-16.689,15,60,'Alto','Após obra de canalização do local (aproximadamente 10 anos atrás) começaram a surgir problemas de alagamento de acordo com relatos da Defesa Civil. Este ponto não foi caracterizado como problema Geológico ou Geotécnico','Médio'),(3,3,-49.2975,-16.6728,2,8,'Alto','Planície de Inundação do córrego Cascavel, histórico de 2 residências afetadas por enchentes. Trata-se de uma região atacadista sobre um aterro, porém poucos imóveis encontram-se na planície de inundação do córrego','Médio'),(4,4,-49.3384,-16.6129,5,20,'Alto','Histórico de alagamento no local, presença de obras de contenção, não houve retirada de moradores do local, o asfalto no local teve de ser refeito','Médio'),(5,5,-49.2945,-16.6545,300,1200,'Muito Alto','Este ponto abrange diversos subpontos. Área referente à planície de inundação do rio Anicuns, local apresenta histórico de enchentes. A previsão é de retirada de 300 famílias do local devido ao risco de novas enchentes na região.','Muito Alto'),(6,6,-49.2856,-16.6537,70,280,'Muito Alto','Este ponto abrange diversos subpontos. Planície de Inundação do rio Anicuns (Anicuns + Cascavel), inundação atingiu aproximadamente 70 residências, segundo relatos de alguns moradores da região os problemas começaram após o des','Muito alto'),(7,7,-49.2742,-16.6499,15,60,'Muito Alto','Histórico de inundação no local, de acordo com a Defesa Civil foram retiradas aproximadamente 30 famílias que moravam na planície de inundação do rio Anicuns','Muito Alto'),(8,8,-49.2372,-16.6144,20,80,'Muito Alto','Planície de Inundação do rio João leite, histórico de inundações constantes no local, Qualquer chuva com ate 40 mm já causa enchentes no local, tempo para atingir a cota normal é de 3 a 4 dias.','Muito Alto'),(9,9,-49.2666,-16.637,300,1200,'Muito Alto','Planície de Inundação do Córrego Anicuns com o Meia Ponte. O local apresenta histórico de inundação, quase todos os anos. Aproximadamente 230 famílias são atingidas durante periodo de chuvas intensas.','Alto'),(10,10,-49.322,-16.6296,5,20,'Alto','Presençaa de residências na planície de inundação do córrego Fundo, local com histórico de alagamento constante','Alto'),(11,11,-49.2636,-16.6569,120,480,'Alto','Planície de inundação do rio Capim Cuba no local, presençaa de moradias na planície de inundação do rio, de acordo com a Defesa civil planeja-se retirar 120 famílias da área alagável. Observa-se um estrangulamento do leito','Alto'),(12,12,-49.276,-16.6722,100,400,'Alto','Planície de Inundação do rio Capim Cuba. Histórico de reincidência de inundações todos os anos, mas não com a mesma intensidade de acordo com dados da Defesa Civil','Alto'),(13,13,-49.2927,-16.6953,10,102,'Médio','Processo erosivo atinge alguns comércios com a proximidade do córrego Cascavel qunado este alcança período de cheia.','Médio'),(14,14,-49.3532,-16.6845,1,5,'Médio','Foi encontrada uma casa ao lado do rio, área de invasão, os moradores alegam que no local não tem ponte somente 3 bueiros. A prefeitura realizou um serviço para conter o assoreamento, colocando pedras nas margens do rio.','Médio'),(15,15,-49.3149,-16.6656,2,3,'Médio','Casas que estão próximas ao leito do rio sofreram inundações.','Médio'),(16,16,-49.2628,-16.6228,42,84,'Alto','Casas construídas em margens lindeiras da BR-153 e residências com risco de desabamento. Risco de alagamentos pelo Córrego Palmito.','Alto'),(17,17,-49.1813,-16.665,23,48,'Alto','Terreno acidentado com grande declive, residências construídas sem devidas orientações de engenharia. Cheias de chuvosa.','Alto'),(18,18,-49.191,-16.6854,1,4,'Médio','Residências construídas sob dutos de petróleos sem autorização','Médio'),(19,19,-49.2194,-16.6805,450,1700,'Muito Alto','Antiga voçoroca de 20m de largura por 30m de profundidade. A mesma foi preenchida por entulhos de construção civil sem nenhum acompanhamento técnico. Presença de manilha de águas pluviais inacabada.','Muito Alto');
/*!40000 ALTER TABLE `riscos` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-02 11:04:05
