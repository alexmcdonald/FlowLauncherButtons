import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class FlowLauncherModal extends LightningModal {

    @api actionName;
    @api flowName;
    @api recordId;

    handleStatusChange(event) {
        if (event.detail.status === 'FINISHED') {
            this.close('complete');
        }
    }

    get inputVariables() {
        return [
            {
                name: 'recordId',
                type: 'String',
                value: this.recordId
            }
        ];
    }
}