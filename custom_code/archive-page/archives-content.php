<?php 
//Set up $args array for wp_list_categories() function to display all categories
$args = array(
	'depth'              => 1,
	'orderby'            => 'ID',
	'title_li'           => '',
	'exclude'            => '1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56'
	);

//Set up to display all tags
$tags = get_tags();
$tag_html = '<ul id="archive-tags" class="flex-container-row archive-grid">';
foreach ( $tags as $tag ) {
	$tag_link = get_tag_link( $tag->term_id );
	$tag_name = ucwords($tag->name);
			
	$tag_html .= "<li class='tag-item tag-{$tag->slug}'><a href='{$tag_link}'>";
	$tag_html .= "$tag_name</a></li>";
}
$tag_html .= '</ul>';
?>

<div class="archive-container">
	<h2>Categories</h2>
	<ul id="archive-categories" class="flex-container-row archive-grid">
		<?php wp_list_categories($args); ?>
	</ul>
</div>

<div class="archive-container">
	<h2>Tags</h2>
	<?php echo $tag_html; ?>	
</div>

<div class="archive-container">
	<h2>Features 2009-2015</h2>
	<ul id="archive-wfc-features" class="flex-container-row archive-grid">
		<li class="cat-item"><a href="features-archives/">Features</a></li>
	</ul>
</div>

<div class="archive-container">
	<h2>Press Releases 2004-2015</h2>
	<ul id="archive-wfc-press" class="flex-container-row archive-grid">
		<li class="cat-item"><a href="press-releases-archives/">Press Releases</a></li>
	</ul>
</div>

<div class="archive-container">
	<h2>Wildflower Magazine</h2>
	<ul id="archive-wfc-magazine" class="flex-container-row archive-grid">
		<li class="cat-item"><a href="https://issuu.com/wildflowercenter" target="_blank">Current - Spring 2015</a></li>
		<li class="cat-item"><a href="magazine-archives/">Winter 2014 - Fall 2002</a></li>
	</ul>
</div>