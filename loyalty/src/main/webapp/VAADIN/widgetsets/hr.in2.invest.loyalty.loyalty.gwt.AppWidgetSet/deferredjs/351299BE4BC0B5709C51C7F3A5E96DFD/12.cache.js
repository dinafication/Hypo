function gt(a_0, b){
  var signa, signb;
  signa = ~~a_0.h >> 19;
  signb = ~~b.h >> 19;
  return signa == 0?signb != 0 || a_0.h > b.h || a_0.h == b.h && a_0.m > b.m || a_0.h == b.h && a_0.m == b.m && a_0.l > b.l:!(signb == 0 || a_0.h < b.h || a_0.h == b.h && a_0.m < b.m || a_0.h == b.h && a_0.m == b.m && a_0.l <= b.l);
}

function $runCallbacks_2(){
  var $e0, e, handler;
  while (callbacksHead_2) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_2 = callbacksHead_2.next;
    !callbacksHead_2 && (callbacksTail_2 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect_2_classLit, new WidgetMapImpl$18$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect_2_classLit, new WidgetMapImpl$18$1_0);
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

function AsyncLoader12_0(){
}

function onLoad_2(){
  instance_3 = new AsyncLoader12_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 12);
  !!$stats && $stats($createStatsEvent('runCallbacks12', 'begin', -1, -1));
  instance_3.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks12', 'end', -1, -1));
}

function AsyncLoader12(){
}

_ = AsyncLoader12_0.prototype = AsyncLoader12.prototype = new Object_0;
_.getClass$ = function getClass_164(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader12_2_classLit;
}
;
_.runCallbacks = function runCallbacks_2(){
  $runCallbacks_2();
}
;
_.castableTypeMap$ = {};
function $setUrl(this$static, url){
  this$static.state.setUrl(this$static, url);
}

function Image_1(){
  $clinit_46();
  this.state = new Image$UnclippedState_0(this);
  this.element_0['className'] = 'gwt-Image';
}

_ = Image_1.prototype = Image_0.prototype;
_ = Image$ClippedState.prototype;
_.setUrl = function setUrl(image, url){
  image.state = new Image$UnclippedState_0(image);
  image.state.setUrl(image, url);
}
;
function Image$UnclippedState_0(image){
  $replaceElement(image, $doc.createElement('img'));
  sinkEvents_0(image.element_0, 32768);
  image.eventsToSink == -1?sinkEvents(image.element_0, 133398655 | (image.element_0.__eventBits || 0)):(image.eventsToSink |= 133398655);
}

function Image$UnclippedState(){
}

_ = Image$UnclippedState_0.prototype = Image$UnclippedState.prototype = new Image$State;
_.getClass$ = function getClass_342(){
  return Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit;
}
;
_.getImageElement = function getImageElement_0(image){
  return image.element_0;
}
;
_.setUrl = function setUrl_0(image, url){
  !!image.state && (image.state.getImageElement(image)['__gwtLastUnhandledEvent'] = '' , undefined);
  image.element_0.src = url;
}
;
_.castableTypeMap$ = {};
function $selectAll(this$static){
  var length_0, raw;
  length_0 = $getPropertyString(this$static.element_0, 'value').length;
  length_0 > 0 && (this$static.this$0.textInputEnabled?$setSelectionRange(this$static, 0, length_0):$setSelectionRange(this$static, (raw = $getValueOrThrow(this$static) , raw == null?'':raw).length, 0));
}

function WidgetMapImpl$18$1_0(){
}

function WidgetMapImpl$18$1(){
}

_ = WidgetMapImpl$18$1_0.prototype = WidgetMapImpl$18$1.prototype = new Object_0;
_.get = function get_9(){
  return new VFilterSelect_0;
}
;
_.getClass$ = function getClass_507(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$18$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $addItem_2(this$static, item){
  var tr;
  if (this$static.vertical) {
    tr = $doc.createElement('tr');
    this$static.body_0.appendChild(tr);
  }
   else {
    tr = $getChild(this$static.body_0, 0);
  }
  tr.appendChild(item.element_0);
  item.parentMenu = this$static;
  $setStyleName(item, getStylePrimaryName(item.element_0) + '-selected', false);
  $add_12(this$static.items, item);
}

function $clearItems_0(this$static){
  var container;
  container = this$static.vertical?this$static.body_0:$getChild(this$static.body_0, 0);
  while ($getChildCount(container) > 0) {
    container.removeChild($getChild(container, 0));
  }
  $clear_6(this$static.items);
}

function $closeAllParents(this$static){
  var curMenu;
  curMenu = this$static;
  while (curMenu) {
    curMenu.parentMenu != null && null.nullMethod();
    if (curMenu.selectedItem) {
      $setSelectionStyle(curMenu.selectedItem);
      curMenu.selectedItem = null;
    }
    curMenu = curMenu.parentMenu;
  }
}

function $doItemAction_0(this$static, item, fireCommand){
  var cmd;
  if (item.subMenu == null) {
    if (fireCommand) {
      $closeAllParents(this$static);
      cmd = item.command;
      !!cmd && $scheduleDeferred_0(($clinit_1() , INSTANCE), cmd);
    }
    return;
  }
  $selectItem_0(this$static, item);
  this$static.popup = new MenuBar$1_2(item);
  $addHandler(this$static.popup, new ListenerWrapper$WrappedPopupListener_0(this$static), TYPE_18?TYPE_18:(TYPE_18 = new GwtEvent$Type_0));
  this$static.vertical?$setPopupPosition_0(this$static.popup, ($getAbsoluteLeft(item.element_0) | 0) + (parseInt(item.element_0['offsetWidth']) || 0), $getAbsoluteTop(item.element_0) | 0):$setPopupPosition_0(this$static.popup, $getAbsoluteLeft(item.element_0) | 0, ($getAbsoluteTop(item.element_0) | 0) + (parseInt(item.element_0['offsetHeight']) || 0));
  this$static.shownChildMenu = item.subMenu;
  item.subMenu.nullField = this$static;
  $show_0(this$static.popup);
}

function $findItem_0(this$static, hItem){
  var i, item;
  for (i = 0; i < this$static.items.size_0; ++i) {
    item = dynamicCast($get_4(this$static.items, i), 138);
    if ($isOrHasChild(item.element_0, hItem)) {
      return item;
    }
  }
  return null;
}

function $itemOver_0(this$static, item){
  if (!item) {
    if (!!this$static.selectedItem && this$static.shownChildMenu == this$static.selectedItem.subMenu) {
      return;
    }
  }
  $selectItem_0(this$static, item);
  !!item && this$static.autoOpen && $doItemAction_0(this$static, item, false);
}

function $selectItem_0(this$static, item){
  if (item == this$static.selectedItem) {
    return;
  }
  !!this$static.selectedItem && $setSelectionStyle(this$static.selectedItem);
  !!item && ($setStyleName(item, getStylePrimaryName(item.getStyleElement()) + '-selected', true) , undefined);
  this$static.selectedItem = item;
}

function MenuBar_1(vertical){
  var outer, table, tr;
  this.items = new ArrayList_0;
  table = $doc.createElement('table');
  this.body_0 = $doc.createElement('tbody');
  table.appendChild(this.body_0);
  if (!vertical) {
    tr = $doc.createElement('tr');
    this.body_0.appendChild(tr);
  }
  this.vertical = vertical;
  outer = $doc.createElement('div');
  outer.appendChild(table);
  this.element_0 = outer;
  this.eventsToSink == -1?sinkEvents(this.element_0, 49 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 49);
  this.element_0['className'] = 'gwt-MenuBar';
}

function MenuBar_0(){
}

_ = MenuBar_0.prototype = new Widget;
_.getClass$ = function getClass_565(){
  return Lcom_vaadin_terminal_gwt_client_ui_MenuBar_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_13(event_0){
  var item;
  $onBrowserEvent(this, event_0);
  item = $findItem_0(this, event_0.target);
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      {
        !!item && $doItemAction_0(this, item, true);
        break;
      }

    case 16:
      {
        !!item && $itemOver_0(this, item);
        break;
      }

    case 32:
      {
        !!item && $itemOver_0(this, null);
        break;
      }

  }
}
;
_.onDetach = function onDetach_6(){
  !!this.popup && this.popup.hide_0(false);
  $onDetach(this);
}
;
_.onPopupClosed = function onPopupClosed_0(sender, autoClosed){
  autoClosed && $closeAllParents(this);
  this.shownChildMenu = null;
  this.popup = null;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 71:1};
_.autoOpen = false;
_.body_0 = null;
_.parentMenu = null;
_.popup = null;
_.selectedItem = null;
_.shownChildMenu = null;
_.vertical = false;
function MenuBar$1_2(val$item){
  this.val$item = val$item;
  PopupPanel_0.call(this);
  this.autoHide = true;
  this.autoHideOnHistoryEvents = true;
  this.setZIndex(20000);
  $setWidget(this, this.val$item.subMenu);
  $maybeUpdateSize(this);
  null.nullMethod();
}

function MenuBar$1_1(){
}

_ = MenuBar$1_2.prototype = MenuBar$1_1.prototype = new VOverlay;
_.getClass$ = function getClass_566(){
  return Lcom_vaadin_terminal_gwt_client_ui_MenuBar$1_2_classLit;
}
;
_.onEventPreview = function onEventPreview_3(event_0){
  var parentMenuElement, target;
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      target = event_0.target;
      parentMenuElement = this.val$item.parentMenu.element_0;
      {
        if ($isOrHasChild(parentMenuElement, target)) {
          return false;
        }
      }

  }
  return true;
}
;
_.castableTypeMap$ = {9:1, 10:1, 11:1, 12:1, 13:1, 15:1, 16:1, 17:1, 18:1, 19:1, 20:1, 21:1, 22:1, 23:1, 33:1, 69:1, 70:1, 72:1, 75:1, 76:1, 77:1};
_.val$item = null;
function $setSelectionStyle(this$static){
  $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-selected', false);
}

