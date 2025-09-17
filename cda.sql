-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 17-09-2025 a las 02:05:27
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apartamento`
--

DROP TABLE IF EXISTS `apartamento`;
CREATE TABLE IF NOT EXISTS `apartamento` (
  `Ap_id` int NOT NULL AUTO_INCREMENT,
  `To_id` int NOT NULL,
  `Ap_numero` int NOT NULL,
  PRIMARY KEY (`Ap_id`),
  KEY `To_id` (`To_id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `apartamento`
--

INSERT INTO `apartamento` (`Ap_id`, `To_id`, `Ap_numero`) VALUES
(124, 1, 100),
(125, 2, 200);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paquete`
--

DROP TABLE IF EXISTS `paquete`;
CREATE TABLE IF NOT EXISTS `paquete` (
  `Pa_id` int NOT NULL AUTO_INCREMENT,
  `Pa_estado` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Pa_descripcion` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Pa_fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Pa_responsable` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Pe_id` int DEFAULT NULL,
  `Pa_recibe` int DEFAULT NULL,
  `Pa_fecha_recibido` timestamp NULL DEFAULT NULL,
  `vista` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Pa_id`),
  KEY `Pe_id` (`Pe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `Pe_id` int NOT NULL,
  `Pe_nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Pe_apellidos` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Pe_telefono` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Us_id` int DEFAULT NULL,
  `Pe_Perfil` varchar(400) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Ap_id` int DEFAULT NULL,
  PRIMARY KEY (`Pe_id`),
  KEY `U_id` (`Us_id`),
  KEY `Ap_id` (`Ap_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`Pe_id`, `Pe_nombre`, `Pe_apellidos`, `Pe_telefono`, `Us_id`, `Pe_Perfil`, `Ap_id`) VALUES
(12345, 'juan', 'rua', '300', 12345, 'https://i.pinimg.com/736x/f8/49/19/f849195436996479799bbf75e61ecc7a.jpg', 124),
(1042851729, 'Andres David', 'Pereira  Puello', '3202116434', 1042851729, 'https://i.pinimg.com/736x/68/24/f0/6824f0f3d30c4e0015c26a70052e3045.jpg', 124),
(1042851730, 'Yaseth', 'Bujato', '32846354839', 1042851730, 'https://i.pinimg.com/736x/9f/ef/ec/9fefec565f3499055596fb8e55b7edb8.jpg', 124),
(1042851731, 'Maria', 'Rodriquez', '3003489600', 1042851731, 'https://i.pinimg.com/736x/f8/8b/d4/f88bd4a2f1fddb2850dced25e955cc1d.jpg', 125),
(1042851732, 'Stiven', 'Catalan', '383483493843948', 1042851732, 'https://i.pinimg.com/736x/f8/8b/d4/f88bd4a2f1fddb2850dced25e955cc1d.jpg', 125);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

DROP TABLE IF EXISTS `registro`;
CREATE TABLE IF NOT EXISTS `registro` (
  `Re_id` int NOT NULL AUTO_INCREMENT,
  `Re_fecha_entrada` date NOT NULL,
  `Re_hora_entrada` time NOT NULL,
  `Re_hora_salida` time NOT NULL,
  `Re_motivo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Use_visit` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Vi_departamento` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Pe_id` int NOT NULL,
  `Vi_id` int NOT NULL,
  `vista` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Re_id`),
  KEY `Vi_id` (`Vi_id`),
  KEY `Pe_id` (`Pe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`Re_id`, `Re_fecha_entrada`, `Re_hora_entrada`, `Re_hora_salida`, `Re_motivo`, `Use_visit`, `Vi_departamento`, `Pe_id`, `Vi_id`, `vista`) VALUES
