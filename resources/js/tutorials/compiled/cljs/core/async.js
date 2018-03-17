// Compiled by ClojureScript 1.10.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27880 = arguments.length;
switch (G__27880) {
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
if(typeof cljs.core.async.t_cljs$core$async27881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27881 = (function (f,blockable,meta27882){
this.f = f;
this.blockable = blockable;
this.meta27882 = meta27882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27883,meta27882__$1){
var self__ = this;
var _27883__$1 = this;
return (new cljs.core.async.t_cljs$core$async27881(self__.f,self__.blockable,meta27882__$1));
});

cljs.core.async.t_cljs$core$async27881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27883){
var self__ = this;
var _27883__$1 = this;
return self__.meta27882;
});

cljs.core.async.t_cljs$core$async27881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27882","meta27882",-1597430481,null)], null);
});

cljs.core.async.t_cljs$core$async27881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27881";

cljs.core.async.t_cljs$core$async27881.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27881");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27881.
 */
cljs.core.async.__GT_t_cljs$core$async27881 = (function cljs$core$async$__GT_t_cljs$core$async27881(f__$1,blockable__$1,meta27882){
return (new cljs.core.async.t_cljs$core$async27881(f__$1,blockable__$1,meta27882));
});

}

return (new cljs.core.async.t_cljs$core$async27881(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__27887 = arguments.length;
switch (G__27887) {
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
var G__27890 = arguments.length;
switch (G__27890) {
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
var G__27893 = arguments.length;
switch (G__27893) {
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
var val_27895 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27895);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27895,ret){
return (function (){
return fn1.call(null,val_27895);
});})(val_27895,ret))
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
var G__27897 = arguments.length;
switch (G__27897) {
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
var n__4376__auto___27899 = n;
var x_27900 = (0);
while(true){
if((x_27900 < n__4376__auto___27899)){
(a[x_27900] = (0));

var G__27901 = (x_27900 + (1));
x_27900 = G__27901;
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

var G__27902 = (i + (1));
i = G__27902;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27903 = (function (flag,meta27904){
this.flag = flag;
this.meta27904 = meta27904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27905,meta27904__$1){
var self__ = this;
var _27905__$1 = this;
return (new cljs.core.async.t_cljs$core$async27903(self__.flag,meta27904__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27905){
var self__ = this;
var _27905__$1 = this;
return self__.meta27904;
});})(flag))
;

cljs.core.async.t_cljs$core$async27903.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27903.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27904","meta27904",1555055420,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27903";

cljs.core.async.t_cljs$core$async27903.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27903");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27903.
 */
cljs.core.async.__GT_t_cljs$core$async27903 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27903(flag__$1,meta27904){
return (new cljs.core.async.t_cljs$core$async27903(flag__$1,meta27904));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27903(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27906 = (function (flag,cb,meta27907){
this.flag = flag;
this.cb = cb;
this.meta27907 = meta27907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27908,meta27907__$1){
var self__ = this;
var _27908__$1 = this;
return (new cljs.core.async.t_cljs$core$async27906(self__.flag,self__.cb,meta27907__$1));
});

cljs.core.async.t_cljs$core$async27906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27908){
var self__ = this;
var _27908__$1 = this;
return self__.meta27907;
});

cljs.core.async.t_cljs$core$async27906.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27906.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27907","meta27907",1136386140,null)], null);
});

cljs.core.async.t_cljs$core$async27906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27906";

cljs.core.async.t_cljs$core$async27906.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27906");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27906.
 */
cljs.core.async.__GT_t_cljs$core$async27906 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27906(flag__$1,cb__$1,meta27907){
return (new cljs.core.async.t_cljs$core$async27906(flag__$1,cb__$1,meta27907));
});

}

