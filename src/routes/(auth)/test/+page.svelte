<script>
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  let inputText = ''
  let isApear = true;
  let testArr = ['사과', '망고', '수박', '참외', '메론']
  
  let onClickApear = () => {
    isApear = !isApear;
  };

  let addArr = () => {
    testArr = [...testArr, '추가']
  }
  
  let popArr = () => {
    testArr.pop();
    testArr = testArr;
  }

</script>

<h1>
  test 하는 중입니다
</h1>

<div>
  <div>
    <button on:click={onClickApear}>
      버튼
    </button>
  </div>
  <div>
    <button on:click={addArr}>
      추가
    </button>
  </div>
  <div>
    <button on:click={popArr}>
      제거
    </button>
  </div>
</div>

{#each testArr as item, i}
  <div transition:fly={{y:200, duration: 500, easing: cubicOut}}>
    {i} is index, item is {item}
  </div>
{/each}

{#if isApear}
  <div transition:fly={{y: 200, duration: 500}}>이런게 막 생깁니다</div>
{:else}
  <div transition:fly={{y: 200, duration: 500}}>
    hi
  </div>
{/if}

<input class="id_input" bind:value={inputText}>

<br />
<div>
  this is input: {inputText}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}

	.navbar {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .id_input {
    outline: 4px solid gray;
    border-radius:5px;
  }
</style>