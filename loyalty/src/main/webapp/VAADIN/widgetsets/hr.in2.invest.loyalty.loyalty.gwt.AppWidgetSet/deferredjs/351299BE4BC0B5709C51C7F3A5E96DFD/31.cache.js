function $createInputRadioElement(doc, name_0){
  var elem = doc.createElement('INPUT');
  elem.type = 'radio';
  elem.name = name_0;
  elem.value = 'on';
  return elem;
}

function fireIfNotEqual(source, oldValue, newValue){
  var event_0;
  if (!!TYPE_20 && oldValue != newValue && (!oldValue || !(!!newValue && newValue.value_0 == oldValue.value_0))) {
    event_0 = new ValueChangeEvent_0(newValue);
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

function $runCallbacks_23(){
  var $e0, e, handler;
  while (callbacksHead_23) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_23 = callbacksHead_23.next;
    !callbacksHead_23 && (callbacksTail_23 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VOptionGroup_2_classLit, new WidgetMapImpl$45$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VOptionGroup_2_classLit, new WidgetMapImpl$45$1_0);
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

function AsyncLoader31_0(){
}

function onLoad_23(){
  instance_24 = new AsyncLoader31_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 31);
  !!$stats && $stats($createStatsEvent('runCallbacks31', 'begin', -1, -1));
  instance_24.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks31', 'end', -1, -1));
}

function AsyncLoader31(){
}

_ = AsyncLoader31_0.prototype = AsyncLoader31.prototype = new Object_0;
_.getClass$ = function getClass_227(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader31_2_classLit;
}
;
_.runCallbacks = function runCallbacks_23(){
  $runCallbacks_23();
}
;
_.castableTypeMap$ = {};
_ = Panel.prototype;
_.clear_0 = function clear(){
  $clear_0(this);
}
;
_ = DecoratedPopupPanel.prototype;
_.clear_0 = function clear_0(){
  $clear_0(this.decPanel);
}
;
_ = HTMLTable.prototype;
_.clear_0 = function clear_1(){
  $clear_1(this);
}
;
_ = FlowPanel.prototype;
_.clear_0 = function clear_2(){
  $clear_2(this);
}
;
function $sinkEvents_1(this$static, eventBitsToAdd){
  if (this$static.eventsToSink == -1) {
    sinkEvents_0(this$static.inputElem, eventBitsToAdd | (this$static.inputElem.__eventBits || 0));
    sinkEvents_0(this$static.labelElem, eventBitsToAdd | (this$static.labelElem.__eventBits || 0));
  }
   else {
    this$static.eventsToSink == -1?sinkEvents_0(this$static.inputElem, eventBitsToAdd | (this$static.inputElem.__eventBits || 0)):this$static.eventsToSink == -1?sinkEvents(this$static.element_0, eventBitsToAdd | (this$static.element_0.__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);
  }
}

function RadioButton_0(name_0, label){
  $clinit_42();
  CheckBox_2.call(this, $createInputRadioElement($doc, name_0));
  this.element_0['className'] = 'gwt-RadioButton';
  $sinkEvents_1(this, 1);
  $sinkEvents_1(this, 8);
  $sinkEvents_1(this, 4096);
  $sinkEvents_1(this, 128);
  $setTextOrHtml(this.directionalTextHelper, label, true);
}

function RadioButton(){
}

_ = RadioButton_0.prototype = RadioButton.prototype = new CheckBox;
_.getClass$ = function getClass_359(){
  return Lcom_google_gwt_user_client_ui_RadioButton_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_5(event_0){
  var target;
  switch ($eventGetTypeInt(event_0.type)) {
    case 8:
    case 4096:
    case 128:
      this.oldValue = this.attached?($clinit_95() , this.inputElem.checked?TRUE:FALSE):($clinit_95() , this.inputElem.defaultChecked?TRUE:FALSE);
      break;
    case 1:
      target = event_0.target;
      if (is_0(target) && $isOrHasChild(this.labelElem, target)) {
        this.oldValue = this.attached?($clinit_95() , this.inputElem.checked?TRUE:FALSE):($clinit_95() , this.inputElem.defaultChecked?TRUE:FALSE);
        return;
      }

      $onBrowserEvent(this, event_0);
      fireIfNotEqual(this, this.oldValue, this.attached?($clinit_95() , this.inputElem.checked?TRUE:FALSE):($clinit_95() , this.inputElem.defaultChecked?TRUE:FALSE));
      return;
  }
  $onBrowserEvent(this, event_0);
}
;
_.sinkEvents = function sinkEvents_3(eventBitsToAdd){
  $sinkEvents_1(this, eventBitsToAdd);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1, 161:1};
_.oldValue = null;
function WidgetMapImpl$45$1_0(){
}

function WidgetMapImpl$45$1(){
}

_ = WidgetMapImpl$45$1_0.prototype = WidgetMapImpl$45$1.prototype = new Object_0;
_.get = function get_39(){
  return new VOptionGroup_0;
}
;
_.getClass$ = function getClass_537(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$45$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
_ = VCustomLayout.prototype;
_.clear_0 = function clear_3(){
  $clear_0(this);
  this.locationToWidget.clear_0();
  this.widgetToCaptionWrapper.clear_0();
}
;
function VOptionGroup_0(){
  VOptionGroupBase_0.call(this, 'v-select-optiongroup');
  this.iconLoadHandler = new VOptionGroup$1_0(this);
  this.panel = dynamicCast(this.optionsContainer, 75);
  this.optionsToKeys = new HashMap_0;
}

function VOptionGroup(){
}

_ = VOptionGroup_0.prototype = VOptionGroup.prototype = new VOptionGroupBase;
_.buildOptions = function buildOptions_1(uidl){
  var enabled, icon, iconUrl, it, itemHtml, op, opUidl, count;
  this.panel.clear_0();
  for (it = new UIDL$1_0(uidl); count = it.this$0.length - 2 , count > it.index_0 + 1;) {
    opUidl = dynamicCastJso($next_3(it));
    itemHtml = opUidl[1]['caption'];
    this.htmlContentAllowed || (itemHtml = escapeHTML(itemHtml));
    icon = opUidl[1]['icon'];
    if (icon != null && icon.length != 0) {
      iconUrl = $translateVaadinUri(this.client, icon);
      itemHtml = '<img src="' + iconUrl + '" class="v-icon" alt="" />' + itemHtml;
    }
    if (this.multiselect) {
      op = new VCheckBox_0;
      $setTextOrHtml(op.directionalTextHelper, itemHtml, true);
    }
     else {
      op = new RadioButton_0(this.id_0, itemHtml);
      op.element_0['className'] = 'v-radiobutton';
    }
    if (icon != null && icon.length != 0) {
      sinkOnloadForImages(op.element_0);
      $addHandler(op, this.iconLoadHandler, ($clinit_22() , $clinit_22() , TYPE_8));
    }
    setStyleName(op.element_0, 'v-select-option', true);
    $setValue(op, ($clinit_95() , Boolean(opUidl[1]['selected'])?TRUE:FALSE));
    enabled = !Boolean(opUidl[1]['disabled']) && !this.readonly && !this.disabled_0;
    op.inputElem.disabled = !enabled;
    enabled?$setStyleName(op, getStylePrimaryName(op.element_0) + '-disabled', false):$setStyleName(op, getStylePrimaryName(op.element_0) + '-disabled', true);
    setStyleName(op.element_0, 'v-disabled', !enabled);
    $addDomHandler(op, this, ($clinit_15() , $clinit_15() , TYPE_1));
    this.optionsToKeys.put(op, opUidl[1]['key']);
    this.panel.add_1(op);
  }
}
;
_.focus_0 = function focus_13(){
  var iterator;
  iterator = this.panel.iterator_0();
  iterator.hasNext() && dynamicCast(iterator.next_0(), 122).setFocus(true);
}
;
_.getClass$ = function getClass_665(){
  return Lcom_vaadin_terminal_gwt_client_ui_VOptionGroup_2_classLit;
}
;
_.getSelectedItems = function getSelectedItems_1(){
  return dynamicCast($toArray(this.selectedKeys, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, this.selectedKeys.map.size_1(), 0)), 59);
}
;
_.onBlur = function onBlur_8(arg0){
  this.blurOccured = true;
  this.sendBlurEvents && $scheduleDeferred_0(($clinit_1() , INSTANCE), new VOptionGroup$2_0(this));
}
;
_.onClick = function onClick_23(event_0){
  var key, selected;
  $onClick_0(this, event_0);
  if (instanceOf(event_0.source, 161)) {
    selected = $getValue(dynamicCast(event_0.source, 161)).value_0;
    key = dynamicCast(this.optionsToKeys.get_0(event_0.source), 1);
    this.multiselect || this.selectedKeys.map.clear_0();
    selected?$add_14(this.selectedKeys, key):this.selectedKeys.map.remove_4(key) != null;
    $updateVariable_2(this.client, this.id_0, 'selected', dynamicCast($toArray(this.selectedKeys, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, this.selectedKeys.map.size_1(), 0)), 59), this.immediate);
  }
}
;
_.onFocus = function onFocus_8(arg0){
  this.blurOccured?(this.blurOccured = false):this.sendFocusEvents && ($addVariableToQueue(this.client, this.id_0, 'focus', $escapeVariableValue(''), true, 115) , undefined);
}
;
_.setTabIndex = function setTabIndex_9(tabIndex){
  var iterator, widget;
  for (iterator = this.panel.iterator_0(); iterator.hasNext();) {
    widget = dynamicCast(iterator.next_0(), 123);
    widget.setTabIndex(tabIndex);
  }
}
;
_.updateFromUIDL = function updateFromUIDL_38(uidl, client){
  var reg, reg$iterator, wid, wid$iterator;
  this.htmlContentAllowed = 'usehtml' in uidl[1];
  $updateFromUIDL(this, uidl, client);
  this.sendFocusEvents = $hasEventListeners_0(client.idToPaintableDetail[this.element_0.tkPid], 'focus');
  this.sendBlurEvents = $hasEventListeners_0(client.idToPaintableDetail[this.element_0.tkPid], 'blur');
  if (this.focusHandlers) {
    for (reg$iterator = new AbstractList$IteratorImpl_0(this.focusHandlers); reg$iterator.i < reg$iterator.this$0_0.size_1();) {
      reg = dynamicCast($next_5(reg$iterator), 160);
      $removeHandler(reg.real);
    }
    $clear_6(this.focusHandlers);
    this.focusHandlers = null;
    for (reg$iterator = new AbstractList$IteratorImpl_0(this.blurHandlers); reg$iterator.i < reg$iterator.this$0_0.size_1();) {
      reg = dynamicCast($next_5(reg$iterator), 160);
      $removeHandler(reg.real);
    }
    $clear_6(this.blurHandlers);
    this.blurHandlers = null;
  }
  if (this.sendFocusEvents || this.sendBlurEvents) {
    this.focusHandlers = new ArrayList_0;
    this.blurHandlers = new ArrayList_0;
    for (wid$iterator = this.panel.iterator_0(); wid$iterator.hasNext();) {
      wid = dynamicCast(wid$iterator.next_0(), 70);
      if (wid != null && wid.castableTypeMap$ && !!wid.castableTypeMap$[161]) {
        $add_12(this.focusHandlers, $addDomHandler(dynamicCast(wid, 161), this, ($clinit_18() , $clinit_18() , TYPE_4)));
        $add_12(this.blurHandlers, $addDomHandler(dynamicCast(wid, 161), this, ($clinit_13() , $clinit_13() , TYPE)));
      }
    }
  }
}
;
_.castableTypeMap$ = {5:1, 6:1, 10:1, 12:1, 13:1, 15:1, 22:1, 25:1, 26:1, 38:1, 39:1, 43:1, 69:1, 70:1, 124:1};
_.blurHandlers = null;
_.blurOccured = false;
_.focusHandlers = null;
_.htmlContentAllowed = false;
_.optionsToKeys = null;
_.panel = null;
_.sendBlurEvents = false;
_.sendFocusEvents = false;
function VOptionGroup$1_0(this$0){
  this.this$0 = this$0;
}

function VOptionGroup$1(){
}

_ = VOptionGroup$1_0.prototype = VOptionGroup$1.prototype = new Object_0;
_.getClass$ = function getClass_666(){
  return Lcom_vaadin_terminal_gwt_client_ui_VOptionGroup$1_2_classLit;
}
;
_.onLoad = function onLoad_47(event_0){
  $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && doIE6PngFix(event_0.nativeEvent.target);
  notifyParentOfSizeChange(this.this$0, true);
}
;
_.castableTypeMap$ = {12:1, 45:1};
_.this$0 = null;
function VOptionGroup$2_0(this$0){
  this.this$0 = this$0;
}

function VOptionGroup$2(){
}

_ = VOptionGroup$2_0.prototype = VOptionGroup$2.prototype = new Object_0;
_.execute_0 = function execute_40(){
  if (this.this$0.blurOccured) {
    $addVariableToQueue(this.this$0.client, this.this$0.id_0, 'blur', $escapeVariableValue(''), true, 115);
    this.this$0.blurOccured = false;
  }
}
;
_.getClass$ = function getClass_667(){
  return Lcom_vaadin_terminal_gwt_client_ui_VOptionGroup$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
_ = VScrollTable$TableFooter.prototype;
_.clear_0 = function clear_4(){
  $clear_4(this);
}
;
_ = VScrollTable$TableHead.prototype;
_.clear_0 = function clear_5(){
  $clear_5(this);
}
;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader31_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader31'), Lcom_google_gwt_user_client_ui_RadioButton_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RadioButton'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$45$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$45$1'), Lcom_vaadin_terminal_gwt_client_ui_VOptionGroup$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VOptionGroup$1'), Lcom_vaadin_terminal_gwt_client_ui_VOptionGroup$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VOptionGroup$2');
$entry(onLoad_23)();
