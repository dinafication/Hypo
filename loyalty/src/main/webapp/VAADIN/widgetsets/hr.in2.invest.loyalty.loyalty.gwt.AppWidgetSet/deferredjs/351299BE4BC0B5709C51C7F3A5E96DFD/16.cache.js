function $runCallbacks_6(){
  var $e0, e, handler;
  while (callbacksHead_6) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_6 = callbacksHead_6.next;
    !callbacksHead_6 && (callbacksTail_6 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VTreeTable_2_classLit, new WidgetMapImpl$23$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VTreeTable_2_classLit, new WidgetMapImpl$23$1_0);
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

function AsyncLoader16_0(){
}

function onLoad_6(){
  instance_7 = new AsyncLoader16_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 16);
  !!$stats && $stats($createStatsEvent('runCallbacks16', 'begin', -1, -1));
  instance_7.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks16', 'end', -1, -1));
}

function AsyncLoader16(){
}

_ = AsyncLoader16_0.prototype = AsyncLoader16.prototype = new Object_0;
_.getClass$ = function getClass_176(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader16_2_classLit;
}
;
_.runCallbacks = function runCallbacks_6(){
  $runCallbacks_6();
}
;
_.castableTypeMap$ = {};
function $getProperty(this$static, name_0){
  var cs = this$static.computedStyle;
  var elem = this$static.elem;
  if (name_0.indexOf('border') > -1 && name_0.indexOf('Width') > -1) {
    var borderStyleProp = name_0.substring(0, name_0.length - 5) + 'Style';
    if (cs.getPropertyValue)
      var borderStyle = cs.getPropertyValue(borderStyleProp);
    else 
      var borderStyle = cs[borderStyleProp];
    if (borderStyle == 'none')
      return '0px';
  }
  if (cs.getPropertyValue) {
    name_0 = name_0.replace(/([A-Z])/g, '-$1').toLowerCase();
    var ret = cs.getPropertyValue(name_0);
  }
   else {
    var ret = cs[name_0];
    var style = elem.style;
    if (!/^\d+(px)?$/i.test(ret) && /^\d/.test(ret)) {
      var left = style.left, rsLeft = elem.runtimeStyle.left;
      elem.runtimeStyle.left = cs.left;
      style.left = ret || 0;
      ret = style.pixelLeft + 'px';
      style.left = left;
      elem.runtimeStyle.left = rsLeft;
    }
  }
  if (name_0.indexOf('margin') > -1 && ret == 'auto') {
    return '0px';
  }
  name_0 == 'width' && ret == 'auto'?(ret = elem.clientWidth + 'px'):name_0 == 'height' && ret == 'auto' && (ret = elem.clientHeight + 'px');
  return ret;
}

function ComputedStyle_0(elem){
  this.computedStyle = getComputedStyle_0(elem);
  this.elem = elem;
}

function getComputedStyle_0(elem){
  if (elem.nodeType != 1) {
    return {};
  }
  if ($wnd.document.defaultView && $wnd.document.defaultView.getComputedStyle) {
    return $wnd.document.defaultView.getComputedStyle(elem, null);
  }
  if (elem.currentStyle) {
    return elem.currentStyle;
  }
}

function ComputedStyle(){
}

_ = ComputedStyle_0.prototype = ComputedStyle.prototype = new Object_0;
_.getClass$ = function getClass_453(){
  return Lcom_vaadin_terminal_gwt_client_ComputedStyle_2_classLit;
}
;
_.castableTypeMap$ = {};
_.computedStyle = null;
_.elem = null;
function WidgetMapImpl$23$1_0(){
}

function WidgetMapImpl$23$1(){
}

