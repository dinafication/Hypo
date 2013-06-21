function $runCallbacks_22(){
  var $e0, e, handler;
  while (callbacksHead_22) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_22 = callbacksHead_22.next;
    !callbacksHead_22 && (callbacksTail_22 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VTabsheet_2_classLit, new WidgetMapImpl$44$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VTabsheet_2_classLit, new WidgetMapImpl$44$1_0);
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

function AsyncLoader30_0(){
}

function onLoad_22(){
  instance_23 = new AsyncLoader30_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 30);
  !!$stats && $stats($createStatsEvent('runCallbacks30', 'begin', -1, -1));
  instance_23.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks30', 'end', -1, -1));
}

function AsyncLoader30(){
}

_ = AsyncLoader30_0.prototype = AsyncLoader30.prototype = new Object_0;
_.getClass$ = function getClass_224(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader30_2_classLit;
}
;
_.runCallbacks = function runCallbacks_22(){
  $runCallbacks_22();
}
;
_.castableTypeMap$ = {};
function $checkIndexBoundsForAccess(this$static, index){
  if (index < 0 || index >= this$static.children_0.size_0) {
    throw new IndexOutOfBoundsException_0;
  }
}

function $remove_1(this$static, index){
  return $remove_12(this$static, $get_0(this$static.children_0, index));
}

function $isIE9(this$static){
  return this$static.browserDetails.isIE && this$static.browserDetails.browserMajorVersion == 9;
}

function WidgetMapImpl$44$1_0(){
}

function WidgetMapImpl$44$1(){
}

