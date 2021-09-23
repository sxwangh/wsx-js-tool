/* eslint-disable */
/**
 * `WebsocketHeartbeatJs` constructor.wsx
 *
 * @param {Object} opts
 * {
 *  url                  websocket链接地址
 *  pingTimeout 未收到消息多少秒之后发送ping请求，默认30秒
    pongTimeout  发送ping之后，未收到消息超时时间，默认3秒-网络延迟预留时间
    reconnectTimeout
    pingMsg
 * }
 * @api public
 */

// 构造函数
function WebsocketHeart({
    url,
    pingTimeout = 30000,
    pongTimeout = 4000,
    reconnectTimeout = 5000,
    pingMsg = 'ping',
    maxReCount = 10
}){
    this.opts = {
        url: url,
        pingTimeout: pingTimeout,
        pongTimeout: pongTimeout,
        reconnectTimeout: reconnectTimeout,
        pingMsg: JSON.stringify({
            type: 1,
            timestamp: (new Date()).getTime(),
            data: 'ping'
        }),
        maxReCount: maxReCount, // 最大重连次数
    };
    this.ws = null; //this 为 new出来的实例对象， this（实例）上如果没有方法，会追到构造函数的原型连上 - 实现继承 （构造函数相当于父类）
    this.curReCount = 0;

    // TODO this实例 override hook(钩子) function
    this.onclose = () => {};
    this.onerror = () => {};
    this.onopen = () => {};
    this.onmessage = () => {};
    this.onreconnect = () => {};

    this.createWebSocket();
}
WebsocketHeart.prototype.createWebSocket = function() {
    try {
        this.ws = new WebSocket(this.opts.url);
        this.initHook(); // hook丰富 (实例钩子)
    } catch (e) {
        this.reconnect();
        throw e;
    }
};

// ws监听事件，调用实例重写的hook方法
WebsocketHeart.prototype.initHook = function() {
    this.ws.onclose = () => {
        this.onclose(); // 实例hook （this指向实例）
        console.log('onClose: 执行this.reconnect hook');
        this.reconnect(); // this实例没有该方法，则调用父类的
    };
    this.ws.onerror = () => {
        this.onerror(); // 实例hook
        this.reconnect();
    };
    // 心跳入口
    this.ws.onopen = () => {
        this.onopen(); // 实例hook
        // 心跳检测重置
        this.heartCheck();
    };
    this.ws.onmessage = (event) => {
        //如果获取到消息，心跳检测重置
        //拿到任何消息都说明当前连接是正常的
        this.heartCheck();
        this.onmessage(event); // 实例hook
    };
};

WebsocketHeart.prototype.reconnect = function() {
    if (this.curReCount >=  this.opts.maxReCount) {
        console.log('超过最大连接次数，不再连接');
        return
    }
    if(this.forbidReconnect) {
        console.log('手动关闭，禁止重连');
        return;
    };
    if(this.lockReconnect) {
        return;
    };
    this.curReCount += 1;
    console.log(`当前尝试第${this.curReCount}次链接..`);
    this.lockReconnect = true; // 重连后，超过reconnectTimeout-s后才可以再重连
    this.onreconnect(); // 实例 hook
    //没连接上会一直重连，设置延迟避免请求过多
    setTimeout(() => {
        this.createWebSocket();
        this.lockReconnect = false;
    }, this.opts.reconnectTimeout);
};

// 实例方法
WebsocketHeart.prototype.send = function(msg){
    this.ws.send(msg);
};
// 心跳机制
WebsocketHeart.prototype.heartCheck = function(){
    this.heartReset();
    this.heartStart();
};
WebsocketHeart.prototype.heartStart = function(){
    if(this.forbidReconnect) return;//不再重连就不再执行心跳
    // 30s 检查一次连接的链接情况
    this.pingTimeoutId = setTimeout(() => {
        // 这里发送一个心跳，后端收到后，返回一个心跳消息，
        // onmessage拿到返回的心跳就说明连接正常
        this.ws.send(this.opts.pingMsg);
        //如果超过一定时间还没重置，说明后端主动断开了
        this.pongTimeoutId = setTimeout(() => {
            //如果onclose会执行reconnect，我们执行 ws.doClose()就行了.如果直接执行reconnect 会触发onclose导致重连两次
            console.log('心跳异常，ws.close()');
            this.ws.close();
        }, this.opts.pongTimeout); // pongTimeout-s 没有监听到onmessage 就 ws.close,促发 reconnect()
    }, this.opts.pingTimeout); // pingTimeout-s 之后发送ping
};
WebsocketHeart.prototype.heartReset = function(){
    clearTimeout(this.pingTimeoutId);
    clearTimeout(this.pongTimeoutId);
};

// 人为 关闭连接
WebsocketHeart.prototype.close = function(){
    //如果手动关闭连接，不再重连
    this.forbidReconnect = true;
    this.heartReset();
    this.ws.close();
};
if(window) window.WebsocketHeart = WebsocketHeart;
export default WebsocketHeart;
