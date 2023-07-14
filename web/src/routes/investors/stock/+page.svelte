<script>
import Section from "../../../components/Section.svelte"
import Table from "../../../components/Table.svelte"
import { onMount } from "svelte";
import * as d3 from "d3";
    import LineChart from "../../../components/lineChart.svelte"
    import Alert from "../../../components/Alert.svelte"
</script>

<Section>
    <div class="grid gap-[1.5rem]">
        <div class="flex gap-4 items-center">
            <h3 class="flex-auto">주요시세</h3>
        </div>
        <Table data={
            [
            ["현재가", "고가", "저가", "{+/-}", "%"],
            ["1,000", "1,000", "1,000", "1,000", "1,000"]
            ]
            }/>
            <div class="flex gap-2 items-center">
                <button class="square navy">주가 그래프</button>
                <button class="square">주가 그래프</button>
                <button class="square">주가 그래프</button>
                <button class="square">주가 그래프</button>
            </div>
            <div class="flex gap-2 items-center">
                <button class="fill">1일</button>
                <button>1일</button>
                <button>1일</button>
                <button>1일</button>
                <button>1일</button>
            </div>
            </div>
            <LineChart/>
            </Section>
<Alert>
    차트화면은 개발 진행중입니다. 빠른 시일내에 업데이트 드리겠습니다.
</Alert>