_ = WidgetMapImpl$44$1_0.prototype = WidgetMapImpl$44$1.prototype = new Object_0;
_.get = function get_38(){
  return new VTabsheet_0;
}
;
_.getClass$ = function getClass_536(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$44$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $handleStyleNames(this$static, uidl){
  var contentClass, decoClass, i, style, styles, tabsClass;
  if ('style' in uidl[1]) {
    style = uidl[1]['style'];
    if (this$static.currentStyle_0 != style) {
      this$static.currentStyle_0 = style;
      styles = $split_0(style, ' ', 0);
      tabsClass = 'v-tabsheet-tabcontainer';
      contentClass = 'v-tabsheet-content';
      decoClass = 'v-tabsheet-deco';
      for (i = 0; i < styles.length; ++i) {
        $addStyleDependentName(this$static.tb, styles[i]);
        tabsClass += ' v-tabsheet-tabcontainer-' + styles[i];
        contentClass += ' v-tabsheet-content-' + styles[i];
        decoClass += ' v-tabsheet-deco-' + styles[i];
      }
      this$static.tabs['className'] = tabsClass;
      this$static.contentNode['className'] = contentClass;
      this$static.deco['className'] = decoClass;
      this$static.borderW = -1;
    }
  }
   else {
    this$static.tb.getStyleElement()['className'] = 'v-tabsheet-tabs';
    this$static.tabs['className'] = 'v-tabsheet-tabcontainer';
    this$static.contentNode['className'] = 'v-tabsheet-content';
    this$static.deco['className'] = 'v-tabsheet-deco';
  }
  if ('hidetabs' in uidl[1]) {
    this$static.tb.element_0.style.display = 'none';
    setStyleName(this$static.element_0, 'v-tabsheet-hidetabs', true);
  }
   else {
    this$static.tb.element_0.style.display = '';
    setStyleName(this$static.element_0, 'v-tabsheet-hidetabs', false);
  }
}

function $onTabSelected(this$static, tabIndex){
  var tabKey;
  if (this$static.disabled_0 || this$static.waitingForResponse) {
    return;
  }
  tabKey = $get_4(this$static.tabKeys, tabIndex);
  if (this$static.disabledTabKeys.map.containsKey(tabKey)) {
    return;
  }
  if (!!this$static.client && this$static.activeTabIndex != tabIndex) {
    $selectTab(this$static.tb, tabIndex);
    $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-loading', true);
    $scheduleDeferred_0(($clinit_1() , INSTANCE), new VTabsheet$1_0(this$static, tabIndex));
    this$static.waitingForResponse = true;
  }
}

function $renderContent(this$static, contentUIDL){
  var content_0, old, parent_0;
  content_0 = $getPaintable(this$static.client, contentUIDL);
  if (this$static.tp.children_0.size_0 > this$static.activeTabIndex) {
    old = $get_0(this$static.tp.children_0, this$static.activeTabIndex);
    if (old != content_0) {
      $remove_1(this$static.tp, this$static.activeTabIndex);
      old != null && old.castableTypeMap$ && !!old.castableTypeMap$[26] && $unregisterPaintable(this$static.client, dynamicCast(old, 26));
      $insert_2(this$static.tp, dynamicCast(content_0, 70), this$static.activeTabIndex);
    }
  }
   else {
    $add_10(this$static.tp, dynamicCast(content_0, 70));
  }
  $showWidget(this$static.tp, this$static.activeTabIndex);
  $updateTabScroller(this$static);
  $runWebkitOverflowAutoFix(this$static.tp);
  content_0.updateFromUIDL(contentUIDL, this$static.client);
  Boolean(contentUIDL[1]['cached']) && $handleComponentRelativeSize_0(this$static.client, dynamicCast(content_0, 70));
  $updateOpenTabSize_0(this$static);
  $setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-loading', false);
  if (this$static.previousVisibleWidget) {
    (parent_0 = this$static.previousVisibleWidget.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).style['visibility'] = '';
    this$static.previousVisibleWidget = null;
  }
}

function $sendTabClosedEvent(this$static, tabIndex){
  $addVariableToQueue(this$static.client, this$static.id_0, 'close', $escapeVariableValue(dynamicCast($get_4(this$static.tabKeys, tabIndex), 1)), true, 115);
}

function $showAllTabs(this$static){
  var i, t;
  this$static.scrollerIndex = $getNextVisibleTab(this$static.tb, -1);
  for (i = 0; i < this$static.tb.children_0.size_0; ++i) {
    t = $getTab(this$static.tb, i);
    t.hiddenOnServer || (t.element_0.style.display = '' , undefined);
  }
}

function $tabSizeMightHaveChanged(this$static){
  (this$static.width_0 == null || $equals_2(this$static.width_0, '')) && $updateDynamicWidth(this$static);
  $updateTabScroller(this$static);
}

function $updateContentNodeHeight(this$static){
  var contentHeight;
  if (this$static.height_0 != null && !$equals_2('', this$static.height_0)) {
    contentHeight = parseInt(this$static.element_0['offsetHeight']) || 0;
    contentHeight -= parseInt(this$static.deco['offsetHeight']) || 0;
    contentHeight -= parseInt(this$static.tb.element_0['offsetHeight']) || 0;
    contentHeight < 0 && (contentHeight = 0);
    this$static.contentNode.style['height'] = contentHeight + 'px';
    this$static.renderSpace.height_0 = contentHeight;
  }
   else {
    this$static.contentNode.style['height'] = '';
    this$static.renderSpace.height_0 = 0;
  }
}

function $updateDynamicWidth(this$static){
  var contentWidth, div, hasTabs, outerWidth_0, overflow, spacerCell, spacerMinWidth, spacerWidth, style, tabsWidth, wrapperstyle, parent_0;
  spacerCell = this$static.tb.element_0.rows[0].cells[this$static.tb.children_0.size_0];
  spacerWidth = spacerCell.offsetWidth || 0;
  div = $getFirstChildElement(spacerCell);
  spacerMinWidth = (spacerCell.offsetWidth || 0) - (div.offsetWidth || 0);
  tabsWidth = (parseInt(this$static.tb.element_0['offsetWidth']) || 0) - spacerWidth + spacerMinWidth;
  style = this$static.tp.element_0.style;
  overflow = style['overflow'];
  style['overflow'] = 'hidden';
  style['width'] = tabsWidth + ($clinit_9() , 'px');
  hasTabs = this$static.tp.children_0.size_0 > 0;
  wrapperstyle = null;
  if (hasTabs) {
    wrapperstyle = (parent_0 = $get_0(this$static.tp.children_0, $getVisibleWidget(this$static.tp)).element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).style;
    wrapperstyle['width'] = tabsWidth + 'px';
  }
  contentWidth = 0;
  hasTabs && (contentWidth = $get_0(this$static.tp.children_0, $getVisibleWidget(this$static.tp)).getOffsetWidth());
  style['overflow'] = overflow;
  tabsWidth < contentWidth && (tabsWidth = contentWidth);
  outerWidth_0 = tabsWidth + (this$static.borderW < 0 && (this$static.borderW = measureHorizontalBorder(this$static.contentNode)) , this$static.borderW);
  this$static.tabs.style['width'] = outerWidth_0 + 'px';
  style['width'] = tabsWidth + 'px';
  hasTabs && (wrapperstyle['width'] = tabsWidth + 'px' , undefined);
  this$static.contentNode.style['width'] = tabsWidth + 'px';
  this$static.element_0.style['width'] = outerWidth_0 + 'px';
  $updateOpenTabSize_0(this$static);
}

function $updateOpenTabSize_0(this$static){
  var height, minWidth, width;
  height = -1;
  width = -1;
  minWidth = 0;
  this$static.height_0 == null || $equals_2(this$static.height_0, '') || (height = this$static.renderSpace.getHeight());
  this$static.width_0 == null || $equals_2(this$static.width_0, '')?(minWidth = (parseInt(this$static.tb.element_0['offsetWidth']) || 0) - (this$static.borderW < 0 && (this$static.borderW = measureHorizontalBorder(this$static.contentNode)) , this$static.borderW)):(width = this$static.renderSpace.getWidth());
  $fixVisibleTabSize(this$static.tp, width, height, minWidth);
}

function $updateTabScroller(this$static){
  var clipped, property, scrolled, style;
  this$static.width_0 != null && (this$static.tabs.style['width'] = this$static.width_0 , undefined);
  this$static.scrollerIndex < 0 || this$static.scrollerIndex > this$static.tb.children_0.size_0?(this$static.scrollerIndex = $getNextVisibleTab(this$static.tb, -1)):this$static.tb.children_0.size_0 > 0 && $getTab(this$static.tb, this$static.scrollerIndex).hiddenOnServer && (this$static.scrollerIndex = $getNextVisibleTab(this$static.tb, this$static.scrollerIndex));
  scrolled = this$static.scrollerIndex > $getNextVisibleTab(this$static.tb, -1);
  clipped = (parseInt(this$static.tb.element_0['offsetWidth']) || 0) - (parseInt(this$static.tb.tr.lastChild['offsetWidth']) || 0) > (parseInt(this$static.element_0['offsetWidth']) || 0) - (this$static.scrollerIndex > $getNextVisibleTab(this$static.tb, -1)?this$static.scroller.offsetWidth || 0:0);
  if (this$static.tb.children_0.size_0 > 0 && this$static.tb.element_0.style.display != 'none' && (scrolled || clipped)) {
    this$static.scroller.style['display'] = '';
    this$static.scrollerPrev['className'] = 'v-tabsheet-scroller' + (scrolled?'Prev':'Prev-disabled');
    this$static.scrollerNext['className'] = 'v-tabsheet-scroller' + (clipped?'Next':'Next-disabled');
  }
   else {
    this$static.scroller.style['display'] = 'none';
  }
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isSafari) {
    property = this$static.tabs.style['height'];
    (property == null || $equals_2(property, '')) && (this$static.tabs.style['height'] = (parseInt(this$static.tb.element_0['offsetHeight']) || 0) + ($clinit_9() , 'px') , undefined);
    style = this$static.scroller.style;
    style['whiteSpace'] = 'normal';
    $scheduleDeferred_0(($clinit_1() , INSTANCE), new VTabsheet$2_0(style));
  }
}

