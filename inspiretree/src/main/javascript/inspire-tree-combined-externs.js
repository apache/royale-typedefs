/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */
// This file is in Google Closure Compiler Externs format which is a non-copyrightable
/**
 * @fileoverview Combined externs for Inspire Tree and Inspire Tree DOM libraries.
 * @externs
 */

/******************************************************************************
 * Inspire Tree Core Externs
 ******************************************************************************/

/**
 * @typedef {function(TreeNode): *}
 */
var NodeIteratee;

/**
 * @typedef {function(TreeNodes): *}
 */
var MatchProcessor;

/**
 * @typedef {function(string, *, *): *}
 */
var SearchMatcher;

/**
 * @typedef {function(...*): void}
 */
var Listener;

/**
 * @typedef {function(string|Array<string>, ...*): void}
 */
var EventAndListener;

/**
 * @constructor
 */
function EventEmitter2() {}

/**
 * @typedef {Array<NodeConfig>}
 */
var NodeConfigs;

/**
 * @typedef {Promise<NodeConfigs|undefined>}
 */
var NodeConfigsPromise;

/**
 * @typedef {function(TreeNode|null): (NodeConfigs|NodeConfigsPromise)}
 */
var NodeConfigsFunctionResolver;

/**
 * @typedef {function(TreeNode|null, function(Array<NodeConfig>), function(Error)): void}
 */
var NodeConfigsResolver;

/**
 * @typedef {(NodeConfigs|NodeConfigsPromise|NodeConfigsFunctionResolver|NodeConfigsResolver)}
 */
var NodeConfigsProvider;

/**
 * @typedef {{
 *   allowLoadEvents: (Array<string>|undefined),
 *   cancelEditOnBlur: (boolean|undefined),
 *   contextMenu: (boolean|undefined),
 *   data: NodeConfigsProvider,
 *   deferredLoading: (boolean|undefined),
 *   editable: (boolean|undefined),
 *   editing: ({
 *     add: (boolean|undefined),
 *     edit: (boolean|undefined),
 *     remove: (boolean|undefined)
 *   }|undefined),
 *   nodes: ({
 *     resetStateOnRestore: (boolean|undefined)
 *   }|undefined),
 *   pagination: ({
 *     limit: (number|undefined)
 *   }|undefined),
 *   renderer: (*|undefined),
 *   search: ({
 *     matcher: SearchMatcher,
 *     matchProcess: MatchProcessor
 *   }|undefined),
 *   selection: ({
 *     allow: (NodeIteratee|undefined),
 *     autoDeselect: (boolean|undefined),
 *     autoSelectChildren: (boolean|undefined),
 *     disableDirectDeselection: (boolean|undefined),
 *     mode: (string|undefined),
 *     multiple: (boolean|undefined),
 *     require: (boolean|undefined)
 *   }|undefined),
 *   sort: (string|undefined)
 * }}
 */
var Config;

/**
 * @typedef {{
 *   children: (Array<NodeConfig>|boolean|undefined),
 *   id: (string|undefined),
 *   text: string,
 *   itree: ({
 *     a: ({
 *       attributes: (*|undefined)
 *     }|undefined),
 *     icon: (string|undefined),
 *     li: ({
 *       attributes: (*|undefined)
 *     }|undefined),
 *     state: ({
 *       checked: (boolean|undefined),
 *       collapsed: (boolean|undefined),
 *       draggable: (boolean|undefined),
 *       'drop-target': (boolean|undefined),
 *       editable: (boolean|undefined),
 *       focused: (boolean|undefined),
 *       hidden: (boolean|undefined),
 *       indeterminate: (boolean|undefined),
 *       loading: (boolean|undefined),
 *       matched: (boolean|undefined),
 *       removed: (boolean|undefined),
 *       rendered: (boolean|undefined),
 *       selectable: (boolean|undefined),
 *       selected: (boolean|undefined)
 *     }|undefined)
 *   }|undefined)
 * }}
 */
