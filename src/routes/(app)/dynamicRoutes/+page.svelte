<script>

  let text = '';
  let promise;

  let onClickButton = async () => {
    promise = await get
  }
</script>

<h1>다이나믹!</h1>

<ul>
  <li>제품 1</li>
  <li>제품 2</li>
  <li>제품 3</li>
</ul>

<button on:click={onClickButton}>
  click
</button>
