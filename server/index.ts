/*
    Copyright (c) 2015 Unify Inc.

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the "Software"),
    to deal in the Software without restriction, including without limitation
    the rights to use, copy, modify, merge, publish, distribute, sublicense,
    and/or sell copies of the Software, and to permit persons to whom the Software
    is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
    OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/



/*jshint node:true */
/*global require, Promise */

'use strict';

// load configuration
var config = {
	"users" : [
		{
			"email"    : "mustajab90@gmail.com",
			"password" : "SBeXpHrejHRQK28u"			
		},
		{
            "email"    : "jilin0023@gmail.com",
            "password" : "gP3thMSxwQJ66YU2"	
		}
	],
    "domain"             : "circuitsandbox.net",
    "sdkLogLevel"        : "warn",
    "filesPath"          : "./files/"
}

// logger
var bunyan = require('bunyan');

// SDK logger
var sdkLogger = bunyan.createLogger({
    name: 'sdk',
    stream: process.stdout,
    level: config.sdkLogLevel
});

// Application logger
var logger = bunyan.createLogger({
    name: 'app',
    stream: process.stdout,
    level: 'info'
});

// Node utils
var util = require('util');
var assert = require('assert');

// For file upload tests
var FileAPI = require('file-api');
var File = FileAPI.File;
var fs = require('fs');

// Circuit SDK
logger.info('[APP]: get Circuit instance');
var Circuit = require('circuit');

logger.info('[APP]: Circuit set bunyan logger');
Circuit.setLogger(sdkLogger);

//*********************************************************************
//* Test
//*********************************************************************
var Test = function () {

    var self = this;
    var clients = new Map(); // key:email -> value:client
    var client1conversations;
    var client2conversations;



    /**************
     * 
     * conversations
     * * */
    this.conversations = function() {
        var user1Email = config.users[0].email;
        var client1 = self.getClient(user1Email);
        return client1.getConversations;
    }

    //*********************************************************************
    //* logonUsers
    //*********************************************************************
    this.logonUsers = function logonUsers() {
        logger.info('[APP]: createClients');

        return new Promise(function (resolve, reject) {

            var logonTasks = [];

            config.users.forEach(function createClient(user) {
                logger.info('[APP]: createClient');
                var client = new Circuit.Client({domain: config.domain});
                self.addEventListeners(client);  //register evt listeners
                clients.set(user.email, client); //add client to the map
                logonTasks.push(client.logon(user.email, user.password));
            });

            Promise.all(logonTasks)
            .then(function (results) {
                results.forEach(function (result) {
                    logger.info('[APP]: user logger on', result);
                    console.log('[APP]: user logger on', result);
                });
                /**** Added to get result */
            var user1Email = config.users[0].email;
            var user2Email = config.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);

            /************** */
                resolve(
                    {   login: 'successful', 
                        user1Email: user1Email,
                        user2Email: user2Email,
                        client1: client1,
                        client2: client2,
                    });
            })
            .catch(reject);
        });
    };

     //*********************************************************************
    //* logonUsers :: POST
    //*********************************************************************
    this.logonUsersPOST = function logonUsersPOST(configPost) {
        logger.info('[APP]: createClients');

        return new Promise(function (resolve, reject) {

            var logonTasks = [];

            configPost.users.forEach(function createClient(user) {
                logger.info('[APP]: createClient');
                var client = new Circuit.Client({domain: configPost.domain});
                self.addEventListeners(client);  //register evt listeners
                clients.set(user.email, client); //add client to the map
                logonTasks.push(client.logon(user.email, user.password));
            });

            Promise.all(logonTasks)
            .then(function (results) {
                results.forEach(function (result) {
                    logger.info('[APP]: user logger on', result);
                    console.log('[APP]: user logger on', result);
                });
            var user1Email = configPost.users[0].email;
            var user2Email = configPost.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);

            
                resolve(
                    {   login: 'successful', 
                        user1Email: user1Email,
                        user2Email: user2Email,
                        client1: client1,
                        client2: client2,
                    });
            })
            .catch(reject);
        });
    }

    /****
     * There should be a logout function here
     */

    


     //*********************************************************************
    //* Get getClient1Conversations
    //*********************************************************************
    this.getClient1Conversations = function getClient1Conversations() {
        logger.info('[APP]: createClients');

        
        return new Promise(function (resolve, reject) {
            var thisConversation = null;

            var user1Email = config.users[0].email;
            var user2Email = config.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);

        console.log('Value of client1 is 3232:::');
        console.log(client1);

        client1.getConversations({numberOfConversations: 20})
            .then(conversations => {
                console.log('#3#3 following are the conversations');
                console.log(conversations);
                client1conversations = conversations;
                resolve(conversations);
            })
            .catch(reject);
        });
    };
    

     //*********************************************************************
    //* Get getClient2Conversations
    //*********************************************************************
    this.getClient2Conversations = function getClient2Conversations() {
        logger.info('[APP]: createClients');

        
        return new Promise(function (resolve, reject) {
            var thisConversation = null;

            var user1Email = config.users[0].email;
            var user2Email = config.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);



        client2.getConversations({numberOfConversations: 20})
            .then(conversations => {
                console.log('#3#3 following are the conversations');
                console.log(conversations);
                client2conversations = conversations;
                resolve(conversations);
            })
            .catch(reject);
        });
    };


    //*********************************************************************
    //* Get Conversation Promises
    //*********************************************************************

    //*********************************************************************
    //* Get User1
    //*********************************************************************
    this.getUser1 = function getUser1() {
        logger.info('[APP]: createClients');

        
        return new Promise(function (resolve, reject) {
            var thisConversation = null;

            var user1Email = config.users[0].email;
            var user2Email = config.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);

            client1.getLoggedOnUser()
            .then(user => {
                console.log('#3#7 Name of Client 1 is: ');
                console.log(user.displayName);
                resolve(user)
            })
            .catch(console.error);
        });
    };


    //*********************************************************************
    //* Get User2
    //*********************************************************************
    this.getUser2 = function getUser2() {
        logger.info('[APP]: createClients');

        
        return new Promise(function (resolve, reject) {
            var thisConversation = null;

            var user1Email = config.users[0].email;
            var user2Email = config.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);

            client2.getLoggedOnUser()
            .then(user => {
                console.log('#3#7 Name of Client 1 is: ');
                console.log(user.displayName);
                resolve(user)
            })
            .catch(console.error);
        });
    };

