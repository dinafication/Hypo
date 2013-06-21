function $runCallbacks_7(){
  var $e0, e, handler;
  while (callbacksHead_7) {
    handler = sUncaughtExceptionHandler;
    callbacksHead_7 = callbacksHead_7.next;
    !callbacksHead_7 && (callbacksTail_7 = null);
    if (!handler) {
      ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VTree_2_classLit, new WidgetMapImpl$24$1_0);
      endWidgetLoading();
    }
     else {
      try {
        ($clinit_69() , instmap).put(Lcom_vaadin_terminal_gwt_client_ui_VTree_2_classLit, new WidgetMapImpl$24$1_0);
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

function AsyncLoader17_0(){
}

function onLoad_7(){
  instance_8 = new AsyncLoader17_0;
  $fragmentHasLoaded(($clinit_0() , BROWSER_LOADER), 17);
  !!$stats && $stats($createStatsEvent('runCallbacks17', 'begin', -1, -1));
  instance_8.runCallbacks();
  !!$stats && $stats($createStatsEvent('runCallbacks17', 'end', -1, -1));
}

function AsyncLoader17(){
}

_ = AsyncLoader17_0.prototype = AsyncLoader17.prototype = new Object_0;
_.getClass$ = function getClass_179(){
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader17_2_classLit;
}
;
_.runCallbacks = function runCallbacks_7(){
  $runCallbacks_7();
}
;
_.castableTypeMap$ = {};
function WidgetMapImpl$24$1_0(){
}

function WidgetMapImpl$24$1(){
}

_ = WidgetMapImpl$24$1_0.prototype = WidgetMapImpl$24$1.prototype = new Object_0;
_.get = function get_16(){
  return new VTree_0;
}
;
_.getClass$ = function getClass_514(){
  return Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$24$1_2_classLit;
}
;
_.castableTypeMap$ = {137:1};
function $setTabIndex(this$static, tabIndex){
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    this$static.element_0.tabIndex = tabIndex;
  }
   else {
    this$static.element_0.tabIndex = -1;
    !!this$static.focusElement && (this$static.focusElement.tabIndex = tabIndex , undefined);
  }
}

function FocusElementPanel(){
}

_ = FocusElementPanel.prototype = new SimpleFocusablePanel;
_.getClass$ = function getClass_559(){
  return Lcom_vaadin_terminal_gwt_client_ui_FocusElementPanel_2_classLit;
}
;
_.setFocus = function setFocus_4(focus_0){
  $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))?focus_0?($clinit_53() , $focus(this.element_0)):($clinit_53() , $blur(this.element_0)):focus_0?($clinit_53() , $focus(this.focusElement)):($clinit_53() , $blur(this.focusElement));
}
;
_.setTabIndex = function setTabIndex_5(tabIndex){
  $setTabIndex(this, tabIndex);
}
;
_.setWidget = function setWidget_2(w){
  var style, parent_0;
  $setWidget(this, w);
  if (!$isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    if (!(parent_0 = this.focusElement.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)) {
      style = this.focusElement.style;
      style['position'] = ($clinit_8() , 'fixed');
      style['top'] = 0 + ($clinit_9() , 'px');
      style['left'] = '0px';
      this.element_0.appendChild(this.focusElement);
      sinkEvents(this.focusElement, 6144);
      this.element_0['tabIndex'] = null;
    }
     else {
      $insertAfter(this.element_0, this.focusElement, this.widget.element_0);
    }
  }
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 25:1, 33:1, 69:1, 70:1, 75:1, 76:1};
_.focusElement = null;
function $applyDisableTextSelectionIEHack(){
  return function(){
    return false;
  }
  ;
}

function $deselectAll_0(this$static){
  var key, key$iterator, node, outerIter, entry;
  for (key$iterator = (outerIter = $keySet(this$static.selectedIds.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)); key$iterator.val$outerIter.hasNext();) {
    key = dynamicCast((entry = dynamicCast(key$iterator.val$outerIter.next_0(), 58) , entry.getKey()), 1);
    node = dynamicCast(this$static.keyToNode.get_0(key), 173);
    !!node && setStyleName(node.nodeCaptionDiv, 'v-tree-node-selected', false);
  }
  this$static.selectedIds.map.clear_0();
  this$static.selectionHasChanged = true;
}

function $deselectNode(this$static, node){
  setStyleName(node.nodeCaptionDiv, 'v-tree-node-selected', false);
  this$static.selectedIds.map.remove_4(node.key) != null;
  this$static.selectionHasChanged = true;
}

function $doNoRelationSelection(this$static, startNode, endNode){
  var children, commonParent, currentNode, endBranch, i, node, node$iterator, startBranch, startChildren, startParent, temp;
  commonParent = $getCommonGrandParent(startNode, endNode);
  startBranch = null;
  endBranch = null;
  commonParent?(children = $getChildren(commonParent)):(children = $getRootNodes(this$static));
  for (node$iterator = children.iterator_0(); node$iterator.hasNext();) {
    node = dynamicCast(node$iterator.next_0(), 173);
    $nodeIsInBranch(this$static, startNode, node) && (startBranch = node);
    $nodeIsInBranch(this$static, endNode, node) && (endBranch = node);
  }
  if (children.indexOf_0(startBranch) > children.indexOf_0(endBranch)) {
    temp = startBranch;
    startBranch = endBranch;
    endBranch = temp;
    temp = startNode;
    startNode = endNode;
    endNode = temp;
  }
  $selectAllChildren(this$static, startNode);
  startParent = $getParentNode(startNode);
  currentNode = startNode;
  while (!!startParent && startParent != commonParent) {
    startChildren = $getChildren(startParent);
    for (i = $indexOf_0(startChildren, currentNode) + 1; i < startChildren.size_0; ++i) {
      $selectAllChildren(this$static, dynamicCast($get_3(startChildren, i), 173));
    }
    currentNode = startParent;
    startParent = $getParentNode(startParent);
  }
  for (i = children.indexOf_0(startBranch) + 1; i <= children.indexOf_0(endBranch); ++i) {
    $selectAllChildrenUntil(this$static, dynamicCast(children.get_1(i), 173), endNode, true);
  }
  setStyleName(endNode.nodeCaptionDiv, 'v-tree-node-selected', true);
  $add_14(this$static.selectedIds, endNode.key);
  this$static.selectionHasChanged = true;
}

function $doRelationSelection(this$static, startNode, endNode){
  var currentNode, n, subChildren;
  currentNode = endNode;
  while (currentNode != startNode) {
    setStyleName(currentNode.nodeCaptionDiv, 'v-tree-node-selected', true);
    $add_14(this$static.selectedIds, currentNode.key);
    subChildren = $getChildren($getParentNode(currentNode));
    if (subChildren.size_0 > 1) {
      $selectNodeRange(this$static, dynamicCast($next_7($listIterator(subChildren, 0)), 173).key, currentNode.key);
    }
     else if (subChildren.size_0 == 1) {
      n = dynamicCast($get_3(subChildren, 0), 173);
      setStyleName(n.nodeCaptionDiv, 'v-tree-node-selected', true);
      $add_14(this$static.selectedIds, n.key);
    }
    currentNode = $getParentNode(currentNode);
  }
  setStyleName(startNode.nodeCaptionDiv, 'v-tree-node-selected', true);
  $add_14(this$static.selectedIds, startNode.key);
  this$static.selectionHasChanged = true;
}

function $doSiblingSelection(this$static, startNode, endNode){
  var childIter, children, node, parent_0, startFound, temp;
  parent_0 = $getParentNode(startNode);
  !parent_0?(children = $getRootNodes(this$static)):(children = $getChildren(parent_0));
  if (children.indexOf_0(startNode) > children.indexOf_0(endNode)) {
    temp = startNode;
    startNode = endNode;
    endNode = temp;
  }
  childIter = children.iterator_0();
  startFound = false;
  while (childIter.hasNext()) {
    node = dynamicCast(childIter.next_0(), 173);
    node == startNode && (startFound = true);
    if (startFound && node != endNode && node.open_0) {
      $selectAllChildren(this$static, node);
    }
     else if (startFound && node != endNode) {
      setStyleName(node.nodeCaptionDiv, 'v-tree-node-selected', true);
      $add_14(this$static.selectedIds, node.key);
    }
    if (node == endNode) {
      setStyleName(node.nodeCaptionDiv, 'v-tree-node-selected', true);
      $add_14(this$static.selectedIds, node.key);
      break;
    }
  }
  this$static.selectionHasChanged = true;
}

