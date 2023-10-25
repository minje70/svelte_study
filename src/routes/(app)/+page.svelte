<script>
	// 여기서 $로 src부터 경로 지정을 못한다.
	import '../../app.css';

	let name = 'world';
	let id = ''
	let pw = ''
	
	function onClickLogin() {
		alert(`id: ${id}, pw: ${pw}`);
	}
</script>

<h1 class="text-3xl font-bold underline">tailwind test</h1>
<h1>테스트 하는 페이지입니다</h1>
<h3>h3입니다</h3>

<div>
	<div>
		id: 
		<input bind:value={id} />
	</div>
	<br />
	<div>
		pw: 
		<input bind:value={pw} />
	</div>
	<br>
	<button type="button" on:click={onClickLogin}>button</button>
</div>
<p>id: {id}, pw: {pw}</p>
<div>
	<a href="/">홈</a>
	<a href="/about">about</a>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>