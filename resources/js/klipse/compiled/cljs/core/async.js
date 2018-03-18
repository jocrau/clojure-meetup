// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24660 = arguments.length;
switch (G__24660) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24661 = (function (f,blockable,meta24662){
this.f = f;
this.blockable = blockable;
this.meta24662 = meta24662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24663,meta24662__$1){
var self__ = this;
var _24663__$1 = this;
return (new cljs.core.async.t_cljs$core$async24661(self__.f,self__.blockable,meta24662__$1));
});

cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24663){
var self__ = this;
var _24663__$1 = this;
return self__.meta24662;
});

cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24662","meta24662",328029315,null)], null);
});

cljs.core.async.t_cljs$core$async24661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24661";

cljs.core.async.t_cljs$core$async24661.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async24661");
});

cljs.core.async.__GT_t_cljs$core$async24661 = (function cljs$core$async$__GT_t_cljs$core$async24661(f__$1,blockable__$1,meta24662){
return (new cljs.core.async.t_cljs$core$async24661(f__$1,blockable__$1,meta24662));
});

}

return (new cljs.core.async.t_cljs$core$async24661(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24667 = arguments.length;
switch (G__24667) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24670 = arguments.length;
switch (G__24670) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24673 = arguments.length;
switch (G__24673) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24675 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24675);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24675,ret){
return (function (){
return fn1.call(null,val_24675);
});})(val_24675,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24677 = arguments.length;
switch (G__24677) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9961__auto___24679 = n;
var x_24680 = (0);
while(true){
if((x_24680 < n__9961__auto___24679)){
(a[x_24680] = (0));

var G__24681 = (x_24680 + (1));
x_24680 = G__24681;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24682 = (i + (1));
i = G__24682;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24683 = (function (flag,meta24684){
this.flag = flag;
this.meta24684 = meta24684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24685,meta24684__$1){
var self__ = this;
var _24685__$1 = this;
return (new cljs.core.async.t_cljs$core$async24683(self__.flag,meta24684__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24685){
var self__ = this;
var _24685__$1 = this;
return self__.meta24684;
});})(flag))
;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24683.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24684","meta24684",-711761115,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24683";

cljs.core.async.t_cljs$core$async24683.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async24683");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24683 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24683(flag__$1,meta24684){
return (new cljs.core.async.t_cljs$core$async24683(flag__$1,meta24684));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24683(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24686 = (function (flag,cb,meta24687){
this.flag = flag;
this.cb = cb;
this.meta24687 = meta24687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24688,meta24687__$1){
var self__ = this;
var _24688__$1 = this;
return (new cljs.core.async.t_cljs$core$async24686(self__.flag,self__.cb,meta24687__$1));
});

cljs.core.async.t_cljs$core$async24686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24688){
var self__ = this;
var _24688__$1 = this;
return self__.meta24687;
});

cljs.core.async.t_cljs$core$async24686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24687","meta24687",1903823125,null)], null);
});

cljs.core.async.t_cljs$core$async24686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24686";

cljs.core.async.t_cljs$core$async24686.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async24686");
});

cljs.core.async.__GT_t_cljs$core$async24686 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24686(flag__$1,cb__$1,meta24687){
return (new cljs.core.async.t_cljs$core$async24686(flag__$1,cb__$1,meta24687));
});

}

