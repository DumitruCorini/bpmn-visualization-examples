# Load BPMN Diagram in the same container on double click on a call activity

Javascript example to demonstrate how to use the same container on a double click on an element of the BPMN Diagram.
- [__:fast_forward: live environment__](https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/custom-navigation/call-activity-with-reload-on-dblclick/index.html)
- to run locally, open the [index.html](index.html) directly in a Web Browser

## ♻️ Usage

After the main `BpmnVisualization` instantiation, get the HTML element corresponding to the call activity to add a listener to load a new BPMN Diagram in the same container on activation.

```javascript
const callActivityElt = bpmnVisualization.htmlElementRegistry.getBpmnHtmlElement('call_activity');
callActivityElt.ondblclick = () => {
    bpmnVisualization.load(getProcurementBpmnDiagram(), { fit: {type: 'Center'} });
}
```

⚠️ It's not possible to manipulate the class of the HTML element with the zoom, the panning and the fit features, because it recalculated and is overidden by them. \
A new API comes later to support this case.