function $runCallbacks_29(){
  var $e0, e, handler;
  while (callbacksHead_29) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_29 = callbacksHead_29.next;
    !callbacksHead_29 && (callbacksTail_29 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VTextArea_2_classLit, new WidgetMapImpl$51$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VTextArea_2_classLit, new WidgetMapImpl$51$1_0);
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

function AsyncLoader37_0(){
}

function onLoad_29(){
  instance_30 = new AsyncLoader37_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 37);
  !!$stats && $stats($createStatsEvent('runCallbacks37', 'begin', -1, -1));
  instance_30.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks37', 'end', -1, -1));
}

function AsyncLoader37(){
}

_ = AsyncLoader37_0.prototype = AsyncLoader37.prototype = new Object_0;
_.getClass$ = function getClass_245(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader37_2_classLit;
}
;
_.runCallbacks = function runCallbacks_29(){
  $runCallbacks_29();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$51$1_0(){
}

function WidgetMapImpl$51$1(){
}

_ = WidgetMapImpl$51$1_0.prototype = WidgetMapImpl$51$1.prototype = new Object_0;
_.get = function get_46(){
  return new VTextArea_0;
}
;
_.getClass$ = function getClass_544(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$51$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $setRows(e_0, r){
  try {
    e_0.tagName.toLowerCase() == 'textarea' && (e_0.rows = r);
  }
   catch (e) {
  }
}

function VTextArea_0(){
  $clinit_51();
  VTextField_1.call(this, $doc.createElement('textarea'));
  this.element_0['className'] = 'v-textarea';
}

function VTextArea(){
}

_ = VTextArea_0.prototype = VTextArea.prototype = new VTextField;
_.getClass$ = function getClass_755(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTextArea_2_classLit;
}
;
_.getCursorPos = function getCursorPos_0(){
  return $getCursorPos(this.element_0);
}
;
_.onBrowserEvent = function onBrowserEvent_44(event_0){
  this.maxLength >= 0 && $eventGetTypeInt(event_0.type) == 512 && $scheduleDeferred_0(($clinit_1() , INSTANCE), new VTextArea$1_0(this));
  $onBrowserEvent_1(this, event_0);
}
;
_.updateFromUIDL = function updateFromUIDL_49(uidl, client){
  $updateFromUIDL_0(this, uidl, client);
  'rows' in uidl[1] && ($setRows(this.element_0, uidl[1]['rows']) , undefined);
  this.maxLength >= 0 && (this.eventsToSink == -1?sinkEvents(this.element_0, 512 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 512));
}
;
_.castableTypeMap$ = {5:1, 6:1, 7:1, 10:1, 12:1, 13:1, 15:1, 22:1, 26:1, 28:1, 38:1, 69:1, 70:1, 122:1, 123:1, 124:1, 131:1, 132:1, 170:1};
function VTextArea$1_0(this$0){
  this.this$0 = this$0;
}

function VTextArea$1(){
}

_ = VTextArea$1_0.prototype = VTextArea$1.prototype = new Object_0;
_.execute_0 = function execute_61(){
  $getPropertyString(this.this$0.element_0, 'value').length > this.this$0.maxLength && $setText_0(this.this$0, $getPropertyString(this.this$0.element_0, 'value').substr(0, this.this$0.maxLength - 0));
}
;
_.getClass$ = function getClass_756(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTextArea$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader37_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader37'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$51$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$51$1'), Lcom_vaadin_terminal_gwt_client_ui_VTextArea$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTextArea$1');
$entry(onLoad_29)();
