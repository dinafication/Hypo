function $runCallbacks_1(){
  var $e0, e, handler;
  while (callbacksHead_1) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_1 = callbacksHead_1.next;
    !callbacksHead_1 && (callbacksTail_1 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VListSelect_2_classLit, new WidgetMapImpl$17$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VListSelect_2_classLit, new WidgetMapImpl$17$1_0);
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

function AsyncLoader11_0(){
}

function onLoad_1(){
  instance_2 = new AsyncLoader11_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 11);
  !!$stats && $stats($createStatsEvent('runCallbacks11', 'begin', -1, -1));
  instance_2.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks11', 'end', -1, -1));
}

function AsyncLoader11(){
}

_ = AsyncLoader11_0.prototype = AsyncLoader11.prototype = new Object_0;
_.getClass$ = function getClass_161(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader11_2_classLit;
}
;
_.runCallbacks = function runCallbacks_1(){
  $runCallbacks_1();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$17$1_0(){
}

function WidgetMapImpl$17$1(){
}

_ = WidgetMapImpl$17$1_0.prototype = WidgetMapImpl$17$1.prototype = new Object_0;
_.get = function get_8(){
  return new VListSelect_0;
}
;
_.getClass$ = function getClass_506(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$17$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $getSelectedItems_0(this$static){
  var i, selectedItemKeys;
  selectedItemKeys = new ArrayList_0;
  for (i = 0; i < this$static.select.element_0.options.length; ++i) {
    $isItemSelected(this$static.select, i) && $add_12(selectedItemKeys, $getValue_0(this$static.select, i));
  }
  return dynamicCast($toArray_1(selectedItemKeys, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, selectedItemKeys.size_0, 0)), 59);
}

function VListSelect_0(){
  VOptionGroupBase_1.call(this, new TooltipListBox_0(true));
  this.select = dynamicCast(this.optionsContainer, 154);
  this.select.pntbl = this;
  $addDomHandler(this.select, this, ($clinit_14() , $clinit_14() , TYPE_0));
  $addDomHandler(this.select, this, ($clinit_15() , $clinit_15() , TYPE_1));
  this.select.getStyleElement()['className'] = 'v-select-select';
  this.select.element_0.size = 10;
}

function VListSelect(){
}

_ = VListSelect_0.prototype = VListSelect.prototype = new VOptionGroupBase;
_.buildOptions = function buildOptions_0(uidl){
  var i, itemIndex, optionUidl, count;
  this.select.client = this.client;
  this.select.element_0.multiple = this.multiselect;
  this.select.element_0['disabled'] = !(!this.disabled_0 && !this.readonly);
  this.select.element_0.options.length = 0;
  !this.multiselect && this.nullSelectionAllowed && !this.nullSelectionItemAvailable && $insertItem(this.select, '', null, -1);
  for (i = new UIDL$1_0(uidl); count = i.this$0.length - 2 , count > i.index_0 + 1;) {
    optionUidl = dynamicCastJso($next_3(i));
    $insertItem(this.select, optionUidl[1]['caption'], optionUidl[1]['key'], -1);
    if ('selected' in optionUidl[1]) {
      itemIndex = this.select.element_0.options.length - 1;
      $setItemSelected(this.select, itemIndex, true);
      this.lastSelectedIndex = itemIndex;
    }
  }
  this.rows_0 > 0 && (this.select.element_0.size = this.rows_0 , undefined);
}
;
_.focus_0 = function focus_12(){
  $setFocus(this.select, true);
}
;
_.getClass$ = function getClass_651(){
  return Lcom_vaadin_terminal_gwt_client_ui_VListSelect_2_classLit;
}
;
_.getSelectedItems = function getSelectedItems_0(){
  return $getSelectedItems_0(this);
}
;
_.onChange = function onChange_3(event_0){
  var si, sel;
  si = this.select.element_0.selectedIndex;
  if (si == -1 && !this.nullSelectionAllowed) {
    this.select.element_0.selectedIndex = this.lastSelectedIndex;
  }
   else {
    this.lastSelectedIndex = si;
    this.multiselect?$updateVariable_2(this.client, this.id_0, 'selected', $getSelectedItems_0(this), this.immediate):$updateVariable_2(this.client, this.id_0, 'selected', initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['' + (sel = this.getSelectedItems() , sel.length > 0?sel[0]:null)]), this.immediate);
  }
}
;
_.setHeight = function setHeight_19(height){
  this.select.element_0.style['height'] = height;
  this.element_0.style['height'] = height;
}
;
_.setTabIndex = function setTabIndex_8(tabIndex){
  dynamicCast(this.optionsContainer, 154).element_0.tabIndex = tabIndex;
}
;
_.setWidth = function setWidth_25(width){
  this.select.element_0.style['width'] = width;
  this.element_0.style['width'] = width;
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 22:1, 25:1, 26:1, 38:1, 39:1, 43:1, 69:1, 70:1, 124:1};
_.lastSelectedIndex = -1;
_.select = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader11_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader11'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$17$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$17$1');
$entry(onLoad_1)();