/*********
 * get Client1 Conversation Items
 */

this.client1ConversationItems = function client1ConversationItems() {
        logger.info('[APP]: createClients');

        
        return new Promise(function (resolve, reject) {
            var thisConversation = null;

            var user1Email = config.users[0].email;
            var user2Email = config.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);

            client1.getConversations({numberOfConversations: 20})
            .then(conversations => {
                return client1.getConversationItems(conversations[1].topLevelItem.convId)
            }).then(items => {
                resolve(items);
            })
            .catch(reject);
        });
    };


/*********
 * send Text Message 
 */

this.sendTextMessageFromClient1 = function sendTextMessageFromClient1() {
        logger.info('[APP]: createClients');

        
        return new Promise(function (resolve, reject) {
            var thisConversation = null;

            var user1Email = config.users[0].email;
            var user2Email = config.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);


            var content = {
                subject: 'Hello',
                content: 'Hello Hellasdfasdf asdfasd.',
                contentType: Circuit.Constants.TextItemContentType.PLAIN,
            }


            console.log('8989 value of content is 8989');
            console.log(content); 

            client1.getConversations({numberOfConversations: 20})
            .then(conversations => {
                return client1.addTextItem(conversations[1].topLevelItem.convId, content)
            }).then(res => {
                resolve(res);
            })
            .catch(console.error);
        });
}



/*********
 * POST Text Message 
 */

