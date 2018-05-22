<?php
// will return 'home' is the filename is home.php
$filename = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
?>
<header class="header">
	<div class="header-inner">
		<nav class="nav">
			<a href="products.php" target="_blank" <?php if ($filename == "products") { echo "class='current'"; } ?>>产品服务</a>
			<a href="commission.php" target="_blank" <?php if ($filename == "commission") { echo "class='current'"; } ?>>佣金制度</a>
			<a href="register.php" target="_blank" <?php if ($filename == "register") { echo "class='current'"; } ?>>立即加入</a>
			<a href="news-list.php" target="_blank" <?php if ($filename == "news-list" || $filename == "news-detail") { echo "class='current'"; } ?>>新闻活动</a>
			<a href="qa.php" target="_blank" <?php if ($filename == "qa") { echo "class='current'"; } ?>>常见问题</a>
			<a href="" target="_blank" class="experience">立即体验</a>
		</nav>
		<a href="index.php" class="logo"></a>
		<div class="lottery-list-info">
			<ul>
				<li>user341代理，5月份获取<strong>12000</strong>佣金，字数过长测试文字！</li>
				<li>user342代理，5月份获取<strong>12000</strong>佣金！</li>
				<li>user343代理，5月份获取<strong>12000</strong>佣金！</li>
				<li>user344代理，5月份获取<strong>12000</strong>佣金！</li>
			</ul>
		</div>
	</div>
</header>
