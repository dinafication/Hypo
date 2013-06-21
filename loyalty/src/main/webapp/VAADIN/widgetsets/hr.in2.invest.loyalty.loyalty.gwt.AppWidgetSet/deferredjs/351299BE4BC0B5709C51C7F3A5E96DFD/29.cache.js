function $runCallbacks_20(){
  var $e0, e, handler;
  while (callbacksHead_20) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_20 = callbacksHead_20.next;
    !callbacksHead_20 && (callbacksTail_20 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper_2_classLit, new WidgetMapImpl$43$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper_2_classLit, new WidgetMapImpl$43$1_0);
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

function AsyncLoader29_0(){
}

function onLoad_20(){
  instance_21 = new AsyncLoader29_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 29);
  !!$stats && $stats($createStatsEvent('runCallbacks29', 'begin', -1, -1));
  instance_21.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks29', 'end', -1, -1));
}

function AsyncLoader29(){
}

_ = AsyncLoader29_0.prototype = AsyncLoader29.prototype = new Object_0;
_.getClass$ = function getClass_218(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader29_2_classLit;
}
;
_.runCallbacks = function runCallbacks_20(){
  $runCallbacks_20();
}
;
_.castableTypeMap$ = {};
function $serialize(this$static){
  return '' + this$static.button_0 + ',' + this$static.clientX_0 + ',' + this$static.clientY_0 + ',' + this$static.altKey_0 + ',' + this$static.ctrlKey_0 + ',' + this$static.metaKey_0 + ',' + this$static.shiftKey_0 + ',' + this$static.type_0 + ',' + this$static.relativeX + ',' + this$static.relativeY;
}

function WidgetMapImpl$43$1_0(){
}

function WidgetMapImpl$43$1(){
}

