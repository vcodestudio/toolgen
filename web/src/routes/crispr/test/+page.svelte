<script>
    import Section from "../../../components/Section.svelte"

</script>
<Section>
    <div class="grid gap-[2em]">
        <div class="grid gap-2">
            <h3>저촉심사</h3>
            <p>
                미국의 저촉심사(Interference)는 미국의 특허법 개정 이전(2013년 3월 이전)에 유효했던 심사 제도로, 선발명주의 하에서 동일한 발명에 복수의 출원이 존재하는 경우 최초의 발명자에게 특허권을 부여하는 제도입니다. 반면, 선출원주의 제도 하에서는 하나의 동일한 발명에 대하여 복수의 출원이 있을 경우 그 발명을 한 시점의 선후를 문제 삼지 않고 출원한 시점의 선후만을 비교하여 먼저 특허 출원을 한 자에게 특허권을 부여합니다. 미국의 선발명주의는 툴젠의 CRISPR 원천특허가 출원된 2012년 당시 특허권 부여 요건에 대한 미국 특유의 기준이었습니다. 미국을 제외한 주요 국가에서는 특허 관련 선출원주의 제도를 운용하고 있고, 미국도 2013년 3월 이후에는 선발명주의에서 선출원주의에 의한 제도를 운용하고 있습니다.
            </p>
        </div>
        <hr/>
        <div class="grid gap-2">
            <p class="text18-700">저촉심사 절차</p>
            <p>
                저촉심사는 미국 특허심판원(Patent Trial and Appeal Board, ‘PTAB’)에서 시작되는데, PTAB의 저촉심사는 2단계 절차로 진행됩니다. 1단계(motion phase)에서는 저촉심사의 대상인 복수의 발명이 동일한지 여부 및 선출원자가 누구인지 여부를 판단합니다. 1단계에서 발명이 서로 동일하지 않다고 판단하면, PTAB은 발명이 서로 저촉되지 않는다(no interference in fact)고 결정하고 저촉심사를 종결합니다. 반면 1단계에서 발명이 서로 동일하고 선출원인(Senior party)와 후출원인(Junior party)가 누구인지 확정되면, 복수의 출원인 중 선발명자가 누구인가를 판단하는 2단계(priority phase) 절차가 진행됩니다. 2단계 절차에서는 1단계에서 후출원인으로 확정된 Junior party가 선발명자임을 주장하는 청원(motion)을 먼저 제출합니다. 이후, 선출원인으로 확정된 Senior party가 이에 대응하여 선발명을 주장합니다. PTAB은 당사자들의 주장 및 증거를 고려하여 선발명자가 누구인지 결정합니다. 
            </p>
            <p>
                PTAB의 결정에 불복하는 당사자는 연방특허법원(The Court of Appeals for the Federal Circuit, ‘CAFC’)에 항소할 수 있습니다. 그리고, 연방특허법원에 결정에 불복하는 당사자는 연방대법원에 상고할 수 있습니다.
            </p>
            <br/>
            <img class="block" src="/images/test-1.jpg" alt="...">
        </div>
        <hr/>
        <div class="flex flex-col gap-8">
            <div class="grid grid-cols-2 gap-6 m:grid-cols-1">
                <div class="flex flex-col gap-2">
                    <p class="text18-700">툴젠의 저촉심사 현황</p>
                    <p>툴젠은 브로드 연구소 그룹(‘Broad’) 및 캘리포니아 대학교 그룹(‘CVC’)과 각각 저촉심사를 진행하고 있으며, CRISPR/Cas9 시스템을 진핵세포에서 유전자 가위로 사용하는 기술에 대한 특허에 대하여 선발명여부를 다투고 있습니다.</p>
                    <p>2022년 9월말에 1단계 motion phase에 대한 PTAB의 판단이 있었고, 툴젠이 Broad 및 CVC보다 해당 기술에 대한 출원일이 더 빠른 것으로 인정받아 Senior party의 지위를 유지하고 있습니다.</p>
                </div>
                <div>
                    <img class="block" src="/images/test-2.jpg" alt="...">
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p>저촉심사에서 Junior party는 Senior party보다 먼저 발명했음을 입증해야 하는 책임을 가지기에 저촉심사에서 불리한 위치에서 시작하게 됩니다. Junior party는 증거자료를 제시하여 (비록 특허 출원은 Senior party보다 늦었지만) Senior party의 출원일 이전에 발명을 완성한 사실을 증명하여야 합니다. 이를 증명하지 못하면 Junior party는 출원인의 자격을 얻을 수 없습니다.</p>
                <p>일반적으로 먼저 발명한 발명자가 먼저 출원할 확률이 높다고 보는 것이 상식적이고, 통계적으로도 Senior party가 저촉심사에서 최초의 발명자로 인정될 확률이 높습니다 (75% 이상). 그러므로 툴젠은 Senior party로서 Broad 및 CVC와의 저촉심사에서 유리한 위치를 차지하고 있습니다.</p>
            </div>
        </div>
    </div>
</Section>