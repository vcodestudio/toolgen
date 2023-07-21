<script>
  import CardPlusItem from './CardPlusItem.svelte'

  export const crops = [
    {
      open: false,
      background:
        'https://s3-alpha-sig.figma.com/img/f39c/f208/bbf10026068fc3abe600343b9ef1e371?Expires=1690156800&Signature=lP4dsiJmIWtaZajejuuxWMQv7pwoNbKQn8A5eFLbTnh~hA34tbmOZpEhlyr0xTk3iGBIT-~NXRjRd5mrf0uH88f4dmXpemvDjZwfxdhc5K3iTlp0y-zIv~ySC2os9dod8vHq1wDMoyWmfHzY526w3~RnbxFJ1uGgQg6qN6SppSTX3Gk8e6U0d5DA4gt5FFXEGG5pDt~SHpS0xl458VkVnVlMg6hKFdEUgOUZcfzD4l~tWf6f3ilOkSAHusc0IDw~uOb~EuYjvfI1kt1JEQKVrMDaTDePOV7by8-PZ8t8mURMmm~REv9BR-j9wzlLEptrqmnERRlqwvub18DSWRpFFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '유전자 가위 고도화',
      content: `
        <p>더 정확한 유전자 가위 - 유전자 가위는 표적 타겟 (on-target) 이외에 비표적 타겟 (off-target)에서 교정 효과를 보일 수 있다. 유전자 가위 치료제를 개발하기 위해서는 높은 on-target 교정 효능과 낮은 off-target 교정 효과가 이상적이다. 툴젠은 기존의 wild type Cas9보다 개선된 Sniper-Cas9, Sniper2L등을 개발하여 Nature Communications (2018), Nature Chemical Biology (2023)에 각각 발표했습니다.</p>
        <p>더 작은 유전자 가위 - 인체에 직접 투여하는 유전자 치료제를 개발할 때 많은 경우 바이러스를 전달체로 이용하여 전달하게 됩니다. 이럴 경우 전달하려는 유전자 가위의 사이즈가 전달체로 이용하려는 바이러스의 packaging limit보다 적어야 하는 제약이 생기게 된다. 툴젠은 기존 유전자 가위 보다 더 작은 Cj-Cas9을 개발하여 Nature Communications (2017)지에 발표했습니다.</p>
        `,
    },
    {
      open: false,
      background:
        'https://s3-alpha-sig.figma.com/img/f39c/f208/bbf10026068fc3abe600343b9ef1e371?Expires=1690156800&Signature=lP4dsiJmIWtaZajejuuxWMQv7pwoNbKQn8A5eFLbTnh~hA34tbmOZpEhlyr0xTk3iGBIT-~NXRjRd5mrf0uH88f4dmXpemvDjZwfxdhc5K3iTlp0y-zIv~ySC2os9dod8vHq1wDMoyWmfHzY526w3~RnbxFJ1uGgQg6qN6SppSTX3Gk8e6U0d5DA4gt5FFXEGG5pDt~SHpS0xl458VkVnVlMg6hKFdEUgOUZcfzD4l~tWf6f3ilOkSAHusc0IDw~uOb~EuYjvfI1kt1JEQKVrMDaTDePOV7by8-PZ8t8mURMmm~REv9BR-j9wzlLEptrqmnERRlqwvub18DSWRpFFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '유전자 가위 안전성 평가 기술',
      content: `
        <p>더 정확한 유전자 가위 - 유전자 가위는 표적 타겟 (on-target) 이외에 비표적 타겟 (off-target)에서 교정 효과를 보일 수 있다. 유전자 가위 치료제를 개발하기 위해서는 높은 on-target 교정 효능과 낮은 off-target 교정 효과가 이상적이다. 툴젠은 기존의 wild type Cas9보다 개선된 Sniper-Cas9, Sniper2L등을 개발하여 Nature Communications (2018), Nature Chemical Biology (2023)에 각각 발표했습니다.</p>
        <p>더 작은 유전자 가위 - 인체에 직접 투여하는 유전자 치료제를 개발할 때 많은 경우 바이러스를 전달체로 이용하여 전달하게 됩니다. 이럴 경우 전달하려는 유전자 가위의 사이즈가 전달체로 이용하려는 바이러스의 packaging limit보다 적어야 하는 제약이 생기게 된다. 툴젠은 기존 유전자 가위 보다 더 작은 Cj-Cas9을 개발하여 Nature Communications (2017)지에 발표했습니다.</p>
        `,
    },
    {
      open: false,
      background:
        'https://s3-alpha-sig.figma.com/img/f39c/f208/bbf10026068fc3abe600343b9ef1e371?Expires=1690156800&Signature=lP4dsiJmIWtaZajejuuxWMQv7pwoNbKQn8A5eFLbTnh~hA34tbmOZpEhlyr0xTk3iGBIT-~NXRjRd5mrf0uH88f4dmXpemvDjZwfxdhc5K3iTlp0y-zIv~ySC2os9dod8vHq1wDMoyWmfHzY526w3~RnbxFJ1uGgQg6qN6SppSTX3Gk8e6U0d5DA4gt5FFXEGG5pDt~SHpS0xl458VkVnVlMg6hKFdEUgOUZcfzD4l~tWf6f3ilOkSAHusc0IDw~uOb~EuYjvfI1kt1JEQKVrMDaTDePOV7by8-PZ8t8mURMmm~REv9BR-j9wzlLEptrqmnERRlqwvub18DSWRpFFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '유전자 가위를 이용한 새로운 사업 확장',
      content: `
        <p>더 정확한 유전자 가위 - 유전자 가위는 표적 타겟 (on-target) 이외에 비표적 타겟 (off-target)에서 교정 효과를 보일 수 있다. 유전자 가위 치료제를 개발하기 위해서는 높은 on-target 교정 효능과 낮은 off-target 교정 효과가 이상적이다. 툴젠은 기존의 wild type Cas9보다 개선된 Sniper-Cas9, Sniper2L등을 개발하여 Nature Communications (2018), Nature Chemical Biology (2023)에 각각 발표했습니다.</p>
        <p>더 작은 유전자 가위 - 인체에 직접 투여하는 유전자 치료제를 개발할 때 많은 경우 바이러스를 전달체로 이용하여 전달하게 됩니다. 이럴 경우 전달하려는 유전자 가위의 사이즈가 전달체로 이용하려는 바이러스의 packaging limit보다 적어야 하는 제약이 생기게 된다. 툴젠은 기존 유전자 가위 보다 더 작은 Cj-Cas9을 개발하여 Nature Communications (2017)지에 발표했습니다.</p>
        `,
    },
  ]
</script>

{#each crops as post}
  <CardPlusItem {post} />
{/each}
