<script>
    import Banner from "/src/components/Banner.svelte";
    import DownloadButton from "../../components/DownloadButton.svelte";
    import Section from "../../components/Section.svelte";
    import Overview from "../../components/Overview.svelte";
    import CardPlus from "../../components/CardPlus.svelte";
    import CardNews from "../../components/CardNews.svelte";
    import MobileHeaderW from "../../components/MobileHeaderW.svelte"
</script>
<MobileHeaderW/>
<Banner src="https://s3-alpha-sig.figma.com/img/ccfa/8ba2/f8710dc13167a75c7c4cc9749f255a3a?Expires=1690156800&Signature=FE7U5Ktd70aeeNOSoCQorMZjGTdY-D9G7Ol51S4C85KdV9Dtaju-JmzYhYtd23ayCY0lyACL1k0gdMOzTaGvJMsvotXjwm8NqQxFhcmzrNXZmdxtppVi8BtFdtHYZcaMByaUegm7lDJZJfVAteyMyDnHf-OXbXJrhXlKdfHyXu3Tj-JNwoVTxpQ4sHA6KFmrEKh5~IWujVVkuv8ynHfjLzRj7sY4XVVyZlL~zKCKo8LBML-J0VC371UInNAYUym9yU-q~-lDYSnmTxAMUB3pMe~W7ay6XdE5GQSGxcg0NFj-SY63SdWX7jCzovqFqfn8R4vMOJBSb3iASYPIrCTvYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
    <h1>Platform</h1>
    <p class="max-w-[650px] em:leading-7">
        유전자가위 플랫폼 고도화 및 다양한 CRISPR/Cas9 관련 플랫폼의 산업적 응용에 더욱 적합한 기능성을 갖도록 향상시키는 연구를 진행하여 유전자교정 업계를 선도합니다.
    </p>
    <div class="flex-auto"></div>
    <div>
        <DownloadButton href="/" title="PDF 다운로드"/>
    </div>
</Banner>
<Section>
    <Overview>
        <p>유전자가위 기술은 다양한 분야에 적용이 가능한 플랫폼 기술(기존 의약품에 적용하여 다수의 후보 물질을 도출할 수 있는 기반 기술)의 특징을 가지고 있습니다. 전 세계적으로 다양한 연구를 통해 유전자 가위 고도화 및 안전성 평가 측정 기술 등이 발전되고 있으며 툴젠은 우수한 플랫폼 특허 선점을 위한 연구를 진행 중입니다. 또한 이러한 플랫폼 기술을 응용하여 새로운 사업확장을 목표로 연구하고 있습니다.</p>
        <div class="grid gap-6">
            <CardPlus/>
        </div>
    </Overview>
</Section>
<Section>
    <CardNews title="Related Contents" posts={[1,1,1,1,1]}></CardNews>
</Section>