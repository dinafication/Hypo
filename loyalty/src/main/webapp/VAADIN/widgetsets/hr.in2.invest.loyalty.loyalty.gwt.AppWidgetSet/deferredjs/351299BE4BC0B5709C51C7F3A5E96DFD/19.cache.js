function initDims(arrayClasses, castableTypeMapExprs, queryIdExprs, dimExprs, index, count, seedType){
  var i, isLastDim, length_0, result;
  length_0 = dimExprs[index];
  isLastDim = index == count - 1;
  result = createFromSeed(isLastDim?seedType:0, length_0);
  $clinit_36();
  wrapArray(result, expandoNames_0, expandoValues_0);
  result.arrayClass$ = arrayClasses[index];
  result.castableTypeMap$ = castableTypeMapExprs[index];
  result.queryId$ = queryIdExprs[index];
  if (!isLastDim) {
    ++index;
    for (i = 0; i < length_0; ++i) {
      result[i] = initDims(arrayClasses, castableTypeMapExprs, queryIdExprs, dimExprs, index, count, seedType);
    }
  }
  return result;
}

function $runCallbacks_9(){
  var $e0, e, handler;
  while (callbacksHead_9) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_9 = callbacksHead_9.next;
    !callbacksHead_9 && (callbacksTail_9 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VGridLayout_2_classLit, new WidgetMapImpl$28$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VGridLayout_2_classLit, new WidgetMapImpl$28$1_0);
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

function AsyncLoader19_0(){
}

function onLoad_9(){
  instance_10 = new AsyncLoader19_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 19);
  !!$stats && $stats($createStatsEvent('runCallbacks19', 'begin', -1, -1));
  instance_10.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks19', 'end', -1, -1));
}

function AsyncLoader19(){
}

_ = AsyncLoader19_0.prototype = AsyncLoader19.prototype = new Object_0;
_.getClass$ = function getClass_185(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader19_2_classLit;
}
;
_.runCallbacks = function runCallbacks_9(){
  $runCallbacks_9();
}
;
_.castableTypeMap$ = {};
function $add_2(this$static, w){
  var beforeIndex;
  $removeFromParent_0(w);
  beforeIndex = this$static.children_0.size_0;
  this$static.setWidgetPositionImpl(w, 0, 0);
  $insert(this$static, w, this$static.element_0, beforeIndex, true);
}

function $checkWidgetParent(this$static, w){
  if (w.parent_0 != this$static) {
    throw new IllegalArgumentException_1('Widget must be a child of this panel.');
  }
}

function $setWidgetPosition(this$static, w, left, top_0){
  $checkWidgetParent(this$static, w);
  this$static.setWidgetPositionImpl(w, left, top_0);
}

function $setWidgetPositionImpl(w, left, top_0){
  var h_0;
  h_0 = w.element_0;
  if (left == -1 && top_0 == -1) {
    changeToStaticPositioning(h_0);
  }
   else {
    h_0.style['position'] = 'absolute';
    h_0.style['left'] = left + 'px';
    h_0.style['top'] = top_0 + 'px';
  }
}

function AbsolutePanel_0(){
  AbsolutePanel_1.call(this, $doc.createElement('div'));
  this.element_0.style['position'] = 'relative';
  this.element_0.style['overflow'] = 'hidden';
}

_ = AbsolutePanel_0.prototype = AbsolutePanel.prototype;
_.setWidgetPositionImpl = function setWidgetPositionImpl(w, left, top_0){
  $setWidgetPositionImpl(w, left, top_0);
}
;
_ = RootPanel$DefaultRootPanel.prototype;
_.setWidgetPositionImpl = function setWidgetPositionImpl_0(w, left, top_0){
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  $setWidgetPositionImpl(w, left, top_0);
}
;
function WidgetMapImpl$28$1_0(){
}

function WidgetMapImpl$28$1(){
}

