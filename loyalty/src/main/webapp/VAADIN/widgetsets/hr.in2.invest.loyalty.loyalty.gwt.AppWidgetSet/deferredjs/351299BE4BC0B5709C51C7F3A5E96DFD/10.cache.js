function $runCallbacks_0(){
  var $e0, e, handler;
  while (callbacksHead_0) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_0 = callbacksHead_0.next;
    !callbacksHead_0 && (callbacksTail_0 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VNativeSelect_2_classLit, new WidgetMapImpl$16$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VNativeSelect_2_classLit, new WidgetMapImpl$16$1_0);
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

function AsyncLoader10_0(){
}

function onLoad_0(){
  instance_1 = new AsyncLoader10_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 10);
  !!$stats && $stats($createStatsEvent('runCallbacks10', 'begin', -1, -1));
  instance_1.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks10', 'end', -1, -1));
}

function AsyncLoader10(){
}

_ = AsyncLoader10_0.prototype = AsyncLoader10.prototype = new Object_0;
_.getClass$ = function getClass_158(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader10_2_classLit;
}
;
_.runCallbacks = function runCallbacks_0(){
  $runCallbacks_0();
}
;
_.castableTypeMap$ = {};
function $removeItem(this$static){
  $checkIndex(this$static, 0);
  this$static.element_0.remove(0);
}

function $getSelectedItems(this$static){
  var i, selectedItemKeys;
  selectedItemKeys = new ArrayList_0;
  for (i = 0; i < this$static.select.element_0.options.length; ++i) {
    $isItemSelected(this$static.select, i) && $add_12(selectedItemKeys, $getValue_0(this$static.select, i));
  }
  return dynamicCast($toArray_1(selectedItemKeys, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, selectedItemKeys.size_0, 0)), 59);
}

function VNativeSelect(){
}

_ = VNativeSelect.prototype = new VOptionGroupBase;
_.buildOptions = function buildOptions(uidl){
  var i, optionUidl, selected, count;
  this.select.client = this.client;
  this.select.element_0['disabled'] = !(!this.disabled_0 && !this.readonly);
  this.select.element_0.options.length = 0;
  this.firstValueIsTemporaryNullItem = false;
  this.nullSelectionAllowed && !this.nullSelectionItemAvailable && $insertItem(this.select, '', null, -1);
  selected = false;
  for (i = new UIDL$1_0(uidl); count = i.this$0.length - 2 , count > i.index_0 + 1;) {
    optionUidl = dynamicCastJso($next_3(i));
    $insertItem(this.select, optionUidl[1]['caption'], optionUidl[1]['key'], -1);
    if ('selected' in optionUidl[1]) {
      $setItemSelected(this.select, this.select.element_0.options.length - 1, true);
      selected = true;
    }
  }
  if (!selected && !this.nullSelectionAllowed) {
    $insertItem(this.select, '', null, 0);
    $setItemSelected(this.select, 0, true);
    this.firstValueIsTemporaryNullItem = true;
  }
  $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && notifyParentOfSizeChange(this, true);
}
;
_.focus_0 = function focus_4(){
  $setFocus(this.select, true);
}
;
_.getClass$ = function getClass_393(){
  return Lcom_vaadin_terminal_gwt_client_ui_VNativeSelect_2_classLit;
}
;
_.getSelectedItems = function getSelectedItems(){
  return $getSelectedItems(this);
}
;
_.onChange = function onChange_0(event_0){
  var sel;
  this.select.element_0.multiple?$updateVariable_2(this.client, this.id_0, 'selected', $getSelectedItems(this), this.immediate):$updateVariable_2(this.client, this.id_0, 'selected', initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['' + (sel = this.getSelectedItems() , sel.length > 0?sel[0]:null)]), this.immediate);
  if (this.firstValueIsTemporaryNullItem) {
    $removeItem(this.select);
    this.firstValueIsTemporaryNullItem = false;
  }
}
;
_.setHeight = function setHeight_1(height){
  this.select.element_0.style['height'] = height;
  this.element_0.style['height'] = height;
}
;
_.setTabIndex = function setTabIndex_2(tabIndex){
  dynamicCast(this.optionsContainer, 154).element_0.tabIndex = tabIndex;
}
;
_.setWidth = function setWidth_1(width){
  this.select.element_0.style['width'] = width;
  this.element_0.style['width'] = width;
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 22:1, 25:1, 26:1, 38:1, 39:1, 43:1, 69:1, 70:1, 124:1};
_.firstValueIsTemporaryNullItem = false;
_.select = null;
function VCustomNativeSelect_0(){
  VOptionGroupBase_1.call(this, new TooltipListBox_0(false));
  this.select = dynamicCast(this.optionsContainer, 154);
  this.select.pntbl = this;
  this.select.element_0.size = 1;
  $addDomHandler(this.select, this, ($clinit_14() , $clinit_14() , TYPE_0));
  this.select.getStyleElement()['className'] = 'v-select-select';
}

