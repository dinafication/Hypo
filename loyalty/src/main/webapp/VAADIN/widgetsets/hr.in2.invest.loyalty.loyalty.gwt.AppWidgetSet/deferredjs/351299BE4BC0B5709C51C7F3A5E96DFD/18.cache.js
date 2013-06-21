function $runCallbacks_8(){
  var $e0, e, handler;
  while (callbacksHead_8) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_8 = callbacksHead_8.next;
    !callbacksHead_8 && (callbacksTail_8 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar_2_classLit, new WidgetMapImpl$27$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar_2_classLit, new WidgetMapImpl$27$1_0);
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

function AsyncLoader18_0(){
}

function onLoad_8(){
  instance_9 = new AsyncLoader18_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 18);
  !!$stats && $stats($createStatsEvent('runCallbacks18', 'begin', -1, -1));
  instance_9.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks18', 'end', -1, -1));
}

function AsyncLoader18(){
}

_ = AsyncLoader18_0.prototype = AsyncLoader18.prototype = new Object_0;
_.getClass$ = function getClass_182(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader18_2_classLit;
}
;
_.runCallbacks = function runCallbacks_8(){
  $runCallbacks_8();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$27$1_0(){
}

function WidgetMapImpl$27$1(){
}

_ = WidgetMapImpl$27$1_0.prototype = WidgetMapImpl$27$1.prototype = new Object_0;
_.get = function get_19(){
  return new VDateFieldCalendar_0;
}
;
_.getClass$ = function getClass_517(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$27$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $updateValueFromPanel(this$static){
  var currentDate, date2;
  date2 = this$static.calendarPanel.value_0;
  currentDate = this$static.date;
  if (!currentDate || neq(fromDouble(date2.jsdate.getTime()), fromDouble(currentDate.jsdate.getTime()))) {
    this$static.date = new Date_3(fromDouble(date2.jsdate.getTime()));
    $addVariableToQueue(this$static.client, this$static.id_0, 'year', '' + (date2.jsdate.getFullYear() - 1900 + 1900), false, 105);
    if (this$static.currentResolution > 1) {
      $addVariableToQueue(this$static.client, this$static.id_0, 'month', '' + (date2.jsdate.getMonth() + 1), false, 105);
      if (this$static.currentResolution > 2) {
        $addVariableToQueue(this$static.client, this$static.id_0, 'day', '' + date2.jsdate.getDate(), false, 105);
        if (this$static.currentResolution > 4) {
          $addVariableToQueue(this$static.client, this$static.id_0, 'hour', '' + date2.jsdate.getHours(), false, 105);
          if (this$static.currentResolution > 8) {
            $addVariableToQueue(this$static.client, this$static.id_0, 'min', '' + date2.jsdate.getMinutes(), false, 105);
            if (this$static.currentResolution > 16) {
              $addVariableToQueue(this$static.client, this$static.id_0, 'sec', '' + date2.jsdate.getSeconds(), false, 105);
              this$static.currentResolution > 32 && $addVariableToQueue(this$static.client, this$static.id_0, 'msec', '' + getMilliseconds(date2), false, 105);
            }
          }
        }
      }
    }
    this$static.immediate && $sendPendingVariableChanges(this$static.client);
  }
}

function VDateFieldCalendar_0(){
  VDateField_0.call(this);
  this.calendarPanel = new VCalendarPanel_0;
  $add_0(this, this.calendarPanel, this.element_0);
  this.calendarPanel.submitListener = new VDateFieldCalendar$1_0(this);
  this.calendarPanel.focusOutListener = new VDateFieldCalendar$2_0(this);
}

function VDateFieldCalendar(){
}

_ = VDateFieldCalendar_0.prototype = VDateFieldCalendar.prototype = new VDateField;
_.getClass$ = function getClass_609(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar_2_classLit;
}
;
_.updateFromUIDL = function updateFromUIDL_25(uidl, client){
  var currentDate;
  $updateFromUIDL_12(this, uidl, client);
  this.calendarPanel.showISOWeekNumbers = this.showISOWeekNumbers;
  this.calendarPanel.dateTimeService = this.dts;
  $setResolution(this.calendarPanel, this.currentResolution);
  currentDate = this.date;
  currentDate?$setDate_0(this.calendarPanel, new Date_3(fromDouble(currentDate.jsdate.getTime()))):$setDate_0(this.calendarPanel, null);
  this.currentResolution > 4 && (this.calendarPanel.timeChangeListener = new VDateFieldCalendar$3_0(this) , undefined);
  this.currentResolution <= 2?(this.calendarPanel.focusChangeListener = new VDateFieldCalendar$4_0(this) , undefined):(this.calendarPanel.focusChangeListener = null , undefined);
  $renderCalendar(this.calendarPanel);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 26:1, 33:1, 69:1, 70:1, 75:1, 115:1, 124:1};
_.calendarPanel = null;
function VDateFieldCalendar$1_0(this$0){
  this.this$0 = this$0;
}

function VDateFieldCalendar$1(){
}

_ = VDateFieldCalendar$1_0.prototype = VDateFieldCalendar$1.prototype = new Object_0;
_.getClass$ = function getClass_610(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar$1_2_classLit;
}
;
_.onCancel = function onCancel_1(){
}
;
_.onSubmit = function onSubmit(){
  $updateValueFromPanel(this.this$0);
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VDateFieldCalendar$2_0(this$0){
  this.this$0 = this$0;
}

function VDateFieldCalendar$2(){
}

_ = VDateFieldCalendar$2_0.prototype = VDateFieldCalendar$2.prototype = new Object_0;
_.getClass$ = function getClass_611(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar$2_2_classLit;
}
;
_.onFocusOut = function onFocusOut(event_0){
  $updateValueFromPanel(this.this$0);
  return false;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VDateFieldCalendar$3_0(this$0){
  this.this$0 = this$0;
}

function VDateFieldCalendar$3(){
}

_ = VDateFieldCalendar$3_0.prototype = VDateFieldCalendar$3.prototype = new Object_0;
_.changed = function changed_0(hour, min, sec, msec){
  var d;
  d = $getDate(this.this$0);
  !d && (d = new Date_3(fromDouble(this.this$0.calendarPanel.value_0.jsdate.getTime())));
  d.setHours_0(hour);
  d.setMinutes_0(min);
  d.setSeconds_0(sec);
  $clinit_65();
  $setTime(d, add_0(mul(divMod(fromDouble(d.jsdate.getTime()), P3e8_longLit, false), P3e8_longLit), fromInt(msec)));
  $setDate_0(this.this$0.calendarPanel, d);
  $updateValueFromPanel(this.this$0);
}
;
_.getClass$ = function getClass_612(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar$3_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VDateFieldCalendar$4_0(this$0){
  this.this$0 = this$0;
}

function VDateFieldCalendar$4(){
}

_ = VDateFieldCalendar$4_0.prototype = VDateFieldCalendar$4.prototype = new Object_0;
_.focusChanged = function focusChanged(date){
  var date2;
  date2 = new Date_1;
  !!this.this$0.calendarPanel.value_0 && $setTime(date2, fromDouble(this.this$0.calendarPanel.value_0.jsdate.getTime()));
  date2.setYear(date.jsdate.getFullYear() - 1900);
  date2.setMonth_0(date.jsdate.getMonth());
  $setDate_0(this.this$0.calendarPanel, date2);
  $updateValueFromPanel(this.this$0);
}
;
_.getClass$ = function getClass_613(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar$4_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader18_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader18'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$27$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$27$1'), Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDateFieldCalendar$1'), Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDateFieldCalendar$2'), Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDateFieldCalendar$3'), Lcom_vaadin_terminal_gwt_client_ui_VDateFieldCalendar$4_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDateFieldCalendar$4');
$entry(onLoad_8)();