function VTabsheet_0(){
  VTabsheetBase_0.call(this, 'v-tabsheet');
  this.tb = new VTabsheet$TabBar_0(this);
  this.tp = new VTabsheetPanel_0;
  this.renderInformation = new RenderInformation_0;
  this.renderSpace = new RenderSpace_2(0, 0, true);
  this.element_0.style['overflow'] = 'hidden';
  this.tabs = $doc.createElement('div');
  this.tabs['className'] = 'v-tabsheet-tabcontainer';
  this.scroller = $doc.createElement('div');
  this.scroller['className'] = 'v-tabsheet-scroller';
  this.scrollerPrev = $doc.createElement('button');
  this.scrollerPrev['className'] = 'v-tabsheet-scrollerPrev';
  sinkEvents(this.scrollerPrev, 1);
  this.scrollerNext = $doc.createElement('button');
  this.scrollerNext['className'] = 'v-tabsheet-scrollerNext';
  sinkEvents(this.scrollerNext, 1);
  this.element_0.appendChild(this.tabs);
  this.tp.getStyleElement()['className'] = 'v-tabsheet-tabsheetpanel';
  this.contentNode = $doc.createElement('div');
  this.deco = $doc.createElement('div');
  $setStyleName(this, getStylePrimaryName(this.element_0) + '-loading', true);
  this.tb.getStyleElement()['className'] = 'v-tabsheet-tabs';
  this.contentNode['className'] = 'v-tabsheet-content';
  this.deco['className'] = 'v-tabsheet-deco';
  $add_0(this, this.tb, this.tabs);
  this.scroller.appendChild(this.scrollerPrev);
  this.scroller.appendChild(this.scrollerNext);
  this.element_0.appendChild(this.contentNode);
  $add_0(this, this.tp, this.contentNode);
  this.element_0.appendChild(this.deco);
  this.tabs.appendChild(this.scroller);
}

function VTabsheet(){
}