function MenuItem_2(text, cmd){
  this.element_0 = $doc.createElement('td');
  $setStyleName(this, getStylePrimaryName(this.element_0) + '-selected', false);
  this.element_0.innerHTML = text || '';
  this.element_0['className'] = 'gwt-MenuItem';
  this.command = cmd;
}

function MenuItem_1(){
}

_ = MenuItem_2.prototype = MenuItem_1.prototype = new UIObject;
_.getClass$ = function getClass_567(){
  return Lcom_vaadin_terminal_gwt_client_ui_MenuItem_2_classLit;
}
;
_.castableTypeMap$ = {69:1, 138:1};
_.command = null;
_.parentMenu = null;
_.subMenu = null;
function $clinit_72(){
  $clinit_72 = nullMethod;
  navigationKeyCodes = new HashSet_0;
  $add_14(navigationKeyCodes, valueOf(40));
  $add_14(navigationKeyCodes, valueOf(38));
  $add_14(navigationKeyCodes, valueOf(34));
  $add_14(navigationKeyCodes, valueOf(33));
  $add_14(navigationKeyCodes, valueOf(13));
}

function $filterOptions(this$static, page){
  $filterOptions_0(this$static, page, $getPropertyString(this$static.tb.element_0, 'value'), true);
}

function $filterOptions_0(this$static, page, filter, immediate){
  if ($equals_2(filter, this$static.lastFilter) && this$static.currentPage == page) {
    this$static.suggestionPopup.attached || $showSuggestions(this$static.suggestionPopup, this$static.currentSuggestions, this$static.currentPage, this$static.totalMatches);
    return;
  }
  $equals_2(filter, this$static.lastFilter) || ($equals_2('', filter)?(page = -1):(page = 0));
  this$static.waitingForFilteringResponse = true;
  $addVariableToQueue(this$static.client, this$static.paintableId, 'filter', $escapeVariableValue(filter), false, 115);
  $addVariableToQueue(this$static.client, this$static.paintableId, 'page', '' + page, immediate, 105);
  this$static.lastFilter = filter;
  this$static.currentPage = page;
}

function $focus_0(this$static){
  this$static.focused = true;
  this$static.prompting && !this$static.readonly && $setPromptingOff(this$static, '');
  $setFocus(this$static.tb, true);
}

function $getMainWidth(this$static){
  var componentWidth;
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    this$static.element_0.style['overflow'] = ($clinit_7() , 'hidden');
    componentWidth = parseInt(this$static.element_0['offsetWidth']) || 0;
    this$static.element_0.style['overflow'] = '';
  }
   else {
    componentWidth = parseInt(this$static.element_0['offsetWidth']) || 0;
  }
  return componentWidth;
}

function $handleMouseDownEvent(this$static, event_0){
  if ($eventGetTypeInt(event_0.type) == 4) {
    event_0.preventDefault();
    event_0.stopPropagation();
    ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && this$static.focused && (this$static.preventNextBlurEventInIE = true);
  }
}

function $hasNextPage(this$static){
  return this$static.totalMatches > (this$static.currentPage + 1) * this$static.pageLength;
}

function $inputFieldKeyDown(this$static, event_0){
  switch (event_0.nativeEvent.keyCode || 0) {
    case 40:
    case 38:
    case 34:
    case 33:
      $filterOptions_0(this$static, -1, '', true);
      this$static.lastFilter = '';
      $selectAll(this$static.tb);
      break;
    case 13:
      if (!this$static.allowNewItem) {
        return;
      }

      if (!!this$static.currentSuggestion && $equals_2($getPropertyString(this$static.tb.element_0, 'value'), this$static.currentSuggestion.caption_0)) {
        return;
      }

      $doSelectedItemAction(this$static.suggestionPopup.menu);
      event_0.nativeEvent.stopPropagation();
  }
}

function $minWidth(captions){
  if (!captions || captions.length <= 0)
    return 0;
  captions = captions.split('|');
  var d = $wnd.document.createElement('div');
  var html = '';
  for (var i = 0; i < captions.length; i++) {
    html += '<div>' + captions[i] + '<\/div>';
  }
  d.style.position = 'absolute';
  d.style.top = '0';
  d.style.left = '0';
  d.style.visibility = 'hidden';
  d.innerHTML = html;
  $wnd.document.body.appendChild(d);
  var w = d.offsetWidth;
  $wnd.document.body.removeChild(d);
  return w;
}

function $onSuggestionSelected(this$static, suggestion){
  var newKey, text;
  this$static.updateSelectionWhenReponseIsReceived = false;
  this$static.currentSuggestion = suggestion;
  $equals_2(suggestion.key, '')?(newKey = ''):(newKey = '' + __parseAndValidateInt(suggestion.key));
  text = suggestion.caption_0;
  $equals_2('', newKey) && !this$static.focused?$setPromptingOn(this$static):$setPromptingOff(this$static, text);
  $setSelectedItemIcon(this$static, suggestion.iconUri);
  if (!($equals_2(newKey, this$static.selectedOptionKey) || $equals_2('', newKey) && this$static.selectedOptionKey == null)) {
    this$static.selectedOptionKey = newKey;
    $updateVariable_2(this$static.client, this$static.paintableId, 'selected', initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, [this$static.selectedOptionKey]), this$static.immediate);
  }
  $hide(this$static.suggestionPopup, false);
  runIE7ZeroSizedBodyFix();
}