_ = WidgetMapImpl$23$1_0.prototype = WidgetMapImpl$23$1.prototype = new Object_0;
_.get = function get_15(){
  return new VTreeTable_0;
}
;
_.getClass$ = function getClass_513(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$23$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $handleNavigation_3(this$static, keycode, ctrl, shift){
  var body, focusedRow, iterator, next, pendingNavigationEvent;
  if (this$static.collapseRequest || this$static.focusParentResponsePending) {
    if (this$static.pendingNavigationEvents.size_0 < 10) {
      pendingNavigationEvent = new VTreeTable$PendingNavigationEvent_0(keycode, ctrl, shift);
      $addLast(this$static.pendingNavigationEvents, pendingNavigationEvent);
    }
    return true;
  }
  focusedRow = dynamicCast(this$static.focusedRow, 176);
  if (focusedRow) {
    if (focusedRow.canHaveChildren && (keycode == 39 && !focusedRow.open_0 || keycode == 37 && focusedRow.open_0)) {
      ctrl || $addVariableToQueue(this$static.client, this$static.paintableId, 'selectCollapsed', 'true', false, 98);
      $sendSelectedRows_0(this$static, false);
      this$static.selectionPending = false;
      $sendToggleCollapsedUpdate(this$static, '' + focusedRow.rowKey);
      return true;
    }
     else if (keycode == 39 && focusedRow.open_0) {
      body = dynamicCast(focusedRow.parent_0, 177);
      iterator = $listIterator(body.renderedRows, 0);
      next = null;
      while (iterator.currentNode != iterator.this$0.header) {
        next = dynamicCast($next_7(iterator), 176);
        if (next == focusedRow) {
          next = dynamicCast($next_7(iterator), 176);
          break;
        }
      }
      if (next) {
        if (next.depth > focusedRow.depth) {
          this$static.selectionPending = true;
          return $handleNavigation_1(this$static, 40, ctrl, shift);
        }
      }
       else {
        this$static.selectionPending = true;
        return $handleNavigation_1(this$static, 40, ctrl, shift);
      }
    }
     else if (keycode == 37) {
      $addVariableToQueue(this$static.client, this$static.paintableId, 'focusParent', $escapeVariableValue('' + focusedRow.rowKey), true, 115);
      this$static.focusParentResponsePending = true;
      return true;
    }
  }
  return $handleNavigation_1(this$static, keycode, ctrl, shift);
}

function $sendToggleCollapsedUpdate(this$static, rowKey){
  this$static.collapsedRowKey = rowKey;
  this$static.collapseRequest = true;
  $addVariableToQueue(this$static.client, this$static.paintableId, 'toggleCollapsed', $escapeVariableValue(rowKey), true, 115);
}

function VTreeTable_0(){
  VScrollTable_0.call(this);
  this.pendingNavigationEvents = new LinkedList_0;
}

function VTreeTable(){
}

_ = VTreeTable_0.prototype = VTreeTable.prototype = new VScrollTable;
_.addAndRemoveRows = function addAndRemoveRows_0(partialRowAdditions){
  var bi;
  if (!partialRowAdditions) {
    return;
  }
  if (this.animationsEnabled && (bi = ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40) , !(bi.browserDetails.isIE && bi.browserDetails.browserMajorVersion == 6 || bi.browserDetails.isIE && bi.browserDetails.browserMajorVersion == 7 || bi.browserDetails.isSafari && bi.browserDetails.browserMajorVersion == 4))) {
    if ('hide' in partialRowAdditions[1]) {
      $unlinkRowsAnimatedAndUpdateCacheWhenFinished(this.scrollBody, partialRowAdditions[1]['firstprowix'], partialRowAdditions[1]['numprows']);
    }
     else {
      $insertRowsAnimated(this.scrollBody, partialRowAdditions, partialRowAdditions[1]['firstprowix'], partialRowAdditions[1]['numprows']);
      $discardRowsOutsideCacheWindow(this);
    }
  }
   else {
    $addAndRemoveRows(this, partialRowAdditions);
  }
}
;
_.buildCaptionHtmlSnippet = function buildCaptionHtmlSnippet_0(uidl){
  var s;
  if ($equals_2(uidl[0], 'column')) {
    return $buildCaptionHtmlSnippet(this, uidl);
  }
   else {
    s = uidl[1]['caption'];
    return s;
  }
}
;
_.createScrollBody = function createScrollBody_0(){
  this.scrollBody = new VTreeTable$VTreeTableScrollBody_0(this);
  return this.scrollBody;
}
;
_.getClass$ = function getClass_772(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable_2_classLit;
}
;
_.handleNavigation = function handleNavigation_0(keycode, ctrl, shift){
  return $handleNavigation_3(this, keycode, ctrl, shift);
}
;
_.onBrowserEvent = function onBrowserEvent_47(event_0){
  $onBrowserEvent(this, event_0);
  $eventGetTypeInt(event_0.type) == 512 && this.selectionPending && ($sendSelectedRows_0(this, this.immediate) , this.selectionPending = false , undefined);
}
;
_.reOrderColumn = function reOrderColumn_0(columnKey, newIndex){
  $reOrderColumn(this, columnKey, newIndex);
  $sendPendingVariableChanges(this.client);
}
;
_.sendSelectedRows = function sendSelectedRows_0(immediately){
  $sendSelectedRows_0(this, immediately);
  this.selectionPending = false;
}
;
_.setStyleName = function setStyleName_8(style){
  this.element_0['className'] = style + ' v-treetable';
}
;
_.updateFromUIDL = function updateFromUIDL_51(uidl, client){
  var event_0, key, oldTotalRows, row, scrollPosition, scrollPosition2, widget;
  widget = null;
  scrollPosition = 0;
  if (this.collapseRequest) {
    widget = dynamicCast($get_0(this.children_0, 1), 174);
    scrollPosition = widget.element_0['_vScrollTop'] || null?parseInt(widget.element_0['_vScrollTop']) || 0:widget.element_0.scrollTop || 0;
  }
  this.animationsEnabled = Boolean(uidl[1]['animate']);
  this.colIndexOfHierarchy = 'hci' in uidl[1]?uidl[1]['hci']:0;
  oldTotalRows = this.totalRows;
  $updateFromUIDL_19(this, uidl, client);
  if (this.collapseRequest) {
    if (this.collapsedRowKey != null && !!this.scrollBody) {
      row = $getRenderedRowByKey(this, this.collapsedRowKey);
      if (row) {
        $setRowFocus(this, row);
        $isFocusable(this) && $setFocus_2(this.scrollBodyPanel, true);
      }
    }
    scrollPosition2 = widget.element_0['_vScrollTop'] || null?parseInt(widget.element_0['_vScrollTop']) || 0:widget.element_0.scrollTop || 0;
    scrollPosition != scrollPosition2 && $setScrollPosition(widget, scrollPosition);
    $onScroll(this, null);
  }
  if (this.collapseRequest || !('pagelength' in uidl[1]) && this.totalRows != oldTotalRows) {
    $cancel_0(this.lazyAdjustColumnWidths);
    $run_1(this.lazyAdjustColumnWidths);
    this.collapseRequest = false;
  }
  if ('focusedRow' in uidl[1]) {
    key = uidl[1]['focusedRow'];
    $setRowFocus(this, $getRenderedRowByKey(this, key));
    this.focusParentResponsePending = false;
  }
   else 
    'clearFocusPending' in uidl[1] && (this.focusParentResponsePending = false);
  while (!this.collapseRequest && !this.focusParentResponsePending && this.pendingNavigationEvents.size_0 != 0) {
    event_0 = dynamicCast($removeFirst(this.pendingNavigationEvents), 175);
    $handleNavigation_3(this, event_0.keycode, event_0.ctrl, event_0.shift);
  }
}
;
_.updateTotalRows = function updateTotalRows_0(uidl){
  var newTotalRows;
  newTotalRows = uidl[1]['totalrows'];
  this.totalRows = newTotalRows;
}
;
_.castableTypeMap$ = {5:1, 6:1, 8:1, 10:1, 12:1, 13:1, 15:1, 20:1, 21:1, 22:1, 25:1, 26:1, 27:1, 33:1, 69:1, 70:1, 75:1, 115:1, 180:1};
_.animationsEnabled = false;
_.colIndexOfHierarchy = 0;
_.collapseRequest = false;
_.collapsedRowKey = null;
_.focusParentResponsePending = false;
_.scrollBody = null;
_.selectionPending = false;
function VTreeTable$PendingNavigationEvent_0(keycode, ctrl, shift){
  this.keycode = keycode;
  this.ctrl = ctrl;
  this.shift = shift;
}