function $focusAndSelectNode(this$static, node){
  var oldFocusedNode;
  oldFocusedNode = this$static.focusedNode;
  $setFocusedNode(this$static, node, true);
  $setSelected_1(this$static, this$static.focusedNode, true);
  $setSelected_1(this$static, oldFocusedNode, false);
}

function $getCommonGrandParent(node1, node2){
  var i, j_0, parent1, parent2, parents1, parents2;
  if (!$getParentNode(node1) || !$getParentNode(node2)) {
    return null;
  }
  if ($isGrandParentOf(node1, node2) || $isGrandParentOf(node2, node1)) {
    return null;
  }
  parents1 = new ArrayList_0;
  parent1 = $getParentNode(node1);
  while (parent1) {
    setCheck(parents1.array, parents1.size_0++, parent1);
    parent1 = $getParentNode(parent1);
  }
  parents2 = new ArrayList_0;
  parent2 = $getParentNode(node2);
  while (parent2) {
    setCheck(parents2.array, parents2.size_0++, parent2);
    parent2 = $getParentNode(parent2);
  }
  for (i = 0; i < parents1.size_0; ++i) {
    parent1 = dynamicCast((checkIndex(i, parents1.size_0) , parents1.array[i]), 173);
    for (j_0 = 0; j_0 < parents2.size_0; ++j_0) {
      parent2 = dynamicCast((checkIndex(j_0, parents2.size_0) , parents2.array[j_0]), 173);
      if (parent1 == parent2) {
        return parent1;
      }
    }
  }
  return null;
}

function $getFirstRootNode(this$static){
  if (this$static.body_0.children_0.size_0 == 0) {
    return null;
  }
  return dynamicCast($get_0(this$static.body_0.children_0, 0), 173);
}

function $getLastRootNode(this$static){
  if (this$static.body_0.children_0.size_0 == 0) {
    return null;
  }
  return dynamicCast($getWidget(this$static.body_0, this$static.body_0.children_0.size_0 - 1), 173);
}

function $getLastVisibleChildInTree(this$static, root){
  var children;
  if ($isLeaf(root) || !root.open_0 || $getChildren(root).size_0 == 0) {
    return root;
  }
  children = $getChildren(root);
  return $getLastVisibleChildInTree(this$static, dynamicCast($get_3(children, children.size_0 - 1), 173));
}

function $getNextSibling(this$static, node){
  var children, idx, parent_0;
  parent_0 = $getParentNode(node);
  !parent_0?(children = $getRootNodes(this$static)):(children = $getChildren(parent_0));
  idx = children.indexOf_0(node);
  if (idx < children.size_1() - 1) {
    return dynamicCast(children.get_1(idx + 1), 173);
  }
  return null;
}

function $getPreviousSibling(this$static, node){
  var children, idx, parent_0;
  parent_0 = $getParentNode(node);
  !parent_0?(children = $getRootNodes(this$static)):(children = $getChildren(parent_0));
  idx = children.indexOf_0(node);
  if (idx > 0) {
    return dynamicCast(children.get_1(idx - 1), 173);
  }
  return null;
}

function $getRootNodes(this$static){
  var i, rootNodes;
  rootNodes = new ArrayList_0;
  for (i = 0; i < this$static.body_0.children_0.size_0; ++i) {
    $add_12(rootNodes, dynamicCast($get_0(this$static.body_0.children_0, i), 173));
  }
  return rootNodes;
}

function $handleBodyContextMenu_0(this$static, event_0){
  var left, top_0;
  if (!this$static.readonly && !this$static.disabled_0) {
    if (this$static.bodyActionKeys != null) {
      left = event_0.nativeEvent.clientX || 0;
      top_0 = event_0.nativeEvent.clientY || 0;
      top_0 += $doc.body.scrollTop || 0;
      left += $getScrollLeft($doc.body);
      $showAt_0($getContextMenu(this$static.client), this$static, left, top_0);
    }
    event_0.nativeEvent.stopPropagation();
    event_0.nativeEvent.preventDefault();
  }
}

function $handleKeyNavigation(this$static, keycode, ctrl, shift){
  var current, lastNode, node, prev;
  if (keycode == 40) {
    if (!$isLeaf(this$static.focusedNode) && this$static.focusedNode.open_0 && $getChildren(this$static.focusedNode).size_0 > 0) {
      node = dynamicCast($get_3($getChildren(this$static.focusedNode), 0), 173);
    }
     else {
      node = $getNextSibling(this$static, this$static.focusedNode);
      if (!node) {
        current = this$static.focusedNode;
        while (!node && !!$getParentNode(current)) {
          node = $getNextSibling(this$static, $getParentNode(current));
          current = $getParentNode(current);
        }
      }
    }
    if (node) {
      $setFocusedNode(this$static, node, true);
      if (this$static.selectable) {
        if (!ctrl && !shift) {
          $selectNode(this$static, node, true);
        }
         else if (shift && this$static.isMultiselect) {
          $deselectAll_0(this$static);
          $selectNodeRange(this$static, this$static.lastSelection.key, node.key);
        }
         else 
          shift && $selectNode(this$static, node, true);
      }
    }
    return true;
  }
  if (keycode == 38) {
    prev = $getPreviousSibling(this$static, this$static.focusedNode);
    node = null;
    prev?(node = $getLastVisibleChildInTree(this$static, prev)):!!$getParentNode(this$static.focusedNode) && (node = $getParentNode(this$static.focusedNode));
    if (node) {
      $setFocusedNode(this$static, node, true);
      if (this$static.selectable) {
        if (!ctrl && !shift) {
          $selectNode(this$static, node, true);
        }
         else if (shift && this$static.isMultiselect) {
          $deselectAll_0(this$static);
          $selectNodeRange(this$static, this$static.lastSelection.key, node.key);
        }
         else 
          shift && $selectNode(this$static, node, true);
      }
    }
    return true;
  }
  if (keycode == 37) {
    if (!$isLeaf(this$static.focusedNode) && this$static.focusedNode.open_0) {
      $setState_0(this$static.focusedNode, false, true);
    }
     else if (!!$getParentNode(this$static.focusedNode) && ($isLeaf(this$static.focusedNode) || !this$static.focusedNode.open_0)) {
      if (ctrl || !this$static.selectable) {
        $setFocusedNode(this$static, $getParentNode(this$static.focusedNode), true);
      }
       else if (shift) {
        $doRelationSelection(this$static, $getParentNode(this$static.focusedNode), this$static.focusedNode);
        $setFocusedNode(this$static, $getParentNode(this$static.focusedNode), true);
      }
       else {
        $focusAndSelectNode(this$static, $getParentNode(this$static.focusedNode));
      }
    }
    return true;
  }
  if (keycode == 39) {
    if (!$isLeaf(this$static.focusedNode) && !this$static.focusedNode.open_0) {
      $setState_0(this$static.focusedNode, true, true);
    }
     else if (!$isLeaf(this$static.focusedNode)) {
      if (ctrl || !this$static.selectable) {
        $setFocusedNode(this$static, dynamicCast($get_3($getChildren(this$static.focusedNode), 0), 173), true);
      }
       else if (shift) {
        $setSelected_1(this$static, this$static.focusedNode, true);
        $setFocusedNode(this$static, dynamicCast($get_3($getChildren(this$static.focusedNode), 0), 173), true);
        $setSelected_1(this$static, this$static.focusedNode, true);
      }
       else {
        $focusAndSelectNode(this$static, dynamicCast($get_3($getChildren(this$static.focusedNode), 0), 173));
      }
    }
    return true;
  }
  if (keycode == 32) {
    $isSelected(this$static.focusedNode)?$deselectNode(this$static, this$static.focusedNode):$selectNode(this$static, this$static.focusedNode, (!this$static.isMultiselect || this$static.multiSelectMode == 1) && this$static.selectable);
    return true;
  }
  if (keycode == 36) {
    node = $getFirstRootNode(this$static);
    if (ctrl || !this$static.selectable) {
      $setFocusedNode(this$static, node, true);
    }
     else if (shift) {
      $deselectAll_0(this$static);
      $selectNodeRange(this$static, this$static.focusedNode.key, node.key);
    }
     else {
      $selectNode(this$static, node, true);
    }
    $sendSelectionToServer(this$static);
    return true;
  }
  if (keycode == 35) {
    lastNode = $getLastRootNode(this$static);
    node = $getLastVisibleChildInTree(this$static, lastNode);
    if (ctrl || !this$static.selectable) {
      $setFocusedNode(this$static, node, true);
    }
     else if (shift) {
      $deselectAll_0(this$static);
      $selectNodeRange(this$static, this$static.focusedNode.key, node.key);
    }
     else {
      $selectNode(this$static, node, true);
    }
    $sendSelectionToServer(this$static);
    return true;
  }
  return false;
}

