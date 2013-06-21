_ = Timer.prototype;
_.schedule = function schedule(delayMillis){
  $schedule(this, delayMillis);
}
;
function $fragmentHasLoaded(this$static, fragment){
  var logGroup;
  logGroup = fragment == this$static.numEntries?'leftoversDownload':'download' + fragment;
  !!$stats && $stats($createStatsEvent(logGroup, 'end', fragment, -1));
  fragment < this$static.pendingDownloadErrorHandlers.length && setCheck(this$static.pendingDownloadErrorHandlers, fragment, null);
  $isInitial(this$static, fragment) && $remove(this$static.remainingInitialFragments);
  this$static.fragmentLoading = -1;
  this$static.isLoaded[fragment] = true;
  $startLoadingNextFragment(this$static);
}

function $leftoversFragmentHasLoaded(this$static){
  $fragmentHasLoaded(this$static, this$static.numEntries);
}

function browserLoaderLeftoversFragmentHasLoaded(){
  $leftoversFragmentHasLoaded(BROWSER_LOADER);
}

function $createSelectElement(doc, multiple){
  var select;
  select = doc.createElement('select');
  multiple && (select.multiple = true , undefined);
  return select;
}

function $setAutoplay(this$static, autoplay){
  autoplay?(this$static.setAttribute('autoplay', '') , undefined):(this$static.removeAttribute('autoplay') , undefined);
}

function $setControls(this$static, controls){
  controls?(this$static.setAttribute('controls', '') , undefined):(this$static.removeAttribute('controls') , undefined);
}

function $clinit_10(){
  $clinit_10 = nullMethod;
  VISIBLE_0 = new Style$Visibility$1_0;
  HIDDEN_1 = new Style$Visibility$2_0;
  $VALUES_7 = initValues(_3Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, {30:1, 35:1}, 95, [VISIBLE_0, HIDDEN_1]);
}

function values_8(){
  $clinit_10();
  return $VALUES_7;
}

function Style$Visibility(){
}

_ = Style$Visibility.prototype = new Enum;
_.getClass$ = function getClass_86(){
  return Lcom_google_gwt_dom_client_Style$Visibility_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 30:1, 32:1, 95:1, 107:1};
var $VALUES_7, HIDDEN_1, VISIBLE_0;
function Style$Visibility$1_0(){
  this.name_0 = 'VISIBLE';
  this.ordinal = 0;
}

function Style$Visibility$1(){
}

_ = Style$Visibility$1_0.prototype = Style$Visibility$1.prototype = new Style$Visibility;
_.getClass$ = function getClass_87(){
  return Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 30:1, 32:1, 95:1, 107:1};
function Style$Visibility$2_0(){
  this.name_0 = 'HIDDEN';
  this.ordinal = 1;
}

function Style$Visibility$2(){
}

_ = Style$Visibility$2_0.prototype = Style$Visibility$2.prototype = new Style$Visibility;
_.getClass$ = function getClass_88(){
  return Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit;
}
;
_.castableTypeMap$ = {4:1, 30:1, 32:1, 95:1, 107:1};
function $clinit_20(){
  $clinit_20 = nullMethod;
  TYPE_6 = new DomEvent$Type_0('keypress', new KeyPressEvent_0);
}

function KeyPressEvent_0(){
}

function KeyPressEvent(){
}

_ = KeyPressEvent_0.prototype = KeyPressEvent.prototype = new KeyEvent_0;
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, 43).onKeyPress(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_7(){
  return TYPE_6;
}
;
_.getClass$ = function getClass_108(){
  return Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit;
}
;
_.castableTypeMap$ = {};
var TYPE_6;
function $fixDaylightSavings(this$static, hours){
  var badHours, copy, day, newTime, timeDiff, timeDiffHours, timeDiffMinutes;
  if (this$static.jsdate.getHours() % 24 != hours % 24) {
    copy = new Date(this$static.jsdate.getTime());
    copy.setDate(copy.getDate() + 1);
    timeDiff = this$static.jsdate.getTimezoneOffset() - copy.getTimezoneOffset();
    if (timeDiff > 0) {
      timeDiffHours = ~~(timeDiff / 60);
      timeDiffMinutes = timeDiff % 60;
      day = this$static.jsdate.getDate();
      badHours = this$static.jsdate.getHours();
      badHours + timeDiffHours >= 24 && ++day;
      newTime = new Date(this$static.jsdate.getFullYear(), this$static.jsdate.getMonth(), day, hours + timeDiffHours, this$static.jsdate.getMinutes() + timeDiffMinutes, this$static.jsdate.getSeconds(), this$static.jsdate.getMilliseconds());
      this$static.jsdate.setTime(newTime.getTime());
    }
  }
}

function $setDate(this$static, date){
  var hours;
  hours = this$static.jsdate.getHours();
  this$static.jsdate.setDate(date);
  $fixDaylightSavings(this$static, hours);
}

function $setTime(this$static, time){
  this$static.jsdate.setTime(toDouble(time));
}

function Date_2(year, month, date){
  this.jsdate = new Date;
  this.jsdate.setFullYear(year + 1900, month, date);
  this.jsdate.setHours(0, 0, 0, 0);
  $fixDaylightSavings(this, 0);
}

_ = Date_2.prototype = Date_0.prototype;
_.setHours_0 = function setHours(hours){
  this.jsdate.setHours(hours);
  $fixDaylightSavings(this, hours);
}
;
_.setMinutes_0 = function setMinutes(minutes){
  var hours;
  hours = this.jsdate.getHours() + ~~(minutes / 60);
  this.jsdate.setMinutes(minutes);
  $fixDaylightSavings(this, hours);
}
;
_.setMonth_0 = function setMonth(month){
  var hours;
  hours = this.jsdate.getHours();
  this.jsdate.setMonth(month);
  $fixDaylightSavings(this, hours);
}
;
_.setSeconds_0 = function setSeconds(seconds){
  var hours;
  hours = this.jsdate.getHours() + ~~(seconds / 3600);
  this.jsdate.setSeconds(seconds);
  $fixDaylightSavings(this, hours);
}
;
_.setYear = function setYear(year){
  var hours;
  hours = this.jsdate.getHours();
  this.jsdate.setFullYear(year + 1900);
  $fixDaylightSavings(this, hours);
}
;
function neq(a_0, b){
  return a_0.l != b.l || a_0.m != b.m || a_0.h != b.h;
}

function CommandCanceledException_0(){
  $fillInStackTrace();
}

function CommandCanceledException(){
}

_ = CommandCanceledException_0.prototype = CommandCanceledException.prototype = new RuntimeException;
_.getClass$ = function getClass_282(){
  return Lcom_google_gwt_user_client_CommandCanceledException_2_classLit;
}
;
_.castableTypeMap$ = {30:1, 36:1, 37:1, 112:1};
function $doCommandCanceled(this$static){
  var cmd, ex, ueh;
  cmd = $getLast(this$static.iterator);
  $remove_0(this$static.iterator);
  ex = null;
  cmd != null && cmd.castableTypeMap$ && !!cmd.castableTypeMap$[14] && (ex = new CommandCanceledException_0(dynamicCast(cmd, 14)));
  if (ex) {
    ueh = sUncaughtExceptionHandler;
    !!ueh && impl_2.error_0(ex);
  }
  this$static.executing = false;
  $maybeStartExecutionTimer(this$static);
}

function $doExecuteCommands(this$static, startTimeMillis){
  var command, element, wasCanceled;
  wasCanceled = false;
  try {
    this$static.executing = true;
    this$static.iterator.end = this$static.commands.size_0;
    $schedule(this$static.cancellationTimer, 10000);
    while ($hasNext(this$static.iterator)) {
      element = $next(this$static.iterator);
      try {
        if (element == null) {
          return;
        }
        if (element != null && element.castableTypeMap$ && !!element.castableTypeMap$[14]) {
          command = dynamicCast(element, 14);
          command.execute_0();
        }
      }
       finally {
        wasCanceled = this$static.iterator.last == -1;
        wasCanceled || $remove_0(this$static.iterator);
      }
      if ((new Date).getTime() - startTimeMillis >= 100) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel_0(this$static.cancellationTimer);
      this$static.executing = false;
      $maybeStartExecutionTimer(this$static);
    }
  }
}

function $maybeStartExecutionTimer(this$static){
  if (this$static.commands.size_0 != 0 && !this$static.executionTimerPending && !this$static.executing) {
    this$static.executionTimerPending = true;
    $schedule(this$static.executionTimer, 1);
  }
}

function $submit(this$static, command){
  $add_12(this$static.commands, command);
  $maybeStartExecutionTimer(this$static);
}

function CommandExecutor_0(){
  this.cancellationTimer = new CommandExecutor$1_0(this);
  this.commands = new ArrayList_0;
  this.executionTimer = new CommandExecutor$2_0(this);
  this.iterator = new CommandExecutor$CircularIterator_0(this);
}

function CommandExecutor(){
}

_ = CommandExecutor_0.prototype = CommandExecutor.prototype = new Object_0;
_.getClass$ = function getClass_283(){
  return Lcom_google_gwt_user_client_CommandExecutor_2_classLit;
}
;
_.castableTypeMap$ = {};
_.executing = false;
_.executionTimerPending = false;
function CommandExecutor$1_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function CommandExecutor$1(){
}

_ = CommandExecutor$1_0.prototype = CommandExecutor$1.prototype = new Timer;
_.getClass$ = function getClass_284(){
  return Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit;
}
;
_.run = function run_1(){
  if (!this.this$0.executing) {
    return;
  }
  $doCommandCanceled(this.this$0);
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
function CommandExecutor$2_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2_0.prototype = CommandExecutor$2.prototype = new Timer;
_.getClass$ = function getClass_285(){
  return Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit;
}
;
_.run = function run_2(){
  this.this$0.executionTimerPending = false;
  $doExecuteCommands(this.this$0, (new Date).getTime());
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
function $getLast(this$static){
  return $get_4(this$static.this$0.commands, this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = $get_4(this$static.this$0.commands, this$static.next++);
  this$static.next >= this$static.end && (this$static.next = 0);
  return command;
}

function $remove_0(this$static){
  $remove_16(this$static.this$0.commands, this$static.last);
  --this$static.end;
  this$static.last <= this$static.next && --this$static.next < 0 && (this$static.next = 0);
  this$static.last = -1;
}

function CommandExecutor$CircularIterator_0(this$0){
  this.this$0 = this$0;
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator_0.prototype = CommandExecutor$CircularIterator.prototype = new Object_0;
_.getClass$ = function getClass_286(){
  return Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit;
}
;
_.hasNext = function hasNext(){
  return this.next < this.end;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_1 = function remove_0(){
  $remove_0(this);
}
;
_.castableTypeMap$ = {158:1};
_.end = 0;
_.last = -1;
_.next = 0;
_.this$0 = null;
function $clinit_38(){
  $clinit_38 = nullMethod;
  commandExecutor = new CommandExecutor_0;
}

function addCommand(cmd){
  $clinit_38();
  if (!cmd) {
    throw new NullPointerException_1('cmd cannot be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function $getChildIndex(parent_0, toFind){
  var count = 0, child = parent_0.firstChild;
  while (child) {
    if (child === toFind) {
      return count;
    }
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return -1;
}

function $get(this$static, elem){
  var index, index_0;
  index = (index_0 = elem['__uiObjectID'] , index_0 == null?-1:index_0);
  if (index < 0) {
    return null;
  }
  return dynamicCast($get_4(this$static.uiObjectList, index), 69);
}

function $put(this$static, uiObject){
  var index;
  if (!this$static.freeList) {
    index = this$static.uiObjectList.size_0;
    $add_12(this$static.uiObjectList, uiObject);
  }
   else {
    index = this$static.freeList.index_0;
    $set(this$static.uiObjectList, index, uiObject);
    this$static.freeList = this$static.freeList.next;
  }
  uiObject.element_0['__uiObjectID'] = index;
}

function $removeByElement(this$static, elem){
  var index, index_0;
  index = (index_0 = elem['__uiObjectID'] , index_0 == null?-1:index_0);
  elem['__uiObjectID'] = null;
  $set(this$static.uiObjectList, index, null);
  this$static.freeList = new ElementMapperImpl$FreeNode_0(index, this$static.freeList);
}

function ElementMapperImpl_0(){
  this.uiObjectList = new ArrayList_0;
}

function ElementMapperImpl(){
}

_ = ElementMapperImpl_0.prototype = ElementMapperImpl.prototype = new Object_0;
_.getClass$ = function getClass_291(){
  return Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit;
}
;
_.castableTypeMap$ = {};
_.freeList = null;
function ElementMapperImpl$FreeNode_0(index, next){
  this.index_0 = index;
  this.next = next;
}

function ElementMapperImpl$FreeNode(){
}

_ = ElementMapperImpl$FreeNode_0.prototype = ElementMapperImpl$FreeNode.prototype = new Object_0;
_.getClass$ = function getClass_292(){
  return Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit;
}
;
_.castableTypeMap$ = {};
_.index_0 = 0;
_.next = null;
function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $sinkEvents(this$static, eventBitsToAdd){
  sinkEvents(this$static.element_0, eventBitsToAdd | (this$static.element_0.__eventBits || 0));
}

function $replaceElement(this$static, elem){
  this$static.attached && (this$static.element_0.__listener = null , undefined);
  !!this$static.element_0 && $replaceNode(this$static.element_0, elem);
  this$static.element_0 = elem;
  this$static.attached && (this$static.element_0.__listener = this$static , undefined);
}

function $adopt(this$static, child){
  $setParent(child, this$static);
}

_ = Panel.prototype;
_.add_1 = function add_1(child){
  throw new UnsupportedOperationException_1('This panel does not support no-arg add()');
}
;
function $getWidget(this$static, index){
  return $get_0(this$static.children_0, index);
}

_ = AbsolutePanel.prototype;
_.add_1 = function add_2(w){
  $add_0(this, w, this.element_0);
}
;
function CustomButton(){
}

_ = CustomButton.prototype = new ButtonBase;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1};
_.allowClick = false;
_.curFace = null;
_.curFaceElement = null;
_.down = null;
_.downDisabled = null;
_.downHovering = null;
_.isCapturing = false;
_.isFocusing = false;
_.up = null;
_.upDisabled = null;
_.upHovering = null;
_ = SimplePanel.prototype;
_.add_1 = function add_3(w){
  $add_3(this, w);
}
;
function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_1('Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length);
  if (cellSize <= column) {
    throw new IndexOutOfBoundsException_1('Column index: ' + column + ', Column size: ' + ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length));
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.bodyElem.rows.length;
  if (row >= rowSize || row < 0) {
    throw new IndexOutOfBoundsException_1('Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $clear_1(this$static){
  var col, row, td;
  for (row = 0; row < this$static.getRowCount(); ++row) {
    for (col = 0; col < this$static.getCellCount(row); ++col) {
      td = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[col];
      $internalClearCell(this$static, td, false);
    }
  }
}

function $getWidget_0(this$static, row, column){
  $checkCellBounds(this$static, row, column);
  return $getWidgetImpl(this$static, row, column);
}

function $getWidgetImpl(this$static, row, column){
  var child, e;
  e = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column];
  child = $getFirstChildElement(e);
  return !child?null:dynamicCast($get(this$static.widgetMap, child), 70);
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = $getFirstChildElement(td);
  widget = null;
  !!maybeChild && (widget = dynamicCast($get(this$static.widgetMap, maybeChild), 70));
  if (widget) {
    $remove_5(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && (td.innerHTML = '' , undefined);
    return false;
  }
}

function $remove_5(this$static, widget){
  var elem;
  if (widget.getParent() != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = widget.element_0;
    $getParentElement(elem).removeChild(elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount, td;
  columnCount = ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length);
  for (column = 0; column < columnCount; ++column) {
    td = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column];
    $internalClearCell(this$static, td, false);
  }
  this$static.bodyElem.removeChild(this$static.bodyElem.rows[row]);
}

function $setColumnFormatter(this$static, formatter){
  !!this$static.columnFormatter && (formatter.columnGroup = this$static.columnFormatter.columnGroup);
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setHTML(this$static, row, column, html){
  var td, td_0;
  $prepareCell(this$static, row, column);
  td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, html == null) , td_0);
  html != null && (td.innerHTML = html || '' , undefined);
}

function $setWidget_1(this$static, row, column, widget){
  var td, td_0;
  $prepareCell(this$static, row, column);
  td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, true) , td_0);
  if (widget) {
    $removeFromParent_0(widget);
    $put(this$static.widgetMap, widget);
    td.appendChild(widget.element_0);
    $setParent(widget, this$static);
  }
}

function HTMLTable(){
}

_ = HTMLTable.prototype = new Panel;
_.getClass$ = function getClass_321(){
  return Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit;
}
;
_.iterator_0 = function iterator_3(){
  return new HTMLTable$1_0(this);
}
;
_.remove_2 = function remove_5(widget){
  return $remove_5(this, widget);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 69:1, 70:1, 75:1};
_.bodyElem = null;
_.cellFormatter = null;
_.columnFormatter = null;
_.rowFormatter = null;
_.tableElem = null;
function $getCellCount(this$static, row){
  $checkRowBounds(this$static, row);
  return this$static.bodyElem.rows[row].cells.length;
}

function $prepareCell(this$static, row, column){
  var cellCount, required;
  $prepareRow(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_1('Cannot create a column with a negative index: ' + column);
  }
  cellCount = ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length);
  required = column + 1 - cellCount;
  required > 0 && addCells(this$static.bodyElem, row, required);
}

function $prepareRow(this$static, row){
  var i, rowCount, tr;
  if (row < 0) {
    throw new IndexOutOfBoundsException_1('Cannot create a row with a negative index: ' + row);
  }
  rowCount = this$static.bodyElem.rows.length;
  for (i = rowCount; i <= row; ++i) {
    i != this$static.bodyElem.rows.length && $checkRowBounds(this$static, i);
    tr = $doc.createElement('tr');
    $insertChild(this$static.bodyElem, tr, i);
  }
}

function FlexTable_0(){
  this.widgetMap = new ElementMapperImpl_0;
  this.tableElem = $doc.createElement('table');
  this.bodyElem = $doc.createElement('tbody');
  this.tableElem.appendChild(this.bodyElem);
  this.element_0 = this.tableElem;
  this.cellFormatter = new FlexTable$FlexCellFormatter_0(this);
  this.rowFormatter = new HTMLTable$RowFormatter_0(this);
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter_0(this));
}

function addCells(table, row, num){
  var rowElem = table.rows[row];
  for (var i = 0; i < num; i++) {
    var cell = $doc.createElement('td');
    rowElem.appendChild(cell);
  }
}

function FlexTable(){
}

_ = FlexTable_0.prototype = FlexTable.prototype = new HTMLTable;
_.getCellCount = function getCellCount(row){
  return $checkRowBounds(this, row) , this.bodyElem.rows[row].cells.length;
}
;
_.getClass$ = function getClass_322(){
  return Lcom_google_gwt_user_client_ui_FlexTable_2_classLit;
}
;
_.getRowCount = function getRowCount(){
  return this.bodyElem.rows.length;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 69:1, 70:1, 75:1};
function $getElement(this$static){
  $checkCellBounds(this$static.this$0, 0, 2);
  return this$static.this$0.bodyElem.rows[0].cells[2];
}

function $setStyleName_1(this$static, row, column, styleName){
  $prepareCell(this$static.this$0, row, column);
  this$static.this$0.bodyElem.rows[row].cells[column]['className'] = styleName;
}

function $setVisible(this$static, row, visible){
  var e;
  e = ($prepareCell(this$static.this$0, row, 0) , this$static.this$0.bodyElem.rows[row].cells[0]);
  e.style.display = visible?'':'none';
}

function HTMLTable$CellFormatter(){
}

_ = HTMLTable$CellFormatter.prototype = new Object_0;
_.getClass$ = function getClass_323(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function $setColSpan(this$static, row){
  ($prepareCell(this$static.this$0, row, 0) , this$static.this$0.bodyElem.rows[row].cells[0])['colSpan'] = 5;
}

function FlexTable$FlexCellFormatter_0(this$0){
  this.this$0 = this$0;
}

function FlexTable$FlexCellFormatter(){
}

_ = FlexTable$FlexCellFormatter_0.prototype = FlexTable$FlexCellFormatter.prototype = new HTMLTable$CellFormatter;
_.getClass$ = function getClass_324(){
  return Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit;
}
;
_.castableTypeMap$ = {};
_ = FlowPanel.prototype;
_.add_1 = function add_4(w){
  $add_0(this, w, this.element_0);
}
;
function HTML_3(element){
  LabelBase_0.call(this, element, $equalsIgnoreCase('span', element.tagName));
}

function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.size_0) {
    if ($get_4(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next_0(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.size_0) {
    throw new NoSuchElementException_0;
  }
  result = dynamicCast($get_4(this$static.widgetList, this$static.nextIndex), 70);
  this$static.lastIndex_0 = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function HTMLTable$1_0(this$0){
  this.this$0 = this$0;
  this.widgetList = this.this$0.widgetMap.uiObjectList;
  $findNext(this);
}

function HTMLTable$1(){
}

_ = HTMLTable$1_0.prototype = HTMLTable$1.prototype = new Object_0;
_.getClass$ = function getClass_330(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit;
}
;
_.hasNext = function hasNext_0(){
  return this.nextIndex < this.widgetList.size_0;
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove_1 = function remove_6(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw new IllegalStateException_0;
  }
  w = dynamicCast($get_4(this.widgetList, this.lastIndex_0), 70);
  $removeFromParent_0(w);
  this.lastIndex_0 = -1;
}
;
_.castableTypeMap$ = {158:1};
_.lastIndex_0 = -1;
_.nextIndex = -1;
_.this$0 = null;
function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = $doc.createElement('colgroup');
    $insertChild(this$static.this$0.tableElem, this$static.columnGroup, 0);
    this$static.columnGroup.appendChild($doc.createElement('col'));
  }
}

function HTMLTable$ColumnFormatter_0(this$0){
  this.this$0 = this$0;
}

function HTMLTable$ColumnFormatter(){
}

_ = HTMLTable$ColumnFormatter_0.prototype = HTMLTable$ColumnFormatter.prototype = new Object_0;
_.getClass$ = function getClass_331(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit;
}
;
_.castableTypeMap$ = {};
_.columnGroup = null;
_.this$0 = null;
function $addStyleName_0(this$static, styleName){
  setStyleName(($prepareRow(this$static.this$0, 0) , this$static.this$0.bodyElem.rows[0]), styleName, true);
}

function $setStyleName_2(this$static, row, styleName){
  ($prepareRow(this$static.this$0, row) , this$static.this$0.bodyElem.rows[row])['className'] = styleName;
}

function HTMLTable$RowFormatter_0(this$0){
  this.this$0 = this$0;
}

function HTMLTable$RowFormatter(){
}

_ = HTMLTable$RowFormatter_0.prototype = HTMLTable$RowFormatter.prototype = new Object_0;
_.getClass$ = function getClass_332(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
_ = HorizontalPanel.prototype;
_.add_1 = function add_5(w){
  $add_5(this, w);
}
;
function $clinit_46(){
  $clinit_46 = nullMethod;
  new HashMap_0;
}

function Image_0(){
}

_ = Image_0.prototype = new Widget;
_.getClass$ = function getClass_338(){
  return Lcom_google_gwt_user_client_ui_Image_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  $eventGetTypeInt(event_0.type) == 32768 && !!this.state && (this.state.getImageElement(this)['__gwtLastUnhandledEvent'] = '' , undefined);
  $onBrowserEvent(this, event_0);
}
;
_.onLoad_0 = function onLoad_41(){
  $onLoad(this.state, this);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1};
_.state = null;
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(this$static.getImageElement(image), '__gwtLastUnhandledEvent');
  $equals_2('load', unhandledEvent) && addCommand(new Image$State$1_0(this$static, image));
}

function Image$State(){
}

_ = Image$State.prototype = new Object_0;
_.getClass$ = function getClass_339(){
  return Lcom_google_gwt_user_client_ui_Image$State_2_classLit;
}
;
_.castableTypeMap$ = {};
function Image$ClippedState(){
}

_ = Image$ClippedState.prototype = new Image$State;
_.castableTypeMap$ = {};
function Image$State$1_0(this$1, val$image){
  this.this$1 = this$1;
  this.val$image = val$image;
}

function Image$State$1(){
}

_ = Image$State$1_0.prototype = Image$State$1.prototype = new Object_0;
_.execute_0 = function execute_6(){
  var evt, evt_0;
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  this.this$1.getImageElement(this.val$image).dispatchEvent(evt);
}
;
_.getClass$ = function getClass_341(){
  return Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$1 = null;
_.val$image = null;
function InlineHTML(){
}

_ = InlineHTML.prototype = new HTML;
_.getClass$ = function getClass_343(){
  return Lcom_google_gwt_user_client_ui_InlineHTML_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1};
function $addItem(this$static, item){
  $insertItem(this$static, item, item, -1);
}

function $checkIndex(this$static, index){
  if (index < 0 || index >= this$static.element_0.options.length) {
    throw new IndexOutOfBoundsException_0;
  }
}

function $getValue_0(this$static, index){
  $checkIndex(this$static, index);
  return this$static.element_0.options[index].value;
}

function $insertItem(this$static, item, value, index){
  var before, itemCount, option, select;
  select = this$static.element_0;
  option = $doc.createElement('option');
  option.text = item;
  option.removeAttribute('bidiwrapped');
  option.value = value;
  itemCount = select.options.length;
  (index < 0 || index > itemCount) && (index = itemCount);
  if (index == itemCount) {
    select.add(option, null);
  }
   else {
    before = select.options[index];
    select.add(option, before);
  }
}

function $isItemSelected(this$static, index){
  $checkIndex(this$static, index);
  return !!this$static.element_0.options[index].selected;
}

function $setItemSelected(this$static, index, selected){
  $checkIndex(this$static, index);
  this$static.element_0.options[index].selected = selected;
}

function ListBox_0(){
  var select;
  $clinit_42();
  this.element_0 = (select = $doc.createElement('select') , select);
  this.element_0['className'] = 'gwt-ListBox';
}

function ListBox(){
}

_ = ListBox_0.prototype = ListBox.prototype = new FocusWidget;
_.getClass$ = function getClass_344(){
  return Lcom_google_gwt_user_client_ui_ListBox_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1, 145:1};
function $addItem_0(this$static, item){
  return $insertItem_0(this$static, item, this$static.allItems.size_0);
}

function $addItemElement(this$static, beforeIndex, tdElem){
  var tr;
  if (this$static.vertical) {
    tr = $doc.createElement('tr');
    $insertChild(this$static.body_0, tr, beforeIndex);
    tr.appendChild(tdElem);
  }
   else {
    tr = $getChild(this$static.body_0, 0);
    $insertChild(tr, tdElem, beforeIndex);
  }
}

function $clearItems(this$static){
  var container, item, item$iterator;
  $selectItem(this$static, null);
  container = this$static.vertical?this$static.body_0:$getChild(this$static.body_0, 0);
  while ($getChildCount(container) > 0) {
    container.removeChild($getChild(container, 0));
  }
  for (item$iterator = new AbstractList$IteratorImpl_0(this$static.allItems); item$iterator.i < item$iterator.this$0_0.size_1();) {
    item = dynamicCast($next_5(item$iterator), 69);
    item.element_0['colSpan'] = 1;
    dynamicCast(item, 73).parentMenu = null;
  }
  $clear_6(this$static.items);
  $clear_6(this$static.allItems);
}

function $insertItem_0(this$static, item, beforeIndex){
  var i, itemsIndex;
  if (beforeIndex < 0 || beforeIndex > this$static.allItems.size_0) {
    throw new IndexOutOfBoundsException_0;
  }
  $add_13(this$static.allItems, beforeIndex, item);
  itemsIndex = 0;
  for (i = 0; i < beforeIndex; ++i) {
    instanceOf($get_4(this$static.allItems, i), 73) && ++itemsIndex;
  }
  $add_13(this$static.items, itemsIndex, item);
  $addItemElement(this$static, beforeIndex, item.element_0);
  item.parentMenu = this$static;
  $setStyleName(item, getStylePrimaryName(item.element_0) + '-selected', false);
  $updateSubmenuIcon(this$static, item);
  return item;
}

function $updateSubmenuIcon(this$static, item){
  var container, idx, tdCount, tr;
  if (!this$static.vertical) {
    return;
  }
  idx = $indexOf_1(this$static.allItems, item, 0);
  if (idx == -1) {
    return;
  }
  container = this$static.vertical?this$static.body_0:$getChild(this$static.body_0, 0);
  tr = $getChild(container, idx);
  tdCount = $getChildCount(tr);
  tdCount == 2 && tr.removeChild($getChild(tr, 1));
  item.element_0['colSpan'] = 2;
}

function MenuItem_0(text, cmd){
  this.element_0 = $doc.createElement('td');
  $setStyleName(this, getStylePrimaryName(this.element_0) + '-selected', false);
  this.element_0.innerHTML = text || '';
  this.element_0['className'] = 'gwt-MenuItem';
  this.element_0.setAttribute('id', $createUniqueId($doc));
  this.element_0.setAttribute('role', 'menuitem');
  this.command = cmd;
}

function MenuItem(){
}

_ = MenuItem_0.prototype = MenuItem.prototype = new UIObject;
_.getClass$ = function getClass_352(){
  return Lcom_google_gwt_user_client_ui_MenuItem_2_classLit;
}
;
_.getCommand = function getCommand(){
  return this.command;
}
;
_.getParentMenu = function getParentMenu(){
  return this.parentMenu;
}
;
_.getSubMenu = function getSubMenu(){
  return this.subMenu;
}
;
_.isEnabled = function isEnabled(){
  return true;
}
;
_.setSelectionStyle = function setSelectionStyle(selected){
  selected?$setStyleName(this, getStylePrimaryName(this.element_0) + '-selected', true):$setStyleName(this, getStylePrimaryName(this.element_0) + '-selected', false);
}
;
_.castableTypeMap$ = {69:1, 73:1};
_.command = null;
_.parentMenu = null;
_.subMenu = null;
function $getValueOrThrow(this$static){
  var parseResult, text;
  text = $getPropertyString(this$static.element_0, 'value');
  parseResult = text;
  if ($equals_2('', text)) {
    return null;
  }
  return parseResult;
}

function $setReadOnly(this$static, readOnly){
  this$static.element_0['readOnly'] = readOnly;
  readOnly?$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-readonly', true):$setStyleName(this$static, getStylePrimaryName(this$static.element_0) + '-readonly', false);
}

function $setValue_0(this$static, value){
  var raw;
  raw = $getValueOrThrow(this$static);
  this$static.element_0['value'] = value != null?value:'';
}

function TextBox_0(){
  var e;
  $clinit_51();
  ValueBoxBase_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e), (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer_0) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser_0)));
  this.element_0['className'] = 'gwt-TextBox';
}

function TextBox(){
}

_ = TextBox_0.prototype = TextBox.prototype = new TextBoxBase;
_.getClass$ = function getClass_370(){
  return Lcom_google_gwt_user_client_ui_TextBox_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1};
_ = VerticalPanel.prototype;
_.add_1 = function add_6(w){
  $add_6(this, w);
}
;
function $getHTML(this$static){
  return !this$static.beforeInitPlaceholder?this$static.elem.contentWindow.document.body.innerHTML:this$static.beforeInitPlaceholder.innerHTML;
}

function $onClick_0(this$static, event_0){
  if (maskUndefined(event_0.source) === maskUndefined(this$static.newItemButton) && !$equals_2($getPropertyString(this$static.newItemField.element_0, 'value'), '')) {
    $addVariableToQueue(this$static.client, this$static.id_0, 'newitem', $escapeVariableValue($getPropertyString(this$static.newItemField.element_0, 'value')), true, 115);
    this$static.newItemField.element_0['value'] = '';
  }
}

function $updateFromUIDL(this$static, uidl, client){
  var ops, w;
  this$static.client = client;
  this$static.id_0 = uidl[1]['id'];
  if ($updateComponent(client, this$static, uidl, true)) {
    return;
  }
  this$static.selectedKeys = $getStringArrayVariableAsSet(uidl, 'selected');
  this$static.readonly = Boolean(uidl[1]['readonly']);
  this$static.disabled_0 = Boolean(uidl[1]['disabled']);
  this$static.multiselect = $equals_2('multi', uidl[1]['selectmode']);
  this$static.immediate = Boolean(uidl[1]['immediate']);
  this$static.nullSelectionAllowed = Boolean(uidl[1]['nullselect']);
  this$static.nullSelectionItemAvailable = Boolean(uidl[1]['nullselectitem']);
  'cols' in uidl[1] && (this$static.cols = uidl[1]['cols']);
  'rows' in uidl[1] && (this$static.rows_0 = uidl[1]['rows']);
  ops = uidl[2];
  if (this$static.cols > 0) {
    this$static.container.setWidth(this$static.cols + 'em');
    this$static.container != this$static.optionsContainer && this$static.optionsContainer.setWidth('100%');
  }
  this$static.buildOptions(ops);
  if (Boolean(uidl[1]['allownewitem'])) {
    if (!this$static.newItemField) {
      this$static.newItemButton = new VNativeButton_0;
      this$static.newItemButton.captionElement.textContent = '+';
      $addDomHandler(this$static.newItemButton, this$static, ($clinit_15() , $clinit_15() , TYPE_1));
      this$static.newItemField = new VTextField_0;
      $addDomHandler(this$static.newItemField, this$static, ($clinit_20() , $clinit_20() , TYPE_6));
    }
    this$static.newItemField.element_0['disabled'] = !(!this$static.disabled_0 && !this$static.readonly);
    $setEnabled_2(this$static.newItemButton, !this$static.disabled_0 && !this$static.readonly);
    if (!this$static.newItemField || this$static.newItemField.parent_0 != this$static.container) {
      $add_4(this$static.container, this$static.newItemField);
      $add_4(this$static.container, this$static.newItemButton);
      w = (parseInt(this$static.container.element_0['offsetWidth']) || 0) - (parseInt(this$static.newItemButton.element_0['offsetWidth']) || 0);
      $setWidth_1(this$static.newItemField, (w > 0?w:0) + 'px');
    }
  }
   else if (this$static.newItemField) {
    $remove_2(this$static.container, this$static.newItemField);
    $remove_2(this$static.container, this$static.newItemButton);
  }
  this$static.setTabIndex('tabindex' in uidl[1]?uidl[1]['tabindex']:0);
}

function VOptionGroupBase_0(classname){
  this.container = new FlowPanel_0;
  $initWidget(this, this.container);
  this.optionsContainer = this.container;
  this.container.setStyleName(classname);
  this.immediate = false;
  this.multiselect = false;
}

function VOptionGroupBase_1(w){
  VOptionGroupBase_0.call(this, 'v-select');
  this.optionsContainer = w;
  $add_4(this.container, this.optionsContainer);
}

function VOptionGroupBase(){
}

_ = VOptionGroupBase.prototype = new Composite;
_.getClass$ = function getClass_392(){
  return Lcom_vaadin_terminal_gwt_client_ui_VOptionGroupBase_2_classLit;
}
;
_.onChange = function onChange(event_0){
  var sel;
  this.multiselect?$updateVariable_2(this.client, this.id_0, 'selected', this.getSelectedItems(), this.immediate):$updateVariable_2(this.client, this.id_0, 'selected', initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['' + (sel = this.getSelectedItems() , sel.length > 0?sel[0]:null)]), this.immediate);
}
;
_.onClick = function onClick_3(event_0){
  $onClick_0(this, event_0);
}
;
_.onKeyPress = function onKeyPress(event_0){
  maskUndefined(event_0.source) === maskUndefined(this.newItemField) && ((event_0.nativeEvent.charCode || 0) & 65535) == 13 && (this.newItemButton.element_0.click() , undefined);
}
;
_.updateFromUIDL = function updateFromUIDL(uidl, client){
  $updateFromUIDL(this, uidl, client);
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 22:1, 25:1, 26:1, 38:1, 39:1, 43:1, 69:1, 70:1, 124:1};
_.client = null;
_.cols = 0;
_.container = null;
_.disabled_0 = false;
_.id_0 = null;
_.immediate = false;
_.multiselect = false;
_.newItemButton = null;
_.newItemField = null;
_.nullSelectionAllowed = true;
_.nullSelectionItemAvailable = false;
_.optionsContainer = null;
_.readonly = false;
_.rows_0 = 0;
_.selectedKeys = null;
function $registerTooltip(this$static, paintable, key, tooltip){
  var componentDetail;
  componentDetail = this$static.idToPaintableDetail[dynamicCast(paintable, 70).element_0.tkPid];
  $putAdditionalTooltip(componentDetail, key, tooltip);
}

function $updateVariable_2(this$static, paintableId, variableName, values, immediate){
  var buf, i;
  buf = new StringBuffer_0;
  if (values != null) {
    for (i = 0; i < values.length; ++i) {
      $append_0(buf, $escapeVariableValue(values[i]));
      buf.impl.string += '\34';
    }
  }
  $addVariableToQueue(this$static, paintableId, variableName, buf.impl.string, immediate, 99);
}

_ = VVerticalComponentGroup.prototype;
_.add_1 = function add_7(child){
  dynamicCast(this.widget, 75).add_1(child);
}
;
_ = ApplicationConfiguration$DeferredWidgetLoader.prototype;
_.schedule = function schedule_1(delayMillis){
  $schedule(this, delayMillis);
  this.pending = true;
}
;
_ = ApplicationConnection$1.prototype;
_.schedule = function schedule_2(delayMillis){
  if (!this.isPending) {
    $schedule(this, delayMillis);
    this.isPending = true;
  }
}
;
function $isIE8(this$static){
  return this$static.browserDetails.isIE && this$static.browserDetails.browserMajorVersion == 8;
}

function $putAdditionalTooltip(this$static, key, tooltip){
  if (!tooltip && !!this$static.additionalTooltips) {
    this$static.additionalTooltips.remove_4(key);
  }
   else {
    !this$static.additionalTooltips && (this$static.additionalTooltips = new HashMap_0);
    this$static.additionalTooltips.put(key, tooltip);
  }
}

function $clinit_65(){
  $clinit_65 = nullMethod;
  maxDaysInMonth = initValues(_3I_classLit, {30:1}, -1, [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
  DEFAULT_AMPM_STRINGS = initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['AM', 'PM']);
}

function $getAmPmStrings(this$static){
  var $e0, e;
  try {
    return getAmPmStrings(this$static.currentLocale);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 130)) {
      e = $e0;
      impl_2.error_1('Locale not loaded, using fallback : AM/PM');
      impl_2.error_0(e);
      return DEFAULT_AMPM_STRINGS;
    }
     else 
      throw $e0;
  }
}

function $getClockDelimeter(this$static){
  var $e0, e;
  try {
    return getClockDelimiter(this$static.currentLocale);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 130)) {
      e = $e0;
      impl_2.error_0(e);
      return ':';
    }
     else 
      throw $e0;
  }
}

function $getFirstDayOfWeek(this$static){
  var $e0, e;
  try {
    return getFirstDayOfWeek(this$static.currentLocale);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 130)) {
      e = $e0;
      impl_2.error_0(e);
      return 0;
    }
     else 
      throw $e0;
  }
}

function $getMonth(this$static, month){
  var $e0, e;
  try {
    return getMonthNames(this$static.currentLocale)[month];
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 130)) {
      e = $e0;
      impl_2.error_0(e);
      return null;
    }
     else 
      throw $e0;
  }
}

function $getShortDay(this$static, day){
  var $e0, e;
  try {
    return getShortDayNames(this$static.currentLocale)[day];
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 130)) {
      e = $e0;
      impl_2.error_0(e);
      return null;
    }
     else 
      throw $e0;
  }
}

function $getStartWeekDay(this$static, date){
  var $e0, dateForFirstOfThisMonth, e, firstDay, start;
  dateForFirstOfThisMonth = new Date_2(date.jsdate.getFullYear() - 1900, date.jsdate.getMonth(), 1);
  try {
    firstDay = getFirstDayOfWeek(this$static.currentLocale);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 130)) {
      e = $e0;
      impl_2.error_1('Locale not loaded, using fallback 0');
      impl_2.error_0(e);
      firstDay = 0;
    }
     else 
      throw $e0;
  }
  start = dateForFirstOfThisMonth.jsdate.getDay() - firstDay;
  start < 0 && (start = 6);
  return start;
}

function $isTwelveHourClock(this$static){
  var $e0, e;
  try {
    return isTwelveHourClock(this$static.currentLocale);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 130)) {
      e = $e0;
      impl_2.error_0(e);
      return false;
    }
     else 
      throw $e0;
  }
}

function $setLocale(this$static, locale){
  $clinit_66();
  if ($keySet(cache_0).this$0.containsKey(locale)) {
    this$static.currentLocale = locale;
  }
   else {
    throw new LocaleNotLoadedException_0(locale);
  }
}

function DateTimeService_0(){
  $clinit_65();
  this.currentLocale = ($clinit_66() , $clinit_66() , defaultLocale);
}

function getMilliseconds(date){
  $clinit_65();
  if (!date) {
    return 0;
  }
  return toInt(sub(fromDouble(date.jsdate.getTime()), mul(divMod(fromDouble(date.jsdate.getTime()), P3e8_longLit, false), P3e8_longLit)));
}

function getNumberOfDaysInMonth(date){
  var febLastDay, firstMarch, firstMarchTime, lastDayTimeFeb;
  $clinit_65();
  var month;
  month = date.jsdate.getMonth();
  if (month == 1 && (firstMarch = new Date_2(date.jsdate.getFullYear() - 1900, 2, 1) , firstMarchTime = fromDouble(firstMarch.jsdate.getTime()) , lastDayTimeFeb = sub(firstMarchTime, P5265c00_longLit) , febLastDay = new Date_3(lastDayTimeFeb) , 29 == febLastDay.jsdate.getDate())) {
    return 29;
  }
  return maxDaysInMonth[month];
}

function setMilliseconds(date, ms){
  $clinit_65();
  $setTime(date, add_0(mul(divMod(fromDouble(date.jsdate.getTime()), P3e8_longLit, false), P3e8_longLit), fromInt(ms)));
}

function DateTimeService(){
}

_ = DateTimeService_0.prototype = DateTimeService.prototype = new Object_0;
_.getClass$ = function getClass_454(){
  return Lcom_vaadin_terminal_gwt_client_DateTimeService_2_classLit;
}
;
_.castableTypeMap$ = {};
_.currentLocale = null;
var DEFAULT_AMPM_STRINGS, maxDaysInMonth;
function LocaleNotLoadedException_0(locale){
  $fillInStackTrace();
  this.detailMessage = locale;
}

function LocaleNotLoadedException(){
}

_ = LocaleNotLoadedException_0.prototype = LocaleNotLoadedException.prototype = new Exception;
_.getClass$ = function getClass_455(){
  return Lcom_vaadin_terminal_gwt_client_LocaleNotLoadedException_2_classLit;
}
;
_.castableTypeMap$ = {30:1, 37:1, 112:1, 130:1};
function getAmPmStrings(locale){
  $clinit_66();
  var l_0;
  if (cache_0.containsKey(locale)) {
    l_0 = dynamicCastJso(cache_0.get_0(locale));
    return $getStringArray(l_0, 'ampm');
  }
   else {
    throw new LocaleNotLoadedException_0(locale);
  }
}

function getClockDelimiter(locale){
  $clinit_66();
  var l_0;
  if (cache_0.containsKey(locale)) {
    l_0 = dynamicCastJso(cache_0.get_0(locale));
    return l_0['hmd'];
  }
   else {
    throw new LocaleNotLoadedException_0(locale);
  }
}

function getFirstDayOfWeek(locale){
  $clinit_66();
  var l_0;
  if (cache_0.containsKey(locale)) {
    l_0 = dynamicCastJso(cache_0.get_0(locale));
    return l_0['fdow'];
  }
   else {
    throw new LocaleNotLoadedException_0(locale);
  }
}

function getMonthNames(locale){
  $clinit_66();
  var l_0;
  if (cache_0.containsKey(locale)) {
    l_0 = dynamicCastJso(cache_0.get_0(locale));
    return $getStringArray(l_0, 'mn');
  }
   else {
    throw new LocaleNotLoadedException_0(locale);
  }
}

function getShortDayNames(locale){
  $clinit_66();
  var l_0;
  if (cache_0.containsKey(locale)) {
    l_0 = dynamicCastJso(cache_0.get_0(locale));
    return $getStringArray(l_0, 'sdn');
  }
   else {
    throw new LocaleNotLoadedException_0(locale);
  }
}

function isTwelveHourClock(locale){
  $clinit_66();
  var l_0;
  if (cache_0.containsKey(locale)) {
    l_0 = dynamicCastJso(cache_0.get_0(locale));
    return Boolean(l_0['thc']);
  }
   else {
    throw new LocaleNotLoadedException_0(locale);
  }
}

function $updateSize(this$static, element){
  var newSize;
  newSize = new RenderInformation$Size_0(element.offsetWidth || 0, element.offsetHeight || 0);
  if ($equals(newSize, this$static.renderedSize)) {
    return false;
  }
   else {
    this$static.renderedSize = newSize;
    return true;
  }
}

function RenderInformation_0(){
  this.contentArea = new RenderSpace_1;
  this.renderedSize = new RenderInformation$Size_0(-1, -1);
}

function RenderInformation(){
}

_ = RenderInformation_0.prototype = RenderInformation.prototype = new Object_0;
_.getClass$ = function getClass_458(){
  return Lcom_vaadin_terminal_gwt_client_RenderInformation_2_classLit;
}
;
_.toString$ = function toString_13(){
  return 'RenderInformation [contentArea=' + this.contentArea + ',renderedSize=' + this.renderedSize + ']';
}
;
_.castableTypeMap$ = {};
_ = RenderInformation$Size.prototype;
_.getHeight = function getHeight(){
  return this.height_0;
}
;
_.getWidth = function getWidth(){
  return this.width_0;
}
;
_ = SimpleTree.prototype;
_.add_1 = function add_8(child){
  $add_8(this, child, this.children);
}
;
function TooltipInfo_1(tooltip){
  this.title_0 = tooltip;
}

_ = TooltipInfo_1.prototype = TooltipInfo.prototype;
function $getStringArrayVariableAsSet(this$static, name_0){
  var a_0, i, s, old;
  s = new HashSet_0;
  a_0 = this$static[1]['v'][name_0];
  for (i = 0; i < a_0.length; ++i) {
    old = s.map.put(a_0[i], s);
  }
  return s;
}

function equals_3(a_0, b){
  $clinit_67();
  if (a_0 == null) {
    return b == null;
  }
  return $equals_2(a_0, b);
}

function getIEFocusedElement(){
  $clinit_67();
  if ($wnd.document.activeElement) {
    return $wnd.document.activeElement;
  }
  return null;
}

function measureHorizontalBorder(element){
  $clinit_67();
  var borders, height, offsetHeight, offsetWidth, width;
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE) {
    width = element.style['width'];
    height = element.style['height'];
    offsetWidth = element.offsetWidth || 0;
    offsetHeight = element.offsetHeight || 0;
    if (!$isIE7((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40))) {
      offsetHeight < 1 && (offsetHeight = 1);
      offsetWidth < 1 && (offsetWidth = 10);
      element.style['height'] = offsetHeight + ($clinit_9() , 'px');
    }
    element.style['width'] = offsetWidth + ($clinit_9() , 'px');
    borders = (element.offsetWidth || 0) - element.clientWidth;
    element.style['width'] = width;
    $isIE7((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40)) || (element.style['height'] = height , undefined);
  }
   else {
    borders = (element.offsetWidth || 0) - (parseInt(element['clientWidth']) || 0);
  }
  return borders;
}

function measureMarginLeft(element){
  $clinit_67();
  return ($getAbsoluteLeft(element) | 0) - ($getAbsoluteLeft($getParentElement(element)) | 0);
}

function measureVerticalBorder(element){
  $clinit_67();
  var borders, height, offsetHeight, offsetWidth, width;
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE) {
    width = element.style['width'];
    height = element.style['height'];
    offsetWidth = element.offsetWidth || 0;
    offsetHeight = element.offsetHeight || 0;
    offsetHeight < 1 && (offsetHeight = 1);
    offsetWidth < 1 && (offsetWidth = 10);
    element.style['width'] = offsetWidth + ($clinit_9() , 'px');
    element.style['height'] = offsetHeight + 'px';
    borders = (element.offsetHeight || 0) - (parseInt(element['clientHeight']) || 0);
    element.style['height'] = height;
    element.style['width'] = width;
  }
   else {
    borders = (element.offsetHeight || 0) - (parseInt(element['clientHeight']) || 0);
  }
  return borders;
}

function parseRelativeSize_0(uidl){
  $clinit_67();
  var h_0, hasAttribute, relativeHeight, relativeSize, relativeWidth, w;
  hasAttribute = false;
  w = '';
  h_0 = '';
  if ('width' in uidl[1]) {
    hasAttribute = true;
    w = uidl[1]['width'];
  }
  if ('height' in uidl[1]) {
    hasAttribute = true;
    h_0 = uidl[1]['height'];
  }
  if (!hasAttribute) {
    return null;
  }
  relativeWidth = parseRelativeSize(w);
  relativeHeight = parseRelativeSize(h_0);
  relativeSize = new RenderInformation$FloatSize_0(relativeWidth, relativeHeight);
  return relativeSize;
}

function scrollIntoViewVertically(elem){
  $clinit_67();
  var top_0 = elem.offsetTop;
  var height = elem.offsetHeight;
  elem.parentNode != elem.offsetParent && (top_0 -= elem.parentNode.offsetTop);
  var cur = elem.parentNode;
  while (cur && cur.nodeType == 1) {
    top_0 < cur.scrollTop && (cur.scrollTop = top_0);
    top_0 + height > cur.scrollTop + cur.clientHeight && (cur.scrollTop = top_0 + height - cur.clientHeight);
    var offsetTop = cur.offsetTop;
    cur.parentNode != cur.offsetParent && (offsetTop -= cur.parentNode.offsetTop);
    top_0 += offsetTop - cur.scrollTop;
    cur = cur.parentNode;
  }
}

function setFloat(element, value){
  $clinit_67();
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE?(element.style['styleFloat'] = value , undefined):(element.style['cssFloat'] = value , undefined);
}

function setStyleTemporarily(element, styleProperty, tempValue){
  $clinit_67();
  var currentValue, style;
  style = element.style;
  currentValue = style[styleProperty];
  style[styleProperty] = tempValue;
  element.offsetWidth || 0;
  style[styleProperty] = currentValue;
}

function sinkOnloadForImages(element){
  $clinit_67();
  var i, imgElements;
  imgElements = element.getElementsByTagName('img');
  for (i = 0; i < imgElements.length; ++i) {
    $maybeInitializeEventSystem();
    $sinkEventsImpl(imgElements[i], 32768);
  }
}

function updateRelativeChildrenAndSendSizeUpdateEvent(client, container){
  $clinit_67();
  updateRelativeChildrenAndSendSizeUpdateEvent_0(client, container, dynamicCast(container, 26));
}

function updateRelativeChildrenAndSendSizeUpdateEvent_0(client, container, widget){
  var old;
  $clinit_67();
  var childIterator, w, widgets;
  childIterator = container.iterator_0();
  while (childIterator.hasNext()) {
    w = dynamicCast(childIterator.next_0(), 70);
    $handleComponentRelativeSize(client, client.idToPaintableDetail[w.element_0.tkPid]);
  }
  widgets = new HashSet_0;
  old = widgets.map.put(widget, widgets);
  componentSizeUpdated(widgets);
}

_ = Util$1.prototype;
_.schedule = function schedule_3(delayMillis){
  this.lazySizeChangeTimerScheduled?(this.isRepeating?($wnd.clearInterval(this.timerId) , undefined):($wnd.clearTimeout(this.timerId) , undefined) , $remove_17(timers, this)):(this.lazySizeChangeTimerScheduled = true);
  $schedule(this, delayMillis);
}
;
function Util$3_0(val$target, val$createMouseDownEvent, val$createMouseUpEvent, val$createMouseClickEvent){
  this.val$target = val$target;
  this.val$createMouseDownEvent = val$createMouseDownEvent;
  this.val$createMouseUpEvent = val$createMouseUpEvent;
  this.val$createMouseClickEvent = val$createMouseClickEvent;
}

function Util$3(){
}

_ = Util$3_0.prototype = Util$3.prototype = new Object_0;
_.execute_0 = function execute_20(){
  var $e0;
  try {
    this.val$target.dispatchEvent(this.val$createMouseDownEvent);
    this.val$target.dispatchEvent(this.val$createMouseUpEvent);
    this.val$target.dispatchEvent(this.val$createMouseClickEvent);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, 112))
      throw $e0;
  }
}
;
_.getClass$ = function getClass_468(){
  return Lcom_vaadin_terminal_gwt_client_Util$3_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.val$createMouseClickEvent = null;
_.val$createMouseDownEvent = null;
_.val$createMouseUpEvent = null;
_.val$target = null;
function $getHeight(this$static){
  var h_0, height;
  height = 0;
  if (this$static.icon) {
    h_0 = getRequiredHeight(this$static.icon.element_0);
    h_0 > 0 && (height = h_0);
  }
  if (this$static.captionText) {
    h_0 = getRequiredHeight(this$static.captionText);
    h_0 > height && (height = h_0);
  }
  if (this$static.requiredFieldIndicator) {
    h_0 = getRequiredHeight(this$static.requiredFieldIndicator);
    h_0 > height && (height = h_0);
  }
  if (this$static.errorIndicatorElement) {
    h_0 = getRequiredHeight(this$static.errorIndicatorElement);
    h_0 > height && (height = h_0);
  }
  return height;
}

function $getRenderedWidth(this$static){
  var width;
  width = 0;
  !!this$static.icon && (width += getRequiredWidth(this$static.icon.element_0));
  !!this$static.captionText && (width += getRequiredWidth(this$static.captionText));
  !!this$static.requiredFieldIndicator && (width += getRequiredWidth(this$static.requiredFieldIndicator));
  !!this$static.errorIndicatorElement && (width += getRequiredWidth(this$static.errorIndicatorElement));
  return width;
}

function VCaptionWrapper_0(toBeWrapped, client){
  FlowPanel_0.call(this);
  this.caption_0 = new VCaption_0(toBeWrapped, client);
  $add_0(this, this.caption_0, this.element_0);
  this.widget = toBeWrapped;
  $add_0(this, dynamicCast(this.widget, 70), this.element_0);
  this.element_0['className'] = 'v-captionwrapper';
}

function VCaptionWrapper(){
}

_ = VCaptionWrapper_0.prototype = VCaptionWrapper.prototype = new FlowPanel;
_.getClass$ = function getClass_471(){
  return Lcom_vaadin_terminal_gwt_client_VCaptionWrapper_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 69:1, 70:1, 75:1, 115:1, 147:1};
_.caption_0 = null;
_.widget = null;
function $getHTML_0(this$static){
  var sb;
  sb = new StringBuffer_0;
  sb.impl.string += '<div>';
  this$static.iconUrl != null && $append_0(sb, '<img src="' + escapeAttribute(this$static.iconUrl) + '" alt="icon" />');
  $append_0(sb, this$static.caption_0);
  sb.impl.string += '<\/div>';
  return sb.impl.string;
}

function Action(){
}

_ = Action.prototype = new Object_0;
_.getClass$ = function getClass_555(){
  return Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit;
}
;
_.getHTML = function getHTML(){
  return $getHTML_0(this);
}
;
_.castableTypeMap$ = {3:1, 14:1, 102:1};
_.caption_0 = '';
_.iconUrl = null;
_.owner = null;
function $clinit_70(){
  $clinit_70 = nullMethod;
  new AlignmentInfo_0(1);
  new AlignmentInfo_0(2);
  new AlignmentInfo_0(4);
  new AlignmentInfo_0(8);
  new AlignmentInfo_0(16);
  new AlignmentInfo_0(32);
  TOP_LEFT = new AlignmentInfo_0(5);
}

function AlignmentInfo_0(bitMask){
  $clinit_70();
  this.bitMask = bitMask;
}

function AlignmentInfo(){
}

_ = AlignmentInfo_0.prototype = AlignmentInfo.prototype = new Object_0;
_.getClass$ = function getClass_556(){
  return Lcom_vaadin_terminal_gwt_client_ui_AlignmentInfo_2_classLit;
}
;
_.castableTypeMap$ = {};
_.bitMask = 0;
var TOP_LEFT;
function FocusableFlexTable(){
}

_ = FocusableFlexTable.prototype = new FlexTable;
_.addBlurHandler = function addBlurHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_13() , $clinit_13() , TYPE));
}
;
_.addFocusHandler = function addFocusHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_18() , $clinit_18() , TYPE_4));
}
;
_.focus_0 = function focus_8(){
  $clinit_53();
  $focus(this.element_0);
}
;
_.getClass$ = function getClass_560(){
  return Lcom_vaadin_terminal_gwt_client_ui_FocusableFlexTable_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 25:1, 33:1, 69:1, 70:1, 75:1};
function FocusableScrollPanel_1(){
  FocusableScrollPanel_0.call(this);
  this.focusElement = $doc.createElement('div');
}

_ = FocusableScrollPanel_1.prototype = FocusableScrollPanel.prototype;
function TooltipListBox_0(isMultiselect){
  $clinit_42();
  this.element_0 = $createSelectElement($doc, isMultiselect);
  this.element_0['className'] = 'gwt-ListBox';
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
}

function TooltipListBox(){
}

_ = TooltipListBox_0.prototype = TooltipListBox.prototype = new ListBox;
_.getClass$ = function getClass_574(){
  return Lcom_vaadin_terminal_gwt_client_ui_TooltipListBox_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_14(event_0){
  $onBrowserEvent(this, event_0);
  !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, this.pntbl, null) , undefined);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1, 145:1, 154:1};
_.client = null;
_.pntbl = null;
function TreeAction_0(owner, target, action){
  this.owner = owner;
  this.targetKey = target;
  this.actionKey = action;
}

function TreeAction(){
}

_ = TreeAction_0.prototype = TreeAction.prototype = new Action;
_.execute_0 = function execute_28(){
  $addVariableToQueue(this.owner.getClient(), this.owner.getPaintableId(), 'action', $escapeVariableValue(this.targetKey + ',' + this.actionKey), true, 115);
  $getContextMenu(this.owner.getClient()).hide_0(false);
}
;
_.getClass$ = function getClass_577(){
  return Lcom_vaadin_terminal_gwt_client_ui_TreeAction_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1, 102:1};
_.actionKey = '';
_.targetKey = '';
function $updateFromUIDL_8(this$static, uidl, client){
  var hidden, i, index, it, iterator, key, oldPaintable, oldPaintables, p, selected, tab, tabCount, tabs, w, count;
  this$static.client = client;
  this$static.cachedUpdate = $updateComponent(client, this$static, uidl, true);
  if (this$static.cachedUpdate) {
    return;
  }
  this$static.id_0 = uidl[1]['id'];
  this$static.disabled_0 = 'disabled' in uidl[1];
  tabs = uidl[2];
  oldPaintables = new ArrayList_0;
  for (iterator = this$static.getPaintableIterator(); iterator.hasNext();) {
    $add_12(oldPaintables, iterator.next_0());
  }
  $clear_6(this$static.tabKeys);
  this$static.disabledTabKeys.map.clear_0();
  index = 0;
  for (it = new UIDL$1_0(tabs); count = it.this$0.length - 2 , count > it.index_0 + 1;) {
    tab = dynamicCastJso($next_3(it));
    key = tab[1]['key'];
    selected = Boolean(tab[1]['selected']);
    hidden = Boolean(tab[1]['hidden']);
    Boolean(tab[1]['disabled']) && $add_14(this$static.disabledTabKeys, key);
    $add_12(this$static.tabKeys, key);
    selected && (this$static.activeTabIndex = index);
    this$static.renderTab(tab, index, selected, hidden);
    ++index;
  }
  tabCount = this$static.getTabCount();
  while (tabCount-- > index) {
    this$static.removeTab(index);
  }
  for (i = 0; i < this$static.getTabCount(); ++i) {
    p = this$static.getTab(i);
    $remove_17(oldPaintables, p);
  }
  for (iterator = new AbstractList$IteratorImpl_0(oldPaintables); iterator.i < iterator.this$0_0.size_1();) {
    oldPaintable = $next_5(iterator);
    if (oldPaintable != null && oldPaintable.castableTypeMap$ && !!oldPaintable.castableTypeMap$[26]) {
      w = dynamicCast(oldPaintable, 70);
      w.isAttached() && $removeFromParent_0(w);
      $unregisterPaintable(client, dynamicCast(oldPaintable, 26));
    }
  }
}

function VTabsheetBase_0(classname){
  this.children_0 = new WidgetCollection_0(this);
  this.tabKeys = new ArrayList_0;
  this.disabledTabKeys = new HashSet_0;
  this.element_0 = $doc.createElement('div');
  this.element_0['className'] = classname;
}

function VTabsheetBase(){
}

_ = VTabsheetBase.prototype = new ComplexPanel;
_.getClass$ = function getClass_581(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTabsheetBase_2_classLit;
}
;
_.updateFromUIDL = function updateFromUIDL_16(uidl, client){
  $updateFromUIDL_8(this, uidl, client);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1};
_.activeTabIndex = 0;
_.cachedUpdate = false;
_.client = null;
_.disabled_0 = false;
_.id_0 = null;
_.readonly = false;
function $getSourceUrl(this$static, uidl){
  var url;
  url = $translateVaadinUri(this$static.client, uidl[1]['res']);
  if (url == null) {
    return '';
  }
  return url;
}

function $setMediaElement(this$static, element){
  this$static.element_0 = element;
  this$static.media = element;
}

function $updateFromUIDL_9(this$static, uidl, client){
  var child, ix, src, alt;
  if ($updateComponent(client, this$static, uidl, true)) {
    return;
  }
  this$static.client = client;
  $setControls(this$static.media, Boolean(uidl[1]['ctrl']));
  $setAutoplay(this$static.media, Boolean(uidl[1]['auto']));
  this$static.media.muted = Boolean(uidl[1]['muted']);
  for (ix = 0; ix < uidl.length - 2; ++ix) {
    child = uidl[ix + 2];
    if ($equals_2('src', child[0])) {
      src = $doc.createElement('source');
      src.setAttribute('src', $getSourceUrl(this$static, child));
      src.setAttribute('type', child[1]['type']);
      this$static.media.appendChild(src);
    }
  }
  alt = uidl[1]['alt'];
  alt == null || $equals_2('', alt)?(alt = this$static.getDefaultAltHtml()):Boolean(uidl[1]['html']) || (alt = escapeHTML(alt));
  this$static.media.appendChild($doc.createTextNode(alt));
  'pause' in uidl[1] && (this$static.media.pause() , undefined);
  'play' in uidl[1] && (this$static.media.play() , undefined);
}

function VMediaBase(){
}

_ = VMediaBase.prototype = new Widget;
_.getClass$ = function getClass_584(){
  return Lcom_vaadin_terminal_gwt_client_ui_VMediaBase_2_classLit;
}
;
_.updateFromUIDL = function updateFromUIDL_18(uidl, client){
  $updateFromUIDL_9(this, uidl, client);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 26:1, 69:1, 70:1};
_.client = null;
_.media = null;
function $buildCalendarBody(this$static){
  var curr, day, dayCount, dayOfMonth, dayOfMonthSelected, dayOfMonthToday, dayOfWeek, daysInMonth, firstDay, i, initiallyNull, startWeekDay, today, weekNumber, weekNumberProcessed, weekOfMonth, hours, dayOfWeek_0, daysSinceFirstOfJanuary, firstOfJanuary, nearestThursday, nearestThursdayDiff, timeDiff;
  $setWidget_1(this$static, 1, 0, this$static.days);
  this$static.tableElem['cellPadding'] = 0;
  this$static.tableElem['cellSpacing'] = 0;
  $setColSpan(this$static.cellFormatter, 1);
  $setStyleName_1(this$static.cellFormatter, 1, 0, 'v-datefield-calendarpanel-body');
  $setStyleName_1(this$static.days.cellFormatter, 0, 0, 'v-week');
  $setHTML(this$static.days, 0, 0, '<strong><\/strong>');
  $setVisible(this$static.days.cellFormatter, 0, this$static.showISOWeekNumbers);
  $setStyleName_2(this$static.days.rowFormatter, 0, 'v-datefield-calendarpanel-weekdays');
  if (this$static.showISOWeekNumbers) {
    $setStyleName_1(this$static.days.cellFormatter, 0, 0, 'v-first');
    $setStyleName_1(this$static.days.cellFormatter, 0, 1, '');
    $addStyleName_0(this$static.days.rowFormatter, 'v-datefield-calendarpanel-weeknumbers');
  }
   else {
    $setStyleName_1(this$static.days.cellFormatter, 0, 0, '');
    $setStyleName_1(this$static.days.cellFormatter, 0, 1, 'v-first');
  }
  $setStyleName_1(this$static.days.cellFormatter, 0, 7, 'v-last');
  firstDay = $getFirstDayOfWeek(this$static.dateTimeService);
  for (i = 0; i < 7; ++i) {
    day = i + firstDay;
    day > 6 && (day = 0);
    this$static.resolution > 2?$setHTML(this$static.days, 0, 1 + i, '<strong>' + $getShortDay(this$static.dateTimeService, day) + '<\/strong>'):$setHTML(this$static.days, 0, 1 + i, '');
  }
  dayOfMonthSelected = -1;
  dayOfMonthToday = -1;
  initiallyNull = !this$static.value_0;
  !initiallyNull && this$static.value_0.jsdate.getMonth() == this$static.focusedDate.jsdate.getMonth() && this$static.value_0.jsdate.getFullYear() - 1900 == this$static.focusedDate.jsdate.getFullYear() - 1900 && (dayOfMonthSelected = this$static.value_0.jsdate.getDate());
  today = new Date_1;
  today.jsdate.getMonth() == this$static.focusedDate.jsdate.getMonth() && today.jsdate.getFullYear() - 1900 == this$static.focusedDate.jsdate.getFullYear() - 1900 && (dayOfMonthToday = today.jsdate.getDate());
  startWeekDay = $getStartWeekDay(this$static.dateTimeService, this$static.focusedDate);
  daysInMonth = getNumberOfDaysInMonth(this$static.focusedDate);
  dayCount = 0;
  curr = new Date_3(fromDouble(this$static.focusedDate.jsdate.getTime()));
  for (weekOfMonth = 1; weekOfMonth < 7; ++weekOfMonth) {
    weekNumberProcessed = initValues(_3Z_classLit, {30:1}, -1, [false, false, false, false, false, false, false]);
    for (dayOfWeek = 0; dayOfWeek < 7; ++dayOfWeek) {
      if (!(weekOfMonth == 1 && dayOfWeek < startWeekDay)) {
        if (dayCount >= daysInMonth) {
          break;
        }
        dayOfMonth = ++dayCount;
        hours = curr.jsdate.getHours();
        curr.jsdate.setDate(dayCount);
        $fixDaylightSavings(curr, hours);
        day = new VCalendarPanel$Day_0(this$static, dayOfMonth);
        if (dayOfMonthSelected == dayOfMonth) {
          $setStyleName(day, getStylePrimaryName(day.element_0) + '-selected', true);
          this$static.selectedDay = day;
        }
        dayOfMonthToday == dayOfMonth && $setStyleName(day, getStylePrimaryName(day.element_0) + '-today', true);
        if (dayOfMonth == this$static.focusedDate.jsdate.getDate()) {
          this$static.focusedDay = day;
          this$static.focusedRow = weekOfMonth;
          this$static.hasFocus && $setStyleName(day, getStylePrimaryName(day.element_0) + '-focused', true);
        }
        $setWidget_1(this$static.days, weekOfMonth, 1 + dayOfWeek, day);
        if (!weekNumberProcessed[weekOfMonth]) {
          $setVisible(this$static.days.cellFormatter, weekOfMonth, this$static.showISOWeekNumbers);
          if (this$static.showISOWeekNumbers) {
            weekNumber = ($clinit_65() , dayOfWeek_0 = curr.jsdate.getDay() , dayOfWeek_0 == 0 && (dayOfWeek_0 = 7) , nearestThursdayDiff = 4 - dayOfWeek_0 , nearestThursday = new Date_3(add_0(fromDouble(curr.jsdate.getTime()), mul(fromInt(nearestThursdayDiff), P5265c00_longLit))) , firstOfJanuary = new Date_2(nearestThursday.jsdate.getFullYear() - 1900, 0, 1) , timeDiff = sub(fromDouble(nearestThursday.jsdate.getTime()), fromDouble(firstOfJanuary.jsdate.getTime())) , daysSinceFirstOfJanuary = toInt(divMod(timeDiff, P5265c00_longLit, false)) , ~~(daysSinceFirstOfJanuary / 7) + 1);
            $setHTML(this$static.days, weekOfMonth, 0, '<span class="v-datefield-calendarpanel-weeknumber">' + weekNumber + '<\/span>');
            weekNumberProcessed[weekOfMonth] = true;
          }
        }
      }
    }
  }
}

function $buildCalendarHeader(this$static, needsMonth){
  var monthName, year, td, td_0;
  $addStyleName_0(this$static.rowFormatter, 'v-datefield-calendarpanel-header');
  if (!this$static.prevMonth && needsMonth) {
    this$static.prevMonth = new VCalendarPanel$VEventButton_0(this$static);
    this$static.prevMonth.element_0.innerHTML = '&lsaquo;';
    this$static.prevMonth.getStyleElement()['className'] = 'v-button-prevmonth';
    this$static.prevMonth.element_0.tabIndex = -1;
    this$static.nextMonth = new VCalendarPanel$VEventButton_0(this$static);
    this$static.nextMonth.element_0.innerHTML = '&rsaquo;';
    this$static.nextMonth.getStyleElement()['className'] = 'v-button-nextmonth';
    this$static.nextMonth.element_0.tabIndex = -1;
    $setStyleName_1(this$static.cellFormatter, 0, 3, 'v-datefield-calendarpanel-nextmonth');
    $setStyleName_1(this$static.cellFormatter, 0, 1, 'v-datefield-calendarpanel-prevmonth');
    $setWidget_1(this$static, 0, 3, this$static.nextMonth);
    $setWidget_1(this$static, 0, 1, this$static.prevMonth);
  }
   else if (!!this$static.prevMonth && !needsMonth) {
    $remove_5(this$static, this$static.prevMonth);
    $remove_5(this$static, this$static.nextMonth);
    this$static.prevMonth = null;
    this$static.nextMonth = null;
  }
  if (!this$static.prevYear) {
    this$static.prevYear = new VCalendarPanel$VEventButton_0(this$static);
    this$static.prevYear.element_0.innerHTML = '&laquo;';
    this$static.prevYear.getStyleElement()['className'] = 'v-button-prevyear';
    this$static.prevYear.element_0.tabIndex = -1;
    this$static.nextYear = new VCalendarPanel$VEventButton_0(this$static);
    this$static.nextYear.element_0.innerHTML = '&raquo;';
    this$static.nextYear.getStyleElement()['className'] = 'v-button-nextyear';
    this$static.nextYear.element_0.tabIndex = -1;
    $setWidget_1(this$static, 0, 0, this$static.prevYear);
    $setWidget_1(this$static, 0, 4, this$static.nextYear);
    $setStyleName_1(this$static.cellFormatter, 0, 0, 'v-datefield-calendarpanel-prevyear');
    $setStyleName_1(this$static.cellFormatter, 0, 4, 'v-datefield-calendarpanel-nextyear');
  }
  monthName = needsMonth?$getMonth(this$static.dateTimeService, this$static.focusedDate.jsdate.getMonth()):'';
  year = this$static.focusedDate.jsdate.getFullYear() - 1900 + 1900;
  $setStyleName_1(this$static.cellFormatter, 0, 2, 'v-datefield-calendarpanel-month');
  $prepareCell(this$static, 0, 2);
  td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[0].cells[2] , $internalClearCell(this$static, td_0, '<span class="v-datefield-calendarpanel-month">' + monthName + ' ' + year + '<\/span>' == null) , td_0);
  '<span class="v-datefield-calendarpanel-month">' + monthName + ' ' + year + '<\/span>' != null && (td.innerHTML = '<span class="v-datefield-calendarpanel-month">' + monthName + ' ' + year + '<\/span>' || '' , undefined);
}

function $clearCalendarBody(this$static, remove){
  var col, row;
  if (remove) {
    if (this$static.bodyElem.rows.length > 1) {
      $removeRow(this$static, 1);
      $clear_1(this$static.days);
    }
  }
   else {
    for (row = 1; row < 7; ++row) {
      for (col = 0; col < 8; ++col) {
        $setHTML(this$static.days, row, col, '&nbsp;');
      }
    }
  }
}

function $contains(w, subElement){
  if (!w || !w.element_0) {
    return false;
  }
  return $isOrHasChild(w.element_0, subElement);
}

function $focusDay(this$static, day){
  var cellCount, curday, i, j_0, rowCount, widget;
  if (this$static.resolution > 2) {
    !!this$static.focusedDay && $removeStyleDependentName(this$static.focusedDay, 'focused');
    if (day > 0 && !!this$static.focusedDate) {
      $setDate(this$static.focusedDate, day);
      rowCount = this$static.days.bodyElem.rows.length;
      for (i = 0; i < rowCount; ++i) {
        cellCount = $getCellCount(this$static.days, i);
        for (j_0 = 0; j_0 < cellCount; ++j_0) {
          widget = $getWidget_0(this$static.days, i, j_0);
          if (!!widget && widget != null && widget.castableTypeMap$ && !!widget.castableTypeMap$[142]) {
            curday = dynamicCast(widget, 142);
            if (curday.day == day) {
              $setStyleName(curday, getStylePrimaryName(curday.getStyleElement()) + '-focused', true);
              this$static.focusedDay = curday;
              this$static.focusedRow = i;
              return;
            }
          }
        }
      }
    }
  }
}

function $focusNextMonth(this$static){
  var currentMonth, requestedMonth;
  currentMonth = this$static.focusedDate.jsdate.getMonth();
  this$static.focusedDate.setMonth_0(currentMonth + 1);
  requestedMonth = (currentMonth + 1) % 12;
  while (this$static.focusedDate.jsdate.getMonth() != requestedMonth) {
    $setDate(this$static.focusedDate, this$static.focusedDate.jsdate.getDate() - 1);
  }
  $renderCalendar(this$static);
}

function $focusNextYear(this$static, years){
  var currentMonth;
  currentMonth = this$static.focusedDate.jsdate.getMonth();
  this$static.focusedDate.setYear(this$static.focusedDate.jsdate.getFullYear() - 1900 + years);
  this$static.focusedDate.jsdate.getMonth() != currentMonth && $setDate(this$static.focusedDate, 0);
  $renderCalendar(this$static);
}

function $focusPreviousMonth(this$static){
  var currentMonth;
  currentMonth = this$static.focusedDate.jsdate.getMonth();
  this$static.focusedDate.setMonth_0(currentMonth - 1);
  while (this$static.focusedDate.jsdate.getMonth() == currentMonth) {
    $setDate(this$static.focusedDate, this$static.focusedDate.jsdate.getDate() - 1);
  }
  $renderCalendar(this$static);
}

function $focusPreviousYear(this$static, years){
  var currentMonth;
  currentMonth = this$static.focusedDate.jsdate.getMonth();
  this$static.focusedDate.setYear(this$static.focusedDate.jsdate.getFullYear() - 1900 - years);
  this$static.focusedDate.jsdate.getMonth() != currentMonth && $setDate(this$static.focusedDate, 0);
  $renderCalendar(this$static);
}

function $handleKeyPress(this$static, event_0){
  var keycode, nativeKeyCode;
  if (!!this$static.time && $isOrHasChild(this$static.time.element_0, event_0.nativeEvent.target)) {
    nativeKeyCode = event_0.nativeEvent.keyCode || 0;
    if (nativeKeyCode == 13) {
      !!this$static.submitListener && this$static.submitListener.onSubmit();
      event_0.nativeEvent.preventDefault();
      event_0.nativeEvent.stopPropagation();
    }
    return;
  }
  keycode = event_0.nativeEvent.keyCode || 0;
  if (keycode == 9 && !!event_0.nativeEvent.shiftKey) {
    if ($onTabOut(this$static, event_0)) {
      return;
    }
  }
  $handleNavigation(this$static, keycode, !!event_0.nativeEvent.ctrlKey || !!event_0.nativeEvent.metaKey, !!event_0.nativeEvent.shiftKey) && (event_0.nativeEvent.preventDefault() , undefined);
}

function $handleNavigation(this$static, keycode, ctrl, shift){
  return this$static.resolution == 1?$handleNavigationYearMode(this$static, keycode, ctrl, shift):this$static.resolution == 2?$handleNavigationMonthMode(this$static, keycode, ctrl):this$static.resolution == 4?$handleNavigationDayMode(this$static, keycode, ctrl, shift):$handleNavigationDayMode(this$static, keycode, ctrl, shift);
}

function $handleNavigationDayMode(this$static, keycode, ctrl, shift){
  var newCurrentDate;
  if (ctrl) {
    return false;
  }
  if (keycode == 39 && !shift) {
    newCurrentDate = new Date_3(fromDouble(this$static.focusedDate.jsdate.getTime()));
    $setDate(newCurrentDate, newCurrentDate.jsdate.getDate() + 1);
    if (newCurrentDate.jsdate.getMonth() == this$static.focusedDate.jsdate.getMonth()) {
      $focusDay(this$static, this$static.focusedDate.jsdate.getDate() + 1);
    }
     else {
      $setDate(this$static.focusedDate, this$static.focusedDate.jsdate.getDate() + 1);
      $renderCalendar(this$static);
    }
    return true;
  }
   else if (keycode == 37 && !shift) {
    newCurrentDate = new Date_3(fromDouble(this$static.focusedDate.jsdate.getTime()));
    $setDate(newCurrentDate, newCurrentDate.jsdate.getDate() - 1);
    if (newCurrentDate.jsdate.getMonth() == this$static.focusedDate.jsdate.getMonth()) {
      $focusDay(this$static, this$static.focusedDate.jsdate.getDate() - 1);
    }
     else {
      $setDate(this$static.focusedDate, this$static.focusedDate.jsdate.getDate() - 1);
      $renderCalendar(this$static);
    }
    return true;
  }
   else if (keycode == 38 && !shift) {
    newCurrentDate = new Date_3(fromDouble(this$static.focusedDate.jsdate.getTime()));
    $setDate(newCurrentDate, newCurrentDate.jsdate.getDate() - 7);
    if (newCurrentDate.jsdate.getMonth() == this$static.focusedDate.jsdate.getMonth() && this$static.focusedRow > 1) {
      $focusDay(this$static, this$static.focusedDate.jsdate.getDate() - 7);
    }
     else {
      $setDate(this$static.focusedDate, this$static.focusedDate.jsdate.getDate() - 7);
      $renderCalendar(this$static);
    }
    return true;
  }
   else if (keycode == 40 && !shift) {
    newCurrentDate = new Date_3(fromDouble(this$static.focusedDate.jsdate.getTime()));
    $setDate(newCurrentDate, newCurrentDate.jsdate.getDate() + 7);
    if (newCurrentDate.jsdate.getMonth() == this$static.focusedDate.jsdate.getMonth()) {
      $focusDay(this$static, this$static.focusedDate.jsdate.getDate() + 7);
    }
     else {
      $setDate(this$static.focusedDate, this$static.focusedDate.jsdate.getDate() + 7);
      $renderCalendar(this$static);
    }
    return true;
  }
   else if (keycode == 13 && !shift) {
    $selectFocused(this$static);
    !!this$static.submitListener && this$static.submitListener.onSubmit();
    return true;
  }
   else if (keycode == 27) {
    !!this$static.submitListener && this$static.submitListener.onCancel();
    return true;
  }
   else if (shift && keycode == 39) {
    $focusNextMonth(this$static);
    return true;
  }
   else if (shift && keycode == 37) {
    $focusPreviousMonth(this$static);
    return true;
  }
   else if (shift && keycode == 38) {
    $focusNextYear(this$static, 1);
    return true;
  }
   else if (shift && keycode == 40) {
    $focusPreviousYear(this$static, 1);
    return true;
  }
   else if (keycode == 8 && !shift) {
    $setTime(this$static.focusedDate, fromDouble(this$static.value_0.jsdate.getTime()));
    $renderCalendar(this$static);
    return true;
  }
  return false;
}

function $handleNavigationMonthMode(this$static, keycode, ctrl){
  if (ctrl) {
    return false;
  }
   else if (keycode == 38) {
    $focusNextYear(this$static, 1);
    return true;
  }
   else if (keycode == 39) {
    $focusNextMonth(this$static);
    return true;
  }
   else if (keycode == 40) {
    $focusPreviousYear(this$static, 1);
    return true;
  }
   else if (keycode == 37) {
    $focusPreviousMonth(this$static);
    return true;
  }
   else if (keycode == 13) {
    this$static.value_0 = new Date_3(fromDouble(this$static.focusedDate.jsdate.getTime()));
    !!this$static.submitListener && this$static.submitListener.onSubmit();
    return true;
  }
   else if (keycode == 8) {
    $setTime(this$static.focusedDate, fromDouble(this$static.value_0.jsdate.getTime()));
    $renderCalendar(this$static);
    return true;
  }
   else if (keycode == 27 || keycode == 9) {
    return true;
  }
  return false;
}

function $handleNavigationYearMode(this$static, keycode, ctrl, shift){
  if (ctrl || shift) {
    return false;
  }
   else if (keycode == 38) {
    $focusNextYear(this$static, 10);
    return true;
  }
   else if (keycode == 39) {
    $focusNextYear(this$static, 1);
    return true;
  }
   else if (keycode == 40) {
    $focusPreviousYear(this$static, 10);
    return true;
  }
   else if (keycode == 37) {
    $focusPreviousYear(this$static, 1);
    return true;
  }
   else if (keycode == 13) {
    this$static.value_0 = new Date_3(fromDouble(this$static.focusedDate.jsdate.getTime()));
    !!this$static.submitListener && this$static.submitListener.onSubmit();
    return true;
  }
   else if (keycode == 8) {
    $setTime(this$static.focusedDate, fromDouble(this$static.value_0.jsdate.getTime()));
    $renderCalendar(this$static);
    return true;
  }
   else if (keycode == 27) {
    return true;
  }
  return false;
}

function $onSubmit(this$static){
  !!this$static.submitListener && this$static.submitListener.onSubmit();
}

function $onTabOut(this$static, event_0){
  if (this$static.focusOutListener) {
    return this$static.focusOutListener.onFocusOut(event_0);
  }
  return false;
}

function $processClickEvent(this$static, sender){
  sender == this$static.prevYear?$focusPreviousYear(this$static, 1):sender == this$static.nextYear?$focusNextYear(this$static, 1):sender == this$static.prevMonth?$focusPreviousMonth(this$static):sender == this$static.nextMonth && $focusNextMonth(this$static);
}

function $renderCalendar(this$static){
  var needsBody, needsMonth;
  !this$static.focusedDate && (this$static.focusedDate = new Date_1);
  this$static.resolution <= 2 && !!this$static.focusChangeListener && this$static.focusChangeListener.focusChanged(new Date_3(fromDouble(this$static.focusedDate.jsdate.getTime())));
  needsMonth = this$static.resolution > 1;
  needsBody = this$static.resolution >= 4;
  $buildCalendarHeader(this$static, needsMonth);
  $clearCalendarBody(this$static, !needsBody);
  needsBody && $buildCalendarBody(this$static);
  if (this$static.resolution > 4 && !this$static.time) {
    this$static.time = new VCalendarPanel$VTime_0(this$static);
    $setWidget_1(this$static, 2, 0, this$static.time);
    $setColSpan(this$static.cellFormatter, 2);
    $setStyleName_1(this$static.cellFormatter, 2, 0, 'v-datefield-calendarpanel-time');
  }
   else 
    this$static.resolution > 4?$updateTimes(this$static.time):!!this$static.time && $remove_5(this$static, this$static.time);
}

function $selectDate(this$static, day){
  var cellCount, curday, i, j_0, rowCount, widget;
  !!this$static.selectedDay && $removeStyleDependentName(this$static.selectedDay, 'selected');
  rowCount = this$static.days.bodyElem.rows.length;
  for (i = 0; i < rowCount; ++i) {
    cellCount = $getCellCount(this$static.days, i);
    for (j_0 = 0; j_0 < cellCount; ++j_0) {
      widget = $getWidget_0(this$static.days, i, j_0);
      if (!!widget && widget != null && widget.castableTypeMap$ && !!widget.castableTypeMap$[142]) {
        curday = dynamicCast(widget, 142);
        if (curday.day == day) {
          $setStyleName(curday, getStylePrimaryName(curday.getStyleElement()) + '-selected', true);
          this$static.selectedDay = curday;
          return;
        }
      }
    }
  }
}

function $selectFocused(this$static){
  if (this$static.focusedDate) {
    !this$static.value_0 && (this$static.value_0 = new Date_1);
    $setDate(this$static.value_0, 1);
    this$static.value_0.jsdate.getFullYear() - 1900 != this$static.focusedDate.jsdate.getFullYear() - 1900 && this$static.value_0.setYear(this$static.focusedDate.jsdate.getFullYear() - 1900);
    this$static.value_0.jsdate.getMonth() != this$static.focusedDate.jsdate.getMonth() && this$static.value_0.setMonth_0(this$static.focusedDate.jsdate.getMonth());
    this$static.value_0.jsdate.getDate() != this$static.focusedDate.jsdate.getDate();
    $setDate(this$static.value_0, this$static.focusedDate.jsdate.getDate());
    $selectDate(this$static, this$static.focusedDate.jsdate.getDate());
  }
   else {
    impl_2.log_0('Trying to select a the focused date which is NULL!');
  }
}

function $setDate_0(this$static, currentDate){
  var oldFocusedValue;
  if (currentDate == this$static.value_0 && !!currentDate) {
    return;
  }
  oldFocusedValue = this$static.focusedDate;
  this$static.value_0 = currentDate;
  !this$static.value_0?(this$static.focusedDate = null):(this$static.focusedDate = new Date_3(fromDouble(this$static.value_0.jsdate.getTime())));
  if (!oldFocusedValue || !this$static.value_0 || neq(fromDouble(oldFocusedValue.jsdate.getTime()), fromDouble(this$static.value_0.jsdate.getTime()))) {
    $renderCalendar(this$static);
  }
   else {
    $focusDay(this$static, currentDate.jsdate.getDate());
    $selectFocused(this$static);
  }
  this$static.hasFocus || $focusDay(this$static, -1);
}

function $setResolution(this$static, resolution){
  this$static.resolution = resolution;
  if (this$static.time) {
    $removeFromParent_0(this$static.time);
    this$static.time = null;
  }
}

function VCalendarPanel_0(){
  FlexTable_0.call(this);
  this.element_0.tabIndex = 0;
  this.dayClickHandler = new VCalendarPanel$1_0(this);
  this.days = new FlexTable_0;
  this.element_0['className'] = 'v-datefield-calendarpanel';
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isGecko?$addDomHandler(this, this, ($clinit_20() , $clinit_20() , TYPE_6)):$addDomHandler(this, this, ($clinit_19() , $clinit_19() , TYPE_5));
  $addDomHandler(this, this, ($clinit_18() , $clinit_18() , TYPE_4));
  $addDomHandler(this, this, ($clinit_13() , $clinit_13() , TYPE));
}

function VCalendarPanel(){
}

_ = VCalendarPanel_0.prototype = VCalendarPanel.prototype = new FocusableFlexTable;
_.getClass$ = function getClass_587(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel_2_classLit;
}
;
_.getSubPartElement = function getSubPartElement(subPart){
  var day, dayOfMonth, iter, w;
  if ($equals_2('nextmon', subPart)) {
    return this.nextMonth.element_0;
  }
  if ($equals_2('prevmon', subPart)) {
    return this.prevMonth.element_0;
  }
  if ($equals_2('nexty', subPart)) {
    return this.nextYear.element_0;
  }
  if ($equals_2('prevy', subPart)) {
    return this.prevYear.element_0;
  }
  if ($equals_2('h', subPart)) {
    return this.time.hours.element_0;
  }
  if ($equals_2('m', subPart)) {
    return this.time.mins.element_0;
  }
  if ($equals_2('s', subPart)) {
    return this.time.sec.element_0;
  }
  if ($equals_2('ms', subPart)) {
    return this.time.msec.element_0;
  }
  if ($equals_2('ampm', subPart)) {
    return this.time.ampm.element_0;
  }
  if (subPart.indexOf('day') == 0) {
    dayOfMonth = __parseAndValidateInt(subPart.substr(3, subPart.length - 3));
    iter = new HTMLTable$1_0(this.days);
    while (iter.nextIndex < iter.widgetList.size_0) {
      w = $next_0(iter);
      if (w != null && w.castableTypeMap$ && !!w.castableTypeMap$[142]) {
        day = dynamicCast(w, 142);
        if (day.day == dayOfMonth) {
          return day.element_0;
        }
      }
    }
  }
  if ($equals_2('header', subPart)) {
    return $getElement(this.cellFormatter).childNodes[0];
  }
  return null;
}
;
_.getSubPartName = function getSubPartName(subElement){
  var day;
  if ($contains(this.nextMonth, subElement)) {
    return 'nextmon';
  }
   else if ($contains(this.prevMonth, subElement)) {
    return 'prevmon';
  }
   else if ($contains(this.nextYear, subElement)) {
    return 'nexty';
  }
   else if ($contains(this.prevYear, subElement)) {
    return 'prevy';
  }
   else if ($contains(this.days, subElement)) {
    day = dynamicCast(findWidget(subElement, Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$Day_2_classLit), 142);
    if (day) {
      return 'day' + day.day;
    }
  }
   else if (this.time) {
    if ($contains(this.time.hours, subElement)) {
      return 'h';
    }
     else if ($contains(this.time.mins, subElement)) {
      return 'm';
    }
     else if ($contains(this.time.sec, subElement)) {
      return 's';
    }
     else if ($contains(this.time.msec, subElement)) {
      return 'ms';
    }
     else if ($contains(this.time.ampm, subElement)) {
      return 'ampm';
    }
  }
   else if ($isOrHasChild($getElement(this.cellFormatter), subElement)) {
    return 'header';
  }
  return null;
}
;
_.onBlur = function onBlur_4(event_0){
  if (instanceOf(event_0.source, 144)) {
    this.hasFocus = false;
    $focusDay(this, -1);
  }
}
;
_.onDetach = function onDetach_7(){
  $onDetach(this);
  !!this.mouseTimer && $cancel_0(this.mouseTimer);
}
;
_.onFocus = function onFocus_3(event_0){
  if (instanceOf(event_0.source, 144)) {
    this.hasFocus = true;
    !!this.focusedDay && $focusDay(this, this.focusedDay.day);
  }
}
;
_.onKeyDown = function onKeyDown_1(event_0){
  $handleKeyPress(this, event_0);
}
;
_.onKeyPress = function onKeyPress_0(event_0){
  $handleKeyPress(this, event_0);
}
;
_.onMouseDown = function onMouseDown_1(event_0){
  var sender;
  if (instanceOf(event_0.source, 143)) {
    sender = dynamicCast(event_0.source, 70);
    sender == this.prevYear?$focusPreviousYear(this, 1):sender == this.nextYear?$focusNextYear(this, 1):sender == this.prevMonth?$focusPreviousMonth(this):sender == this.nextMonth && $focusNextMonth(this);
    this.mouseTimer = new VCalendarPanel$2_0(this, sender);
    this.mouseTimer.schedule(500);
  }
}
;
_.onMouseOut = function onMouseOut_0(event_0){
  !!this.mouseTimer && $cancel_0(this.mouseTimer);
}
;
_.onMouseUp = function onMouseUp_2(event_0){
  !!this.mouseTimer && $cancel_0(this.mouseTimer);
}
;
_.castableTypeMap$ = {5:1, 6:1, 7:1, 10:1, 12:1, 13:1, 15:1, 20:1, 21:1, 22:1, 25:1, 33:1, 43:1, 46:1, 48:1, 49:1, 69:1, 70:1, 75:1, 128:1, 144:1};
_.dateTimeService = null;
_.focusChangeListener = null;
_.focusOutListener = null;
_.focusedDate = null;
_.focusedDay = null;
_.focusedRow = 0;
_.hasFocus = false;
_.mouseTimer = null;
_.nextMonth = null;
_.nextYear = null;
_.prevMonth = null;
_.prevYear = null;
_.resolution = 1;
_.selectedDay = null;
_.showISOWeekNumbers = false;
_.submitListener = null;
_.time = null;
_.timeChangeListener = null;
_.value_0 = null;
function VCalendarPanel$1_0(this$0){
  this.this$0 = this$0;
}

function VCalendarPanel$1(){
}

_ = VCalendarPanel$1_0.prototype = VCalendarPanel$1.prototype = new Object_0;
_.getClass$ = function getClass_588(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$1_2_classLit;
}
;
_.onClick = function onClick_17(event_0){
  var day;
  day = dynamicCast(event_0.source, 142);
  $focusDay(this.this$0, day.day);
  $selectFocused(this.this$0);
  $onSubmit(this.this$0);
}
;
_.castableTypeMap$ = {12:1, 39:1};
_.this$0 = null;
function VCalendarPanel$2_0(this$0, val$sender){
  $clinit();
  this.this$0 = this$0;
  this.val$sender = val$sender;
}

function VCalendarPanel$2(){
}

_ = VCalendarPanel$2_0.prototype = VCalendarPanel$2.prototype = new Timer;
_.getClass$ = function getClass_589(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$2_2_classLit;
}
;
_.run = function run_19(){
  this.this$0.mouseTimer = new VCalendarPanel$2$1_0(this, this.val$sender);
  $scheduleRepeating(this.this$0.mouseTimer, 150);
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
_.val$sender = null;
function VCalendarPanel$2$1_0(this$1, val$sender){
  this.this$1 = this$1;
  this.val$sender = val$sender;
}

function VCalendarPanel$2$1(){
}

_ = VCalendarPanel$2$1_0.prototype = VCalendarPanel$2$1.prototype = new Timer;
_.getClass$ = function getClass_590(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$2$1_2_classLit;
}
;
_.run = function run_20(){
  $processClickEvent(this.this$1.this$0, this.val$sender);
}
;
_.castableTypeMap$ = {65:1};
_.this$1 = null;
_.val$sender = null;
function VCalendarPanel$Day_0(this$0, dayOfMonth){
  HTML_3.call(this, $doc.createElement('span'));
  this.element_0['className'] = 'gwt-InlineHTML';
  $setTextOrHtml(this.directionalTextHelper, '' + dayOfMonth, true);
  this.element_0['className'] = 'v-datefield-calendarpanel-day';
  this.day = dayOfMonth;
  $addDomHandler(this, this$0.dayClickHandler, ($clinit_15() , $clinit_15() , TYPE_1));
}

function VCalendarPanel$Day(){
}

_ = VCalendarPanel$Day_0.prototype = VCalendarPanel$Day.prototype = new InlineHTML;
_.getClass$ = function getClass_591(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$Day_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 142:1};
_.day = 0;
function VCalendarPanel$VEventButton_0(this$0){
  $clinit_42();
  Button_0.call(this);
  $addDomHandler(this, this$0, ($clinit_23() , $clinit_23() , TYPE_9));
  $addDomHandler(this, this$0, ($clinit_25() , $clinit_25() , TYPE_11));
  $addDomHandler(this, this$0, ($clinit_26() , $clinit_26() , TYPE_12));
}

function VCalendarPanel$VEventButton(){
}

_ = VCalendarPanel$VEventButton_0.prototype = VCalendarPanel$VEventButton.prototype = new Button;
_.getClass$ = function getClass_592(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$VEventButton_2_classLit;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 122:1, 123:1, 143:1};
function $buildTime(this$static){
  var ampmText, delimiter, i, lastDropDown;
  $clear_2(this$static);
  this$static.hours = $createListBox(this$static);
  if ($isTwelveHourClock((!this$static.this$0.dateTimeService && (this$static.this$0.dateTimeService = new DateTimeService_0) , this$static.this$0.dateTimeService))) {
    $insertItem(this$static.hours, '12', '12', -1);
    for (i = 1; i < 12; ++i) {
      $addItem(this$static.hours, i < 10?'0' + i:'' + i);
    }
  }
   else {
    for (i = 0; i < 24; ++i) {
      $addItem(this$static.hours, i < 10?'0' + i:'' + i);
    }
  }
  $addDomHandler(this$static.hours, this$static, ($clinit_14() , $clinit_14() , TYPE_0));
  if ($isTwelveHourClock((!this$static.this$0.dateTimeService && (this$static.this$0.dateTimeService = new DateTimeService_0) , this$static.this$0.dateTimeService))) {
    this$static.ampm = $createListBox(this$static);
    ampmText = $getAmPmStrings((!this$static.this$0.dateTimeService && (this$static.this$0.dateTimeService = new DateTimeService_0) , this$static.this$0.dateTimeService));
    $addItem(this$static.ampm, ampmText[0]);
    $addItem(this$static.ampm, ampmText[1]);
    $addDomHandler(this$static.ampm, this$static, TYPE_0);
  }
  if (this$static.this$0.resolution >= 16) {
    this$static.mins = $createListBox(this$static);
    for (i = 0; i < 60; ++i) {
      $addItem(this$static.mins, i < 10?'0' + i:'' + i);
    }
    $addDomHandler(this$static.mins, this$static, TYPE_0);
  }
  if (this$static.this$0.resolution >= 32) {
    this$static.sec = $createListBox(this$static);
    for (i = 0; i < 60; ++i) {
      $addItem(this$static.sec, i < 10?'0' + i:'' + i);
    }
    $addDomHandler(this$static.sec, this$static, TYPE_0);
  }
  if (this$static.this$0.resolution == 64) {
    this$static.msec = $createListBox(this$static);
    for (i = 0; i < 1000; ++i) {
      i < 10?$addItem(this$static.msec, '00' + i):i < 100?$addItem(this$static.msec, '0' + i):$addItem(this$static.msec, '' + i);
    }
    $addDomHandler(this$static.msec, this$static, TYPE_0);
  }
  delimiter = $getClockDelimeter((!this$static.this$0.dateTimeService && (this$static.this$0.dateTimeService = new DateTimeService_0) , this$static.this$0.dateTimeService));
  $add_4(this$static, this$static.hours);
  if (this$static.this$0.resolution >= 16) {
    $add_4(this$static, new VLabel_1(delimiter));
    $add_4(this$static, this$static.mins);
  }
  if (this$static.this$0.resolution >= 32) {
    $add_4(this$static, new VLabel_1(delimiter));
    $add_4(this$static, this$static.sec);
  }
  if (this$static.this$0.resolution == 64) {
    $add_4(this$static, new VLabel_1('.'));
    $add_4(this$static, this$static.msec);
  }
  this$static.this$0.resolution == 8 && $add_4(this$static, new VLabel_1(delimiter + '00'));
  if ($isTwelveHourClock((!this$static.this$0.dateTimeService && (this$static.this$0.dateTimeService = new DateTimeService_0) , this$static.this$0.dateTimeService))) {
    $add_4(this$static, new VLabel_1('&nbsp;'));
    $add_4(this$static, this$static.ampm);
  }
  $updateTimes(this$static);
  lastDropDown = $getLastDropDown(this$static);
  $addDomHandler(lastDropDown, new VCalendarPanel$VTime$1_0(this$static), ($clinit_19() , $clinit_19() , TYPE_5));
}

function $createListBox(this$static){
  var lb;
  lb = new ListBox_0;
  lb.element_0['className'] = 'v-select';
  $addDomHandler(lb, this$static, ($clinit_14() , $clinit_14() , TYPE_0));
  $addDomHandler(lb, this$static.this$0, ($clinit_13() , $clinit_13() , TYPE));
  $addDomHandler(lb, this$static.this$0, ($clinit_18() , $clinit_18() , TYPE_4));
  return lb;
}

function $getLastDropDown(this$static){
  var i, widget;
  i = this$static.children_0.size_0 - 1;
  while (i >= 0) {
    widget = $get_0(this$static.children_0, i);
    if (widget != null && widget.castableTypeMap$ && !!widget.castableTypeMap$[145]) {
      return dynamicCast(widget, 145);
    }
    --i;
  }
  return null;
}

function $updateTimes(this$static){
  var h_0, selected;
  selected = true;
  if (!this$static.this$0.value_0) {
    this$static.this$0.value_0 = new Date_1;
    selected = false;
  }
  if ($isTwelveHourClock((!this$static.this$0.dateTimeService && (this$static.this$0.dateTimeService = new DateTimeService_0) , this$static.this$0.dateTimeService))) {
    h_0 = this$static.this$0.value_0.jsdate.getHours();
    this$static.ampm.element_0.selectedIndex = h_0 < 12?0:1;
    h_0 -= this$static.ampm.element_0.selectedIndex * 12;
    this$static.hours.element_0.selectedIndex = h_0;
  }
   else {
    this$static.hours.element_0.selectedIndex = this$static.this$0.value_0.jsdate.getHours();
  }
  this$static.this$0.resolution >= 16 && (this$static.mins.element_0.selectedIndex = this$static.this$0.value_0.jsdate.getMinutes() , undefined);
  this$static.this$0.resolution >= 32 && (this$static.sec.element_0.selectedIndex = this$static.this$0.value_0.jsdate.getSeconds() , undefined);
  this$static.this$0.resolution == 64 && (selected?(this$static.msec.element_0.selectedIndex = getMilliseconds(this$static.this$0.value_0) , undefined):(this$static.msec.element_0.selectedIndex = 0 , undefined));
  $isTwelveHourClock((!this$static.this$0.dateTimeService && (this$static.this$0.dateTimeService = new DateTimeService_0) , this$static.this$0.dateTimeService)) && (this$static.ampm.element_0.selectedIndex = this$static.this$0.value_0.jsdate.getHours() < 12?0:1 , undefined);
  this$static.hours.element_0['disabled'] = !true;
  !!this$static.mins && (this$static.mins.element_0['disabled'] = !true , undefined);
  !!this$static.sec && (this$static.sec.element_0['disabled'] = !true , undefined);
  !!this$static.msec && (this$static.msec.element_0['disabled'] = !true , undefined);
  !!this$static.ampm && (this$static.ampm.element_0['disabled'] = !true , undefined);
}

function VCalendarPanel$VTime_0(this$0){
  this.this$0 = this$0;
  FlowPanel_0.call(this);
  this.element_0['className'] = 'v-datefield-time';
  $buildTime(this);
}

function VCalendarPanel$VTime(){
}

_ = VCalendarPanel$VTime_0.prototype = VCalendarPanel$VTime.prototype = new FlowPanel;
_.getClass$ = function getClass_593(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$VTime_2_classLit;
}
;
_.onChange = function onChange_2(event_0){
  var h_0, m_0, ms, s;
  if (maskUndefined(event_0.source) === maskUndefined(this.hours)) {
    h_0 = this.hours.element_0.selectedIndex;
    $isTwelveHourClock((!this.this$0.dateTimeService && (this.this$0.dateTimeService = new DateTimeService_0) , this.this$0.dateTimeService)) && (h_0 = h_0 + this.ampm.element_0.selectedIndex * 12);
    this.this$0.value_0.setHours_0(h_0);
    !!this.this$0.timeChangeListener && this.this$0.timeChangeListener.changed(h_0, this.this$0.value_0.jsdate.getMinutes(), this.this$0.value_0.jsdate.getSeconds(), getMilliseconds(this.this$0.value_0));
    event_0.nativeEvent.preventDefault();
    event_0.nativeEvent.stopPropagation();
  }
   else if (maskUndefined(event_0.source) === maskUndefined(this.mins)) {
    m_0 = this.mins.element_0.selectedIndex;
    this.this$0.value_0.setMinutes_0(m_0);
    !!this.this$0.timeChangeListener && this.this$0.timeChangeListener.changed(this.this$0.value_0.jsdate.getHours(), m_0, this.this$0.value_0.jsdate.getSeconds(), getMilliseconds(this.this$0.value_0));
    event_0.nativeEvent.preventDefault();
    event_0.nativeEvent.stopPropagation();
  }
   else if (maskUndefined(event_0.source) === maskUndefined(this.sec)) {
    s = this.sec.element_0.selectedIndex;
    this.this$0.value_0.setSeconds_0(s);
    !!this.this$0.timeChangeListener && this.this$0.timeChangeListener.changed(this.this$0.value_0.jsdate.getHours(), this.this$0.value_0.jsdate.getMinutes(), s, getMilliseconds(this.this$0.value_0));
    event_0.nativeEvent.preventDefault();
    event_0.nativeEvent.stopPropagation();
  }
   else if (maskUndefined(event_0.source) === maskUndefined(this.msec)) {
    ms = this.msec.element_0.selectedIndex;
    setMilliseconds(this.this$0.value_0, ms);
    !!this.this$0.timeChangeListener && this.this$0.timeChangeListener.changed(this.this$0.value_0.jsdate.getHours(), this.this$0.value_0.jsdate.getMinutes(), this.this$0.value_0.jsdate.getSeconds(), ms);
    event_0.nativeEvent.preventDefault();
    event_0.nativeEvent.stopPropagation();
  }
   else if (maskUndefined(event_0.source) === maskUndefined(this.ampm)) {
    h_0 = this.hours.element_0.selectedIndex + this.ampm.element_0.selectedIndex * 12;
    this.this$0.value_0.setHours_0(h_0);
    !!this.this$0.timeChangeListener && this.this$0.timeChangeListener.changed(h_0, this.this$0.value_0.jsdate.getMinutes(), this.this$0.value_0.jsdate.getSeconds(), getMilliseconds(this.this$0.value_0));
    event_0.nativeEvent.preventDefault();
    event_0.nativeEvent.stopPropagation();
  }
}
;
_.castableTypeMap$ = {10:1, 12:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 38:1, 69:1, 70:1, 75:1, 115:1};
_.ampm = null;
_.hours = null;
_.mins = null;
_.msec = null;
_.sec = null;
_.this$0 = null;
function VCalendarPanel$VTime$1_0(this$1){
  this.this$1 = this$1;
}

function VCalendarPanel$VTime$1(){
}

_ = VCalendarPanel$VTime$1_0.prototype = VCalendarPanel$VTime$1.prototype = new Object_0;
_.getClass$ = function getClass_594(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$VTime$1_2_classLit;
}
;
_.onKeyDown = function onKeyDown_2(event_0){
  var nativeKeyCode, shiftKey;
  shiftKey = !!event_0.nativeEvent.shiftKey;
  if (shiftKey) {
    return;
  }
   else {
    nativeKeyCode = event_0.nativeEvent.keyCode || 0;
    nativeKeyCode == 9 && $onTabOut(this.this$1.this$0, event_0);
  }
}
;
_.castableTypeMap$ = {7:1, 12:1};
_.this$1 = null;
function $setText_1(this$static, text){
  var breakLink, childNodes, i, id, input, item, label;
  $setTextOrHtml(this$static.directionalTextHelper, text, false);
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && $getIEVersion((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40)) < 8) {
    breakLink = text == null || $equals_2('', text);
    childNodes = this$static.element_0.childNodes;
    id = null;
    for (i = 0; i < childNodes.length; ++i) {
      item = childNodes[i];
      if ($equals_2(item.nodeName.toLowerCase(), 'input')) {
        input = item;
        id = input.id;
      }
      if ($equals_2(item.nodeName.toLowerCase(), 'label')) {
        label = item;
        breakLink?(label.htmlFor = '' , undefined):(label.htmlFor = id , undefined);
      }
    }
  }
}

function VCheckBox_0(){
  $clinit_42();
  var el;
  CheckBox_0.call(this);
  this.element_0['className'] = 'v-checkbox';
  $addDomHandler(this, new VCheckBox$1_0(this), ($clinit_15() , $clinit_15() , TYPE_1));
  this.eventsToSink == -1?sinkEvents_0(this.inputElem, 241 | (this.inputElem.__eventBits || 0)):this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
  el = $getFirstChildElement(this.element_0);
  while (el) {
    sinkEvents(el, (el.__eventBits || 0) | 241);
    el = el.nextSibling;
  }
}

function VCheckBox(){
}

_ = VCheckBox_0.prototype = VCheckBox.prototype = new CheckBox;
_.getClass$ = function getClass_595(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCheckBox_2_classLit;
}
;
_.onBlur = function onBlur_5(arg0){
  $addVariableToQueue(this.client, this.id_0, 'blur', $escapeVariableValue(''), true, 115);
}
;
_.onBrowserEvent = function onBrowserEvent_17(event_0){
  !!this.icon && $eventGetTypeInt(event_0.type) == 1 && event_0.target == this.icon.element_0 && !this.inputElem.disabled && $setValue(this, ($clinit_95() , (this.attached?this.inputElem.checked?TRUE:FALSE:this.inputElem.defaultChecked?TRUE:FALSE).value_0?FALSE:TRUE));
  $onBrowserEvent(this, event_0);
  $eventGetTypeInt(event_0.type) == 32768 && notifyParentOfSizeChange(this, true);
  !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, this, null) , undefined);
}
;
_.onFocus = function onFocus_4(arg0){
  $addVariableToQueue(this.client, this.id_0, 'focus', $escapeVariableValue(''), true, 115);
}
;
_.setHeight = function setHeight_8(height){
  this.element_0.style['height'] = height;
}
;
_.setText = function setText_3(text){
  $setText_1(this, text);
}
;
_.setWidth = function setWidth_14(width){
  this.element_0.style['width'] = width;
}
;
_.updateFromUIDL = function updateFromUIDL_21(uidl, client){
  this.client = client;
  this.id_0 = uidl[1]['id'];
  if ($updateComponent(client, this, uidl, false)) {
    return;
  }
  this.focusHandlerRegistration = updateFocusHandler(this, client, this.focusHandlerRegistration);
  this.blurHandlerRegistration = updateBlurHandler(this, client, this.blurHandlerRegistration);
  if ('error' in uidl[1]) {
    if (!this.errorIndicatorElement) {
      this.errorIndicatorElement = $doc.createElement('span');
      this.errorIndicatorElement.innerHTML = '&nbsp;';
      this.errorIndicatorElement['className'] = 'v-errorindicator';
      this.element_0.appendChild(this.errorIndicatorElement);
      sinkEvents(this.errorIndicatorElement, 241);
    }
     else {
      this.errorIndicatorElement.style['display'] = '';
    }
  }
   else 
    !!this.errorIndicatorElement && (this.errorIndicatorElement.style['display'] = 'none' , undefined);
  'readonly' in uidl[1] && (this.inputElem.disabled = true , $setStyleName(this, getStylePrimaryName(this.element_0) + '-disabled', true));
  if ('icon' in uidl[1]) {
    if (!this.icon) {
      this.icon = new Icon_0(client);
      $insertChild(this.element_0, this.icon.element_0, 1);
      $sinkEvents(this.icon, 241);
      $sinkEvents(this.icon, 1);
    }
    $setUri(this.icon, uidl[1]['icon']);
  }
   else if (this.icon) {
    this.element_0.removeChild(this.icon.element_0);
    this.icon = null;
  }
  $setText_1(this, uidl[1]['caption']);
  $setValue(this, ($clinit_95() , Boolean(uidl[1]['v']['state'])?TRUE:FALSE));
  this.immediate = Boolean(uidl[1]['immediate']);
}
;
_.castableTypeMap$ = {5:1, 6:1, 10:1, 12:1, 13:1, 15:1, 22:1, 26:1, 69:1, 70:1, 122:1, 123:1, 124:1, 131:1, 132:1, 161:1};
_.blurHandlerRegistration = null;
_.client = null;
_.errorIndicatorElement = null;
_.focusHandlerRegistration = null;
_.icon = null;
_.id_0 = null;
_.immediate = false;
function VCheckBox$1_0(this$0){
  this.this$0 = this$0;
}

function VCheckBox$1(){
}

_ = VCheckBox$1_0.prototype = VCheckBox$1.prototype = new Object_0;
_.getClass$ = function getClass_596(){
  return Lcom_vaadin_terminal_gwt_client_ui_VCheckBox$1_2_classLit;
}
;
_.onClick = function onClick_18(event_0){
  var details;
  if (this.this$0.id_0 == null || !this.this$0.client || !!this.this$0.inputElem.disabled) {
    return;
  }
  details = new MouseEventDetails_1(event_0.nativeEvent, this.this$0.element_0);
  $addVariableToQueue(this.this$0.client, this.this$0.id_0, 'mousedetails', $escapeVariableValue('' + details.button_0 + ',' + details.clientX_0 + ',' + details.clientY_0 + ',' + details.altKey_0 + ',' + details.ctrlKey_0 + ',' + details.metaKey_0 + ',' + details.shiftKey_0 + ',' + details.type_0 + ',' + details.relativeX + ',' + details.relativeY), false, 115);
  $addVariableToQueue(this.this$0.client, this.this$0.id_0, 'state', $getValue(this.this$0).value_0?'true':'false', this.this$0.immediate, 98);
}
;
_.castableTypeMap$ = {12:1, 39:1};
_.this$0 = null;
function $ensureHidden(this$static, actionOwner){
  this$static.actionOwner == actionOwner && ($hide(this$static, false) , runIE7ZeroSizedBodyFix());
}

function $showAt(this$static, left, top_0){
  var a_0, actions, i;
  actions = this$static.actionOwner.getActions();
  if (actions == null || actions.length == 0) {
    return;
  }
  this$static.left_0 = left;
  this$static.top_0 = top_0;
  $clearItems(this$static.menu);
  for (i = 0; i < actions.length; ++i) {
    a_0 = actions[i];
    $addItem_0(this$static.menu, new MenuItem_0(a_0.getHTML(), a_0));
  }
  sinkOnloadForImages(this$static.menu.element_0);
  $setPopupPositionAndShow(this$static, new VContextMenu$2_0(this$static));
}

function $showAt_0(this$static, ao, left, top_0){
  this$static.actionOwner = ao;
  $showAt(this$static, left, top_0);
}

function VContextMenu$2_0(this$0){
  this.this$0 = this$0;
}

function VContextMenu$2(){
}

_ = VContextMenu$2_0.prototype = VContextMenu$2.prototype = new Object_0;
_.getClass$ = function getClass_599(){
  return Lcom_vaadin_terminal_gwt_client_ui_VContextMenu$2_2_classLit;
}
;
_.setPosition = function setPosition_1(offsetWidth, offsetHeight){
  var left, top_0;
  offsetWidth = parseInt(this.this$0.menu.element_0['offsetWidth']) || 0;
  left = this.this$0.left_0;
  top_0 = this.this$0.top_0;
  if (offsetWidth + left > $getClientWidth($doc)) {
    left = left - offsetWidth;
    left < 0 && (left = 0);
  }
  if (offsetHeight + top_0 > $getClientHeight($doc)) {
    top_0 = top_0 - offsetHeight;
    top_0 < 0 && (top_0 = 0);
  }
  $setPopupPosition_0(this.this$0, left, top_0);
  $scheduleDeferred_0(($clinit_1() , INSTANCE), new VContextMenu$2$1_0(this));
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VContextMenu$2$1_0(this$1){
  this.this$1 = this$1;
}

function VContextMenu$2$1(){
}

_ = VContextMenu$2$1_0.prototype = VContextMenu$2$1.prototype = new Object_0;
_.execute_0 = function execute_30(){
  $clinit_53();
  $focus(this.this$1.this$0.menu.element_0);
  $selectItem(this.this$1.this$0.menu, null);
}
;
_.getClass$ = function getClass_600(){
  return Lcom_vaadin_terminal_gwt_client_ui_VContextMenu$2$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$1 = null;
function VCustomLayout(){
}

_ = VCustomLayout.prototype = new ComplexPanel;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1, 126:1};
_.client = null;
_.currentTemplateName = null;
_.elementWithNativeResizeFunction = null;
_.hasTemplateContents = false;
_.height_0 = '';
_.pid = null;
_.scripts = '';
_.width_0 = '';
function $getDate(this$static){
  var current;
  current = this$static.date;
  return !current?null:new Date_3(fromDouble(this$static.date.jsdate.getTime()));
}

function $updateFromUIDL_12(this$static, uidl, client){
  var $e0, day, e, hour, locale, min, month, msec, newResolution, sec, year;
  if ($updateComponent(client, this$static, uidl, true)) {
    return;
  }
  this$static.client = client;
  this$static.id_0 = uidl[1]['id'];
  this$static.immediate = Boolean(uidl[1]['immediate']);
  this$static.readonly = Boolean(uidl[1]['readonly']);
  this$static.enabled = !Boolean(uidl[1]['disabled']);
  if ('locale' in uidl[1]) {
    locale = uidl[1]['locale'];
    try {
      $setLocale(this$static.dts, locale);
      this$static.currentLocale = locale;
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 130)) {
        e = $e0;
        this$static.currentLocale = this$static.dts.currentLocale;
        impl_2.error_1('Tried to use an unloaded locale "' + locale + '". Using default locale (' + this$static.currentLocale + ').');
        impl_2.error_0(e);
      }
       else 
        throw $e0;
    }
  }
  this$static.showISOWeekNumbers = Boolean(uidl[1]['wn']) && $getFirstDayOfWeek(this$static.dts) == 1;
  Boolean(uidl[1]['v']) && 'msec' in uidl[1]['v']?(newResolution = 64):Boolean(uidl[1]['v']) && 'sec' in uidl[1]['v']?(newResolution = 32):Boolean(uidl[1]['v']) && 'min' in uidl[1]['v']?(newResolution = 16):Boolean(uidl[1]['v']) && 'hour' in uidl[1]['v']?(newResolution = 8):Boolean(uidl[1]['v']) && 'day' in uidl[1]['v']?(newResolution = 4):Boolean(uidl[1]['v']) && 'month' in uidl[1]['v']?(newResolution = 2):(newResolution = 1);
  this$static.currentResolution = newResolution;
  $addStyleName(this$static, 'v-datefield-' + resolutionToString(this$static.currentResolution));
  year = uidl[1]['v']['year'];
  month = this$static.currentResolution >= 2?uidl[1]['v']['month']:-1;
  day = this$static.currentResolution >= 4?uidl[1]['v']['day']:-1;
  hour = this$static.currentResolution >= 8?uidl[1]['v']['hour']:0;
  min = this$static.currentResolution >= 16?uidl[1]['v']['min']:0;
  sec = this$static.currentResolution >= 32?uidl[1]['v']['sec']:0;
  msec = this$static.currentResolution >= 64?uidl[1]['v']['msec']:0;
  year > -1?(this$static.date = new Date_3(fromDouble(getTime(year, month, day, hour, min, sec, msec))) , undefined):(this$static.date = null);
}

function VDateField_0(){
  FlowPanel_0.call(this);
  this.setStyleName('v-datefield');
  this.dts = new DateTimeService_0;
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
}

function getTime(y, m_0, d, h_0, mi, s, ms){
  try {
    var date = new Date(2000, 1, 1, 1);
    y && y >= 0 && date.setFullYear(y);
    m_0 && m_0 >= 1 && date.setMonth(m_0 - 1);
    d && d >= 0 && date.setDate(d);
    h_0 >= 0 && date.setHours(h_0);
    mi >= 0 && date.setMinutes(mi);
    s >= 0 && date.setSeconds(s);
    ms >= 0 && date.setMilliseconds(ms);
    return date.getTime();
  }
   catch (e) {
    return (new Date).getTime();
  }
}

function resolutionToString(res){
  if (res > 4) {
    return 'full';
  }
  if (res == 4) {
    return 'day';
  }
  if (res == 2) {
    return 'month';
  }
  return 'year';
}

function VDateField(){
}

_ = VDateField.prototype = new FlowPanel;
_.getClass$ = function getClass_608(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDateField_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_19(event_0){
  $onBrowserEvent(this, event_0);
  !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, this, null) , undefined);
}
;
_.updateFromUIDL = function updateFromUIDL_24(uidl, client){
  $updateFromUIDL_12(this, uidl, client);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 26:1, 33:1, 69:1, 70:1, 75:1, 115:1, 124:1};
_.client = null;
_.currentLocale = null;
_.currentResolution = 1;
_.date = null;
_.dts = null;
_.enabled = false;
_.id_0 = null;
_.immediate = false;
_.readonly = false;
_.showISOWeekNumbers = false;
function $drop(this$static, drag){
  if (this$static.acceptCriteria.needsServerSideCheck(drag, this$static.criterioUIDL)) {
    return true;
  }
   else {
    this$static.validated = false;
    this$static.acceptCriteria.accept(drag, this$static.criterioUIDL, new VAbstractDropHandler$3_0(this$static));
    return this$static.validated;
  }
}

function $updateAcceptRules(this$static, uidl){
  var childIterator, count;
  this$static.criterioUIDL = uidl;
  if (!$equals_2(uidl[0], '-ac')) {
    childIterator = new UIDL$1_0(uidl);
    while (!$equals_2(uidl[0], '-ac') && (count = childIterator.this$0.length - 2 , count > childIterator.index_0 + 1)) {
      uidl = dynamicCastJso($next_3(childIterator));
    }
  }
  this$static.acceptCriteria = $get_1(uidl[1]['name']);
  if (!this$static.acceptCriteria) {
    throw new IllegalArgumentException_1('No accept criteria found with given name ' + uidl[1]['name']);
  }
}

function $validate(this$static, cb, event_0){
  var checkCriteria;
  checkCriteria = new VAbstractDropHandler$2_0(this$static, event_0, cb);
  $executeWhenReady((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), checkCriteria);
}

function VAbstractDropHandler(){
}

_ = VAbstractDropHandler.prototype = new Object_0;
_.dragEnter = function dragEnter(drag){
  $validate(this, new VAbstractDropHandler$1_0(this, drag), drag);
}
;
_.dragLeave = function dragLeave(drag){
}
;
_.dragOver = function dragOver(drag){
}
;
_.drop = function drop_0(drag){
  return $drop(this, drag);
}
;
_.getClass$ = function getClass_620(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VAbstractDropHandler_2_classLit;
}
;
_.castableTypeMap$ = {};
_.criterioUIDL = null;
_.validated = false;
function $clinit_73(){
  $clinit_73 = nullMethod;
  var childNodes;
  helper = $doc.createElement('div');
  helper.innerHTML = '<div style="position:absolute;top:0;left:0;height:0;visibility:hidden;overflow:hidden;"><div style="width:0;height:0;visibility:hidden;overflow:hidden;"><\/div><\/div><div style="position:absolute;height:0;overflow:hidden;"><\/div>';
  childNodes = helper.childNodes;
  measurement = childNodes[0];
  measurement2 = $getFirstChildElement(measurement);
  measurement3 = childNodes[1];
}

function $addOrMoveChild(this$static, childComponent, position){
  var insert;
  if (childComponent.parent_0 == this$static) {
    if ($indexOf(this$static.children_0, childComponent) != position) {
      $removeFromParent_0(childComponent);
      $insert_1(this$static.children_0, childComponent, position);
      this$static.root.insertBefore(childComponent.element_0, this$static.root.childNodes[position]);
      $setParent(childComponent, this$static);
    }
  }
   else {
    this$static.widgetToComponentContainer.put(childComponent.widget, childComponent);
    $insert_1(this$static.children_0, childComponent, position);
    insert = true;
    this$static.widgetToComponentContainer.size_1() == position && (insert = false);
    insert?this$static.root.insertBefore(childComponent.element_0, this$static.root.childNodes[position]):this$static.root.insertBefore(childComponent.element_0, this$static.clearElement);
    $setParent(childComponent, this$static);
  }
}

function $getComponentContainer(this$static, child){
  return dynamicCast(this$static.widgetToComponentContainer.get_0(child), 152);
}

function $getFirstChildComponentContainer(this$static){
  var size;
  size = this$static.children_0.size_0;
  if (size < 1) {
    return null;
  }
  return dynamicCast($get_0(this$static.children_0, 0), 152);
}

function $measureMarginsAndSpacing(this$static){
  var sn, style;
  if (!this$static.attached) {
    return false;
  }
  measurement3.className = this$static.STYLENAME_SPACING + (this$static.spacingEnabled?'-on':'-off');
  sn = getStylePrimaryName(this$static.element_0) + '-margin';
  (this$static.activeMarginsInfo.bitMask & 1) == 1 && (sn += ' ' + this$static.STYLENAME_MARGIN_TOP);
  (this$static.activeMarginsInfo.bitMask & 4) == 4 && (sn += ' ' + this$static.STYLENAME_MARGIN_BOTTOM);
  (this$static.activeMarginsInfo.bitMask & 8) == 8 && (sn += ' ' + this$static.STYLENAME_MARGIN_LEFT);
  (this$static.activeMarginsInfo.bitMask & 2) == 2 && (sn += ' ' + this$static.STYLENAME_MARGIN_RIGHT);
  measurement.className = sn;
  this$static.root.appendChild(helper);
  this$static.activeSpacing.vSpacing = measurement3.offsetHeight || 0;
  this$static.activeSpacing.hSpacing = measurement3.offsetWidth || 0;
  $setMarginTop_0(this$static.activeMargins, measurement2.offsetTop || 0);
  $setMarginLeft(this$static.activeMargins, measurement2.offsetLeft || 0);
  $setMarginRight(this$static.activeMargins, (measurement.offsetWidth || 0) - this$static.activeMargins.marginLeft);
  $setMarginBottom(this$static.activeMargins, (measurement.offsetHeight || 0) - this$static.activeMargins.marginTop);
  this$static.root.removeChild(helper);
  style = this$static.root.style;
  style['marginLeft'] = this$static.activeMargins.marginLeft + ($clinit_9() , 'px');
  style['marginRight'] = this$static.activeMargins.marginRight + 'px';
  style['marginTop'] = this$static.activeMargins.marginTop + 'px';
  style['marginBottom'] = this$static.activeMargins.marginBottom + 'px';
  return true;
}

function $removeChildrenAfter(this$static, pos){
  var child, iterator, key, p, relocated, toRemove, widget, outerIter, entry;
  toRemove = this$static.children_0.size_0 - pos;
  while (toRemove-- > 0) {
    relocated = false;
    child = dynamicCast($get_0(this$static.children_0, pos), 152);
    widget = child.widget;
    if (!widget) {
      iterator = (outerIter = $keySet(this$static.widgetToComponentContainer).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter));
      while (iterator.val$outerIter.hasNext()) {
        key = dynamicCast((entry = dynamicCast(iterator.val$outerIter.next_0(), 58) , entry.getKey()), 70);
        if (maskUndefined(this$static.widgetToComponentContainer.get_0(key)) === (child == null?null:child)) {
          widget = key;
          relocated = true;
          break;
        }
      }
      if (!widget) {
        throw new NullPointerException_0;
      }
    }
    this$static.widgetToComponentContainer.remove_4(widget);
    $remove_2(this$static, child);
    if (!relocated) {
      p = dynamicCast(widget, 26);
      $unregisterPaintable(this$static.client, p);
    }
  }
}

function $setStyleName_4(this$static, styleName){
  this$static.element_0['className'] = styleName;
  if (this$static.attached && this$static.marginsNeedsRecalculation || !$equals_2(this$static.lastStyleName, styleName)) {
    $measureMarginsAndSpacing(this$static);
    this$static.lastStyleName = styleName;
    this$static.marginsNeedsRecalculation = false;
  }
}

function $updateFromUIDL_15(this$static, uidl, client){
  var h_0, w;
  this$static.client = client;
  if (Boolean(uidl[1]['cached'])) {
    return;
  }
  $updateMarginAndSpacingInfo(this$static, uidl);
  if ($updateComponent(client, this$static, uidl, true)) {
    return;
  }
  w = 'width' in uidl[1]?uidl[1]['width']:'';
  h_0 = 'height' in uidl[1]?uidl[1]['height']:'';
  $equals_2(w, '')?(this$static.dynamicWidth = true):(this$static.dynamicWidth = false);
  $equals_2(h_0, '')?(this$static.dynamicHeight = true):(this$static.dynamicHeight = false);
}

function $updateMarginAndSpacingInfo(this$static, uidl){
  var bitMask, spacing;
  if (!('invisible' in uidl[1])) {
    bitMask = uidl[1]['margins'];
    if (this$static.activeMarginsInfo.bitMask != bitMask) {
      this$static.activeMarginsInfo = new VMarginInfo_0(bitMask);
      this$static.marginsNeedsRecalculation = true;
    }
    spacing = Boolean(uidl[1]['spacing']);
    if (spacing != this$static.spacingEnabled) {
      this$static.marginsNeedsRecalculation = true;
      this$static.spacingEnabled = spacing;
    }
  }
}

function CellBasedLayout_0(){
  var style;
  this.children_0 = new WidgetCollection_0(this);
  this.widgetToComponentContainer = new HashMap_0;
  this.activeMargins = new Margins_0;
  this.activeMarginsInfo = new VMarginInfo_0(-1);
  new CellBasedLayout$Spacing_0(12, 12);
  this.activeSpacing = new CellBasedLayout$Spacing_0(0, 0);
  this.clearElement = $doc.createElement('div');
  this.element_0 = $doc.createElement('div');
  this.element_0.style['overflow'] = 'hidden';
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE) {
    this.element_0.style['position'] = 'relative';
    this.element_0.style['zoom'] = '1';
  }
  this.root = $doc.createElement('div');
  this.root.style['overflow'] = 'hidden';
  (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isIE && (this.root.style['position'] = 'relative' , undefined);
  this.element_0.appendChild(this.root);
  style = this.clearElement.style;
  style['width'] = '0px';
  style['height'] = '0px';
  style['clear'] = 'both';
  style['overflow'] = 'hidden';
  this.root.appendChild(this.clearElement);
}

function CellBasedLayout(){
}

_ = CellBasedLayout.prototype = new ComplexPanel;
_.getClass$ = function getClass_644(){
  return Lcom_vaadin_terminal_gwt_client_ui_layout_CellBasedLayout_2_classLit;
}
;
_.replaceChildComponent = function replaceChildComponent_13(oldComponent, newComponent){
  var componentContainer;
  componentContainer = dynamicCast(this.widgetToComponentContainer.remove_4(oldComponent), 152);
  if (!componentContainer) {
    return;
  }
  $setWidget_5(componentContainer, newComponent);
  $unregisterPaintable(this.client, dynamicCast(oldComponent, 26));
  this.widgetToComponentContainer.put(newComponent, componentContainer);
}
;
_.setHeight = function setHeight_16(height){
  this.element_0.style['height'] = height;
  height == null || $equals_2(height, '')?(this.dynamicHeight = true):(this.dynamicHeight = false);
}
;
_.setStyleName = function setStyleName_5(styleName){
  $setStyleName_4(this, styleName);
}
;
_.setWidth = function setWidth_22(width){
  this.element_0.style['width'] = width;
  width == null || $equals_2(width, '')?(this.dynamicWidth = true):(this.dynamicWidth = false);
}
;
_.updateFromUIDL = function updateFromUIDL_32(uidl, client){
  $updateFromUIDL_15(this, uidl, client);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1};
_.STYLENAME_MARGIN_BOTTOM = '';
_.STYLENAME_MARGIN_LEFT = '';
_.STYLENAME_MARGIN_RIGHT = '';
_.STYLENAME_MARGIN_TOP = '';
_.STYLENAME_SPACING = '';
_.client = null;
_.dynamicHeight = false;
_.dynamicWidth = false;
_.lastStyleName = '';
_.marginsNeedsRecalculation = false;
_.root = null;
_.spacingEnabled = false;
var helper = null, measurement = null, measurement2 = null, measurement3 = null;
function $calculateAlignments(this$static){
  var childComponentContainer, childComponentContainer$iterator, h_0, w, outerIter;
  w = 0;
  h_0 = 0;
  if (this$static.orientation == 1) {
    h_0 = this$static.activeLayoutSize.getHeight();
    this$static.dynamicWidth || (w = -1);
  }
   else {
    w = this$static.activeLayoutSize.getWidth();
    this$static.dynamicHeight || (h_0 = -1);
  }
  for (childComponentContainer$iterator = (outerIter = $values_0(this$static.widgetToComponentContainer).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); childComponentContainer$iterator.val$outerIter.hasNext();) {
    childComponentContainer = dynamicCast(dynamicCast(childComponentContainer$iterator.val$outerIter.next_0(), 58).getValue(), 152);
    $updateAlignments(childComponentContainer, w, h_0);
  }
}

function $calculateContainerSize(this$static){
  var availableWidth, captionWidth, childComponentContainer, first, height, widgetIterator, width;
  widgetIterator = new WidgetCollection$WidgetIterator_0(this$static.children_0);
  if (this$static.orientation == 1) {
    height = this$static.activeLayoutSize.getHeight();
    availableWidth = this$static.activeLayoutSize.getWidth();
    first = true;
    while (widgetIterator.index_0 < widgetIterator.this$0.size_0 - 1) {
      childComponentContainer = dynamicCast($next_2(widgetIterator), 152);
      if ($isComponentRelativeSized(childComponentContainer, 1)) {
        width = 0;
      }
       else {
        width = childComponentContainer.widgetSize.getWidth() + $getCaptionWidthAfterComponent(childComponentContainer);
        if (!$widgetHasSizeSpecified(childComponentContainer, this$static.orientation)) {
          captionWidth = $getCaptionRequiredWidth(childComponentContainer);
          captionWidth > width && (width = captionWidth);
        }
      }
      if (!this$static.dynamicWidth) {
        if (availableWidth == 0)
        ;
        else if (width > availableWidth) {
          width = availableWidth;
          first || (width -= this$static.activeSpacing.hSpacing);
          availableWidth = 0;
        }
         else {
          availableWidth -= width;
          first || (availableWidth -= this$static.activeSpacing.hSpacing);
        }
        first = false;
      }
      $setContainerSize(childComponentContainer, width, height);
    }
  }
   else {
    width = this$static.activeLayoutSize.getWidth();
    while (widgetIterator.index_0 < widgetIterator.this$0.size_0 - 1) {
      childComponentContainer = dynamicCast($next_2(widgetIterator), 152);
      $isComponentRelativeSized(childComponentContainer, 0)?(height = 0):(height = childComponentContainer.widgetSize.getHeight() + $getCaptionHeightAboveComponent(childComponentContainer));
      $setContainerSize(childComponentContainer, width, height);
    }
  }
}

function $calculateLayoutDimensions(this$static){
  var childComponentContainer, childComponentContainer$iterator, layoutSize, maxWidgetHeight, maxWidgetWidth, remainingSpace, summedWidgetHeight, summedWidgetWidth, widgetHeight, widgetWidth, outerIter, s, s_0;
  summedWidgetWidth = 0;
  summedWidgetHeight = 0;
  maxWidgetWidth = 0;
  maxWidgetHeight = 0;
  for (childComponentContainer$iterator = (outerIter = $values_0(this$static.widgetToComponentContainer).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); childComponentContainer$iterator.val$outerIter.hasNext();) {
    childComponentContainer = dynamicCast(dynamicCast(childComponentContainer$iterator.val$outerIter.next_0(), 58).getValue(), 152);
    widgetHeight = 0;
    widgetWidth = 0;
    if ($isComponentRelativeSized(childComponentContainer, this$static.orientation)) {
      this$static.orientation == 1?(widgetHeight = (s = childComponentContainer.widgetSize , s.getHeight() + $getCaptionHeightAboveComponent(childComponentContainer))):(widgetWidth = $getWidgetWidth(this$static, childComponentContainer));
    }
     else {
      widgetWidth = $getWidgetWidth(this$static, childComponentContainer);
      widgetHeight = (s_0 = childComponentContainer.widgetSize , s_0.getHeight() + $getCaptionHeightAboveComponent(childComponentContainer));
    }
    summedWidgetWidth += widgetWidth;
    summedWidgetHeight += widgetHeight;
    maxWidgetHeight = maxWidgetHeight > widgetHeight?maxWidgetHeight:widgetHeight;
    maxWidgetWidth = maxWidgetWidth > widgetWidth?maxWidgetWidth:widgetWidth;
  }
  this$static.orientation == 1?(summedWidgetWidth += this$static.activeSpacing.hSpacing * (this$static.widgetToComponentContainer.size_1() - 1)):(summedWidgetHeight += this$static.activeSpacing.vSpacing * (this$static.widgetToComponentContainer.size_1() - 1));
  layoutSize = $updateLayoutDimensions(this$static, summedWidgetWidth, summedWidgetHeight, maxWidgetWidth, maxWidgetHeight);
  this$static.orientation == 1?(remainingSpace = layoutSize.getWidth() - summedWidgetWidth):(remainingSpace = layoutSize.getHeight() - summedWidgetHeight);
  remainingSpace < 0 && (remainingSpace = 0);
  return remainingSpace;
}

function $expandComponentContainers(this$static, spaceForExpansion){
  var childComponentContainer, childComponentContainer$iterator, remaining, widgetIterator, outerIter;
  remaining = spaceForExpansion;
  for (childComponentContainer$iterator = (outerIter = $values_0(this$static.widgetToComponentContainer).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); childComponentContainer$iterator.val$outerIter.hasNext();) {
    childComponentContainer = dynamicCast(dynamicCast(childComponentContainer$iterator.val$outerIter.next_0(), 58).getValue(), 152);
    remaining -= $expand(childComponentContainer, this$static.orientation, spaceForExpansion);
  }
  if (remaining > 0) {
    widgetIterator = new WidgetCollection$WidgetIterator_0(this$static.children_0);
    while (widgetIterator.index_0 < widgetIterator.this$0.size_0 - 1 && remaining-- > 0) {
      childComponentContainer = dynamicCast($next_2(widgetIterator), 152);
      $expandExtra(childComponentContainer, this$static.orientation);
    }
  }
}

function $getComponent_3(this$static, element){
  return getPaintableForElement(this$static.client, this$static, element);
}

function $getExpandRatio(this$static, pid){
  var i, keyArray, length_0;
  if (this$static.expandRatioSum < 0) {
    this$static.expandRatioSum = 0;
    keyArray = $getKeyArray(this$static.expandRatios);
    length_0 = keyArray.length;
    for (i = 0; i < length_0; ++i) {
      this$static.expandRatioSum += this$static.expandRatios[keyArray[i]];
    }
    this$static.expandRatioSum == 0?(this$static.defaultExpandRatio = 1 / this$static.widgetToComponentContainer.size_1()):(this$static.defaultExpandRatio = 0);
  }
  return $containsKey(this$static.expandRatios, pid)?this$static.expandRatios[pid] / this$static.expandRatioSum:this$static.defaultExpandRatio;
}

function $getWidgetWidth(this$static, childComponentContainer){
  var captionWidth, s, widgetWidth;
  s = childComponentContainer.widgetSize;
  widgetWidth = s.getWidth() + $getCaptionWidthAfterComponent(childComponentContainer);
  if (!$widgetHasSizeSpecified(childComponentContainer, this$static.orientation)) {
    captionWidth = $getCaptionRequiredWidth(childComponentContainer);
    captionWidth > widgetWidth && (widgetWidth = captionWidth);
  }
  return widgetWidth;
}

function $handleOrientationUpdate(this$static, uidl){
  var childComponentContainer, childComponentContainer$iterator, newOrientation, outerIter;
  newOrientation = 0;
  $equals_2('horizontal', uidl[1]['orientation']) && (newOrientation = 1);
  if (this$static.orientation != newOrientation) {
    this$static.orientation = newOrientation;
    for (childComponentContainer$iterator = (outerIter = $values_0(this$static.widgetToComponentContainer).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); childComponentContainer$iterator.val$outerIter.hasNext();) {
      childComponentContainer = dynamicCast(dynamicCast(childComponentContainer$iterator.val$outerIter.next_0(), 58).getValue(), 152);
      $setOrientation_0(childComponentContainer, this$static.orientation);
    }
  }
}

function $layoutSizeMightHaveChanged(this$static){
  var oldSize;
  oldSize = new RenderInformation$Size_0(this$static.activeLayoutSize.getWidth(), this$static.activeLayoutSize.getHeight());
  $calculateLayoutDimensions(this$static);
  $equals(oldSize, this$static.activeLayoutSize) || $calculateContainerSize(this$static);
}

function $recalculateLayout(this$static){
  var spaceForExpansion;
  spaceForExpansion = $calculateLayoutDimensions(this$static);
  if (this$static.widgetToComponentContainer.size_1() != 0) {
    $expandComponentContainers(this$static, spaceForExpansion);
    $calculateContainerSize(this$static);
  }
}

function $recalculateLayoutAndComponentSizes(this$static){
  var componentContainer, componentContainer$iterator, outerIter;
  $recalculateLayout(this$static);
  if (!(this$static.dynamicHeight && this$static.dynamicWidth)) {
    for (componentContainer$iterator = (outerIter = $values_0(this$static.widgetToComponentContainer).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); componentContainer$iterator.val$outerIter.hasNext();) {
      componentContainer = dynamicCast(dynamicCast(componentContainer$iterator.val$outerIter.next_0(), 58).getValue(), 152);
      $handleComponentRelativeSize_0(this$static.client, componentContainer.widget);
      $updateWidgetSize(componentContainer);
    }
  }
  if (this$static.dynamicHeight) {
    $updateWidgetSizes(this$static);
    $recalculateLayout(this$static);
  }
  $updateRelativeSizesInNonMainDirection(this$static);
  $calculateAlignments(this$static);
  this$static.root.style['width'] = this$static.activeLayoutSize.getWidth() + ($clinit_9() , 'px');
  this$static.root.style['height'] = this$static.activeLayoutSize.getHeight() + 'px';
}

function $setActiveLayoutHeight(this$static, activeLayoutHeight){
  activeLayoutHeight < 0 && (activeLayoutHeight = 0);
  this$static.activeLayoutSize.height_0 = activeLayoutHeight;
}

function $setActiveLayoutWidth(this$static, activeLayoutWidth){
  activeLayoutWidth < 0 && (activeLayoutWidth = 0);
  this$static.activeLayoutSize.width_0 = activeLayoutWidth;
}

function $setOuterLayoutHeight(this$static, activeLayoutHeight){
  var newPixelHeight;
  newPixelHeight = activeLayoutHeight + this$static.activeMargins.vertical;
  this$static.element_0.style['height'] = newPixelHeight + ($clinit_9() , 'px');
}

function $setOuterLayoutWidth(this$static, activeLayoutWidth){
  var newPixelWidth;
  newPixelWidth = activeLayoutWidth + this$static.activeMargins.horizontal;
  this$static.element_0.style['width'] = newPixelWidth + ($clinit_9() , 'px');
}

function $updateAlignmentsAndExpandRatios(this$static, uidl, renderedWidgets){
  var container, i, pid, widget;
  this$static.alignments = uidl[1]['alignments'];
  this$static.expandRatios = uidl[1]['expandRatios'];
  this$static.expandRatioSum = -1;
  for (i = 0; i < renderedWidgets.size_0; ++i) {
    widget = dynamicCast((checkIndex(i, renderedWidgets.size_0) , renderedWidgets.array[i]), 70);
    pid = widget.element_0.tkPid;
    container = dynamicCast(this$static.widgetToComponentContainer.get_0(widget), 152);
    container.alignment = $containsKey(this$static.alignments, pid)?new AlignmentInfo_0(this$static.alignments[pid]):($clinit_70() , TOP_LEFT);
    container.expandRatio = $getExpandRatio(this$static, pid);
  }
}

function $updateContainerMargins(this$static){
  var childComponent, childComponent$iterator, firstChildComponent, outerIter;
  firstChildComponent = $getFirstChildComponentContainer(this$static);
  if (firstChildComponent) {
    firstChildComponent.containerDIV.style['paddingLeft'] = 0 + ($clinit_9() , 'px');
    $setMarginTop(firstChildComponent, 0);
    for (childComponent$iterator = (outerIter = $values_0(this$static.widgetToComponentContainer).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); childComponent$iterator.val$outerIter.hasNext();) {
      childComponent = dynamicCast(dynamicCast(childComponent$iterator.val$outerIter.next_0(), 58).getValue(), 152);
      if (childComponent == firstChildComponent) {
        continue;
      }
      this$static.orientation == 1?(childComponent.containerDIV.style['paddingLeft'] = this$static.activeSpacing.hSpacing + 'px' , undefined):$setMarginTop(childComponent, this$static.activeSpacing.vSpacing);
    }
  }
}

function $updateLayoutDimensions(this$static, totalComponentWidth, totalComponentHeight, maxComponentWidth, maxComponentHeight){
  var activeLayoutHeight, activeLayoutWidth;
  if (!this$static.dynamicHeight && !this$static.dynamicWidth) {
    return this$static.activeLayoutSize;
  }
  activeLayoutWidth = 0;
  activeLayoutHeight = 0;
  if (this$static.orientation == 1) {
    this$static.dynamicWidth && (activeLayoutWidth = totalComponentWidth);
    this$static.dynamicHeight && (activeLayoutHeight = maxComponentHeight);
  }
   else {
    this$static.dynamicWidth && (activeLayoutWidth = maxComponentWidth);
    this$static.dynamicHeight && (activeLayoutHeight = totalComponentHeight);
  }
  if (this$static.dynamicWidth) {
    $setActiveLayoutWidth(this$static, activeLayoutWidth);
    $setOuterLayoutWidth(this$static, this$static.activeLayoutSize.getWidth());
  }
  if (this$static.dynamicHeight) {
    $setActiveLayoutHeight(this$static, activeLayoutHeight);
    $setOuterLayoutHeight(this$static, this$static.activeLayoutSize.getHeight());
  }
  return this$static.activeLayoutSize;
}

function $updateRelativeSizesInNonMainDirection(this$static){
  var componentContainer, componentContainer$iterator, updateDirection, updated, outerIter;
  updateDirection = 1 - this$static.orientation;
  if (updateDirection == 1 && !this$static.dynamicWidth || updateDirection == 0 && !this$static.dynamicHeight) {
    return false;
  }
  updated = false;
  for (componentContainer$iterator = (outerIter = $values_0(this$static.widgetToComponentContainer).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); componentContainer$iterator.val$outerIter.hasNext();) {
    componentContainer = dynamicCast(dynamicCast(componentContainer$iterator.val$outerIter.next_0(), 58).getValue(), 152);
    $isComponentRelativeSized(componentContainer, updateDirection) && $handleComponentRelativeSize_0(this$static.client, componentContainer.widget);
    updated = true;
  }
  return updated;
}

function $updateWidgetSizes(this$static){
  var childComponentContainer, childComponentContainer$iterator, outerIter;
  for (childComponentContainer$iterator = (outerIter = $values_0(this$static.widgetToComponentContainer).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); childComponentContainer$iterator.val$outerIter.hasNext();) {
    childComponentContainer = dynamicCast(dynamicCast(childComponentContainer$iterator.val$outerIter.next_0(), 58).getValue(), 152);
    $updateWidgetSize(childComponentContainer);
  }
}

function VOrderedLayout_1(className, orientation){
  CellBasedLayout_0.call(this);
  this.activeLayoutSize = new RenderInformation$Size_0(0, 0);
  this.clickEventHandler = new VOrderedLayout$1_0(this, this);
  $setStyleName_4(this, className);
  this.orientation = orientation;
  this.STYLENAME_SPACING = className + '-spacing';
  this.STYLENAME_MARGIN_TOP = className + '-margin-top';
  this.STYLENAME_MARGIN_RIGHT = className + '-margin-right';
  this.STYLENAME_MARGIN_BOTTOM = className + '-margin-bottom';
  this.STYLENAME_MARGIN_LEFT = className + '-margin-left';
}

function VOrderedLayout(){
}

_ = VOrderedLayout.prototype = new CellBasedLayout;
_.getAllocatedSpace = function getAllocatedSpace_14(child){
  var childComponentContainer, height, space, width;
  width = 0;
  height = 0;
  childComponentContainer = dynamicCast(this.widgetToComponentContainer.get_0(child), 152);
  if (this.orientation == 0) {
    width = this.activeLayoutSize.getWidth();
    width -= $getCaptionWidthAfterComponent(childComponentContainer);
  }
   else if (!this.dynamicWidth) {
    width = childComponentContainer.contSize.getWidth();
    width -= $getCaptionWidthAfterComponent(childComponentContainer);
  }
  if (this.orientation == 1) {
    height = this.activeLayoutSize.getHeight();
    height -= $getCaptionHeightAboveComponent(childComponentContainer);
  }
   else if (!this.dynamicHeight) {
    height = childComponentContainer.contSize.getHeight();
    height -= $getCaptionHeightAboveComponent(childComponentContainer);
  }
  space = new RenderSpace_0(width, height);
  return space;
}
;
_.getClass$ = function getClass_645(){
  return Lcom_vaadin_terminal_gwt_client_ui_VOrderedLayout_2_classLit;
}
;
_.requestLayout = function requestLayout_14(children){
  var componentContainer, p, p$iterator, sameSize, sizeBefore;
  for (p$iterator = children.iterator_0(); p$iterator.hasNext();) {
    p = dynamicCast(p$iterator.next_0(), 26);
    componentContainer = $getComponentContainer(this, dynamicCast(p, 70));
    $updateWidgetSize(componentContainer);
    $updateCaptionSize(componentContainer);
  }
  sizeBefore = new RenderInformation$Size_0(this.activeLayoutSize.getWidth(), this.activeLayoutSize.getHeight());
  $recalculateLayoutAndComponentSizes(this);
  sameSize = $equals(sizeBefore, this.activeLayoutSize);
  sameSize || $runDescendentsLayout(this.client, this);
  return sameSize;
}
;
_.setHeight = function setHeight_17(height){
  var sameSize, sizeBefore;
  sizeBefore = new RenderInformation$Size_0(this.activeLayoutSize.getWidth(), this.activeLayoutSize.getHeight());
  this.element_0.style['height'] = height;
  height == null || $equals_2(height, '')?(this.dynamicHeight = true):(this.dynamicHeight = false);
  height != null && !$equals_2(height, '') && $setActiveLayoutHeight(this, (parseInt(this.element_0['offsetHeight']) || 0) - this.activeMargins.vertical);
  if (this.isRendering) {
    this.sizeHasChangedDuringRendering = true;
  }
   else {
    $recalculateLayoutAndComponentSizes(this);
    sameSize = $equals(sizeBefore, this.activeLayoutSize);
    sameSize || $runDescendentsLayout(this.client, this);
  }
}
;
_.setWidth = function setWidth_23(width){
  var sameSize, sizeBefore;
  if ($equals_2(this.width_0, width) || !(this.element_0.style.display != 'none')) {
    return;
  }
  sizeBefore = new RenderInformation$Size_0(this.activeLayoutSize.getWidth(), this.activeLayoutSize.getHeight());
  this.element_0.style['width'] = width;
  width == null || $equals_2(width, '')?(this.dynamicWidth = true):(this.dynamicWidth = false);
  this.width_0 = width;
  width != null && !$equals_2(width, '') && $setActiveLayoutWidth(this, (parseInt(this.element_0['offsetWidth']) || 0) - this.activeMargins.horizontal);
  if (this.isRendering) {
    this.sizeHasChangedDuringRendering = true;
  }
   else {
    $recalculateLayoutAndComponentSizes(this);
    sameSize = $equals(sizeBefore, this.activeLayoutSize);
    sameSize || $runDescendentsLayout(this.client, this);
    this.dynamicHeight && sizeBefore.getHeight() != this.activeLayoutSize.getHeight() && notifyParentOfSizeChange(this, false);
  }
}
;
_.updateCaption = function updateCaption_15(component, uidl){
  var componentContainer;
  componentContainer = $getComponentContainer(this, dynamicCast(component, 70));
  $updateCaption_6(componentContainer, uidl, this.client);
  this.isRendering || ($add_12(this.client.componentCaptionSizeChanges, component) , undefined);
}
;
_.updateFromUIDL = function updateFromUIDL_33(uidl, client){
  var child, childComponentContainer, childComponentContainer$iterator, childUIDL, i, it, pos, relativeSize, relativeSizeComponentUIDL, relativeSizeComponents, uidlWidgets, widget, count, outerIter;
  this.isRendering = true;
  $updateFromUIDL_15(this, uidl, client);
  if (Boolean(uidl[1]['cached']) || Boolean(uidl[1]['invisible'])) {
    this.isRendering = false;
    return;
  }
  $handleEventHandlerRegistration(this.clickEventHandler, client);
  this.allowOrientationUpdate && $handleOrientationUpdate(this, uidl);
  uidlWidgets = new ArrayList_2(uidl.length - 2);
  relativeSizeComponents = new ArrayList_0;
  relativeSizeComponentUIDL = new ArrayList_0;
  pos = 0;
  for (it = new UIDL$1_0(uidl); count = it.this$0.length - 2 , count > it.index_0 + 1;) {
    childUIDL = dynamicCastJso($next_3(it));
    child = $getPaintable(client, childUIDL);
    widget = dynamicCast(child, 70);
    childComponentContainer = dynamicCast(this.widgetToComponentContainer.get_0(widget), 152);
    !childComponentContainer?(childComponentContainer = new ChildComponentContainer_0(widget, this.orientation)):$setWidget_5(childComponentContainer, widget);
    $addOrMoveChild(this, childComponentContainer, pos++);
    $clinit_67();
    if (!Boolean(childUIDL[1]['cached'])) {
      relativeSize = parseRelativeSize_0(childUIDL);
      childComponentContainer.relativeSize = relativeSize;
    }
    if ($isComponentRelativeSized(childComponentContainer, this.orientation)) {
      setCheck(relativeSizeComponents.array, relativeSizeComponents.size_0++, childComponentContainer);
      setCheck(relativeSizeComponentUIDL.array, relativeSizeComponentUIDL.size_0++, childUIDL);
    }
     else {
      this.dynamicWidth?(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isOpera && (childComponentContainer.containerDIV.style['width'] = '1000000px' , undefined) , dynamicCast(childComponentContainer.widget, 26).updateFromUIDL(childUIDL, client)):$renderChild(childComponentContainer, childUIDL, client, this.activeLayoutSize.getWidth());
      this.sizeHasChangedDuringRendering && Boolean(childUIDL[1]['cached']) && $handleComponentRelativeSize_0(client, childComponentContainer.widget);
    }
    setCheck(uidlWidgets.array, uidlWidgets.size_0++, widget);
  }
  $removeChildrenAfter(this, pos);
  $updateAlignmentsAndExpandRatios(this, uidl, uidlWidgets);
  $updateWidgetSizes(this);
  $recalculateLayout(this);
  for (i = 0; i < relativeSizeComponents.size_0; ++i) {
    childComponentContainer = dynamicCast((checkIndex(i, relativeSizeComponents.size_0) , relativeSizeComponents.array[i]), 152);
    childUIDL = dynamicCastJso((checkIndex(i, relativeSizeComponentUIDL.size_0) , relativeSizeComponentUIDL.array[i]));
    this.dynamicWidth?(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isOpera && (childComponentContainer.containerDIV.style['width'] = '1000000px' , undefined) , dynamicCast(childComponentContainer.widget, 26).updateFromUIDL(childUIDL, client)):$renderChild(childComponentContainer, childUIDL, client, this.activeLayoutSize.getWidth());
    ($clinit_67() , Boolean(childUIDL[1]['cached'])) && $handleComponentRelativeSize_0(client, childComponentContainer.widget);
  }
  for (childComponentContainer$iterator = (outerIter = $values_0(this.widgetToComponentContainer).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); childComponentContainer$iterator.val$outerIter.hasNext();) {
    childComponentContainer = dynamicCast(dynamicCast(childComponentContainer$iterator.val$outerIter.next_0(), 58).getValue(), 152);
    $updateWidgetSize(childComponentContainer);
  }
  (this.orientation == 1 && this.dynamicHeight || this.orientation == 0 && this.dynamicWidth) && $layoutSizeMightHaveChanged(this);
  $updateContainerMargins(this);
  if ($updateRelativeSizesInNonMainDirection(this)) {
    $updateWidgetSizes(this);
    $layoutSizeMightHaveChanged(this);
  }
  $calculateAlignments(this);
  this.root.style['width'] = this.activeLayoutSize.getWidth() + ($clinit_9() , 'px');
  this.root.style['height'] = this.activeLayoutSize.getHeight() + 'px';
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && (this.root.style['zoom'] = '1' , undefined);
  this.isRendering = false;
  this.sizeHasChangedDuringRendering = false;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1};
_.alignments = null;
_.allowOrientationUpdate = false;
_.defaultExpandRatio = 0;
_.expandRatioSum = 0;
_.expandRatios = null;
_.isRendering = false;
_.orientation = 0;
_.sizeHasChangedDuringRendering = false;
_.width_0 = '';
function VLabel_1(text){
  HTML_0.call(this);
  $setTextOrHtml(this.directionalTextHelper, text, true);
  this.element_0['className'] = 'v-label';
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
}

_ = VLabel_1.prototype = VLabel.prototype;
function $setEnabled_2(this$static, enabled){
  if (!this$static.element_0['disabled'] != enabled) {
    this$static.element_0['disabled'] = !enabled;
    setStyleName(this$static.element_0, 'v-disabled', !enabled);
  }
}

function $setWidth_7(this$static, width){
  if ($isIE7(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && this$static.width_0 != null) {
    if ($equals_2(this$static.width_0, width)) {
      return;
    }
    width == null && (width = '');
  }
  this$static.width_0 = width;
  this$static.element_0.style['width'] = width;
  $isIE7((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40)) && (this$static.element_0.style['width'] = width , undefined);
}

function VNativeButton_0(){
  $clinit_42();
  Button_0.call(this);
  this.captionElement = $doc.createElement('span');
  this.element_0['className'] = 'v-nativebutton';
  this.element_0.appendChild(this.captionElement);
  this.captionElement.className = $getPropertyString(this.element_0, 'className') + '-caption';
  $addDomHandler(this, this, ($clinit_15() , $clinit_15() , TYPE_1));
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
  this.eventsToSink == -1?sinkEvents(this.element_0, 4 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 4);
  this.eventsToSink == -1?sinkEvents(this.element_0, 8 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 8);
}

function VNativeButton(){
}

_ = VNativeButton_0.prototype = VNativeButton.prototype = new Button;
_.getClass$ = function getClass_659(){
  return Lcom_vaadin_terminal_gwt_client_ui_VNativeButton_2_classLit;
}
;
_.onBlur = function onBlur_7(arg0){
  $addVariableToQueue(this.client, this.id_0, 'blur', $escapeVariableValue(''), true, 115);
}
;
_.onBrowserEvent = function onBrowserEvent_31(event_0){
  $onBrowserEvent(this, event_0);
  if ($eventGetTypeInt(event_0.type) == 32768) {
    notifyParentOfSizeChange(this, true);
  }
   else if ($eventGetTypeInt(event_0.type) == 4 && $eventGetButton(event_0) == 1) {
    this.clickPending = true;
  }
   else if ($eventGetTypeInt(event_0.type) == 64) {
    this.clickPending = false;
  }
   else if ($eventGetTypeInt(event_0.type) == 32) {
    this.clickPending && (this.element_0.click() , undefined);
    this.clickPending = false;
  }
  !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, this, null) , undefined);
}
;
_.onClick = function onClick_22(event_0){
  var details;
  if (this.id_0 == null || !this.client) {
    return;
  }
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isSafari && impl_0.focus_1(this.element_0);
  if (this.disableOnClick) {
    $setEnabled_2(this, false);
    $addVariableToQueue(this.client, this.id_0, 'disabledOnClick', 'true', false, 98);
  }
  details = new MouseEventDetails_1(event_0.nativeEvent, this.element_0);
  $addVariableToQueue(this.client, this.id_0, 'mousedetails', $escapeVariableValue('' + details.button_0 + ',' + details.clientX_0 + ',' + details.clientY_0 + ',' + details.altKey_0 + ',' + details.ctrlKey_0 + ',' + details.metaKey_0 + ',' + details.shiftKey_0 + ',' + details.type_0 + ',' + details.relativeX + ',' + details.relativeY), false, 115);
  $addVariableToQueue(this.client, this.id_0, 'state', 'true', true, 98);
  this.clickPending = false;
}
;
_.onFocus = function onFocus_7(arg0){
  $addVariableToQueue(this.client, this.id_0, 'focus', $escapeVariableValue(''), true, 115);
}
;
_.setEnabled = function setEnabled_5(enabled){
  $setEnabled_2(this, enabled);
}
;
_.setWidth = function setWidth_27(width){
  $setWidth_7(this, width);
}
;
_.updateFromUIDL = function updateFromUIDL_37(uidl, client){
  if ($updateComponent(client, this, uidl, false)) {
    return;
  }
  this.disableOnClick = 'dc' in uidl[1];
  this.focusHandlerRegistration = updateFocusHandler(this, client, this.focusHandlerRegistration);
  this.blurHandlerRegistration = updateBlurHandler(this, client, this.blurHandlerRegistration);
  this.client = client;
  this.id_0 = uidl[1]['id'];
  this.captionElement.textContent = uidl[1]['caption'] || '';
  if ('error' in uidl[1]) {
    if (!this.errorIndicatorElement) {
      this.errorIndicatorElement = $doc.createElement('span');
      this.errorIndicatorElement.className = 'v-errorindicator';
    }
    this.element_0.insertBefore(this.errorIndicatorElement, this.captionElement);
    ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && (this.errorIndicatorElement.textContent = ' ' , undefined);
  }
   else if (this.errorIndicatorElement) {
    this.element_0.removeChild(this.errorIndicatorElement);
    this.errorIndicatorElement = null;
  }
  if ('icon' in uidl[1]) {
    if (!this.icon) {
      this.icon = new Icon_0(client);
      this.element_0.insertBefore(this.icon.element_0, this.captionElement);
    }
    $setUri(this.icon, uidl[1]['icon']);
  }
   else {
    if (this.icon) {
      this.element_0.removeChild(this.icon.element_0);
      this.icon = null;
    }
  }
  $isIE7(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $equals_2(this.width_0, '') && $scheduleDeferred_0(($clinit_1() , INSTANCE), new VNativeButton$1_0(this));
}
;
_.castableTypeMap$ = {5:1, 6:1, 10:1, 12:1, 13:1, 15:1, 22:1, 26:1, 39:1, 69:1, 70:1, 122:1, 123:1, 131:1, 132:1};
_.blurHandlerRegistration = null;
_.clickPending = false;
_.client = null;
_.disableOnClick = false;
_.errorIndicatorElement = null;
_.focusHandlerRegistration = null;
_.icon = null;
_.id_0 = null;
_.width_0 = null;
function VNativeButton$1_0(this$0){
  this.this$0 = this$0;
}

function VNativeButton$1(){
}

_ = VNativeButton$1_0.prototype = VNativeButton$1.prototype = new Object_0;
_.execute_0 = function execute_39(){
  $setWidth_7(this.this$0, '');
  $setWidth_7(this.this$0, (parseInt(this.this$0.element_0['offsetWidth']) || 0) + 'px');
}
;
_.getClass$ = function getClass_660(){
  return Lcom_vaadin_terminal_gwt_client_ui_VNativeButton$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VOrderedLayout$1_0(this$0, $anonymous0){
  this.this$0 = this$0;
  this.paintable = $anonymous0;
  this.clickEventIdentifier = 'layout_click';
}

function VOrderedLayout$1(){
}

_ = VOrderedLayout$1_0.prototype = VOrderedLayout$1.prototype = new LayoutClickEventHandler;
_.getChildComponent = function getChildComponent_2(element){
  return $getComponent_3(this.this$0, element);
}
;
_.getClass$ = function getClass_668(){
  return Lcom_vaadin_terminal_gwt_client_ui_VOrderedLayout$1_2_classLit;
}
;
_.registerHandler = function registerHandler_3(handler, type){
  return $addDomHandler(this.this$0, handler, type);
}
;
_.castableTypeMap$ = {12:1, 40:1, 42:1, 49:1};
_.this$0 = null;
function $addAndRemoveRows(this$static, partialRowAdditions){
  if (!partialRowAdditions) {
    return;
  }
  if ('hide' in partialRowAdditions[1]) {
    $unlinkAndReindexRows(this$static.scrollBody_0, partialRowAdditions[1]['firstprowix'], partialRowAdditions[1]['numprows']);
    $ensureCacheFilled(this$static.scrollBody_0);
  }
   else {
    'delbelow' in partialRowAdditions[1]?$insertRowsDeleteBelow(this$static.scrollBody_0, partialRowAdditions, partialRowAdditions[1]['firstprowix'], partialRowAdditions[1]['numprows']):$insertAndReindexRows(this$static.scrollBody_0, partialRowAdditions, partialRowAdditions[1]['firstprowix'], partialRowAdditions[1]['numprows']);
  }
  $discardRowsOutsideCacheWindow(this$static);
}

function $announceScrollPosition(this$static){
  var last, style;
  if (!this$static.scrollPositionElement) {
    this$static.scrollPositionElement = $doc.createElement('div');
    this$static.scrollPositionElement.className = 'v-table-scrollposition';
    this$static.scrollPositionElement.style['position'] = ($clinit_8() , 'absolute');
    this$static.scrollPositionElement.style['display'] = ($clinit_4() , 'none');
    this$static.element_0.appendChild(this$static.scrollPositionElement);
  }
  style = this$static.scrollPositionElement.style;
  style['marginLeft'] = ~~((this$static.element_0.offsetWidth || 0) / 2) - 80 + ($clinit_9() , 'px');
  style['marginTop'] = -(parseInt(this$static.scrollBodyPanel.element_0['offsetHeight']) || 0) + 'px';
  last = this$static.firstRowInViewPort + this$static.pageLength;
  last > this$static.totalRows && (last = this$static.totalRows);
  this$static.scrollPositionElement.innerHTML = '<span>' + (this$static.firstRowInViewPort + 1) + ' &ndash; ' + last + '...<\/span>' || '';
  style['display'] = ($clinit_4() , 'block');
}

function $buildCaptionHtmlSnippet(this$static, uidl){
  var s;
  s = 'caption' in uidl[1]?uidl[1]['caption']:'';
  'icon' in uidl[1] && (s = '<img src="' + escapeAttribute($translateVaadinUri(this$static.client, uidl[1]['icon'])) + '" alt="icon" class="v-icon">' + s);
  return s;
}

function $cancelScrollingVelocityTimer(this$static){
  if (this$static.scrollingVelocityTimer) {
    $cancel_0(this$static.scrollingVelocityTimer);
    this$static.scrollingVelocityTimer = null;
    this$static.scrollingVelocity = 10;
  }
}

function $deselectAll(this$static){
  var row, w, w$iterator;
  for (w$iterator = $listIterator(this$static.scrollBody_0.renderedRows, 0); w$iterator.currentNode != w$iterator.this$0.header;) {
    w = dynamicCast($next_7(w$iterator), 70);
    row = dynamicCast(w, 78);
    row.selected_0 && $toggleSelection(row);
  }
  this$static.selectedRowKeys.map.clear_0();
  this$static.selectedRowRanges.map.clear_0();
  $addVariableToQueue(this$static.client, this$static.paintableId, 'clearSelections', 'true', false, 98);
}

function $discardRowsOutsideCacheWindow(this$static){
  var firstRowToKeep, lastRowToKeep;
  firstRowToKeep = ~~Math.max(Math.min(this$static.firstRowInViewPort - this$static.pageLength * this$static.cache_rate, 2147483647), -2147483648);
  lastRowToKeep = ~~Math.max(Math.min(this$static.firstRowInViewPort + this$static.pageLength + this$static.pageLength * this$static.cache_rate, 2147483647), -2147483648);
  if (this$static.serverCacheFirst != -1) {
    firstRowToKeep = this$static.serverCacheFirst;
    lastRowToKeep = this$static.serverCacheLast;
    (firstRowToKeep < this$static.scrollBody_0.firstRendered || lastRowToKeep > this$static.scrollBody_0.lastRendered) && undefined;
  }
  $discardRowsOutsideOf(this$static, firstRowToKeep, lastRowToKeep);
  $fixSpacers(this$static.scrollBody_0);
  $restoreRowVisibility(this$static.scrollBody_0);
}

function $discardRowsOutsideOf(this$static, optimalFirstRow, optimalLastRow){
  var cont, firstDiscarded, lastDiscarded;
  firstDiscarded = -1;
  cont = true;
  while (cont && this$static.scrollBody_0.lastRendered > optimalFirstRow && this$static.scrollBody_0.firstRendered < optimalFirstRow) {
    firstDiscarded == -1 && (firstDiscarded = this$static.scrollBody_0.firstRendered);
    cont = $unlinkRow(this$static.scrollBody_0, true);
  }
  firstDiscarded != -1 && this$static.scrollBody_0.firstRendered - 1;
  lastDiscarded = -1;
  cont = true;
  while (cont && this$static.scrollBody_0.lastRendered > optimalLastRow) {
    lastDiscarded == -1 && (lastDiscarded = this$static.scrollBody_0.lastRendered);
    cont = $unlinkRow(this$static.scrollBody_0, false);
  }
  lastDiscarded != -1 && this$static.scrollBody_0.lastRendered + 1;
}

function $ensureRowIsVisible(row){
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).touchDevice) {
    return;
  }
  scrollIntoViewVertically(row.element_0);
}

function $fireColumnResizeEvent(this$static, columnId, originalWidth, newWidth){
  $addVariableToQueue(this$static.client, this$static.paintableId, 'columnResizeEventColumn', $escapeVariableValue(columnId), false, 115);
  $addVariableToQueue(this$static.client, this$static.paintableId, 'columnResizeEventPrev', '' + originalWidth, false, 105);
  $addVariableToQueue(this$static.client, this$static.paintableId, 'columnResizeEventCurr', '' + newWidth, this$static.immediate, 105);
}

function $focusRowFromBody(this$static){
  var renderedRow, selectedRowKey, outerIter, entry;
  if (this$static.selectedRowKeys.map.size_1() == 1) {
    selectedRowKey = dynamicCast((entry = dynamicCast((outerIter = $keySet(this$static.selectedRowKeys.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)).val$outerIter.next_0(), 58) , entry.getKey()), 1);
    if (selectedRowKey != null) {
      renderedRow = $getRenderedRowByKey(this$static, selectedRowKey);
      !renderedRow || !$isInViewPort(renderedRow)?$setRowFocus(this$static, $getRowByRowIndex(this$static.scrollBody_0, this$static.firstRowInViewPort)):$setRowFocus(this$static, renderedRow);
    }
  }
   else {
    $setRowFocus(this$static, $getRowByRowIndex(this$static.scrollBody_0, this$static.firstRowInViewPort));
  }
}

function $forceRealignColumnHeaders(this$static){
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && $onScroll(this$static, null);
}

function $getBorderWidth(this$static){
  if (this$static.borderWidth < 0) {
    this$static.borderWidth = measureHorizontalPaddingAndBorder(this$static.scrollBodyPanel.element_0, 2);
    this$static.borderWidth < 0 && (this$static.borderWidth = 0);
  }
  return this$static.borderWidth;
}

function $getColIndexByKey(this$static, colKey){
  var i;
  if ($equals_2('0', colKey)) {
    return 0;
  }
  for (i = 0; i < this$static.visibleColOrder.length; ++i) {
    if ($equals_2(this$static.visibleColOrder[i], colKey)) {
      return i;
    }
  }
  return -1;
}

function $getColWidth(this$static, colKey){
  return dynamicCast(this$static.tHead.availableCells.get_0(colKey), 163).width_0;
}

function $getContentAreaBorderHeight(this$static){
  var ch, oh;
  if (this$static.contentAreaBorderHeight < 0) {
    if ($isIE7(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) || $isIE6((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40))) {
      this$static.contentAreaBorderHeight = measureVerticalBorder(this$static.scrollBodyPanel.element_0);
    }
     else {
      this$static.scrollBodyPanel.element_0.style['overflow'] = 'hidden';
      oh = parseInt(this$static.scrollBodyPanel.element_0['offsetHeight']) || 0;
      ch = parseInt(this$static.scrollBodyPanel.element_0['clientHeight']) || 0;
      this$static.contentAreaBorderHeight = oh - ch;
      this$static.scrollBodyPanel.element_0.style['overflow'] = 'auto';
    }
  }
  return this$static.contentAreaBorderHeight;
}

function $getNextRow(this$static, row, offset){
  var it, r;
  it = $listIterator(this$static.scrollBody_0.renderedRows, 0);
  while (it.currentNode != it.this$0.header) {
    r = dynamicCast($next_7(it), 78);
    if (r == row) {
      r = null;
      while (offset >= 0 && it.currentNode != it.this$0.header) {
        r = dynamicCast($next_7(it), 78);
        --offset;
      }
      return r;
    }
  }
  return null;
}

function $getPreviousRow(this$static, row, offset){
  var it, offsetIt, prev, r;
  it = $listIterator(this$static.scrollBody_0.renderedRows, 0);
  offsetIt = $listIterator(this$static.scrollBody_0.renderedRows, 0);
  prev = null;
  while (it.currentNode != it.this$0.header) {
    r = dynamicCast($next_7(it), 78);
    offset < 0 && (prev = dynamicCast($next_7(offsetIt), 78));
    if (r == row) {
      return prev;
    }
    --offset;
  }
  return null;
}

function $getRenderedRowByKey(this$static, key){
  var it, r;
  if (this$static.scrollBody_0) {
    it = $listIterator(this$static.scrollBody_0.renderedRows, 0);
    while (it.currentNode != it.this$0.header) {
      r = dynamicCast($next_7(it), 78);
      if ($equals_2('' + r.rowKey, key)) {
        return r;
      }
    }
  }
  return null;
}

function $getTouchScrollDelegate_0(this$static){
  if (!this$static.touchScrollDelegate) {
    this$static.touchScrollDelegate = new TouchScrollDelegate_0(initValues(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, {30:1, 35:1}, 0, [this$static.scrollBodyPanel.element_0]));
    this$static.touchScrollDelegate.scrollHandler = this$static;
  }
  return this$static.touchScrollDelegate;
}

function $handleBodyContextMenu(this$static, event_0){
  var left, top_0;
  if (this$static.enabled && this$static.bodyActionKeys != null) {
    left = ($clinit_67() , getTouchOrMouseClientX(event_0.nativeEvent));
    top_0 = getTouchOrMouseClientY(event_0.nativeEvent);
    top_0 += $doc.body.scrollTop || 0;
    left += $getScrollLeft($doc.body);
    $showAt_0($getContextMenu(this$static.client), this$static, left, top_0);
    event_0.nativeEvent.stopPropagation();
    event_0.nativeEvent.preventDefault();
  }
}

function $handleNavigation_1(this$static, keycode, ctrl, shift){
  var firstVisibleRowInViewPort, indexOfToBeFocused, lastRendered, lastVisibleRowInViewPort, rowByRowIndex, toBeFocusedRow, wasSelected;
  if (keycode == 9 || keycode == 16) {
    return false;
  }
  if (this$static.selectMode <= 0 && keycode == 40) {
    $setScrollPosition(this$static.scrollBodyPanel, $getScrollPosition(this$static.scrollBodyPanel) + this$static.scrollingVelocity);
    return true;
  }
   else if (keycode == 40) {
    this$static.selectMode == 2 && $moveFocusDown(this$static)?$selectFocusedRow(this$static, ctrl, shift):this$static.selectMode == 1 && !shift && $moveFocusDown(this$static) && $selectFocusedRow(this$static, ctrl, shift);
    return true;
  }
  if (this$static.selectMode <= 0 && keycode == 38) {
    $setScrollPosition(this$static.scrollBodyPanel, $getScrollPosition(this$static.scrollBodyPanel) - this$static.scrollingVelocity);
    return true;
  }
   else if (keycode == 38) {
    this$static.selectMode == 2 && $moveFocusUp(this$static)?$selectFocusedRow(this$static, ctrl, shift):this$static.selectMode == 1 && !shift && $moveFocusUp(this$static) && $selectFocusedRow(this$static, ctrl, shift);
    return true;
  }
  if (keycode == 37) {
    $setHorizontalScrollPosition(this$static.scrollBodyPanel, $getScrollLeft(this$static.scrollBodyPanel.element_0) - this$static.scrollingVelocity);
    return true;
  }
   else if (keycode == 39) {
    $setHorizontalScrollPosition(this$static.scrollBodyPanel, $getScrollLeft(this$static.scrollBodyPanel.element_0) + this$static.scrollingVelocity);
    return true;
  }
  if (this$static.selectMode > 0 && keycode == 32) {
    if (this$static.selectMode == 1) {
      wasSelected = this$static.focusedRow.selected_0;
      $deselectAll(this$static);
      (!wasSelected || !this$static.nullSelectionAllowed) && $toggleSelection(this$static.focusedRow);
    }
     else {
      $toggleSelection(this$static.focusedRow);
      $removeRowFromUnsentSelectionRanges(this$static, this$static.focusedRow);
    }
    this$static.sendSelectedRows(this$static.immediate);
    return true;
  }
  if (keycode == 34) {
    if (this$static.selectMode > 0) {
      if (this$static.focusedRow.index_0 + 1 < this$static.totalRows) {
        lastVisibleRowInViewPort = $getRowByRowIndex(this$static.scrollBody_0, this$static.firstRowInViewPort + ~~Math.max(Math.min((parseInt(this$static.scrollBodyPanel.element_0['offsetHeight']) || 0) / $getRowHeight(this$static.scrollBody_0, false), 2147483647), -2147483648) - 1);
        if (!!lastVisibleRowInViewPort && lastVisibleRowInViewPort != this$static.focusedRow) {
          $setRowFocus(this$static, lastVisibleRowInViewPort);
          $selectFocusedRow(this$static, ctrl, shift);
          this$static.sendSelectedRows(this$static.immediate);
        }
         else {
          indexOfToBeFocused = this$static.focusedRow.index_0 + ~~Math.max(Math.min((parseInt(this$static.scrollBodyPanel.element_0['offsetHeight']) || 0) / $getRowHeight(this$static.scrollBody_0, false), 2147483647), -2147483648);
          indexOfToBeFocused >= this$static.totalRows && (indexOfToBeFocused = this$static.totalRows - 1);
          toBeFocusedRow = $getRowByRowIndex(this$static.scrollBody_0, indexOfToBeFocused);
          if (toBeFocusedRow) {
            $setRowFocus(this$static, toBeFocusedRow);
            $selectFocusedRow(this$static, ctrl, shift);
            this$static.sendSelectedRows(this$static.immediate);
          }
           else {
            this$static.selectLastItemInNextRender = true;
            this$static.multiselectPending = shift;
            $scrollByPagelenght(this$static, 1);
          }
        }
      }
    }
     else {
      $scrollByPagelenght(this$static, 1);
    }
    return true;
  }
  if (keycode == 33) {
    if (this$static.selectMode > 0) {
      if (this$static.focusedRow.index_0 != 0) {
        firstVisibleRowInViewPort = $getRowByRowIndex(this$static.scrollBody_0, this$static.firstRowInViewPort);
        if (!!firstVisibleRowInViewPort && firstVisibleRowInViewPort != this$static.focusedRow) {
          $setRowFocus(this$static, firstVisibleRowInViewPort);
          $selectFocusedRow(this$static, ctrl, shift);
          this$static.sendSelectedRows(this$static.immediate);
        }
         else {
          indexOfToBeFocused = this$static.focusedRow.index_0 - ~~Math.max(Math.min((parseInt(this$static.scrollBodyPanel.element_0['offsetHeight']) || 0) / $getRowHeight(this$static.scrollBody_0, false), 2147483647), -2147483648);
          indexOfToBeFocused < 0 && (indexOfToBeFocused = 0);
          toBeFocusedRow = $getRowByRowIndex(this$static.scrollBody_0, indexOfToBeFocused);
          if (toBeFocusedRow) {
            $setRowFocus(this$static, toBeFocusedRow);
            $selectFocusedRow(this$static, ctrl, shift);
            this$static.sendSelectedRows(this$static.immediate);
          }
           else {
            this$static.selectFirstItemInNextRender = true;
            this$static.multiselectPending = shift;
            $scrollByPagelenght(this$static, -1);
          }
        }
      }
    }
     else {
      $scrollByPagelenght(this$static, -1);
    }
    return true;
  }
  if (keycode == 36) {
    $setScrollPosition(this$static.scrollBodyPanel, 0);
    if (this$static.selectMode > 0) {
      if (!!this$static.focusedRow && this$static.focusedRow.index_0 == 0) {
        return false;
      }
       else {
        rowByRowIndex = dynamicCast($next_7($listIterator(this$static.scrollBody_0.renderedRows, 0)), 78);
        if (rowByRowIndex.index_0 == 0) {
          $setRowFocus(this$static, rowByRowIndex);
          $selectFocusedRow(this$static, ctrl, shift);
          this$static.sendSelectedRows(this$static.immediate);
        }
         else {
          if (ctrl) {
            this$static.focusFirstItemInNextRender = true;
          }
           else {
            this$static.selectFirstItemInNextRender = true;
            this$static.multiselectPending = shift;
          }
        }
      }
    }
    return true;
  }
  if (keycode == 35) {
    $setScrollPosition(this$static.scrollBodyPanel, parseInt(this$static.scrollBody_0.element_0['offsetHeight']) || 0);
    if (this$static.selectMode > 0) {
      lastRendered = this$static.scrollBody_0.lastRendered;
      if (lastRendered + 1 == this$static.totalRows) {
        rowByRowIndex = $getRowByRowIndex(this$static.scrollBody_0, lastRendered);
        if (this$static.focusedRow != rowByRowIndex) {
          $setRowFocus(this$static, rowByRowIndex);
          $selectFocusedRow(this$static, ctrl, shift);
          this$static.sendSelectedRows(this$static.immediate);
        }
      }
       else {
        if (ctrl) {
          this$static.focusLastItemInNextRender = true;
        }
         else {
          this$static.selectLastItemInNextRender = true;
          this$static.multiselectPending = shift;
        }
      }
    }
    return true;
  }
  return false;
}

function $hasVerticalScrollbar(this$static){
  return (parseInt(this$static.scrollBody_0.element_0['offsetHeight']) || 0) > (parseInt(this$static.scrollBodyPanel.element_0['offsetHeight']) || 0);
}

function $hideScrollPositionAnnotation(this$static){
  !!this$static.scrollPositionElement && (this$static.scrollPositionElement.style['display'] = 'none' , undefined);
}

function $initializeRows(this$static, uidl, rowData){
  if (this$static.scrollBody_0) {
    $removeFromParent_0(this$static.scrollBody_0);
    $add_12(this$static.lazyUnregistryBag, this$static.scrollBody_0);
  }
  this$static.scrollBody_0 = this$static.createScrollBody();
  $renderInitialRows(this$static.scrollBody_0, rowData, uidl[1]['firstrow'], uidl[1]['rows']);
  $add_3(this$static.scrollBodyPanel, this$static.scrollBody_0);
  $setHorizontalScrollPosition_1(this$static.tHead, 0);
  $setHorizontalScrollPosition_0(this$static.tFoot, 0);
  this$static.initialContentReceived = true;
  this$static.attached && $sizeInit(this$static);
  $restoreRowVisibility(this$static.scrollBody_0);
}

function $instructServerToForgetPreviousSelections(this$static){
  $addVariableToQueue(this$static.client, this$static.paintableId, 'clearSelections', 'true', false, 98);
}

function $isCollapsedColumn(this$static, colKey){
  if (!this$static.collapsedColumns) {
    return false;
  }
  if (this$static.collapsedColumns.map.containsKey(colKey)) {
    return true;
  }
  return false;
}

function $isFocusable(this$static){
  if (!!this$static.scrollBody_0 && this$static.enabled) {
    return !((parseInt(this$static.scrollBody_0.element_0['offsetWidth']) || 0) <= (parseInt(this$static.scrollBodyPanel.element_0['offsetWidth']) || 0) && (parseInt(this$static.scrollBody_0.element_0['offsetHeight']) || 0) <= (parseInt(this$static.scrollBodyPanel.element_0['offsetHeight']) || 0) && this$static.selectMode <= 0);
  }
  return false;
}

function $isMultiSelectModeDefault(this$static){
  return this$static.selectMode == 2 && this$static.multiselectmode == 0;
}

function $isMultiSelectModeSimple(this$static){
  return this$static.selectMode == 2 && this$static.multiselectmode == 1;
}

function $measureRowHeightOffset(this$static, rowIx){
  return ~~Math.max(Math.min(rowIx * $getRowHeight(this$static.scrollBody_0, false), 2147483647), -2147483648);
}

function $moveFocusDown(this$static){
  var next;
  if (this$static.selectMode > 0) {
    if (!this$static.focusedRow && $hasNext_1($listIterator(this$static.scrollBody_0.renderedRows, 0))) {
      return $setRowFocus(this$static, dynamicCast($next_7($listIterator(this$static.scrollBody_0.renderedRows, 0)), 78));
    }
     else {
      next = $getNextRow(this$static, this$static.focusedRow, 0);
      if (next) {
        return $setRowFocus(this$static, next);
      }
    }
  }
  return false;
}

function $moveFocusUp(this$static){
  var prev;
  if (this$static.selectMode > 0) {
    if (!this$static.focusedRow && $hasNext_1($listIterator(this$static.scrollBody_0.renderedRows, 0))) {
      return $setRowFocus(this$static, dynamicCast($next_7($listIterator(this$static.scrollBody_0.renderedRows, 0)), 78));
    }
     else {
      prev = $getPreviousRow(this$static, this$static.focusedRow, 0);
      if (prev) {
        return $setRowFocus(this$static, prev);
      }
       else {
        impl_2.log_0('no previous available');
      }
    }
  }
  return false;
}

function $onScroll(this$static, event_0){
  var firstRendered, last, lastRendered, postLimit, preLimit;
  this$static.scrollLeft_0 = $getScrollLeft(this$static.scrollBodyPanel.element_0);
  this$static.scrollTop_0 = $getScrollPosition(this$static.scrollBodyPanel);
  if (!this$static.initializedAndAttached || !this$static.attached) {
    return;
  }
  if (!this$static.enabled) {
    $setScrollPosition(this$static.scrollBodyPanel, $measureRowHeightOffset(this$static, this$static.firstRowInViewPort));
    return;
  }
  $cancel_0(this$static.rowRequestHandler);
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isSafari && !!event_0 && this$static.scrollTop_0 == 0) {
    $scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$12_0(this$static));
    return;
  }
  $setHorizontalScrollPosition_1(this$static.tHead, this$static.scrollLeft_0);
  $setHorizontalScrollPosition_0(this$static.tFoot, this$static.scrollLeft_0);
  this$static.firstRowInViewPort = round_int(Math.ceil(this$static.scrollTop_0 / $getRowHeight(this$static.scrollBody_0, false)));
  this$static.firstRowInViewPort > this$static.totalRows - this$static.pageLength && (this$static.firstRowInViewPort = this$static.totalRows - this$static.pageLength);
  postLimit = ~~Math.max(Math.min(this$static.firstRowInViewPort + (this$static.pageLength - 1) + this$static.pageLength * this$static.cache_react_rate, 2147483647), -2147483648);
  postLimit > this$static.totalRows - 1 && (postLimit = this$static.totalRows - 1);
  preLimit = ~~Math.max(Math.min(this$static.firstRowInViewPort - this$static.pageLength * this$static.cache_react_rate, 2147483647), -2147483648);
  preLimit < 0 && (preLimit = 0);
  lastRendered = this$static.scrollBody_0.lastRendered;
  firstRendered = this$static.scrollBody_0.firstRendered;
  if (postLimit <= lastRendered && preLimit >= firstRendered) {
    this$static.lastRequestedFirstvisible = this$static.firstRowInViewPort;
    $addVariableToQueue(this$static.client, this$static.paintableId, 'firstvisible', '' + this$static.firstRowInViewPort, false, 105);
    return;
  }
  if (this$static.firstRowInViewPort - this$static.pageLength * this$static.cache_rate > lastRendered || this$static.firstRowInViewPort + this$static.pageLength + this$static.pageLength * this$static.cache_rate < firstRendered) {
    $setReqFirstRow(this$static.rowRequestHandler, this$static.firstRowInViewPort - ~~Math.max(Math.min(this$static.pageLength * this$static.cache_rate, 2147483647), -2147483648));
    last = this$static.firstRowInViewPort + ~~Math.max(Math.min(this$static.cache_rate * this$static.pageLength, 2147483647), -2147483648) + this$static.pageLength - 1;
    last >= this$static.totalRows && (last = this$static.totalRows - 1);
    this$static.rowRequestHandler.reqRows = last - this$static.rowRequestHandler.reqFirstRow + 1;
    $deferRowFetch(this$static.rowRequestHandler, 250);
    return;
  }
  if (preLimit < firstRendered) {
    $setReqFirstRow(this$static.rowRequestHandler, ~~Math.max(Math.min(this$static.firstRowInViewPort - this$static.pageLength * this$static.cache_rate, 2147483647), -2147483648));
    this$static.rowRequestHandler.reqRows = firstRendered - this$static.rowRequestHandler.reqFirstRow;
    $deferRowFetch(this$static.rowRequestHandler, 250);
    return;
  }
  if (postLimit > lastRendered) {
    $setReqFirstRow(this$static.rowRequestHandler, lastRendered + 1);
    this$static.rowRequestHandler.reqRows = ~~Math.max(Math.min(this$static.firstRowInViewPort + this$static.pageLength + this$static.pageLength * this$static.cache_rate - lastRendered, 2147483647), -2147483648);
    $deferRowFetch(this$static.rowRequestHandler, 250);
  }
}

function $purgeUnregistryBag_0(this$static){
  var iterator;
  for (iterator = new AbstractList$IteratorImpl_0(this$static.lazyUnregistryBag); iterator.i < iterator.this$0_0.size_1();) {
    $unregisterChildPaintables(this$static.client, dynamicCast($next_5(iterator), 21));
  }
  $clear_6(this$static.lazyUnregistryBag);
}

function $reOrderColumn(this$static, columnKey, newIndex){
  var cid, i, j_0, newOrder, oldIndex, oldKeyOnNewIndex;
  oldIndex = $getColIndexByKey(this$static, columnKey);
  $moveCell_0(this$static.tHead, oldIndex, newIndex);
  $moveCol(this$static.scrollBody_0, oldIndex, newIndex);
  $moveCell(this$static.tFoot, oldIndex, newIndex);
  oldKeyOnNewIndex = this$static.visibleColOrder[newIndex];
  this$static.showRowHeaders && --newIndex;
  for (i = 0; i < this$static.columnOrder.length; ++i) {
    if ($equals_2(this$static.columnOrder[i], oldKeyOnNewIndex)) {
      break;
    }
    $isCollapsedColumn(this$static, this$static.columnOrder[i]) && ++newIndex;
  }
  newOrder = initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, this$static.columnOrder.length, 0);
  for (i = 0 , j_0 = 0; j_0 < newOrder.length; ++i) {
    if (j_0 == newIndex) {
      newOrder[j_0] = columnKey;
      ++j_0;
    }
    if (i == this$static.columnOrder.length) {
      break;
    }
    if ($equals_2(this$static.columnOrder[i], columnKey)) {
      continue;
    }
    newOrder[j_0] = this$static.columnOrder[i];
    ++j_0;
  }
  this$static.columnOrder = newOrder;
  i = this$static.showRowHeaders?1:0;
  for (j_0 = 0; j_0 < newOrder.length; ++j_0) {
    cid = newOrder[j_0];
    $isCollapsedColumn(this$static, cid) || (this$static.visibleColOrder[i++] = cid);
  }
  $updateVariable_2(this$static.client, this$static.paintableId, 'columnorder', this$static.columnOrder, false);
  $hasEventListeners_0(this$static.client.idToPaintableDetail[dynamicCast(this$static, 70).element_0.tkPid], 'columnReorder') && $sendPendingVariableChanges(this$static.client);
}

function $removeRowFromUnsentSelectionRanges(this$static, row){
  var iterator, newRanges, range, splitranges, outerIter, entry;
  newRanges = null;
  for (iterator = (outerIter = $keySet(this$static.selectedRowRanges.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); iterator.val$outerIter.hasNext();) {
    range = dynamicCast((entry = dynamicCast(iterator.val$outerIter.next_0(), 58) , entry.getKey()), 164);
    if (row.index_0 >= range.startRow.index_0 && row.index_0 < range.startRow.index_0 + range.length_0) {
      splitranges = $split(range, row);
      !newRanges && (newRanges = new ArrayList_0);
      $addAll_0(newRanges, splitranges);
      iterator.val$outerIter.remove_1();
    }
  }
  !!newRanges && $addAll(this$static.selectedRowRanges, newRanges);
}

function $scrollByPagelenght(this$static, i){
  var newPixels, pixels;
  pixels = i * (parseInt(this$static.scrollBodyPanel.element_0['offsetHeight']) || 0);
  newPixels = $getScrollPosition(this$static.scrollBodyPanel) + pixels;
  newPixels < 0 && (newPixels = 0);
  $setScrollPosition(this$static.scrollBodyPanel, newPixels);
}

function $selectFirstRenderedRowInViewPort(this$static, focusOnly){
  var firstInViewport, index;
  index = this$static.firstRowInViewPort;
  firstInViewport = $getRowByRowIndex(this$static.scrollBody_0, index);
  if (!firstInViewport) {
    return;
  }
  $setRowFocus(this$static, firstInViewport);
  if (!focusOnly) {
    $selectFocusedRow(this$static, false, this$static.multiselectPending);
    this$static.sendSelectedRows(this$static.immediate);
  }
}

function $selectFocusedRow(this$static, ctrlSelect, shiftSelect){
  if (this$static.focusedRow) {
    if (this$static.selectMode > 0 && !ctrlSelect && !shiftSelect) {
      $deselectAll(this$static);
      $toggleSelection(this$static.focusedRow);
      this$static.selectionRangeStart = this$static.focusedRow;
    }
     else 
      this$static.selectMode > 0 && ctrlSelect && !shiftSelect?(this$static.selectionRangeStart = this$static.focusedRow):this$static.selectMode == 2 && !ctrlSelect && shiftSelect && $toggleShiftSelection(this$static.focusedRow, true);
  }
}

function $selectLastRenderedRowInViewPort(this$static, focusOnly){
  var index, lastRowInViewport;
  index = this$static.firstRowInViewPort + ~~Math.max(Math.min((parseInt(this$static.scrollBodyPanel.element_0['offsetHeight']) || 0) / $getRowHeight(this$static.scrollBody_0, false), 2147483647), -2147483648);
  lastRowInViewport = $getRowByRowIndex(this$static.scrollBody_0, index);
  if (!lastRowInViewport) {
    lastRowInViewport = $getRowByRowIndex(this$static.scrollBody_0, this$static.scrollBody_0.lastRendered);
    if (!lastRowInViewport) {
      return;
    }
  }
  $setRowFocus(this$static, lastRowInViewport);
  if (!focusOnly) {
    $selectFocusedRow(this$static, false, this$static.multiselectPending);
    this$static.sendSelectedRows(this$static.immediate);
  }
}

function $selectSelectedRows(this$static, uidl){
  var iterator, keyboardSelectionOverRowFetchInProgress, row, selected, selectedKeys;
  keyboardSelectionOverRowFetchInProgress = false;
  if (Boolean(uidl[1]['v']) && 'selected' in uidl[1]['v']) {
    selectedKeys = $getStringArrayVariableAsSet(uidl, 'selected');
    if (this$static.scrollBody_0) {
      iterator = $listIterator(this$static.scrollBody_0.renderedRows, 0);
      while (iterator.currentNode != iterator.this$0.header) {
        row = dynamicCast($next_7(iterator), 78);
        selected = selectedKeys.map.containsKey('' + row.rowKey);
        if (!selected && !!this$static.unSyncedselectionsBeforeRowFetch && this$static.unSyncedselectionsBeforeRowFetch.map.containsKey('' + row.rowKey)) {
          selected = true;
          keyboardSelectionOverRowFetchInProgress = true;
        }
        if (selected != row.selected_0) {
          $toggleSelection(row);
          this$static.selectMode != 1 && !selected && $removeRowFromUnsentSelectionRanges(this$static, row);
        }
      }
    }
  }
  this$static.unSyncedselectionsBeforeRowFetch = null;
  return keyboardSelectionOverRowFetchInProgress;
}

function $sendColumnWidthUpdates(this$static, columns){
  var cell, cell$iterator, ix, newSizes;
  newSizes = initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, columns.size_0, 0);
  ix = 0;
  for (cell$iterator = new AbstractList$IteratorImpl_0(columns); cell$iterator.i < cell$iterator.this$0_0.size_1();) {
    cell = dynamicCast($next_5(cell$iterator), 163);
    newSizes[ix++] = cell.cid + ':' + cell.width_0;
  }
  $updateVariable_2(this$static.client, this$static.paintableId, 'columnWidthUpdates', newSizes, false);
}

function $sendSelectedRows(this$static){
  this$static.sendSelectedRows(this$static.immediate);
}

function $sendSelectedRows_0(this$static, immediately){
  var iterator, key, range, range$iterator, ranges, renderedRowByKey, outerIter, entry, outerIter_0, entry_0, outerIter_1, entry_1;
  if (!this$static.selectionChanged) {
    return;
  }
  this$static.selectionChanged = false;
  if (this$static.selectMode == 2 && this$static.multiselectmode == 0) {
    ranges = new HashSet_0;
    for (range$iterator = (outerIter = $keySet(this$static.selectedRowRanges.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); range$iterator.val$outerIter.hasNext();) {
      range = dynamicCast((entry = dynamicCast(range$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 164);
      $add_14(ranges, '' + range.startRow.rowKey + '-' + range.length_0);
    }
    $updateVariable_2(this$static.client, this$static.paintableId, 'selectedRanges', dynamicCast($toArray(ranges, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, this$static.selectedRowRanges.map.size_1(), 0)), 59), false);
    for (iterator = (outerIter_0 = $keySet(this$static.selectedRowKeys.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter_0)); iterator.val$outerIter.hasNext();) {
      key = dynamicCast((entry_0 = dynamicCast(iterator.val$outerIter.next_0(), 58) , entry_0.getKey()), 1);
      renderedRowByKey = $getRenderedRowByKey(this$static, key);
      if (renderedRowByKey) {
        for (range$iterator = (outerIter_1 = $keySet(this$static.selectedRowRanges.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter_1)); range$iterator.val$outerIter.hasNext();) {
          range = dynamicCast((entry_1 = dynamicCast(range$iterator.val$outerIter.next_0(), 58) , entry_1.getKey()), 164);
          renderedRowByKey.index_0 >= range.startRow.index_0 && renderedRowByKey.index_0 < range.startRow.index_0 + range.length_0 && iterator.val$outerIter.remove_1();
        }
      }
       else {
        iterator.val$outerIter.remove_1();
      }
    }
  }
  $updateVariable_2(this$static.client, this$static.paintableId, 'selected', dynamicCast($toArray(this$static.selectedRowKeys, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, this$static.selectedRowKeys.map.size_1(), 0)), 59), immediately);
}

function $setCacheRate(this$static, d){
  if (this$static.cache_rate != d) {
    this$static.cache_rate = d;
    this$static.cache_react_rate = 0.75 * d;
  }
}

function $setColWidth(this$static, colIndex, w, isDefinedWidth){
  var fcell, hcell;
  hcell = $getHeaderCell(this$static.tHead, colIndex);
  w < $getMinWidth(hcell) && (w = $getMinWidth(hcell));
  $setWidth_10(hcell, w, isDefinedWidth);
  $resizeCaptionContainer_0(this$static.tHead, hcell);
  $setColWidth_0(this$static.scrollBody_0, colIndex, w);
  fcell = $getFooterCell(this$static.tFoot, colIndex);
  $setWidth_9(fcell, w, isDefinedWidth);
}

function $setContainerHeight(this$static){
  if (this$static.height_0 != null && !$equals_2('', this$static.height_0)) {
    this$static.containerHeight = parseInt(this$static.element_0['offsetHeight']) || 0;
    this$static.containerHeight -= this$static.showColHeaders?parseInt(this$static.tHead.element_0['offsetHeight']) || 0:0;
    this$static.containerHeight -= parseInt(this$static.tFoot.element_0['offsetHeight']) || 0;
    this$static.containerHeight -= $getContentAreaBorderHeight(this$static);
    this$static.containerHeight < 0 && (this$static.containerHeight = 0);
    this$static.scrollBodyPanel.element_0.style['height'] = this$static.containerHeight + 'px';
  }
}

function $setContentWidth_0(this$static, pixels){
  this$static.tHead.element_0.style['width'] = pixels + 'px';
  this$static.scrollBodyPanel.element_0.style['width'] = pixels + 'px';
  this$static.tFoot.element_0.style['width'] = pixels + 'px';
}

function $setProperTabIndex(this$static){
  var storedScrollLeft, storedScrollTop;
  storedScrollTop = 0;
  storedScrollLeft = 0;
  if ($getOperaVersion(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) >= 11) {
    storedScrollTop = $getScrollPosition(this$static.scrollBodyPanel);
    storedScrollLeft = $getScrollLeft(this$static.scrollBodyPanel.element_0);
  }
  this$static.tabIndex_0 == 0 && !$isFocusable(this$static)?$setTabIndex_0(this$static.scrollBodyPanel, -1):$setTabIndex_0(this$static.scrollBodyPanel, this$static.tabIndex_0);
  if ($getOperaVersion((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40)) >= 11) {
    $setScrollPosition(this$static.scrollBodyPanel, storedScrollTop);
    $setScrollLeft(this$static.scrollBodyPanel.element_0, storedScrollLeft);
  }
}

function $setRowFocus(this$static, row){
  if (this$static.selectMode <= 0) {
    return false;
  }
  !!this$static.focusedRow && this$static.focusedRow != row && (setStyleName(this$static.focusedRow.getStyleElement(), 'v-table-focus', false) , undefined);
  if (row) {
    setStyleName(row.getStyleElement(), 'v-table-focus', true);
    if (row == this$static.focusedRow) {
      return false;
    }
    this$static.focusedRow = row;
    $ensureRowIsVisible(row);
    return true;
  }
  return false;
}

function $sizeInit(this$static){
  var availW, bodyHeight, checksum, expandRatioDivider, extraSpace, fCell, firstInNewSet, footCells, footerWidth, hCell, hc, headCells, headerWidth, i, lastInNewSet, needsReLayout, needsSpaceForHorizontalSrollbar, newSpace, total, totalExplicitColumnsWidths, totalWidthR, w, widths, willHaveScrollbarz;
  headCells = new AbstractList$IteratorImpl_0(this$static.tHead.visibleCells);
  footCells = new AbstractList$IteratorImpl_0(this$static.tFoot.visibleCells);
  i = 0;
  totalExplicitColumnsWidths = 0;
  total = 0;
  expandRatioDivider = 0;
  widths = initDim(_3I_classLit, {30:1}, -1, this$static.tHead.visibleCells.size_0, 1);
  this$static.tHead.hTableContainer.style['width'] = '';
  this$static.tFoot.hTableContainer.style['width'] = '';
  while (headCells.i < headCells.this$0_0.size_1()) {
    hCell = dynamicCast($next_5(headCells), 163);
    fCell = dynamicCast($next_5(footCells), 165);
    w = hCell.width_0;
    if (hCell.definedWidth && hCell.width_0 >= 0) {
      totalExplicitColumnsWidths += w;
    }
     else {
      if (hCell.expandRatio > 0) {
        expandRatioDivider += hCell.expandRatio;
        w = 0;
      }
       else {
        headerWidth = $getNaturalColumnWidth_0(hCell, i);
        footerWidth = $getNaturalColumnWidth(fCell, i);
        w = headerWidth > footerWidth?headerWidth:footerWidth;
      }
      hCell.naturalWidth = w;
      fCell.naturalWidth = w;
    }
    widths[i] = w;
    total += w;
    ++i;
  }
  this$static.tHead.hTableContainer.style['width'] = 900000 + ($clinit_9() , 'px');
  this$static.tFoot.hTableContainer.style['width'] = '900000px';
  willHaveScrollbarz = $willHaveScrollbars(this$static);
  if (this$static.width_0 == null || $equals_2('', this$static.width_0)) {
    w = total;
    w += $getCellExtraWidth(this$static.scrollBody_0) * this$static.visibleColOrder.length;
    willHaveScrollbarz && (w += getNativeScrollbarSize());
    $setContentWidth_0(this$static, w);
  }
  availW = $getAvailableWidth_0(this$static.scrollBody_0);
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && (availW = $getAvailableWidth_0(this$static.scrollBody_0));
  availW -= $getCellExtraWidth(this$static.scrollBody_0) * this$static.visibleColOrder.length;
  willHaveScrollbarz && (availW -= getNativeScrollbarSize());
  needsReLayout = false;
  if (availW > total) {
    extraSpace = availW - total;
    totalWidthR = total - totalExplicitColumnsWidths;
    checksum = 0;
    needsReLayout = true;
    if (extraSpace == 1) {
      headCells = new AbstractList$IteratorImpl_0(this$static.tHead.visibleCells);
      i = 0;
      checksum = availW;
      while (headCells.i < headCells.this$0_0.size_1()) {
        hc = dynamicCast($next_5(headCells), 163);
        if (!(hc.definedWidth && hc.width_0 >= 0)) {
          ++widths[i];
          break;
        }
        ++i;
      }
    }
     else if (expandRatioDivider > 0) {
      headCells = new AbstractList$IteratorImpl_0(this$static.tHead.visibleCells);
      i = 0;
      while (headCells.i < headCells.this$0_0.size_1()) {
        hCell = dynamicCast($next_5(headCells), 163);
        if (hCell.expandRatio > 0) {
          w = widths[i];
          newSpace = Math.round(extraSpace * (hCell.expandRatio / expandRatioDivider));
          w += newSpace;
          widths[i] = w;
        }
        checksum += widths[i];
        ++i;
      }
    }
     else if (totalWidthR > 0) {
      headCells = new AbstractList$IteratorImpl_0(this$static.tHead.visibleCells);
      i = 0;
      while (headCells.i < headCells.this$0_0.size_1()) {
        hCell = dynamicCast($next_5(headCells), 163);
        if (!(hCell.definedWidth && hCell.width_0 >= 0)) {
          w = widths[i];
          newSpace = Math.round(extraSpace * w / totalWidthR);
          w += newSpace;
          widths[i] = w;
        }
        checksum += widths[i];
        ++i;
      }
    }
    if (extraSpace > 0 && checksum != availW) {
      headCells = new AbstractList$IteratorImpl_0(this$static.tHead.visibleCells);
      i = 0;
      while (headCells.i < headCells.this$0_0.size_1()) {
        hc = dynamicCast($next_5(headCells), 163);
        if (!(hc.definedWidth && hc.width_0 >= 0)) {
          widths[i] += availW - checksum;
          break;
        }
        ++i;
      }
    }
  }
  i = 0;
  headCells = new AbstractList$IteratorImpl_0(this$static.tHead.visibleCells);
  while (headCells.i < headCells.this$0_0.size_1()) {
    hCell = dynamicCast($next_5(headCells), 163);
    if (this$static.isNewBody || hCell.width_0 == -1) {
      w = widths[i];
      $setColWidth(this$static, i, w, false);
    }
    ++i;
  }
  this$static.initializedAndAttached = true;
  needsReLayout && $reLayoutComponents(this$static.scrollBody_0);
  $updatePageLength(this$static);
  if (this$static.height_0 == null || $equals_2('', this$static.height_0)) {
    this$static.pageLength == this$static.totalRows?(bodyHeight = $getRequiredHeight(this$static.scrollBody_0)):(bodyHeight = toInt(fromDouble(Math.round($getRowHeight(this$static.scrollBody_0, true) * this$static.pageLength))));
    needsSpaceForHorizontalSrollbar = total > availW;
    needsSpaceForHorizontalSrollbar && (bodyHeight += getNativeScrollbarSize());
    this$static.scrollBodyPanel.element_0.style['height'] = bodyHeight + 'px';
    runWebkitOverflowAutoFix(this$static.scrollBodyPanel.element_0);
  }
  this$static.isNewBody = false;
  this$static.firstvisible > 0 && $scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$9_0(this$static));
  if (this$static.enabled) {
    if (this$static.scrollBody_0.lastRendered + 1 < this$static.firstRowInViewPort + this$static.pageLength + ~~Math.max(Math.min(this$static.cache_react_rate, 2147483647), -2147483648) * this$static.pageLength) {
      if (this$static.totalRows - 1 > this$static.scrollBody_0.lastRendered) {
        firstInNewSet = this$static.scrollBody_0.lastRendered + 1;
        $setReqFirstRow(this$static.rowRequestHandler, firstInNewSet);
        lastInNewSet = ~~Math.max(Math.min(this$static.firstRowInViewPort + this$static.pageLength + this$static.cache_rate * this$static.pageLength, 2147483647), -2147483648);
        lastInNewSet > this$static.totalRows - 1 && (lastInNewSet = this$static.totalRows - 1);
        this$static.rowRequestHandler.reqRows = lastInNewSet - firstInNewSet + 1;
        $deferRowFetch(this$static.rowRequestHandler, 1);
      }
    }
  }
  $reLayoutComponents(this$static.scrollBody_0);
  $scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$10_0(this$static));
}

function $startScrollingVelocityTimer(this$static){
  if (!this$static.scrollingVelocityTimer) {
    this$static.scrollingVelocityTimer = new VScrollTable$13_0(this$static);
    $scheduleRepeating(this$static.scrollingVelocityTimer, 100);
  }
}

function $triggerLazyColumnAdjustment(this$static, now){
  $cancel_0(this$static.lazyAdjustColumnWidths);
  now?$run_1(this$static.lazyAdjustColumnWidths):$schedule(this$static.lazyAdjustColumnWidths, 300);
}

function $updateActionMap_0(this$static, mainUidl){
  var action, actionsUidl, caption, it, key, count;
  actionsUidl = $getChildByTagName(mainUidl, 'actions');
  if (!actionsUidl) {
    return;
  }
  it = new UIDL$1_0(actionsUidl);
  while (count = it.this$0.length - 2 , count > it.index_0 + 1) {
    action = dynamicCastJso($next_3(it));
    key = action[1]['key'];
    caption = action[1]['caption'];
    this$static.actionMap.put(key + '_c', caption);
    'icon' in action[1]?this$static.actionMap.put(key + '_i', $translateVaadinUri(this$static.client, action[1]['icon'])):this$static.actionMap.remove_4(key + '_i');
  }
}

function $updateBody(this$static, uidl, firstRow, reqRows){
  if (!uidl || reqRows < 1) {
    if (firstRow <= 0) {
      while (this$static.scrollBody_0.lastRendered > this$static.scrollBody_0.firstRendered) {
        $unlinkRow(this$static.scrollBody_0, false);
      }
      $unlinkRow(this$static.scrollBody_0, false);
    }
    return;
  }
  $renderRows(this$static.scrollBody_0, uidl, firstRow, reqRows);
  $discardRowsOutsideCacheWindow(this$static);
}

function $updateCollapsedColumns(this$static, uidl){
  if (Boolean(uidl[1]['v']) && 'collapsedcolumns' in uidl[1]['v']) {
    $setColumnCollapsingAllowed(this$static.tHead, true);
    this$static.collapsedColumns = $getStringArrayVariableAsSet(uidl, 'collapsedcolumns');
  }
   else {
    $setColumnCollapsingAllowed(this$static.tHead, false);
  }
}

function $updateColumnOrder(this$static, uidl){
  if (Boolean(uidl[1]['v']) && 'columnorder' in uidl[1]['v']) {
    this$static.columnReordering = true;
    this$static.columnOrder = $getStringArray(uidl[1]['v'], 'columnorder');
  }
   else {
    this$static.columnReordering = false;
    this$static.columnOrder = null;
  }
}

function $updateColumnProperties(this$static, uidl){
  var vc;
  $updateColumnOrder(this$static, uidl);
  $updateCollapsedColumns(this$static, uidl);
  vc = $getChildByTagName(uidl, 'visiblecolumns');
  if (vc) {
    $updateCellsFromUIDL_0(this$static.tHead, vc);
    $updateCellsFromUIDL(this$static.tFoot, vc);
  }
  $updateHeader(this$static, $getStringArray(uidl[1], 'vcolorder'));
  $updateFooter(this$static, $getStringArray(uidl[1], 'vcolorder'));
}

function $updateFirstVisibleAndScrollIfNeeded(this$static, uidl){
  this$static.firstvisible = Boolean(uidl[1]['v']) && 'firstvisible' in uidl[1]['v']?uidl[1]['v']['firstvisible']:0;
  if (this$static.firstvisible != this$static.lastRequestedFirstvisible && !!this$static.scrollBody_0) {
    this$static.firstRowInViewPort = this$static.firstvisible;
    $setScrollPosition(this$static.scrollBodyPanel, $measureRowHeightOffset(this$static, this$static.firstvisible));
  }
}

function $updateFooter(this$static, strings){
  var cid, colIndex, i;
  if (strings == null) {
    return;
  }
  colIndex = 0;
  if (this$static.showRowHeaders) {
    $enableColumn(this$static.tFoot, '0', 0);
    ++colIndex;
  }
   else {
    $removeCell(this$static.tFoot, '0');
  }
  for (i = 0; i < strings.length; ++i) {
    cid = strings[i];
    $enableColumn(this$static.tFoot, cid, colIndex);
    ++colIndex;
  }
  this$static.tFoot.element_0.style.display = this$static.showColFooters?'':'none';
}

function $updateFromUIDL_19(this$static, uidl, client){
  var ac, keyboardSelectionOverRowFetchInProgress, partialRowAdditions, partialRowUpdates, previousTotalRows, row, rowData, savedContextMenu, totalRowsChanged, w, w$iterator, oldPageLength, oldSortedHeader, sortedHeader;
  this$static.rendering = true;
  !this$static.client && $addHandler($getContextMenu(client), new VScrollTable$7_0(this$static), TYPE_18?TYPE_18:(TYPE_18 = new GwtEvent$Type_0));
  savedContextMenu = this$static.contextMenu;
  if ('pb-ft' in uidl[1]) {
    this$static.serverCacheFirst = uidl[1]['pb-ft'];
    this$static.serverCacheLast = uidl[1]['pb-l'];
  }
   else {
    this$static.serverCacheFirst = -1;
    this$static.serverCacheLast = -1;
  }
  'colfooters' in uidl[1] && (this$static.showColFooters = Boolean(uidl[1]['colfooters']));
  this$static.tFoot.element_0.style.display = this$static.showColFooters?'':'none';
  if ($updateComponent(client, this$static, uidl, true)) {
    this$static.rendering = false;
    return;
  }
  this$static.enabled = !('disabled' in uidl[1]);
  $isIE8(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && !this$static.enabled?(this$static.scrollBodyPanel.element_0.style['position'] = ($clinit_8() , 'static') , undefined):$isIE8((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40)) && (this$static.scrollBodyPanel.element_0.style['position'] = ($clinit_8() , 'relative') , undefined);
  this$static.client = client;
  this$static.paintableId = uidl[1]['id'];
  this$static.immediate = Boolean(uidl[1]['immediate']);
  previousTotalRows = this$static.totalRows;
  this$static.updateTotalRows(uidl);
  totalRowsChanged = this$static.totalRows != previousTotalRows;
  this$static.dragmode = 'dragmode' in uidl[1]?uidl[1]['dragmode']:0;
  (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isIE && (this$static.dragmode > 0?(this$static.element_0['onselectstart'] = getPreventTextSelectionIEHack() , undefined):(this$static.element_0['onselectstart'] = null , undefined));
  (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).touchDevice?(this$static.multiselectmode = 1):(this$static.multiselectmode = 'multiselectmode' in uidl[1]?uidl[1]['multiselectmode']:0);
  this$static.nullSelectionAllowed = !('nsa' in uidl[1]) || Boolean(uidl[1]['nsa']);
  'selectmode' in uidl[1] && (Boolean(uidl[1]['readonly'])?(this$static.selectMode = 0):$equals_2(uidl[1]['selectmode'], 'multi')?(this$static.selectMode = 2):$equals_2(uidl[1]['selectmode'], 'single')?(this$static.selectMode = 1):(this$static.selectMode = 0));
  'alb' in uidl[1]?(this$static.bodyActionKeys = $getStringArray(uidl[1], 'alb')):(this$static.bodyActionKeys = null);
  $setCacheRate(this$static, 'cr' in uidl[1]?uidl[1]['cr']:2);
  this$static.recalcWidths = 'recalcWidths' in uidl[1];
  if (this$static.recalcWidths) {
    $clear_5(this$static.tHead);
    $clear_4(this$static.tFoot);
  }
  oldPageLength = this$static.pageLength;
  'pagelength' in uidl[1]?(this$static.pageLength = uidl[1]['pagelength']):(this$static.pageLength = this$static.totalRows);
  oldPageLength != this$static.pageLength && this$static.initializedAndAttached && $sizeInit(this$static);
  $updateFirstVisibleAndScrollIfNeeded(this$static, uidl);
  this$static.showRowHeaders = Boolean(uidl[1]['rowheaders']);
  this$static.showColHeaders = Boolean(uidl[1]['colheaders']);
  $updateSortingProperties(this$static, uidl);
  keyboardSelectionOverRowFetchInProgress = $selectSelectedRows(this$static, uidl);
  $updateActionMap_0(this$static, uidl);
  $updateColumnProperties(this$static, uidl);
  ac = $getChildByTagName(uidl, '-ac');
  if (!ac) {
    !!this$static.dropHandler && (this$static.dropHandler = null);
  }
   else {
    !this$static.dropHandler && (this$static.dropHandler = new VScrollTable$VScrollTableDropHandler_0(this$static));
    $updateAcceptRules(this$static.dropHandler, ac);
  }
  partialRowAdditions = $getChildByTagName(uidl, 'prows');
  partialRowUpdates = $getChildByTagName(uidl, 'urows');
  if (!!partialRowUpdates || !!partialRowAdditions) {
    $cancel_0(this$static.rowRequestHandler);
    $updateRowsInBody(this$static, partialRowUpdates);
    this$static.addAndRemoveRows(partialRowAdditions);
  }
   else {
    rowData = $getChildByTagName(uidl, 'rows');
    if (rowData) {
      $cancel_0(this$static.rowRequestHandler);
      if (!this$static.recalcWidths && this$static.initializedAndAttached) {
        $updateBody(this$static, rowData, uidl[1]['firstrow'], uidl[1]['rows']);
        this$static.headerChangedDuringUpdate?($cancel_0(this$static.lazyAdjustColumnWidths) , $run_1(this$static.lazyAdjustColumnWidths)):(!(!!this$static.scrollPositionElement && !$equals_2(this$static.scrollPositionElement.style['display'], ($clinit_4() , NONE_0).name_0)) || totalRowsChanged || this$static.lastRenderedHeight != (parseInt(this$static.scrollBody_0.element_0['offsetHeight']) || 0)) && $scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$8_0(this$static));
      }
       else {
        $initializeRows(this$static, uidl, rowData);
      }
    }
  }
  if (this$static.enabled && !!savedContextMenu) {
    for (w$iterator = $listIterator(this$static.scrollBody_0.renderedRows, 0); w$iterator.currentNode != w$iterator.this$0.header;) {
      w = dynamicCast($next_7(w$iterator), 70);
      row = dynamicCast(w, 78);
      if (row.element_0.style.display != 'none' && $equals_2('' + row.rowKey, savedContextMenu.rowKey)) {
        this$static.contextMenu = savedContextMenu;
        $showAt_0($getContextMenu(client), row, savedContextMenu.left_0, savedContextMenu.top_0);
      }
    }
  }
  this$static.selectMode > 0?(setStyleName(this$static.scrollBody_0.getStyleElement(), 'v-table-body-noselection', false) , undefined):(setStyleName(this$static.scrollBody_0.getStyleElement(), 'v-table-body-noselection', true) , undefined);
  !!this$static.scrollPositionElement && (this$static.scrollPositionElement.style['display'] = 'none' , undefined);
  $purgeUnregistryBag_0(this$static);
  keyboardSelectionOverRowFetchInProgress || (this$static.selectionChanged = false);
  if (this$static.selectFirstItemInNextRender || this$static.focusFirstItemInNextRender) {
    $selectFirstRenderedRowInViewPort(this$static, this$static.focusFirstItemInNextRender);
    this$static.selectFirstItemInNextRender = this$static.focusFirstItemInNextRender = false;
  }
  if (this$static.selectLastItemInNextRender || this$static.focusLastItemInNextRender) {
    $selectLastRenderedRowInViewPort(this$static, this$static.focusLastItemInNextRender);
    this$static.selectLastItemInNextRender = this$static.focusLastItemInNextRender = false;
  }
  this$static.multiselectPending = false;
  !!this$static.focusedRow && !this$static.focusedRow.attached && !this$static.rowRequestHandler.isRunning && $focusRowFromBody(this$static);
  this$static.tabIndex_0 = 'tabindex' in uidl[1]?uidl[1]['tabindex']:0;
  $setProperTabIndex(this$static);
  sortedHeader = dynamicCast(this$static.tHead.availableCells.get_0(this$static.sortColumn), 163);
  !!sortedHeader && $resizeCaptionContainer_0(this$static.tHead, sortedHeader);
  oldSortedHeader = dynamicCast(this$static.tHead.availableCells.get_0(this$static.oldSortColumn), 163);
  !!oldSortedHeader && $resizeCaptionContainer_0(this$static.tHead, oldSortedHeader);
  this$static.lastRenderedHeight = parseInt(this$static.scrollBody_0.element_0['offsetHeight']) || 0;
  this$static.rendering = false;
  this$static.headerChangedDuringUpdate = false;
}

function $updateHeader(this$static, strings){
  var cid, colIndex, i, visibleCols;
  if (strings == null) {
    return;
  }
  visibleCols = strings.length;
  colIndex = 0;
  if (this$static.showRowHeaders) {
    $enableColumn_0(this$static.tHead, '0', 0);
    ++visibleCols;
    this$static.visibleColOrder = initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, visibleCols, 0);
    this$static.visibleColOrder[0] = '0';
    ++colIndex;
  }
   else {
    this$static.visibleColOrder = initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, visibleCols, 0);
    $removeCell_0(this$static.tHead, '0');
  }
  for (i = 0; i < strings.length; ++i) {
    cid = strings[i];
    this$static.visibleColOrder[colIndex] = cid;
    $enableColumn_0(this$static.tHead, cid, colIndex);
    ++colIndex;
  }
  this$static.tHead.element_0.style.display = this$static.showColHeaders?'':'none';
  $setContainerHeight(this$static);
}

function $updatePageLength(this$static){
  var anotherPartlyVisible, bodyH, currentlyVisible, rowHeight, rowsAtOnce;
  if (!(this$static.element_0.style.display != 'none') || !this$static.enabled) {
    return;
  }
  if (!this$static.scrollBody_0) {
    return;
  }
  if (this$static.height_0 == null || $equals_2(this$static.height_0, '')) {
    return;
  }
  rowHeight = toInt(fromDouble(Math.round($getRowHeight(this$static.scrollBody_0, false))));
  bodyH = parseInt(this$static.scrollBodyPanel.element_0['offsetHeight']) || 0;
  rowsAtOnce = ~~(bodyH / rowHeight);
  anotherPartlyVisible = bodyH % rowHeight != 0;
  anotherPartlyVisible && ++rowsAtOnce;
  if (this$static.pageLength != rowsAtOnce) {
    this$static.pageLength = rowsAtOnce;
    $addVariableToQueue(this$static.client, this$static.paintableId, 'pagelength', '' + this$static.pageLength, false, 105);
    if (!this$static.rendering) {
      currentlyVisible = this$static.scrollBody_0.lastRendered - this$static.scrollBody_0.firstRendered;
      if (currentlyVisible < this$static.pageLength && currentlyVisible < this$static.totalRows) {
        $setScrollPosition(this$static.scrollBodyPanel, this$static.scrollTop_0 + 1);
        $setScrollPosition(this$static.scrollBodyPanel, this$static.scrollTop_0 - 1);
      }
    }
  }
}

function $updateRowsInBody(this$static, partialRowUpdates){
  var count, firstRowIx;
  if (!partialRowUpdates) {
    return;
  }
  firstRowIx = partialRowUpdates[1]['firsturowix'];
  count = partialRowUpdates[1]['numurows'];
  $unlinkRows(this$static.scrollBody_0, firstRowIx, count);
  $insertRows(this$static.scrollBody_0, partialRowUpdates, firstRowIx, count);
}

function $updateSortingProperties(this$static, uidl){
  this$static.oldSortColumn = this$static.sortColumn;
  if (Boolean(uidl[1]['v']) && 'sortascending' in uidl[1]['v']) {
    this$static.sortAscending = Boolean(uidl[1]['v']['sortascending']);
    this$static.sortColumn = uidl[1]['v']['sortcolumn'];
  }
}

function $willHaveScrollbars(this$static){
  var availableHeight, fakeheight;
  if (this$static.height_0 != null && !$equals_2(this$static.height_0, '')) {
    fakeheight = toInt(fromDouble(Math.round($getRowHeight(this$static.scrollBody_0, false) * this$static.totalRows)));
    availableHeight = parseInt(this$static.scrollBodyPanel.element_0['clientHeight']) || 0;
    if (fakeheight > availableHeight) {
      return true;
    }
  }
   else {
    if (this$static.pageLength < this$static.totalRows) {
      return true;
    }
  }
  return false;
}

function VScrollTable_0(){
  FlowPanel_0.call(this);
  this.cache_react_rate = 0.75 * this.cache_rate;
  this.selectedRowKeys = new HashSet_0;
  this.selectedRowRanges = new HashSet_0;
  this.tHead = new VScrollTable$TableHead_0(this);
  this.tFoot = new VScrollTable$TableFooter_0(this);
  this.scrollBodyPanel = new FocusableScrollPanel_1;
  this.navKeyPressHandler = new VScrollTable$1_0(this);
  this.navKeyUpHandler = new VScrollTable$2_0(this);
  this.navKeyDownHandler = new VScrollTable$3_0(this);
  this.actionMap = new HashMap_0;
  this.lazyUnregistryBag = new ArrayList_0;
  this.lazyAdjustColumnWidths = new VScrollTable$4_0(this);
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).touchDevice?(this.multiselectmode = 1):(this.multiselectmode = 0);
  this.scrollBodyPanel.getStyleElement()['className'] = 'v-table-body-wrapper';
  $addDomHandler(this.scrollBodyPanel, this, ($clinit_18() , $clinit_18() , TYPE_4));
  $addDomHandler(this.scrollBodyPanel, this, ($clinit_13() , $clinit_13() , TYPE));
  $addDomHandler(this.scrollBodyPanel, this, ($clinit_27() , $clinit_27() , TYPE_13));
  this.scrollBodyPanel.getStyleElement()['className'] = 'v-table-body';
  (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isGecko?$addDomHandler(this.scrollBodyPanel, this.navKeyPressHandler, ($clinit_20() , $clinit_20() , TYPE_6)):$addDomHandler(this.scrollBodyPanel, this.navKeyDownHandler, ($clinit_19() , $clinit_19() , TYPE_5));
  $addDomHandler(this.scrollBodyPanel, this.navKeyUpHandler, ($clinit_21() , $clinit_21() , TYPE_7));
  $sinkEvents_0(this.scrollBodyPanel, 15728640);
  $addDomHandler(this.scrollBodyPanel, new VScrollTable$5_0(this), ($clinit_31() , $clinit_31() , TYPE_17));
  $sinkEvents_0(this.scrollBodyPanel, 262144);
  $addDomHandler(this.scrollBodyPanel, new VScrollTable$6_0(this), ($clinit_16() , $clinit_16() , TYPE_2));
  this.setStyleName('v-table');
  $add_0(this, this.tHead, this.element_0);
  $add_0(this, this.scrollBodyPanel, this.element_0);
  $add_0(this, this.tFoot, this.element_0);
  this.rowRequestHandler = new VScrollTable$RowRequestHandler_0(this);
}

function getPreventTextSelectionIEHack(){
  return function(){
    return false;
  }
  ;
}

function VScrollTable(){
}

_ = VScrollTable_0.prototype = VScrollTable.prototype = new FlowPanel;
_.addAndRemoveRows = function addAndRemoveRows(partialRowAdditions){
  $addAndRemoveRows(this, partialRowAdditions);
}
;
_.buildCaptionHtmlSnippet = function buildCaptionHtmlSnippet(uidl){
  return $buildCaptionHtmlSnippet(this, uidl);
}
;
_.createScrollBody = function createScrollBody(){
  return new VScrollTable$VScrollTableBody_0(this);
}
;
_.focus_0 = function focus_16(){
  $isFocusable(this) && $setFocus_2(this.scrollBodyPanel, true);
}
;
_.getActions = function getActions(){
  var actionKey, actions, bodyAction, i;
  if (this.bodyActionKeys == null) {
    return initValues(_3Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit, {30:1, 35:1}, 102, []);
  }
  actions = initDim(_3Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit, {30:1, 35:1}, 102, this.bodyActionKeys.length, 0);
  for (i = 0; i < actions.length; ++i) {
    actionKey = this.bodyActionKeys[i];
    bodyAction = new TreeAction_0(this, null, actionKey);
    bodyAction.caption_0 = dynamicCast(this.actionMap.get_0(actionKey + '_c'), 1);
    bodyAction.iconUrl = dynamicCast(this.actionMap.get_0(actionKey + '_i'), 1);
    setCheck(actions, i, bodyAction);
  }
  return actions;
}
;
_.getClass$ = function getClass_690(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable_2_classLit;
}
;
_.getClient = function getClient(){
  return this.client;
}
;
_.getDropHandler = function getDropHandler_0(){
  return this.dropHandler;
}
;
_.getPaintableId = function getPaintableId(){
  return this.paintableId;
}
;
_.handleNavigation = function handleNavigation(keycode, ctrl, shift){
  return $handleNavigation_1(this, keycode, ctrl, shift);
}
;
_.onAttach = function onAttach_9(){
  $onAttach(this);
  this.initialContentReceived && $sizeInit(this);
}
;
_.onBlur = function onBlur_9(event_0){
  var focusedElement;
  this.hasFocus = false;
  this.navKeyDown = false;
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE) {
    focusedElement = getIEFocusedElement();
    if (getPaintableForElement(this.client, this.parent_0, focusedElement) == this) {
      $isFocusable(this) && $setFocus_2(this.scrollBodyPanel, true);
      return;
    }
  }
  $isFocusable(this) && $setRowFocus(this, null);
}
;
_.onDetach = function onDetach_15(){
  var parent_0, parent_1;
  $cancel_0(this.rowRequestHandler);
  $onDetach(this);
  if (this.scrollPositionElement) {
    parent_0 = (parent_1 = this.scrollPositionElement.parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1);
    !!parent_0 && parent_0.removeChild(this.scrollPositionElement);
  }
}
;
_.onFocus = function onFocus_9(event_0){
  if ($isFocusable(this)) {
    this.hasFocus = true;
    !this.focusedRow?$focusRowFromBody(this):$setRowFocus(this, this.focusedRow);
  }
}
;
_.onScroll = function onScroll_3(event_0){
  $onScroll(this, event_0);
}
;
_.reOrderColumn = function reOrderColumn(columnKey, newIndex){
  $reOrderColumn(this, columnKey, newIndex);
}
;
_.sendSelectedRows = function sendSelectedRows(immediately){
  $sendSelectedRows_0(this, immediately);
}
;
_.setHeight = function setHeight_21(height){
  this.height_0 = height;
  this.element_0.style['height'] = height;
  $setContainerHeight(this);
  this.initializedAndAttached && $updatePageLength(this);
  this.rendering || runWebkitOverflowAutoFix(this.scrollBodyPanel.element_0);
  $setProperTabIndex(this);
}
;
_.setVisible = function setVisible_5(visible){
  if (this.element_0.style.display != 'none' != visible) {
    this.element_0.style.display = visible?'':'none';
    this.initializedAndAttached && visible && $scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$11_0(this));
  }
}
;
_.setWidth = function setWidth_30(width){
  var innerPixels;
  if ($equals_2(this.width_0, width)) {
    return;
  }
  if (!(this.element_0.style.display != 'none')) {
    return;
  }
  this.width_0 = width;
  if (width != null && !$equals_2('', width)) {
    this.element_0.style['width'] = width;
    innerPixels = (parseInt(this.element_0['offsetWidth']) || 0) - $getBorderWidth(this);
    innerPixels < 0 && (innerPixels = 0);
    $setContentWidth_0(this, innerPixels);
    $cancel_0(this.lazyAdjustColumnWidths);
    $schedule(this.lazyAdjustColumnWidths, 300);
  }
   else {
    this.element_0.style['width'] = '';
    $sizeInit(this);
    $cancel_0(this.lazyAdjustColumnWidths);
    $schedule(this.lazyAdjustColumnWidths, 300);
  }
  $setProperTabIndex(this);
}
;
_.updateFromUIDL = function updateFromUIDL_44(uidl, client){
  $updateFromUIDL_19(this, uidl, client);
}
;
_.updateTotalRows = function updateTotalRows(uidl){
  var newTotalRows;
  newTotalRows = uidl[1]['totalrows'];
  if (newTotalRows != this.totalRows) {
    if (this.scrollBody_0) {
      if (this.totalRows == 0) {
        $clear_5(this.tHead);
        $clear_4(this.tFoot);
      }
      this.initializedAndAttached = false;
      this.initialContentReceived = false;
      this.isNewBody = true;
    }
    this.totalRows = newTotalRows;
  }
}
;
_.castableTypeMap$ = {5:1, 6:1, 8:1, 10:1, 12:1, 13:1, 15:1, 20:1, 21:1, 22:1, 25:1, 26:1, 27:1, 33:1, 69:1, 70:1, 75:1, 115:1, 180:1};
_.bodyActionKeys = null;
_.borderWidth = -1;
_.cache_rate = 2;
_.client = null;
_.collapsedColumns = null;
_.columnOrder = null;
_.columnReordering = false;
_.containerHeight = 0;
_.contentAreaBorderHeight = -1;
_.contextMenu = null;
_.dragmode = 0;
_.dropHandler = null;
_.enabled = false;
_.firstRowInViewPort = 0;
_.firstvisible = 0;
_.focusFirstItemInNextRender = false;
_.focusLastItemInNextRender = false;
_.focusedRow = null;
_.hasFocus = false;
_.headerChangedDuringUpdate = false;
_.height_0 = null;
_.immediate = false;
_.initialContentReceived = false;
_.initializedAndAttached = false;
_.isNewBody = true;
_.lastRenderedHeight = 0;
_.lastRequestedFirstvisible = 0;
_.multiselectPending = false;
_.multiselectmode = 0;
_.navKeyDown = false;
_.nullSelectionAllowed = true;
_.oldSortColumn = null;
_.pageLength = 15;
_.paintableId = null;
_.recalcWidths = false;
_.rendering = false;
_.rowRequestHandler = null;
_.scrollBody_0 = null;
_.scrollLeft_0 = 0;
_.scrollPositionElement = null;
_.scrollTop_0 = 0;
_.scrollingVelocity = 10;
_.scrollingVelocityTimer = null;
_.selectFirstItemInNextRender = false;
_.selectLastItemInNextRender = false;
_.selectMode = 0;
_.selectionChanged = false;
_.selectionRangeStart = null;
_.serverCacheFirst = -1;
_.serverCacheLast = -1;
_.showColFooters = false;
_.showColHeaders = false;
_.showRowHeaders = false;
_.sortAscending = false;
_.sortColumn = null;
_.tabIndex_0 = 0;
_.totalRows = 0;
_.touchScrollDelegate = null;
_.unSyncedselectionsBeforeRowFetch = null;
_.visibleColOrder = null;
_.width_0 = '';
function VScrollTable$1_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$1(){
}

_ = VScrollTable$1_0.prototype = VScrollTable$1.prototype = new Object_0;
_.getClass$ = function getClass_691(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$1_2_classLit;
}
;
_.onKeyPress = function onKeyPress_2(keyPressEvent){
  var event_0, keyCode;
  if (!($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isGecko) {
    return;
  }
  event_0 = keyPressEvent.nativeEvent;
  if (this.this$0.enabled) {
    if (this.this$0.hasFocus) {
      keyCode = event_0.keyCode || 0;
      keyCode == 0 && (event_0.charCode || 0) == 32 && (keyCode = 32);
      this.this$0.handleNavigation(keyCode, !!event_0.ctrlKey || !!event_0.metaKey, !!event_0.shiftKey) && (event_0.preventDefault() , undefined);
      $startScrollingVelocityTimer(this.this$0);
    }
  }
   else {
    event_0.preventDefault();
  }
}
;
_.castableTypeMap$ = {12:1, 43:1};
_.this$0 = null;
function VScrollTable$10_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$10(){
}

_ = VScrollTable$10_0.prototype = VScrollTable$10.prototype = new Object_0;
_.execute_0 = function execute_41(){
  runWebkitOverflowAutoFix(this.this$0.scrollBodyPanel.element_0);
}
;
_.getClass$ = function getClass_692(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$10_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VScrollTable$11_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$11(){
}

_ = VScrollTable$11_0.prototype = VScrollTable$11.prototype = new Object_0;
_.execute_0 = function execute_42(){
  $setScrollPosition(this.this$0.scrollBodyPanel, $measureRowHeightOffset(this.this$0, this.this$0.firstRowInViewPort));
}
;
_.getClass$ = function getClass_693(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$11_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VScrollTable$12_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$12(){
}

_ = VScrollTable$12_0.prototype = VScrollTable$12.prototype = new Object_0;
_.execute_0 = function execute_43(){
  $onScroll(this.this$0, null);
}
;
_.getClass$ = function getClass_694(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$12_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VScrollTable$13_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function VScrollTable$13(){
}

_ = VScrollTable$13_0.prototype = VScrollTable$13.prototype = new Timer;
_.getClass$ = function getClass_695(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$13_2_classLit;
}
;
_.run = function run_31(){
  ++this.this$0.scrollingVelocity;
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
function VScrollTable$14_0(this$0, val$currentlyFocusedRow){
  this.this$0 = this$0;
  this.val$currentlyFocusedRow = val$currentlyFocusedRow;
}

function VScrollTable$14(){
}

_ = VScrollTable$14_0.prototype = VScrollTable$14.prototype = new Object_0;
_.execute_0 = function execute_44(){
  if (this.val$currentlyFocusedRow) {
    $setRowFocus(this.this$0, this.val$currentlyFocusedRow);
  }
   else {
    impl_2.log_0('no row?');
    $focusRowFromBody(this.this$0);
  }
  $ensureFocus(this.this$0.scrollBody_0);
}
;
_.getClass$ = function getClass_696(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$14_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$0 = null;
_.val$currentlyFocusedRow = null;
function VScrollTable$2_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$2(){
}

_ = VScrollTable$2_0.prototype = VScrollTable$2.prototype = new Object_0;
_.getClass$ = function getClass_697(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$2_2_classLit;
}
;
_.onKeyUp = function onKeyUp_2(keyUpEvent){
  var event_0, keyCode;
  event_0 = keyUpEvent.nativeEvent;
  keyCode = event_0.keyCode || 0;
  if ($isFocusable(this.this$0)) {
    if (keyCode == 38 || keyCode == 37 || keyCode == 39 || keyCode == 40 || keyCode == 33 || keyCode == 34 || keyCode == 35 || keyCode == 36) {
      if (keyCode == 40 || keyCode == 38) {
        !event_0.shiftKey && !event_0.ctrlKey && $instructServerToForgetPreviousSelections(this.this$0);
        $sendSelectedRows(this.this$0);
      }
      $cancelScrollingVelocityTimer(this.this$0);
      this.this$0.navKeyDown = false;
    }
  }
   else {
    $cancelScrollingVelocityTimer(this.this$0);
  }
}
;
_.castableTypeMap$ = {12:1, 44:1};
_.this$0 = null;
function VScrollTable$3_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$3(){
}

_ = VScrollTable$3_0.prototype = VScrollTable$3.prototype = new Object_0;
_.getClass$ = function getClass_698(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$3_2_classLit;
}
;
_.onKeyDown = function onKeyDown_6(keyDownEvent){
  var event_0;
  event_0 = keyDownEvent.nativeEvent;
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isGecko) {
    return;
  }
  if (this.this$0.enabled) {
    if (this.this$0.hasFocus) {
      if (this.this$0.handleNavigation(event_0.keyCode || 0, !!event_0.ctrlKey || !!event_0.metaKey, !!event_0.shiftKey)) {
        this.this$0.navKeyDown = true;
        event_0.preventDefault();
      }
      $startScrollingVelocityTimer(this.this$0);
    }
  }
   else {
    event_0.preventDefault();
  }
}
;
_.castableTypeMap$ = {7:1, 12:1};
_.this$0 = null;
function $run_1(this$static){
  var availW, bodyHeight, checksum, colIndex, expandRatioDivider, extraSpace, hCell, hc, headCells, heightBefore, needsSpaceForHorizontalScrollbar, newSpace, totalExplicitColumnsWidths, totalUndefinedNaturalWidths, usedMinimumWidth, visibleCellCount, w;
  if (!this$static.this$0.scrollBody_0) {
    $triggerLazyColumnAdjustment(this$static.this$0, false);
    return;
  }
  headCells = new AbstractList$IteratorImpl_0(this$static.this$0.tHead.visibleCells);
  usedMinimumWidth = 0;
  totalExplicitColumnsWidths = 0;
  expandRatioDivider = 0;
  colIndex = 0;
  while (headCells.i < headCells.this$0_0.size_1()) {
    hCell = dynamicCast($next_5(headCells), 163);
    if (hCell.definedWidth && hCell.width_0 >= 0) {
      totalExplicitColumnsWidths += hCell.width_0;
      usedMinimumWidth += hCell.width_0;
    }
     else {
      usedMinimumWidth += $getNaturalColumnWidth_0(hCell, colIndex);
      expandRatioDivider += hCell.expandRatio;
    }
    ++colIndex;
  }
  $getAvailableWidth_0(this$static.this$0.scrollBody_0);
  availW = $getAvailableWidth_0(this$static.this$0.scrollBody_0);
  visibleCellCount = this$static.this$0.tHead.visibleCells.size_0;
  availW -= $getCellExtraWidth(this$static.this$0.scrollBody_0) * visibleCellCount;
  $willHaveScrollbars(this$static.this$0) && (availW -= getNativeScrollbarSize());
  extraSpace = availW - usedMinimumWidth;
  extraSpace < 0 && (extraSpace = 0);
  totalUndefinedNaturalWidths = usedMinimumWidth - totalExplicitColumnsWidths;
  colIndex = 0;
  headCells = new AbstractList$IteratorImpl_0(this$static.this$0.tHead.visibleCells);
  checksum = 0;
  while (headCells.i < headCells.this$0_0.size_1()) {
    hCell = dynamicCast($next_5(headCells), 163);
    if (hCell.definedWidth && hCell.width_0 >= 0) {
      checksum += hCell.width_0;
    }
     else {
      w = $getNaturalColumnWidth_0(hCell, colIndex);
      expandRatioDivider > 0?(newSpace = Math.round(w + extraSpace * hCell.expandRatio / expandRatioDivider)):totalUndefinedNaturalWidths != 0?(newSpace = Math.round(w + extraSpace * w / totalUndefinedNaturalWidths)):(newSpace = w);
      checksum += newSpace;
      $setColWidth(this$static.this$0, colIndex, newSpace, false);
    }
    ++colIndex;
  }
  if (extraSpace > 0 && checksum != availW) {
    headCells = new AbstractList$IteratorImpl_0(this$static.this$0.tHead.visibleCells);
    colIndex = 0;
    while (headCells.i < headCells.this$0_0.size_1()) {
      hc = dynamicCast($next_5(headCells), 163);
      if (!(hc.definedWidth && hc.width_0 >= 0)) {
        $setColWidth(this$static.this$0, colIndex, hc.width_0 + availW - checksum, false);
        break;
      }
      ++colIndex;
    }
  }
  if ((this$static.this$0.height_0 == null || $equals_2('', this$static.this$0.height_0)) && this$static.this$0.totalRows == this$static.this$0.pageLength) {
    bodyHeight = $getRequiredHeight(this$static.this$0.scrollBody_0);
    needsSpaceForHorizontalScrollbar = availW < usedMinimumWidth;
    needsSpaceForHorizontalScrollbar && (bodyHeight += getNativeScrollbarSize());
    heightBefore = parseInt(this$static.this$0.element_0['offsetHeight']) || 0;
    this$static.this$0.scrollBodyPanel.element_0.style['height'] = bodyHeight + 'px';
    heightBefore != (parseInt(this$static.this$0.element_0['offsetHeight']) || 0) && notifyParentOfSizeChange(this$static.this$0, false);
  }
  $reLayoutComponents(this$static.this$0.scrollBody_0);
  $scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$4$1_0(this$static));
  $forceRealignColumnHeaders(this$static.this$0);
}

function VScrollTable$4_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function VScrollTable$4(){
}

_ = VScrollTable$4_0.prototype = VScrollTable$4.prototype = new Timer;
_.getClass$ = function getClass_699(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$4_2_classLit;
}
;
_.run = function run_32(){
  $run_1(this);
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
function VScrollTable$4$1_0(this$1){
  this.this$1 = this$1;
}

function VScrollTable$4$1(){
}

_ = VScrollTable$4$1_0.prototype = VScrollTable$4$1.prototype = new Object_0;
_.execute_0 = function execute_45(){
  runWebkitOverflowAutoFix(this.this$1.this$0.scrollBodyPanel.element_0);
}
;
_.getClass$ = function getClass_700(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$4$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$1 = null;
function VScrollTable$5_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$5(){
}

_ = VScrollTable$5_0.prototype = VScrollTable$5.prototype = new Object_0;
_.getClass$ = function getClass_701(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$5_2_classLit;
}
;
_.onTouchStart = function onTouchStart_5(event_0){
  $onTouchStart($getTouchScrollDelegate_0(this.this$0), event_0);
}
;
_.castableTypeMap$ = {12:1, 53:1};
_.this$0 = null;
function VScrollTable$6_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$6(){
}

_ = VScrollTable$6_0.prototype = VScrollTable$6.prototype = new Object_0;
_.getClass$ = function getClass_702(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$6_2_classLit;
}
;
_.onContextMenu = function onContextMenu_0(event_0){
  $handleBodyContextMenu(this.this$0, event_0);
}
;
_.castableTypeMap$ = {12:1, 40:1};
_.this$0 = null;
function VScrollTable$7_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$7(){
}

_ = VScrollTable$7_0.prototype = VScrollTable$7.prototype = new Object_0;
_.getClass$ = function getClass_703(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$7_2_classLit;
}
;
_.onClose = function onClose_7(event_0){
  this.this$0.contextMenu = null;
}
;
_.castableTypeMap$ = {9:1, 12:1};
_.this$0 = null;
function VScrollTable$8_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$8(){
}

_ = VScrollTable$8_0.prototype = VScrollTable$8.prototype = new Object_0;
_.execute_0 = function execute_46(){
  runWebkitOverflowAutoFix(this.this$0.scrollBodyPanel.element_0);
}
;
_.getClass$ = function getClass_704(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$8_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VScrollTable$9_0(this$0){
  this.this$0 = this$0;
}

function VScrollTable$9(){
}

_ = VScrollTable$9_0.prototype = VScrollTable$9.prototype = new Object_0;
_.execute_0 = function execute_47(){
  $setScrollPosition(this.this$0.scrollBodyPanel, $measureRowHeightOffset(this.this$0, this.this$0.firstvisible));
  this.this$0.firstRowInViewPort = this.this$0.firstvisible;
}
;
_.getClass$ = function getClass_705(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$9_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VScrollTable$ContextMenuDetails_0(rowKey, left, top_0){
  this.rowKey = rowKey;
  this.left_0 = left;
  this.top_0 = top_0;
}

function VScrollTable$ContextMenuDetails(){
}

_ = VScrollTable$ContextMenuDetails_0.prototype = VScrollTable$ContextMenuDetails.prototype = new Object_0;
_.getClass$ = function getClass_706(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$ContextMenuDetails_2_classLit;
}
;
_.castableTypeMap$ = {};
_.left_0 = 0;
_.rowKey = null;
_.top_0 = 0;
function $fireFooterClickedEvent(this$static, event_0){
  var details;
  if ($hasEventListeners_0(this$static.this$0.client.idToPaintableDetail[dynamicCast(this$static.this$0, 70).element_0.tkPid], 'handleFooterClick')) {
    details = new MouseEventDetails_0(event_0);
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'footerClickEvent', $escapeVariableValue('' + details.button_0 + ',' + details.clientX_0 + ',' + details.clientY_0 + ',' + details.altKey_0 + ',' + details.ctrlKey_0 + ',' + details.metaKey_0 + ',' + details.shiftKey_0 + ',' + details.type_0 + ',' + details.relativeX + ',' + details.relativeY), false, 115);
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'footerClickCID', $escapeVariableValue(this$static.cid), true, 115);
  }
}

function $getNaturalColumnWidth(this$static, columnIndex){
  var cw, hw, it;
  if (this$static.definedWidth && this$static.width_0 >= 0) {
    return this$static.width_0;
  }
   else {
    if (this$static.naturalWidth < 0) {
      hw = (this$static.element_0.lastChild.offsetWidth || 0) + $getCellExtraWidth(this$static.this$0.scrollBody_0);
      if (columnIndex < 0) {
        columnIndex = 0;
        for (it = new AbstractList$IteratorImpl_0(this$static.this$0.tHead.visibleCells); it.i < it.this$0_0.size_1(); ++columnIndex) {
          if ($next_5(it) === this$static) {
            break;
          }
        }
      }
      cw = $getColWidth_0(this$static.this$0.scrollBody_0, columnIndex);
      this$static.naturalWidth = hw > cw?hw:cw;
    }
    return this$static.naturalWidth;
  }
}

function $setAlign(this$static, c){
  if (this$static.align != c) {
    switch (c) {
      case 99:
        this$static.captionContainer.style['textAlign'] = 'center';
        break;
      case 101:
        this$static.captionContainer.style['textAlign'] = 'right';
        break;
      default:this$static.captionContainer.style['textAlign'] = '';
    }
  }
  this$static.align = c;
}

function $setWidth_9(this$static, w, ensureDefinedWidth){
  var tdWidth;
  ensureDefinedWidth && (this$static.definedWidth = true);
  if (this$static.width_0 == w) {
    return;
  }
  this$static.width_0 == -1 && (this$static.captionContainer.style['overflow'] = '' , undefined);
  this$static.width_0 = w;
  if (w == -1) {
    this$static.captionContainer.style['width'] = '';
    this$static.element_0.style['width'] = '';
  }
   else {
    w - 1 >= 0?(this$static.captionContainer.style['width'] = w - 1 + ($clinit_9() , 'px') , undefined):(this$static.captionContainer.style['width'] = 0 + ($clinit_9() , 'px') , undefined);
    if (this$static.this$0.scrollBody_0) {
      tdWidth = this$static.width_0 + $getCellExtraWidth(this$static.this$0.scrollBody_0) - 1;
      this$static.element_0.style['width'] = tdWidth + 'px';
    }
     else {
      $scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$FooterCell$1_0(this$static));
    }
  }
}

function VScrollTable$FooterCell_0(this$0, colId, headerText){
  this.this$0 = this$0;
  this.td = $doc.createElement('td');
  this.captionContainer = $doc.createElement('div');
  this.cid = colId;
  this.captionContainer.innerHTML = headerText || '';
  this.captionContainer['className'] = 'v-table-footer-container';
  this.captionContainer.style['overflow'] = 'visible';
  sinkEvents(this.captionContainer, 124);
  this.td.appendChild(this.captionContainer);
  sinkEvents(this.td, 262270);
  this.element_0 = this.td;
}

function VScrollTable$FooterCell(){
}

_ = VScrollTable$FooterCell_0.prototype = VScrollTable$FooterCell.prototype = new Widget;
_.getClass$ = function getClass_707(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$FooterCell_2_classLit;
}
;
_.handleCaptionEvent = function handleCaptionEvent(event_0){
  ($eventGetTypeInt(event_0.type) == 8 || $eventGetTypeInt(event_0.type) == 2) && $fireFooterClickedEvent(this, event_0);
}
;
_.onBrowserEvent = function onBrowserEvent_36(event_0){
  var stopPropagation;
  if (this.this$0.enabled && !!event_0) {
    this.handleCaptionEvent(event_0);
    $eventGetTypeInt(event_0.type) == 8 && $setFocus_2(this.this$0.scrollBodyPanel, true);
    stopPropagation = true;
    $eventGetTypeInt(event_0.type) == 262144 && !$hasEventListeners_0(this.this$0.client.idToPaintableDetail[dynamicCast(this.this$0, 70).element_0.tkPid], 'handleFooterClick') && (stopPropagation = false);
    if (stopPropagation) {
      event_0.stopPropagation();
      event_0.preventDefault();
    }
  }
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 165:1};
_.align = 98;
_.cid = null;
_.definedWidth = false;
_.naturalWidth = -1;
_.this$0 = null;
_.width_0 = -1;
function VScrollTable$FooterCell$1_0(this$1){
  this.this$1 = this$1;
}

function VScrollTable$FooterCell$1(){
}

_ = VScrollTable$FooterCell$1_0.prototype = VScrollTable$FooterCell$1.prototype = new Object_0;
_.execute_0 = function execute_48(){
  var tdWidth;
  tdWidth = this.this$1.width_0 + $getCellExtraWidth(this.this$1.this$0.scrollBody_0) - 1;
  this.this$1.element_0.style['width'] = tdWidth + 'px';
}
;
_.getClass$ = function getClass_708(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$FooterCell$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$1 = null;
function $fireHeaderClickedEvent(this$static, event_0){
  var details;
  if ($hasEventListeners_0(this$static.this$0.client.idToPaintableDetail[dynamicCast(this$static.this$0, 70).element_0.tkPid], 'handleHeaderClick')) {
    details = new MouseEventDetails_0(event_0);
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'headerClickEvent', $escapeVariableValue('' + details.button_0 + ',' + details.clientX_0 + ',' + details.clientY_0 + ',' + details.altKey_0 + ',' + details.ctrlKey_0 + ',' + details.metaKey_0 + ',' + details.shiftKey_0 + ',' + details.type_0 + ',' + details.relativeX + ',' + details.relativeY), false, 115);
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'headerClickCID', $escapeVariableValue(this$static.cid), true, 115);
  }
}

function $getMinWidth(this$static){
  var cellExtraWidth;
  cellExtraWidth = 0;
  !!this$static.this$0.scrollBody_0 && (cellExtraWidth += $getCellExtraWidth(this$static.this$0.scrollBody_0));
  return cellExtraWidth + (this$static.sortIndicator.offsetWidth || 0);
}

function $getNaturalColumnWidth_0(this$static, columnIndex){
  var cw, hw, it;
  if (this$static.definedWidth && this$static.width_0 >= 0) {
    return this$static.width_0;
  }
   else {
    if (this$static.naturalWidth < 0) {
      hw = (this$static.captionContainer.offsetWidth || 0) + $getCellExtraWidth(this$static.this$0.scrollBody_0);
      (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isGecko || $isIE7((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40))) && (hw += this$static.sortIndicator.offsetWidth || 0);
      if (columnIndex < 0) {
        columnIndex = 0;
        for (it = new AbstractList$IteratorImpl_0(this$static.this$0.tHead.visibleCells); it.i < it.this$0_0.size_1(); ++columnIndex) {
          if ($next_5(it) === this$static) {
            break;
          }
        }
      }
      cw = $getColWidth_0(this$static.this$0.scrollBody_0, columnIndex);
      this$static.naturalWidth = hw > cw?hw:cw;
    }
    return this$static.naturalWidth;
  }
}

function $onResizeEvent_0(this$static, event_0){
  var deltaX, lastCell, newWidth;
  switch ($eventGetTypeInt(event_0.type)) {
    case 4:
      if (!isTouchEventOrLeftMouseButton(event_0)) {
        return;
      }

      this$static.isResizing = true;
      setCapture(this$static.element_0);
      this$static.dragStartX = event_0.clientX || 0;
      this$static.colIndex = $getColIndexByKey(this$static.this$0, this$static.cid);
      this$static.originalWidth = this$static.width_0;
      event_0.preventDefault();
      break;
    case 8:
      if (!isTouchEventOrLeftMouseButton(event_0)) {
        return;
      }

      this$static.isResizing = false;
      releaseCapture(this$static.element_0);
      $disableAutoColumnWidthCalculation(this$static.this$0.tHead, this$static);
      lastCell = $getHeaderCell(this$static.this$0.tHead, this$static.this$0.tHead.visibleCells.size_0 - 1);
      $resizeCaptionContainer_0(this$static.this$0.tHead, lastCell);
      $triggerLazyColumnAdjustment(this$static.this$0, true);
      $fireColumnResizeEvent(this$static.this$0, this$static.cid, this$static.originalWidth, dynamicCast(this$static.this$0.tHead.availableCells.get_0(this$static.cid), 163).width_0);
      break;
    case 64:
      if (!isTouchEventOrLeftMouseButton(event_0)) {
        return;
      }

      if (this$static.isResizing) {
        deltaX = (event_0.clientX || 0) - this$static.dragStartX;
        if (deltaX == 0) {
          return;
        }
        $disableAutoColumnWidthCalculation(this$static.this$0.tHead, this$static);
        newWidth = this$static.originalWidth + deltaX;
        newWidth < $getMinWidth(this$static) && (newWidth = $getMinWidth(this$static));
        $setColWidth(this$static.this$0, this$static.colIndex, newWidth, true);
        $triggerLazyColumnAdjustment(this$static.this$0, false);
        $forceRealignColumnHeaders(this$static.this$0);
      }

  }
}

function $resizeCaptionContainer(this$static, rightSpacing){
  var captionContainerWidth;
  captionContainerWidth = this$static.width_0 - (this$static.colResizeWidget.offsetWidth || 0) - rightSpacing;
  ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) || this$static.td.className.indexOf('-asc') != -1 || this$static.td.className.indexOf('-desc') != -1) && (captionContainerWidth -= this$static.sortIndicator.offsetWidth || 0);
  if (captionContainerWidth < 0) {
    rightSpacing += captionContainerWidth;
    captionContainerWidth = 0;
  }
  this$static.captionContainer.style['width'] = captionContainerWidth + ($clinit_9() , 'px');
  rightSpacing > 0?(this$static.colResizeWidget.style['marginLeft'] = rightSpacing + 'px' , undefined):(this$static.colResizeWidget.style['marginLeft'] = '' , undefined);
}

function $setAlign_0(this$static, c){
  if (this$static.align != c) {
    $removeClassName(this$static.captionContainer, 'v-table-caption-container-align-center');
    $removeClassName(this$static.captionContainer, 'v-table-caption-container-align-right');
    $removeClassName(this$static.captionContainer, 'v-table-caption-container-align-left');
    switch (c) {
      case 99:
        $addClassName(this$static.captionContainer, 'v-table-caption-container-align-center');
        break;
      case 101:
        $addClassName(this$static.captionContainer, 'v-table-caption-container-align-right');
        break;
      default:$addClassName(this$static.captionContainer, 'v-table-caption-container-align-left');
    }
  }
  this$static.align = c;
}

function $setWidth_10(this$static, w, ensureDefinedWidth){
  var tdWidth;
  if (ensureDefinedWidth) {
    this$static.definedWidth = true;
    this$static.expandRatio = 0;
  }
  this$static.width_0 == -1 && (this$static.captionContainer.style['overflow'] = '' , undefined);
  this$static.width_0 = w;
  if (w == -1) {
    this$static.captionContainer.style['width'] = '';
    this$static.element_0.style['width'] = '';
  }
   else {
    $resizeCaptionContainer_0(this$static.this$0.tHead, this$static);
    if (this$static.this$0.scrollBody_0) {
      tdWidth = this$static.width_0 + $getCellExtraWidth(this$static.this$0.scrollBody_0);
      this$static.element_0.style['width'] = tdWidth + 'px';
    }
     else {
      $scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$HeaderCell$1_0(this$static));
    }
  }
}

function $updateFloatingCopysPosition(this$static, x, y){
  x -= ~~((parseInt(this$static.floatingCopyOfHeaderCell['offsetWidth']) || 0) / 2);
  this$static.floatingCopyOfHeaderCell.style['left'] = x + 'px';
  y > 0 && (this$static.floatingCopyOfHeaderCell.style['top'] = y + 7 + 'px' , undefined);
}

function VScrollTable$HeaderCell_0(this$0, colId, headerText){
  this.this$0 = this$0;
  this.td = $doc.createElement('td');
  this.captionContainer = $doc.createElement('div');
  this.sortIndicator = $doc.createElement('div');
  this.colResizeWidget = $doc.createElement('div');
  this.cid = colId;
  this.colResizeWidget['className'] = 'v-table-resizer';
  this.captionContainer.innerHTML = headerText || '';
  this.td.appendChild(this.colResizeWidget);
  this.sortIndicator['className'] = 'v-table-sort-indicator';
  this.td.appendChild(this.sortIndicator);
  this.captionContainer['className'] = 'v-table-caption-container';
  this.captionContainer.style['overflow'] = 'visible';
  this.td.appendChild(this.captionContainer);
  sinkEvents(this.td, 15990910);
  this.element_0 = this.td;
  $setAlign_0(this, 98);
}

function VScrollTable$HeaderCell(){
}

_ = VScrollTable$HeaderCell_0.prototype = VScrollTable$HeaderCell.prototype = new Widget;
_.getClass$ = function getClass_709(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$HeaderCell_2_classLit;
}
;
_.handleCaptionEvent = function handleCaptionEvent_0(event_0){
  var clientX, closestDistance, colKey, dist, i, slotX, start, visibleCellCount, x;
  switch ($eventGetTypeInt(event_0.type)) {
    case 1048576:
    case 4:
      if (this.this$0.columnReordering && isTouchEventOrLeftMouseButton(event_0)) {
        $eventGetTypeInt(event_0.type) == 1048576 && (event_0.stopPropagation() , undefined);
        this.dragging = true;
        this.moved = false;
        this.colIndex = $getColIndexByKey(this.this$0, this.cid);
        setCapture(this.element_0);
        this.headerX = $getAbsoluteLeft(this.this$0.tHead.element_0) | 0;
        event_0.preventDefault();
      }

      break;
    case 8:
    case 4194304:
    case 8388608:
      if (this.this$0.columnReordering && isTouchEventOrLeftMouseButton(event_0)) {
        this.dragging = false;
        releaseCapture(this.element_0);
        if (this.moved) {
          ($clinit_50() , get(null)).element_0.removeChild(this.floatingCopyOfHeaderCell);
          this.floatingCopyOfHeaderCell = null;
          $removeSlotFocus(this.this$0.tHead);
          this.closestSlot != this.colIndex && this.closestSlot != this.colIndex + 1 && (this.closestSlot > this.colIndex?this.this$0.reOrderColumn(this.cid, this.closestSlot - 1):this.this$0.reOrderColumn(this.cid, this.closestSlot));
        }
        $clinit_67();
        if (event_0.type.indexOf('touch') != -1) {
          event_0.preventDefault();
          event_0.stopPropagation();
        }
      }

      if (!this.moved) {
        if (this.sortable && isTouchEventOrLeftMouseButton(event_0)) {
          $equals_2(this.this$0.sortColumn, this.cid)?$addVariableToQueue(this.this$0.client, this.this$0.paintableId, 'sortascending', this.this$0.sortAscending?'false':'true', false, 98):($addVariableToQueue(this.this$0.client, this.this$0.paintableId, 'sortcolumn', $escapeVariableValue(this.cid), false, 115) , undefined);
          $setScrollPosition(this.this$0.scrollBodyPanel, 0);
          this.this$0.firstvisible = 0;
          $setReqFirstRow(this.this$0.rowRequestHandler, 0);
          this.this$0.rowRequestHandler.reqRows = ~~Math.max(Math.min(2 * this.this$0.pageLength * this.this$0.cache_rate + this.this$0.pageLength, 2147483647), -2147483648);
          $deferRowFetch(this.this$0.rowRequestHandler, 250);
          $cancel_0(this.this$0.rowRequestHandler);
          $run_2(this.this$0.rowRequestHandler);
        }
        $fireHeaderClickedEvent(this, event_0);
        $clinit_67();
        if (event_0.type.indexOf('touch') != -1) {
          event_0.preventDefault();
          event_0.stopPropagation();
        }
        break;
      }

      break;
    case 2:
      $fireHeaderClickedEvent(this, event_0);
      break;
    case 2097152:
    case 64:
      if (this.dragging && isTouchEventOrLeftMouseButton(event_0)) {
        $eventGetTypeInt(event_0.type) == 2097152 && (event_0.stopPropagation() , undefined);
        if (!this.moved) {
          this.floatingCopyOfHeaderCell = $doc.createElement('div');
          $setInnerHTML(this.floatingCopyOfHeaderCell, this.td.innerHTML);
          this.floatingCopyOfHeaderCell = $getChild(this.floatingCopyOfHeaderCell, 2);
          this.floatingCopyOfHeaderCell['className'] = 'v-table-header-drag';
          this.floatingCopyOfHeaderCell.style['width'] = 'auto';
          $updateFloatingCopysPosition(this, $getAbsoluteLeft(this.td) | 0, $getAbsoluteTop(this.td) | 0);
          ($clinit_50() , get(null)).element_0.appendChild(this.floatingCopyOfHeaderCell);
          this.moved = true;
        }
        clientX = ($clinit_67() , event_0.type.indexOf('touch') != -1?event_0.changedTouches[0].clientX:event_0.clientX || 0);
        x = clientX + $getScrollLeft(this.this$0.tHead.hTableWrapper);
        slotX = this.headerX;
        this.closestSlot = this.colIndex;
        closestDistance = -1;
        start = 0;
        this.this$0.showRowHeaders && ++start;
        visibleCellCount = this.this$0.tHead.visibleCells.size_0;
        for (i = start; i <= visibleCellCount; ++i) {
          if (i > 0) {
            colKey = $getHeaderCell(this.this$0.tHead, i - 1).cid;
            slotX += dynamicCast(this.this$0.tHead.availableCells.get_0(colKey), 163).width_0;
          }
          dist = x - slotX < 0?-(x - slotX):x - slotX;
          if (closestDistance == -1 || dist < closestDistance) {
            closestDistance = dist;
            this.closestSlot = i;
          }
        }
        $focusSlot(this.this$0.tHead, this.closestSlot);
        $updateFloatingCopysPosition(this, clientX, -1);
      }

  }
}
;
_.onBrowserEvent = function onBrowserEvent_37(event_0){
  var stopPropagation;
  if (this.this$0.enabled && !!event_0) {
    if (this.isResizing || event_0.target == this.colResizeWidget) {
      this.dragging && ($eventGetTypeInt(event_0.type) == 8 || $eventGetTypeInt(event_0.type) == 4194304)?this.handleCaptionEvent(event_0):$onResizeEvent_0(this, event_0);
    }
     else {
      ($eventGetTypeInt(event_0.type) == 4 || $eventGetTypeInt(event_0.type) == 1048576) && $setFocus_2(this.this$0.scrollBodyPanel, true);
      this.handleCaptionEvent(event_0);
      stopPropagation = true;
      $eventGetTypeInt(event_0.type) == 262144 && !$hasEventListeners_0(this.this$0.client.idToPaintableDetail[dynamicCast(this.this$0, 70).element_0.tkPid], 'handleHeaderClick') && (stopPropagation = false);
      if (stopPropagation) {
        event_0.stopPropagation();
        event_0.preventDefault();
      }
    }
  }
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 163:1};
_.align = 98;
_.cid = null;
_.closestSlot = 0;
_.colIndex = 0;
_.definedWidth = false;
_.dragStartX = 0;
_.dragging = false;
_.expandRatio = 0;
_.floatingCopyOfHeaderCell = null;
_.headerX = 0;
_.isResizing = false;
_.moved = false;
_.naturalWidth = -1;
_.originalWidth = 0;
_.sortable = false;
_.sorted = false;
_.this$0 = null;
_.width_0 = -1;
function VScrollTable$HeaderCell$1_0(this$1){
  this.this$1 = this$1;
}

function VScrollTable$HeaderCell$1(){
}

_ = VScrollTable$HeaderCell$1_0.prototype = VScrollTable$HeaderCell$1.prototype = new Object_0;
_.execute_0 = function execute_49(){
  var tdWidth;
  tdWidth = this.this$1.width_0 + $getCellExtraWidth(this.this$1.this$0.scrollBody_0);
  this.this$1.element_0.style['width'] = tdWidth + 'px';
}
;
_.getClass$ = function getClass_710(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$HeaderCell$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$1 = null;
function VScrollTable$RowHeadersFooterCell_0(this$0){
  VScrollTable$FooterCell_0.call(this, this$0, '0', '');
}

function VScrollTable$RowHeadersFooterCell(){
}

_ = VScrollTable$RowHeadersFooterCell_0.prototype = VScrollTable$RowHeadersFooterCell.prototype = new VScrollTable$FooterCell;
_.getClass$ = function getClass_711(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$RowHeadersFooterCell_2_classLit;
}
;
_.handleCaptionEvent = function handleCaptionEvent_1(event_0){
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 165:1};
function VScrollTable$RowHeadersHeaderCell_0(this$0){
  VScrollTable$HeaderCell_0.call(this, this$0, '0', '');
  this.element_0['className'] = 'v-table-header-cell-rowheader';
}

function VScrollTable$RowHeadersHeaderCell(){
}

_ = VScrollTable$RowHeadersHeaderCell_0.prototype = VScrollTable$RowHeadersHeaderCell.prototype = new VScrollTable$HeaderCell;
_.getClass$ = function getClass_712(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$RowHeadersHeaderCell_2_classLit;
}
;
_.handleCaptionEvent = function handleCaptionEvent_2(event_0){
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 22:1, 69:1, 70:1, 163:1};
function $deferRowFetch(this$static, msec){
  this$static.isRunning = true;
  if (this$static.reqRows > 0 && this$static.reqFirstRow < this$static.this$0.totalRows) {
    $schedule(this$static, msec);
    this$static.this$0.totalRows > this$static.this$0.pageLength && (this$static.this$0.firstRowInViewPort + this$static.this$0.pageLength > this$static.this$0.scrollBody_0.lastRendered || this$static.this$0.firstRowInViewPort < this$static.this$0.scrollBody_0.firstRendered)?$announceScrollPosition(this$static.this$0):$hideScrollPositionAnnotation(this$static.this$0);
  }
}

function $refreshContent(this$static){
  var first, reqRows;
  this$static.isRunning = true;
  first = ~~Math.max(Math.min(this$static.this$0.firstRowInViewPort - this$static.this$0.pageLength * this$static.this$0.cache_rate, 2147483647), -2147483648);
  reqRows = ~~Math.max(Math.min(2 * this$static.this$0.pageLength * this$static.this$0.cache_rate + this$static.this$0.pageLength, 2147483647), -2147483648);
  if (first < 0) {
    reqRows = reqRows + first;
    first = 0;
  }
  $setReqFirstRow(this$static, first);
  this$static.reqRows = reqRows;
  $run_2(this$static);
}

function $run_2(this$static){
  var firstToBeRendered, lastToBeRendered;
  if (this$static.this$0.client.hasActiveRequest || this$static.this$0.navKeyDown) {
    impl_2.log_0('Postponed rowfetch');
    $schedule(this$static, 250);
  }
   else {
    firstToBeRendered = this$static.this$0.scrollBody_0.firstRendered;
    if (this$static.reqFirstRow < firstToBeRendered) {
      firstToBeRendered = this$static.reqFirstRow;
    }
     else if (this$static.this$0.firstRowInViewPort - ~~Math.max(Math.min(this$static.this$0.cache_rate * this$static.this$0.pageLength, 2147483647), -2147483648) > firstToBeRendered) {
      firstToBeRendered = this$static.this$0.firstRowInViewPort - ~~Math.max(Math.min(this$static.this$0.cache_rate * this$static.this$0.pageLength, 2147483647), -2147483648);
      firstToBeRendered < 0 && (firstToBeRendered = 0);
    }
    lastToBeRendered = this$static.this$0.scrollBody_0.lastRendered;
    if (this$static.reqFirstRow + this$static.reqRows - 1 > lastToBeRendered) {
      lastToBeRendered = this$static.reqFirstRow + this$static.reqRows - 1;
    }
     else if (this$static.this$0.firstRowInViewPort + this$static.this$0.pageLength + this$static.this$0.pageLength * this$static.this$0.cache_rate < lastToBeRendered) {
      lastToBeRendered = this$static.this$0.firstRowInViewPort + this$static.this$0.pageLength + ~~Math.max(Math.min(this$static.this$0.pageLength * this$static.this$0.cache_rate, 2147483647), -2147483648);
      lastToBeRendered >= this$static.this$0.totalRows && (lastToBeRendered = this$static.this$0.totalRows - 1);
      this$static.reqFirstRow + this$static.reqRows - 1 > lastToBeRendered && (this$static.reqRows = lastToBeRendered - this$static.reqFirstRow);
    }
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'firstToBeRendered', '' + firstToBeRendered, false, 105);
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'lastToBeRendered', '' + lastToBeRendered, false, 105);
    this$static.this$0.lastRequestedFirstvisible = this$static.this$0.firstRowInViewPort;
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'firstvisible', '' + this$static.this$0.firstRowInViewPort, false, 105);
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'reqfirstrow', '' + this$static.reqFirstRow, false, 105);
    $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'reqrows', '' + this$static.reqRows, true, 105);
    this$static.this$0.selectionChanged && (this$static.this$0.unSyncedselectionsBeforeRowFetch = new HashSet_1(this$static.this$0.selectedRowKeys));
    this$static.isRunning = false;
  }
}

function $setReqFirstRow(this$static, reqFirstRow){
  reqFirstRow < 0?(reqFirstRow = 0):reqFirstRow >= this$static.this$0.totalRows && (reqFirstRow = this$static.this$0.totalRows - 1);
  this$static.reqFirstRow = reqFirstRow;
}

function VScrollTable$RowRequestHandler_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function VScrollTable$RowRequestHandler(){
}

_ = VScrollTable$RowRequestHandler_0.prototype = VScrollTable$RowRequestHandler.prototype = new Timer;
_.getClass$ = function getClass_713(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$RowRequestHandler_2_classLit;
}
;
_.run = function run_33(){
  $run_2(this);
}
;
_.castableTypeMap$ = {65:1};
_.isRunning = false;
_.reqFirstRow = 0;
_.reqRows = 0;
_.this$0 = null;
function $split(this$static, row){
  var endOfFirstRange, ranges, startOfRange, startOfSecondRange;
  ranges = new ArrayList_2(2);
  endOfFirstRange = row.index_0 - 1;
  endOfFirstRange - this$static.startRow.index_0 >= 0 && $add_12(ranges, new VScrollTable$SelectionRange_1(this$static.this$0, this$static.startRow, endOfFirstRange - this$static.startRow.index_0 + 1));
  startOfSecondRange = row.index_0 + 1;
  if (this$static.startRow.index_0 + this$static.length_0 - 1 - startOfSecondRange >= 0) {
    startOfRange = $getRowByRowIndex(this$static.this$0.scrollBody_0, startOfSecondRange);
    $add_12(ranges, new VScrollTable$SelectionRange_1(this$static.this$0, startOfRange, this$static.startRow.index_0 + this$static.length_0 - 1 - startOfSecondRange + 1));
  }
  return ranges;
}

function VScrollTable$SelectionRange_0(this$0, row1, row2){
  var endRow;
  this.this$0 = this$0;
  if (row2.index_0 < row1.index_0) {
    this.startRow = row2;
    endRow = row1;
  }
   else {
    this.startRow = row1;
    endRow = row2;
  }
  this.length_0 = endRow.index_0 - this.startRow.index_0 + 1;
}

function VScrollTable$SelectionRange_1(this$0, row, length_0){
  this.this$0 = this$0;
  this.startRow = row;
  this.length_0 = length_0;
}

function VScrollTable$SelectionRange(){
}

_ = VScrollTable$SelectionRange_1.prototype = VScrollTable$SelectionRange_0.prototype = VScrollTable$SelectionRange.prototype = new Object_0;
_.getClass$ = function getClass_714(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$SelectionRange_2_classLit;
}
;
_.toString$ = function toString_15(){
  return '' + this.startRow.rowKey + '-' + this.length_0;
}
;
_.castableTypeMap$ = {164:1};
_.length_0 = 0;
_.startRow = null;
_.this$0 = null;
function $equals_1(this$static, obj){
  var other;
  if (obj != null && obj.castableTypeMap$ && !!obj.castableTypeMap$[166]) {
    other = dynamicCast(obj, 166);
    return this$static.dropLocation == other.dropLocation && this$static.overkey == other.overkey && (this$static.colkey != null && $equals_2(this$static.colkey, other.colkey) || this$static.colkey == null && other.colkey == null);
  }
  return false;
}

function VScrollTable$TableDDDetails_0(){
}

function VScrollTable$TableDDDetails(){
}

_ = VScrollTable$TableDDDetails_0.prototype = VScrollTable$TableDDDetails.prototype = new Object_0;
_.equals$ = function equals_5(obj){
  return $equals_1(this, obj);
}
;
_.getClass$ = function getClass_715(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableDDDetails_2_classLit;
}
;
_.castableTypeMap$ = {166:1};
_.colkey = null;
_.dropLocation = null;
_.overkey = -1;
function $clear_4(this$static){
  var cid, cid$iterator, outerIter, entry, c;
  for (cid$iterator = (outerIter = $keySet(this$static.availableCells).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); cid$iterator.val$outerIter.hasNext();) {
    cid = dynamicCast((entry = dynamicCast(cid$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 1);
    c = dynamicCast(this$static.availableCells.get_0(cid), 165);
    $remove_10(this$static, c);
  }
  this$static.availableCells.clear_0();
  this$static.availableCells.put('0', new VScrollTable$RowHeadersFooterCell_0(this$static.this$0));
}

function $enableColumn(this$static, cid, index){
  var c;
  c = dynamicCast(this$static.availableCells.get_0(cid), 165);
  if (!c.parent_0 || (index < this$static.visibleCells.size_0?dynamicCast($get_4(this$static.visibleCells, index), 165):null) != c) {
    $setFooterCell(this$static, index, c);
    this$static.this$0.initializedAndAttached && (this$static.this$0.headerChangedDuringUpdate = true);
  }
}

function $getFooterCell(this$static, index){
  return index < this$static.visibleCells.size_0?dynamicCast($get_4(this$static.visibleCells, index), 165):null;
}

function $moveCell(this$static, oldIndex, newIndex){
  var cell, hCell;
  hCell = oldIndex < this$static.visibleCells.size_0?dynamicCast($get_4(this$static.visibleCells, oldIndex), 165):null;
  cell = hCell.element_0;
  $remove_16(this$static.visibleCells, oldIndex);
  this$static.tr.removeChild(cell);
  $insertChild(this$static.tr, cell, newIndex);
  $add_13(this$static.visibleCells, newIndex, hCell);
}

function $remove_10(this$static, w){
  var parent_0;
  if ($indexOf_1(this$static.visibleCells, w, 0) != -1) {
    $remove_17(this$static.visibleCells, w);
    $setParent(w, null);
    (parent_0 = w.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(w.element_0);
    return true;
  }
  return false;
}

function $removeCell(this$static, colKey){
  var c;
  c = dynamicCast(this$static.availableCells.get_0(colKey), 165);
  $remove_10(this$static, c);
}

function $setFooterCell(this$static, index, cell){
  if (cell.parent_0) {
    this$static.tr.removeChild(cell.element_0);
    $setParent(cell, null);
    $remove_17(this$static.visibleCells, cell);
  }
  if (index < this$static.visibleCells.size_0) {
    $insertChild(this$static.tr, cell.element_0, index);
    $setParent(cell, this$static);
    $add_13(this$static.visibleCells, index, cell);
  }
   else if (index == this$static.visibleCells.size_0) {
    this$static.tr.appendChild(cell.element_0);
    $setParent(cell, this$static);
    $add_12(this$static.visibleCells, cell);
  }
   else {
    throw new RuntimeException_0('Header cells must be appended in order');
  }
}

function $setHorizontalScrollPosition_0(this$static, scrollLeft){
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    this$static.hTableWrapper.style['position'] = 'relative';
    this$static.hTableWrapper.style['left'] = -scrollLeft + ($clinit_9() , 'px');
  }
   else {
    $setScrollLeft(this$static.hTableWrapper, scrollLeft);
  }
}

function $updateCellsFromUIDL(this$static, uidl){
  var c, caption, cid, cit, col, columnIterator, updated, width, count, old, outerIter, entry, c_0;
  columnIterator = new UIDL$1_0(uidl);
  updated = new HashSet_0;
  while (count = columnIterator.this$0.length - 2 , count > columnIterator.index_0 + 1) {
    col = dynamicCastJso($next_3(columnIterator));
    cid = col[1]['cid'];
    old = updated.map.put(cid, updated);
    caption = 'fcaption' in col[1]?col[1]['fcaption']:'';
    c = dynamicCast(this$static.availableCells.get_0(cid), 165);
    if (!c) {
      c = new VScrollTable$FooterCell_0(this$static.this$0, cid, caption);
      this$static.availableCells.put(cid, c);
      if (this$static.this$0.initializedAndAttached) {
        this$static.this$0.initializedAndAttached = false;
        this$static.this$0.initialContentReceived = false;
        this$static.this$0.isNewBody = true;
      }
    }
     else {
      c.captionContainer.innerHTML = caption || '';
    }
    'align' in col[1]?$setAlign(c, col[1]['align'].charCodeAt(0)):$setAlign(c, 98);
    if ('width' in col[1]) {
      if (!this$static.this$0.scrollBody_0) {
        width = col[1]['width'];
        $setWidth_9(c, __parseAndValidateInt(width), true);
      }
    }
     else 
      this$static.this$0.recalcWidths && $setWidth_9(c, -1, false);
    if ('collapsed' in col[1]) {
      if (c.attached) {
        $removeFromParent_0(c);
        this$static.this$0.headerChangedDuringUpdate = true;
      }
    }
  }
  for (cit = (outerIter = $keySet(this$static.availableCells).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); cit.val$outerIter.hasNext();) {
    cid = dynamicCast((entry = dynamicCast(cit.val$outerIter.next_0(), 58) , entry.getKey()), 1);
    if (!updated.map.containsKey(cid)) {
      c_0 = dynamicCast(this$static.availableCells.get_0(cid), 165);
      $remove_10(this$static, c_0);
      cit.val$outerIter.remove_1();
    }
  }
}

function VScrollTable$TableFooter_0(this$0){
  this.this$0 = this$0;
  this.visibleCells = new ArrayList_0;
  this.availableCells = new HashMap_0;
  this.div = $doc.createElement('div');
  this.hTableWrapper = $doc.createElement('div');
  this.hTableContainer = $doc.createElement('div');
  this.table = $doc.createElement('table');
  this.headerTableBody = $doc.createElement('tbody');
  this.tr = $doc.createElement('tr');
  this.hTableWrapper.style['overflow'] = 'hidden';
  this.hTableWrapper['className'] = 'v-table-footer';
  this.table.appendChild(this.headerTableBody);
  this.headerTableBody.appendChild(this.tr);
  this.hTableContainer.appendChild(this.table);
  this.hTableWrapper.appendChild(this.hTableContainer);
  this.div.appendChild(this.hTableWrapper);
  this.element_0 = this.div;
  this.element_0['className'] = 'v-table-footer-wrap';
  this.availableCells.put('0', new VScrollTable$RowHeadersFooterCell_0(this$0));
}

function VScrollTable$TableFooter(){
}

_ = VScrollTable$TableFooter_0.prototype = VScrollTable$TableFooter.prototype = new Panel;
_.getClass$ = function getClass_716(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableFooter_2_classLit;
}
;
_.iterator_0 = function iterator_6(){
  return new AbstractList$IteratorImpl_0(this.visibleCells);
}
;
_.remove_2 = function remove_15(w){
  return $remove_10(this, w);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 69:1, 70:1, 75:1};
_.this$0 = null;
function $clear_5(this$static){
  var cid, cid$iterator, outerIter, entry, c;
  for (cid$iterator = (outerIter = $keySet(this$static.availableCells).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); cid$iterator.val$outerIter.hasNext();) {
    cid = dynamicCast((entry = dynamicCast(cid$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 1);
    c = dynamicCast(this$static.availableCells.get_0(cid), 163);
    $remove_11(this$static, c);
  }
  this$static.availableCells.clear_0();
  this$static.availableCells.put('0', new VScrollTable$RowHeadersHeaderCell_0(this$static.this$0));
}

function $disableAutoColumnWidthCalculation(this$static, source){
  var cell, cell$iterator, columns, outerIter;
  for (cell$iterator = (outerIter = $values_0(this$static.availableCells).val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter)); cell$iterator.val$outerIter.hasNext();) {
    cell = dynamicCast(dynamicCast(cell$iterator.val$outerIter.next_0(), 58).getValue(), 163);
    cell.definedWidth = true;
    cell.expandRatio = 0;
  }
  columns = new ArrayList_1($values_0(this$static.availableCells));
  $remove_17(columns, source);
  $sendColumnWidthUpdates(this$static.this$0, columns);
  $forceRealignColumnHeaders(this$static.this$0);
}

function $enableColumn_0(this$static, cid, index){
  var c;
  c = dynamicCast(this$static.availableCells.get_0(cid), 163);
  if (!c.parent_0 || (index >= 0 && index < this$static.visibleCells.size_0?dynamicCast($get_4(this$static.visibleCells, index), 163):null) != c) {
    $setHeaderCell(this$static, index, c);
    this$static.this$0.initializedAndAttached && (this$static.this$0.headerChangedDuringUpdate = true);
  }
}

function $focusSlot(this$static, index){
  $removeSlotFocus(this$static);
  index > 0?($getFirstChildElement($getChild(this$static.tr, index - 1))['className'] = 'v-table-resizer v-table-focus-slot-right' , undefined):($getFirstChildElement($getChild(this$static.tr, index))['className'] = 'v-table-resizer v-table-focus-slot-left' , undefined);
  this$static.focusedSlot = index;
}

function $getColumnAlignments(this$static){
  var aligns, colIndex, it;
  it = new AbstractList$IteratorImpl_0(this$static.visibleCells);
  aligns = initDim(_3C_classLit, {30:1}, -1, this$static.visibleCells.size_0, 1);
  colIndex = 0;
  while (it.i < it.this$0_0.size_1()) {
    aligns[colIndex++] = dynamicCast($next_5(it), 163).align;
  }
  return aligns;
}

function $getHeaderCell(this$static, index){
  return index >= 0 && index < this$static.visibleCells.size_0?dynamicCast($get_4(this$static.visibleCells, index), 163):null;
}

function $moveCell_0(this$static, oldIndex, newIndex){
  var cell, hCell;
  hCell = oldIndex >= 0 && oldIndex < this$static.visibleCells.size_0?dynamicCast($get_4(this$static.visibleCells, oldIndex), 163):null;
  cell = hCell.element_0;
  $remove_16(this$static.visibleCells, oldIndex);
  this$static.tr.removeChild(cell);
  $insertChild(this$static.tr, cell, newIndex);
  $add_13(this$static.visibleCells, newIndex, hCell);
}

function $remove_11(this$static, w){
  var parent_0;
  if ($indexOf_1(this$static.visibleCells, w, 0) != -1) {
    $remove_17(this$static.visibleCells, w);
    $setParent(w, null);
    (parent_0 = w.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(w.element_0);
    return true;
  }
  return false;
}

function $removeCell_0(this$static, colKey){
  var c;
  c = dynamicCast(this$static.availableCells.get_0(colKey), 163);
  $remove_11(this$static, c);
}

function $removeSlotFocus(this$static){
  if (this$static.focusedSlot < 0) {
    return;
  }
  this$static.focusedSlot == 0?($getFirstChildElement($getChild(this$static.tr, this$static.focusedSlot))['className'] = 'v-table-resizer' , undefined):this$static.focusedSlot > 0 && ($getFirstChildElement($getChild(this$static.tr, this$static.focusedSlot - 1))['className'] = 'v-table-resizer' , undefined);
  this$static.focusedSlot = -1;
}

function $resizeCaptionContainer_0(this$static, cell){
  var columnTotalWidth, diff, lastcell, offset, w, w$iterator;
  lastcell = $getHeaderCell(this$static, this$static.visibleCells.size_0 - 1);
  columnTotalWidth = 0;
  for (w$iterator = new AbstractList$IteratorImpl_0(this$static.visibleCells); w$iterator.i < w$iterator.this$0_0.size_1();) {
    w = dynamicCast($next_5(w$iterator), 70);
    columnTotalWidth += w.getOffsetWidth();
  }
  if (cell == lastcell && (this$static.columnSelector.offsetWidth || 0) > 0 && columnTotalWidth >= (this$static.div.offsetWidth || 0) - (this$static.columnSelector.offsetWidth || 0) && !$hasVerticalScrollbar(this$static.this$0)) {
    diff = (this$static.div.offsetWidth || 0) - columnTotalWidth;
    diff < (this$static.columnSelector.offsetWidth || 0) && diff > 0?(offset = (this$static.columnSelector.offsetWidth || 0) - diff):(offset = this$static.columnSelector.offsetWidth || 0);
    $resizeCaptionContainer(lastcell, offset);
  }
   else {
    $resizeCaptionContainer(cell, 0);
  }
}

function $setColumnCollapsingAllowed(this$static, cc){
  cc?(this$static.columnSelector.style['display'] = ($clinit_4() , 'block') , undefined):(this$static.columnSelector.style['display'] = ($clinit_4() , 'none') , undefined);
}

function $setHeaderCell(this$static, index, cell){
  if (cell.parent_0) {
    this$static.tr.removeChild(cell.element_0);
    $setParent(cell, null);
    $remove_17(this$static.visibleCells, cell);
  }
  if (index < this$static.visibleCells.size_0) {
    $insertChild(this$static.tr, cell.element_0, index);
    $setParent(cell, this$static);
    $add_13(this$static.visibleCells, index, cell);
  }
   else if (index == this$static.visibleCells.size_0) {
    this$static.tr.appendChild(cell.element_0);
    $setParent(cell, this$static);
    $add_12(this$static.visibleCells, cell);
  }
   else {
    throw new RuntimeException_0('Header cells must be appended in order');
  }
}

function $setHorizontalScrollPosition_1(this$static, scrollLeft){
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    this$static.hTableWrapper.style['position'] = ($clinit_8() , 'relative');
    this$static.hTableWrapper.style['left'] = -scrollLeft + ($clinit_9() , 'px');
  }
   else {
    $setScrollLeft(this$static.hTableWrapper, scrollLeft);
  }
}

function $updateCellsFromUIDL_0(this$static, uidl){
  var c, caption, cid, cit, col, colIx, it, refreshContentWidths, updated, width, widthStr, count, old, outerIter, entry, c_0;
  it = new UIDL$1_0(uidl);
  updated = new HashSet_0;
  refreshContentWidths = false;
  while (count = it.this$0.length - 2 , count > it.index_0 + 1) {
    col = dynamicCastJso($next_3(it));
    cid = col[1]['cid'];
    old = updated.map.put(cid, updated);
    caption = this$static.this$0.buildCaptionHtmlSnippet(col);
    c = dynamicCast(this$static.availableCells.get_0(cid), 163);
    if (!c) {
      c = new VScrollTable$HeaderCell_0(this$static.this$0, cid, caption);
      this$static.availableCells.put(cid, c);
      if (this$static.this$0.initializedAndAttached) {
        this$static.this$0.initializedAndAttached = false;
        this$static.this$0.initialContentReceived = false;
        this$static.this$0.isNewBody = true;
      }
    }
     else {
      c.captionContainer.innerHTML = caption || '';
    }
    if ('sortable' in col[1]) {
      c.sortable = true;
      $equals_2(cid, this$static.this$0.sortColumn)?(c.sorted = true , c.this$0.sortAscending?(c.getStyleElement()['className'] = 'v-table-header-cell-asc' , undefined):(c.getStyleElement()['className'] = 'v-table-header-cell-desc' , undefined)):(c.sorted = false , c.getStyleElement()['className'] = 'v-table-header-cell' , undefined);
    }
     else {
      c.sortable = false;
    }
    'align' in col[1]?$setAlign_0(c, col[1]['align'].charCodeAt(0)):$setAlign_0(c, 98);
    if ('width' in col[1]) {
      widthStr = col[1]['width'];
      width = __parseAndValidateInt(widthStr);
      width < $getMinWidth(c) && (width = $getMinWidth(c));
      if (width != c.width_0 && !!this$static.this$0.scrollBody_0) {
        colIx = $getColIndexByKey(this$static.this$0, c.cid);
        $scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$TableHead$1_0(this$static, colIx, width));
        refreshContentWidths = true;
      }
       else {
        $setWidth_10(c, width, true);
      }
    }
     else 
      this$static.this$0.recalcWidths && (c.definedWidth = false , $setWidth_10(c, -1, false));
    'er' in col[1] && (col[1]['er'] != c.expandRatio && $triggerLazyColumnAdjustment(c.this$0, false) , c.expandRatio = col[1]['er'] , undefined);
    if ('collapsed' in col[1]) {
      if (c.attached) {
        $removeFromParent_0(c);
        this$static.this$0.headerChangedDuringUpdate = true;
      }
    }
  }
  refreshContentWidths && $scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$TableHead$2_0(this$static));
  for (cit = (outerIter = $keySet(this$static.availableCells).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); cit.val$outerIter.hasNext();) {
    cid = dynamicCast((entry = dynamicCast(cit.val$outerIter.next_0(), 58) , entry.getKey()), 1);
    if (!updated.map.containsKey(cid)) {
      c_0 = dynamicCast(this$static.availableCells.get_0(cid), 163);
      $remove_11(this$static, c_0);
      cit.val$outerIter.remove_1();
      this$static.this$0.initializedAndAttached = false;
      this$static.this$0.initialContentReceived = false;
      this$static.this$0.isNewBody = true;
    }
  }
}

function VScrollTable$TableHead_0(this$0){
  this.this$0 = this$0;
  this.visibleCells = new ArrayList_0;
  this.availableCells = new HashMap_0;
  this.div = $doc.createElement('div');
  this.hTableWrapper = $doc.createElement('div');
  this.hTableContainer = $doc.createElement('div');
  this.table = $doc.createElement('table');
  this.headerTableBody = $doc.createElement('tbody');
  this.tr = $doc.createElement('tr');
  this.columnSelector = $doc.createElement('div');
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && (this.table['cellSpacing'] = 0 , undefined);
  this.hTableWrapper.style['overflow'] = 'hidden';
  this.hTableWrapper['className'] = 'v-table-header';
  this.columnSelector['className'] = 'v-table-column-selector';
  this.columnSelector.style['display'] = 'none';
  this.table.appendChild(this.headerTableBody);
  this.headerTableBody.appendChild(this.tr);
  this.hTableContainer.appendChild(this.table);
  this.hTableWrapper.appendChild(this.hTableContainer);
  this.div.appendChild(this.hTableWrapper);
  this.div.appendChild(this.columnSelector);
  this.element_0 = this.div;
  this.element_0['className'] = 'v-table-header-wrap';
  sinkEvents(this.columnSelector, 1);
  this.availableCells.put('0', new VScrollTable$RowHeadersHeaderCell_0(this$0));
}

function VScrollTable$TableHead(){
}

_ = VScrollTable$TableHead_0.prototype = VScrollTable$TableHead.prototype = new Panel;
_.getActions = function getActions_0(){
  var a_0, actions, c, cid, cols, i, it, outerIter, entry;
  if (this.this$0.columnReordering && this.this$0.columnOrder != null) {
    cols = this.this$0.columnOrder;
  }
   else {
    cols = initDim(_3Ljava_lang_Object_2_classLit, {30:1, 35:1}, 0, this.this$0.visibleColOrder.length + this.this$0.collapsedColumns.map.size_1(), 0);
    for (i = 0; i < this.this$0.visibleColOrder.length; ++i) {
      setCheck(cols, i, this.this$0.visibleColOrder[i]);
    }
    for (it = (outerIter = $keySet(this.this$0.collapsedColumns.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); it.val$outerIter.hasNext();) {
      setCheck(cols, i++, (entry = dynamicCast(it.val$outerIter.next_0(), 58) , entry.getKey()));
    }
  }
  actions = initDim(_3Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit, {30:1, 35:1}, 102, cols.length, 0);
  for (i = 0; i < cols.length; ++i) {
    cid = dynamicCast(cols[i], 1);
    c = dynamicCast(this.availableCells.get_0(cid), 163);
    a_0 = new VScrollTable$TableHead$VisibleColumnAction_0(this, c.cid);
    a_0.caption_0 = c.captionContainer.textContent;
    !!c.parent_0 || (a_0.collapsed = true);
    setCheck(actions, i, a_0);
  }
  return actions;
}
;
_.getClass$ = function getClass_717(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableHead_2_classLit;
}
;
_.getClient = function getClient_0(){
  return this.this$0.client;
}
;
_.getPaintableId = function getPaintableId_0(){
  return this.this$0.paintableId;
}
;
_.iterator_0 = function iterator_7(){
  return new AbstractList$IteratorImpl_0(this.visibleCells);
}
;
_.onBrowserEvent = function onBrowserEvent_38(event_0){
  var left, top_0;
  if (this.this$0.enabled) {
    if (event_0.target == this.columnSelector) {
      left = $getAbsoluteLeft(this.columnSelector) | 0;
      top_0 = ($getAbsoluteTop(this.columnSelector) | 0) + (parseInt(this.columnSelector['offsetHeight']) || 0);
      $showAt_0($getContextMenu(this.this$0.client), this, left, top_0);
    }
  }
}
;
_.onDetach = function onDetach_16(){
  $onDetach(this);
  !!this.this$0.client && $ensureHidden($getContextMenu(this.this$0.client), this);
}
;
_.remove_2 = function remove_16(w){
  return $remove_11(this, w);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 27:1, 33:1, 69:1, 70:1, 75:1};
_.focusedSlot = -1;
_.this$0 = null;
function VScrollTable$TableHead$1_0(this$1, val$colIx, val$newWidth){
  this.this$1 = this$1;
  this.val$colIx = val$colIx;
  this.val$newWidth = val$newWidth;
}

function VScrollTable$TableHead$1(){
}

_ = VScrollTable$TableHead$1_0.prototype = VScrollTable$TableHead$1.prototype = new Object_0;
_.execute_0 = function execute_50(){
  $setColWidth(this.this$1.this$0, this.val$colIx, this.val$newWidth, true);
}
;
_.getClass$ = function getClass_718(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableHead$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$1 = null;
_.val$colIx = 0;
_.val$newWidth = 0;
function VScrollTable$TableHead$2_0(this$1){
  this.this$1 = this$1;
}

function VScrollTable$TableHead$2(){
}

_ = VScrollTable$TableHead$2_0.prototype = VScrollTable$TableHead$2.prototype = new Object_0;
_.execute_0 = function execute_51(){
  $triggerLazyColumnAdjustment(this.this$1.this$0, true);
}
;
_.getClass$ = function getClass_719(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableHead$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$1 = null;
function VScrollTable$TableHead$VisibleColumnAction_0(this$1, colKey){
  this.this$1 = this$1;
  this.owner = this$1;
  this.colKey = colKey;
  this.caption_0 = dynamicCast(this$1.this$0.tHead.availableCells.get_0(colKey), 163).captionContainer.textContent;
  this.currentlyFocusedRow = this$1.this$0.focusedRow;
}

function VScrollTable$TableHead$VisibleColumnAction(){
}

_ = VScrollTable$TableHead$VisibleColumnAction_0.prototype = VScrollTable$TableHead$VisibleColumnAction.prototype = new Action;
_.execute_0 = function execute_52(){
  $getContextMenu(this.this$1.this$0.client).hide_0(false);
  if (this.this$1.this$0.collapsedColumns.map.containsKey(this.colKey)) {
    this.this$1.this$0.collapsedColumns.map.remove_4(this.colKey) != null;
  }
   else {
    $removeCell_0(this.this$1.this$0.tHead, this.colKey);
    $add_14(this.this$1.this$0.collapsedColumns, this.colKey);
    $triggerLazyColumnAdjustment(this.this$1.this$0, true);
  }
  $updateVariable_2(this.this$1.this$0.client, this.this$1.this$0.paintableId, 'collapsedcolumns', dynamicCast($toArray(this.this$1.this$0.collapsedColumns, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, this.this$1.this$0.collapsedColumns.map.size_1(), 0)), 59), false);
  $refreshContent(this.this$1.this$0.rowRequestHandler);
  $scheduleFinally(($clinit_1() , INSTANCE), new VScrollTable$14_0(this.this$1.this$0, this.currentlyFocusedRow));
}
;
_.getClass$ = function getClass_720(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableHead$VisibleColumnAction_2_classLit;
}
;
_.getHTML = function getHTML_0(){
  var buf;
  buf = new StringBuffer_0;
  this.collapsed?(buf.impl.string += '<span class="v-off">' , buf):(buf.impl.string += '<span class="v-on">' , buf);
  $append_0(buf, $getHTML_0(this));
  buf.impl.string += '<\/span>';
  return buf.impl.string;
}
;
_.castableTypeMap$ = {3:1, 14:1, 102:1};
_.colKey = null;
_.collapsed = false;
_.currentlyFocusedRow = null;
_.this$1 = null;
function $addRow(this$static, row){
  $setIndex(row, this$static.firstRendered + this$static.renderedRows.size_0);
  row.selected_0 && setStyleName(row.element_0, 'v-selected', true);
  this$static.tBodyElement.appendChild(row.element_0);
  $setParent(row, this$static);
  $addLast(this$static.renderedRows, row);
}

function $addRowBeforeFirstRendered(this$static, row){
  $setIndex(row, this$static.firstRendered - 1);
  row.selected_0 && setStyleName(row.getStyleElement(), 'v-selected', true);
  this$static.tBodyElement.insertBefore(row.element_0, this$static.tBodyElement.firstChild);
  $setParent(row, this$static);
  $add_11(this$static.renderedRows, 0, row);
}

function $constructDOM(this$static){
  var childNodes, i, item;
  this$static.table['className'] = 'v-table-table';
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && (this$static.table['cellSpacing'] = 0 , undefined);
  this$static.preSpacer['className'] = 'v-table-row-spacer';
  this$static.postSpacer['className'] = 'v-table-row-spacer';
  this$static.table.appendChild(this$static.tBodyElement);
  this$static.container.appendChild(this$static.preSpacer);
  this$static.container.appendChild(this$static.table);
  this$static.container.appendChild(this$static.postSpacer);
  if ((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).touchDevice) {
    childNodes = this$static.container.childNodes;
    for (i = 0; i < childNodes.length; ++i) {
      item = childNodes[i];
      item.style['webkitTransform'] = 'translate3d(0,0,0)';
    }
  }
}

function $detectExtrawidth(this$static){
  var firstTD, item, next, noCells, rows, scrollTableRow, sorted, wrapper;
  rows = this$static.tBodyElement.rows;
  if (rows.length == 0) {
    scrollTableRow = new VScrollTable$VScrollTableBody$VScrollTableRow_1(this$static);
    this$static.tBodyElement.appendChild(scrollTableRow.element_0);
    $detectExtrawidth(this$static);
    this$static.tBodyElement.removeChild(scrollTableRow.element_0);
  }
   else {
    noCells = false;
    item = rows[0];
    firstTD = item.cells[0];
    if (!firstTD) {
      noCells = true;
      next = dynamicCast($next_7($listIterator(this$static.renderedRows, 0)), 78);
      sorted = !!$getHeaderCell(this$static.this$0_0.tHead, 0) && $getHeaderCell(this$static.this$0_0.tHead, 0).sorted;
      next.addCell(null, '', 98, '', true, sorted, null);
      firstTD = item.cells[0];
    }
    wrapper = $getFirstChildElement(firstTD);
    this$static.cellExtraWidth = (firstTD.offsetWidth || 0) - (wrapper.offsetWidth || 0);
    noCells && $getParentElement(firstTD).removeChild(firstTD);
  }
}

function $ensureCacheFilled(this$static){
  var reactFirstRow, reactLastRow;
  reactFirstRow = ~~Math.max(Math.min(this$static.this$0_0.firstRowInViewPort - this$static.this$0_0.pageLength * this$static.this$0_0.cache_react_rate, 2147483647), -2147483648);
  reactLastRow = ~~Math.max(Math.min(this$static.this$0_0.firstRowInViewPort + this$static.this$0_0.pageLength + this$static.this$0_0.pageLength * this$static.this$0_0.cache_react_rate, 2147483647), -2147483648);
  reactFirstRow < 0 && (reactFirstRow = 0);
  reactLastRow >= this$static.this$0_0.totalRows && (reactLastRow = this$static.this$0_0.totalRows - 1);
  if (this$static.lastRendered < reactFirstRow || this$static.firstRendered > reactLastRow) {
    $setReqFirstRow(this$static.this$0_0.rowRequestHandler, reactFirstRow);
    this$static.this$0_0.rowRequestHandler.reqRows = reactLastRow - reactFirstRow + 1;
    $deferRowFetch(this$static.this$0_0.rowRequestHandler, 1);
  }
   else if (this$static.lastRendered < reactLastRow) {
    $setReqFirstRow(this$static.this$0_0.rowRequestHandler, this$static.lastRendered + 1);
    this$static.this$0_0.rowRequestHandler.reqRows = reactLastRow - this$static.lastRendered;
    $deferRowFetch(this$static.this$0_0.rowRequestHandler, 1);
  }
   else if (this$static.firstRendered > reactFirstRow) {
    $setReqFirstRow(this$static.this$0_0.rowRequestHandler, reactFirstRow);
    this$static.this$0_0.rowRequestHandler.reqRows = this$static.firstRendered - reactFirstRow;
    $deferRowFetch(this$static.this$0_0.rowRequestHandler, 1);
  }
}

function $ensureFocus(this$static){
  this$static.this$0_0.hasFocus || $setFocus_2(this$static.this$0_0.scrollBodyPanel, true);
}

function $fixSpacers(this$static){
  var postpx, prepx;
  prepx = $measureRowHeightOffset(this$static.this$0_0, this$static.firstRendered);
  prepx < 0 && (prepx = 0);
  this$static.preSpacer.style['height'] = prepx + ($clinit_9() , 'px');
  postpx = $measureRowHeightOffset(this$static.this$0_0, this$static.this$0_0.totalRows - 1) - $measureRowHeightOffset(this$static.this$0_0, this$static.lastRendered);
  postpx < 0 && (postpx = 0);
  this$static.postSpacer.style['height'] = postpx + 'px';
}

function $getAvailableWidth_0(this$static){
  var availW;
  availW = (parseInt(this$static.this$0_0.scrollBodyPanel.element_0['offsetWidth']) || 0) - $getBorderWidth(this$static.this$0_0);
  return availW;
}

function $getCellExtraWidth(this$static){
  this$static.cellExtraWidth < 0 && $detectExtrawidth(this$static);
  return this$static.cellExtraWidth;
}

function $getColWidth_0(this$static, columnIndex){
  var row, row$iterator, tr, wrapperdiv;
  if (this$static.tBodyMeasurementsDone) {
    if (this$static.renderedRows.size_0 == 0) {
      return 0;
    }
    for (row$iterator = $listIterator(this$static.renderedRows, 0); row$iterator.currentNode != row$iterator.this$0.header;) {
      row = dynamicCast($next_7(row$iterator), 70);
      if (!(row != null && row.castableTypeMap$ && !!row.castableTypeMap$[167])) {
        tr = row.element_0;
        wrapperdiv = $getFirstChildElement(tr.cells[columnIndex]);
        return wrapperdiv.offsetWidth || 0;
      }
    }
    return 0;
  }
   else {
    return 0;
  }
}

function $getRequiredHeight(this$static){
  return (this$static.preSpacer.offsetHeight || 0) + (this$static.postSpacer.offsetHeight || 0) + getRequiredHeight(this$static.table);
}

function $getRowByRowIndex(this$static, indexInTable){
  var internalIndex;
  internalIndex = indexInTable - this$static.firstRendered;
  return internalIndex >= 0 && internalIndex < this$static.renderedRows.size_0?dynamicCast($get_3(this$static.renderedRows, internalIndex), 78):null;
}

function $getRowHeight(this$static, forceUpdate){
  var rowCount, scrollTableRow, tableHeight;
  if (this$static.tBodyMeasurementsDone && !forceUpdate) {
    return this$static.rowHeight;
  }
   else {
    if (this$static.tBodyElement.rows.length > 0) {
      tableHeight = this$static.table.offsetHeight || 0;
      rowCount = this$static.tBodyElement.rows.length;
      this$static.rowHeight = tableHeight / rowCount;
    }
     else {
      if (this$static.attached) {
        scrollTableRow = new VScrollTable$VScrollTableBody$VScrollTableRow_1(this$static);
        this$static.tBodyElement.appendChild(scrollTableRow.element_0);
        $getRowHeight(this$static, forceUpdate);
        this$static.tBodyElement.removeChild(scrollTableRow.element_0);
      }
       else {
        return 24;
      }
    }
    this$static.tBodyMeasurementsDone = true;
    return this$static.rowHeight;
  }
}

function $insertAndReindexRows(this$static, rowData, firstIndex, rows){
  var actualIxOfFirstRowAfterInserted, inserted, ix, r;
  inserted = $insertRows(this$static, rowData, firstIndex, rows);
  actualIxOfFirstRowAfterInserted = firstIndex + rows - this$static.firstRendered;
  for (ix = actualIxOfFirstRowAfterInserted; ix < this$static.renderedRows.size_0; ++ix) {
    r = dynamicCast($get_3(this$static.renderedRows, ix), 78);
    $setIndex(r, r.index_0 + rows);
  }
  $fixSpacers(this$static);
  this$static.container.style['height'] = $measureRowHeightOffset(this$static.this$0_0, this$static.this$0_0.totalRows) + 'px';
  return inserted;
}

function $insertRowAt(this$static, row, index){
  var actualIx, sibling, internalIndex;
  $setIndex(row, index);
  row.selected_0 && setStyleName(row.element_0, 'v-selected', true);
  if (index > 0) {
    sibling = (internalIndex = index - 1 - this$static.firstRendered , internalIndex >= 0 && internalIndex < this$static.renderedRows.size_0?dynamicCast($get_3(this$static.renderedRows, internalIndex), 78):null);
    $insertAfter(this$static.tBodyElement, row.element_0, sibling.element_0);
  }
   else {
    sibling = $getRowByRowIndex(this$static, index);
    this$static.tBodyElement.insertBefore(row.element_0, sibling.element_0);
  }
  $setParent(row, this$static);
  actualIx = index - this$static.firstRendered;
  $add_11(this$static.renderedRows, actualIx, row);
}

function $insertRows(this$static, rowData, firstIndex, rows){
  var i, insertedRows, it, ix, row, rowArray, count, count_0, count_1;
  this$static.aligns = $getColumnAlignments(this$static.this$0_0.tHead);
  it = new UIDL$1_0(rowData);
  insertedRows = new ArrayList_0;
  if (firstIndex == this$static.lastRendered + 1) {
    while (count = it.this$0.length - 2 , count > it.index_0 + 1) {
      row = $prepareRow_0(this$static, dynamicCastJso($next_3(it)));
      $addRow(this$static, row);
      setCheck(insertedRows.array, insertedRows.size_0++, row);
      ++this$static.lastRendered;
    }
    $fixSpacers(this$static);
  }
   else if (firstIndex + rows == this$static.firstRendered) {
    rowArray = initDim(_3Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow_2_classLit, {30:1, 35:1}, 78, rows, 0);
    i = rows;
    while (count_0 = it.this$0.length - 2 , count_0 > it.index_0 + 1) {
      --i;
      setCheck(rowArray, i, $prepareRow_0(this$static, dynamicCastJso($next_3(it))));
    }
    for (i = 0; i < rows; ++i) {
      $addRowBeforeFirstRendered(this$static, rowArray[i]);
      setCheck(insertedRows.array, insertedRows.size_0++, rowArray[i]);
      --this$static.firstRendered;
    }
  }
   else {
    ix = firstIndex;
    while (count_1 = it.this$0.length - 2 , count_1 > it.index_0 + 1) {
      row = $prepareRow_0(this$static, dynamicCastJso($next_3(it)));
      $insertRowAt(this$static, row, ix);
      setCheck(insertedRows.array, insertedRows.size_0++, row);
      ++this$static.lastRendered;
      ++ix;
    }
    $fixSpacers(this$static);
  }
  return insertedRows;
}

function $insertRowsDeleteBelow(this$static, rowData, firstIndex, rows){
  $unlinkAllRowsStartingAt(this$static, firstIndex);
  $insertRows(this$static, rowData, firstIndex, rows);
  $fixSpacers(this$static);
  this$static.container.style['height'] = $measureRowHeightOffset(this$static.this$0_0, this$static.this$0_0.totalRows) + 'px';
}

function $moveCol(this$static, oldIndex, newIndex){
  var row, rows, td;
  rows = $listIterator(this$static.renderedRows, 0);
  while (rows.currentNode != rows.this$0.header) {
    row = dynamicCast($next_7(rows), 78);
    td = $getChild(row.element_0, oldIndex);
    if (td) {
      row.element_0.removeChild(td);
      $insertChild(row.element_0, td, newIndex);
    }
  }
}

function $prepareRow_0(this$static, uidl){
  var row;
  row = this$static.createRow(uidl, this$static.aligns);
  row.initCellWidths();
  return row;
}

function $reLayoutComponents(this$static){
  var r, w, w$iterator, widget, widget$iterator;
  for (w$iterator = $listIterator(this$static.renderedRows, 0); w$iterator.currentNode != w$iterator.this$0.header;) {
    w = dynamicCast($next_7(w$iterator), 70);
    r = dynamicCast(w, 78);
    for (widget$iterator = new AbstractList$IteratorImpl_0(r.childWidgets); widget$iterator.i < widget$iterator.this$0_0.size_1();) {
      widget = dynamicCast($next_5(widget$iterator), 70);
      $handleComponentRelativeSize_0(this$static.this$0_0.client, widget);
    }
  }
}

function $renderInitialRows(this$static, rowData, firstIndex, rows){
  var it, row, count;
  this$static.firstRendered = firstIndex;
  this$static.lastRendered = firstIndex + rows - 1;
  it = new UIDL$1_0(rowData);
  this$static.aligns = $getColumnAlignments(this$static.this$0_0.tHead);
  while (count = it.this$0.length - 2 , count > it.index_0 + 1) {
    row = this$static.createRow(dynamicCastJso($next_3(it)), this$static.aligns);
    $addRow(this$static, row);
  }
  this$static.attached && $fixSpacers(this$static);
}

function $renderRows(this$static, rowData, firstIndex, rows){
  var i, it, row, rowArray, count, count_0, count_1;
  this$static.aligns = $getColumnAlignments(this$static.this$0_0.tHead);
  it = new UIDL$1_0(rowData);
  if (firstIndex == this$static.lastRendered + 1) {
    while (count = it.this$0.length - 2 , count > it.index_0 + 1) {
      row = $prepareRow_0(this$static, dynamicCastJso($next_3(it)));
      $addRow(this$static, row);
      ++this$static.lastRendered;
    }
    $fixSpacers(this$static);
  }
   else if (firstIndex + rows == this$static.firstRendered) {
    rowArray = initDim(_3Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow_2_classLit, {30:1, 35:1}, 78, rows, 0);
    i = rows;
    while (count_0 = it.this$0.length - 2 , count_0 > it.index_0 + 1) {
      --i;
      setCheck(rowArray, i, $prepareRow_0(this$static, dynamicCastJso($next_3(it))));
    }
    for (i = 0; i < rows; ++i) {
      $addRowBeforeFirstRendered(this$static, rowArray[i]);
      --this$static.firstRendered;
    }
  }
   else {
    while (this$static.lastRendered + 1 > this$static.firstRendered) {
      $unlinkRow(this$static, false);
    }
    row = $prepareRow_0(this$static, dynamicCastJso($next_3(it)));
    this$static.firstRendered = firstIndex;
    this$static.lastRendered = firstIndex - 1;
    $addRow(this$static, row);
    ++this$static.lastRendered;
    $fixSpacers(this$static);
    this$static.container.style['height'] = $measureRowHeightOffset(this$static.this$0_0, this$static.this$0_0.totalRows) + 'px';
    $fixSpacers(this$static);
    while (count_1 = it.this$0.length - 2 , count_1 > it.index_0 + 1) {
      $addRow(this$static, $prepareRow_0(this$static, dynamicCastJso($next_3(it))));
      ++this$static.lastRendered;
    }
    $fixSpacers(this$static);
  }
  $ensureCacheFilled(this$static);
}

function $restoreRowVisibility(this$static){
  var row, row$iterator;
  for (row$iterator = $listIterator(this$static.renderedRows, 0); row$iterator.currentNode != row$iterator.this$0.header;) {
    row = dynamicCast($next_7(row$iterator), 70);
    row.element_0.style['visibility'] = '';
  }
}

function $setColWidth_0(this$static, colIndex, w){
  var row, row$iterator;
  for (row$iterator = $listIterator(this$static.renderedRows, 0); row$iterator.currentNode != row$iterator.this$0.header;) {
    row = dynamicCast($next_7(row$iterator), 70);
    dynamicCast(row, 78).setCellWidth(colIndex, w);
  }
}

function $unlinkAllRowsStartingAt(this$static, index){
  var ix;
  this$static.firstRendered > index && (index = this$static.firstRendered);
  for (ix = this$static.renderedRows.size_0 - 1; ix >= index; --ix) {
    $unlinkRowAtActualIndex(this$static, ix - this$static.firstRendered);
    --this$static.lastRendered;
  }
  $fixSpacers(this$static);
}

function $unlinkAndReindexRows(this$static, firstIndex, count){
  var actualFirstIx, ix, r;
  $unlinkRows(this$static, firstIndex, count);
  actualFirstIx = firstIndex - this$static.firstRendered;
  for (ix = actualFirstIx; ix < this$static.renderedRows.size_0; ++ix) {
    r = dynamicCast($get_3(this$static.renderedRows, ix), 78);
    $setIndex(r, r.index_0 - count);
  }
  $fixSpacers(this$static);
  this$static.container.style['height'] = $measureRowHeightOffset(this$static.this$0_0, this$static.this$0_0.totalRows) + 'px';
}

function $unlinkRow(this$static, fromBeginning){
  var actualIx;
  if (this$static.lastRendered - this$static.firstRendered < 0) {
    return false;
  }
  if (fromBeginning) {
    actualIx = 0;
    ++this$static.firstRendered;
  }
   else {
    actualIx = this$static.renderedRows.size_0 - 1;
    --this$static.lastRendered;
  }
  if (actualIx >= 0) {
    $unlinkRowAtActualIndex(this$static, actualIx);
    $fixSpacers(this$static);
    return true;
  }
  return false;
}

function $unlinkRowAtActualIndex(this$static, index){
  var i, td, toBeRemoved;
  toBeRemoved = dynamicCast($get_3(this$static.renderedRows, index), 78);
  $registerTooltip(this$static.this$0_0.client, this$static.this$0_0, toBeRemoved.element_0, null);
  for (i = 0; i < toBeRemoved.element_0.childNodes.length; ++i) {
    td = toBeRemoved.element_0.childNodes[i];
    $registerTooltip(this$static.this$0_0.client, this$static.this$0_0, td, null);
  }
  $add_12(this$static.this$0_0.lazyUnregistryBag, toBeRemoved);
  this$static.tBodyElement.removeChild(toBeRemoved.element_0);
  $setParent(toBeRemoved, null);
  $remove_15(this$static.renderedRows, index);
}

function $unlinkRows(this$static, firstIndex, count){
  var ix, lastIndex;
  if (count < 1) {
    return;
  }
  this$static.firstRendered > firstIndex && this$static.firstRendered < firstIndex + count && (firstIndex = this$static.firstRendered);
  lastIndex = firstIndex + count - 1;
  this$static.lastRendered < lastIndex && (lastIndex = this$static.lastRendered);
  for (ix = lastIndex; ix >= firstIndex; --ix) {
    $unlinkRowAtActualIndex(this$static, ix - this$static.firstRendered);
    --this$static.lastRendered;
  }
  $fixSpacers(this$static);
}

function VScrollTable$VScrollTableBody_0(this$0){
  this.this$0_0 = this$0;
  this.renderedRows = new LinkedList_0;
  this.preSpacer = $doc.createElement('div');
  this.postSpacer = $doc.createElement('div');
  this.container = $doc.createElement('div');
  this.tBodyElement = $doc.createElement('tbody');
  this.table = $doc.createElement('table');
  $constructDOM(this);
  this.element_0 = this.container;
}

function VScrollTable$VScrollTableBody(){
}

_ = VScrollTable$VScrollTableBody_0.prototype = VScrollTable$VScrollTableBody.prototype = new Panel;
_.createRow = function createRow(uidl, aligns2){
  if ('gen_html' in uidl[1]) {
    return new VScrollTable$VScrollTableBody$VScrollTableGeneratedRow_0(this, uidl, aligns2);
  }
  return new VScrollTable$VScrollTableBody$VScrollTableRow_0(this, uidl, aligns2);
}
;
_.getClass$ = function getClass_721(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody_2_classLit;
}
;
_.iterator_0 = function iterator_8(){
  return $listIterator(this.renderedRows, 0);
}
;
_.onAttach = function onAttach_10(){
  $onAttach(this);
  $fixSpacers(this);
  this.container.style['height'] = $measureRowHeightOffset(this.this$0_0, this.this$0_0.totalRows) + 'px';
}
;
_.remove_2 = function remove_17(w){
  throw new UnsupportedOperationException_0;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 69:1, 70:1, 75:1};
_.aligns = null;
_.cellExtraWidth = -1;
_.firstRendered = 0;
_.lastRendered = 0;
_.rowHeight = -1;
_.tBodyMeasurementsDone = false;
_.this$0_0 = null;
function $addCellsFromUIDL(this$static, uidl, aligns, col, visibleColumnIndex){
  var cell, cellContent, cells, columnId, description, sorted, style, count;
  cells = new UIDL$1_0(uidl);
  while (count = cells.this$0.length - 2 , count > cells.index_0 + 1) {
    cell = $next_3(cells);
    ++visibleColumnIndex;
    columnId = this$static.this$1_1.this$0_0.visibleColOrder[visibleColumnIndex];
    style = '';
    'style-' + columnId in uidl[1] && (style = uidl[1]['style-' + columnId]);
    description = null;
    'descr-' + columnId in uidl[1] && (description = uidl[1]['descr-' + columnId]);
    sorted = $getHeaderCell(this$static.this$1_1.this$0_0.tHead, col).sorted;
    if (cell != null && cell.castableTypeMap$ && !!cell.castableTypeMap$[1]) {
      this$static.addCell(uidl, toString__devirtual$(cell), aligns[col++], style, this$static.isRenderHtmlInCells(), sorted, description);
    }
     else {
      cellContent = $getPaintable(this$static.this$1_1.this$0_0.client, dynamicCastJso(cell));
      this$static.addCell_0(uidl, dynamicCast(cellContent, 70), aligns[col++], style, sorted);
      $paintComponent(this$static, cellContent, dynamicCastJso(cell));
    }
  }
}

function $getAllocatedSpace(this$static, child){
  var headerCell, i, w;
  w = 0;
  i = $getColIndexOf(this$static, child);
  headerCell = $getHeaderCell(this$static.this$1_1.this$0_0.tHead, i);
  !!headerCell && (this$static.this$1_1.this$0_0.initializedAndAttached?(w = headerCell.width_0):(w = (parseInt(headerCell.element_0['offsetWidth']) || 0) - $getCellExtraWidth(this$static.this$1_1)));
  return new VScrollTable$VScrollTableBody$VScrollTableRow$4_0(this$static, w);
}

function $getColIndexOf(this$static, child){
  var cells, i, widgetCell, parent_0;
  widgetCell = $getParentElement((parent_0 = child.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0));
  cells = this$static.rowElement.cells;
  for (i = 0; i < cells.length; ++i) {
    if (cells[i] == widgetCell) {
      return i;
    }
  }
  return -1;
}

function $getEventTargetTdOrTr(this$static, event_0){
  var element, eventTarget, thisTrElement, widget;
  eventTarget = event_0.target;
  widget = findWidget(eventTarget, null);
  thisTrElement = this$static.element_0;
  if (widget != this$static) {
    while (!!widget && widget.getParent() != this$static) {
      widget = widget.getParent();
    }
    if (!(widget != null && widget.castableTypeMap$ && !!widget.castableTypeMap$[168]) && !(widget != null && widget.castableTypeMap$ && !!widget.castableTypeMap$[169]) && !(widget != null && widget.castableTypeMap$ && !!widget.castableTypeMap$[170] && !!dynamicCast(widget, 170).element_0['readOnly'])) {
      return null;
    }
  }
  if (eventTarget == thisTrElement) {
    return thisTrElement;
  }
  element = eventTarget;
  while (!!element && $getParentElement(element) != thisTrElement) {
    element = $getParentElement(element);
  }
  return element;
}

function $handleClickEvent(this$static, event_0, targetTdOrTr, immediate){
  var childIndex, colKey, details;
  if (!$hasEventListeners_0(this$static.this$1_1.this$0_0.client.idToPaintableDetail[dynamicCast(this$static.this$1_1.this$0_0, 70).element_0.tkPid], 'itemClick')) {
    return false;
  }
  $addVariableToQueue(this$static.this$1_1.this$0_0.client, this$static.this$1_1.this$0_0.paintableId, 'clickedKey', $escapeVariableValue('' + this$static.rowKey), false, 115);
  if (this$static.element_0 == $getParentElement(targetTdOrTr)) {
    childIndex = $getChildIndex(this$static.element_0, targetTdOrTr);
    colKey = $getHeaderCell(this$static.this$1_1.this$0_0.tHead, childIndex).cid;
    $addVariableToQueue(this$static.this$1_1.this$0_0.client, this$static.this$1_1.this$0_0.paintableId, 'clickedColKey', $escapeVariableValue(colKey), false, 115);
  }
  details = new MouseEventDetails_0(event_0);
  $updateVariable_0(this$static.this$1_1.this$0_0.client, this$static.this$1_1.this$0_0.paintableId, 'clickEvent', '' + details.button_0 + ',' + details.clientX_0 + ',' + details.clientY_0 + ',' + details.altKey_0 + ',' + details.ctrlKey_0 + ',' + details.metaKey_0 + ',' + details.shiftKey_0 + ',' + details.type_0 + ',' + details.relativeX + ',' + details.relativeY, immediate);
  return true;
}

function $handleTooltips(this$static, event_0, target){
  var container, containsWidget, w, w$iterator, widget;
  if ($equals_2('TD', target.tagName)) {
    container = $getFirstChildElement(target);
    widget = $getFirstChildElement(container);
    containsWidget = false;
    for (w$iterator = new AbstractList$IteratorImpl_0(this$static.childWidgets); w$iterator.i < w$iterator.this$0_0.size_1();) {
      w = dynamicCast($next_5(w$iterator), 70);
      if (widget == w.element_0) {
        containsWidget = true;
        break;
      }
    }
    containsWidget || ($getTooltipTitleInfo(this$static.this$1_1.this$0_0.client, this$static.this$1_1.this$0_0, target)?($handleTooltipEvent(this$static.this$1_1.this$0_0.client.tooltip, event_0, this$static.this$1_1.this$0_0, target) , undefined):($handleTooltipEvent(this$static.this$1_1.this$0_0.client.tooltip, event_0, this$static.this$1_1.this$0_0, $getParentElement(target)) , undefined));
  }
   else {
    $handleTooltipEvent(this$static.this$1_1.this$0_0.client.tooltip, event_0, this$static.this$1_1.this$0_0, target);
  }
}

function $initCellWidths(this$static){
  var cells, i, w;
  cells = this$static.this$1_1.this$0_0.tHead.visibleCells.size_0;
  for (i = 0; i < cells; ++i) {
    w = $getColWidth(this$static.this$1_1.this$0_0, $getHeaderCell(this$static.this$1_1.this$0_0.tHead, i).cid);
    w < 0 && (w = 0);
    this$static.setCellWidth(i, w);
  }
}

function $initCellWithText(this$static, text, align, style, textIsHTML, sorted, description, td){
  var className, container, info;
  container = $doc.createElement('div');
  className = 'v-table-cell-content';
  style != null && !$equals_2(style, '') && (className += ' v-table-cell-content-' + style);
  sorted && (className += ' v-table-cell-content-sorted');
  td.className = className;
  container.className = 'v-table-cell-wrapper';
  textIsHTML?(container.innerHTML = text || '' , undefined):(container.textContent = text || '' , undefined);
  if (align != 98) {
    switch (align) {
      case 99:
        container.style['textAlign'] = 'center';
        break;
      case 101:
      default:container.style['textAlign'] = 'right';
    }
  }
  if (description != null && !$equals_2(description, '')) {
    info = new TooltipInfo_1(description);
    $registerTooltip(this$static.this$1_1.this$0_0.client, this$static.this$1_1.this$0_0, td, info);
  }
   else {
    $registerTooltip(this$static.this$1_1.this$0_0.client, this$static.this$1_1.this$0_0, td, null);
  }
  td.appendChild(container);
  this$static.element_0.appendChild(td);
}

function $initCellWithWidget(this$static, w, align, style, sorted, td){
  var className, container;
  container = $doc.createElement('div');
  className = 'v-table-cell-content';
  style != null && !$equals_2(style, '') && (className += ' v-table-cell-content-' + style);
  sorted && (className += ' v-table-cell-content-sorted');
  td.className = className;
  container.className = 'v-table-cell-wrapper';
  if (align != 98) {
    switch (align) {
      case 99:
        container.style['textAlign'] = 'center';
        break;
      case 101:
      default:container.style['textAlign'] = 'right';
    }
  }
  td.appendChild(container);
  this$static.element_0.appendChild(td);
  $removeFromParent_0(w);
  container.appendChild(w.element_0);
  $setParent(w, this$static);
  $add_12(this$static.childWidgets, w);
}

function $isInViewPort(this$static){
  var absoluteTop, maxVisible, scrollPosition;
  absoluteTop = $getAbsoluteTop(this$static.element_0) | 0;
  scrollPosition = $getScrollPosition(this$static.this$1_1.this$0_0.scrollBodyPanel);
  if (absoluteTop < scrollPosition) {
    return false;
  }
  maxVisible = scrollPosition + (parseInt(this$static.this$1_1.this$0_0.scrollBodyPanel.element_0['offsetHeight']) || 0) - (parseInt(this$static.element_0['offsetHeight']) || 0);
  if (absoluteTop > maxVisible) {
    return false;
  }
  return true;
}

function $isSignificantMove(this$static, event_0){
  var touch;
  if (!this$static.touchStart) {
    return false;
  }
  touch = event_0.changedTouches[0];
  if (abs(touch.clientX - this$static.touchStartX) > 3) {
    return true;
  }
  if (abs(touch.clientY - this$static.touchStartY) > 3) {
    return true;
  }
  return false;
}

function $onAttach_2(this$static){
  var paintable, uidl, uidl$iterator;
  $onAttach(this$static);
  if (this$static.pendingComponentPaints) {
    for (uidl$iterator = $listIterator(this$static.pendingComponentPaints, 0); uidl$iterator.currentNode != uidl$iterator.this$0.header;) {
      uidl = dynamicCastJso($next_7(uidl$iterator));
      paintable = $getPaintable(this$static.this$1_1.this$0_0.client, uidl);
      paintable.updateFromUIDL(uidl, this$static.this$1_1.this$0_0.client);
    }
    $clear_7(this$static.pendingComponentPaints);
  }
}

function $onBrowserEvent_4(this$static, event_0){
  var clickEventSent, currentlyJustThisRowSelected, targetCellOrRowFound, targetTdOrTr, touch, type, wasSelected, el, createMouseClickEvent, createMouseDownEvent, createMouseUpEvent, target, touch_0;
  if (this$static.this$1_1.this$0_0.enabled) {
    type = $eventGetTypeInt(event_0.type);
    targetTdOrTr = $getEventTargetTdOrTr(this$static, event_0);
    if (type == 262144) {
      $showContextMenu(this$static, event_0);
      if (this$static.this$1_1.this$0_0.enabled && (this$static.actionKeys != null || $hasEventListeners_0(this$static.this$1_1.this$0_0.client.idToPaintableDetail[dynamicCast(this$static.this$1_1.this$0_0, 70).element_0.tkPid], 'itemClick'))) {
        event_0.stopPropagation();
        event_0.preventDefault();
      }
      return;
    }
    targetCellOrRowFound = !!targetTdOrTr;
    targetCellOrRowFound && $handleTooltips(this$static, event_0, targetTdOrTr);
    switch (type) {
      case 2:
        targetCellOrRowFound && $handleClickEvent(this$static, event_0, targetTdOrTr, true);
        break;
      case 8:
        if (targetCellOrRowFound) {
          clickEventSent = $handleClickEvent(this$static, event_0, targetTdOrTr, false);
          if ($eventGetButton(event_0) == 1 && this$static.this$1_1.this$0_0.selectMode > 0) {
            if ((!!event_0.ctrlKey || !!event_0.metaKey) && !!event_0.shiftKey && $isMultiSelectModeDefault(this$static.this$1_1.this$0_0)) {
              $toggleShiftSelection(this$static, false);
              $setRowFocus(this$static.this$1_1.this$0_0, this$static);
            }
             else if ((!!event_0.ctrlKey || !!event_0.metaKey) && $isMultiSelectModeDefault(this$static.this$1_1.this$0_0)) {
              wasSelected = this$static.selected_0;
              $toggleSelection(this$static);
              $setRowFocus(this$static.this$1_1.this$0_0, this$static);
              this$static.this$1_1.this$0_0.selectionRangeStart = this$static;
              wasSelected && $removeRowFromUnsentSelectionRanges(this$static.this$1_1.this$0_0, this$static);
            }
             else if ((!!event_0.ctrlKey || !!event_0.metaKey) && this$static.this$1_1.this$0_0.selectMode == 1) {
              if (!this$static.selected_0 || this$static.selected_0 && this$static.this$1_1.this$0_0.nullSelectionAllowed) {
                this$static.selected_0 || $deselectAll(this$static.this$1_1.this$0_0);
                $toggleSelection(this$static);
                $setRowFocus(this$static.this$1_1.this$0_0, this$static);
              }
            }
             else if (!!event_0.shiftKey && $isMultiSelectModeDefault(this$static.this$1_1.this$0_0)) {
              $toggleShiftSelection(this$static, true);
            }
             else {
              currentlyJustThisRowSelected = this$static.this$1_1.this$0_0.selectedRowKeys.map.size_1() == 1 && this$static.this$1_1.this$0_0.selectedRowKeys.map.containsKey('' + this$static.rowKey);
              if (currentlyJustThisRowSelected) {
                (this$static.this$1_1.this$0_0.selectMode == 1 || $isMultiSelectModeSimple(this$static.this$1_1.this$0_0)) && this$static.this$1_1.this$0_0.nullSelectionAllowed && $toggleSelection(this$static);
              }
               else {
                (this$static.this$1_1.this$0_0.selectMode == 1 || $isMultiSelectModeDefault(this$static.this$1_1.this$0_0)) && $deselectAll(this$static.this$1_1.this$0_0);
                $toggleSelection(this$static);
              }
              this$static.this$1_1.this$0_0.selectionRangeStart = this$static;
              $setRowFocus(this$static.this$1_1.this$0_0, this$static);
            }
            ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && (event_0.target['onselectstart'] = null , undefined);
            this$static.this$1_1.this$0_0.sendSelectedRows(false);
          }
          (this$static.this$1_1.this$0_0.immediate || clickEventSent) && $sendPendingVariableChanges(this$static.this$1_1.this$0_0.client);
        }

        break;
      case 4194304:
      case 8388608:
        if (this$static.touchStart) {
          $clinit_67();
          touch_0 = this$static.touchStart.changedTouches[0];
          createMouseUpEvent = $createMouseEvent($doc, 'mouseup', true, true, 0, touch_0.screenX, touch_0.screenY, touch_0.clientX, touch_0.clientY, false, false, false, false, 1, null);
          createMouseDownEvent = $createMouseEvent($doc, 'mousedown', true, true, 0, touch_0.screenX, touch_0.screenY, touch_0.clientX, touch_0.clientY, false, false, false, false, 1, null);
          createMouseClickEvent = $createMouseEvent($doc, 'click', true, true, 0, touch_0.screenX, touch_0.screenY, touch_0.clientX, touch_0.clientY, false, false, false, false, 1, null);
          target = (el = $wnd.document.elementFromPoint(touch_0.clientX, touch_0.clientY) , el != null && el.nodeType == 3 && (el = el.parentNode) , el);
          $scheduleDeferred_0(($clinit_1() , INSTANCE), new Util$3_0(target, createMouseDownEvent, createMouseUpEvent, createMouseClickEvent));
          this$static.touchStart = null;
        }

        !!this$static.contextTouchTimeout && $cancel_0(this$static.contextTouchTimeout);
        break;
      case 2097152:
        if ($isSignificantMove(this$static, event_0)) {
          this$static.this$1_1.this$0_0.dragmode != 0 && !!this$static.touchStart && !($clinit_71() , $clinit_71() , activeScrollDelegate_0) && $startRowDrag(this$static, this$static.touchStart, 2097152, targetTdOrTr);
          !!this$static.contextTouchTimeout && $cancel_0(this$static.contextTouchTimeout);
          this$static.touchStart = null;
        }

        break;
      case 1048576:
        this$static.touchStart = event_0;
        touch = event_0.changedTouches[0];
        this$static.touchStartX = touch.clientX;
        this$static.touchStartY = touch.clientY;
        this$static.touchStart.preventDefault();
        if (this$static.this$1_1.this$0_0.dragmode != 0 || this$static.actionKeys != null) {
          $schedule(new VScrollTable$VScrollTableBody$VScrollTableRow$1_0(this$static), 100);
          !this$static.contextTouchTimeout && this$static.actionKeys != null && (this$static.contextTouchTimeout = new VScrollTable$VScrollTableBody$VScrollTableRow$2_0(this$static));
          if (this$static.contextTouchTimeout) {
            $cancel_0(this$static.contextTouchTimeout);
            $schedule(this$static.contextTouchTimeout, 500);
          }
        }

        break;
      case 4:
        if (targetCellOrRowFound) {
          $setRowFocus(this$static.this$1_1.this$0_0, this$static);
          $ensureFocus(this$static.this$1_1);
          if (this$static.this$1_1.this$0_0.dragmode != 0 && $eventGetButton(event_0) == 1) {
            $startRowDrag(this$static, event_0, 4, targetTdOrTr);
          }
           else if (!!event_0.ctrlKey || !!event_0.shiftKey || !!event_0.metaKey && $isMultiSelectModeDefault(this$static.this$1_1.this$0_0)) {
            event_0.preventDefault();
            ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && (event_0.target['onselectstart'] = getPreventTextSelectionIEHack() , undefined);
            event_0.stopPropagation();
          }
        }

    }
  }
  $onBrowserEvent(this$static, event_0);
}

function $paintComponent(this$static, p, uidl){
  if (this$static.attached) {
    p.updateFromUIDL(uidl, this$static.this$1_1.this$0_0.client);
  }
   else {
    !this$static.pendingComponentPaints && (this$static.pendingComponentPaints = new LinkedList_0);
    $add_15(this$static.pendingComponentPaints, uidl);
  }
}

function $setCellWidth(this$static, cellIx, width){
  var cell;
  cell = $getChild(this$static.element_0, cellIx);
  $getFirstChildElement(cell).style['width'] = width + ($clinit_9() , 'px');
  cell.style['width'] = width + 'px';
}

function $setIndex(this$static, indexInWholeTable){
  var isOdd;
  this$static.index_0 = indexInWholeTable;
  isOdd = indexInWholeTable % 2 == 0;
  setStyleName(this$static.element_0, 'v-table-row-odd', false);
  setStyleName(this$static.element_0, 'v-table-row', false);
  isOdd?setStyleName(this$static.element_0, 'v-table-row', true):setStyleName(this$static.element_0, 'v-table-row-odd', true);
}

function $showContextMenu(this$static, event_0){
  var left, top_0;
  if (this$static.this$1_1.this$0_0.enabled && this$static.actionKeys != null) {
    left = ($clinit_67() , event_0.type.indexOf('touch') != -1?event_0.changedTouches[0].clientX:event_0.clientX || 0);
    top_0 = event_0.type.indexOf('touch') != -1?event_0.changedTouches[0].clientY:event_0.clientY || 0;
    top_0 += $doc.body.scrollTop || 0;
    left += $getScrollLeft($doc.body);
    this$static.this$1_1.this$0_0.contextMenu = new VScrollTable$ContextMenuDetails_0('' + this$static.rowKey, left, top_0);
    $showAt_0($getContextMenu(this$static.this$1_1.this$0_0.client), this$static, left, top_0);
  }
}

function $startRowDrag(this$static, event_0, type, targetTdOrTr){
  var cells, child, dragImage, ev, headerCell, i, iterator, next, transferable;
  transferable = new VTransferable_0;
  transferable.component = this$static.this$1_1.this$0_0;
  transferable.variables.put('itemId', '' + this$static.rowKey);
  cells = this$static.rowElement.cells;
  for (i = 0; i < cells.length; ++i) {
    if ($isOrHasChild(cells[i], targetTdOrTr)) {
      headerCell = $getHeaderCell(this$static.this$1_1.this$0_0.tHead, i);
      transferable.variables.put('propertyId', headerCell.cid);
      break;
    }
  }
  ev = $startDrag_0((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), transferable, event_0, true);
  if (this$static.this$1_1.this$0_0.dragmode == 2 && this$static.this$1_1.this$0_0.selectMode == 2 && this$static.this$1_1.this$0_0.selectedRowKeys.map.containsKey('' + this$static.rowKey)) {
    $createDragImage(ev, this$static.this$1_1.this$0_0.scrollBody_0.tBodyElement);
    dragImage = (!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41).dragElement;
    i = 0;
    for (iterator = $listIterator(this$static.this$1_1.this$0_0.scrollBody_0.renderedRows, 0); iterator.currentNode != iterator.this$0.header;) {
      next = dynamicCast($next_7(iterator), 78);
      child = dragImage.childNodes[i++];
      this$static.this$1_1.this$0_0.selectedRowKeys.map.containsKey('' + next.rowKey) || (child.style['visibility'] = ($clinit_10() , 'hidden') , undefined);
    }
  }
   else {
    $createDragImage(ev, this$static.element_0);
  }
  type == 4 && (event_0.preventDefault() , undefined);
  event_0.stopPropagation();
}

function $toggleSelection(this$static){
  this$static.selected_0 = !this$static.selected_0;
  this$static.this$1_1.this$0_0.selectionChanged = true;
  if (this$static.selected_0) {
    $add_14(this$static.this$1_1.this$0_0.selectedRowKeys, '' + this$static.rowKey);
    setStyleName(this$static.element_0, 'v-selected', true);
  }
   else {
    setStyleName(this$static.element_0, 'v-selected', false);
    this$static.this$1_1.this$0_0.selectedRowKeys.map.remove_4('' + this$static.rowKey) != null;
  }
}

function $toggleShiftSelection(this$static, deselectPrevious){
  var endRow, range, row, startRow, tmp, w, w$iterator;
  if (this$static.this$1_1.this$0_0.selectMode == 1) {
    $deselectAll(this$static.this$1_1.this$0_0);
    $toggleSelection(this$static);
    return;
  }
  endRow = this$static;
  startRow = this$static.this$1_1.this$0_0.selectionRangeStart;
  if (!startRow) {
    startRow = this$static.this$1_1.this$0_0.focusedRow;
    if (!startRow) {
      startRow = dynamicCast($next_7($listIterator(this$static.this$1_1.this$0_0.scrollBody_0.renderedRows, 0)), 78);
      $setRowFocus(this$static.this$1_1.this$0_0, this$static);
    }
  }
  deselectPrevious && $deselectAll(this$static.this$1_1.this$0_0);
  if (startRow.index_0 >= this$static.index_0) {
    tmp = startRow;
    startRow = this$static;
    endRow = tmp;
  }
  range = new VScrollTable$SelectionRange_0(this$static.this$1_1.this$0_0, startRow, endRow);
  for (w$iterator = $listIterator(this$static.this$1_1.this$0_0.scrollBody_0.renderedRows, 0); w$iterator.currentNode != w$iterator.this$0.header;) {
    w = dynamicCast($next_7(w$iterator), 70);
    row = dynamicCast(w, 78);
    if (row.index_0 >= range.startRow.index_0 && row.index_0 < range.startRow.index_0 + range.length_0) {
      row.selected_0 || $toggleSelection(row);
      $add_14(this$static.this$1_1.this$0_0.selectedRowKeys, '' + row.rowKey);
    }
  }
  startRow != endRow && $add_14(this$static.this$1_1.this$0_0.selectedRowRanges, range);
}

function VScrollTable$VScrollTableBody$VScrollTableRow_0(this$1, uidl, aligns){
  var col, info, rowDescription, rowStyle, sorted, visibleColumnIndex;
  this.this$1_1 = this$1;
  this.childWidgets = new ArrayList_0;
  this.rowKey = uidl[1]['key'];
  this.rowElement = $doc.createElement('tr');
  this.element_0 = this.rowElement;
  sinkEvents(this.element_0, 15991039);
  this.element_0.style['visibility'] = 'hidden';
  rowStyle = uidl[1]['rowstyle'];
  rowStyle != null && setStyleName(this.element_0, 'v-table-row-' + rowStyle, true);
  rowDescription = uidl[1]['rowdescr'];
  if (rowDescription != null && !$equals_2(rowDescription, '')) {
    info = new TooltipInfo_1(rowDescription);
    $registerTooltip(this$1.this$0_0.client, this$1.this$0_0, this.rowElement, info);
  }
   else {
    $registerTooltip(this$1.this$0_0.client, this$1.this$0_0, this.rowElement, null);
  }
  $getColumnAlignments(this$1.this$0_0.tHead);
  col = 0;
  visibleColumnIndex = -1;
  if (this$1.this$0_0.showRowHeaders) {
    sorted = $getHeaderCell(this$1.this$0_0.tHead, 0).sorted;
    this.addCell(uidl, this$1.this$0_0.buildCaptionHtmlSnippet(uidl), aligns[col++], 'rowheader', true, sorted, null);
    ++visibleColumnIndex;
  }
  'al' in uidl[1] && (this.actionKeys = $getStringArray(uidl[1], 'al'));
  this.addCellsFromUIDL(uidl, aligns, col, visibleColumnIndex);
  'selected' in uidl[1] && !this.selected_0 && $toggleSelection(this);
}

function VScrollTable$VScrollTableBody$VScrollTableRow_1(this$1){
  this.this$1_1 = this$1;
  this.childWidgets = new ArrayList_0;
  this.rowKey = 0;
  this.rowElement = $doc.createElement('tr');
  this.element_0 = this.rowElement;
  sinkEvents(this.element_0, 15991039);
  setStyleName(this.element_0, 'v-table-row', true);
  this.addCell(null, '_', 98, '', true, false, null);
}

function VScrollTable$VScrollTableBody$VScrollTableRow(){
}

_ = VScrollTable$VScrollTableBody$VScrollTableRow_1.prototype = VScrollTable$VScrollTableBody$VScrollTableRow_0.prototype = VScrollTable$VScrollTableBody$VScrollTableRow.prototype = new Panel;
_.addCell = function addCell(rowUidl, text, align, style, textIsHTML, sorted, description){
  var td;
  td = $doc.createElement('td');
  $initCellWithText(this, text, align, style, textIsHTML, sorted, description, td);
}
;
_.addCell_0 = function addCell_0(rowUidl, w, align, style, sorted){
  var td;
  td = $doc.createElement('td');
  $initCellWithWidget(this, w, align, style, sorted, td);
}
;
_.addCellsFromUIDL = function addCellsFromUIDL(uidl, aligns, col, visibleColumnIndex){
  $addCellsFromUIDL(this, uidl, aligns, col, visibleColumnIndex);
}
;
_.getActions = function getActions_1(){
  var a_0, actionKey, actions, i;
  if (this.actionKeys == null) {
    return initValues(_3Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit, {30:1, 35:1}, 102, []);
  }
  actions = initDim(_3Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit, {30:1, 35:1}, 102, this.actionKeys.length, 0);
  for (i = 0; i < actions.length; ++i) {
    actionKey = this.actionKeys[i];
    a_0 = new VScrollTable$VScrollTableBody$VScrollTableRow$3_0(this, this, '' + this.rowKey, actionKey);
    a_0.caption_0 = dynamicCast(this.this$1_1.this$0_0.actionMap.get_0(actionKey + '_c'), 1);
    a_0.iconUrl = dynamicCast(this.this$1_1.this$0_0.actionMap.get_0(actionKey + '_i'), 1);
    setCheck(actions, i, a_0);
  }
  return actions;
}
;
_.getAllocatedSpace = function getAllocatedSpace_17(child){
  return $getAllocatedSpace(this, child);
}
;
_.getClass$ = function getClass_722(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow_2_classLit;
}
;
_.getClient = function getClient_1(){
  return this.this$1_1.this$0_0.client;
}
;
_.getPaintableId = function getPaintableId_1(){
  return this.this$1_1.this$0_0.paintableId;
}
;
_.initCellWidths = function initCellWidths(){
  $initCellWidths(this);
}
;
_.isRenderHtmlInCells = function isRenderHtmlInCells(){
  return false;
}
;
_.iterator_0 = function iterator_9(){
  return new AbstractList$IteratorImpl_0(this.childWidgets);
}
;
_.onAttach = function onAttach_11(){
  $onAttach_2(this);
}
;
_.onBrowserEvent = function onBrowserEvent_39(event_0){
  $onBrowserEvent_4(this, event_0);
}
;
_.onDetach = function onDetach_17(){
  $onDetach(this);
  $ensureHidden($getContextMenu(this.this$1_1.this$0_0.client), this);
}
;
_.remove_2 = function remove_18(w){
  var parent_0;
  if ($indexOf_1(this.childWidgets, w, 0) != -1) {
    $setParent(w, null);
    (parent_0 = w.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(w.element_0);
    $remove_17(this.childWidgets, w);
    return true;
  }
   else {
    return false;
  }
}
;
_.replaceChildComponent = function replaceChildComponent_16(oldComponent, newComponent){
  var index, parentElement, parent_0;
  parentElement = (parent_0 = oldComponent.element_0.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  index = $indexOf_1(this.childWidgets, oldComponent, 0);
  $removeFromParent_0(oldComponent);
  parentElement.appendChild(newComponent.element_0);
  $add_13(this.childWidgets, index, newComponent);
  $setParent(newComponent, this);
}
;
_.requestLayout = function requestLayout_17(children){
  return true;
}
;
_.setCellWidth = function setCellWidth(cellIx, width){
  $setCellWidth(this, cellIx, width);
}
;
_.updateCaption = function updateCaption_18(component, uidl){
}
;
_.updateFromUIDL = function updateFromUIDL_45(uidl, client){
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 27:1, 33:1, 69:1, 70:1, 75:1, 78:1};
_.actionKeys = null;
_.contextTouchTimeout = null;
_.index_0 = 0;
_.pendingComponentPaints = null;
_.rowElement = null;
_.rowKey = 0;
_.selected_0 = false;
_.this$1_1 = null;
_.touchStart = null;
_.touchStartX = 0;
_.touchStartY = 0;
function $addSpannedCell(this$static, w, align, colCount){
  var td;
  td = $doc.createElement('td');
  td.colSpan = colCount;
  $initCellWithWidget(this$static, w, align, '', false, td);
}

function $addSpannedCell_0(this$static, text, align, textIsHTML, colCount){
  var td;
  td = $doc.createElement('td');
  td.colSpan = colCount;
  $initCellWithText(this$static, text, align, '', textIsHTML, false, null, td);
}

function $calcAndSetSpanWidthOnCell(this$static, cellIx){
  var ix, spanWidth;
  spanWidth = 0;
  for (ix = this$static.this$1.this$0_0.showRowHeaders?1:0; ix < this$static.this$1.this$0_0.tHead.visibleCells.size_0; ++ix) {
    spanWidth += parseInt($getHeaderCell(this$static.this$1.this$0_0.tHead, ix).element_0['offsetWidth']) || 0;
  }
  setWidthExcludingPaddingAndBorder_0(this$static.element_0.childNodes[cellIx], spanWidth, 13, false);
}

function $setCellWidth_0(this$static, cellIx, width){
  this$static.spanColumns?this$static.this$1.this$0_0.showRowHeaders?cellIx == 0?$setCellWidth(this$static, 0, width):$calcAndSetSpanWidthOnCell(this$static, 1):$calcAndSetSpanWidthOnCell(this$static, 0):$setCellWidth(this$static, cellIx, width);
}

function VScrollTable$VScrollTableBody$VScrollTableGeneratedRow_0(this$1, uidl, aligns){
  this.this$1 = this$1;
  VScrollTable$VScrollTableBody$VScrollTableRow_0.call(this, this$1, uidl, aligns);
  setStyleName(this.element_0, 'v-table-generated-row', true);
}

function VScrollTable$VScrollTableBody$VScrollTableGeneratedRow(){
}

_ = VScrollTable$VScrollTableBody$VScrollTableGeneratedRow_0.prototype = VScrollTable$VScrollTableBody$VScrollTableGeneratedRow.prototype = new VScrollTable$VScrollTableBody$VScrollTableRow;
_.addCellsFromUIDL = function addCellsFromUIDL_0(uidl, aligns, col, visibleColumnIndex){
  var cell, cells, colCount, count;
  this.htmlContentAllowed = Boolean(uidl[1]['gen_html']);
  this.spanColumns = Boolean(uidl[1]['gen_span']);
  cells = new UIDL$1_0(uidl);
  if (this.spanColumns) {
    colCount = uidl.length - 2;
    if (count = cells.this$0.length - 2 , count > cells.index_0 + 1) {
      cell = $next_3(cells);
      cell != null && cell.castableTypeMap$ && !!cell.castableTypeMap$[1]?$addSpannedCell_0(this, toString__devirtual$(cell), aligns[0], this.htmlContentAllowed, colCount):$addSpannedCell(this, dynamicCast(cell, 70), aligns[0], colCount);
    }
  }
   else {
    $addCellsFromUIDL(this, uidl, aligns, col, visibleColumnIndex);
  }
}
;
_.getClass$ = function getClass_723(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableGeneratedRow_2_classLit;
}
;
_.initCellWidths = function initCellWidths_0(){
  this.spanColumns?$scheduleDeferred_0(($clinit_1() , INSTANCE), new VScrollTable$VScrollTableBody$VScrollTableGeneratedRow$1_0(this)):$initCellWidths(this);
}
;
_.isRenderHtmlInCells = function isRenderHtmlInCells_0(){
  return this.htmlContentAllowed;
}
;
_.setCellWidth = function setCellWidth_0(cellIx, width){
  this.spanColumns?this.this$1.this$0_0.showRowHeaders?cellIx == 0?$setCellWidth(this, 0, width):$calcAndSetSpanWidthOnCell(this, 1):$calcAndSetSpanWidthOnCell(this, 0):$setCellWidth(this, cellIx, width);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 27:1, 33:1, 69:1, 70:1, 75:1, 78:1, 167:1};
_.htmlContentAllowed = false;
_.spanColumns = false;
_.this$1 = null;
function VScrollTable$VScrollTableBody$VScrollTableGeneratedRow$1_0(this$2){
  this.this$2 = this$2;
}

function VScrollTable$VScrollTableBody$VScrollTableGeneratedRow$1(){
}

_ = VScrollTable$VScrollTableBody$VScrollTableGeneratedRow$1_0.prototype = VScrollTable$VScrollTableBody$VScrollTableGeneratedRow$1.prototype = new Object_0;
_.execute_0 = function execute_53(){
  if (this.this$2.this$1.this$0_0.showRowHeaders) {
    $setCellWidth_0(this.this$2, 0, $getHeaderCell(this.this$2.this$1.this$0_0.tHead, 0).width_0);
    $calcAndSetSpanWidthOnCell(this.this$2, 1);
  }
   else {
    $calcAndSetSpanWidthOnCell(this.this$2, 0);
  }
}
;
_.getClass$ = function getClass_724(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableGeneratedRow$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$2 = null;
function VScrollTable$VScrollTableBody$VScrollTableRow$1_0(this$2){
  $clinit();
  this.this$2 = this$2;
}

function VScrollTable$VScrollTableBody$VScrollTableRow$1(){
}

_ = VScrollTable$VScrollTableBody$VScrollTableRow$1_0.prototype = VScrollTable$VScrollTableBody$VScrollTableRow$1.prototype = new Timer;
_.getClass$ = function getClass_725(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow$1_2_classLit;
}
;
_.run = function run_34(){
  var activeScrollDelegate;
  activeScrollDelegate = ($clinit_71() , $clinit_71() , activeScrollDelegate_0);
  !!activeScrollDelegate && (activeScrollDelegate.moved?(this.this$2.touchStart = null):($removeHandler(activeScrollDelegate.handlerRegistration.real) , activeScrollDelegate.handlerRegistration = null , activeScrollDelegate.moved?$moveTransformationToScrolloffset(activeScrollDelegate):(activeScrollDelegate_0 = null) , undefined));
}
;
_.castableTypeMap$ = {65:1};
_.this$2 = null;
function VScrollTable$VScrollTableBody$VScrollTableRow$2_0(this$2){
  $clinit();
  this.this$2 = this$2;
}

function VScrollTable$VScrollTableBody$VScrollTableRow$2(){
}

_ = VScrollTable$VScrollTableBody$VScrollTableRow$2_0.prototype = VScrollTable$VScrollTableBody$VScrollTableRow$2.prototype = new Timer;
_.getClass$ = function getClass_726(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow$2_2_classLit;
}
;
_.run = function run_35(){
  if (this.this$2.touchStart) {
    $showContextMenu(this.this$2, this.this$2.touchStart);
    this.this$2.touchStart = null;
  }
}
;
_.castableTypeMap$ = {65:1};
_.this$2 = null;
function VScrollTable$VScrollTableBody$VScrollTableRow$3_0(this$2, $anonymous0, $anonymous1, $anonymous2){
  this.this$2 = this$2;
  this.owner = $anonymous0;
  this.targetKey = $anonymous1;
  this.actionKey = $anonymous2;
}

function VScrollTable$VScrollTableBody$VScrollTableRow$3(){
}

_ = VScrollTable$VScrollTableBody$VScrollTableRow$3_0.prototype = VScrollTable$VScrollTableBody$VScrollTableRow$3.prototype = new TreeAction;
_.execute_0 = function execute_54(){
  $addVariableToQueue(this.owner.getClient(), this.owner.getPaintableId(), 'action', $escapeVariableValue(this.targetKey + ',' + this.actionKey), true, 115);
  $getContextMenu(this.owner.getClient()).hide_0(false);
  $scheduleFinally(($clinit_1() , INSTANCE), new VScrollTable$14_0(this.this$2.this$1_1.this$0_0, this.this$2));
}
;
_.getClass$ = function getClass_727(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow$3_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1, 102:1};
_.this$2 = null;
function VScrollTable$VScrollTableBody$VScrollTableRow$4_0(this$2, $anonymous0){
  this.this$2 = this$2;
  this.height_0 = 0;
  this.width_0 = $anonymous0;
}

function VScrollTable$VScrollTableBody$VScrollTableRow$4(){
}

_ = VScrollTable$VScrollTableBody$VScrollTableRow$4_0.prototype = VScrollTable$VScrollTableBody$VScrollTableRow$4.prototype = new RenderSpace;
_.getClass$ = function getClass_728(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow$4_2_classLit;
}
;
_.getHeight = function getHeight_2(){
  return ~~Math.max(Math.min($getRowHeight(this.this$2.this$1_1, false), 2147483647), -2147483648);
}
;
_.castableTypeMap$ = {133:1};
_.this$2 = null;
function $deEmphasis_0(this$static){
  var row, stylename, w, w$iterator;
  setStyleName(this$static.this$0.element_0, 'v-table-drag', false);
  if (!this$static.lastEmphasized) {
    return;
  }
  for (w$iterator = $listIterator(this$static.this$0.scrollBody_0.renderedRows, 0); w$iterator.currentNode != w$iterator.this$0.header;) {
    w = dynamicCast($next_7(w$iterator), 70);
    row = dynamicCast(w, 78);
    if (!!this$static.lastEmphasized && row.rowKey == this$static.lastEmphasized.overkey) {
      stylename = 'v-table-row-drag-' + this$static.lastEmphasized.dropLocation.name_0.toLowerCase();
      setStyleName(row.element_0, stylename, false);
      this$static.lastEmphasized = null;
      return;
    }
  }
}

function $dragAccepted_0(this$static){
  $emphasis_0(this$static, this$static.dropDetails);
}

function $emphasis_0(this$static, details){
  var row, stylename, w, w$iterator;
  $deEmphasis_0(this$static);
  setStyleName(this$static.this$0.element_0, 'v-table-drag', true);
  for (w$iterator = $listIterator(this$static.this$0.scrollBody_0.renderedRows, 0); w$iterator.currentNode != w$iterator.this$0.header;) {
    w = dynamicCast($next_7(w$iterator), 70);
    row = dynamicCast(w, 78);
    if (!!details && details.overkey == row.rowKey) {
      stylename = 'v-table-row-drag-' + details.dropLocation.name_0.toLowerCase();
      setStyleName(row.element_0, stylename, true);
      this$static.lastEmphasized = details;
      return;
    }
  }
}

function $updateDropDetails_0(this$static, drag){
  var childIndex, element, elementOver, row, tr;
  this$static.dropDetails = new VScrollTable$TableDDDetails_0;
  elementOver = $getElementOver(drag);
  row = dynamicCast(findWidget(elementOver, dynamicCast($next_7($listIterator(this$static.this$0.scrollBody_0.renderedRows, 0)), 70).getClass$()), 78);
  if (row) {
    this$static.dropDetails.overkey = row.rowKey;
    tr = row.element_0;
    element = elementOver;
    while (!!element && $getParentElement(element) != tr) {
      element = $getParentElement(element);
    }
    childIndex = $getChildIndex(tr, element);
    this$static.dropDetails.colkey = $getHeaderCell(this$static.this$0.tHead, childIndex).cid;
    this$static.dropDetails.dropLocation = getVerticalDropLocation(row.element_0, drag.currentGwtEvent);
  }
  drag.dropDetails.put('itemIdOver', this$static.dropDetails.overkey + '');
  drag.dropDetails.put('detail', this$static.dropDetails.dropLocation?this$static.dropDetails.dropLocation.name_0:null);
}

function VScrollTable$VScrollTableDropHandler_0(this$0){
  this.this$0 = this$0;
  this.acceptCriteria = new VAcceptAll_0;
}

function VScrollTable$VScrollTableDropHandler(){
}

_ = VScrollTable$VScrollTableDropHandler_0.prototype = VScrollTable$VScrollTableDropHandler.prototype = new VAbstractDropHandler;
_.dragAccepted = function dragAccepted_0(drag){
  $emphasis_0(this, this.dropDetails);
}
;
_.dragEnter = function dragEnter_1(drag){
  $updateDropDetails_0(this, drag);
  $validate(this, new VAbstractDropHandler$1_0(this, drag), drag);
}
;
_.dragLeave = function dragLeave_1(drag){
  $deEmphasis_0(this);
}
;
_.dragOver = function dragOver_1(drag){
  var cb, newDetails, oldDetails, checkCriteria;
  oldDetails = this.dropDetails;
  $updateDropDetails_0(this, drag);
  if (!$equals_1(oldDetails, this.dropDetails)) {
    $deEmphasis_0(this);
    newDetails = this.dropDetails;
    cb = new VScrollTable$VScrollTableDropHandler$1_0(this, newDetails);
    checkCriteria = new VAbstractDropHandler$2_0(this, drag, cb);
    $executeWhenReady((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), checkCriteria);
  }
}
;
_.drop = function drop_2(drag){
  $deEmphasis_0(this);
  return $drop(this, drag);
}
;
_.getApplicationConnection = function getApplicationConnection_0(){
  return this.this$0.client;
}
;
_.getClass$ = function getClass_729(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableDropHandler_2_classLit;
}
;
_.getPaintable = function getPaintable_0(){
  return this.this$0;
}
;
_.castableTypeMap$ = {};
_.dropDetails = null;
_.lastEmphasized = null;
_.this$0 = null;
function VScrollTable$VScrollTableDropHandler$1_0(this$1, val$newDetails){
  this.this$1 = this$1;
  this.val$newDetails = val$newDetails;
}

function VScrollTable$VScrollTableDropHandler$1(){
}

_ = VScrollTable$VScrollTableDropHandler$1_0.prototype = VScrollTable$VScrollTableDropHandler$1.prototype = new Object_0;
_.accepted_0 = function accepted_1(event_0){
  $equals_1(this.val$newDetails, this.this$1.dropDetails) && $dragAccepted_0(this.this$1);
}
;
_.getClass$ = function getClass_730(){
  return Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableDropHandler$1_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$1 = null;
_.val$newDetails = null;
function $getSplitterSize(this$static){
  if (this$static.splitterSize < 0) {
    if (this$static.attached) {
      switch (this$static.orientation) {
        case 0:
          this$static.splitterSize = parseInt(this$static.splitter['offsetWidth']) || 0;
          break;
        default:this$static.splitterSize = parseInt(this$static.splitter['offsetHeight']) || 0;
      }
    }
  }
  return this$static.splitterSize;
}

function $getTouchScrollDelegate_1(this$static){
  !this$static.touchScrollDelegate && (this$static.touchScrollDelegate = new TouchScrollDelegate_0(initValues(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, {30:1, 35:1}, 0, [this$static.firstContainer, this$static.secondContainer])));
  return this$static.touchScrollDelegate;
}

function $hideDraggingCurtain_0(this$static){
  if (this$static.draggingCurtain) {
    this$static.wrapper.removeChild(this$static.draggingCurtain);
    this$static.draggingCurtain = null;
  }
}

function $iLayout_2(this$static){
  var contentHeight, contentWidth, pixelPosition, secondContainerHeight, secondContainerWidth, wholeSize;
  if (!this$static.attached) {
    return;
  }
  $updateSize(this$static.renderInformation, this$static.element_0);
  switch (this$static.orientation) {
    case 0:
      wholeSize = parseInt(this$static.wrapper['clientWidth']) || 0;
      pixelPosition = parseInt(this$static.splitter['offsetLeft']) || 0;
      if (pixelPosition > 0 && pixelPosition + $getSplitterSize(this$static) > wholeSize || this$static.positionReversed && pixelPosition < 0) {
        pixelPosition = wholeSize - $getSplitterSize(this$static);
        pixelPosition < 0 && (pixelPosition = 0);
        $setSplitPosition(this$static, pixelPosition + 'px');
        return;
      }

      this$static.firstContainer.style['width'] = pixelPosition + 'px';
      secondContainerWidth = wholeSize - pixelPosition - $getSplitterSize(this$static);
      secondContainerWidth < 0 && (secondContainerWidth = 0);
      this$static.secondContainer.style['width'] = secondContainerWidth + 'px';
      this$static.secondContainer.style['left'] = pixelPosition + $getSplitterSize(this$static) + 'px';
      contentHeight = this$static.renderInformation.renderedSize.getHeight();
      this$static.firstRenderSpace.height_0 = contentHeight;
      this$static.firstRenderSpace.width_0 = pixelPosition;
      this$static.secondRenderSpace.height_0 = contentHeight;
      this$static.secondRenderSpace.width_0 = secondContainerWidth;
      break;
    case 1:
      wholeSize = parseInt(this$static.wrapper['clientHeight']) || 0;
      pixelPosition = parseInt(this$static.splitter['offsetTop']) || 0;
      if (pixelPosition > 0 && pixelPosition + $getSplitterSize(this$static) > wholeSize || this$static.positionReversed && pixelPosition < 0) {
        pixelPosition = wholeSize - $getSplitterSize(this$static);
        pixelPosition < 0 && (pixelPosition = 0);
        $setSplitPosition(this$static, pixelPosition + 'px');
        return;
      }

      this$static.firstContainer.style['height'] = pixelPosition + 'px';
      secondContainerHeight = wholeSize - pixelPosition - $getSplitterSize(this$static);
      secondContainerHeight < 0 && (secondContainerHeight = 0);
      this$static.secondContainer.style['height'] = secondContainerHeight + 'px';
      this$static.secondContainer.style['top'] = pixelPosition + $getSplitterSize(this$static) + 'px';
      contentWidth = this$static.renderInformation.renderedSize.getWidth();
      this$static.firstRenderSpace.height_0 = pixelPosition;
      this$static.firstRenderSpace.width_0 = contentWidth;
      this$static.secondRenderSpace.height_0 = secondContainerHeight;
      this$static.secondRenderSpace.width_0 = contentWidth;
  }
  runWebkitOverflowAutoFix(this$static.secondContainer);
  runWebkitOverflowAutoFix(this$static.firstContainer);
}

function $onHorizontalMouseMove(this$static, x){
  var newX, pos;
  newX = this$static.origX + x - this$static.origMouseX;
  newX < 0 && (newX = 0);
  newX + $getSplitterSize(this$static) > (parseInt(this$static.element_0['offsetWidth']) || 0) && (newX = (parseInt(this$static.element_0['offsetWidth']) || 0) - $getSplitterSize(this$static));
  if (this$static.position_0.indexOf('%') > 0) {
    pos = newX;
    newX + $getSplitterSize(this$static) >= (parseInt(this$static.element_0['offsetWidth']) || 0) && (pos = parseInt(this$static.element_0['offsetWidth']) || 0);
    this$static.positionReversed && (pos = (parseInt(this$static.element_0['offsetWidth']) || 0) - pos);
    this$static.position_0 = pos / (parseInt(this$static.element_0['offsetWidth']) || 0) * 100 + '%';
  }
   else {
    this$static.positionReversed?(this$static.position_0 = (parseInt(this$static.element_0['offsetWidth']) || 0) - newX - $getSplitterSize(this$static) + 'px'):(this$static.position_0 = newX + 'px');
  }
  this$static.origX != newX && (this$static.resized = true);
  this$static.positionReversed && (newX = (parseInt(this$static.element_0['offsetWidth']) || 0) - newX - $getSplitterSize(this$static));
  $setSplitPosition(this$static, newX + 'px');
}

function $onMouseDown(this$static, event_0){
  var trg;
  if (this$static.locked || !this$static.enabled) {
    return;
  }
  trg = event_0.target;
  if (trg == this$static.splitter || trg == $getChild(this$static.splitter, 0)) {
    this$static.resizing = true;
    setCapture(this$static.element_0);
    this$static.origX = parseInt(this$static.splitter['offsetLeft']) || 0;
    this$static.origY = parseInt(this$static.splitter['offsetTop']) || 0;
    this$static.origMouseX = ($clinit_67() , event_0.type.indexOf('touch') != -1?event_0.changedTouches[0].clientX:event_0.clientX || 0);
    this$static.origMouseY = event_0.type.indexOf('touch') != -1?event_0.changedTouches[0].clientY:event_0.clientY || 0;
    event_0.stopPropagation();
    event_0.preventDefault();
  }
}

function $onMouseMove(this$static, event_0){
  var x, y;
  switch (this$static.orientation) {
    case 0:
      x = ($clinit_67() , event_0.type.indexOf('touch') != -1?event_0.changedTouches[0].clientX:event_0.clientX || 0);
      $onHorizontalMouseMove(this$static, x);
      break;
    case 1:
    default:y = ($clinit_67() , event_0.type.indexOf('touch') != -1?event_0.changedTouches[0].clientY:event_0.clientY || 0);
      $onVerticalMouseMove(this$static, y);
  }
}

function $onMouseUp(this$static, event_0){
  var pos;
  releaseCapture(this$static.element_0);
  $hideDraggingCurtain_0(this$static);
  this$static.resizing = false;
  ($clinit_67() , event_0.type.indexOf('touch') != -1) || $onMouseMove(this$static, event_0);
  this$static.position_0.indexOf('%') > 0?(pos = Math.round((new Float_0(parseFloat_0(this$static.position_0.substr(0, this$static.position_0.length - 1 - 0)))).value_0)):(pos = __parseAndValidateInt(this$static.position_0.substr(0, this$static.position_0.length - 2 - 0)));
  $addVariableToQueue(this$static.client, this$static.id_0, 'position', '' + pos, this$static.immediate, 105);
}

function $onVerticalMouseMove(this$static, y){
  var newY, pos;
  newY = this$static.origY + y - this$static.origMouseY;
  newY < 0 && (newY = 0);
  newY + $getSplitterSize(this$static) > (parseInt(this$static.element_0['offsetHeight']) || 0) && (newY = (parseInt(this$static.element_0['offsetHeight']) || 0) - $getSplitterSize(this$static));
  if (this$static.position_0.indexOf('%') > 0) {
    pos = newY;
    newY + $getSplitterSize(this$static) >= (parseInt(this$static.element_0['offsetHeight']) || 0) && (pos = parseInt(this$static.element_0['offsetHeight']) || 0);
    this$static.positionReversed && (pos = (parseInt(this$static.element_0['offsetHeight']) || 0) - pos - $getSplitterSize(this$static));
    this$static.position_0 = pos / (parseInt(this$static.element_0['offsetHeight']) || 0) * 100 + '%';
  }
   else {
    this$static.positionReversed?(this$static.position_0 = (parseInt(this$static.element_0['offsetHeight']) || 0) - newY - $getSplitterSize(this$static) + 'px'):(this$static.position_0 = newY + 'px');
  }
  this$static.origY != newY && (this$static.resized = true);
  this$static.positionReversed && (newY = (parseInt(this$static.element_0['offsetHeight']) || 0) - newY - $getSplitterSize(this$static));
  $setSplitPosition(this$static, newY + 'px');
}

function $setFirstWidget(this$static, w){
  !!this$static.firstChild_0 && $removeFromParent_0(this$static.firstChild_0);
  $add_0(this$static, w, this$static.firstContainer);
  this$static.firstChild_0 = w;
}

function $setHeight_2(this$static, height){
  if ($equals_2(this$static.height_0, height)) {
    return;
  }
  this$static.height_0 = height;
  this$static.element_0.style['height'] = height;
  !this$static.rendering && !!this$static.client && $setSplitPosition(this$static, this$static.position_0);
}

function $setLocked(this$static, newValue){
  if (this$static.locked != newValue) {
    this$static.locked = newValue;
    this$static.splitterSize = -1;
    $setStylenames(this$static);
  }
}

function $setOrientation(this$static, orientation){
  this$static.orientation = orientation;
  if (orientation == 0) {
    this$static.splitter.style['height'] = '100%';
    this$static.splitter.style['top'] = '0';
    this$static.firstContainer.style['height'] = '100%';
    this$static.secondContainer.style['height'] = '100%';
  }
   else {
    this$static.splitter.style['width'] = '100%';
    this$static.splitter.style['left'] = '0';
    this$static.firstContainer.style['width'] = '100%';
    this$static.secondContainer.style['width'] = '100%';
  }
  this$static.firstContainer['className'] = 'v-splitpanel-first-container';
  this$static.secondContainer['className'] = 'v-splitpanel-second-container';
}

function $setPositionReversed(this$static, reversed){
  if (this$static.positionReversed != reversed) {
    if (this$static.orientation == 0) {
      this$static.splitter.style['right'] = '';
      this$static.splitter.style['left'] = '';
    }
     else if (this$static.orientation == 1) {
      this$static.splitter.style['top'] = '';
      this$static.splitter.style['bottom'] = '';
    }
    this$static.positionReversed = reversed;
  }
}

function $setSecondWidget(this$static, w){
  !!this$static.secondChild && $removeFromParent_0(this$static.secondChild);
  $add_0(this$static, w, this$static.secondContainer);
  this$static.secondChild = w;
}

function $setSplitPosition(this$static, pos){
  if (pos == null) {
    return;
  }
  pos.indexOf('%') > 0 && (pos = parseFloat_0(pos.substr(0, pos.length - 1 - 0)) / 100 * (this$static.orientation == 0?parseInt(this$static.element_0['offsetWidth']) || 0:parseInt(this$static.element_0['offsetHeight']) || 0) + 'px');
  this$static.orientation == 0?this$static.positionReversed?(this$static.splitter.style['right'] = pos , undefined):(this$static.splitter.style['left'] = pos , undefined):this$static.positionReversed?(this$static.splitter.style['bottom'] = pos , undefined):(this$static.splitter.style['top'] = pos , undefined);
  $iLayout_2(this$static);
  $runDescendentsLayout(this$static.client, this$static);
}

function $setStylenames(this$static){
  var firstStyle, i, lockedSuffix, secondStyle, splitterStyle, splitterSuffix;
  splitterSuffix = this$static.orientation == 0?'-hsplitter':'-vsplitter';
  lockedSuffix = '';
  splitterStyle = 'v-splitpanel' + splitterSuffix;
  firstStyle = 'v-splitpanel-first-container';
  secondStyle = 'v-splitpanel-second-container';
  if (this$static.locked) {
    splitterStyle = 'v-splitpanel' + splitterSuffix + '-locked';
    lockedSuffix = '-locked';
  }
  for (i = 0; i < this$static.componentStyleNames.length; ++i) {
    splitterStyle += ' v-splitpanel' + splitterSuffix + '-' + this$static.componentStyleNames[i] + lockedSuffix;
    firstStyle += ' v-splitpanel-first-container-' + this$static.componentStyleNames[i];
    secondStyle += ' v-splitpanel-second-container-' + this$static.componentStyleNames[i];
  }
  this$static.splitter['className'] = splitterStyle;
  this$static.firstContainer['className'] = firstStyle;
  this$static.secondContainer['className'] = secondStyle;
}

function $setWidth_11(this$static, width){
  if ($equals_2(this$static.width_0, width)) {
    return;
  }
  this$static.width_0 = width;
  this$static.element_0.style['width'] = width;
  !this$static.rendering && !!this$static.client && $setSplitPosition(this$static, this$static.position_0);
}

function $showDraggingCurtain(this$static){
  if (!(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isGecko || (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isWebKit)) {
    return;
  }
  if (!this$static.draggingCurtain) {
    this$static.draggingCurtain = $doc.createElement('div');
    this$static.draggingCurtain.style['position'] = 'absolute';
    this$static.draggingCurtain.style['top'] = '0px';
    this$static.draggingCurtain.style['left'] = '0px';
    this$static.draggingCurtain.style['width'] = '100%';
    this$static.draggingCurtain.style['height'] = '100%';
    this$static.draggingCurtain.style['zIndex'] = '20000';
    this$static.wrapper.appendChild(this$static.draggingCurtain);
  }
}

function VSplitPanel_0(orientation){
  this.children_0 = new WidgetCollection_0(this);
  this.clickEventHandler = new VSplitPanel$1_0(this, this);
  this.wrapper = $doc.createElement('div');
  this.firstContainer = $doc.createElement('div');
  this.secondContainer = $doc.createElement('div');
  this.splitter = $doc.createElement('div');
  this.firstRenderSpace = new RenderSpace_2(0, 0, true);
  this.secondRenderSpace = new RenderSpace_2(0, 0, true);
  this.renderInformation = new RenderInformation_0;
  this.element_0 = $doc.createElement('div');
  switch (orientation) {
    case 0:
      this.element_0['className'] = 'v-splitpanel-horizontal';
      break;
    case 1:
    default:this.element_0['className'] = 'v-splitpanel-vertical';
  }
  $setWidth_11(this, '30px');
  $setHeight_2(this, '30px');
  this.splitter.appendChild($doc.createElement('div'));
  this.element_0.appendChild(this.wrapper);
  this.wrapper.style['position'] = 'relative';
  this.wrapper.style['width'] = '100%';
  this.wrapper.style['height'] = '100%';
  this.wrapper.appendChild(this.secondContainer);
  this.wrapper.appendChild(this.firstContainer);
  this.wrapper.appendChild(this.splitter);
  this.splitter.style['position'] = 'absolute';
  this.secondContainer.style['position'] = 'absolute';
  this.firstContainer.style['overflow'] = 'auto';
  this.secondContainer.style['overflow'] = 'auto';
  $setOrientation(this, orientation);
  this.eventsToSink == -1?sinkEvents(this.element_0, 124 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 124);
  $addDomHandler(this, new VSplitPanel$2_0, ($clinit_28() , $clinit_28() , TYPE_14));
  $addDomHandler(this, new VSplitPanel$3_0(this), ($clinit_31() , $clinit_31() , TYPE_17));
  $addDomHandler(this, new VSplitPanel$4_0(this), ($clinit_30() , $clinit_30() , TYPE_16));
  $addDomHandler(this, new VSplitPanel$5_0(this), ($clinit_29() , $clinit_29() , TYPE_15));
}

function VSplitPanel(){
}

_ = VSplitPanel.prototype = new ComplexPanel;
_.getAllocatedSpace = function getAllocatedSpace_18(child){
  if (child == this.firstChild_0) {
    return this.firstRenderSpace;
  }
   else if (child == this.secondChild) {
    return this.secondRenderSpace;
  }
  return null;
}
;
_.getClass$ = function getClass_736(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel_2_classLit;
}
;
_.iLayout = function iLayout_4(){
  $iLayout_2(this);
}
;
_.onBrowserEvent = function onBrowserEvent_41(event_0){
  switch ($eventGetTypeInt(event_0.type)) {
    case 64:
      this.resizing && $onMouseMove(this, event_0);
      break;
    case 4:
      $onMouseDown(this, event_0);
      break;
    case 32:
      this.resizing && $showDraggingCurtain(this);
      break;
    case 8:
      this.resizing && $onMouseUp(this, event_0);
      break;
    case 1:
      this.resizing = false;
  }
  ($clinit_67() , event_0.type.indexOf('touch') != -1) || !this.resized?$onBrowserEvent(this, event_0):$eventGetTypeInt(event_0.type) == 8 && (this.resized = false);
}
;
_.remove_2 = function remove_19(w){
  var removed;
  removed = $remove_2(this, w);
  removed && (this.firstChild_0 == w?(this.firstChild_0 = null):(this.secondChild = null));
  return removed;
}
;
_.replaceChildComponent = function replaceChildComponent_17(oldComponent, newComponent){
  oldComponent == this.firstChild_0?$setFirstWidget(this, newComponent):oldComponent == this.secondChild && $setSecondWidget(this, newComponent);
}
;
_.requestLayout = function requestLayout_18(child){
  var paintable, paintable$iterator;
  for (paintable$iterator = child.iterator_0(); paintable$iterator.hasNext();) {
    paintable = dynamicCast(paintable$iterator.next_0(), 26);
    $handleComponentRelativeSize_0(this.client, dynamicCast(paintable, 70));
  }
  if (this.height_0 != null && this.width_0 != null) {
    return true;
  }
  return !$updateSize(this.renderInformation, this.element_0);
}
;
_.setHeight = function setHeight_22(height){
  $setHeight_2(this, height);
}
;
_.setWidth = function setWidth_31(width){
  $setWidth_11(this, width);
}
;
_.updateCaption = function updateCaption_19(component, uidl){
}
;
_.updateFromUIDL = function updateFromUIDL_47(uidl, client){
  var newFirstChild, newSecondChild;
  this.client = client;
  this.id_0 = uidl[1]['id'];
  this.rendering = true;
  this.immediate = 'immediate' in uidl[1];
  if ($updateComponent(client, this, uidl, true)) {
    this.rendering = false;
    return;
  }
  this.enabled = !Boolean(uidl[1]['disabled']);
  $handleEventHandlerRegistration(this.clickEventHandler, client);
  'style' in uidl[1]?(this.componentStyleNames = $split_0(uidl[1]['style'], ' ', 0)):(this.componentStyleNames = initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, 0, 0));
  $setLocked(this, Boolean(uidl[1]['locked']));
  $setPositionReversed(this, Boolean(uidl[1]['reversed']));
  $setStylenames(this);
  this.position_0 = uidl[1]['position'];
  $setSplitPosition(this, this.position_0);
  newFirstChild = $getPaintable(client, uidl[2]);
  newSecondChild = $getPaintable(client, uidl[3]);
  if (this.firstChild_0 != newFirstChild) {
    !!this.firstChild_0 && $unregisterPaintable(client, dynamicCast(this.firstChild_0, 26));
    $setFirstWidget(this, dynamicCast(newFirstChild, 70));
  }
  if (this.secondChild != newSecondChild) {
    !!this.secondChild && $unregisterPaintable(client, dynamicCast(this.secondChild, 26));
    $setSecondWidget(this, dynamicCast(newSecondChild, 70));
  }
  newFirstChild.updateFromUIDL(uidl[2], client);
  newSecondChild.updateFromUIDL(uidl[3], client);
  $updateSize(this.renderInformation, this.element_0);
  $isIE7(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $scheduleDeferred_0(($clinit_1() , INSTANCE), new VSplitPanel$6_0(this));
  $runDescendentsLayout(client, this);
  this.rendering = false;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1, 126:1};
_.client = null;
_.componentStyleNames = null;
_.draggingCurtain = null;
_.enabled = false;
_.firstChild_0 = null;
_.height_0 = '';
_.id_0 = null;
_.immediate = false;
_.locked = false;
_.orientation = 0;
_.origMouseX = 0;
_.origMouseY = 0;
_.origX = 0;
_.origY = 0;
_.position_0 = null;
_.positionReversed = false;
_.rendering = false;
_.resized = false;
_.resizing = false;
_.secondChild = null;
_.splitterSize = -1;
_.touchScrollDelegate = null;
_.width_0 = '';
function VSplitPanel$1_0(this$0, $anonymous0){
  this.this$0 = this$0;
  this.paintable = $anonymous0;
  this.clickEventIdentifier = 'sp_click';
}

function VSplitPanel$1(){
}

_ = VSplitPanel$1_0.prototype = VSplitPanel$1.prototype = new ClickEventHandler;
_.fireClick = function fireClick_1(event_0){
  var target;
  target = event_0.target;
  $isOrHasChild(this.this$0.splitter, target) && $fireClick(this, event_0);
}
;
_.getClass$ = function getClass_737(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$1_2_classLit;
}
;
_.getRelativeToElement = function getRelativeToElement_0(){
  return null;
}
;
_.onContextMenu = function onContextMenu_1(event_0){
  var target;
  target = event_0.nativeEvent.target;
  $isOrHasChild(this.this$0.splitter, target) && $hasEventListeners(this.client, this.paintable, this.clickEventIdentifier) && (event_0.nativeEvent.preventDefault() , undefined);
}
;
_.registerHandler = function registerHandler_5(handler, type){
  return ((this.this$0.splitter.__eventBits || 0) & $eventGetTypeInt(type.name_0)) != 0?$addHandler(this.this$0, handler, type):$addDomHandler(this.this$0, handler, type);
}
;
_.castableTypeMap$ = {12:1, 40:1, 42:1, 49:1};
_.this$0 = null;
function VSplitPanel$2_0(){
}

function VSplitPanel$2(){
}

_ = VSplitPanel$2_0.prototype = VSplitPanel$2.prototype = new Object_0;
_.getClass$ = function getClass_738(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$2_2_classLit;
}
;
_.onTouchCancel = function onTouchCancel_0(event_0){
  impl_2.log_0('TOUCH CANCEL');
}
;
_.castableTypeMap$ = {12:1, 50:1};
function VSplitPanel$3_0(this$0){
  this.this$0 = this$0;
}

function VSplitPanel$3(){
}

_ = VSplitPanel$3_0.prototype = VSplitPanel$3.prototype = new Object_0;
_.getClass$ = function getClass_739(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$3_2_classLit;
}
;
_.onTouchStart = function onTouchStart_6(event_0){
  var target;
  target = event_0.nativeEvent.touches[0].target;
  $isOrHasChild(this.this$0.splitter, target)?$onMouseDown(this.this$0, event_0.nativeEvent):$onTouchStart($getTouchScrollDelegate_1(this.this$0), event_0);
}
;
_.castableTypeMap$ = {12:1, 53:1};
_.this$0 = null;
function VSplitPanel$4_0(this$0){
  this.this$0 = this$0;
}

function VSplitPanel$4(){
}

_ = VSplitPanel$4_0.prototype = VSplitPanel$4.prototype = new Object_0;
_.getClass$ = function getClass_740(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$4_2_classLit;
}
;
_.onTouchMove = function onTouchMove_1(event_0){
  this.this$0.resizing && $onMouseMove(this.this$0, event_0.nativeEvent);
}
;
_.castableTypeMap$ = {12:1, 52:1};
_.this$0 = null;
function VSplitPanel$5_0(this$0){
  this.this$0 = this$0;
}

function VSplitPanel$5(){
}

_ = VSplitPanel$5_0.prototype = VSplitPanel$5.prototype = new Object_0;
_.getClass$ = function getClass_741(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$5_2_classLit;
}
;
_.onTouchEnd = function onTouchEnd_1(event_0){
  this.this$0.resizing && $onMouseUp(this.this$0, event_0.nativeEvent);
}
;
_.castableTypeMap$ = {12:1, 51:1};
_.this$0 = null;
function VSplitPanel$6_0(this$0){
  this.this$0 = this$0;
}

function VSplitPanel$6(){
}

_ = VSplitPanel$6_0.prototype = VSplitPanel$6.prototype = new Object_0;
_.execute_0 = function execute_58(){
  $iLayout_2(this.this$0);
}
;
_.getClass$ = function getClass_742(){
  return Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$6_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function $getNodeByKey(this$static, key){
  return dynamicCast(this$static.keyToNode.get_0(key), 173);
}

function getVerticalDropLocation(element, event_0){
  var offsetHeight, clientY;
  offsetHeight = element.offsetHeight || 0;
  return clientY = ($clinit_67() , getTouchOrMouseClientY(event_0)) , getVerticalDropLocation_1(element, offsetHeight, clientY, 0.2);
}

function getVerticalDropLocation_0(element, offsetHeight, event_0, topBottomRatio){
  var clientY;
  clientY = ($clinit_67() , getTouchOrMouseClientY(event_0));
  return getVerticalDropLocation_1(element, offsetHeight, clientY, topBottomRatio);
}

function getVerticalDropLocation_1(element, offsetHeight, clientY, topBottomRatio){
  var absoluteTop, fromTop, percentageFromTop;
  absoluteTop = $getAbsoluteTop(element) | 0;
  fromTop = clientY - absoluteTop;
  percentageFromTop = fromTop / offsetHeight;
  return percentageFromTop < topBottomRatio?($clinit_75() , TOP):percentageFromTop > 1 - topBottomRatio?($clinit_75() , BOTTOM):($clinit_75() , MIDDLE);
}

function VAbstractDropHandler$1_0(this$0, val$drag){
  this.this$0 = this$0;
  this.val$drag = val$drag;
}

function VAbstractDropHandler$1(){
}

_ = VAbstractDropHandler$1_0.prototype = VAbstractDropHandler$1.prototype = new Object_0;
_.accepted_0 = function accepted_3(event_0){
  this.this$0.dragAccepted(this.val$drag);
}
;
_.getClass$ = function getClass_807(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VAbstractDropHandler$1_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
_.val$drag = null;
function VAbstractDropHandler$2_0(this$0, val$event, val$cb){
  this.this$0 = this$0;
  this.val$event = val$event;
  this.val$cb = val$cb;
}

function VAbstractDropHandler$2(){
}

_ = VAbstractDropHandler$2_0.prototype = VAbstractDropHandler$2.prototype = new Object_0;
_.execute_0 = function execute_79(){
  this.this$0.acceptCriteria.accept(this.val$event, this.this$0.criterioUIDL, this.val$cb);
}
;
_.getClass$ = function getClass_808(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VAbstractDropHandler$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
_.val$cb = null;
_.val$event = null;
function VAbstractDropHandler$3_0(this$0){
  this.this$0 = this$0;
}

function VAbstractDropHandler$3(){
}

_ = VAbstractDropHandler$3_0.prototype = VAbstractDropHandler$3.prototype = new Object_0;
_.accepted_0 = function accepted_4(event_0){
  this.this$0.validated = true;
}
;
_.getClass$ = function getClass_809(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VAbstractDropHandler$3_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VAcceptCriterion(){
}

_ = VAcceptCriterion.prototype = new Object_0;
_.accept = function accept(drag, configuration, callback){
  var acceptCallback, validates;
  if (this.needsServerSideCheck(drag, configuration)) {
    acceptCallback = new VAcceptCriterion$1_0(callback, drag);
    $visitServer((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), acceptCallback);
  }
   else {
    validates = this.accept_0(drag, configuration);
    validates && callback.accepted_0(drag);
  }
}
;
_.getClass$ = function getClass_810(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VAcceptCriterion_2_classLit;
}
;
_.needsServerSideCheck = function needsServerSideCheck(drag, criterioUIDL){
  return false;
}
;
_.castableTypeMap$ = {};
function VAcceptAll_0(){
}

function VAcceptAll(){
}

_ = VAcceptAll_0.prototype = VAcceptAll.prototype = new VAcceptCriterion;
_.accept_0 = function accept_0(drag, configuration){
  return true;
}
;
_.getClass$ = function getClass_811(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VAcceptAll_2_classLit;
}
;
_.castableTypeMap$ = {};
function VAcceptCriterion$1_0(val$callback, val$drag){
  this.val$callback = val$callback;
  this.val$drag = val$drag;
}

function VAcceptCriterion$1(){
}

_ = VAcceptCriterion$1_0.prototype = VAcceptCriterion$1.prototype = new Object_0;
_.getClass$ = function getClass_812(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VAcceptCriterion$1_2_classLit;
}
;
_.handleResponse = function handleResponse(accepted, response){
  accepted && this.val$callback.accepted_0(this.val$drag);
}
;
_.castableTypeMap$ = {};
_.val$callback = null;
_.val$drag = null;
function $get_1(name_0){
  name_0 = String(name_0);
  return 'com.vaadin.ui.Tree.TreeDropCriterion' == name_0?new VLazyInitItemIdentifiers_0:'com.vaadin.ui.AbstractSelect.TargetItemIs' == name_0?new VIsOverId_0:'com.vaadin.event.dd.acceptcriteria.ContainsDataFlavor' == name_0?new VContainsDataFlavor_0:'com.vaadin.event.dd.acceptcriteria.TargetDetailIs' == name_0?new VTargetDetailIs_0:'com.vaadin.ui.Tree.TargetInSubtree' == name_0?new VTargetInSubtree_0:'com.vaadin.event.dd.acceptcriteria.Not' == name_0?new VNot_0:'com.vaadin.ui.AbstractSelect.AcceptItem' == name_0?new VItemIdIs_0:'com.vaadin.event.dd.acceptcriteria.ServerSideCriterion' == name_0?new VServerAccept_0:'com.vaadin.event.dd.acceptcriteria.And' == name_0?new VAnd_0:'com.vaadin.event.dd.acceptcriteria.SourceIs' == name_0?new VDragSourceIs_0:'com.vaadin.event.dd.acceptcriteria.AcceptAll' == name_0?new VAcceptAll_0:'com.vaadin.event.dd.acceptcriteria.Or' == name_0?new VOr_0:'com.vaadin.ui.Table.TableDropCriterion' == name_0?new VLazyInitItemIdentifiers_0:'com.vaadin.event.dd.acceptcriteria.SourceIsTarget' == name_0?new VSourceIsTarget_0:null;
}

function VAnd_0(){
}

function VAnd(){
}

_ = VAnd_0.prototype = VAnd.prototype = new VAcceptCriterion;
_.accept_0 = function accept_1(drag, configuration){
  var childCount, crit, i, childUIDL;
  childCount = configuration.length - 2;
  for (i = 0; i < childCount; ++i) {
    crit = (childUIDL = configuration[i + 2] , $get_1(childUIDL[1]['name']));
    this.b1 = false;
    crit.accept(drag, configuration[i + 2], this);
    if (!this.b1) {
      return false;
    }
  }
  return true;
}
;
_.accepted_0 = function accepted_5(event_0){
  this.b1 = true;
}
;
_.getClass$ = function getClass_813(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VAnd_2_classLit;
}
;
_.castableTypeMap$ = {};
_.b1 = false;
function VContainsDataFlavor_0(){
}

function VContainsDataFlavor(){
}

_ = VContainsDataFlavor_0.prototype = VContainsDataFlavor.prototype = new VAcceptCriterion;
_.accept_0 = function accept_2(drag, configuration){
  var name_0;
  name_0 = configuration[1]['p'];
  return $keySet(drag.transferable.variables).this$0.containsKey(name_0);
}
;
_.getClass$ = function getClass_814(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VContainsDataFlavor_2_classLit;
}
;
_.castableTypeMap$ = {};
function $executeWhenReady(this$static, command){
  this$static.serverCallback?(this$static.deferredCommand = command):command.this$0.acceptCriteria.accept(command.val$event, command.this$0.criterioUIDL, command.val$cb);
}

function $setDragElement(this$static, node){
  if (this$static.currentDrag) {
    if (!!this$static.dragElement && this$static.dragElement != node) {
      $clearDragElement(this$static);
    }
     else if (node == this$static.dragElement) {
      return;
    }
    this$static.dragElement = node;
    $addClassName(this$static.dragElement, 'v-drag-element');
    $updateDragImagePosition(this$static);
    this$static.isStarted?$run_3(this$static.lazyAttachDragElement):$schedule(this$static.lazyAttachDragElement, 300);
  }
}

function $startDrag_0(this$static, transferable, startEvent, handleDragEvents){
  var eventType, startDrag;
  $endDrag(this$static, false);
  this$static.isStarted = false;
  this$static.currentDrag = new VDragEvent_0(transferable, startEvent);
  this$static.currentDrag.currentGwtEvent = startEvent;
  startDrag = new VDragAndDropManager$2_0(this$static, startEvent, handleDragEvents);
  eventType = $eventGetTypeInt(startEvent.type);
  handleDragEvents && (eventType == 4 || eventType == 1048576)?(this$static.deferredStartRegistration = addNativePreviewHandler(new VDragAndDropManager$3_0(this$static, startDrag))):$execute_3(startDrag);
  return this$static.currentDrag;
}

function $visitServer(this$static, acceptCallback){
  $doRequest(this$static, 0);
  this$static.serverCallback = acceptCallback;
}

function $execute_3(this$static){
  var dh, dragSource, parent_0;
  this$static.this$0.isStarted = true;
  dragSource = this$static.this$0.currentDrag.transferable.component;
  setStyleName(dynamicCast(dragSource, 70).getStyleElement(), 'v-active-drag-source', true);
  dh = null;
  !!this$static.val$startEvent && (dh = $findDragTarget(this$static.this$0.currentDrag.currentGwtEvent.target));
  if (dh) {
    this$static.this$0.currentDropHandler = dh;
    dh.dragEnter(this$static.this$0.currentDrag);
  }
  if (this$static.val$handleDragEvents) {
    this$static.this$0.handlerRegistration = addNativePreviewHandler(this$static.this$0.defaultDragAndDropEventHandler);
    if (!!this$static.this$0.dragElement && !(parent_0 = this$static.this$0.dragElement.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)) {
      $cancel_0(this$static.this$0.lazyAttachDragElement);
      $run_3(this$static.this$0.lazyAttachDragElement);
    }
  }
  setCapture(($clinit_50() , $doc.body));
}

function VDragAndDropManager$2_0(this$0, val$startEvent, val$handleDragEvents){
  this.this$0 = this$0;
  this.val$startEvent = val$startEvent;
  this.val$handleDragEvents = val$handleDragEvents;
}

function VDragAndDropManager$2(){
}

_ = VDragAndDropManager$2_0.prototype = VDragAndDropManager$2.prototype = new Object_0;
_.execute_0 = function execute_80(){
  $execute_3(this);
}
;
_.getClass$ = function getClass_817(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VDragAndDropManager$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
_.val$handleDragEvents = false;
_.val$startEvent = null;
function VDragAndDropManager$3_0(this$0, val$startDrag){
  this.this$0 = this$0;
  this.val$startDrag = val$startDrag;
}

function VDragAndDropManager$3(){
}

_ = VDragAndDropManager$3_0.prototype = VDragAndDropManager$3.prototype = new Object_0;
_.getClass$ = function getClass_818(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VDragAndDropManager$3_2_classLit;
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_5(event_0){
  var currentEventTarget, relatedEventTarget, typeInt;
  typeInt = $eventGetTypeInt(event_0.nativeEvent.type);
  switch (typeInt) {
    case 16:
      if (!this.this$0.dragElement) {
        break;
      }

      currentEventTarget = event_0.nativeEvent.currentTarget || $wnd;
      if (is(currentEventTarget) && !$isOrHasChild(this.this$0.dragElement, currentEventTarget)) {
        break;
      }

    case 128:
    case 256:
    case 512:
    case 4096:
    case 2048:
      break;
    case 32:
      if (!this.this$0.dragElement) {
        break;
      }

      relatedEventTarget = event_0.nativeEvent.relatedTarget;
      if (is(relatedEventTarget) && !$isOrHasChild(this.this$0.dragElement, relatedEventTarget)) {
        break;
      }

    case 64:
    case 2097152:
      if (this.this$0.deferredStartRegistration) {
        $removeHandler(this.this$0.deferredStartRegistration.real);
        this.this$0.deferredStartRegistration = null;
      }

      this.this$0.currentDrag.currentGwtEvent = event_0.nativeEvent;
      $execute_3(this.val$startDrag);
      break;
    default:if (this.this$0.deferredStartRegistration) {
        $removeHandler(this.this$0.deferredStartRegistration.real);
        this.this$0.deferredStartRegistration = null;
      }

      this.this$0.currentDrag = null;
      $clearDragElement(this.this$0);
  }
}
;
_.castableTypeMap$ = {12:1, 64:1};
_.this$0 = null;
_.val$startDrag = null;
function $createDragImage(this$static, element){
  var absoluteLeft, absoluteTop, clientX, clientY, cloneNode, offsetX, offsetY, table, tbody;
  cloneNode = element.cloneNode(true);
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE) {
    if ($equals_2(cloneNode.tagName.toLowerCase(), 'tr')) {
      table = $doc.createElement('table');
      tbody = $doc.createElement('tbody');
      table.appendChild(tbody);
      tbody.appendChild(cloneNode);
      cloneNode = table;
    }
  }
  absoluteTop = $getAbsoluteTop(element) | 0;
  absoluteLeft = $getAbsoluteLeft(element) | 0;
  clientX = ($clinit_67() , getTouchOrMouseClientX(this$static.startEvent));
  clientY = getTouchOrMouseClientY(this$static.startEvent);
  offsetX = absoluteLeft - clientX;
  offsetY = absoluteTop - clientY;
  cloneNode.style['marginLeft'] = offsetX + ($clinit_9() , 'px');
  cloneNode.style['marginTop'] = offsetY + 'px';
  $setDragElement((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), cloneNode);
}

function $getElementOver(this$static){
  if (this$static.elementOver) {
    return this$static.elementOver;
  }
   else if (this$static.currentGwtEvent) {
    return this$static.currentGwtEvent.target;
  }
  return null;
}

function VDragEvent_0(t, startEvent){
  this.dropDetails = new HashMap_0;
  this.transferable = t;
  this.startEvent = startEvent;
  this.id_0 = eventId++;
}

function VDragEvent(){
}

_ = VDragEvent_0.prototype = VDragEvent.prototype = new Object_0;
_.getClass$ = function getClass_821(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VDragEvent_2_classLit;
}
;
_.getCurrentGwtEvent = function getCurrentGwtEvent(){
  return this.currentGwtEvent;
}
;
_.getDropDetails = function getDropDetails(){
  return this.dropDetails;
}
;
_.getEventId = function getEventId(){
  return this.id_0;
}
;
_.getTransferable = function getTransferable(){
  return this.transferable;
}
;
_.setCurrentGwtEvent = function setCurrentGwtEvent(event_0){
  this.currentGwtEvent = event_0;
}
;
_.setElementOver = function setElementOver(targetElement){
  this.elementOver = targetElement;
}
;
_.castableTypeMap$ = {};
_.currentGwtEvent = null;
_.elementOver = null;
_.id_0 = 0;
_.startEvent = null;
_.transferable = null;
var eventId = 0;
function VDragSourceIs_0(){
}

function VDragSourceIs(){
}

_ = VDragSourceIs_0.prototype = VDragSourceIs.prototype = new VAcceptCriterion;
_.accept_0 = function accept_3(drag, configuration){
  var $e0, c, component, i, paintable, requiredPid, componentDetail;
  try {
    component = drag.transferable.component;
    c = configuration[1]['c'];
    for (i = 0; i < c; ++i) {
      requiredPid = configuration[1]['component' + i];
      paintable = (componentDetail = (!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41).currentDropHandler.getApplicationConnection().idToPaintableDetail[requiredPid] , !componentDetail?null:componentDetail.component);
      if (paintable == component) {
        return true;
      }
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, 112))
      throw $e0;
  }
  return false;
}
;
_.getClass$ = function getClass_822(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VDragSourceIs_2_classLit;
}
;
_.castableTypeMap$ = {};
function VIsOverId_0(){
}

function VIsOverId(){
}

_ = VIsOverId_0.prototype = VIsOverId.prototype = new VAcceptCriterion;
_.accept_0 = function accept_4(drag, configuration){
  var $e0, paintable, pid, pid2, searchedId, string, string$index, string$max, stringArrayAttribute;
  try {
    pid = configuration[1]['s'];
    paintable = (!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41).currentDropHandler.getPaintable();
    pid2 = ((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41).currentDropHandler.getApplicationConnection() , dynamicCast(paintable, 70).element_0).tkPid;
    if ($equals_2(pid2, pid)) {
      searchedId = drag.dropDetails.get_0('itemIdOver');
      stringArrayAttribute = $getStringArray(configuration[1], 'keys');
      for (string$index = 0 , string$max = stringArrayAttribute.length; string$index < string$max; ++string$index) {
        string = stringArrayAttribute[string$index];
        if ($equals_2(string, searchedId)) {
          return true;
        }
      }
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, 112))
      throw $e0;
  }
  return false;
}
;
_.getClass$ = function getClass_823(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VIsOverId_2_classLit;
}
;
_.castableTypeMap$ = {};
function VItemIdIs_0(){
}

function VItemIdIs(){
}

_ = VItemIdIs_0.prototype = VItemIdIs.prototype = new VAcceptCriterion;
_.accept_0 = function accept_5(drag, configuration){
  var $e0, dragSource, pid, pid2, searchedId, string, string$index, string$max, stringArrayAttribute;
  try {
    pid = configuration[1]['s'];
    dragSource = drag.transferable.component;
    pid2 = ((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41).currentDropHandler.getApplicationConnection() , dynamicCast(dragSource, 70).element_0).tkPid;
    if ($equals_2(pid2, pid)) {
      searchedId = drag.transferable.variables.get_0('itemId');
      stringArrayAttribute = $getStringArray(configuration[1], 'keys');
      for (string$index = 0 , string$max = stringArrayAttribute.length; string$index < string$max; ++string$index) {
        string = stringArrayAttribute[string$index];
        if ($equals_2(string, searchedId)) {
          return true;
        }
      }
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, 112))
      throw $e0;
  }
  return false;
}
;
_.getClass$ = function getClass_824(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VItemIdIs_2_classLit;
}
;
_.castableTypeMap$ = {};
function VLazyInitItemIdentifiers_0(){
}

function VLazyInitItemIdentifiers(){
}

_ = VLazyInitItemIdentifiers_0.prototype = VLazyInitItemIdentifiers.prototype = new VAcceptCriterion;
_.accept = function accept_6(drag, configuration, callback){
  var acceptCallback, object;
  if (!this.lastDragEvent || this.lastDragEvent != drag) {
    this.loaded = false;
    this.lastDragEvent = drag;
  }
  if (this.loaded) {
    object = drag.dropDetails.get_0('itemIdOver');
    this.hashSet.map.containsKey(object) && callback.accepted_0(drag);
  }
   else {
    acceptCallback = new VLazyInitItemIdentifiers$1_0(this, callback, drag);
    $visitServer((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), acceptCallback);
  }
}
;
_.accept_0 = function accept_7(drag, configuration){
  return false;
}
;
_.getClass$ = function getClass_825(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VLazyInitItemIdentifiers_2_classLit;
}
;
_.needsServerSideCheck = function needsServerSideCheck_0(drag, criterioUIDL){
  return this.loaded;
}
;
_.castableTypeMap$ = {};
_.hashSet = null;
_.lastDragEvent = null;
_.loaded = false;
function VLazyInitItemIdentifiers$1_0(this$0, val$callback, val$drag){
  this.this$0 = this$0;
  this.val$callback = val$callback;
  this.val$drag = val$drag;
}

function VLazyInitItemIdentifiers$1(){
}

_ = VLazyInitItemIdentifiers$1_0.prototype = VLazyInitItemIdentifiers$1.prototype = new Object_0;
_.getClass$ = function getClass_826(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VLazyInitItemIdentifiers$1_2_classLit;
}
;
_.handleResponse = function handleResponse_0(accepted, response){
  var i, stringArrayAttribute;
  this.this$0.hashSet = new HashSet_0;
  stringArrayAttribute = $getStringArray(response[1], 'allowedIds');
  for (i = 0; i < stringArrayAttribute.length; ++i) {
    $add_14(this.this$0.hashSet, stringArrayAttribute[i]);
  }
  this.this$0.loaded = true;
  accepted && this.val$callback.accepted_0(this.val$drag);
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
_.val$callback = null;
_.val$drag = null;
function VNot_0(){
}

function VNot(){
}

_ = VNot_0.prototype = VNot.prototype = new VAcceptCriterion;
_.accept = function accept_8(drag, configuration, callback){
  var accept1cb, childUIDL;
  if (!this.crit1) {
    this.crit1 = (childUIDL = configuration[2] , $get_1(childUIDL[1]['name']));
    if (!this.crit1) {
      impl_2.log_0("Not criteria didn't found a child criteria");
      return;
    }
  }
  this.b1 = false;
  accept1cb = new VNot$1_0(this);
  this.crit1.accept(drag, configuration[2], accept1cb);
  this.b1 || callback.accepted_0(drag);
}
;
_.accept_0 = function accept_9(drag, configuration){
  return false;
}
;
_.getClass$ = function getClass_827(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VNot_2_classLit;
}
;
_.needsServerSideCheck = function needsServerSideCheck_1(drag, criterioUIDL){
  return false;
}
;
_.castableTypeMap$ = {};
_.b1 = false;
_.crit1 = null;
function VNot$1_0(this$0){
  this.this$0 = this$0;
}

function VNot$1(){
}

_ = VNot$1_0.prototype = VNot$1.prototype = new Object_0;
_.accepted_0 = function accepted_6(event_0){
  this.this$0.b1 = true;
}
;
_.getClass$ = function getClass_828(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VNot$1_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VOr_0(){
}

function VOr(){
}

_ = VOr_0.prototype = VOr.prototype = new VAcceptCriterion;
_.accept = function accept_10(drag, configuration, callback){
  var childCount, crit, i, childUIDL;
  childCount = configuration.length - 2;
  this.accepted = false;
  for (i = 0; i < childCount; ++i) {
    crit = (childUIDL = configuration[i + 2] , $get_1(childUIDL[1]['name']));
    crit.accept(drag, configuration[i + 2], this);
    if (this.accepted) {
      callback.accepted_0(drag);
      return;
    }
  }
}
;
_.accept_0 = function accept_11(drag, configuration){
  return false;
}
;
_.accepted_0 = function accepted_7(event_0){
  this.accepted = true;
}
;
_.getClass$ = function getClass_829(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VOr_2_classLit;
}
;
_.needsServerSideCheck = function needsServerSideCheck_2(drag, criterioUIDL){
  return false;
}
;
_.castableTypeMap$ = {};
_.accepted = false;
function VServerAccept_0(){
}

function VServerAccept(){
}

_ = VServerAccept_0.prototype = VServerAccept.prototype = new VAcceptCriterion;
_.accept = function accept_12(drag, configuration, callback){
  var acceptCallback;
  acceptCallback = new VServerAccept$1_0(callback, drag);
  $visitServer((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), acceptCallback);
}
;
_.accept_0 = function accept_13(drag, configuration){
  return false;
}
;
_.getClass$ = function getClass_830(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VServerAccept_2_classLit;
}
;
_.needsServerSideCheck = function needsServerSideCheck_3(drag, criterioUIDL){
  return true;
}
;
_.castableTypeMap$ = {};
function VServerAccept$1_0(val$callback, val$drag){
  this.val$callback = val$callback;
  this.val$drag = val$drag;
}

function VServerAccept$1(){
}

_ = VServerAccept$1_0.prototype = VServerAccept$1.prototype = new Object_0;
_.getClass$ = function getClass_831(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VServerAccept$1_2_classLit;
}
;
_.handleResponse = function handleResponse_1(accepted, response){
  accepted && this.val$callback.accepted_0(this.val$drag);
}
;
_.castableTypeMap$ = {};
_.val$callback = null;
_.val$drag = null;
function VSourceIsTarget_0(){
}

function VSourceIsTarget(){
}

_ = VSourceIsTarget_0.prototype = VSourceIsTarget.prototype = new VAcceptCriterion;
_.accept_0 = function accept_14(drag, configuration){
  var dragSource, paintable;
  dragSource = drag.transferable.component;
  paintable = (!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41).currentDropHandler.getPaintable();
  return paintable == dragSource;
}
;
_.getClass$ = function getClass_832(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VSourceIsTarget_2_classLit;
}
;
_.castableTypeMap$ = {};
function VTargetDetailIs_0(){
}

function VTargetDetailIs(){
}

_ = VTargetDetailIs_0.prototype = VTargetDetailIs.prototype = new VAcceptCriterion;
_.accept_0 = function accept_15(drag, configuration){
  var name_0, object, t, value;
  name_0 = configuration[1]['p'];
  t = 't' in configuration[1]?String(configuration[1]['t']):'s';
  value = null;
  t == 's'?(value = configuration[1]['v']):t == 'b' && (value = ($clinit_95() , Boolean(configuration[1]['v'])?TRUE:FALSE));
  if (value != null) {
    object = drag.dropDetails.get_0(name_0);
    return object != null && object.castableTypeMap$ && !!object.castableTypeMap$[107]?$equals_2(dynamicCast(object, 107).name_0, value):equals__devirtual$(value, object);
  }
   else {
    return false;
  }
}
;
_.getClass$ = function getClass_833(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VTargetDetailIs_2_classLit;
}
;
_.castableTypeMap$ = {};
function VTargetInSubtree_0(){
}

function VTargetInSubtree(){
}

_ = VTargetInSubtree_0.prototype = VTargetInSubtree.prototype = new VAcceptCriterion;
_.accept_0 = function accept_16(drag, configuration){
  var depth, i, parent2, searchedKey, tree, treeNode;
  tree = dynamicCast((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41).currentDropHandler.getPaintable(), 181);
  treeNode = $getNodeByKey(tree, dynamicCast(drag.dropDetails.get_0('itemIdOver'), 1));
  if (treeNode) {
    parent2 = treeNode;
    depth = configuration[1]['depth'];
    depth < 0 && (depth = 2147483647);
    searchedKey = configuration[1]['key'];
    for (i = 0; i <= depth && parent2 != null && parent2.castableTypeMap$ && !!parent2.castableTypeMap$[173]; ++i) {
      if ($equals_2(searchedKey, dynamicCast(parent2, 173).key)) {
        return true;
      }
      parent2 = parent2.getParent().getParent();
    }
  }
  return false;
}
;
_.getClass$ = function getClass_834(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VTargetInSubtree_2_classLit;
}
;
_.castableTypeMap$ = {};
function VTransferable_0(){
  this.variables = new HashMap_0;
}

function VTransferable(){
}

_ = VTransferable_0.prototype = VTransferable.prototype = new Object_0;
_.getClass$ = function getClass_835(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VTransferable_2_classLit;
}
;
_.getDragSource = function getDragSource(){
  return this.component;
}
;
_.getVariableMap = function getVariableMap(){
  return this.variables;
}
;
_.castableTypeMap$ = {};
_.component = null;
function $clinit_75(){
  $clinit_75 = nullMethod;
  TOP = new VerticalDropLocation_0('TOP', 0);
  BOTTOM = new VerticalDropLocation_0('BOTTOM', 1);
  MIDDLE = new VerticalDropLocation_0('MIDDLE', 2);
  $VALUES_11 = initValues(_3Lcom_vaadin_terminal_gwt_client_ui_dd_VerticalDropLocation_2_classLit, {30:1, 35:1}, 105, [TOP, BOTTOM, MIDDLE]);
}

function VerticalDropLocation_0(enum$name, enum$ordinal){
  this.name_0 = enum$name;
  this.ordinal = enum$ordinal;
}

function values_12(){
  $clinit_75();
  return $VALUES_11;
}

function VerticalDropLocation(){
}

_ = VerticalDropLocation_0.prototype = VerticalDropLocation.prototype = new Enum;
_.getClass$ = function getClass_836(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_VerticalDropLocation_2_classLit;
}
;
_.castableTypeMap$ = {30:1, 32:1, 105:1, 107:1};
var $VALUES_11, BOTTOM, MIDDLE, TOP;
function CellBasedLayout$Spacing_0(hSpacing, vSpacing){
  this.hSpacing = hSpacing;
  this.vSpacing = vSpacing;
}

function CellBasedLayout$Spacing(){
}

_ = CellBasedLayout$Spacing_0.prototype = CellBasedLayout$Spacing.prototype = new Object_0;
_.getClass$ = function getClass_837(){
  return Lcom_vaadin_terminal_gwt_client_ui_layout_CellBasedLayout$Spacing_2_classLit;
}
;
_.toString$ = function toString_18(){
  return 'Spacing [hSpacing=' + this.hSpacing + ',vSpacing=' + this.vSpacing + ']';
}
;
_.castableTypeMap$ = {};
_.hSpacing = 0;
_.vSpacing = 0;
function $applyAlignments(this$static){
  $setMarginTop(this$static, this$static.containerMarginTop);
  !!this$static.caption_0 && (this$static.caption_0.element_0.style['marginLeft'] = this$static.alignmentLeftOffsetForCaption + ($clinit_9() , 'px') , undefined);
  this$static.widgetDIV.style['marginLeft'] = this$static.alignmentLeftOffsetForWidget + ($clinit_9() , 'px');
}

function $calculateHorizontalAlignment(this$static, emptySpace){
  var captionSpace, widgetSpace;
  this$static.alignmentLeftOffsetForCaption = 0;
  this$static.alignmentLeftOffsetForWidget = 0;
  if ((this$static.alignment.bitMask & 1) == 1) {
    return;
  }
  captionSpace = emptySpace;
  widgetSpace = emptySpace;
  if (this$static.caption_0) {
    if (this$static.caption_0.placedAfterComponent) {
      captionSpace = 0;
      widgetSpace -= this$static.widgetSize.getWidth();
      widgetSpace -= $getCaptionWidth_0(this$static);
    }
     else {
      widgetSpace -= this$static.widgetSize.getWidth();
      captionSpace -= $getCaptionWidth_0(this$static);
    }
  }
   else {
    captionSpace = 0;
    widgetSpace -= this$static.widgetSize.getWidth();
  }
  if ((this$static.alignment.bitMask & 16) == 16) {
    this$static.alignmentLeftOffsetForCaption = ~~(captionSpace / 2);
    this$static.alignmentLeftOffsetForWidget = ~~(widgetSpace / 2);
  }
   else if ((this$static.alignment.bitMask & 2) == 2) {
    this$static.alignmentLeftOffsetForCaption = captionSpace;
    this$static.alignmentLeftOffsetForWidget = widgetSpace;
  }
  this$static.alignmentLeftOffsetForCaption < 0 && (this$static.alignmentLeftOffsetForCaption = 0);
  this$static.alignmentLeftOffsetForWidget < 0 && (this$static.alignmentLeftOffsetForWidget = 0);
}

function $calculateVerticalAlignmentTopOffset(this$static, emptySpace){
  var top_0;
  if ((this$static.alignment.bitMask & 4) == 4) {
    return 0;
  }
  if (this$static.caption_0) {
    if (this$static.caption_0.placedAfterComponent) {
      emptySpace -= max(this$static.widgetSize.getHeight(), $getHeight(this$static.caption_0));
    }
     else {
      emptySpace -= this$static.widgetSize.getHeight();
      emptySpace -= $getCaptionHeight(this$static);
    }
  }
   else {
    emptySpace -= this$static.widgetSize.getHeight();
  }
  top_0 = 0;
  (this$static.alignment.bitMask & 32) == 32?(top_0 = ~~(emptySpace / 2)):(this$static.alignment.bitMask & 8) == 8 && (top_0 = emptySpace);
  top_0 < 0 && (top_0 = 0);
  return top_0;
}

function $expand(this$static, orientation, spaceForExpansion){
  var expansionAmount;
  expansionAmount = ~~Math.max(Math.min(spaceForExpansion * this$static.expandRatio, 2147483647), -2147483648);
  orientation == 1?(this$static.containerExpansion.width_0 = expansionAmount , undefined):(this$static.containerExpansion.height_0 = expansionAmount , undefined);
  return expansionAmount;
}

function $expandExtra(this$static, orientation){
  orientation == 1?(this$static.containerExpansion.width_0 = this$static.containerExpansion.getWidth() + 1 , undefined):(this$static.containerExpansion.height_0 = this$static.containerExpansion.getHeight() + 1 , undefined);
}

function $getCaptionHeight(this$static){
  if (!this$static.caption_0) {
    return 0;
  }
  return this$static.captionHeight;
}

function $getCaptionHeightAboveComponent(this$static){
  if (!this$static.caption_0 || this$static.caption_0.placedAfterComponent) {
    return 0;
  }
  return $getCaptionHeight(this$static);
}

function $getCaptionRequiredWidth(this$static){
  if (!this$static.caption_0) {
    return 0;
  }
  return this$static.captionRequiredWidth;
}

function $getCaptionWidth_0(this$static){
  if (!this$static.caption_0) {
    return 0;
  }
  return this$static.captionWidth;
}

function $getCaptionWidthAfterComponent(this$static){
  if (!this$static.caption_0 || !this$static.caption_0.placedAfterComponent) {
    return 0;
  }
  return $getCaptionWidth_0(this$static);
}

function $isComponentRelativeSized(this$static, orientation){
  if (!this$static.relativeSize) {
    return false;
  }
  return orientation == 1?this$static.relativeSize.width_0 >= 0:this$static.relativeSize.height_0 >= 0;
}

function $remove_13(this$static, child){
  if (child != this$static.caption_0 && child != this$static.widget) {
    return false;
  }
  $setParent(child, null);
  if (child == this$static.caption_0) {
    this$static.containerDIV.removeChild(child.element_0);
    this$static.caption_0 = null;
  }
   else {
    this$static.widgetDIV.removeChild(child.element_0);
    this$static.widget = null;
  }
  return true;
}

function $renderChild(this$static, childUIDL, client, fixedWidth){
  fixedWidth < 0 && ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isOpera && (this$static.containerDIV.style['width'] = '1000000px' , undefined);
  dynamicCast(this$static.widget, 26).updateFromUIDL(childUIDL, client);
}

function $setCaption_0(this$static, newCaption){
  !!newCaption && $removeFromParent_0(newCaption);
  !!this$static.caption_0 && newCaption != this$static.caption_0 && $remove_13(this$static, this$static.caption_0);
  this$static.caption_0 = newCaption;
  if (this$static.caption_0) {
    if (this$static.caption_0.placedAfterComponent) {
      setFloat(this$static.caption_0.element_0, 'left');
      this$static.containerDIV.appendChild(this$static.caption_0.element_0);
    }
     else {
      setFloat(this$static.caption_0.element_0, '');
      this$static.containerDIV.insertBefore(this$static.caption_0.element_0, this$static.widgetDIV);
    }
    $adopt(this$static, this$static.caption_0);
  }
}

function $setContainerSize(this$static, widgetAndCaptionWidth, widgetAndCaptionHeight){
  var containerHeight, containerWidth;
  containerWidth = widgetAndCaptionWidth;
  containerWidth += this$static.containerExpansion.getWidth();
  containerHeight = widgetAndCaptionHeight;
  containerHeight += this$static.containerExpansion.getHeight();
  if (containerWidth < 0) {
    impl_2.log_0('containerWidth should never be negative: ' + containerWidth);
    containerWidth = 0;
  }
  if (containerHeight < 0) {
    impl_2.log_0('containerHeight should never be negative: ' + containerHeight);
    containerHeight = 0;
  }
  this$static.contSize.width_0 = containerWidth;
  this$static.contSize.height_0 = containerHeight;
  $updateContainerDOMSize(this$static);
}

function $setMarginTop(this$static, marginTop){
  this$static.containerMarginTop = marginTop;
  this$static.containerDIV.style['paddingTop'] = marginTop + this$static.alignmentTopOffset + ($clinit_9() , 'px');
  $updateContainerDOMSize(this$static);
}

function $setOrientation_0(this$static, orientation){
  orientation == 1?setFloat_0(this$static.element_0, 'left'):setFloat_0(this$static.element_0, '');
  this$static.element_0.style['height'] = '0px';
  this$static.contSize.height_0 = 0;
  this$static.contSize.width_0 = 0;
  this$static.containerMarginTop = 0;
  this$static.containerDIV.style['paddingLeft'] = '0';
  this$static.containerDIV.style['paddingTop'] = '0';
  this$static.containerExpansion.height_0 = 0;
  this$static.containerExpansion.width_0 = 0;
  this$static.alignmentLeftOffsetForCaption = 0;
  this$static.alignmentLeftOffsetForWidget = 0;
  this$static.alignmentTopOffset = 0;
  $applyAlignments(this$static);
}

function $setWidget_5(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent_0(w);
  !!this$static.widget && $remove_13(this$static, this$static.widget);
  this$static.widget = w;
  if (w) {
    this$static.widgetDIV.appendChild(this$static.widget.element_0);
    $setParent(w, this$static);
  }
}

function $size_1(this$static){
  return this$static.widget?this$static.caption_0?2:1:this$static.caption_0?1:0;
}

function $updateAlignments(this$static, parentWidth, parentHeight){
  parentHeight == -1 && (parentHeight = this$static.contSize.getHeight());
  parentWidth == -1 && (parentWidth = this$static.contSize.getWidth());
  this$static.alignmentTopOffset = $calculateVerticalAlignmentTopOffset(this$static, parentHeight);
  $calculateHorizontalAlignment(this$static, parentWidth);
  $applyAlignments(this$static);
}

function $updateCaption_6(this$static, uidl, client){
  var newCaption, positionChanged;
  if (isNeeded(uidl)) {
    newCaption = this$static.caption_0;
    if (!newCaption) {
      newCaption = new VCaption_0(dynamicCast(this$static.widget, 26), client);
      newCaption.element_0.style['height'] = '18px';
      ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && $setCaption_0(this$static, newCaption);
    }
    positionChanged = newCaption.updateCaption_0(uidl);
    (newCaption != this$static.caption_0 || positionChanged) && $setCaption_0(this$static, newCaption);
  }
   else {
    !!this$static.caption_0 && $remove_13(this$static, this$static.caption_0);
  }
  $updateCaptionSize(this$static);
  !this$static.relativeSize && (this$static.relativeSize = parseRelativeSize_0(uidl) , undefined);
}

function $updateCaptionSize(this$static){
  this$static.captionWidth = 0;
  this$static.captionHeight = 0;
  if (this$static.caption_0) {
    this$static.captionWidth = $getRenderedWidth(this$static.caption_0);
    this$static.captionHeight = $getHeight(this$static.caption_0);
    this$static.captionRequiredWidth = this$static.caption_0.getRequiredWidth();
  }
}

function $updateContainerDOMSize(this$static){
  var height, width;
  width = this$static.contSize.getWidth();
  height = this$static.contSize.getHeight() - this$static.alignmentTopOffset;
  width < 0 && (width = 0);
  height < 0 && (height = 0);
  this$static.element_0.style['width'] = width + 'px';
  this$static.element_0.style['height'] = height + 'px';
  if (this$static.caption_0) {
    this$static.caption_0.placedAfterComponent?$setMaxWidth(this$static.caption_0, this$static.captionWidth):$setMaxWidth(this$static.caption_0, width);
    this$static.captionWidth = $getRenderedWidth(this$static.caption_0);
    this$static.caption_0.element_0.style['height'] = '';
  }
}

function $updateWidgetSize(this$static){
  var clientWidth, h_0, newWidth, oldBorderStyle, style, w;
  w = getRequiredWidth(this$static.widgetDIV);
  if ($isIE7(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    clientWidth = this$static.widget.element_0.clientWidth;
    if (w != clientWidth) {
      style = this$static.widget.element_0.style;
      oldBorderStyle = style['borderStyle'];
      style['borderStyle'] = ($clinit_2() , 'none');
      newWidth = getRequiredWidth(this$static.widgetDIV);
      style['borderStyle'] = oldBorderStyle;
      newWidth > w && (w = newWidth + (w - clientWidth));
    }
  }
  h_0 = getRequiredHeight(this$static.widgetDIV);
  this$static.widgetSize.width_0 = w;
  this$static.widgetSize.height_0 = h_0;
}

function $widgetHasSizeSpecified(this$static, orientation){
  var size;
  orientation == 1?(size = this$static.widget.element_0.style['width']):(size = this$static.widget.element_0.style['height']);
  return size != null && !$equals_2(size, '');
}

function ChildComponentContainer_0(widget, orientation){
  var div, tableEl;
  this.contSize = new RenderInformation$Size_0(0, 0);
  this.widgetSize = new RenderInformation$Size_0(0, 0);
  this.containerExpansion = new RenderInformation$Size_0(0, 0);
  this.alignment = ($clinit_70() , TOP_LEFT);
  this.containerDIV = $doc.createElement('div');
  this.widgetDIV = $doc.createElement('div');
  if ($isFF2(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    tableEl = $doc.createElement('table');
    tableEl.innerHTML = '<tbody><tr><td><div><\/div><\/td><\/tr><\/tbody>';
    div = $getFirstChildElement($getFirstChildElement($getFirstChildElement($getFirstChildElement(tableEl))));
    tableEl.cellPadding = 0;
    tableEl.cellSpacing = 0;
    tableEl.border = 0;
    div.style['padding'] = '0';
    this.element_0 = tableEl;
    this.containerDIV = div;
  }
   else {
    setFloat_0(this.widgetDIV, 'left');
    this.element_0 = this.containerDIV;
    this.containerDIV.style['height'] = '0';
    this.containerDIV.style['width'] = '0px';
    this.containerDIV.style['overflow'] = 'hidden';
  }
  if ((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isIE) {
    this.containerDIV.style['position'] = 'relative';
    this.widgetDIV.style['position'] = 'relative';
  }
  this.containerDIV.appendChild(this.widgetDIV);
  $setOrientation_0(this, orientation);
  $setWidget_5(this, widget);
}

function setFloat_0(div, floatString){
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE) {
    div.style['styleFloat'] = floatString;
    $equals_2(floatString, 'left')?(div.style['display'] = 'inline' , undefined):(div.style['display'] = 'block' , undefined);
  }
   else {
    div.style['cssFloat'] = floatString;
  }
}

function ChildComponentContainer(){
}

_ = ChildComponentContainer_0.prototype = ChildComponentContainer.prototype = new Panel;
_.getClass$ = function getClass_838(){
  return Lcom_vaadin_terminal_gwt_client_ui_layout_ChildComponentContainer_2_classLit;
}
;
_.iterator_0 = function iterator_10(){
  return new ChildComponentContainer$ChildComponentContainerIterator_0(this);
}
;
_.remove_2 = function remove_21(child){
  return $remove_13(this, child);
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 20:1, 21:1, 22:1, 33:1, 69:1, 70:1, 75:1, 152:1};
_.alignmentLeftOffsetForCaption = 0;
_.alignmentLeftOffsetForWidget = 0;
_.alignmentTopOffset = 0;
_.caption_0 = null;
_.captionHeight = 0;
_.captionRequiredWidth = 0;
_.captionWidth = 0;
_.containerDIV = null;
_.containerMarginTop = 0;
_.expandRatio = 0;
_.relativeSize = null;
_.widget = null;
_.widgetDIV = null;
function $get_2(this$static, i){
  if (i == 0) {
    if (this$static.this$0.widget) {
      return this$static.this$0.widget;
    }
     else if (this$static.this$0.caption_0) {
      return this$static.this$0.caption_0;
    }
     else {
      throw new NoSuchElementException_0;
    }
  }
   else if (i == 1) {
    if (!!this$static.this$0.widget && !!this$static.this$0.caption_0) {
      return this$static.this$0.caption_0;
    }
     else {
      throw new NoSuchElementException_0;
    }
  }
   else {
    throw new NoSuchElementException_0;
  }
}

function ChildComponentContainer$ChildComponentContainerIterator_0(this$0){
  this.this$0 = this$0;
}

function ChildComponentContainer$ChildComponentContainerIterator(){
}

_ = ChildComponentContainer$ChildComponentContainerIterator_0.prototype = ChildComponentContainer$ChildComponentContainerIterator.prototype = new Object_0;
_.getClass$ = function getClass_839(){
  return Lcom_vaadin_terminal_gwt_client_ui_layout_ChildComponentContainer$ChildComponentContainerIterator_2_classLit;
}
;
_.hasNext = function hasNext_5(){
  return this.id_0 < $size_1(this.this$0);
}
;
_.next_0 = function next_6(){
  var w;
  return w = $get_2(this, this.id_0) , ++this.id_0 , w;
}
;
_.remove_1 = function remove_22(){
  var toRemove;
  toRemove = this.id_0 - 1;
  if (toRemove == 0) {
    if (this.this$0.widget) {
      $remove_13(this.this$0, this.this$0.widget);
    }
     else if (this.this$0.caption_0) {
      $remove_13(this.this$0, this.this$0.caption_0);
    }
     else {
      throw new IllegalStateException_0;
    }
  }
   else if (toRemove == 1) {
    if (!!this.this$0.widget && !!this.this$0.caption_0) {
      $remove_13(this.this$0, this.this$0.caption_0);
    }
     else {
      throw new IllegalStateException_0;
    }
  }
   else {
    throw new IllegalStateException_0;
  }
  --this.id_0;
}
;
_.castableTypeMap$ = {158:1};
_.id_0 = 0;
_.this$0 = null;
function $setMarginBottom(this$static, marginBottom){
  this$static.marginBottom = marginBottom;
  this$static.vertical = this$static.marginTop + this$static.marginBottom;
}

function $setMarginLeft(this$static, marginLeft){
  this$static.marginLeft = marginLeft;
  this$static.horizontal = this$static.marginLeft + this$static.marginRight;
}

function $setMarginRight(this$static, marginRight){
  this$static.marginRight = marginRight;
  this$static.horizontal = this$static.marginLeft + this$static.marginRight;
}

function $setMarginTop_0(this$static, marginTop){
  this$static.marginTop = marginTop;
  this$static.vertical = this$static.marginTop + this$static.marginBottom;
}

function Margins_0(){
  this.marginTop = 0;
  this.marginBottom = 0;
  this.marginLeft = 0;
  this.marginRight = 0;
  this.horizontal = this.marginLeft + this.marginRight;
  this.vertical = this.marginTop + this.marginBottom;
}

function Margins(){
}

_ = Margins_0.prototype = Margins.prototype = new Object_0;
_.getClass$ = function getClass_840(){
  return Lcom_vaadin_terminal_gwt_client_ui_layout_Margins_2_classLit;
}
;
_.toString$ = function toString_19(){
  return 'Margins [marginLeft=' + this.marginLeft + ',marginTop=' + this.marginTop + ',marginRight=' + this.marginRight + ',marginBottom=' + this.marginBottom + ']';
}
;
_.castableTypeMap$ = {};
_.horizontal = 0;
_.marginBottom = 0;
_.marginLeft = 0;
_.marginRight = 0;
_.marginTop = 0;
_.vertical = 0;
function $synchronizeContentToServer(this$static){
  var html;
  if (!!this$static.client && this$static.id_0 != null) {
    html = $getHTML(this$static.rta.impl);
    if (!$equals_2(html, this$static.currentValue)) {
      $updateVariable_0(this$static.client, this$static.id_0, 'text', html, this$static.immediate);
      this$static.currentValue = html;
    }
  }
}

function $compareTo_0(this$static, b){
  return this$static.value_0 < b.value_0?-1:this$static.value_0 > b.value_0?1:0;
}

function Float_0(value){
  this.value_0 = value;
}

function Float(){
}

_ = Float_0.prototype = Float.prototype = new Number_0;
_.compareTo$ = function compareTo_3(b){
  return $compareTo_0(this, dynamicCast(b, 120));
}
;
_.equals$ = function equals_8(o){
  return o != null && o.castableTypeMap$ && !!o.castableTypeMap$[120] && dynamicCast(o, 120).value_0 == this.value_0;
}
;
_.getClass$ = function getClass_855(){
  return Ljava_lang_Float_2_classLit;
}
;
_.hashCode$ = function hashCode_8(){
  return ~~Math.max(Math.min(this.value_0, 2147483647), -2147483648);
}
;
_.toString$ = function toString_23(){
  return '' + this.value_0;
}
;
_.castableTypeMap$ = {30:1, 32:1, 109:1, 120:1};
_.value_0 = 0;
function round0(x){
  return Math.round(x);
}

function $values_0(this$static){
  var entrySet;
  entrySet = this$static.entrySet_0();
  return new AbstractMap$2_0(this$static, entrySet);
}

function $containsHashValue(this$static, value){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue();
        if (this$static.equalsBridge(value, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}

function $containsStringValue(this$static, value){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entryValue = stringMap[key];
      if (this$static.equalsBridge(value, entryValue)) {
        return true;
      }
    }
  }
  return false;
}

_ = AbstractHashMap.prototype;
_.containsValue = function containsValue(value){
  if (this.nullSlotLive && this.equals(this.nullSlot, value)) {
    return true;
  }
   else if ($containsStringValue(this, value)) {
    return true;
  }
   else if ($containsHashValue(this, value)) {
    return true;
  }
  return false;
}
;
function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (toFind == null?this$static.get_1(i) == null:equals__devirtual$(toFind, this$static.get_1(i))) {
      return i;
    }
  }
  return -1;
}

function AbstractMap$2_0(this$0, val$entrySet){
  this.this$0 = this$0;
  this.val$entrySet = val$entrySet;
}

function AbstractMap$2(){
}

_ = AbstractMap$2_0.prototype = AbstractMap$2.prototype = new AbstractCollection;
_.contains = function contains_2(value){
  return this.this$0.containsValue(value);
}
;
_.getClass$ = function getClass_881(){
  return Ljava_util_AbstractMap$2_2_classLit;
}
;
_.iterator_0 = function iterator_14(){
  var outerIter;
  return outerIter = this.val$entrySet.iterator_0() , new AbstractMap$2$1_0(outerIter);
}
;
_.size_1 = function size_4(){
  return this.val$entrySet.size_1();
}
;
_.castableTypeMap$ = {33:1, 67:1};
_.this$0 = null;
_.val$entrySet = null;
function AbstractMap$2$1_0(val$outerIter){
  this.val$outerIter = val$outerIter;
}

function AbstractMap$2$1(){
}

_ = AbstractMap$2$1_0.prototype = AbstractMap$2$1.prototype = new Object_0;
_.getClass$ = function getClass_882(){
  return Ljava_util_AbstractMap$2$1_2_classLit;
}
;
_.hasNext = function hasNext_9(){
  return this.val$outerIter.hasNext();
}
;
_.next_0 = function next_10(){
  return dynamicCast(this.val$outerIter.next_0(), 58).getValue();
}
;
_.remove_1 = function remove_31(){
  this.val$outerIter.remove_1();
}
;
_.castableTypeMap$ = {158:1};
_.val$outerIter = null;
function $set(this$static, index, o){
  var previous;
  previous = (checkIndex(index, this$static.size_0) , this$static.array[index]);
  setCheck(this$static.array, index, o);
  return previous;
}

_ = LinkedHashMap.prototype;
_.containsValue = function containsValue_0(value){
  var node;
  node = this.head.next;
  while (node != this.head) {
    if (equalsWithNullCheck(node.value_0, value)) {
      return true;
    }
    node = node.next;
  }
  return false;
}
;
function Vector(){
}

_ = Vector.prototype = new AbstractList;
_.castableTypeMap$ = {30:1, 33:1, 67:1, 68:1, 183:1};
_.arrayList = null;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Visibility', values_8), _3Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Visibility;'), Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Visibility$1', null), Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Visibility$2', null), Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyPressEvent'), Lcom_google_gwt_user_client_CommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandCanceledException'), Lcom_google_gwt_user_client_CommandExecutor_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor'), Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$1'), Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$2'), Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$CircularIterator'), Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl'), Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl$FreeNode'), Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable'), Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable'), Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$CellFormatter'), Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable$FlexCellFormatter'), Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$1'), Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$ColumnFormatter'), Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$RowFormatter'), Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image'), Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$State'), Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$State$1'), Lcom_google_gwt_user_client_ui_InlineHTML_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'InlineHTML'), Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListBox'), Lcom_google_gwt_user_client_ui_MenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuItem'), Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBox'), Lcom_vaadin_terminal_gwt_client_ui_VOptionGroupBase_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VOptionGroupBase'), Lcom_vaadin_terminal_gwt_client_DateTimeService_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'DateTimeService'), Lcom_vaadin_terminal_gwt_client_LocaleNotLoadedException_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'LocaleNotLoadedException'), Lcom_vaadin_terminal_gwt_client_RenderInformation_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'RenderInformation'), Lcom_vaadin_terminal_gwt_client_Util$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'Util$3'), Lcom_vaadin_terminal_gwt_client_VCaptionWrapper_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'VCaptionWrapper'), Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSplitPanel'), Lcom_vaadin_terminal_gwt_client_ui_VMediaBase_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VMediaBase'), Lcom_vaadin_terminal_gwt_client_ui_VDateField_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDateField'), Lcom_vaadin_terminal_gwt_client_ui_VTabsheetBase_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTabsheetBase'), Lcom_vaadin_terminal_gwt_client_ui_layout_CellBasedLayout_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.layout.', 'CellBasedLayout'), Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'Action'), Lcom_vaadin_terminal_gwt_client_ui_AlignmentInfo_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'AlignmentInfo'), Lcom_vaadin_terminal_gwt_client_ui_FocusableFlexTable_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'FocusableFlexTable'), Lcom_vaadin_terminal_gwt_client_ui_TooltipListBox_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'TooltipListBox'), Lcom_vaadin_terminal_gwt_client_ui_TreeAction_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'TreeAction'), Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VCalendarPanel'), Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$Day_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VCalendarPanel$Day'), Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VCalendarPanel$1'), Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VCalendarPanel$2'), Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$2$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VCalendarPanel$2$1'), Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$VEventButton_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VCalendarPanel$VEventButton'), Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$VTime_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VCalendarPanel$VTime'), Lcom_vaadin_terminal_gwt_client_ui_VCalendarPanel$VTime$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VCalendarPanel$VTime$1'), Lcom_vaadin_terminal_gwt_client_ui_VCheckBox$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VCheckBox$1'), Lcom_vaadin_terminal_gwt_client_ui_VContextMenu$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VContextMenu$2'), Lcom_vaadin_terminal_gwt_client_ui_VContextMenu$2$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VContextMenu$2$1'), Lcom_vaadin_terminal_gwt_client_ui_dd_VAbstractDropHandler_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VAbstractDropHandler'), Lcom_vaadin_terminal_gwt_client_ui_VNativeButton$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VNativeButton$1'), Lcom_vaadin_terminal_gwt_client_ui_VOrderedLayout$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VOrderedLayout$1'), _3Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit = createForArray('[Lcom.vaadin.terminal.gwt.client.ui.', 'Action;'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$1'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$10_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$10'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$11_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$11'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$12_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$12'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$13_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$13'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$14_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$14'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$2'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$3'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$4_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$4'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$4$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$4$1'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$5_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$5'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$6_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$6'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$7_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$7'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$8_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$8'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$9_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$9'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$ContextMenuDetails_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$ContextMenuDetails'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$FooterCell_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$FooterCell'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$FooterCell$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$FooterCell$1'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$HeaderCell_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$HeaderCell'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$HeaderCell$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$HeaderCell$1'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$RowHeadersFooterCell_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$RowHeadersFooterCell'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$RowHeadersHeaderCell_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$RowHeadersHeaderCell'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$RowRequestHandler_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$RowRequestHandler'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$SelectionRange_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$SelectionRange'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableDDDetails_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$TableDDDetails'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableFooter_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$TableFooter'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableHead_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$TableHead'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableHead$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$TableHead$1'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableHead$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$TableHead$2'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$TableHead$VisibleColumnAction_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$TableHead$VisibleColumnAction'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableBody'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableBody$VScrollTableRow'), _3Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow_2_classLit = createForArray('[Lcom.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableBody$VScrollTableRow;'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableGeneratedRow_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableBody$VScrollTableGeneratedRow'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableGeneratedRow$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableBody$VScrollTableGeneratedRow$1'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableBody$VScrollTableRow$1'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableBody$VScrollTableRow$2'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableBody$VScrollTableRow$3'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableBody$VScrollTableRow$4_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableBody$VScrollTableRow$4'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableDropHandler_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableDropHandler'), Lcom_vaadin_terminal_gwt_client_ui_VScrollTable$VScrollTableDropHandler$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VScrollTable$VScrollTableDropHandler$1'), Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSplitPanel$1'), Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSplitPanel$2'), Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSplitPanel$3'), Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$4_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSplitPanel$4'), Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$5_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSplitPanel$5'), Lcom_vaadin_terminal_gwt_client_ui_VSplitPanel$6_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VSplitPanel$6'), Lcom_vaadin_terminal_gwt_client_ui_dd_VAbstractDropHandler$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VAbstractDropHandler$1'), Lcom_vaadin_terminal_gwt_client_ui_dd_VAbstractDropHandler$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VAbstractDropHandler$2'), Lcom_vaadin_terminal_gwt_client_ui_dd_VAbstractDropHandler$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VAbstractDropHandler$3'), Lcom_vaadin_terminal_gwt_client_ui_dd_VAcceptCriterion_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VAcceptCriterion'), Lcom_vaadin_terminal_gwt_client_ui_dd_VAcceptAll_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VAcceptAll'), Lcom_vaadin_terminal_gwt_client_ui_dd_VAcceptCriterion$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VAcceptCriterion$1'), Lcom_vaadin_terminal_gwt_client_ui_dd_VAnd_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VAnd'), Lcom_vaadin_terminal_gwt_client_ui_dd_VContainsDataFlavor_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VContainsDataFlavor'), Lcom_vaadin_terminal_gwt_client_ui_dd_VDragAndDropManager$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VDragAndDropManager$2'), Lcom_vaadin_terminal_gwt_client_ui_dd_VDragAndDropManager$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VDragAndDropManager$3'), Lcom_vaadin_terminal_gwt_client_ui_dd_VDragEvent_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VDragEvent'), Lcom_vaadin_terminal_gwt_client_ui_dd_VDragSourceIs_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VDragSourceIs'), Lcom_vaadin_terminal_gwt_client_ui_dd_VIsOverId_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VIsOverId'), Lcom_vaadin_terminal_gwt_client_ui_dd_VItemIdIs_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VItemIdIs'), Lcom_vaadin_terminal_gwt_client_ui_dd_VLazyInitItemIdentifiers_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VLazyInitItemIdentifiers'), Lcom_vaadin_terminal_gwt_client_ui_dd_VLazyInitItemIdentifiers$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VLazyInitItemIdentifiers$1'), Lcom_vaadin_terminal_gwt_client_ui_dd_VNot_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VNot'), Lcom_vaadin_terminal_gwt_client_ui_dd_VNot$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VNot$1'), Lcom_vaadin_terminal_gwt_client_ui_dd_VOr_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VOr'), Lcom_vaadin_terminal_gwt_client_ui_dd_VServerAccept_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VServerAccept'), Lcom_vaadin_terminal_gwt_client_ui_dd_VServerAccept$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VServerAccept$1'), Lcom_vaadin_terminal_gwt_client_ui_dd_VSourceIsTarget_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VSourceIsTarget'), Lcom_vaadin_terminal_gwt_client_ui_dd_VTargetDetailIs_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VTargetDetailIs'), Lcom_vaadin_terminal_gwt_client_ui_dd_VTargetInSubtree_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VTargetInSubtree'), Lcom_vaadin_terminal_gwt_client_ui_dd_VTransferable_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.dd.', 'VTransferable'), Lcom_vaadin_terminal_gwt_client_ui_dd_VerticalDropLocation_2_classLit = createForEnum('com.vaadin.terminal.gwt.client.ui.dd.', 'VerticalDropLocation', values_12), _3Lcom_vaadin_terminal_gwt_client_ui_dd_VerticalDropLocation_2_classLit = createForArray('[Lcom.vaadin.terminal.gwt.client.ui.dd.', 'VerticalDropLocation;'), Lcom_vaadin_terminal_gwt_client_ui_layout_CellBasedLayout$Spacing_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.layout.', 'CellBasedLayout$Spacing'), Lcom_vaadin_terminal_gwt_client_ui_layout_ChildComponentContainer_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.layout.', 'ChildComponentContainer'), Lcom_vaadin_terminal_gwt_client_ui_layout_ChildComponentContainer$ChildComponentContainerIterator_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.layout.', 'ChildComponentContainer$ChildComponentContainerIterator'), Lcom_vaadin_terminal_gwt_client_ui_layout_Margins_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.layout.', 'Margins'), Ljava_lang_Float_2_classLit = createForClass('java.lang.', 'Float'), Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util.', 'AbstractMap$2'), Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util.', 'AbstractMap$2$1');
$entry(browserLoaderLeftoversFragmentHasLoaded)();