function VTreeTable$PendingNavigationEvent(){
}

_ = VTreeTable$PendingNavigationEvent_0.prototype = VTreeTable$PendingNavigationEvent.prototype = new Object_0;
_.getClass$ = function getClass_773(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$PendingNavigationEvent_2_classLit;
}
;
_.toString$ = function toString_17(){
  var string;
  string = 'Keyboard event: ' + this.keycode;
  this.ctrl && (string += ' + ctrl');
  this.shift && (string += ' + shift');
  return string;
}
;
_.castableTypeMap$ = {175:1};
_.ctrl = false;
_.keycode = 0;
_.shift = false;
function $detectIdent(this$static, vTreeTableRow){
  var iterator, next;
  this$static.identWidth = vTreeTableRow.treeSpacer.offsetWidth || 0;
  if (this$static.identWidth == 0) {
    this$static.identWidth = -1;
    return;
  }
  iterator = $listIterator(this$static.renderedRows, 0);
  while (iterator.currentNode != iterator.this$0.header) {
    next = dynamicCast($next_7(iterator), 176);
    next.this$1_0.identWidth > 0 && next.depth != 0 && (next.treeSpacer.style['width'] = (next.depth + 1) * next.this$1_0.identWidth + ($clinit_9() , 'px') , undefined);
  }
}

function $insertRowsAnimated(this$static, rowData, firstIndex, rows){
  var anim, insertedRows;
  insertedRows = $insertAndReindexRows(this$static, rowData, firstIndex, rows);
  anim = new VTreeTable$VTreeTableScrollBody$RowExpandAnimation_0(this$static, insertedRows);
  $run(anim, 150, (new Date).getTime());
  return insertedRows;
}