return (new cljs.core.async.t_cljs$core$async27906(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27909_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27909_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27910_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27910_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27911 = (i + (1));
i = G__27911;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
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
var args__4500__auto__ = [];
var len__4497__auto___27917 = arguments.length;
var i__4498__auto___27918 = (0);
while(true){
if((i__4498__auto___27918 < len__4497__auto___27917)){
args__4500__auto__.push((arguments[i__4498__auto___27918]));

var G__27919 = (i__4498__auto___27918 + (1));
i__4498__auto___27918 = G__27919;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27914){
var map__27915 = p__27914;
var map__27915__$1 = ((((!((map__27915 == null)))?(((((map__27915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27915):map__27915);
var opts = map__27915__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27912){
var G__27913 = cljs.core.first.call(null,seq27912);
var seq27912__$1 = cljs.core.next.call(null,seq27912);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27913,seq27912__$1);
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
var G__27921 = arguments.length;
switch (G__27921) {
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
var c__23380__auto___27967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___27967){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___27967){
return (function (state_27945){
var state_val_27946 = (state_27945[(1)]);
if((state_val_27946 === (7))){
var inst_27941 = (state_27945[(2)]);
var state_27945__$1 = state_27945;
var statearr_27947_27968 = state_27945__$1;
(statearr_27947_27968[(2)] = inst_27941);

(statearr_27947_27968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27946 === (1))){
var state_27945__$1 = state_27945;
var statearr_27948_27969 = state_27945__$1;
(statearr_27948_27969[(2)] = null);

(statearr_27948_27969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27946 === (4))){
var inst_27924 = (state_27945[(7)]);
var inst_27924__$1 = (state_27945[(2)]);
var inst_27925 = (inst_27924__$1 == null);
var state_27945__$1 = (function (){var statearr_27949 = state_27945;
(statearr_27949[(7)] = inst_27924__$1);

return statearr_27949;
})();
if(cljs.core.truth_(inst_27925)){
var statearr_27950_27970 = state_27945__$1;
(statearr_27950_27970[(1)] = (5));

} else {
var statearr_27951_27971 = state_27945__$1;
(statearr_27951_27971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27946 === (13))){
var state_27945__$1 = state_27945;
var statearr_27952_27972 = state_27945__$1;
(statearr_27952_27972[(2)] = null);

(statearr_27952_27972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27946 === (6))){
var inst_27924 = (state_27945[(7)]);
var state_27945__$1 = state_27945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27945__$1,(11),to,inst_27924);
} else {
if((state_val_27946 === (3))){
var inst_27943 = (state_27945[(2)]);
var state_27945__$1 = state_27945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27945__$1,inst_27943);
} else {
if((state_val_27946 === (12))){
var state_27945__$1 = state_27945;
var statearr_27953_27973 = state_27945__$1;
(statearr_27953_27973[(2)] = null);

(statearr_27953_27973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27946 === (2))){
var state_27945__$1 = state_27945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27945__$1,(4),from);
} else {
if((state_val_27946 === (11))){
var inst_27934 = (state_27945[(2)]);
var state_27945__$1 = state_27945;
if(cljs.core.truth_(inst_27934)){
var statearr_27954_27974 = state_27945__$1;
(statearr_27954_27974[(1)] = (12));

} else {
var statearr_27955_27975 = state_27945__$1;
(statearr_27955_27975[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27946 === (9))){
var state_27945__$1 = state_27945;
var statearr_27956_27976 = state_27945__$1;
(statearr_27956_27976[(2)] = null);

(statearr_27956_27976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27946 === (5))){
var state_27945__$1 = state_27945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27957_27977 = state_27945__$1;
(statearr_27957_27977[(1)] = (8));

} else {
var statearr_27958_27978 = state_27945__$1;
(statearr_27958_27978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27946 === (14))){
var inst_27939 = (state_27945[(2)]);
var state_27945__$1 = state_27945;
var statearr_27959_27979 = state_27945__$1;
(statearr_27959_27979[(2)] = inst_27939);

(statearr_27959_27979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27946 === (10))){
var inst_27931 = (state_27945[(2)]);
var state_27945__$1 = state_27945;
var statearr_27960_27980 = state_27945__$1;
(statearr_27960_27980[(2)] = inst_27931);

(statearr_27960_27980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27946 === (8))){
var inst_27928 = cljs.core.async.close_BANG_.call(null,to);
var state_27945__$1 = state_27945;
var statearr_27961_27981 = state_27945__$1;
(statearr_27961_27981[(2)] = inst_27928);

(statearr_27961_27981[(1)] = (10));


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
});})(c__23380__auto___27967))
;
return ((function (switch__23223__auto__,c__23380__auto___27967){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_27962 = [null,null,null,null,null,null,null,null];
(statearr_27962[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_27962[(1)] = (1));

return statearr_27962;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_27945){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_27945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e27963){if((e27963 instanceof Object)){
var ex__23227__auto__ = e27963;
var statearr_27964_27982 = state_27945;
(statearr_27964_27982[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27983 = state_27945;
state_27945 = G__27983;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_27945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_27945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___27967))
})();
var state__23382__auto__ = (function (){var statearr_27965 = f__23381__auto__.call(null);
(statearr_27965[(6)] = c__23380__auto___27967);

return statearr_27965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___27967))
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
return (function (p__27984){
var vec__27985 = p__27984;
var v = cljs.core.nth.call(null,vec__27985,(0),null);
var p = cljs.core.nth.call(null,vec__27985,(1),null);
var job = vec__27985;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23380__auto___28156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___28156,res,vec__27985,v,p,job,jobs,results){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___28156,res,vec__27985,v,p,job,jobs,results){
return (function (state_27992){
var state_val_27993 = (state_27992[(1)]);
if((state_val_27993 === (1))){
var state_27992__$1 = state_27992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27992__$1,(2),res,v);
} else {
if((state_val_27993 === (2))){
var inst_27989 = (state_27992[(2)]);
var inst_27990 = cljs.core.async.close_BANG_.call(null,res);
var state_27992__$1 = (function (){var statearr_27994 = state_27992;
(statearr_27994[(7)] = inst_27989);

return statearr_27994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27992__$1,inst_27990);
} else {
return null;
}
}
});})(c__23380__auto___28156,res,vec__27985,v,p,job,jobs,results))
;
return ((function (switch__23223__auto__,c__23380__auto___28156,res,vec__27985,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0 = (function (){
var statearr_27995 = [null,null,null,null,null,null,null,null];
(statearr_27995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__);

(statearr_27995[(1)] = (1));

return statearr_27995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1 = (function (state_27992){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_27992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e27996){if((e27996 instanceof Object)){
var ex__23227__auto__ = e27996;
var statearr_27997_28157 = state_27992;
(statearr_27997_28157[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28158 = state_27992;
state_27992 = G__28158;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__ = function(state_27992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1.call(this,state_27992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___28156,res,vec__27985,v,p,job,jobs,results))
})();
var state__23382__auto__ = (function (){var statearr_27998 = f__23381__auto__.call(null);
(statearr_27998[(6)] = c__23380__auto___28156);

return statearr_27998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___28156,res,vec__27985,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27999){
var vec__28000 = p__27999;
var v = cljs.core.nth.call(null,vec__28000,(0),null);
var p = cljs.core.nth.call(null,vec__28000,(1),null);
var job = vec__28000;
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
var n__4376__auto___28159 = n;
var __28160 = (0);
while(true){
if((__28160 < n__4376__auto___28159)){
var G__28003_28161 = type;
var G__28003_28162__$1 = (((G__28003_28161 instanceof cljs.core.Keyword))?G__28003_28161.fqn:null);
switch (G__28003_28162__$1) {
case "compute":
var c__23380__auto___28164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28160,c__23380__auto___28164,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (__28160,c__23380__auto___28164,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async){
return (function (state_28016){
var state_val_28017 = (state_28016[(1)]);
if((state_val_28017 === (1))){
var state_28016__$1 = state_28016;
var statearr_28018_28165 = state_28016__$1;
(statearr_28018_28165[(2)] = null);

(statearr_28018_28165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (2))){
var state_28016__$1 = state_28016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28016__$1,(4),jobs);
} else {
if((state_val_28017 === (3))){
var inst_28014 = (state_28016[(2)]);
var state_28016__$1 = state_28016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28016__$1,inst_28014);
} else {
if((state_val_28017 === (4))){
var inst_28006 = (state_28016[(2)]);
var inst_28007 = process.call(null,inst_28006);
var state_28016__$1 = state_28016;
if(cljs.core.truth_(inst_28007)){
var statearr_28019_28166 = state_28016__$1;
(statearr_28019_28166[(1)] = (5));

} else {
var statearr_28020_28167 = state_28016__$1;
(statearr_28020_28167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (5))){
var state_28016__$1 = state_28016;
var statearr_28021_28168 = state_28016__$1;
(statearr_28021_28168[(2)] = null);

(statearr_28021_28168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (6))){
var state_28016__$1 = state_28016;
var statearr_28022_28169 = state_28016__$1;
(statearr_28022_28169[(2)] = null);

(statearr_28022_28169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28017 === (7))){
var inst_28012 = (state_28016[(2)]);
var state_28016__$1 = state_28016;
var statearr_28023_28170 = state_28016__$1;
(statearr_28023_28170[(2)] = inst_28012);

(statearr_28023_28170[(1)] = (3));


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
});})(__28160,c__23380__auto___28164,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async))
;
return ((function (__28160,switch__23223__auto__,c__23380__auto___28164,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0 = (function (){
var statearr_28024 = [null,null,null,null,null,null,null];
(statearr_28024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__);

(statearr_28024[(1)] = (1));

return statearr_28024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1 = (function (state_28016){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_28016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e28025){if((e28025 instanceof Object)){
var ex__23227__auto__ = e28025;
var statearr_28026_28171 = state_28016;
(statearr_28026_28171[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28172 = state_28016;
state_28016 = G__28172;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__ = function(state_28016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1.call(this,state_28016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__;
})()
;})(__28160,switch__23223__auto__,c__23380__auto___28164,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async))
})();
var state__23382__auto__ = (function (){var statearr_28027 = f__23381__auto__.call(null);
(statearr_28027[(6)] = c__23380__auto___28164);

return statearr_28027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(__28160,c__23380__auto___28164,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async))
);


break;
case "async":
var c__23380__auto___28173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28160,c__23380__auto___28173,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (__28160,c__23380__auto___28173,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async){
return (function (state_28040){
var state_val_28041 = (state_28040[(1)]);
if((state_val_28041 === (1))){
var state_28040__$1 = state_28040;
var statearr_28042_28174 = state_28040__$1;
(statearr_28042_28174[(2)] = null);

(statearr_28042_28174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28041 === (2))){
var state_28040__$1 = state_28040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28040__$1,(4),jobs);
} else {
if((state_val_28041 === (3))){
var inst_28038 = (state_28040[(2)]);
var state_28040__$1 = state_28040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28040__$1,inst_28038);
} else {
if((state_val_28041 === (4))){
var inst_28030 = (state_28040[(2)]);
var inst_28031 = async.call(null,inst_28030);
var state_28040__$1 = state_28040;
if(cljs.core.truth_(inst_28031)){
var statearr_28043_28175 = state_28040__$1;
(statearr_28043_28175[(1)] = (5));

} else {
var statearr_28044_28176 = state_28040__$1;
(statearr_28044_28176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28041 === (5))){
var state_28040__$1 = state_28040;
var statearr_28045_28177 = state_28040__$1;
(statearr_28045_28177[(2)] = null);

(statearr_28045_28177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28041 === (6))){
var state_28040__$1 = state_28040;
var statearr_28046_28178 = state_28040__$1;
(statearr_28046_28178[(2)] = null);

(statearr_28046_28178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28041 === (7))){
var inst_28036 = (state_28040[(2)]);
var state_28040__$1 = state_28040;
var statearr_28047_28179 = state_28040__$1;
(statearr_28047_28179[(2)] = inst_28036);

(statearr_28047_28179[(1)] = (3));


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
});})(__28160,c__23380__auto___28173,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async))
;
return ((function (__28160,switch__23223__auto__,c__23380__auto___28173,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0 = (function (){
var statearr_28048 = [null,null,null,null,null,null,null];
(statearr_28048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__);

(statearr_28048[(1)] = (1));

return statearr_28048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1 = (function (state_28040){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_28040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e28049){if((e28049 instanceof Object)){
var ex__23227__auto__ = e28049;
var statearr_28050_28180 = state_28040;
(statearr_28050_28180[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28181 = state_28040;
state_28040 = G__28181;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__ = function(state_28040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1.call(this,state_28040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__;
})()
;})(__28160,switch__23223__auto__,c__23380__auto___28173,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async))
})();
var state__23382__auto__ = (function (){var statearr_28051 = f__23381__auto__.call(null);
(statearr_28051[(6)] = c__23380__auto___28173);

return statearr_28051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(__28160,c__23380__auto___28173,G__28003_28161,G__28003_28162__$1,n__4376__auto___28159,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28003_28162__$1)].join('')));

}

var G__28182 = (__28160 + (1));
__28160 = G__28182;
continue;
} else {
}
break;
}

var c__23380__auto___28183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___28183,jobs,results,process,async){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___28183,jobs,results,process,async){
return (function (state_28073){
var state_val_28074 = (state_28073[(1)]);
if((state_val_28074 === (1))){
var state_28073__$1 = state_28073;
var statearr_28075_28184 = state_28073__$1;
(statearr_28075_28184[(2)] = null);

(statearr_28075_28184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (2))){
var state_28073__$1 = state_28073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28073__$1,(4),from);
} else {
if((state_val_28074 === (3))){
var inst_28071 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28073__$1,inst_28071);
} else {
if((state_val_28074 === (4))){
var inst_28054 = (state_28073[(7)]);
var inst_28054__$1 = (state_28073[(2)]);
var inst_28055 = (inst_28054__$1 == null);
var state_28073__$1 = (function (){var statearr_28076 = state_28073;
(statearr_28076[(7)] = inst_28054__$1);

return statearr_28076;
})();
if(cljs.core.truth_(inst_28055)){
var statearr_28077_28185 = state_28073__$1;
(statearr_28077_28185[(1)] = (5));

} else {
var statearr_28078_28186 = state_28073__$1;
(statearr_28078_28186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (5))){
var inst_28057 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28073__$1 = state_28073;
var statearr_28079_28187 = state_28073__$1;
(statearr_28079_28187[(2)] = inst_28057);

(statearr_28079_28187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (6))){
var inst_28054 = (state_28073[(7)]);
var inst_28059 = (state_28073[(8)]);
var inst_28059__$1 = cljs.core.async.chan.call(null,(1));
var inst_28060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28061 = [inst_28054,inst_28059__$1];
var inst_28062 = (new cljs.core.PersistentVector(null,2,(5),inst_28060,inst_28061,null));
var state_28073__$1 = (function (){var statearr_28080 = state_28073;
(statearr_28080[(8)] = inst_28059__$1);

return statearr_28080;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28073__$1,(8),jobs,inst_28062);
} else {
if((state_val_28074 === (7))){
var inst_28069 = (state_28073[(2)]);
var state_28073__$1 = state_28073;
var statearr_28081_28188 = state_28073__$1;
(statearr_28081_28188[(2)] = inst_28069);

(statearr_28081_28188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (8))){
var inst_28059 = (state_28073[(8)]);
var inst_28064 = (state_28073[(2)]);
var state_28073__$1 = (function (){var statearr_28082 = state_28073;
(statearr_28082[(9)] = inst_28064);

return statearr_28082;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28073__$1,(9),results,inst_28059);
} else {
if((state_val_28074 === (9))){
var inst_28066 = (state_28073[(2)]);
var state_28073__$1 = (function (){var statearr_28083 = state_28073;
(statearr_28083[(10)] = inst_28066);

return statearr_28083;
})();
var statearr_28084_28189 = state_28073__$1;
(statearr_28084_28189[(2)] = null);

(statearr_28084_28189[(1)] = (2));


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
});})(c__23380__auto___28183,jobs,results,process,async))
;
return ((function (switch__23223__auto__,c__23380__auto___28183,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0 = (function (){
var statearr_28085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__);

(statearr_28085[(1)] = (1));

return statearr_28085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1 = (function (state_28073){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_28073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e28086){if((e28086 instanceof Object)){
var ex__23227__auto__ = e28086;
var statearr_28087_28190 = state_28073;
(statearr_28087_28190[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28191 = state_28073;
state_28073 = G__28191;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__ = function(state_28073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1.call(this,state_28073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___28183,jobs,results,process,async))
})();
var state__23382__auto__ = (function (){var statearr_28088 = f__23381__auto__.call(null);
(statearr_28088[(6)] = c__23380__auto___28183);

return statearr_28088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___28183,jobs,results,process,async))
);


var c__23380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto__,jobs,results,process,async){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto__,jobs,results,process,async){
return (function (state_28126){
var state_val_28127 = (state_28126[(1)]);
if((state_val_28127 === (7))){
var inst_28122 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28128_28192 = state_28126__$1;
(statearr_28128_28192[(2)] = inst_28122);

(statearr_28128_28192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (20))){
var state_28126__$1 = state_28126;
var statearr_28129_28193 = state_28126__$1;
(statearr_28129_28193[(2)] = null);

(statearr_28129_28193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (1))){
var state_28126__$1 = state_28126;
var statearr_28130_28194 = state_28126__$1;
(statearr_28130_28194[(2)] = null);

(statearr_28130_28194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (4))){
var inst_28091 = (state_28126[(7)]);
var inst_28091__$1 = (state_28126[(2)]);
var inst_28092 = (inst_28091__$1 == null);
var state_28126__$1 = (function (){var statearr_28131 = state_28126;
(statearr_28131[(7)] = inst_28091__$1);

return statearr_28131;
})();
if(cljs.core.truth_(inst_28092)){
var statearr_28132_28195 = state_28126__$1;
(statearr_28132_28195[(1)] = (5));

} else {
var statearr_28133_28196 = state_28126__$1;
(statearr_28133_28196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (15))){
var inst_28104 = (state_28126[(8)]);
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28126__$1,(18),to,inst_28104);
} else {
if((state_val_28127 === (21))){
var inst_28117 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28134_28197 = state_28126__$1;
(statearr_28134_28197[(2)] = inst_28117);

(statearr_28134_28197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (13))){
var inst_28119 = (state_28126[(2)]);
var state_28126__$1 = (function (){var statearr_28135 = state_28126;
(statearr_28135[(9)] = inst_28119);

return statearr_28135;
})();
var statearr_28136_28198 = state_28126__$1;
(statearr_28136_28198[(2)] = null);

(statearr_28136_28198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (6))){
var inst_28091 = (state_28126[(7)]);
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28126__$1,(11),inst_28091);
} else {
if((state_val_28127 === (17))){
var inst_28112 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
if(cljs.core.truth_(inst_28112)){
var statearr_28137_28199 = state_28126__$1;
(statearr_28137_28199[(1)] = (19));

} else {
var statearr_28138_28200 = state_28126__$1;
(statearr_28138_28200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (3))){
var inst_28124 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28126__$1,inst_28124);
} else {
if((state_val_28127 === (12))){
var inst_28101 = (state_28126[(10)]);
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28126__$1,(14),inst_28101);
} else {
if((state_val_28127 === (2))){
var state_28126__$1 = state_28126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28126__$1,(4),results);
} else {
if((state_val_28127 === (19))){
var state_28126__$1 = state_28126;
var statearr_28139_28201 = state_28126__$1;
(statearr_28139_28201[(2)] = null);

(statearr_28139_28201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (11))){
var inst_28101 = (state_28126[(2)]);
var state_28126__$1 = (function (){var statearr_28140 = state_28126;
(statearr_28140[(10)] = inst_28101);

return statearr_28140;
})();
var statearr_28141_28202 = state_28126__$1;
(statearr_28141_28202[(2)] = null);

(statearr_28141_28202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (9))){
var state_28126__$1 = state_28126;
var statearr_28142_28203 = state_28126__$1;
(statearr_28142_28203[(2)] = null);

(statearr_28142_28203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (5))){
var state_28126__$1 = state_28126;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28143_28204 = state_28126__$1;
(statearr_28143_28204[(1)] = (8));

} else {
var statearr_28144_28205 = state_28126__$1;
(statearr_28144_28205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (14))){
var inst_28104 = (state_28126[(8)]);
var inst_28106 = (state_28126[(11)]);
var inst_28104__$1 = (state_28126[(2)]);
var inst_28105 = (inst_28104__$1 == null);
var inst_28106__$1 = cljs.core.not.call(null,inst_28105);
var state_28126__$1 = (function (){var statearr_28145 = state_28126;
(statearr_28145[(8)] = inst_28104__$1);

(statearr_28145[(11)] = inst_28106__$1);

return statearr_28145;
})();
if(inst_28106__$1){
var statearr_28146_28206 = state_28126__$1;
(statearr_28146_28206[(1)] = (15));

} else {
var statearr_28147_28207 = state_28126__$1;
(statearr_28147_28207[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (16))){
var inst_28106 = (state_28126[(11)]);
var state_28126__$1 = state_28126;
var statearr_28148_28208 = state_28126__$1;
(statearr_28148_28208[(2)] = inst_28106);

(statearr_28148_28208[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (10))){
var inst_28098 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28149_28209 = state_28126__$1;
(statearr_28149_28209[(2)] = inst_28098);

(statearr_28149_28209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (18))){
var inst_28109 = (state_28126[(2)]);
var state_28126__$1 = state_28126;
var statearr_28150_28210 = state_28126__$1;
(statearr_28150_28210[(2)] = inst_28109);

(statearr_28150_28210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28127 === (8))){
var inst_28095 = cljs.core.async.close_BANG_.call(null,to);
var state_28126__$1 = state_28126;
var statearr_28151_28211 = state_28126__$1;
(statearr_28151_28211[(2)] = inst_28095);

(statearr_28151_28211[(1)] = (10));


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
});})(c__23380__auto__,jobs,results,process,async))
;
return ((function (switch__23223__auto__,c__23380__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0 = (function (){
var statearr_28152 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28152[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__);

(statearr_28152[(1)] = (1));

return statearr_28152;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1 = (function (state_28126){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_28126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e28153){if((e28153 instanceof Object)){
var ex__23227__auto__ = e28153;
var statearr_28154_28212 = state_28126;
(statearr_28154_28212[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28213 = state_28126;
state_28126 = G__28213;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__ = function(state_28126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1.call(this,state_28126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto__,jobs,results,process,async))
})();
var state__23382__auto__ = (function (){var statearr_28155 = f__23381__auto__.call(null);
(statearr_28155[(6)] = c__23380__auto__);

return statearr_28155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto__,jobs,results,process,async))
);

return c__23380__auto__;
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
var G__28215 = arguments.length;
switch (G__28215) {
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
var G__28218 = arguments.length;
switch (G__28218) {
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
var G__28221 = arguments.length;
switch (G__28221) {
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
var c__23380__auto___28270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___28270,tc,fc){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___28270,tc,fc){
return (function (state_28247){
var state_val_28248 = (state_28247[(1)]);
if((state_val_28248 === (7))){
var inst_28243 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
var statearr_28249_28271 = state_28247__$1;
(statearr_28249_28271[(2)] = inst_28243);

(statearr_28249_28271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (1))){
var state_28247__$1 = state_28247;
var statearr_28250_28272 = state_28247__$1;
(statearr_28250_28272[(2)] = null);

(statearr_28250_28272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (4))){
var inst_28224 = (state_28247[(7)]);
var inst_28224__$1 = (state_28247[(2)]);
var inst_28225 = (inst_28224__$1 == null);
var state_28247__$1 = (function (){var statearr_28251 = state_28247;
(statearr_28251[(7)] = inst_28224__$1);

return statearr_28251;
})();
if(cljs.core.truth_(inst_28225)){
var statearr_28252_28273 = state_28247__$1;
(statearr_28252_28273[(1)] = (5));

} else {
var statearr_28253_28274 = state_28247__$1;
(statearr_28253_28274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (13))){
var state_28247__$1 = state_28247;
var statearr_28254_28275 = state_28247__$1;
(statearr_28254_28275[(2)] = null);

(statearr_28254_28275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (6))){
var inst_28224 = (state_28247[(7)]);
var inst_28230 = p.call(null,inst_28224);
var state_28247__$1 = state_28247;
if(cljs.core.truth_(inst_28230)){
var statearr_28255_28276 = state_28247__$1;
(statearr_28255_28276[(1)] = (9));

} else {
var statearr_28256_28277 = state_28247__$1;
(statearr_28256_28277[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (3))){
var inst_28245 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28247__$1,inst_28245);
} else {
if((state_val_28248 === (12))){
var state_28247__$1 = state_28247;
var statearr_28257_28278 = state_28247__$1;
(statearr_28257_28278[(2)] = null);

(statearr_28257_28278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (2))){
var state_28247__$1 = state_28247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28247__$1,(4),ch);
} else {
if((state_val_28248 === (11))){
var inst_28224 = (state_28247[(7)]);
var inst_28234 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28247__$1,(8),inst_28234,inst_28224);
} else {
if((state_val_28248 === (9))){
var state_28247__$1 = state_28247;
var statearr_28258_28279 = state_28247__$1;
(statearr_28258_28279[(2)] = tc);

(statearr_28258_28279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (5))){
var inst_28227 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28228 = cljs.core.async.close_BANG_.call(null,fc);
var state_28247__$1 = (function (){var statearr_28259 = state_28247;
(statearr_28259[(8)] = inst_28227);

return statearr_28259;
})();
var statearr_28260_28280 = state_28247__$1;
(statearr_28260_28280[(2)] = inst_28228);

(statearr_28260_28280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (14))){
var inst_28241 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
var statearr_28261_28281 = state_28247__$1;
(statearr_28261_28281[(2)] = inst_28241);

(statearr_28261_28281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (10))){
var state_28247__$1 = state_28247;
var statearr_28262_28282 = state_28247__$1;
(statearr_28262_28282[(2)] = fc);

(statearr_28262_28282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28248 === (8))){
var inst_28236 = (state_28247[(2)]);
var state_28247__$1 = state_28247;
if(cljs.core.truth_(inst_28236)){
var statearr_28263_28283 = state_28247__$1;
(statearr_28263_28283[(1)] = (12));

} else {
var statearr_28264_28284 = state_28247__$1;
(statearr_28264_28284[(1)] = (13));

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
});})(c__23380__auto___28270,tc,fc))
;
return ((function (switch__23223__auto__,c__23380__auto___28270,tc,fc){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_28265 = [null,null,null,null,null,null,null,null,null];
(statearr_28265[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_28265[(1)] = (1));

return statearr_28265;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_28247){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_28247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e28266){if((e28266 instanceof Object)){
var ex__23227__auto__ = e28266;
var statearr_28267_28285 = state_28247;
(statearr_28267_28285[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28286 = state_28247;
state_28247 = G__28286;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_28247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_28247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___28270,tc,fc))
})();
var state__23382__auto__ = (function (){var statearr_28268 = f__23381__auto__.call(null);
(statearr_28268[(6)] = c__23380__auto___28270);

return statearr_28268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___28270,tc,fc))
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
var c__23380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto__){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto__){
return (function (state_28307){
var state_val_28308 = (state_28307[(1)]);
if((state_val_28308 === (7))){
var inst_28303 = (state_28307[(2)]);
var state_28307__$1 = state_28307;
var statearr_28309_28327 = state_28307__$1;
(statearr_28309_28327[(2)] = inst_28303);

(statearr_28309_28327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (1))){
var inst_28287 = init;
var state_28307__$1 = (function (){var statearr_28310 = state_28307;
(statearr_28310[(7)] = inst_28287);

return statearr_28310;
})();
var statearr_28311_28328 = state_28307__$1;
(statearr_28311_28328[(2)] = null);

(statearr_28311_28328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (4))){
var inst_28290 = (state_28307[(8)]);
var inst_28290__$1 = (state_28307[(2)]);
var inst_28291 = (inst_28290__$1 == null);
var state_28307__$1 = (function (){var statearr_28312 = state_28307;
(statearr_28312[(8)] = inst_28290__$1);

return statearr_28312;
})();
if(cljs.core.truth_(inst_28291)){
var statearr_28313_28329 = state_28307__$1;
(statearr_28313_28329[(1)] = (5));

} else {
var statearr_28314_28330 = state_28307__$1;
(statearr_28314_28330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (6))){
var inst_28294 = (state_28307[(9)]);
var inst_28287 = (state_28307[(7)]);
var inst_28290 = (state_28307[(8)]);
var inst_28294__$1 = f.call(null,inst_28287,inst_28290);
var inst_28295 = cljs.core.reduced_QMARK_.call(null,inst_28294__$1);
var state_28307__$1 = (function (){var statearr_28315 = state_28307;
(statearr_28315[(9)] = inst_28294__$1);

return statearr_28315;
})();
if(inst_28295){
var statearr_28316_28331 = state_28307__$1;
(statearr_28316_28331[(1)] = (8));

} else {
var statearr_28317_28332 = state_28307__$1;
(statearr_28317_28332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (3))){
var inst_28305 = (state_28307[(2)]);
var state_28307__$1 = state_28307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28307__$1,inst_28305);
} else {
if((state_val_28308 === (2))){
var state_28307__$1 = state_28307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28307__$1,(4),ch);
} else {
if((state_val_28308 === (9))){
var inst_28294 = (state_28307[(9)]);
var inst_28287 = inst_28294;
var state_28307__$1 = (function (){var statearr_28318 = state_28307;
(statearr_28318[(7)] = inst_28287);

return statearr_28318;
})();
var statearr_28319_28333 = state_28307__$1;
(statearr_28319_28333[(2)] = null);

(statearr_28319_28333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (5))){
var inst_28287 = (state_28307[(7)]);
var state_28307__$1 = state_28307;
var statearr_28320_28334 = state_28307__$1;
(statearr_28320_28334[(2)] = inst_28287);

(statearr_28320_28334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (10))){
var inst_28301 = (state_28307[(2)]);
var state_28307__$1 = state_28307;
var statearr_28321_28335 = state_28307__$1;
(statearr_28321_28335[(2)] = inst_28301);

(statearr_28321_28335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (8))){
var inst_28294 = (state_28307[(9)]);
var inst_28297 = cljs.core.deref.call(null,inst_28294);
var state_28307__$1 = state_28307;
var statearr_28322_28336 = state_28307__$1;
(statearr_28322_28336[(2)] = inst_28297);

(statearr_28322_28336[(1)] = (10));


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
});})(c__23380__auto__))
;
return ((function (switch__23223__auto__,c__23380__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23224__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23224__auto____0 = (function (){
var statearr_28323 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28323[(0)] = cljs$core$async$reduce_$_state_machine__23224__auto__);

(statearr_28323[(1)] = (1));

return statearr_28323;
});
var cljs$core$async$reduce_$_state_machine__23224__auto____1 = (function (state_28307){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_28307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e28324){if((e28324 instanceof Object)){
var ex__23227__auto__ = e28324;
var statearr_28325_28337 = state_28307;
(statearr_28325_28337[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28338 = state_28307;
state_28307 = G__28338;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23224__auto__ = function(state_28307){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23224__auto____1.call(this,state_28307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23224__auto____0;
cljs$core$async$reduce_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23224__auto____1;
return cljs$core$async$reduce_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto__))
})();
var state__23382__auto__ = (function (){var statearr_28326 = f__23381__auto__.call(null);
(statearr_28326[(6)] = c__23380__auto__);

return statearr_28326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto__))
);

return c__23380__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto__,f__$1){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto__,f__$1){
return (function (state_28344){
var state_val_28345 = (state_28344[(1)]);
if((state_val_28345 === (1))){
var inst_28339 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28344__$1 = state_28344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28344__$1,(2),inst_28339);
} else {
if((state_val_28345 === (2))){
var inst_28341 = (state_28344[(2)]);
var inst_28342 = f__$1.call(null,inst_28341);
var state_28344__$1 = state_28344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28344__$1,inst_28342);
} else {
return null;
}
}
});})(c__23380__auto__,f__$1))
;
return ((function (switch__23223__auto__,c__23380__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23224__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23224__auto____0 = (function (){
var statearr_28346 = [null,null,null,null,null,null,null];
(statearr_28346[(0)] = cljs$core$async$transduce_$_state_machine__23224__auto__);

(statearr_28346[(1)] = (1));

return statearr_28346;
});
var cljs$core$async$transduce_$_state_machine__23224__auto____1 = (function (state_28344){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_28344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e28347){if((e28347 instanceof Object)){
var ex__23227__auto__ = e28347;
var statearr_28348_28350 = state_28344;
(statearr_28348_28350[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28351 = state_28344;
state_28344 = G__28351;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23224__auto__ = function(state_28344){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23224__auto____1.call(this,state_28344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23224__auto____0;
cljs$core$async$transduce_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23224__auto____1;
return cljs$core$async$transduce_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto__,f__$1))
})();
var state__23382__auto__ = (function (){var statearr_28349 = f__23381__auto__.call(null);
(statearr_28349[(6)] = c__23380__auto__);

return statearr_28349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto__,f__$1))
);

return c__23380__auto__;
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
var G__28353 = arguments.length;
switch (G__28353) {
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
var c__23380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto__){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto__){
return (function (state_28378){
var state_val_28379 = (state_28378[(1)]);
if((state_val_28379 === (7))){
var inst_28360 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
var statearr_28380_28401 = state_28378__$1;
(statearr_28380_28401[(2)] = inst_28360);

(statearr_28380_28401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (1))){
var inst_28354 = cljs.core.seq.call(null,coll);
var inst_28355 = inst_28354;
var state_28378__$1 = (function (){var statearr_28381 = state_28378;
(statearr_28381[(7)] = inst_28355);

return statearr_28381;
})();
var statearr_28382_28402 = state_28378__$1;
(statearr_28382_28402[(2)] = null);

(statearr_28382_28402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (4))){
var inst_28355 = (state_28378[(7)]);
var inst_28358 = cljs.core.first.call(null,inst_28355);
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28378__$1,(7),ch,inst_28358);
} else {
if((state_val_28379 === (13))){
var inst_28372 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
var statearr_28383_28403 = state_28378__$1;
(statearr_28383_28403[(2)] = inst_28372);

(statearr_28383_28403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (6))){
var inst_28363 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
if(cljs.core.truth_(inst_28363)){
var statearr_28384_28404 = state_28378__$1;
(statearr_28384_28404[(1)] = (8));

} else {
var statearr_28385_28405 = state_28378__$1;
(statearr_28385_28405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (3))){
var inst_28376 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28378__$1,inst_28376);
} else {
if((state_val_28379 === (12))){
var state_28378__$1 = state_28378;
var statearr_28386_28406 = state_28378__$1;
(statearr_28386_28406[(2)] = null);

(statearr_28386_28406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (2))){
var inst_28355 = (state_28378[(7)]);
var state_28378__$1 = state_28378;
if(cljs.core.truth_(inst_28355)){
var statearr_28387_28407 = state_28378__$1;
(statearr_28387_28407[(1)] = (4));

} else {
var statearr_28388_28408 = state_28378__$1;
(statearr_28388_28408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (11))){
var inst_28369 = cljs.core.async.close_BANG_.call(null,ch);
var state_28378__$1 = state_28378;
var statearr_28389_28409 = state_28378__$1;
(statearr_28389_28409[(2)] = inst_28369);

(statearr_28389_28409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (9))){
var state_28378__$1 = state_28378;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28390_28410 = state_28378__$1;
(statearr_28390_28410[(1)] = (11));

} else {
var statearr_28391_28411 = state_28378__$1;
(statearr_28391_28411[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (5))){
var inst_28355 = (state_28378[(7)]);
var state_28378__$1 = state_28378;
var statearr_28392_28412 = state_28378__$1;
(statearr_28392_28412[(2)] = inst_28355);

(statearr_28392_28412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (10))){
var inst_28374 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
var statearr_28393_28413 = state_28378__$1;
(statearr_28393_28413[(2)] = inst_28374);

(statearr_28393_28413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (8))){
var inst_28355 = (state_28378[(7)]);
var inst_28365 = cljs.core.next.call(null,inst_28355);
var inst_28355__$1 = inst_28365;
var state_28378__$1 = (function (){var statearr_28394 = state_28378;
(statearr_28394[(7)] = inst_28355__$1);

return statearr_28394;
})();
var statearr_28395_28414 = state_28378__$1;
(statearr_28395_28414[(2)] = null);

(statearr_28395_28414[(1)] = (2));


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
});})(c__23380__auto__))
;
return ((function (switch__23223__auto__,c__23380__auto__){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_28396 = [null,null,null,null,null,null,null,null];
(statearr_28396[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_28396[(1)] = (1));

return statearr_28396;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_28378){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_28378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e28397){if((e28397 instanceof Object)){
var ex__23227__auto__ = e28397;
var statearr_28398_28415 = state_28378;
(statearr_28398_28415[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28416 = state_28378;
state_28378 = G__28416;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_28378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_28378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto__))
})();
var state__23382__auto__ = (function (){var statearr_28399 = f__23381__auto__.call(null);
(statearr_28399[(6)] = c__23380__auto__);

return statearr_28399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto__))
);

return c__23380__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28417 = (function (ch,cs,meta28418){
this.ch = ch;
this.cs = cs;
this.meta28418 = meta28418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28419,meta28418__$1){
var self__ = this;
var _28419__$1 = this;
return (new cljs.core.async.t_cljs$core$async28417(self__.ch,self__.cs,meta28418__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28419){
var self__ = this;
var _28419__$1 = this;
return self__.meta28418;
});})(cs))
;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28417.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28418","meta28418",2101960821,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28417";

cljs.core.async.t_cljs$core$async28417.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28417");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28417.
 */
cljs.core.async.__GT_t_cljs$core$async28417 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28417(ch__$1,cs__$1,meta28418){
return (new cljs.core.async.t_cljs$core$async28417(ch__$1,cs__$1,meta28418));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28417(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23380__auto___28639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___28639,cs,m,dchan,dctr,done){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___28639,cs,m,dchan,dctr,done){
return (function (state_28554){
var state_val_28555 = (state_28554[(1)]);
if((state_val_28555 === (7))){
var inst_28550 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28556_28640 = state_28554__$1;
(statearr_28556_28640[(2)] = inst_28550);

(statearr_28556_28640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (20))){
var inst_28453 = (state_28554[(7)]);
var inst_28465 = cljs.core.first.call(null,inst_28453);
var inst_28466 = cljs.core.nth.call(null,inst_28465,(0),null);
var inst_28467 = cljs.core.nth.call(null,inst_28465,(1),null);
var state_28554__$1 = (function (){var statearr_28557 = state_28554;
(statearr_28557[(8)] = inst_28466);

return statearr_28557;
})();
if(cljs.core.truth_(inst_28467)){
var statearr_28558_28641 = state_28554__$1;
(statearr_28558_28641[(1)] = (22));

} else {
var statearr_28559_28642 = state_28554__$1;
(statearr_28559_28642[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (27))){
var inst_28422 = (state_28554[(9)]);
var inst_28502 = (state_28554[(10)]);
var inst_28495 = (state_28554[(11)]);
var inst_28497 = (state_28554[(12)]);
var inst_28502__$1 = cljs.core._nth.call(null,inst_28495,inst_28497);
var inst_28503 = cljs.core.async.put_BANG_.call(null,inst_28502__$1,inst_28422,done);
var state_28554__$1 = (function (){var statearr_28560 = state_28554;
(statearr_28560[(10)] = inst_28502__$1);

return statearr_28560;
})();
if(cljs.core.truth_(inst_28503)){
var statearr_28561_28643 = state_28554__$1;
(statearr_28561_28643[(1)] = (30));

} else {
var statearr_28562_28644 = state_28554__$1;
(statearr_28562_28644[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (1))){
var state_28554__$1 = state_28554;
var statearr_28563_28645 = state_28554__$1;
(statearr_28563_28645[(2)] = null);

(statearr_28563_28645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (24))){
var inst_28453 = (state_28554[(7)]);
var inst_28472 = (state_28554[(2)]);
var inst_28473 = cljs.core.next.call(null,inst_28453);
var inst_28431 = inst_28473;
var inst_28432 = null;
var inst_28433 = (0);
var inst_28434 = (0);
var state_28554__$1 = (function (){var statearr_28564 = state_28554;
(statearr_28564[(13)] = inst_28433);

(statearr_28564[(14)] = inst_28434);

(statearr_28564[(15)] = inst_28472);

(statearr_28564[(16)] = inst_28432);

(statearr_28564[(17)] = inst_28431);

return statearr_28564;
})();
var statearr_28565_28646 = state_28554__$1;
(statearr_28565_28646[(2)] = null);

(statearr_28565_28646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (39))){
var state_28554__$1 = state_28554;
var statearr_28569_28647 = state_28554__$1;
(statearr_28569_28647[(2)] = null);

(statearr_28569_28647[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (4))){
var inst_28422 = (state_28554[(9)]);
var inst_28422__$1 = (state_28554[(2)]);
var inst_28423 = (inst_28422__$1 == null);
var state_28554__$1 = (function (){var statearr_28570 = state_28554;
(statearr_28570[(9)] = inst_28422__$1);

return statearr_28570;
})();
if(cljs.core.truth_(inst_28423)){
var statearr_28571_28648 = state_28554__$1;
(statearr_28571_28648[(1)] = (5));

} else {
var statearr_28572_28649 = state_28554__$1;
(statearr_28572_28649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (15))){
var inst_28433 = (state_28554[(13)]);
var inst_28434 = (state_28554[(14)]);
var inst_28432 = (state_28554[(16)]);
var inst_28431 = (state_28554[(17)]);
var inst_28449 = (state_28554[(2)]);
var inst_28450 = (inst_28434 + (1));
var tmp28566 = inst_28433;
var tmp28567 = inst_28432;
var tmp28568 = inst_28431;
var inst_28431__$1 = tmp28568;
var inst_28432__$1 = tmp28567;
var inst_28433__$1 = tmp28566;
var inst_28434__$1 = inst_28450;
var state_28554__$1 = (function (){var statearr_28573 = state_28554;
(statearr_28573[(13)] = inst_28433__$1);

(statearr_28573[(14)] = inst_28434__$1);

(statearr_28573[(16)] = inst_28432__$1);

(statearr_28573[(17)] = inst_28431__$1);

(statearr_28573[(18)] = inst_28449);

return statearr_28573;
})();
var statearr_28574_28650 = state_28554__$1;
(statearr_28574_28650[(2)] = null);

(statearr_28574_28650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (21))){
var inst_28476 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28578_28651 = state_28554__$1;
(statearr_28578_28651[(2)] = inst_28476);

(statearr_28578_28651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (31))){
var inst_28502 = (state_28554[(10)]);
var inst_28506 = done.call(null,null);
var inst_28507 = cljs.core.async.untap_STAR_.call(null,m,inst_28502);
var state_28554__$1 = (function (){var statearr_28579 = state_28554;
(statearr_28579[(19)] = inst_28506);

return statearr_28579;
})();
var statearr_28580_28652 = state_28554__$1;
(statearr_28580_28652[(2)] = inst_28507);

(statearr_28580_28652[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (32))){
var inst_28494 = (state_28554[(20)]);
var inst_28495 = (state_28554[(11)]);
var inst_28496 = (state_28554[(21)]);
var inst_28497 = (state_28554[(12)]);
var inst_28509 = (state_28554[(2)]);
var inst_28510 = (inst_28497 + (1));
var tmp28575 = inst_28494;
var tmp28576 = inst_28495;
var tmp28577 = inst_28496;
var inst_28494__$1 = tmp28575;
var inst_28495__$1 = tmp28576;
var inst_28496__$1 = tmp28577;
var inst_28497__$1 = inst_28510;
var state_28554__$1 = (function (){var statearr_28581 = state_28554;
(statearr_28581[(20)] = inst_28494__$1);

(statearr_28581[(22)] = inst_28509);

(statearr_28581[(11)] = inst_28495__$1);

(statearr_28581[(21)] = inst_28496__$1);

(statearr_28581[(12)] = inst_28497__$1);

return statearr_28581;
})();
var statearr_28582_28653 = state_28554__$1;
(statearr_28582_28653[(2)] = null);

(statearr_28582_28653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (40))){
var inst_28522 = (state_28554[(23)]);
var inst_28526 = done.call(null,null);
var inst_28527 = cljs.core.async.untap_STAR_.call(null,m,inst_28522);
var state_28554__$1 = (function (){var statearr_28583 = state_28554;
(statearr_28583[(24)] = inst_28526);

return statearr_28583;
})();
var statearr_28584_28654 = state_28554__$1;
(statearr_28584_28654[(2)] = inst_28527);

(statearr_28584_28654[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (33))){
var inst_28513 = (state_28554[(25)]);
var inst_28515 = cljs.core.chunked_seq_QMARK_.call(null,inst_28513);
var state_28554__$1 = state_28554;
if(inst_28515){
var statearr_28585_28655 = state_28554__$1;
(statearr_28585_28655[(1)] = (36));

} else {
var statearr_28586_28656 = state_28554__$1;
(statearr_28586_28656[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (13))){
var inst_28443 = (state_28554[(26)]);
var inst_28446 = cljs.core.async.close_BANG_.call(null,inst_28443);
var state_28554__$1 = state_28554;
var statearr_28587_28657 = state_28554__$1;
(statearr_28587_28657[(2)] = inst_28446);

(statearr_28587_28657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (22))){
var inst_28466 = (state_28554[(8)]);
var inst_28469 = cljs.core.async.close_BANG_.call(null,inst_28466);
var state_28554__$1 = state_28554;
var statearr_28588_28658 = state_28554__$1;
(statearr_28588_28658[(2)] = inst_28469);

(statearr_28588_28658[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (36))){
var inst_28513 = (state_28554[(25)]);
var inst_28517 = cljs.core.chunk_first.call(null,inst_28513);
var inst_28518 = cljs.core.chunk_rest.call(null,inst_28513);
var inst_28519 = cljs.core.count.call(null,inst_28517);
var inst_28494 = inst_28518;
var inst_28495 = inst_28517;
var inst_28496 = inst_28519;
var inst_28497 = (0);
var state_28554__$1 = (function (){var statearr_28589 = state_28554;
(statearr_28589[(20)] = inst_28494);

(statearr_28589[(11)] = inst_28495);

(statearr_28589[(21)] = inst_28496);

(statearr_28589[(12)] = inst_28497);

return statearr_28589;
})();
var statearr_28590_28659 = state_28554__$1;
(statearr_28590_28659[(2)] = null);

(statearr_28590_28659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (41))){
var inst_28513 = (state_28554[(25)]);
var inst_28529 = (state_28554[(2)]);
var inst_28530 = cljs.core.next.call(null,inst_28513);
var inst_28494 = inst_28530;
var inst_28495 = null;
var inst_28496 = (0);
var inst_28497 = (0);
var state_28554__$1 = (function (){var statearr_28591 = state_28554;
(statearr_28591[(20)] = inst_28494);

(statearr_28591[(27)] = inst_28529);

(statearr_28591[(11)] = inst_28495);

(statearr_28591[(21)] = inst_28496);

(statearr_28591[(12)] = inst_28497);

return statearr_28591;
})();
var statearr_28592_28660 = state_28554__$1;
(statearr_28592_28660[(2)] = null);

(statearr_28592_28660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (43))){
var state_28554__$1 = state_28554;
var statearr_28593_28661 = state_28554__$1;
(statearr_28593_28661[(2)] = null);

(statearr_28593_28661[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (29))){
var inst_28538 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28594_28662 = state_28554__$1;
(statearr_28594_28662[(2)] = inst_28538);

(statearr_28594_28662[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (44))){
var inst_28547 = (state_28554[(2)]);
var state_28554__$1 = (function (){var statearr_28595 = state_28554;
(statearr_28595[(28)] = inst_28547);

return statearr_28595;
})();
var statearr_28596_28663 = state_28554__$1;
(statearr_28596_28663[(2)] = null);

(statearr_28596_28663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (6))){
var inst_28486 = (state_28554[(29)]);
var inst_28485 = cljs.core.deref.call(null,cs);
var inst_28486__$1 = cljs.core.keys.call(null,inst_28485);
var inst_28487 = cljs.core.count.call(null,inst_28486__$1);
var inst_28488 = cljs.core.reset_BANG_.call(null,dctr,inst_28487);
var inst_28493 = cljs.core.seq.call(null,inst_28486__$1);
var inst_28494 = inst_28493;
var inst_28495 = null;
var inst_28496 = (0);
var inst_28497 = (0);
var state_28554__$1 = (function (){var statearr_28597 = state_28554;
(statearr_28597[(30)] = inst_28488);

(statearr_28597[(20)] = inst_28494);

(statearr_28597[(11)] = inst_28495);

(statearr_28597[(21)] = inst_28496);

(statearr_28597[(12)] = inst_28497);

(statearr_28597[(29)] = inst_28486__$1);

return statearr_28597;
})();
var statearr_28598_28664 = state_28554__$1;
(statearr_28598_28664[(2)] = null);

(statearr_28598_28664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (28))){
var inst_28494 = (state_28554[(20)]);
var inst_28513 = (state_28554[(25)]);
var inst_28513__$1 = cljs.core.seq.call(null,inst_28494);
var state_28554__$1 = (function (){var statearr_28599 = state_28554;
(statearr_28599[(25)] = inst_28513__$1);

return statearr_28599;
})();
if(inst_28513__$1){
var statearr_28600_28665 = state_28554__$1;
(statearr_28600_28665[(1)] = (33));

} else {
var statearr_28601_28666 = state_28554__$1;
(statearr_28601_28666[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (25))){
var inst_28496 = (state_28554[(21)]);
var inst_28497 = (state_28554[(12)]);
var inst_28499 = (inst_28497 < inst_28496);
var inst_28500 = inst_28499;
var state_28554__$1 = state_28554;
if(cljs.core.truth_(inst_28500)){
var statearr_28602_28667 = state_28554__$1;
(statearr_28602_28667[(1)] = (27));

} else {
var statearr_28603_28668 = state_28554__$1;
(statearr_28603_28668[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (34))){
var state_28554__$1 = state_28554;
var statearr_28604_28669 = state_28554__$1;
(statearr_28604_28669[(2)] = null);

(statearr_28604_28669[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (17))){
var state_28554__$1 = state_28554;
var statearr_28605_28670 = state_28554__$1;
(statearr_28605_28670[(2)] = null);

(statearr_28605_28670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (3))){
var inst_28552 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28554__$1,inst_28552);
} else {
if((state_val_28555 === (12))){
var inst_28481 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28606_28671 = state_28554__$1;
(statearr_28606_28671[(2)] = inst_28481);

(statearr_28606_28671[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (2))){
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28554__$1,(4),ch);
} else {
if((state_val_28555 === (23))){
var state_28554__$1 = state_28554;
var statearr_28607_28672 = state_28554__$1;
(statearr_28607_28672[(2)] = null);

(statearr_28607_28672[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (35))){
var inst_28536 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28608_28673 = state_28554__$1;
(statearr_28608_28673[(2)] = inst_28536);

(statearr_28608_28673[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (19))){
var inst_28453 = (state_28554[(7)]);
var inst_28457 = cljs.core.chunk_first.call(null,inst_28453);
var inst_28458 = cljs.core.chunk_rest.call(null,inst_28453);
var inst_28459 = cljs.core.count.call(null,inst_28457);
var inst_28431 = inst_28458;
var inst_28432 = inst_28457;
var inst_28433 = inst_28459;
var inst_28434 = (0);
var state_28554__$1 = (function (){var statearr_28609 = state_28554;
(statearr_28609[(13)] = inst_28433);

(statearr_28609[(14)] = inst_28434);

(statearr_28609[(16)] = inst_28432);

(statearr_28609[(17)] = inst_28431);

return statearr_28609;
})();
var statearr_28610_28674 = state_28554__$1;
(statearr_28610_28674[(2)] = null);

(statearr_28610_28674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (11))){
var inst_28453 = (state_28554[(7)]);
var inst_28431 = (state_28554[(17)]);
var inst_28453__$1 = cljs.core.seq.call(null,inst_28431);
var state_28554__$1 = (function (){var statearr_28611 = state_28554;
(statearr_28611[(7)] = inst_28453__$1);

return statearr_28611;
})();
if(inst_28453__$1){
var statearr_28612_28675 = state_28554__$1;
(statearr_28612_28675[(1)] = (16));

} else {
var statearr_28613_28676 = state_28554__$1;
(statearr_28613_28676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (9))){
var inst_28483 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28614_28677 = state_28554__$1;
(statearr_28614_28677[(2)] = inst_28483);

(statearr_28614_28677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (5))){
var inst_28429 = cljs.core.deref.call(null,cs);
var inst_28430 = cljs.core.seq.call(null,inst_28429);
var inst_28431 = inst_28430;
var inst_28432 = null;
var inst_28433 = (0);
var inst_28434 = (0);
var state_28554__$1 = (function (){var statearr_28615 = state_28554;
(statearr_28615[(13)] = inst_28433);

(statearr_28615[(14)] = inst_28434);

(statearr_28615[(16)] = inst_28432);

(statearr_28615[(17)] = inst_28431);

return statearr_28615;
})();
var statearr_28616_28678 = state_28554__$1;
(statearr_28616_28678[(2)] = null);

(statearr_28616_28678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (14))){
var state_28554__$1 = state_28554;
var statearr_28617_28679 = state_28554__$1;
(statearr_28617_28679[(2)] = null);

(statearr_28617_28679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (45))){
var inst_28544 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28618_28680 = state_28554__$1;
(statearr_28618_28680[(2)] = inst_28544);

(statearr_28618_28680[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (26))){
var inst_28486 = (state_28554[(29)]);
var inst_28540 = (state_28554[(2)]);
var inst_28541 = cljs.core.seq.call(null,inst_28486);
var state_28554__$1 = (function (){var statearr_28619 = state_28554;
(statearr_28619[(31)] = inst_28540);

return statearr_28619;
})();
if(inst_28541){
var statearr_28620_28681 = state_28554__$1;
(statearr_28620_28681[(1)] = (42));

} else {
var statearr_28621_28682 = state_28554__$1;
(statearr_28621_28682[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (16))){
var inst_28453 = (state_28554[(7)]);
var inst_28455 = cljs.core.chunked_seq_QMARK_.call(null,inst_28453);
var state_28554__$1 = state_28554;
if(inst_28455){
var statearr_28622_28683 = state_28554__$1;
(statearr_28622_28683[(1)] = (19));

} else {
var statearr_28623_28684 = state_28554__$1;
(statearr_28623_28684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (38))){
var inst_28533 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28624_28685 = state_28554__$1;
(statearr_28624_28685[(2)] = inst_28533);

(statearr_28624_28685[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (30))){
var state_28554__$1 = state_28554;
var statearr_28625_28686 = state_28554__$1;
(statearr_28625_28686[(2)] = null);

(statearr_28625_28686[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (10))){
var inst_28434 = (state_28554[(14)]);
var inst_28432 = (state_28554[(16)]);
var inst_28442 = cljs.core._nth.call(null,inst_28432,inst_28434);
var inst_28443 = cljs.core.nth.call(null,inst_28442,(0),null);
var inst_28444 = cljs.core.nth.call(null,inst_28442,(1),null);
var state_28554__$1 = (function (){var statearr_28626 = state_28554;
(statearr_28626[(26)] = inst_28443);

return statearr_28626;
})();
if(cljs.core.truth_(inst_28444)){
var statearr_28627_28687 = state_28554__$1;
(statearr_28627_28687[(1)] = (13));

} else {
var statearr_28628_28688 = state_28554__$1;
(statearr_28628_28688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (18))){
var inst_28479 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28629_28689 = state_28554__$1;
(statearr_28629_28689[(2)] = inst_28479);

(statearr_28629_28689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (42))){
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28554__$1,(45),dchan);
} else {
if((state_val_28555 === (37))){
var inst_28522 = (state_28554[(23)]);
var inst_28422 = (state_28554[(9)]);
var inst_28513 = (state_28554[(25)]);
var inst_28522__$1 = cljs.core.first.call(null,inst_28513);
var inst_28523 = cljs.core.async.put_BANG_.call(null,inst_28522__$1,inst_28422,done);
var state_28554__$1 = (function (){var statearr_28630 = state_28554;
(statearr_28630[(23)] = inst_28522__$1);

return statearr_28630;
})();
if(cljs.core.truth_(inst_28523)){
var statearr_28631_28690 = state_28554__$1;
(statearr_28631_28690[(1)] = (39));

} else {
var statearr_28632_28691 = state_28554__$1;
(statearr_28632_28691[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (8))){
var inst_28433 = (state_28554[(13)]);
var inst_28434 = (state_28554[(14)]);
var inst_28436 = (inst_28434 < inst_28433);
var inst_28437 = inst_28436;
var state_28554__$1 = state_28554;
if(cljs.core.truth_(inst_28437)){
var statearr_28633_28692 = state_28554__$1;
(statearr_28633_28692[(1)] = (10));

} else {
var statearr_28634_28693 = state_28554__$1;
(statearr_28634_28693[(1)] = (11));

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
});})(c__23380__auto___28639,cs,m,dchan,dctr,done))
;
return ((function (switch__23223__auto__,c__23380__auto___28639,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23224__auto__ = null;
var cljs$core$async$mult_$_state_machine__23224__auto____0 = (function (){
var statearr_28635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28635[(0)] = cljs$core$async$mult_$_state_machine__23224__auto__);

(statearr_28635[(1)] = (1));

return statearr_28635;
});
var cljs$core$async$mult_$_state_machine__23224__auto____1 = (function (state_28554){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_28554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e28636){if((e28636 instanceof Object)){
var ex__23227__auto__ = e28636;
var statearr_28637_28694 = state_28554;
(statearr_28637_28694[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28695 = state_28554;
state_28554 = G__28695;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23224__auto__ = function(state_28554){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23224__auto____1.call(this,state_28554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23224__auto____0;
cljs$core$async$mult_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23224__auto____1;
return cljs$core$async$mult_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___28639,cs,m,dchan,dctr,done))
})();
var state__23382__auto__ = (function (){var statearr_28638 = f__23381__auto__.call(null);
(statearr_28638[(6)] = c__23380__auto___28639);

return statearr_28638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___28639,cs,m,dchan,dctr,done))
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
var G__28697 = arguments.length;
switch (G__28697) {
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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___28709 = arguments.length;
var i__4498__auto___28710 = (0);
while(true){
if((i__4498__auto___28710 < len__4497__auto___28709)){
args__4500__auto__.push((arguments[i__4498__auto___28710]));

var G__28711 = (i__4498__auto___28710 + (1));
i__4498__auto___28710 = G__28711;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28703){
var map__28704 = p__28703;
var map__28704__$1 = ((((!((map__28704 == null)))?(((((map__28704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28704):map__28704);
var opts = map__28704__$1;
var statearr_28706_28712 = state;
(statearr_28706_28712[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28704,map__28704__$1,opts){
return (function (val){
var statearr_28707_28713 = state;
(statearr_28707_28713[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28704,map__28704__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28708_28714 = state;
(statearr_28708_28714[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28699){
var G__28700 = cljs.core.first.call(null,seq28699);
var seq28699__$1 = cljs.core.next.call(null,seq28699);
var G__28701 = cljs.core.first.call(null,seq28699__$1);
var seq28699__$2 = cljs.core.next.call(null,seq28699__$1);
var G__28702 = cljs.core.first.call(null,seq28699__$2);
var seq28699__$3 = cljs.core.next.call(null,seq28699__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28700,G__28701,G__28702,seq28699__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28715 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28715 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28716){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28716 = meta28716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28717,meta28716__$1){
var self__ = this;
var _28717__$1 = this;
return (new cljs.core.async.t_cljs$core$async28715(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28716__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28717){
var self__ = this;
var _28717__$1 = this;
return self__.meta28716;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28715.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28715.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28715.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28715.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28715.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28715.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28715.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28715.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28716","meta28716",1501499563,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28715.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28715";

cljs.core.async.t_cljs$core$async28715.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28715");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28715.
 */
cljs.core.async.__GT_t_cljs$core$async28715 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28715(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28716){
return (new cljs.core.async.t_cljs$core$async28715(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28716));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28715(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23380__auto___28879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___28879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___28879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28819){
var state_val_28820 = (state_28819[(1)]);
if((state_val_28820 === (7))){
var inst_28734 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28821_28880 = state_28819__$1;
(statearr_28821_28880[(2)] = inst_28734);

(statearr_28821_28880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (20))){
var inst_28746 = (state_28819[(7)]);
var state_28819__$1 = state_28819;
var statearr_28822_28881 = state_28819__$1;
(statearr_28822_28881[(2)] = inst_28746);

(statearr_28822_28881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (27))){
var state_28819__$1 = state_28819;
var statearr_28823_28882 = state_28819__$1;
(statearr_28823_28882[(2)] = null);

(statearr_28823_28882[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (1))){
var inst_28721 = (state_28819[(8)]);
var inst_28721__$1 = calc_state.call(null);
var inst_28723 = (inst_28721__$1 == null);
var inst_28724 = cljs.core.not.call(null,inst_28723);
var state_28819__$1 = (function (){var statearr_28824 = state_28819;
(statearr_28824[(8)] = inst_28721__$1);

return statearr_28824;
})();
if(inst_28724){
var statearr_28825_28883 = state_28819__$1;
(statearr_28825_28883[(1)] = (2));

} else {
var statearr_28826_28884 = state_28819__$1;
(statearr_28826_28884[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (24))){
var inst_28793 = (state_28819[(9)]);
var inst_28770 = (state_28819[(10)]);
var inst_28779 = (state_28819[(11)]);
var inst_28793__$1 = inst_28770.call(null,inst_28779);
var state_28819__$1 = (function (){var statearr_28827 = state_28819;
(statearr_28827[(9)] = inst_28793__$1);

return statearr_28827;
})();
if(cljs.core.truth_(inst_28793__$1)){
var statearr_28828_28885 = state_28819__$1;
(statearr_28828_28885[(1)] = (29));

} else {
var statearr_28829_28886 = state_28819__$1;
(statearr_28829_28886[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (4))){
var inst_28737 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28737)){
var statearr_28830_28887 = state_28819__$1;
(statearr_28830_28887[(1)] = (8));

} else {
var statearr_28831_28888 = state_28819__$1;
(statearr_28831_28888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (15))){
var inst_28764 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28764)){
var statearr_28832_28889 = state_28819__$1;
(statearr_28832_28889[(1)] = (19));

} else {
var statearr_28833_28890 = state_28819__$1;
(statearr_28833_28890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (21))){
var inst_28769 = (state_28819[(12)]);
var inst_28769__$1 = (state_28819[(2)]);
var inst_28770 = cljs.core.get.call(null,inst_28769__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28771 = cljs.core.get.call(null,inst_28769__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28772 = cljs.core.get.call(null,inst_28769__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28819__$1 = (function (){var statearr_28834 = state_28819;
(statearr_28834[(10)] = inst_28770);

(statearr_28834[(12)] = inst_28769__$1);

(statearr_28834[(13)] = inst_28771);

return statearr_28834;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28819__$1,(22),inst_28772);
} else {
if((state_val_28820 === (31))){
var inst_28801 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28801)){
var statearr_28835_28891 = state_28819__$1;
(statearr_28835_28891[(1)] = (32));

} else {
var statearr_28836_28892 = state_28819__$1;
(statearr_28836_28892[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (32))){
var inst_28778 = (state_28819[(14)]);
var state_28819__$1 = state_28819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28819__$1,(35),out,inst_28778);
} else {
if((state_val_28820 === (33))){
var inst_28769 = (state_28819[(12)]);
var inst_28746 = inst_28769;
var state_28819__$1 = (function (){var statearr_28837 = state_28819;
(statearr_28837[(7)] = inst_28746);

return statearr_28837;
})();
var statearr_28838_28893 = state_28819__$1;
(statearr_28838_28893[(2)] = null);

(statearr_28838_28893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (13))){
var inst_28746 = (state_28819[(7)]);
var inst_28753 = inst_28746.cljs$lang$protocol_mask$partition0$;
var inst_28754 = (inst_28753 & (64));
var inst_28755 = inst_28746.cljs$core$ISeq$;
var inst_28756 = (cljs.core.PROTOCOL_SENTINEL === inst_28755);
var inst_28757 = ((inst_28754) || (inst_28756));
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28757)){
var statearr_28839_28894 = state_28819__$1;
(statearr_28839_28894[(1)] = (16));

} else {
var statearr_28840_28895 = state_28819__$1;
(statearr_28840_28895[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (22))){
var inst_28779 = (state_28819[(11)]);
var inst_28778 = (state_28819[(14)]);
var inst_28777 = (state_28819[(2)]);
var inst_28778__$1 = cljs.core.nth.call(null,inst_28777,(0),null);
var inst_28779__$1 = cljs.core.nth.call(null,inst_28777,(1),null);
var inst_28780 = (inst_28778__$1 == null);
var inst_28781 = cljs.core._EQ_.call(null,inst_28779__$1,change);
var inst_28782 = ((inst_28780) || (inst_28781));
var state_28819__$1 = (function (){var statearr_28841 = state_28819;
(statearr_28841[(11)] = inst_28779__$1);

(statearr_28841[(14)] = inst_28778__$1);

return statearr_28841;
})();
if(cljs.core.truth_(inst_28782)){
var statearr_28842_28896 = state_28819__$1;
(statearr_28842_28896[(1)] = (23));

} else {
var statearr_28843_28897 = state_28819__$1;
(statearr_28843_28897[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (36))){
var inst_28769 = (state_28819[(12)]);
var inst_28746 = inst_28769;
var state_28819__$1 = (function (){var statearr_28844 = state_28819;
(statearr_28844[(7)] = inst_28746);

return statearr_28844;
})();
var statearr_28845_28898 = state_28819__$1;
(statearr_28845_28898[(2)] = null);

(statearr_28845_28898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (29))){
var inst_28793 = (state_28819[(9)]);
var state_28819__$1 = state_28819;
var statearr_28846_28899 = state_28819__$1;
(statearr_28846_28899[(2)] = inst_28793);

(statearr_28846_28899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (6))){
var state_28819__$1 = state_28819;
var statearr_28847_28900 = state_28819__$1;
(statearr_28847_28900[(2)] = false);

(statearr_28847_28900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (28))){
var inst_28789 = (state_28819[(2)]);
var inst_28790 = calc_state.call(null);
var inst_28746 = inst_28790;
var state_28819__$1 = (function (){var statearr_28848 = state_28819;
(statearr_28848[(7)] = inst_28746);

(statearr_28848[(15)] = inst_28789);

return statearr_28848;
})();
var statearr_28849_28901 = state_28819__$1;
(statearr_28849_28901[(2)] = null);

(statearr_28849_28901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (25))){
var inst_28815 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28850_28902 = state_28819__$1;
(statearr_28850_28902[(2)] = inst_28815);

(statearr_28850_28902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (34))){
var inst_28813 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28851_28903 = state_28819__$1;
(statearr_28851_28903[(2)] = inst_28813);

(statearr_28851_28903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (17))){
var state_28819__$1 = state_28819;
var statearr_28852_28904 = state_28819__$1;
(statearr_28852_28904[(2)] = false);

(statearr_28852_28904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (3))){
var state_28819__$1 = state_28819;
var statearr_28853_28905 = state_28819__$1;
(statearr_28853_28905[(2)] = false);

(statearr_28853_28905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (12))){
var inst_28817 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28819__$1,inst_28817);
} else {
if((state_val_28820 === (2))){
var inst_28721 = (state_28819[(8)]);
var inst_28726 = inst_28721.cljs$lang$protocol_mask$partition0$;
var inst_28727 = (inst_28726 & (64));
var inst_28728 = inst_28721.cljs$core$ISeq$;
var inst_28729 = (cljs.core.PROTOCOL_SENTINEL === inst_28728);
var inst_28730 = ((inst_28727) || (inst_28729));
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28730)){
var statearr_28854_28906 = state_28819__$1;
(statearr_28854_28906[(1)] = (5));

} else {
var statearr_28855_28907 = state_28819__$1;
(statearr_28855_28907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (23))){
var inst_28778 = (state_28819[(14)]);
var inst_28784 = (inst_28778 == null);
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28784)){
var statearr_28856_28908 = state_28819__$1;
(statearr_28856_28908[(1)] = (26));

} else {
var statearr_28857_28909 = state_28819__$1;
(statearr_28857_28909[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (35))){
var inst_28804 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
if(cljs.core.truth_(inst_28804)){
var statearr_28858_28910 = state_28819__$1;
(statearr_28858_28910[(1)] = (36));

} else {
var statearr_28859_28911 = state_28819__$1;
(statearr_28859_28911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (19))){
var inst_28746 = (state_28819[(7)]);
var inst_28766 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28746);
var state_28819__$1 = state_28819;
var statearr_28860_28912 = state_28819__$1;
(statearr_28860_28912[(2)] = inst_28766);

(statearr_28860_28912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (11))){
var inst_28746 = (state_28819[(7)]);
var inst_28750 = (inst_28746 == null);
var inst_28751 = cljs.core.not.call(null,inst_28750);
var state_28819__$1 = state_28819;
if(inst_28751){
var statearr_28861_28913 = state_28819__$1;
(statearr_28861_28913[(1)] = (13));

} else {
var statearr_28862_28914 = state_28819__$1;
(statearr_28862_28914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (9))){
var inst_28721 = (state_28819[(8)]);
var state_28819__$1 = state_28819;
var statearr_28863_28915 = state_28819__$1;
(statearr_28863_28915[(2)] = inst_28721);

(statearr_28863_28915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (5))){
var state_28819__$1 = state_28819;
var statearr_28864_28916 = state_28819__$1;
(statearr_28864_28916[(2)] = true);

(statearr_28864_28916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (14))){
var state_28819__$1 = state_28819;
var statearr_28865_28917 = state_28819__$1;
(statearr_28865_28917[(2)] = false);

(statearr_28865_28917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (26))){
var inst_28779 = (state_28819[(11)]);
var inst_28786 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28779);
var state_28819__$1 = state_28819;
var statearr_28866_28918 = state_28819__$1;
(statearr_28866_28918[(2)] = inst_28786);

(statearr_28866_28918[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (16))){
var state_28819__$1 = state_28819;
var statearr_28867_28919 = state_28819__$1;
(statearr_28867_28919[(2)] = true);

(statearr_28867_28919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (38))){
var inst_28809 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28868_28920 = state_28819__$1;
(statearr_28868_28920[(2)] = inst_28809);

(statearr_28868_28920[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (30))){
var inst_28770 = (state_28819[(10)]);
var inst_28771 = (state_28819[(13)]);
var inst_28779 = (state_28819[(11)]);
var inst_28796 = cljs.core.empty_QMARK_.call(null,inst_28770);
var inst_28797 = inst_28771.call(null,inst_28779);
var inst_28798 = cljs.core.not.call(null,inst_28797);
var inst_28799 = ((inst_28796) && (inst_28798));
var state_28819__$1 = state_28819;
var statearr_28869_28921 = state_28819__$1;
(statearr_28869_28921[(2)] = inst_28799);

(statearr_28869_28921[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (10))){
var inst_28721 = (state_28819[(8)]);
var inst_28742 = (state_28819[(2)]);
var inst_28743 = cljs.core.get.call(null,inst_28742,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28744 = cljs.core.get.call(null,inst_28742,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28745 = cljs.core.get.call(null,inst_28742,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28746 = inst_28721;
var state_28819__$1 = (function (){var statearr_28870 = state_28819;
(statearr_28870[(7)] = inst_28746);

(statearr_28870[(16)] = inst_28743);

(statearr_28870[(17)] = inst_28744);

(statearr_28870[(18)] = inst_28745);

return statearr_28870;
})();
var statearr_28871_28922 = state_28819__$1;
(statearr_28871_28922[(2)] = null);

(statearr_28871_28922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (18))){
var inst_28761 = (state_28819[(2)]);
var state_28819__$1 = state_28819;
var statearr_28872_28923 = state_28819__$1;
(statearr_28872_28923[(2)] = inst_28761);

(statearr_28872_28923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (37))){
var state_28819__$1 = state_28819;
var statearr_28873_28924 = state_28819__$1;
(statearr_28873_28924[(2)] = null);

(statearr_28873_28924[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (8))){
var inst_28721 = (state_28819[(8)]);
var inst_28739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28721);
var state_28819__$1 = state_28819;
var statearr_28874_28925 = state_28819__$1;
(statearr_28874_28925[(2)] = inst_28739);

(statearr_28874_28925[(1)] = (10));


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
});})(c__23380__auto___28879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23223__auto__,c__23380__auto___28879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23224__auto__ = null;
var cljs$core$async$mix_$_state_machine__23224__auto____0 = (function (){
var statearr_28875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28875[(0)] = cljs$core$async$mix_$_state_machine__23224__auto__);

(statearr_28875[(1)] = (1));

return statearr_28875;
});
var cljs$core$async$mix_$_state_machine__23224__auto____1 = (function (state_28819){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_28819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e28876){if((e28876 instanceof Object)){
var ex__23227__auto__ = e28876;
var statearr_28877_28926 = state_28819;
(statearr_28877_28926[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28927 = state_28819;
state_28819 = G__28927;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23224__auto__ = function(state_28819){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23224__auto____1.call(this,state_28819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23224__auto____0;
cljs$core$async$mix_$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23224__auto____1;
return cljs$core$async$mix_$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___28879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23382__auto__ = (function (){var statearr_28878 = f__23381__auto__.call(null);
(statearr_28878[(6)] = c__23380__auto___28879);

return statearr_28878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___28879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28929 = arguments.length;
switch (G__28929) {
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
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
var G__28933 = arguments.length;
switch (G__28933) {
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
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__28931_SHARP_){
if(cljs.core.truth_(p1__28931_SHARP_.call(null,topic))){
return p1__28931_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28931_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28934 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28935){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28935 = meta28935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28936,meta28935__$1){
var self__ = this;
var _28936__$1 = this;
return (new cljs.core.async.t_cljs$core$async28934(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28935__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28936){
var self__ = this;
var _28936__$1 = this;
return self__.meta28935;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28934.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28935","meta28935",-1461280668,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28934";

cljs.core.async.t_cljs$core$async28934.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28934");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28934.
 */
cljs.core.async.__GT_t_cljs$core$async28934 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28934(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28935){
return (new cljs.core.async.t_cljs$core$async28934(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28935));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28934(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23380__auto___29054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___29054,mults,ensure_mult,p){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___29054,mults,ensure_mult,p){
return (function (state_29008){
var state_val_29009 = (state_29008[(1)]);
if((state_val_29009 === (7))){
var inst_29004 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
var statearr_29010_29055 = state_29008__$1;
(statearr_29010_29055[(2)] = inst_29004);

(statearr_29010_29055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (20))){
var state_29008__$1 = state_29008;
var statearr_29011_29056 = state_29008__$1;
(statearr_29011_29056[(2)] = null);

(statearr_29011_29056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (1))){
var state_29008__$1 = state_29008;
var statearr_29012_29057 = state_29008__$1;
(statearr_29012_29057[(2)] = null);

(statearr_29012_29057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (24))){
var inst_28987 = (state_29008[(7)]);
var inst_28996 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28987);
var state_29008__$1 = state_29008;
var statearr_29013_29058 = state_29008__$1;
(statearr_29013_29058[(2)] = inst_28996);

(statearr_29013_29058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (4))){
var inst_28939 = (state_29008[(8)]);
var inst_28939__$1 = (state_29008[(2)]);
var inst_28940 = (inst_28939__$1 == null);
var state_29008__$1 = (function (){var statearr_29014 = state_29008;
(statearr_29014[(8)] = inst_28939__$1);

return statearr_29014;
})();
if(cljs.core.truth_(inst_28940)){
var statearr_29015_29059 = state_29008__$1;
(statearr_29015_29059[(1)] = (5));

} else {
var statearr_29016_29060 = state_29008__$1;
(statearr_29016_29060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (15))){
var inst_28981 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
var statearr_29017_29061 = state_29008__$1;
(statearr_29017_29061[(2)] = inst_28981);

(statearr_29017_29061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (21))){
var inst_29001 = (state_29008[(2)]);
var state_29008__$1 = (function (){var statearr_29018 = state_29008;
(statearr_29018[(9)] = inst_29001);

return statearr_29018;
})();
var statearr_29019_29062 = state_29008__$1;
(statearr_29019_29062[(2)] = null);

(statearr_29019_29062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (13))){
var inst_28963 = (state_29008[(10)]);
var inst_28965 = cljs.core.chunked_seq_QMARK_.call(null,inst_28963);
var state_29008__$1 = state_29008;
if(inst_28965){
var statearr_29020_29063 = state_29008__$1;
(statearr_29020_29063[(1)] = (16));

} else {
var statearr_29021_29064 = state_29008__$1;
(statearr_29021_29064[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (22))){
var inst_28993 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
if(cljs.core.truth_(inst_28993)){
var statearr_29022_29065 = state_29008__$1;
(statearr_29022_29065[(1)] = (23));

} else {
var statearr_29023_29066 = state_29008__$1;
(statearr_29023_29066[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (6))){
var inst_28939 = (state_29008[(8)]);
var inst_28989 = (state_29008[(11)]);
var inst_28987 = (state_29008[(7)]);
var inst_28987__$1 = topic_fn.call(null,inst_28939);
var inst_28988 = cljs.core.deref.call(null,mults);
var inst_28989__$1 = cljs.core.get.call(null,inst_28988,inst_28987__$1);
var state_29008__$1 = (function (){var statearr_29024 = state_29008;
(statearr_29024[(11)] = inst_28989__$1);

(statearr_29024[(7)] = inst_28987__$1);

return statearr_29024;
})();
if(cljs.core.truth_(inst_28989__$1)){
var statearr_29025_29067 = state_29008__$1;
(statearr_29025_29067[(1)] = (19));

} else {
var statearr_29026_29068 = state_29008__$1;
(statearr_29026_29068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (25))){
var inst_28998 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
var statearr_29027_29069 = state_29008__$1;
(statearr_29027_29069[(2)] = inst_28998);

(statearr_29027_29069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (17))){
var inst_28963 = (state_29008[(10)]);
var inst_28972 = cljs.core.first.call(null,inst_28963);
var inst_28973 = cljs.core.async.muxch_STAR_.call(null,inst_28972);
var inst_28974 = cljs.core.async.close_BANG_.call(null,inst_28973);
var inst_28975 = cljs.core.next.call(null,inst_28963);
var inst_28949 = inst_28975;
var inst_28950 = null;
var inst_28951 = (0);
var inst_28952 = (0);
var state_29008__$1 = (function (){var statearr_29028 = state_29008;
(statearr_29028[(12)] = inst_28951);

(statearr_29028[(13)] = inst_28949);

(statearr_29028[(14)] = inst_28974);

(statearr_29028[(15)] = inst_28952);

(statearr_29028[(16)] = inst_28950);

return statearr_29028;
})();
var statearr_29029_29070 = state_29008__$1;
(statearr_29029_29070[(2)] = null);

(statearr_29029_29070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (3))){
var inst_29006 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29008__$1,inst_29006);
} else {
if((state_val_29009 === (12))){
var inst_28983 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
var statearr_29030_29071 = state_29008__$1;
(statearr_29030_29071[(2)] = inst_28983);

(statearr_29030_29071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (2))){
var state_29008__$1 = state_29008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29008__$1,(4),ch);
} else {
if((state_val_29009 === (23))){
var state_29008__$1 = state_29008;
var statearr_29031_29072 = state_29008__$1;
(statearr_29031_29072[(2)] = null);

(statearr_29031_29072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (19))){
var inst_28939 = (state_29008[(8)]);
var inst_28989 = (state_29008[(11)]);
var inst_28991 = cljs.core.async.muxch_STAR_.call(null,inst_28989);
var state_29008__$1 = state_29008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29008__$1,(22),inst_28991,inst_28939);
} else {
if((state_val_29009 === (11))){
var inst_28963 = (state_29008[(10)]);
var inst_28949 = (state_29008[(13)]);
var inst_28963__$1 = cljs.core.seq.call(null,inst_28949);
var state_29008__$1 = (function (){var statearr_29032 = state_29008;
(statearr_29032[(10)] = inst_28963__$1);

return statearr_29032;
})();
if(inst_28963__$1){
var statearr_29033_29073 = state_29008__$1;
(statearr_29033_29073[(1)] = (13));

} else {
var statearr_29034_29074 = state_29008__$1;
(statearr_29034_29074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (9))){
var inst_28985 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
var statearr_29035_29075 = state_29008__$1;
(statearr_29035_29075[(2)] = inst_28985);

(statearr_29035_29075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (5))){
var inst_28946 = cljs.core.deref.call(null,mults);
var inst_28947 = cljs.core.vals.call(null,inst_28946);
var inst_28948 = cljs.core.seq.call(null,inst_28947);
var inst_28949 = inst_28948;
var inst_28950 = null;
var inst_28951 = (0);
var inst_28952 = (0);
var state_29008__$1 = (function (){var statearr_29036 = state_29008;
(statearr_29036[(12)] = inst_28951);

(statearr_29036[(13)] = inst_28949);

(statearr_29036[(15)] = inst_28952);

(statearr_29036[(16)] = inst_28950);

return statearr_29036;
})();
var statearr_29037_29076 = state_29008__$1;
(statearr_29037_29076[(2)] = null);

(statearr_29037_29076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (14))){
var state_29008__$1 = state_29008;
var statearr_29041_29077 = state_29008__$1;
(statearr_29041_29077[(2)] = null);

(statearr_29041_29077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (16))){
var inst_28963 = (state_29008[(10)]);
var inst_28967 = cljs.core.chunk_first.call(null,inst_28963);
var inst_28968 = cljs.core.chunk_rest.call(null,inst_28963);
var inst_28969 = cljs.core.count.call(null,inst_28967);
var inst_28949 = inst_28968;
var inst_28950 = inst_28967;
var inst_28951 = inst_28969;
var inst_28952 = (0);
var state_29008__$1 = (function (){var statearr_29042 = state_29008;
(statearr_29042[(12)] = inst_28951);

(statearr_29042[(13)] = inst_28949);

(statearr_29042[(15)] = inst_28952);

(statearr_29042[(16)] = inst_28950);

return statearr_29042;
})();
var statearr_29043_29078 = state_29008__$1;
(statearr_29043_29078[(2)] = null);

(statearr_29043_29078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (10))){
var inst_28951 = (state_29008[(12)]);
var inst_28949 = (state_29008[(13)]);
var inst_28952 = (state_29008[(15)]);
var inst_28950 = (state_29008[(16)]);
var inst_28957 = cljs.core._nth.call(null,inst_28950,inst_28952);
var inst_28958 = cljs.core.async.muxch_STAR_.call(null,inst_28957);
var inst_28959 = cljs.core.async.close_BANG_.call(null,inst_28958);
var inst_28960 = (inst_28952 + (1));
var tmp29038 = inst_28951;
var tmp29039 = inst_28949;
var tmp29040 = inst_28950;
var inst_28949__$1 = tmp29039;
var inst_28950__$1 = tmp29040;
var inst_28951__$1 = tmp29038;
var inst_28952__$1 = inst_28960;
var state_29008__$1 = (function (){var statearr_29044 = state_29008;
(statearr_29044[(12)] = inst_28951__$1);

(statearr_29044[(13)] = inst_28949__$1);

(statearr_29044[(17)] = inst_28959);

(statearr_29044[(15)] = inst_28952__$1);

(statearr_29044[(16)] = inst_28950__$1);

return statearr_29044;
})();
var statearr_29045_29079 = state_29008__$1;
(statearr_29045_29079[(2)] = null);

(statearr_29045_29079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (18))){
var inst_28978 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
var statearr_29046_29080 = state_29008__$1;
(statearr_29046_29080[(2)] = inst_28978);

(statearr_29046_29080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (8))){
var inst_28951 = (state_29008[(12)]);
var inst_28952 = (state_29008[(15)]);
var inst_28954 = (inst_28952 < inst_28951);
var inst_28955 = inst_28954;
var state_29008__$1 = state_29008;
if(cljs.core.truth_(inst_28955)){
var statearr_29047_29081 = state_29008__$1;
(statearr_29047_29081[(1)] = (10));

} else {
var statearr_29048_29082 = state_29008__$1;
(statearr_29048_29082[(1)] = (11));

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
});})(c__23380__auto___29054,mults,ensure_mult,p))
;
return ((function (switch__23223__auto__,c__23380__auto___29054,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_29049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29049[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_29049[(1)] = (1));

return statearr_29049;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_29008){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_29008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e29050){if((e29050 instanceof Object)){
var ex__23227__auto__ = e29050;
var statearr_29051_29083 = state_29008;
(statearr_29051_29083[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29084 = state_29008;
state_29008 = G__29084;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_29008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_29008);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___29054,mults,ensure_mult,p))
})();
var state__23382__auto__ = (function (){var statearr_29052 = f__23381__auto__.call(null);
(statearr_29052[(6)] = c__23380__auto___29054);

return statearr_29052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___29054,mults,ensure_mult,p))
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
var G__29086 = arguments.length;
switch (G__29086) {
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
var G__29089 = arguments.length;
switch (G__29089) {
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
var G__29092 = arguments.length;
switch (G__29092) {
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
var c__23380__auto___29159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___29159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___29159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29131){
var state_val_29132 = (state_29131[(1)]);
if((state_val_29132 === (7))){
var state_29131__$1 = state_29131;
var statearr_29133_29160 = state_29131__$1;
(statearr_29133_29160[(2)] = null);

(statearr_29133_29160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (1))){
var state_29131__$1 = state_29131;
var statearr_29134_29161 = state_29131__$1;
(statearr_29134_29161[(2)] = null);

(statearr_29134_29161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (4))){
var inst_29095 = (state_29131[(7)]);
var inst_29097 = (inst_29095 < cnt);
var state_29131__$1 = state_29131;
if(cljs.core.truth_(inst_29097)){
var statearr_29135_29162 = state_29131__$1;
(statearr_29135_29162[(1)] = (6));

} else {
var statearr_29136_29163 = state_29131__$1;
(statearr_29136_29163[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (15))){
var inst_29127 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29137_29164 = state_29131__$1;
(statearr_29137_29164[(2)] = inst_29127);

(statearr_29137_29164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (13))){
var inst_29120 = cljs.core.async.close_BANG_.call(null,out);
var state_29131__$1 = state_29131;
var statearr_29138_29165 = state_29131__$1;
(statearr_29138_29165[(2)] = inst_29120);

(statearr_29138_29165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (6))){
var state_29131__$1 = state_29131;
var statearr_29139_29166 = state_29131__$1;
(statearr_29139_29166[(2)] = null);

(statearr_29139_29166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (3))){
var inst_29129 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29131__$1,inst_29129);
} else {
if((state_val_29132 === (12))){
var inst_29117 = (state_29131[(8)]);
var inst_29117__$1 = (state_29131[(2)]);
var inst_29118 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29117__$1);
var state_29131__$1 = (function (){var statearr_29140 = state_29131;
(statearr_29140[(8)] = inst_29117__$1);

return statearr_29140;
})();
if(cljs.core.truth_(inst_29118)){
var statearr_29141_29167 = state_29131__$1;
(statearr_29141_29167[(1)] = (13));

} else {
var statearr_29142_29168 = state_29131__$1;
(statearr_29142_29168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (2))){
var inst_29094 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29095 = (0);
var state_29131__$1 = (function (){var statearr_29143 = state_29131;
(statearr_29143[(9)] = inst_29094);

(statearr_29143[(7)] = inst_29095);

return statearr_29143;
})();
var statearr_29144_29169 = state_29131__$1;
(statearr_29144_29169[(2)] = null);

(statearr_29144_29169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (11))){
var inst_29095 = (state_29131[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29131,(10),Object,null,(9));
var inst_29104 = chs__$1.call(null,inst_29095);
var inst_29105 = done.call(null,inst_29095);
var inst_29106 = cljs.core.async.take_BANG_.call(null,inst_29104,inst_29105);
var state_29131__$1 = state_29131;
var statearr_29145_29170 = state_29131__$1;
(statearr_29145_29170[(2)] = inst_29106);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29131__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (9))){
var inst_29095 = (state_29131[(7)]);
var inst_29108 = (state_29131[(2)]);
var inst_29109 = (inst_29095 + (1));
var inst_29095__$1 = inst_29109;
var state_29131__$1 = (function (){var statearr_29146 = state_29131;
(statearr_29146[(10)] = inst_29108);

(statearr_29146[(7)] = inst_29095__$1);

return statearr_29146;
})();
var statearr_29147_29171 = state_29131__$1;
(statearr_29147_29171[(2)] = null);

(statearr_29147_29171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (5))){
var inst_29115 = (state_29131[(2)]);
var state_29131__$1 = (function (){var statearr_29148 = state_29131;
(statearr_29148[(11)] = inst_29115);

return statearr_29148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29131__$1,(12),dchan);
} else {
if((state_val_29132 === (14))){
var inst_29117 = (state_29131[(8)]);
var inst_29122 = cljs.core.apply.call(null,f,inst_29117);
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29131__$1,(16),out,inst_29122);
} else {
if((state_val_29132 === (16))){
var inst_29124 = (state_29131[(2)]);
var state_29131__$1 = (function (){var statearr_29149 = state_29131;
(statearr_29149[(12)] = inst_29124);

return statearr_29149;
})();
var statearr_29150_29172 = state_29131__$1;
(statearr_29150_29172[(2)] = null);

(statearr_29150_29172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (10))){
var inst_29099 = (state_29131[(2)]);
var inst_29100 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29131__$1 = (function (){var statearr_29151 = state_29131;
(statearr_29151[(13)] = inst_29099);

return statearr_29151;
})();
var statearr_29152_29173 = state_29131__$1;
(statearr_29152_29173[(2)] = inst_29100);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29131__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (8))){
var inst_29113 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29153_29174 = state_29131__$1;
(statearr_29153_29174[(2)] = inst_29113);

(statearr_29153_29174[(1)] = (5));


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
});})(c__23380__auto___29159,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23223__auto__,c__23380__auto___29159,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_29154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29154[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_29154[(1)] = (1));

return statearr_29154;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_29131){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_29131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e29155){if((e29155 instanceof Object)){
var ex__23227__auto__ = e29155;
var statearr_29156_29175 = state_29131;
(statearr_29156_29175[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29176 = state_29131;
state_29131 = G__29176;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_29131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_29131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___29159,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23382__auto__ = (function (){var statearr_29157 = f__23381__auto__.call(null);
(statearr_29157[(6)] = c__23380__auto___29159);

return statearr_29157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___29159,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__29179 = arguments.length;
switch (G__29179) {
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
var c__23380__auto___29233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___29233,out){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___29233,out){
return (function (state_29211){
var state_val_29212 = (state_29211[(1)]);
if((state_val_29212 === (7))){
var inst_29191 = (state_29211[(7)]);
var inst_29190 = (state_29211[(8)]);
var inst_29190__$1 = (state_29211[(2)]);
var inst_29191__$1 = cljs.core.nth.call(null,inst_29190__$1,(0),null);
var inst_29192 = cljs.core.nth.call(null,inst_29190__$1,(1),null);
var inst_29193 = (inst_29191__$1 == null);
var state_29211__$1 = (function (){var statearr_29213 = state_29211;
(statearr_29213[(7)] = inst_29191__$1);

(statearr_29213[(9)] = inst_29192);

(statearr_29213[(8)] = inst_29190__$1);

return statearr_29213;
})();
if(cljs.core.truth_(inst_29193)){
var statearr_29214_29234 = state_29211__$1;
(statearr_29214_29234[(1)] = (8));

} else {
var statearr_29215_29235 = state_29211__$1;
(statearr_29215_29235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (1))){
var inst_29180 = cljs.core.vec.call(null,chs);
var inst_29181 = inst_29180;
var state_29211__$1 = (function (){var statearr_29216 = state_29211;
(statearr_29216[(10)] = inst_29181);

return statearr_29216;
})();
var statearr_29217_29236 = state_29211__$1;
(statearr_29217_29236[(2)] = null);

(statearr_29217_29236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (4))){
var inst_29181 = (state_29211[(10)]);
var state_29211__$1 = state_29211;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29211__$1,(7),inst_29181);
} else {
if((state_val_29212 === (6))){
var inst_29207 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29218_29237 = state_29211__$1;
(statearr_29218_29237[(2)] = inst_29207);

(statearr_29218_29237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (3))){
var inst_29209 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29211__$1,inst_29209);
} else {
if((state_val_29212 === (2))){
var inst_29181 = (state_29211[(10)]);
var inst_29183 = cljs.core.count.call(null,inst_29181);
var inst_29184 = (inst_29183 > (0));
var state_29211__$1 = state_29211;
if(cljs.core.truth_(inst_29184)){
var statearr_29220_29238 = state_29211__$1;
(statearr_29220_29238[(1)] = (4));

} else {
var statearr_29221_29239 = state_29211__$1;
(statearr_29221_29239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (11))){
var inst_29181 = (state_29211[(10)]);
var inst_29200 = (state_29211[(2)]);
var tmp29219 = inst_29181;
var inst_29181__$1 = tmp29219;
var state_29211__$1 = (function (){var statearr_29222 = state_29211;
(statearr_29222[(10)] = inst_29181__$1);

(statearr_29222[(11)] = inst_29200);

return statearr_29222;
})();
var statearr_29223_29240 = state_29211__$1;
(statearr_29223_29240[(2)] = null);

(statearr_29223_29240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (9))){
var inst_29191 = (state_29211[(7)]);
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29211__$1,(11),out,inst_29191);
} else {
if((state_val_29212 === (5))){
var inst_29205 = cljs.core.async.close_BANG_.call(null,out);
var state_29211__$1 = state_29211;
var statearr_29224_29241 = state_29211__$1;
(statearr_29224_29241[(2)] = inst_29205);

(statearr_29224_29241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (10))){
var inst_29203 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29225_29242 = state_29211__$1;
(statearr_29225_29242[(2)] = inst_29203);

(statearr_29225_29242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (8))){
var inst_29181 = (state_29211[(10)]);
var inst_29191 = (state_29211[(7)]);
var inst_29192 = (state_29211[(9)]);
var inst_29190 = (state_29211[(8)]);
var inst_29195 = (function (){var cs = inst_29181;
var vec__29186 = inst_29190;
var v = inst_29191;
var c = inst_29192;
return ((function (cs,vec__29186,v,c,inst_29181,inst_29191,inst_29192,inst_29190,state_val_29212,c__23380__auto___29233,out){
return (function (p1__29177_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29177_SHARP_);
});
;})(cs,vec__29186,v,c,inst_29181,inst_29191,inst_29192,inst_29190,state_val_29212,c__23380__auto___29233,out))
})();
var inst_29196 = cljs.core.filterv.call(null,inst_29195,inst_29181);
var inst_29181__$1 = inst_29196;
var state_29211__$1 = (function (){var statearr_29226 = state_29211;
(statearr_29226[(10)] = inst_29181__$1);

return statearr_29226;
})();
var statearr_29227_29243 = state_29211__$1;
(statearr_29227_29243[(2)] = null);

(statearr_29227_29243[(1)] = (2));


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
});})(c__23380__auto___29233,out))
;
return ((function (switch__23223__auto__,c__23380__auto___29233,out){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_29228 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29228[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_29228[(1)] = (1));

return statearr_29228;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_29211){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_29211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e29229){if((e29229 instanceof Object)){
var ex__23227__auto__ = e29229;
var statearr_29230_29244 = state_29211;
(statearr_29230_29244[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29245 = state_29211;
state_29211 = G__29245;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_29211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_29211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___29233,out))
})();
var state__23382__auto__ = (function (){var statearr_29231 = f__23381__auto__.call(null);
(statearr_29231[(6)] = c__23380__auto___29233);

return statearr_29231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___29233,out))
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
var G__29247 = arguments.length;
switch (G__29247) {
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
var c__23380__auto___29292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___29292,out){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___29292,out){
return (function (state_29271){
var state_val_29272 = (state_29271[(1)]);
if((state_val_29272 === (7))){
var inst_29253 = (state_29271[(7)]);
var inst_29253__$1 = (state_29271[(2)]);
var inst_29254 = (inst_29253__$1 == null);
var inst_29255 = cljs.core.not.call(null,inst_29254);
var state_29271__$1 = (function (){var statearr_29273 = state_29271;
(statearr_29273[(7)] = inst_29253__$1);

return statearr_29273;
})();
if(inst_29255){
var statearr_29274_29293 = state_29271__$1;
(statearr_29274_29293[(1)] = (8));

} else {
var statearr_29275_29294 = state_29271__$1;
(statearr_29275_29294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (1))){
var inst_29248 = (0);
var state_29271__$1 = (function (){var statearr_29276 = state_29271;
(statearr_29276[(8)] = inst_29248);

return statearr_29276;
})();
var statearr_29277_29295 = state_29271__$1;
(statearr_29277_29295[(2)] = null);

(statearr_29277_29295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (4))){
var state_29271__$1 = state_29271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29271__$1,(7),ch);
} else {
if((state_val_29272 === (6))){
var inst_29266 = (state_29271[(2)]);
var state_29271__$1 = state_29271;
var statearr_29278_29296 = state_29271__$1;
(statearr_29278_29296[(2)] = inst_29266);

(statearr_29278_29296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (3))){
var inst_29268 = (state_29271[(2)]);
var inst_29269 = cljs.core.async.close_BANG_.call(null,out);
var state_29271__$1 = (function (){var statearr_29279 = state_29271;
(statearr_29279[(9)] = inst_29268);

return statearr_29279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29271__$1,inst_29269);
} else {
if((state_val_29272 === (2))){
var inst_29248 = (state_29271[(8)]);
var inst_29250 = (inst_29248 < n);
var state_29271__$1 = state_29271;
if(cljs.core.truth_(inst_29250)){
var statearr_29280_29297 = state_29271__$1;
(statearr_29280_29297[(1)] = (4));

} else {
var statearr_29281_29298 = state_29271__$1;
(statearr_29281_29298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (11))){
var inst_29248 = (state_29271[(8)]);
var inst_29258 = (state_29271[(2)]);
var inst_29259 = (inst_29248 + (1));
var inst_29248__$1 = inst_29259;
var state_29271__$1 = (function (){var statearr_29282 = state_29271;
(statearr_29282[(10)] = inst_29258);

(statearr_29282[(8)] = inst_29248__$1);

return statearr_29282;
})();
var statearr_29283_29299 = state_29271__$1;
(statearr_29283_29299[(2)] = null);

(statearr_29283_29299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (9))){
var state_29271__$1 = state_29271;
var statearr_29284_29300 = state_29271__$1;
(statearr_29284_29300[(2)] = null);

(statearr_29284_29300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (5))){
var state_29271__$1 = state_29271;
var statearr_29285_29301 = state_29271__$1;
(statearr_29285_29301[(2)] = null);

(statearr_29285_29301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (10))){
var inst_29263 = (state_29271[(2)]);
var state_29271__$1 = state_29271;
var statearr_29286_29302 = state_29271__$1;
(statearr_29286_29302[(2)] = inst_29263);

(statearr_29286_29302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (8))){
var inst_29253 = (state_29271[(7)]);
var state_29271__$1 = state_29271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29271__$1,(11),out,inst_29253);
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
});})(c__23380__auto___29292,out))
;
return ((function (switch__23223__auto__,c__23380__auto___29292,out){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_29287 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29287[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_29287[(1)] = (1));

return statearr_29287;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_29271){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_29271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e29288){if((e29288 instanceof Object)){
var ex__23227__auto__ = e29288;
var statearr_29289_29303 = state_29271;
(statearr_29289_29303[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29304 = state_29271;
state_29271 = G__29304;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_29271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_29271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___29292,out))
})();
var state__23382__auto__ = (function (){var statearr_29290 = f__23381__auto__.call(null);
(statearr_29290[(6)] = c__23380__auto___29292);

return statearr_29290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___29292,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29306 = (function (f,ch,meta29307){
this.f = f;
this.ch = ch;
this.meta29307 = meta29307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29308,meta29307__$1){
var self__ = this;
var _29308__$1 = this;
return (new cljs.core.async.t_cljs$core$async29306(self__.f,self__.ch,meta29307__$1));
});

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29308){
var self__ = this;
var _29308__$1 = this;
return self__.meta29307;
});

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29309 = (function (f,ch,meta29307,_,fn1,meta29310){
this.f = f;
this.ch = ch;
this.meta29307 = meta29307;
this._ = _;
this.fn1 = fn1;
this.meta29310 = meta29310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29311,meta29310__$1){
var self__ = this;
var _29311__$1 = this;
return (new cljs.core.async.t_cljs$core$async29309(self__.f,self__.ch,self__.meta29307,self__._,self__.fn1,meta29310__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29311){
var self__ = this;
var _29311__$1 = this;
return self__.meta29310;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29305_SHARP_){
return f1.call(null,(((p1__29305_SHARP_ == null))?null:self__.f.call(null,p1__29305_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29309.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29307","meta29307",-381126219,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29306","cljs.core.async/t_cljs$core$async29306",-609202294,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29310","meta29310",1501054743,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29309";

cljs.core.async.t_cljs$core$async29309.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29309");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29309.
 */
cljs.core.async.__GT_t_cljs$core$async29309 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29309(f__$1,ch__$1,meta29307__$1,___$2,fn1__$1,meta29310){
return (new cljs.core.async.t_cljs$core$async29309(f__$1,ch__$1,meta29307__$1,___$2,fn1__$1,meta29310));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29309(self__.f,self__.ch,self__.meta29307,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29307","meta29307",-381126219,null)], null);
});

cljs.core.async.t_cljs$core$async29306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29306";

cljs.core.async.t_cljs$core$async29306.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29306");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29306.
 */
cljs.core.async.__GT_t_cljs$core$async29306 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29306(f__$1,ch__$1,meta29307){
return (new cljs.core.async.t_cljs$core$async29306(f__$1,ch__$1,meta29307));
});

}

return (new cljs.core.async.t_cljs$core$async29306(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29312 = (function (f,ch,meta29313){
this.f = f;
this.ch = ch;
this.meta29313 = meta29313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29314,meta29313__$1){
var self__ = this;
var _29314__$1 = this;
return (new cljs.core.async.t_cljs$core$async29312(self__.f,self__.ch,meta29313__$1));
});

cljs.core.async.t_cljs$core$async29312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29314){
var self__ = this;
var _29314__$1 = this;
return self__.meta29313;
});

cljs.core.async.t_cljs$core$async29312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29313","meta29313",98981259,null)], null);
});

cljs.core.async.t_cljs$core$async29312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29312";

cljs.core.async.t_cljs$core$async29312.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29312");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29312.
 */
cljs.core.async.__GT_t_cljs$core$async29312 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29312(f__$1,ch__$1,meta29313){
return (new cljs.core.async.t_cljs$core$async29312(f__$1,ch__$1,meta29313));
});

}

return (new cljs.core.async.t_cljs$core$async29312(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29315 = (function (p,ch,meta29316){
this.p = p;
this.ch = ch;
this.meta29316 = meta29316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29317,meta29316__$1){
var self__ = this;
var _29317__$1 = this;
return (new cljs.core.async.t_cljs$core$async29315(self__.p,self__.ch,meta29316__$1));
});

cljs.core.async.t_cljs$core$async29315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29317){
var self__ = this;
var _29317__$1 = this;
return self__.meta29316;
});

cljs.core.async.t_cljs$core$async29315.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29315.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29315.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29315.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29316","meta29316",-1609107797,null)], null);
});

cljs.core.async.t_cljs$core$async29315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29315";

cljs.core.async.t_cljs$core$async29315.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29315");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29315.
 */
cljs.core.async.__GT_t_cljs$core$async29315 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29315(p__$1,ch__$1,meta29316){
return (new cljs.core.async.t_cljs$core$async29315(p__$1,ch__$1,meta29316));
});

}

return (new cljs.core.async.t_cljs$core$async29315(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29319 = arguments.length;
switch (G__29319) {
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
var c__23380__auto___29359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___29359,out){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___29359,out){
return (function (state_29340){
var state_val_29341 = (state_29340[(1)]);
if((state_val_29341 === (7))){
var inst_29336 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
var statearr_29342_29360 = state_29340__$1;
(statearr_29342_29360[(2)] = inst_29336);

(statearr_29342_29360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (1))){
var state_29340__$1 = state_29340;
var statearr_29343_29361 = state_29340__$1;
(statearr_29343_29361[(2)] = null);

(statearr_29343_29361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (4))){
var inst_29322 = (state_29340[(7)]);
var inst_29322__$1 = (state_29340[(2)]);
var inst_29323 = (inst_29322__$1 == null);
var state_29340__$1 = (function (){var statearr_29344 = state_29340;
(statearr_29344[(7)] = inst_29322__$1);

return statearr_29344;
})();
if(cljs.core.truth_(inst_29323)){
var statearr_29345_29362 = state_29340__$1;
(statearr_29345_29362[(1)] = (5));

} else {
var statearr_29346_29363 = state_29340__$1;
(statearr_29346_29363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (6))){
var inst_29322 = (state_29340[(7)]);
var inst_29327 = p.call(null,inst_29322);
var state_29340__$1 = state_29340;
if(cljs.core.truth_(inst_29327)){
var statearr_29347_29364 = state_29340__$1;
(statearr_29347_29364[(1)] = (8));

} else {
var statearr_29348_29365 = state_29340__$1;
(statearr_29348_29365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (3))){
var inst_29338 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29340__$1,inst_29338);
} else {
if((state_val_29341 === (2))){
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29340__$1,(4),ch);
} else {
if((state_val_29341 === (11))){
var inst_29330 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
var statearr_29349_29366 = state_29340__$1;
(statearr_29349_29366[(2)] = inst_29330);

(statearr_29349_29366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (9))){
var state_29340__$1 = state_29340;
var statearr_29350_29367 = state_29340__$1;
(statearr_29350_29367[(2)] = null);

(statearr_29350_29367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (5))){
var inst_29325 = cljs.core.async.close_BANG_.call(null,out);
var state_29340__$1 = state_29340;
var statearr_29351_29368 = state_29340__$1;
(statearr_29351_29368[(2)] = inst_29325);

(statearr_29351_29368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (10))){
var inst_29333 = (state_29340[(2)]);
var state_29340__$1 = (function (){var statearr_29352 = state_29340;
(statearr_29352[(8)] = inst_29333);

return statearr_29352;
})();
var statearr_29353_29369 = state_29340__$1;
(statearr_29353_29369[(2)] = null);

(statearr_29353_29369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (8))){
var inst_29322 = (state_29340[(7)]);
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29340__$1,(11),out,inst_29322);
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
});})(c__23380__auto___29359,out))
;
return ((function (switch__23223__auto__,c__23380__auto___29359,out){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_29354 = [null,null,null,null,null,null,null,null,null];
(statearr_29354[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_29354[(1)] = (1));

return statearr_29354;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_29340){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_29340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e29355){if((e29355 instanceof Object)){
var ex__23227__auto__ = e29355;
var statearr_29356_29370 = state_29340;
(statearr_29356_29370[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29371 = state_29340;
state_29340 = G__29371;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_29340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_29340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___29359,out))
})();
var state__23382__auto__ = (function (){var statearr_29357 = f__23381__auto__.call(null);
(statearr_29357[(6)] = c__23380__auto___29359);

return statearr_29357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___29359,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29373 = arguments.length;
switch (G__29373) {
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
var c__23380__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto__){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto__){
return (function (state_29436){
var state_val_29437 = (state_29436[(1)]);
if((state_val_29437 === (7))){
var inst_29432 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
var statearr_29438_29476 = state_29436__$1;
(statearr_29438_29476[(2)] = inst_29432);

(statearr_29438_29476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (20))){
var inst_29402 = (state_29436[(7)]);
var inst_29413 = (state_29436[(2)]);
var inst_29414 = cljs.core.next.call(null,inst_29402);
var inst_29388 = inst_29414;
var inst_29389 = null;
var inst_29390 = (0);
var inst_29391 = (0);
var state_29436__$1 = (function (){var statearr_29439 = state_29436;
(statearr_29439[(8)] = inst_29413);

(statearr_29439[(9)] = inst_29391);

(statearr_29439[(10)] = inst_29390);

(statearr_29439[(11)] = inst_29388);

(statearr_29439[(12)] = inst_29389);

return statearr_29439;
})();
var statearr_29440_29477 = state_29436__$1;
(statearr_29440_29477[(2)] = null);

(statearr_29440_29477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (1))){
var state_29436__$1 = state_29436;
var statearr_29441_29478 = state_29436__$1;
(statearr_29441_29478[(2)] = null);

(statearr_29441_29478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (4))){
var inst_29377 = (state_29436[(13)]);
var inst_29377__$1 = (state_29436[(2)]);
var inst_29378 = (inst_29377__$1 == null);
var state_29436__$1 = (function (){var statearr_29442 = state_29436;
(statearr_29442[(13)] = inst_29377__$1);

return statearr_29442;
})();
if(cljs.core.truth_(inst_29378)){
var statearr_29443_29479 = state_29436__$1;
(statearr_29443_29479[(1)] = (5));

} else {
var statearr_29444_29480 = state_29436__$1;
(statearr_29444_29480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (15))){
var state_29436__$1 = state_29436;
var statearr_29448_29481 = state_29436__$1;
(statearr_29448_29481[(2)] = null);

(statearr_29448_29481[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (21))){
var state_29436__$1 = state_29436;
var statearr_29449_29482 = state_29436__$1;
(statearr_29449_29482[(2)] = null);

(statearr_29449_29482[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (13))){
var inst_29391 = (state_29436[(9)]);
var inst_29390 = (state_29436[(10)]);
var inst_29388 = (state_29436[(11)]);
var inst_29389 = (state_29436[(12)]);
var inst_29398 = (state_29436[(2)]);
var inst_29399 = (inst_29391 + (1));
var tmp29445 = inst_29390;
var tmp29446 = inst_29388;
var tmp29447 = inst_29389;
var inst_29388__$1 = tmp29446;
var inst_29389__$1 = tmp29447;
var inst_29390__$1 = tmp29445;
var inst_29391__$1 = inst_29399;
var state_29436__$1 = (function (){var statearr_29450 = state_29436;
(statearr_29450[(9)] = inst_29391__$1);

(statearr_29450[(14)] = inst_29398);

(statearr_29450[(10)] = inst_29390__$1);

(statearr_29450[(11)] = inst_29388__$1);

(statearr_29450[(12)] = inst_29389__$1);

return statearr_29450;
})();
var statearr_29451_29483 = state_29436__$1;
(statearr_29451_29483[(2)] = null);

(statearr_29451_29483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (22))){
var state_29436__$1 = state_29436;
var statearr_29452_29484 = state_29436__$1;
(statearr_29452_29484[(2)] = null);

(statearr_29452_29484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (6))){
var inst_29377 = (state_29436[(13)]);
var inst_29386 = f.call(null,inst_29377);
var inst_29387 = cljs.core.seq.call(null,inst_29386);
var inst_29388 = inst_29387;
var inst_29389 = null;
var inst_29390 = (0);
var inst_29391 = (0);
var state_29436__$1 = (function (){var statearr_29453 = state_29436;
(statearr_29453[(9)] = inst_29391);

(statearr_29453[(10)] = inst_29390);

(statearr_29453[(11)] = inst_29388);

(statearr_29453[(12)] = inst_29389);

return statearr_29453;
})();
var statearr_29454_29485 = state_29436__$1;
(statearr_29454_29485[(2)] = null);

(statearr_29454_29485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (17))){
var inst_29402 = (state_29436[(7)]);
var inst_29406 = cljs.core.chunk_first.call(null,inst_29402);
var inst_29407 = cljs.core.chunk_rest.call(null,inst_29402);
var inst_29408 = cljs.core.count.call(null,inst_29406);
var inst_29388 = inst_29407;
var inst_29389 = inst_29406;
var inst_29390 = inst_29408;
var inst_29391 = (0);
var state_29436__$1 = (function (){var statearr_29455 = state_29436;
(statearr_29455[(9)] = inst_29391);

(statearr_29455[(10)] = inst_29390);

(statearr_29455[(11)] = inst_29388);

(statearr_29455[(12)] = inst_29389);

return statearr_29455;
})();
var statearr_29456_29486 = state_29436__$1;
(statearr_29456_29486[(2)] = null);

(statearr_29456_29486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (3))){
var inst_29434 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29436__$1,inst_29434);
} else {
if((state_val_29437 === (12))){
var inst_29422 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
var statearr_29457_29487 = state_29436__$1;
(statearr_29457_29487[(2)] = inst_29422);

(statearr_29457_29487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (2))){
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29436__$1,(4),in$);
} else {
if((state_val_29437 === (23))){
var inst_29430 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
var statearr_29458_29488 = state_29436__$1;
(statearr_29458_29488[(2)] = inst_29430);

(statearr_29458_29488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (19))){
var inst_29417 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
var statearr_29459_29489 = state_29436__$1;
(statearr_29459_29489[(2)] = inst_29417);

(statearr_29459_29489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (11))){
var inst_29388 = (state_29436[(11)]);
var inst_29402 = (state_29436[(7)]);
var inst_29402__$1 = cljs.core.seq.call(null,inst_29388);
var state_29436__$1 = (function (){var statearr_29460 = state_29436;
(statearr_29460[(7)] = inst_29402__$1);

return statearr_29460;
})();
if(inst_29402__$1){
var statearr_29461_29490 = state_29436__$1;
(statearr_29461_29490[(1)] = (14));

} else {
var statearr_29462_29491 = state_29436__$1;
(statearr_29462_29491[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (9))){
var inst_29424 = (state_29436[(2)]);
var inst_29425 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29436__$1 = (function (){var statearr_29463 = state_29436;
(statearr_29463[(15)] = inst_29424);

return statearr_29463;
})();
if(cljs.core.truth_(inst_29425)){
var statearr_29464_29492 = state_29436__$1;
(statearr_29464_29492[(1)] = (21));

} else {
var statearr_29465_29493 = state_29436__$1;
(statearr_29465_29493[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (5))){
var inst_29380 = cljs.core.async.close_BANG_.call(null,out);
var state_29436__$1 = state_29436;
var statearr_29466_29494 = state_29436__$1;
(statearr_29466_29494[(2)] = inst_29380);

(statearr_29466_29494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (14))){
var inst_29402 = (state_29436[(7)]);
var inst_29404 = cljs.core.chunked_seq_QMARK_.call(null,inst_29402);
var state_29436__$1 = state_29436;
if(inst_29404){
var statearr_29467_29495 = state_29436__$1;
(statearr_29467_29495[(1)] = (17));

} else {
var statearr_29468_29496 = state_29436__$1;
(statearr_29468_29496[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (16))){
var inst_29420 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
var statearr_29469_29497 = state_29436__$1;
(statearr_29469_29497[(2)] = inst_29420);

(statearr_29469_29497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29437 === (10))){
var inst_29391 = (state_29436[(9)]);
var inst_29389 = (state_29436[(12)]);
var inst_29396 = cljs.core._nth.call(null,inst_29389,inst_29391);
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29436__$1,(13),out,inst_29396);
} else {
if((state_val_29437 === (18))){
var inst_29402 = (state_29436[(7)]);
var inst_29411 = cljs.core.first.call(null,inst_29402);
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29436__$1,(20),out,inst_29411);
} else {
if((state_val_29437 === (8))){
var inst_29391 = (state_29436[(9)]);
var inst_29390 = (state_29436[(10)]);
var inst_29393 = (inst_29391 < inst_29390);
var inst_29394 = inst_29393;
var state_29436__$1 = state_29436;
if(cljs.core.truth_(inst_29394)){
var statearr_29470_29498 = state_29436__$1;
(statearr_29470_29498[(1)] = (10));

} else {
var statearr_29471_29499 = state_29436__$1;
(statearr_29471_29499[(1)] = (11));

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
});})(c__23380__auto__))
;
return ((function (switch__23223__auto__,c__23380__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23224__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23224__auto____0 = (function (){
var statearr_29472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29472[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23224__auto__);

(statearr_29472[(1)] = (1));

return statearr_29472;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23224__auto____1 = (function (state_29436){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_29436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e29473){if((e29473 instanceof Object)){
var ex__23227__auto__ = e29473;
var statearr_29474_29500 = state_29436;
(statearr_29474_29500[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29501 = state_29436;
state_29436 = G__29501;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23224__auto__ = function(state_29436){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23224__auto____1.call(this,state_29436);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23224__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23224__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto__))
})();
var state__23382__auto__ = (function (){var statearr_29475 = f__23381__auto__.call(null);
(statearr_29475[(6)] = c__23380__auto__);

return statearr_29475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto__))
);

return c__23380__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29503 = arguments.length;
switch (G__29503) {
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
var G__29506 = arguments.length;
switch (G__29506) {
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
var G__29509 = arguments.length;
switch (G__29509) {
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
var c__23380__auto___29556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___29556,out){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___29556,out){
return (function (state_29533){
var state_val_29534 = (state_29533[(1)]);
if((state_val_29534 === (7))){
var inst_29528 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29535_29557 = state_29533__$1;
(statearr_29535_29557[(2)] = inst_29528);

(statearr_29535_29557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (1))){
var inst_29510 = null;
var state_29533__$1 = (function (){var statearr_29536 = state_29533;
(statearr_29536[(7)] = inst_29510);

return statearr_29536;
})();
var statearr_29537_29558 = state_29533__$1;
(statearr_29537_29558[(2)] = null);

(statearr_29537_29558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (4))){
var inst_29513 = (state_29533[(8)]);
var inst_29513__$1 = (state_29533[(2)]);
var inst_29514 = (inst_29513__$1 == null);
var inst_29515 = cljs.core.not.call(null,inst_29514);
var state_29533__$1 = (function (){var statearr_29538 = state_29533;
(statearr_29538[(8)] = inst_29513__$1);

return statearr_29538;
})();
if(inst_29515){
var statearr_29539_29559 = state_29533__$1;
(statearr_29539_29559[(1)] = (5));

} else {
var statearr_29540_29560 = state_29533__$1;
(statearr_29540_29560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (6))){
var state_29533__$1 = state_29533;
var statearr_29541_29561 = state_29533__$1;
(statearr_29541_29561[(2)] = null);

(statearr_29541_29561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (3))){
var inst_29530 = (state_29533[(2)]);
var inst_29531 = cljs.core.async.close_BANG_.call(null,out);
var state_29533__$1 = (function (){var statearr_29542 = state_29533;
(statearr_29542[(9)] = inst_29530);

return statearr_29542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29533__$1,inst_29531);
} else {
if((state_val_29534 === (2))){
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29533__$1,(4),ch);
} else {
if((state_val_29534 === (11))){
var inst_29513 = (state_29533[(8)]);
var inst_29522 = (state_29533[(2)]);
var inst_29510 = inst_29513;
var state_29533__$1 = (function (){var statearr_29543 = state_29533;
(statearr_29543[(10)] = inst_29522);

(statearr_29543[(7)] = inst_29510);

return statearr_29543;
})();
var statearr_29544_29562 = state_29533__$1;
(statearr_29544_29562[(2)] = null);

(statearr_29544_29562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (9))){
var inst_29513 = (state_29533[(8)]);
var state_29533__$1 = state_29533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29533__$1,(11),out,inst_29513);
} else {
if((state_val_29534 === (5))){
var inst_29513 = (state_29533[(8)]);
var inst_29510 = (state_29533[(7)]);
var inst_29517 = cljs.core._EQ_.call(null,inst_29513,inst_29510);
var state_29533__$1 = state_29533;
if(inst_29517){
var statearr_29546_29563 = state_29533__$1;
(statearr_29546_29563[(1)] = (8));

} else {
var statearr_29547_29564 = state_29533__$1;
(statearr_29547_29564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (10))){
var inst_29525 = (state_29533[(2)]);
var state_29533__$1 = state_29533;
var statearr_29548_29565 = state_29533__$1;
(statearr_29548_29565[(2)] = inst_29525);

(statearr_29548_29565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29534 === (8))){
var inst_29510 = (state_29533[(7)]);
var tmp29545 = inst_29510;
var inst_29510__$1 = tmp29545;
var state_29533__$1 = (function (){var statearr_29549 = state_29533;
(statearr_29549[(7)] = inst_29510__$1);

return statearr_29549;
})();
var statearr_29550_29566 = state_29533__$1;
(statearr_29550_29566[(2)] = null);

(statearr_29550_29566[(1)] = (2));


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
});})(c__23380__auto___29556,out))
;
return ((function (switch__23223__auto__,c__23380__auto___29556,out){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_29551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29551[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_29551[(1)] = (1));

return statearr_29551;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_29533){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_29533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e29552){if((e29552 instanceof Object)){
var ex__23227__auto__ = e29552;
var statearr_29553_29567 = state_29533;
(statearr_29553_29567[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29568 = state_29533;
state_29533 = G__29568;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_29533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_29533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___29556,out))
})();
var state__23382__auto__ = (function (){var statearr_29554 = f__23381__auto__.call(null);
(statearr_29554[(6)] = c__23380__auto___29556);

return statearr_29554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___29556,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29570 = arguments.length;
switch (G__29570) {
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
var c__23380__auto___29636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___29636,out){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___29636,out){
return (function (state_29608){
var state_val_29609 = (state_29608[(1)]);
if((state_val_29609 === (7))){
var inst_29604 = (state_29608[(2)]);
var state_29608__$1 = state_29608;
var statearr_29610_29637 = state_29608__$1;
(statearr_29610_29637[(2)] = inst_29604);

(statearr_29610_29637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (1))){
var inst_29571 = (new Array(n));
var inst_29572 = inst_29571;
var inst_29573 = (0);
var state_29608__$1 = (function (){var statearr_29611 = state_29608;
(statearr_29611[(7)] = inst_29572);

(statearr_29611[(8)] = inst_29573);

return statearr_29611;
})();
var statearr_29612_29638 = state_29608__$1;
(statearr_29612_29638[(2)] = null);

(statearr_29612_29638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (4))){
var inst_29576 = (state_29608[(9)]);
var inst_29576__$1 = (state_29608[(2)]);
var inst_29577 = (inst_29576__$1 == null);
var inst_29578 = cljs.core.not.call(null,inst_29577);
var state_29608__$1 = (function (){var statearr_29613 = state_29608;
(statearr_29613[(9)] = inst_29576__$1);

return statearr_29613;
})();
if(inst_29578){
var statearr_29614_29639 = state_29608__$1;
(statearr_29614_29639[(1)] = (5));

} else {
var statearr_29615_29640 = state_29608__$1;
(statearr_29615_29640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (15))){
var inst_29598 = (state_29608[(2)]);
var state_29608__$1 = state_29608;
var statearr_29616_29641 = state_29608__$1;
(statearr_29616_29641[(2)] = inst_29598);

(statearr_29616_29641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (13))){
var state_29608__$1 = state_29608;
var statearr_29617_29642 = state_29608__$1;
(statearr_29617_29642[(2)] = null);

(statearr_29617_29642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (6))){
var inst_29573 = (state_29608[(8)]);
var inst_29594 = (inst_29573 > (0));
var state_29608__$1 = state_29608;
if(cljs.core.truth_(inst_29594)){
var statearr_29618_29643 = state_29608__$1;
(statearr_29618_29643[(1)] = (12));

} else {
var statearr_29619_29644 = state_29608__$1;
(statearr_29619_29644[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (3))){
var inst_29606 = (state_29608[(2)]);
var state_29608__$1 = state_29608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29608__$1,inst_29606);
} else {
if((state_val_29609 === (12))){
var inst_29572 = (state_29608[(7)]);
var inst_29596 = cljs.core.vec.call(null,inst_29572);
var state_29608__$1 = state_29608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29608__$1,(15),out,inst_29596);
} else {
if((state_val_29609 === (2))){
var state_29608__$1 = state_29608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29608__$1,(4),ch);
} else {
if((state_val_29609 === (11))){
var inst_29588 = (state_29608[(2)]);
var inst_29589 = (new Array(n));
var inst_29572 = inst_29589;
var inst_29573 = (0);
var state_29608__$1 = (function (){var statearr_29620 = state_29608;
(statearr_29620[(7)] = inst_29572);

(statearr_29620[(8)] = inst_29573);

(statearr_29620[(10)] = inst_29588);

return statearr_29620;
})();
var statearr_29621_29645 = state_29608__$1;
(statearr_29621_29645[(2)] = null);

(statearr_29621_29645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (9))){
var inst_29572 = (state_29608[(7)]);
var inst_29586 = cljs.core.vec.call(null,inst_29572);
var state_29608__$1 = state_29608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29608__$1,(11),out,inst_29586);
} else {
if((state_val_29609 === (5))){
var inst_29572 = (state_29608[(7)]);
var inst_29573 = (state_29608[(8)]);
var inst_29581 = (state_29608[(11)]);
var inst_29576 = (state_29608[(9)]);
var inst_29580 = (inst_29572[inst_29573] = inst_29576);
var inst_29581__$1 = (inst_29573 + (1));
var inst_29582 = (inst_29581__$1 < n);
var state_29608__$1 = (function (){var statearr_29622 = state_29608;
(statearr_29622[(12)] = inst_29580);

(statearr_29622[(11)] = inst_29581__$1);

return statearr_29622;
})();
if(cljs.core.truth_(inst_29582)){
var statearr_29623_29646 = state_29608__$1;
(statearr_29623_29646[(1)] = (8));

} else {
var statearr_29624_29647 = state_29608__$1;
(statearr_29624_29647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (14))){
var inst_29601 = (state_29608[(2)]);
var inst_29602 = cljs.core.async.close_BANG_.call(null,out);
var state_29608__$1 = (function (){var statearr_29626 = state_29608;
(statearr_29626[(13)] = inst_29601);

return statearr_29626;
})();
var statearr_29627_29648 = state_29608__$1;
(statearr_29627_29648[(2)] = inst_29602);

(statearr_29627_29648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (10))){
var inst_29592 = (state_29608[(2)]);
var state_29608__$1 = state_29608;
var statearr_29628_29649 = state_29608__$1;
(statearr_29628_29649[(2)] = inst_29592);

(statearr_29628_29649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29609 === (8))){
var inst_29572 = (state_29608[(7)]);
var inst_29581 = (state_29608[(11)]);
var tmp29625 = inst_29572;
var inst_29572__$1 = tmp29625;
var inst_29573 = inst_29581;
var state_29608__$1 = (function (){var statearr_29629 = state_29608;
(statearr_29629[(7)] = inst_29572__$1);

(statearr_29629[(8)] = inst_29573);

return statearr_29629;
})();
var statearr_29630_29650 = state_29608__$1;
(statearr_29630_29650[(2)] = null);

(statearr_29630_29650[(1)] = (2));


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
});})(c__23380__auto___29636,out))
;
return ((function (switch__23223__auto__,c__23380__auto___29636,out){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_29631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29631[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_29631[(1)] = (1));

return statearr_29631;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_29608){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_29608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e29632){if((e29632 instanceof Object)){
var ex__23227__auto__ = e29632;
var statearr_29633_29651 = state_29608;
(statearr_29633_29651[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29652 = state_29608;
state_29608 = G__29652;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_29608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_29608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___29636,out))
})();
var state__23382__auto__ = (function (){var statearr_29634 = f__23381__auto__.call(null);
(statearr_29634[(6)] = c__23380__auto___29636);

return statearr_29634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___29636,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29654 = arguments.length;
switch (G__29654) {
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
var c__23380__auto___29724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23380__auto___29724,out){
return (function (){
var f__23381__auto__ = (function (){var switch__23223__auto__ = ((function (c__23380__auto___29724,out){
return (function (state_29696){
var state_val_29697 = (state_29696[(1)]);
if((state_val_29697 === (7))){
var inst_29692 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
var statearr_29698_29725 = state_29696__$1;
(statearr_29698_29725[(2)] = inst_29692);

(statearr_29698_29725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (1))){
var inst_29655 = [];
var inst_29656 = inst_29655;
var inst_29657 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29696__$1 = (function (){var statearr_29699 = state_29696;
(statearr_29699[(7)] = inst_29657);

(statearr_29699[(8)] = inst_29656);

return statearr_29699;
})();
var statearr_29700_29726 = state_29696__$1;
(statearr_29700_29726[(2)] = null);

(statearr_29700_29726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (4))){
var inst_29660 = (state_29696[(9)]);
var inst_29660__$1 = (state_29696[(2)]);
var inst_29661 = (inst_29660__$1 == null);
var inst_29662 = cljs.core.not.call(null,inst_29661);
var state_29696__$1 = (function (){var statearr_29701 = state_29696;
(statearr_29701[(9)] = inst_29660__$1);

return statearr_29701;
})();
if(inst_29662){
var statearr_29702_29727 = state_29696__$1;
(statearr_29702_29727[(1)] = (5));

} else {
var statearr_29703_29728 = state_29696__$1;
(statearr_29703_29728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (15))){
var inst_29686 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
var statearr_29704_29729 = state_29696__$1;
(statearr_29704_29729[(2)] = inst_29686);

(statearr_29704_29729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (13))){
var state_29696__$1 = state_29696;
var statearr_29705_29730 = state_29696__$1;
(statearr_29705_29730[(2)] = null);

(statearr_29705_29730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (6))){
var inst_29656 = (state_29696[(8)]);
var inst_29681 = inst_29656.length;
var inst_29682 = (inst_29681 > (0));
var state_29696__$1 = state_29696;
if(cljs.core.truth_(inst_29682)){
var statearr_29706_29731 = state_29696__$1;
(statearr_29706_29731[(1)] = (12));

} else {
var statearr_29707_29732 = state_29696__$1;
(statearr_29707_29732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (3))){
var inst_29694 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29696__$1,inst_29694);
} else {
if((state_val_29697 === (12))){
var inst_29656 = (state_29696[(8)]);
var inst_29684 = cljs.core.vec.call(null,inst_29656);
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29696__$1,(15),out,inst_29684);
} else {
if((state_val_29697 === (2))){
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29696__$1,(4),ch);
} else {
if((state_val_29697 === (11))){
var inst_29660 = (state_29696[(9)]);
var inst_29664 = (state_29696[(10)]);
var inst_29674 = (state_29696[(2)]);
var inst_29675 = [];
var inst_29676 = inst_29675.push(inst_29660);
var inst_29656 = inst_29675;
var inst_29657 = inst_29664;
var state_29696__$1 = (function (){var statearr_29708 = state_29696;
(statearr_29708[(11)] = inst_29676);

(statearr_29708[(7)] = inst_29657);

(statearr_29708[(8)] = inst_29656);

(statearr_29708[(12)] = inst_29674);

return statearr_29708;
})();
var statearr_29709_29733 = state_29696__$1;
(statearr_29709_29733[(2)] = null);

(statearr_29709_29733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (9))){
var inst_29656 = (state_29696[(8)]);
var inst_29672 = cljs.core.vec.call(null,inst_29656);
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29696__$1,(11),out,inst_29672);
} else {
if((state_val_29697 === (5))){
var inst_29660 = (state_29696[(9)]);
var inst_29657 = (state_29696[(7)]);
var inst_29664 = (state_29696[(10)]);
var inst_29664__$1 = f.call(null,inst_29660);
var inst_29665 = cljs.core._EQ_.call(null,inst_29664__$1,inst_29657);
var inst_29666 = cljs.core.keyword_identical_QMARK_.call(null,inst_29657,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29667 = ((inst_29665) || (inst_29666));
var state_29696__$1 = (function (){var statearr_29710 = state_29696;
(statearr_29710[(10)] = inst_29664__$1);

return statearr_29710;
})();
if(cljs.core.truth_(inst_29667)){
var statearr_29711_29734 = state_29696__$1;
(statearr_29711_29734[(1)] = (8));

} else {
var statearr_29712_29735 = state_29696__$1;
(statearr_29712_29735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (14))){
var inst_29689 = (state_29696[(2)]);
var inst_29690 = cljs.core.async.close_BANG_.call(null,out);
var state_29696__$1 = (function (){var statearr_29714 = state_29696;
(statearr_29714[(13)] = inst_29689);

return statearr_29714;
})();
var statearr_29715_29736 = state_29696__$1;
(statearr_29715_29736[(2)] = inst_29690);

(statearr_29715_29736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (10))){
var inst_29679 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
var statearr_29716_29737 = state_29696__$1;
(statearr_29716_29737[(2)] = inst_29679);

(statearr_29716_29737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (8))){
var inst_29660 = (state_29696[(9)]);
var inst_29656 = (state_29696[(8)]);
var inst_29664 = (state_29696[(10)]);
var inst_29669 = inst_29656.push(inst_29660);
var tmp29713 = inst_29656;
var inst_29656__$1 = tmp29713;
var inst_29657 = inst_29664;
var state_29696__$1 = (function (){var statearr_29717 = state_29696;
(statearr_29717[(7)] = inst_29657);

(statearr_29717[(14)] = inst_29669);

(statearr_29717[(8)] = inst_29656__$1);

return statearr_29717;
})();
var statearr_29718_29738 = state_29696__$1;
(statearr_29718_29738[(2)] = null);

(statearr_29718_29738[(1)] = (2));


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
});})(c__23380__auto___29724,out))
;
return ((function (switch__23223__auto__,c__23380__auto___29724,out){
return (function() {
var cljs$core$async$state_machine__23224__auto__ = null;
var cljs$core$async$state_machine__23224__auto____0 = (function (){
var statearr_29719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29719[(0)] = cljs$core$async$state_machine__23224__auto__);

(statearr_29719[(1)] = (1));

return statearr_29719;
});
var cljs$core$async$state_machine__23224__auto____1 = (function (state_29696){
while(true){
var ret_value__23225__auto__ = (function (){try{while(true){
var result__23226__auto__ = switch__23223__auto__.call(null,state_29696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23226__auto__;
}
break;
}
}catch (e29720){if((e29720 instanceof Object)){
var ex__23227__auto__ = e29720;
var statearr_29721_29739 = state_29696;
(statearr_29721_29739[(5)] = ex__23227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29740 = state_29696;
state_29696 = G__29740;
continue;
} else {
return ret_value__23225__auto__;
}
break;
}
});
cljs$core$async$state_machine__23224__auto__ = function(state_29696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23224__auto____1.call(this,state_29696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23224__auto____0;
cljs$core$async$state_machine__23224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23224__auto____1;
return cljs$core$async$state_machine__23224__auto__;
})()
;})(switch__23223__auto__,c__23380__auto___29724,out))
})();
var state__23382__auto__ = (function (){var statearr_29722 = f__23381__auto__.call(null);
(statearr_29722[(6)] = c__23380__auto___29724);

return statearr_29722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23382__auto__);
});})(c__23380__auto___29724,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1521209063929
