<script>
  let id = '';
  let pw = '';

  let onClickLogin = () => {
    alert(`id: ${id}, pw: ${pw}으로 로그인 합니다`);
  }

</script>

<div>
  <h1>
    로그인
  </h1>
  <div>
    id
    <br>
    <input bind:value={id}/>
  </div>
  <br>
  <div>
    pw
    <br>
    <input bind:value={pw}/>
  </div>
  <br>
  id: {id}
  <br>
  pw: {pw}
  <br>
  <button on:click={onClickLogin}>
    로그인
  </button>
</div>