function $handleUpdate(this$static, uidl){
  var rootNode;
  rootNode = dynamicCast(this$static.keyToNode.get_0(uidl[1]['rootKey']), 173);
  if (rootNode) {
    rootNode.open_0 || $setState_0(rootNode, true, false);
    $renderChildNodes(rootNode, new UIDL$1_0(uidl));
  }
}

function $nodeIsInBranch(this$static, node, branch){
  var child, child$iterator;
  if (node == branch) {
    return true;
  }
  for (child$iterator = $listIterator($getChildren(branch), 0); child$iterator.currentNode != child$iterator.this$0.header;) {
    child = dynamicCast($next_7(child$iterator), 173);
    if (child == node) {
      return true;
    }
    if (!$isLeaf(child) && child.open_0) {
      if ($nodeIsInBranch(this$static, node, child)) {
        return true;
      }
    }
  }
  return false;
}

function $selectAllChildren(this$static, node){
  var child, child$iterator;
  setStyleName(node.nodeCaptionDiv, 'v-tree-node-selected', true);
  $add_14(this$static.selectedIds, node.key);
  for (child$iterator = $listIterator($getChildren(node), 0); child$iterator.currentNode != child$iterator.this$0.header;) {
    child = dynamicCast($next_7(child$iterator), 173);
    if (!$isLeaf(child) && child.open_0) {
      $selectAllChildren(this$static, child);
    }
     else {
      setStyleName(child.nodeCaptionDiv, 'v-tree-node-selected', true);
      $add_14(this$static.selectedIds, child.key);
    }
  }
  this$static.selectionHasChanged = true;
}

function $selectAllChildrenUntil(this$static, root, stopNode, includeStopNode){
  var child, child$iterator;
  setStyleName(root.nodeCaptionDiv, 'v-tree-node-selected', true);
  $add_14(this$static.selectedIds, root.key);
  if (root.open_0 && root != stopNode) {
    for (child$iterator = $listIterator($getChildren(root), 0); child$iterator.currentNode != child$iterator.this$0.header;) {
      child = dynamicCast($next_7(child$iterator), 173);
      if (!$isLeaf(child) && child.open_0 && child != stopNode) {
        if (!$selectAllChildrenUntil(this$static, child, stopNode, includeStopNode)) {
          return false;
        }
      }
       else if (child == stopNode) {
        if (includeStopNode) {
          setStyleName(child.nodeCaptionDiv, 'v-tree-node-selected', true);
          $add_14(this$static.selectedIds, child.key);
        }
        return false;
      }
       else {
        setStyleName(child.nodeCaptionDiv, 'v-tree-node-selected', true);
        $add_14(this$static.selectedIds, child.key);
      }
    }
  }
  this$static.selectionHasChanged = true;
  return true;
}

function $selectNode(this$static, node, deselectPrevious){
  deselectPrevious && $deselectAll_0(this$static);
  if (node) {
    setStyleName(node.nodeCaptionDiv, 'v-tree-node-selected', true);
    $add_14(this$static.selectedIds, node.key);
    this$static.lastSelection = node;
  }
  this$static.selectionHasChanged = true;
}

function $selectNodeRange(this$static, startNodeKey, endNodeKey){
  var endNode, startNode;
  startNode = dynamicCast(this$static.keyToNode.get_0(startNodeKey), 173);
  endNode = dynamicCast(this$static.keyToNode.get_0(endNodeKey), 173);
  startNode.parent_0 == endNode.parent_0?$doSiblingSelection(this$static, startNode, endNode):$isGrandParentOf(startNode, endNode)?$doRelationSelection(this$static, startNode, endNode):$isGrandParentOf(endNode, startNode)?$doRelationSelection(this$static, endNode, startNode):$doNoRelationSelection(this$static, startNode, endNode);
}

function $sendSelectionToServer(this$static){
  var command;
  command = new VTree$4_0(this$static);
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isWebKit?$scheduleDeferred_0(($clinit_1() , INSTANCE), command):($updateVariable_2(command.this$0.client, command.this$0.paintableId, 'selected', dynamicCast($toArray(command.this$0.selectedIds, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, command.this$0.selectedIds.map.size_1(), 0)), 59), command.this$0.immediate) , command.this$0.selectionHasChanged = false);
}

function $setFocusedNode(this$static, node, scrollIntoView){
  !!this$static.focusedNode && $setFocused(this$static.focusedNode, false);
  !!node && $setFocused(node, true);
  this$static.focusedNode = node;
  !!node && scrollIntoView && (this$static.rendering?$scheduleDeferred_0(($clinit_1() , INSTANCE), new VTree$5_0(this$static)):scrollIntoViewVertically(node.nodeCaptionDiv));
}

function $setSelected_1(this$static, treeNode, selected){
  var id, oldSelection, outerIter, entry;
  if (selected) {
    if (!this$static.isMultiselect) {
      while (this$static.selectedIds.map.size_1() > 0) {
        id = dynamicCast((entry = dynamicCast((outerIter = $keySet(this$static.selectedIds.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)).val$outerIter.next_0(), 58) , entry.getKey()), 1);
        oldSelection = dynamicCast(this$static.keyToNode.get_0(id), 173);
        !!oldSelection && setStyleName(oldSelection.nodeCaptionDiv, 'v-tree-node-selected', false);
        this$static.selectedIds.map.remove_4(id) != null;
      }
    }
    setStyleName(treeNode.nodeCaptionDiv, 'v-tree-node-selected', true);
    $add_14(this$static.selectedIds, treeNode.key);
  }
   else {
    if (!this$static.isNullSelectionAllowed) {
      if (!this$static.isMultiselect || this$static.selectedIds.map.size_1() == 1) {
        return;
      }
    }
    this$static.selectedIds.map.remove_4(treeNode.key) != null;
    setStyleName(treeNode.nodeCaptionDiv, 'v-tree-node-selected', false);
  }
  $sendSelectionToServer(this$static);
}

function $updateActionMap_1(this$static, c){
  var action, caption, it, key, count;
  it = new UIDL$1_0(c);
  while (count = it.this$0.length - 2 , count > it.index_0 + 1) {
    action = dynamicCastJso($next_3(it));
    key = action[1]['key'];
    caption = action[1]['caption'];
    this$static.actionMap.put(key + '_c', caption);
    'icon' in action[1]?this$static.actionMap.put(key + '_i', $translateVaadinUri(this$static.client, action[1]['icon'])):this$static.actionMap.remove_4(key + '_i');
  }
}

function $updateTreeRelatedDragData(this$static, drag){
  var detail, overTreeNode, treeNode, treeNode_0;
  this$static.currentMouseOverKey = (treeNode_0 = dynamicCast(findWidget($getElementOver(drag), Lcom_vaadin_terminal_gwt_client_ui_VTree$TreeNode_2_classLit), 173) , !treeNode_0?null:treeNode_0.key);
  drag.dropDetails.put('itemIdOver', this$static.currentMouseOverKey);
  if (this$static.currentMouseOverKey != null) {
    treeNode = dynamicCast(this$static.keyToNode.get_0(this$static.currentMouseOverKey), 173);
    detail = $getDropDetail(treeNode, drag.currentGwtEvent);
    overTreeNode = null;
    !!treeNode && !$isLeaf(treeNode) && detail == ($clinit_75() , MIDDLE) && (overTreeNode = ($clinit_95() , $clinit_95() , TRUE));
    drag.dropDetails.put('itemIdOverIsNode', overTreeNode);
    drag.dropDetails.put('detail', detail);
  }
   else {
    drag.dropDetails.put('itemIdOverIsNode', null);
    drag.dropDetails.put('detail', null);
  }
}