_ = WidgetMapImpl$43$1_0.prototype = WidgetMapImpl$43$1.prototype = new Object_0;
_.get = function get_37(){
  return new VDragAndDropWrapper_0;
}
;
_.getClass$ = function getClass_535(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$43$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $deEmphasis(this$static, doLayout){
  var size;
  size = null;
  doLayout && (size = new RenderInformation$Size_0(parseInt(this$static.element_0['offsetWidth']) || 0, parseInt(this$static.element_0['offsetHeight']) || 0));
  if (this$static.emphasizedVDrop) {
    setStyleName(this$static.element_0, 'v-ddwrapper-over', false);
    setStyleName(this$static.element_0, 'v-ddwrapper-over-' + this$static.emphasizedVDrop.name_0.toLowerCase(), false);
    setStyleName(this$static.element_0, 'v-ddwrapper-over-' + this$static.emphasizedHDrop.name_0.toLowerCase(), false);
  }
  doLayout && $handleVaadinRelatedSizeChange(this$static, size);
}

function $emphasis(this$static){
  var size;
  size = new RenderInformation$Size_0(parseInt(this$static.element_0['offsetWidth']) || 0, parseInt(this$static.element_0['offsetHeight']) || 0);
  $deEmphasis(this$static, false);
  setStyleName(this$static.element_0, 'v-ddwrapper-over', true);
  setStyleName(this$static.element_0, 'v-ddwrapper-over-' + this$static.verticalDropLocation.name_0.toLowerCase(), true);
  setStyleName(this$static.element_0, 'v-ddwrapper-over-' + this$static.horizontalDropLocation.name_0.toLowerCase(), true);
  this$static.emphasizedVDrop = this$static.verticalDropLocation;
  this$static.emphasizedHDrop = this$static.horizontalDropLocation;
  $handleVaadinRelatedSizeChange(this$static, size);
}

function $handleVaadinRelatedSizeChange(this$static, originalSize){
  (this$static.height_0 == null || $equals_2(this$static.height_0, '') || this$static.width_0 == null || $equals_2(this$static.width_0, '')) && ($equals(originalSize, new RenderInformation$Size_0(parseInt(this$static.element_0['offsetWidth']) || 0, parseInt(this$static.element_0['offsetHeight']) || 0)) || notifyParentOfSizeChange(this$static, false));
  $handleComponentRelativeSize_0(this$static.client, this$static);
  notifyParentOfSizeChange(this$static, false);
}

function $hookHtml5Events(this$static, el){
  var me = this$static;
  if (el.addEventListener) {
    el.addEventListener('dragenter', function(ev){
      return me.html5DragEnter(ev);
    }
    , false);
    el.addEventListener('dragleave', function(ev){
      return me.html5DragLeave(ev);
    }
    , false);
    el.addEventListener('dragover', function(ev){
      return me.html5DragOver(ev);
    }
    , false);
    el.addEventListener('drop', function(ev){
      return me.html5DragDrop(ev);
    }
    , false);
  }
   else {
    el.attachEvent('ondragenter', function(ev){
      return me.html5DragEnter(ev);
    }
    );
    el.attachEvent('ondragleave', function(ev){
      return me.html5DragLeave(ev);
    }
    );
    el.attachEvent('ondragover', function(ev){
      return me.html5DragOver(ev);
    }
    );
    el.attachEvent('ondrop', function(ev){
      return me.html5DragDrop(ev);
    }
    );
  }
}

function $isAcceptedType(this$static, type){
  var t, t$array, t$index, t$max;
  for (t$array = this$static.acceptedTypes , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    if ($equals_2(t, type)) {
      return true;
    }
  }
  return false;
}

function $startDrag(this$static, event_0){
  var dragEvent, paintable, transferable, w;
  if (this$static.dragStarMode > 0) {
    transferable = new VTransferable_0;
    transferable.component = this$static;
    w = findWidget(event_0.target, null);
    while (!!w && !(w != null && w.castableTypeMap$ && !!w.castableTypeMap$[26])) {
      w = w.getParent();
    }
    paintable = dynamicCast(w, 26);
    transferable.variables.put('component', paintable);
    dragEvent = $startDrag_0((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), transferable, event_0, true);
    transferable.variables.put('mouseDown', $serialize(new MouseEventDetails_0(event_0)));
    this$static.dragStarMode == 2?$createDragImage(dragEvent, this$static.element_0):$createDragImage(dragEvent, dynamicCast(paintable, 70).element_0);
    return true;
  }
  return false;
}

function $updateDropDetails(this$static, drag){
  var oldHL, oldVL;
  oldVL = this$static.verticalDropLocation;
  this$static.verticalDropLocation = getVerticalDropLocation(this$static.element_0, drag.currentGwtEvent);
  drag.dropDetails.put('verticalLocation', this$static.verticalDropLocation.name_0);
  oldHL = this$static.horizontalDropLocation;
  this$static.horizontalDropLocation = getHorizontalDropLocation(this$static.element_0, drag.currentGwtEvent);
  drag.dropDetails.put('horizontalLocation', this$static.horizontalDropLocation.name_0);
  return oldHL != this$static.horizontalDropLocation || oldVL != this$static.verticalDropLocation;
}

function VDragAndDropWrapper_0(){
  VCustomComponent_0.call(this);
  this.readyStateChangeHandler = new VDragAndDropWrapper$1_0(this);
  this.acceptedTypes = initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, ['Text', 'Url', 'text/html', 'text/plain', 'text/rtf']);
  this.fileIds = new ArrayList_0;
  this.files_0 = new ArrayList_0;
  this.eventsToSink == -1?sinkEvents(this.element_0, 241 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 241);
  $hookHtml5Events(this, this.element_0);
  this.element_0['className'] = 'v-ddwrapper';
  $addDomHandler(this, new VDragAndDropWrapper$2_0(this), ($clinit_23() , $clinit_23() , TYPE_9));
  $addDomHandler(this, new VDragAndDropWrapper$3_0(this), ($clinit_31() , $clinit_31() , TYPE_17));
  this.eventsToSink == -1?sinkEvents(this.element_0, 15728640 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 15728640);
}

function VDragAndDropWrapper(){
}

