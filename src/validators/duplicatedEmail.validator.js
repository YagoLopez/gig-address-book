// @ts-ignore
var findIndex = require('lodash/findIndex');
export function isDuplicatedEmail(email, contacts) {
    var result = findIndex(contacts, function (contact) {
        return contact.email == email;
    });
    return result > -1;
}
export function duplicatedEmailValidator(contacts) {
    return function (control) {
        if (isDuplicatedEmail(control.value, contacts)) {
            return { 'duplicatedEmail': true };
        }
        return null;
    };
}
//# sourceMappingURL=duplicatedEmail.validator.js.map