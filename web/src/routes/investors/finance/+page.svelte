<script>
import Chart from "../../../components/Chart.svelte"
import Table from "../../../components/Table.svelte"
import Section from "/src/components/Section.svelte";

let data = [{
    title: "자산총계",
    data: [
        {
            name: "2019",
            value: "29,865"
        },
        {
            name: "2020",
            value: "32,410"
        },
        {
            name: "2021",
            value: "87,673"
        },
    ]},{
    title: "부채총계",
    data: [
        {
            name: "2019",
            value: "3,096"
        },
        {
            name: "2020",
            value: "2,520"
        },
        {
            name: "2021",
            value: "3,010"
        },
    ]},{
    title: "자본총계",
    data: [
        {
            name: "2019",
            value: "29,865"
        },
        {
            name: "2020",
            value: "32,410"
        },
        {
            name: "2021",
            value: "87,673"
        },
    ]},{
    title: "매출액",
    data: [
        {
            name: "2019",
            value: "29,865"
        },
        {
            name: "2020",
            value: "32,410"
        },
        {
            name: "2021",
            value: "87,673"
        },
    ]}
    ];
</script>

<Section>
    <div class="grid grid-cols-2 gap-x-[5em] gap-y-[2.5em] phone:grid-cols-1">
        {#each data as item}
        <Chart
            title={item.title}
            data={item.data}/>
            {/each}
            </div>
            </Section>
            <Section>
                <Table
                    data={
                    [
                    ["항목",2019,2020,2021],
                    ["자산총계","29,865","32,410","33,000"],
                    ["자산총계","29,865","32,410","33,000"],
                    ["자산총계","29,865","32,410","33,000"],
                    ]
                    }/>
                    </Section>