function $unlinkRowsAnimatedAndUpdateCacheWhenFinished(this$static, firstIndex, rows){
  var anim, ix, row, rowsToDelete;
  rowsToDelete = new ArrayList_0;
  for (ix = firstIndex; ix < firstIndex + rows; ++ix) {
    row = $getRowByRowIndex(this$static, ix);
    !!row && (setCheck(rowsToDelete.array, rowsToDelete.size_0++, row) , true);
  }
  anim = new VTreeTable$VTreeTableScrollBody$1_0(this$static, rowsToDelete, firstIndex, rows);
  $run(anim, 150, (new Date).getTime());
}

function VTreeTable$VTreeTableScrollBody_0(this$0){
  this.this$0 = this$0;
  VScrollTable$VScrollTableBody_0.call(this, this$0);
}

function VTreeTable$VTreeTableScrollBody(){
}

_ = VTreeTable$VTreeTableScrollBody_0.prototype = VTreeTable$VTreeTableScrollBody.prototype = new VScrollTable$VScrollTableBody;
_.createRow = function createRow_0(uidl, aligns2){
  if ('gen_html' in uidl[1]) {
    return new VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow_0(this, uidl, aligns2);
  }
  return new VTreeTable$VTreeTableScrollBody$VTreeTableRow_0(this, uidl, aligns2);
}
;
_.getClass$ = function getClass_774(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 69:1, 70:1, 75:1, 177:1};
_.identWidth = -1;
_.this$0 = null;
function $animateRowHeights(this$static, progress){
  var height, ix, rh, vlh;
  rh = $getRowHeight(this$static.this$1_1, false);
  vlh = this$static.calculateHeightOfAllVisibleLines(progress, rh);
  ix = 0;
  while (ix < this$static.rows_1.size_0) {
    height = vlh < rh?vlh:rh;
    dynamicCast($get_4(this$static.rows_1, ix), 78).element_0.style['height'] = height + 'px';
    vlh -= height;
    ++ix;
  }
}

