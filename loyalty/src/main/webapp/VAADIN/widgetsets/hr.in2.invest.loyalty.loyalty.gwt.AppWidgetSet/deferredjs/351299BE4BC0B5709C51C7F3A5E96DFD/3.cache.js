function $runCallbacks_21(){
  var $e0, e, handler;
  while (callbacksHead_21) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_21 = callbacksHead_21.next;
    !callbacksHead_21 && (callbacksTail_21 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VWindow_2_classLit, new WidgetMapImpl$4$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VWindow_2_classLit, new WidgetMapImpl$4$1_0);
        endWidgetLoading();
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (instanceOf($e0, 37)) {
          e = $e0;
          impl_2.error_0(e);
        }
         else 
          throw $e0;
      }
    }
  }
}

function AsyncLoader3_0(){
}

function onLoad_21(){
  instance_22 = new AsyncLoader3_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 3);
  !!$stats && $stats($createStatsEvent('runCallbacks3', 'begin', -1, -1));
  instance_22.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks3', 'end', -1, -1));
}

function AsyncLoader3(){
}

_ = AsyncLoader3_0.prototype = AsyncLoader3.prototype = new Object_0;
_.getClass$ = function getClass_222(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader3_2_classLit;
}
;
_.runCallbacks = function runCallbacks_21(){
  $runCallbacks_21();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$4$1_0(){
}

function WidgetMapImpl$4$1(){
}

_ = WidgetMapImpl$4$1_0.prototype = WidgetMapImpl$4$1.prototype = new Object_0;
_.get = function get_33(){
  return new VWindow_0;
}
;
_.getClass$ = function getClass_531(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$4$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader3_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader3'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$4$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$4$1');
$entry(onLoad_21)();
