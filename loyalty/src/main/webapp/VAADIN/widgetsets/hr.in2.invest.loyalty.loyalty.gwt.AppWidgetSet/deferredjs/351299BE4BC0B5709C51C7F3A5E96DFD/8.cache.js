function $runCallbacks_37(){
  var $e0, e, handler;
  while (callbacksHead_37) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_37 = callbacksHead_37.next;
    !callbacksHead_37 && (callbacksTail_37 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VPasswordField_2_classLit, new WidgetMapImpl$13$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VPasswordField_2_classLit, new WidgetMapImpl$13$1_0);
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

function AsyncLoader8_0(){
}

function onLoad_37(){
  instance_38 = new AsyncLoader8_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 8);
  !!$stats && $stats($createStatsEvent('runCallbacks8', 'begin', -1, -1));
  instance_38.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks8', 'end', -1, -1));
}

function AsyncLoader8(){
}

_ = AsyncLoader8_0.prototype = AsyncLoader8.prototype = new Object_0;
_.getClass$ = function getClass_270(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader8_2_classLit;
}
;
_.runCallbacks = function runCallbacks_37(){
  $runCallbacks_37();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$13$1_0(){
}

function WidgetMapImpl$13$1(){
}

_ = WidgetMapImpl$13$1_0.prototype = WidgetMapImpl$13$1.prototype = new Object_0;
_.get = function get_4(){
  return new VPasswordField_0;
}
;
_.getClass$ = function getClass_502(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$13$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function VPasswordField_0(){
  var e;
  $clinit_51();
  VTextField_1.call(this, (e = $doc.createElement('INPUT') , e.type = 'password' , e));
}

function VPasswordField(){
}

_ = VPasswordField_0.prototype = VPasswordField.prototype = new VTextField;
_.getClass$ = function getClass_673(){
  return Lcom_vaadin_terminal_gwt_client_ui_VPasswordField_2_classLit;
}
;
_.castableTypeMap$ = {5:1, 6:1, 7:1, 10:1, 12:1, 13:1, 15:1, 22:1, 26:1, 28:1, 38:1, 69:1, 70:1, 122:1, 123:1, 124:1, 131:1, 132:1, 170:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader8_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader8'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$13$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$13$1');
$entry(onLoad_37)();