function VTree_0(){
  this.element_0 = $doc.createElement('div');
  this.setTabIndex(0);
  this.focusElement = $doc.createElement('div');
  this.body_0 = new FlowPanel_0;
  this.selectedIds = new HashSet_0;
  this.keyToNode = new HashMap_0;
  this.actionMap = new HashMap_0;
  this.iconLoaded = new VLazyExecutor_0(50, new VTree$1_0(this));
  this.element_0['className'] = 'v-tree';
  $add_3(this, this.body_0);
  $addDomHandler(this, this, ($clinit_18() , $clinit_18() , TYPE_4));
  $addDomHandler(this, this, ($clinit_13() , $clinit_13() , TYPE));
  this.eventsToSink == -1?sinkEvents(this.element_0, 262144 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 262144);
  $addDomHandler(this, new VTree$2_0(this), ($clinit_16() , $clinit_16() , TYPE_2));
  ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isGecko || (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isOpera?$addDomHandler(this, this, ($clinit_20() , $clinit_20() , TYPE_6)):$addDomHandler(this, this, ($clinit_19() , $clinit_19() , TYPE_5));
  this.eventsToSink == -1?sinkEvents(this.element_0, 524 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 524);
  $setTabIndex(this, 0);
}

function VTree(){
}

_ = VTree_0.prototype = VTree.prototype = new FocusElementPanel;
_.getActions = function getActions_2(){
  var a_0, actionKey, actions, i;
  if (this.bodyActionKeys == null) {
    return initValues(_3Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit, {30:1, 35:1}, 102, []);
  }
  actions = initDim(_3Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit, {30:1, 35:1}, 102, this.bodyActionKeys.length, 0);
  for (i = 0; i < actions.length; ++i) {
    actionKey = this.bodyActionKeys[i];
    a_0 = new TreeAction_0(this, null, actionKey);
    a_0.caption_0 = dynamicCast(this.actionMap.get_0(actionKey + '_c'), 1);
    a_0.iconUrl = dynamicCast(this.actionMap.get_0(actionKey + '_i'), 1);
    setCheck(actions, i, a_0);
  }
  return actions;
}
;
_.getClass$ = function getClass_762(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTree_2_classLit;
}
;
_.getClient = function getClient_2(){
  return this.client;
}
;
_.getDropHandler = function getDropHandler_1(){
  return this.dropHandler;
}
;
_.getPaintableId = function getPaintableId_2(){
  return this.paintableId;
}
;
_.getSubPartElement = function getSubPartElement_5(subPart){
  var $e0, expandCollapse, node, node$index, node$max, nodes, position, treeNode;
  if ($equals_2('fe', subPart)) {
    if (($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) || (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isOpera) && !!this.focusedNode) {
      return this.focusedNode.element_0;
    }
    return this.focusElement;
  }
  if (subPart.indexOf('n[') == 0) {
    expandCollapse = false;
    nodes = $split_0(subPart, '/', 0);
    treeNode = null;
    try {
      for (node$index = 0 , node$max = nodes.length; node$index < node$max; ++node$index) {
        node = nodes[node$index];
        if (node.indexOf('n') == 0) {
          node = node.substr(2, node.length - 2);
          node = node.substr(0, node.length - 1 - 0);
          position = __parseAndValidateInt(node);
          !treeNode?(treeNode = dynamicCast($get_4($getRootNodes(this), position), 173)):(treeNode = dynamicCast($get_3($getChildren(treeNode), position), 173));
        }
         else 
          node.indexOf('expand') == 0 && (expandCollapse = true);
      }
      return expandCollapse?treeNode.ie6compatnode?treeNode.ie6compatnode:treeNode.element_0:treeNode.nodeCaptionSpan;
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 112)) {
        return null;
      }
       else 
        throw $e0;
    }
  }
  return null;
}
;
_.getSubPartName = function getSubPartName_5(subElement){
  var i, i$iterator, isExpandCollapse, locator, positions, treeNode;
  isExpandCollapse = false;
  if (!$isOrHasChild(this.element_0, subElement)) {
    return null;
  }
  if (subElement == this.focusElement) {
    return 'fe';
  }
  treeNode = dynamicCast(findWidget(subElement, Lcom_vaadin_terminal_gwt_client_ui_VTree$TreeNode_2_classLit), 173);
  if (!treeNode) {
    return null;
  }
  (subElement == treeNode.element_0 || subElement == treeNode.ie6compatnode) && (isExpandCollapse = true);
  positions = new ArrayList_0;
  while ($getParentNode(treeNode)) {
    $add_13(positions, 0, valueOf($indexOf_0($getChildren($getParentNode(treeNode)), treeNode)));
    treeNode = $getParentNode(treeNode);
  }
  $add_13(positions, 0, valueOf($indexOf_1($getRootNodes(this), treeNode, 0)));
  locator = '';
  for (i$iterator = new AbstractList$IteratorImpl_0(positions); i$iterator.i < i$iterator.this$0_0.size_1();) {
    i = dynamicCast($next_5(i$iterator), 108);
    locator += 'n[' + i + ']/';
  }
  locator = locator.substr(0, locator.length - 1 - 0);
  isExpandCollapse && (locator += '/expand');
  return locator;
}
;
_.onBlur = function onBlur_11(event_0){
  this.treeHasFocus = false;
  !!this.focusedNode && $setFocused(this.focusedNode, false);
}
;
_.onBrowserEvent = function onBrowserEvent_45(event_0){
  $onBrowserEvent(this, event_0);
  if ($eventGetTypeInt(event_0.type) == 4) {
    ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && (event_0.target['onselectstart'] = $applyDisableTextSelectionIEHack() , undefined);
  }
   else if ($eventGetTypeInt(event_0.type) == 8) {
    ($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).browserDetails.isIE && (event_0.target['onselectstart'] = null , undefined);
  }
   else if ($eventGetTypeInt(event_0.type) == 512) {
    if (this.selectionHasChanged) {
      if ((event_0.keyCode || 0) == 40 && !event_0.shiftKey) {
        $sendSelectionToServer(this);
        event_0.preventDefault();
      }
       else if ((event_0.keyCode || 0) == 38 && !event_0.shiftKey) {
        $sendSelectionToServer(this);
        event_0.preventDefault();
      }
       else if ((event_0.keyCode || 0) == 16) {
        $sendSelectionToServer(this);
        event_0.preventDefault();
      }
       else if ((event_0.keyCode || 0) == 32) {
        $sendSelectionToServer(this);
        event_0.preventDefault();
      }
    }
  }
}
;
_.onFocus = function onFocus_11(event_0){
  this.treeHasFocus = true;
  !this.focusedNode && !this.lastSelection && this.selectable?$setFocusedNode(this, $getFirstRootNode(this), false):!!this.focusedNode && this.selectable?$setFocusedNode(this, this.focusedNode, false):!!this.lastSelection && this.selectable && $setFocusedNode(this, this.lastSelection, false);
}
;
_.onKeyDown = function onKeyDown_7(event_0){
  if ($handleKeyNavigation(this, event_0.nativeEvent.keyCode || 0, !!event_0.nativeEvent.ctrlKey || !!event_0.nativeEvent.metaKey, !!event_0.nativeEvent.shiftKey)) {
    event_0.nativeEvent.preventDefault();
    event_0.nativeEvent.stopPropagation();
  }
}
;
_.onKeyPress = function onKeyPress_3(event_0){
  var keyCode, nativeEvent;
  nativeEvent = event_0.nativeEvent;
  keyCode = nativeEvent.keyCode || 0;
  keyCode == 0 && (nativeEvent.charCode || 0) == 32 && (keyCode = 32);
  if ($handleKeyNavigation(this, keyCode, !!event_0.nativeEvent.ctrlKey || !!event_0.nativeEvent.metaKey, !!event_0.nativeEvent.shiftKey)) {
    event_0.nativeEvent.preventDefault();
    event_0.nativeEvent.stopPropagation();
  }
}
;
_.updateFromUIDL = function updateFromUIDL_50(uidl, client){
  var childTree, childUidl, i, leaf, selectMode, count, outerIter, entry;
  if ($updateComponent(client, this, uidl, true)) {
    return;
  }
  this.rendering = true;
  this.client = client;
  if ('partialUpdate' in uidl[1]) {
    $handleUpdate(this, uidl);
    this.rendering = false;
    return;
  }
  this.paintableId = uidl[1]['id'];
  this.immediate = 'immediate' in uidl[1];
  this.disabled_0 = Boolean(uidl[1]['disabled']);
  this.readonly = Boolean(uidl[1]['readonly']);
  this.dragMode = 'dragMode' in uidl[1]?uidl[1]['dragMode']:0;
  this.isNullSelectionAllowed = Boolean(uidl[1]['nullselect']);
  'alb' in uidl[1] && (this.bodyActionKeys = $getStringArray(uidl[1], 'alb'));
  $clear_2(this.body_0);
  this.keyToNode.clear_0();
  childTree = null;
  childUidl = null;
  for (i = new UIDL$1_0(uidl); count = i.this$0.length - 2 , count > i.index_0 + 1;) {
    childUidl = dynamicCastJso($next_3(i));
    if ($equals_2('actions', childUidl[0])) {
      $updateActionMap_1(this, childUidl);
      continue;
    }
     else if ($equals_2('-ac', childUidl[0])) {
      !this.dropHandler && (this.dropHandler = new VTree$3_0(this));
      $updateAcceptRules(this.dropHandler, childUidl);
      continue;
    }
    childTree = new VTree$TreeNode_0(this);
    !!childTree.ie6compatnode && $add_4(this.body_0, childTree);
    $updateFromUIDL_21(childTree, childUidl, client);
    !childTree.ie6compatnode && $add_4(this.body_0, childTree);
    $setStyleName(childTree, getStylePrimaryName(childTree.getStyleElement()) + '-root', true);
    $addStyleDependentName(childTree.childNodeContainer, 'root');
  }
  if (!!childTree && !!childUidl) {
    leaf = !$equals_2(childUidl[0], 'node');
    $setStyleName(childTree, getStylePrimaryName(childTree.getStyleElement()) + '-' + (leaf?'leaf-last':'last'), true);
    $addStyleDependentName(childTree.childNodeContainer, 'last');
  }
  selectMode = uidl[1]['selectmode'];
  this.selectable = !$equals_2('none', selectMode);
  this.isMultiselect = $equals_2('multi', selectMode);
  this.isMultiselect && (($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40).touchDevice?(this.multiSelectMode = 1):(this.multiSelectMode = uidl[1]['multiselectmode']));
  this.selectedIds = $getStringArrayVariableAsSet(uidl, 'selected');
  !!this.lastSelection && (this.lastSelection = dynamicCast(this.keyToNode.get_0(this.lastSelection.key), 173));
  !!this.focusedNode && $setFocusedNode(this, dynamicCast(this.keyToNode.get_0(this.focusedNode.key), 173), true);
  if (!this.lastSelection && !this.focusedNode && this.selectedIds.map.size_1() != 0) {
    $setFocusedNode(this, dynamicCast(this.keyToNode.get_0((entry = dynamicCast((outerIter = $keySet(this.selectedIds.map).val$entrySet.iterator_0() , new AbstractMap$1$1_0(outerIter)).val$outerIter.next_0(), 58) , entry.getKey())), 173), true);
    $setFocused(this.focusedNode, false);
  }
  this.rendering = false;
}
;
_.castableTypeMap$ = {5:1, 6:1, 7:1, 10:1, 12:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 25:1, 26:1, 27:1, 33:1, 43:1, 69:1, 70:1, 75:1, 76:1, 128:1, 131:1, 132:1, 180:1, 181:1};
_.bodyActionKeys = null;
_.client = null;
_.currentMouseOverKey = null;
_.disabled_0 = false;
_.dragMode = 0;
_.dropHandler = null;
_.focusedNode = null;
_.immediate = false;
_.isMultiselect = false;
_.isNullSelectionAllowed = true;
_.lastSelection = null;
_.multiSelectMode = 0;
_.paintableId = null;
_.readonly = false;
_.rendering = false;
_.selectable = false;
_.selectionHasChanged = false;
_.treeHasFocus = false;
function VTree$1_0(this$0){
  this.this$0 = this$0;
}

