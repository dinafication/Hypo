function $runCallbacks_11(){
  var $e0, e, handler;
  while (callbacksHead_11) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_11 = callbacksHead_11.next;
    !callbacksHead_11 && (callbacksTail_11 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VSplitPanelVertical_2_classLit, new WidgetMapImpl$29$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VSplitPanelVertical_2_classLit, new WidgetMapImpl$29$1_0);
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

function AsyncLoader20_0(){
}

function onLoad_11(){
  instance_12 = new AsyncLoader20_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 20);
  !!$stats && $stats($createStatsEvent('runCallbacks20', 'begin', -1, -1));
  instance_12.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks20', 'end', -1, -1));
}

function AsyncLoader20(){
}

_ = AsyncLoader20_0.prototype = AsyncLoader20.prototype = new Object_0;
_.getClass$ = function getClass_191(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader20_2_classLit;
}
;
_.runCallbacks = function runCallbacks_11(){
  $runCallbacks_11();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$29$1_0(){
}

function WidgetMapImpl$29$1(){
}

_ = WidgetMapImpl$29$1_0.prototype = WidgetMapImpl$29$1.prototype = new Object_0;
_.get = function get_21(){
  return new VSplitPanelVertical_0;
}
;
_.getClass$ = function getClass_519(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$29$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function VSplitPanelVertical_0(){
  VSplitPanel_0.call(this, 1);
}

function VSplitPanelVertical(){
}

_ = VSplitPanelVertical_0.prototype = VSplitPanelVertical.prototype = new VSplitPanel;
_.getClass$ = function getClass_744(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSplitPanelVertical_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1, 126:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader20_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader20'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$29$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$29$1');
$entry(onLoad_11)();