_ = VTabsheet_0.prototype = VTabsheet.prototype = new VTabsheetBase;
_.getAllocatedSpace = function getAllocatedSpace_19(child){
  return this.renderSpace;
}
;
_.getClass$ = function getClass_745(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheet_2_classLit;
}
;
_.getPaintableIterator = function getPaintableIterator_0(){
  return new WidgetCollection$WidgetIterator_0(this.tp.children_0);
}
;
_.getTab = function getTab_0(index){
  if (this.tp.children_0.size_0 > index) {
    return dynamicCast($get_0(this.tp.children_0, index), 26);
  }
  return null;
}
;
_.getTabCount = function getTabCount_0(){
  return this.tb.children_0.size_0;
}
;
_.onBrowserEvent = function onBrowserEvent_42(event_0){
  var newFirstIndex;
  if (this.scrollerIndex > $getNextVisibleTab(this.tb, -1) && event_0.target == this.scrollerPrev) {
    newFirstIndex = $scrollLeft(this.tb, this.scrollerIndex);
    if (newFirstIndex != -1) {
      this.scrollerIndex = newFirstIndex;
      $updateTabScroller(this);
    }
  }
   else if ((parseInt(this.tb.element_0['offsetWidth']) || 0) - (parseInt(this.tb.tr.lastChild['offsetWidth']) || 0) > (parseInt(this.element_0['offsetWidth']) || 0) - (this.scrollerIndex > $getNextVisibleTab(this.tb, -1)?this.scroller.offsetWidth || 0:0) && event_0.target == this.scrollerNext) {
    newFirstIndex = $scrollRight(this.tb, this.scrollerIndex);
    if (newFirstIndex != -1) {
      this.scrollerIndex = newFirstIndex;
      $updateTabScroller(this);
    }
  }
   else {
    $onBrowserEvent(this, event_0);
  }
}
;
_.removeTab = function removeTab_0(index){
  $removeTab(this.tb, index);
  this.tp.children_0.size_0 > index && $remove_1(this.tp, index);
}
;
_.renderTab = function renderTab_0(tabUidl, index, selected, hidden){
  var oldIndex, oldWidget, tab, tabContent, tabContentUIDL;
  tab = $getTab(this.tb, index);
  !tab && (tab = $addTab(this.tb));
  $updateFromUIDL_20(tab, tabUidl);
  $setEnabledOnServer(tab, !this.disabledTabKeys.map.containsKey($get_4(this.tabKeys, index)));
  tab.hiddenOnServer = hidden;
  this.scrollerIndex > index && (hidden = true);
  tab.element_0.style.display = !hidden?'':'none';
  $setWidth_12(tab.tabCaption, $getRequiredWidth_0(tab.tabCaption) + 'px');
  tabContentUIDL = null;
  tabContent = null;
  if (tabUidl.length - 2 > 0) {
    tabContentUIDL = tabUidl[2];
    tabContent = $getPaintable(this.client, tabContentUIDL);
  }
  if (tabContent) {
    oldIndex = $indexOf(this.tp.children_0, dynamicCast(tabContent, 70));
    oldIndex != -1 && oldIndex != index && $insert_2(this.tp, dynamicCast(tabContent, 70), index);
  }
   else {
    if (index < this.tp.children_0.size_0) {
      oldWidget = $get_0(this.tp.children_0, index);
      oldWidget != null && oldWidget.castableTypeMap$ && !!oldWidget.castableTypeMap$[171] || $insert_2(this.tp, new VTabsheet$PlaceHolder_0, index);
    }
  }
  if (selected) {
    $renderContent(this, tabContentUIDL);
    $selectTab(this.tb, index);
  }
   else {
    if (tabContentUIDL) {
      $indexOf(this.tp.children_0, dynamicCast(tabContent, 70)) < 0 && $insert_2(this.tp, dynamicCast(tabContent, 70), index);
      tabContent.updateFromUIDL(tabContentUIDL, this.client);
    }
     else 
      this.tp.children_0.size_0 <= index && $add_10(this.tp, new VTabsheet$PlaceHolder_0);
  }
}
;
_.replaceChildComponent = function replaceChildComponent_18(oldComponent, newComponent){
  $replaceComponent(this.tp, oldComponent, newComponent);
}
;
_.requestLayout = function requestLayout_19(child){
  var paintable, paintable$iterator;
  if (!(this.height_0 == null || $equals_2(this.height_0, '')) && !(this.width_0 == null || $equals_2(this.width_0, ''))) {
    for (paintable$iterator = child.iterator_0(); paintable$iterator.hasNext();) {
      paintable = dynamicCast(paintable$iterator.next_0(), 26);
      $handleComponentRelativeSize_0(this.client, dynamicCast(paintable, 70));
    }
    return true;
  }
  $updateOpenTabSize_0(this);
  if ($updateSize(this.renderInformation, this.element_0)) {
    $updateTabScroller(this);
    $runWebkitOverflowAutoFix(this.tp);
    $runDescendentsLayout(this.client, this);
    (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isFirefox || $isIE9((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40))) && setStyleTemporarily($getFirstChildElement(this.tp.element_0), 'overflow', '');
    return false;
  }
   else {
    return true;
  }
}
;
_.setHeight = function setHeight_23(height){
  this.element_0.style['height'] = height;
  this.height_0 = height;
  $updateContentNodeHeight(this);
  if (!this.rendering) {
    $updateOpenTabSize_0(this);
    $updateTabScroller(this);
    $runWebkitOverflowAutoFix(this.tp);
    $runDescendentsLayout(this.client, this);
  }
}
;
_.setWidth = function setWidth_32(width){
  var contentWidth;
  if (this.width_0 == null && $equals_2(width, '') || this.width_0 != null && $equals_2(this.width_0, width)) {
    return;
  }
  this.element_0.style['width'] = width;
  $equals_2(width, '') && (width = null);
  this.width_0 = width;
  if (width == null) {
    this.renderSpace.width_0 = 0;
    this.contentNode.style['width'] = '';
  }
   else {
    contentWidth = (parseInt(this.element_0['offsetWidth']) || 0) - (this.borderW < 0 && (this.borderW = measureHorizontalBorder(this.contentNode)) , this.borderW);
    contentWidth < 0 && (contentWidth = 0);
    this.contentNode.style['width'] = contentWidth + 'px';
    this.renderSpace.width_0 = contentWidth;
  }
  if (!this.rendering) {
    (this.height_0 == null || $equals_2(this.height_0, '')) && updateRelativeChildrenAndSendSizeUpdateEvent_0(this.client, this.tp, this);
    $updateOpenTabSize_0(this);
    $updateTabScroller(this);
    $runWebkitOverflowAutoFix(this.tp);
    $runDescendentsLayout(this.client, this);
  }
}
;
_.updateCaption = function updateCaption_20(component, uidl){
}
;
_.updateFromUIDL = function updateFromUIDL_48(uidl, client){
  var $e0;
  this.rendering = true;
  Boolean(uidl[1]['cached']) || $handleStyleNames(this, uidl);
  $updateFromUIDL_8(this, uidl, client);
  if (this.cachedUpdate) {
    this.rendering = false;
    return;
  }
  if (this.width_0 == null || $equals_2(this.width_0, '')) {
    $showAllTabs(this);
    this.tabs.style['width'] = '';
    this.tabs.style['overflow'] = 'visible';
    $updateDynamicWidth(this);
  }
   else {
    this.tabs.style['width'] = '1px';
    this.tabs.style['overflow'] = 'hidden';
  }
  if (!(this.height_0 == null || $equals_2(this.height_0, ''))) {
    $updateContentNodeHeight(this);
    $updateOpenTabSize_0(this);
  }
  $updateTabScroller(this);
  $runWebkitOverflowAutoFix(this.tp);
  try {
    $handleComponentRelativeSize_0(client, $get_0(this.tp.children_0, $getVisibleWidget(this.tp)));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, 112))
      throw $e0;
  }
  $updateSize(this.renderInformation, this.element_0);
  this.waitingForResponse = false;
  this.rendering = false;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1};