(120, '0000-00-00', '00:00:00', '00:00:00', 'Ver a un amigo', 'Andres', '100', 12345, 123, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE IF NOT EXISTS `rol` (
  `Ro_id` int NOT NULL AUTO_INCREMENT,
  `Ro_tipo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Ro_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`Ro_id`, `Ro_tipo`) VALUES
(1, 'Administrador'),
(2, 'Guardia'),
(3, 'Residente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes_actualizacion`
--

DROP TABLE IF EXISTS `solicitudes_actualizacion`;
CREATE TABLE IF NOT EXISTS `solicitudes_actualizacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_residente` int NOT NULL,
  `nombre` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `correo_nuevo` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `correo_viejo` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `telefono_nuevo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `telefono_viejo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `estado` enum('pendiente','aprobada','rechazada') CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT 'pendiente',
  `razon_rechazo` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `fecha_solicitud` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `vista` tinyint(1) NOT NULL DEFAULT '0',
  `vista_resident` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `torre`
--

DROP TABLE IF EXISTS `torre`;
CREATE TABLE IF NOT EXISTS `torre` (
  `To_id` int NOT NULL,
  `To_letra` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`To_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `torre`
--

INSERT INTO `torre` (`To_id`, `To_letra`) VALUES
(1, 'A'),
(2, 'B');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `Us_id` int NOT NULL,
  `Us_usuario` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Us_contrasena` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Us_correo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Ro_id` int NOT NULL,
  `estado` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`Us_id`),
  KEY `C_id` (`Ro_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Us_id`, `Us_usuario`, `Us_contrasena`, `Us_correo`, `Ro_id`, `estado`) VALUES
(12345, 'juanos', '$2b$10$JOMiACD6cUYXdlnQ.xNYL.ZrmDVIRIEkdjfYa9AyppBUKbHgoD5jS', 'juano@gmail.com', 1, 'activo'),
(1042851729, 'Andres', '$2b$10$r.GNRSYBgJLlHEVV1WIrJ.ceCQV478HV27KKc8BIT.wulq9AoLktu', 'pereirapuelloandresdavid@gmail.com', 3, 'activo'),
(1042851730, 'yasethB', '$2b$10$hKrduiBHipfM0sz7iGhPEuKAVCrY2CVKzrwD6TYVPbQdOLp0zv5FC', 'yaseth@gmail.com', 3, 'activo'),
(1042851731, 'Maria_Jose', '$2b$10$R09sWsxHzT6Vjm2A9OM9TObicA9bcqYRWwhyGgHFAQre22SpdY6LO', 'MariaJose@gmail.com', 2, 'activo'),
(1042851732, 'StivenC', '$2b$10$AWpLlPyhxAnhMfDA4qAbo.6EcEB/6MKHIT5N3HX8/1ld21gjaMTri', 'stiven@gmail.com', 2, 'activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitantes`
--

DROP TABLE IF EXISTS `visitantes`;
CREATE TABLE IF NOT EXISTS `visitantes` (
  `Vi_id` int NOT NULL,
  `Vi_nombres` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Vi_apellidos` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Vi_telefono` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `estado` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Vi_permiso` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`Vi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `visitantes`
--

INSERT INTO `visitantes` (`Vi_id`, `Vi_nombres`, `Vi_apellidos`, `Vi_telefono`, `estado`, `Vi_permiso`) VALUES
(123, 'Andres', 'Pereira', '3003489600', 'Activo', 'Porter');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `apartamento`
--
ALTER TABLE `apartamento`
  ADD CONSTRAINT `apartamento_ibfk_1` FOREIGN KEY (`To_id`) REFERENCES `torre` (`To_id`);

--
-- Filtros para la tabla `paquete`
--
ALTER TABLE `paquete`
  ADD CONSTRAINT `paquete_ibfk_1` FOREIGN KEY (`Pe_id`) REFERENCES `persona` (`Pe_id`),
  ADD CONSTRAINT `paquete_ibfk_2` FOREIGN KEY (`Pe_id`) REFERENCES `persona` (`Pe_id`);

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `persona_ibfk_3` FOREIGN KEY (`Us_id`) REFERENCES `usuario` (`Us_id`),
  ADD CONSTRAINT `persona_ibfk_4` FOREIGN KEY (`Ap_id`) REFERENCES `apartamento` (`Ap_id`);

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `fk_registro_persona` FOREIGN KEY (`Pe_id`) REFERENCES `persona` (`Pe_id`),
  ADD CONSTRAINT `registro_ibfk_1` FOREIGN KEY (`Vi_id`) REFERENCES `visitantes` (`Vi_id`),
  ADD CONSTRAINT `registro_ibfk_2` FOREIGN KEY (`Pe_id`) REFERENCES `persona` (`Pe_id`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`Ro_id`) REFERENCES `rol` (`Ro_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