var NodeConfig;

/**
 * @typedef {{
 *   limit: number,
 *   total: number
 * }}
 */
var Pagination;

/**
 * @constructor
 * @extends {EventEmitter2}
 * @param {Config} opts
 */
function InspireTree(opts) {}

/**
 * @param {NodeConfig} node
 * @return {TreeNode}
 */
InspireTree.prototype.addNode = function(node) {};

/**
 * @param {Array<NodeConfig>} nodes
 * @return {TreeNodes}
 */
InspireTree.prototype.addNodes = function(nodes) {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.available = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.blur = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.blurDeep = function() {};

/**
 * @param {TreeNode} first
 * @param {TreeNode} second
 * @return {Array<TreeNode>}
 */
InspireTree.prototype.boundingNodes = function(first, second) {};

/**
 * @return {boolean}
 */
InspireTree.prototype.canAutoDeselect = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.checked = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.clean = function() {};

/**
 * @return {InspireTree}
 */
InspireTree.prototype.clearSearch = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.clone = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.collapse = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.collapsed = function(full) {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.collapseDeep = function() {};

/**
 * @return {TreeNode}
 */
InspireTree.prototype.context = function() {};

/**
 * @param {InspireTree} dest
 * @param {boolean=} hierarchy
 * @param {boolean=} includeState
 * @return {TreeNodes}
 */
InspireTree.prototype.copy = function(dest, hierarchy, includeState) {};

/**
 * @param {*} obj
 * @return {TreeNode}
 */
InspireTree.prototype.createNode = function(obj) {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.deepest = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.deselect = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.deselectDeep = function() {};

/**
 * @return {InspireTree}
 */
InspireTree.prototype.disableDeselection = function() {};

/**
 * @param {NodeIteratee} iteratee
 * @return {TreeNodes}
 */
InspireTree.prototype.each = function(iteratee) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.editable = function(full) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.editing = function(full) {};

/**
 * @return {InspireTree}
 */
InspireTree.prototype.enableDeselection = function() {};

/**
 * @return {Promise<TreeNodes>}
 */
InspireTree.prototype.expand = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.expandDeep = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.expanded = function(full) {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.expandParents = function() {};

/**
 * @param {string|NodeIteratee} predicate
 * @return {TreeNodes}
 */
InspireTree.prototype.extract = function(predicate) {};

/**
 * @param {string|NodeIteratee} predicate
 * @return {TreeNodes}
 */
InspireTree.prototype.filterBy = function(predicate) {};

/**
 * @param {function(TreeNode, number=, Array<TreeNode>=): boolean} predicate
 * @param {*=} thisArg
 * @return {TreeNode}
 */
InspireTree.prototype.find = function(predicate, thisArg) {};

/**
 * @param {function(TreeNode): boolean} predicate
 * @return {TreeNode}
 */
InspireTree.prototype.first = function(predicate) {};

/**
 * @param {string|NodeIteratee} predicate
 * @return {TreeNodes}
 */
InspireTree.prototype.flatten = function(predicate) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.focused = function(full) {};

/**
 * @param {number} index
 * @return {TreeNode}
 */
InspireTree.prototype.get = function(index) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.hidden = function(full) {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.hide = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.hideDeep = function() {};

/**
 * @type {string|number}
 */
InspireTree.prototype.id;

/**
 * @type {Config}
 */
InspireTree.prototype.config;

/**
 * @type {boolean}
 */
InspireTree.prototype.preventDeselection;

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.indeterminate = function(full) {};

/**
 * @param {number} index
 * @param {*} object
 * @return {TreeNode}
 */
InspireTree.prototype.insertAt = function(index, object) {};

/**
 * @param {string|Array<string>} methods
 * @return {TreeNodes}
 */
InspireTree.prototype.invoke = function(methods) {};

/**
 * @param {string|Array<string>} methods
 * @return {TreeNodes}
 */
InspireTree.prototype.invokeDeep = function(methods) {};

/**
 * @param {string} eventName
 * @return {boolean}
 */
InspireTree.prototype.isEventMuted = function(eventName) {};

/**
 * @param {*} value
 * @return {boolean}
 */
InspireTree.isTreeNode = function(value) {};

/**
 * @param {*} value
 * @return {boolean}
 */
InspireTree.isTreeNodes = function(value) {};

/**
 * @param {function(TreeNode): boolean} predicate
 * @return {TreeNode}
 */
InspireTree.prototype.last = function(predicate) {};

/**
 * @return {TreeNode|undefined}
 */
InspireTree.prototype.lastSelectedNode = function() {};

/**
 * @param {Promise<TreeNodes>} loader
 * @return {Promise<TreeNodes>}
 */
InspireTree.prototype.load = function(loader) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.loading = function(full) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.matched = function(full) {};

/**
 * @param {number} index
 * @param {number} newIndex
 * @param {TreeNodes} target
 * @return {TreeNode}
 */
InspireTree.prototype.move = function(index, newIndex, target) {};

/**
 * @param {Array<string>} events
 * @return {InspireTree}
 */
InspireTree.prototype.mute = function(events) {};

/**
 * @return {boolean}
 */
InspireTree.prototype.muted = function() {};

/**
 * @param {string|number} id
 * @return {TreeNode}
 */
InspireTree.prototype.node = function(id) {};

/**
 * @param {Array<string>|Array<number>=} ids
 * @return {TreeNodes}
 */
InspireTree.prototype.nodes = function(ids) {};

/**
 * @return {Pagination}
 */
InspireTree.prototype.pagination = function() {};

/**
 * @param {NodeIteratee} iteratee
 * @return {TreeNodes}
 */
InspireTree.prototype.recurseDown = function(iteratee) {};

/**
 * @return {Promise<TreeNodes>}
 */
InspireTree.prototype.reload = function() {};

/**
 * @return {InspireTree}
 */
InspireTree.prototype.removeAll = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.removed = function(full) {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.restore = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.restoreDeep = function() {};

/**
 * @param {string|RegExp|NodeIteratee} query
 * @return {Promise<TreeNodes>}
 */
InspireTree.prototype.search = function(query) {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.select = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.selectable = function(full) {};

/**
 * @param {TreeNode} start
 * @param {TreeNode} end
 * @return {InspireTree}
 */
InspireTree.prototype.selectBetween = function(start, end) {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.selectDeep = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.selected = function(full) {};

/**
 * @return {TreeNode}
 */
InspireTree.prototype.selectFirstAvailableNode = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.show = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.showDeep = function() {};

/**
 * @return {TreeNodes}
 */
InspireTree.prototype.softRemove = function() {};

/**
 * @param {string|NodeIteratee} sorter
 * @return {TreeNodes}
 */
InspireTree.prototype.sortBy = function(sorter) {};

/**
 * @param {string} key
 * @param {boolean} val
 * @return {TreeNodes}
 */
InspireTree.prototype.state = function(key, val) {};

/**
 * @param {string} key
 * @param {boolean} val
 * @return {TreeNodes}
 */
InspireTree.prototype.stateDeep = function(key, val) {};

/**
 * @param {TreeNode} node1
 * @param {TreeNode} node2
 * @return {TreeNodes}
 */
InspireTree.prototype.swap = function(node1, node2) {};

/**
 * @return {Array<*>}
 */
InspireTree.prototype.toArray = function() {};

/**
 * @return {InspireTree}
 */
InspireTree.prototype.tree = function() {};

/**
 * @param {Array<string>} events
 * @return {InspireTree}
 */
InspireTree.prototype.unmute = function(events) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
InspireTree.prototype.visible = function(full) {};

/**
 * @constructor
 * @extends {Array<TreeNode>}
 * @param {InspireTree} tree
 * @param {Array<*>|TreeNodes=} array
 */
function TreeNodes(tree, array) {}

/**
 * @param {NodeConfig} node
 * @return {TreeNode}
 */
TreeNodes.prototype.addNode = function(node) {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.available = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.blur = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.blurDeep = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.checked = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.clean = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.clone = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.collapse = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.collapsed = function(full) {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.collapseDeep = function() {};

/**
 * @return {TreeNode}
 */
TreeNodes.prototype.context = function() {};

/**
 * @param {InspireTree} dest
 * @param {boolean=} hierarchy
 * @param {boolean=} includeState
 * @return {TreeNodes}
 */
TreeNodes.prototype.copy = function(dest, hierarchy, includeState) {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.deepest = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.deselect = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.deselectDeep = function() {};

/**
 * @param {NodeIteratee} iteratee
 * @return {TreeNodes}
 */
TreeNodes.prototype.each = function(iteratee) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.editable = function(full) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.editing = function(full) {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.expand = function() {};

/**
 * @return {Promise<TreeNodes>}
 */
TreeNodes.prototype.expandDeep = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.expanded = function(full) {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.expandParents = function() {};

/**
 * @param {string|NodeIteratee} predicate
 * @return {TreeNodes}
 */
TreeNodes.prototype.extract = function(predicate) {};

/**
 * @param {string|NodeIteratee} predicate
 * @return {TreeNodes}
 */
TreeNodes.prototype.filterBy = function(predicate) {};

/**
 * @param {string|NodeIteratee} predicate
 * @return {TreeNodes}
 */
TreeNodes.prototype.flatten = function(predicate) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.focused = function(full) {};

/**
 * @param {number} index
 * @return {TreeNode}
 */
TreeNodes.prototype.get = function(index) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.hidden = function(full) {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.hide = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.hideDeep = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.indeterminate = function(full) {};

/**
 * @param {string|Array<string>} methods
 * @return {TreeNodes}
 */
TreeNodes.prototype.invoke = function(methods) {};

/**
 * @param {string|Array<string>} methods
 * @return {TreeNodes}
 */
TreeNodes.prototype.invokeDeep = function(methods) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.loading = function(full) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.matched = function(full) {};

/**
 * @param {number} index
 * @param {number} newIndex
 * @param {TreeNodes} target
 * @return {TreeNode}
 */
TreeNodes.prototype.move = function(index, newIndex, target) {};

/**
 * @param {string|number} id
 * @return {TreeNode}
 */
TreeNodes.prototype.node = function(id) {};

/**
 * @param {Array<string>|Array<number>=} ids
 * @return {TreeNodes}
 */
TreeNodes.prototype.nodes = function(ids) {};

/**
 * @return {Pagination}
 */
TreeNodes.prototype.pagination = function() {};

/**
 * @param {NodeIteratee} iteratee
 * @return {TreeNodes}
 */
TreeNodes.prototype.recurseDown = function(iteratee) {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.removed = function(full) {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.restore = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.restoreDeep = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.select = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.selectable = function(full) {};

/**
 * @param {TreeNode} start
 * @param {TreeNode} end
 * @return {InspireTree}
 */
TreeNodes.prototype.selectBetween = function(start, end) {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.selectDeep = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.selected = function(full) {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.show = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.showDeep = function() {};

/**
 * @return {TreeNodes}
 */
TreeNodes.prototype.softRemove = function() {};

/**
 * @param {string|NodeIteratee} sorter
 * @return {TreeNodes}
 */
TreeNodes.prototype.sortBy = function(sorter) {};

/**
 * @param {string} key
 * @param {boolean} val
 * @return {TreeNodes}
 */
TreeNodes.prototype.state = function(key, val) {};

/**
 * @param {string} key
 * @param {boolean} val
 * @return {TreeNodes}
 */
TreeNodes.prototype.stateDeep = function(key, val) {};

/**
 * @param {TreeNode} node1
 * @param {TreeNode} node2
 * @return {TreeNodes}
 */
TreeNodes.prototype.swap = function(node1, node2) {};

/**
 * @return {Array<*>}
 */
TreeNodes.prototype.toArray = function() {};

/**
 * @return {InspireTree}
 */
TreeNodes.prototype.tree = function() {};

/**
 * @param {boolean=} full
 * @return {TreeNodes}
 */
TreeNodes.prototype.visible = function(full) {};

/**
 * @constructor
 * @param {InspireTree} tree
 * @param {*|TreeNode} source
 * @param {Array<string>=} excludeKeys
 */
function TreeNode(tree, source, excludeKeys) {}

/**
 * @param {NodeConfig} node
 * @return {TreeNode}
 */
TreeNode.prototype.addChild = function(node) {};

/**
 * @param {Array<NodeConfig>} nodes
 * @return {TreeNodes}
 */
TreeNode.prototype.addChildren = function(nodes) {};

/**
 * @param {...object} sources
 * @return {TreeNode}
 */
TreeNode.prototype.assign = function(sources) {};

/**
 * @return {boolean}
 */
TreeNode.prototype.available = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.blur = function() {};

/**
 * @param {boolean=} shallow
 * @return {TreeNode}
 */
TreeNode.prototype.check = function(shallow) {};

/**
 * @return {boolean}
 */
TreeNode.prototype.checked = function() {};

/**
 * @type {boolean|TreeNodes}
 */
TreeNode.prototype.children;

/**
 * @return {TreeNode}
 */
TreeNode.prototype.clean = function() {};

/**
 * @param {Array<string>=} excludeKeys
 * @return {TreeNode}
 */
TreeNode.prototype.clone = function(excludeKeys) {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.collapse = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.collapsed = function() {};

/**
 * @type {string}
 */
TreeNode.prototype.text;

/**
 * @type {string}
 */
TreeNode.prototype.id;

/**
 * @type {NodeConfig['itree']|undefined}
 */
TreeNode.prototype.itree;

/**
 * @return {TreeNodes}
 */
TreeNode.prototype.context = function() {};

/**
 * @param {InspireTree} dest
 * @param {boolean=} hierarchy
 * @param {boolean=} includeState
 * @return {TreeNode}
 */
TreeNode.prototype.copy = function(dest, hierarchy, includeState) {};

/**
 * @param {boolean=} excludeNode
 * @param {boolean=} includeState
 * @return {TreeNode}
 */
TreeNode.prototype.copyHierarchy = function(excludeNode, includeState) {};

/**
 * @param {boolean=} shallow
 * @return {TreeNode}
 */
TreeNode.prototype.deselect = function(shallow) {};

/**
 * @return {boolean}
 */
TreeNode.prototype.editable = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.editing = function() {};

/**
 * @return {Promise<TreeNode>}
 */
TreeNode.prototype.expand = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.expanded = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.expandParents = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.focus = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.focused = function() {};

/**
 * @return {TreeNodes}
 */
TreeNode.prototype.getChildren = function() {};

/**
 * @return {TreeNode|undefined}
 */
TreeNode.prototype.getParent = function() {};

/**
 * @return {TreeNodes}
 */
TreeNode.prototype.getParents = function() {};

/**
 * @return {Array<string>}
 */
TreeNode.prototype.getTextualHierarchy = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.hasAncestor = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.hasChildren = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.hasLoadedChildren = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.hasOrWillHaveChildren = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.hasParent = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.hasVisibleChildren = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.hidden = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.hide = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.indeterminate = function() {};

/**
 * @return {Array<number>}
 */
TreeNode.prototype.indexList = function() {};

/**
 * @return {string}
 */
TreeNode.prototype.indexPath = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.isFirstRenderable = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.isLastRenderable = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.isOnlyRenderable = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.lastDeepestVisibleChild = function() {};

/**
 * @return {Promise<TreeNodes>}
 */
TreeNode.prototype.loadChildren = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.loading = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.markDirty = function() {};

/**
 * @return {TreeNodes}
 */
TreeNode.prototype.matched = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.nextVisibleAncestralSiblingNode = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.nextVisibleChildNode = function() {};

/**
 * @return {TreeNode|undefined}
 */
TreeNode.prototype.nextVisibleNode = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.nextVisibleSiblingNode = function() {};

/**
 * @return {Pagination}
 */
TreeNode.prototype.pagination = function() {};

/**
 * @return {TreeNode|undefined}
 */
TreeNode.prototype.previousVisibleNode = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.previousVisibleSiblingNode = function() {};

/**
 * @param {NodeIteratee} iteratee
 * @return {TreeNode}
 */
TreeNode.prototype.recurseDown = function(iteratee) {};

/**
 * @param {NodeIteratee} iteratee
 * @return {TreeNode}
 */
TreeNode.prototype.recurseUp = function(iteratee) {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.refreshIndeterminateState = function() {};

/**
 * @return {Promise<TreeNodes>}
 */
TreeNode.prototype.reload = function() {};

/**
 * @param {boolean=} includeState
 * @return {*}
 */
TreeNode.prototype.remove = function(includeState) {};

/**
 * @return {boolean}
 */
TreeNode.prototype.removed = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.renderable = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.rendered = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.restore = function() {};

/**
 * @param {boolean=} shallow
 * @return {TreeNode}
 */
TreeNode.prototype.select = function(shallow) {};

/**
 * @return {boolean}
 */
TreeNode.prototype.selectable = function() {};

/**
 * @return {boolean}
 */
TreeNode.prototype.selected = function() {};

/**
 * @param {number|string} key
 * @param {*} val
 * @return {TreeNode}
 */
TreeNode.prototype.set = function(key, val) {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.show = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.softRemove = function() {};

/**
 * @param {object|string} key
 * @param {boolean=} val
 * @return {boolean|object}
 */
TreeNode.prototype.state = function(key, val) {};

/**
 * @param {Array<string>} keys
 * @param {boolean} val
 * @return {boolean}
 */
TreeNode.prototype.states = function(keys, val) {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.toggleCheck = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.toggleCollapse = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.toggleEditing = function() {};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.toggleSelect = function() {};

/**
 * @param {boolean=} excludeChildren
 * @param {boolean=} includeState
 * @return {*}
 */
TreeNode.prototype.toObject = function(excludeChildren, includeState) {};

/**
 * @return {string}
 */
TreeNode.prototype.toString = function() {};

/**
 * @return {InspireTree}
 */
TreeNode.prototype.tree = function() {};

/**
 * @param {boolean=} shallow
 * @return {TreeNode}
 */
TreeNode.prototype.uncheck = function(shallow) {};

/**
 * @param {NodeConfig} node
 * @return {TreeNode}
 */
TreeNode.prototype.unshiftChild = function(node) {};

/**
 * @return {boolean}
 */
TreeNode.prototype.visible = function() {};

/**
 * @type {InspireTree}
 */
var InspireTreeDefault;

/******************************************************************************
 * Inspire Tree DOM Externs
 ******************************************************************************/

/**
 * @typedef {function(TreeNode, TreeNode): boolean}
 */
var DropTargetValidator;

/**
 * @typedef {{
 *   autoLoadMore: (boolean|undefined),
 *   deferredRendering: (boolean|undefined),
 *   dragAndDrop: ({
 *     enabled: (boolean|undefined),
 *     validateOn: (string|undefined),
 *     validate: DropTargetValidator
 *   }|undefined),
 *   nodeHeight: (number|undefined),
 *   showCheckboxes: (boolean|undefined),
 *   dragTargets: (Array<string>|undefined),
 *   tabindex: (number|undefined),
 *   target: HTMLElement
 * }}
 */
var InspireTreeDOMConfig;

/**
 * @constructor
 * @param {InspireTree} tree
 * @param {InspireTreeDOMConfig} opts
 */
function InspireTreeDOM(tree, opts) {}

/**
 * @type {InspireTreeDOM}
 */
var InspireTreeDOMDefault;