/*
SQLyog Community v13.2.1 (64 bit)
MySQL - 10.4.32-MariaDB : Database - cda
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cda` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci */;

USE `cda`;

/*Table structure for table `apartamento` */

DROP TABLE IF EXISTS `apartamento`;

CREATE TABLE `apartamento` (
  `Ap_id` int(10) NOT NULL AUTO_INCREMENT,
  `To_id` int(10) NOT NULL,
  `Ap_numero` int(20) NOT NULL,
  PRIMARY KEY (`Ap_id`),
  KEY `To_id` (`To_id`),
  CONSTRAINT `apartamento_ibfk_1` FOREIGN KEY (`To_id`) REFERENCES `torre` (`To_id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `apartamento` */

insert  into `apartamento`(`Ap_id`,`To_id`,`Ap_numero`) values 
(106,1,302),
(107,2,212),
(108,1,212),
(109,1,302);

/*Table structure for table `paquete` */

DROP TABLE IF EXISTS `paquete`;

CREATE TABLE `paquete` (
  `Pa_id` int(10) NOT NULL AUTO_INCREMENT,
  `Pa_estado` varchar(250) NOT NULL,
  `Pa_descripcion` varchar(250) NOT NULL,
  `Pa_fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `Pa_responsable` varchar(50) NOT NULL,
  `Pe_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`Pa_id`),
  KEY `Pe_id` (`Pe_id`),
  CONSTRAINT `paquete_ibfk_1` FOREIGN KEY (`Pe_id`) REFERENCES `persona` (`Pe_id`),
  CONSTRAINT `paquete_ibfk_2` FOREIGN KEY (`Pe_id`) REFERENCES `persona` (`Pe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `paquete` */

insert  into `paquete`(`Pa_id`,`Pa_estado`,`Pa_descripcion`,`Pa_fecha`,`Pa_responsable`,`Pe_id`) values 
(1,'activo','Pc gamer','2024-11-07 00:00:00','Stiven',NULL),
(2,'activo','PC gamer','2024-11-07 00:00:00','Juan',NULL),
(3,'activo','PortÃ¡til','2024-11-08 00:00:00','Juan',NULL),
(7,'bueno','en caja','2024-11-07 00:00:00','portero',12345),
(9,'Fragil','esd','2024-11-20 00:00:00','Guardia_2',123),
(14,'Bodega','Pc gamer','2025-03-29 00:00:00','Luis',1043);

/*Table structure for table `persona` */

DROP TABLE IF EXISTS `persona`;

CREATE TABLE `persona` (
  `Pe_id` int(20) NOT NULL,
  `Pe_nombre` varchar(50) NOT NULL,
  `Pe_apellidos` varchar(50) NOT NULL,
  `Pe_telefono` varchar(50) NOT NULL,
  `Us_id` int(11) DEFAULT NULL,
  `Ap_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`Pe_id`),
  KEY `U_id` (`Us_id`),
  KEY `Ap_id` (`Ap_id`),
  CONSTRAINT `persona_ibfk_3` FOREIGN KEY (`Us_id`) REFERENCES `usuario` (`Us_id`),
  CONSTRAINT `persona_ibfk_4` FOREIGN KEY (`Ap_id`) REFERENCES `apartamento` (`Ap_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `persona` */

insert  into `persona`(`Pe_id`,`Pe_nombre`,`Pe_apellidos`,`Pe_telefono`,`Us_id`,`Ap_id`) values 
(123,'JD','RP','3000000',NULL,106),
(1043,'Arthur','Pendragon','3000000',1043,108),
(2006,'josimar','suñoga','12121312313',2006,NULL),
(4567,'Naruto','Uzumaki','3000000',4567,109),
(12345,'David','Rua','30000000',NULL,108);

/*Table structure for table `registro` */

DROP TABLE IF EXISTS `registro`;

CREATE TABLE `registro` (
  `Re_id` int(10) NOT NULL AUTO_INCREMENT,
  `Re_fecha_entrada` date NOT NULL,
  `Re_hora_entrada` time NOT NULL,
  `Re_hora_salida` time NOT NULL,
  `Re_motivo` varchar(50) NOT NULL,
  `Vi_departamento` varchar(50) NOT NULL,
  `Pe_id` int(20) NOT NULL,
  `Vi_id` int(10) NOT NULL,
  PRIMARY KEY (`Re_id`),
  KEY `Vi_id` (`Vi_id`),
  KEY `Pe_id` (`Pe_id`),
  CONSTRAINT `fk_registro_persona` FOREIGN KEY (`Pe_id`) REFERENCES `persona` (`Pe_id`),
  CONSTRAINT `registro_ibfk_1` FOREIGN KEY (`Vi_id`) REFERENCES `visitantes` (`Vi_id`),
  CONSTRAINT `registro_ibfk_2` FOREIGN KEY (`Pe_id`) REFERENCES `persona` (`Pe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `registro` */

insert  into `registro`(`Re_id`,`Re_fecha_entrada`,`Re_hora_entrada`,`Re_hora_salida`,`Re_motivo`,`Vi_departamento`,`Pe_id`,`Vi_id`) values 
(21,'2024-11-25','21:33:17','21:36:02','Comer ramen','106',123,45678),
(22,'2024-11-25','21:36:54','00:00:00','dattebayo','108',12345,45678),
(24,'2024-11-26','10:10:12','00:00:00','Pelear','106',123,1267),
(36,'2025-03-29','13:34:02','00:00:00','Visitar a mi primo','108',1043,1243);

/*Table structure for table `rol` */

DROP TABLE IF EXISTS `rol`;

CREATE TABLE `rol` (
  `Ro_id` int(10) NOT NULL AUTO_INCREMENT,
  `Ro_tipo` varchar(50) NOT NULL,
  PRIMARY KEY (`Ro_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `rol` */

insert  into `rol`(`Ro_id`,`Ro_tipo`) values 
(1,'Administrador'),
(2,'Guardia'),
(3,'Residente');

/*Table structure for table `solicitudes_actualizacion` */

DROP TABLE IF EXISTS `solicitudes_actualizacion`;

CREATE TABLE `solicitudes_actualizacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_residente` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `correo_nuevo` varchar(255) NOT NULL,
  `telefono_nuevo` varchar(50) NOT NULL,
  `torre_nuevo` varchar(10) NOT NULL,
  `apartamento_nuevo` varchar(50) NOT NULL,
  `estado` enum('pendiente','aprobada','rechazada') DEFAULT 'pendiente',
  `razon_rechazo` varchar(255) DEFAULT NULL,
  `fecha_solicitud` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

/*Data for the table `solicitudes_actualizacion` */

insert  into `solicitudes_actualizacion`(`id`,`id_residente`,`nombre`,`correo_nuevo`,`telefono_nuevo`,`torre_nuevo`,`apartamento_nuevo`,`estado`,`razon_rechazo`,`fecha_solicitud`) values 
(1,1043,'Arthur Pendragon','Arthurdd@gmail.com','300004300','A','212','pendiente',NULL,'2025-03-31 13:53:43'),
(12,4567,'Naruto Uzumaki','Narutodd@gmail.com','300003400','A','302','pendiente',NULL,'2025-03-31 15:10:35');

/*Table structure for table `torre` */

DROP TABLE IF EXISTS `torre`;

CREATE TABLE `torre` (
  `To_id` int(10) NOT NULL,
  `To_letra` varchar(10) NOT NULL,
  PRIMARY KEY (`To_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `torre` */

insert  into `torre`(`To_id`,`To_letra`) values 
(1,'A'),
(2,'B'),
(3,'C');

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `Us_id` int(10) NOT NULL,
  `Us_usuario` varchar(50) NOT NULL,
  `Us_contrasena` varchar(255) DEFAULT NULL,
  `Us_correo` varchar(100) NOT NULL,
  `Ro_id` int(10) NOT NULL,
  PRIMARY KEY (`Us_id`),
  KEY `C_id` (`Ro_id`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`Ro_id`) REFERENCES `rol` (`Ro_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `usuario` */

insert  into `usuario`(`Us_id`,`Us_usuario`,`Us_contrasena`,`Us_correo`,`Ro_id`) values 
(123,'JD','d12345','jrua1043@gmail.com',2),
(1043,'Arthur','12345','Arthur@gmail.com',3),
(2006,'Juan','12345','charry@gmail.com',1),
(4567,'Naruto','12345','Naruto@gmail.com',3);

/*Table structure for table `visitantes` */

DROP TABLE IF EXISTS `visitantes`;

CREATE TABLE `visitantes` (
  `Vi_id` int(10) NOT NULL,
  `Vi_nombres` varchar(50) NOT NULL,
  `Vi_apellidos` varchar(50) NOT NULL,
  `Vi_telefono` varchar(50) NOT NULL,
  PRIMARY KEY (`Vi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `visitantes` */

insert  into `visitantes`(`Vi_id`,`Vi_nombres`,`Vi_apellidos`,`Vi_telefono`) values 
(0,'','',''),
(1243,'Andres','Pereira','3333332211'),
(1267,'Goku','Son','30000000'),
(45678,'Naruto','Uzumaki','3454345');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
