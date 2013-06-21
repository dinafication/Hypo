function $runCallbacks_38(){
  var $e0, e, handler;
  while (callbacksHead_38) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_38 = callbacksHead_38.next;
    !callbacksHead_38 && (callbacksTail_38 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VUpload_2_classLit, new WidgetMapImpl$14$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VUpload_2_classLit, new WidgetMapImpl$14$1_0);
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

function AsyncLoader9_0(){
}

function onLoad_38(){
  instance_39 = new AsyncLoader9_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 9);
  !!$stats && $stats($createStatsEvent('runCallbacks9', 'begin', -1, -1));
  instance_39.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks9', 'end', -1, -1));
}

function AsyncLoader9(){
}

_ = AsyncLoader9_0.prototype = AsyncLoader9.prototype = new Object_0;
_.getClass$ = function getClass_273(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader9_2_classLit;
}
;
_.runCallbacks = function runCallbacks_38(){
  $runCallbacks_38();
}
;
_.castableTypeMap$ = {};
function FileUpload(){
}

_ = FileUpload.prototype = new Widget;
_.getClass$ = function getClass_320(){
  return Lcom_google_gwt_user_client_ui_FileUpload_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1};
function Hidden_0(){
  var e;
  this.element_0 = (e = $doc.createElement('INPUT') , e.type = 'hidden' , e);
}

function Hidden(){
}

_ = Hidden_0.prototype = Hidden.prototype = new Widget;
_.getClass$ = function getClass_336(){
  return Lcom_google_gwt_user_client_ui_Hidden_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1};
function WidgetMapImpl$14$1_0(){
}

function WidgetMapImpl$14$1(){
}

