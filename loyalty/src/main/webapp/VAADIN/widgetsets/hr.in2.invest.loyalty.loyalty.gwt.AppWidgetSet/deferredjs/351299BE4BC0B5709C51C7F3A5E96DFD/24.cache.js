function $runCallbacks_15(){
  var $e0, e, handler;
  while (callbacksHead_15) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_15 = callbacksHead_15.next;
    !callbacksHead_15 && (callbacksTail_15 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VVerticalLayout_2_classLit, new WidgetMapImpl$36$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VVerticalLayout_2_classLit, new WidgetMapImpl$36$1_0);
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

function AsyncLoader24_0(){
}

function onLoad_15(){
  instance_16 = new AsyncLoader24_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 24);
  !!$stats && $stats($createStatsEvent('runCallbacks24', 'begin', -1, -1));
  instance_16.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks24', 'end', -1, -1));
}

function AsyncLoader24(){
}

_ = AsyncLoader24_0.prototype = AsyncLoader24.prototype = new Object_0;
_.getClass$ = function getClass_203(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader24_2_classLit;
}
;
_.runCallbacks = function runCallbacks_15(){
  $runCallbacks_15();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$36$1_0(){
}

function WidgetMapImpl$36$1(){
}

_ = WidgetMapImpl$36$1_0.prototype = WidgetMapImpl$36$1.prototype = new Object_0;
_.get = function get_29(){
  return new VVerticalLayout_0;
}
;
_.getClass$ = function getClass_527(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$36$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function VVerticalLayout_0(){
  $clinit_73();
  VOrderedLayout_1.call(this, 'v-verticallayout', 0);
}

function VVerticalLayout(){
}

_ = VVerticalLayout_0.prototype = VVerticalLayout.prototype = new VOrderedLayout;
_.getClass$ = function getClass_792(){
  return Lcom_vaadin_terminal_gwt_client_ui_VVerticalLayout_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader24_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader24'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$36$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$36$1');
$entry(onLoad_15)();
