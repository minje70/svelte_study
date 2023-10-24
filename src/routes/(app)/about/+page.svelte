<script>
	let name = 'world';
	let id = ''
	let pw = ''
	
	function onClickLogin() {
		alert(`id: ${id}, pw: ${pw}`);
	}
</script>

<h1>About 페이지입니다</h1>

<div>
	<div class="test-div">
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

<style>
	.navbar {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}
</style>