_ = WidgetMapImpl$28$1_0.prototype = WidgetMapImpl$28$1.prototype = new Object_0;
_.get = function get_20(){
  return new VGridLayout_0;
}
;
_.getClass$ = function getClass_518(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$28$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $detectRowHeights(this$static){
  var cell, i, j_0;
  for (i = 0; i < this$static.cells_0.length; ++i) {
    for (j_0 = 0; j_0 < this$static.cells_0[i].length; ++j_0) {
      cell = this$static.cells_0[i][j_0];
      if (cell) {
        if (!!cell.cc && cell.widthCanAffectHeight) {
          cell.cc.element_0.style['width'] = $getAvailableWidth(cell) + 'px';
          $updateWidgetSize(cell.cc);
        }
        cell.rowspan == 1?!cell.relHeight && this$static.rowHeights[j_0] < (cell.cc?cell.cc.widgetSize.getHeight() + $getCaptionHeightAboveComponent(cell.cc):0) && (this$static.rowHeights[j_0] = cell.cc?cell.cc.widgetSize.getHeight() + $getCaptionHeightAboveComponent(cell.cc):0):$storeRowSpannedCell(this$static, cell);
      }
    }
  }
  $distributeRowSpanHeights(this$static);
  this$static.minRowHeights = cloneArray(this$static.rowHeights);
}

function $distributeColSpanWidths(this$static){
  var cell, cell$iterator, list, list$iterator, width;
  for (list$iterator = $listIterator(this$static.colSpans, 0); list$iterator.currentNode != list$iterator.this$0.header;) {
    list = dynamicCast($next_7(list$iterator), 153);
    for (cell$iterator = $listIterator(list.cells_0, 0); cell$iterator.currentNode != cell$iterator.this$0.header;) {
      cell = dynamicCast($next_7(cell$iterator), 103);
      width = cell.relWidth?0:$getWidth_0(cell);
      distributeSpanSize(this$static.columnWidths, cell.col, cell.colspan, this$static.spacingPixelsHorizontal, width, this$static.colExpandRatioArray);
    }
  }
}

function $distributeRowSpanHeights(this$static){
  var cell, cell$iterator, height, list, list$iterator;
  for (list$iterator = $listIterator(this$static.rowSpans, 0); list$iterator.currentNode != list$iterator.this$0.header;) {
    list = dynamicCast($next_7(list$iterator), 153);
    for (cell$iterator = $listIterator(list.cells_0, 0); cell$iterator.currentNode != cell$iterator.this$0.header;) {
      cell = dynamicCast($next_7(cell$iterator), 103);
      height = cell.relHeight?0:cell.cc?cell.cc.widgetSize.getHeight() + $getCaptionHeightAboveComponent(cell.cc):0;
      distributeSpanSize(this$static.rowHeights, cell.row, cell.rowspan, this$static.spacingPixelsVertical, height, this$static.rowExpandRatioArray);
    }
  }
}

function $expandColumns(this$static){
  var availableSpace, c, distributed, ew, excessSpace, i, usedSpace;
  if (!$equals_2('', this$static.width_0)) {
    usedSpace = this$static.minColumnWidths[0];
    for (i = 1; i < this$static.minColumnWidths.length; ++i) {
      usedSpace += this$static.spacingPixelsHorizontal + this$static.minColumnWidths[i];
    }
    this$static.canvas.element_0.style['width'] = '';
    availableSpace = parseInt(this$static.canvas.element_0['offsetWidth']) || 0;
    excessSpace = availableSpace - usedSpace;
    distributed = 0;
    if (excessSpace > 0) {
      for (i = 0; i < this$static.columnWidths.length; ++i) {
        ew = ~~(excessSpace * this$static.colExpandRatioArray[i] / 1000);
        this$static.columnWidths[i] = this$static.minColumnWidths[i] + ew;
        distributed += ew;
      }
      excessSpace -= distributed;
      c = 0;
      while (excessSpace > 0) {
        ++this$static.columnWidths[c % this$static.columnWidths.length];
        --excessSpace;
        ++c;
      }
    }
  }
}

function $expandRows(this$static){
  var availableSpace, c, distributed, ew, excessSpace, i, usedSpace;
  if (!$equals_2('', this$static.height_0)) {
    usedSpace = this$static.minRowHeights[0];
    for (i = 1; i < this$static.minRowHeights.length; ++i) {
      usedSpace += this$static.spacingPixelsVertical + this$static.minRowHeights[i];
    }
    availableSpace = (parseInt(this$static.element_0['offsetHeight']) || 0) - this$static.marginTopAndBottom;
    excessSpace = availableSpace - usedSpace;
    distributed = 0;
    if (excessSpace > 0) {
      for (i = 0; i < this$static.rowHeights.length; ++i) {
        ew = ~~(excessSpace * this$static.rowExpandRatioArray[i] / 1000);
        this$static.rowHeights[i] = this$static.minRowHeights[i] + ew;
        distributed += ew;
      }
      excessSpace -= distributed;
      c = 0;
      while (excessSpace > 0) {
        ++this$static.rowHeights[c % this$static.rowHeights.length];
        --excessSpace;
        ++c;
      }
    }
  }
}

function $getCell(this$static, c){
  var cell, col, row;
  row = c[1]['y'];
  col = c[1]['x'];
  cell = this$static.cells_0[col][row];
  if (!cell) {
    cell = new VGridLayout$Cell_0(this$static, c);
    this$static.cells_0[col][row] = cell;
  }
   else {
    $setUidl(cell, c);
  }
  return cell;
}

function $getComponent_2(this$static, element){
  return getPaintableForElement(this$static.client, this$static, element);
}

function $layoutCells(this$static){
  var canvasHeight, cell, i, j_0, x, y;
  x = 0;
  y = 0;
  for (i = 0; i < this$static.cells_0.length; ++i) {
    y = 0;
    for (j_0 = 0; j_0 < this$static.cells_0[i].length; ++j_0) {
      cell = this$static.cells_0[i][j_0];
      !!cell && $layout(cell, x, y);
      y += this$static.rowHeights[j_0] + this$static.spacingPixelsVertical;
    }
    x += this$static.columnWidths[i] + this$static.spacingPixelsHorizontal;
  }
  $equals_2('', this$static.width_0)?(this$static.canvas.element_0.style['width'] = x - this$static.spacingPixelsHorizontal + 'px' , undefined):(this$static.canvas.element_0.style['width'] = '' , undefined);
  if ($equals_2('', this$static.height_0)) {
    canvasHeight = y - this$static.spacingPixelsVertical;
  }
   else {
    canvasHeight = (parseInt(this$static.element_0['offsetHeight']) || 0) - this$static.marginTopAndBottom;
    canvasHeight < 0 && (canvasHeight = 0);
  }
  this$static.canvas.element_0.style['height'] = canvasHeight + 'px';
}

function $renderRemainingComponents(pendingCells){
  var cell, cell$iterator;
  for (cell$iterator = $listIterator(pendingCells, 0); cell$iterator.currentNode != cell$iterator.this$0.header;) {
    cell = dynamicCast($next_7(cell$iterator), 103);
    $render(cell);
  }
}

function $renderRemainingComponentsWithNoRelativeHeight(pendingCells){
  var cell, iterator;
  for (iterator = $listIterator(pendingCells, 0); iterator.currentNode != iterator.this$0.header;) {
    cell = dynamicCast($next_7(iterator), 103);
    if (!cell.relHeight) {
      $render(cell);
      $remove_19(iterator);
    }
  }
}

function $storeColSpannedCell(this$static, cell){
  var l_0, list, list$iterator, newL;
  l_0 = null;
  for (list$iterator = $listIterator(this$static.colSpans, 0); list$iterator.currentNode != list$iterator.this$0.header;) {
    list = dynamicCast($next_7(list$iterator), 153);
    if (list.span < cell.colspan) {
      continue;
    }
     else {
      l_0 = list;
      break;
    }
  }
  if (!l_0) {
    l_0 = new VGridLayout$SpanList_0(cell.colspan);
    $addLast(this$static.colSpans, l_0);
  }
   else if (l_0.span != cell.colspan) {
    newL = new VGridLayout$SpanList_0(cell.colspan);
    $add_11(this$static.colSpans, $indexOf_0(this$static.colSpans, l_0), newL);
    l_0 = newL;
  }
  $add_15(l_0.cells_0, cell);
}

function $storeRowSpannedCell(this$static, cell){
  var l_0, list, list$iterator, newL;
  l_0 = null;
  for (list$iterator = $listIterator(this$static.rowSpans, 0); list$iterator.currentNode != list$iterator.this$0.header;) {
    list = dynamicCast($next_7(list$iterator), 153);
    if (list.span < cell.rowspan) {
      continue;
    }
     else {
      l_0 = list;
      break;
    }
  }
  if (!l_0) {
    l_0 = new VGridLayout$SpanList_0(cell.rowspan);
    $addLast(this$static.rowSpans, l_0);
  }
   else if (l_0.span != cell.rowspan) {
    newL = new VGridLayout$SpanList_0(cell.rowspan);
    $add_11(this$static.rowSpans, $indexOf_0(this$static.rowSpans, l_0), newL);
    l_0 = newL;
  }
  $add_15(l_0.cells_0, cell);
}

function VGridLayout_0(){
  this.element_0 = $doc.createElement('div');
  this.margin = $doc.createElement('div');
  this.canvas = new AbsolutePanel_0;
  this.widgetToComponentContainer = new HashMap_0;
  this.paintableToCell = new HashMap_0;
  this.clickEventHandler = new VGridLayout$1_0(this, this);
  this.colSpans = new LinkedList_0;
  this.rowSpans = new LinkedList_0;
  this.element_0.appendChild(this.margin);
  this.element_0['className'] = 'v-gridlayout';
  $setWidget(this, this.canvas);
}

function cloneArray(toBeCloned){
  var clone, i;
  clone = initDim(_3I_classLit, {30:1}, -1, toBeCloned.length, 1);
  for (i = 0; i < clone.length; ++i) {
    clone[i] = toBeCloned[i];
  }
  return clone;
}

function distributeSpanSize(dimensions, spanStartIndex, spanSize, spacingSize, size, expansionRatios){
  var allocated, allocatedExtraSpace, expansion, i, itemIndex, neededExtraSpace, totalExpansion;
  allocated = dimensions[spanStartIndex];
  for (i = 1; i < spanSize; ++i) {
    allocated += spacingSize + dimensions[spanStartIndex + i];
  }
  if (allocated < size) {
    neededExtraSpace = size - allocated;
    allocatedExtraSpace = 0;
    totalExpansion = 0;
    for (i = 0; i < spanSize; ++i) {
      itemIndex = spanStartIndex + i;
      totalExpansion += expansionRatios[itemIndex];
    }
    for (i = 0; i < spanSize; ++i) {
      itemIndex = spanStartIndex + i;
      totalExpansion == 0?(expansion = ~~(neededExtraSpace / spanSize)):(expansion = ~~(neededExtraSpace * expansionRatios[itemIndex] / totalExpansion));
      dimensions[itemIndex] += expansion;
      allocatedExtraSpace += expansion;
    }
    if (neededExtraSpace > allocatedExtraSpace) {
      for (i = 0; i < spanSize; ++i) {
        itemIndex = spanStartIndex + i;
        dimensions[itemIndex] += 1;
        allocatedExtraSpace += 1;
        if (neededExtraSpace == allocatedExtraSpace) {
          break;
        }
      }
    }
  }
}

function VGridLayout(){
}

_ = VGridLayout_0.prototype = VGridLayout.prototype = new SimplePanel;
_.getAllocatedSpace = function getAllocatedSpace_13(child){
  var cell;
  cell = dynamicCast(this.paintableToCell.get_0(child), 103);
  return new RenderSpace_0($getAvailableWidth(cell) - $getCaptionWidthAfterComponent(cell.cc), $getAvailableHeight(cell) - $getCaptionHeightAboveComponent(cell.cc));
}
;
_.getClass$ = function getClass_640(){
  return Lcom_vaadin_terminal_gwt_client_ui_VGridLayout_2_classLit;
}
;
_.getContainerElement = function getContainerElement_4(){
  return this.margin;
}
;
_.replaceChildComponent = function replaceChildComponent_12(oldComponent, newComponent){
  var componentContainer;
  componentContainer = dynamicCast(this.widgetToComponentContainer.remove_4(oldComponent), 152);
  if (!componentContainer) {
    return;
  }
  $setWidget_5(componentContainer, newComponent);
  this.widgetToComponentContainer.put(newComponent, componentContainer);
  this.paintableToCell.put(dynamicCast(newComponent, 26), dynamicCast(this.paintableToCell.get_0(oldComponent), 103));
}
;
_.requestLayout = function requestLayout_13(changedChildren){
  var allocated, cell, colIndex, colIndex$iterator, colW, dirtyColumns, dirtyRows, h_0, height, i, j_0, needsLayout, offsetHeight, offsetWidth, paintable, paintable$iterator, reDistributeColSpanWidths, reDistributeRowSpanHeights, rowH, rowIndex, rowIndex$iterator, width;
  needsLayout = false;
  reDistributeColSpanWidths = false;
  reDistributeRowSpanHeights = false;
  offsetHeight = parseInt(this.canvas.element_0['offsetHeight']) || 0;
  offsetWidth = parseInt(this.canvas.element_0['offsetWidth']) || 0;
  ($equals_2('', this.width_0) || $equals_2('', this.height_0)) && (needsLayout = true);
  dirtyColumns = new ArrayList_0;
  dirtyRows = new ArrayList_0;
  for (paintable$iterator = changedChildren.iterator_0(); paintable$iterator.hasNext();) {
    paintable = dynamicCast(paintable$iterator.next_0(), 26);
    cell = dynamicCast(this.paintableToCell.get_0(paintable), 103);
    if (!cell.relHeight || !cell.relWidth) {
      cell.cc.element_0.style['width'] = '';
      cell.cc.element_0.style['height'] = '';
      $updateWidgetSize(cell.cc);
      $updateCaptionSize(cell.cc);
      width = $getWidth_0(cell);
      allocated = this.columnWidths[cell.col];
      for (i = 1; i < cell.colspan; ++i) {
        allocated += this.spacingPixelsHorizontal + this.columnWidths[cell.col + i];
      }
      if (allocated < width) {
        needsLayout = true;
        cell.colspan == 1?(this.columnWidths[cell.col] = this.minColumnWidths[cell.col] = width):(reDistributeColSpanWidths = true);
      }
       else 
        allocated != width && $add_12(dirtyColumns, valueOf(cell.col));
      height = cell.cc?cell.cc.widgetSize.getHeight() + $getCaptionHeightAboveComponent(cell.cc):0;
      allocated = this.rowHeights[cell.row];
      for (i = 1; i < cell.rowspan; ++i) {
        allocated += this.spacingPixelsVertical + this.rowHeights[cell.row + i];
      }
      if (allocated < height) {
        needsLayout = true;
        cell.rowspan == 1?(this.rowHeights[cell.row] = this.minRowHeights[cell.row] = height):(reDistributeRowSpanHeights = true);
      }
       else 
        allocated != height && $add_12(dirtyRows, valueOf(cell.row));
    }
  }
  if (dirtyColumns.size_0 > 0) {
    for (colIndex$iterator = new AbstractList$IteratorImpl_0(dirtyColumns); colIndex$iterator.i < colIndex$iterator.this$0_0.size_1();) {
      colIndex = dynamicCast($next_5(colIndex$iterator), 108);
      colW = 0;
      for (i = 0; i < this.rowHeights.length; ++i) {
        cell = this.cells_0[colIndex.value_0][i];
        if (!!cell && !!cell.childUidl && !cell.relWidth && cell.colspan == 1) {
          width = $getWidth_0(cell);
          width > colW && (colW = width);
        }
      }
      this.minColumnWidths[colIndex.value_0] = colW;
    }
    needsLayout = true;
    this.columnWidths = cloneArray(this.minColumnWidths);
    $distributeColSpanWidths(this);
    reDistributeColSpanWidths = false;
  }
  reDistributeColSpanWidths && $distributeColSpanWidths(this);
  if (dirtyRows.size_0 > 0) {
    needsLayout = true;
    for (rowIndex$iterator = new AbstractList$IteratorImpl_0(dirtyRows); rowIndex$iterator.i < rowIndex$iterator.this$0_0.size_1();) {
      rowIndex = dynamicCast($next_5(rowIndex$iterator), 108);
      rowH = this.minRowHeights[rowIndex.value_0] = 0;
      for (i = 0; i < this.columnWidths.length; ++i) {
        cell = this.cells_0[i][rowIndex.value_0];
        if (!!cell && !!cell.childUidl && !cell.relHeight && cell.rowspan == 1) {
          h_0 = cell.cc?cell.cc.widgetSize.getHeight() + $getCaptionHeightAboveComponent(cell.cc):0;
          h_0 > rowH && (rowH = h_0);
        }
      }
      this.minRowHeights[rowIndex.value_0] = rowH;
    }
    this.rowHeights = cloneArray(this.minRowHeights);
    $distributeRowSpanHeights(this);
    reDistributeRowSpanHeights = false;
  }
  reDistributeRowSpanHeights && $distributeRowSpanHeights(this);
  if (needsLayout) {
    $expandColumns(this);
    $expandRows(this);
    $layoutCells(this);
    for (i = 0; i < this.cells_0.length; ++i) {
      for (j_0 = 0; j_0 < this.cells_0[i].length; ++j_0) {
        cell = this.cells_0[i][j_0];
        !!cell && !!cell.cc && (cell.relHeight || cell.relWidth) && $handleComponentRelativeSize_0(this.client, cell.cc.widget);
      }
    }
  }
  return !((parseInt(this.canvas.element_0['offsetHeight']) || 0) != offsetHeight || (parseInt(this.canvas.element_0['offsetWidth']) || 0) != offsetWidth);
}
;
_.setHeight = function setHeight_15(height){
  var c, c$iterator, outerIter, entry;
  this.element_0.style['height'] = height;
  if (!$equals_2(height, this.height_0)) {
    this.height_0 = height;
    if (this.rendering) {
      this.sizeChangedDuringRendering = true;
    }
     else {
      $expandRows(this);
      $layoutCells(this);
      for (c$iterator = (outerIter = $keySet(this.paintableToCell).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); c$iterator.val$outerIter.hasNext();) {
        c = dynamicCast((entry = dynamicCast(c$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 26);
        $handleComponentRelativeSize_0(this.client, dynamicCast(c, 70));
      }
    }
  }
}
;
_.setWidth = function setWidth_21(width){
  var c, c$iterator, cell, colIndex, column, dirtyRows, heightChanged, i, j_0, newHeight, newMinimum, oldMinimum, oldWidths, rowIndex, rowIndex$iterator, rowMayShrink, outerIter, entry, outerIter_0, entry_0;
  this.element_0.style['width'] = width;
  if (!$equals_2(width, this.width_0)) {
    this.width_0 = width;
    if (this.rendering) {
      this.sizeChangedDuringRendering = true;
    }
     else {
      oldWidths = cloneArray(this.columnWidths);
      $expandColumns(this);
      heightChanged = false;
      dirtyRows = null;
      for (i = 0; i < oldWidths.length; ++i) {
        if (this.columnWidths[i] != oldWidths[i]) {
          column = this.cells_0[i];
          for (j_0 = 0; j_0 < column.length; ++j_0) {
            c = column[j_0];
            if (!!c && !!c.cc && c.widthCanAffectHeight) {
              $setContainerSize(c.cc, $getAvailableWidth(c), $getAvailableHeight(c));
              $handleComponentRelativeSize_0(this.client, c.cc.widget);
              $updateWidgetSize(c.cc);
              newHeight = c.cc?c.cc.widgetSize.getHeight() + $getCaptionHeightAboveComponent(c.cc):0;
              if (this.columnWidths[i] < oldWidths[i] && newHeight > this.minRowHeights[j_0] && c.rowspan == 1) {
                this.minRowHeights[j_0] = newHeight;
                if (newHeight > this.rowHeights[j_0]) {
                  this.rowHeights[j_0] = newHeight;
                  heightChanged = true;
                }
              }
               else if (newHeight < this.minRowHeights[j_0]) {
                !dirtyRows && (dirtyRows = new HashSet_0);
                $add_14(dirtyRows, valueOf(j_0));
              }
            }
          }
        }
      }
      if (dirtyRows) {
        rowMayShrink = false;
        for (rowIndex$iterator = (outerIter = $keySet(dirtyRows.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); rowIndex$iterator.val$outerIter.hasNext();) {
          rowIndex = dynamicCast((entry = dynamicCast(rowIndex$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 108);
          oldMinimum = this.minRowHeights[rowIndex.value_0];
          newMinimum = 0;
          for (colIndex = 0; colIndex < this.columnWidths.length; ++colIndex) {
            cell = this.cells_0[colIndex][rowIndex.value_0];
            !!cell && !cell.relHeight && (cell.cc?cell.cc.widgetSize.getHeight() + $getCaptionHeightAboveComponent(cell.cc):0) > newMinimum && (newMinimum = cell.cc?cell.cc.widgetSize.getHeight() + $getCaptionHeightAboveComponent(cell.cc):0);
          }
          if (newMinimum < oldMinimum) {
            this.minRowHeights[rowIndex.value_0] = this.rowHeights[rowIndex.value_0] = newMinimum;
            rowMayShrink = true;
          }
        }
        if (rowMayShrink) {
          $distributeRowSpanHeights(this);
          this.minRowHeights = cloneArray(this.rowHeights);
          heightChanged = true;
        }
      }
      $layoutCells(this);
      for (c$iterator = (outerIter_0 = $keySet(this.paintableToCell).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter_0)); c$iterator.val$outerIter.hasNext();) {
        c = dynamicCast((entry_0 = dynamicCast(c$iterator.val$outerIter.next_0(), 58) , entry_0.getKey()), 26);
        $handleComponentRelativeSize_0(this.client, dynamicCast(c, 70));
      }
      heightChanged && $equals_2('', this.height_0) && notifyParentOfSizeChange(this, false);
    }
  }
}
;
_.updateCaption = function updateCaption_14(component, uidl){
  var cc;
  cc = dynamicCast(this.widgetToComponentContainer.get_0(component), 152);
  !!cc && $updateCaption_6(cc, uidl, this.client);
  if (!this.rendering) {
    $updateRelSizeStatus(dynamicCast(this.paintableToCell.get_0(component), 103), uidl);
    $add_12(this.client.componentCaptionSizeChanges, component);
  }
}
;
_.updateFromUIDL = function updateFromUIDL_31(uidl, client){
  var alignmentIndex, alignments, c, cell, cell$iterator, childComponentContainer, cols, i, j_0, newCells, pendingCells, r, relativeHeighted, rendered, rows, w, w$iterator, widget2, margins, styles, spacingmeter, count, count_0, outerIter, entry;
  this.rendering = true;
  this.client = client;
  if ($updateComponent(client, this, uidl, true)) {
    this.rendering = false;
    return;
  }
  $handleEventHandlerRegistration(this.clickEventHandler, client);
  this.canvas.element_0.style['width'] = '0px';
  margins = new VMarginInfo_0(uidl[1]['margins']);
  styles = 'v-gridlayout-margin';
  (margins.bitMask & 1) == 1 && (styles += ' v-gridlayout-margin-top');
  (margins.bitMask & 2) == 2 && (styles += ' v-gridlayout-margin-right');
  (margins.bitMask & 4) == 4 && (styles += ' v-gridlayout-margin-bottom');
  (margins.bitMask & 8) == 8 && (styles += ' v-gridlayout-margin-left');
  this.margin.className = styles;
  this.marginTopAndBottom = (this.margin.offsetHeight || 0) - (parseInt(this.canvas.element_0['offsetHeight']) || 0);
  spacingmeter = $doc.createElement('div');
  spacingmeter.className = 'v-gridlayout-spacing-' + (Boolean(uidl[1]['spacing'])?'on':'off');
  spacingmeter.style['width'] = '0';
  spacingmeter.style['height'] = '0';
  this.canvas.element_0.appendChild(spacingmeter);
  this.spacingPixelsHorizontal = spacingmeter.offsetWidth || 0;
  this.spacingPixelsVertical = spacingmeter.offsetHeight || 0;
  this.canvas.element_0.removeChild(spacingmeter);
  cols = uidl[1]['w'];
  rows = uidl[1]['h'];
  this.columnWidths = initDim(_3I_classLit, {30:1}, -1, cols, 1);
  this.rowHeights = initDim(_3I_classLit, {30:1}, -1, rows, 1);
  if (this.cells_0 == null) {
    this.cells_0 = initDims([_3_3Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$Cell_2_classLit, _3Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$Cell_2_classLit], [{30:1, 35:1}, {30:1, 34:1, 35:1}], [34, 103], [cols, rows], 0, 2, 0);
  }
   else if (this.cells_0.length != cols || this.cells_0[0].length != rows) {
    newCells = initDims([_3_3Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$Cell_2_classLit, _3Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$Cell_2_classLit], [{30:1, 35:1}, {30:1, 34:1, 35:1}], [34, 103], [cols, rows], 0, 2, 0);
    for (i = 0; i < this.cells_0.length; ++i) {
      for (j_0 = 0; j_0 < this.cells_0[i].length; ++j_0) {
        i < cols && j_0 < rows && (newCells[i][j_0] = this.cells_0[i][j_0]);
      }
    }
    this.cells_0 = newCells;
  }
  this.nonRenderedWidgets = new HashMap_2(this.widgetToComponentContainer);
  alignments = $getIntArray(uidl[1], 'alignments');
  alignmentIndex = 0;
  pendingCells = new LinkedList_0;
  relativeHeighted = new LinkedList_0;
  for (i = new UIDL$1_0(uidl); count = i.this$0.length - 2 , count > i.index_0 + 1;) {
    r = dynamicCastJso($next_3(i));
    if ($equals_2('gr', r[0])) {
      for (j_0 = new UIDL$1_0(r); count_0 = j_0.this$0.length - 2 , count_0 > j_0.index_0 + 1;) {
        c = dynamicCastJso($next_3(j_0));
        if ($equals_2('gc', c[0])) {
          cell = $getCell(this, c);
          if (cell.childUidl) {
            rendered = $renderIfNoRelativeWidth(cell);
            cell.alignment = alignments[alignmentIndex++];
            rendered || (new LinkedList$Node_1(cell, pendingCells.header) , ++pendingCells.size_0 , true);
            cell.colspan > 1?$storeColSpannedCell(this, cell):rendered && this.columnWidths[cell.col] < $getWidth_0(cell) && (this.columnWidths[cell.col] = $getWidth_0(cell));
            cell.relHeight && (new LinkedList$Node_1(cell, relativeHeighted.header) , ++relativeHeighted.size_0 , true);
          }
        }
      }
    }
  }
  this.colExpandRatioArray = $getIntArray(uidl[1], 'colExpand');
  this.rowExpandRatioArray = $getIntArray(uidl[1], 'rowExpand');
  $distributeColSpanWidths(this);
  this.minColumnWidths = cloneArray(this.columnWidths);
  $expandColumns(this);
  $renderRemainingComponentsWithNoRelativeHeight(pendingCells);
  $detectRowHeights(this);
  $expandRows(this);
  $renderRemainingComponents(pendingCells);
  for (cell$iterator = $listIterator(relativeHeighted, 0); cell$iterator.currentNode != cell$iterator.this$0.header;) {
    cell = dynamicCast($next_7(cell$iterator), 103);
    widget2 = cell.cc.widget;
    $handleComponentRelativeSize(client, client.idToPaintableDetail[widget2.element_0.tkPid]);
    $updateWidgetSize(cell.cc);
  }
  $layoutCells(this);
  for (w$iterator = (outerIter = $keySet(this.nonRenderedWidgets).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); w$iterator.val$outerIter.hasNext();) {
    w = dynamicCast((entry = dynamicCast(w$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 70);
    childComponentContainer = dynamicCast(this.widgetToComponentContainer.get_0(w), 152);
    this.paintableToCell.remove_4(w);
    this.widgetToComponentContainer.remove_4(w);
    $removeFromParent_0(childComponentContainer);
    $unregisterPaintable(client, dynamicCast(w, 26));
  }
  this.nonRenderedWidgets = null;
  this.rendering = false;
  this.sizeChangedDuringRendering = false;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 24:1, 26:1, 33:1, 69:1, 70:1, 75:1, 76:1};
_.cells_0 = null;
_.client = null;
_.colExpandRatioArray = null;
_.columnWidths = null;
_.height_0 = null;
_.marginTopAndBottom = 0;
_.minColumnWidths = null;
_.minRowHeights = null;
_.nonRenderedWidgets = null;
_.rendering = false;
_.rowExpandRatioArray = null;
_.rowHeights = null;
_.sizeChangedDuringRendering = false;
_.spacingPixelsHorizontal = 0;
_.spacingPixelsVertical = 0;
_.width_0 = null;
function VGridLayout$1_0(this$0, $anonymous0){
  this.this$0 = this$0;
  this.paintable = $anonymous0;
  this.clickEventIdentifier = 'layout_click';
}

function VGridLayout$1(){
}

_ = VGridLayout$1_0.prototype = VGridLayout$1.prototype = new LayoutClickEventHandler;
_.getChildComponent = function getChildComponent_1(element){
  return $getComponent_2(this.this$0, element);
}
;
_.getClass$ = function getClass_641(){
  return Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$1_2_classLit;
}
;
_.registerHandler = function registerHandler_2(handler, type){
  return $addDomHandler(this.this$0, handler, type);
}
;
_.castableTypeMap$ = {12:1, 40:1, 42:1, 49:1};
_.this$0 = null;
function $getAvailableHeight(this$static){
  var height, i;
  height = this$static.this$0.rowHeights[this$static.row];
  for (i = 1; i < this$static.rowspan; ++i) {
    height += this$static.this$0.spacingPixelsVertical + this$static.this$0.rowHeights[this$static.row + i];
  }
  return height;
}

function $getAvailableWidth(this$static){
  var i, width;
  width = this$static.this$0.columnWidths[this$static.col];
  for (i = 1; i < this$static.colspan; ++i) {
    width += this$static.this$0.spacingPixelsHorizontal + this$static.this$0.columnWidths[this$static.col + i];
  }
  return width;
}

function $getWidth_0(this$static){
  var w;
  if (this$static.cc) {
    w = this$static.cc.widgetSize.getWidth() + $getCaptionWidthAfterComponent(this$static.cc);
    return w;
  }
   else {
    return 0;
  }
}

function $layout(this$static, x, y){
  if (!!this$static.cc && this$static.cc.attached) {
    $setWidgetPosition(this$static.this$0.canvas, this$static.cc, x, y);
    $setContainerSize(this$static.cc, $getAvailableWidth(this$static), $getAvailableHeight(this$static));
    this$static.cc.alignment = new AlignmentInfo_0(this$static.alignment);
    $updateAlignments(this$static.cc, $getAvailableWidth(this$static), $getAvailableHeight(this$static));
  }
}

function $render(this$static){
  var paintable;
  paintable = $getPaintable(this$static.this$0.client, this$static.childUidl);
  if (!this$static.cc || this$static.cc.widget != paintable) {
    if (this$static.this$0.widgetToComponentContainer.containsKey(paintable)) {
      this$static.cc = dynamicCast(this$static.this$0.widgetToComponentContainer.get_0(paintable), 152);
      this$static.cc.element_0.style['width'] = '';
      this$static.cc.element_0.style['height'] = '';
      $setWidget_5(this$static.cc, dynamicCast(paintable, 70));
    }
     else {
      this$static.cc = new ChildComponentContainer_0(dynamicCast(paintable, 70), 0);
      this$static.this$0.widgetToComponentContainer.put(dynamicCast(paintable, 70), this$static.cc);
      this$static.cc.element_0.style['width'] = '';
      $add_2(this$static.this$0.canvas, this$static.cc);
    }
    this$static.this$0.paintableToCell.put(paintable, this$static);
  }
  $renderChild(this$static.cc, this$static.childUidl, this$static.this$0.client, -1);
  this$static.this$0.sizeChangedDuringRendering && ($clinit_67() , Boolean(this$static.childUidl[1]['cached'])) && $handleComponentRelativeSize_0(this$static.this$0.client, this$static.cc.widget);
  $updateWidgetSize(this$static.cc);
  this$static.this$0.nonRenderedWidgets.remove_4(paintable);
}

function $renderIfNoRelativeWidth(this$static){
  if (!this$static.childUidl) {
    return false;
  }
  if (this$static.relWidth) {
    return false;
  }
   else {
    $render(this$static);
    return true;
  }
}

function $setUidl(this$static, c){
  var i, j_0, paintable;
  this$static.colspan = 'w' in c[1]?c[1]['w']:1;
  this$static.rowspan = 'h' in c[1]?c[1]['h']:1;
  for (i = 0; i < this$static.colspan; ++i) {
    for (j_0 = 0; j_0 < this$static.rowspan; ++j_0) {
      (i > 0 || j_0 > 0) && (this$static.this$0.cells_0[this$static.col + i][this$static.row + j_0] = null);
    }
  }
  c = c[2];
  if (this$static.childUidl) {
    if (!c) {
      this$static.cc = null;
    }
     else if (!!this$static.cc && this$static.cc.widget != $getPaintable(this$static.this$0.client, c)) {
      this$static.cc = null;
      paintable = $getPaintable(this$static.this$0.client, c);
      if (this$static.this$0.widgetToComponentContainer.containsKey(paintable)) {
        this$static.cc = dynamicCast(this$static.this$0.widgetToComponentContainer.get_0(paintable), 152);
        this$static.cc.element_0.style['width'] = '';
        this$static.cc.element_0.style['height'] = '';
        this$static.this$0.paintableToCell.put(paintable, this$static);
      }
    }
  }
  this$static.childUidl = c;
  $updateRelSizeStatus(this$static, c);
}

function $updateRelSizeStatus(this$static, uidl){
  if (!!uidl && !Boolean(uidl[1]['cached'])) {
    'height' in uidl[1] && uidl[1]['height'].indexOf('%') != -1?(this$static.relHeight = true):(this$static.relHeight = false);
    if ('width' in uidl[1]) {
      this$static.widthCanAffectHeight = this$static.relWidth = uidl[1]['width'].indexOf('%') != -1;
      'height' in uidl[1] && (this$static.widthCanAffectHeight = false);
    }
     else {
      this$static.widthCanAffectHeight = !('height' in uidl[1]);
      this$static.relWidth = false;
    }
  }
}

function VGridLayout$Cell_0(this$0, c){
  this.this$0 = this$0;
  this.row = c[1]['y'];
  this.col = c[1]['x'];
  $setUidl(this, c);
}

function VGridLayout$Cell(){
}

_ = VGridLayout$Cell_0.prototype = VGridLayout$Cell.prototype = new Object_0;
_.getClass$ = function getClass_642(){
  return Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$Cell_2_classLit;
}
;
_.castableTypeMap$ = {103:1};
_.alignment = 0;
_.cc = null;
_.childUidl = null;
_.col = 0;
_.colspan = 1;
_.relHeight = false;
_.relWidth = false;
_.row = 0;
_.rowspan = 1;
_.this$0 = null;
_.widthCanAffectHeight = false;
function VGridLayout$SpanList_0(span){
  this.cells_0 = new LinkedList_0;
  this.span = span;
}

function VGridLayout$SpanList(){
}

_ = VGridLayout$SpanList_0.prototype = VGridLayout$SpanList.prototype = new Object_0;
_.getClass$ = function getClass_643(){
  return Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$SpanList_2_classLit;
}
;
_.castableTypeMap$ = {153:1};
_.span = 0;
function $putAll(this$static, t){
  var e, iter;
  for (iter = t.entrySet_0().iterator_0(); iter.hasNext();) {
    e = dynamicCast(iter.next_0(), 58);
    this$static.put(e.getKey(), e.getValue());
  }
}

function HashMap_2(toBeCopied){
  $clearImpl(this);
  $putAll(this, toBeCopied);
}

_ = HashMap_2.prototype = HashMap.prototype;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader19_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader19'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$28$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$28$1'), Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$Cell_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VGridLayout$Cell'), _3Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$Cell_2_classLit = createForArray('[Lcom.vaadin.terminal.gwt.client.ui.', 'VGridLayout$Cell;'), _3_3Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$Cell_2_classLit = createForArray('[[Lcom.vaadin.terminal.gwt.client.ui.', 'VGridLayout$Cell;'), Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VGridLayout$1'), Lcom_vaadin_terminal_gwt_client_ui_VGridLayout$SpanList_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VGridLayout$SpanList');
$entry(onLoad_9)();
