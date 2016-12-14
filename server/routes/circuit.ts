import { Router, Response, Request } from 'express';
import * as uuid from 'node-uuid';

import { testFuncs } from '../index';

const circuitRouter: Router = Router();


var assert = require('assert');

var myPromise = Promise.resolve('Foo');


var logonUsersResult: any;
setInterval(function(){

        let messagePOST = {
            "subject": "Water Level Alarm",
            "content": "<table bgcolor=\"#e25318\"><tbody><tr><td>Water Level Error <img class=\"emoticon-icon sad\" abbr=\":(\" alt=\"Sad emoji\"></td></tr></tbody></table><table bgcolor=\"#00fbff\"><tbody><tr><td><u>Experts:</u> <a href=\"#/profile/7637aa96-1506-4ecd-a7ac-f0346281461b\">@Muhammad Mustajab Ali</a>&nbsp;<a href=\"#/profile/40565d54-3126-433d-8820-5e0a2b3b7c07\">@AlmoatazBellah Ibrahim</a><p>High Pressure in <b><i>tank1</i></b> - 12 bar</p></td></tr></tbody></table>",
            "contentType": "RICH"
        }

        let configPOST = {
            "users" : [
                    
                    {
                        "email"    : "mustajab90@gmail.com",
                        "password" : "SBeXpHrejHRQK28u"			
                    },
                    {
                        "email"    : "jilin0023@gmail.com",
                        "password" : "gP3thMSxwQJ66YU2"			
                    },
                ],
            "domain"             : "circuitsandbox.net",
            "sdkLogLevel"        : "warn",
            "filesPath"          : "./files/"
        }

        if (!logonUsersResult) {
            testFuncs.logonUsersPOST(configPOST)
            .then((res) => {
                logonUsersResult = res;
                return testFuncs.postTextMessageFromClient1(messagePOST) 
            })
          .then((res) => postTextMessageFromClient1 = res);
        } /*else {
            testFuncs.postTextMessageFromClient1(messagePOST)
            .then((res) => postTextMessageFromClient1 = res);
        } */
    
        
}, 5000);



/****
 * Promise Experiment
 */
var resultOfPromise: any;
circuitRouter.get('/helloWorld', (request: Request, response: Response) => {

    if (!resultOfPromise) {
        myPromise.then((res) => resultOfPromise = res);
    }
    response.json({
        id: uuid.v4(),
        status: 'done',
        name: resultOfPromise,
    });

});

/****
 * Promise Experiment post
 */
var resultOfPromise: any;
circuitRouter.post('/helloWorld', (request: Request, response: Response) => {
    console.log('$$$$ the value of request is:::: $$$$$');
    console.log(request.body.keyreq);
    console.log('***** the value of request body is:::: *****');
    console.log(request.body);

    const key1 = request.body.keyreq;

    if (!resultOfPromise) {
        myPromise.then((res) => resultOfPromise = res);
    }
    response.json({
        id: uuid.v4(),
        status: 'done',
        name: resultOfPromise,
        key1: key1,
    });
});


/****
 * Logon Users Result Client1 and Client2
 */
var logonUsersResult: any;
circuitRouter.get('/logonUsers', (request: Request, response: Response) => {
console.log('I will work');
    if (!logonUsersResult) {
        testFuncs.logonUsers()
        .then((res) => logonUsersResult = res);
    }
     response.json({
        id: uuid.v4(),
        status: logonUsersResult ? 'done' : 'notDone',
        name: logonUsersResult,
    });

});

//
/****
 * Hello
 */
circuitRouter.get('/hello', (request: Request, response: Response) => {
console.log('Hello');
     response.json({
        id: uuid.v4(),
        status: 'hello',
    });

});

//
/****
 * Logon Users POST Client1 and Client2
 */
var logonUsersPOSTResult: any;
circuitRouter.post('/logonUsersPOSTResult', (request: Request, response: Response) => {
    let configPOST = request.body.configpost;
    if (!logonUsersPOSTResult) {
        testFuncs.logonUsersPOST(configPOST)
        .then((res) => logonUsersPOSTResult = res);
    }
    
     response.json({
        id: uuid.v4(),
        status: logonUsersPOSTResult ? 'done' : 'notDone',
        name: logonUsersPOSTResult,
    });

});