function VTree$1(){
}

_ = VTree$1_0.prototype = VTree$1.prototype = new Object_0;
_.execute_0 = function execute_64(){
  notifyParentOfSizeChange(this.this$0, true);
}
;
_.getClass$ = function getClass_763(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTree$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$0 = null;
function VTree$2_0(this$0){
  this.this$0 = this$0;
}

function VTree$2(){
}

_ = VTree$2_0.prototype = VTree$2.prototype = new Object_0;
_.getClass$ = function getClass_764(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTree$2_2_classLit;
}
;
_.onContextMenu = function onContextMenu_2(event_0){
  $handleBodyContextMenu_0(this.this$0, event_0);
}
;
_.castableTypeMap$ = {12:1, 40:1};
_.this$0 = null;
function $cleanUp(this$static){
  if (this$static.this$0.currentMouseOverKey != null) {
    $emphasis_1(dynamicCast(this$static.this$0.keyToNode.get_0(this$static.this$0.currentMouseOverKey), 173), null);
    this$static.this$0.currentMouseOverKey = null;
  }
}

function VTree$3_0(this$0){
  this.this$0 = this$0;
  this.acceptCriteria = new VAcceptAll_0;
}

function VTree$3(){
}

_ = VTree$3_0.prototype = VTree$3.prototype = new VAbstractDropHandler;
_.dragAccepted = function dragAccepted_1(drag){
}
;
_.dragEnter = function dragEnter_2(drag){
}
;
_.dragLeave = function dragLeave_2(drag){
  $cleanUp(this);
}
;
_.dragOver = function dragOver_2(currentDrag){
  var detail, detailHasChanded, newKey, nodeHasChanged, oldDetail, oldIdOver, treeNode;
  oldIdOver = currentDrag.dropDetails.get_0('itemIdOver');
  oldDetail = dynamicCast(currentDrag.dropDetails.get_0('detail'), 105);
  $updateTreeRelatedDragData(this.this$0, currentDrag);
  detail = dynamicCast(currentDrag.dropDetails.get_0('detail'), 105);
  nodeHasChanged = this.this$0.currentMouseOverKey != null && maskUndefined(this.this$0.currentMouseOverKey) !== (oldIdOver == null?null:oldIdOver) || this.this$0.currentMouseOverKey == null && oldIdOver != null;
  detailHasChanded = !!detail && detail != oldDetail || !detail && !!oldDetail;
  if (nodeHasChanged || detailHasChanded) {
    newKey = this.this$0.currentMouseOverKey;
    treeNode = dynamicCast(this.this$0.keyToNode.get_0(oldIdOver), 173);
    !!treeNode && $emphasis_1(treeNode, null);
    newKey != null && $validate(this, new VTree$3$1_0(this, detail, newKey), currentDrag);
  }
}
;
_.drop = function drop_3(drag){
  $cleanUp(this);
  return $drop(this, drag);
}
;
_.getApplicationConnection = function getApplicationConnection_1(){
  return this.this$0.client;
}
;
_.getClass$ = function getClass_765(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTree$3_2_classLit;
}
;
_.getPaintable = function getPaintable_1(){
  return this.this$0;
}
;
_.castableTypeMap$ = {};
_.this$0 = null;
function VTree$3$1_0(this$1, val$detail, val$newKey){
  this.this$1 = this$1;
  this.val$detail = val$detail;
  this.val$newKey = val$newKey;
}

function VTree$3$1(){
}

_ = VTree$3$1_0.prototype = VTree$3$1.prototype = new Object_0;
_.accepted_0 = function accepted_2(event_0){
  var curDetail;
  curDetail = dynamicCast(event_0.dropDetails.get_0('detail'), 105);
  curDetail == this.val$detail && $equals_2(this.val$newKey, this.this$1.this$0.currentMouseOverKey) && $emphasis_1(dynamicCast(this.this$1.this$0.keyToNode.get_0(this.val$newKey), 173), this.val$detail);
}
;
_.getClass$ = function getClass_766(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTree$3$1_2_classLit;
}
;
_.castableTypeMap$ = {};
_.this$1 = null;
_.val$detail = null;
_.val$newKey = null;
function VTree$4_0(this$0){
  this.this$0 = this$0;
}

function VTree$4(){
}

_ = VTree$4_0.prototype = VTree$4.prototype = new Object_0;
_.execute_0 = function execute_65(){
  $updateVariable_2(this.this$0.client, this.this$0.paintableId, 'selected', dynamicCast($toArray(this.this$0.selectedIds, initDim(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, this.this$0.selectedIds.map.size_1(), 0)), 59), this.this$0.immediate);
  this.this$0.selectionHasChanged = false;
}
;
_.getClass$ = function getClass_767(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTree$4_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function VTree$5_0(this$0){
  this.this$0 = this$0;
}

function VTree$5(){
}

_ = VTree$5_0.prototype = VTree$5.prototype = new Object_0;
_.execute_0 = function execute_66(){
  scrollIntoViewVertically(this.this$0.focusedNode.nodeCaptionDiv);
}
;
_.getClass$ = function getClass_768(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTree$5_2_classLit;
}
;
_.castableTypeMap$ = {3:1, 14:1};
_.this$0 = null;
function $constructDom(this$static){
  var wrapper;
  setStyleName(this$static.element_0, 'v-tree-node', true);
  if ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40))) {
    this$static.ie6compatnode = $doc.createElement('div');
    this$static.ie6compatnode['className'] = 'v-tree-node-ie6compatnode';
    this$static.ie6compatnode.textContent = ' ';
    this$static.element_0.appendChild(this$static.ie6compatnode);
    sinkEvents(this$static.ie6compatnode, 1);
  }
  this$static.nodeCaptionDiv = $doc.createElement('div');
  this$static.nodeCaptionDiv['className'] = 'v-tree-node-caption';
  wrapper = $doc.createElement('div');
  this$static.nodeCaptionSpan = $doc.createElement('span');
  sinkEvents(this$static.nodeCaptionSpan, 241);
  this$static.element_0.appendChild(this$static.nodeCaptionDiv);
  this$static.nodeCaptionDiv.appendChild(wrapper);
  wrapper.appendChild(this$static.nodeCaptionSpan);
  ($isIE6((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40)) || (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isOpera) && (this$static.nodeCaptionDiv.tabIndex = -1 , undefined);
  this$static.childNodeContainer = new FlowPanel_0;
  this$static.childNodeContainer.setStyleName('v-tree-node-children');
  $setWidget(this$static, this$static.childNodeContainer);
}

