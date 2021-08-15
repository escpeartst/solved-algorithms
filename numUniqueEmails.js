/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  var uniqueEmails = {};
  emails.forEach(function(email) {
    let localName = email.slice(0, email.indexOf('@'));
    localName = localName.substring(0, email.indexOf('+'));
    localName = localName.replace(/[.]/g, '');
    uniqueEmails[localName + email.slice(email.indexOf('@'))] = 1;
  });

  return Object.keys(uniqueEmails).length;
};

console.log( numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]) );
