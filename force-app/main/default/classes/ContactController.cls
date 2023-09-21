public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static Boolean searchContact(String contactName) {
        try {
                Contact contact = [SELECT Id FROM Contact WHERE Name = :contactName LIMIT 1];
            	return true;
        } Catch (Exception e) {   
           system.debug('Error: '+e.getMessage());
             return false;    
        }
    }
}