////////////////////////////////////////////////////////////////////////////////
//
//  Licensed to the Apache Software Foundation (ASF) under one or more
//  contributor license agreements.  See the NOTICE file distributed with
//  this work for additional information regarding copyright ownership.
//  The ASF licenses this file to You under the Apache License, Version 2.0
//  (the "License"); you may not use this file except in compliance with
//  the License.  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////

package __AS3__.vec
{

/**
 *  The compiler appears to expect these internal implementations
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 */
internal class Vector$t
{
	public function Vector$t(length:uint = 0, fixed:Boolean = false) {}
	
	public var fixed:Boolean;
	
	public var length:uint;
	
	public function concat(...args):Vector$t { return null }
	
	public function every(callback:Function, thisObject:Object):Boolean { return false }
	
	public function filter(callback:Function, thisObject:Object = null):Vector$t { return null }
	
	public function forEach(callback:Function, thisObject:Object = null):void {}
	
	public function indexOf(searchElement:T, fromIndex:int = 0):int { return -1 }
	
	public function insertAt(index:int, element:T):void {}
	
	public function join(sep:String = ","):String { return null }
	
	public function lastIndexOf(searchElement:T, fromIndex:int = 0x7fffffff):int { return -1 }
	
	public function map(callback:Function, thisObject:Object = null):Vector$t { return null }
	
	public function pop():T { return null }
	
	public function push(... args):uint { return 0 }
	
	public function removeAt(index:int):T { return null }
	
	public function reverse():Vector$t { return null }
	
	public function shift():T { return null }
	
	public function slice(startIndex:int = 0, endIndex:int = 16777215):Vector$t { return null }
	
	public function some(callback:Function, thisObject:Object = null):Boolean { return false }
	
	public function sort(sortBehavior:Object):Vector$t { return null }
	
	public function splice(startIndex:int, deleteCount:uint = 4294967295, ... items):Vector$t { return null }
	
	override public function toLocaleString():String { return null }
	
	public function toString():String { return null }
	
	public function unshift(... args):uint { return 0 }
}
}