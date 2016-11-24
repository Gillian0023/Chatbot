/**
 * Created by yue on 24.11.16.
 */

import {WinCCInstance} from 'models/winccInstance';

export class User {
    email: string;
    password: string;
    firstName: string;
    familyName: string;
    winCCList: [WinCCInstance];
}