function $popupKeyDown(this$static, event_0){
  switch (event_0.nativeEvent.keyCode || 0) {
    case 40:
      $selectNextItem_0(this$static.suggestionPopup);
      this$static.suggestionPopup.menu.keyboardSelectedItem = this$static.suggestionPopup.menu.selectedItem;
      currentEvent.preventDefault();
      event_0.nativeEvent.stopPropagation();
      break;
    case 38:
      $selectPrevItem_0(this$static.suggestionPopup);
      this$static.suggestionPopup.menu.keyboardSelectedItem = this$static.suggestionPopup.menu.selectedItem;
      currentEvent.preventDefault();
      event_0.nativeEvent.stopPropagation();
      break;
    case 34:
      this$static.totalMatches > (this$static.currentPage + 1) * this$static.pageLength && $filterOptions_0(this$static, this$static.currentPage + 1, this$static.lastFilter, true);
      event_0.nativeEvent.stopPropagation();
      break;
    case 33:
      this$static.currentPage > 0 && $filterOptions_0(this$static, this$static.currentPage - 1, this$static.lastFilter, true);
      event_0.nativeEvent.stopPropagation();
      break;
    case 9:
      this$static.tabPressedWhenPopupOpen = true;
      $filterOptions(this$static, this$static.currentPage);
      break;
    case 27:
      $reset(this$static);
      event_0.nativeEvent.stopPropagation();
      break;
    case 13:
      if (!this$static.suggestionPopup.menu.keyboardSelectedItem) {
        this$static.allowNewItem?$doSelectedItemAction(this$static.suggestionPopup.menu):this$static.currentSuggestions.size_0 == 1 && $onSuggestionSelected(this$static, dynamicCast($get_4(this$static.currentSuggestions, 0), 149));
      }
       else {
        this$static.currentSuggestion = this$static.suggestionPopup.menu.keyboardSelectedItem.command;
        $onSuggestionSelected(this$static, this$static.currentSuggestion);
      }

      event_0.nativeEvent.stopPropagation();
  }
}

function $reset(this$static){
  var text;
  if (this$static.currentSuggestion) {
    text = this$static.currentSuggestion.caption_0;
    $setPromptingOff(this$static, text);
    this$static.selectedOptionKey = this$static.currentSuggestion.key;
  }
   else {
    this$static.focused?$setPromptingOff(this$static, ''):$setPromptingOn(this$static);
    this$static.selectedOptionKey = null;
  }
  this$static.lastFilter = '';
  $hide(this$static.suggestionPopup, false);
  runIE7ZeroSizedBodyFix();
}

function $setPromptingOff(this$static, text){
  $isFF3(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))?$scheduleDeferred_0(($clinit_1() , INSTANCE), new VFilterSelect$4_0(this$static, text)):$setText_0(this$static.tb, text);
  if (this$static.prompting) {
    this$static.prompting = false;
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-prompt', false);
  }
}

function $setPromptingOn(this$static){
  if (!this$static.prompting) {
    this$static.prompting = true;
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-prompt', true);
  }
  $setTextboxText(this$static, this$static.inputPrompt);
}

function $setSelectedItemIcon(this$static, iconUri){
  if (iconUri == null || iconUri.length == 0) {
    if (this$static.selectedItemIcon.attached) {
      $remove_2(this$static.panel, this$static.selectedItemIcon);
      $updateRootWidth(this$static);
    }
  }
   else {
    $insert_0(this$static.panel, this$static.selectedItemIcon, 0);
    $setUrl(this$static.selectedItemIcon, iconUri);
    $updateRootWidth(this$static);
    $updateSelectedIconPosition(this$static);
  }
}

function $setTextInputEnabled(this$static, textInputEnabled){
  textInputEnabled?$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-no-input', false):$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-no-input', true);
  if (this$static.textInputEnabled == textInputEnabled) {
    return;
  }
  this$static.textInputEnabled = textInputEnabled;
  $setReadOnly(this$static.tb, this$static.readonly || !this$static.textInputEnabled);
}

function $setTextboxText(this$static, text){
  $isFF3(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))?$scheduleDeferred_0(($clinit_1() , INSTANCE), new VFilterSelect$4_0(this$static, text)):$setText_0(this$static.tb, text);
}

function $setTextboxWidth(this$static, componentWidth){
  var iconWidth, padding, textboxWidth;
  padding = (this$static.textboxPadding < 0 && (this$static.textboxPadding = measureHorizontalPaddingAndBorder(this$static.tb.element_0, 4)) , this$static.textboxPadding);
  iconWidth = this$static.selectedItemIcon.attached?($clinit_67() , getRequiredWidth(this$static.selectedItemIcon.element_0)):0;
  textboxWidth = componentWidth - padding - (this$static.popupWidth < 0 && (this$static.popupWidth = ($clinit_67() , getRequiredWidth(this$static.popupOpener.element_0))) , this$static.popupWidth) - iconWidth;
  textboxWidth < 0 && (textboxWidth = 0);
  this$static.tb.element_0.style['width'] = textboxWidth + 'px';
}

function $updateRootWidth(this$static){
  var iconWidth, tbWidth, w;
  if (this$static.width_0 == null) {
    tbWidth = ($clinit_67() , getRequiredWidth(this$static.tb.element_0));
    iconWidth = this$static.selectedItemIcon.attached?measureMarginLeft(this$static.tb.element_0) - measureMarginLeft(this$static.selectedItemIcon.element_0):0;
    w = tbWidth + (this$static.popupWidth < 0 && (this$static.popupWidth = getRequiredWidth(this$static.popupOpener.element_0)) , this$static.popupWidth) + iconWidth;
    if ((!this$static.initDone || this$static.currentPage + 1 < 0) && this$static.suggestionPopupMinWidth > w) {
      $setTextboxWidth(this$static, this$static.suggestionPopupMinWidth);
      w = this$static.suggestionPopupMinWidth;
    }
     else {
      $setWidth(this$static.tb, tbWidth - (this$static.textboxPadding < 0 && (this$static.textboxPadding = measureHorizontalPaddingAndBorder(this$static.tb.element_0, 4)) , this$static.textboxPadding) + 'px');
    }
    this$static.element_0.style['width'] = w + 'px';
    this$static.width_0 = w + 'px';
  }
   else {
    $setTextboxWidth(this$static, $getMainWidth(this$static) - (this$static.componentPadding < 0 && (this$static.componentPadding = measureHorizontalPaddingAndBorder(this$static.element_0, 3)) , this$static.componentPadding));
  }
}

function $updateSelectedIconPosition(this$static){
  var availableHeight, iconHeight, marginTop;
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    this$static.element_0.style['overflow'] = ($clinit_7() , 'hidden');
    availableHeight = parseInt(this$static.element_0['offsetHeight']) || 0;
    this$static.element_0.style['overflow'] = '';
  }
   else {
    availableHeight = parseInt(this$static.element_0['offsetHeight']) || 0;
  }
  iconHeight = ($clinit_67() , getRequiredHeight(this$static.selectedItemIcon.element_0));
  marginTop = ~~((availableHeight - iconHeight) / 2);
  this$static.selectedItemIcon.element_0.style['marginTop'] = marginTop + 'px';
}