function $emphasis_1(this$static, detail){
  var folder, parentFolder;
  setStyleName(this$static.element_0, 'v-tree-node-drag-top', ($clinit_75() , TOP) == detail);
  setStyleName(this$static.element_0, 'v-tree-node-drag-bottom', BOTTOM == detail);
  setStyleName(this$static.element_0, 'v-tree-node-drag-center', MIDDLE == detail);
  setStyleName(this$static.nodeCaptionDiv, 'v-tree-node-caption-drag-top', TOP == detail);
  setStyleName(this$static.nodeCaptionDiv, 'v-tree-node-caption-drag-bottom', BOTTOM == detail);
  setStyleName(this$static.nodeCaptionDiv, 'v-tree-node-caption-drag-center', MIDDLE == detail);
  parentFolder = $getParentNode(this$static);
  if ($isLeaf(this$static)) {
    folder = parentFolder;
  }
   else {
    detail == TOP?(folder = parentFolder):(folder = this$static);
    $setDragFolderStyleName(this$static, false);
    $setDragFolderStyleName(parentFolder, false);
  }
  !!folder && $setDragFolderStyleName(folder, !!detail);
}

function $fixWidth(this$static){
  var captionWidth;
  this$static.nodeCaptionDiv.style['styleFloat'] = 'left';
  this$static.nodeCaptionDiv.style['display'] = 'inline';
  this$static.nodeCaptionDiv.style['marginLeft'] = '0';
  captionWidth = (this$static.ie6compatnode.offsetWidth || 0) + (this$static.nodeCaptionDiv.offsetWidth || 0);
  this$static.element_0.style['width'] = captionWidth + 'px';
}

function $getChildren(this$static){
  var iter, node, nodes;
  nodes = new LinkedList_0;
  if (!$isLeaf(this$static) && this$static.childrenLoaded) {
    iter = new WidgetCollection$WidgetIterator_0(this$static.childNodeContainer.children_0);
    while (iter.index_0 < iter.this$0.size_0 - 1) {
      node = dynamicCast($next_2(iter), 173);
      new LinkedList$Node_1(node, nodes.header);
      ++nodes.size_0;
    }
  }
  return nodes;
}

function $getDropDetail(this$static, currentGwtEvent){
  var verticalDropLocation;
  this$static.cachedHeight < 0 && (this$static.cachedHeight = this$static.nodeCaptionDiv.offsetHeight || 0);
  verticalDropLocation = getVerticalDropLocation_0(this$static.nodeCaptionDiv, this$static.cachedHeight, currentGwtEvent, 0.15);
  return verticalDropLocation;
}

function $getParentNode(this$static){
  var parent2;
  parent2 = this$static.parent_0.getParent();
  if (parent2 != null && parent2.castableTypeMap$ && !!parent2.castableTypeMap$[173]) {
    return dynamicCast(parent2, 173);
  }
  return null;
}

