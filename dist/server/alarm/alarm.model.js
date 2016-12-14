'use strict';
const mongoose_1 = require('mongoose');
var AlarmSchema = new mongoose_1.mongoose.Schema({
    alarmid: String,
    temperature: String,
    pressure: String,
    Alarmactive: Boolean,
    emoji:{emojiid:String, picture:String},
    tank:{tankid: String, name: String}
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose_1.mongoose.model('Alarm', AlarmSchema);
//# sourceMappingURL=/Users/jilin/Programming/contextualcollabnodejs/dist/server/alarm/alarm.model.js.map
