<header>
	<nav class="navbar">
		<a href="/">
			로고~
		</a>
		<ul>
			<a href="/">home</a>
			<a href="/about">about</a>
			<a href="/test">test</a>
		</ul>
		<div>
			<button>
				질문 버튼
			</button>
			<button>
				게임 실행
			</button>
		</div>
	</nav>
</header>

<slot />

<footer class="layout-footer">푸터 영역</footer>


<style>
  	.navbar {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    background-color: bisque;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .layout-footer {
    background-color:blanchedalmond;
    color:black;
    font-size: 30px;
    text-align: center;
    padding:10px
  }
</style>