_ = WidgetMapImpl$14$1_0.prototype = WidgetMapImpl$14$1.prototype = new Object_0;
_.get = function get_5(){
  return new VUpload_0;
}
;
_.getClass$ = function getClass_503(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$14$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $hookEvents_0(iframe, upload){
  iframe.onload = function(){
    upload.onSubmitComplete();
  }
  ;
}

function $cleanTargetFrame(this$static){
  if (this$static.synthesizedFrame) {
    $doc.body.removeChild(this$static.synthesizedFrame);
    this$static.synthesizedFrame.onload = null;
    this$static.synthesizedFrame = null;
  }
}

function $disableUpload(this$static){
  $setEnabled_0(this$static.submitButton, false);
  this$static.submitted || (this$static.fu.element_0['disabled'] = true , undefined);
  this$static.enabled = false;
}

function $enableUpload(this$static){
  $setEnabled_0(this$static.submitButton, true);
  this$static.fu.element_0['disabled'] = false;
  this$static.enabled = true;
  if (this$static.submitted) {
    $cleanTargetFrame(this$static);
    this$static.submitted = false;
  }
}

function $ensureTargetFrame(this$static){
  var dummy;
  if (!this$static.synthesizedFrame) {
    dummy = $doc.createElement('div');
    dummy.innerHTML = "<iframe src=\"javascript:''\" name='" + this$static.paintableId + "_TGT_FRAME' style='position:absolute;width:0;height:0;border:0'>" || '';
    this$static.synthesizedFrame = $getFirstChildElement(dummy);
    $doc.body.appendChild(this$static.synthesizedFrame);
    this$static.element.target = this$static.paintableId + '_TGT_FRAME';
    $hookEvents_0(this$static.synthesizedFrame, this$static);
  }
}

function $rebuildPanel(this$static){
  $remove_2(this$static.panel, this$static.submitButton);
  $remove_2(this$static.panel, this$static.fu);
  this$static.fu = new VUpload$MyFileUpload_0(this$static);
  this$static.fu.element_0.name = this$static.paintableId + '_file';
  this$static.fu.element_0['disabled'] = !this$static.enabled;
  $add_4(this$static.panel, this$static.fu);
  $add_4(this$static.panel, this$static.submitButton);
  this$static.immediate && $sinkEvents_0(this$static.fu, 1024);
}

function $setImmediate(this$static, booleanAttribute){
  if (this$static.immediate != booleanAttribute) {
    this$static.immediate = booleanAttribute;
    if (this$static.immediate) {
      $sinkEvents_0(this$static.fu, 1024);
      $sinkEvents_0(this$static.fu, 2048);
    }
  }
  setStyleName(this$static.element_0, 'v-upload-immediate', this$static.immediate);
}

function $submit_0(this$static){
  if (this$static.fu.element_0.value.length == 0 || this$static.submitted || !this$static.enabled) {
    impl_2.log_0('Submit cancelled (disabled, no file or already submitted)');
    return;
  }
  $sendPendingVariableChanges(this$static.client);
  this$static.element.submit();
  this$static.submitted = true;
  impl_2.log_0('Submitted form');
  $disableUpload(this$static);
  this$static.t = new VUpload$3_0(this$static);
  $schedule(this$static.t, 800);
}

function VUpload_0(){
  this.element_0 = $doc.createElement('form');
  this.fu = new VUpload$MyFileUpload_0(this);
  this.panel = new FlowPanel_0;
  this.maxfilesize = new Hidden_0;
  this.element = this.element_0;
  setEncoding(this.element_0, 'multipart/form-data');
  this.element.method = 'post';
  $setWidget(this, this.panel);
  $add_4(this.panel, this.maxfilesize);
  $add_4(this.panel, this.fu);
  this.submitButton = new VButton_0;
  $addDomHandler(this.submitButton, new VUpload$1_0(this), ($clinit_15() , $clinit_15() , TYPE_1));
  $add_4(this.panel, this.submitButton);
  this.element_0['className'] = 'v-upload';
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
}

function setEncoding(form, encoding){
  form.enctype = encoding;
  form.encoding = encoding;
}

function VUpload(){
}

_ = VUpload_0.prototype = VUpload.prototype = new SimplePanel;
_.getClass$ = function getClass_786(){
  return Lcom_vaadin_terminal_gwt_client_ui_VUpload_2_classLit;
}
;
_.onAttach = function onAttach_14(){
  $onAttach(this);
  !!this.client && $ensureTargetFrame(this);
}
;
_.onBrowserEvent = function onBrowserEvent_49(event_0){
  ($eventGetTypeInt(event_0.type) & 241) > 0 && ($handleTooltipEvent(this.client.tooltip, event_0, this, null) , undefined);
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach_19(){
  $onDetach(this);
  this.submitted || $cleanTargetFrame(this);
}
;
_.onSubmitComplete = function onSubmitComplete(){
  $scheduleDeferred_0(($clinit_1() , INSTANCE), new VUpload$2_0(this));
}
;
_.updateFromUIDL = function updateFromUIDL_54(uidl, client){
  var action;
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  if ('notStarted' in uidl[1]) {
    $schedule(this.t, 400);
    return;
  }
  if ('forceSubmit' in uidl[1]) {
    $submit_0(this);
    return;
  }
  $setImmediate(this, Boolean(uidl[1]['immediate']));
  this.client = client;
  this.paintableId = uidl[1]['id'];
  this.nextUploadId = uidl[1]['nextid'];
  action = $translateVaadinUri(client, uidl[1]['v']['action']);
  this.element.action = action;
  if ('buttoncaption' in uidl[1]) {
    this.submitButton.captionElement.textContent = uidl[1]['buttoncaption'] || '';
    this.submitButton.element_0.style.display = '';
  }
   else {
    this.submitButton.element_0.style.display = 'none';
  }
  this.fu.element_0.name = this.paintableId + '_file';
  if ('disabled' in uidl[1] || 'readonly' in uidl[1]) {
    $disableUpload(this);
  }
   else if (!Boolean(uidl[1]['state'])) {
    $enableUpload(this);
    $ensureTargetFrame(this);
  }
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 26:1, 33:1, 69:1, 70:1, 75:1, 76:1};
_.client = null;
_.element = null;
_.enabled = true;
_.immediate = false;
_.nextUploadId = 0;
_.paintableId = null;
_.submitButton = null;
_.submitted = false;
_.synthesizedFrame = null;
_.t = null;
function VUpload$1_0(this$0){
  this.this$0 = this$0;
}

function VUpload$1(){
}

_ = VUpload$1_0.prototype = VUpload$1.prototype = new Object_0;
_.getClass$ = function getClass_787(){
  return Lcom_vaadin_terminal_gwt_client_ui_VUpload$1_2_classLit;
}
;
_.onClick = function onClick_28(event_0){
  this.this$0.immediate?(this.this$0.fu.element_0.click() , undefined):$submit_0(this.this$0);
}
;
_.castableTypeMap$ = {12:1, 39:1};
_.this$0 = null;
function VUpload$2_0(this$0){
  this.this$0 = this$0;
}

function VUpload$2(){
}

_ = VUpload$2_0.prototype = VUpload$2.prototype = new Object_0;
_.execute_0 = function execute_70(){
  if (this.this$0.submitted) {
    if (this.this$0.client) {
      !!this.this$0.t && $cancel_0(this.this$0.t);
      impl_2.log_0('VUpload:Submit complete');
      $sendPendingVariableChanges(this.this$0.client);
    }
    $rebuildPanel(this.this$0);
    this.this$0.submitted = false;
    $enableUpload(this.this$0);
    this.this$0.attached || $cleanTargetFrame(this.this$0);
  }
}
;
_.getClass$ = function getClass_788(){
  return Lcom_vaadin_terminal_gwt_client_ui_VUpload$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VUpload$3_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function VUpload$3(){
}

_ = VUpload$3_0.prototype = VUpload$3.prototype = new Timer;
_.getClass$ = function getClass_789(){
  return Lcom_vaadin_terminal_gwt_client_ui_VUpload$3_2_classLit;
}
;
_.run = function run_37(){
  impl_2.log_0('Visiting server to see if upload started event changed UI.');
  $addVariableToQueue(this.this$0.client, this.this$0.paintableId, 'pollForStart', '' + this.this$0.nextUploadId, true, 105);
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
function VUpload$MyFileUpload_0(this$0){
  var e;
  this.this$0 = this$0;
  this.element_0 = (e = $doc.createElement('INPUT') , e.type = 'file' , e);
  this.element_0['className'] = 'gwt-FileUpload';
}

function VUpload$MyFileUpload(){
}

_ = VUpload$MyFileUpload_0.prototype = VUpload$MyFileUpload.prototype = new FileUpload;
_.getClass$ = function getClass_790(){
  return Lcom_vaadin_terminal_gwt_client_ui_VUpload$MyFileUpload_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_50(event_0){
  $onBrowserEvent(this, event_0);
  if ($eventGetTypeInt(event_0.type) == 1024) {
    this.this$0.immediate && this.this$0.fu.element_0.value != null && !$equals_2('', this.this$0.fu.element_0.value) && $submit_0(this.this$0);
  }
   else if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && $eventGetTypeInt(event_0.type) == 2048) {
    this.this$0.fu.element_0.click();
    this.this$0.fu.element_0.blur();
  }
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1};
_.this$0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader9_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader9'), Lcom_google_gwt_user_client_ui_FileUpload_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FileUpload'), Lcom_google_gwt_user_client_ui_Hidden_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Hidden'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$14$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$14$1'), Lcom_vaadin_terminal_gwt_client_ui_VUpload$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VUpload$1'), Lcom_vaadin_terminal_gwt_client_ui_VUpload$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VUpload$2'), Lcom_vaadin_terminal_gwt_client_ui_VUpload$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VUpload$3'), Lcom_vaadin_terminal_gwt_client_ui_VUpload$MyFileUpload_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VUpload$MyFileUpload');
$entry(onLoad_38)();