/****
 * this.getClient1Conversations
 */
var getClient1ConversationsResult: any;
circuitRouter.get('/client1conversations', (request: Request, response: Response) => {

    if (!getClient1ConversationsResult) {
        testFuncs.getClient1Conversations()
        .then((res) => getClient1ConversationsResult = res);
    }
     response.json({
        id: uuid.v4(),
        status: getClient1ConversationsResult ? 'done' : 'notDone',
        name: getClient1ConversationsResult,
    });

});


/***
 * this.getClient2Conversations
 */
var getClient2ConversationsResult: any;
circuitRouter.get('/client2conversations', (request: Request, response: Response) => {

    if (!getClient2ConversationsResult) {
        testFuncs.getClient2Conversations()
        .then((res) => getClient2ConversationsResult = res);
    }
     response.json({
        id: uuid.v4(),
        status: getClient2ConversationsResult ? 'done' : 'notDone',
        name: getClient2ConversationsResult,
    });

});

//this.getUser1 = function getUser1() {
/***
 * this.getUser1
 */
var getUser1Result: any;
circuitRouter.get('/getUser1', (request: Request, response: Response) => {
    if (!getUser1Result) {
        testFuncs.getUser1()
        .then((res) => getUser1Result = res);
    }
     response.json({
        id: uuid.v4(),
        status: getUser1Result ? 'done' : 'notDone',
        name: getUser1Result,
    });
});


/***
 * this.getUser2
 */
var getUser2Result: any;
circuitRouter.get('/getUser2', (request: Request, response: Response) => {
    if (!getUser2Result) {
        testFuncs.getUser2()
        .then((res) => getUser2Result = res);
    }
     response.json({
        id: uuid.v4(),
        status: getUser2Result ? 'done' : 'notDone',
        name: getUser2Result,
    });
});

/***
 * getDirectConvWithUserClient1
 */
var getDirectConvWithUserClient1: any;
circuitRouter.post('/getDirectConvWithUserClient1', (request: Request, response: Response) => {
    let query = request.body.query;
    let createIfNotExist = request.body.createIfNotExist;
    console.log('%5%5 the value of query is:');
    console.log(query);
    console.log('%5%5 the value of createIfNotExist is:');
    console.log(createIfNotExist);
    if (!getDirectConvWithUserClient1) {
        testFuncs.getDirectConvWithUserClient1(query, createIfNotExist)
        .then((res) => getDirectConvWithUserClient1 = res);
    }
    response.json({
        id: uuid.v4(),
        status: getDirectConvWithUserClient1 ? 'done' : 'notDone',
        name: getDirectConvWithUserClient1,
    });
});


/***
 * 
 * client1ConversationItems
 */
var client1ConversationItems: any;
circuitRouter.get('/getClient1ConversationItems', (request: Request, response: Response) => {
    if (!client1ConversationItems) {
        testFuncs.client1ConversationItems()
        .then((res) => client1ConversationItems = res);
    }
     response.json({
        id: uuid.v4(),
        status: client1ConversationItems ? 'done' : 'notDone',
        name: client1ConversationItems,
    });
});

/***
 * 
 * postTextMessageFromClient1
 */
var postTextMessageFromClient1: any;
circuitRouter.post('/postTextMessageFromClient1', (request: Request, response: Response) => {
    let messagePOST = request.body.messagePOST;
     
    console.log('message posted is:::');
    console.log(messagePOST);

    testFuncs.postTextMessageFromClient1(messagePOST)
    .then((res) => postTextMessageFromClient1 = res);

     response.json({
        id: uuid.v4(),
        status: postTextMessageFromClient1 ? 'done' : 'notDone',
        name: postTextMessageFromClient1,
    });
});

/***
 * 
 * sendTextMessageFromClient1
 */
var sendTextMessageFromClient1: any;
circuitRouter.get('/sendTextMessageFromClient1', (request: Request, response: Response) => {
    const messagePOST = request.body.messagePOST;
    if (!sendTextMessageFromClient1) {
        testFuncs.sendTextMessageFromClient1()
        .then((res) => sendTextMessageFromClient1 = res);
    }
     response.json({
        id: uuid.v4(),
        status: sendTextMessageFromClient1 ? 'done' : 'notDone',
        name: sendTextMessageFromClient1,
    });
});





export { circuitRouter }