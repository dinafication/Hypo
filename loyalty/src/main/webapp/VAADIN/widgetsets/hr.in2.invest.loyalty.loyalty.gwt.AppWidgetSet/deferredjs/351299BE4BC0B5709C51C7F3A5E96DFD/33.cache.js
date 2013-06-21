function $clinit_5(){
  $clinit_5 = nullMethod;
  LEFT = new Style$Float$1_0;
  RIGHT = new Style$Float$2_0;
  NONE_1 = new Style$Float$3_0;
  $VALUES_2 = initValues(_3Lcom_google_gwt_dom_client_Style$Float_2_classLit, {30:1, 35:1}, 90, [LEFT, RIGHT, NONE_1]);
}

function values_3(){
  $clinit_5();
  return $VALUES_2;
}

function Style$Float(){
}

_ = Style$Float.prototype = new Enum;
_.getClass$ = function getClass_57(){
  return Lcom_google_gwt_dom_client_Style$Float_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 30:1, 32:1, 90:1, 107:1};
var $VALUES_2, LEFT, NONE_1, RIGHT;
function Style$Float$1_0(){
  this.name_0 = 'LEFT';
  this.ordinal = 0;
}

function Style$Float$1(){
}

_ = Style$Float$1_0.prototype = Style$Float$1.prototype = new Style$Float;
_.getClass$ = function getClass_58(){
  return Lcom_google_gwt_dom_client_Style$Float$1_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 30:1, 32:1, 90:1, 107:1};
function Style$Float$2_0(){
  this.name_0 = 'RIGHT';
  this.ordinal = 1;
}

function Style$Float$2(){
}

_ = Style$Float$2_0.prototype = Style$Float$2.prototype = new Style$Float;
_.getClass$ = function getClass_59(){
  return Lcom_google_gwt_dom_client_Style$Float$2_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 30:1, 32:1, 90:1, 107:1};
function Style$Float$3_0(){
  this.name_0 = 'NONE';
  this.ordinal = 2;
}

function Style$Float$3(){
}

_ = Style$Float$3_0.prototype = Style$Float$3.prototype = new Style$Float;
_.getClass$ = function getClass_60(){
  return Lcom_google_gwt_dom_client_Style$Float$3_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 30:1, 32:1, 90:1, 107:1};
function $runCallbacks_25(){
  var $e0, e, handler;
  while (callbacksHead_25) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_25 = callbacksHead_25.next;
    !callbacksHead_25 && (callbacksTail_25 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VTwinColSelect_2_classLit, new WidgetMapImpl$47$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VTwinColSelect_2_classLit, new WidgetMapImpl$47$1_0);
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

function AsyncLoader33_0(){
}

function onLoad_25(){
  instance_26 = new AsyncLoader33_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 33);
  !!$stats && $stats($createStatsEvent('runCallbacks33', 'begin', -1, -1));
  instance_26.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks33', 'end', -1, -1));
}

function AsyncLoader33(){
}

_ = AsyncLoader33_0.prototype = AsyncLoader33.prototype = new Object_0;
_.getClass$ = function getClass_233(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader33_2_classLit;
}
;
_.runCallbacks = function runCallbacks_25(){
  $runCallbacks_25();
}
;
_.castableTypeMap$ = {};
function $getOptionText(option){
  var text;
  text = option.text;
  option.hasAttribute('bidiwrapped') && text.length > 1 && (text = text.substr(1, text.length - 1 - 1));
  return text;
}

function getChildElementIndex(childElement){
  $clinit_67();
  var idx, n;
  idx = 0;
  n = childElement;
  while (n = n.previousSibling) {
    ++idx;
  }
  return idx;
}

function WidgetMapImpl$47$1_0(){
}

function WidgetMapImpl$47$1(){
}