function VFilterSelect_0(){
  $clinit_72();
  this.panel = new FlowPanel_0;
  this.tb = new VFilterSelect$1_0(this);
  this.suggestionPopup = new VFilterSelect$SuggestionPopup_0(this);
  this.popupOpener = new VFilterSelect$2_0(this);
  this.selectedItemIcon = new Image_1;
  this.currentSuggestions = new ArrayList_0;
  this.selectedItemIcon.getStyleElement()['className'] = 'v-icon';
  $addHandler(this.selectedItemIcon, new VFilterSelect$3_0(this), ($clinit_22() , $clinit_22() , TYPE_8));
  $sinkEvents_0(this.tb, 241);
  $sinkEvents_0(this.popupOpener, 245);
  $add_4(this.panel, this.tb);
  $add_4(this.panel, this.popupOpener);
  $initWidget(this, this.panel);
  this.element_0['className'] = 'v-filterselect';
  $addDomHandler(this.tb, this, ($clinit_19() , $clinit_19() , TYPE_5));
  $addDomHandler(this.tb, this, ($clinit_21() , $clinit_21() , TYPE_7));
  this.tb.getStyleElement()['className'] = 'v-filterselect-input';
  $addDomHandler(this.tb, this, ($clinit_18() , $clinit_18() , TYPE_4));
  $addDomHandler(this.tb, this, ($clinit_13() , $clinit_13() , TYPE));
  $addDomHandler(this.tb, this, ($clinit_15() , $clinit_15() , TYPE_1));
  this.popupOpener.getStyleElement()['className'] = 'v-filterselect-button';
  $addDomHandler(this.popupOpener, this, TYPE_1);
}

function VFilterSelect(){
}

_ = VFilterSelect_0.prototype = VFilterSelect.prototype = new Composite;
_.focus_0 = function focus_11(){
  $focus_0(this);
}
;
_.getClass$ = function getClass_625(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect_2_classLit;
}
;
_.onAttach = function onAttach_6(){
  $onAttach_1(this);
  $updateRootWidth(this);
}
;
_.onBlur = function onBlur_6(event_0){
  var focusedElement;
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && this.preventNextBlurEventInIE) {
    this.preventNextBlurEventInIE = false;
    focusedElement = getIEFocusedElement();
    if ($isOrHasChild(this.element_0, focusedElement) || $isOrHasChild(this.suggestionPopup.element_0, focusedElement)) {
      this.iePreventNextFocus = true;
      $setFocus(this.tb, true);
      return;
    }
  }
  this.focused = false;
  if (!this.readonly) {
    if (this.tabPressedWhenPopupOpen) {
      this.tabPressedWhenPopupOpen = false;
      $doSelectedItemAction(this.suggestionPopup.menu);
      $hide(this.suggestionPopup, false);
      runIE7ZeroSizedBodyFix();
    }
     else 
      (!this.suggestionPopup.attached || $isJustClosed(this.suggestionPopup)) && $doSelectedItemAction(this.suggestionPopup.menu);
    this.selectedOptionKey == null?$setPromptingOn(this):!!this.currentSuggestion && $setPromptingOff(this, this.currentSuggestion.caption_0);
  }
  $setStyleName(this, getStylePrimaryName(this.element_0) + '-focus', false);
  $hasEventListeners_0(this.client.idToPaintableDetail[dynamicCast(this, 70).element_0.tkPid], 'blur') && ($addVariableToQueue(this.client, this.paintableId, 'blur', $escapeVariableValue(''), true, 115) , undefined);
}
;
_.onClick = function onClick_19(event_0){
  var immediate;
  if (this.textInputEnabled && event_0.nativeEvent.target == this.tb.element_0) {
    return;
  }
  if (this.enabled && !this.readonly) {
    if (!$isJustClosed(this.suggestionPopup)) {
      immediate = this.focused || !$hasEventListeners_0(this.client.idToPaintableDetail[dynamicCast(this, 70).element_0.tkPid], 'focus');
      $filterOptions_0(this, -1, '', immediate);
      this.popupOpenerClicked = true;
      this.lastFilter = '';
    }
    currentEvent.preventDefault();
    $focus_0(this);
    $selectAll(this.tb);
  }
}
;
_.onDetach = function onDetach_10(){
  this.widget.onDetach();
  $hide(this.suggestionPopup, false);
  runIE7ZeroSizedBodyFix();
}
;
_.onFocus = function onFocus_5(event_0){
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && this.iePreventNextFocus) {
    this.iePreventNextFocus = false;
    return;
  }
  this.focused = true;
  this.prompting && !this.readonly && $setPromptingOff(this, '');
  $setStyleName(this, getStylePrimaryName(this.element_0) + '-focus', true);
  $hasEventListeners_0(this.client.idToPaintableDetail[dynamicCast(this, 70).element_0.tkPid], 'focus') && ($addVariableToQueue(this.client, this.paintableId, 'focus', $escapeVariableValue(''), true, 115) , undefined);
}
;
_.onKeyDown = function onKeyDown_3(event_0){
  var keyCode;
  if (this.enabled && !this.readonly) {
    keyCode = event_0.nativeEvent.keyCode || 0;
    if (this.waitingForFilteringResponse && navigationKeyCodes.map.containsKey(valueOf(keyCode))) {
      currentEvent.preventDefault();
      event_0.nativeEvent.stopPropagation();
      return;
    }
    this.suggestionPopup.attached?$popupKeyDown(this, event_0):$inputFieldKeyDown(this, event_0);
  }
}
;
_.onKeyUp = function onKeyUp_1(event_0){
  if (this.enabled && !this.readonly) {
    switch (event_0.nativeEvent.keyCode || 0) {
      case 13:
      case 9:
      case 16:
      case 17:
      case 18:
      case 40:
      case 38:
      case 34:
      case 33:
      case 27:
        break;
      default:this.textInputEnabled && ($filterOptions_0(this, this.currentPage, $getPropertyString(this.tb.element_0, 'value'), true) , undefined);
    }
  }
}
;
_.setHeight = function setHeight_12(height){
  this.element_0.style['height'] = height;
  setHeightExcludingPaddingAndBorder(this.tb, height, 3);
}
;
_.setWidth = function setWidth_18(width){
  width == null || $equals_2(width, '')?(this.width_0 = null):(this.width_0 = width);
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    this.element_0.style['overflow'] = ($clinit_7() , 'hidden');
    this.horizPaddingAndBorder = setWidthExcludingPaddingAndBorder(this, width, this.horizPaddingAndBorder);
    this.element_0.style['overflow'] = '';
  }
   else {
    this.horizPaddingAndBorder = setWidthExcludingPaddingAndBorder(this, width, this.horizPaddingAndBorder);
  }
  this.initDone && $updateRootWidth(this);
}
;
_.updateFromUIDL = function updateFromUIDL_28(uidl, client){
  var activeMenuItem, captions, i, newSelectedOptionKey, noTextInput, optionUidl, options, suggestion, count;
  this.paintableId = uidl[1]['id'];
  this.client = client;
  this.readonly = 'readonly' in uidl[1];
  this.enabled = !('disabled' in uidl[1]);
  this.tb.element_0['disabled'] = !this.enabled;
  $setReadOnly(this.tb, this.readonly || !this.textInputEnabled);
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  noTextInput = 'noInput' in uidl[1] && Boolean(uidl[1]['noInput']);
  $setTextInputEnabled(this, !noTextInput);
  'tabindex' in uidl[1] && (this.tb.element_0.tabIndex = uidl[1]['tabindex'] , undefined);
  'filteringmode' in uidl[1] && (this.filteringmode = uidl[1]['filteringmode']);
  this.immediate = 'immediate' in uidl[1];
  this.nullSelectionAllowed = 'nullselect' in uidl[1];
  this.nullSelectItem = 'nullselectitem' in uidl[1] && Boolean(uidl[1]['nullselectitem']);
  this.currentPage = uidl[1]['v']['page'];
  'pagelength' in uidl[1] && (this.pageLength = uidl[1]['pagelength']);
  'prompt' in uidl[1]?(this.inputPrompt = uidl[1]['prompt']):(this.inputPrompt = '');
  $updateStyleNames(this.suggestionPopup, uidl);
  this.allowNewItem = 'allownewitem' in uidl[1];
  this.lastNewItemString = null;
  $clear_6(this.currentSuggestions);
  if (!this.waitingForFilteringResponse) {
    this.currentSuggestion = null;
    $clearItems_0(this.suggestionPopup.menu);
  }
  options = uidl[2];
  'totalMatches' in uidl[1]?(this.totalMatches = uidl[1]['totalMatches']):(this.totalMatches = 0);
  captions = escapeHTML(this.inputPrompt);
  for (i = new UIDL$1_0(options); count = i.this$0.length - 2 , count > i.index_0 + 1;) {
    optionUidl = dynamicCastJso($next_3(i));
    suggestion = new VFilterSelect$FilterSelectSuggestion_0(this, optionUidl);
    $add_12(this.currentSuggestions, suggestion);
    if ('selected' in optionUidl[1]) {
      if (!this.waitingForFilteringResponse || this.popupOpenerClicked) {
        newSelectedOptionKey = '' + __parseAndValidateInt(suggestion.key);
        if (!$equals_2(newSelectedOptionKey, this.selectedOptionKey) || $equals_2(suggestion.caption_0, $getPropertyString(this.tb.element_0, 'value'))) {
          $setPromptingOff(this, suggestion.caption_0);
          this.selectedOptionKey = newSelectedOptionKey;
        }
      }
      this.currentSuggestion = suggestion;
      $setSelectedItemIcon(this, suggestion.iconUri);
    }
    captions.length > 0 && (captions += '|');
    captions += escapeHTML(suggestion.caption_0);
  }
  if ((!this.waitingForFilteringResponse || this.popupOpenerClicked) && Boolean(uidl[1]['v']) && 'selected' in uidl[1]['v'] && $getStringArray(uidl[1]['v'], 'selected').length == 0) {
    if (!this.waitingForFilteringResponse || !this.popupOpenerClicked) {
      if (this.focused) {
        $setValue_0(this.tb, '');
      }
       else {
        this.prompting = false;
        $setPromptingOn(this);
      }
    }
    $setSelectedItemIcon(this, null);
    this.selectedOptionKey = null;
  }
  if (this.waitingForFilteringResponse && $equals_2(this.lastFilter.toLowerCase(), uidl[1]['v']['filter'])) {
    $showSuggestions(this.suggestionPopup, this.currentSuggestions, this.currentPage, this.totalMatches);
    this.waitingForFilteringResponse = false;
    if (!this.popupOpenerClicked && this.selectPopupItemWhenResponseIsReceived != 0) {
      this.selectPopupItemWhenResponseIsReceived == 2?$selectLastItem(this.suggestionPopup.menu):$selectFirstItem(this.suggestionPopup.menu);
      activeMenuItem = this.suggestionPopup.menu.selectedItem;
      this.suggestionPopup.menu.keyboardSelectedItem = activeMenuItem;
      $setTextboxText(this, activeMenuItem.element_0.textContent);
      $setSelectionRange_1(this.tb, this.lastFilter.length, activeMenuItem.element_0.textContent.length - this.lastFilter.length);
      this.selectPopupItemWhenResponseIsReceived = 0;
    }
    this.updateSelectionWhenReponseIsReceived && $doPostFilterSelectedItemAction(this.suggestionPopup.menu);
  }
  this.suggestionPopupMinWidth = $minWidth(captions);
  this.popupOpenerClicked = false;
  this.initDone || $updateRootWidth(this);
  this.focused && $setStyleName(this, getStylePrimaryName(this.element_0) + '-focus', true);
  this.initDone = true;
}
;
_.castableTypeMap$ = {5:1, 6:1, 7:1, 10:1, 12:1, 13:1, 15:1, 22:1, 25:1, 26:1, 39:1, 44:1, 69:1, 70:1, 124:1};
_.allowNewItem = false;
_.client = null;
_.componentPadding = -1;
_.currentPage = 0;
_.currentSuggestion = null;
_.enabled = false;
_.filteringmode = 0;
_.focused = false;
_.horizPaddingAndBorder = 2;
_.iePreventNextFocus = false;
_.immediate = false;
_.initDone = false;
_.inputPrompt = '';
_.lastFilter = '';
_.lastNewItemString = null;
_.nullSelectItem = false;
_.nullSelectionAllowed = false;
_.pageLength = 10;
_.paintableId = null;
_.popupOpenerClicked = false;
_.popupWidth = -1;
_.preventNextBlurEventInIE = false;
_.prompting = false;
_.readonly = false;
_.selectPopupItemWhenResponseIsReceived = 0;
_.selectedOptionKey = null;
_.suggestionPopupMinWidth = 0;
_.tabPressedWhenPopupOpen = false;
_.textInputEnabled = true;
_.textboxPadding = -1;
_.totalMatches = 0;
_.updateSelectionWhenReponseIsReceived = false;
_.waitingForFilteringResponse = false;
_.width_0 = null;
var navigationKeyCodes;
function $setSelectionRange_1(this$static, pos, length_0){
  var raw;
  this$static.this$0.textInputEnabled?$setSelectionRange(this$static, pos, length_0):$setSelectionRange(this$static, (raw = $getValueOrThrow(this$static) , raw == null?'':raw).length, 0);
}

