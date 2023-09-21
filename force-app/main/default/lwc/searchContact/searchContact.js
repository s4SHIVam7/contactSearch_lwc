import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import searchContact from '@salesforce/apex/ContactController.searchContact';

export default class ContactSearch extends LightningElement {
    contactName     = '';
    contactFound    = false;
    contactNotFound = false;

    handleContactNameChange(event) {
        this.contactName = event.target.value;
    }

    async searchContact() {
        try {
            // Reset to false before searching (again)
            this.contactFound = false;
            this.contactNotFound = false;

            // Call an Apex method 
            const result = await searchContact({ contactName: this.contactName });

            if (result) {
                this.contactFound = true;
                this.showSuccessToast();
            } else {
                this.contactNotFound = true;
                this.showErrorToast();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    showSuccessToast() {
        const event = new ShowToastEvent({
            title: 'Success',
            message: 'Contact Name Found In Database!',
            variant: 'success',
        });
        this.dispatchEvent(event);
    }

    showErrorToast() {
        const event = new ShowToastEvent({
            title: 'Error',
            message: 'Contact Not Found In Database',
            variant: 'error',
        });
        this.dispatchEvent(event);
    }
}