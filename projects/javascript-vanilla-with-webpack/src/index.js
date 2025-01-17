import { BpmnVisualization } from "bpmn-visualization";

// instantiate the BpmnVisualization, pass the container HTMLElement - present in index.html
const bpmnVisualization = new BpmnVisualization({ container: 'bpmn-container' });

// load the BPMN diagram defined above
bpmnVisualization.load(bpmnDiagram());

// Add overlay on activity
const overlay = { position: 'top-left', label: '38%' };
bpmnVisualization.bpmnElementsRegistry.addOverlays('Activity_1', overlay);

// display the bpmn-visualization version in the footer
const footer = document.querySelector("footer");
const version = bpmnVisualization.getVersion();
const versionAsString = `bpmn-visualization@${version.lib}`;
const dependenciesAsString = [...version.dependencies].map(([name, version]) => `${name}@${version}`).join('/');
footer.innerText = `${versionAsString} with ${dependenciesAsString}`;

// simple example of BPMN diagram
function bpmnDiagram() {
    return `<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0x0opj6" targetNamespace="http://example.bpmn.com/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1" name="Start Event 1">
      <bpmn:outgoing>Flow_1</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="Activity_1" />
    <bpmn:task id="Activity_1" name="Task 1">
      <bpmn:incoming>Flow_1</bpmn:incoming>
      <bpmn:outgoing>Flow_2</bpmn:outgoing>
    </bpmn:task>
    <bpmn:endEvent id="EndEvent_1" name="End Event 1">
      <bpmn:incoming>Flow_2</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_2" sourceRef="Activity_1" targetRef="EndEvent_1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_1" bpmnElement="Flow_1">
        <di:waypoint x="192" y="99" />
        <di:waypoint x="250" y="99" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_Flow_2" bpmnElement="Flow_2">
        <di:waypoint x="350" y="99" />
        <di:waypoint x="412" y="99" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="BPMNShape_StartEvent_1" bpmnElement="StartEvent_1">
        <dc:Bounds x="156" y="81" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="158" y="124" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_Activity_1" bpmnElement="Activity_1">
        <dc:Bounds x="250" y="59" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_EndEvent_1" bpmnElement="EndEvent_1">
        <dc:Bounds x="412" y="81" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="416" y="124" width="29" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;
}