function VFilterSelect$1_0(this$0){
  $clinit_51();
  this.this$0 = this$0;
  TextBox_0.call(this);
}

function VFilterSelect$1(){
}

_ = VFilterSelect$1_0.prototype = VFilterSelect$1.prototype = new TextBox;
_.getClass$ = function getClass_626(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$1_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_22(event_0){
  $onBrowserEvent_0(this, event_0);
  !!this.this$0.client && ($handleTooltipEvent(this.this$0.client.tooltip, event_0, this.this$0, null) , undefined);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1};
_.this$0 = null;
function VFilterSelect$2_0(this$0){
  this.this$0 = this$0;
  HTML_0.call(this);
  $setTextOrHtml(this.directionalTextHelper, '', true);
}

function VFilterSelect$2(){
}

_ = VFilterSelect$2_0.prototype = VFilterSelect$2.prototype = new HTML;
_.getClass$ = function getClass_627(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$2_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_23(event_0){
  $onBrowserEvent(this, event_0);
  !!this.this$0.client && ($handleTooltipEvent(this.this$0.client.tooltip, event_0, this.this$0, null) , undefined);
  $handleMouseDownEvent(this.this$0, event_0);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1};
_.this$0 = null;
function VFilterSelect$3_0(this$0){
  this.this$0 = this$0;
}

function VFilterSelect$3(){
}

_ = VFilterSelect$3_0.prototype = VFilterSelect$3.prototype = new Object_0;
_.getClass$ = function getClass_628(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$3_2_classLit;
}
;
_.onLoad = function onLoad_44(event_0){
  $updateRootWidth(this.this$0);
  $updateSelectedIconPosition(this.this$0);
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && setStyleTemporarily(this.this$0.tb.element_0, 'paddingLeft', '0');
}
;
_.castableTypeMap$ = {12:1, 45:1};
_.this$0 = null;
function VFilterSelect$4_0(this$0, val$text){
  this.this$0 = this$0;
  this.val$text = val$text;
}

function VFilterSelect$4(){
}

_ = VFilterSelect$4_0.prototype = VFilterSelect$4.prototype = new Object_0;
_.execute_0 = function execute_33(){
  $setText_0(this.this$0.tb, this.val$text);
}
;
_.getClass$ = function getClass_629(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$4_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
_.val$text = null;
function $getDisplayString(this$static){
  var content_0, sb;
  sb = new StringBuffer_0;
  if (this$static.iconUri != null) {
    sb.impl.string += '<img src="';
    $append_0(sb, escapeAttribute(this$static.iconUri));
    sb.impl.string += '" alt="" class="v-icon" />';
  }
  $equals_2('', this$static.caption_0)?(content_0 = '&nbsp;'):(content_0 = escapeHTML(this$static.caption_0));
  sb.impl.string += '<span>' + content_0 + '<\/span>';
  return sb.impl.string;
}

function VFilterSelect$FilterSelectSuggestion_0(this$0, uidl){
  this.this$0 = this$0;
  this.key = uidl[1]['key'];
  this.caption_0 = uidl[1]['caption'];
  'icon' in uidl[1] && (this.iconUri = $translateVaadinUri(this$0.client, uidl[1]['icon']));
}

function VFilterSelect$FilterSelectSuggestion(){
}

_ = VFilterSelect$FilterSelectSuggestion_0.prototype = VFilterSelect$FilterSelectSuggestion.prototype = new Object_0;
_.execute_0 = function execute_34(){
  $onSuggestionSelected(this.this$0, this);
}
;
_.getClass$ = function getClass_630(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$FilterSelectSuggestion_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1, 149:1};
_.caption_0 = null;
_.iconUri = null;
_.key = null;
_.this$0 = null;
function $doPostFilterSelectedItemAction(this$static){
  var enteredItemValue, i, item, p, potentialExactMatch, text;
  item = this$static.selectedItem;
  enteredItemValue = $getPropertyString(this$static.this$0.tb.element_0, 'value');
  this$static.this$0.updateSelectionWhenReponseIsReceived = false;
  p = this$static.items.size_0;
  if (p > 0) {
    for (i = 0; i < p; ++i) {
      potentialExactMatch = dynamicCast($get_4(this$static.items, i), 138);
      if ($equals_2(potentialExactMatch.element_0.textContent, enteredItemValue)) {
        $selectItem_0(this$static, potentialExactMatch);
        (!$equals_2('', enteredItemValue) || this$static.this$0.selectedOptionKey != null && !$equals_2('', this$static.this$0.selectedOptionKey)) && $doItemAction_0(this$static, potentialExactMatch, true);
        $hide(this$static.this$0.suggestionPopup, false);
        runIE7ZeroSizedBodyFix();
        return;
      }
    }
  }
  if (this$static.this$0.allowNewItem) {
    if (!this$static.this$0.prompting && !$equals_2(enteredItemValue, this$static.this$0.lastNewItemString)) {
      this$static.this$0.lastNewItemString = enteredItemValue;
      $updateVariable_0(this$static.this$0.client, this$static.this$0.paintableId, 'newitem', enteredItemValue, this$static.this$0.immediate);
    }
  }
   else if (!!item && !$equals_2('', this$static.this$0.lastFilter) && (this$static.this$0.filteringmode == 2?item.element_0.textContent.toLowerCase().indexOf(this$static.this$0.lastFilter.toLowerCase()) != -1:item.element_0.textContent.toLowerCase().indexOf(this$static.this$0.lastFilter.toLowerCase()) == 0)) {
    $doItemAction_0(this$static, item, true);
  }
   else {
    if (!!this$static.this$0.currentSuggestion && !$equals_2(this$static.this$0.currentSuggestion.key, '')) {
      text = this$static.this$0.currentSuggestion.caption_0;
      $setText_0(this$static.this$0.tb, text);
      this$static.this$0.selectedOptionKey = this$static.this$0.currentSuggestion.key;
    }
     else {
      this$static.this$0.tb.element_0['value'] = '';
      this$static.this$0.selectedOptionKey = null;
    }
  }
  $hide(this$static.this$0.suggestionPopup, false);
  runIE7ZeroSizedBodyFix();
}

function $doSelectedItemAction(this$static){
  var enteredItemValue;
  enteredItemValue = $getPropertyString(this$static.this$0.tb.element_0, 'value');
  if (this$static.this$0.nullSelectionAllowed && $equals_2('', enteredItemValue) && this$static.this$0.selectedOptionKey != null && !$equals_2('', this$static.this$0.selectedOptionKey)) {
    if (this$static.this$0.nullSelectItem) {
      $reset(this$static.this$0);
      return;
    }
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'filter', $escapeVariableValue(''), false, 115);
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'page', '0', false, 105);
    $updateVariable_2(this$static.this$0.client, this$static.this$0.paintableId, 'selected', initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, []), this$static.this$0.immediate);
    $hide(this$static.this$0.suggestionPopup, false);
    runIE7ZeroSizedBodyFix();
    return;
  }
  this$static.this$0.updateSelectionWhenReponseIsReceived = this$static.this$0.waitingForFilteringResponse;
  this$static.this$0.waitingForFilteringResponse || $doPostFilterSelectedItemAction(this$static);
}