return (new cljs.core.async.t_cljs$core$async24686(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24689_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24689_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24690_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24690_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8916__auto__ = wport;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24691 = (i + (1));
i = G__24691;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8916__auto__ = ret;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__8904__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___24697 = arguments.length;
var i__10196__auto___24698 = (0);
while(true){
if((i__10196__auto___24698 < len__10195__auto___24697)){
args__10202__auto__.push((arguments[i__10196__auto___24698]));

var G__24699 = (i__10196__auto___24698 + (1));
i__10196__auto___24698 = G__24699;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24694){
var map__24695 = p__24694;
var map__24695__$1 = ((((!((map__24695 == null)))?((((map__24695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24695):map__24695);
var opts = map__24695__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24692){
var G__24693 = cljs.core.first.call(null,seq24692);
var seq24692__$1 = cljs.core.next.call(null,seq24692);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24693,seq24692__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24701 = arguments.length;
switch (G__24701) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24600__auto___24747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___24747){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___24747){
return (function (state_24725){
var state_val_24726 = (state_24725[(1)]);
if((state_val_24726 === (7))){
var inst_24721 = (state_24725[(2)]);
var state_24725__$1 = state_24725;
var statearr_24727_24748 = state_24725__$1;
(statearr_24727_24748[(2)] = inst_24721);

(statearr_24727_24748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (1))){
var state_24725__$1 = state_24725;
var statearr_24728_24749 = state_24725__$1;
(statearr_24728_24749[(2)] = null);

(statearr_24728_24749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (4))){
var inst_24704 = (state_24725[(7)]);
var inst_24704__$1 = (state_24725[(2)]);
var inst_24705 = (inst_24704__$1 == null);
var state_24725__$1 = (function (){var statearr_24729 = state_24725;
(statearr_24729[(7)] = inst_24704__$1);

return statearr_24729;
})();
if(cljs.core.truth_(inst_24705)){
var statearr_24730_24750 = state_24725__$1;
(statearr_24730_24750[(1)] = (5));

} else {
var statearr_24731_24751 = state_24725__$1;
(statearr_24731_24751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (13))){
var state_24725__$1 = state_24725;
var statearr_24732_24752 = state_24725__$1;
(statearr_24732_24752[(2)] = null);

(statearr_24732_24752[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (6))){
var inst_24704 = (state_24725[(7)]);
var state_24725__$1 = state_24725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24725__$1,(11),to,inst_24704);
} else {
if((state_val_24726 === (3))){
var inst_24723 = (state_24725[(2)]);
var state_24725__$1 = state_24725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24725__$1,inst_24723);
} else {
if((state_val_24726 === (12))){
var state_24725__$1 = state_24725;
var statearr_24733_24753 = state_24725__$1;
(statearr_24733_24753[(2)] = null);

(statearr_24733_24753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (2))){
var state_24725__$1 = state_24725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24725__$1,(4),from);
} else {
if((state_val_24726 === (11))){
var inst_24714 = (state_24725[(2)]);
var state_24725__$1 = state_24725;
if(cljs.core.truth_(inst_24714)){
var statearr_24734_24754 = state_24725__$1;
(statearr_24734_24754[(1)] = (12));

} else {
var statearr_24735_24755 = state_24725__$1;
(statearr_24735_24755[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (9))){
var state_24725__$1 = state_24725;
var statearr_24736_24756 = state_24725__$1;
(statearr_24736_24756[(2)] = null);

(statearr_24736_24756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (5))){
var state_24725__$1 = state_24725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24737_24757 = state_24725__$1;
(statearr_24737_24757[(1)] = (8));

} else {
var statearr_24738_24758 = state_24725__$1;
(statearr_24738_24758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (14))){
var inst_24719 = (state_24725[(2)]);
var state_24725__$1 = state_24725;
var statearr_24739_24759 = state_24725__$1;
(statearr_24739_24759[(2)] = inst_24719);

(statearr_24739_24759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (10))){
var inst_24711 = (state_24725[(2)]);
var state_24725__$1 = state_24725;
var statearr_24740_24760 = state_24725__$1;
(statearr_24740_24760[(2)] = inst_24711);

(statearr_24740_24760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24726 === (8))){
var inst_24708 = cljs.core.async.close_BANG_.call(null,to);
var state_24725__$1 = state_24725;
var statearr_24741_24761 = state_24725__$1;
(statearr_24741_24761[(2)] = inst_24708);

(statearr_24741_24761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___24747))
;
return ((function (switch__24510__auto__,c__24600__auto___24747){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_24742 = [null,null,null,null,null,null,null,null];
(statearr_24742[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_24742[(1)] = (1));

return statearr_24742;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_24725){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_24725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e24743){if((e24743 instanceof Object)){
var ex__24514__auto__ = e24743;
var statearr_24744_24762 = state_24725;
(statearr_24744_24762[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24763 = state_24725;
state_24725 = G__24763;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_24725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_24725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___24747))
})();
var state__24602__auto__ = (function (){var statearr_24745 = f__24601__auto__.call(null);
(statearr_24745[(6)] = c__24600__auto___24747);

return statearr_24745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___24747))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24764){
var vec__24765 = p__24764;
var v = cljs.core.nth.call(null,vec__24765,(0),null);
var p = cljs.core.nth.call(null,vec__24765,(1),null);
var job = vec__24765;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24600__auto___24936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___24936,res,vec__24765,v,p,job,jobs,results){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___24936,res,vec__24765,v,p,job,jobs,results){
return (function (state_24772){
var state_val_24773 = (state_24772[(1)]);
if((state_val_24773 === (1))){
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24772__$1,(2),res,v);
} else {
if((state_val_24773 === (2))){
var inst_24769 = (state_24772[(2)]);
var inst_24770 = cljs.core.async.close_BANG_.call(null,res);
var state_24772__$1 = (function (){var statearr_24774 = state_24772;
(statearr_24774[(7)] = inst_24769);

return statearr_24774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24772__$1,inst_24770);
} else {
return null;
}
}
});})(c__24600__auto___24936,res,vec__24765,v,p,job,jobs,results))
;
return ((function (switch__24510__auto__,c__24600__auto___24936,res,vec__24765,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0 = (function (){
var statearr_24775 = [null,null,null,null,null,null,null,null];
(statearr_24775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__);

(statearr_24775[(1)] = (1));

return statearr_24775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1 = (function (state_24772){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_24772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e24776){if((e24776 instanceof Object)){
var ex__24514__auto__ = e24776;
var statearr_24777_24937 = state_24772;
(statearr_24777_24937[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24938 = state_24772;
state_24772 = G__24938;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__ = function(state_24772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1.call(this,state_24772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___24936,res,vec__24765,v,p,job,jobs,results))
})();
var state__24602__auto__ = (function (){var statearr_24778 = f__24601__auto__.call(null);
(statearr_24778[(6)] = c__24600__auto___24936);

return statearr_24778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___24936,res,vec__24765,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24779){
var vec__24780 = p__24779;
var v = cljs.core.nth.call(null,vec__24780,(0),null);
var p = cljs.core.nth.call(null,vec__24780,(1),null);
var job = vec__24780;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__9961__auto___24939 = n;
var __24940 = (0);
while(true){
if((__24940 < n__9961__auto___24939)){
var G__24783_24941 = type;
var G__24783_24942__$1 = (((G__24783_24941 instanceof cljs.core.Keyword))?G__24783_24941.fqn:null);
switch (G__24783_24942__$1) {
case "compute":
var c__24600__auto___24944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24940,c__24600__auto___24944,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (__24940,c__24600__auto___24944,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async){
return (function (state_24796){
var state_val_24797 = (state_24796[(1)]);
if((state_val_24797 === (1))){
var state_24796__$1 = state_24796;
var statearr_24798_24945 = state_24796__$1;
(statearr_24798_24945[(2)] = null);

(statearr_24798_24945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (2))){
var state_24796__$1 = state_24796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24796__$1,(4),jobs);
} else {
if((state_val_24797 === (3))){
var inst_24794 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24796__$1,inst_24794);
} else {
if((state_val_24797 === (4))){
var inst_24786 = (state_24796[(2)]);
var inst_24787 = process.call(null,inst_24786);
var state_24796__$1 = state_24796;
if(cljs.core.truth_(inst_24787)){
var statearr_24799_24946 = state_24796__$1;
(statearr_24799_24946[(1)] = (5));

} else {
var statearr_24800_24947 = state_24796__$1;
(statearr_24800_24947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (5))){
var state_24796__$1 = state_24796;
var statearr_24801_24948 = state_24796__$1;
(statearr_24801_24948[(2)] = null);

(statearr_24801_24948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (6))){
var state_24796__$1 = state_24796;
var statearr_24802_24949 = state_24796__$1;
(statearr_24802_24949[(2)] = null);

(statearr_24802_24949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24797 === (7))){
var inst_24792 = (state_24796[(2)]);
var state_24796__$1 = state_24796;
var statearr_24803_24950 = state_24796__$1;
(statearr_24803_24950[(2)] = inst_24792);

(statearr_24803_24950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24940,c__24600__auto___24944,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async))
;
return ((function (__24940,switch__24510__auto__,c__24600__auto___24944,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0 = (function (){
var statearr_24804 = [null,null,null,null,null,null,null];
(statearr_24804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__);

(statearr_24804[(1)] = (1));

return statearr_24804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1 = (function (state_24796){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_24796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e24805){if((e24805 instanceof Object)){
var ex__24514__auto__ = e24805;
var statearr_24806_24951 = state_24796;
(statearr_24806_24951[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24952 = state_24796;
state_24796 = G__24952;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__ = function(state_24796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1.call(this,state_24796);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__;
})()
;})(__24940,switch__24510__auto__,c__24600__auto___24944,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async))
})();
var state__24602__auto__ = (function (){var statearr_24807 = f__24601__auto__.call(null);
(statearr_24807[(6)] = c__24600__auto___24944);

return statearr_24807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(__24940,c__24600__auto___24944,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async))
);


break;
case "async":
var c__24600__auto___24953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24940,c__24600__auto___24953,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (__24940,c__24600__auto___24953,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async){
return (function (state_24820){
var state_val_24821 = (state_24820[(1)]);
if((state_val_24821 === (1))){
var state_24820__$1 = state_24820;
var statearr_24822_24954 = state_24820__$1;
(statearr_24822_24954[(2)] = null);

(statearr_24822_24954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (2))){
var state_24820__$1 = state_24820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24820__$1,(4),jobs);
} else {
if((state_val_24821 === (3))){
var inst_24818 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24820__$1,inst_24818);
} else {
if((state_val_24821 === (4))){
var inst_24810 = (state_24820[(2)]);
var inst_24811 = async.call(null,inst_24810);
var state_24820__$1 = state_24820;
if(cljs.core.truth_(inst_24811)){
var statearr_24823_24955 = state_24820__$1;
(statearr_24823_24955[(1)] = (5));

} else {
var statearr_24824_24956 = state_24820__$1;
(statearr_24824_24956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (5))){
var state_24820__$1 = state_24820;
var statearr_24825_24957 = state_24820__$1;
(statearr_24825_24957[(2)] = null);

(statearr_24825_24957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (6))){
var state_24820__$1 = state_24820;
var statearr_24826_24958 = state_24820__$1;
(statearr_24826_24958[(2)] = null);

(statearr_24826_24958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (7))){
var inst_24816 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
var statearr_24827_24959 = state_24820__$1;
(statearr_24827_24959[(2)] = inst_24816);

(statearr_24827_24959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24940,c__24600__auto___24953,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async))
;
return ((function (__24940,switch__24510__auto__,c__24600__auto___24953,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0 = (function (){
var statearr_24828 = [null,null,null,null,null,null,null];
(statearr_24828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__);

(statearr_24828[(1)] = (1));

return statearr_24828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1 = (function (state_24820){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_24820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e24829){if((e24829 instanceof Object)){
var ex__24514__auto__ = e24829;
var statearr_24830_24960 = state_24820;
(statearr_24830_24960[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24961 = state_24820;
state_24820 = G__24961;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__ = function(state_24820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1.call(this,state_24820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__;
})()
;})(__24940,switch__24510__auto__,c__24600__auto___24953,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async))
})();
var state__24602__auto__ = (function (){var statearr_24831 = f__24601__auto__.call(null);
(statearr_24831[(6)] = c__24600__auto___24953);

return statearr_24831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(__24940,c__24600__auto___24953,G__24783_24941,G__24783_24942__$1,n__9961__auto___24939,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24783_24942__$1)].join('')));

}

var G__24962 = (__24940 + (1));
__24940 = G__24962;
continue;
} else {
}
break;
}

var c__24600__auto___24963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___24963,jobs,results,process,async){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___24963,jobs,results,process,async){
return (function (state_24853){
var state_val_24854 = (state_24853[(1)]);
if((state_val_24854 === (1))){
var state_24853__$1 = state_24853;
var statearr_24855_24964 = state_24853__$1;
(statearr_24855_24964[(2)] = null);

(statearr_24855_24964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (2))){
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(4),from);
} else {
if((state_val_24854 === (3))){
var inst_24851 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24853__$1,inst_24851);
} else {
if((state_val_24854 === (4))){
var inst_24834 = (state_24853[(7)]);
var inst_24834__$1 = (state_24853[(2)]);
var inst_24835 = (inst_24834__$1 == null);
var state_24853__$1 = (function (){var statearr_24856 = state_24853;
(statearr_24856[(7)] = inst_24834__$1);

return statearr_24856;
})();
if(cljs.core.truth_(inst_24835)){
var statearr_24857_24965 = state_24853__$1;
(statearr_24857_24965[(1)] = (5));

} else {
var statearr_24858_24966 = state_24853__$1;
(statearr_24858_24966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (5))){
var inst_24837 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24853__$1 = state_24853;
var statearr_24859_24967 = state_24853__$1;
(statearr_24859_24967[(2)] = inst_24837);

(statearr_24859_24967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (6))){
var inst_24839 = (state_24853[(8)]);
var inst_24834 = (state_24853[(7)]);
var inst_24839__$1 = cljs.core.async.chan.call(null,(1));
var inst_24840 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24841 = [inst_24834,inst_24839__$1];
var inst_24842 = (new cljs.core.PersistentVector(null,2,(5),inst_24840,inst_24841,null));
var state_24853__$1 = (function (){var statearr_24860 = state_24853;
(statearr_24860[(8)] = inst_24839__$1);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24853__$1,(8),jobs,inst_24842);
} else {
if((state_val_24854 === (7))){
var inst_24849 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24861_24968 = state_24853__$1;
(statearr_24861_24968[(2)] = inst_24849);

(statearr_24861_24968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (8))){
var inst_24839 = (state_24853[(8)]);
var inst_24844 = (state_24853[(2)]);
var state_24853__$1 = (function (){var statearr_24862 = state_24853;
(statearr_24862[(9)] = inst_24844);

return statearr_24862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24853__$1,(9),results,inst_24839);
} else {
if((state_val_24854 === (9))){
var inst_24846 = (state_24853[(2)]);
var state_24853__$1 = (function (){var statearr_24863 = state_24853;
(statearr_24863[(10)] = inst_24846);

return statearr_24863;
})();
var statearr_24864_24969 = state_24853__$1;
(statearr_24864_24969[(2)] = null);

(statearr_24864_24969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___24963,jobs,results,process,async))
;
return ((function (switch__24510__auto__,c__24600__auto___24963,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0 = (function (){
var statearr_24865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__);

(statearr_24865[(1)] = (1));

return statearr_24865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1 = (function (state_24853){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_24853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e24866){if((e24866 instanceof Object)){
var ex__24514__auto__ = e24866;
var statearr_24867_24970 = state_24853;
(statearr_24867_24970[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24971 = state_24853;
state_24853 = G__24971;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__ = function(state_24853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1.call(this,state_24853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___24963,jobs,results,process,async))
})();
var state__24602__auto__ = (function (){var statearr_24868 = f__24601__auto__.call(null);
(statearr_24868[(6)] = c__24600__auto___24963);

return statearr_24868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___24963,jobs,results,process,async))
);


var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,jobs,results,process,async){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,jobs,results,process,async){
return (function (state_24906){
var state_val_24907 = (state_24906[(1)]);
if((state_val_24907 === (7))){
var inst_24902 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
var statearr_24908_24972 = state_24906__$1;
(statearr_24908_24972[(2)] = inst_24902);

(statearr_24908_24972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (20))){
var state_24906__$1 = state_24906;
var statearr_24909_24973 = state_24906__$1;
(statearr_24909_24973[(2)] = null);

(statearr_24909_24973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (1))){
var state_24906__$1 = state_24906;
var statearr_24910_24974 = state_24906__$1;
(statearr_24910_24974[(2)] = null);

(statearr_24910_24974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (4))){
var inst_24871 = (state_24906[(7)]);
var inst_24871__$1 = (state_24906[(2)]);
var inst_24872 = (inst_24871__$1 == null);
var state_24906__$1 = (function (){var statearr_24911 = state_24906;
(statearr_24911[(7)] = inst_24871__$1);

return statearr_24911;
})();
if(cljs.core.truth_(inst_24872)){
var statearr_24912_24975 = state_24906__$1;
(statearr_24912_24975[(1)] = (5));

} else {
var statearr_24913_24976 = state_24906__$1;
(statearr_24913_24976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (15))){
var inst_24884 = (state_24906[(8)]);
var state_24906__$1 = state_24906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24906__$1,(18),to,inst_24884);
} else {
if((state_val_24907 === (21))){
var inst_24897 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
var statearr_24914_24977 = state_24906__$1;
(statearr_24914_24977[(2)] = inst_24897);

(statearr_24914_24977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (13))){
var inst_24899 = (state_24906[(2)]);
var state_24906__$1 = (function (){var statearr_24915 = state_24906;
(statearr_24915[(9)] = inst_24899);

return statearr_24915;
})();
var statearr_24916_24978 = state_24906__$1;
(statearr_24916_24978[(2)] = null);

(statearr_24916_24978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (6))){
var inst_24871 = (state_24906[(7)]);
var state_24906__$1 = state_24906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24906__$1,(11),inst_24871);
} else {
if((state_val_24907 === (17))){
var inst_24892 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
if(cljs.core.truth_(inst_24892)){
var statearr_24917_24979 = state_24906__$1;
(statearr_24917_24979[(1)] = (19));

} else {
var statearr_24918_24980 = state_24906__$1;
(statearr_24918_24980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (3))){
var inst_24904 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24906__$1,inst_24904);
} else {
if((state_val_24907 === (12))){
var inst_24881 = (state_24906[(10)]);
var state_24906__$1 = state_24906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24906__$1,(14),inst_24881);
} else {
if((state_val_24907 === (2))){
var state_24906__$1 = state_24906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24906__$1,(4),results);
} else {
if((state_val_24907 === (19))){
var state_24906__$1 = state_24906;
var statearr_24919_24981 = state_24906__$1;
(statearr_24919_24981[(2)] = null);

(statearr_24919_24981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (11))){
var inst_24881 = (state_24906[(2)]);
var state_24906__$1 = (function (){var statearr_24920 = state_24906;
(statearr_24920[(10)] = inst_24881);

return statearr_24920;
})();
var statearr_24921_24982 = state_24906__$1;
(statearr_24921_24982[(2)] = null);

(statearr_24921_24982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (9))){
var state_24906__$1 = state_24906;
var statearr_24922_24983 = state_24906__$1;
(statearr_24922_24983[(2)] = null);

(statearr_24922_24983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (5))){
var state_24906__$1 = state_24906;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24923_24984 = state_24906__$1;
(statearr_24923_24984[(1)] = (8));

} else {
var statearr_24924_24985 = state_24906__$1;
(statearr_24924_24985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (14))){
var inst_24884 = (state_24906[(8)]);
var inst_24886 = (state_24906[(11)]);
var inst_24884__$1 = (state_24906[(2)]);
var inst_24885 = (inst_24884__$1 == null);
var inst_24886__$1 = cljs.core.not.call(null,inst_24885);
var state_24906__$1 = (function (){var statearr_24925 = state_24906;
(statearr_24925[(8)] = inst_24884__$1);

(statearr_24925[(11)] = inst_24886__$1);

return statearr_24925;
})();
if(inst_24886__$1){
var statearr_24926_24986 = state_24906__$1;
(statearr_24926_24986[(1)] = (15));

} else {
var statearr_24927_24987 = state_24906__$1;
(statearr_24927_24987[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (16))){
var inst_24886 = (state_24906[(11)]);
var state_24906__$1 = state_24906;
var statearr_24928_24988 = state_24906__$1;
(statearr_24928_24988[(2)] = inst_24886);

(statearr_24928_24988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (10))){
var inst_24878 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
var statearr_24929_24989 = state_24906__$1;
(statearr_24929_24989[(2)] = inst_24878);

(statearr_24929_24989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (18))){
var inst_24889 = (state_24906[(2)]);
var state_24906__$1 = state_24906;
var statearr_24930_24990 = state_24906__$1;
(statearr_24930_24990[(2)] = inst_24889);

(statearr_24930_24990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24907 === (8))){
var inst_24875 = cljs.core.async.close_BANG_.call(null,to);
var state_24906__$1 = state_24906;
var statearr_24931_24991 = state_24906__$1;
(statearr_24931_24991[(2)] = inst_24875);

(statearr_24931_24991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto__,jobs,results,process,async))
;
return ((function (switch__24510__auto__,c__24600__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0 = (function (){
var statearr_24932 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__);

(statearr_24932[(1)] = (1));

return statearr_24932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1 = (function (state_24906){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_24906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e24933){if((e24933 instanceof Object)){
var ex__24514__auto__ = e24933;
var statearr_24934_24992 = state_24906;
(statearr_24934_24992[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24993 = state_24906;
state_24906 = G__24993;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__ = function(state_24906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1.call(this,state_24906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24511__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,jobs,results,process,async))
})();
var state__24602__auto__ = (function (){var statearr_24935 = f__24601__auto__.call(null);
(statearr_24935[(6)] = c__24600__auto__);

return statearr_24935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,jobs,results,process,async))
);

return c__24600__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24995 = arguments.length;
switch (G__24995) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24998 = arguments.length;
switch (G__24998) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25001 = arguments.length;
switch (G__25001) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24600__auto___25050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___25050,tc,fc){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___25050,tc,fc){
return (function (state_25027){
var state_val_25028 = (state_25027[(1)]);
if((state_val_25028 === (7))){
var inst_25023 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
var statearr_25029_25051 = state_25027__$1;
(statearr_25029_25051[(2)] = inst_25023);

(statearr_25029_25051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (1))){
var state_25027__$1 = state_25027;
var statearr_25030_25052 = state_25027__$1;
(statearr_25030_25052[(2)] = null);

(statearr_25030_25052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (4))){
var inst_25004 = (state_25027[(7)]);
var inst_25004__$1 = (state_25027[(2)]);
var inst_25005 = (inst_25004__$1 == null);
var state_25027__$1 = (function (){var statearr_25031 = state_25027;
(statearr_25031[(7)] = inst_25004__$1);

return statearr_25031;
})();
if(cljs.core.truth_(inst_25005)){
var statearr_25032_25053 = state_25027__$1;
(statearr_25032_25053[(1)] = (5));

} else {
var statearr_25033_25054 = state_25027__$1;
(statearr_25033_25054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (13))){
var state_25027__$1 = state_25027;
var statearr_25034_25055 = state_25027__$1;
(statearr_25034_25055[(2)] = null);

(statearr_25034_25055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (6))){
var inst_25004 = (state_25027[(7)]);
var inst_25010 = p.call(null,inst_25004);
var state_25027__$1 = state_25027;
if(cljs.core.truth_(inst_25010)){
var statearr_25035_25056 = state_25027__$1;
(statearr_25035_25056[(1)] = (9));

} else {
var statearr_25036_25057 = state_25027__$1;
(statearr_25036_25057[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (3))){
var inst_25025 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25027__$1,inst_25025);
} else {
if((state_val_25028 === (12))){
var state_25027__$1 = state_25027;
var statearr_25037_25058 = state_25027__$1;
(statearr_25037_25058[(2)] = null);

(statearr_25037_25058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (2))){
var state_25027__$1 = state_25027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25027__$1,(4),ch);
} else {
if((state_val_25028 === (11))){
var inst_25004 = (state_25027[(7)]);
var inst_25014 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25027__$1,(8),inst_25014,inst_25004);
} else {
if((state_val_25028 === (9))){
var state_25027__$1 = state_25027;
var statearr_25038_25059 = state_25027__$1;
(statearr_25038_25059[(2)] = tc);

(statearr_25038_25059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (5))){
var inst_25007 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25008 = cljs.core.async.close_BANG_.call(null,fc);
var state_25027__$1 = (function (){var statearr_25039 = state_25027;
(statearr_25039[(8)] = inst_25007);

return statearr_25039;
})();
var statearr_25040_25060 = state_25027__$1;
(statearr_25040_25060[(2)] = inst_25008);

(statearr_25040_25060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (14))){
var inst_25021 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
var statearr_25041_25061 = state_25027__$1;
(statearr_25041_25061[(2)] = inst_25021);

(statearr_25041_25061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (10))){
var state_25027__$1 = state_25027;
var statearr_25042_25062 = state_25027__$1;
(statearr_25042_25062[(2)] = fc);

(statearr_25042_25062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (8))){
var inst_25016 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
if(cljs.core.truth_(inst_25016)){
var statearr_25043_25063 = state_25027__$1;
(statearr_25043_25063[(1)] = (12));

} else {
var statearr_25044_25064 = state_25027__$1;
(statearr_25044_25064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___25050,tc,fc))
;
return ((function (switch__24510__auto__,c__24600__auto___25050,tc,fc){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_25045 = [null,null,null,null,null,null,null,null,null];
(statearr_25045[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_25045[(1)] = (1));

return statearr_25045;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_25027){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_25027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e25046){if((e25046 instanceof Object)){
var ex__24514__auto__ = e25046;
var statearr_25047_25065 = state_25027;
(statearr_25047_25065[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25066 = state_25027;
state_25027 = G__25066;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_25027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_25027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___25050,tc,fc))
})();
var state__24602__auto__ = (function (){var statearr_25048 = f__24601__auto__.call(null);
(statearr_25048[(6)] = c__24600__auto___25050);

return statearr_25048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___25050,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_25087){
var state_val_25088 = (state_25087[(1)]);
if((state_val_25088 === (7))){
var inst_25083 = (state_25087[(2)]);
var state_25087__$1 = state_25087;
var statearr_25089_25107 = state_25087__$1;
(statearr_25089_25107[(2)] = inst_25083);

(statearr_25089_25107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (1))){
var inst_25067 = init;
var state_25087__$1 = (function (){var statearr_25090 = state_25087;
(statearr_25090[(7)] = inst_25067);

return statearr_25090;
})();
var statearr_25091_25108 = state_25087__$1;
(statearr_25091_25108[(2)] = null);

(statearr_25091_25108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (4))){
var inst_25070 = (state_25087[(8)]);
var inst_25070__$1 = (state_25087[(2)]);
var inst_25071 = (inst_25070__$1 == null);
var state_25087__$1 = (function (){var statearr_25092 = state_25087;
(statearr_25092[(8)] = inst_25070__$1);

return statearr_25092;
})();
if(cljs.core.truth_(inst_25071)){
var statearr_25093_25109 = state_25087__$1;
(statearr_25093_25109[(1)] = (5));

} else {
var statearr_25094_25110 = state_25087__$1;
(statearr_25094_25110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (6))){
var inst_25074 = (state_25087[(9)]);
var inst_25067 = (state_25087[(7)]);
var inst_25070 = (state_25087[(8)]);
var inst_25074__$1 = f.call(null,inst_25067,inst_25070);
var inst_25075 = cljs.core.reduced_QMARK_.call(null,inst_25074__$1);
var state_25087__$1 = (function (){var statearr_25095 = state_25087;
(statearr_25095[(9)] = inst_25074__$1);

return statearr_25095;
})();
if(inst_25075){
var statearr_25096_25111 = state_25087__$1;
(statearr_25096_25111[(1)] = (8));

} else {
var statearr_25097_25112 = state_25087__$1;
(statearr_25097_25112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (3))){
var inst_25085 = (state_25087[(2)]);
var state_25087__$1 = state_25087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25087__$1,inst_25085);
} else {
if((state_val_25088 === (2))){
var state_25087__$1 = state_25087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25087__$1,(4),ch);
} else {
if((state_val_25088 === (9))){
var inst_25074 = (state_25087[(9)]);
var inst_25067 = inst_25074;
var state_25087__$1 = (function (){var statearr_25098 = state_25087;
(statearr_25098[(7)] = inst_25067);

return statearr_25098;
})();
var statearr_25099_25113 = state_25087__$1;
(statearr_25099_25113[(2)] = null);

(statearr_25099_25113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (5))){
var inst_25067 = (state_25087[(7)]);
var state_25087__$1 = state_25087;
var statearr_25100_25114 = state_25087__$1;
(statearr_25100_25114[(2)] = inst_25067);

(statearr_25100_25114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (10))){
var inst_25081 = (state_25087[(2)]);
var state_25087__$1 = state_25087;
var statearr_25101_25115 = state_25087__$1;
(statearr_25101_25115[(2)] = inst_25081);

(statearr_25101_25115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (8))){
var inst_25074 = (state_25087[(9)]);
var inst_25077 = cljs.core.deref.call(null,inst_25074);
var state_25087__$1 = state_25087;
var statearr_25102_25116 = state_25087__$1;
(statearr_25102_25116[(2)] = inst_25077);

(statearr_25102_25116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24511__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24511__auto____0 = (function (){
var statearr_25103 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25103[(0)] = cljs$core$async$reduce_$_state_machine__24511__auto__);

(statearr_25103[(1)] = (1));

return statearr_25103;
});
var cljs$core$async$reduce_$_state_machine__24511__auto____1 = (function (state_25087){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_25087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e25104){if((e25104 instanceof Object)){
var ex__24514__auto__ = e25104;
var statearr_25105_25117 = state_25087;
(statearr_25105_25117[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25118 = state_25087;
state_25087 = G__25118;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24511__auto__ = function(state_25087){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24511__auto____1.call(this,state_25087);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24511__auto____0;
cljs$core$async$reduce_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24511__auto____1;
return cljs$core$async$reduce_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_25106 = f__24601__auto__.call(null);
(statearr_25106[(6)] = c__24600__auto__);

return statearr_25106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__,f__$1){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__,f__$1){
return (function (state_25124){
var state_val_25125 = (state_25124[(1)]);
if((state_val_25125 === (1))){
var inst_25119 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25124__$1 = state_25124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25124__$1,(2),inst_25119);
} else {
if((state_val_25125 === (2))){
var inst_25121 = (state_25124[(2)]);
var inst_25122 = f__$1.call(null,inst_25121);
var state_25124__$1 = state_25124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25124__$1,inst_25122);
} else {
return null;
}
}
});})(c__24600__auto__,f__$1))
;
return ((function (switch__24510__auto__,c__24600__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24511__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24511__auto____0 = (function (){
var statearr_25126 = [null,null,null,null,null,null,null];
(statearr_25126[(0)] = cljs$core$async$transduce_$_state_machine__24511__auto__);

(statearr_25126[(1)] = (1));

return statearr_25126;
});
var cljs$core$async$transduce_$_state_machine__24511__auto____1 = (function (state_25124){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_25124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e25127){if((e25127 instanceof Object)){
var ex__24514__auto__ = e25127;
var statearr_25128_25130 = state_25124;
(statearr_25128_25130[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25131 = state_25124;
state_25124 = G__25131;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24511__auto__ = function(state_25124){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24511__auto____1.call(this,state_25124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24511__auto____0;
cljs$core$async$transduce_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24511__auto____1;
return cljs$core$async$transduce_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__,f__$1))
})();
var state__24602__auto__ = (function (){var statearr_25129 = f__24601__auto__.call(null);
(statearr_25129[(6)] = c__24600__auto__);

return statearr_25129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__,f__$1))
);

return c__24600__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25133 = arguments.length;
switch (G__25133) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_25158){
var state_val_25159 = (state_25158[(1)]);
if((state_val_25159 === (7))){
var inst_25140 = (state_25158[(2)]);
var state_25158__$1 = state_25158;
var statearr_25160_25181 = state_25158__$1;
(statearr_25160_25181[(2)] = inst_25140);

(statearr_25160_25181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (1))){
var inst_25134 = cljs.core.seq.call(null,coll);
var inst_25135 = inst_25134;
var state_25158__$1 = (function (){var statearr_25161 = state_25158;
(statearr_25161[(7)] = inst_25135);

return statearr_25161;
})();
var statearr_25162_25182 = state_25158__$1;
(statearr_25162_25182[(2)] = null);

(statearr_25162_25182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (4))){
var inst_25135 = (state_25158[(7)]);
var inst_25138 = cljs.core.first.call(null,inst_25135);
var state_25158__$1 = state_25158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25158__$1,(7),ch,inst_25138);
} else {
if((state_val_25159 === (13))){
var inst_25152 = (state_25158[(2)]);
var state_25158__$1 = state_25158;
var statearr_25163_25183 = state_25158__$1;
(statearr_25163_25183[(2)] = inst_25152);

(statearr_25163_25183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (6))){
var inst_25143 = (state_25158[(2)]);
var state_25158__$1 = state_25158;
if(cljs.core.truth_(inst_25143)){
var statearr_25164_25184 = state_25158__$1;
(statearr_25164_25184[(1)] = (8));

} else {
var statearr_25165_25185 = state_25158__$1;
(statearr_25165_25185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (3))){
var inst_25156 = (state_25158[(2)]);
var state_25158__$1 = state_25158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25158__$1,inst_25156);
} else {
if((state_val_25159 === (12))){
var state_25158__$1 = state_25158;
var statearr_25166_25186 = state_25158__$1;
(statearr_25166_25186[(2)] = null);

(statearr_25166_25186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (2))){
var inst_25135 = (state_25158[(7)]);
var state_25158__$1 = state_25158;
if(cljs.core.truth_(inst_25135)){
var statearr_25167_25187 = state_25158__$1;
(statearr_25167_25187[(1)] = (4));

} else {
var statearr_25168_25188 = state_25158__$1;
(statearr_25168_25188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (11))){
var inst_25149 = cljs.core.async.close_BANG_.call(null,ch);
var state_25158__$1 = state_25158;
var statearr_25169_25189 = state_25158__$1;
(statearr_25169_25189[(2)] = inst_25149);

(statearr_25169_25189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (9))){
var state_25158__$1 = state_25158;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25170_25190 = state_25158__$1;
(statearr_25170_25190[(1)] = (11));

} else {
var statearr_25171_25191 = state_25158__$1;
(statearr_25171_25191[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (5))){
var inst_25135 = (state_25158[(7)]);
var state_25158__$1 = state_25158;
var statearr_25172_25192 = state_25158__$1;
(statearr_25172_25192[(2)] = inst_25135);

(statearr_25172_25192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (10))){
var inst_25154 = (state_25158[(2)]);
var state_25158__$1 = state_25158;
var statearr_25173_25193 = state_25158__$1;
(statearr_25173_25193[(2)] = inst_25154);

(statearr_25173_25193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25159 === (8))){
var inst_25135 = (state_25158[(7)]);
var inst_25145 = cljs.core.next.call(null,inst_25135);
var inst_25135__$1 = inst_25145;
var state_25158__$1 = (function (){var statearr_25174 = state_25158;
(statearr_25174[(7)] = inst_25135__$1);

return statearr_25174;
})();
var statearr_25175_25194 = state_25158__$1;
(statearr_25175_25194[(2)] = null);

(statearr_25175_25194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_25176 = [null,null,null,null,null,null,null,null];
(statearr_25176[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_25176[(1)] = (1));

return statearr_25176;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_25158){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_25158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e25177){if((e25177 instanceof Object)){
var ex__24514__auto__ = e25177;
var statearr_25178_25195 = state_25158;
(statearr_25178_25195[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25196 = state_25158;
state_25158 = G__25196;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_25158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_25158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_25179 = f__24601__auto__.call(null);
(statearr_25179[(6)] = c__24600__auto__);

return statearr_25179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9649__auto__ = (((_ == null))?null:_);
var m__9650__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,_);
} else {
var m__9650__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9650__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,ch);
} else {
var m__9650__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m);
} else {
var m__9650__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25197 = (function (ch,cs,meta25198){
this.ch = ch;
this.cs = cs;
this.meta25198 = meta25198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25199,meta25198__$1){
var self__ = this;
var _25199__$1 = this;
return (new cljs.core.async.t_cljs$core$async25197(self__.ch,self__.cs,meta25198__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25199){
var self__ = this;
var _25199__$1 = this;
return self__.meta25198;
});})(cs))
;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25197.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25197.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25198","meta25198",-265831635,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25197";

cljs.core.async.t_cljs$core$async25197.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async25197");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25197 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25197(ch__$1,cs__$1,meta25198){
return (new cljs.core.async.t_cljs$core$async25197(ch__$1,cs__$1,meta25198));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25197(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24600__auto___25419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___25419,cs,m,dchan,dctr,done){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___25419,cs,m,dchan,dctr,done){
return (function (state_25334){
var state_val_25335 = (state_25334[(1)]);
if((state_val_25335 === (7))){
var inst_25330 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25336_25420 = state_25334__$1;
(statearr_25336_25420[(2)] = inst_25330);

(statearr_25336_25420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (20))){
var inst_25233 = (state_25334[(7)]);
var inst_25245 = cljs.core.first.call(null,inst_25233);
var inst_25246 = cljs.core.nth.call(null,inst_25245,(0),null);
var inst_25247 = cljs.core.nth.call(null,inst_25245,(1),null);
var state_25334__$1 = (function (){var statearr_25337 = state_25334;
(statearr_25337[(8)] = inst_25246);

return statearr_25337;
})();
if(cljs.core.truth_(inst_25247)){
var statearr_25338_25421 = state_25334__$1;
(statearr_25338_25421[(1)] = (22));

} else {
var statearr_25339_25422 = state_25334__$1;
(statearr_25339_25422[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (27))){
var inst_25282 = (state_25334[(9)]);
var inst_25202 = (state_25334[(10)]);
var inst_25275 = (state_25334[(11)]);
var inst_25277 = (state_25334[(12)]);
var inst_25282__$1 = cljs.core._nth.call(null,inst_25275,inst_25277);
var inst_25283 = cljs.core.async.put_BANG_.call(null,inst_25282__$1,inst_25202,done);
var state_25334__$1 = (function (){var statearr_25340 = state_25334;
(statearr_25340[(9)] = inst_25282__$1);

return statearr_25340;
})();
if(cljs.core.truth_(inst_25283)){
var statearr_25341_25423 = state_25334__$1;
(statearr_25341_25423[(1)] = (30));

} else {
var statearr_25342_25424 = state_25334__$1;
(statearr_25342_25424[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (1))){
var state_25334__$1 = state_25334;
var statearr_25343_25425 = state_25334__$1;
(statearr_25343_25425[(2)] = null);

(statearr_25343_25425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (24))){
var inst_25233 = (state_25334[(7)]);
var inst_25252 = (state_25334[(2)]);
var inst_25253 = cljs.core.next.call(null,inst_25233);
var inst_25211 = inst_25253;
var inst_25212 = null;
var inst_25213 = (0);
var inst_25214 = (0);
var state_25334__$1 = (function (){var statearr_25344 = state_25334;
(statearr_25344[(13)] = inst_25214);

(statearr_25344[(14)] = inst_25211);

(statearr_25344[(15)] = inst_25213);

(statearr_25344[(16)] = inst_25252);

(statearr_25344[(17)] = inst_25212);

return statearr_25344;
})();
var statearr_25345_25426 = state_25334__$1;
(statearr_25345_25426[(2)] = null);

(statearr_25345_25426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (39))){
var state_25334__$1 = state_25334;
var statearr_25349_25427 = state_25334__$1;
(statearr_25349_25427[(2)] = null);

(statearr_25349_25427[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (4))){
var inst_25202 = (state_25334[(10)]);
var inst_25202__$1 = (state_25334[(2)]);
var inst_25203 = (inst_25202__$1 == null);
var state_25334__$1 = (function (){var statearr_25350 = state_25334;
(statearr_25350[(10)] = inst_25202__$1);

return statearr_25350;
})();
if(cljs.core.truth_(inst_25203)){
var statearr_25351_25428 = state_25334__$1;
(statearr_25351_25428[(1)] = (5));

} else {
var statearr_25352_25429 = state_25334__$1;
(statearr_25352_25429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (15))){
var inst_25214 = (state_25334[(13)]);
var inst_25211 = (state_25334[(14)]);
var inst_25213 = (state_25334[(15)]);
var inst_25212 = (state_25334[(17)]);
var inst_25229 = (state_25334[(2)]);
var inst_25230 = (inst_25214 + (1));
var tmp25346 = inst_25211;
var tmp25347 = inst_25213;
var tmp25348 = inst_25212;
var inst_25211__$1 = tmp25346;
var inst_25212__$1 = tmp25348;
var inst_25213__$1 = tmp25347;
var inst_25214__$1 = inst_25230;
var state_25334__$1 = (function (){var statearr_25353 = state_25334;
(statearr_25353[(13)] = inst_25214__$1);

(statearr_25353[(18)] = inst_25229);

(statearr_25353[(14)] = inst_25211__$1);

(statearr_25353[(15)] = inst_25213__$1);

(statearr_25353[(17)] = inst_25212__$1);

return statearr_25353;
})();
var statearr_25354_25430 = state_25334__$1;
(statearr_25354_25430[(2)] = null);

(statearr_25354_25430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (21))){
var inst_25256 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25358_25431 = state_25334__$1;
(statearr_25358_25431[(2)] = inst_25256);

(statearr_25358_25431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (31))){
var inst_25282 = (state_25334[(9)]);
var inst_25286 = done.call(null,null);
var inst_25287 = cljs.core.async.untap_STAR_.call(null,m,inst_25282);
var state_25334__$1 = (function (){var statearr_25359 = state_25334;
(statearr_25359[(19)] = inst_25286);

return statearr_25359;
})();
var statearr_25360_25432 = state_25334__$1;
(statearr_25360_25432[(2)] = inst_25287);

(statearr_25360_25432[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (32))){
var inst_25276 = (state_25334[(20)]);
var inst_25274 = (state_25334[(21)]);
var inst_25275 = (state_25334[(11)]);
var inst_25277 = (state_25334[(12)]);
var inst_25289 = (state_25334[(2)]);
var inst_25290 = (inst_25277 + (1));
var tmp25355 = inst_25276;
var tmp25356 = inst_25274;
var tmp25357 = inst_25275;
var inst_25274__$1 = tmp25356;
var inst_25275__$1 = tmp25357;
var inst_25276__$1 = tmp25355;
var inst_25277__$1 = inst_25290;
var state_25334__$1 = (function (){var statearr_25361 = state_25334;
(statearr_25361[(20)] = inst_25276__$1);

(statearr_25361[(22)] = inst_25289);

(statearr_25361[(21)] = inst_25274__$1);

(statearr_25361[(11)] = inst_25275__$1);

(statearr_25361[(12)] = inst_25277__$1);

return statearr_25361;
})();
var statearr_25362_25433 = state_25334__$1;
(statearr_25362_25433[(2)] = null);

(statearr_25362_25433[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (40))){
var inst_25302 = (state_25334[(23)]);
var inst_25306 = done.call(null,null);
var inst_25307 = cljs.core.async.untap_STAR_.call(null,m,inst_25302);
var state_25334__$1 = (function (){var statearr_25363 = state_25334;
(statearr_25363[(24)] = inst_25306);

return statearr_25363;
})();
var statearr_25364_25434 = state_25334__$1;
(statearr_25364_25434[(2)] = inst_25307);

(statearr_25364_25434[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (33))){
var inst_25293 = (state_25334[(25)]);
var inst_25295 = cljs.core.chunked_seq_QMARK_.call(null,inst_25293);
var state_25334__$1 = state_25334;
if(inst_25295){
var statearr_25365_25435 = state_25334__$1;
(statearr_25365_25435[(1)] = (36));

} else {
var statearr_25366_25436 = state_25334__$1;
(statearr_25366_25436[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (13))){
var inst_25223 = (state_25334[(26)]);
var inst_25226 = cljs.core.async.close_BANG_.call(null,inst_25223);
var state_25334__$1 = state_25334;
var statearr_25367_25437 = state_25334__$1;
(statearr_25367_25437[(2)] = inst_25226);

(statearr_25367_25437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (22))){
var inst_25246 = (state_25334[(8)]);
var inst_25249 = cljs.core.async.close_BANG_.call(null,inst_25246);
var state_25334__$1 = state_25334;
var statearr_25368_25438 = state_25334__$1;
(statearr_25368_25438[(2)] = inst_25249);

(statearr_25368_25438[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (36))){
var inst_25293 = (state_25334[(25)]);
var inst_25297 = cljs.core.chunk_first.call(null,inst_25293);
var inst_25298 = cljs.core.chunk_rest.call(null,inst_25293);
var inst_25299 = cljs.core.count.call(null,inst_25297);
var inst_25274 = inst_25298;
var inst_25275 = inst_25297;
var inst_25276 = inst_25299;
var inst_25277 = (0);
var state_25334__$1 = (function (){var statearr_25369 = state_25334;
(statearr_25369[(20)] = inst_25276);

(statearr_25369[(21)] = inst_25274);

(statearr_25369[(11)] = inst_25275);

(statearr_25369[(12)] = inst_25277);

return statearr_25369;
})();
var statearr_25370_25439 = state_25334__$1;
(statearr_25370_25439[(2)] = null);

(statearr_25370_25439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (41))){
var inst_25293 = (state_25334[(25)]);
var inst_25309 = (state_25334[(2)]);
var inst_25310 = cljs.core.next.call(null,inst_25293);
var inst_25274 = inst_25310;
var inst_25275 = null;
var inst_25276 = (0);
var inst_25277 = (0);
var state_25334__$1 = (function (){var statearr_25371 = state_25334;
(statearr_25371[(27)] = inst_25309);

(statearr_25371[(20)] = inst_25276);

(statearr_25371[(21)] = inst_25274);

(statearr_25371[(11)] = inst_25275);

(statearr_25371[(12)] = inst_25277);

return statearr_25371;
})();
var statearr_25372_25440 = state_25334__$1;
(statearr_25372_25440[(2)] = null);

(statearr_25372_25440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (43))){
var state_25334__$1 = state_25334;
var statearr_25373_25441 = state_25334__$1;
(statearr_25373_25441[(2)] = null);

(statearr_25373_25441[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (29))){
var inst_25318 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25374_25442 = state_25334__$1;
(statearr_25374_25442[(2)] = inst_25318);

(statearr_25374_25442[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (44))){
var inst_25327 = (state_25334[(2)]);
var state_25334__$1 = (function (){var statearr_25375 = state_25334;
(statearr_25375[(28)] = inst_25327);

return statearr_25375;
})();
var statearr_25376_25443 = state_25334__$1;
(statearr_25376_25443[(2)] = null);

(statearr_25376_25443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (6))){
var inst_25266 = (state_25334[(29)]);
var inst_25265 = cljs.core.deref.call(null,cs);
var inst_25266__$1 = cljs.core.keys.call(null,inst_25265);
var inst_25267 = cljs.core.count.call(null,inst_25266__$1);
var inst_25268 = cljs.core.reset_BANG_.call(null,dctr,inst_25267);
var inst_25273 = cljs.core.seq.call(null,inst_25266__$1);
var inst_25274 = inst_25273;
var inst_25275 = null;
var inst_25276 = (0);
var inst_25277 = (0);
var state_25334__$1 = (function (){var statearr_25377 = state_25334;
(statearr_25377[(30)] = inst_25268);

(statearr_25377[(20)] = inst_25276);

(statearr_25377[(21)] = inst_25274);

(statearr_25377[(11)] = inst_25275);

(statearr_25377[(12)] = inst_25277);

(statearr_25377[(29)] = inst_25266__$1);

return statearr_25377;
})();
var statearr_25378_25444 = state_25334__$1;
(statearr_25378_25444[(2)] = null);

(statearr_25378_25444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (28))){
var inst_25274 = (state_25334[(21)]);
var inst_25293 = (state_25334[(25)]);
var inst_25293__$1 = cljs.core.seq.call(null,inst_25274);
var state_25334__$1 = (function (){var statearr_25379 = state_25334;
(statearr_25379[(25)] = inst_25293__$1);

return statearr_25379;
})();
if(inst_25293__$1){
var statearr_25380_25445 = state_25334__$1;
(statearr_25380_25445[(1)] = (33));

} else {
var statearr_25381_25446 = state_25334__$1;
(statearr_25381_25446[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (25))){
var inst_25276 = (state_25334[(20)]);
var inst_25277 = (state_25334[(12)]);
var inst_25279 = (inst_25277 < inst_25276);
var inst_25280 = inst_25279;
var state_25334__$1 = state_25334;
if(cljs.core.truth_(inst_25280)){
var statearr_25382_25447 = state_25334__$1;
(statearr_25382_25447[(1)] = (27));

} else {
var statearr_25383_25448 = state_25334__$1;
(statearr_25383_25448[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (34))){
var state_25334__$1 = state_25334;
var statearr_25384_25449 = state_25334__$1;
(statearr_25384_25449[(2)] = null);

(statearr_25384_25449[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (17))){
var state_25334__$1 = state_25334;
var statearr_25385_25450 = state_25334__$1;
(statearr_25385_25450[(2)] = null);

(statearr_25385_25450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (3))){
var inst_25332 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25334__$1,inst_25332);
} else {
if((state_val_25335 === (12))){
var inst_25261 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25386_25451 = state_25334__$1;
(statearr_25386_25451[(2)] = inst_25261);

(statearr_25386_25451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (2))){
var state_25334__$1 = state_25334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25334__$1,(4),ch);
} else {
if((state_val_25335 === (23))){
var state_25334__$1 = state_25334;
var statearr_25387_25452 = state_25334__$1;
(statearr_25387_25452[(2)] = null);

(statearr_25387_25452[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (35))){
var inst_25316 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25388_25453 = state_25334__$1;
(statearr_25388_25453[(2)] = inst_25316);

(statearr_25388_25453[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (19))){
var inst_25233 = (state_25334[(7)]);
var inst_25237 = cljs.core.chunk_first.call(null,inst_25233);
var inst_25238 = cljs.core.chunk_rest.call(null,inst_25233);
var inst_25239 = cljs.core.count.call(null,inst_25237);
var inst_25211 = inst_25238;
var inst_25212 = inst_25237;
var inst_25213 = inst_25239;
var inst_25214 = (0);
var state_25334__$1 = (function (){var statearr_25389 = state_25334;
(statearr_25389[(13)] = inst_25214);

(statearr_25389[(14)] = inst_25211);

(statearr_25389[(15)] = inst_25213);

(statearr_25389[(17)] = inst_25212);

return statearr_25389;
})();
var statearr_25390_25454 = state_25334__$1;
(statearr_25390_25454[(2)] = null);

(statearr_25390_25454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (11))){
var inst_25211 = (state_25334[(14)]);
var inst_25233 = (state_25334[(7)]);
var inst_25233__$1 = cljs.core.seq.call(null,inst_25211);
var state_25334__$1 = (function (){var statearr_25391 = state_25334;
(statearr_25391[(7)] = inst_25233__$1);

return statearr_25391;
})();
if(inst_25233__$1){
var statearr_25392_25455 = state_25334__$1;
(statearr_25392_25455[(1)] = (16));

} else {
var statearr_25393_25456 = state_25334__$1;
(statearr_25393_25456[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (9))){
var inst_25263 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25394_25457 = state_25334__$1;
(statearr_25394_25457[(2)] = inst_25263);

(statearr_25394_25457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (5))){
var inst_25209 = cljs.core.deref.call(null,cs);
var inst_25210 = cljs.core.seq.call(null,inst_25209);
var inst_25211 = inst_25210;
var inst_25212 = null;
var inst_25213 = (0);
var inst_25214 = (0);
var state_25334__$1 = (function (){var statearr_25395 = state_25334;
(statearr_25395[(13)] = inst_25214);

(statearr_25395[(14)] = inst_25211);

(statearr_25395[(15)] = inst_25213);

(statearr_25395[(17)] = inst_25212);

return statearr_25395;
})();
var statearr_25396_25458 = state_25334__$1;
(statearr_25396_25458[(2)] = null);

(statearr_25396_25458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (14))){
var state_25334__$1 = state_25334;
var statearr_25397_25459 = state_25334__$1;
(statearr_25397_25459[(2)] = null);

(statearr_25397_25459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (45))){
var inst_25324 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25398_25460 = state_25334__$1;
(statearr_25398_25460[(2)] = inst_25324);

(statearr_25398_25460[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (26))){
var inst_25266 = (state_25334[(29)]);
var inst_25320 = (state_25334[(2)]);
var inst_25321 = cljs.core.seq.call(null,inst_25266);
var state_25334__$1 = (function (){var statearr_25399 = state_25334;
(statearr_25399[(31)] = inst_25320);

return statearr_25399;
})();
if(inst_25321){
var statearr_25400_25461 = state_25334__$1;
(statearr_25400_25461[(1)] = (42));

} else {
var statearr_25401_25462 = state_25334__$1;
(statearr_25401_25462[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (16))){
var inst_25233 = (state_25334[(7)]);
var inst_25235 = cljs.core.chunked_seq_QMARK_.call(null,inst_25233);
var state_25334__$1 = state_25334;
if(inst_25235){
var statearr_25402_25463 = state_25334__$1;
(statearr_25402_25463[(1)] = (19));

} else {
var statearr_25403_25464 = state_25334__$1;
(statearr_25403_25464[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (38))){
var inst_25313 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25404_25465 = state_25334__$1;
(statearr_25404_25465[(2)] = inst_25313);

(statearr_25404_25465[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (30))){
var state_25334__$1 = state_25334;
var statearr_25405_25466 = state_25334__$1;
(statearr_25405_25466[(2)] = null);

(statearr_25405_25466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (10))){
var inst_25214 = (state_25334[(13)]);
var inst_25212 = (state_25334[(17)]);
var inst_25222 = cljs.core._nth.call(null,inst_25212,inst_25214);
var inst_25223 = cljs.core.nth.call(null,inst_25222,(0),null);
var inst_25224 = cljs.core.nth.call(null,inst_25222,(1),null);
var state_25334__$1 = (function (){var statearr_25406 = state_25334;
(statearr_25406[(26)] = inst_25223);

return statearr_25406;
})();
if(cljs.core.truth_(inst_25224)){
var statearr_25407_25467 = state_25334__$1;
(statearr_25407_25467[(1)] = (13));

} else {
var statearr_25408_25468 = state_25334__$1;
(statearr_25408_25468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (18))){
var inst_25259 = (state_25334[(2)]);
var state_25334__$1 = state_25334;
var statearr_25409_25469 = state_25334__$1;
(statearr_25409_25469[(2)] = inst_25259);

(statearr_25409_25469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (42))){
var state_25334__$1 = state_25334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25334__$1,(45),dchan);
} else {
if((state_val_25335 === (37))){
var inst_25302 = (state_25334[(23)]);
var inst_25202 = (state_25334[(10)]);
var inst_25293 = (state_25334[(25)]);
var inst_25302__$1 = cljs.core.first.call(null,inst_25293);
var inst_25303 = cljs.core.async.put_BANG_.call(null,inst_25302__$1,inst_25202,done);
var state_25334__$1 = (function (){var statearr_25410 = state_25334;
(statearr_25410[(23)] = inst_25302__$1);

return statearr_25410;
})();
if(cljs.core.truth_(inst_25303)){
var statearr_25411_25470 = state_25334__$1;
(statearr_25411_25470[(1)] = (39));

} else {
var statearr_25412_25471 = state_25334__$1;
(statearr_25412_25471[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25335 === (8))){
var inst_25214 = (state_25334[(13)]);
var inst_25213 = (state_25334[(15)]);
var inst_25216 = (inst_25214 < inst_25213);
var inst_25217 = inst_25216;
var state_25334__$1 = state_25334;
if(cljs.core.truth_(inst_25217)){
var statearr_25413_25472 = state_25334__$1;
(statearr_25413_25472[(1)] = (10));

} else {
var statearr_25414_25473 = state_25334__$1;
(statearr_25414_25473[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___25419,cs,m,dchan,dctr,done))
;
return ((function (switch__24510__auto__,c__24600__auto___25419,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24511__auto__ = null;
var cljs$core$async$mult_$_state_machine__24511__auto____0 = (function (){
var statearr_25415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25415[(0)] = cljs$core$async$mult_$_state_machine__24511__auto__);

(statearr_25415[(1)] = (1));

return statearr_25415;
});
var cljs$core$async$mult_$_state_machine__24511__auto____1 = (function (state_25334){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_25334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e25416){if((e25416 instanceof Object)){
var ex__24514__auto__ = e25416;
var statearr_25417_25474 = state_25334;
(statearr_25417_25474[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25475 = state_25334;
state_25334 = G__25475;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24511__auto__ = function(state_25334){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24511__auto____1.call(this,state_25334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24511__auto____0;
cljs$core$async$mult_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24511__auto____1;
return cljs$core$async$mult_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___25419,cs,m,dchan,dctr,done))
})();
var state__24602__auto__ = (function (){var statearr_25418 = f__24601__auto__.call(null);
(statearr_25418[(6)] = c__24600__auto___25419);

return statearr_25418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___25419,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25477 = arguments.length;
switch (G__25477) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,ch);
} else {
var m__9650__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,ch);
} else {
var m__9650__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m);
} else {
var m__9650__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,state_map);
} else {
var m__9650__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,m,mode);
} else {
var m__9650__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___25489 = arguments.length;
var i__10196__auto___25490 = (0);
while(true){
if((i__10196__auto___25490 < len__10195__auto___25489)){
args__10202__auto__.push((arguments[i__10196__auto___25490]));

var G__25491 = (i__10196__auto___25490 + (1));
i__10196__auto___25490 = G__25491;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25483){
var map__25484 = p__25483;
var map__25484__$1 = ((((!((map__25484 == null)))?((((map__25484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25484):map__25484);
var opts = map__25484__$1;
var statearr_25486_25492 = state;
(statearr_25486_25492[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25484,map__25484__$1,opts){
return (function (val){
var statearr_25487_25493 = state;
(statearr_25487_25493[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25484,map__25484__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25488_25494 = state;
(statearr_25488_25494[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25479){
var G__25480 = cljs.core.first.call(null,seq25479);
var seq25479__$1 = cljs.core.next.call(null,seq25479);
var G__25481 = cljs.core.first.call(null,seq25479__$1);
var seq25479__$2 = cljs.core.next.call(null,seq25479__$1);
var G__25482 = cljs.core.first.call(null,seq25479__$2);
var seq25479__$3 = cljs.core.next.call(null,seq25479__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25480,G__25481,G__25482,seq25479__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25495 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25496){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25496 = meta25496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25497,meta25496__$1){
var self__ = this;
var _25497__$1 = this;
return (new cljs.core.async.t_cljs$core$async25495(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25496__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25497){
var self__ = this;
var _25497__$1 = this;
return self__.meta25496;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25495.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25495.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25495.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25495.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25495.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25495.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25495.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25495.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25496","meta25496",1369996053,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25495";

cljs.core.async.t_cljs$core$async25495.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async25495");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25495 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25495(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25496){
return (new cljs.core.async.t_cljs$core$async25495(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25496));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25495(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24600__auto___25659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___25659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___25659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25599){
var state_val_25600 = (state_25599[(1)]);
if((state_val_25600 === (7))){
var inst_25514 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
var statearr_25601_25660 = state_25599__$1;
(statearr_25601_25660[(2)] = inst_25514);

(statearr_25601_25660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (20))){
var inst_25526 = (state_25599[(7)]);
var state_25599__$1 = state_25599;
var statearr_25602_25661 = state_25599__$1;
(statearr_25602_25661[(2)] = inst_25526);

(statearr_25602_25661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (27))){
var state_25599__$1 = state_25599;
var statearr_25603_25662 = state_25599__$1;
(statearr_25603_25662[(2)] = null);

(statearr_25603_25662[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (1))){
var inst_25501 = (state_25599[(8)]);
var inst_25501__$1 = calc_state.call(null);
var inst_25503 = (inst_25501__$1 == null);
var inst_25504 = cljs.core.not.call(null,inst_25503);
var state_25599__$1 = (function (){var statearr_25604 = state_25599;
(statearr_25604[(8)] = inst_25501__$1);

return statearr_25604;
})();
if(inst_25504){
var statearr_25605_25663 = state_25599__$1;
(statearr_25605_25663[(1)] = (2));

} else {
var statearr_25606_25664 = state_25599__$1;
(statearr_25606_25664[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (24))){
var inst_25550 = (state_25599[(9)]);
var inst_25573 = (state_25599[(10)]);
var inst_25559 = (state_25599[(11)]);
var inst_25573__$1 = inst_25550.call(null,inst_25559);
var state_25599__$1 = (function (){var statearr_25607 = state_25599;
(statearr_25607[(10)] = inst_25573__$1);

return statearr_25607;
})();
if(cljs.core.truth_(inst_25573__$1)){
var statearr_25608_25665 = state_25599__$1;
(statearr_25608_25665[(1)] = (29));

} else {
var statearr_25609_25666 = state_25599__$1;
(statearr_25609_25666[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (4))){
var inst_25517 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
if(cljs.core.truth_(inst_25517)){
var statearr_25610_25667 = state_25599__$1;
(statearr_25610_25667[(1)] = (8));

} else {
var statearr_25611_25668 = state_25599__$1;
(statearr_25611_25668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (15))){
var inst_25544 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
if(cljs.core.truth_(inst_25544)){
var statearr_25612_25669 = state_25599__$1;
(statearr_25612_25669[(1)] = (19));

} else {
var statearr_25613_25670 = state_25599__$1;
(statearr_25613_25670[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (21))){
var inst_25549 = (state_25599[(12)]);
var inst_25549__$1 = (state_25599[(2)]);
var inst_25550 = cljs.core.get.call(null,inst_25549__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25551 = cljs.core.get.call(null,inst_25549__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25552 = cljs.core.get.call(null,inst_25549__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25599__$1 = (function (){var statearr_25614 = state_25599;
(statearr_25614[(9)] = inst_25550);

(statearr_25614[(13)] = inst_25551);

(statearr_25614[(12)] = inst_25549__$1);

return statearr_25614;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25599__$1,(22),inst_25552);
} else {
if((state_val_25600 === (31))){
var inst_25581 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
if(cljs.core.truth_(inst_25581)){
var statearr_25615_25671 = state_25599__$1;
(statearr_25615_25671[(1)] = (32));

} else {
var statearr_25616_25672 = state_25599__$1;
(statearr_25616_25672[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (32))){
var inst_25558 = (state_25599[(14)]);
var state_25599__$1 = state_25599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25599__$1,(35),out,inst_25558);
} else {
if((state_val_25600 === (33))){
var inst_25549 = (state_25599[(12)]);
var inst_25526 = inst_25549;
var state_25599__$1 = (function (){var statearr_25617 = state_25599;
(statearr_25617[(7)] = inst_25526);

return statearr_25617;
})();
var statearr_25618_25673 = state_25599__$1;
(statearr_25618_25673[(2)] = null);

(statearr_25618_25673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (13))){
var inst_25526 = (state_25599[(7)]);
var inst_25533 = inst_25526.cljs$lang$protocol_mask$partition0$;
var inst_25534 = (inst_25533 & (64));
var inst_25535 = inst_25526.cljs$core$ISeq$;
var inst_25536 = (cljs.core.PROTOCOL_SENTINEL === inst_25535);
var inst_25537 = (inst_25534) || (inst_25536);
var state_25599__$1 = state_25599;
if(cljs.core.truth_(inst_25537)){
var statearr_25619_25674 = state_25599__$1;
(statearr_25619_25674[(1)] = (16));

} else {
var statearr_25620_25675 = state_25599__$1;
(statearr_25620_25675[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (22))){
var inst_25558 = (state_25599[(14)]);
var inst_25559 = (state_25599[(11)]);
var inst_25557 = (state_25599[(2)]);
var inst_25558__$1 = cljs.core.nth.call(null,inst_25557,(0),null);
var inst_25559__$1 = cljs.core.nth.call(null,inst_25557,(1),null);
var inst_25560 = (inst_25558__$1 == null);
var inst_25561 = cljs.core._EQ_.call(null,inst_25559__$1,change);
var inst_25562 = (inst_25560) || (inst_25561);
var state_25599__$1 = (function (){var statearr_25621 = state_25599;
(statearr_25621[(14)] = inst_25558__$1);

(statearr_25621[(11)] = inst_25559__$1);

return statearr_25621;
})();
if(cljs.core.truth_(inst_25562)){
var statearr_25622_25676 = state_25599__$1;
(statearr_25622_25676[(1)] = (23));

} else {
var statearr_25623_25677 = state_25599__$1;
(statearr_25623_25677[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (36))){
var inst_25549 = (state_25599[(12)]);
var inst_25526 = inst_25549;
var state_25599__$1 = (function (){var statearr_25624 = state_25599;
(statearr_25624[(7)] = inst_25526);

return statearr_25624;
})();
var statearr_25625_25678 = state_25599__$1;
(statearr_25625_25678[(2)] = null);

(statearr_25625_25678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (29))){
var inst_25573 = (state_25599[(10)]);
var state_25599__$1 = state_25599;
var statearr_25626_25679 = state_25599__$1;
(statearr_25626_25679[(2)] = inst_25573);

(statearr_25626_25679[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (6))){
var state_25599__$1 = state_25599;
var statearr_25627_25680 = state_25599__$1;
(statearr_25627_25680[(2)] = false);

(statearr_25627_25680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (28))){
var inst_25569 = (state_25599[(2)]);
var inst_25570 = calc_state.call(null);
var inst_25526 = inst_25570;
var state_25599__$1 = (function (){var statearr_25628 = state_25599;
(statearr_25628[(15)] = inst_25569);

(statearr_25628[(7)] = inst_25526);

return statearr_25628;
})();
var statearr_25629_25681 = state_25599__$1;
(statearr_25629_25681[(2)] = null);

(statearr_25629_25681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (25))){
var inst_25595 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
var statearr_25630_25682 = state_25599__$1;
(statearr_25630_25682[(2)] = inst_25595);

(statearr_25630_25682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (34))){
var inst_25593 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
var statearr_25631_25683 = state_25599__$1;
(statearr_25631_25683[(2)] = inst_25593);

(statearr_25631_25683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (17))){
var state_25599__$1 = state_25599;
var statearr_25632_25684 = state_25599__$1;
(statearr_25632_25684[(2)] = false);

(statearr_25632_25684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (3))){
var state_25599__$1 = state_25599;
var statearr_25633_25685 = state_25599__$1;
(statearr_25633_25685[(2)] = false);

(statearr_25633_25685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (12))){
var inst_25597 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25599__$1,inst_25597);
} else {
if((state_val_25600 === (2))){
var inst_25501 = (state_25599[(8)]);
var inst_25506 = inst_25501.cljs$lang$protocol_mask$partition0$;
var inst_25507 = (inst_25506 & (64));
var inst_25508 = inst_25501.cljs$core$ISeq$;
var inst_25509 = (cljs.core.PROTOCOL_SENTINEL === inst_25508);
var inst_25510 = (inst_25507) || (inst_25509);
var state_25599__$1 = state_25599;
if(cljs.core.truth_(inst_25510)){
var statearr_25634_25686 = state_25599__$1;
(statearr_25634_25686[(1)] = (5));

} else {
var statearr_25635_25687 = state_25599__$1;
(statearr_25635_25687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (23))){
var inst_25558 = (state_25599[(14)]);
var inst_25564 = (inst_25558 == null);
var state_25599__$1 = state_25599;
if(cljs.core.truth_(inst_25564)){
var statearr_25636_25688 = state_25599__$1;
(statearr_25636_25688[(1)] = (26));

} else {
var statearr_25637_25689 = state_25599__$1;
(statearr_25637_25689[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (35))){
var inst_25584 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
if(cljs.core.truth_(inst_25584)){
var statearr_25638_25690 = state_25599__$1;
(statearr_25638_25690[(1)] = (36));

} else {
var statearr_25639_25691 = state_25599__$1;
(statearr_25639_25691[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (19))){
var inst_25526 = (state_25599[(7)]);
var inst_25546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25526);
var state_25599__$1 = state_25599;
var statearr_25640_25692 = state_25599__$1;
(statearr_25640_25692[(2)] = inst_25546);

(statearr_25640_25692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (11))){
var inst_25526 = (state_25599[(7)]);
var inst_25530 = (inst_25526 == null);
var inst_25531 = cljs.core.not.call(null,inst_25530);
var state_25599__$1 = state_25599;
if(inst_25531){
var statearr_25641_25693 = state_25599__$1;
(statearr_25641_25693[(1)] = (13));

} else {
var statearr_25642_25694 = state_25599__$1;
(statearr_25642_25694[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (9))){
var inst_25501 = (state_25599[(8)]);
var state_25599__$1 = state_25599;
var statearr_25643_25695 = state_25599__$1;
(statearr_25643_25695[(2)] = inst_25501);

(statearr_25643_25695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (5))){
var state_25599__$1 = state_25599;
var statearr_25644_25696 = state_25599__$1;
(statearr_25644_25696[(2)] = true);

(statearr_25644_25696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (14))){
var state_25599__$1 = state_25599;
var statearr_25645_25697 = state_25599__$1;
(statearr_25645_25697[(2)] = false);

(statearr_25645_25697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (26))){
var inst_25559 = (state_25599[(11)]);
var inst_25566 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25559);
var state_25599__$1 = state_25599;
var statearr_25646_25698 = state_25599__$1;
(statearr_25646_25698[(2)] = inst_25566);

(statearr_25646_25698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (16))){
var state_25599__$1 = state_25599;
var statearr_25647_25699 = state_25599__$1;
(statearr_25647_25699[(2)] = true);

(statearr_25647_25699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (38))){
var inst_25589 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
var statearr_25648_25700 = state_25599__$1;
(statearr_25648_25700[(2)] = inst_25589);

(statearr_25648_25700[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (30))){
var inst_25550 = (state_25599[(9)]);
var inst_25551 = (state_25599[(13)]);
var inst_25559 = (state_25599[(11)]);
var inst_25576 = cljs.core.empty_QMARK_.call(null,inst_25550);
var inst_25577 = inst_25551.call(null,inst_25559);
var inst_25578 = cljs.core.not.call(null,inst_25577);
var inst_25579 = (inst_25576) && (inst_25578);
var state_25599__$1 = state_25599;
var statearr_25649_25701 = state_25599__$1;
(statearr_25649_25701[(2)] = inst_25579);

(statearr_25649_25701[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (10))){
var inst_25501 = (state_25599[(8)]);
var inst_25522 = (state_25599[(2)]);
var inst_25523 = cljs.core.get.call(null,inst_25522,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25524 = cljs.core.get.call(null,inst_25522,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25525 = cljs.core.get.call(null,inst_25522,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25526 = inst_25501;
var state_25599__$1 = (function (){var statearr_25650 = state_25599;
(statearr_25650[(16)] = inst_25525);

(statearr_25650[(17)] = inst_25523);

(statearr_25650[(7)] = inst_25526);

(statearr_25650[(18)] = inst_25524);

return statearr_25650;
})();
var statearr_25651_25702 = state_25599__$1;
(statearr_25651_25702[(2)] = null);

(statearr_25651_25702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (18))){
var inst_25541 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
var statearr_25652_25703 = state_25599__$1;
(statearr_25652_25703[(2)] = inst_25541);

(statearr_25652_25703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (37))){
var state_25599__$1 = state_25599;
var statearr_25653_25704 = state_25599__$1;
(statearr_25653_25704[(2)] = null);

(statearr_25653_25704[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (8))){
var inst_25501 = (state_25599[(8)]);
var inst_25519 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25501);
var state_25599__$1 = state_25599;
var statearr_25654_25705 = state_25599__$1;
(statearr_25654_25705[(2)] = inst_25519);

(statearr_25654_25705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___25659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24510__auto__,c__24600__auto___25659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24511__auto__ = null;
var cljs$core$async$mix_$_state_machine__24511__auto____0 = (function (){
var statearr_25655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25655[(0)] = cljs$core$async$mix_$_state_machine__24511__auto__);

(statearr_25655[(1)] = (1));

return statearr_25655;
});
var cljs$core$async$mix_$_state_machine__24511__auto____1 = (function (state_25599){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_25599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e25656){if((e25656 instanceof Object)){
var ex__24514__auto__ = e25656;
var statearr_25657_25706 = state_25599;
(statearr_25657_25706[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25707 = state_25599;
state_25599 = G__25707;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24511__auto__ = function(state_25599){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24511__auto____1.call(this,state_25599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24511__auto____0;
cljs$core$async$mix_$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24511__auto____1;
return cljs$core$async$mix_$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___25659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24602__auto__ = (function (){var statearr_25658 = f__24601__auto__.call(null);
(statearr_25658[(6)] = c__24600__auto___25659);

return statearr_25658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___25659,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9650__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,p,v,ch);
} else {
var m__9650__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25709 = arguments.length;
switch (G__25709) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,p);
} else {
var m__9650__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,p,v);
} else {
var m__9650__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25713 = arguments.length;
switch (G__25713) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8916__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8916__auto__,mults){
return (function (p1__25711_SHARP_){
if(cljs.core.truth_(p1__25711_SHARP_.call(null,topic))){
return p1__25711_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25711_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8916__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25714 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25715){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25715 = meta25715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25716,meta25715__$1){
var self__ = this;
var _25716__$1 = this;
return (new cljs.core.async.t_cljs$core$async25714(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25715__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25716){
var self__ = this;
var _25716__$1 = this;
return self__.meta25715;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25714.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25714.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25714.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25714.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25714.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25714.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25714.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25714.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25715","meta25715",-335259466,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25714";

cljs.core.async.t_cljs$core$async25714.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async25714");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25714 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25714(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25715){
return (new cljs.core.async.t_cljs$core$async25714(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25715));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25714(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24600__auto___25834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___25834,mults,ensure_mult,p){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___25834,mults,ensure_mult,p){
return (function (state_25788){
var state_val_25789 = (state_25788[(1)]);
if((state_val_25789 === (7))){
var inst_25784 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25790_25835 = state_25788__$1;
(statearr_25790_25835[(2)] = inst_25784);

(statearr_25790_25835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (20))){
var state_25788__$1 = state_25788;
var statearr_25791_25836 = state_25788__$1;
(statearr_25791_25836[(2)] = null);

(statearr_25791_25836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (1))){
var state_25788__$1 = state_25788;
var statearr_25792_25837 = state_25788__$1;
(statearr_25792_25837[(2)] = null);

(statearr_25792_25837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (24))){
var inst_25767 = (state_25788[(7)]);
var inst_25776 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25767);
var state_25788__$1 = state_25788;
var statearr_25793_25838 = state_25788__$1;
(statearr_25793_25838[(2)] = inst_25776);

(statearr_25793_25838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (4))){
var inst_25719 = (state_25788[(8)]);
var inst_25719__$1 = (state_25788[(2)]);
var inst_25720 = (inst_25719__$1 == null);
var state_25788__$1 = (function (){var statearr_25794 = state_25788;
(statearr_25794[(8)] = inst_25719__$1);

return statearr_25794;
})();
if(cljs.core.truth_(inst_25720)){
var statearr_25795_25839 = state_25788__$1;
(statearr_25795_25839[(1)] = (5));

} else {
var statearr_25796_25840 = state_25788__$1;
(statearr_25796_25840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (15))){
var inst_25761 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25797_25841 = state_25788__$1;
(statearr_25797_25841[(2)] = inst_25761);

(statearr_25797_25841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (21))){
var inst_25781 = (state_25788[(2)]);
var state_25788__$1 = (function (){var statearr_25798 = state_25788;
(statearr_25798[(9)] = inst_25781);

return statearr_25798;
})();
var statearr_25799_25842 = state_25788__$1;
(statearr_25799_25842[(2)] = null);

(statearr_25799_25842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (13))){
var inst_25743 = (state_25788[(10)]);
var inst_25745 = cljs.core.chunked_seq_QMARK_.call(null,inst_25743);
var state_25788__$1 = state_25788;
if(inst_25745){
var statearr_25800_25843 = state_25788__$1;
(statearr_25800_25843[(1)] = (16));

} else {
var statearr_25801_25844 = state_25788__$1;
(statearr_25801_25844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (22))){
var inst_25773 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
if(cljs.core.truth_(inst_25773)){
var statearr_25802_25845 = state_25788__$1;
(statearr_25802_25845[(1)] = (23));

} else {
var statearr_25803_25846 = state_25788__$1;
(statearr_25803_25846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (6))){
var inst_25769 = (state_25788[(11)]);
var inst_25719 = (state_25788[(8)]);
var inst_25767 = (state_25788[(7)]);
var inst_25767__$1 = topic_fn.call(null,inst_25719);
var inst_25768 = cljs.core.deref.call(null,mults);
var inst_25769__$1 = cljs.core.get.call(null,inst_25768,inst_25767__$1);
var state_25788__$1 = (function (){var statearr_25804 = state_25788;
(statearr_25804[(11)] = inst_25769__$1);

(statearr_25804[(7)] = inst_25767__$1);

return statearr_25804;
})();
if(cljs.core.truth_(inst_25769__$1)){
var statearr_25805_25847 = state_25788__$1;
(statearr_25805_25847[(1)] = (19));

} else {
var statearr_25806_25848 = state_25788__$1;
(statearr_25806_25848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (25))){
var inst_25778 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25807_25849 = state_25788__$1;
(statearr_25807_25849[(2)] = inst_25778);

(statearr_25807_25849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (17))){
var inst_25743 = (state_25788[(10)]);
var inst_25752 = cljs.core.first.call(null,inst_25743);
var inst_25753 = cljs.core.async.muxch_STAR_.call(null,inst_25752);
var inst_25754 = cljs.core.async.close_BANG_.call(null,inst_25753);
var inst_25755 = cljs.core.next.call(null,inst_25743);
var inst_25729 = inst_25755;
var inst_25730 = null;
var inst_25731 = (0);
var inst_25732 = (0);
var state_25788__$1 = (function (){var statearr_25808 = state_25788;
(statearr_25808[(12)] = inst_25731);

(statearr_25808[(13)] = inst_25754);

(statearr_25808[(14)] = inst_25732);

(statearr_25808[(15)] = inst_25730);

(statearr_25808[(16)] = inst_25729);

return statearr_25808;
})();
var statearr_25809_25850 = state_25788__$1;
(statearr_25809_25850[(2)] = null);

(statearr_25809_25850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (3))){
var inst_25786 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25788__$1,inst_25786);
} else {
if((state_val_25789 === (12))){
var inst_25763 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25810_25851 = state_25788__$1;
(statearr_25810_25851[(2)] = inst_25763);

(statearr_25810_25851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (2))){
var state_25788__$1 = state_25788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25788__$1,(4),ch);
} else {
if((state_val_25789 === (23))){
var state_25788__$1 = state_25788;
var statearr_25811_25852 = state_25788__$1;
(statearr_25811_25852[(2)] = null);

(statearr_25811_25852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (19))){
var inst_25769 = (state_25788[(11)]);
var inst_25719 = (state_25788[(8)]);
var inst_25771 = cljs.core.async.muxch_STAR_.call(null,inst_25769);
var state_25788__$1 = state_25788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25788__$1,(22),inst_25771,inst_25719);
} else {
if((state_val_25789 === (11))){
var inst_25743 = (state_25788[(10)]);
var inst_25729 = (state_25788[(16)]);
var inst_25743__$1 = cljs.core.seq.call(null,inst_25729);
var state_25788__$1 = (function (){var statearr_25812 = state_25788;
(statearr_25812[(10)] = inst_25743__$1);

return statearr_25812;
})();
if(inst_25743__$1){
var statearr_25813_25853 = state_25788__$1;
(statearr_25813_25853[(1)] = (13));

} else {
var statearr_25814_25854 = state_25788__$1;
(statearr_25814_25854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (9))){
var inst_25765 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25815_25855 = state_25788__$1;
(statearr_25815_25855[(2)] = inst_25765);

(statearr_25815_25855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (5))){
var inst_25726 = cljs.core.deref.call(null,mults);
var inst_25727 = cljs.core.vals.call(null,inst_25726);
var inst_25728 = cljs.core.seq.call(null,inst_25727);
var inst_25729 = inst_25728;
var inst_25730 = null;
var inst_25731 = (0);
var inst_25732 = (0);
var state_25788__$1 = (function (){var statearr_25816 = state_25788;
(statearr_25816[(12)] = inst_25731);

(statearr_25816[(14)] = inst_25732);

(statearr_25816[(15)] = inst_25730);

(statearr_25816[(16)] = inst_25729);

return statearr_25816;
})();
var statearr_25817_25856 = state_25788__$1;
(statearr_25817_25856[(2)] = null);

(statearr_25817_25856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (14))){
var state_25788__$1 = state_25788;
var statearr_25821_25857 = state_25788__$1;
(statearr_25821_25857[(2)] = null);

(statearr_25821_25857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (16))){
var inst_25743 = (state_25788[(10)]);
var inst_25747 = cljs.core.chunk_first.call(null,inst_25743);
var inst_25748 = cljs.core.chunk_rest.call(null,inst_25743);
var inst_25749 = cljs.core.count.call(null,inst_25747);
var inst_25729 = inst_25748;
var inst_25730 = inst_25747;
var inst_25731 = inst_25749;
var inst_25732 = (0);
var state_25788__$1 = (function (){var statearr_25822 = state_25788;
(statearr_25822[(12)] = inst_25731);

(statearr_25822[(14)] = inst_25732);

(statearr_25822[(15)] = inst_25730);

(statearr_25822[(16)] = inst_25729);

return statearr_25822;
})();
var statearr_25823_25858 = state_25788__$1;
(statearr_25823_25858[(2)] = null);

(statearr_25823_25858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (10))){
var inst_25731 = (state_25788[(12)]);
var inst_25732 = (state_25788[(14)]);
var inst_25730 = (state_25788[(15)]);
var inst_25729 = (state_25788[(16)]);
var inst_25737 = cljs.core._nth.call(null,inst_25730,inst_25732);
var inst_25738 = cljs.core.async.muxch_STAR_.call(null,inst_25737);
var inst_25739 = cljs.core.async.close_BANG_.call(null,inst_25738);
var inst_25740 = (inst_25732 + (1));
var tmp25818 = inst_25731;
var tmp25819 = inst_25730;
var tmp25820 = inst_25729;
var inst_25729__$1 = tmp25820;
var inst_25730__$1 = tmp25819;
var inst_25731__$1 = tmp25818;
var inst_25732__$1 = inst_25740;
var state_25788__$1 = (function (){var statearr_25824 = state_25788;
(statearr_25824[(12)] = inst_25731__$1);

(statearr_25824[(14)] = inst_25732__$1);

(statearr_25824[(17)] = inst_25739);

(statearr_25824[(15)] = inst_25730__$1);

(statearr_25824[(16)] = inst_25729__$1);

return statearr_25824;
})();
var statearr_25825_25859 = state_25788__$1;
(statearr_25825_25859[(2)] = null);

(statearr_25825_25859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (18))){
var inst_25758 = (state_25788[(2)]);
var state_25788__$1 = state_25788;
var statearr_25826_25860 = state_25788__$1;
(statearr_25826_25860[(2)] = inst_25758);

(statearr_25826_25860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25789 === (8))){
var inst_25731 = (state_25788[(12)]);
var inst_25732 = (state_25788[(14)]);
var inst_25734 = (inst_25732 < inst_25731);
var inst_25735 = inst_25734;
var state_25788__$1 = state_25788;
if(cljs.core.truth_(inst_25735)){
var statearr_25827_25861 = state_25788__$1;
(statearr_25827_25861[(1)] = (10));

} else {
var statearr_25828_25862 = state_25788__$1;
(statearr_25828_25862[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___25834,mults,ensure_mult,p))
;
return ((function (switch__24510__auto__,c__24600__auto___25834,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_25829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25829[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_25829[(1)] = (1));

return statearr_25829;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_25788){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_25788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e25830){if((e25830 instanceof Object)){
var ex__24514__auto__ = e25830;
var statearr_25831_25863 = state_25788;
(statearr_25831_25863[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25864 = state_25788;
state_25788 = G__25864;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_25788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_25788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___25834,mults,ensure_mult,p))
})();
var state__24602__auto__ = (function (){var statearr_25832 = f__24601__auto__.call(null);
(statearr_25832[(6)] = c__24600__auto___25834);

return statearr_25832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___25834,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25866 = arguments.length;
switch (G__25866) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25869 = arguments.length;
switch (G__25869) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25872 = arguments.length;
switch (G__25872) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24600__auto___25939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___25939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___25939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25911){
var state_val_25912 = (state_25911[(1)]);
if((state_val_25912 === (7))){
var state_25911__$1 = state_25911;
var statearr_25913_25940 = state_25911__$1;
(statearr_25913_25940[(2)] = null);

(statearr_25913_25940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (1))){
var state_25911__$1 = state_25911;
var statearr_25914_25941 = state_25911__$1;
(statearr_25914_25941[(2)] = null);

(statearr_25914_25941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (4))){
var inst_25875 = (state_25911[(7)]);
var inst_25877 = (inst_25875 < cnt);
var state_25911__$1 = state_25911;
if(cljs.core.truth_(inst_25877)){
var statearr_25915_25942 = state_25911__$1;
(statearr_25915_25942[(1)] = (6));

} else {
var statearr_25916_25943 = state_25911__$1;
(statearr_25916_25943[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (15))){
var inst_25907 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25917_25944 = state_25911__$1;
(statearr_25917_25944[(2)] = inst_25907);

(statearr_25917_25944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (13))){
var inst_25900 = cljs.core.async.close_BANG_.call(null,out);
var state_25911__$1 = state_25911;
var statearr_25918_25945 = state_25911__$1;
(statearr_25918_25945[(2)] = inst_25900);

(statearr_25918_25945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (6))){
var state_25911__$1 = state_25911;
var statearr_25919_25946 = state_25911__$1;
(statearr_25919_25946[(2)] = null);

(statearr_25919_25946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (3))){
var inst_25909 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25911__$1,inst_25909);
} else {
if((state_val_25912 === (12))){
var inst_25897 = (state_25911[(8)]);
var inst_25897__$1 = (state_25911[(2)]);
var inst_25898 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25897__$1);
var state_25911__$1 = (function (){var statearr_25920 = state_25911;
(statearr_25920[(8)] = inst_25897__$1);

return statearr_25920;
})();
if(cljs.core.truth_(inst_25898)){
var statearr_25921_25947 = state_25911__$1;
(statearr_25921_25947[(1)] = (13));

} else {
var statearr_25922_25948 = state_25911__$1;
(statearr_25922_25948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (2))){
var inst_25874 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25875 = (0);
var state_25911__$1 = (function (){var statearr_25923 = state_25911;
(statearr_25923[(9)] = inst_25874);

(statearr_25923[(7)] = inst_25875);

return statearr_25923;
})();
var statearr_25924_25949 = state_25911__$1;
(statearr_25924_25949[(2)] = null);

(statearr_25924_25949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (11))){
var inst_25875 = (state_25911[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25911,(10),Object,null,(9));
var inst_25884 = chs__$1.call(null,inst_25875);
var inst_25885 = done.call(null,inst_25875);
var inst_25886 = cljs.core.async.take_BANG_.call(null,inst_25884,inst_25885);
var state_25911__$1 = state_25911;
var statearr_25925_25950 = state_25911__$1;
(statearr_25925_25950[(2)] = inst_25886);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25911__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (9))){
var inst_25875 = (state_25911[(7)]);
var inst_25888 = (state_25911[(2)]);
var inst_25889 = (inst_25875 + (1));
var inst_25875__$1 = inst_25889;
var state_25911__$1 = (function (){var statearr_25926 = state_25911;
(statearr_25926[(7)] = inst_25875__$1);

(statearr_25926[(10)] = inst_25888);

return statearr_25926;
})();
var statearr_25927_25951 = state_25911__$1;
(statearr_25927_25951[(2)] = null);

(statearr_25927_25951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (5))){
var inst_25895 = (state_25911[(2)]);
var state_25911__$1 = (function (){var statearr_25928 = state_25911;
(statearr_25928[(11)] = inst_25895);

return statearr_25928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25911__$1,(12),dchan);
} else {
if((state_val_25912 === (14))){
var inst_25897 = (state_25911[(8)]);
var inst_25902 = cljs.core.apply.call(null,f,inst_25897);
var state_25911__$1 = state_25911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25911__$1,(16),out,inst_25902);
} else {
if((state_val_25912 === (16))){
var inst_25904 = (state_25911[(2)]);
var state_25911__$1 = (function (){var statearr_25929 = state_25911;
(statearr_25929[(12)] = inst_25904);

return statearr_25929;
})();
var statearr_25930_25952 = state_25911__$1;
(statearr_25930_25952[(2)] = null);

(statearr_25930_25952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (10))){
var inst_25879 = (state_25911[(2)]);
var inst_25880 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25911__$1 = (function (){var statearr_25931 = state_25911;
(statearr_25931[(13)] = inst_25879);

return statearr_25931;
})();
var statearr_25932_25953 = state_25911__$1;
(statearr_25932_25953[(2)] = inst_25880);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25911__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25912 === (8))){
var inst_25893 = (state_25911[(2)]);
var state_25911__$1 = state_25911;
var statearr_25933_25954 = state_25911__$1;
(statearr_25933_25954[(2)] = inst_25893);

(statearr_25933_25954[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___25939,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24510__auto__,c__24600__auto___25939,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_25934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25934[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_25934[(1)] = (1));

return statearr_25934;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_25911){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_25911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e25935){if((e25935 instanceof Object)){
var ex__24514__auto__ = e25935;
var statearr_25936_25955 = state_25911;
(statearr_25936_25955[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25956 = state_25911;
state_25911 = G__25956;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_25911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_25911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___25939,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24602__auto__ = (function (){var statearr_25937 = f__24601__auto__.call(null);
(statearr_25937[(6)] = c__24600__auto___25939);

return statearr_25937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___25939,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25959 = arguments.length;
switch (G__25959) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24600__auto___26013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___26013,out){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___26013,out){
return (function (state_25991){
var state_val_25992 = (state_25991[(1)]);
if((state_val_25992 === (7))){
var inst_25970 = (state_25991[(7)]);
var inst_25971 = (state_25991[(8)]);
var inst_25970__$1 = (state_25991[(2)]);
var inst_25971__$1 = cljs.core.nth.call(null,inst_25970__$1,(0),null);
var inst_25972 = cljs.core.nth.call(null,inst_25970__$1,(1),null);
var inst_25973 = (inst_25971__$1 == null);
var state_25991__$1 = (function (){var statearr_25993 = state_25991;
(statearr_25993[(7)] = inst_25970__$1);

(statearr_25993[(9)] = inst_25972);

(statearr_25993[(8)] = inst_25971__$1);

return statearr_25993;
})();
if(cljs.core.truth_(inst_25973)){
var statearr_25994_26014 = state_25991__$1;
(statearr_25994_26014[(1)] = (8));

} else {
var statearr_25995_26015 = state_25991__$1;
(statearr_25995_26015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (1))){
var inst_25960 = cljs.core.vec.call(null,chs);
var inst_25961 = inst_25960;
var state_25991__$1 = (function (){var statearr_25996 = state_25991;
(statearr_25996[(10)] = inst_25961);

return statearr_25996;
})();
var statearr_25997_26016 = state_25991__$1;
(statearr_25997_26016[(2)] = null);

(statearr_25997_26016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (4))){
var inst_25961 = (state_25991[(10)]);
var state_25991__$1 = state_25991;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25991__$1,(7),inst_25961);
} else {
if((state_val_25992 === (6))){
var inst_25987 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_25998_26017 = state_25991__$1;
(statearr_25998_26017[(2)] = inst_25987);

(statearr_25998_26017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (3))){
var inst_25989 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25991__$1,inst_25989);
} else {
if((state_val_25992 === (2))){
var inst_25961 = (state_25991[(10)]);
var inst_25963 = cljs.core.count.call(null,inst_25961);
var inst_25964 = (inst_25963 > (0));
var state_25991__$1 = state_25991;
if(cljs.core.truth_(inst_25964)){
var statearr_26000_26018 = state_25991__$1;
(statearr_26000_26018[(1)] = (4));

} else {
var statearr_26001_26019 = state_25991__$1;
(statearr_26001_26019[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (11))){
var inst_25961 = (state_25991[(10)]);
var inst_25980 = (state_25991[(2)]);
var tmp25999 = inst_25961;
var inst_25961__$1 = tmp25999;
var state_25991__$1 = (function (){var statearr_26002 = state_25991;
(statearr_26002[(10)] = inst_25961__$1);

(statearr_26002[(11)] = inst_25980);

return statearr_26002;
})();
var statearr_26003_26020 = state_25991__$1;
(statearr_26003_26020[(2)] = null);

(statearr_26003_26020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (9))){
var inst_25971 = (state_25991[(8)]);
var state_25991__$1 = state_25991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25991__$1,(11),out,inst_25971);
} else {
if((state_val_25992 === (5))){
var inst_25985 = cljs.core.async.close_BANG_.call(null,out);
var state_25991__$1 = state_25991;
var statearr_26004_26021 = state_25991__$1;
(statearr_26004_26021[(2)] = inst_25985);

(statearr_26004_26021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (10))){
var inst_25983 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26005_26022 = state_25991__$1;
(statearr_26005_26022[(2)] = inst_25983);

(statearr_26005_26022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (8))){
var inst_25961 = (state_25991[(10)]);
var inst_25970 = (state_25991[(7)]);
var inst_25972 = (state_25991[(9)]);
var inst_25971 = (state_25991[(8)]);
var inst_25975 = (function (){var cs = inst_25961;
var vec__25966 = inst_25970;
var v = inst_25971;
var c = inst_25972;
return ((function (cs,vec__25966,v,c,inst_25961,inst_25970,inst_25972,inst_25971,state_val_25992,c__24600__auto___26013,out){
return (function (p1__25957_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25957_SHARP_);
});
;})(cs,vec__25966,v,c,inst_25961,inst_25970,inst_25972,inst_25971,state_val_25992,c__24600__auto___26013,out))
})();
var inst_25976 = cljs.core.filterv.call(null,inst_25975,inst_25961);
var inst_25961__$1 = inst_25976;
var state_25991__$1 = (function (){var statearr_26006 = state_25991;
(statearr_26006[(10)] = inst_25961__$1);

return statearr_26006;
})();
var statearr_26007_26023 = state_25991__$1;
(statearr_26007_26023[(2)] = null);

(statearr_26007_26023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___26013,out))
;
return ((function (switch__24510__auto__,c__24600__auto___26013,out){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_26008 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26008[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_26008[(1)] = (1));

return statearr_26008;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_25991){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_25991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e26009){if((e26009 instanceof Object)){
var ex__24514__auto__ = e26009;
var statearr_26010_26024 = state_25991;
(statearr_26010_26024[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26025 = state_25991;
state_25991 = G__26025;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_25991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_25991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___26013,out))
})();
var state__24602__auto__ = (function (){var statearr_26011 = f__24601__auto__.call(null);
(statearr_26011[(6)] = c__24600__auto___26013);

return statearr_26011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___26013,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26027 = arguments.length;
switch (G__26027) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24600__auto___26072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___26072,out){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___26072,out){
return (function (state_26051){
var state_val_26052 = (state_26051[(1)]);
if((state_val_26052 === (7))){
var inst_26033 = (state_26051[(7)]);
var inst_26033__$1 = (state_26051[(2)]);
var inst_26034 = (inst_26033__$1 == null);
var inst_26035 = cljs.core.not.call(null,inst_26034);
var state_26051__$1 = (function (){var statearr_26053 = state_26051;
(statearr_26053[(7)] = inst_26033__$1);

return statearr_26053;
})();
if(inst_26035){
var statearr_26054_26073 = state_26051__$1;
(statearr_26054_26073[(1)] = (8));

} else {
var statearr_26055_26074 = state_26051__$1;
(statearr_26055_26074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (1))){
var inst_26028 = (0);
var state_26051__$1 = (function (){var statearr_26056 = state_26051;
(statearr_26056[(8)] = inst_26028);

return statearr_26056;
})();
var statearr_26057_26075 = state_26051__$1;
(statearr_26057_26075[(2)] = null);

(statearr_26057_26075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (4))){
var state_26051__$1 = state_26051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26051__$1,(7),ch);
} else {
if((state_val_26052 === (6))){
var inst_26046 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26058_26076 = state_26051__$1;
(statearr_26058_26076[(2)] = inst_26046);

(statearr_26058_26076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (3))){
var inst_26048 = (state_26051[(2)]);
var inst_26049 = cljs.core.async.close_BANG_.call(null,out);
var state_26051__$1 = (function (){var statearr_26059 = state_26051;
(statearr_26059[(9)] = inst_26048);

return statearr_26059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26051__$1,inst_26049);
} else {
if((state_val_26052 === (2))){
var inst_26028 = (state_26051[(8)]);
var inst_26030 = (inst_26028 < n);
var state_26051__$1 = state_26051;
if(cljs.core.truth_(inst_26030)){
var statearr_26060_26077 = state_26051__$1;
(statearr_26060_26077[(1)] = (4));

} else {
var statearr_26061_26078 = state_26051__$1;
(statearr_26061_26078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (11))){
var inst_26028 = (state_26051[(8)]);
var inst_26038 = (state_26051[(2)]);
var inst_26039 = (inst_26028 + (1));
var inst_26028__$1 = inst_26039;
var state_26051__$1 = (function (){var statearr_26062 = state_26051;
(statearr_26062[(10)] = inst_26038);

(statearr_26062[(8)] = inst_26028__$1);

return statearr_26062;
})();
var statearr_26063_26079 = state_26051__$1;
(statearr_26063_26079[(2)] = null);

(statearr_26063_26079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (9))){
var state_26051__$1 = state_26051;
var statearr_26064_26080 = state_26051__$1;
(statearr_26064_26080[(2)] = null);

(statearr_26064_26080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (5))){
var state_26051__$1 = state_26051;
var statearr_26065_26081 = state_26051__$1;
(statearr_26065_26081[(2)] = null);

(statearr_26065_26081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (10))){
var inst_26043 = (state_26051[(2)]);
var state_26051__$1 = state_26051;
var statearr_26066_26082 = state_26051__$1;
(statearr_26066_26082[(2)] = inst_26043);

(statearr_26066_26082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26052 === (8))){
var inst_26033 = (state_26051[(7)]);
var state_26051__$1 = state_26051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26051__$1,(11),out,inst_26033);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___26072,out))
;
return ((function (switch__24510__auto__,c__24600__auto___26072,out){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_26067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26067[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_26067[(1)] = (1));

return statearr_26067;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_26051){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_26051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e26068){if((e26068 instanceof Object)){
var ex__24514__auto__ = e26068;
var statearr_26069_26083 = state_26051;
(statearr_26069_26083[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26084 = state_26051;
state_26051 = G__26084;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_26051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_26051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___26072,out))
})();
var state__24602__auto__ = (function (){var statearr_26070 = f__24601__auto__.call(null);
(statearr_26070[(6)] = c__24600__auto___26072);

return statearr_26070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___26072,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26086 = (function (f,ch,meta26087){
this.f = f;
this.ch = ch;
this.meta26087 = meta26087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26088,meta26087__$1){
var self__ = this;
var _26088__$1 = this;
return (new cljs.core.async.t_cljs$core$async26086(self__.f,self__.ch,meta26087__$1));
});

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26088){
var self__ = this;
var _26088__$1 = this;
return self__.meta26087;
});

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26089 = (function (f,ch,meta26087,_,fn1,meta26090){
this.f = f;
this.ch = ch;
this.meta26087 = meta26087;
this._ = _;
this.fn1 = fn1;
this.meta26090 = meta26090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26091,meta26090__$1){
var self__ = this;
var _26091__$1 = this;
return (new cljs.core.async.t_cljs$core$async26089(self__.f,self__.ch,self__.meta26087,self__._,self__.fn1,meta26090__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26091){
var self__ = this;
var _26091__$1 = this;
return self__.meta26090;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26085_SHARP_){
return f1.call(null,(((p1__26085_SHARP_ == null))?null:self__.f.call(null,p1__26085_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26089.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26087","meta26087",-1948584637,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26086","cljs.core.async/t_cljs$core$async26086",829064089,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26090","meta26090",-932277233,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26089";

cljs.core.async.t_cljs$core$async26089.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async26089");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26089 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26089(f__$1,ch__$1,meta26087__$1,___$2,fn1__$1,meta26090){
return (new cljs.core.async.t_cljs$core$async26089(f__$1,ch__$1,meta26087__$1,___$2,fn1__$1,meta26090));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26089(self__.f,self__.ch,self__.meta26087,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8904__auto__ = ret;
if(cljs.core.truth_(and__8904__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8904__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26087","meta26087",-1948584637,null)], null);
});

cljs.core.async.t_cljs$core$async26086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26086";

cljs.core.async.t_cljs$core$async26086.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async26086");
});

cljs.core.async.__GT_t_cljs$core$async26086 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26086(f__$1,ch__$1,meta26087){
return (new cljs.core.async.t_cljs$core$async26086(f__$1,ch__$1,meta26087));
});

}

return (new cljs.core.async.t_cljs$core$async26086(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26092 = (function (f,ch,meta26093){
this.f = f;
this.ch = ch;
this.meta26093 = meta26093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26094,meta26093__$1){
var self__ = this;
var _26094__$1 = this;
return (new cljs.core.async.t_cljs$core$async26092(self__.f,self__.ch,meta26093__$1));
});

cljs.core.async.t_cljs$core$async26092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26094){
var self__ = this;
var _26094__$1 = this;
return self__.meta26093;
});

cljs.core.async.t_cljs$core$async26092.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26092.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26092.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26093","meta26093",581385663,null)], null);
});

cljs.core.async.t_cljs$core$async26092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26092";

cljs.core.async.t_cljs$core$async26092.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async26092");
});

cljs.core.async.__GT_t_cljs$core$async26092 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26092(f__$1,ch__$1,meta26093){
return (new cljs.core.async.t_cljs$core$async26092(f__$1,ch__$1,meta26093));
});

}

return (new cljs.core.async.t_cljs$core$async26092(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26095 = (function (p,ch,meta26096){
this.p = p;
this.ch = ch;
this.meta26096 = meta26096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26097,meta26096__$1){
var self__ = this;
var _26097__$1 = this;
return (new cljs.core.async.t_cljs$core$async26095(self__.p,self__.ch,meta26096__$1));
});

cljs.core.async.t_cljs$core$async26095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26097){
var self__ = this;
var _26097__$1 = this;
return self__.meta26096;
});

cljs.core.async.t_cljs$core$async26095.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26095.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26095.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26095.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26095.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26095.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26095.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26096","meta26096",-185609602,null)], null);
});

cljs.core.async.t_cljs$core$async26095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26095";

cljs.core.async.t_cljs$core$async26095.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"cljs.core.async/t_cljs$core$async26095");
});

cljs.core.async.__GT_t_cljs$core$async26095 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26095(p__$1,ch__$1,meta26096){
return (new cljs.core.async.t_cljs$core$async26095(p__$1,ch__$1,meta26096));
});

}

return (new cljs.core.async.t_cljs$core$async26095(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26099 = arguments.length;
switch (G__26099) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24600__auto___26139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___26139,out){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___26139,out){
return (function (state_26120){
var state_val_26121 = (state_26120[(1)]);
if((state_val_26121 === (7))){
var inst_26116 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26122_26140 = state_26120__$1;
(statearr_26122_26140[(2)] = inst_26116);

(statearr_26122_26140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (1))){
var state_26120__$1 = state_26120;
var statearr_26123_26141 = state_26120__$1;
(statearr_26123_26141[(2)] = null);

(statearr_26123_26141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (4))){
var inst_26102 = (state_26120[(7)]);
var inst_26102__$1 = (state_26120[(2)]);
var inst_26103 = (inst_26102__$1 == null);
var state_26120__$1 = (function (){var statearr_26124 = state_26120;
(statearr_26124[(7)] = inst_26102__$1);

return statearr_26124;
})();
if(cljs.core.truth_(inst_26103)){
var statearr_26125_26142 = state_26120__$1;
(statearr_26125_26142[(1)] = (5));

} else {
var statearr_26126_26143 = state_26120__$1;
(statearr_26126_26143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (6))){
var inst_26102 = (state_26120[(7)]);
var inst_26107 = p.call(null,inst_26102);
var state_26120__$1 = state_26120;
if(cljs.core.truth_(inst_26107)){
var statearr_26127_26144 = state_26120__$1;
(statearr_26127_26144[(1)] = (8));

} else {
var statearr_26128_26145 = state_26120__$1;
(statearr_26128_26145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (3))){
var inst_26118 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26120__$1,inst_26118);
} else {
if((state_val_26121 === (2))){
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26120__$1,(4),ch);
} else {
if((state_val_26121 === (11))){
var inst_26110 = (state_26120[(2)]);
var state_26120__$1 = state_26120;
var statearr_26129_26146 = state_26120__$1;
(statearr_26129_26146[(2)] = inst_26110);

(statearr_26129_26146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (9))){
var state_26120__$1 = state_26120;
var statearr_26130_26147 = state_26120__$1;
(statearr_26130_26147[(2)] = null);

(statearr_26130_26147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (5))){
var inst_26105 = cljs.core.async.close_BANG_.call(null,out);
var state_26120__$1 = state_26120;
var statearr_26131_26148 = state_26120__$1;
(statearr_26131_26148[(2)] = inst_26105);

(statearr_26131_26148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (10))){
var inst_26113 = (state_26120[(2)]);
var state_26120__$1 = (function (){var statearr_26132 = state_26120;
(statearr_26132[(8)] = inst_26113);

return statearr_26132;
})();
var statearr_26133_26149 = state_26120__$1;
(statearr_26133_26149[(2)] = null);

(statearr_26133_26149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26121 === (8))){
var inst_26102 = (state_26120[(7)]);
var state_26120__$1 = state_26120;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26120__$1,(11),out,inst_26102);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___26139,out))
;
return ((function (switch__24510__auto__,c__24600__auto___26139,out){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_26134 = [null,null,null,null,null,null,null,null,null];
(statearr_26134[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_26134[(1)] = (1));

return statearr_26134;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_26120){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_26120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e26135){if((e26135 instanceof Object)){
var ex__24514__auto__ = e26135;
var statearr_26136_26150 = state_26120;
(statearr_26136_26150[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26151 = state_26120;
state_26120 = G__26151;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_26120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_26120);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___26139,out))
})();
var state__24602__auto__ = (function (){var statearr_26137 = f__24601__auto__.call(null);
(statearr_26137[(6)] = c__24600__auto___26139);

return statearr_26137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___26139,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26153 = arguments.length;
switch (G__26153) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto__){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto__){
return (function (state_26216){
var state_val_26217 = (state_26216[(1)]);
if((state_val_26217 === (7))){
var inst_26212 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
var statearr_26218_26256 = state_26216__$1;
(statearr_26218_26256[(2)] = inst_26212);

(statearr_26218_26256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (20))){
var inst_26182 = (state_26216[(7)]);
var inst_26193 = (state_26216[(2)]);
var inst_26194 = cljs.core.next.call(null,inst_26182);
var inst_26168 = inst_26194;
var inst_26169 = null;
var inst_26170 = (0);
var inst_26171 = (0);
var state_26216__$1 = (function (){var statearr_26219 = state_26216;
(statearr_26219[(8)] = inst_26168);

(statearr_26219[(9)] = inst_26169);

(statearr_26219[(10)] = inst_26193);

(statearr_26219[(11)] = inst_26171);

(statearr_26219[(12)] = inst_26170);

return statearr_26219;
})();
var statearr_26220_26257 = state_26216__$1;
(statearr_26220_26257[(2)] = null);

(statearr_26220_26257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (1))){
var state_26216__$1 = state_26216;
var statearr_26221_26258 = state_26216__$1;
(statearr_26221_26258[(2)] = null);

(statearr_26221_26258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (4))){
var inst_26157 = (state_26216[(13)]);
var inst_26157__$1 = (state_26216[(2)]);
var inst_26158 = (inst_26157__$1 == null);
var state_26216__$1 = (function (){var statearr_26222 = state_26216;
(statearr_26222[(13)] = inst_26157__$1);

return statearr_26222;
})();
if(cljs.core.truth_(inst_26158)){
var statearr_26223_26259 = state_26216__$1;
(statearr_26223_26259[(1)] = (5));

} else {
var statearr_26224_26260 = state_26216__$1;
(statearr_26224_26260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (15))){
var state_26216__$1 = state_26216;
var statearr_26228_26261 = state_26216__$1;
(statearr_26228_26261[(2)] = null);

(statearr_26228_26261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (21))){
var state_26216__$1 = state_26216;
var statearr_26229_26262 = state_26216__$1;
(statearr_26229_26262[(2)] = null);

(statearr_26229_26262[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (13))){
var inst_26168 = (state_26216[(8)]);
var inst_26169 = (state_26216[(9)]);
var inst_26171 = (state_26216[(11)]);
var inst_26170 = (state_26216[(12)]);
var inst_26178 = (state_26216[(2)]);
var inst_26179 = (inst_26171 + (1));
var tmp26225 = inst_26168;
var tmp26226 = inst_26169;
var tmp26227 = inst_26170;
var inst_26168__$1 = tmp26225;
var inst_26169__$1 = tmp26226;
var inst_26170__$1 = tmp26227;
var inst_26171__$1 = inst_26179;
var state_26216__$1 = (function (){var statearr_26230 = state_26216;
(statearr_26230[(8)] = inst_26168__$1);

(statearr_26230[(9)] = inst_26169__$1);

(statearr_26230[(14)] = inst_26178);

(statearr_26230[(11)] = inst_26171__$1);

(statearr_26230[(12)] = inst_26170__$1);

return statearr_26230;
})();
var statearr_26231_26263 = state_26216__$1;
(statearr_26231_26263[(2)] = null);

(statearr_26231_26263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (22))){
var state_26216__$1 = state_26216;
var statearr_26232_26264 = state_26216__$1;
(statearr_26232_26264[(2)] = null);

(statearr_26232_26264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (6))){
var inst_26157 = (state_26216[(13)]);
var inst_26166 = f.call(null,inst_26157);
var inst_26167 = cljs.core.seq.call(null,inst_26166);
var inst_26168 = inst_26167;
var inst_26169 = null;
var inst_26170 = (0);
var inst_26171 = (0);
var state_26216__$1 = (function (){var statearr_26233 = state_26216;
(statearr_26233[(8)] = inst_26168);

(statearr_26233[(9)] = inst_26169);

(statearr_26233[(11)] = inst_26171);

(statearr_26233[(12)] = inst_26170);

return statearr_26233;
})();
var statearr_26234_26265 = state_26216__$1;
(statearr_26234_26265[(2)] = null);

(statearr_26234_26265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (17))){
var inst_26182 = (state_26216[(7)]);
var inst_26186 = cljs.core.chunk_first.call(null,inst_26182);
var inst_26187 = cljs.core.chunk_rest.call(null,inst_26182);
var inst_26188 = cljs.core.count.call(null,inst_26186);
var inst_26168 = inst_26187;
var inst_26169 = inst_26186;
var inst_26170 = inst_26188;
var inst_26171 = (0);
var state_26216__$1 = (function (){var statearr_26235 = state_26216;
(statearr_26235[(8)] = inst_26168);

(statearr_26235[(9)] = inst_26169);

(statearr_26235[(11)] = inst_26171);

(statearr_26235[(12)] = inst_26170);

return statearr_26235;
})();
var statearr_26236_26266 = state_26216__$1;
(statearr_26236_26266[(2)] = null);

(statearr_26236_26266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (3))){
var inst_26214 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26216__$1,inst_26214);
} else {
if((state_val_26217 === (12))){
var inst_26202 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
var statearr_26237_26267 = state_26216__$1;
(statearr_26237_26267[(2)] = inst_26202);

(statearr_26237_26267[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (2))){
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26216__$1,(4),in$);
} else {
if((state_val_26217 === (23))){
var inst_26210 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
var statearr_26238_26268 = state_26216__$1;
(statearr_26238_26268[(2)] = inst_26210);

(statearr_26238_26268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (19))){
var inst_26197 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
var statearr_26239_26269 = state_26216__$1;
(statearr_26239_26269[(2)] = inst_26197);

(statearr_26239_26269[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (11))){
var inst_26168 = (state_26216[(8)]);
var inst_26182 = (state_26216[(7)]);
var inst_26182__$1 = cljs.core.seq.call(null,inst_26168);
var state_26216__$1 = (function (){var statearr_26240 = state_26216;
(statearr_26240[(7)] = inst_26182__$1);

return statearr_26240;
})();
if(inst_26182__$1){
var statearr_26241_26270 = state_26216__$1;
(statearr_26241_26270[(1)] = (14));

} else {
var statearr_26242_26271 = state_26216__$1;
(statearr_26242_26271[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (9))){
var inst_26204 = (state_26216[(2)]);
var inst_26205 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26216__$1 = (function (){var statearr_26243 = state_26216;
(statearr_26243[(15)] = inst_26204);

return statearr_26243;
})();
if(cljs.core.truth_(inst_26205)){
var statearr_26244_26272 = state_26216__$1;
(statearr_26244_26272[(1)] = (21));

} else {
var statearr_26245_26273 = state_26216__$1;
(statearr_26245_26273[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (5))){
var inst_26160 = cljs.core.async.close_BANG_.call(null,out);
var state_26216__$1 = state_26216;
var statearr_26246_26274 = state_26216__$1;
(statearr_26246_26274[(2)] = inst_26160);

(statearr_26246_26274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (14))){
var inst_26182 = (state_26216[(7)]);
var inst_26184 = cljs.core.chunked_seq_QMARK_.call(null,inst_26182);
var state_26216__$1 = state_26216;
if(inst_26184){
var statearr_26247_26275 = state_26216__$1;
(statearr_26247_26275[(1)] = (17));

} else {
var statearr_26248_26276 = state_26216__$1;
(statearr_26248_26276[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (16))){
var inst_26200 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
var statearr_26249_26277 = state_26216__$1;
(statearr_26249_26277[(2)] = inst_26200);

(statearr_26249_26277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (10))){
var inst_26169 = (state_26216[(9)]);
var inst_26171 = (state_26216[(11)]);
var inst_26176 = cljs.core._nth.call(null,inst_26169,inst_26171);
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26216__$1,(13),out,inst_26176);
} else {
if((state_val_26217 === (18))){
var inst_26182 = (state_26216[(7)]);
var inst_26191 = cljs.core.first.call(null,inst_26182);
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26216__$1,(20),out,inst_26191);
} else {
if((state_val_26217 === (8))){
var inst_26171 = (state_26216[(11)]);
var inst_26170 = (state_26216[(12)]);
var inst_26173 = (inst_26171 < inst_26170);
var inst_26174 = inst_26173;
var state_26216__$1 = state_26216;
if(cljs.core.truth_(inst_26174)){
var statearr_26250_26278 = state_26216__$1;
(statearr_26250_26278[(1)] = (10));

} else {
var statearr_26251_26279 = state_26216__$1;
(statearr_26251_26279[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto__))
;
return ((function (switch__24510__auto__,c__24600__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24511__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24511__auto____0 = (function (){
var statearr_26252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26252[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24511__auto__);

(statearr_26252[(1)] = (1));

return statearr_26252;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24511__auto____1 = (function (state_26216){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_26216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e26253){if((e26253 instanceof Object)){
var ex__24514__auto__ = e26253;
var statearr_26254_26280 = state_26216;
(statearr_26254_26280[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26281 = state_26216;
state_26216 = G__26281;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24511__auto__ = function(state_26216){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24511__auto____1.call(this,state_26216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24511__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24511__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto__))
})();
var state__24602__auto__ = (function (){var statearr_26255 = f__24601__auto__.call(null);
(statearr_26255[(6)] = c__24600__auto__);

return statearr_26255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto__))
);

return c__24600__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26283 = arguments.length;
switch (G__26283) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26286 = arguments.length;
switch (G__26286) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26289 = arguments.length;
switch (G__26289) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24600__auto___26336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___26336,out){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___26336,out){
return (function (state_26313){
var state_val_26314 = (state_26313[(1)]);
if((state_val_26314 === (7))){
var inst_26308 = (state_26313[(2)]);
var state_26313__$1 = state_26313;
var statearr_26315_26337 = state_26313__$1;
(statearr_26315_26337[(2)] = inst_26308);

(statearr_26315_26337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (1))){
var inst_26290 = null;
var state_26313__$1 = (function (){var statearr_26316 = state_26313;
(statearr_26316[(7)] = inst_26290);

return statearr_26316;
})();
var statearr_26317_26338 = state_26313__$1;
(statearr_26317_26338[(2)] = null);

(statearr_26317_26338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (4))){
var inst_26293 = (state_26313[(8)]);
var inst_26293__$1 = (state_26313[(2)]);
var inst_26294 = (inst_26293__$1 == null);
var inst_26295 = cljs.core.not.call(null,inst_26294);
var state_26313__$1 = (function (){var statearr_26318 = state_26313;
(statearr_26318[(8)] = inst_26293__$1);

return statearr_26318;
})();
if(inst_26295){
var statearr_26319_26339 = state_26313__$1;
(statearr_26319_26339[(1)] = (5));

} else {
var statearr_26320_26340 = state_26313__$1;
(statearr_26320_26340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (6))){
var state_26313__$1 = state_26313;
var statearr_26321_26341 = state_26313__$1;
(statearr_26321_26341[(2)] = null);

(statearr_26321_26341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (3))){
var inst_26310 = (state_26313[(2)]);
var inst_26311 = cljs.core.async.close_BANG_.call(null,out);
var state_26313__$1 = (function (){var statearr_26322 = state_26313;
(statearr_26322[(9)] = inst_26310);

return statearr_26322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26313__$1,inst_26311);
} else {
if((state_val_26314 === (2))){
var state_26313__$1 = state_26313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26313__$1,(4),ch);
} else {
if((state_val_26314 === (11))){
var inst_26293 = (state_26313[(8)]);
var inst_26302 = (state_26313[(2)]);
var inst_26290 = inst_26293;
var state_26313__$1 = (function (){var statearr_26323 = state_26313;
(statearr_26323[(7)] = inst_26290);

(statearr_26323[(10)] = inst_26302);

return statearr_26323;
})();
var statearr_26324_26342 = state_26313__$1;
(statearr_26324_26342[(2)] = null);

(statearr_26324_26342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (9))){
var inst_26293 = (state_26313[(8)]);
var state_26313__$1 = state_26313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26313__$1,(11),out,inst_26293);
} else {
if((state_val_26314 === (5))){
var inst_26293 = (state_26313[(8)]);
var inst_26290 = (state_26313[(7)]);
var inst_26297 = cljs.core._EQ_.call(null,inst_26293,inst_26290);
var state_26313__$1 = state_26313;
if(inst_26297){
var statearr_26326_26343 = state_26313__$1;
(statearr_26326_26343[(1)] = (8));

} else {
var statearr_26327_26344 = state_26313__$1;
(statearr_26327_26344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (10))){
var inst_26305 = (state_26313[(2)]);
var state_26313__$1 = state_26313;
var statearr_26328_26345 = state_26313__$1;
(statearr_26328_26345[(2)] = inst_26305);

(statearr_26328_26345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26314 === (8))){
var inst_26290 = (state_26313[(7)]);
var tmp26325 = inst_26290;
var inst_26290__$1 = tmp26325;
var state_26313__$1 = (function (){var statearr_26329 = state_26313;
(statearr_26329[(7)] = inst_26290__$1);

return statearr_26329;
})();
var statearr_26330_26346 = state_26313__$1;
(statearr_26330_26346[(2)] = null);

(statearr_26330_26346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___26336,out))
;
return ((function (switch__24510__auto__,c__24600__auto___26336,out){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_26331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26331[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_26331[(1)] = (1));

return statearr_26331;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_26313){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_26313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e26332){if((e26332 instanceof Object)){
var ex__24514__auto__ = e26332;
var statearr_26333_26347 = state_26313;
(statearr_26333_26347[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26348 = state_26313;
state_26313 = G__26348;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_26313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_26313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___26336,out))
})();
var state__24602__auto__ = (function (){var statearr_26334 = f__24601__auto__.call(null);
(statearr_26334[(6)] = c__24600__auto___26336);

return statearr_26334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___26336,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26350 = arguments.length;
switch (G__26350) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24600__auto___26416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___26416,out){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___26416,out){
return (function (state_26388){
var state_val_26389 = (state_26388[(1)]);
if((state_val_26389 === (7))){
var inst_26384 = (state_26388[(2)]);
var state_26388__$1 = state_26388;
var statearr_26390_26417 = state_26388__$1;
(statearr_26390_26417[(2)] = inst_26384);

(statearr_26390_26417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (1))){
var inst_26351 = (new Array(n));
var inst_26352 = inst_26351;
var inst_26353 = (0);
var state_26388__$1 = (function (){var statearr_26391 = state_26388;
(statearr_26391[(7)] = inst_26353);

(statearr_26391[(8)] = inst_26352);

return statearr_26391;
})();
var statearr_26392_26418 = state_26388__$1;
(statearr_26392_26418[(2)] = null);

(statearr_26392_26418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (4))){
var inst_26356 = (state_26388[(9)]);
var inst_26356__$1 = (state_26388[(2)]);
var inst_26357 = (inst_26356__$1 == null);
var inst_26358 = cljs.core.not.call(null,inst_26357);
var state_26388__$1 = (function (){var statearr_26393 = state_26388;
(statearr_26393[(9)] = inst_26356__$1);

return statearr_26393;
})();
if(inst_26358){
var statearr_26394_26419 = state_26388__$1;
(statearr_26394_26419[(1)] = (5));

} else {
var statearr_26395_26420 = state_26388__$1;
(statearr_26395_26420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (15))){
var inst_26378 = (state_26388[(2)]);
var state_26388__$1 = state_26388;
var statearr_26396_26421 = state_26388__$1;
(statearr_26396_26421[(2)] = inst_26378);

(statearr_26396_26421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (13))){
var state_26388__$1 = state_26388;
var statearr_26397_26422 = state_26388__$1;
(statearr_26397_26422[(2)] = null);

(statearr_26397_26422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (6))){
var inst_26353 = (state_26388[(7)]);
var inst_26374 = (inst_26353 > (0));
var state_26388__$1 = state_26388;
if(cljs.core.truth_(inst_26374)){
var statearr_26398_26423 = state_26388__$1;
(statearr_26398_26423[(1)] = (12));

} else {
var statearr_26399_26424 = state_26388__$1;
(statearr_26399_26424[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (3))){
var inst_26386 = (state_26388[(2)]);
var state_26388__$1 = state_26388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26388__$1,inst_26386);
} else {
if((state_val_26389 === (12))){
var inst_26352 = (state_26388[(8)]);
var inst_26376 = cljs.core.vec.call(null,inst_26352);
var state_26388__$1 = state_26388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26388__$1,(15),out,inst_26376);
} else {
if((state_val_26389 === (2))){
var state_26388__$1 = state_26388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26388__$1,(4),ch);
} else {
if((state_val_26389 === (11))){
var inst_26368 = (state_26388[(2)]);
var inst_26369 = (new Array(n));
var inst_26352 = inst_26369;
var inst_26353 = (0);
var state_26388__$1 = (function (){var statearr_26400 = state_26388;
(statearr_26400[(7)] = inst_26353);

(statearr_26400[(10)] = inst_26368);

(statearr_26400[(8)] = inst_26352);

return statearr_26400;
})();
var statearr_26401_26425 = state_26388__$1;
(statearr_26401_26425[(2)] = null);

(statearr_26401_26425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (9))){
var inst_26352 = (state_26388[(8)]);
var inst_26366 = cljs.core.vec.call(null,inst_26352);
var state_26388__$1 = state_26388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26388__$1,(11),out,inst_26366);
} else {
if((state_val_26389 === (5))){
var inst_26353 = (state_26388[(7)]);
var inst_26352 = (state_26388[(8)]);
var inst_26356 = (state_26388[(9)]);
var inst_26361 = (state_26388[(11)]);
var inst_26360 = (inst_26352[inst_26353] = inst_26356);
var inst_26361__$1 = (inst_26353 + (1));
var inst_26362 = (inst_26361__$1 < n);
var state_26388__$1 = (function (){var statearr_26402 = state_26388;
(statearr_26402[(12)] = inst_26360);

(statearr_26402[(11)] = inst_26361__$1);

return statearr_26402;
})();
if(cljs.core.truth_(inst_26362)){
var statearr_26403_26426 = state_26388__$1;
(statearr_26403_26426[(1)] = (8));

} else {
var statearr_26404_26427 = state_26388__$1;
(statearr_26404_26427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (14))){
var inst_26381 = (state_26388[(2)]);
var inst_26382 = cljs.core.async.close_BANG_.call(null,out);
var state_26388__$1 = (function (){var statearr_26406 = state_26388;
(statearr_26406[(13)] = inst_26381);

return statearr_26406;
})();
var statearr_26407_26428 = state_26388__$1;
(statearr_26407_26428[(2)] = inst_26382);

(statearr_26407_26428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (10))){
var inst_26372 = (state_26388[(2)]);
var state_26388__$1 = state_26388;
var statearr_26408_26429 = state_26388__$1;
(statearr_26408_26429[(2)] = inst_26372);

(statearr_26408_26429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26389 === (8))){
var inst_26352 = (state_26388[(8)]);
var inst_26361 = (state_26388[(11)]);
var tmp26405 = inst_26352;
var inst_26352__$1 = tmp26405;
var inst_26353 = inst_26361;
var state_26388__$1 = (function (){var statearr_26409 = state_26388;
(statearr_26409[(7)] = inst_26353);

(statearr_26409[(8)] = inst_26352__$1);

return statearr_26409;
})();
var statearr_26410_26430 = state_26388__$1;
(statearr_26410_26430[(2)] = null);

(statearr_26410_26430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___26416,out))
;
return ((function (switch__24510__auto__,c__24600__auto___26416,out){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_26411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26411[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_26411[(1)] = (1));

return statearr_26411;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_26388){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_26388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e26412){if((e26412 instanceof Object)){
var ex__24514__auto__ = e26412;
var statearr_26413_26431 = state_26388;
(statearr_26413_26431[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26432 = state_26388;
state_26388 = G__26432;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_26388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_26388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___26416,out))
})();
var state__24602__auto__ = (function (){var statearr_26414 = f__24601__auto__.call(null);
(statearr_26414[(6)] = c__24600__auto___26416);

return statearr_26414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___26416,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26434 = arguments.length;
switch (G__26434) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24600__auto___26504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24600__auto___26504,out){
return (function (){
var f__24601__auto__ = (function (){var switch__24510__auto__ = ((function (c__24600__auto___26504,out){
return (function (state_26476){
var state_val_26477 = (state_26476[(1)]);
if((state_val_26477 === (7))){
var inst_26472 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
var statearr_26478_26505 = state_26476__$1;
(statearr_26478_26505[(2)] = inst_26472);

(statearr_26478_26505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (1))){
var inst_26435 = [];
var inst_26436 = inst_26435;
var inst_26437 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26476__$1 = (function (){var statearr_26479 = state_26476;
(statearr_26479[(7)] = inst_26437);

(statearr_26479[(8)] = inst_26436);

return statearr_26479;
})();
var statearr_26480_26506 = state_26476__$1;
(statearr_26480_26506[(2)] = null);

(statearr_26480_26506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (4))){
var inst_26440 = (state_26476[(9)]);
var inst_26440__$1 = (state_26476[(2)]);
var inst_26441 = (inst_26440__$1 == null);
var inst_26442 = cljs.core.not.call(null,inst_26441);
var state_26476__$1 = (function (){var statearr_26481 = state_26476;
(statearr_26481[(9)] = inst_26440__$1);

return statearr_26481;
})();
if(inst_26442){
var statearr_26482_26507 = state_26476__$1;
(statearr_26482_26507[(1)] = (5));

} else {
var statearr_26483_26508 = state_26476__$1;
(statearr_26483_26508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (15))){
var inst_26466 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
var statearr_26484_26509 = state_26476__$1;
(statearr_26484_26509[(2)] = inst_26466);

(statearr_26484_26509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (13))){
var state_26476__$1 = state_26476;
var statearr_26485_26510 = state_26476__$1;
(statearr_26485_26510[(2)] = null);

(statearr_26485_26510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (6))){
var inst_26436 = (state_26476[(8)]);
var inst_26461 = inst_26436.length;
var inst_26462 = (inst_26461 > (0));
var state_26476__$1 = state_26476;
if(cljs.core.truth_(inst_26462)){
var statearr_26486_26511 = state_26476__$1;
(statearr_26486_26511[(1)] = (12));

} else {
var statearr_26487_26512 = state_26476__$1;
(statearr_26487_26512[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (3))){
var inst_26474 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26476__$1,inst_26474);
} else {
if((state_val_26477 === (12))){
var inst_26436 = (state_26476[(8)]);
var inst_26464 = cljs.core.vec.call(null,inst_26436);
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26476__$1,(15),out,inst_26464);
} else {
if((state_val_26477 === (2))){
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26476__$1,(4),ch);
} else {
if((state_val_26477 === (11))){
var inst_26440 = (state_26476[(9)]);
var inst_26444 = (state_26476[(10)]);
var inst_26454 = (state_26476[(2)]);
var inst_26455 = [];
var inst_26456 = inst_26455.push(inst_26440);
var inst_26436 = inst_26455;
var inst_26437 = inst_26444;
var state_26476__$1 = (function (){var statearr_26488 = state_26476;
(statearr_26488[(11)] = inst_26454);

(statearr_26488[(7)] = inst_26437);

(statearr_26488[(8)] = inst_26436);

(statearr_26488[(12)] = inst_26456);

return statearr_26488;
})();
var statearr_26489_26513 = state_26476__$1;
(statearr_26489_26513[(2)] = null);

(statearr_26489_26513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (9))){
var inst_26436 = (state_26476[(8)]);
var inst_26452 = cljs.core.vec.call(null,inst_26436);
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26476__$1,(11),out,inst_26452);
} else {
if((state_val_26477 === (5))){
var inst_26440 = (state_26476[(9)]);
var inst_26437 = (state_26476[(7)]);
var inst_26444 = (state_26476[(10)]);
var inst_26444__$1 = f.call(null,inst_26440);
var inst_26445 = cljs.core._EQ_.call(null,inst_26444__$1,inst_26437);
var inst_26446 = cljs.core.keyword_identical_QMARK_.call(null,inst_26437,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26447 = (inst_26445) || (inst_26446);
var state_26476__$1 = (function (){var statearr_26490 = state_26476;
(statearr_26490[(10)] = inst_26444__$1);

return statearr_26490;
})();
if(cljs.core.truth_(inst_26447)){
var statearr_26491_26514 = state_26476__$1;
(statearr_26491_26514[(1)] = (8));

} else {
var statearr_26492_26515 = state_26476__$1;
(statearr_26492_26515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (14))){
var inst_26469 = (state_26476[(2)]);
var inst_26470 = cljs.core.async.close_BANG_.call(null,out);
var state_26476__$1 = (function (){var statearr_26494 = state_26476;
(statearr_26494[(13)] = inst_26469);

return statearr_26494;
})();
var statearr_26495_26516 = state_26476__$1;
(statearr_26495_26516[(2)] = inst_26470);

(statearr_26495_26516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (10))){
var inst_26459 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
var statearr_26496_26517 = state_26476__$1;
(statearr_26496_26517[(2)] = inst_26459);

(statearr_26496_26517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (8))){
var inst_26440 = (state_26476[(9)]);
var inst_26444 = (state_26476[(10)]);
var inst_26436 = (state_26476[(8)]);
var inst_26449 = inst_26436.push(inst_26440);
var tmp26493 = inst_26436;
var inst_26436__$1 = tmp26493;
var inst_26437 = inst_26444;
var state_26476__$1 = (function (){var statearr_26497 = state_26476;
(statearr_26497[(7)] = inst_26437);

(statearr_26497[(8)] = inst_26436__$1);

(statearr_26497[(14)] = inst_26449);

return statearr_26497;
})();
var statearr_26498_26518 = state_26476__$1;
(statearr_26498_26518[(2)] = null);

(statearr_26498_26518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24600__auto___26504,out))
;
return ((function (switch__24510__auto__,c__24600__auto___26504,out){
return (function() {
var cljs$core$async$state_machine__24511__auto__ = null;
var cljs$core$async$state_machine__24511__auto____0 = (function (){
var statearr_26499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26499[(0)] = cljs$core$async$state_machine__24511__auto__);

(statearr_26499[(1)] = (1));

return statearr_26499;
});
var cljs$core$async$state_machine__24511__auto____1 = (function (state_26476){
while(true){
var ret_value__24512__auto__ = (function (){try{while(true){
var result__24513__auto__ = switch__24510__auto__.call(null,state_26476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24513__auto__;
}
break;
}
}catch (e26500){if((e26500 instanceof Object)){
var ex__24514__auto__ = e26500;
var statearr_26501_26519 = state_26476;
(statearr_26501_26519[(5)] = ex__24514__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24512__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26520 = state_26476;
state_26476 = G__26520;
continue;
} else {
return ret_value__24512__auto__;
}
break;
}
});
cljs$core$async$state_machine__24511__auto__ = function(state_26476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24511__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24511__auto____1.call(this,state_26476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24511__auto____0;
cljs$core$async$state_machine__24511__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24511__auto____1;
return cljs$core$async$state_machine__24511__auto__;
})()
;})(switch__24510__auto__,c__24600__auto___26504,out))
})();
var state__24602__auto__ = (function (){var statearr_26502 = f__24601__auto__.call(null);
(statearr_26502[(6)] = c__24600__auto___26504);

return statearr_26502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24602__auto__);
});})(c__24600__auto___26504,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