_ = WidgetMapImpl$47$1_0.prototype = WidgetMapImpl$47$1.prototype = new Object_0;
_.get = function get_41(){
  return new VTwinColSelect_0;
}
;
_.getClass$ = function getClass_539(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$47$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $addItem_5(this$static){
  var movedItems;
  movedItems = $moveSelectedItems(this$static.options_0, this$static.selections);
  this$static.selectedKeys.addAll(movedItems);
  $updateVariable_2(this$static.client, this$static.id_0, 'selected', dynamicCast($toArray(this$static.selectedKeys, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, this$static.selectedKeys.map.size_1(), 0)), 59), this$static.immediate);
}

function $getOptionsCaption(this$static){
  if (!this$static.optionsCaption) {
    this$static.optionsCaption = new HTML_0;
    this$static.optionsCaption.getStyleElement()['className'] = 'v-select-twincol-caption-left';
    this$static.optionsCaption.element_0.style['cssFloat'] = ($clinit_5() , 'left');
    $add_4(this$static.captionWrapper, this$static.optionsCaption);
  }
  return this$static.optionsCaption;
}

function $getSelectionBitmap(listBox){
  var i, selectedIndexes;
  selectedIndexes = initDim(_3Z_classLit, {30:1}, -1, listBox.element_0.options.length, 2);
  for (i = 0; i < listBox.element_0.options.length; ++i) {
    $checkIndex(listBox, i);
    listBox.element_0.options[i].selected?(selectedIndexes[i] = true):(selectedIndexes[i] = false);
  }
  return selectedIndexes;
}

function $getSelectionsCaption(this$static){
  if (!this$static.selectionsCaption) {
    this$static.selectionsCaption = new HTML_0;
    this$static.selectionsCaption.getStyleElement()['className'] = 'v-select-twincol-caption-right';
    this$static.selectionsCaption.element_0.style['cssFloat'] = ($clinit_5() , 'right');
    $add_4(this$static.captionWrapper, this$static.selectionsCaption);
  }
  return this$static.selectionsCaption;
}

function $moveSelectedItems(source, target){
  var i, lastSelected, movedItems, optionIndex, sel, text, value;
  sel = $getSelectionBitmap(source);
  movedItems = new HashSet_0;
  lastSelected = 0;
  for (i = 0; i < sel.length; ++i) {
    if (sel[i]) {
      optionIndex = i - (sel.length - source.element_0.options.length);
      $add_14(movedItems, ($checkIndex(source, optionIndex) , source.element_0.options[optionIndex].value));
      text = ($checkIndex(source, optionIndex) , $getOptionText(source.element_0.options[optionIndex]));
      value = ($checkIndex(source, optionIndex) , source.element_0.options[optionIndex].value);
      $insertItem(target, text, value, -1);
      $setItemSelected(target, target.element_0.options.length - 1, true);
      $checkIndex(source, optionIndex);
      source.element_0.remove(optionIndex);
      source.element_0.options.length > 0 && (lastSelected = optionIndex > 0?optionIndex - 1:0);
    }
  }
  source.element_0.options.length > 0 && (source.element_0.selectedIndex = lastSelected , undefined);
  source.element_0.options.length == 0?($clinit_42() , impl_0).focus_1(target.element_0):($clinit_42() , impl_0).focus_1(source.element_0);
  return movedItems;
}

function $removeItem_1(this$static){
  var movedItems;
  movedItems = $moveSelectedItems(this$static.selections, this$static.options_0);
  $removeAll(this$static.selectedKeys, movedItems);
  $updateVariable_2(this$static.client, this$static.id_0, 'selected', dynamicCast($toArray(this$static.selectedKeys, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, this$static.selectedKeys.map.size_1(), 0)), 59), this$static.immediate);
}

function $removeOptionsCaption(this$static){
  if (!this$static.optionsCaption) {
    return;
  }
  !!this$static.optionsCaption.parent_0 && $remove_2(this$static.captionWrapper, this$static.optionsCaption);
  this$static.optionsCaption = null;
}

function $removeSelectionsCaption(this$static){
  if (!this$static.selectionsCaption) {
    return;
  }
  !!this$static.selectionsCaption.parent_0 && $remove_2(this$static.captionWrapper, this$static.selectionsCaption);
  this$static.selectionsCaption = null;
}