function $fixHeightTo(this$static, pagelenth){
  var pixels;
  if (this$static.this$0.currentSuggestions.size_0 > 0) {
    pixels = ~~(pagelenth * ((parseInt(this$static.element_0['offsetHeight']) || 0) - 2) / this$static.this$0.currentSuggestions.size_0);
    this$static.element_0.style['height'] = pixels + 2 + 'px';
  }
}

function $selectFirstItem(this$static){
  var firstItem;
  firstItem = dynamicCast($get_4(this$static.items, 0), 138);
  $selectItem_0(this$static, firstItem);
}

function $selectLastItem(this$static){
  var items, lastItem;
  items = this$static.items;
  lastItem = dynamicCast($get_4(items, items.size_0 - 1), 138);
  $selectItem_0(this$static, lastItem);
}

function $setSuggestions(this$static, suggestions){
  var it, mi, s;
  this$static.keyboardSelectedItem = null;
  $clearItems_0(this$static);
  it = new AbstractList$IteratorImpl_0(suggestions);
  while (it.i < it.this$0_0.size_1()) {
    s = dynamicCast($next_5(it), 149);
    mi = new MenuItem_2($getDisplayString(s), s);
    sinkOnloadForImages(mi.element_0);
    $addItem_2(this$static, mi);
    s == this$static.this$0.currentSuggestion && $selectItem_0(this$static, mi);
  }
}

function VFilterSelect$SuggestionMenu_0(this$0){
  this.this$0 = this$0;
  MenuBar_1.call(this, true);
  this.delayedImageLoadExecutioner = new VLazyExecutor_0(100, new VFilterSelect$SuggestionMenu$1_0(this));
  this.element_0['className'] = 'v-filterselect-suggestmenu';
  $addDomHandler(this, this, ($clinit_22() , $clinit_22() , TYPE_8));
}

function VFilterSelect$SuggestionMenu(){
}

_ = VFilterSelect$SuggestionMenu_0.prototype = VFilterSelect$SuggestionMenu.prototype = new MenuBar_0;
_.getClass$ = function getClass_631(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$SuggestionMenu_2_classLit;
}
;
_.getSubPartElement = function getSubPartElement_1(subPart){
  var index, item;
  index = __parseAndValidateInt(subPart.substr(4, subPart.length - 4));
  item = dynamicCast($get_4(this.items, index), 138);
  return item.element_0;
}
;
_.getSubPartName = function getSubPartName_1(subElement){
  var i, itemCount, menuItemRoot, name_0;
  if (!$isOrHasChild(this.element_0, subElement)) {
    return null;
  }
  menuItemRoot = subElement;
  while (!!menuItemRoot && !$equalsIgnoreCase(menuItemRoot.tagName, 'td')) {
    menuItemRoot = $getParentElement(menuItemRoot);
  }
  itemCount = this.items.size_0;
  for (i = 0; i < itemCount; ++i) {
    if (dynamicCast($get_4(this.items, i), 138).element_0 == menuItemRoot) {
      name_0 = 'item' + i;
      return name_0;
    }
  }
  return null;
}
;
_.onLoad = function onLoad_45(event_0){
  $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && doIE6PngFix(event_0.nativeEvent.target);
  $trigger_0(this.delayedImageLoadExecutioner);
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 22:1, 45:1, 69:1, 70:1, 71:1, 128:1};
_.keyboardSelectedItem = null;
_.this$0 = null;
function VFilterSelect$SuggestionMenu$1_0(this$1){
  this.this$1 = this$1;
}