_ = VDragAndDropWrapper_0.prototype = VDragAndDropWrapper.prototype = new VCustomComponent;
_.getClass$ = function getClass_614(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper_2_classLit;
}
;
_.getDropHandler = function getDropHandler(){
  return this.dropHandler;
}
;
_.html5DragDrop = function html5DragDrop(event_0){
  var $e0, data, e, file, fileCount, fileId, i, transferable, type, types;
  if (!this.dropHandler || !this.currentlyValid) {
    return true;
  }
  try {
    transferable = this.vaadinDragEvent.transferable;
    types = event_0.dataTransfer.types?event_0.dataTransfer.types:['Text', 'Url', 'Html'];
    for (i = 0; i < types.length; ++i) {
      type = types[i];
      if ($isAcceptedType(this, type)) {
        data = event_0.dataTransfer.getData(type);
        data != null && transferable.variables.put(type, data);
      }
    }
    fileCount = event_0.dataTransfer.files?event_0.dataTransfer.files.length:0;
    if (fileCount > 0) {
      transferable.variables.put('filecount', valueOf(fileCount));
      for (i = 0; i < fileCount; ++i) {
        fileId = this.filecounter++;
        file = event_0.dataTransfer.files[i];
        transferable.variables.put('fi' + i, '' + fileId);
        transferable.variables.put('fn' + i, file.name);
        transferable.variables.put('ft' + i, file.type);
        transferable.variables.put('fs' + i, valueOf(file.size?file.size:0));
        $add_12(this.fileIds, valueOf(fileId));
        $add_12(this.files_0, file);
      }
    }
    $endDrag((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), true);
    this.vaadinDragEvent = null;
    event_0.preventDefault();
    event_0.stopPropagation();
    return false;
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 112)) {
      e = $e0;
      impl_2.error_0(e);
      return true;
    }
     else 
      throw $e0;
  }
}
;
_.html5DragEnter = function html5DragEnter(event_0){
  var $e0, e, transferable;
  if (!this.dropHandler) {
    return true;
  }
  try {
    if (this.dragleavetimer) {
      $cancel_0(this.dragleavetimer);
      this.dragleavetimer = null;
    }
    if ((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41).currentDropHandler != this.dropHandler) {
      transferable = new VTransferable_0;
      transferable.component = this;
      this.vaadinDragEvent = $startDrag_0((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), transferable, event_0, false);
      (!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41).currentDropHandler = this.dropHandler;
    }
    event_0.preventDefault();
    event_0.stopPropagation();
    return false;
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 112)) {
      e = $e0;
      impl_2.error_0(e);
      return true;
    }
     else 
      throw $e0;
  }
}
;
_.html5DragLeave = function html5DragLeave(event_0){
  var $e0, e;
  if (!this.dropHandler) {
    return true;
  }
  try {
    this.dragleavetimer = new VDragAndDropWrapper$5_0(this);
    $schedule(this.dragleavetimer, 350);
    event_0.preventDefault();
    event_0.stopPropagation();
    return false;
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 112)) {
      e = $e0;
      impl_2.error_0(e);
      return true;
    }
     else 
      throw $e0;
  }
}
;
_.html5DragOver = function html5DragOver(event_0){
  var s;
  if (!this.dropHandler) {
    return true;
  }
  if (this.dragleavetimer) {
    $cancel_0(this.dragleavetimer);
    this.dragleavetimer = null;
  }
  this.vaadinDragEvent.currentGwtEvent = event_0;
  $dragOver(this.dropHandler, this.vaadinDragEvent);
  if (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isWebKit) {
    s = event_0.dataTransfer.effectAllowed;
    $equals_2('all', s) || s.indexOf('opy') != -1?$setDragEffect(event_0, 'copy'):$setDragEffect(event_0, s);
  }
  event_0.preventDefault();
  event_0.stopPropagation();
  return false;
}
;
_.onBrowserEvent = function onBrowserEvent_20(event_0){
  $onBrowserEvent(this, event_0);
  !!this.client && ($handleTooltipEvent(this.client.tooltip, event_0, this, null) , undefined);
}
;
_.updateFromUIDL = function updateFromUIDL_26(uidl, client){
  var acceptCrit, fileId, fileId$iterator, id, indexOf, receiverUrl, variableNames, outerIter, entry;
  this.client = client;
  $updateFromUIDL_11(this, uidl, client);
  if (!('cached' in uidl[1]) && !('hidden' in uidl[1])) {
    acceptCrit = $getChildByTagName(uidl, '-ac');
    if (!acceptCrit) {
      this.dropHandler = null;
    }
     else {
      !this.dropHandler && (this.dropHandler = new VDragAndDropWrapper$CustomDropHandler_0(this));
      $updateAcceptRules(this.dropHandler, acceptCrit);
    }
    variableNames = $getVariableNames(uidl);
    for (fileId$iterator = (outerIter = $keySet(variableNames.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); fileId$iterator.val$outerIter.hasNext();) {
      fileId = dynamicCast((entry = dynamicCast(fileId$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 1);
      if (fileId.indexOf('rec-') == 0) {
        receiverUrl = uidl[1]['v'][fileId];
        fileId = fileId.substr(4, fileId.length - 4);
        !this.fileIdToReceiver && (this.fileIdToReceiver = new HashMap_0);
        if ($equals_2('', receiverUrl)) {
          id = valueOf(__parseAndValidateInt(fileId));
          indexOf = $indexOf_1(this.fileIds, id, 0);
          if (indexOf != -1) {
            $remove_16(this.files_0, indexOf);
            $remove_16(this.fileIds, indexOf);
          }
        }
         else {
          this.fileIdToReceiver.put(fileId, receiverUrl);
        }
      }
    }
    $scheduleDeferred_0(($clinit_1() , INSTANCE), new VDragAndDropWrapper$4_0(this));
    this.dragStarMode = uidl[1]['dragStartMode'];
  }
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1, 76:1, 180:1};
_.client = null;
_.currentlyValid = false;
_.dragStarMode = 0;
_.dragleavetimer = null;
_.dropHandler = null;
_.emphasizedHDrop = null;
_.emphasizedVDrop = null;
_.fileIdToReceiver = null;
_.filecounter = 0;
_.horizontalDropLocation = null;
_.uploading = false;
_.vaadinDragEvent = null;
_.verticalDropLocation = null;
function VDragAndDropWrapper$1_0(this$0){
  this.this$0 = this$0;
}

function VDragAndDropWrapper$1(){
}

_ = VDragAndDropWrapper$1_0.prototype = VDragAndDropWrapper$1.prototype = new Object_0;
_.getClass$ = function getClass_615(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$1_2_classLit;
}
;
_.onReadyStateChange = function onReadyStateChange_1(xhr){
  if (xhr.readyState == 4) {
    $sendPendingVariableChanges(this.this$0.client);
    this.this$0.uploading = false;
    $scheduleDeferred_0(($clinit_1() , INSTANCE), new VDragAndDropWrapper$4_0(this.this$0));
    $clearOnReadyStateChange(xhr);
  }
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VDragAndDropWrapper$2_0(this$0){
  this.this$0 = this$0;
}

function VDragAndDropWrapper$2(){
}

_ = VDragAndDropWrapper$2_0.prototype = VDragAndDropWrapper$2.prototype = new Object_0;
_.getClass$ = function getClass_616(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$2_2_classLit;
}
;
_.onMouseDown = function onMouseDown_2(event_0){
  $startDrag(this.this$0, event_0.nativeEvent) && (event_0.nativeEvent.preventDefault() , undefined);
}
;
_.castableTypeMap$ = {12:1, 46:1};
_.this$0 = null;
function VDragAndDropWrapper$3_0(this$0){
  this.this$0 = this$0;
}

function VDragAndDropWrapper$3(){
}

_ = VDragAndDropWrapper$3_0.prototype = VDragAndDropWrapper$3.prototype = new Object_0;
_.getClass$ = function getClass_617(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$3_2_classLit;
}
;
_.onTouchStart = function onTouchStart_3(event_0){
  $startDrag(this.this$0, event_0.nativeEvent) && (event_0.nativeEvent.stopPropagation() , undefined);
}
;
_.castableTypeMap$ = {12:1, 53:1};
_.this$0 = null;
function VDragAndDropWrapper$4_0(this$0){
  this.this$0 = this$0;
}

function VDragAndDropWrapper$4(){
}

_ = VDragAndDropWrapper$4_0.prototype = VDragAndDropWrapper$4.prototype = new Object_0;
_.execute_0 = function execute_32(){
  var extendedXHR, file, fileId, receiverUrl;
  if (!this.this$0.uploading) {
    if (this.this$0.fileIds.size_0 > 0) {
      this.this$0.uploading = true;
      fileId = dynamicCast($remove_16(this.this$0.fileIds, 0), 108);
      file = dynamicCastJso($remove_16(this.this$0.files_0, 0));
      receiverUrl = $translateVaadinUri(this.this$0.client, dynamicCast(this.this$0.fileIdToReceiver.remove_4('' + fileId.value_0), 1));
      extendedXHR = create_1();
      $setOnReadyStateChange(extendedXHR, this.this$0.readyStateChangeHandler);
      extendedXHR.open('POST', receiverUrl, true);
      extendedXHR.setRequestHeader('Content-Type', 'multipart/form-data');
      extendedXHR.send(file);
    }
  }
}
;
_.getClass$ = function getClass_618(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$4_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VDragAndDropWrapper$5_0(this$0){
  $clinit();
  this.this$0 = this$0;
}

function VDragAndDropWrapper$5(){
}

_ = VDragAndDropWrapper$5_0.prototype = VDragAndDropWrapper$5.prototype = new Timer;
_.getClass$ = function getClass_619(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$5_2_classLit;
}
;
_.run = function run_21(){
  !!this.this$0.vaadinDragEvent && (!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41).currentDropHandler == this.this$0.dropHandler && $endDrag((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), false);
}
;
_.castableTypeMap$ = {65:1};
_.this$0 = null;
function $dragAccepted(this$static){
  this$static.this$0.currentlyValid = true;
  $emphasis(this$static.this$0);
}

function $dragOver(this$static, drag){
  var detailsChanged;
  detailsChanged = $updateDropDetails(this$static.this$0, drag);
  if (detailsChanged) {
    this$static.this$0.currentlyValid = false;
    $validate(this$static, new VDragAndDropWrapper$CustomDropHandler$1_0(this$static, drag), drag);
  }
}

function VDragAndDropWrapper$CustomDropHandler_0(this$0){
  this.this$0 = this$0;
  this.acceptCriteria = new VAcceptAll_0;
}

function VDragAndDropWrapper$CustomDropHandler(){
}

_ = VDragAndDropWrapper$CustomDropHandler_0.prototype = VDragAndDropWrapper$CustomDropHandler.prototype = new VAbstractDropHandler;
_.dragAccepted = function dragAccepted(drag){
  this.this$0.currentlyValid = true;
  $emphasis(this.this$0);
}
;
_.dragEnter = function dragEnter_0(drag){
  $updateDropDetails(this.this$0, drag);
  this.this$0.currentlyValid = false;
  $validate(this, new VAbstractDropHandler$1_0(this, drag), drag);
}
;
_.dragLeave = function dragLeave_0(drag){
  $deEmphasis(this.this$0, true);
  this.this$0.dragleavetimer = null;
}
;
_.dragOver = function dragOver_0(drag){
  $dragOver(this, drag);
}
;
_.drop = function drop_1(drag){
  var absoluteLeft, absoluteTop, dd;
  $deEmphasis(this.this$0, true);
  dd = drag.dropDetails;
  absoluteLeft = $getAbsoluteLeft(this.this$0.element_0) | 0;
  absoluteTop = $getAbsoluteTop(this.this$0.element_0) | 0;
  dd.put('absoluteLeft', valueOf(absoluteLeft));
  dd.put('absoluteTop', valueOf(absoluteTop));
  if (this.this$0.verticalDropLocation) {
    dd.put('verticalLocation', this.this$0.verticalDropLocation.name_0);
    dd.put('horizontalLocation', this.this$0.horizontalDropLocation.name_0);
  }
  return $drop(this, drag);
}
;
_.getApplicationConnection = function getApplicationConnection(){
  return this.this$0.client;
}
;
_.getClass$ = function getClass_621(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$CustomDropHandler_2_classLit;
}
;
_.getPaintable = function getPaintable(){
  return this.this$0;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VDragAndDropWrapper$CustomDropHandler$1_0(this$1, val$drag){
  this.this$1 = this$1;
}

function VDragAndDropWrapper$CustomDropHandler$1(){
}

_ = VDragAndDropWrapper$CustomDropHandler$1_0.prototype = VDragAndDropWrapper$CustomDropHandler$1.prototype = new Object_0;
_.accepted_0 = function accepted_0(event_0){
  $dragAccepted(this.this$1);
}
;
_.getClass$ = function getClass_622(){
  return Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$CustomDropHandler$1_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$1 = null;
function getHorizontalDropLocation(element, event_0){
  var touchOrMouseClientX, absoluteLeft, fromTop, offsetWidth, percentageFromTop;
  touchOrMouseClientX = ($clinit_67() , getTouchOrMouseClientX(event_0));
  return absoluteLeft = $getAbsoluteLeft(element) | 0 , offsetWidth = element.offsetWidth || 0 , fromTop = touchOrMouseClientX - absoluteLeft , percentageFromTop = fromTop / offsetWidth , percentageFromTop < 0.2?($clinit_74() , LEFT_2):percentageFromTop > 0.8?($clinit_74() , RIGHT_2):($clinit_74() , CENTER_1);
}

function $clinit_74(){
  $clinit_74 = nullMethod;
  LEFT_2 = new HorizontalDropLocation_0('LEFT', 0);
  RIGHT_2 = new HorizontalDropLocation_0('RIGHT', 1);
  CENTER_1 = new HorizontalDropLocation_0('CENTER', 2);
  $VALUES_10 = initValues(_3Lcom_vaadin_terminal_gwt_client_ui_dd_HorizontalDropLocation_2_classLit, {30:1, 35:1}, 104, [LEFT_2, RIGHT_2, CENTER_1]);
}

function HorizontalDropLocation_0(enum$name, enum$ordinal){
  this.name_0 = enum$name;
  this.ordinal = enum$ordinal;
}

function values_11(){
  $clinit_74();
  return $VALUES_10;
}

function HorizontalDropLocation(){
}

_ = HorizontalDropLocation_0.prototype = HorizontalDropLocation.prototype = new Enum;
_.getClass$ = function getClass_806(){
  return Lcom_vaadin_terminal_gwt_client_ui_dd_HorizontalDropLocation_2_classLit;
}
;
_.castableTypeMap$ = {30:1, 32:1, 104:1, 107:1};
var $VALUES_10, CENTER_1, LEFT_2, RIGHT_2;
function $setDragEffect(this$static, effect){
  try {
    this$static.dataTransfer.dropEffect = effect;
  }
   catch (e) {
  }
}

var Lcom_google_gwt_lang_asyncloaders_AsyncLoader29_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader29'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$43$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$43$1'), Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDragAndDropWrapper$1'), Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDragAndDropWrapper$2'), Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDragAndDropWrapper$3'), Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$4_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDragAndDropWrapper$4'), Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$5_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDragAndDropWrapper$5'), Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$CustomDropHandler_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDragAndDropWrapper$CustomDropHandler'), Lcom_vaadin_terminal_gwt_client_ui_VDragAndDropWrapper$CustomDropHandler$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VDragAndDropWrapper$CustomDropHandler$1'), Lcom_vaadin_terminal_gwt_client_ui_dd_HorizontalDropLocation_2_classLit = createForEnum('com.vaadin.terminal.gwt.client.ui.dd.', 'HorizontalDropLocation', values_11), _3Lcom_vaadin_terminal_gwt_client_ui_dd_HorizontalDropLocation_2_classLit = createForArray('[Lcom.vaadin.terminal.gwt.client.ui.dd.', 'HorizontalDropLocation;');
$entry(onLoad_20)();
