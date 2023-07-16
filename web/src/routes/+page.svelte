<script>
	import { hHeight } from "$lib/store";
	import isPC from "$lib/screen";
    import CardNews from "../components/CardNews.svelte"
	import {mclass} from "$lib/hooks/preprocess";

	const cards = [
  {
    image: "https://s3-alpha-sig.figma.com/img/88ac/31fc/fcc4e8b33c5441804c7b7c47262add82?Expires=1690156800&Signature=f37u2bFuG4pUNqpfREoa702Pg9k5K-M7tYi2JUauY992EG3ZGHYbr1bvr6UNqt9GiiiNLtj3~2tRvCAHWQS2J9BbC8ogY4m~H~V3excUDLSUo04bl-R~V~qriXvIw4~l0rfCgi~lVgrBIoqrJymIaV6WWseiutPmpR1HU2MEzGhiAJyYtDJf7rv9d~Q0esB0~vfzNv81isovJjcS7kR56-cZE7VRQxubqOMxcIbFFz-1krq11LDcAddw5IKs9lQhJ5moh~eYZFeC0XIm3tPWApa6w4XoxExCC~rFVAtcPUPFWtoxGmO28RC4nphyEuEiThbzIh4KpbF7pXOcsGqCkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Platform",
    desc: "유전자 가위 플랫폼 고도화 및 다양한 CRIPSR/Cas9 관련 플랫폼의 연구를 진행하여 유전자교정 업계를 선도합니다."
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/a943/8005/f67231e5cb6eb3a15d80cb481e45dd27?Expires=1690156800&Signature=UeQn9CRLKdnFmX~iIYxz~JCqvo57osEeMAXgpTtNCtwEAX120Z-D1HKmT0TAypUpmgjoH~duwK1d0kxS0XEKboQP0BlU2OVXkmWh7DYgvJ~wyF3ALxu~rvTti1KAykv3sicnxYrTpZRd9qncLnPY6mHcEZUpSXFIqd-4606UJ5-5x-5nXZsEoYc6y0IokbAWXtd8RsBOJ5DMa760bV1Uhc7neztExmYyUy7rYcNETpF8qaRNV8CwpskGuIrGKT9cTtgf6m9shLEKACoa~4Zz-hf5tWGSeS8eqg9WvZ6wGsZyhHIVLOJiUE~Su3AUL1gXaMHJ4NuJlG-BGd1z0JjmMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Therapeutics",
    desc: "유전자 가위 플랫폼 고도화 및 다양한 CRIPSR/Cas9 관련 플랫폼의 연구를 진행하여 유전자교정 업계를 선도합니다."
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/faef/25c5/30b695f77b9c1f6430cdec0aaa2a1117?Expires=1690156800&Signature=VRnjscTN38mJpDATRuMkkgdVh4Z3onvescr6FAmofUkcf34Bcau0wFqpxZK60ivD-4qRhZDzioa1msbQcg339pl6n5dsAFBX6BJKh6nIu8BtbOAJgPAdmDkvURqhKhh5y4yAG0uzOQZazCC6KbYXdC3dNldQZdz2JHIMHB3ywzMt21VCrItiyHq54MB-88QeQ2iJrmhN8dpS2KWADoiuKjDMNK6JIFpaMMYzjUSIH~wuClbYrVONpdeFJ0iJk7EpOF-1g36mCdEOVBOf1g-fktGhgRGg2ALhFYQtcODZG~5m3FTJYwJOG0mi3uT8a-IbYcov3tJhV1Q4ENbwspqxVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Crop",
    desc: "인류가 질병 없는 건강한 삶을 영위할 수 있도록, 유전질환 및 난치질환들의 치료제를 개발하기 위한 연구를 진행합니다."
  }
];
let ts = true;
</script>
<div class="main-banner" style="background-image:url(https://s3-alpha-sig.figma.com/img/1497/f613/373da1004309db1dd448c63a00849184?Expires=1690156800&Signature=P3P0pBWWhhv9LCpuzqrVefH8C4QlTDJW1EaxFpbh9YIC3iD8~JPpiu-2jEDsljt6~UB70xFJot9uISTfP2p9bjiXkFkxSXD6ygBcC~hopcUSSFmc1mUg5OnRZzmd9SfMoDeL7i7QEXg~HNUf-D9JP9ZfWO~rJBFg9Xdq9Vx3ILYQUHEeNopoOLQfZYp-rtgJP-l1bGmc9nSzhi7VDHihboiqMdiU3VhR8IPdkkfjN23w4tsKokzNPwsZ9mRLaCPX1j13nLjLfxVtOdOEM2o4Bwr5WrudSRoP1sMgbJQabruENHzp5GHUwqpmaVHkU4ZefdvRP-EbEsGmh3ZomoqikA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)">
	<div class="w-full" style:height={$hHeight + "px"}></div>
	<div class="w-full cont justify-center items-center">
		<div class="banner-content">
			<img class="block w-full h-auto mob" src="https://s3-alpha-sig.figma.com/img/1497/f613/373da1004309db1dd448c63a00849184?Expires=1690156800&Signature=P3P0pBWWhhv9LCpuzqrVefH8C4QlTDJW1EaxFpbh9YIC3iD8~JPpiu-2jEDsljt6~UB70xFJot9uISTfP2p9bjiXkFkxSXD6ygBcC~hopcUSSFmc1mUg5OnRZzmd9SfMoDeL7i7QEXg~HNUf-D9JP9ZfWO~rJBFg9Xdq9Vx3ILYQUHEeNopoOLQfZYp-rtgJP-l1bGmc9nSzhi7VDHihboiqMdiU3VhR8IPdkkfjN23w4tsKokzNPwsZ9mRLaCPX1j13nLjLfxVtOdOEM2o4Bwr5WrudSRoP1sMgbJQabruENHzp5GHUwqpmaVHkU4ZefdvRP-EbEsGmh3ZomoqikA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
			<h1>Innovate Genome<br>
				Edit Your Life</h1>
			<p>툴젠의 CRISPR 유전자가위 원천특허는<br>진핵세포의 유전자교정에 CRISPR 시스템을 사용한 세계 최초의 특허입니다.</p>
			<div class="flex justify-center">
				<button class="fill">CRISPR-Cas9</button>
			</div>
		</div>
	</div>
