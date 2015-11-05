<?php 
$args = array(
	'depth'              => 1,
	'orderby'            => 'ID',
	'title_li'           => '',
	'exclude'            => '1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56'
	);
?>

<div class="archive-container">
	<h2>Categories</h2>
	<ul id="archive-categories" class="flex-container-row">
		<?php wp_list_categories($args); ?>
	</ul>
</div>

<div class="archive-container">
	<h2>Features 2009-2015</h2>
	<ul id="archive-wfc-features" class="flex-container-row">
		<li class="cat-item"><a href="features-archives/">Features</a></li>
	</ul>
</div>

<div class="archive-container">
	<h2>Press Releases 2004-2015</h2>
	<ul id="archive-wfc-press" class="flex-container-row">
		<li class="cat-item"><a href="press-releases-archives/">Press Releases</a></li>
	</ul>
</div>