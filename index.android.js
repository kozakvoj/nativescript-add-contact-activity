var application = require("application");
var Intent = android.content.Intent;

exports.createContact = function (number) {
    var context = application.android.context;
    var insertContactIntent = new Intent(android.provider.Contacts.Intents.Insert.ACTION, android.provider.Contacts.People.CONTENT_URI);
    insertContactIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    insertContactIntent.putExtra(android.provider.Contacts.Intents.Insert.PHONE, number);

    context.startActivity(insertContactIntent);
};