function VCustomNativeSelect(){
}

_ = VCustomNativeSelect_0.prototype = VCustomNativeSelect.prototype = new VNativeSelect;
_.getClass$ = function getClass_394(){
  return Lcom_vaadin_addon_touchkit_gwt_client_VCustomNativeSelect_2_classLit;
}
;
_.updateFromUIDL = function updateFromUIDL_0(uidl, client){
  var w;
  $updateFromUIDL(this, uidl, client);
  if ($wnd.navigator.userAgent.toLowerCase().indexOf('android 2') != -1) {
    w = this;
    while (w = w.getParent()) {
      if (w != null && w.castableTypeMap$ && !!w.castableTypeMap$[83]) {
        $forceRerender(dynamicCast(w, 83));
        break;
      }
    }
  }
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 22:1, 25:1, 26:1, 38:1, 39:1, 43:1, 69:1, 70:1, 124:1};
function $forceRerender(this$static){
  var oldWidth;
  if (rerendering) {
    return;
  }
  rerendering = true;
  oldWidth = this$static.width_0;
  $setWidth_2(this$static, '100px');
  scheduleFixedDelayImpl(($clinit_1() , new VNavigationManager$2_0(this$static, oldWidth)), 50);
}

var rerendering = false;
function VNavigationManager$2_0(this$0, val$oldWidth){
  this.this$0 = this$0;
  this.val$oldWidth = val$oldWidth;
}

function VNavigationManager$2(){
}

_ = VNavigationManager$2_0.prototype = VNavigationManager$2.prototype = new Object_0;
_.execute = function execute_12(){
  $equals_2('', this.val$oldWidth) || this.val$oldWidth == null?$setWidth_2(this.this$0, '100%'):$setWidth_2(this.this$0, this.val$oldWidth);
  rerendering = false;
  return false;
}
;
_.getClass$ = function getClass_402(){
  return Lcom_vaadin_addon_touchkit_gwt_client_VNavigationManager$2_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
_.val$oldWidth = null;
function WidgetMapImpl$16$1_0(){
}

function WidgetMapImpl$16$1(){
}

_ = WidgetMapImpl$16$1_0.prototype = WidgetMapImpl$16$1.prototype = new Object_0;
_.get = function get_7(){
  return new VCustomNativeSelect_0;
}
;
_.getClass$ = function getClass_505(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$16$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader10_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader10'), Lcom_vaadin_addon_touchkit_gwt_client_VCustomNativeSelect_2_classLit = createForClass('com.vaadin.addon.touchkit.gwt.client.', 'VCustomNativeSelect'), Lcom_vaadin_addon_touchkit_gwt_client_VNavigationManager$2_2_classLit = createForClass('com.vaadin.addon.touchkit.gwt.client.', 'VNavigationManager$2'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$16$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$16$1');
$entry(onLoad_0)();