function $setInternalHeights(this$static){
  var captionHeight, o, selectHeight, totalHeight;
  captionHeight = 0;
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    o = this$static.element_0.style['overflow'];
    this$static.element_0.style['overflow'] = ($clinit_7() , 'hidden');
    totalHeight = parseInt(this$static.element_0['offsetHeight']) || 0;
    this$static.element_0.style['overflow'] = o;
  }
   else {
    totalHeight = parseInt(this$static.element_0['offsetHeight']) || 0;
  }
  this$static.optionsCaption?(captionHeight = ($clinit_67() , getRequiredHeight(this$static.optionsCaption.element_0))):!!this$static.selectionsCaption && (captionHeight = ($clinit_67() , getRequiredHeight(this$static.selectionsCaption.element_0)));
  selectHeight = totalHeight - captionHeight + 'px';
  this$static.selections.element_0.style['height'] = selectHeight;
  this$static.options_0.element_0.style['height'] = selectHeight;
}

function VTwinColSelect_0(){
  var br;
  VOptionGroupBase_0.call(this, 'v-select-twincol');
  this.captionWrapper = new FlowPanel_0;
  this.options_0 = new VTwinColSelect$DoubleClickListBox_0;
  $addDomHandler(this.options_0, this, ($clinit_15() , $clinit_15() , TYPE_1));
  $addDomHandler(this.options_0, this, ($clinit_17() , $clinit_17() , TYPE_3));
  this.options_0.element_0.size = 10;
  this.options_0.getStyleElement()['className'] = 'v-select-twincol-options';
  this.selections = new VTwinColSelect$DoubleClickListBox_0;
  $addDomHandler(this.selections, this, TYPE_1);
  $addDomHandler(this.selections, this, TYPE_3);
  this.selections.element_0.size = 10;
  this.selections.getStyleElement()['className'] = 'v-select-twincol-selections';
  this.buttons = new FlowPanel_0;
  this.buttons.setStyleName('v-select-twincol-buttons');
  this.add_0 = new VButton_0;
  this.add_0.captionElement.textContent = '>>';
  $addDomHandler(this.add_0, this, TYPE_1);
  this.remove_0 = new VButton_0;
  this.remove_0.captionElement.textContent = '<<';
  $addDomHandler(this.remove_0, this, TYPE_1);
  this.panel = dynamicCast(this.optionsContainer, 75);
  this.panel.add_1(this.captionWrapper);
  this.captionWrapper.element_0.style['overflow'] = ($clinit_7() , 'hidden');
  this.captionWrapper.setVisible(false);
  this.panel.add_1(this.options_0);
  $add_4(this.buttons, this.add_0);
  br = new HTML_1('<span/>');
  br.element_0['className'] = 'v-select-twincol-deco';
  $add_4(this.buttons, br);
  $add_4(this.buttons, this.remove_0);
  this.panel.add_1(this.buttons);
  this.panel.add_1(this.selections);
  $addDomHandler(this.options_0, this, ($clinit_19() , $clinit_19() , TYPE_5));
  $addDomHandler(this.options_0, this, ($clinit_23() , $clinit_23() , TYPE_9));
  $addDomHandler(this.selections, this, TYPE_9);
  $addDomHandler(this.selections, this, TYPE_5);
}

function VTwinColSelect(){
}

