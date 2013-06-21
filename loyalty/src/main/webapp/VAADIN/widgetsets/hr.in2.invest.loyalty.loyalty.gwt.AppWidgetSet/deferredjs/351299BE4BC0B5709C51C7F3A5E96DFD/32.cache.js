function $runCallbacks_24(){
  var $e0, e, handler;
  while (callbacksHead_24) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_24 = callbacksHead_24.next;
    !callbacksHead_24 && (callbacksTail_24 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VHorizontalLayout_2_classLit, new WidgetMapImpl$46$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VHorizontalLayout_2_classLit, new WidgetMapImpl$46$1_0);
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

function AsyncLoader32_0(){
}

function onLoad_24(){
  instance_25 = new AsyncLoader32_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 32);
  !!$stats && $stats($createStatsEvent('runCallbacks32', 'begin', -1, -1));
  instance_25.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks32', 'end', -1, -1));
}

function AsyncLoader32(){
}

_ = AsyncLoader32_0.prototype = AsyncLoader32.prototype = new Object_0;
_.getClass$ = function getClass_230(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader32_2_classLit;
}
;
_.runCallbacks = function runCallbacks_24(){
  $runCallbacks_24();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$46$1_0(){
}

function WidgetMapImpl$46$1(){
}

_ = WidgetMapImpl$46$1_0.prototype = WidgetMapImpl$46$1.prototype = new Object_0;
_.get = function get_40(){
  return new VHorizontalLayout_0;
}
;
_.getClass$ = function getClass_538(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$46$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function VHorizontalLayout_0(){
  $clinit_73();
  VOrderedLayout_1.call(this, 'v-horizontallayout', 1);
}

function VHorizontalLayout(){
}

_ = VHorizontalLayout_0.prototype = VHorizontalLayout.prototype = new VOrderedLayout;
_.getClass$ = function getClass_646(){
  return Lcom_vaadin_terminal_gwt_client_ui_VHorizontalLayout_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader32_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader32'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$46$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$46$1');
$entry(onLoad_24)();