</div>
<section>
	<div class="w-limit section-content">
		<div class="grid grid-cols-1 gap-2">
			<p class="text16-700 color-blue" use:mclass={"color-black"}>What We Do</p>
			<h3>For better health, happier life</h3>
			<p>
				<b>툴젠(ToolGen)</b>은 세계 최고수준의 유전자교정 전문기업으로 1999년 설립이래 ZFN(Zinc Finger Nuclease) 유전자가위, TALEN(Transcription Activator Like Effector Nuclease) 유전자가위 개발에 이어, CRISPR 유전자가위를 개발하여 특허수익화사업, 치료제사업, 종자사업을 영위하고 있습니다.
			</p>
		</div>
		<div class="flex gap-6">
			{#each cards as card}
			<div class="card" style="background-image:url({card.image})">
				<div class="text">
					<h4>{card.title}</h4>
					<p class={$isPC?"body16-400":"body14-400"}>{card.desc}</p>
				</div>
			</div>
			{/each}
		</div>
	</div>
</section>
<section class="fill-yellow">
	<div class="w-limit section-content">
		<div class="grid gap-3 text-center">
			<p class="text16-700 {$isPC?"":"opacity-50"}">Licensing</p>
			<h3>Stronger Together</h3>
			<p class="text-left">
				진핵세포에 적용 가능한 CRISPR-Cas9 원천 기술의 등록 특허를 보유하고 있는 툴젠은, CRISPR-Cas9 기술을 활용하고자 하는 파트너와 함께 성장하고자 합니다.툴젠은 유전자 가위 기술 분야에서 1세대 ZFN 부터 2세대 TALEN에 이어 가장 최신의 3세대 CRISPR-Cas9까지 개발한 유일한 회사입니다.  유전자 교정 기술을 활용하고자 하는 파트너의 미래에 툴젠이 보유한 기술과 경험이 함께 하겠습니다.
			</p>
		</div>
		<img src="https://s3-alpha-sig.figma.com/img/c4ae/42a3/ed6f0bb7d170567f3b828aba52367251?Expires=1690156800&Signature=XUTvHKmMLij8ECxR6eFcRbrt0FtVqDGhP~Oq8MdOfZ8wMF3RjiMK0iXu6qjkwwbel-A1i96RjNgup6-lziR--9DTk1UVjVddfgFs7fcqrq1WPrPthpCL5vOOs1JNcWxcqgC0ZZgjDnXs98vTtQ7GDei4~J2mg9KVRzRMJMLwdCLDp-6Vt7ZiwB-KgOboi6LT2sejpTmSj-0k04fwAynKZVXcDpfjoo8THpHESoZ2eZSA2hURWiVQX94qrbGZnXVklDXyhBbXU~uuVabgsZioIMiUipA3cxeFnJHGYxaZZZ4iotYP2GfA6W0SLbE8rIdA1-b9lZ8A5hHX-PXmWi~~qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=".."/>
		<div/>
		<div class="flex justify-center">
			<a href="/licensing-partnership">
				<button>
					Licensing 자세히 알아보기
					<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3905 7.83407L7.52856 2.97211L8.47137 2.0293L14.9428 8.5007L8.47137 14.9721L7.52856 14.0293L12.3905 9.1674H2V7.83407H12.3905Z" fill="currentColor"/>
					</svg>
				</button>
			</a>
		</div>
	</div>
</section>
<section>
	<div class="w-limit section-content gap-20">
		<CardNews title="Notice" listUrl="/"/>
		<CardNews title="News" listUrl="/"/>
	</div>
</section>