<div class="home-main-top2">
	<div class="main">
		<span>用户登录</span>
	</div>
</div>
<div class="main home">
	<div class="box page-account">
		<div class="w520">
			<form action="/user/register" method="post">
				<input type="hidden" name="type" value="personal">
				<fieldset>
					<div class="clearfix">
						<label for="email">E-Mail</label>
						<input type="text" size=30 id="email" name="email" value="">
						<span class="help-inline"></span>
					</div>
					<div class="clearfix">
						<label for="password">密码</label>
						<input type="password" size=30 id="password" name="password" value="">
						<span class="help-inline"></span>
					</div>
				</fieldset>

				<div class="submit_btn">
					<button type="submit" class="register_btn"></button>
				</div>
			</form>
		</div>
		<div class="aside w300">
			<p>还没有账号? <a href="/user/register">立即注册</a></p>
		</div>
	</div>
</div>
