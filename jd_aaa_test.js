


const $ = new Env('aaatest');
const notify = $.isNode() ? require('./sendNotify') : '';
await notify.sendNotify(`测试消息`, `测试消息`);