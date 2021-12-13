// Copyright 2005 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package goog.html
{

/**
 * A string that is safe to use in URL context in DOM APIs and HTML documents.
 *
 * A SafeUrl is a string-like object that carries the security type contract
 * that its value as a string will not cause untrusted script execution
 * when evaluated as a hyperlink URL in a browser.
 *
 * Values of this type are guaranteed to be safe to use in URL/hyperlink
 * contexts, such as assignment to URL-valued DOM properties, in the sense that
 * the use will not result in a Cross-Site-Scripting vulnerability. Similarly,
 * SafeUrls can be interpolated into the URL context of an HTML template (e.g.,
 * inside a href attribute). However, appropriate HTML-escaping must still be
 * applied.
 *
 * Note that, as documented in `goog.html.SafeUrl.unwrap`, this type's
 * contract does not guarantee that instances are safe to interpolate into HTML
 * without appropriate escaping.
 *
 * Note also that this type's contract does not imply any guarantees regarding
 * the resource the URL refers to.  In particular, SafeUrls are <b>not</b>
 * safe to use in a context where the referred-to resource is interpreted as
 * trusted code, e.g., as the src of a script tag.
 *
 * Instances of this type must be created via the factory methods
 * (`goog.html.SafeUrl.fromConstant`, `goog.html.SafeUrl.sanitize`),
 * etc and not by invoking its constructor. The constructor intentionally takes
 * an extra parameter that cannot be constructed outside of this file and the
 * type is immutable; hence only a default instance corresponding to the empty
 * string can be obtained via constructor invocation.
 *
 * @see goog.html.SafeUrl#fromConstant
 * @see goog.html.SafeUrl#from
 * @see goog.html.SafeUrl#sanitize
 * @final
 * @struct
 * @implements {goog.i18n.bidi.DirectionalString}
 * @implements {goog.string.TypedString}
 */
	public class SafeUrl
	{
		public function SafeUrl(value:String, token:Object){}
		public static function unwrap(safeUrl:SafeUrl):String{return ""}
		public static function sanitize(url:String):SafeUrl{return null}
		public static function isSafeMimeType(mimeType:String):Boolean{return true}
		public static function fromBlob(blob:Blob):SafeUrl{return null}
		public static function fromMediaSource(mediaSource:MediaSource):SafeUrl{return null}
	}
}