function VFilterSelect$SuggestionMenu$1(){
}

_ = VFilterSelect$SuggestionMenu$1_0.prototype = VFilterSelect$SuggestionMenu$1.prototype = new Object_0;
_.execute_0 = function execute_35(){
  if (!$equals_2('hidden', this.this$1.this$0.suggestionPopup.element_0.style['visibility']) && this.this$1.this$0.suggestionPopup.attached) {
    this.this$1.element_0.style['width'] = '';
    $getFirstChildElement(this.this$1.element_0).style['width'] = '';
    $setPopupPositionAndShow(this.this$1.this$0.suggestionPopup, this.this$1.this$0.suggestionPopup);
  }
}
;
_.getClass$ = function getClass_632(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$SuggestionMenu$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$1 = null;
function $isJustClosed(this$static){
  var now;
  now = fromDouble((new Date_1).jsdate.getTime());
  return gt(this$static.lastAutoClosed, P0_longLit) && !gte_0(sub(now, this$static.lastAutoClosed), Pc8_longLit);
}

function $selectNextItem_0(this$static){
  var cur, index, newSelectedItem;
  cur = this$static.menu.selectedItem;
  index = 1 + $indexOf_1(this$static.menu.items, cur, 0);
  if (this$static.menu.items.size_0 > index) {
    newSelectedItem = dynamicCast($get_4(this$static.menu.items, index), 138);
    $selectItem_0(this$static.menu, newSelectedItem);
    $setText_0(this$static.this$0.tb, newSelectedItem.element_0.textContent);
    $setSelectionRange_1(this$static.this$0.tb, this$static.this$0.lastFilter.length, newSelectedItem.element_0.textContent.length - this$static.this$0.lastFilter.length);
  }
   else if ($hasNextPage(this$static.this$0)) {
    this$static.this$0.selectPopupItemWhenResponseIsReceived = 1;
    $filterOptions_0(this$static.this$0, this$static.this$0.currentPage + 1, this$static.this$0.lastFilter, true);
  }
}

function $selectPrevItem_0(this$static){
  var cur, index, newSelectedItem;
  cur = this$static.menu.selectedItem;
  index = -1 + $indexOf_1(this$static.menu.items, cur, 0);
  if (index > -1) {
    newSelectedItem = dynamicCast($get_4(this$static.menu.items, index), 138);
    $selectItem_0(this$static.menu, newSelectedItem);
    $setText_0(this$static.this$0.tb, newSelectedItem.element_0.textContent);
    $setSelectionRange_1(this$static.this$0.tb, this$static.this$0.lastFilter.length, newSelectedItem.element_0.textContent.length - this$static.this$0.lastFilter.length);
  }
   else if (index == -1) {
    if (this$static.this$0.currentPage > 0) {
      this$static.this$0.selectPopupItemWhenResponseIsReceived = 2;
      $filterOptions_0(this$static.this$0, this$static.this$0.currentPage - 1, this$static.this$0.lastFilter, true);
    }
  }
   else {
    newSelectedItem = dynamicCast($get_4(this$static.menu.items, this$static.menu.items.size_0 - 1), 138);
    $selectItem_0(this$static.menu, newSelectedItem);
    $setText_0(this$static.this$0.tb, newSelectedItem.element_0.textContent);
    $setSelectionRange_1(this$static.this$0.tb, this$static.this$0.lastFilter.length, newSelectedItem.element_0.textContent.length - this$static.this$0.lastFilter.length);
  }
}

function $setNextButtonActive(this$static, active){
  if (active) {
    sinkEvents(this$static.down, 1);
    this$static.down['className'] = 'v-filterselect-nextpage';
  }
   else {
    sinkEvents(this$static.down, 0);
    this$static.down['className'] = 'v-filterselect-nextpage-off';
  }
}

function $setPagingEnabled(this$static, paging){
  if (this$static.isPagingEnabled == paging) {
    return;
  }
  if (paging) {
    this$static.down.style['display'] = '';
    this$static.up.style['display'] = '';
    this$static.status_0.style['display'] = '';
  }
   else {
    this$static.down.style['display'] = 'none';
    this$static.up.style['display'] = 'none';
    this$static.status_0.style['display'] = 'none';
  }
  this$static.isPagingEnabled = paging;
}

function $setPrevButtonActive(this$static, active){
  if (active) {
    sinkEvents(this$static.up, 1);
    this$static.up['className'] = 'v-filterselect-prevpage';
  }
   else {
    sinkEvents(this$static.up, 0);
    this$static.up['className'] = 'v-filterselect-prevpage-off';
  }
}

function $showSuggestions(this$static, currentSuggestions, currentPage, totalSuggestions){
  var first, firstPage, last, matches, nullOffset, x;
  this$static.element_0['id'] = 'VAADIN_COMBOBOX_OPTIONLIST';
  $setSuggestions(this$static.menu, currentSuggestions);
  x = $getAbsoluteLeft(this$static.this$0.element_0) | 0;
  this$static.topPosition = $getAbsoluteTop(this$static.this$0.tb.element_0) | 0;
  this$static.topPosition += parseInt(this$static.this$0.tb.element_0['offsetHeight']) || 0;
  $setPopupPosition_0(this$static, x, this$static.topPosition);
  nullOffset = this$static.this$0.nullSelectionAllowed && $equals_2('', this$static.this$0.lastFilter)?1:0;
  firstPage = currentPage == 0;
  first = currentPage * this$static.this$0.pageLength + 1 - (firstPage?0:nullOffset);
  last = first + currentSuggestions.size_0 - 1 - (firstPage && $equals_2('', this$static.this$0.lastFilter)?nullOffset:0);
  matches = totalSuggestions - nullOffset;
  last > 0?(this$static.status_0.textContent = (matches == 0?0:first) + '-' + last + '/' + matches || '' , undefined):(this$static.status_0.textContent = '' , undefined);
  totalSuggestions <= this$static.this$0.pageLength || this$static.this$0.pageLength == 0?$setPagingEnabled(this$static, false):$setPagingEnabled(this$static, true);
  $setPrevButtonActive(this$static, first > 1);
  $setNextButtonActive(this$static, last < matches);
  this$static.menu.element_0.style['width'] = '';
  $getFirstChildElement(this$static.menu.element_0).style['width'] = '';
  $setPopupPositionAndShow(this$static, this$static);
}

function $updateStyleNames(this$static, uidl){
  var i, styles, parent_0;
  if ('style' in uidl[1]) {
    (parent_0 = $getFirstChildElement(this$static.element_0).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)['className'] = 'v-filterselect-suggestpopup';
    styles = $split_0(uidl[1]['style'], ' ', 0);
    for (i = 0; i < styles.length; ++i) {
      $setStyleName(this$static, getStylePrimaryName(this$static.getStyleElement()) + '-' + styles[i], true);
    }
  }
}

function VFilterSelect$SuggestionPopup_0(this$0){
  var root, parent_0;
  this.this$0 = this$0;
  VOverlay_1.call(this, true, false);
  this.up = $doc.createElement('div');
  this.down = $doc.createElement('div');
  this.status_0 = $doc.createElement('div');
  this.lazyPageScroller = new VFilterSelect$SuggestionPopup$LazyPageScroller_0(this);
  this.menu = new VFilterSelect$SuggestionMenu_0(this$0);
  $setWidget(this, this.menu);
  $maybeUpdateSize(this);
  (parent_0 = $getFirstChildElement(this.element_0).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)['className'] = 'v-filterselect-suggestpopup';
  this.element_0.style['zIndex'] = '30000';
  root = $getFirstChildElement(this.element_0);
  this.up.innerHTML = '<span>Prev<\/span>';
  sinkEvents(this.up, 1);
  this.down.innerHTML = '<span>Next<\/span>';
  sinkEvents(this.down, 1);
  $insertChild(root, this.up, 0);
  root.appendChild(this.down);
  root.appendChild(this.status_0);
  this.status_0['className'] = 'v-filterselect-status';
  $maybeInitializeEventSystem();
  $sinkEventsImpl(root, 131076);
  $addHandler(this, this, TYPE_18?TYPE_18:(TYPE_18 = new GwtEvent$Type_0));
}

function VFilterSelect$SuggestionPopup(){
}

_ = VFilterSelect$SuggestionPopup_0.prototype = VFilterSelect$SuggestionPopup.prototype = new VOverlay;
_.getClass$ = function getClass_633(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$SuggestionPopup_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_24(event_0){
  var target, velocity;
  if ($eventGetTypeInt(event_0.type) == 1) {
    target = event_0.target;
    target == this.up || target == $getChild(this.up, 0)?$scrollUp(this.lazyPageScroller):(target == this.down || target == $getChild(this.down, 0)) && $scrollDown(this.lazyPageScroller);
  }
   else if ($eventGetTypeInt(event_0.type) == 131072) {
    velocity = Math.round(-event_0.wheelDelta / 40) || 0;
    velocity > 0?$scrollDown(this.lazyPageScroller):$scrollUp(this.lazyPageScroller);
  }
  $handleMouseDownEvent(this.this$0, event_0);
}
;
_.onClose = function onClose_3(event_0){
  event_0.autoClosed && (this.lastAutoClosed = fromDouble((new Date_1).jsdate.getTime()));
}
;
_.setPosition = function setPosition_2(offsetWidth, offsetHeight){
  var desiredWidth, left, naturalMenuWidth, rootWidth, top_0, topMargin;
  this.menu.element_0.style['height'] = '';
  this.this$0.currentPage > 0 && $fixHeightTo(this.menu, this.this$0.pageLength);
  offsetHeight = parseInt(this.element_0['offsetHeight']) || 0;
  desiredWidth = $getMainWidth(this.this$0);
  naturalMenuWidth = parseInt($getFirstChildElement(this.menu.element_0)['offsetWidth']) || 0;
  this.popupOuterPadding == -1 && (this.popupOuterPadding = measureHorizontalPaddingAndBorder(this.element_0, 2));
  if (naturalMenuWidth < desiredWidth) {
    this.menu.element_0.style['width'] = desiredWidth - this.popupOuterPadding + 'px';
    $getFirstChildElement(this.menu.element_0).style['width'] = '100%';
    naturalMenuWidth = desiredWidth;
  }
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE) {
    rootWidth = naturalMenuWidth - this.popupOuterPadding;
    $getFirstChildElement(this.element_0).style['width'] = rootWidth + 'px';
  }
  if (offsetHeight + ($getAbsoluteTop(this.element_0) | 0) > $getClientHeight($doc) + ($doc.body.scrollTop || 0)) {
    top_0 = ($getAbsoluteTop(this.element_0) | 0) - offsetHeight - (parseInt(this.this$0.element_0['offsetHeight']) || 0);
    top_0 < 0 && (top_0 = 0);
  }
   else {
    top_0 = $getAbsoluteTop(this.element_0) | 0;
    topMargin = top_0 - this.topPosition;
    top_0 -= topMargin;
  }
  offsetWidth = parseInt($getFirstChildElement(this.menu.element_0)['offsetWidth']) || 0;
  if (offsetWidth + ($getAbsoluteLeft(this.element_0) | 0) > $getClientWidth($doc) + $getScrollLeft($doc.body)) {
    left = ($getAbsoluteLeft(this.this$0.element_0) | 0) + (parseInt(this.this$0.element_0['offsetWidth']) || 0) + $getScrollLeft($doc.body) - offsetWidth;
    left < 0 && (left = 0);
  }
   else {
    left = $getAbsoluteLeft(this.element_0) | 0;
  }
  $setPopupPosition_0(this, left, top_0);
}
;
_.castableTypeMap$ = {9:1, 10:1, 11:1, 12:1, 13:1, 15:1, 16:1, 17:1, 18:1, 19:1, 20:1, 21:1, 22:1, 23:1, 33:1, 69:1, 70:1, 72:1, 75:1, 76:1, 77:1};
_.isPagingEnabled = true;
_.lastAutoClosed = P0_longLit;
_.menu = null;
_.popupOuterPadding = -1;
_.this$0 = null;
_.topPosition = 0;
function $scrollDown(this$static){
  if (this$static.this$1.this$0.totalMatches > (this$static.this$1.this$0.currentPage + this$static.pagesToScroll + 1) * this$static.this$1.this$0.pageLength) {
    ++this$static.pagesToScroll;
    this$static.isRepeating?($wnd.clearInterval(this$static.timerId) , undefined):($wnd.clearTimeout(this$static.timerId) , undefined);
    $remove_17(timers, this$static);
    $schedule(this$static, 200);
  }
}

function $scrollUp(this$static){
  if (this$static.this$1.this$0.currentPage + this$static.pagesToScroll > 0) {
    --this$static.pagesToScroll;
    this$static.isRepeating?($wnd.clearInterval(this$static.timerId) , undefined):($wnd.clearTimeout(this$static.timerId) , undefined);
    $remove_17(timers, this$static);
    $schedule(this$static, 200);
  }
}

function VFilterSelect$SuggestionPopup$LazyPageScroller_0(this$1){
  $clinit();
  this.this$1 = this$1;
}

function VFilterSelect$SuggestionPopup$LazyPageScroller(){
}

_ = VFilterSelect$SuggestionPopup$LazyPageScroller_0.prototype = VFilterSelect$SuggestionPopup$LazyPageScroller.prototype = new Timer;
_.getClass$ = function getClass_634(){
  return Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$SuggestionPopup$LazyPageScroller_2_classLit;
}
;
_.run = function run_22(){
  if (this.pagesToScroll != 0) {
    this.this$1.this$0.waitingForFilteringResponse || $filterOptions_0(this.this$1.this$0, this.this$1.this$0.currentPage + this.pagesToScroll, this.this$1.this$0.lastFilter, true);
    this.pagesToScroll = 0;
  }
}
;
_.castableTypeMap$ = {65:1};
_.pagesToScroll = 0;
_.this$1 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader12_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader12'), Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$UnclippedState'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$18$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$18$1'), Lcom_vaadin_terminal_gwt_client_ui_MenuBar_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'MenuBar'), Lcom_vaadin_terminal_gwt_client_ui_MenuBar$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'MenuBar$1'), Lcom_vaadin_terminal_gwt_client_ui_MenuItem_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'MenuItem'), Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFilterSelect$1'), Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFilterSelect$2'), Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFilterSelect$3'), Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$4_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFilterSelect$4'), Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$FilterSelectSuggestion_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFilterSelect$FilterSelectSuggestion'), Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$SuggestionMenu_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFilterSelect$SuggestionMenu'), Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$SuggestionMenu$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFilterSelect$SuggestionMenu$1'), Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$SuggestionPopup_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFilterSelect$SuggestionPopup'), Lcom_vaadin_terminal_gwt_client_ui_VFilterSelect$SuggestionPopup$LazyPageScroller_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VFilterSelect$SuggestionPopup$LazyPageScroller');
$entry(onLoad_2)();