this.postTextMessageFromClient1 = function postTextMessageFromClient1(contentPost) {
        logger.info('[APP]: createClients');

        return new Promise(function (resolve, reject) {
            var thisConversation = null;

            var user1Email = config.users[0].email;
            var user2Email = config.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);

            /** 
            var content = {
                subject: 'Message with attachment',
                content: 'Hello to the world from me.',
                contentType: Circuit.Constants.TextItemContentType.PLAIN,
            }
            **/
            console.log(contentPost);

            console.log('8989 value of contentPost is 8989');
            console.log(contentPost);  

            client2.getConversations({numberOfConversations: 20})
            .then(conversations => {
                return client2.addTextItem('2724264e-72d3-4864-bc10-9a4d87a1fe99'/*conversations[1].topLevelItem.convId*/, contentPost)
            }).then(res => {
                resolve(res);
            })
            .catch(console.error);
        });
}

    //*********************************************************************
    //* addEventListeners
    //*********************************************************************
    this.addEventListeners = function addEventListeners(client) {
        logger.info('[APP]: addEventListeners');

        //set event callbacks for this client
        client.addEventListener('connectionStateChanged', function (evt) {self.logEvent(evt)});
        client.addEventListener('registrationStateChanged', function (evt) {self.logEvent(evt)});
        client.addEventListener('reconnectFailed', function (evt) {self.logEvent(evt)});
        client.addEventListener('itemAdded', function (evt) {self.logEvent(evt)});
        client.addEventListener('itemUpdated', function (evt) {self.logEvent(evt)});
        client.addEventListener('conversationCreated', function (evt) {self.logEvent(evt)});
        client.addEventListener('conversationUpdated', function (evt) {self.logEvent(evt)});
        client.addEventListener('userPresenceChanged', function (evt) {self.logEvent(evt)});
        client.addEventListener('userUpdated', function (evt) {self.logEvent(evt)});
        client.addEventListener('userSettingsUpdated', function (evt) {self.logEvent(evt)});
        client.addEventListener('basicSearchResults', function (evt) {self.logEvent(evt)});
    };

    //*********************************************************************
    //* logEvent -- helper
    //*********************************************************************
    this.logEvent = function logEvent(evt) {
        logger.info('[APP]:', evt.type, 'event received');
        logger.debug('[APP]:', util.inspect(evt, { showHidden: true, depth: null }));
    };

    //*********************************************************************
    //* testAddItemsToConversation
    //*********************************************************************
    this.testAddItemsToConversation = function testAddItemsToConversation() {
        logger.info('[APP]: testAddItemsToConversation');

        // test scenario:
        // user 1 looks up the direct conversation with user 2
        // if the conversation is not found, user 1 creates a direct conversation
        // user 1 sends a message to user 2
        // user 2 responds with a comment

        return new Promise(function (resolve, reject) {
            var thisConversation = null;

            var user1Email = config.users[0].email;
            var user2Email = config.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);

            logger.info('[APP]: emails ', user1Email, user2Email);

            client1.getDirectConversationWithUser(user2Email)

            .then(function checkIfConversationExists(conversation) {
                logger.info('[APP]: checkIfConversationExists', conversation);
                console.log('#9#9')
                console.log('conversation is: ')
                console.log(conversation);
                if (conversation) {
                    logger.info('[APP]: conversation exists', conversation.convId);
                    return Promise.resolve(conversation);
                } else {
                    logger.info('[APP]: conversation does not exist, create new conversation');
                    return client1.createDirectConversation(user2Email);
                }
            })

            .then(function client1AddsTextItem(conversation) {
                logger.info('[APP]: client1AddsTextItem');
                thisConversation = conversation;
                return client1.addTextItem(conversation.convId, 'Hello from' + user1Email);
            })

            .then(function client2RespondsWithComment(item) {
                logger.info('[APP]: client2RespondsWithComment');
                var response = {
                    convId: item.convId,
                    parentId: item.itemId,
                    content: 'Hello from ' + user2Email
                };
                return client2.addTextItem(item.convId, response);
            })

            .then(function returnResults(item) {
                logger.info('[APP]: returnResults');
                resolve({ client: client1, conv: thisConversation, item: item });
            })

            .catch(reject);
        });
    };

    this.abc = function abc() {
        return {1:'abc', 2:'def'};
    }

    /***
     * 
     * Testing 123
     */

    this.testing123 = function testing123() {
        /** 
        this.logonUsers()
            //.then (test.testAddItemsToConversation)
            .then (()=>{return this.abc});
            **/

            setTimeout( ()=>{console.log('')}, 5000);
            return this.abc();
        
    }

    /**********************************************************************
     *  getDirectConversationWithUser
     *  query String
     *  User ID or email address
     *  [createIfNotExists] Boolean optional
     *  Create conversation with user if not already existing. Default is false.
     **********************************************************************/
    this.getDirectConvWithUserClient1 = function getDirectConvWithUserClient1(query, createIfNotExist) {

        return new Promise(function (resolve, reject) {
            var user1Email = config.users[0].email;
            var user2Email = config.users[1].email;

            var client1 = self.getClient(user1Email);
            var client2 = self.getClient(user2Email);

            client1.getDirectConversationWithUser(query, createIfNotExist)
            .then(response => {
                resolve(response);
            })
            .catch(reject);
        });
        
    }

      //*********************************************************************
    //* getConversations
    //*********************************************************************
    this.getConversations = function getConversations() {
        var user1Email = config.users[0].email;
        var user2Email = config.users[1].email;

        var client1 = self.getClient(user1Email);
        var client2 = self.getClient(user2Email);


        client1.getConversations({numberOfConversations: 20})
        .then(conversations => {
            console.log('#3#3 following are the conversations');
            console.log(conversations);
            console.log('#3#4 value of conversations.length is:');
            console.log(conversations.length); // length is 2
            console.log('#3#5 Lets take a look at second conversation:');
            console.log(conversations[1]); // taking a look at the second conversation....
            console.log('#3#6 Conv id is: ');
            console.log(conversations[1].topLevelItem.convId);

            client1.getLoggedOnUser()
            .then(user => {
                console.log('#3#7 Name of Client 1 is: ');
                console.log(user.displayName);
            })
            .catch(console.error);

            client2.getLoggedOnUser()
            .then(user => {
                console.log('#3#7 Name of Client 2 is: ');
                console.log(user.displayName);
            })
            .catch(console.error);


            console.log('#3#7 get conversation items: ');
            /**  client1.getConversationItems(conversations[1].topLevelItem.convId)
            .then(items => {
                console.log('#3#8 Conversation items are: ');
                console.log(items);
                console.log('#3#9 Length of Conversation items is: ');
                console.log(items.length);
                for (let i = 0; i < items.length; i++) {
                    console.log(items[i].text.content);
                    console.log(',');
                    items[i].creatorId === client1.loggedOnUser.userId ? console.log('Me') : console.log('AlmoatazBellah Ibrahim');
                    console.log(','); // var date = new Date(time);
                    console.log(new Date(items[i].modificationTime));
                }
            })
            .catch(console.error); **/
            var content = {
                subject: 'Message with attachment',
                content: 'Hello to the world from me.',
                contentType: Circuit.Constants.TextItemContentType.PLAIN,
            }

            console.log('Hello World I am here !!! < ');
            console.log(content); 


        client1.addTextItem(conversations[1].topLevelItem.convId, content)
            .then(console.log)
            .catch(console.error);
            console.log(conversations.getConversationItems(conversations[1].topLevelItem.convId));
            console.log('#3#8 Nothing');
        } )
        .catch(console.error);
        logger.info('[APP]: emails ', user1Email, user2Email);
        return client1;
    }

    //*********************************************************************
    //* testLikes
    //*********************************************************************
    this.testLikes = function testLikes(data) {
        logger.info('[APP]: testLikes');
        return new Promise(function (resolve, reject) {
            var client = data.client;
            var item = data.item;
            var conv = data.conv;

            // user likes item
            client.likeItem(item.itemId)

            // user unlikes item
            .then(function unlike() {
                return client.unlikeItem(item.itemId);
            })

            // user likes item again
            .then(function like() {
                return client.likeItem(item.itemId);
            })

            .then(function returnResults() {
                resolve({ client: client, conv: conv, item: item });
            })

            .catch(reject);
        });
    };

    //*********************************************************************
    //* testFlags
    //*********************************************************************
    this.testFlags = function testFlags(data) {
        logger.info('[APP]: testFlags');
        return new Promise(function (resolve, reject) {
            var client = data.client;
            var item = data.item;
            var conv = data.conv;

            // user sets flag on item
            client.setFlagItem(conv.convId, item.itemId)

             // user clears flag on item
            .then(function clearFlag() {
                return client.clearFlagItem(conv.convId, item.itemId);
            })

           // user sets flag on item again
            .then(function setFlag() {
                return client.setFlagItem(conv.convId, item.itemId);
            })

            .then(function returnParameters() {
                return resolve(data);
            })

            .catch(reject);
        });
    };

    //*********************************************************************
    //* testMarkAsRead
    //*********************************************************************
    this.testMarkAsRead = function testMarkAsRead(data) {
        logger.info('[APP]: testMarkAsRead');
        return new Promise(function (resolve, reject) {
            var client = data.client;
            var item = data.item;
            var conv = data.conv;

            client.markItemsAsRead(conv.convId, item.modificationTime)

            .then(function returnPrameters() {
                return resolve(data);
            })

            .catch(reject);
        });
    };

    //*********************************************************************
    //* testPresence
    //*********************************************************************
    this.testPresence = function testPresence(data) {
        logger.debug('[APP]: testPresence');
        return new Promise(function (resolve, reject) {
            var client = data.client;
            var userIdsList = [self.getUserId(config.users[1].email)];
            logger.debug('[APP]:', self.getEmail(client), 'subscribes to', userIdsList);

            client.subscribePresence(userIdsList)

            .then (function setPresence() {
                var user2 = config.users[1].email;
                var client2 = self.getClient(user2);
                var presenceState = {state: 'AWAY', dndUntil: 0};
                logger.debug('[APP]: setPresence', presenceState, 'for', user2, self.getUserId(user2));
                return client2.setPresence(presenceState);
            })

            .then (function getPresence() {
                logger.debug('[APP]: getPresence');
                return client.getPresence(userIdsList, false);
            })

            .then (function logPresence(presenceList) {
                logger.debug('[APP]: presenceList\n', util.inspect(presenceList, { showHidden: true, depth: null }));
                return Promise.resolve();
            })

            // .then (function unsubscribePresence(){
            //     logger.debug('[APP]:',self.getEmail(client), 'unsubscribes from', userIdsList);
            //     return client.unsubscribePresence(userIdsList);
            // })

            .then(function returnParameters() {
                logger.debug('[APP]: done with presence tests');
                return resolve(data);
            })

            .catch(reject);
        });
    };

    //*********************************************************************
    //* testFileUpload
    //*********************************************************************
    this.testFileUpload = function testFileUpload(data) {
        logger.debug('[APP]: testFileUpload');
        return new Promise(function (resolve, reject) {
            var conv = data.conv;
            var client = data.client;
            var files = self.getFiles(config.filesPath);
            var message = {content: 'test file upload', attachments: files};

            client.addTextItem(conv.convId, message)

            .then (function returnParameters() {
                return resolve(data);
            })

            .catch(reject);
        });
    };

    //*********************************************************************
    //* sentByMe -- helper
    //*********************************************************************
    this.sentByMe = function sentByMe(client, item) {
        return (client.loggedOnUser.userId === item.creatorId);
    };

    //*********************************************************************
    //* getEmail -- helper
    //*********************************************************************
    this.getEmail = function getEmail(client) {
        return (client.loggedOnUser.emailAddress);
    };

    //*********************************************************************
    //* getUserId -- helper
    //*********************************************************************
    this.getUserId = function getUserId(email) {
        return clients.get(email).loggedOnUser.userId;
    };

    //*********************************************************************
    //* getClient -- helper
    //*********************************************************************
    this.getClient = function getClient(email) {
        return clients.get(email);
    };

    //*********************************************************************
    //* getFiles -- helper
    //*********************************************************************
    this.getFiles = function getFiles(path) {
        var files = [];
        var fileNames = fs.readdirSync(path);
        fileNames.forEach(function (element) {
            var file = new File(path + element);
            files.push(file);
        });
        logger.debug('[APP]: getFiles' + files);
        return files;
    };

    //*********************************************************************
    //* terminate -- helper
    //*********************************************************************
    this.terminate = function terminate(err) {
        var error = new Error(err);
        logger.error('[APP]: Test failed ' + error.message);
        logger.error(error.stack);
        process.exit(1);
    };

    //*********************************************************************
    //* done -- helper
    //*********************************************************************
    this.done = function done() {
        logger.info('[APP]: Completed Tests');
    };
};



const testFuncs: any = new Test();

//*********************************************************************
//* runTest
//*********************************************************************
function runTest() {

    var test = new Test();

    assert(config.users.length >= 2, 'At least two users need to be configured in config.json');

    test.logonUsers()
       .then (test.testAddItemsToConversation)
       .then (test.testLikes)
// temporary skip since there is an issue with the JS SDK for clearFlag       .then (test.testFlags)
       .then (test.testMarkAsRead)
       .then (test.testPresence)
       .then (test.testFileUpload)
//            ... more tests
       .then (test.done)
       .catch (test.terminate);
}

//*********************************************************************
//* main
//*********************************************************************
// runTest();


export { testFuncs }