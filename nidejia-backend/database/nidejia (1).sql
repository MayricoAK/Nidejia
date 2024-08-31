-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 19, 2024 at 09:17 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nidejia`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('a17961fa74e9275d529f489537f179c05d50c2f3', 'i:1;', 1724056376),
('a17961fa74e9275d529f489537f179c05d50c2f3:timer', 'i:1724056376;', 1724056376);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `listings`
--

CREATE TABLE `listings` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sqft` smallint UNSIGNED NOT NULL DEFAULT '0',
  `wifi_speed` smallint UNSIGNED NOT NULL DEFAULT '0',
  `max_person` smallint UNSIGNED NOT NULL DEFAULT '0',
  `price_per_day` smallint UNSIGNED NOT NULL DEFAULT '0',
  `attachments` longtext COLLATE utf8mb4_unicode_ci,
  `full_support_available` smallint UNSIGNED NOT NULL DEFAULT '0',
  `gym_area_available` smallint UNSIGNED NOT NULL DEFAULT '0',
  `mini_cafe_available` smallint UNSIGNED NOT NULL DEFAULT '0',
  `cinema_available` smallint UNSIGNED NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `listings`
--

INSERT INTO `listings` (`id`, `title`, `slug`, `description`, `address`, `sqft`, `wifi_speed`, `max_person`, `price_per_day`, `attachments`, `full_support_available`, `gym_area_available`, `mini_cafe_available`, `cinema_available`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Corporis Praesentium', 'corporis-praesentium', 'Officia nihil repellat consequuntur voluptas quod sit earum ea. Cumque molestiae adipisci ut voluptatem iusto vel. Fugiat officiis necessitatibus dolor quisquam debitis ad. Illo esse ducimus facere nihil commodi. Totam nostrum temporibus quia aut provident eaque dolor est. Et et qui culpa rerum qui et corrupti. Tenetur repudiandae sed dolorem cumque nam enim optio tempore.', '81625 Viola Isle\nWest Darryl, MD 31724', 38, 30, 1, 4, NULL, 1, 0, 1, 1, '2024-08-19 01:31:40', '2024-08-19 01:31:40', NULL),
(2, 'Dolorem Ut', 'dolorem-ut', 'Corrupti aliquam ut molestias enim qui. Qui enim inventore voluptate et molestiae dolore. Expedita labore et rerum dolores ad debitis. Illo quibusdam labore deserunt rerum corrupti. Assumenda nam velit hic sed dolor praesentium. Iste consequatur autem vel in assumenda. Dignissimos in saepe deserunt doloribus ut.', '78089 McGlynn Court\nNew Paoloport, NE 53806', 84, 57, 4, 2, NULL, 0, 1, 1, 0, '2024-08-19 01:31:40', '2024-08-19 01:31:40', NULL),
(3, 'Iure Illo', 'iure-illo', 'Id praesentium voluptas libero alias. Veritatis ut quibusdam est at ut deserunt facilis. Est iusto unde veritatis delectus laboriosam. Et eum placeat provident voluptas perspiciatis hic.', '5944 Jackson Roads Suite 333\nLurachester, SD 05408-0214', 11, 32, 1, 1, NULL, 1, 1, 1, 0, '2024-08-19 01:31:40', '2024-08-19 01:31:40', NULL),
(4, 'Esse Doloribus', 'esse-doloribus', 'Quisquam officia consequatur totam tempora impedit. Quisquam enim dolore ipsum sapiente minima mollitia explicabo maxime. Qui ullam eius mollitia. Voluptatem quae aut inventore unde fugit cumque. Ab corporis non nulla eos voluptates et a. Ut beatae voluptatum itaque sapiente aliquam. Natus dolorem eius ipsum voluptates ad.', '47272 Cordell Spurs Suite 425\nBrayanville, NY 15065-1297', 79, 43, 2, 5, NULL, 0, 0, 0, 0, '2024-08-19 01:31:40', '2024-08-19 01:31:40', NULL),
(5, 'Quasi Eum', 'quasi-eum', 'Porro sit quisquam cumque non consequuntur fugiat eveniet aut. Sed ipsa labore culpa error enim. Maiores blanditiis nostrum possimus occaecati sit amet. Et voluptatibus blanditiis harum delectus neque tempora. Et dolorem illum voluptates.', '390 Mariah Radial Apt. 325\nHansfort, MI 99855-6735', 34, 96, 4, 2, NULL, 0, 1, 1, 0, '2024-08-19 01:31:40', '2024-08-19 01:31:40', NULL),
(6, 'Quod Reprehenderit', 'quod-reprehenderit', 'Natus odio in iste ut neque fugit dolorem. Voluptate ratione voluptate est. Officia quasi sint nemo similique est fugit aliquam. Necessitatibus rerum officiis ipsa temporibus et omnis.', '7549 Demario Fords Apt. 474\nLake Candacehaven, NE 34826', 45, 87, 2, 4, NULL, 1, 0, 0, 0, '2024-08-19 01:31:40', '2024-08-19 01:31:40', NULL),
(7, 'Ut Laudantium', 'ut-laudantium', 'Autem sit ex provident voluptatibus explicabo illum. Aperiam iure modi at repudiandae. Autem tenetur aut deserunt aut ut sit. Consequatur qui et facilis sed quis numquam doloremque. Fugiat totam quo odio ut fugit. Recusandae omnis aut et quas quaerat corrupti.', '89875 Alycia Circles Apt. 204\nWest Alfonso, UT 20731-3193', 65, 22, 2, 3, NULL, 0, 0, 1, 1, '2024-08-19 01:31:40', '2024-08-19 01:31:40', NULL),
(8, 'Ducimus Autem', 'ducimus-autem', 'Commodi rem quas sunt. Voluptatem est reiciendis nulla saepe quia. Laudantium non atque in nesciunt aliquam. Quibusdam in incidunt ut a molestiae. Voluptas perferendis eum asperiores cumque non aut est.', '8431 Gusikowski Ways Apt. 358\nWest Jettie, CA 41294', 21, 61, 3, 4, NULL, 0, 0, 1, 0, '2024-08-19 01:31:40', '2024-08-19 01:31:40', NULL),
(9, 'Optio Ut', 'optio-ut', 'Occaecati vero molestias et laborum. Non placeat quasi eaque voluptas at iure ipsum voluptas. Architecto suscipit praesentium praesentium sed ad libero. Est eaque incidunt facilis sed soluta id. Omnis est impedit omnis sunt cum rerum. Consequatur tenetur explicabo qui eius. Minima sunt laudantium reiciendis facilis quis nulla.', '42437 Homenick Hills Apt. 670\nPort Aryannahaven, RI 33472-1992', 40, 81, 1, 4, NULL, 1, 1, 0, 1, '2024-08-19 01:31:40', '2024-08-19 01:31:40', NULL),
(10, 'Et Beatae', 'et-beatae', 'Ut voluptas aut minus et distinctio placeat possimus. Harum saepe sed autem qui. Quis quisquam fugit aut reiciendis eveniet explicabo velit. Ut omnis aliquam enim ratione autem. Voluptatem quibusdam necessitatibus dolor dolores et consequuntur ut. Eligendi iusto provident qui reiciendis accusamus accusantium repellendus.', '49756 Chesley Brook Apt. 658\nKalebmouth, NE 01240', 89, 83, 1, 3, NULL, 0, 1, 0, 0, '2024-08-19 01:31:40', '2024-08-19 01:31:40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_08_18_140222_create_listings_table', 1),
(5, '2024_08_19_052202_create_transactions_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `listing_id` bigint UNSIGNED NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `price_per_day` int UNSIGNED NOT NULL DEFAULT '0',
  `total_days` int UNSIGNED NOT NULL DEFAULT '0',
  `fee` int UNSIGNED NOT NULL DEFAULT '0',
  `total_price` int UNSIGNED NOT NULL DEFAULT '0',
  `status` enum('waiting','approved','canceled') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'waiting',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `listing_id`, `start_date`, `end_date`, `price_per_day`, `total_days`, `fee`, `total_price`, `status`, `created_at`, `updated_at`) VALUES
(1, 7, 3, '2024-08-14', '2024-08-19', 1, 6, 1, 7, 'waiting', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(2, 10, 4, '2024-08-19', '2024-08-22', 5, 4, 2, 22, 'approved', '2024-08-19 01:31:41', '2024-08-19 01:32:11'),
(3, 10, 9, '2024-08-02', '2024-08-03', 4, 2, 1, 9, 'approved', '2024-08-19 01:31:41', '2024-08-19 01:31:41'),
(4, 4, 1, '2024-08-18', '2024-08-23', 4, 6, 2, 26, 'canceled', '2024-08-19 01:31:41', '2024-08-19 01:31:41'),
(5, 8, 3, '2024-08-13', '2024-08-18', 1, 6, 1, 7, 'approved', '2024-08-19 01:31:41', '2024-08-19 01:31:41'),
(6, 4, 3, '2024-08-16', '2024-08-19', 1, 4, 0, 4, 'approved', '2024-08-19 01:31:41', '2024-08-19 01:31:41'),
(7, 5, 7, '2024-07-22', '2024-07-25', 3, 4, 1, 13, 'approved', '2024-08-19 01:31:41', '2024-08-19 01:31:41'),
(8, 8, 8, '2024-08-11', '2024-08-15', 4, 5, 2, 22, 'waiting', '2024-08-19 01:31:41', '2024-08-19 01:31:41'),
(9, 5, 2, '2024-07-19', '2024-07-24', 2, 6, 1, 13, 'canceled', '2024-08-19 01:31:41', '2024-08-19 01:31:41'),
(10, 6, 5, '2024-07-30', '2024-08-03', 2, 5, 1, 11, 'approved', '2024-08-19 01:31:41', '2024-08-19 01:31:41');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','customer') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin Nidejia', 'admin@nidejia.test', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'admin', '6BHwTFl7rl', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(2, 'Mrs. Treva Rowe', 'jess.breitenberg@example.com', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'customer', 'RcklIcodQc', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(3, 'Ernestine Glover', 'phills@example.com', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'customer', 'hsq19PbuKT', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(4, 'Kimberly Witting', 'alvis.stehr@example.org', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'customer', 'JfPncpNxsR', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(5, 'Mr. Van Keeling IV', 'pfeil@example.net', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'customer', '3TdghIDG3u', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(6, 'Dr. Maci Howe DDS', 'fstracke@example.com', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'customer', 'AoPpRP8VlJ', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(7, 'Prof. Reggie Strosin', 'desmond.schmidt@example.net', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'customer', 'pGNBRNRSjR', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(8, 'Katharina Connelly', 'moore.armand@example.com', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'customer', 'uCraXa4jsP', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(9, 'Dr. Trace Abernathy', 'konopelski.finn@example.com', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'customer', '0ff72FpfFW', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(10, 'Rashawn Paucek', 'eliza87@example.net', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'customer', 'NnDfz3UTFH', '2024-08-19 01:31:40', '2024-08-19 01:31:40'),
(11, 'Mrs. Lelah Shields I', 'mraz.emelia@example.com', '2024-08-19 01:31:40', '$2y$12$qJ6Jq5o/ORtGpKQQ/jnzpuvJvU938TngOTU2QtfV0jZqZh7ETTQxC', 'customer', 'r24SUgci0p', '2024-08-19 01:31:40', '2024-08-19 01:31:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listings`
--
ALTER TABLE `listings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `listings_title_unique` (`title`),
  ADD UNIQUE KEY `listings_slug_unique` (`slug`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_user_id_foreign` (`user_id`),
  ADD KEY `transactions_listing_id_foreign` (`listing_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `listings`
--
ALTER TABLE `listings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_listing_id_foreign` FOREIGN KEY (`listing_id`) REFERENCES `listings` (`id`),
  ADD CONSTRAINT `transactions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