_ = VTwinColSelect_0.prototype = VTwinColSelect.prototype = new VOptionGroupBase;
_.buildOptions = function buildOptions_2(uidl){
  var captionWrapperWidth, colWidth, cols, containerWidth, enabled, i, optionUidl, count;
  enabled = !this.disabled_0 && !this.readonly;
  this.options_0.element_0.multiple = this.multiselect;
  this.selections.element_0.multiple = this.multiselect;
  this.options_0.element_0['disabled'] = !enabled;
  this.selections.element_0['disabled'] = !enabled;
  $setEnabled_0(this.add_0, enabled);
  $setEnabled_0(this.remove_0, enabled);
  this.options_0.element_0.options.length = 0;
  this.selections.element_0.options.length = 0;
  for (i = new UIDL$1_0(uidl); count = i.this$0.length - 2 , count > i.index_0 + 1;) {
    optionUidl = dynamicCastJso($next_3(i));
    'selected' in optionUidl[1]?$insertItem(this.selections, optionUidl[1]['caption'], optionUidl[1]['key'], -1):$insertItem(this.options_0, optionUidl[1]['caption'], optionUidl[1]['key'], -1);
  }
  cols = -1;
  this.cols > 0?(cols = this.cols):this.widthSet || (cols = 10);
  if (cols >= 0) {
    colWidth = cols + 'em';
    containerWidth = 2 * cols + 4 + 'em';
    captionWrapperWidth = 2 * cols + 4 - 0.5 + 'em';
    this.options_0.element_0.style['width'] = colWidth;
    !!this.optionsCaption && this.optionsCaption.setWidth(colWidth);
    this.selections.element_0.style['width'] = colWidth;
    !!this.selectionsCaption && this.selectionsCaption.setWidth(colWidth);
    this.buttons.setWidth('3.5em');
    this.optionsContainer.setWidth(containerWidth);
    this.captionWrapper.setWidth(captionWrapperWidth);
  }
  if (this.rows_0 > 0) {
    this.options_0.element_0.size = this.rows_0;
    this.selections.element_0.size = this.rows_0;
  }
}
;
_.focus_0 = function focus_17(){
  $setFocus(this.options_0, true);
}
;
_.getClass$ = function getClass_783(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTwinColSelect_2_classLit;
}
;
_.getSelectedItems = function getSelectedItems_2(){
  var i, selectedItemKeys;
  selectedItemKeys = new ArrayList_0;
  for (i = 0; i < this.selections.element_0.options.length; ++i) {
    $add_12(selectedItemKeys, $getValue_0(this.selections, i));
  }
  return dynamicCast($toArray_1(selectedItemKeys, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, selectedItemKeys.size_0, 0)), 59);
}
;
_.getSubPartElement = function getSubPartElement_6(subPart){
  var idx;
  if ($equals_2('leftSelect', subPart)) {
    return this.options_0.element_0;
  }
   else if (subPart.indexOf('leftSelect-item') == 0) {
    idx = subPart.substr(15, subPart.length - 15);
    return this.options_0.element_0.childNodes[__parseAndValidateInt(idx)];
  }
   else if ($equals_2('rightSelect', subPart)) {
    return this.selections.element_0;
  }
   else if (subPart.indexOf('rightSelect-item') == 0) {
    idx = subPart.substr(16, subPart.length - 16);
    return this.selections.element_0.childNodes[__parseAndValidateInt(idx)];
  }
   else if (!!this.optionsCaption && $equals_2('leftCaption', subPart)) {
    return this.optionsCaption.element_0;
  }
   else if (!!this.selectionsCaption && $equals_2('rightCaption', subPart)) {
    return this.selectionsCaption.element_0;
  }
   else if ($equals_2('add', subPart)) {
    return this.add_0.element_0;
  }
   else if ($equals_2('remove', subPart)) {
    return this.remove_0.element_0;
  }
  return null;
}
;
_.getSubPartName = function getSubPartName_6(subElement){
  var idx;
  if (!!this.optionsCaption && $isOrHasChild(this.optionsCaption.element_0, subElement)) {
    return 'leftCaption';
  }
   else if (!!this.selectionsCaption && $isOrHasChild(this.selectionsCaption.element_0, subElement)) {
    return 'rightCaption';
  }
   else if ($isOrHasChild(this.options_0.element_0, subElement)) {
    if (this.options_0.element_0 == subElement) {
      return 'leftSelect';
    }
     else {
      idx = getChildElementIndex(subElement);
      return 'leftSelect-item' + idx;
    }
  }
   else if ($isOrHasChild(this.selections.element_0, subElement)) {
    if (this.selections.element_0 == subElement) {
      return 'rightSelect';
    }
     else {
      idx = getChildElementIndex(subElement);
      return 'rightSelect-item' + idx;
    }
  }
   else if ($isOrHasChild(this.add_0.element_0, subElement)) {
    return 'add';
  }
   else if ($isOrHasChild(this.remove_0.element_0, subElement)) {
    return 'remove';
  }
  return null;
}
;
_.onClick = function onClick_27(event_0){
  var c, i;
  $onClick_0(this, event_0);
  if (maskUndefined(event_0.source) === maskUndefined(this.add_0)) {
    $addItem_5(this);
  }
   else if (maskUndefined(event_0.source) === maskUndefined(this.remove_0)) {
    $removeItem_1(this);
  }
   else if (maskUndefined(event_0.source) === maskUndefined(this.options_0)) {
    c = this.selections.element_0.options.length;
    for (i = 0; i < c; ++i) {
      $setItemSelected(this.selections, i, false);
    }
  }
   else if (maskUndefined(event_0.source) === maskUndefined(this.selections)) {
    c = this.options_0.element_0.options.length;
    for (i = 0; i < c; ++i) {
      $setItemSelected(this.options_0, i, false);
    }
  }
}
;
_.onDoubleClick = function onDoubleClick_0(event_0){
  if (maskUndefined(event_0.source) === maskUndefined(this.options_0)) {
    $addItem_5(this);
    this.options_0.element_0.selectedIndex = -1;
    $setFocus(this.options_0, false);
  }
   else if (maskUndefined(event_0.source) === maskUndefined(this.selections)) {
    $removeItem_1(this);
    this.selections.element_0.selectedIndex = -1;
    $setFocus(this.selections, false);
  }
}
;
_.onKeyDown = function onKeyDown_8(event_0){
  var i, keycode;
  keycode = event_0.nativeEvent.keyCode || 0;
  if (keycode == 9 && maskUndefined(event_0.source) === maskUndefined(this.options_0)) {
    event_0.nativeEvent.preventDefault();
    for (i = 0; i < this.options_0.element_0.options.length; ++i) {
      $setItemSelected(this.options_0, i, false);
    }
    $setFocus(this.selections, true);
  }
  if (keycode == 9 && !!event_0.nativeEvent.shiftKey && maskUndefined(event_0.source) === maskUndefined(this.selections)) {
    event_0.nativeEvent.preventDefault();
    for (i = 0; i < this.selections.element_0.options.length; ++i) {
      $setItemSelected(this.selections, i, false);
    }
    $setFocus(this.options_0, true);
  }
  if (keycode == 13) {
    event_0.nativeEvent.preventDefault();
    if (maskUndefined(event_0.source) === maskUndefined(this.options_0)) {
      $setFocus(this.options_0, false);
      $addItem_5(this);
    }
     else if (maskUndefined(event_0.source) === maskUndefined(this.selections)) {
      $setFocus(this.selections, false);
      $removeItem_1(this);
    }
  }
}
;
_.onMouseDown = function onMouseDown_3(event_0){
  var i;
  if (maskUndefined(event_0.source) === maskUndefined(this.options_0)) {
    for (i = 0; i < this.selections.element_0.options.length; ++i) {
      $setItemSelected(this.selections, i, false);
    }
  }
   else if (maskUndefined(event_0.source) === maskUndefined(this.selections)) {
    for (i = 0; i < this.options_0.element_0.options.length; ++i) {
      $setItemSelected(this.options_0, i, false);
    }
  }
}
;
_.setHeight = function setHeight_24(height){
  this.element_0.style['height'] = height;
  if ($equals_2('', height)) {
    this.options_0.element_0.style['height'] = '';
    this.selections.element_0.style['height'] = '';
  }
   else {
    $setInternalHeights(this);
  }
}
;
_.setTabIndex = function setTabIndex_10(tabIndex){
  this.options_0.element_0.tabIndex = tabIndex;
  this.selections.element_0.tabIndex = tabIndex;
  $setTabIndex_1(this.add_0, tabIndex);
  $setTabIndex_1(this.remove_0, tabIndex);
}
;
_.setWidth = function setWidth_34(width){
  var bordersAndPaddings, buttonWidth, spaceForSelect, totalWidth;
  this.element_0.style['width'] = width;
  if (!$equals_2('', width) && width != null) {
    this.element_0.style['position'] = 'relative';
    bordersAndPaddings = measureHorizontalPaddingAndBorder(this.buttons.element_0, 0);
    $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && (bordersAndPaddings += 4);
    buttonWidth = ($clinit_67() , getRequiredWidth(this.buttons.element_0));
    totalWidth = parseInt(this.element_0['offsetWidth']) || 0;
    spaceForSelect = ~~((totalWidth - buttonWidth - bordersAndPaddings) / 2);
    this.options_0.element_0.style['width'] = spaceForSelect + 'px';
    !!this.optionsCaption && this.optionsCaption.setWidth(spaceForSelect + 'px');
    this.selections.element_0.style['width'] = spaceForSelect + 'px';
    !!this.selectionsCaption && this.selectionsCaption.setWidth(spaceForSelect + 'px');
    this.captionWrapper.setWidth('100%');
    this.widthSet = true;
  }
   else {
    this.widthSet = false;
  }
}
;
_.updateFromUIDL = function updateFromUIDL_52(uidl, client){
  var hasCaptions, leftCaption, rightCaption;
  Boolean(uidl[1]['cached']) || (leftCaption = 'lc' in uidl[1]?uidl[1]['lc']:null , rightCaption = 'rc' in uidl[1]?uidl[1]['rc']:null , hasCaptions = leftCaption != null || rightCaption != null , leftCaption == null?$removeOptionsCaption(this):$getOptionsCaption(this).setText(leftCaption) , rightCaption == null?$removeSelectionsCaption(this):$getSelectionsCaption(this).setText(rightCaption) , this.captionWrapper.setVisible(hasCaptions) , undefined);
  $updateFromUIDL(this, uidl, client);
}
;
_.castableTypeMap$ = {7:1, 10:1, 12:1, 13:1, 15:1, 22:1, 25:1, 26:1, 38:1, 39:1, 42:1, 43:1, 46:1, 69:1, 70:1, 124:1, 128:1};
_.add_0 = null;
_.buttons = null;
_.captionWrapper = null;
_.options_0 = null;
_.optionsCaption = null;
_.panel = null;
_.remove_0 = null;
_.selections = null;
_.selectionsCaption = null;
_.widthSet = false;
function VTwinColSelect$DoubleClickListBox_0(){
  $clinit_42();
  ListBox_0.call(this);
}

