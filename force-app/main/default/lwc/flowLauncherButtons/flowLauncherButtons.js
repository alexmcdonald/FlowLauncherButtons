import { LightningElement, api } from 'lwc';
import FlowLauncherModal from 'c/flowLauncherModal';

export default class FlowLauncherButtons extends LightningElement {

    @api recordId;

    @api button1Label;
    @api button2Label;
    @api button3Label;
    @api button4Label;
    @api button5Label;

    @api button1Flow;
    @api button2Flow;
    @api button3Flow;
    @api button4Flow;
    @api button5Flow;

    @api button1Size;
    @api button2Size;
    @api button3Size;
    @api button4Size;
    @api button5Size;

    clickButton(event) {
        const data = event.currentTarget.dataset;
        console.log(JSON.stringify(data));
        if (data.flow) {

            FlowLauncherModal.open({
                size: data.size,
                description: 'Launch Flow',
                flowName: data.flow,
                actionName: data.action,
                recordId: this.recordId
            }).then((result) => {
                console.log(result);
            });

        }
    }

}