function $handleClickSelection(this$static, ctrl, shift){
  var command;
  $setFocusedNode(this$static.this$0, this$static, false);
  $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) || (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isOpera || this$static.this$0.setFocus(true);
  command = new VTree$TreeNode$1_0(this$static, ctrl, shift);
  (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isWebKit && !this$static.this$0.treeHasFocus?$scheduleDeferred_0(($clinit_1() , INSTANCE), command):$execute_1(command);
  return true;
}

function $isGrandParentOf(this$static, child){
  var currentNode, isGrandParent;
  currentNode = child;
  isGrandParent = false;
  while (currentNode) {
    currentNode = $getParentNode(currentNode);
    if (currentNode == this$static) {
      isGrandParent = true;
      break;
    }
  }
  return isGrandParent;
}

function $isLeaf(this$static){
  var styleName, styleName$index, styleName$max, styleNames;
  styleNames = $split_0($getPropertyString(this$static.element_0, 'className'), ' ', 0);
  for (styleName$index = 0 , styleName$max = styleNames.length; styleName$index < styleName$max; ++styleName$index) {
    styleName = styleNames[styleName$index];
    if ($equals_2(styleName, 'v-tree-node-leaf')) {
      return true;
    }
  }
  return false;
}

function $isSelected(this$static){
  return this$static.this$0.selectedIds.map.containsKey(this$static.key);
}

function $renderChildNodes(this$static, i){
  var childTree, childUidl, count, count_0;
  $clear_2(this$static.childNodeContainer);
  this$static.childNodeContainer.setVisible(true);
  while (count = i.this$0.length - 2 , count > i.index_0 + 1) {
    childUidl = dynamicCastJso($next_3(i));
    if ($equals_2('actions', childUidl[0])) {
      $updateActionMap_1(this$static.this$0, childUidl);
      continue;
    }
    childTree = new VTree$TreeNode_0(this$static.this$0);
    !!this$static.ie6compatnode && $add_4(this$static.childNodeContainer, childTree);
    $updateFromUIDL_21(childTree, childUidl, this$static.this$0.client);
    !this$static.ie6compatnode && $add_4(this$static.childNodeContainer, childTree);
    if (!(count_0 = i.this$0.length - 2 , count_0 > i.index_0 + 1)) {
      $addStyleDependentName(childTree, $isLeaf(childTree)?'leaf-last':'last');
      $addStyleDependentName(childTree.childNodeContainer, 'last');
    }
  }
  this$static.childrenLoaded = true;
}

function $setDragFolderStyleName(folder, add){
  if (folder) {
    setStyleName(folder.element_0, 'v-tree-node-dragfolder', add);
    setStyleName(folder.nodeCaptionDiv, 'v-tree-node-caption-dragfolder', add);
  }
}

function $setFocused(this$static, focused){
  if (!this$static.focused && focused) {
    $addClassName(this$static.nodeCaptionDiv, 'v-tree-node-focused');
    $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $addClassName(this$static.ie6compatnode, 'v-tree-node-focused');
    this$static.focused = true;
    ($isIE6((!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40)) || (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isOpera) && (this$static.nodeCaptionDiv.focus() , undefined);
    this$static.this$0.treeHasFocus = true;
  }
   else if (this$static.focused && !focused) {
    $removeClassName(this$static.nodeCaptionDiv, 'v-tree-node-focused');
    $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $removeClassName(this$static.ie6compatnode, 'v-tree-node-focused');
    this$static.focused = focused;
    this$static.this$0.treeHasFocus = false;
  }
}

function $setState_0(this$static, state, notifyServer){
  if (this$static.open_0 == state) {
    return;
  }
  if (state) {
    !this$static.childrenLoaded && notifyServer && $addVariableToQueue(this$static.this$0.client, this$static.this$0.paintableId, 'requestChildTree', 'true', false, 98);
    notifyServer && $updateVariable_2(this$static.this$0.client, this$static.this$0.paintableId, 'expand', initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, [this$static.key]), true);
    setStyleName(this$static.element_0, 'v-tree-node-expanded', true);
    this$static.childNodeContainer.setVisible(true);
  }
   else {
    setStyleName(this$static.element_0, 'v-tree-node-expanded', false);
    this$static.childNodeContainer.setVisible(false);
    notifyServer && $updateVariable_2(this$static.this$0.client, this$static.this$0.paintableId, 'collapse', initValues(_3Ljava_lang_String_2_classLit, {30:1, 35:1, 59:1}, 1, [this$static.key]), true);
  }
  this$static.open_0 = state;
  this$static.this$0.rendering || notifyParentOfSizeChange(this$static.this$0, false);
}

function $showContextMenu_0(this$static, event_0){
  var left, top_0;
  if (!this$static.this$0.readonly && !this$static.this$0.disabled_0) {
    if (this$static.actionKeys != null) {
      left = event_0.clientX || 0;
      top_0 = event_0.clientY || 0;
      top_0 += $doc.body.scrollTop || 0;
      left += $getScrollLeft($doc.body);
      $showAt_0($getContextMenu(this$static.this$0.client), this$static, left, top_0);
    }
    event_0.stopPropagation();
    event_0.preventDefault();
  }
}

function $toggleSelection_0(this$static){
  this$static.this$0.selectable && $setSelected_1(this$static.this$0, this$static, !this$static.this$0.selectedIds.map.containsKey(this$static.key));
}

function $updateFromUIDL_21(this$static, uidl, client){
  var description, info;
  this$static.nodeCaptionSpan.textContent = uidl[1]['caption'] || '';
  this$static.key = uidl[1]['key'];
  this$static.this$0.keyToNode.put(this$static.key, this$static);
  'al' in uidl[1] && (this$static.actionKeys = $getStringArray(uidl[1], 'al'));
  if ($equals_2(uidl[0], 'node')) {
    if (uidl.length - 2 == 0) {
      this$static.childNodeContainer.setVisible(false);
    }
     else {
      $renderChildNodes(this$static, new UIDL$1_0(uidl));
      this$static.childrenLoaded = true;
    }
  }
   else {
    setStyleName(this$static.element_0, 'v-tree-node-leaf', true);
  }
  if ('style' in uidl[1]) {
    setStyleName(this$static.getStyleElement(), 'v-tree-node-' + uidl[1]['style'], true);
    setStyleName(this$static.nodeCaptionDiv, 'v-tree-node-caption-' + uidl[1]['style'], true);
    $addStyleName(this$static.childNodeContainer, 'v-tree-node-children-' + uidl[1]['style']);
  }
  description = uidl[1]['descr'];
  if (description != null && !!client) {
    info = new TooltipInfo_1(description);
    $registerTooltip(client, this$static.this$0, this$static.key, info);
  }
   else {
    $registerTooltip(client, this$static.this$0, this$static.key, null);
  }
  Boolean(uidl[1]['expanded']) && !this$static.open_0 && $setState_0(this$static, true, false);
  if (Boolean(uidl[1]['selected'])) {
    setStyleName(this$static.nodeCaptionDiv, 'v-tree-node-selected', true);
    $add_14(this$static.this$0.selectedIds, this$static.key);
  }
  if ('icon' in uidl[1]) {
    if (!this$static.icon) {
      this$static.onloadHandled = false;
      this$static.icon = new Icon_0(client);
      $getFirstChildElement(this$static.nodeCaptionDiv).insertBefore(this$static.icon.element_0, this$static.nodeCaptionSpan);
    }
    $setUri(this$static.icon, uidl[1]['icon']);
  }
   else {
    if (this$static.icon) {
      $getFirstChildElement(this$static.nodeCaptionDiv).removeChild(this$static.icon.element_0);
      this$static.icon = null;
    }
  }
  $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && this$static.attached && $fixWidth(this$static);
}

function VTree$TreeNode_0(this$0){
  this.this$0 = this$0;
  this.element_0 = $doc.createElement('div');
  $constructDom(this);
  this.eventsToSink == -1?sinkEvents(this.element_0, 15990911 | (this.element_0.__eventBits || 0)):(this.eventsToSink |= 15990911);
}

function VTree$TreeNode(){
}

_ = VTree$TreeNode_0.prototype = VTree$TreeNode.prototype = new SimplePanel;
_.getActions = function getActions_3(){
  var a_0, actionKey, actions, i;
  if (this.actionKeys == null) {
    return initValues(_3Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit, {30:1, 35:1}, 102, []);
  }
  actions = initDim(_3Lcom_vaadin_terminal_gwt_client_ui_Action_2_classLit, {30:1, 35:1}, 102, this.actionKeys.length, 0);
  for (i = 0; i < actions.length; ++i) {
    actionKey = this.actionKeys[i];
    a_0 = new TreeAction_0(this, '' + this.key, actionKey);
    a_0.caption_0 = dynamicCast(this.this$0.actionMap.get_0(actionKey + '_c'), 1);
    a_0.iconUrl = dynamicCast(this.this$0.actionMap.get_0(actionKey + '_i'), 1);
    setCheck(actions, i, a_0);
  }
  return actions;
}
;
_.getClass$ = function getClass_769(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTree$TreeNode_2_classLit;
}
;
_.getClient = function getClient_3(){
  return this.this$0.client;
}
;
_.getPaintableId = function getPaintableId_3(){
  return this.this$0.paintableId;
}
;
_.onAttach = function onAttach_12(){
  $onAttach(this);
  !!this.ie6compatnode && $fixWidth(this);
}
;
_.onBrowserEvent = function onBrowserEvent_46(event_0){
  var drag, inCaption, t, target, type, command, details;
  $onBrowserEvent(this, event_0);
  type = $eventGetTypeInt(event_0.type);
  target = event_0.target;
  if (type == 32768 && target == this.icon.element_0) {
    if (this.onloadHandled) {
      return;
    }
    $isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) && $fixWidth(this);
    $trigger_0(this.this$0.iconLoaded);
    this.onloadHandled = true;
  }
  if (this.this$0.disabled_0) {
    return;
  }
  target == this.nodeCaptionSpan && ($handleTooltipEvent(this.this$0.client.tooltip, event_0, this.this$0, this.key) , undefined);
  inCaption = target == this.nodeCaptionSpan || !!this.icon && target == this.icon.element_0;
  inCaption && $hasEventListeners_0(this.this$0.client.idToPaintableDetail[dynamicCast(this.this$0, 70).element_0.tkPid], 'itemClick') && (type == 2 || type == 8) && (this.this$0.treeHasFocus || ($isIE6(($clinit_64() , !instance_40 && (instance_40 = new BrowserInfo_0) , $clinit_64() , instance_40)) || (!instance_40 && (instance_40 = new BrowserInfo_0) , instance_40).browserDetails.isOpera?!this.this$0.focusedNode?$setFocused(dynamicCast(this.this$0.keyToNode.get_0(this.key), 173), true):$setFocused(this.this$0.focusedNode, true):this.this$0.setFocus(true)) , details = new MouseEventDetails_0(event_0) , command = new VTree$TreeNode$2_0(this, details) , this.this$0.treeHasFocus?$execute_2(command):$scheduleDeferred_0(($clinit_1() , INSTANCE), command) , undefined);
  if (type == 1) {
    this.element_0 == target || this.ie6compatnode == target?$setState_0(this, !this.open_0, true):!this.this$0.readonly && inCaption && (this.this$0.selectable?$handleClickSelection(this, !!event_0.ctrlKey || !!event_0.metaKey, !!event_0.shiftKey) && (event_0.preventDefault() , undefined):$setFocusedNode(this.this$0, this, true));
    event_0.stopPropagation();
  }
   else 
    type == 262144 && $showContextMenu_0(this, event_0);
  if (this.this$0.dragMode != 0 || !!this.this$0.dropHandler) {
    if (type == 4 || type == 1048576) {
      if ($isOrHasChild(this.nodeCaptionDiv, event_0.target)) {
        if (this.this$0.dragMode > 0 && (type == 1048576 || $eventGetButton(event_0) == 1)) {
          this.mouseDownEvent = event_0;
          type == 4?(event_0.preventDefault() , undefined):(event_0.stopPropagation() , undefined);
        }
      }
    }
     else if (type == 64 || type == 32 || type == 2097152) {
      if (this.mouseDownEvent) {
        t = new VTransferable_0;
        t.component = this.this$0;
        t.variables.put('itemId', this.key);
        drag = $startDrag_0((!instance_41 && (instance_41 = new VDragAndDropManager_0) , instance_41), t, this.mouseDownEvent, true);
        $createDragImage(drag, this.nodeCaptionDiv);
        event_0.stopPropagation();
        this.mouseDownEvent = null;
      }
    }
     else 
      type == 8 && (this.mouseDownEvent = null);
    if (type == 16) {
      this.mouseDownEvent = null;
      this.this$0.currentMouseOverKey = this.key;
      event_0.stopPropagation();
    }
  }
   else 
    type == 4 && $eventGetButton(event_0) == 1 && (event_0.preventDefault() , undefined);
}
;
_.onDetach = function onDetach_18(){
  $onDetach(this);
  $ensureHidden($getContextMenu(this.this$0.client), this);
}
;
_.toString$ = function toString_16(){
  return this.nodeCaptionSpan.textContent;
}
;
_.castableTypeMap$ = {10:1, 13:1, 15:1, 17:1, 19:1, 20:1, 21:1, 22:1, 27:1, 33:1, 69:1, 70:1, 75:1, 76:1, 173:1};
_.actionKeys = null;
_.cachedHeight = -1;
_.childNodeContainer = null;
_.childrenLoaded = false;
_.focused = false;
_.icon = null;
_.ie6compatnode = null;
_.key = null;
_.mouseDownEvent = null;
_.nodeCaptionDiv = null;
_.nodeCaptionSpan = null;
_.onloadHandled = false;
_.open_0 = false;
_.this$0 = null;
function $execute_1(this$static){
  if (this$static.this$1.this$0.multiSelectMode == 1 || !this$static.this$1.this$0.isMultiselect) {
    $toggleSelection_0(this$static.this$1);
    this$static.this$1.this$0.lastSelection = this$static.this$1;
  }
   else if (this$static.this$1.this$0.multiSelectMode == 0) {
    if (this$static.this$1.this$0.isMultiselect && this$static.val$ctrl && !this$static.val$shift) {
      $toggleSelection_0(this$static.this$1);
      this$static.this$1.this$0.lastSelection = this$static.this$1;
    }
     else if (this$static.this$1.this$0.isMultiselect && !this$static.val$ctrl && this$static.val$shift) {
      $deselectAll_0(this$static.this$1.this$0);
      $selectNodeRange(this$static.this$1.this$0, this$static.this$1.this$0.lastSelection.key, this$static.this$1.key);
      $sendSelectionToServer(this$static.this$1.this$0);
    }
     else if (this$static.this$1.this$0.isMultiselect && this$static.val$ctrl && this$static.val$shift) {
      $selectNodeRange(this$static.this$1.this$0, this$static.this$1.this$0.lastSelection.key, this$static.this$1.key);
    }
     else {
      $deselectAll_0(this$static.this$1.this$0);
      $toggleSelection_0(this$static.this$1);
      this$static.this$1.this$0.lastSelection = this$static.this$1;
    }
  }
}