_.borderW = -1;
_.contentNode = null;
_.currentStyle_0 = null;
_.deco = null;
_.height_0 = null;
_.previousVisibleWidget = null;
_.rendering = false;
_.scroller = null;
_.scrollerIndex = 0;
_.scrollerNext = null;
_.scrollerPrev = null;
_.tabs = null;
_.waitingForResponse = false;
_.width_0 = null;
function VTabsheet$1_0(this$0, val$tabIndex){
  this.this$0 = this$0;
  this.val$tabIndex = val$tabIndex;
}

function VTabsheet$1(){
}

_ = VTabsheet$1_0.prototype = VTabsheet$1.prototype = new Object_0;
_.execute_0 = function execute_59(){
  var parent_0;
  this.this$0.previousVisibleWidget = $get_0(this.this$0.tp.children_0, $getVisibleWidget(this.this$0.tp));
  (parent_0 = this.this$0.previousVisibleWidget.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).style['visibility'] = 'hidden';
  $addVariableToQueue(this.this$0.client, this.this$0.id_0, 'selected', $escapeVariableValue(dynamicCast($get_4(this.this$0.tabKeys, this.val$tabIndex), 1)), true, 115);
}
;
_.getClass$ = function getClass_746(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
_.val$tabIndex = 0;
function VTabsheet$2_0(val$style){
  this.val$style = val$style;
}

function VTabsheet$2(){
}

_ = VTabsheet$2_0.prototype = VTabsheet$2.prototype = new Object_0;
_.execute_0 = function execute_60(){
  this.val$style['whiteSpace'] = '';
}
;
_.getClass$ = function getClass_747(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.val$style = null;
function VTabsheet$PlaceHolder_0(){
  VLabel_1.call(this, '');
}

function VTabsheet$PlaceHolder(){
}

_ = VTabsheet$PlaceHolder_0.prototype = VTabsheet$PlaceHolder.prototype = new VLabel;
_.getClass$ = function getClass_748(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$PlaceHolder_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 26:1, 69:1, 70:1, 168:1, 171:1};
function $onClose(this$static){
  $onClose_0(this$static.closeHandler, new VTabsheet$VCloseEvent_0(this$static));
}

function $recalculateCaptionWidth(this$static){
  $setWidth_12(this$static.tabCaption, $getRequiredWidth_0(this$static.tabCaption) + 'px');
}

function $setEnabledOnServer(this$static, enabled){
  this$static.enabledOnServer = enabled;
  setStyleName(this$static.td, 'v-tabsheet-tabitemcell-disabled', !enabled);
}

function $setStyleNames(this$static, selected, first){
  setStyleName(this$static.td, 'v-tabsheet-tabitemcell-first', first);
  setStyleName(this$static.td, 'v-tabsheet-tabitemcell-selected', selected);
  setStyleName(this$static.td, 'v-tabsheet-tabitemcell-selected-first', selected && first);
  setStyleName(this$static.div, 'v-tabsheet-tabitem-selected', selected);
}

function $updateFromUIDL_20(this$static, tabUidl){
  var newStyleName;
  $updateCaption_5(this$static.tabCaption, tabUidl);
  newStyleName = tabUidl[1]['tabstyle'];
  if (newStyleName != null && newStyleName.length != 0) {
    if (!$equals_2(newStyleName, this$static.styleName)) {
      this$static.styleName != null && this$static.styleName.length != 0 && $removeClassName(this$static.td, 'v-tabsheet-tabitemcell-' + this$static.styleName);
      $addClassName(this$static.td, 'v-tabsheet-tabitemcell-' + newStyleName);
      this$static.styleName = newStyleName;
    }
  }
   else if (this$static.styleName != null) {
    $removeClassName(this$static.td, 'v-tabsheet-tabitemcell-' + this$static.styleName);
    this$static.styleName = null;
  }
}

function VTabsheet$Tab_0(tabBar){
  this.element_0 = $doc.createElement('td');
  this.td = this.element_0;
  this.tabBar = tabBar;
  this.td['className'] = 'v-tabsheet-tabitemcell';
  this.div = $doc.createElement('div');
  this.div['className'] = 'v-tabsheet-tabitem';
  this.td.appendChild(this.div);
  this.tabCaption = new VTabsheet$TabCaption_0(this, this.tabBar.tabsheet.client);
  $add_3(this, this.tabCaption);
}

function VTabsheet$Tab(){
}

_ = VTabsheet$Tab_0.prototype = VTabsheet$Tab.prototype = new SimplePanel;
_.getClass$ = function getClass_749(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$Tab_2_classLit;
}
;
_.getContainerElement = function getContainerElement_8(){
  return this.div;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 33:1, 69:1, 70:1, 75:1, 76:1, 172:1};
_.closeHandler = null;
_.div = null;
_.enabledOnServer = true;
_.hiddenOnServer = false;
_.styleName = null;
_.tabBar = null;
_.tabCaption = null;
function $addTab(this$static){
  var t, tabIndex;
  t = new VTabsheet$Tab_0(this$static);
  tabIndex = this$static.children_0.size_0;
  $insert(this$static, t, this$static.tr, tabIndex, true);
  tabIndex == 0 && $setStyleNames(t, false, true);
  $addDomHandler(t.tabCaption, this$static, ($clinit_15() , $clinit_15() , TYPE_1));
  t.closeHandler = this$static;
  return t;
}

function $getNextVisibleTab(this$static, i){
  var tabs;
  tabs = this$static.children_0.size_0;
  do {
    ++i;
  }
   while (i < tabs && $getTab(this$static, i).hiddenOnServer);
  return i == tabs?-1:i;
}

function $getPreviousVisibleTab(this$static, i){
  do {
    --i;
  }
   while (i >= 0 && $getTab(this$static, i).hiddenOnServer);
  return i;
}

function $getTab(this$static, index){
  if (index < 0 || index >= this$static.children_0.size_0) {
    return null;
  }
  return dynamicCast($get_0(this$static.children_0, index), 172);
}

function $isFirstVisibleTab(this$static, index){
  return $getNextVisibleTab(this$static, -1) == index;
}

function $onClose_0(this$static, event_0){
  var tab, tabIndex;
  tab = event_0.tab;
  if (!tab.enabledOnServer) {
    return;
  }
  tabIndex = $indexOf(this$static.children_0, tab);
  $sendTabClosedEvent(this$static.tabsheet, tabIndex);
}

function $removeTab(this$static, i){
  var tab;
  tab = $getTab(this$static, i);
  if (!tab) {
    return;
  }
  $remove_2(this$static, tab);
  tab == this$static.selected_0 && (this$static.selected_0 = null);
}

function $scrollLeft(this$static, currentFirstVisible){
  var newFirst, prevVisible;
  prevVisible = $getPreviousVisibleTab(this$static, currentFirstVisible);
  if (prevVisible == -1) {
    return -1;
  }
  newFirst = $getTab(this$static, prevVisible);
  newFirst.element_0.style.display = '';
  $setWidth_12(newFirst.tabCaption, $getRequiredWidth_0(newFirst.tabCaption) + 'px');
  return prevVisible;
}

function $scrollRight(this$static, currentFirstVisible){
  var currentFirst, nextVisible;
  nextVisible = $getNextVisibleTab(this$static, currentFirstVisible);
  if (nextVisible == -1) {
    return -1;
  }
  currentFirst = $getTab(this$static, currentFirstVisible);
  currentFirst.element_0.style.display = 'none';
  $setWidth_12(currentFirst.tabCaption, $getRequiredWidth_0(currentFirst.tabCaption) + 'px');
  return nextVisible;
}

function $selectTab(this$static, index){
  var newSelected, oldSelected;
  newSelected = $getTab(this$static, index);
  oldSelected = this$static.selected_0;
  $setStyleNames(newSelected, true, $getNextVisibleTab(this$static, -1) == index);
  !!oldSelected && oldSelected != newSelected && $setStyleNames(oldSelected, false, $isFirstVisibleTab(this$static, $indexOf(this$static.children_0, oldSelected)));
  this$static.selected_0 = newSelected;
  $setWidth_12(newSelected.tabCaption, $getRequiredWidth_0(newSelected.tabCaption) + 'px');
  $recalculateCaptionWidth($getTab(this$static, this$static.tabsheet.activeTabIndex));
}

function VTabsheet$TabBar_0(tabsheet){
  var el, tbody;
  this.children_0 = new WidgetCollection_0(this);
  this.tr = $doc.createElement('tr');
  this.spacerTd = $doc.createElement('td');
  this.tabsheet = tabsheet;
  el = $doc.createElement('table');
  tbody = $doc.createElement('tbody');
  el.appendChild(tbody);
  tbody.appendChild(this.tr);
  this.spacerTd['className'] = 'v-tabsheet-spacertd';
  this.tr.appendChild(this.spacerTd);
  this.spacerTd.appendChild($doc.createElement('div'));
  this.element_0 = el;
}

function VTabsheet$TabBar(){
}

_ = VTabsheet$TabBar_0.prototype = VTabsheet$TabBar.prototype = new ComplexPanel;
_.getClass$ = function getClass_750(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$TabBar_2_classLit;
}
;
_.onClick = function onClick_26(event_0){
  var caption, index;
  caption = dynamicCast(event_0.source, 70);
  index = $indexOf(this.children_0, caption.getParent());
  $onTabSelected(this.tabsheet, index);
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 39:1, 69:1, 70:1, 75:1};
_.selected_0 = null;
_.tabsheet = null;
function $fixTextWidth(this$static){
  var captionText, captionWidth, scrollWidth;
  captionText = this$static.captionText;
  if (!captionText) {
    return;
  }
  captionWidth = getRequiredWidth(captionText);
  scrollWidth = captionText.scrollWidth || 0;
  scrollWidth > captionWidth && (captionWidth = scrollWidth);
  captionText.style['width'] = captionWidth + ($clinit_9() , 'px');
}

function $getRequiredWidth_0(this$static){
  var width;
  width = $getRequiredWidth(this$static);
  !!this$static.closeButton && (width += getRequiredWidth(this$static.closeButton));
  return width;
}

function $setClosable_0(this$static, closable){
  this$static.closable = closable;
  if (closable && !this$static.closeButton) {
    this$static.closeButton = $doc.createElement('span');
    this$static.closeButton.innerHTML = '&times;';
    this$static.closeButton.className = 'v-tabsheet-caption-close';
    this$static.element_0.insertBefore(this$static.closeButton, this$static.element_0.lastChild);
  }
   else if (!closable && !!this$static.closeButton) {
    this$static.element_0.removeChild(this$static.closeButton);
    this$static.closeButton = null;
  }
  closable?$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-closable', true):$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-closable', false);
}

function $setWidth_12(this$static, width){
  this$static.element_0.style['width'] = width;
  $isIE7(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $fixTextWidth(this$static);
}

function $updateCaption_5(this$static, uidl){
  var ret, tooltipInfo;
  if ('description' in uidl[1] || 'error' in uidl[1]) {
    tooltipInfo = new TooltipInfo_0;
    tooltipInfo.title_0 = uidl[1]['description'];
    'error' in uidl[1] && (tooltipInfo.errorUidl = uidl[1]['error'] , undefined);
    $registerTooltip(this$static.client, this$static.tab.tabBar.tabsheet, this$static.element_0, tooltipInfo);
  }
   else {
    $registerTooltip(this$static.client, this$static.tab.tabBar.tabsheet, this$static.element_0, null);
  }
  ret = $updateCaption(this$static, uidl);
  $setClosable_0(this$static, 'closable' in uidl[1]);
  return ret;
}

function VTabsheet$TabCaption_0(tab, client){
  VCaption_0.call(this, null, client);
  this.client = client;
  this.tab = tab;
}

function VTabsheet$TabCaption(){
}

_ = VTabsheet$TabCaption_0.prototype = VTabsheet$TabCaption.prototype = new VCaption;
_.getClass$ = function getClass_751(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$TabCaption_2_classLit;
}
;
_.getRequiredWidth = function getRequiredWidth_1(){
  return $getRequiredWidth_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_43(event_0){
  if (this.closable && $eventGetTypeInt(event_0.type) == 1 && event_0.target == this.closeButton) {
    $onClose(this.tab);
    event_0.stopPropagation();
    event_0.preventDefault();
  }
  $onBrowserEvent_2(this, event_0);
  $eventGetTypeInt(event_0.type) == 32768 && $tabSizeMightHaveChanged(this.tab.tabBar.tabsheet);
  $handleTooltipEvent(this.client.tooltip, event_0, this.tab.tabBar.tabsheet, this.element_0);
}
;
_.setWidth = function setWidth_33(width){
  this.element_0.style['width'] = width;
  $isIE7(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $fixTextWidth(this);
}
;
_.updateCaption_0 = function updateCaption_21(uidl){
  return $updateCaption_5(this, uidl);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 114:1};
_.client = null;
_.closable = false;
_.closeButton = null;
_.tab = null;
function VTabsheet$VCloseEvent_0(tab){
  this.tab = tab;
}

function VTabsheet$VCloseEvent(){
}

_ = VTabsheet$VCloseEvent_0.prototype = VTabsheet$VCloseEvent.prototype = new Object_0;
_.getClass$ = function getClass_752(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$VCloseEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
_.tab = null;
function $add_10(this$static, w){
  var el;
  el = $createContainerElement();
  this$static.element_0.appendChild(el);
  $removeFromParent_0(w);
  $add_7(this$static.children_0, w);
  el.appendChild(w.element_0);
  $setParent(w, this$static);
}

function $createContainerElement(){
  var el;
  el = $doc.createElement('div');
  el.style['position'] = 'absolute';
  el.style['overflow'] = 'auto';
  $hide_3(el);
  return el;
}

function $fixVisibleTabSize(this$static, width, height, minWidth){
  var dynamicHeight, wrapperDiv, parent_0, parent_1;
  if (!this$static.visibleWidget) {
    return;
  }
  dynamicHeight = false;
  if (height < 0) {
    height = this$static.visibleWidget.getOffsetHeight();
    dynamicHeight = true;
  }
  width < 0 && (width = this$static.visibleWidget.getOffsetWidth());
  width < minWidth && (width = minWidth);
  wrapperDiv = (parent_0 = this$static.visibleWidget.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  this$static.element_0.style['width'] = width + ($clinit_9() , 'px');
  wrapperDiv.style['width'] = width + 'px';
  dynamicHeight && (height = this$static.visibleWidget.getOffsetHeight());
  this$static.element_0.style['height'] = height + 'px';
  wrapperDiv.style['height'] = height + 'px';
  !!this$static.visibleWidget && runWebkitOverflowAutoFix((parent_1 = this$static.visibleWidget.element_0.parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1));
}

function $getTouchScrollDelegate_2(this$static){
  !this$static.touchScrollDelegate && (this$static.touchScrollDelegate = new TouchScrollDelegate_0(initValues(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, {30:1, 35:1}, 0, [])));
  return this$static.touchScrollDelegate;
}

function $getVisibleWidget(this$static){
  return $indexOf(this$static.children_0, this$static.visibleWidget);
}

function $hide_3(e){
  e.style['visibility'] = 'hidden';
  e.style['top'] = '-100000px';
  e.style['left'] = '-100000px';
}

function $insert_2(this$static, w, beforeIndex){
  var el;
  el = $createContainerElement();
  $insertChild(this$static.element_0, el, beforeIndex);
  $insert(this$static, w, el, beforeIndex, false);
}

function $remove_12(this$static, w){
  var child, parent_0, removed;
  child = w.element_0;
  parent_0 = null;
  !!child && (parent_0 = $getParentElement(child));
  removed = $remove_2(this$static, w);
  if (removed) {
    this$static.visibleWidget == w && (this$static.visibleWidget = null);
    !!parent_0 && this$static.element_0.removeChild(parent_0);
  }
  return removed;
}

function $replaceComponent(this$static, oldComponent, newComponent){
  var isVisible, widgetIndex, el;
  isVisible = this$static.visibleWidget == oldComponent;
  widgetIndex = $indexOf(this$static.children_0, oldComponent);
  $remove_12(this$static, oldComponent);
  el = $createContainerElement();
  $insertChild(this$static.element_0, el, widgetIndex);
  $insert(this$static, newComponent, el, widgetIndex, false);
  isVisible && $showWidget(this$static, widgetIndex);
}

function $runWebkitOverflowAutoFix(this$static){
  var parent_0;
  !!this$static.visibleWidget && runWebkitOverflowAutoFix((parent_0 = this$static.visibleWidget.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0));
}

function $showWidget(this$static, index){
  var newVisible, parent_0, parent_1;
  $checkIndexBoundsForAccess(this$static, index);
  newVisible = $get_0(this$static.children_0, index);
  if (this$static.visibleWidget != newVisible) {
    !!this$static.visibleWidget && $hide_3((parent_0 = this$static.visibleWidget.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0));
    this$static.visibleWidget = newVisible;
    $unHide((parent_1 = this$static.visibleWidget.element_0.parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1));
  }
}

function $unHide(e){
  e.style['top'] = '0px';
  e.style['left'] = '0px';
  e.style['visibility'] = '';
}

function VTabsheetPanel_0(){
  this.children_0 = new WidgetCollection_0(this);
  this.element_0 = $doc.createElement('div');
  this.eventsToSink == -1?sinkEvents(this.element_0, 15728640 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 15728640);
  $addDomHandler(this, new VTabsheetPanel$1_0(this), ($clinit_31() , $clinit_31() , TYPE_17));
}

function VTabsheetPanel(){
}

_ = VTabsheetPanel_0.prototype = VTabsheetPanel.prototype = new ComplexPanel;
_.add_1 = function add_11(w){
  $add_10(this, w);
}
;
_.getClass$ = function getClass_753(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheetPanel_2_classLit;
}
;
_.remove_2 = function remove_20(w){
  return $remove_12(this, w);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 69:1, 70:1, 75:1};
_.touchScrollDelegate = null;
_.visibleWidget = null;
function VTabsheetPanel$1_0(this$0){
  this.this$0 = this$0;
}

function VTabsheetPanel$1(){
}

_ = VTabsheetPanel$1_0.prototype = VTabsheetPanel$1.prototype = new Object_0;
_.getClass$ = function getClass_754(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheetPanel$1_2_classLit;
}
;
_.onTouchStart = function onTouchStart_7(event_0){
  var childNodes, elements, i;
  childNodes = this.this$0.element_0.childNodes;
  elements = initDim(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, {30:1, 35:1}, 0, childNodes.length, 0);
  for (i = 0; i < elements.length; ++i) {
    setCheck(elements, i, childNodes[i]);
  }
  $getTouchScrollDelegate_2(this.this$0).scrollableElements = elements;
  $onTouchStart($getTouchScrollDelegate_2(this.this$0), event_0);
}
;
_.castableTypeMap$ = {12:1, 53:1};
_.this$0 = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader30_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader30'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$44$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$44$1'), Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTabsheet$1'), Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTabsheet$2'), Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$PlaceHolder_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTabsheet$PlaceHolder'), Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$Tab_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTabsheet$Tab'), Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$TabBar_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTabsheet$TabBar'), Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$TabCaption_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTabsheet$TabCaption'), Lcom_vaadin_terminal_gwt_client_ui_VTabsheet$VCloseEvent_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTabsheet$VCloseEvent'), Lcom_vaadin_terminal_gwt_client_ui_VTabsheetPanel_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTabsheetPanel'), Lcom_vaadin_terminal_gwt_client_ui_VTabsheetPanel$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTabsheetPanel$1');
$entry(onLoad_22)();
