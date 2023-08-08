<script>
  import { popup } from '$lib/screen'
  export let profiles = [
    {
      name: '이병화',
      eng: 'Byonghwa Lee',
      job: '대표이사',
      desc: '경영총괄 각지대표',
      img: '/images/people-1.png',
    },
    {
      name: '김유리',
      eng: 'Yuri Kim',
      job: '부사장',
      desc: 'IP사업본부장(변리사, 미국변호사)',
      img: '/images/people-2.png',
    },
    {
      name: '한지학',
      eng: 'Jihak Han',
      job: '전무이사',
      desc: '총자사업본부장',
      img: '/images/people-3.png',
    },
    {
      name: '유영동',
      eng: 'Youngdong Yoo',
      job: '전무이사',
      desc: '',
      img: '/images/people-4.png',
    },
    {
      name: '강윤구',
      eng: 'Yoonku Kang',
      job: '상무이사',
      desc: '',
      img: '/images/people-5.png',
    },
    {
      name: '구현영',
      eng: 'Hyunyoung Koo',
      job: '상무이사',
      desc: '',
      img: '/images/people-6.png',
    },
    {
      name: '김소한',
      eng: 'Sohan Kim',
      job: '상무이사',
      desc: '',
      img: '/images/people-7.png',
    },
    {
      name: '조준성',
      eng: 'Junsung Cho',
      job: '이사',
      desc: '',
      img: '/images/people-8.png',
    },
    {
      name: '권순일',
      eng: 'Soonil Kwon',
      job: '이사',
      desc: '',
      img: '/images/people-9.png',
    },
    {
      name: '이재영',
      eng: 'Jaeyoung Lee',
      job: '이사',
      desc: '',
      img: '/images/people-10.png',
    },
    {
      name: '이형규',
      eng: 'Hyungkyu Lee',
      job: '이사',
      desc: '',
      img: '/images/people-11.png',
    },
    {
      name: '이정준',
      eng: 'Jungjoon Lee',
      job: '이사',
      desc: '',
      img: '/images/people-12.png',
    },
  ]
</script>

<div class="profiles">
  {#each profiles as item, i}
    <div
      class="flex flex-col overflow-hidden rounded-lg item"
      role="button"
      tabindex="0"
      on:click={() => {
        popup.set({ type: 'profile' })
      }}
      on:keydown={event => {
        if (event.key === 'Enter' || event.key === ' ') {
          popup.set({ type: 'profile' })
        }
      }}
    >
      <div class="thumb">
        <img class="block object-cover w-full h-full" src={item.img} alt={item.name} />
      </div>
      <div class="flex grid flex-col items-start flex-auto gap-0 p-4 py-6 fill-blue desc">
        <div class="flex items-end gap-2">
          <h4 class="text24-500 single-line">{item.name}</h4>
          <p class="text12-400 single-line">{item.job}</p>
        </div>
        <p class="text18-400">{item.eng}</p>
        <p class="body14-600 color-light-blue">{item.desc}</p>
      </div>
    </div>
  {/each}
</div>