function VTwinColSelect$DoubleClickListBox(){
}

_ = VTwinColSelect$DoubleClickListBox_0.prototype = VTwinColSelect$DoubleClickListBox.prototype = new ListBox;
_.getClass$ = function getClass_784(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTwinColSelect$DoubleClickListBox_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1, 145:1};
function $removeAll(this$static, c){
  var iter, o, size, outerIter, entry, outerIter_0, entry_0;
  size = this$static.map.size_1();
  if (size < c.map.size_1()) {
    for (iter = (outerIter = $keySet(this$static.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); iter.val$outerIter.hasNext();) {
      o = (entry = dynamicCast(iter.val$outerIter.next_0(), 58) , entry.getKey());
      c.map.containsKey(o) && iter.val$outerIter.remove_1();
    }
  }
   else {
    for (iter = (outerIter_0 = $keySet(c.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter_0)); iter.val$outerIter.hasNext();) {
      o = (entry_0 = dynamicCast(iter.val$outerIter.next_0(), 58) , entry_0.getKey());
      this$static.map.remove_4(o) != null;
    }
  }
  return size != this$static.map.size_1();
}

var Lcom_google_gwt_dom_client_Style$Float_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Float', values_3), _3Lcom_google_gwt_dom_client_Style$Float_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Float;'), Lcom_google_gwt_dom_client_Style$Float$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Float$1', null), Lcom_google_gwt_dom_client_Style$Float$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Float$2', null), Lcom_google_gwt_dom_client_Style$Float$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Float$3', null), Lcom_google_gwt_lang_asyncloaders_AsyncLoader33_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader33'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$47$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$47$1'), Lcom_vaadin_terminal_gwt_client_ui_VTwinColSelect$DoubleClickListBox_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTwinColSelect$DoubleClickListBox');
$entry(onLoad_25)();
