// from https://github.com/bpmn-miwg/bpmn-miwg-test-suite/blob/4178270d96046fc8a5763f6e4357df2728a21edb/Reference/C.2.0.bpmn
function getC_2_0_BpmnDiagram() {
    return `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<semantic:definitions
    xmlns:semantic="http://www.omg.org/spec/BPMN/20100524/MODEL"
    xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
    xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
    xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns="http://www.trisotech.com/definitions/_1aa4e08d-219c-418c-8aed-5ddf4cd45a41" id="_1aa4e08d-219c-418c-8aed-5ddf4cd45a41" exporter="BPMN 2.0 Web Modeler" exporterVersion="4.2.3" name="C.2.0" targetNamespace="http://www.trisotech.com/definitions/_1aa4e08d-219c-418c-8aed-5ddf4cd45a41" expressionLanguage="http://www.w3.org/1999/XPath" typeLanguage="http://www.w3.org/2001/XMLSchema">
    <semantic:message id="Message_1404332496319"/>
    <semantic:message id="Message_1404332496320"/>
    <semantic:message id="Message_1404332496321"/>
    <semantic:message id="Message_1404332496322"/>
    <semantic:message id="Message_1404332496323"/>
    <semantic:collaboration id="C1404332496310">
        <semantic:participant id="__bb6766c5-51e3-4f04-aedc-6c9e4afe0582" name="Carrier" processRef="WFP-Page_1-2"/>
        <semantic:participant id="__3cf88d6c-e5e4-489e-bc73-e2a18be946bf" name="Credit Card Company" processRef="WFP-Page_1-1"/>
        <semantic:participant id="__6f70606b-6781-4f26-b207-5bfff80115d8" name="Customer" processRef="WFP-Page_1-3"/>
        <semantic:participant id="__a42178ea-f777-4c5b-a0a1-c4014aee6431" name="Amazon" processRef="WFP-Page_1-4"/>
        <semantic:messageFlow id="__13e0b8fd-91fe-4bbc-87ae-5ad657f6ef99" messageRef="Message_1404332496322" sourceRef="__f867d5f7-db1e-4015-9856-c53bc9cb4b51" targetRef="_95a2fb99-bb98-4d26-b5ec-3dae3a32fd79"/>
        <semantic:messageFlow id="__5cdd91dd-32f6-4102-b475-bd6c7992f509" messageRef="Message_1404332496323" sourceRef="__c1a19847-8b3e-42db-a95d-9f21cffc50a3" targetRef="__e6a9dd54-6cb0-4713-8b77-e659f2658e40"/>
        <semantic:messageFlow id="__789952b8-abba-4f3f-81cd-24cbb4d0d615" messageRef="Message_1404332496321" sourceRef="_f35ee29d-018c-47e2-afeb-eebc2e25925e" targetRef="__fd16081c-ecf9-4e0f-857f-f3404a7ee784"/>
        <semantic:messageFlow id="__86b33cf0-1b17-437f-a7cf-510e0766561f" name="Send Credit Card Information" messageRef="Message_1404332496319" sourceRef="_2f24e6da-b44f-4e30-8d85-fd35fd56e209" targetRef="__0ef615c7-5456-45c8-9cfb-f1fe30c44436"/>
        <semantic:messageFlow id="__0c171c64-b342-4f84-8020-a63b6a5b296d" messageRef="Message_1404332496320" sourceRef="__4011aa2d-a7a9-4e1a-9f16-8a662d138bd4" targetRef="_2f24e6da-b44f-4e30-8d85-fd35fd56e209"/>
    </semantic:collaboration>
    <semantic:process isExecutable="false" id="WFP-Page_1-1">
        <semantic:task id="__a7183fc9-402a-418c-bf2a-3b1927d3798d" name="Take Payment" startQuantity="1" completionQuantity="1" isForCompensation="false">
            <semantic:incoming>__f3f918b3-abee-4e59-8131-212d0d86b056</semantic:incoming>
            <semantic:outgoing>__47cf5284-b9ff-4136-93fd-f0f32b87810f</semantic:outgoing>
        </semantic:task>
        <semantic:sequenceFlow id="__47cf5284-b9ff-4136-93fd-f0f32b87810f" sourceRef="__a7183fc9-402a-418c-bf2a-3b1927d3798d" targetRef="__4011aa2d-a7a9-4e1a-9f16-8a662d138bd4"/>
        <semantic:sequenceFlow id="__f3f918b3-abee-4e59-8131-212d0d86b056" sourceRef="__0ef615c7-5456-45c8-9cfb-f1fe30c44436" targetRef="__a7183fc9-402a-418c-bf2a-3b1927d3798d"/>
        <semantic:startEvent id="__0ef615c7-5456-45c8-9cfb-f1fe30c44436" name="Receive Credit Card Information" isInterrupting="true">
            <semantic:outgoing>__f3f918b3-abee-4e59-8131-212d0d86b056</semantic:outgoing>
            <semantic:messageEventDefinition messageRef="Message_1404332496319"/>
        </semantic:startEvent>
        <semantic:endEvent id="__4011aa2d-a7a9-4e1a-9f16-8a662d138bd4" name="Send Result">
            <semantic:incoming>__47cf5284-b9ff-4136-93fd-f0f32b87810f</semantic:incoming>
            <semantic:messageEventDefinition messageRef="Message_1404332496320"/>
        </semantic:endEvent>
    </semantic:process>
    <semantic:process isExecutable="false" id="WFP-Page_1-2">
        <semantic:task id="__f867d5f7-db1e-4015-9856-c53bc9cb4b51" name="Deliver Items" startQuantity="1" completionQuantity="1" isForCompensation="false">
            <semantic:incoming>__36fbe220-08cc-45e8-847b-3f55002979c2</semantic:incoming>
            <semantic:outgoing>__b355021c-ac23-48bf-9d1a-45c32565ba39</semantic:outgoing>
        </semantic:task>
        <semantic:sequenceFlow id="__b355021c-ac23-48bf-9d1a-45c32565ba39" sourceRef="__f867d5f7-db1e-4015-9856-c53bc9cb4b51" targetRef="__6c41ae4a-64fd-40f9-a764-059b26ef8ebf"/>
        <semantic:sequenceFlow id="__36fbe220-08cc-45e8-847b-3f55002979c2" sourceRef="__a9de74be-ce4b-4d59-bafd-cf6f61f48867" targetRef="__f867d5f7-db1e-4015-9856-c53bc9cb4b51"/>
        <semantic:task id="__a9de74be-ce4b-4d59-bafd-cf6f61f48867" name="Load Truck" startQuantity="1" completionQuantity="1" isForCompensation="false">
            <semantic:incoming>__474f19b8-f608-4d20-a49e-907485a789c5</semantic:incoming>
            <semantic:outgoing>__36fbe220-08cc-45e8-847b-3f55002979c2</semantic:outgoing>
        </semantic:task>
        <semantic:sequenceFlow id="__474f19b8-f608-4d20-a49e-907485a789c5" sourceRef="__e6a9dd54-6cb0-4713-8b77-e659f2658e40" targetRef="__a9de74be-ce4b-4d59-bafd-cf6f61f48867"/>
        <semantic:endEvent id="__6c41ae4a-64fd-40f9-a764-059b26ef8ebf">
            <semantic:incoming>__b355021c-ac23-48bf-9d1a-45c32565ba39</semantic:incoming>
        </semantic:endEvent>
        <semantic:startEvent id="__e6a9dd54-6cb0-4713-8b77-e659f2658e40" name="Pick items" isInterrupting="true">
            <semantic:outgoing>__474f19b8-f608-4d20-a49e-907485a789c5</semantic:outgoing>
            <semantic:messageEventDefinition messageRef="Message_1404332496323"/>
        </semantic:startEvent>
    </semantic:process>
    <semantic:process isExecutable="false" id="WFP-Page_1-3">
        <semantic:startEvent id="__f5b8cb41-0574-4c29-aaaa-84ecce589f84">
            <semantic:outgoing>__6fd770bc-8f12-4927-96cd-e3cc53d862d3</semantic:outgoing>
        </semantic:startEvent>
        <semantic:sequenceFlow id="__6fd770bc-8f12-4927-96cd-e3cc53d862d3" sourceRef="__f5b8cb41-0574-4c29-aaaa-84ecce589f84" targetRef="__f61e9ae0-855f-4ce6-9e3a-4b4f5c7dd0b8"/>
        <semantic:task id="__be386700-06c2-4a29-b861-c516940667fe" name="Add Item to Cart" startQuantity="1" completionQuantity="1" isForCompensation="false">
            <semantic:incoming>__e8a6634d-4c67-4ec3-b8cf-18bf3987c281</semantic:incoming>
            <semantic:outgoing>__82227f00-3d5e-446e-a2e7-50b907ed7c8c</semantic:outgoing>
        </semantic:task>
        <semantic:sequenceFlow id="__82227f00-3d5e-446e-a2e7-50b907ed7c8c" sourceRef="__be386700-06c2-4a29-b861-c516940667fe" targetRef="__509f09eb-5518-4995-b98b-db3cf3f8ea00"/>
        <semantic:sequenceFlow id="__e8a6634d-4c67-4ec3-b8cf-18bf3987c281" sourceRef="__f61e9ae0-855f-4ce6-9e3a-4b4f5c7dd0b8" targetRef="__be386700-06c2-4a29-b861-c516940667fe"/>
        <semantic:subProcess id="__5ffa1675-9ad7-46f8-b19a-85cd5878496f" name="Checkout" startQuantity="1" completionQuantity="1" isForCompensation="false" triggeredByEvent="false">
            <semantic:incoming>__a12a7547-373d-47ec-890d-af5c177203ee</semantic:incoming>
            <semantic:outgoing>__5d3be9f3-3f7a-4778-89e5-1bf4951472c2</semantic:outgoing>
            <semantic:startEvent id="__a1c27e25-4aa2-43dc-8a20-b713e8393d7f">
                <semantic:outgoing>__00bc466e-cf1f-473c-aa39-c78bba5cef82</semantic:outgoing>
            </semantic:startEvent>
            <semantic:sequenceFlow id="__00bc466e-cf1f-473c-aa39-c78bba5cef82" sourceRef="__a1c27e25-4aa2-43dc-8a20-b713e8393d7f" targetRef="_2f24e6da-b44f-4e30-8d85-fd35fd56e209"/>
            <semantic:task id="_2f24e6da-b44f-4e30-8d85-fd35fd56e209" name="Pay Order" startQuantity="1" completionQuantity="1" isForCompensation="false">
                <semantic:incoming>__00bc466e-cf1f-473c-aa39-c78bba5cef82</semantic:incoming>
                <semantic:incoming>_63cf98c9-d0b1-4595-a4f2-9589439b311c</semantic:incoming>
                <semantic:outgoing>_520aac43-77a5-40e8-84a4-ec51e17ad9b2</semantic:outgoing>
            </semantic:task>
            <semantic:sequenceFlow id="_520aac43-77a5-40e8-84a4-ec51e17ad9b2" sourceRef="_2f24e6da-b44f-4e30-8d85-fd35fd56e209" targetRef="_bb4a73bd-2291-4494-8677-5560d4842f79"/>
            <semantic:sequenceFlow id="_63cf98c9-d0b1-4595-a4f2-9589439b311c" name="Yes" sourceRef="_29a5e7c6-e54e-4c61-ba35-59ae446a3462" targetRef="_2f24e6da-b44f-4e30-8d85-fd35fd56e209"/>
            <semantic:exclusiveGateway id="_29a5e7c6-e54e-4c61-ba35-59ae446a3462" name="Retry?" gatewayDirection="Unspecified">
                <semantic:incoming>_bfa5c7b2-f5d2-4487-a307-b2ea662bd059</semantic:incoming>
                <semantic:outgoing>_ad0872cc-e2a9-4c44-98c6-c64e0638f37e</semantic:outgoing>
                <semantic:outgoing>_63cf98c9-d0b1-4595-a4f2-9589439b311c</semantic:outgoing>
            </semantic:exclusiveGateway>
            <semantic:sequenceFlow id="_ad0872cc-e2a9-4c44-98c6-c64e0638f37e" name="No" sourceRef="_29a5e7c6-e54e-4c61-ba35-59ae446a3462" targetRef="_7ea6639e-e773-4236-94bf-78f149188c30"/>
            <semantic:sequenceFlow id="_bfa5c7b2-f5d2-4487-a307-b2ea662bd059" name="No" sourceRef="_bb4a73bd-2291-4494-8677-5560d4842f79" targetRef="_29a5e7c6-e54e-4c61-ba35-59ae446a3462"/>
            <semantic:exclusiveGateway id="_bb4a73bd-2291-4494-8677-5560d4842f79" name="Payment accepted?" gatewayDirection="Unspecified">
                <semantic:incoming>_520aac43-77a5-40e8-84a4-ec51e17ad9b2</semantic:incoming>
                <semantic:outgoing>_bfa5c7b2-f5d2-4487-a307-b2ea662bd059</semantic:outgoing>
                <semantic:outgoing>_50edb87c-9e46-48b1-a311-ef00e6e431e8</semantic:outgoing>
            </semantic:exclusiveGateway>
            <semantic:sequenceFlow id="_50edb87c-9e46-48b1-a311-ef00e6e431e8" name="Yes" sourceRef="_bb4a73bd-2291-4494-8677-5560d4842f79" targetRef="_f35ee29d-018c-47e2-afeb-eebc2e25925e"/>
            <semantic:endEvent id="_7ea6639e-e773-4236-94bf-78f149188c30">
                <semantic:incoming>_ad0872cc-e2a9-4c44-98c6-c64e0638f37e</semantic:incoming>
                <semantic:errorEventDefinition/>
            </semantic:endEvent>
            <semantic:intermediateThrowEvent id="_f35ee29d-018c-47e2-afeb-eebc2e25925e" name="Send Order">
                <semantic:incoming>_50edb87c-9e46-48b1-a311-ef00e6e431e8</semantic:incoming>
                <semantic:outgoing>_30c47018-b9e8-4d09-81e2-2b592f75a5cf</semantic:outgoing>
                <semantic:messageEventDefinition messageRef="Message_1404332496321"/>
            </semantic:intermediateThrowEvent>
            <semantic:sequenceFlow id="_30c47018-b9e8-4d09-81e2-2b592f75a5cf" sourceRef="_f35ee29d-018c-47e2-afeb-eebc2e25925e" targetRef="_df393d97-f22e-4442-95be-918b8fdd4c3c"/>
            <semantic:endEvent id="_df393d97-f22e-4442-95be-918b8fdd4c3c">
                <semantic:incoming>_30c47018-b9e8-4d09-81e2-2b592f75a5cf</semantic:incoming>
            </semantic:endEvent>
        </semantic:subProcess>
        <semantic:sequenceFlow id="__a12a7547-373d-47ec-890d-af5c177203ee" name="Yes" sourceRef="__509f09eb-5518-4995-b98b-db3cf3f8ea00" targetRef="__5ffa1675-9ad7-46f8-b19a-85cd5878496f"/>
        <semantic:sequenceFlow id="__5d3be9f3-3f7a-4778-89e5-1bf4951472c2" sourceRef="__5ffa1675-9ad7-46f8-b19a-85cd5878496f" targetRef="_95a2fb99-bb98-4d26-b5ec-3dae3a32fd79"/>
        <semantic:boundaryEvent id="__cec149db-adae-4b69-8ea4-b866f2eef248" attachedToRef="__5ffa1675-9ad7-46f8-b19a-85cd5878496f">
            <semantic:outgoing>__dc6ef6c1-9c24-48ae-800f-2f9fb76d7ce6</semantic:outgoing>
            <semantic:errorEventDefinition/>
        </semantic:boundaryEvent>
        <semantic:sequenceFlow id="__dc6ef6c1-9c24-48ae-800f-2f9fb76d7ce6" sourceRef="__cec149db-adae-4b69-8ea4-b866f2eef248" targetRef="__8f9632f2-9fdb-4e3c-8b10-6a05091de766"/>
        <semantic:endEvent id="__e03c9539-b011-46b1-a381-0eee5f0521b8">
            <semantic:incoming>__92bd8ebf-e3b1-4270-96bb-2f6d6978c64a</semantic:incoming>
        </semantic:endEvent>
        <semantic:sequenceFlow id="__92bd8ebf-e3b1-4270-96bb-2f6d6978c64a" sourceRef="_95a2fb99-bb98-4d26-b5ec-3dae3a32fd79" targetRef="__e03c9539-b011-46b1-a381-0eee5f0521b8"/>
        <semantic:task id="_95a2fb99-bb98-4d26-b5ec-3dae3a32fd79" name="Receive items" startQuantity="1" completionQuantity="1" isForCompensation="false">
            <semantic:incoming>__5d3be9f3-3f7a-4778-89e5-1bf4951472c2</semantic:incoming>
            <semantic:outgoing>__92bd8ebf-e3b1-4270-96bb-2f6d6978c64a</semantic:outgoing>
        </semantic:task>
        <semantic:exclusiveGateway id="__509f09eb-5518-4995-b98b-db3cf3f8ea00" name="Done Shopping?" gatewayDirection="Unspecified">
            <semantic:incoming>__82227f00-3d5e-446e-a2e7-50b907ed7c8c</semantic:incoming>
            <semantic:outgoing>__ffc1486a-8a32-490a-8835-d14cc5ab0a97</semantic:outgoing>
            <semantic:outgoing>__a12a7547-373d-47ec-890d-af5c177203ee</semantic:outgoing>
        </semantic:exclusiveGateway>
        <semantic:sequenceFlow id="__ffc1486a-8a32-490a-8835-d14cc5ab0a97" name="No" sourceRef="__509f09eb-5518-4995-b98b-db3cf3f8ea00" targetRef="__f61e9ae0-855f-4ce6-9e3a-4b4f5c7dd0b8"/>
        <semantic:task id="__f61e9ae0-855f-4ce6-9e3a-4b4f5c7dd0b8" name="Browse Products on Amazon" startQuantity="1" completionQuantity="1" isForCompensation="false">
            <semantic:incoming>__6fd770bc-8f12-4927-96cd-e3cc53d862d3</semantic:incoming>
            <semantic:incoming>__ffc1486a-8a32-490a-8835-d14cc5ab0a97</semantic:incoming>
            <semantic:outgoing>__e8a6634d-4c67-4ec3-b8cf-18bf3987c281</semantic:outgoing>
        </semantic:task>
        <semantic:endEvent id="__8f9632f2-9fdb-4e3c-8b10-6a05091de766">
            <semantic:incoming>__dc6ef6c1-9c24-48ae-800f-2f9fb76d7ce6</semantic:incoming>
        </semantic:endEvent>
    </semantic:process>
    <semantic:process isExecutable="false" id="WFP-Page_1-4">
        <semantic:laneSet>
            <semantic:lane id="__15a180db-97af-4058-ac0a-4a31247fb797" name="Picker">
                <semantic:flowNodeRef>__fd16081c-ecf9-4e0f-857f-f3404a7ee784</semantic:flowNodeRef>
                <semantic:flowNodeRef>__f4846d41-bca9-4788-9ce2-30ff4b9d6b7b</semantic:flowNodeRef>
                <semantic:flowNodeRef>__200e3ce9-3381-4d13-8c7e-4f8790388070</semantic:flowNodeRef>
            </semantic:lane>
            <semantic:lane id="__75b31592-10d5-4d4b-993e-0df32d5977ac" name="Packager">
                <semantic:flowNodeRef>__ac1dc01c-14c2-47cf-9bc9-2b39f5fcd379</semantic:flowNodeRef>
                <semantic:flowNodeRef>__c1a19847-8b3e-42db-a95d-9f21cffc50a3</semantic:flowNodeRef>
                <semantic:flowNodeRef>__5a9abc77-7371-4213-bede-4056f9cb7808</semantic:flowNodeRef>
            </semantic:lane>
        </semantic:laneSet>
        <semantic:startEvent id="__fd16081c-ecf9-4e0f-857f-f3404a7ee784" name="Receive Order" isInterrupting="true">
            <semantic:outgoing>__4ad47bad-fac8-4269-9a9b-3f68613c7fc8</semantic:outgoing>
            <semantic:messageEventDefinition messageRef="Message_1404332496321"/>
        </semantic:startEvent>
        <semantic:sequenceFlow id="__4ad47bad-fac8-4269-9a9b-3f68613c7fc8" sourceRef="__fd16081c-ecf9-4e0f-857f-f3404a7ee784" targetRef="__f4846d41-bca9-4788-9ce2-30ff4b9d6b7b"/>
        <semantic:task id="__f4846d41-bca9-4788-9ce2-30ff4b9d6b7b" name="Pick items" startQuantity="1" completionQuantity="1" isForCompensation="false">
            <semantic:incoming>__4ad47bad-fac8-4269-9a9b-3f68613c7fc8</semantic:incoming>
            <semantic:outgoing>__ce6b77ab-3b91-4ca0-b6c2-48980892e47e</semantic:outgoing>
        </semantic:task>
        <semantic:sequenceFlow id="__ce6b77ab-3b91-4ca0-b6c2-48980892e47e" sourceRef="__f4846d41-bca9-4788-9ce2-30ff4b9d6b7b" targetRef="__200e3ce9-3381-4d13-8c7e-4f8790388070"/>
        <semantic:task id="__200e3ce9-3381-4d13-8c7e-4f8790388070" name="Place in bin" startQuantity="1" completionQuantity="1" isForCompensation="false">
            <semantic:incoming>__ce6b77ab-3b91-4ca0-b6c2-48980892e47e</semantic:incoming>
            <semantic:outgoing>__04700d0b-5231-46f6-ae74-698ba3864a60</semantic:outgoing>
        </semantic:task>
        <semantic:sequenceFlow id="__04700d0b-5231-46f6-ae74-698ba3864a60" sourceRef="__200e3ce9-3381-4d13-8c7e-4f8790388070" targetRef="__ac1dc01c-14c2-47cf-9bc9-2b39f5fcd379"/>
        <semantic:task id="__ac1dc01c-14c2-47cf-9bc9-2b39f5fcd379" name="Receive and Package&#10;items" startQuantity="1" completionQuantity="1" isForCompensation="false">
            <semantic:incoming>__04700d0b-5231-46f6-ae74-698ba3864a60</semantic:incoming>
            <semantic:outgoing>__c18acafe-53f8-4e7d-a6df-d12b60b5ae53</semantic:outgoing>
        </semantic:task>
        <semantic:sequenceFlow id="__c18acafe-53f8-4e7d-a6df-d12b60b5ae53" sourceRef="__ac1dc01c-14c2-47cf-9bc9-2b39f5fcd379" targetRef="__c1a19847-8b3e-42db-a95d-9f21cffc50a3"/>
        <semantic:task id="__c1a19847-8b3e-42db-a95d-9f21cffc50a3" name="Send to carrier dock" startQuantity="1" completionQuantity="1" isForCompensation="false">
            <semantic:incoming>__c18acafe-53f8-4e7d-a6df-d12b60b5ae53</semantic:incoming>
            <semantic:outgoing>__18abb53a-b7c0-414e-9428-1d1a14f2e96b</semantic:outgoing>
        </semantic:task>
        <semantic:sequenceFlow id="__18abb53a-b7c0-414e-9428-1d1a14f2e96b" sourceRef="__c1a19847-8b3e-42db-a95d-9f21cffc50a3" targetRef="__5a9abc77-7371-4213-bede-4056f9cb7808"/>
        <semantic:endEvent id="__5a9abc77-7371-4213-bede-4056f9cb7808">
            <semantic:incoming>__18abb53a-b7c0-414e-9428-1d1a14f2e96b</semantic:incoming>
        </semantic:endEvent>
    </semantic:process>
    <bpmndi:BPMNDiagram id="Page_1" name="Buying at Amazon Collaboration" documentation="">
        <bpmndi:BPMNPlane bpmnElement="C1404332496310" id="Page_1_plane">
            <bpmndi:BPMNShape id="_d156d69d-91b2-4d6e-a25f-034244e746f4" bpmnElement="__bb6766c5-51e3-4f04-aedc-6c9e4afe0582" isHorizontal="true">
                <dc:Bounds x="1102" y="639" width="586" height="150"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="34.8125" width="12" x="1106.5" y="696.09375"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_9e3d896e-b494-4c86-93fc-044cefddb34e" bpmnElement="__f867d5f7-db1e-4015-9856-c53bc9cb4b51">
                <dc:Bounds x="1474" y="683" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="68.46875" x="1487.765625" y="714.5"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_6b75d079-357e-49bf-a361-72b295e395a4" bpmnElement="__b355021c-ac23-48bf-9d1a-45c32565ba39">
                <di:waypoint x="1571" y="721"/>
                <di:waypoint x="1619" y="721"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="_fe8ba97f-4313-42a0-b728-fe8dbc65b96c" bpmnElement="__36fbe220-08cc-45e8-847b-3f55002979c2">
                <di:waypoint x="1356" y="721"/>
                <di:waypoint x="1475" y="721"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_f840ac48-7fab-46ca-82be-7d85908b23de" bpmnElement="__a9de74be-ce4b-4d59-bafd-cf6f61f48867">
                <dc:Bounds x="1259" y="683" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="58.375" x="1277.8125" y="714.5"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_1dbe0923-aa28-4908-84e3-9eccef9db46c" bpmnElement="__474f19b8-f608-4d20-a49e-907485a789c5">
                <di:waypoint x="1193" y="721"/>
                <di:waypoint x="1260" y="721"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_1803f4c7-e215-4029-8ff6-bbf2daf31109" bpmnElement="__6c41ae4a-64fd-40f9-a764-059b26ef8ebf">
                <dc:Bounds x="1619" y="703" width="36" height="36"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_8b49d284-965c-446a-a216-ebccd0691d22" bpmnElement="__e6a9dd54-6cb0-4713-8b77-e659f2658e40">
                <dc:Bounds x="1161" y="705" width="32" height="32"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="52.75" x="1149.625" y="687.5"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_841b32fb-4579-4ce5-9d5d-57b3cbbaec14" bpmnElement="__3cf88d6c-e5e4-489e-bc73-e2a18be946bf" isHorizontal="true">
                <dc:Bounds x="785" y="63" width="382" height="132"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="113.375" width="12" x="790" y="72.3125"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_76535f92-31eb-4b60-8452-3eedd40ab184" bpmnElement="__a7183fc9-402a-418c-bf2a-3b1927d3798d">
                <dc:Bounds x="931" y="91" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="76.34375" x="940.453125" y="123"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_8fb6b2d9-a592-4cc3-b960-70c230e25059" bpmnElement="__47cf5284-b9ff-4136-93fd-f0f32b87810f">
                <di:waypoint x="1027" y="130"/>
                <di:waypoint x="1087" y="129"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="_ab4cd126-18c0-458a-a5ba-cc1d02bd6941" bpmnElement="__f3f918b3-abee-4e59-8131-212d0d86b056">
                <di:waypoint x="880" y="129"/>
                <di:waypoint x="931" y="130"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_5b5df749-2e58-4dd2-aa92-90420c83b3a2" bpmnElement="__0ef615c7-5456-45c8-9cfb-f1fe30c44436">
                <dc:Bounds x="849" y="113" width="31" height="32"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="40" width="77.46875" x="827.703125" y="70"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_6160434e-d9c9-4cd2-a2fd-276b06de88a7" bpmnElement="__4011aa2d-a7a9-4e1a-9f16-8a662d138bd4">
                <dc:Bounds x="1087" y="111" width="35" height="36"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="26" width="32.5625" x="1087.34375" y="75"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_47d14f7b-f0f5-47ac-a2e6-08b1de420e57" bpmnElement="__6f70606b-6781-4f26-b207-5bfff80115d8" isHorizontal="true">
                <dc:Bounds x="215" y="275" width="1467" height="295"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="49.40625" width="12.015625" x="219.5" y="398.01652144128"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_5c88e114-2108-4511-ae55-585af71fbc97" bpmnElement="__f5b8cb41-0574-4c29-aaaa-84ecce589f84">
                <dc:Bounds x="288" y="378.5" width="32" height="32"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_48ee3c9b-dc2f-418d-94b0-30f1634d1e9e" bpmnElement="__6fd770bc-8f12-4927-96cd-e3cc53d862d3">
                <di:waypoint x="320" y="394.5"/>
                <di:waypoint x="364" y="395.5"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_b211f152-3674-4d56-8d38-6c254ec685cd" bpmnElement="__be386700-06c2-4a29-b861-c516940667fe">
                <dc:Bounds x="521.5" y="356.5" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="86.4375" x="526.28125" y="388.75"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_6074abbe-7294-4260-9553-f3f2ec74b231" bpmnElement="__82227f00-3d5e-446e-a2e7-50b907ed7c8c">
                <di:waypoint x="618.5" y="395.5"/>
                <di:waypoint x="685" y="395"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="_3470f558-68b6-4a09-bddf-5c9af1f6690e" bpmnElement="__e8a6634d-4c67-4ec3-b8cf-18bf3987c281">
                <di:waypoint x="460" y="395.5"/>
                <di:waypoint x="522.5" y="395.5"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_8f85b3d6-6223-446d-b4c5-2e98ae9b7ec9" bpmnElement="__5ffa1675-9ad7-46f8-b19a-85cd5878496f" isExpanded="true">
                <dc:Bounds x="828" y="290" width="547" height="209"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12.015625" width="48.28125" x="836" y="297.5679626464844"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_74f66f18-53f0-44ce-9bac-8a7fd2016ac8" bpmnElement="__a12a7547-373d-47ec-890d-af5c177203ee">
                <di:waypoint x="727" y="395"/>
                <di:waypoint x="829" y="395"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="19.09375" x="767.953125" y="400"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="_4ca78b71-fa50-4ff1-a162-67359576eb8f" bpmnElement="__5d3be9f3-3f7a-4778-89e5-1bf4951472c2">
                <di:waypoint x="1376" y="395"/>
                <di:waypoint x="1477" y="394.5"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_2c370da6-1a92-4fae-9882-fcf3f3092c91" bpmnElement="__a1c27e25-4aa2-43dc-8a20-b713e8393d7f">
                <dc:Bounds x="849" y="379" width="32" height="32"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_596917da-c2c9-417f-a68c-14ab21616fd5" bpmnElement="__00bc466e-cf1f-473c-aa39-c78bba5cef82">
                <di:waypoint x="881" y="395"/>
                <di:waypoint x="930" y="395"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_45e1c9ba-8c28-47f1-869d-6eb35b54d28f" bpmnElement="_2f24e6da-b44f-4e30-8d85-fd35fd56e209">
                <dc:Bounds x="930" y="357" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="52.75" x="951.25" y="388.5"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_20bf2105-3693-4753-8076-ab2a637902a7" bpmnElement="_520aac43-77a5-40e8-84a4-ec51e17ad9b2">
                <di:waypoint x="1026" y="396"/>
                <di:waypoint x="1050" y="395"/>
                <di:waypoint x="1050" y="346"/>
                <di:waypoint x="1072" y="346"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="_61c970c9-a769-4a9c-9794-46e823c4816e" bpmnElement="_63cf98c9-d0b1-4595-a4f2-9589439b311c">
                <di:waypoint x="1072" y="459"/>
                <di:waypoint x="978" y="458"/>
                <di:waypoint x="978" y="433"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="19.09375" x="968.078125" y="463"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_7bcd012d-110a-49d6-a428-f8eaa7ba8859" bpmnElement="_29a5e7c6-e54e-4c61-ba35-59ae446a3462" isMarkerVisible="true">
                <dc:Bounds x="1071" y="437" width="42" height="42"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="33.6875" x="1075.322998046875" y="485"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_8b312c63-944c-4f8f-ab5b-fb94ddc0ed46" bpmnElement="_ad0872cc-e2a9-4c44-98c6-c64e0638f37e">
                <di:waypoint x="1114" y="459"/>
                <di:waypoint x="1165" y="458"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12.015625" width="14.609375" x="1132.3619889139934" y="463.1942490435134"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="_0f61322d-baeb-453d-bbe3-85e2d09b55d9" bpmnElement="_bfa5c7b2-f5d2-4487-a307-b2ea662bd059">
                <di:waypoint x="1093" y="367"/>
                <di:waypoint x="1093" y="438"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="14.609375" x="1084.86200234625" y="407.0625"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_290ffce5-3fa6-4fd1-84fb-2ec24a0b3a97" bpmnElement="_bb4a73bd-2291-4494-8677-5560d4842f79" isMarkerVisible="true">
                <dc:Bounds x="1072" y="325" width="41" height="41"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12.015625" width="105.5" x="1037.416748046875" y="309.0178571428571"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_62e2c7a0-693e-4203-9daf-12a8d5e10795" bpmnElement="_50edb87c-9e46-48b1-a311-ef00e6e431e8">
                <di:waypoint x="1113" y="346"/>
                <di:waypoint x="1204" y="346"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="19.09375" x="1149.43231484625" y="350.5"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_d8692549-20fe-4b24-8f94-f6917e5f3465" bpmnElement="_7ea6639e-e773-4236-94bf-78f149188c30">
                <dc:Bounds x="1165" y="440" width="36" height="36"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_d46c1239-177f-4c83-98c3-1448831c562f" bpmnElement="_f35ee29d-018c-47e2-afeb-eebc2e25925e">
                <dc:Bounds x="1204" y="328" width="36" height="36"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="60.625" x="1191.854248046875" y="369.5"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_9729f22a-c0f0-41d0-a7f0-5e18fe0751c4" bpmnElement="_30c47018-b9e8-4d09-81e2-2b592f75a5cf">
                <di:waypoint x="1240" y="346"/>
                <di:waypoint x="1284" y="346"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_3220bd86-e721-4d9e-9f12-2f7293617842" bpmnElement="_df393d97-f22e-4442-95be-918b8fdd4c3c">
                <dc:Bounds x="1284" y="328" width="36" height="35"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_6f3fa34a-6ee9-4490-9ec3-50548e45d2cf" bpmnElement="__cec149db-adae-4b69-8ea4-b866f2eef248">
                <dc:Bounds x="1335" y="481" width="35" height="36"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_bd7f52ee-93f6-4736-a13f-d1acdb1630d4" bpmnElement="__dc6ef6c1-9c24-48ae-800f-2f9fb76d7ce6">
                <di:waypoint x="1352" y="517"/>
                <di:waypoint x="1352" y="546"/>
                <di:waypoint x="1431" y="546"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_b5a71451-bb2d-45fb-b075-0b4981303b99" bpmnElement="__e03c9539-b011-46b1-a381-0eee5f0521b8">
                <dc:Bounds x="1614" y="376.5" width="36" height="36"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_07140a2c-1e99-4404-8313-93a372c2d6ae" bpmnElement="__92bd8ebf-e3b1-4270-96bb-2f6d6978c64a">
                <di:waypoint x="1573" y="395.5"/>
                <di:waypoint x="1614" y="394.5"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_beca97c9-7c08-4f6a-861e-62959c6bf196" bpmnElement="_95a2fb99-bb98-4d26-b5ec-3dae3a32fd79">
                <dc:Bounds x="1476" y="356.5" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="74.09375" x="1486.953125" y="388.5"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_77042d9f-425c-4c6a-b1ed-3a1f7aad33df" bpmnElement="__509f09eb-5518-4995-b98b-db3cf3f8ea00" isMarkerVisible="true">
                <dc:Bounds x="685" y="374" width="42" height="41"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12.015625" width="89.8125" x="660.59375" y="420.709346269406"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_46f456b4-a7b4-461a-9cdc-f62ff777fb94" bpmnElement="__ffc1486a-8a32-490a-8835-d14cc5ab0a97">
                <di:waypoint x="706" y="374"/>
                <di:waypoint x="706" y="315.5"/>
                <di:waypoint x="412" y="315.5"/>
                <di:waypoint x="412" y="357.5"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="14.59375" x="557.703125" y="320.5"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_686fd5b2-cf88-40ac-80e1-18c4edc862c6" bpmnElement="__f61e9ae0-855f-4ce6-9e3a-4b4f5c7dd0b8">
                <dc:Bounds x="363" y="356.5" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="26" width="85.3125" x="368.34375" y="381.75"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_98d47a62-e02d-4cef-b598-468e0f5d6651" bpmnElement="__8f9632f2-9fdb-4e3c-8b10-6a05091de766">
                <dc:Bounds x="1431" y="527" width="36" height="35"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_248ca90e-cd8a-4bcd-8389-846dd2f35be1" bpmnElement="__a42178ea-f777-4c5b-a0a1-c4014aee6431" isHorizontal="true">
                <dc:Bounds x="214" y="633" width="776" height="254"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="43.78125" width="12" x="218.5" y="738.109375"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_9bb7ab63-1897-4f65-b55d-e67b9f519e88" bpmnElement="__15a180db-97af-4058-ac0a-4a31247fb797" isHorizontal="true">
                <dc:Bounds x="244" y="633" width="746" height="135"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="31.4375" width="12" x="248.5" y="684.78125"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_a7b7ffc8-f701-4c59-a1d4-a9d5bf95ef5c" bpmnElement="__fd16081c-ecf9-4e0f-857f-f3404a7ee784">
                <dc:Bounds x="288" y="675" width="32" height="32"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="75.21875" x="266.390625" y="716.59375"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_f1b8e3b1-fd7e-4fdb-98e0-aa35fa62e160" bpmnElement="__4ad47bad-fac8-4269-9a9b-3f68613c7fc8">
                <di:waypoint x="320" y="691"/>
                <di:waypoint x="368" y="692"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_1d93dd43-7d59-4efc-b288-6fcf57e00b26" bpmnElement="__f4846d41-bca9-4788-9ce2-30ff4b9d6b7b">
                <dc:Bounds x="368" y="653" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="52.75" x="389.125" y="685"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_60ed1a2c-fab7-4617-881f-67733c0bc41b" bpmnElement="__ce6b77ab-3b91-4ca0-b6c2-48980892e47e">
                <di:waypoint x="464" y="692"/>
                <di:waypoint x="500" y="692"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_99312dc9-2800-4107-88ea-405a3e42e20e" bpmnElement="__200e3ce9-3381-4d13-8c7e-4f8790388070">
                <dc:Bounds x="500" y="653" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="12" width="64" x="515.5" y="685"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_5a056820-21ec-484a-ac1b-9caf84481e8a" bpmnElement="__04700d0b-5231-46f6-ae74-698ba3864a60">
                <di:waypoint x="596" y="692"/>
                <di:waypoint x="618.5" y="692"/>
                <di:waypoint x="618.5" y="828"/>
                <di:waypoint x="641" y="828"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_ef978cb8-c159-4f43-831a-9a3aba990372" bpmnElement="__75b31592-10d5-4d4b-993e-0df32d5977ac" isHorizontal="true">
                <dc:Bounds x="244" y="768" width="746" height="119"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="48.28125" width="12" x="248.5" y="803.359375"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="_497efc7e-04af-4725-bc36-fc85925783a4" bpmnElement="__ac1dc01c-14c2-47cf-9bc9-2b39f5fcd379">
                <dc:Bounds x="641" y="790" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="40" width="66.21875" x="655.390625" y="807.5"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_0bbeed98-39d7-44ef-8b9d-f7600fb8ac20" bpmnElement="__c18acafe-53f8-4e7d-a6df-d12b60b5ae53">
                <di:waypoint x="737" y="828"/>
                <di:waypoint x="784" y="828"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_8707335d-fc8f-4e32-a2b7-3ecd2ac8d86c" bpmnElement="__c1a19847-8b3e-42db-a95d-9f21cffc50a3">
                <dc:Bounds x="783" y="790" width="96" height="76"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="26" width="77.46875" x="792.265625" y="814.5"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_c71d97f8-5c20-4527-bed2-528e37dad504" bpmnElement="__18abb53a-b7c0-414e-9428-1d1a14f2e96b">
                <di:waypoint x="880" y="828"/>
                <di:waypoint x="922" y="828"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="_d286b0e6-9940-4d58-ad5d-f1f472bd3c2b" bpmnElement="__5a9abc77-7371-4213-bede-4056f9cb7808">
                <dc:Bounds x="922" y="810" width="36" height="36"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="_2fdcb9da-45a4-46c7-aab8-491d8dee9acd" bpmnElement="__13e0b8fd-91fe-4bbc-87ae-5ad657f6ef99">
                <di:waypoint x="1523" y="683"/>
                <di:waypoint x="1524" y="433.5"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="_8485f43a-fb2b-4466-b254-49452751e656" bpmnElement="__5cdd91dd-32f6-4102-b475-bd6c7992f509">
                <di:waypoint x="848" y="790"/>
                <di:waypoint x="848" y="762"/>
                <di:waypoint x="1177" y="762"/>
                <di:waypoint x="1177" y="736"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="_d16a9f5d-c29a-4114-b7c6-65b2921b6c74" bpmnElement="__789952b8-abba-4f3f-81cd-24cbb4d0d615">
                <di:waypoint x="1222" y="364"/>
                <di:waypoint x="1222" y="519.5"/>
                <di:waypoint x="304" y="519.5"/>
                <di:waypoint x="304" y="675"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="_a3b1d7c1-82fb-4b28-ad4f-c1daf17cc1c7" bpmnElement="__86b33cf0-1b17-437f-a7cf-510e0766561f">
                <di:waypoint x="949" y="357"/>
                <di:waypoint x="949" y="228"/>
                <di:waypoint x="864" y="228"/>
                <di:waypoint x="864" y="145"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1">
                    <dc:Bounds height="26" width="90.921875" x="857.0390625" y="233"/>
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="_f10d64de-2a78-421b-8a62-69bb9560958c" bpmnElement="__0c171c64-b342-4f84-8020-a63b6a5b296d">
                <di:waypoint x="1106" y="147"/>
                <di:waypoint x="1106" y="230"/>
                <di:waypoint x="1007" y="230"/>
                <di:waypoint x="1007" y="357"/>
                <bpmndi:BPMNLabel labelStyle="LSPage_1"/>
            </bpmndi:BPMNEdge>
        </bpmndi:BPMNPlane>
        <bpmndi:BPMNLabelStyle id="LSPage_1">
            <dc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11"/>
        </bpmndi:BPMNLabelStyle>
    </bpmndi:BPMNDiagram>
</semantic:definitions>`;
}
