-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 01, 2023 lúc 01:25 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlvetau`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `authority`
--

CREATE TABLE `authority` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `authority`
--

INSERT INTO `authority` (`name`) VALUES
('ROLE_ADMIN'),
('ROLE_USER');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bai_viet`
--

CREATE TABLE `bai_viet` (
  `id` bigint(20) NOT NULL,
  `anh_nen` varchar(255) DEFAULT NULL,
  `mo_ta` mediumtext DEFAULT NULL,
  `ngay_dang` date DEFAULT NULL,
  `noi_dung` mediumtext DEFAULT NULL,
  `tieu_de` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `bai_viet`
--

INSERT INTO `bai_viet` (`id`, `anh_nen`, `mo_ta`, `ngay_dang`, `noi_dung`, `tieu_de`) VALUES
(6, 'link ảnh 2', 'mô tả 2', '2023-04-10', 'okeeee baby', 'tiêu đề 2 đã sửa'),
(7, 'link ảnh 2', 'mô tả 2', '2023-04-10', 'okeeee baby', 'tiêu đề 2 đã sửa'),
(8, 'link ảnh 2', 'mô tả 2', '2023-04-10', 'okeeee baby', 'tiêu đề 2 đã sửa'),
(9, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1684485434/qkkg7kuvmoxhomfuqq2j.jpg', 'mô tả 2', '2023-05-19', '<p>okeeee baby</p>', 'tiêu đề 2 đã sửa'),
(10, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1684485329/ashsjdqcgpk2emwxwwlq.jpg', 'mô tả 2', '2023-05-19', '', 'tiêu đề 2 đã sửa'),
(11, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1684485346/b86sow6biuxqxafjyxzk.jpg', 'mô tả 2', '2023-05-19', '<p>okeeee baby</p>', 'tiêu đề 2 đã sửa'),
(12, 'link ảnh 2', 'mô tả 2', '2023-04-10', 'okeeee baby', 'tiêu đề 2 đã sửa'),
(13, 'link ảnh 2', 'mô tả 2', '2023-04-10', 'okeeee baby', 'tiêu đề 2 đã sửa'),
(14, '', '', '2023-04-15', '', ''),
(15, '', 'ấdasdasd', '2023-04-15', 'không', 'text123'),
(16, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682092136/kwhapvzrnendprfwvx9d.jpg', 'ger4g', '2023-04-21', '<p>reg</p>', 'te4tg'),
(17, '', 'khong co ', '2023-07-30', '<p>khong biet gi het</p>', 'hoom nay la 30'),
(18, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1690873654/tnq3tw8f8csxemjbian6.jpg', 'hôm nay trời đẹp', '2023-08-01', '<p>kh&ocirc;ng c&oacute;</p>', 'hôm nay trời đẹp'),
(19, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1690885447/kcmhfzmegyhrwz1mnkzx.png', 'khong co', '2023-08-01', '', 'hom nay an gi'),
(20, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1690886933/d37hrayairocxzdwlxnl.jpg', 'khong co', '2023-08-01', '', 'hoom nay an gi'),
(21, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1690888520/httrtpgzisnvdn3qlrlf.jpg', 'qwe', '2023-08-01', '', 'khong co ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dat_ve`
--

CREATE TABLE `dat_ve` (
  `id` bigint(20) NOT NULL,
  `da_thanh_toan` int(11) DEFAULT NULL,
  `gia_ve` double DEFAULT NULL,
  `loai_thanh_toan` int(11) DEFAULT NULL,
  `ngay_di` date DEFAULT NULL,
  `ngay_tao` date DEFAULT NULL,
  `ghengoi_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `loai_ve` int(11) DEFAULT NULL,
  `ngay_ve` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `dat_ve`
--

INSERT INTO `dat_ve` (`id`, `da_thanh_toan`, `gia_ve`, `loai_thanh_toan`, `ngay_di`, `ngay_tao`, `ghengoi_id`, `user_id`, `loai_ve`, `ngay_ve`) VALUES
(5, NULL, NULL, NULL, '2023-05-04', NULL, 207, NULL, NULL, '2023-05-04'),
(6, 0, 120000, NULL, '2023-05-04', '2023-05-04', 295, 6, 1, NULL),
(7, 0, 120000, NULL, '2023-05-04', '2023-05-04', 300, 6, 1, NULL),
(8, 0, 520000, NULL, '2023-05-12', '2023-05-09', 224, 6, 1, NULL),
(9, 0, 520000, NULL, '2023-05-12', '2023-05-09', 223, 6, 1, NULL),
(10, 0, 520000, NULL, '2023-05-13', '2023-05-17', 220, 6, 1, NULL),
(11, 0, 520000, NULL, '2023-05-13', '2023-05-17', 219, 6, 1, NULL),
(12, 0, 520000, NULL, '2023-05-13', '2023-05-17', 224, 6, 1, NULL),
(13, 0, 520000, NULL, '2023-05-13', '2023-05-17', 228, 6, 1, NULL),
(14, 0, 120000, NULL, '2023-05-11', '2023-05-17', 301, 6, 0, '2023-05-26'),
(15, 0, 120000, NULL, '2023-05-11', '2023-05-17', 309, 6, 0, '2023-05-26'),
(16, 0, 120000, NULL, '2023-05-20', '2023-05-19', 393, 6, 1, NULL),
(17, 0, 120000, NULL, '2023-05-20', '2023-05-19', 394, 6, 1, NULL),
(18, 0, 80000, NULL, '2023-05-26', '2023-05-20', 417, 6, 1, NULL),
(19, 0, 80000, NULL, '2023-05-26', '2023-05-20', 418, 6, 1, NULL),
(20, 0, 120000, NULL, '2023-05-13', '2023-05-20', 478, 6, 1, NULL),
(21, 0, 120000, NULL, '2023-05-13', '2023-05-20', 481, 6, 1, NULL),
(22, 0, 120000, NULL, '2023-07-15', '2023-07-17', 578, 7, 1, NULL),
(23, 0, 120000, NULL, '2023-07-15', '2023-07-17', 578, 7, 1, NULL),
(24, 0, 120000, NULL, '2023-07-15', '2023-07-17', 582, 7, 1, NULL),
(25, 0, 120000, NULL, '2023-07-15', '2023-07-17', 582, 7, 1, NULL),
(26, 0, 120000, NULL, '2023-07-15', '2023-07-17', 577, 7, 1, NULL),
(27, 0, 120000, NULL, '2023-07-15', '2023-07-17', 577, 7, 1, NULL),
(28, 0, 120000, NULL, '2023-07-15', '2023-07-17', 581, 7, 1, NULL),
(29, 0, 120000, NULL, '2023-07-15', '2023-07-17', 581, 7, 1, NULL),
(30, 0, 120000, NULL, '2023-07-06', '2023-07-28', 388, 2, 1, NULL),
(31, 0, 120000, NULL, '2023-07-16', '2023-07-30', 393, 5, 1, NULL),
(32, 0, 120000, NULL, '2023-07-16', '2023-07-30', 394, 5, 1, NULL),
(33, 0, 120000, NULL, '2023-08-19', '2023-08-01', 401, 8, 1, NULL),
(34, 0, 120000, NULL, '2023-08-19', '2023-08-01', 402, 8, 1, NULL),
(35, 0, 120000, NULL, '2023-08-19', '2023-08-01', 406, 8, 1, NULL),
(36, 0, 120000, NULL, '2023-08-19', '2023-08-01', 405, 8, 1, NULL),
(37, 0, 120000, NULL, '2023-08-13', '2023-08-01', 394, 5, 0, '2023-08-27'),
(38, 0, 120000, NULL, '2023-08-13', '2023-08-01', 393, 5, 0, '2023-08-27'),
(39, 0, 120000, NULL, '2023-08-13', '2023-08-01', 388, 5, 0, '2023-08-27'),
(40, 0, 120000, NULL, '2023-08-13', '2023-08-01', 391, 5, 0, '2023-08-27'),
(41, 0, 120000, NULL, '2023-08-12', '2023-08-01', 389, 8, 1, NULL),
(42, 0, 120000, NULL, '2023-08-12', '2023-08-01', 390, 8, 1, NULL),
(43, 0, 100000, NULL, '2023-08-13', '2023-08-01', 861, 5, 1, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ghe_ngoi`
--

CREATE TABLE `ghe_ngoi` (
  `id` bigint(20) NOT NULL,
  `so_ghe` varchar(255) DEFAULT NULL,
  `toatau_id` bigint(20) DEFAULT NULL,
  `loai` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `ghe_ngoi`
--

INSERT INTO `ghe_ngoi` (`id`, `so_ghe`, `toatau_id`, `loai`) VALUES
(207, '1', 1, 1),
(208, '2', 1, 1),
(209, '3', 1, 1),
(210, '4', 1, 1),
(211, '5', 1, 1),
(212, '6', 1, 1),
(213, '7', 1, 1),
(214, '8', 1, 1),
(215, '9', 1, 1),
(216, '10', 1, 1),
(217, '11', 1, 1),
(218, '12', 1, 1),
(219, '13', 1, 1),
(220, '14', 1, 1),
(221, '15', 1, 1),
(222, '16', 1, 1),
(223, '17', 1, 1),
(224, '18', 1, 1),
(225, '19', 1, 1),
(226, '20', 1, 1),
(227, '21', 1, 1),
(228, '22', 1, 1),
(229, '23', 1, 1),
(230, '24', 1, 1),
(231, '25', 1, 1),
(232, '26', 1, 1),
(233, '27', 1, 1),
(234, '28', 1, 1),
(235, '29', 1, 1),
(236, '30', 1, 1),
(237, '31', 1, 1),
(238, '32', 1, 1),
(239, '33', 1, 1),
(240, '34', 1, 1),
(241, '35', 1, 1),
(242, '36', 1, 1),
(243, '37', 1, 1),
(244, '38', 1, 1),
(245, '39', 1, 1),
(246, '40', 1, 1),
(287, '1', 4, 0),
(288, '2', 4, 0),
(289, '3', 4, 0),
(290, '4', 4, 0),
(291, '5', 4, 0),
(292, '6', 4, 0),
(293, '7', 4, 0),
(294, '8', 4, 0),
(295, '9', 4, 0),
(296, '10', 4, 0),
(297, '11', 4, 0),
(298, '12', 4, 0),
(299, '13', 4, 0),
(300, '14', 4, 0),
(301, '15', 4, 0),
(302, '16', 4, 0),
(303, '17', 4, 0),
(304, '18', 4, 0),
(305, '19', 4, 0),
(306, '20', 4, 0),
(307, '21', 4, 0),
(308, '22', 4, 0),
(309, '23', 4, 0),
(310, '24', 4, 0),
(311, '25', 4, 0),
(312, '26', 4, 0),
(313, '27', 4, 0),
(314, '28', 4, 0),
(315, '29', 4, 0),
(316, '30', 4, 0),
(317, '31', 4, 0),
(318, '32', 4, 0),
(319, '33', 4, 0),
(320, '34', 4, 0),
(321, '35', 4, 0),
(322, '36', 4, 0),
(323, '37', 4, 0),
(324, '38', 4, 0),
(325, '39', 4, 0),
(326, '40', 4, 0),
(387, '1', 8, 1),
(388, '2', 8, 1),
(389, '3', 8, 1),
(390, '4', 8, 1),
(391, '5', 8, 1),
(392, '6', 8, 1),
(393, '7', 8, 1),
(394, '8', 8, 1),
(395, '9', 8, 1),
(396, '10', 8, 1),
(397, '1', 7, 1),
(398, '2', 7, 1),
(399, '3', 7, 1),
(400, '4', 7, 1),
(401, '5', 7, 1),
(402, '6', 7, 1),
(403, '7', 7, 1),
(404, '8', 7, 1),
(405, '9', 7, 1),
(406, '10', 7, 1),
(407, '11', 7, 1),
(408, '12', 7, 1),
(409, '13', 7, 1),
(410, '14', 7, 1),
(411, '15', 7, 1),
(412, '16', 7, 1),
(413, '17', 7, 1),
(414, '18', 7, 1),
(415, '19', 7, 1),
(416, '20', 7, 1),
(417, '1', 5, 0),
(418, '2', 5, 0),
(419, '3', 5, 0),
(420, '4', 5, 0),
(421, '5', 5, 0),
(422, '6', 5, 0),
(423, '7', 5, 0),
(424, '8', 5, 0),
(425, '9', 5, 0),
(426, '10', 5, 0),
(427, '11', 5, 0),
(428, '12', 5, 0),
(429, '13', 5, 0),
(430, '14', 5, 0),
(431, '15', 5, 0),
(432, '16', 5, 0),
(433, '17', 5, 0),
(434, '18', 5, 0),
(435, '19', 5, 0),
(436, '20', 5, 0),
(437, '1', 9, 0),
(438, '2', 9, 0),
(439, '3', 9, 0),
(440, '4', 9, 0),
(441, '5', 9, 0),
(442, '6', 9, 0),
(443, '7', 9, 0),
(444, '8', 9, 0),
(445, '9', 9, 0),
(446, '10', 9, 0),
(447, '11', 9, 0),
(448, '12', 9, 0),
(449, '13', 9, 0),
(450, '14', 9, 0),
(451, '15', 9, 0),
(452, '16', 9, 0),
(453, '17', 9, 0),
(454, '18', 9, 0),
(455, '19', 9, 0),
(456, '20', 9, 0),
(457, '1', 10, 1),
(458, '2', 10, 1),
(459, '3', 10, 1),
(460, '4', 10, 1),
(461, '5', 10, 1),
(462, '6', 10, 1),
(463, '7', 10, 1),
(464, '8', 10, 1),
(465, '9', 10, 1),
(466, '10', 10, 1),
(467, '11', 10, 1),
(468, '12', 10, 1),
(469, '13', 10, 1),
(470, '14', 10, 1),
(471, '15', 10, 1),
(472, '16', 10, 1),
(473, '17', 10, 1),
(474, '18', 10, 1),
(475, '19', 10, 1),
(476, '20', 10, 1),
(477, '1', 11, 1),
(478, '2', 11, 1),
(479, '3', 11, 1),
(480, '4', 11, 1),
(481, '5', 11, 1),
(482, '6', 11, 1),
(483, '7', 11, 1),
(484, '8', 11, 1),
(485, '9', 11, 1),
(486, '10', 11, 1),
(487, '1', 12, 0),
(488, '2', 12, 0),
(489, '3', 12, 0),
(490, '4', 12, 0),
(491, '5', 12, 0),
(492, '6', 12, 0),
(493, '7', 12, 0),
(494, '8', 12, 0),
(495, '9', 12, 0),
(496, '10', 12, 0),
(497, '11', 12, 0),
(498, '12', 12, 0),
(499, '13', 12, 0),
(500, '14', 12, 0),
(501, '15', 12, 0),
(502, '16', 12, 0),
(503, '17', 12, 0),
(504, '18', 12, 0),
(505, '19', 12, 0),
(506, '20', 12, 0),
(527, '1', 14, 0),
(528, '2', 14, 0),
(529, '3', 14, 0),
(530, '4', 14, 0),
(531, '5', 14, 0),
(532, '6', 14, 0),
(533, '7', 14, 0),
(534, '8', 14, 0),
(535, '9', 14, 0),
(536, '10', 14, 0),
(537, '11', 14, 0),
(538, '12', 14, 0),
(539, '13', 14, 0),
(540, '14', 14, 0),
(541, '15', 14, 0),
(542, '16', 14, 0),
(543, '17', 14, 0),
(544, '18', 14, 0),
(545, '19', 14, 0),
(546, '20', 14, 0),
(547, '1', 15, 0),
(548, '2', 15, 0),
(549, '3', 15, 0),
(550, '4', 15, 0),
(551, '5', 15, 0),
(552, '6', 15, 0),
(553, '7', 15, 0),
(554, '8', 15, 0),
(555, '9', 15, 0),
(556, '10', 15, 0),
(557, '11', 15, 0),
(558, '12', 15, 0),
(559, '13', 15, 0),
(560, '14', 15, 0),
(561, '15', 15, 0),
(562, '16', 15, 0),
(563, '17', 15, 0),
(564, '18', 15, 0),
(565, '19', 15, 0),
(566, '20', 15, 0),
(567, '1', 16, 1),
(568, '2', 16, 1),
(569, '3', 16, 1),
(570, '4', 16, 1),
(571, '5', 16, 1),
(572, '6', 16, 1),
(573, '7', 16, 1),
(574, '8', 16, 1),
(575, '9', 16, 1),
(576, '10', 16, 1),
(577, '1', 17, 1),
(578, '2', 17, 1),
(579, '3', 17, 1),
(580, '4', 17, 1),
(581, '5', 17, 1),
(582, '6', 17, 1),
(583, '7', 17, 1),
(584, '8', 17, 1),
(585, '9', 17, 1),
(586, '10', 17, 1),
(587, '1', 18, 1),
(588, '2', 18, 1),
(589, '3', 18, 1),
(590, '4', 18, 1),
(591, '5', 18, 1),
(592, '6', 18, 1),
(593, '7', 18, 1),
(594, '8', 18, 1),
(595, '9', 18, 1),
(596, '10', 18, 1),
(597, '11', 18, 1),
(598, '12', 18, 1),
(599, '13', 18, 1),
(600, '14', 18, 1),
(601, '15', 18, 1),
(602, '16', 18, 1),
(603, '17', 18, 1),
(604, '18', 18, 1),
(605, '19', 18, 1),
(606, '20', 18, 1),
(607, '21', 18, 1),
(608, '22', 18, 1),
(609, '23', 18, 1),
(610, '24', 18, 1),
(611, '25', 18, 1),
(612, '26', 18, 1),
(613, '27', 18, 1),
(614, '28', 18, 1),
(615, '29', 18, 1),
(616, '30', 18, 1),
(657, '1', 19, 1),
(658, '2', 19, 1),
(659, '3', 19, 1),
(660, '4', 19, 1),
(661, '5', 19, 1),
(662, '6', 19, 1),
(663, '7', 19, 1),
(664, '8', 19, 1),
(665, '9', 19, 1),
(666, '10', 19, 1),
(667, '11', 19, 1),
(668, '12', 19, 1),
(669, '13', 19, 1),
(670, '14', 19, 1),
(671, '15', 19, 1),
(672, '16', 19, 1),
(673, '17', 19, 1),
(674, '18', 19, 1),
(675, '19', 19, 1),
(676, '20', 19, 1),
(677, '21', 19, 1),
(678, '22', 19, 1),
(679, '23', 19, 1),
(680, '24', 19, 1),
(681, '25', 19, 1),
(682, '26', 19, 1),
(683, '27', 19, 1),
(684, '28', 19, 1),
(685, '29', 19, 1),
(686, '30', 19, 1),
(687, '31', 19, 1),
(688, '32', 19, 1),
(689, '33', 19, 1),
(690, '34', 19, 1),
(691, '35', 19, 1),
(692, '36', 19, 1),
(693, '37', 19, 1),
(694, '38', 19, 1),
(695, '39', 19, 1),
(696, '40', 19, 1),
(817, '1', 13, 0),
(818, '2', 13, 0),
(819, '3', 13, 0),
(820, '4', 13, 0),
(821, '5', 13, 0),
(822, '6', 13, 0),
(823, '7', 13, 0),
(824, '8', 13, 0),
(825, '9', 13, 0),
(826, '10', 13, 0),
(827, '11', 13, 0),
(828, '12', 13, 0),
(829, '13', 13, 0),
(830, '14', 13, 0),
(831, '15', 13, 0),
(832, '16', 13, 0),
(833, '17', 13, 0),
(834, '18', 13, 0),
(835, '19', 13, 0),
(836, '20', 13, 0),
(857, '1', 20, 0),
(858, '2', 20, 0),
(859, '3', 20, 0),
(860, '4', 20, 0),
(861, '5', 20, 0),
(862, '6', 20, 0),
(863, '7', 20, 0),
(864, '8', 20, 0),
(865, '9', 20, 0),
(866, '10', 20, 0),
(867, '11', 20, 0),
(868, '12', 20, 0),
(869, '13', 20, 0),
(870, '14', 20, 0),
(871, '15', 20, 0),
(872, '16', 20, 0),
(873, '17', 20, 0),
(874, '18', 20, 0),
(875, '19', 20, 0),
(876, '20', 20, 0),
(877, '21', 20, 0),
(878, '22', 20, 0),
(879, '23', 20, 0),
(880, '24', 20, 0),
(881, '25', 20, 0),
(882, '26', 20, 0),
(883, '27', 20, 0),
(884, '28', 20, 0),
(885, '29', 20, 0),
(886, '30', 20, 0),
(887, '31', 20, 0),
(888, '32', 20, 0),
(889, '33', 20, 0),
(890, '34', 20, 0),
(891, '35', 20, 0),
(892, '36', 20, 0),
(893, '37', 20, 0),
(894, '38', 20, 0),
(895, '39', 20, 0),
(896, '40', 20, 0),
(897, '41', 20, 0),
(898, '42', 20, 0),
(899, '43', 20, 0),
(900, '44', 20, 0),
(901, '45', 20, 0),
(902, '46', 20, 0),
(903, '47', 20, 0),
(904, '48', 20, 0),
(905, '49', 20, 0),
(906, '50', 20, 0),
(907, '51', 20, 0),
(908, '52', 20, 0),
(909, '53', 20, 0),
(910, '54', 20, 0),
(911, '55', 20, 0),
(912, '56', 20, 0),
(913, '57', 20, 0),
(914, '58', 20, 0),
(915, '59', 20, 0),
(916, '60', 20, 0),
(917, '61', 20, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `history_pay`
--

CREATE TABLE `history_pay` (
  `id` bigint(20) NOT NULL,
  `created_date` date DEFAULT NULL,
  `order_id` varchar(255) DEFAULT NULL,
  `request_id` varchar(255) DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tau`
--

CREATE TABLE `tau` (
  `id` bigint(20) NOT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `thoi_gian_di` time DEFAULT NULL,
  `tong_so_cho` int(11) DEFAULT NULL,
  `tuyenduong_id` bigint(20) DEFAULT NULL,
  `thoi_gian_den` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tau`
--

INSERT INTO `tau` (`id`, `ten`, `thoi_gian_di`, `tong_so_cho`, `tuyenduong_id`, `thoi_gian_den`) VALUES
(1, 'a201', '18:03:00', 60, 1, '20:03:00'),
(2, 'grtg', '19:16:00', 60, 3, '19:16:00'),
(3, 'A123', '03:50:00', 60, 1, '10:50:00'),
(4, 'A124', '05:30:00', 60, 1, '11:40:00'),
(5, 'B123', '05:20:00', 60, 3, '10:12:00'),
(6, 'B124', '20:12:00', 60, 3, '09:10:00'),
(7, 'C123', '10:12:00', 80, 5, '21:12:00'),
(8, 'C124', '03:45:00', 80, 5, '21:23:00'),
(9, 'C125', '04:00:00', 80, 5, '19:00:00'),
(11, 'D231', '03:10:00', 60, 1, '04:05:00'),
(12, 'E122', '12:03:00', 60, 3, '21:31:00'),
(13, 'E123', '12:21:00', 80, 5, '05:42:00'),
(14, 'T3', '02:04:00', 80, 9, '18:02:00'),
(15, 'A12323', '21:57:00', 30, 1, '14:54:00'),
(16, 'C102', '17:08:00', 40, 1, '18:09:00'),
(17, 'A1211', '17:24:00', 10, 1, '20:21:00'),
(18, 'Q123', '19:46:00', 31, 1, '17:50:00'),
(20, 'B123', '18:16:00', 12, 1, '20:14:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `toa_tau`
--

CREATE TABLE `toa_tau` (
  `id` bigint(20) NOT NULL,
  `gia_tien` double DEFAULT NULL,
  `so_cho_ngoi` int(11) DEFAULT NULL,
  `ten_toa` varchar(255) DEFAULT NULL,
  `tau_id` bigint(20) DEFAULT NULL,
  `loai_toa` int(11) DEFAULT NULL,
  `mo_ta` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `toa_tau`
--

INSERT INTO `toa_tau` (`id`, `gia_tien`, `so_cho_ngoi`, `ten_toa`, `tau_id`, `loai_toa`, `mo_ta`) VALUES
(1, 520000, 40, 'Toa 1', 2, 1, 'toa giường nằm có điều hòa'),
(4, 120000, 40, 'Toa 2', 2, 0, 'oke'),
(5, 80000, 20, 'A2', 1, 0, ''),
(7, 120000, 20, 'A3', 1, 1, ''),
(8, 120000, 10, 'A4', 1, 1, ''),
(9, 80000, 20, 'A1', 1, 0, ''),
(10, 120000, 20, 'B1', 2, 1, ''),
(11, 120000, 10, 'B2', 1, 1, ''),
(12, 80000, 20, 'B3', 2, 0, ''),
(13, 80000, 20, 'E21', 1, 0, ''),
(14, 80000, 20, 'T1', 14, 0, ''),
(15, 80000, 20, 'T2', 14, 0, ''),
(16, 120000, 10, 'T3', 14, 1, ''),
(17, 120000, 10, 'T4', 14, 1, ''),
(18, 50, 30, 'B2123', 1, 1, 'khong co'),
(19, 30000, 40, 'A1403', 1, 1, 'không có'),
(20, 100000, 61, 'K123', 1, 0, 'khoong');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tram`
--

CREATE TABLE `tram` (
  `id` bigint(20) NOT NULL,
  `dia_chi` varchar(255) DEFAULT NULL,
  `mo_ta` varchar(255) DEFAULT NULL,
  `ten_tram` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tram`
--

INSERT INTO `tram` (`id`, `dia_chi`, `mo_ta`, `ten_tram`) VALUES
(1, 'Ba đình , Hà Nội', 'không có', 'Hà Nội'),
(2, 'quận Bình Thạnh', 'không bieets', 'Hồng Bàng'),
(4, '12/21 đâu đó , thanh hóa', '', 'Thanh Hóa'),
(5, 'Đak Nhau , Bù Đăng ,Bình Phước', '', 'Bình Phước'),
(6, '05/06 lâm đồng', '', 'Lâm Đồng'),
(7, '23/21 không biết nữa , đã nẵng', '', 'Đà Nẳng'),
(8, 'cho do', '', 'tram binh hung hoa '),
(9, 'sai gon', '', 'binh thanh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tram_tuyen_duong`
--

CREATE TABLE `tram_tuyen_duong` (
  `id` bigint(20) NOT NULL,
  `tram_id` bigint(20) DEFAULT NULL,
  `tuyen_duong_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tuyen_duong`
--

CREATE TABLE `tuyen_duong` (
  `id` bigint(20) NOT NULL,
  `deleted` int(11) DEFAULT NULL,
  `diem_den` varchar(255) DEFAULT NULL,
  `diem_di` varchar(255) DEFAULT NULL,
  `mo_ta` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tuyen_duong`
--

INSERT INTO `tuyen_duong` (`id`, `deleted`, `diem_den`, `diem_di`, `mo_ta`) VALUES
(1, 0, 'Sài Gòn', 'Hà Nội', 'không'),
(3, 0, 'Hà Nội', 'Sài Gòn', ''),
(5, 0, 'Sài Gòn', 'Đà Nẵng', 'không'),
(6, 0, 'Bình Phước', 'Sài Gòn ', 'đi cái vèo'),
(7, 0, 'Lâm Đồng', 'Sài Gòn ', ''),
(8, 0, 'Bình Phước', 'Lâm Đồng', ''),
(9, 0, 'Thanh Hóa', 'Bình Phước', ''),
(10, 0, 'Hà Nội', 'Thanh Hóa', ''),
(11, 0, 'Hà Nội', 'Bình Phước ', ''),
(14, 0, 'sai gon', 'binh thanh', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `activation_key` varchar(255) DEFAULT NULL,
  `actived` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `activation_key`, `actived`, `created_date`, `email`, `password`, `phone`, `username`, `fullname`) VALUES
(1, NULL, 1, NULL, NULL, '$2a$10$0ZLMiZGpQZ.WN45D0yJ.w.EkhZuXkT5jxqLt8WNOpEPyC7f5bSuXO', NULL, 'admin', NULL),
(2, 'mBP3RL24s7', 1, '2023-04-10 15:30:13', 'lesynam102@gmail.com', '$2a$10$GMX4woh2VxUkoVPNUGjQk.fOcOMRsGhNIuVtwWXkUrdpF4ZHHqD5m', '0355852451', 'lesynam102@gmail.com', NULL),
(5, 'QnmvqmhwtE', 1, '2023-04-19 15:56:40', 'chauthaibao987@gmail.com', '$2a$10$SaJjJiE1PKzu/tBqJSD6rOnGGTw/WE2nADbpG7rb3NItnEwlCzD7y', '098128931', 'chauthaibao987@gmail.com', 'chauthaibao'),
(6, 'froPEJtpRg', 1, '2023-04-21 22:52:32', 'namlehiucntt@gmail.com', '$2a$10$nknzAEol47zIFpWxfU/t/.fPYVZpI9AQMPXKQjjoWslLqQWJluYiO', '09813412', 'namlehiucntt@gmail.com', 'nam lê'),
(7, 'v1fWwcJ5VW', 1, '2023-05-19 21:17:14', 'quangducnguyen@gmail.com', '$2a$10$//2RJpWFZ.FLvO8BSgEuD.88YiO86niJR0epHIVKD.W03xU/gRkla', '0981412312', 'quangducnguyen@gmail.com', 'quang'),
(8, '4dph2yAbUr', 1, '2023-08-01 14:09:39', 'namdayne102@gmail.com', '$2a$10$/1RQXzeaTBT1AApE/rQsjO1QCGZVrk2Di.XRyYRBw/RglY/2L.7jK', '09813721', 'namdayne102@gmail.com', 'lenam');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_authority`
--

CREATE TABLE `user_authority` (
  `user_id` bigint(20) NOT NULL,
  `authority_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user_authority`
--

INSERT INTO `user_authority` (`user_id`, `authority_name`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER'),
(5, 'ROLE_USER'),
(6, 'ROLE_USER'),
(7, 'ROLE_USER'),
(8, 'ROLE_USER');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `authority`
--
ALTER TABLE `authority`
  ADD PRIMARY KEY (`name`);

--
-- Chỉ mục cho bảng `bai_viet`
--
ALTER TABLE `bai_viet`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `dat_ve`
--
ALTER TABLE `dat_ve`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKmthd06asmlr960ywwiuq1qyqv` (`ghengoi_id`),
  ADD KEY `FK5ouc4yktk3igqh70d487w1s3w` (`user_id`);

--
-- Chỉ mục cho bảng `ghe_ngoi`
--
ALTER TABLE `ghe_ngoi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7gjo8e6hcgdvj2rbirv6hnj22` (`toatau_id`);

--
-- Chỉ mục cho bảng `history_pay`
--
ALTER TABLE `history_pay`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK2gpt1hsglypoym2srl2clcjxw` (`user_id`);

--
-- Chỉ mục cho bảng `tau`
--
ALTER TABLE `tau`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKkm3oip1olj8u910qnwi1ioots` (`tuyenduong_id`);

--
-- Chỉ mục cho bảng `toa_tau`
--
ALTER TABLE `toa_tau`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK3p6gl22ttpt19sgspxuo15ypw` (`tau_id`);

--
-- Chỉ mục cho bảng `tram`
--
ALTER TABLE `tram`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tram_tuyen_duong`
--
ALTER TABLE `tram_tuyen_duong`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK6o27jl7uoyn6k138mhcj5fbnk` (`tram_id`),
  ADD KEY `FKoaqs0y6rpdoew0gmgbw0ey80` (`tuyen_duong_id`);

--
-- Chỉ mục cho bảng `tuyen_duong`
--
ALTER TABLE `tuyen_duong`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `duplli` (`diem_di`,`diem_den`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_authority`
--
ALTER TABLE `user_authority`
  ADD PRIMARY KEY (`user_id`,`authority_name`),
  ADD KEY `FK6ktglpl5mjosa283rvken2py5` (`authority_name`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bai_viet`
--
ALTER TABLE `bai_viet`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `dat_ve`
--
ALTER TABLE `dat_ve`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT cho bảng `ghe_ngoi`
--
ALTER TABLE `ghe_ngoi`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=958;

--
-- AUTO_INCREMENT cho bảng `history_pay`
--
ALTER TABLE `history_pay`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tau`
--
ALTER TABLE `tau`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `toa_tau`
--
ALTER TABLE `toa_tau`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `tram`
--
ALTER TABLE `tram`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `tram_tuyen_duong`
--
ALTER TABLE `tram_tuyen_duong`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tuyen_duong`
--
ALTER TABLE `tuyen_duong`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `dat_ve`
--
ALTER TABLE `dat_ve`
  ADD CONSTRAINT `FK5ouc4yktk3igqh70d487w1s3w` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKmthd06asmlr960ywwiuq1qyqv` FOREIGN KEY (`ghengoi_id`) REFERENCES `ghe_ngoi` (`id`);

--
-- Các ràng buộc cho bảng `ghe_ngoi`
--
ALTER TABLE `ghe_ngoi`
  ADD CONSTRAINT `FK7gjo8e6hcgdvj2rbirv6hnj22` FOREIGN KEY (`toatau_id`) REFERENCES `toa_tau` (`id`);

--
-- Các ràng buộc cho bảng `history_pay`
--
ALTER TABLE `history_pay`
  ADD CONSTRAINT `FK2gpt1hsglypoym2srl2clcjxw` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `tau`
--
ALTER TABLE `tau`
  ADD CONSTRAINT `FKkm3oip1olj8u910qnwi1ioots` FOREIGN KEY (`tuyenduong_id`) REFERENCES `tuyen_duong` (`id`);

--
-- Các ràng buộc cho bảng `toa_tau`
--
ALTER TABLE `toa_tau`
  ADD CONSTRAINT `FK3p6gl22ttpt19sgspxuo15ypw` FOREIGN KEY (`tau_id`) REFERENCES `tau` (`id`);

--
-- Các ràng buộc cho bảng `tram_tuyen_duong`
--
ALTER TABLE `tram_tuyen_duong`
  ADD CONSTRAINT `FK6o27jl7uoyn6k138mhcj5fbnk` FOREIGN KEY (`tram_id`) REFERENCES `tram` (`id`),
  ADD CONSTRAINT `FKoaqs0y6rpdoew0gmgbw0ey80` FOREIGN KEY (`tuyen_duong_id`) REFERENCES `tuyen_duong` (`id`);

--
-- Các ràng buộc cho bảng `user_authority`
--
ALTER TABLE `user_authority`
  ADD CONSTRAINT `FK6ktglpl5mjosa283rvken2py5` FOREIGN KEY (`authority_name`) REFERENCES `authority` (`name`),
  ADD CONSTRAINT `FKpqlsjpkybgos9w2svcri7j8xy` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
