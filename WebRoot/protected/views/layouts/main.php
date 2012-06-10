<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />

	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/base.css" />
	<!--[if lt IE 8]>
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection" />
	<![endif]-->
	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>
<body>
<div id="header" class="intro">
	<div class="main">
		<div class="logo"><a href="http://fankui.cc"><img src="http://fankui.cc/images/logo.gif" title="反馈网" alt="反馈网"></a></div>
		<ul class="main-menu">
			<li class="at"><a href="/">首页</a></li>
			<li><a href="/">产品介绍</a></li>
			<li><a href="/">客户案例</a></li>
			<li><a href="/">帮助</a></li>
			<li><a href="/">博客</a></li>
<?php
/*
$this->widget('zii.widgets.CMenu',array(
			'items'=>array(
				array('label'=>'Home', 'url'=>array('/site/index')),
				array('label'=>'About', 'url'=>array('/site/page', 'view'=>'about')),
				array('label'=>'Contact', 'url'=>array('/site/contact')),
				array('label'=>'Login', 'url'=>array('/site/login'), 'visible'=>Yii::app()->user->isGuest),
				array('label'=>'Logout ('.Yii::app()->user->name.')', 'url'=>array('/site/logout'), 'visible'=>!Yii::app()->user->isGuest)
			),
		)); 
 */
?>
		</ul>
	</div>

	<?php if(isset($this->breadcrumbs)):?>
		<?php $this->widget('zii.widgets.CBreadcrumbs', array(
			'links'=>$this->breadcrumbs,
		)); ?><!-- breadcrumbs -->
	<?php endif?>
</div>

<?php echo $content; ?>

<div id="footer">
	Copyright &copy; <?php echo date('Y'); ?> by fankui.cc.<br/>
	All Rights Reserved.<br/>
</div><!-- footer -->


<!-- fankui test Button BEGIN -->
<script type="text/javascript" src="http://fankui.cc/code/fankui.js?app_key=123456" charset="utf-8"></script>
<!-- fankui Button END -->

</body>
</html>