function $onComplete_0(this$static){
  var row, row$iterator, tableBodyParent, parent_0;
  $restoreTableAfterAnimation(this$static.preparator);
  for (row$iterator = new AbstractList$IteratorImpl_0(this$static.rows_1); row$iterator.i < row$iterator.this$0_0.size_1();) {
    row = dynamicCast($next_5(row$iterator), 78);
    $resetCellWrapperDivsDisplayProperty(row);
    setStyleName(row.getStyleElement(), 'v-table-row-animating', false);
  }
  tableBodyParent = (parent_0 = this$static.this$1_1.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  tableBodyParent.removeChild(this$static.cloneDiv);
}

function $resetCellWrapperDivsDisplayProperty(row){
  var ix, tr, td;
  tr = row.element_0;
  for (ix = 0; ix < tr.childNodes.length; ++ix) {
    (td = tr.childNodes[ix] , td.childNodes[0]).style['display'] = '';
  }
}

function $setCellWrapperDivsToDisplayNone(row){
  var ix, tr, td;
  tr = row.element_0;
  for (ix = 0; ix < tr.childNodes.length; ++ix) {
    (td = tr.childNodes[ix] , td.childNodes[0]).style['display'] = ($clinit_4() , 'none');
  }
}

function VTreeTable$VTreeTableScrollBody$RowExpandAnimation_0(this$1, rows){
  var row, row$iterator, tableBody, tableBodyParent, clonedTR;
  this.this$1_1 = this$1;
  this.rows_1 = rows;
  this.cloneDiv = $doc.createElement('div');
  $addClassName(this.cloneDiv, 'v-treetable-animation-clone-wrapper');
  this.cloneTable = $doc.createElement('table');
  $addClassName(this.cloneTable, 'v-treetable-animation-clone');
  this.cloneDiv.appendChild(this.cloneTable);
  tableBody = this.this$1_1.element_0;
  tableBodyParent = $getParentElement(tableBody);
  $insertAfter(tableBodyParent, this.cloneDiv, tableBody);
  this.preparator = new VTreeTable$VTreeTableScrollBody$AnimationPreparator_0(this$1, dynamicCast((checkIndex(0, rows.size_0) , rows.array[0]), 78).index_0 - 1);
  $prepareTableForAnimation(this.preparator);
  for (row$iterator = new AbstractList$IteratorImpl_0(rows); row$iterator.i < row$iterator.this$0_0.size_1();) {
    row = dynamicCast($next_5(row$iterator), 78);
    clonedTR = row.element_0.cloneNode(true);
    clonedTR.style['visibility'] = ($clinit_10() , 'visible');
    this.cloneTable.appendChild(clonedTR);
    setStyleName(row.getStyleElement(), 'v-table-row-animating', true);
    $setCellWrapperDivsToDisplayNone(row);
    row.element_0.style['height'] = this.getInitialHeight();
  }
}

function VTreeTable$VTreeTableScrollBody$RowExpandAnimation(){
}

_ = VTreeTable$VTreeTableScrollBody$RowExpandAnimation_0.prototype = VTreeTable$VTreeTableScrollBody$RowExpandAnimation.prototype = new Animation;
_.calculateDivOffset = function calculateDivOffset(progress, rh){
  return progress * this.rows_1.size_0 * rh;
}
;
_.calculateHeightOfAllVisibleLines = function calculateHeightOfAllVisibleLines(progress, rh){
  return this.rows_1.size_0 * rh * progress;
}
;
_.getBaseOffset = function getBaseOffset(){
  return ($getAbsoluteTop(dynamicCast($get_4(this.rows_1, 0), 78).element_0) | 0) - ($getAbsoluteTop(dynamicCast($get_4(this.rows_1, 0), 78).parent_0.element_0) | 0) - this.rows_1.size_0 * $getRowHeight(this.this$1_1, false);
}
;
_.getClass$ = function getClass_775(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$RowExpandAnimation_2_classLit;
}
;
_.getInitialHeight = function getInitialHeight(){
  return '0px';
}
;
_.onComplete = function onComplete_2(){
  $onComplete_0(this);
}
;
_.onUpdate = function onUpdate_3(progress){
  var offset;
  offset = this.calculateDivOffset(progress, $getRowHeight(this.this$1_1, false));
  this.cloneDiv.style['top'] = this.getBaseOffset() + offset + ($clinit_9() , 'px');
  $animateRowHeights(this, progress);
}
;
_.castableTypeMap$ = {85:1};
_.cloneDiv = null;
_.cloneTable = null;
_.preparator = null;
_.rows_1 = null;
_.this$1_1 = null;
function VTreeTable$VTreeTableScrollBody$RowCollapseAnimation(){
}

_ = VTreeTable$VTreeTableScrollBody$RowCollapseAnimation.prototype = new VTreeTable$VTreeTableScrollBody$RowExpandAnimation;
_.calculateDivOffset = function calculateDivOffset_0(progress, rh){
  return -(progress * this.rows_1.size_0 * rh);
}
;
_.calculateHeightOfAllVisibleLines = function calculateHeightOfAllVisibleLines_0(progress, rh){
  return this.rows_0.size_0 * rh * (1 - progress);
}
;
_.getBaseOffset = function getBaseOffset_0(){
  return $getRowHeight(this.this$1_0, false);
}
;
_.getClass$ = function getClass_776(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$RowCollapseAnimation_2_classLit;
}
;
_.getInitialHeight = function getInitialHeight_0(){
  return $getRowHeight(this.this$1_0, false) + 'px';
}
;
_.castableTypeMap$ = {85:1};
_.rows_0 = null;
_.this$1_0 = null;
function VTreeTable$VTreeTableScrollBody$1_0(this$1, $anonymous0, val$firstIndex, val$rows){
  this.this$1 = this$1;
  this.val$firstIndex = val$firstIndex;
  this.val$rows = val$rows;
  this.this$1_0 = this$1;
  VTreeTable$VTreeTableScrollBody$RowExpandAnimation_0.call(this, this$1, $anonymous0);
  this.rows_0 = $anonymous0;
}

function VTreeTable$VTreeTableScrollBody$1(){
}

_ = VTreeTable$VTreeTableScrollBody$1_0.prototype = VTreeTable$VTreeTableScrollBody$1.prototype = new VTreeTable$VTreeTableScrollBody$RowCollapseAnimation;
_.getClass$ = function getClass_777(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$1_2_classLit;
}
;
_.onComplete = function onComplete_3(){
  $onComplete_0(this);
  $unlinkAndReindexRows(this.this$1, this.val$firstIndex, this.val$rows);
  $discardRowsOutsideCacheWindow(this.this$1.this$0);
  $ensureCacheFilled(this.this$1);
}
;
_.castableTypeMap$ = {85:1};
_.this$1 = null;
_.val$firstIndex = 0;
_.val$rows = 0;
function $copyTRBackgroundsToTDs(row){
  var backgroundAttachment, backgroundClip, backgroundColor, backgroundImage, backgroundOrigin, cs, ix, td, tr, clr, cs_0, img;
  tr = row.element_0;
  cs = new ComputedStyle_0(tr);
  backgroundAttachment = $getProperty(cs, 'backgroundAttachment');
  backgroundClip = $getProperty(cs, 'backgroundClip');
  backgroundColor = $getProperty(cs, 'backgroundColor');
  backgroundImage = $getProperty(cs, 'backgroundImage');
  backgroundOrigin = $getProperty(cs, 'backgroundOrigin');
  for (ix = 0; ix < tr.childNodes.length; ++ix) {
    td = tr.childNodes[ix];
    if (!(cs_0 = new ComputedStyle_0(td) , clr = $getProperty(cs_0, 'backgroundColor') , img = $getProperty(cs_0, 'backgroundImage') , !($equals_2('rgba(0, 0, 0, 0)', $trim(clr)) || $equals_2('transparent', $trim(clr)) || img == null))) {
      td.style['backgroundAttachment'] = backgroundAttachment;
      td.style['backgroundClip'] = backgroundClip;
      td.style['backgroundColor'] = backgroundColor;
      td.style['backgroundImage'] = backgroundImage;
      td.style['backgroundOrigin'] = backgroundOrigin;
    }
  }
}

function $prepareTableForAnimation(this$static){
  var ix, row;
  ix = this$static.lastItemIx;
  while (row = $getRowByRowIndex(this$static.this$1, ix)) {
    $copyTRBackgroundsToTDs(row);
    --ix;
  }
}

function $restoreStyleForTDsInRow(row){
  var ix, td, tr;
  tr = row.element_0;
  for (ix = 0; ix < tr.childNodes.length; ++ix) {
    td = tr.childNodes[ix];
    td.style['backgroundAttachment'] = '';
    td.style['backgroundClip'] = '';
    td.style['backgroundColor'] = '';
    td.style['backgroundImage'] = '';
    td.style['backgroundOrigin'] = '';
  }
}

function $restoreTableAfterAnimation(this$static){
  var ix, row;
  ix = this$static.lastItemIx;
  while (row = $getRowByRowIndex(this$static.this$1, ix)) {
    $restoreStyleForTDsInRow(row);
    --ix;
  }
}

function VTreeTable$VTreeTableScrollBody$AnimationPreparator_0(this$1, lastItemIx){
  this.this$1 = this$1;
  this.lastItemIx = lastItemIx;
}

function VTreeTable$VTreeTableScrollBody$AnimationPreparator(){
}

_ = VTreeTable$VTreeTableScrollBody$AnimationPreparator_0.prototype = VTreeTable$VTreeTableScrollBody$AnimationPreparator.prototype = new Object_0;
_.getClass$ = function getClass_778(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$AnimationPreparator_2_classLit;
}
;
_.castableTypeMap$ = {};
_.lastItemIx = 0;
_.this$1 = null;
function $addTreeSpacer(this$static, rowUidl){
  var classname, container, icon;
  if ($cellShowsTreeHierarchy(this$static, this$static.element_0.childNodes.length - 1)) {
    container = this$static.element_0.lastChild.firstChild;
    if ('icon' in rowUidl[1]) {
      icon = $doc.createElement('img');
      icon.className = 'v-icon';
      icon.alt = 'icon';
      icon.src = $translateVaadinUri(this$static.this$1_0.this$0.client, rowUidl[1]['icon']);
      container.insertBefore(icon, container.firstChild);
    }
    classname = 'v-treetable-treespacer';
    if (Boolean(rowUidl[1]['ca'])) {
      this$static.canHaveChildren = true;
      this$static.open_0 = Boolean(rowUidl[1]['open']);
      classname += this$static.open_0?' v-treetable-node-open':' v-treetable-node-closed';
    }
    this$static.treeSpacer = $doc.createElement('span');
    this$static.treeSpacer.className = classname;
    $insertFirst(container, this$static.treeSpacer);
    this$static.depth = 'depth' in rowUidl[1]?rowUidl[1]['depth']:0;
    this$static.this$1_0.identWidth > 0 && this$static.depth != 0 && (this$static.treeSpacer.style['width'] = (this$static.depth + 1) * this$static.this$1_0.identWidth + ($clinit_9() , 'px') , undefined);
    this$static.isTreeCellAdded = true;
    return true;
  }
  return false;
}

function $cellShowsTreeHierarchy(this$static, curColIndex){
  if (this$static.isTreeCellAdded) {
    return false;
  }
  return curColIndex == this$static.this$1_0.this$0.colIndexOfHierarchy + (this$static.this$1_0.this$0.showRowHeaders?1:0);
}

function VTreeTable$VTreeTableScrollBody$VTreeTableRow_0(this$1, uidl, aligns2){
  this.this$1_0 = this$1;
  VScrollTable$VScrollTableBody$VScrollTableRow_0.call(this, this$1, uidl, aligns2);
}

function VTreeTable$VTreeTableScrollBody$VTreeTableRow(){
}

_ = VTreeTable$VTreeTableScrollBody$VTreeTableRow_0.prototype = VTreeTable$VTreeTableScrollBody$VTreeTableRow.prototype = new VScrollTable$VScrollTableBody$VScrollTableRow;
_.addCell = function addCell_1(rowUidl, text, align, style, textIsHTML, isSorted, description){
  var td;
  td = $doc.createElement('td');
  $initCellWithText(this, text, align, style, textIsHTML, isSorted, description, td);
  $addTreeSpacer(this, rowUidl);
}
;
_.addCell_0 = function addCell_2(rowUidl, w, align, style, isSorted){
  var td;
  td = $doc.createElement('td');
  $initCellWithWidget(this, w, align, style, isSorted, td);
  $addTreeSpacer(this, rowUidl) && (this.widgetInHierarchyColumn = w);
}
;
_.getAllocatedSpace = function getAllocatedSpace_20(child){
  var allocatedSpace, hierarchyAndIconWidth, consumedSpace, parent_0;
  if (this.widgetInHierarchyColumn == child) {
    hierarchyAndIconWidth = (consumedSpace = this.treeSpacer.offsetWidth || 0 , (parent_0 = this.treeSpacer.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).childNodes.length > 2 && (consumedSpace += this.treeSpacer.nextSibling.offsetWidth || 0) , consumedSpace);
    allocatedSpace = $getAllocatedSpace(this, child);
    return new VTreeTable$VTreeTableScrollBody$VTreeTableRow$1_0(allocatedSpace, hierarchyAndIconWidth);
  }
  return $getAllocatedSpace(this, child);
}
;
_.getClass$ = function getClass_779(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$VTreeTableRow_2_classLit;
}
;
_.onAttach = function onAttach_13(){
  $onAttach_2(this);
  this.this$1_0.identWidth < 0 && $detectIdent(this.this$1_0, this);
}
;
_.onBrowserEvent = function onBrowserEvent_48(event_0){
  if (event_0.target == this.treeSpacer && this.treeSpacer.className.indexOf('node') != -1) {
    $eventGetTypeInt(event_0.type) == 8 && $sendToggleCollapsedUpdate(this.this$1_0.this$0, '' + this.rowKey);
    return;
  }
  $onBrowserEvent_4(this, event_0);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 27:1, 33:1, 69:1, 70:1, 75:1, 78:1, 176:1};
_.canHaveChildren = false;
_.depth = 0;
_.isTreeCellAdded = false;
_.open_0 = false;
_.this$1_0 = null;
_.treeSpacer = null;
_.widgetInHierarchyColumn = null;
function $addSpannedCell_1(this$static, rowUidl, w, align, colCount){
  var td;
  td = $doc.createElement('td');
  td.colSpan = colCount;
  $initCellWithWidget(this$static, w, align, '', false, td);
  td.style['height'] = $getRowHeight(this$static.this$1, false) + ($clinit_9() , 'px');
  $addTreeSpacer(this$static, rowUidl) && (this$static.widgetInHierarchyColumn = w);
}

function $addSpannedCell_2(this$static, rowUidl, text, align, textIsHTML, colCount){
  var td;
  td = $doc.createElement('td');
  td.colSpan = colCount;
  $initCellWithText(this$static, text, align, '', textIsHTML, false, null, td);
  td.style['height'] = $getRowHeight(this$static.this$1, false) + ($clinit_9() , 'px');
  $addTreeSpacer(this$static, rowUidl);
}

function $calcAndSetSpanWidthOnCell_0(this$static, cellIx){
  var ix, spanWidth;
  spanWidth = 0;
  for (ix = this$static.this$1.this$0.showRowHeaders?1:0; ix < this$static.this$1.this$0.tHead.visibleCells.size_0; ++ix) {
    spanWidth += parseInt($getHeaderCell(this$static.this$1.this$0.tHead, ix).element_0['offsetWidth']) || 0;
  }
  setWidthExcludingPaddingAndBorder_0(this$static.element_0.childNodes[cellIx], spanWidth, 13, false);
}

function $setCellWidth_1(this$static, cellIx, width){
  this$static.spanColumns?this$static.this$1.this$0.showRowHeaders?cellIx == 0?$setCellWidth(this$static, 0, width):$calcAndSetSpanWidthOnCell_0(this$static, 1):$calcAndSetSpanWidthOnCell_0(this$static, 0):$setCellWidth(this$static, cellIx, width);
}

function VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow_0(this$1, uidl, aligns){
  this.this$1 = this$1;
  this.this$1_0 = this$1;
  VScrollTable$VScrollTableBody$VScrollTableRow_0.call(this, this$1, uidl, aligns);
  setStyleName(this.element_0, 'v-table-generated-row', true);
}

function VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow(){
}

_ = VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow_0.prototype = VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow.prototype = new VTreeTable$VTreeTableScrollBody$VTreeTableRow;
_.addCellsFromUIDL = function addCellsFromUIDL_1(uidl, aligns, col, visibleColumnIndex){
  var cell, cells, colCount, count;
  this.htmlContentAllowed = Boolean(uidl[1]['gen_html']);
  this.spanColumns = Boolean(uidl[1]['gen_span']);
  cells = new UIDL$1_0(uidl);
  if (this.spanColumns) {
    colCount = uidl.length - 2;
    if (count = cells.this$0.length - 2 , count > cells.index_0 + 1) {
      cell = $next_3(cells);
      cell != null && cell.castableTypeMap$ && !!cell.castableTypeMap$[1]?$addSpannedCell_2(this, uidl, toString__devirtual$(cell), aligns[0], this.htmlContentAllowed, colCount):$addSpannedCell_1(this, uidl, dynamicCast(cell, 70), aligns[0], colCount);
    }
  }
   else {
    $addCellsFromUIDL(this, uidl, aligns, col, visibleColumnIndex);
  }
}
;
_.getClass$ = function getClass_780(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow_2_classLit;
}
;
_.initCellWidths = function initCellWidths_1(){
  this.spanColumns?$scheduleDeferred_0(($clinit_1() , INSTANCE), new VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow$1_0(this)):$initCellWidths(this);
}
;
_.isRenderHtmlInCells = function isRenderHtmlInCells_1(){
  return this.htmlContentAllowed;
}
;
_.setCellWidth = function setCellWidth_1(cellIx, width){
  this.spanColumns?this.this$1.this$0.showRowHeaders?cellIx == 0?$setCellWidth(this, 0, width):$calcAndSetSpanWidthOnCell_0(this, 1):$calcAndSetSpanWidthOnCell_0(this, 0):$setCellWidth(this, cellIx, width);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 27:1, 33:1, 69:1, 70:1, 75:1, 78:1, 176:1};
_.htmlContentAllowed = false;
_.spanColumns = false;
_.this$1 = null;
function VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow$1_0(this$2){
  this.this$2 = this$2;
}

function VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow$1(){
}

_ = VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow$1_0.prototype = VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow$1.prototype = new Object_0;
_.execute_0 = function execute_69(){
  if (this.this$2.this$1.this$0.showRowHeaders) {
    $setCellWidth_1(this.this$2, 0, $getHeaderCell(this.this$2.this$1.this$0.tHead, 0).width_0);
    $calcAndSetSpanWidthOnCell_0(this.this$2, 1);
  }
   else {
    $calcAndSetSpanWidthOnCell_0(this.this$2, 0);
  }
}
;
_.getClass$ = function getClass_781(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$2 = null;
function VTreeTable$VTreeTableScrollBody$VTreeTableRow$1_0(val$allocatedSpace, val$hierarchyAndIconWidth){
  this.val$allocatedSpace = val$allocatedSpace;
  this.val$hierarchyAndIconWidth = val$hierarchyAndIconWidth;
}

function VTreeTable$VTreeTableScrollBody$VTreeTableRow$1(){
}

_ = VTreeTable$VTreeTableScrollBody$VTreeTableRow$1_0.prototype = VTreeTable$VTreeTableScrollBody$VTreeTableRow$1.prototype = new RenderSpace;
_.getClass$ = function getClass_782(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$VTreeTableRow$1_2_classLit;
}
;
_.getHeight = function getHeight_3(){
  return ~~Math.max(Math.min($getRowHeight(this.val$allocatedSpace.this$2.this$1_1, false), 2147483647), -2147483648);
}
;
_.getWidth = function getWidth_2(){
  return this.val$allocatedSpace.width_0 - this.val$hierarchyAndIconWidth;
}
;
_.castableTypeMap$ = {133:1};
_.val$allocatedSpace = null;
_.val$hierarchyAndIconWidth = 0;
function $removeFirst(this$static){
  var node;
  $throwEmptyException(this$static);
  --this$static.size_0;
  node = this$static.header.next;
  $remove_20(node);
  return node.value_0;
}

function $throwEmptyException(this$static){
  if (this$static.size_0 == 0) {
    throw new NoSuchElementException_0;
  }
}

var Lcom_google_gwt_lang_asyncloaders_AsyncLoader16_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader16'), Lcom_vaadin_terminal_gwt_client_ComputedStyle_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'ComputedStyle'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$23$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$23$1'), Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$PendingNavigationEvent_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTreeTable$PendingNavigationEvent'), Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTreeTable$VTreeTableScrollBody'), Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$RowExpandAnimation_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTreeTable$VTreeTableScrollBody$RowExpandAnimation'), Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$RowCollapseAnimation_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTreeTable$VTreeTableScrollBody$RowCollapseAnimation'), Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTreeTable$VTreeTableScrollBody$1'), Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$AnimationPreparator_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTreeTable$VTreeTableScrollBody$AnimationPreparator'), Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$VTreeTableRow_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTreeTable$VTreeTableScrollBody$VTreeTableRow'), Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow'), Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTreeTable$VTreeTableScrollBody$VTreeTableGeneratedRow$1'), Lcom_vaadin_terminal_gwt_client_ui_VTreeTable$VTreeTableScrollBody$VTreeTableRow$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTreeTable$VTreeTableScrollBody$VTreeTableRow$1');
$entry(onLoad_6)();
