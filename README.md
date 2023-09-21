# Contact Search LWC

This Lightning Web Component (LWC) allows you to search for a Contact in your Salesforce database by name. 
It provides a simple interface to input the Contact's name and checks if the Contact exists.
Green color's Toast message for searched contact and Red color's Toast message for not searched contact.

## Features

- Search for a Contact by name.
- Displays a toast message with the search result.

## Installation

To use this component in your Salesforce org, you can deploy it using Salesforce CLI or Salesforce Extensions for Visual Studio Code. Here are the steps:

1. Clone this repository to your local machine:

   ```bash
   https://github.com/s4SHIVam7/contactSearch_lwc.git

## Deployment

1. To deploy the component to your Salesforce org using Salesforce CLI, run the following command:

```bash
sfdx force:source:deploy -p force-app/main/default

```
2. Once deployed, add the component to your Lightning App or Lightning Record Page.

3. Use the "Contact Search" component to search for Contacts by name.

## Usage
Enter the Contact's name in the input field.

Click the "Search" button.

If the Contact is found, a success toast message will be displayed as "Contact Found In Database!".

If the Contact is not found, an error toast message will be displayed as "Contact Not Found In Database".

## ScreenShot

1. Main Component
![image](https://github.com/s4SHIVam7/contactSearch_lwc/assets/60181328/835b89ef-3111-44ee-abb7-05664a6194d0)

2. Successful Output
![image](https://github.com/s4SHIVam7/contactSearch_lwc/assets/60181328/1626fd2c-3bcb-4e02-b8c1-8711192c88f4)

3. Valid Error Output
![image](https://github.com/s4SHIVam7/contactSearch_lwc/assets/60181328/e24800ce-337a-4c14-9c41-c2afa21ff914)