function VTree$TreeNode$1_0(this$1, val$ctrl, val$shift){
  this.this$1 = this$1;
  this.val$ctrl = val$ctrl;
  this.val$shift = val$shift;
}

function VTree$TreeNode$1(){
}

_ = VTree$TreeNode$1_0.prototype = VTree$TreeNode$1.prototype = new Object_0;
_.execute_0 = function execute_67(){
  $execute_1(this);
}
;
_.getClass$ = function getClass_770(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTree$TreeNode$1_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$1 = null;
_.val$ctrl = false;
_.val$shift = false;
function $execute_2(this$static){
  var sendClickEventNow;
  sendClickEventNow = true;
  if (this$static.val$details.button_0 == 1 && this$static.this$1.this$0.immediate && this$static.this$1.this$0.selectable) {
    sendClickEventNow = false;
    $isSelected(this$static.this$1) && this$static.this$1.this$0.selectedIds.map.size_1() == 1 && !this$static.this$1.this$0.isNullSelectionAllowed && (sendClickEventNow = true);
  }
  $addVariableToQueue(this$static.this$1.this$0.client, this$static.this$1.this$0.paintableId, 'clickedKey', $escapeVariableValue(this$static.this$1.key), false, 115);
  $updateVariable_0(this$static.this$1.this$0.client, this$static.this$1.this$0.paintableId, 'clickEvent', $toString(this$static.val$details), sendClickEventNow);
}

function VTree$TreeNode$2_0(this$1, val$details){
  this.this$1 = this$1;
  this.val$details = val$details;
}

function VTree$TreeNode$2(){
}

_ = VTree$TreeNode$2_0.prototype = VTree$TreeNode$2.prototype = new Object_0;
_.execute_0 = function execute_68(){
  $execute_2(this);
}
;
_.getClass$ = function getClass_771(){
  return Lcom_vaadin_terminal_gwt_client_ui_VTree$TreeNode$2_2_classLit;
}
;
_.castableTypeMap$ = {3:1};
_.this$1 = null;
_.val$details = null;
_ = AbstractList.prototype;
_.indexOf_0 = function indexOf_0(toFind){
  return $indexOf_0(this, toFind);
}
;
_ = ArrayList.prototype;
_.indexOf_0 = function indexOf_1(o){
  return $indexOf_1(this, o, 0);
}
;
_ = Vector.prototype;
_.indexOf_0 = function indexOf_2(elem){
  return $indexOf_1(this.arrayList, elem, 0);
}
;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader17_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader17'), Lcom_vaadin_terminal_gwt_client_ui_FocusElementPanel_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'FocusElementPanel'), Lcom_vaadin_terminal_gwt_client_WidgetMapImpl$24$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.', 'WidgetMapImpl$24$1'), Lcom_vaadin_terminal_gwt_client_ui_VTree$TreeNode_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTree$TreeNode'), Lcom_vaadin_terminal_gwt_client_ui_VTree$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTree$1'), Lcom_vaadin_terminal_gwt_client_ui_VTree$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTree$2'), Lcom_vaadin_terminal_gwt_client_ui_VTree$3_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTree$3'), Lcom_vaadin_terminal_gwt_client_ui_VTree$3$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTree$3$1'), Lcom_vaadin_terminal_gwt_client_ui_VTree$4_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTree$4'), Lcom_vaadin_terminal_gwt_client_ui_VTree$5_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTree$5'), Lcom_vaadin_terminal_gwt_client_ui_VTree$TreeNode$1_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTree$TreeNode$1'), Lcom_vaadin_terminal_gwt_client_ui_VTree$TreeNode$2_2_classLit = createForClass('com.vaadin.terminal.gwt.client.ui.', 'VTree$TreeNode$2');
$entry(onLoad_7)();
