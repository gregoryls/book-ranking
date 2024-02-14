/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Users\\gregls\\repos\\book-ranking\\node_modules\\axios\\index.js'");

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/api/attributes.js":
/*!********************************************************!*\
  !*** ./node_modules/cheerio/lib/esm/api/attributes.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   hasClass: () => (/* binding */ hasClass),
/* harmony export */   prop: () => (/* binding */ prop),
/* harmony export */   removeAttr: () => (/* binding */ removeAttr),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass),
/* harmony export */   val: () => (/* binding */ val)
/* harmony export */ });
/* harmony import */ var _static_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static.js */ "./node_modules/cheerio/lib/esm/static.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/cheerio/lib/esm/utils.js");
/* harmony import */ var domutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domutils */ "./node_modules/cheerio/node_modules/domutils/lib/esm/index.js");
/**
 * Methods for getting and modifying attributes.
 *
 * @module cheerio/attributes
 */



const hasOwn = Object.prototype.hasOwnProperty;
const rspace = /\s+/;
const dataAttrPrefix = 'data-';
/*
 * Lookup table for coercing string data-* attributes to their corresponding
 * JavaScript primitives
 */
const primitives = {
    null: null,
    true: true,
    false: false,
};
// Attributes that are booleans
const rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
// Matches strings that look like JSON objects or arrays
const rbrace = /^{[^]*}$|^\[[^]*]$/;
function getAttr(elem, name, xmlMode) {
    var _a;
    if (!elem || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(elem))
        return undefined;
    (_a = elem.attribs) !== null && _a !== void 0 ? _a : (elem.attribs = {});
    // Return the entire attribs object if no attribute specified
    if (!name) {
        return elem.attribs;
    }
    if (hasOwn.call(elem.attribs, name)) {
        // Get the (decoded) attribute
        return !xmlMode && rboolean.test(name) ? name : elem.attribs[name];
    }
    // Mimic the DOM and return text content as value for `option's`
    if (elem.name === 'option' && name === 'value') {
        return (0,_static_js__WEBPACK_IMPORTED_MODULE_0__.text)(elem.children);
    }
    // Mimic DOM with default value for radios/checkboxes
    if (elem.name === 'input' &&
        (elem.attribs['type'] === 'radio' || elem.attribs['type'] === 'checkbox') &&
        name === 'value') {
        return 'on';
    }
    return undefined;
}
/**
 * Sets the value of an attribute. The attribute will be deleted if the value is `null`.
 *
 * @private
 * @param el - The element to set the attribute on.
 * @param name - The attribute's name.
 * @param value - The attribute's value.
 */
function setAttr(el, name, value) {
    if (value === null) {
        removeAttribute(el, name);
    }
    else {
        el.attribs[name] = `${value}`;
    }
}
function attr(name, value) {
    // Set the value (with attr map support)
    if (typeof name === 'object' || value !== undefined) {
        if (typeof value === 'function') {
            if (typeof name !== 'string') {
                {
                    throw new Error('Bad combination of arguments.');
                }
            }
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.domEach)(this, (el, i) => {
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el))
                    setAttr(el, name, value.call(el, i, el.attribs[name]));
            });
        }
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.domEach)(this, (el) => {
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el))
                return;
            if (typeof name === 'object') {
                Object.keys(name).forEach((objName) => {
                    const objValue = name[objName];
                    setAttr(el, objName, objValue);
                });
            }
            else {
                setAttr(el, name, value);
            }
        });
    }
    return arguments.length > 1
        ? this
        : getAttr(this[0], name, this.options.xmlMode);
}
/**
 * Gets a node's prop.
 *
 * @private
 * @category Attributes
 * @param el - Element to get the prop of.
 * @param name - Name of the prop.
 * @returns The prop's value.
 */
function getProp(el, name, xmlMode) {
    return name in el
        ? // @ts-expect-error TS doesn't like us accessing the value directly here.
            el[name]
        : !xmlMode && rboolean.test(name)
            ? getAttr(el, name, false) !== undefined
            : getAttr(el, name, xmlMode);
}
/**
 * Sets the value of a prop.
 *
 * @private
 * @param el - The element to set the prop on.
 * @param name - The prop's name.
 * @param value - The prop's value.
 */
function setProp(el, name, value, xmlMode) {
    if (name in el) {
        // @ts-expect-error Overriding value
        el[name] = value;
    }
    else {
        setAttr(el, name, !xmlMode && rboolean.test(name) ? (value ? '' : null) : `${value}`);
    }
}
function prop(name, value) {
    var _a;
    if (typeof name === 'string' && value === undefined) {
        const el = this[0];
        if (!el || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el))
            return undefined;
        switch (name) {
            case 'style': {
                const property = this.css();
                const keys = Object.keys(property);
                keys.forEach((p, i) => {
                    property[i] = p;
                });
                property.length = keys.length;
                return property;
            }
            case 'tagName':
            case 'nodeName': {
                return el.name.toUpperCase();
            }
            case 'href':
            case 'src': {
                const prop = (_a = el.attribs) === null || _a === void 0 ? void 0 : _a[name];
                /* eslint-disable node/no-unsupported-features/node-builtins */
                if (typeof URL !== 'undefined' &&
                    ((name === 'href' && (el.tagName === 'a' || el.name === 'link')) ||
                        (name === 'src' &&
                            (el.tagName === 'img' ||
                                el.tagName === 'iframe' ||
                                el.tagName === 'audio' ||
                                el.tagName === 'video' ||
                                el.tagName === 'source'))) &&
                    prop !== undefined &&
                    this.options.baseURI) {
                    return new URL(prop, this.options.baseURI).href;
                }
                /* eslint-enable node/no-unsupported-features/node-builtins */
                return prop;
            }
            case 'innerText': {
                return (0,domutils__WEBPACK_IMPORTED_MODULE_2__.innerText)(el);
            }
            case 'textContent': {
                return (0,domutils__WEBPACK_IMPORTED_MODULE_2__.textContent)(el);
            }
            case 'outerHTML':
                return this.clone().wrap('<container />').parent().html();
            case 'innerHTML':
                return this.html();
            default:
                return getProp(el, name, this.options.xmlMode);
        }
    }
    if (typeof name === 'object' || value !== undefined) {
        if (typeof value === 'function') {
            if (typeof name === 'object') {
                throw new Error('Bad combination of arguments.');
            }
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.domEach)(this, (el, i) => {
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el)) {
                    setProp(el, name, value.call(el, i, getProp(el, name, this.options.xmlMode)), this.options.xmlMode);
                }
            });
        }
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.domEach)(this, (el) => {
            if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el))
                return;
            if (typeof name === 'object') {
                Object.keys(name).forEach((key) => {
                    const val = name[key];
                    setProp(el, key, val, this.options.xmlMode);
                });
            }
            else {
                setProp(el, name, value, this.options.xmlMode);
            }
        });
    }
    return undefined;
}
/**
 * Sets the value of a data attribute.
 *
 * @private
 * @param el - The element to set the data attribute on.
 * @param name - The data attribute's name.
 * @param value - The data attribute's value.
 */
function setData(el, name, value) {
    var _a;
    const elem = el;
    (_a = elem.data) !== null && _a !== void 0 ? _a : (elem.data = {});
    if (typeof name === 'object')
        Object.assign(elem.data, name);
    else if (typeof name === 'string' && value !== undefined) {
        elem.data[name] = value;
    }
}
/**
 * Read the specified attribute from the equivalent HTML5 `data-*` attribute,
 * and (if present) cache the value in the node's internal data store. If no
 * attribute name is specified, read _all_ HTML5 `data-*` attributes in this manner.
 *
 * @private
 * @category Attributes
 * @param el - Element to get the data attribute of.
 * @param name - Name of the data attribute.
 * @returns The data attribute's value, or a map with all of the data attributes.
 */
function readData(el, name) {
    let domNames;
    let jsNames;
    let value;
    if (name == null) {
        domNames = Object.keys(el.attribs).filter((attrName) => attrName.startsWith(dataAttrPrefix));
        jsNames = domNames.map((domName) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.camelCase)(domName.slice(dataAttrPrefix.length)));
    }
    else {
        domNames = [dataAttrPrefix + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.cssCase)(name)];
        jsNames = [name];
    }
    for (let idx = 0; idx < domNames.length; ++idx) {
        const domName = domNames[idx];
        const jsName = jsNames[idx];
        if (hasOwn.call(el.attribs, domName) &&
            !hasOwn.call(el.data, jsName)) {
            value = el.attribs[domName];
            if (hasOwn.call(primitives, value)) {
                value = primitives[value];
            }
            else if (value === String(Number(value))) {
                value = Number(value);
            }
            else if (rbrace.test(value)) {
                try {
                    value = JSON.parse(value);
                }
                catch (e) {
                    /* Ignore */
                }
            }
            el.data[jsName] = value;
        }
    }
    return name == null ? el.data : value;
}
function data(name, value) {
    var _a;
    const elem = this[0];
    if (!elem || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(elem))
        return;
    const dataEl = elem;
    (_a = dataEl.data) !== null && _a !== void 0 ? _a : (dataEl.data = {});
    // Return the entire data object if no data specified
    if (!name) {
        return readData(dataEl);
    }
    // Set the value (with attr map support)
    if (typeof name === 'object' || value !== undefined) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.domEach)(this, (el) => {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el)) {
                if (typeof name === 'object')
                    setData(el, name);
                else
                    setData(el, name, value);
            }
        });
        return this;
    }
    if (hasOwn.call(dataEl.data, name)) {
        return dataEl.data[name];
    }
    return readData(dataEl, name);
}
function val(value) {
    const querying = arguments.length === 0;
    const element = this[0];
    if (!element || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(element))
        return querying ? undefined : this;
    switch (element.name) {
        case 'textarea':
            return this.text(value);
        case 'select': {
            const option = this.find('option:selected');
            if (!querying) {
                if (this.attr('multiple') == null && typeof value === 'object') {
                    return this;
                }
                this.find('option').removeAttr('selected');
                const values = typeof value !== 'object' ? [value] : value;
                for (let i = 0; i < values.length; i++) {
                    this.find(`option[value="${values[i]}"]`).attr('selected', '');
                }
                return this;
            }
            return this.attr('multiple')
                ? option.toArray().map((el) => (0,_static_js__WEBPACK_IMPORTED_MODULE_0__.text)(el.children))
                : option.attr('value');
        }
        case 'input':
        case 'option':
            return querying
                ? this.attr('value')
                : this.attr('value', value);
    }
    return undefined;
}
/**
 * Remove an attribute.
 *
 * @private
 * @param elem - Node to remove attribute from.
 * @param name - Name of the attribute to remove.
 */
function removeAttribute(elem, name) {
    if (!elem.attribs || !hasOwn.call(elem.attribs, name))
        return;
    delete elem.attribs[name];
}
/**
 * Splits a space-separated list of names to individual names.
 *
 * @category Attributes
 * @param names - Names to split.
 * @returns - Split names.
 */
function splitNames(names) {
    return names ? names.trim().split(rspace) : [];
}
/**
 * Method for removing attributes by `name`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').removeAttr('class').html();
 * //=> <li>Pear</li>
 *
 * $('.apple').attr('id', 'favorite');
 * $('.apple').removeAttr('id class').html();
 * //=> <li>Apple</li>
 * ```
 *
 * @param name - Name of the attribute.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/removeAttr/}
 */
function removeAttr(name) {
    const attrNames = splitNames(name);
    for (let i = 0; i < attrNames.length; i++) {
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.domEach)(this, (elem) => {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(elem))
                removeAttribute(elem, attrNames[i]);
        });
    }
    return this;
}
/**
 * Check to see if _any_ of the matched elements have the given `className`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').hasClass('pear');
 * //=> true
 *
 * $('apple').hasClass('fruit');
 * //=> false
 *
 * $('li').hasClass('pear');
 * //=> true
 * ```
 *
 * @param className - Name of the class.
 * @returns Indicates if an element has the given `className`.
 * @see {@link https://api.jquery.com/hasClass/}
 */
function hasClass(className) {
    return this.toArray().some((elem) => {
        const clazz = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(elem) && elem.attribs['class'];
        let idx = -1;
        if (clazz && className.length) {
            while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
                const end = idx + className.length;
                if ((idx === 0 || rspace.test(clazz[idx - 1])) &&
                    (end === clazz.length || rspace.test(clazz[end]))) {
                    return true;
                }
            }
        }
        return false;
    });
}
/**
 * Adds class(es) to all of the matched elements. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').addClass('fruit').html();
 * //=> <li class="pear fruit">Pear</li>
 *
 * $('.apple').addClass('fruit red').html();
 * //=> <li class="apple fruit red">Apple</li>
 * ```
 *
 * @param value - Name of new class.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/addClass/}
 */
function addClass(value) {
    // Support functions
    if (typeof value === 'function') {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.domEach)(this, (el, i) => {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el)) {
                const className = el.attribs['class'] || '';
                addClass.call([el], value.call(el, i, className));
            }
        });
    }
    // Return if no value or not a string or function
    if (!value || typeof value !== 'string')
        return this;
    const classNames = value.split(rspace);
    const numElements = this.length;
    for (let i = 0; i < numElements; i++) {
        const el = this[i];
        // If selected element isn't a tag, move on
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el))
            continue;
        // If we don't already have classes — always set xmlMode to false here, as it doesn't matter for classes
        const className = getAttr(el, 'class', false);
        if (!className) {
            setAttr(el, 'class', classNames.join(' ').trim());
        }
        else {
            let setClass = ` ${className} `;
            // Check if class already exists
            for (let j = 0; j < classNames.length; j++) {
                const appendClass = `${classNames[j]} `;
                if (!setClass.includes(` ${appendClass}`))
                    setClass += appendClass;
            }
            setAttr(el, 'class', setClass.trim());
        }
    }
    return this;
}
/**
 * Removes one or more space-separated classes from the selected elements. If no
 * `className` is defined, all classes will be removed. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').removeClass('pear').html();
 * //=> <li class="">Pear</li>
 *
 * $('.apple').addClass('red').removeClass().html();
 * //=> <li class="">Apple</li>
 * ```
 *
 * @param name - Name of the class. If not specified, removes all elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/removeClass/}
 */
function removeClass(name) {
    // Handle if value is a function
    if (typeof name === 'function') {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.domEach)(this, (el, i) => {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el)) {
                removeClass.call([el], name.call(el, i, el.attribs['class'] || ''));
            }
        });
    }
    const classes = splitNames(name);
    const numClasses = classes.length;
    const removeAll = arguments.length === 0;
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.domEach)(this, (el) => {
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el))
            return;
        if (removeAll) {
            // Short circuit the remove all case as this is the nice one
            el.attribs['class'] = '';
        }
        else {
            const elClasses = splitNames(el.attribs['class']);
            let changed = false;
            for (let j = 0; j < numClasses; j++) {
                const index = elClasses.indexOf(classes[j]);
                if (index >= 0) {
                    elClasses.splice(index, 1);
                    changed = true;
                    /*
                     * We have to do another pass to ensure that there are not duplicate
                     * classes listed
                     */
                    j--;
                }
            }
            if (changed) {
                el.attribs['class'] = elClasses.join(' ');
            }
        }
    });
}
/**
 * Add or remove class(es) from the matched elements, depending on either the
 * class's presence or the value of the switch argument. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.apple.green').toggleClass('fruit green red').html();
 * //=> <li class="apple fruit red">Apple</li>
 *
 * $('.apple.green').toggleClass('fruit green red', true).html();
 * //=> <li class="apple green fruit red">Apple</li>
 * ```
 *
 * @param value - Name of the class. Can also be a function.
 * @param stateVal - If specified the state of the class.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/toggleClass/}
 */
function toggleClass(value, stateVal) {
    // Support functions
    if (typeof value === 'function') {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.domEach)(this, (el, i) => {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el)) {
                toggleClass.call([el], value.call(el, i, el.attribs['class'] || '', stateVal), stateVal);
            }
        });
    }
    // Return if no value or not a string or function
    if (!value || typeof value !== 'string')
        return this;
    const classNames = value.split(rspace);
    const numClasses = classNames.length;
    const state = typeof stateVal === 'boolean' ? (stateVal ? 1 : -1) : 0;
    const numElements = this.length;
    for (let i = 0; i < numElements; i++) {
        const el = this[i];
        // If selected element isn't a tag, move on
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isTag)(el))
            continue;
        const elementClasses = splitNames(el.attribs['class']);
        // Check if class already exists
        for (let j = 0; j < numClasses; j++) {
            // Check if the class name is currently defined
            const index = elementClasses.indexOf(classNames[j]);
            // Add if stateValue === true or we are toggling and there is no value
            if (state >= 0 && index < 0) {
                elementClasses.push(classNames[j]);
            }
            else if (state <= 0 && index >= 0) {
                // Otherwise remove but only if the item exists
                elementClasses.splice(index, 1);
            }
        }
        el.attribs['class'] = elementClasses.join(' ');
    }
    return this;
}
//# sourceMappingURL=attributes.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/api/css.js":
/*!*************************************************!*\
  !*** ./node_modules/cheerio/lib/esm/api/css.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/cheerio/lib/esm/utils.js");

/**
 * Set multiple CSS properties for every matched element.
 *
 * @category CSS
 * @param prop - The names of the properties.
 * @param val - The new values.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/css/}
 */
function css(prop, val) {
    if ((prop != null && val != null) ||
        // When `prop` is a "plain" object
        (typeof prop === 'object' && !Array.isArray(prop))) {
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.domEach)(this, (el, i) => {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isTag)(el)) {
                // `prop` can't be an array here anymore.
                setCss(el, prop, val, i);
            }
        });
    }
    if (this.length === 0) {
        return undefined;
    }
    return getCss(this[0], prop);
}
/**
 * Set styles of all elements.
 *
 * @private
 * @param el - Element to set style of.
 * @param prop - Name of property.
 * @param value - Value to set property to.
 * @param idx - Optional index within the selection.
 */
function setCss(el, prop, value, idx) {
    if (typeof prop === 'string') {
        const styles = getCss(el);
        const val = typeof value === 'function' ? value.call(el, idx, styles[prop]) : value;
        if (val === '') {
            delete styles[prop];
        }
        else if (val != null) {
            styles[prop] = val;
        }
        el.attribs['style'] = stringify(styles);
    }
    else if (typeof prop === 'object') {
        Object.keys(prop).forEach((k, i) => {
            setCss(el, k, prop[k], i);
        });
    }
}
function getCss(el, prop) {
    if (!el || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isTag)(el))
        return;
    const styles = parse(el.attribs['style']);
    if (typeof prop === 'string') {
        return styles[prop];
    }
    if (Array.isArray(prop)) {
        const newStyles = {};
        prop.forEach((item) => {
            if (styles[item] != null) {
                newStyles[item] = styles[item];
            }
        });
        return newStyles;
    }
    return styles;
}
/**
 * Stringify `obj` to styles.
 *
 * @private
 * @category CSS
 * @param obj - Object to stringify.
 * @returns The serialized styles.
 */
function stringify(obj) {
    return Object.keys(obj).reduce((str, prop) => `${str}${str ? ' ' : ''}${prop}: ${obj[prop]};`, '');
}
/**
 * Parse `styles`.
 *
 * @private
 * @category CSS
 * @param styles - Styles to be parsed.
 * @returns The parsed styles.
 */
function parse(styles) {
    styles = (styles || '').trim();
    if (!styles)
        return {};
    const obj = {};
    let key;
    for (const str of styles.split(';')) {
        const n = str.indexOf(':');
        // If there is no :, or if it is the first/last character, add to the previous item's value
        if (n < 1 || n === str.length - 1) {
            const trimmed = str.trimEnd();
            if (trimmed.length > 0 && key !== undefined) {
                obj[key] += `;${trimmed}`;
            }
        }
        else {
            key = str.slice(0, n).trim();
            obj[key] = str.slice(n + 1).trim();
        }
    }
    return obj;
}
//# sourceMappingURL=css.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/api/forms.js":
/*!***************************************************!*\
  !*** ./node_modules/cheerio/lib/esm/api/forms.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   serializeArray: () => (/* binding */ serializeArray)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/cheerio/lib/esm/utils.js");

/*
 * https://github.com/jquery/jquery/blob/2.1.3/src/manipulation/var/rcheckableType.js
 * https://github.com/jquery/jquery/blob/2.1.3/src/serialize.js
 */
const submittableSelector = 'input,select,textarea,keygen';
const r20 = /%20/g;
const rCRLF = /\r?\n/g;
/**
 * Encode a set of form elements as a string for submission.
 *
 * @category Forms
 * @example
 *
 * ```js
 * $('<form><input name="foo" value="bar" /></form>').serialize();
 * //=> 'foo=bar'
 * ```
 *
 * @returns The serialized form.
 * @see {@link https://api.jquery.com/serialize/}
 */
function serialize() {
    // Convert form elements into name/value objects
    const arr = this.serializeArray();
    // Serialize each element into a key/value string
    const retArr = arr.map((data) => `${encodeURIComponent(data.name)}=${encodeURIComponent(data.value)}`);
    // Return the resulting serialization
    return retArr.join('&').replace(r20, '+');
}
/**
 * Encode a set of form elements as an array of names and values.
 *
 * @category Forms
 * @example
 *
 * ```js
 * $('<form><input name="foo" value="bar" /></form>').serializeArray();
 * //=> [ { name: 'foo', value: 'bar' } ]
 * ```
 *
 * @returns The serialized form.
 * @see {@link https://api.jquery.com/serializeArray/}
 */
function serializeArray() {
    // Resolve all form elements from either forms or collections of form elements
    return this.map((_, elem) => {
        const $elem = this._make(elem);
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isTag)(elem) && elem.name === 'form') {
            return $elem.find(submittableSelector).toArray();
        }
        return $elem.filter(submittableSelector).toArray();
    })
        .filter(
    // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
    '[name!=""]:enabled' +
        // And cannot be clicked (`[type=submit]`) or are used in `x-www-form-urlencoded` (`[type=file]`)
        ':not(:submit, :button, :image, :reset, :file)' +
        // And are either checked/don't have a checkable state
        ':matches([checked], :not(:checkbox, :radio))'
    // Convert each of the elements to its value(s)
    )
        .map((_, elem) => {
        var _a;
        const $elem = this._make(elem);
        const name = $elem.attr('name'); // We have filtered for elements with a name before.
        // If there is no value set (e.g. `undefined`, `null`), then default value to empty
        const value = (_a = $elem.val()) !== null && _a !== void 0 ? _a : '';
        // If we have an array of values (e.g. `<select multiple>`), return an array of key/value pairs
        if (Array.isArray(value)) {
            return value.map((val) => 
            /*
             * We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
             * These can occur inside of `<textarea>'s`
             */
            ({ name, value: val.replace(rCRLF, '\r\n') }));
        }
        // Otherwise (e.g. `<input type="text">`, return only one key/value pair
        return { name, value: value.replace(rCRLF, '\r\n') };
    })
        .toArray();
}
//# sourceMappingURL=forms.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/api/manipulation.js":
/*!**********************************************************!*\
  !*** ./node_modules/cheerio/lib/esm/api/manipulation.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _makeDomArray: () => (/* binding */ _makeDomArray),
/* harmony export */   after: () => (/* binding */ after),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   appendTo: () => (/* binding */ appendTo),
/* harmony export */   before: () => (/* binding */ before),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   empty: () => (/* binding */ empty),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   insertAfter: () => (/* binding */ insertAfter),
/* harmony export */   insertBefore: () => (/* binding */ insertBefore),
/* harmony export */   prepend: () => (/* binding */ prepend),
/* harmony export */   prependTo: () => (/* binding */ prependTo),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   replaceWith: () => (/* binding */ replaceWith),
/* harmony export */   text: () => (/* binding */ text),
/* harmony export */   toString: () => (/* binding */ toString),
/* harmony export */   unwrap: () => (/* binding */ unwrap),
/* harmony export */   wrap: () => (/* binding */ wrap),
/* harmony export */   wrapAll: () => (/* binding */ wrapAll),
/* harmony export */   wrapInner: () => (/* binding */ wrapInner)
/* harmony export */ });
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse.js */ "./node_modules/cheerio/lib/esm/parse.js");
/* harmony import */ var _static_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static.js */ "./node_modules/cheerio/lib/esm/static.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/cheerio/lib/esm/utils.js");
/* harmony import */ var domutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! domutils */ "./node_modules/cheerio/node_modules/domutils/lib/esm/index.js");
/**
 * Methods for modifying the DOM structure.
 *
 * @module cheerio/manipulation
 */





/**
 * Create an array of nodes, recursing into arrays and parsing strings if necessary.
 *
 * @private
 * @category Manipulation
 * @param elem - Elements to make an array of.
 * @param clone - Optionally clone nodes.
 * @returns The array of nodes.
 */
function _makeDomArray(elem, clone) {
    if (elem == null) {
        return [];
    }
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isCheerio)(elem)) {
        return clone ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.cloneDom)(elem.get()) : elem.get();
    }
    if (Array.isArray(elem)) {
        return elem.reduce((newElems, el) => newElems.concat(this._makeDomArray(el, clone)), []);
    }
    if (typeof elem === 'string') {
        return this._parse(elem, this.options, false, null).children;
    }
    return clone ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.cloneDom)([elem]) : [elem];
}
function _insert(concatenator) {
    return function (...elems) {
        const lastIdx = this.length - 1;
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.domEach)(this, (el, i) => {
            if (!(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(el))
                return;
            const domSrc = typeof elems[0] === 'function'
                ? elems[0].call(el, i, this._render(el.children))
                : elems;
            const dom = this._makeDomArray(domSrc, i < lastIdx);
            concatenator(dom, el.children, el);
        });
    };
}
/**
 * Modify an array in-place, removing some number of elements and adding new
 * elements directly following them.
 *
 * @private
 * @category Manipulation
 * @param array - Target array to splice.
 * @param spliceIdx - Index at which to begin changing the array.
 * @param spliceCount - Number of elements to remove from the array.
 * @param newElems - Elements to insert into the array.
 * @param parent - The parent of the node.
 * @returns The spliced array.
 */
function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent) {
    var _a, _b;
    const spliceArgs = [
        spliceIdx,
        spliceCount,
        ...newElems,
    ];
    const prev = spliceIdx === 0 ? null : array[spliceIdx - 1];
    const next = spliceIdx + spliceCount >= array.length
        ? null
        : array[spliceIdx + spliceCount];
    /*
     * Before splicing in new elements, ensure they do not already appear in the
     * current array.
     */
    for (let idx = 0; idx < newElems.length; ++idx) {
        const node = newElems[idx];
        const oldParent = node.parent;
        if (oldParent) {
            const oldSiblings = oldParent.children;
            const prevIdx = oldSiblings.indexOf(node);
            if (prevIdx > -1) {
                oldParent.children.splice(prevIdx, 1);
                if (parent === oldParent && spliceIdx > prevIdx) {
                    spliceArgs[0]--;
                }
            }
        }
        node.parent = parent;
        if (node.prev) {
            node.prev.next = (_a = node.next) !== null && _a !== void 0 ? _a : null;
        }
        if (node.next) {
            node.next.prev = (_b = node.prev) !== null && _b !== void 0 ? _b : null;
        }
        node.prev = idx === 0 ? prev : newElems[idx - 1];
        node.next = idx === newElems.length - 1 ? next : newElems[idx + 1];
    }
    if (prev) {
        prev.next = newElems[0];
    }
    if (next) {
        next.prev = newElems[newElems.length - 1];
    }
    return array.splice(...spliceArgs);
}
/**
 * Insert every element in the set of matched elements to the end of the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').appendTo('#fruits');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //      <li class="plum">Plum</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to append elements to.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/appendTo/}
 */
function appendTo(target) {
    const appendTarget = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isCheerio)(target) ? target : this._make(target);
    appendTarget.append(this);
    return this;
}
/**
 * Insert every element in the set of matched elements to the beginning of the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').prependTo('#fruits');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to prepend elements to.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/prependTo/}
 */
function prependTo(target) {
    const prependTarget = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isCheerio)(target) ? target : this._make(target);
    prependTarget.prepend(this);
    return this;
}
/**
 * Inserts content as the _last_ child of each of the selected elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').append('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //      <li class="plum">Plum</li>
 * //    </ul>
 * ```
 *
 * @see {@link https://api.jquery.com/append/}
 */
const append = _insert((dom, children, parent) => {
    uniqueSplice(children, children.length, 0, dom, parent);
});
/**
 * Inserts content as the _first_ child of each of the selected elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').prepend('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @see {@link https://api.jquery.com/prepend/}
 */
const prepend = _insert((dom, children, parent) => {
    uniqueSplice(children, 0, 0, dom, parent);
});
function _wrap(insert) {
    return function (wrapper) {
        const lastIdx = this.length - 1;
        const lastParent = this.parents().last();
        for (let i = 0; i < this.length; i++) {
            const el = this[i];
            const wrap = typeof wrapper === 'function'
                ? wrapper.call(el, i, el)
                : typeof wrapper === 'string' && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isHtml)(wrapper)
                    ? lastParent.find(wrapper).clone()
                    : wrapper;
            const [wrapperDom] = this._makeDomArray(wrap, i < lastIdx);
            if (!wrapperDom || !(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(wrapperDom))
                continue;
            let elInsertLocation = wrapperDom;
            /*
             * Find the deepest child. Only consider the first tag child of each node
             * (ignore text); stop if no children are found.
             */
            let j = 0;
            while (j < elInsertLocation.children.length) {
                const child = elInsertLocation.children[j];
                if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isTag)(child)) {
                    elInsertLocation = child;
                    j = 0;
                }
                else {
                    j++;
                }
            }
            insert(el, elInsertLocation, [wrapperDom]);
        }
        return this;
    };
}
/**
 * The .wrap() function can take any string or object that could be passed to
 * the $() factory function to specify a DOM structure. This structure may be
 * nested several levels deep, but should contain only one inmost element. A
 * copy of this structure will be wrapped around each of the elements in the set
 * of matched elements. This method returns the original set of elements for
 * chaining purposes.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const redFruit = $('<div class="red-fruit"></div>');
 * $('.apple').wrap(redFruit);
 *
 * //=> <ul id="fruits">
 * //     <div class="red-fruit">
 * //      <li class="apple">Apple</li>
 * //     </div>
 * //     <li class="orange">Orange</li>
 * //     <li class="plum">Plum</li>
 * //   </ul>
 *
 * const healthy = $('<div class="healthy"></div>');
 * $('li').wrap(healthy);
 *
 * //=> <ul id="fruits">
 * //     <div class="healthy">
 * //       <li class="apple">Apple</li>
 * //     </div>
 * //     <div class="healthy">
 * //       <li class="orange">Orange</li>
 * //     </div>
 * //     <div class="healthy">
 * //        <li class="plum">Plum</li>
 * //     </div>
 * //   </ul>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around each element in the selection.
 * @see {@link https://api.jquery.com/wrap/}
 */
const wrap = _wrap((el, elInsertLocation, wrapperDom) => {
    const { parent } = el;
    if (!parent)
        return;
    const siblings = parent.children;
    const index = siblings.indexOf(el);
    (0,_parse_js__WEBPACK_IMPORTED_MODULE_1__.update)([el], elInsertLocation);
    /*
     * The previous operation removed the current element from the `siblings`
     * array, so the `dom` array can be inserted without removing any
     * additional elements.
     */
    uniqueSplice(siblings, index, 0, wrapperDom, parent);
});
/**
 * The .wrapInner() function can take any string or object that could be passed
 * to the $() factory function to specify a DOM structure. This structure may be
 * nested several levels deep, but should contain only one inmost element. The
 * structure will be wrapped around the content of each of the elements in the
 * set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const redFruit = $('<div class="red-fruit"></div>');
 * $('.apple').wrapInner(redFruit);
 *
 * //=> <ul id="fruits">
 * //     <li class="apple">
 * //       <div class="red-fruit">Apple</div>
 * //     </li>
 * //     <li class="orange">Orange</li>
 * //     <li class="pear">Pear</li>
 * //   </ul>
 *
 * const healthy = $('<div class="healthy"></div>');
 * $('li').wrapInner(healthy);
 *
 * //=> <ul id="fruits">
 * //     <li class="apple">
 * //       <div class="healthy">Apple</div>
 * //     </li>
 * //     <li class="orange">
 * //       <div class="healthy">Orange</div>
 * //     </li>
 * //     <li class="pear">
 * //       <div class="healthy">Pear</div>
 * //     </li>
 * //   </ul>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around the content of each element
 *   in the selection.
 * @returns The instance itself, for chaining.
 * @see {@link https://api.jquery.com/wrapInner/}
 */
const wrapInner = _wrap((el, elInsertLocation, wrapperDom) => {
    if (!(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(el))
        return;
    (0,_parse_js__WEBPACK_IMPORTED_MODULE_1__.update)(el.children, elInsertLocation);
    (0,_parse_js__WEBPACK_IMPORTED_MODULE_1__.update)(wrapperDom, el);
});
/**
 * The .unwrap() function, removes the parents of the set of matched elements
 * from the DOM, leaving the matched elements in their place.
 *
 * @category Manipulation
 * @example <caption>without selector</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div id=test>\n  <div><p>Hello</p></div>\n  <div><p>World</p></div>\n</div>'
 * );
 * $('#test p').unwrap();
 *
 * //=> <div id=test>
 * //     <p>Hello</p>
 * //     <p>World</p>
 * //   </div>
 * ```
 *
 * @example <caption>with selector</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div id=test>\n  <p>Hello</p>\n  <b><p>World</p></b>\n</div>'
 * );
 * $('#test p').unwrap('b');
 *
 * //=> <div id=test>
 * //     <p>Hello</p>
 * //     <p>World</p>
 * //   </div>
 * ```
 *
 * @param selector - A selector to check the parent element against. If an
 *   element's parent does not match the selector, the element won't be unwrapped.
 * @returns The instance itself, for chaining.
 * @see {@link https://api.jquery.com/unwrap/}
 */
function unwrap(selector) {
    this.parent(selector)
        .not('body')
        .each((_, el) => {
        this._make(el).replaceWith(el.children);
    });
    return this;
}
/**
 * The .wrapAll() function can take any string or object that could be passed to
 * the $() function to specify a DOM structure. This structure may be nested
 * several levels deep, but should contain only one inmost element. The
 * structure will be wrapped around all of the elements in the set of matched
 * elements, as a single group.
 *
 * @category Manipulation
 * @example <caption>With markup passed to `wrapAll`</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div class="container"><div class="inner">First</div><div class="inner">Second</div></div>'
 * );
 * $('.inner').wrapAll("<div class='new'></div>");
 *
 * //=> <div class="container">
 * //     <div class='new'>
 * //       <div class="inner">First</div>
 * //       <div class="inner">Second</div>
 * //     </div>
 * //   </div>
 * ```
 *
 * @example <caption>With an existing cheerio instance</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<span>Span 1</span><strong>Strong</strong><span>Span 2</span>'
 * );
 * const wrap = $('<div><p><em><b></b></em></p></div>');
 * $('span').wrapAll(wrap);
 *
 * //=> <div>
 * //     <p>
 * //       <em>
 * //         <b>
 * //           <span>Span 1</span>
 * //           <span>Span 2</span>
 * //         </b>
 * //       </em>
 * //     </p>
 * //   </div>
 * //   <strong>Strong</strong>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around all matched elements in the
 *   selection.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/wrapAll/}
 */
function wrapAll(wrapper) {
    const el = this[0];
    if (el) {
        const wrap = this._make(typeof wrapper === 'function' ? wrapper.call(el, 0, el) : wrapper).insertBefore(el);
        // If html is given as wrapper, wrap may contain text elements
        let elInsertLocation;
        for (let i = 0; i < wrap.length; i++) {
            if (wrap[i].type === 'tag')
                elInsertLocation = wrap[i];
        }
        let j = 0;
        /*
         * Find the deepest child. Only consider the first tag child of each node
         * (ignore text); stop if no children are found.
         */
        while (elInsertLocation && j < elInsertLocation.children.length) {
            const child = elInsertLocation.children[j];
            if (child.type === 'tag') {
                elInsertLocation = child;
                j = 0;
            }
            else {
                j++;
            }
        }
        if (elInsertLocation)
            this._make(elInsertLocation).append(this);
    }
    return this;
}
/* eslint-disable jsdoc/check-param-names*/
/**
 * Insert content next to each element in the set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.apple').after('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="plum">Plum</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param content - HTML string, DOM element, array of DOM elements or Cheerio
 *   to insert after each element in the set of matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/after/}
 */
function after(...elems) {
    const lastIdx = this.length - 1;
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.domEach)(this, (el, i) => {
        const { parent } = el;
        if (!(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(el) || !parent) {
            return;
        }
        const siblings = parent.children;
        const index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        const domSrc = typeof elems[0] === 'function'
            ? elems[0].call(el, i, this._render(el.children))
            : elems;
        const dom = this._makeDomArray(domSrc, i < lastIdx);
        // Add element after `this` element
        uniqueSplice(siblings, index + 1, 0, dom, parent);
    });
}
/* eslint-enable jsdoc/check-param-names*/
/**
 * Insert every element in the set of matched elements after the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').insertAfter('.apple');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="plum">Plum</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to insert elements after.
 * @returns The set of newly inserted elements.
 * @see {@link https://api.jquery.com/insertAfter/}
 */
function insertAfter(target) {
    if (typeof target === 'string') {
        target = this._make(target);
    }
    this.remove();
    const clones = [];
    this._makeDomArray(target).forEach((el) => {
        const clonedSelf = this.clone().toArray();
        const { parent } = el;
        if (!parent) {
            return;
        }
        const siblings = parent.children;
        const index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        // Add cloned `this` element(s) after target element
        uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
        clones.push(...clonedSelf);
    });
    return this._make(clones);
}
/* eslint-disable jsdoc/check-param-names*/
/**
 * Insert content previous to each element in the set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.apple').before('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param content - HTML string, DOM element, array of DOM elements or Cheerio
 *   to insert before each element in the set of matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/before/}
 */
function before(...elems) {
    const lastIdx = this.length - 1;
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.domEach)(this, (el, i) => {
        const { parent } = el;
        if (!(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(el) || !parent) {
            return;
        }
        const siblings = parent.children;
        const index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        const domSrc = typeof elems[0] === 'function'
            ? elems[0].call(el, i, this._render(el.children))
            : elems;
        const dom = this._makeDomArray(domSrc, i < lastIdx);
        // Add element before `el` element
        uniqueSplice(siblings, index, 0, dom, parent);
    });
}
/* eslint-enable jsdoc/check-param-names*/
/**
 * Insert every element in the set of matched elements before the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').insertBefore('.apple');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to insert elements before.
 * @returns The set of newly inserted elements.
 * @see {@link https://api.jquery.com/insertBefore/}
 */
function insertBefore(target) {
    const targetArr = this._make(target);
    this.remove();
    const clones = [];
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.domEach)(targetArr, (el) => {
        const clonedSelf = this.clone().toArray();
        const { parent } = el;
        if (!parent) {
            return;
        }
        const siblings = parent.children;
        const index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        // Add cloned `this` element(s) after target element
        uniqueSplice(siblings, index, 0, clonedSelf, parent);
        clones.push(...clonedSelf);
    });
    return this._make(clones);
}
/**
 * Removes the set of matched elements from the DOM and all their children.
 * `selector` filters the set of matched elements to be removed.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.pear').remove();
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //    </ul>
 * ```
 *
 * @param selector - Optional selector for elements to remove.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/remove/}
 */
function remove(selector) {
    // Filter if we have selector
    const elems = selector ? this.filter(selector) : this;
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.domEach)(elems, (el) => {
        (0,domutils__WEBPACK_IMPORTED_MODULE_4__.removeElement)(el);
        el.prev = el.next = el.parent = null;
    });
    return this;
}
/**
 * Replaces matched elements with `content`.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const plum = $('<li class="plum">Plum</li>');
 * $('.pear').replaceWith(plum);
 * $.html();
 * //=> <ul id="fruits">
 * //     <li class="apple">Apple</li>
 * //     <li class="orange">Orange</li>
 * //     <li class="plum">Plum</li>
 * //   </ul>
 * ```
 *
 * @param content - Replacement for matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/replaceWith/}
 */
function replaceWith(content) {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.domEach)(this, (el, i) => {
        const { parent } = el;
        if (!parent) {
            return;
        }
        const siblings = parent.children;
        const cont = typeof content === 'function' ? content.call(el, i, el) : content;
        const dom = this._makeDomArray(cont);
        /*
         * In the case that `dom` contains nodes that already exist in other
         * structures, ensure those nodes are properly removed.
         */
        (0,_parse_js__WEBPACK_IMPORTED_MODULE_1__.update)(dom, null);
        const index = siblings.indexOf(el);
        // Completely remove old element
        uniqueSplice(siblings, index, 1, dom, parent);
        if (!dom.includes(el)) {
            el.parent = el.prev = el.next = null;
        }
    });
}
/**
 * Empties an element, removing all its children.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').empty();
 * $.html();
 * //=>  <ul id="fruits"></ul>
 * ```
 *
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/empty/}
 */
function empty() {
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.domEach)(this, (el) => {
        if (!(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(el))
            return;
        el.children.forEach((child) => {
            child.next = child.prev = child.parent = null;
        });
        el.children.length = 0;
    });
}
function html(str) {
    if (str === undefined) {
        const el = this[0];
        if (!el || !(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(el))
            return null;
        return this._render(el.children);
    }
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.domEach)(this, (el) => {
        if (!(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(el))
            return;
        el.children.forEach((child) => {
            child.next = child.prev = child.parent = null;
        });
        const content = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isCheerio)(str)
            ? str.toArray()
            : this._parse(`${str}`, this.options, false, el).children;
        (0,_parse_js__WEBPACK_IMPORTED_MODULE_1__.update)(content, el);
    });
}
/**
 * Turns the collection to a string. Alias for `.html()`.
 *
 * @category Manipulation
 * @returns The rendered document.
 */
function toString() {
    return this._render(this);
}
function text(str) {
    // If `str` is undefined, act as a "getter"
    if (str === undefined) {
        return (0,_static_js__WEBPACK_IMPORTED_MODULE_2__.text)(this);
    }
    if (typeof str === 'function') {
        // Function support
        return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.domEach)(this, (el, i) => this._make(el).text(str.call(el, i, (0,_static_js__WEBPACK_IMPORTED_MODULE_2__.text)([el]))));
    }
    // Append text node to each selected elements
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.domEach)(this, (el) => {
        if (!(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(el))
            return;
        el.children.forEach((child) => {
            child.next = child.prev = child.parent = null;
        });
        const textNode = new domhandler__WEBPACK_IMPORTED_MODULE_0__.Text(`${str}`);
        (0,_parse_js__WEBPACK_IMPORTED_MODULE_1__.update)(textNode, el);
    });
}
/**
 * Clone the cheerio object.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const moreFruit = $('#fruits').clone();
 * ```
 *
 * @returns The cloned object.
 * @see {@link https://api.jquery.com/clone/}
 */
function clone() {
    return this._make((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.cloneDom)(this.get()));
}
//# sourceMappingURL=manipulation.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/api/traversing.js":
/*!********************************************************!*\
  !*** ./node_modules/cheerio/lib/esm/api/traversing.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   addBack: () => (/* binding */ addBack),
/* harmony export */   children: () => (/* binding */ children),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   contents: () => (/* binding */ contents),
/* harmony export */   each: () => (/* binding */ each),
/* harmony export */   end: () => (/* binding */ end),
/* harmony export */   eq: () => (/* binding */ eq),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   filterArray: () => (/* binding */ filterArray),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   first: () => (/* binding */ first),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   last: () => (/* binding */ last),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   nextAll: () => (/* binding */ nextAll),
/* harmony export */   nextUntil: () => (/* binding */ nextUntil),
/* harmony export */   not: () => (/* binding */ not),
/* harmony export */   parent: () => (/* binding */ parent),
/* harmony export */   parents: () => (/* binding */ parents),
/* harmony export */   parentsUntil: () => (/* binding */ parentsUntil),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   prevAll: () => (/* binding */ prevAll),
/* harmony export */   prevUntil: () => (/* binding */ prevUntil),
/* harmony export */   siblings: () => (/* binding */ siblings),
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   toArray: () => (/* binding */ toArray)
/* harmony export */ });
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cheerio-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/cheerio/lib/esm/utils.js");
/* harmony import */ var _static_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static.js */ "./node_modules/cheerio/lib/esm/static.js");
/* harmony import */ var domutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! domutils */ "./node_modules/cheerio/node_modules/domutils/lib/esm/index.js");
/**
 * Methods for traversing the DOM structure.
 *
 * @module cheerio/traversing
 */





const reSiblingSelector = /^\s*[~+]/;
/**
 * Get the descendants of each element in the current set of matched elements,
 * filtered by a selector, jQuery object, or element.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').find('li').length;
 * //=> 3
 * $('#fruits').find($('.apple')).length;
 * //=> 1
 * ```
 *
 * @param selectorOrHaystack - Element to look for.
 * @returns The found elements.
 * @see {@link https://api.jquery.com/find/}
 */
function find(selectorOrHaystack) {
    var _a;
    if (!selectorOrHaystack) {
        return this._make([]);
    }
    const context = this.toArray();
    if (typeof selectorOrHaystack !== 'string') {
        const haystack = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isCheerio)(selectorOrHaystack)
            ? selectorOrHaystack.toArray()
            : [selectorOrHaystack];
        return this._make(haystack.filter((elem) => context.some((node) => (0,_static_js__WEBPACK_IMPORTED_MODULE_3__.contains)(node, elem))));
    }
    const elems = reSiblingSelector.test(selectorOrHaystack)
        ? context
        : this.children().toArray();
    const options = {
        context,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
        // Pass options that are recognized by `cheerio-select`
        xmlMode: this.options.xmlMode,
        lowerCaseTags: this.options.lowerCaseTags,
        lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
        pseudos: this.options.pseudos,
        quirksMode: this.options.quirksMode,
    };
    return this._make(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cheerio-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(selectorOrHaystack, elems, options));
}
/**
 * Creates a matcher, using a particular mapping function. Matchers provide a
 * function that finds elements using a generating function, supporting filtering.
 *
 * @private
 * @param matchMap - Mapping function.
 * @returns - Function for wrapping generating functions.
 */
function _getMatcher(matchMap) {
    return function (fn, ...postFns) {
        return function (selector) {
            var _a;
            let matched = matchMap(fn, this);
            if (selector) {
                matched = filterArray(matched, selector, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]);
            }
            return this._make(
            // Post processing is only necessary if there is more than one element.
            this.length > 1 && matched.length > 1
                ? postFns.reduce((elems, fn) => fn(elems), matched)
                : matched);
        };
    };
}
/** Matcher that adds multiple elements for each entry in the input. */
const _matcher = _getMatcher((fn, elems) => {
    const ret = [];
    for (let i = 0; i < elems.length; i++) {
        const value = fn(elems[i]);
        ret.push(value);
    }
    return new Array().concat(...ret);
});
/** Matcher that adds at most one element for each entry in the input. */
const _singleMatcher = _getMatcher((fn, elems) => {
    const ret = [];
    for (let i = 0; i < elems.length; i++) {
        const value = fn(elems[i]);
        if (value !== null) {
            ret.push(value);
        }
    }
    return ret;
});
/**
 * Matcher that supports traversing until a condition is met.
 *
 * @returns A function usable for `*Until` methods.
 */
function _matchUntil(nextElem, ...postFns) {
    // We use a variable here that is used from within the matcher.
    let matches = null;
    const innerMatcher = _getMatcher((nextElem, elems) => {
        const matched = [];
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.domEach)(elems, (elem) => {
            for (let next; (next = nextElem(elem)); elem = next) {
                // FIXME: `matched` might contain duplicates here and the index is too large.
                if (matches === null || matches === void 0 ? void 0 : matches(next, matched.length))
                    break;
                matched.push(next);
            }
        });
        return matched;
    })(nextElem, ...postFns);
    return function (selector, filterSelector) {
        // Override `matches` variable with the new target.
        matches =
            typeof selector === 'string'
                ? (elem) => Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cheerio-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(elem, selector, this.options)
                : selector
                    ? getFilterFn(selector)
                    : null;
        const ret = innerMatcher.call(this, filterSelector);
        // Set `matches` to `null`, so we don't waste memory.
        matches = null;
        return ret;
    };
}
function _removeDuplicates(elems) {
    return Array.from(new Set(elems));
}
/**
 * Get the parent of each element in the current set of matched elements,
 * optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').parent().attr('id');
 * //=> fruits
 * ```
 *
 * @param selector - If specified filter for parent.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parent/}
 */
const parent = _singleMatcher(({ parent }) => (parent && !(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isDocument)(parent) ? parent : null), _removeDuplicates);
/**
 * Get a set of parents filtered by `selector` of each element in the current
 * set of match elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').parents().length;
 * //=> 2
 * $('.orange').parents('#fruits').length;
 * //=> 1
 * ```
 *
 * @param selector - If specified filter for parents.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parents/}
 */
const parents = _matcher((elem) => {
    const matched = [];
    while (elem.parent && !(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isDocument)(elem.parent)) {
        matched.push(elem.parent);
        elem = elem.parent;
    }
    return matched;
}, domutils__WEBPACK_IMPORTED_MODULE_4__.uniqueSort, (elems) => elems.reverse());
/**
 * Get the ancestors of each element in the current set of matched elements, up
 * to but not including the element matched by the selector, DOM node, or cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').parentsUntil('#food').length;
 * //=> 1
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - Optional filter for parents.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parentsUntil/}
 */
const parentsUntil = _matchUntil(({ parent }) => (parent && !(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isDocument)(parent) ? parent : null), domutils__WEBPACK_IMPORTED_MODULE_4__.uniqueSort, (elems) => elems.reverse());
/**
 * For each element in the set, get the first element that matches the selector
 * by testing the element itself and traversing up through its ancestors in the DOM tree.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').closest();
 * //=> []
 *
 * $('.orange').closest('.apple');
 * // => []
 *
 * $('.orange').closest('li');
 * //=> [<li class="orange">Orange</li>]
 *
 * $('.orange').closest('#fruits');
 * //=> [<ul id="fruits"> ... </ul>]
 * ```
 *
 * @param selector - Selector for the element to find.
 * @returns The closest nodes.
 * @see {@link https://api.jquery.com/closest/}
 */
function closest(selector) {
    var _a;
    const set = [];
    if (!selector) {
        return this._make(set);
    }
    const selectOpts = {
        xmlMode: this.options.xmlMode,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
    };
    const selectFn = typeof selector === 'string'
        ? (elem) => Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cheerio-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(elem, selector, selectOpts)
        : getFilterFn(selector);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.domEach)(this, (elem) => {
        while (elem && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isTag)(elem)) {
            if (selectFn(elem, 0)) {
                // Do not add duplicate elements to the set
                if (!set.includes(elem)) {
                    set.push(elem);
                }
                break;
            }
            elem = elem.parent;
        }
    });
    return this._make(set);
}
/**
 * Gets the next sibling of the first selected element, optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').next().hasClass('orange');
 * //=> true
 * ```
 *
 * @param selector - If specified filter for sibling.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/next/}
 */
const next = _singleMatcher((elem) => (0,domutils__WEBPACK_IMPORTED_MODULE_4__.nextElementSibling)(elem));
/**
 * Gets all the following siblings of the first selected element, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').nextAll();
 * //=> [<li class="orange">Orange</li>, <li class="pear">Pear</li>]
 * $('.apple').nextAll('.orange');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/nextAll/}
 */
const nextAll = _matcher((elem) => {
    const matched = [];
    while (elem.next) {
        elem = elem.next;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isTag)(elem))
            matched.push(elem);
    }
    return matched;
}, _removeDuplicates);
/**
 * Gets all the following siblings up to but not including the element matched
 * by the selector, optionally filtered by another selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').nextUntil('.pear');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - If specified filter for siblings.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/nextUntil/}
 */
const nextUntil = _matchUntil((el) => (0,domutils__WEBPACK_IMPORTED_MODULE_4__.nextElementSibling)(el), _removeDuplicates);
/**
 * Gets the previous sibling of the first selected element optionally filtered
 * by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').prev().hasClass('apple');
 * //=> true
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prev/}
 */
const prev = _singleMatcher((elem) => (0,domutils__WEBPACK_IMPORTED_MODULE_4__.prevElementSibling)(elem));
/**
 * Gets all the preceding siblings of the first selected element, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').prevAll();
 * //=> [<li class="orange">Orange</li>, <li class="apple">Apple</li>]
 *
 * $('.pear').prevAll('.orange');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prevAll/}
 */
const prevAll = _matcher((elem) => {
    const matched = [];
    while (elem.prev) {
        elem = elem.prev;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isTag)(elem))
            matched.push(elem);
    }
    return matched;
}, _removeDuplicates);
/**
 * Gets all the preceding siblings up to but not including the element matched
 * by the selector, optionally filtered by another selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').prevUntil('.apple');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prevUntil/}
 */
const prevUntil = _matchUntil((el) => (0,domutils__WEBPACK_IMPORTED_MODULE_4__.prevElementSibling)(el), _removeDuplicates);
/**
 * Get the siblings of each element (excluding the element) in the set of
 * matched elements, optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').siblings().length;
 * //=> 2
 *
 * $('.pear').siblings('.orange').length;
 * //=> 1
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The siblings.
 * @see {@link https://api.jquery.com/siblings/}
 */
const siblings = _matcher((elem) => (0,domutils__WEBPACK_IMPORTED_MODULE_4__.getSiblings)(elem).filter((el) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isTag)(el) && el !== elem), domutils__WEBPACK_IMPORTED_MODULE_4__.uniqueSort);
/**
 * Gets the element children of each element in the set of matched elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().length;
 * //=> 3
 *
 * $('#fruits').children('.pear').text();
 * //=> Pear
 * ```
 *
 * @param selector - If specified filter for children.
 * @returns The children.
 * @see {@link https://api.jquery.com/children/}
 */
const children = _matcher((elem) => (0,domutils__WEBPACK_IMPORTED_MODULE_4__.getChildren)(elem).filter(_utils_js__WEBPACK_IMPORTED_MODULE_2__.isTag), _removeDuplicates);
/**
 * Gets the children of each element in the set of matched elements, including
 * text and comment nodes.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').contents().length;
 * //=> 3
 * ```
 *
 * @returns The children.
 * @see {@link https://api.jquery.com/contents/}
 */
function contents() {
    const elems = this.toArray().reduce((newElems, elem) => (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(elem) ? newElems.concat(elem.children) : newElems, []);
    return this._make(elems);
}
/**
 * Iterates over a cheerio object, executing a function for each matched
 * element. When the callback is fired, the function is fired in the context of
 * the DOM element, so `this` refers to the current element, which is equivalent
 * to the function parameter `element`. To break out of the `each` loop early,
 * return with `false`.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * const fruits = [];
 *
 * $('li').each(function (i, elem) {
 *   fruits[i] = $(this).text();
 * });
 *
 * fruits.join(', ');
 * //=> Apple, Orange, Pear
 * ```
 *
 * @param fn - Function to execute.
 * @returns The instance itself, useful for chaining.
 * @see {@link https://api.jquery.com/each/}
 */
function each(fn) {
    let i = 0;
    const len = this.length;
    while (i < len && fn.call(this[i], i, this[i]) !== false)
        ++i;
    return this;
}
/**
 * Pass each element in the current matched set through a function, producing a
 * new Cheerio object containing the return values. The function can return an
 * individual data item or an array of data items to be inserted into the
 * resulting set. If an array is returned, the elements inside the array are
 * inserted into the set. If the function returns null or undefined, no element
 * will be inserted.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li')
 *   .map(function (i, el) {
 *     // this === el
 *     return $(this).text();
 *   })
 *   .toArray()
 *   .join(' ');
 * //=> "apple orange pear"
 * ```
 *
 * @param fn - Function to execute.
 * @returns The mapped elements, wrapped in a Cheerio collection.
 * @see {@link https://api.jquery.com/map/}
 */
function map(fn) {
    let elems = [];
    for (let i = 0; i < this.length; i++) {
        const el = this[i];
        const val = fn.call(el, i, el);
        if (val != null) {
            elems = elems.concat(val);
        }
    }
    return this._make(elems);
}
/**
 * Creates a function to test if a filter is matched.
 *
 * @param match - A filter.
 * @returns A function that determines if a filter has been matched.
 */
function getFilterFn(match) {
    if (typeof match === 'function') {
        return (el, i) => match.call(el, i, el);
    }
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isCheerio)(match)) {
        return (el) => Array.prototype.includes.call(match, el);
    }
    return function (el) {
        return match === el;
    };
}
function filter(match) {
    var _a;
    return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]));
}
function filterArray(nodes, match, xmlMode, root) {
    return typeof match === 'string'
        ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cheerio-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(match, nodes, { xmlMode, root })
        : nodes.filter(getFilterFn(match));
}
/**
 * Checks the current list of elements and returns `true` if _any_ of the
 * elements match the selector. If using an element or Cheerio selection,
 * returns `true` if _any_ of the elements match. If using a predicate function,
 * the function is executed in the context of the selected element, so `this`
 * refers to the current element.
 *
 * @category Attributes
 * @param selector - Selector for the selection.
 * @returns Whether or not the selector matches an element of the instance.
 * @see {@link https://api.jquery.com/is/}
 */
function is(selector) {
    const nodes = this.toArray();
    return typeof selector === 'string'
        ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cheerio-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(nodes.filter(_utils_js__WEBPACK_IMPORTED_MODULE_2__.isTag), selector, this.options)
        : selector
            ? nodes.some(getFilterFn(selector))
            : false;
}
/**
 * Remove elements from the set of matched elements. Given a Cheerio object that
 * represents a set of DOM elements, the `.not()` method constructs a new
 * Cheerio object from a subset of the matching elements. The supplied selector
 * is tested against each element; the elements that don't match the selector
 * will be included in the result.
 *
 * The `.not()` method can take a function as its argument in the same way that
 * `.filter()` does. Elements for which the function returns `true` are excluded
 * from the filtered set; all other elements are included.
 *
 * @category Traversing
 * @example <caption>Selector</caption>
 *
 * ```js
 * $('li').not('.apple').length;
 * //=> 2
 * ```
 *
 * @example <caption>Function</caption>
 *
 * ```js
 * $('li').not(function (i, el) {
 *   // this === el
 *   return $(this).attr('class') === 'orange';
 * }).length; //=> 2
 * ```
 *
 * @param match - Value to look for, following the rules above.
 * @param container - Optional node to filter instead.
 * @returns The filtered collection.
 * @see {@link https://api.jquery.com/not/}
 */
function not(match) {
    let nodes = this.toArray();
    if (typeof match === 'string') {
        const matches = new Set(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cheerio-select'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(match, nodes, this.options));
        nodes = nodes.filter((el) => !matches.has(el));
    }
    else {
        const filterFn = getFilterFn(match);
        nodes = nodes.filter((el, i) => !filterFn(el, i));
    }
    return this._make(nodes);
}
/**
 * Filters the set of matched elements to only those which have the given DOM
 * element as a descendant or which have a descendant that matches the given
 * selector. Equivalent to `.filter(':has(selector)')`.
 *
 * @category Traversing
 * @example <caption>Selector</caption>
 *
 * ```js
 * $('ul').has('.pear').attr('id');
 * //=> fruits
 * ```
 *
 * @example <caption>Element</caption>
 *
 * ```js
 * $('ul').has($('.pear')[0]).attr('id');
 * //=> fruits
 * ```
 *
 * @param selectorOrHaystack - Element to look for.
 * @returns The filtered collection.
 * @see {@link https://api.jquery.com/has/}
 */
function has(selectorOrHaystack) {
    return this.filter(typeof selectorOrHaystack === 'string'
        ? // Using the `:has` selector here short-circuits searches.
            `:has(${selectorOrHaystack})`
        : (_, el) => this._make(el).find(selectorOrHaystack).length > 0);
}
/**
 * Will select the first element of a cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().first().text();
 * //=> Apple
 * ```
 *
 * @returns The first element.
 * @see {@link https://api.jquery.com/first/}
 */
function first() {
    return this.length > 1 ? this._make(this[0]) : this;
}
/**
 * Will select the last element of a cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().last().text();
 * //=> Pear
 * ```
 *
 * @returns The last element.
 * @see {@link https://api.jquery.com/last/}
 */
function last() {
    return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
/**
 * Reduce the set of matched elements to the one at the specified index. Use
 * `.eq(-i)` to count backwards from the last selected element.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).text();
 * //=> Apple
 *
 * $('li').eq(-1).text();
 * //=> Pear
 * ```
 *
 * @param i - Index of the element to select.
 * @returns The element at the `i`th position.
 * @see {@link https://api.jquery.com/eq/}
 */
function eq(i) {
    var _a;
    i = +i;
    // Use the first identity optimization if possible
    if (i === 0 && this.length <= 1)
        return this;
    if (i < 0)
        i = this.length + i;
    return this._make((_a = this[i]) !== null && _a !== void 0 ? _a : []);
}
function get(i) {
    if (i == null) {
        return this.toArray();
    }
    return this[i < 0 ? this.length + i : i];
}
/**
 * Retrieve all the DOM elements contained in the jQuery set as an array.
 *
 * @example
 *
 * ```js
 * $('li').toArray();
 * //=> [ {...}, {...}, {...} ]
 * ```
 *
 * @returns The contained items.
 */
function toArray() {
    return Array.prototype.slice.call(this);
}
/**
 * Search for a given element from among the matched elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').index();
 * //=> 2 $('.orange').index('li');
 * //=> 1
 * $('.apple').index($('#fruit, li'));
 * //=> 1
 * ```
 *
 * @param selectorOrNeedle - Element to look for.
 * @returns The index of the element.
 * @see {@link https://api.jquery.com/index/}
 */
function index(selectorOrNeedle) {
    let $haystack;
    let needle;
    if (selectorOrNeedle == null) {
        $haystack = this.parent().children();
        needle = this[0];
    }
    else if (typeof selectorOrNeedle === 'string') {
        $haystack = this._make(selectorOrNeedle);
        needle = this[0];
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        $haystack = this;
        needle = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isCheerio)(selectorOrNeedle)
            ? selectorOrNeedle[0]
            : selectorOrNeedle;
    }
    return Array.prototype.indexOf.call($haystack, needle);
}
/**
 * Gets the elements matching the specified range (0-based position).
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').slice(1).eq(0).text();
 * //=> 'Orange'
 *
 * $('li').slice(1, 2).length;
 * //=> 1
 * ```
 *
 * @param start - A position at which the elements begin to be selected. If
 *   negative, it indicates an offset from the end of the set.
 * @param end - A position at which the elements stop being selected. If
 *   negative, it indicates an offset from the end of the set. If omitted, the
 *   range continues until the end of the set.
 * @returns The elements matching the specified range.
 * @see {@link https://api.jquery.com/slice/}
 */
function slice(start, end) {
    return this._make(Array.prototype.slice.call(this, start, end));
}
/**
 * End the most recent filtering operation in the current chain and return the
 * set of matched elements to its previous state.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).end().length;
 * //=> 3
 * ```
 *
 * @returns The previous state of the set of matched elements.
 * @see {@link https://api.jquery.com/end/}
 */
function end() {
    var _a;
    return (_a = this.prevObject) !== null && _a !== void 0 ? _a : this._make([]);
}
/**
 * Add elements to the set of matched elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').add('.orange').length;
 * //=> 2
 * ```
 *
 * @param other - Elements to add.
 * @param context - Optionally the context of the new selection.
 * @returns The combined set.
 * @see {@link https://api.jquery.com/add/}
 */
function add(other, context) {
    const selection = this._make(other, context);
    const contents = (0,domutils__WEBPACK_IMPORTED_MODULE_4__.uniqueSort)([...this.get(), ...selection.get()]);
    return this._make(contents);
}
/**
 * Add the previous set of elements on the stack to the current set, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).addBack('.orange').length;
 * //=> 2
 * ```
 *
 * @param selector - Selector for the elements to add.
 * @returns The combined set.
 * @see {@link https://api.jquery.com/addBack/}
 */
function addBack(selector) {
    return this.prevObject
        ? this.add(selector ? this.prevObject.filter(selector) : this.prevObject)
        : this;
}
//# sourceMappingURL=traversing.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/cheerio.js":
/*!*************************************************!*\
  !*** ./node_modules/cheerio/lib/esm/cheerio.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cheerio: () => (/* binding */ Cheerio)
/* harmony export */ });
/* harmony import */ var _api_attributes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/attributes.js */ "./node_modules/cheerio/lib/esm/api/attributes.js");
/* harmony import */ var _api_traversing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/traversing.js */ "./node_modules/cheerio/lib/esm/api/traversing.js");
/* harmony import */ var _api_manipulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/manipulation.js */ "./node_modules/cheerio/lib/esm/api/manipulation.js");
/* harmony import */ var _api_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/css.js */ "./node_modules/cheerio/lib/esm/api/css.js");
/* harmony import */ var _api_forms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/forms.js */ "./node_modules/cheerio/lib/esm/api/forms.js");





class Cheerio {
    /**
     * Instance of cheerio. Methods are specified in the modules. Usage of this
     * constructor is not recommended. Please use `$.load` instead.
     *
     * @private
     * @param elements - The new selection.
     * @param root - Sets the root node.
     * @param options - Options for the instance.
     */
    constructor(elements, root, options) {
        this.length = 0;
        this.options = options;
        this._root = root;
        if (elements) {
            for (let idx = 0; idx < elements.length; idx++) {
                this[idx] = elements[idx];
            }
            this.length = elements.length;
        }
    }
}
/** Set a signature of the object. */
Cheerio.prototype.cheerio = '[cheerio object]';
/*
 * Make cheerio an array-like object
 */
Cheerio.prototype.splice = Array.prototype.splice;
// Support for (const element of $(...)) iteration:
Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
// Plug in the API
Object.assign(Cheerio.prototype, _api_attributes_js__WEBPACK_IMPORTED_MODULE_0__, _api_traversing_js__WEBPACK_IMPORTED_MODULE_1__, _api_manipulation_js__WEBPACK_IMPORTED_MODULE_2__, _api_css_js__WEBPACK_IMPORTED_MODULE_3__, _api_forms_js__WEBPACK_IMPORTED_MODULE_4__);
//# sourceMappingURL=cheerio.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/cheerio/lib/esm/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   html: () => (/* reexport safe */ _static_js__WEBPACK_IMPORTED_MODULE_6__.html),
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   parseHTML: () => (/* binding */ parseHTML),
/* harmony export */   root: () => (/* binding */ root),
/* harmony export */   text: () => (/* reexport safe */ _static_js__WEBPACK_IMPORTED_MODULE_6__.text),
/* harmony export */   xml: () => (/* reexport safe */ _static_js__WEBPACK_IMPORTED_MODULE_6__.xml)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/cheerio/lib/esm/types.js");
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load.js */ "./node_modules/cheerio/lib/esm/load.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse.js */ "./node_modules/cheerio/lib/esm/parse.js");
/* harmony import */ var _parsers_parse5_adapter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/parse5-adapter.js */ "./node_modules/cheerio/lib/esm/parsers/parse5-adapter.js");
/* harmony import */ var dom_serializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-serializer */ "./node_modules/cheerio/node_modules/dom-serializer/lib/esm/index.js");
/* harmony import */ var htmlparser2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! htmlparser2 */ "./node_modules/cheerio/node_modules/htmlparser2/lib/esm/index.js");
/* harmony import */ var _static_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static.js */ "./node_modules/cheerio/lib/esm/static.js");
/**
 * Types used in signatures of Cheerio methods.
 *
 * @category Cheerio
 */






const parse = (0,_parse_js__WEBPACK_IMPORTED_MODULE_2__.getParse)((content, options, isDocument, context) => options.xmlMode || options._useHtmlParser2
    ? (0,htmlparser2__WEBPACK_IMPORTED_MODULE_5__.parseDocument)(content, options)
    : (0,_parsers_parse5_adapter_js__WEBPACK_IMPORTED_MODULE_3__.parseWithParse5)(content, options, isDocument, context));
// Duplicate docs due to https://github.com/TypeStrong/typedoc/issues/1616
/**
 * Create a querying function, bound to a document created from the provided markup.
 *
 * Note that similar to web browser contexts, this operation may introduce
 * `<html>`, `<head>`, and `<body>` elements; set `isDocument` to `false` to
 * switch to fragment mode and disable this.
 *
 * @param content - Markup to be loaded.
 * @param options - Options for the created instance.
 * @param isDocument - Allows parser to be switched to fragment mode.
 * @returns The loaded document.
 * @see {@link https://cheerio.js.org#loading} for additional usage information.
 */
const load = (0,_load_js__WEBPACK_IMPORTED_MODULE_1__.getLoad)(parse, (dom, options) => options.xmlMode || options._useHtmlParser2
    ? (0,dom_serializer__WEBPACK_IMPORTED_MODULE_4__["default"])(dom, options)
    : (0,_parsers_parse5_adapter_js__WEBPACK_IMPORTED_MODULE_3__.renderWithParse5)(dom));
/**
 * The default cheerio instance.
 *
 * @deprecated Use the function returned by `load` instead.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load([]));


/**
 * In order to promote consistency with the jQuery library, users are encouraged
 * to instead use the static method of the same name.
 *
 * @deprecated
 * @example
 *
 * ```js
 * const $ = cheerio.load('<div><p></p></div>');
 *
 * $.contains($('div').get(0), $('p').get(0));
 * //=> true
 *
 * $.contains($('p').get(0), $('div').get(0));
 * //=> false
 * ```
 *
 * @returns {boolean}
 */
const { contains } = _static_js__WEBPACK_IMPORTED_MODULE_6__;
/**
 * In order to promote consistency with the jQuery library, users are encouraged
 * to instead use the static method of the same name.
 *
 * @deprecated
 * @example
 *
 * ```js
 * const $ = cheerio.load('');
 *
 * $.merge([1, 2], [3, 4]);
 * //=> [1, 2, 3, 4]
 * ```
 */
const { merge } = _static_js__WEBPACK_IMPORTED_MODULE_6__;
/**
 * In order to promote consistency with the jQuery library, users are encouraged
 * to instead use the static method of the same name as it is defined on the
 * "loaded" Cheerio factory function.
 *
 * @deprecated See {@link static/parseHTML}.
 * @example
 *
 * ```js
 * const $ = cheerio.load('');
 * $.parseHTML('<b>markup</b>');
 * ```
 */
const { parseHTML } = _static_js__WEBPACK_IMPORTED_MODULE_6__;
/**
 * Users seeking to access the top-level element of a parsed document should
 * instead use the `root` static method of a "loaded" Cheerio function.
 *
 * @deprecated
 * @example
 *
 * ```js
 * const $ = cheerio.load('');
 * $.root();
 * ```
 */
const { root } = _static_js__WEBPACK_IMPORTED_MODULE_6__;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/load.js":
/*!**********************************************!*\
  !*** ./node_modules/cheerio/lib/esm/load.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoad: () => (/* binding */ getLoad)
/* harmony export */ });
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.js */ "./node_modules/cheerio/lib/esm/options.js");
/* harmony import */ var _static_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static.js */ "./node_modules/cheerio/lib/esm/static.js");
/* harmony import */ var _cheerio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cheerio.js */ "./node_modules/cheerio/lib/esm/cheerio.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/cheerio/lib/esm/utils.js");




function getLoad(parse, render) {
    /**
     * Create a querying function, bound to a document created from the provided markup.
     *
     * Note that similar to web browser contexts, this operation may introduce
     * `<html>`, `<head>`, and `<body>` elements; set `isDocument` to `false` to
     * switch to fragment mode and disable this.
     *
     * @param content - Markup to be loaded.
     * @param options - Options for the created instance.
     * @param isDocument - Allows parser to be switched to fragment mode.
     * @returns The loaded document.
     * @see {@link https://cheerio.js.org#loading} for additional usage information.
     */
    return function load(content, options, isDocument = true) {
        if (content == null) {
            throw new Error('cheerio.load() expects a string');
        }
        const internalOpts = { ..._options_js__WEBPACK_IMPORTED_MODULE_0__["default"], ...(0,_options_js__WEBPACK_IMPORTED_MODULE_0__.flatten)(options) };
        const initialRoot = parse(content, internalOpts, isDocument, null);
        /** Create an extended class here, so that extensions only live on one instance. */
        class LoadedCheerio extends _cheerio_js__WEBPACK_IMPORTED_MODULE_2__.Cheerio {
            _make(selector, context) {
                const cheerio = initialize(selector, context);
                cheerio.prevObject = this;
                return cheerio;
            }
            _parse(content, options, isDocument, context) {
                return parse(content, options, isDocument, context);
            }
            _render(dom) {
                return render(dom, this.options);
            }
        }
        function initialize(selector, context, root = initialRoot, opts) {
            // $($)
            if (selector && (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isCheerio)(selector))
                return selector;
            const options = {
                ...internalOpts,
                ...(0,_options_js__WEBPACK_IMPORTED_MODULE_0__.flatten)(opts),
            };
            const r = typeof root === 'string'
                ? [parse(root, options, false, null)]
                : 'length' in root
                    ? root
                    : [root];
            const rootInstance = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isCheerio)(r)
                ? r
                : new LoadedCheerio(r, null, options);
            // Add a cyclic reference, so that calling methods on `_root` never fails.
            rootInstance._root = rootInstance;
            // $(), $(null), $(undefined), $(false)
            if (!selector) {
                return new LoadedCheerio(undefined, rootInstance, options);
            }
            const elements = typeof selector === 'string' && (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isHtml)(selector)
                ? // $(<html>)
                    parse(selector, options, false, null).children
                : isNode(selector)
                    ? // $(dom)
                        [selector]
                    : Array.isArray(selector)
                        ? // $([dom])
                            selector
                        : undefined;
            const instance = new LoadedCheerio(elements, rootInstance, options);
            if (elements) {
                return instance;
            }
            if (typeof selector !== 'string') {
                throw new Error('Unexpected type of selector');
            }
            // We know that our selector is a string now.
            let search = selector;
            const searchContext = !context
                ? // If we don't have a context, maybe we have a root, from loading
                    rootInstance
                : typeof context === 'string'
                    ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isHtml)(context)
                        ? // $('li', '<ul>...</ul>')
                            new LoadedCheerio([parse(context, options, false, null)], rootInstance, options)
                        : // $('li', 'ul')
                            ((search = `${context} ${search}`), rootInstance)
                    : (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isCheerio)(context)
                        ? // $('li', $)
                            context
                        : // $('li', node), $('li', [nodes])
                            new LoadedCheerio(Array.isArray(context) ? context : [context], rootInstance, options);
            // If we still don't have a context, return
            if (!searchContext)
                return instance;
            /*
             * #id, .class, tag
             */
            return searchContext.find(search);
        }
        // Add in static methods & properties
        Object.assign(initialize, _static_js__WEBPACK_IMPORTED_MODULE_1__, {
            load,
            // `_root` and `_options` are used in static methods.
            _root: initialRoot,
            _options: internalOpts,
            // Add `fn` for plugins
            fn: LoadedCheerio.prototype,
            // Add the prototype here to maintain `instanceof` behavior.
            prototype: LoadedCheerio.prototype,
        });
        return initialize;
    };
}
function isNode(obj) {
    return (!!obj.name ||
        obj.type === 'root' ||
        obj.type === 'text' ||
        obj.type === 'comment');
}
//# sourceMappingURL=load.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/options.js":
/*!*************************************************!*\
  !*** ./node_modules/cheerio/lib/esm/options.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   flatten: () => (/* binding */ flatten)
/* harmony export */ });
const defaultOpts = {
    xml: false,
    decodeEntities: true,
};
/** Cheerio default options. */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultOpts);
const xmlModeDefault = {
    _useHtmlParser2: true,
    xmlMode: true,
};
/**
 * Flatten the options for Cheerio.
 *
 * This will set `_useHtmlParser2` to true if `xml` is set to true.
 *
 * @param options - The options to flatten.
 * @returns The flattened options.
 */
function flatten(options) {
    return (options === null || options === void 0 ? void 0 : options.xml)
        ? typeof options.xml === 'boolean'
            ? xmlModeDefault
            : { ...xmlModeDefault, ...options.xml }
        : options !== null && options !== void 0 ? options : undefined;
}
//# sourceMappingURL=options.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/parse.js":
/*!***********************************************!*\
  !*** ./node_modules/cheerio/lib/esm/parse.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getParse: () => (/* binding */ getParse),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var domutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domutils */ "./node_modules/cheerio/node_modules/domutils/lib/esm/index.js");
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");


/**
 * Get the parse function with options.
 *
 * @param parser - The parser function.
 * @returns The parse function with options.
 */
function getParse(parser) {
    /**
     * Parse a HTML string or a node.
     *
     * @param content - The HTML string or node.
     * @param options - The parser options.
     * @param isDocument - If `content` is a document.
     * @param context - The context node in the DOM tree.
     * @returns The parsed document node.
     */
    return function parse(content, options, isDocument, context) {
        if (typeof Buffer !== 'undefined' && Buffer.isBuffer(content)) {
            content = content.toString();
        }
        if (typeof content === 'string') {
            return parser(content, options, isDocument, context);
        }
        const doc = content;
        if (!Array.isArray(doc) && (0,domhandler__WEBPACK_IMPORTED_MODULE_1__.isDocument)(doc)) {
            // If `doc` is already a root, just return it
            return doc;
        }
        // Add conent to new root element
        const root = new domhandler__WEBPACK_IMPORTED_MODULE_1__.Document([]);
        // Update the DOM using the root
        update(doc, root);
        return root;
    };
}
/**
 * Update the dom structure, for one changed layer.
 *
 * @param newChilds - The new children.
 * @param parent - The new parent.
 * @returns The parent node.
 */
function update(newChilds, parent) {
    // Normalize
    const arr = Array.isArray(newChilds) ? newChilds : [newChilds];
    // Update parent
    if (parent) {
        parent.children = arr;
    }
    else {
        parent = null;
    }
    // Update neighbors
    for (let i = 0; i < arr.length; i++) {
        const node = arr[i];
        // Cleanly remove existing nodes from their previous structures.
        if (node.parent && node.parent.children !== arr) {
            (0,domutils__WEBPACK_IMPORTED_MODULE_0__.removeElement)(node);
        }
        if (parent) {
            node.prev = arr[i - 1] || null;
            node.next = arr[i + 1] || null;
        }
        else {
            node.prev = node.next = null;
        }
        node.parent = parent;
    }
    return parent;
}
//# sourceMappingURL=parse.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/parsers/parse5-adapter.js":
/*!****************************************************************!*\
  !*** ./node_modules/cheerio/lib/esm/parsers/parse5-adapter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseWithParse5: () => (/* binding */ parseWithParse5),
/* harmony export */   renderWithParse5: () => (/* binding */ renderWithParse5)
/* harmony export */ });
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'parse5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'parse5-htmlparser2-tree-adapter'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Parse the content with `parse5` in the context of the given `ParentNode`.
 *
 * @param content - The content to parse.
 * @param options - A set of options to use to parse.
 * @param isDocument - Whether to parse the content as a full HTML document.
 * @param context - The context in which to parse the content.
 * @returns The parsed content.
 */
function parseWithParse5(content, options, isDocument, context) {
    const opts = {
        scriptingEnabled: typeof options.scriptingEnabled === 'boolean'
            ? options.scriptingEnabled
            : true,
        treeAdapter: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'parse5-htmlparser2-tree-adapter'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        sourceCodeLocationInfo: options.sourceCodeLocationInfo,
    };
    return isDocument
        ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'parse5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(content, opts)
        : Object(function webpackMissingModule() { var e = new Error("Cannot find module 'parse5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(context, content, opts);
}
const renderOpts = { treeAdapter: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'parse5-htmlparser2-tree-adapter'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) };
/**
 * Renders the given DOM tree with `parse5` and returns the result as a string.
 *
 * @param dom - The DOM tree to render.
 * @returns The rendered document.
 */
function renderWithParse5(dom) {
    /*
     * `dom-serializer` passes over the special "root" node and renders the
     * node's children in its place. To mimic this behavior with `parse5`, an
     * equivalent operation must be applied to the input array.
     */
    const nodes = 'length' in dom ? dom : [dom];
    for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];
        if ((0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isDocument)(node)) {
            Array.prototype.splice.call(nodes, index, 1, ...node.children);
        }
    }
    let result = '';
    for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];
        result += Object(function webpackMissingModule() { var e = new Error("Cannot find module 'parse5'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(node, renderOpts);
    }
    return result;
}
//# sourceMappingURL=parse5-adapter.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/static.js":
/*!************************************************!*\
  !*** ./node_modules/cheerio/lib/esm/static.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   parseHTML: () => (/* binding */ parseHTML),
/* harmony export */   root: () => (/* binding */ root),
/* harmony export */   text: () => (/* binding */ text),
/* harmony export */   xml: () => (/* binding */ xml)
/* harmony export */ });
/* harmony import */ var domutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domutils */ "./node_modules/cheerio/node_modules/domutils/lib/esm/index.js");
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.js */ "./node_modules/cheerio/lib/esm/options.js");


/**
 * Helper function to render a DOM.
 *
 * @param that - Cheerio instance to render.
 * @param dom - The DOM to render. Defaults to `that`'s root.
 * @param options - Options for rendering.
 * @returns The rendered document.
 */
function render(that, dom, options) {
    if (!that)
        return '';
    return that(dom !== null && dom !== void 0 ? dom : that._root.children, null, undefined, options).toString();
}
/**
 * Checks if a passed object is an options object.
 *
 * @param dom - Object to check if it is an options object.
 * @returns Whether the object is an options object.
 */
function isOptions(dom, options) {
    return (!options &&
        typeof dom === 'object' &&
        dom != null &&
        !('length' in dom) &&
        !('type' in dom));
}
function html(dom, options) {
    /*
     * Be flexible about parameters, sometimes we call html(),
     * with options as only parameter
     * check dom argument for dom element specific properties
     * assume there is no 'length' or 'type' properties in the options object
     */
    const toRender = isOptions(dom) ? ((options = dom), undefined) : dom;
    /*
     * Sometimes `$.html()` is used without preloading html,
     * so fallback non-existing options to the default ones.
     */
    const opts = {
        ..._options_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        ...this === null || this === void 0 ? void 0 : this._options,
        ...(0,_options_js__WEBPACK_IMPORTED_MODULE_1__.flatten)(options !== null && options !== void 0 ? options : {}),
    };
    return render(this, toRender, opts);
}
/**
 * Render the document as XML.
 *
 * @param dom - Element to render.
 * @returns THe rendered document.
 */
function xml(dom) {
    const options = { ...this._options, xmlMode: true };
    return render(this, dom, options);
}
/**
 * Render the document as text.
 *
 * This returns the `textContent` of the passed elements. The result will
 * include the contents of `script` and `stype` elements. To avoid this, use
 * `.prop('innerText')` instead.
 *
 * @param elements - Elements to render.
 * @returns The rendered document.
 */
function text(elements) {
    const elems = elements ? elements : this ? this.root() : [];
    let ret = '';
    for (let i = 0; i < elems.length; i++) {
        ret += (0,domutils__WEBPACK_IMPORTED_MODULE_0__.textContent)(elems[i]);
    }
    return ret;
}
function parseHTML(data, context, keepScripts = typeof context === 'boolean' ? context : false) {
    if (!data || typeof data !== 'string') {
        return null;
    }
    if (typeof context === 'boolean') {
        keepScripts = context;
    }
    const parsed = this.load(data, _options_js__WEBPACK_IMPORTED_MODULE_1__["default"], false);
    if (!keepScripts) {
        parsed('script').remove();
    }
    /*
     * The `children` array is used by Cheerio internally to group elements that
     * share the same parents. When nodes created through `parseHTML` are
     * inserted into previously-existing DOM structures, they will be removed
     * from the `children` array. The results of `parseHTML` should remain
     * constant across these operations, so a shallow copy should be returned.
     */
    return parsed.root()[0].children.slice();
}
/**
 * Sometimes you need to work with the top-level root element. To query it, you
 * can use `$.root()`.
 *
 * @example
 *
 * ```js
 * $.root().append('<ul id="vegetables"></ul>').html();
 * //=> <ul id="fruits">...</ul><ul id="vegetables"></ul>
 * ```
 *
 * @returns Cheerio instance wrapping the root node.
 * @alias Cheerio.root
 */
function root() {
    return this(this._root);
}
/**
 * Checks to see if the `contained` DOM element is a descendant of the
 * `container` DOM element.
 *
 * @param container - Potential parent node.
 * @param contained - Potential child node.
 * @returns Indicates if the nodes contain one another.
 * @alias Cheerio.contains
 * @see {@link https://api.jquery.com/jQuery.contains/}
 */
function contains(container, contained) {
    // According to the jQuery API, an element does not "contain" itself
    if (contained === container) {
        return false;
    }
    /*
     * Step up the descendants, stopping when the root element is reached
     * (signaled by `.parent` returning a reference to the same object)
     */
    let next = contained;
    while (next && next !== next.parent) {
        next = next.parent;
        if (next === container) {
            return true;
        }
    }
    return false;
}
/**
 * $.merge().
 *
 * @param arr1 - First array.
 * @param arr2 - Second array.
 * @returns `arr1`, with elements of `arr2` inserted.
 * @alias Cheerio.merge
 * @see {@link https://api.jquery.com/jQuery.merge/}
 */
function merge(arr1, arr2) {
    if (!isArrayLike(arr1) || !isArrayLike(arr2)) {
        return;
    }
    let newLength = arr1.length;
    const len = +arr2.length;
    for (let i = 0; i < len; i++) {
        arr1[newLength++] = arr2[i];
    }
    arr1.length = newLength;
    return arr1;
}
/**
 * Checks if an object is array-like.
 *
 * @param item - Item to check.
 * @returns Indicates if the item is array-like.
 */
function isArrayLike(item) {
    if (Array.isArray(item)) {
        return true;
    }
    if (typeof item !== 'object' ||
        !Object.prototype.hasOwnProperty.call(item, 'length') ||
        typeof item.length !== 'number' ||
        item.length < 0) {
        return false;
    }
    for (let i = 0; i < item.length; i++) {
        if (!(i in item)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=static.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/types.js":
/*!***********************************************!*\
  !*** ./node_modules/cheerio/lib/esm/types.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/cheerio/lib/esm/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/cheerio/lib/esm/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   cloneDom: () => (/* binding */ cloneDom),
/* harmony export */   cssCase: () => (/* binding */ cssCase),
/* harmony export */   domEach: () => (/* binding */ domEach),
/* harmony export */   isCheerio: () => (/* binding */ isCheerio),
/* harmony export */   isHtml: () => (/* binding */ isHtml),
/* harmony export */   isTag: () => (/* reexport safe */ domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)
/* harmony export */ });
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");

/**
 * Check if the DOM element is a tag.
 *
 * `isTag(type)` includes `<script>` and `<style>` tags.
 *
 * @private
 * @category Utils
 * @param type - The DOM node to check.
 * @returns Whether the node is a tag.
 */

/**
 * Checks if an object is a Cheerio instance.
 *
 * @category Utils
 * @param maybeCheerio - The object to check.
 * @returns Whether the object is a Cheerio instance.
 */
function isCheerio(maybeCheerio) {
    return maybeCheerio.cheerio != null;
}
/**
 * Convert a string to camel case notation.
 *
 * @private
 * @category Utils
 * @param str - The string to be converted.
 * @returns String in camel case notation.
 */
function camelCase(str) {
    return str.replace(/[_.-](\w|$)/g, (_, x) => x.toUpperCase());
}
/**
 * Convert a string from camel case to "CSS case", where word boundaries are
 * described by hyphens ("-") and all characters are lower-case.
 *
 * @private
 * @category Utils
 * @param str - The string to be converted.
 * @returns String in "CSS case".
 */
function cssCase(str) {
    return str.replace(/[A-Z]/g, '-$&').toLowerCase();
}
/**
 * Iterate over each DOM element without creating intermediary Cheerio instances.
 *
 * This is indented for use internally to avoid otherwise unnecessary memory
 * pressure introduced by _make.
 *
 * @category Utils
 * @param array - The array to iterate over.
 * @param fn - Function to call.
 * @returns The original instance.
 */
function domEach(array, fn) {
    const len = array.length;
    for (let i = 0; i < len; i++)
        fn(array[i], i);
    return array;
}
/**
 * Create a deep copy of the given DOM structure. Sets the parents of the copies
 * of the passed nodes to `null`.
 *
 * @private
 * @category Utils
 * @param dom - The domhandler-compliant DOM structure.
 * @returns - The cloned DOM.
 */
function cloneDom(dom) {
    const clone = 'length' in dom
        ? Array.prototype.map.call(dom, (el) => (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.cloneNode)(el, true))
        : [(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.cloneNode)(dom, true)];
    // Add a root node around the cloned nodes
    const root = new domhandler__WEBPACK_IMPORTED_MODULE_0__.Document(clone);
    clone.forEach((node) => {
        node.parent = root;
    });
    return clone;
}
var CharacterCodes;
(function (CharacterCodes) {
    CharacterCodes[CharacterCodes["LowerA"] = 97] = "LowerA";
    CharacterCodes[CharacterCodes["LowerZ"] = 122] = "LowerZ";
    CharacterCodes[CharacterCodes["UpperA"] = 65] = "UpperA";
    CharacterCodes[CharacterCodes["UpperZ"] = 90] = "UpperZ";
    CharacterCodes[CharacterCodes["Exclamation"] = 33] = "Exclamation";
})(CharacterCodes || (CharacterCodes = {}));
/**
 * Check if string is HTML.
 *
 * Tests for a `<` within a string, immediate followed by a letter and
 * eventually followed by a `>`.
 *
 * @private
 * @category Utils
 * @param str - The string to check.
 * @returns Indicates if `str` is HTML.
 */
function isHtml(str) {
    const tagStart = str.indexOf('<');
    if (tagStart < 0 || tagStart > str.length - 3)
        return false;
    const tagChar = str.charCodeAt(tagStart + 1);
    return (((tagChar >= CharacterCodes.LowerA && tagChar <= CharacterCodes.LowerZ) ||
        (tagChar >= CharacterCodes.UpperA && tagChar <= CharacterCodes.UpperZ) ||
        tagChar === CharacterCodes.Exclamation) &&
        str.includes('>', tagStart + 2));
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/dom-serializer/lib/esm/foreignNames.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/dom-serializer/lib/esm/foreignNames.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attributeNames: () => (/* binding */ attributeNames),
/* harmony export */   elementNames: () => (/* binding */ elementNames)
/* harmony export */ });
const elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath",
].map((val) => [val.toLowerCase(), val]));
const attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan",
].map((val) => [val.toLowerCase(), val]));


/***/ }),

/***/ "./node_modules/cheerio/node_modules/dom-serializer/lib/esm/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/dom-serializer/lib/esm/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var domelementtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/esm/index.js");
/* harmony import */ var entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities */ "./node_modules/cheerio/node_modules/entities/lib/esm/index.js");
/* harmony import */ var _foreignNames_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foreignNames.js */ "./node_modules/cheerio/node_modules/dom-serializer/lib/esm/foreignNames.js");
/*
 * Module dependencies
 */


/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */

const unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes)
        return;
    const encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false
        ? replaceQuotes
        : opts.xmlMode || opts.encodeEntities !== "utf8"
            ? entities__WEBPACK_IMPORTED_MODULE_1__.encodeXML
            : entities__WEBPACK_IMPORTED_MODULE_1__.escapeAttribute;
    return Object.keys(attributes)
        .map((key) => {
        var _a, _b;
        const value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */
            key = (_b = _foreignNames_js__WEBPACK_IMPORTED_MODULE_2__.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return `${key}="${encode(value)}"`;
    })
        .join(" ");
}
/**
 * Self-enclosing tags
 */
const singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render(node, options = {}) {
    const nodes = "length" in node ? node : [node];
    let output = "";
    for (let i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);
function renderNode(node, options) {
    switch (node.type) {
        case domelementtype__WEBPACK_IMPORTED_MODULE_0__.Root:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case domelementtype__WEBPACK_IMPORTED_MODULE_0__.Doctype:
        case domelementtype__WEBPACK_IMPORTED_MODULE_0__.Directive:
            return renderDirective(node);
        case domelementtype__WEBPACK_IMPORTED_MODULE_0__.Comment:
            return renderComment(node);
        case domelementtype__WEBPACK_IMPORTED_MODULE_0__.CDATA:
            return renderCdata(node);
        case domelementtype__WEBPACK_IMPORTED_MODULE_0__.Script:
        case domelementtype__WEBPACK_IMPORTED_MODULE_0__.Style:
        case domelementtype__WEBPACK_IMPORTED_MODULE_0__.Tag:
            return renderTag(node, options);
        case domelementtype__WEBPACK_IMPORTED_MODULE_0__.Text:
            return renderText(node, options);
    }
}
const foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
]);
const foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */
        elem.name = (_a = _foreignNames_js__WEBPACK_IMPORTED_MODULE_2__.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */
        if (elem.parent &&
            foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = { ...opts, xmlMode: false };
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = { ...opts, xmlMode: "foreign" };
    }
    let tag = `<${elem.name}`;
    const attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += ` ${attribs}`;
    }
    if (elem.children.length === 0 &&
        (opts.xmlMode
            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
                opts.selfClosingTags !== false
            : // User explicitly asked for self-closing tags, even in HTML mode
                opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += `</${elem.name}>`;
        }
    }
    return tag;
}
function renderDirective(elem) {
    return `<${elem.data}>`;
}
function renderText(elem, opts) {
    var _a;
    let data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false &&
        !(!opts.xmlMode &&
            elem.parent &&
            unencodedElements.has(elem.parent.name))) {
        data =
            opts.xmlMode || opts.encodeEntities !== "utf8"
                ? (0,entities__WEBPACK_IMPORTED_MODULE_1__.encodeXML)(data)
                : (0,entities__WEBPACK_IMPORTED_MODULE_1__.escapeText)(data);
    }
    return data;
}
function renderCdata(elem) {
    return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
    return `<!--${elem.data}-->`;
}


/***/ }),

/***/ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDATA: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.CDATA),
/* harmony export */   Comment: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.Comment),
/* harmony export */   DataNode: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.DataNode),
/* harmony export */   Document: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.Document),
/* harmony export */   DomHandler: () => (/* binding */ DomHandler),
/* harmony export */   Element: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.Element),
/* harmony export */   Node: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.Node),
/* harmony export */   NodeWithChildren: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.NodeWithChildren),
/* harmony export */   ProcessingInstruction: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.ProcessingInstruction),
/* harmony export */   Text: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.Text),
/* harmony export */   cloneNode: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.cloneNode),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   hasChildren: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.hasChildren),
/* harmony export */   isCDATA: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.isCDATA),
/* harmony export */   isComment: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.isComment),
/* harmony export */   isDirective: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.isDirective),
/* harmony export */   isDocument: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.isDocument),
/* harmony export */   isTag: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.isTag),
/* harmony export */   isText: () => (/* reexport safe */ _node_js__WEBPACK_IMPORTED_MODULE_1__.isText)
/* harmony export */ });
/* harmony import */ var domelementtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/esm/index.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.js */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/node.js");



// Default options
const defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false,
};
class DomHandler {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */
    constructor(callback, options, elementCB) {
        /** The elements of the DOM */
        this.dom = [];
        /** The root element for the DOM */
        this.root = new _node_js__WEBPACK_IMPORTED_MODULE_1__.Document(this.dom);
        /** Indicated whether parsing has been completed. */
        this.done = false;
        /** Stack of open tags. */
        this.tagStack = [this.root];
        /** A data node that is still being written to. */
        this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */
        this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    onparserinit(parser) {
        this.parser = parser;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new _node_js__WEBPACK_IMPORTED_MODULE_1__.Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done)
            return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
            this.elementCB(elem);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Tag : undefined;
        const element = new _node_js__WEBPACK_IMPORTED_MODULE_1__.Element(name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        }
        else {
            const node = new _node_js__WEBPACK_IMPORTED_MODULE_1__.Text(data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new _node_js__WEBPACK_IMPORTED_MODULE_1__.Comment(data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new _node_js__WEBPACK_IMPORTED_MODULE_1__.Text("");
        const node = new _node_js__WEBPACK_IMPORTED_MODULE_1__.CDATA([text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node = new _node_js__WEBPACK_IMPORTED_MODULE_1__.ProcessingInstruction(name, data);
        this.addNode(node);
    }
    handleCallback(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        }
        else if (error) {
            throw error;
        }
    }
    addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomHandler);


/***/ }),

/***/ "./node_modules/cheerio/node_modules/domhandler/lib/esm/node.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/domhandler/lib/esm/node.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDATA: () => (/* binding */ CDATA),
/* harmony export */   Comment: () => (/* binding */ Comment),
/* harmony export */   DataNode: () => (/* binding */ DataNode),
/* harmony export */   Document: () => (/* binding */ Document),
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   Node: () => (/* binding */ Node),
/* harmony export */   NodeWithChildren: () => (/* binding */ NodeWithChildren),
/* harmony export */   ProcessingInstruction: () => (/* binding */ ProcessingInstruction),
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   cloneNode: () => (/* binding */ cloneNode),
/* harmony export */   hasChildren: () => (/* binding */ hasChildren),
/* harmony export */   isCDATA: () => (/* binding */ isCDATA),
/* harmony export */   isComment: () => (/* binding */ isComment),
/* harmony export */   isDirective: () => (/* binding */ isDirective),
/* harmony export */   isDocument: () => (/* binding */ isDocument),
/* harmony export */   isTag: () => (/* binding */ isTag),
/* harmony export */   isText: () => (/* binding */ isText)
/* harmony export */ });
/* harmony import */ var domelementtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/esm/index.js");

/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
class Node {
    constructor() {
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    // Read-write aliases for properties
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get previousSibling() {
        return this.prev;
    }
    set previousSibling(prev) {
        this.prev = prev;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
}
/**
 * A node that contains some data.
 */
class DataNode extends Node {
    /**
     * @param data The content of the data node
     */
    constructor(data) {
        super();
        this.data = data;
    }
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
}
/**
 * Text within the document.
 */
class Text extends DataNode {
    constructor() {
        super(...arguments);
        this.type = domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Text;
    }
    get nodeType() {
        return 3;
    }
}
/**
 * Comments within the document.
 */
class Comment extends DataNode {
    constructor() {
        super(...arguments);
        this.type = domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Comment;
    }
    get nodeType() {
        return 8;
    }
}
/**
 * Processing instructions, including doc types.
 */
class ProcessingInstruction extends DataNode {
    constructor(name, data) {
        super(data);
        this.name = name;
        this.type = domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Directive;
    }
    get nodeType() {
        return 1;
    }
}
/**
 * A `Node` that can have children.
 */
class NodeWithChildren extends Node {
    /**
     * @param children Children of the node. Only certain node types can have children.
     */
    constructor(children) {
        super();
        this.children = children;
    }
    // Aliases
    /** First child of the node. */
    get firstChild() {
        var _a;
        return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    }
    /** Last child of the node. */
    get lastChild() {
        return this.children.length > 0
            ? this.children[this.children.length - 1]
            : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
}
class CDATA extends NodeWithChildren {
    constructor() {
        super(...arguments);
        this.type = domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.CDATA;
    }
    get nodeType() {
        return 4;
    }
}
/**
 * The root node of the document.
 */
class Document extends NodeWithChildren {
    constructor() {
        super(...arguments);
        this.type = domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Root;
    }
    get nodeType() {
        return 9;
    }
}
/**
 * An element within the DOM.
 */
class Element extends NodeWithChildren {
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    constructor(name, attribs, children = [], type = name === "script"
        ? domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Script
        : name === "style"
            ? domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Style
            : domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Tag) {
        super(children);
        this.name = name;
        this.attribs = attribs;
        this.type = type;
    }
    get nodeType() {
        return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */
    get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map((name) => {
            var _a, _b;
            return ({
                name,
                value: this.attribs[name],
                namespace: (_a = this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
            });
        });
    }
}
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0,domelementtype__WEBPACK_IMPORTED_MODULE_0__.isTag)(node);
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.CDATA;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Text;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Comment;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Directive;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype__WEBPACK_IMPORTED_MODULE_0__.ElementType.Root;
}
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive = false) {
    let result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Element(node.name, { ...node.attribs }, children);
        children.forEach((child) => (child.parent = clone));
        if (node.namespace != null) {
            clone.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone["x-attribsNamespace"] = { ...node["x-attribsNamespace"] };
        }
        if (node["x-attribsPrefix"]) {
            clone["x-attribsPrefix"] = { ...node["x-attribsPrefix"] };
        }
        result = clone;
    }
    else if (isCDATA(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new CDATA(children);
        children.forEach((child) => (child.parent = clone));
        result = clone;
    }
    else if (isDocument(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Document(children);
        children.forEach((child) => (child.parent = clone));
        if (node["x-mode"]) {
            clone["x-mode"] = node["x-mode"];
        }
        result = clone;
    }
    else if (isDirective(node)) {
        const instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error(`Not implemented yet: ${node.type}`);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
function cloneChildren(childs) {
    const children = childs.map((child) => cloneNode(child, true));
    for (let i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}


/***/ }),

/***/ "./node_modules/cheerio/node_modules/domutils/lib/esm/feeds.js":
/*!*********************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/domutils/lib/esm/feeds.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFeed: () => (/* binding */ getFeed)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/cheerio/node_modules/domutils/lib/esm/stringify.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./node_modules/cheerio/node_modules/domutils/lib/esm/legacy.js");


/**
 * Get the feed object from the root of a DOM tree.
 *
 * @category Feeds
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */
function getFeed(doc) {
    const feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot
        ? null
        : feedRoot.name === "feed"
            ? getAtomFeed(feedRoot)
            : getRssFeed(feedRoot);
}
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getAtomFeed(feedRoot) {
    var _a;
    const childs = feedRoot.children;
    const feed = {
        type: "atom",
        items: (0,_legacy_js__WEBPACK_IMPORTED_MODULE_1__.getElementsByTagName)("entry", childs).map((item) => {
            var _a;
            const { children } = item;
            const entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            const href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) {
                entry.link = href;
            }
            const description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            const pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        }),
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getRssFeed(feedRoot) {
    var _a, _b;
    const childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    const feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0,_legacy_js__WEBPACK_IMPORTED_MODULE_1__.getElementsByTagName)("item", feedRoot.children).map((item) => {
            const { children } = item;
            const entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate)
                entry.pubDate = new Date(pubDate);
            return entry;
        }),
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
const MEDIA_KEYS_STRING = ["url", "type", "lang"];
const MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width",
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */
function getMediaElements(where) {
    return (0,_legacy_js__WEBPACK_IMPORTED_MODULE_1__.getElementsByTagName)("media:content", where).map((elem) => {
        const { attribs } = elem;
        const media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"],
        };
        for (const attrib of MEDIA_KEYS_STRING) {
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (const attrib of MEDIA_KEYS_INT) {
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */
function getOneElement(tagName, node) {
    return (0,_legacy_js__WEBPACK_IMPORTED_MODULE_1__.getElementsByTagName)(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */
function fetch(tagName, where, recurse = false) {
    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_0__.textContent)((0,_legacy_js__WEBPACK_IMPORTED_MODULE_1__.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */
function addConditionally(obj, prop, tagName, where, recurse = false) {
    const val = fetch(tagName, where, recurse);
    if (val)
        obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}
//# sourceMappingURL=feeds.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/domutils/lib/esm/helpers.js":
/*!***********************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/domutils/lib/esm/helpers.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentPosition: () => (/* binding */ DocumentPosition),
/* harmony export */   compareDocumentPosition: () => (/* binding */ compareDocumentPosition),
/* harmony export */   removeSubsets: () => (/* binding */ removeSubsets),
/* harmony export */   uniqueSort: () => (/* binding */ uniqueSort)
/* harmony export */ });
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");

/**
 * Given an array of nodes, remove any member that is contained by another
 * member.
 *
 * @category Helpers
 * @param nodes Nodes to filter.
 * @returns Remaining nodes that aren't contained by other nodes.
 */
function removeSubsets(nodes) {
    let idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */
    while (--idx >= 0) {
        const node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for (let ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
/**
 * @category Helpers
 * @see {@link http://dom.spec.whatwg.org/#dom-node-comparedocumentposition}
 */
var DocumentPosition;
(function (DocumentPosition) {
    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
/**
 * Compare the position of one node against another node in any other document,
 * returning a bitmask with the values from {@link DocumentPosition}.
 *
 * Document order:
 * > There is an ordering, document order, defined on all the nodes in the
 * > document corresponding to the order in which the first character of the
 * > XML representation of each node occurs in the XML representation of the
 * > document after expansion of general entities. Thus, the document element
 * > node will be the first node. Element nodes occur before their children.
 * > Thus, document order orders element nodes in order of the occurrence of
 * > their start-tag in the XML (after expansion of entities). The attribute
 * > nodes of an element occur after the element and before its children. The
 * > relative order of attribute nodes is implementation-dependent.
 *
 * Source:
 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
 *
 * @category Helpers
 * @param nodeA The first node to use in the comparison
 * @param nodeB The second node to use in the comparison
 * @returns A bitmask describing the input nodes' relative position.
 *
 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
 * a description of these values.
 */
function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    let current = (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(nodeA) ? nodeA : nodeA.parent;
    while (current) {
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(nodeB) ? nodeB : nodeB.parent;
    while (current) {
        bParents.unshift(current);
        current = current.parent;
    }
    const maxIdx = Math.min(aParents.length, bParents.length);
    let idx = 0;
    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
    }
    if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
    }
    const sharedParent = aParents[idx - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[idx];
    const bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
}
/**
 * Sort an array of nodes based on their relative position in the document,
 * removing any duplicate nodes. If the array contains nodes that do not belong
 * to the same document, sort order is unspecified.
 *
 * @category Helpers
 * @param nodes Array of DOM nodes.
 * @returns Collection of unique nodes, sorted in document order.
 */
function uniqueSort(nodes) {
    nodes = nodes.filter((node, i, arr) => !arr.includes(node, i + 1));
    nodes.sort((a, b) => {
        const relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
            return -1;
        }
        else if (relative & DocumentPosition.FOLLOWING) {
            return 1;
        }
        return 0;
    });
    return nodes;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/domutils/lib/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/domutils/lib/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentPosition: () => (/* reexport safe */ _helpers_js__WEBPACK_IMPORTED_MODULE_5__.DocumentPosition),
/* harmony export */   append: () => (/* reexport safe */ _manipulation_js__WEBPACK_IMPORTED_MODULE_2__.append),
/* harmony export */   appendChild: () => (/* reexport safe */ _manipulation_js__WEBPACK_IMPORTED_MODULE_2__.appendChild),
/* harmony export */   compareDocumentPosition: () => (/* reexport safe */ _helpers_js__WEBPACK_IMPORTED_MODULE_5__.compareDocumentPosition),
/* harmony export */   existsOne: () => (/* reexport safe */ _querying_js__WEBPACK_IMPORTED_MODULE_3__.existsOne),
/* harmony export */   filter: () => (/* reexport safe */ _querying_js__WEBPACK_IMPORTED_MODULE_3__.filter),
/* harmony export */   find: () => (/* reexport safe */ _querying_js__WEBPACK_IMPORTED_MODULE_3__.find),
/* harmony export */   findAll: () => (/* reexport safe */ _querying_js__WEBPACK_IMPORTED_MODULE_3__.findAll),
/* harmony export */   findOne: () => (/* reexport safe */ _querying_js__WEBPACK_IMPORTED_MODULE_3__.findOne),
/* harmony export */   findOneChild: () => (/* reexport safe */ _querying_js__WEBPACK_IMPORTED_MODULE_3__.findOneChild),
/* harmony export */   getAttributeValue: () => (/* reexport safe */ _traversal_js__WEBPACK_IMPORTED_MODULE_1__.getAttributeValue),
/* harmony export */   getChildren: () => (/* reexport safe */ _traversal_js__WEBPACK_IMPORTED_MODULE_1__.getChildren),
/* harmony export */   getElementById: () => (/* reexport safe */ _legacy_js__WEBPACK_IMPORTED_MODULE_4__.getElementById),
/* harmony export */   getElements: () => (/* reexport safe */ _legacy_js__WEBPACK_IMPORTED_MODULE_4__.getElements),
/* harmony export */   getElementsByTagName: () => (/* reexport safe */ _legacy_js__WEBPACK_IMPORTED_MODULE_4__.getElementsByTagName),
/* harmony export */   getElementsByTagType: () => (/* reexport safe */ _legacy_js__WEBPACK_IMPORTED_MODULE_4__.getElementsByTagType),
/* harmony export */   getFeed: () => (/* reexport safe */ _feeds_js__WEBPACK_IMPORTED_MODULE_6__.getFeed),
/* harmony export */   getInnerHTML: () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_0__.getInnerHTML),
/* harmony export */   getName: () => (/* reexport safe */ _traversal_js__WEBPACK_IMPORTED_MODULE_1__.getName),
/* harmony export */   getOuterHTML: () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_0__.getOuterHTML),
/* harmony export */   getParent: () => (/* reexport safe */ _traversal_js__WEBPACK_IMPORTED_MODULE_1__.getParent),
/* harmony export */   getSiblings: () => (/* reexport safe */ _traversal_js__WEBPACK_IMPORTED_MODULE_1__.getSiblings),
/* harmony export */   getText: () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_0__.getText),
/* harmony export */   hasAttrib: () => (/* reexport safe */ _traversal_js__WEBPACK_IMPORTED_MODULE_1__.hasAttrib),
/* harmony export */   hasChildren: () => (/* reexport safe */ domhandler__WEBPACK_IMPORTED_MODULE_7__.hasChildren),
/* harmony export */   innerText: () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_0__.innerText),
/* harmony export */   isCDATA: () => (/* reexport safe */ domhandler__WEBPACK_IMPORTED_MODULE_7__.isCDATA),
/* harmony export */   isComment: () => (/* reexport safe */ domhandler__WEBPACK_IMPORTED_MODULE_7__.isComment),
/* harmony export */   isDocument: () => (/* reexport safe */ domhandler__WEBPACK_IMPORTED_MODULE_7__.isDocument),
/* harmony export */   isTag: () => (/* reexport safe */ domhandler__WEBPACK_IMPORTED_MODULE_7__.isTag),
/* harmony export */   isText: () => (/* reexport safe */ domhandler__WEBPACK_IMPORTED_MODULE_7__.isText),
/* harmony export */   nextElementSibling: () => (/* reexport safe */ _traversal_js__WEBPACK_IMPORTED_MODULE_1__.nextElementSibling),
/* harmony export */   prepend: () => (/* reexport safe */ _manipulation_js__WEBPACK_IMPORTED_MODULE_2__.prepend),
/* harmony export */   prependChild: () => (/* reexport safe */ _manipulation_js__WEBPACK_IMPORTED_MODULE_2__.prependChild),
/* harmony export */   prevElementSibling: () => (/* reexport safe */ _traversal_js__WEBPACK_IMPORTED_MODULE_1__.prevElementSibling),
/* harmony export */   removeElement: () => (/* reexport safe */ _manipulation_js__WEBPACK_IMPORTED_MODULE_2__.removeElement),
/* harmony export */   removeSubsets: () => (/* reexport safe */ _helpers_js__WEBPACK_IMPORTED_MODULE_5__.removeSubsets),
/* harmony export */   replaceElement: () => (/* reexport safe */ _manipulation_js__WEBPACK_IMPORTED_MODULE_2__.replaceElement),
/* harmony export */   testElement: () => (/* reexport safe */ _legacy_js__WEBPACK_IMPORTED_MODULE_4__.testElement),
/* harmony export */   textContent: () => (/* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_0__.textContent),
/* harmony export */   uniqueSort: () => (/* reexport safe */ _helpers_js__WEBPACK_IMPORTED_MODULE_5__.uniqueSort)
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/cheerio/node_modules/domutils/lib/esm/stringify.js");
/* harmony import */ var _traversal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traversal.js */ "./node_modules/cheerio/node_modules/domutils/lib/esm/traversal.js");
/* harmony import */ var _manipulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manipulation.js */ "./node_modules/cheerio/node_modules/domutils/lib/esm/manipulation.js");
/* harmony import */ var _querying_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./querying.js */ "./node_modules/cheerio/node_modules/domutils/lib/esm/querying.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legacy.js */ "./node_modules/cheerio/node_modules/domutils/lib/esm/legacy.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/cheerio/node_modules/domutils/lib/esm/helpers.js");
/* harmony import */ var _feeds_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feeds.js */ "./node_modules/cheerio/node_modules/domutils/lib/esm/feeds.js");
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");







/** @deprecated Use these methods from `domhandler` directly. */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/domutils/lib/esm/legacy.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/domutils/lib/esm/legacy.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getElementById: () => (/* binding */ getElementById),
/* harmony export */   getElements: () => (/* binding */ getElements),
/* harmony export */   getElementsByTagName: () => (/* binding */ getElementsByTagName),
/* harmony export */   getElementsByTagType: () => (/* binding */ getElementsByTagType),
/* harmony export */   testElement: () => (/* binding */ testElement)
/* harmony export */ });
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");
/* harmony import */ var _querying_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./querying.js */ "./node_modules/cheerio/node_modules/domutils/lib/esm/querying.js");


/**
 * A map of functions to check nodes against.
 */
const Checks = {
    tag_name(name) {
        if (typeof name === "function") {
            return (elem) => (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(elem) && name(elem.name);
        }
        else if (name === "*") {
            return domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag;
        }
        return (elem) => (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(elem) && elem.name === name;
    },
    tag_type(type) {
        if (typeof type === "function") {
            return (elem) => type(elem.type);
        }
        return (elem) => elem.type === type;
    },
    tag_contains(data) {
        if (typeof data === "function") {
            return (elem) => (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isText)(elem) && data(elem.data);
        }
        return (elem) => (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isText)(elem) && elem.data === data;
    },
};
/**
 * Returns a function to check whether a node has an attribute with a particular
 * value.
 *
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return (elem) => (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(elem) && value(elem.attribs[attrib]);
    }
    return (elem) => (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(elem) && elem.attribs[attrib] === value;
}
/**
 * Returns a function that returns `true` if either of the input functions
 * returns `true` for a node.
 *
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */
function combineFuncs(a, b) {
    return (elem) => a(elem) || b(elem);
}
/**
 * Returns a function that executes all checks in `options` and returns `true`
 * if any of them match a node.
 *
 * @param options An object describing nodes to look for.
 * @returns A function that executes all checks in `options` and returns `true`
 *   if any of them match a node.
 */
function compileTest(options) {
    const funcs = Object.keys(options).map((key) => {
        const value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key)
            ? Checks[key](value)
            : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * Checks whether a node matches the description in `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
}
/**
 * Returns all nodes that match `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? (0,_querying_js__WEBPACK_IMPORTED_MODULE_1__.filter)(test, nodes, recurse, limit) : [];
}
/**
 * Returns the node with the supplied ID.
 *
 * @category Legacy Query Functions
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return (0,_querying_js__WEBPACK_IMPORTED_MODULE_1__.findOne)(getAttribCheck("id", id), nodes, recurse);
}
/**
 * Returns all nodes with the supplied `tagName`.
 *
 * @category Legacy Query Functions
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return (0,_querying_js__WEBPACK_IMPORTED_MODULE_1__.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
}
/**
 * Returns all nodes with the supplied `type`.
 *
 * @category Legacy Query Functions
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return (0,_querying_js__WEBPACK_IMPORTED_MODULE_1__.filter)(Checks["tag_type"](type), nodes, recurse, limit);
}
//# sourceMappingURL=legacy.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/domutils/lib/esm/manipulation.js":
/*!****************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/domutils/lib/esm/manipulation.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   appendChild: () => (/* binding */ appendChild),
/* harmony export */   prepend: () => (/* binding */ prepend),
/* harmony export */   prependChild: () => (/* binding */ prependChild),
/* harmony export */   removeElement: () => (/* binding */ removeElement),
/* harmony export */   replaceElement: () => (/* binding */ replaceElement)
/* harmony export */ });
/**
 * Remove an element from the dom
 *
 * @category Manipulation
 * @param elem The element to be removed
 */
function removeElement(elem) {
    if (elem.prev)
        elem.prev.next = elem.next;
    if (elem.next)
        elem.next.prev = elem.prev;
    if (elem.parent) {
        const childs = elem.parent.children;
        const childsIndex = childs.lastIndexOf(elem);
        if (childsIndex >= 0) {
            childs.splice(childsIndex, 1);
        }
    }
    elem.next = null;
    elem.prev = null;
    elem.parent = null;
}
/**
 * Replace an element in the dom
 *
 * @category Manipulation
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */
function replaceElement(elem, replacement) {
    const prev = (replacement.prev = elem.prev);
    if (prev) {
        prev.next = replacement;
    }
    const next = (replacement.next = elem.next);
    if (next) {
        next.prev = replacement;
    }
    const parent = (replacement.parent = elem.parent);
    if (parent) {
        const childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
    }
}
/**
 * Append a child to an element.
 *
 * @category Manipulation
 * @param parent The element to append to.
 * @param child The element to be added as a child.
 */
function appendChild(parent, child) {
    removeElement(child);
    child.next = null;
    child.parent = parent;
    if (parent.children.push(child) > 1) {
        const sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    }
    else {
        child.prev = null;
    }
}
/**
 * Append an element after another.
 *
 * @category Manipulation
 * @param elem The element to append after.
 * @param next The element be added.
 */
function append(elem, next) {
    removeElement(next);
    const { parent } = elem;
    const currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            const childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    }
    else if (parent) {
        parent.children.push(next);
    }
}
/**
 * Prepend a child to an element.
 *
 * @category Manipulation
 * @param parent The element to prepend before.
 * @param child The element to be added as a child.
 */
function prependChild(parent, child) {
    removeElement(child);
    child.parent = parent;
    child.prev = null;
    if (parent.children.unshift(child) !== 1) {
        const sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
    }
    else {
        child.next = null;
    }
}
/**
 * Prepend an element before another.
 *
 * @category Manipulation
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */
function prepend(elem, prev) {
    removeElement(prev);
    const { parent } = elem;
    if (parent) {
        const childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
//# sourceMappingURL=manipulation.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/domutils/lib/esm/querying.js":
/*!************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/domutils/lib/esm/querying.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   existsOne: () => (/* binding */ existsOne),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findAll: () => (/* binding */ findAll),
/* harmony export */   findOne: () => (/* binding */ findOne),
/* harmony export */   findOneChild: () => (/* binding */ findOneChild)
/* harmony export */ });
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");

/**
 * Search a node and its children for nodes passing a test function. If `node` is not an array, it will be wrapped in one.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function filter(test, node, recurse = true, limit = Infinity) {
    return find(test, Array.isArray(node) ? node : [node], recurse, limit);
}
/**
 * Search an array of nodes and their children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function find(test, nodes, recurse, limit) {
    const result = [];
    /** Stack of the arrays we are looking at. */
    const nodeStack = [nodes];
    /** Stack of the indices within the arrays. */
    const indexStack = [0];
    for (;;) {
        // First, check if the current array has any more elements to look at.
        if (indexStack[0] >= nodeStack[0].length) {
            // If we have no more arrays to look at, we are done.
            if (indexStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            // Loop back to the start to continue with the next array.
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
                return result;
        }
        if (recurse && (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(elem) && elem.children.length > 0) {
            /*
             * Add the children to the stack. We are depth-first, so this is
             * the next array we look at.
             */
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
/**
 * Finds the first element inside of an array that matches a test function. This is an alias for `Array.prototype.find`.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 * @deprecated Use `Array.prototype.find` directly.
 */
function findOneChild(test, nodes) {
    return nodes.find(test);
}
/**
 * Finds one element in a tree that passes a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Node or array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first node that passes `test`.
 */
function findOne(test, nodes, recurse = true) {
    let elem = null;
    for (let i = 0; i < nodes.length && !elem; i++) {
        const node = nodes[i];
        if (!(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(node)) {
            continue;
        }
        else if (test(node)) {
            elem = node;
        }
        else if (recurse && node.children.length > 0) {
            elem = findOne(test, node.children, true);
        }
    }
    return elem;
}
/**
 * Checks if a tree of nodes contains at least one node passing a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing the test.
 */
function existsOne(test, nodes) {
    return nodes.some((checked) => (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(checked) &&
        (test(checked) || existsOne(test, checked.children)));
}
/**
 * Search an array of nodes and their children for elements passing a test function.
 *
 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */
function findAll(test, nodes) {
    const result = [];
    const nodeStack = [nodes];
    const indexStack = [0];
    for (;;) {
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            // Loop back to the start to continue with the next array.
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (!(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(elem))
            continue;
        if (test(elem))
            result.push(elem);
        if (elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
//# sourceMappingURL=querying.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/domutils/lib/esm/stringify.js":
/*!*************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/domutils/lib/esm/stringify.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInnerHTML: () => (/* binding */ getInnerHTML),
/* harmony export */   getOuterHTML: () => (/* binding */ getOuterHTML),
/* harmony export */   getText: () => (/* binding */ getText),
/* harmony export */   innerText: () => (/* binding */ innerText),
/* harmony export */   textContent: () => (/* binding */ textContent)
/* harmony export */ });
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");
/* harmony import */ var dom_serializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-serializer */ "./node_modules/cheerio/node_modules/dom-serializer/lib/esm/index.js");
/* harmony import */ var domelementtype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/esm/index.js");



/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @returns `node`'s outer HTML.
 */
function getOuterHTML(node, options) {
    return (0,dom_serializer__WEBPACK_IMPORTED_MODULE_1__["default"])(node, options);
}
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @returns `node`'s inner HTML.
 */
function getInnerHTML(node, options) {
    return (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(node)
        ? node.children.map((node) => getOuterHTML(node, options)).join("")
        : "";
}
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
 *
 * @category Stringify
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
function getText(node) {
    if (Array.isArray(node))
        return node.map(getText).join("");
    if ((0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(node))
        return node.name === "br" ? "\n" : getText(node.children);
    if ((0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isCDATA)(node))
        return getText(node.children);
    if ((0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isText)(node))
        return node.data;
    return "";
}
/**
 * Get a node's text content. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
function textContent(node) {
    if (Array.isArray(node))
        return node.map(textContent).join("");
    if ((0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(node) && !(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isComment)(node)) {
        return textContent(node.children);
    }
    if ((0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isText)(node))
        return node.data;
    return "";
}
/**
 * Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join("");
    if ((0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(node) && (node.type === domelementtype__WEBPACK_IMPORTED_MODULE_2__.ElementType.Tag || (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isCDATA)(node))) {
        return innerText(node.children);
    }
    if ((0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isText)(node))
        return node.data;
    return "";
}
//# sourceMappingURL=stringify.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/domutils/lib/esm/traversal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/domutils/lib/esm/traversal.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAttributeValue: () => (/* binding */ getAttributeValue),
/* harmony export */   getChildren: () => (/* binding */ getChildren),
/* harmony export */   getName: () => (/* binding */ getName),
/* harmony export */   getParent: () => (/* binding */ getParent),
/* harmony export */   getSiblings: () => (/* binding */ getSiblings),
/* harmony export */   hasAttrib: () => (/* binding */ hasAttrib),
/* harmony export */   nextElementSibling: () => (/* binding */ nextElementSibling),
/* harmony export */   prevElementSibling: () => (/* binding */ prevElementSibling)
/* harmony export */ });
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");

/**
 * Get a node's children.
 *
 * @category Traversal
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */
function getChildren(elem) {
    return (0,domhandler__WEBPACK_IMPORTED_MODULE_0__.hasChildren)(elem) ? elem.children : [];
}
/**
 * Get a node's parent.
 *
 * @category Traversal
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node, or `null` if `elem` is a root node.
 */
function getParent(elem) {
    return elem.parent || null;
}
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first. If we don't
 * have a parent (the element is a root node), we walk the element's `prev` &
 * `next` to get all remaining nodes.
 *
 * @category Traversal
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings, including `elem`.
 */
function getSiblings(elem) {
    const parent = getParent(elem);
    if (parent != null)
        return getChildren(parent);
    const siblings = [elem];
    let { prev, next } = elem;
    while (prev != null) {
        siblings.unshift(prev);
        ({ prev } = prev);
    }
    while (next != null) {
        siblings.push(next);
        ({ next } = next);
    }
    return siblings;
}
/**
 * Gets an attribute from an element.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */
function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
/**
 * Checks whether an element has an attribute.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */
function hasAttrib(elem, name) {
    return (elem.attribs != null &&
        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
        elem.attribs[name] != null);
}
/**
 * Get the tag name of an element.
 *
 * @category Traversal
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */
function getName(elem) {
    return elem.name;
}
/**
 * Returns the next element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag, or `null` if there is no next
 * sibling.
 */
function nextElementSibling(elem) {
    let { next } = elem;
    while (next !== null && !(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(next))
        ({ next } = next);
    return next;
}
/**
 * Returns the previous element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag, or `null` if there is no
 * previous sibling.
 */
function prevElementSibling(elem) {
    let { prev } = elem;
    while (prev !== null && !(0,domhandler__WEBPACK_IMPORTED_MODULE_0__.isTag)(prev))
        ({ prev } = prev);
    return prev;
}
//# sourceMappingURL=traversal.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/entities/lib/esm/decode.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/entities/lib/esm/decode.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinTrieFlags: () => (/* binding */ BinTrieFlags),
/* harmony export */   DecodingMode: () => (/* binding */ DecodingMode),
/* harmony export */   EntityDecoder: () => (/* binding */ EntityDecoder),
/* harmony export */   decodeCodePoint: () => (/* reexport safe */ _decode_codepoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   decodeHTML: () => (/* binding */ decodeHTML),
/* harmony export */   decodeHTMLAttribute: () => (/* binding */ decodeHTMLAttribute),
/* harmony export */   decodeHTMLStrict: () => (/* binding */ decodeHTMLStrict),
/* harmony export */   decodeXML: () => (/* binding */ decodeXML),
/* harmony export */   determineBranch: () => (/* binding */ determineBranch),
/* harmony export */   fromCodePoint: () => (/* reexport safe */ _decode_codepoint_js__WEBPACK_IMPORTED_MODULE_2__.fromCodePoint),
/* harmony export */   htmlDecodeTree: () => (/* reexport safe */ _generated_decode_data_html_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   replaceCodePoint: () => (/* reexport safe */ _decode_codepoint_js__WEBPACK_IMPORTED_MODULE_2__.replaceCodePoint),
/* harmony export */   xmlDecodeTree: () => (/* reexport safe */ _generated_decode_data_xml_js__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _generated_decode_data_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generated/decode-data-html.js */ "./node_modules/cheerio/node_modules/entities/lib/esm/generated/decode-data-html.js");
/* harmony import */ var _generated_decode_data_xml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generated/decode-data-xml.js */ "./node_modules/cheerio/node_modules/entities/lib/esm/generated/decode-data-xml.js");
/* harmony import */ var _decode_codepoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decode_codepoint.js */ "./node_modules/cheerio/node_modules/entities/lib/esm/decode_codepoint.js");



// Re-export for use by eg. htmlparser2


var CharCodes;
(function (CharCodes) {
    CharCodes[CharCodes["NUM"] = 35] = "NUM";
    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
    CharCodes[CharCodes["NINE"] = 57] = "NINE";
    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */
const TO_LOWER_BIT = 0b100000;
var BinTrieFlags;
(function (BinTrieFlags) {
    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber(code) {
    return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
    return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F) ||
        (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F));
}
function isAsciiAlphaNumeric(code) {
    return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z) ||
        (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z) ||
        isNumber(code));
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */
function isEntityInAttributeInvalidEnd(code) {
    return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function (EntityDecoderState) {
    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function (DecodingMode) {
    /** Entities in text nodes that can end with any character. */
    DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
    /** Only allow entities terminated with a semicolon. */
    DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
    /** Entities in attributes have limitations on ending characters. */
    DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
/**
 * Token decoder with support of writing partial entities.
 */
class EntityDecoder {
    constructor(
    /** The tree used to decode entities. */
    decodeTree, 
    /**
     * The function that is called when a codepoint is decoded.
     *
     * For multi-byte named entities, this will be called multiple times,
     * with the second codepoint, and the same `consumed` value.
     *
     * @param codepoint The decoded codepoint.
     * @param consumed The number of bytes consumed by the decoder.
     */
    emitCodePoint, 
    /** An object that is used to produce errors. */
    errors) {
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        /** The current state of the decoder. */
        this.state = EntityDecoderState.EntityStart;
        /** Characters that were consumed while parsing an entity. */
        this.consumed = 1;
        /**
         * The result of the entity.
         *
         * Either the result index of a numeric entity, or the codepoint of a
         * numeric entity.
         */
        this.result = 0;
        /** The current index in the decode tree. */
        this.treeIndex = 0;
        /** The number of characters that were consumed in excess. */
        this.excess = 1;
        /** The mode in which the decoder is operating. */
        this.decodeMode = DecodingMode.Strict;
    }
    /** Resets the instance to make it reusable. */
    startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param string The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    write(str, offset) {
        switch (this.state) {
            case EntityDecoderState.EntityStart: {
                if (str.charCodeAt(offset) === CharCodes.NUM) {
                    this.state = EntityDecoderState.NumericStart;
                    this.consumed += 1;
                    return this.stateNumericStart(str, offset + 1);
                }
                this.state = EntityDecoderState.NamedEntity;
                return this.stateNamedEntity(str, offset);
            }
            case EntityDecoderState.NumericStart: {
                return this.stateNumericStart(str, offset);
            }
            case EntityDecoderState.NumericDecimal: {
                return this.stateNumericDecimal(str, offset);
            }
            case EntityDecoderState.NumericHex: {
                return this.stateNumericHex(str, offset);
            }
            case EntityDecoderState.NamedEntity: {
                return this.stateNamedEntity(str, offset);
            }
        }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericStart(str, offset) {
        if (offset >= str.length) {
            return -1;
        }
        if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(str, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(str, offset);
    }
    addToNumericResult(str, start, end, base) {
        if (start !== end) {
            const digitCount = end - start;
            this.result =
                this.result * Math.pow(base, digitCount) +
                    parseInt(str.substr(start, digitCount), base);
            this.consumed += digitCount;
        }
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericHex(str, offset) {
        const startIdx = offset;
        while (offset < str.length) {
            const char = str.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) {
                offset += 1;
            }
            else {
                this.addToNumericResult(str, startIdx, offset, 16);
                return this.emitNumericEntity(char, 3);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 16);
        return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNumericDecimal(str, offset) {
        const startIdx = offset;
        while (offset < str.length) {
            const char = str.charCodeAt(offset);
            if (isNumber(char)) {
                offset += 1;
            }
            else {
                this.addToNumericResult(str, startIdx, offset, 10);
                return this.emitNumericEntity(char, 2);
            }
        }
        this.addToNumericResult(str, startIdx, offset, 10);
        return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */
    emitNumericEntity(lastCp, expectedLength) {
        var _a;
        // Ensure we consumed at least one digit.
        if (this.consumed <= expectedLength) {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        // Figure out if this is a legit end of the entity
        if (lastCp === CharCodes.SEMI) {
            this.consumed += 1;
        }
        else if (this.decodeMode === DecodingMode.Strict) {
            return 0;
        }
        this.emitCodePoint((0,_decode_codepoint_js__WEBPACK_IMPORTED_MODULE_2__.replaceCodePoint)(this.result), this.consumed);
        if (this.errors) {
            if (lastCp !== CharCodes.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param str The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
    stateNamedEntity(str, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        // The mask is the number of bytes of the value, including the current byte.
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        for (; offset < str.length; offset++, this.excess++) {
            const char = str.charCodeAt(offset);
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) {
                return this.result === 0 ||
                    // If we are parsing an attribute
                    (this.decodeMode === DecodingMode.Attribute &&
                        // We shouldn't have consumed any characters after the entity,
                        (valueLength === 0 ||
                            // And there should be no invalid characters.
                            isEntityInAttributeInvalidEnd(char)))
                    ? 0
                    : this.emitNotTerminatedNamedEntity();
            }
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            // If the branch is a value, store it and continue
            if (valueLength !== 0) {
                // If the entity is terminated by a semicolon, we are done.
                if (char === CharCodes.SEMI) {
                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
                }
                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
                if (this.decodeMode !== DecodingMode.Strict) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
        }
        return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */
    emitNotTerminatedNamedEntity() {
        var _a;
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */
    emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1
            ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH
            : decodeTree[result + 1], consumed);
        if (valueLength === 3) {
            // For multi-byte values, we need to emit the second byte.
            this.emitCodePoint(decodeTree[result + 2], consumed);
        }
        return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */
    end() {
        var _a;
        switch (this.state) {
            case EntityDecoderState.NamedEntity: {
                // Emit a named entity if we have one.
                return this.result !== 0 &&
                    (this.decodeMode !== DecodingMode.Attribute ||
                        this.result === this.treeIndex)
                    ? this.emitNotTerminatedNamedEntity()
                    : 0;
            }
            // Otherwise, emit a numeric entity if we have one.
            case EntityDecoderState.NumericDecimal: {
                return this.emitNumericEntity(0, 2);
            }
            case EntityDecoderState.NumericHex: {
                return this.emitNumericEntity(0, 3);
            }
            case EntityDecoderState.NumericStart: {
                (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
            }
            case EntityDecoderState.EntityStart: {
                // Return 0 if we have no entity.
                return 0;
            }
        }
    }
}
/**
 * Creates a function that decodes entities in a string.
 *
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */
function getDecoder(decodeTree) {
    let ret = "";
    const decoder = new EntityDecoder(decodeTree, (str) => (ret += (0,_decode_codepoint_js__WEBPACK_IMPORTED_MODULE_2__.fromCodePoint)(str)));
    return function decodeWithTrie(str, decodeMode) {
        let lastIndex = 0;
        let offset = 0;
        while ((offset = str.indexOf("&", offset)) >= 0) {
            ret += str.slice(lastIndex, offset);
            decoder.startEntity(decodeMode);
            const len = decoder.write(str, 
            // Skip the "&"
            offset + 1);
            if (len < 0) {
                lastIndex = offset + decoder.end();
                break;
            }
            lastIndex = offset + len;
            // If `len` is 0, skip the current `&` and continue.
            offset = len === 0 ? lastIndex + 1 : lastIndex;
        }
        const result = ret + str.slice(lastIndex);
        // Make sure we don't keep a reference to the final string.
        ret = "";
        return result;
    };
}
/**
 * Determines the branch of the current node that is taken given the current
 * character. This function is used to traverse the trie.
 *
 * @param decodeTree The trie.
 * @param current The current node.
 * @param nodeIdx The index right after the current node and its value.
 * @param char The current character.
 * @returns The index of the next node, or -1 if no branch is taken.
 */
function determineBranch(decodeTree, current, nodeIdx, char) {
    const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
    const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
    // Case 1: Single branch encoded in jump offset
    if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
    }
    // Case 2: Multiple branches encoded in jump table
    if (jumpOffset) {
        const value = char - jumpOffset;
        return value < 0 || value >= branchCount
            ? -1
            : decodeTree[nodeIdx + value] - 1;
    }
    // Case 3: Multiple branches encoded in dictionary
    // Binary search for the character.
    let lo = nodeIdx;
    let hi = lo + branchCount - 1;
    while (lo <= hi) {
        const mid = (lo + hi) >>> 1;
        const midVal = decodeTree[mid];
        if (midVal < char) {
            lo = mid + 1;
        }
        else if (midVal > char) {
            hi = mid - 1;
        }
        else {
            return decodeTree[mid + branchCount];
        }
    }
    return -1;
}
const htmlDecoder = getDecoder(_generated_decode_data_html_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
const xmlDecoder = getDecoder(_generated_decode_data_xml_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * Decodes an HTML string.
 *
 * @param str The string to decode.
 * @param mode The decoding mode.
 * @returns The decoded string.
 */
function decodeHTML(str, mode = DecodingMode.Legacy) {
    return htmlDecoder(str, mode);
}
/**
 * Decodes an HTML string in an attribute.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
function decodeHTMLAttribute(str) {
    return htmlDecoder(str, DecodingMode.Attribute);
}
/**
 * Decodes an HTML string, requiring all entities to be terminated by a semicolon.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
function decodeHTMLStrict(str) {
    return htmlDecoder(str, DecodingMode.Strict);
}
/**
 * Decodes an XML string, requiring all entities to be terminated by a semicolon.
 *
 * @param str The string to decode.
 * @returns The decoded string.
 */
function decodeXML(str) {
    return xmlDecoder(str, DecodingMode.Strict);
}
//# sourceMappingURL=decode.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/entities/lib/esm/decode_codepoint.js":
/*!********************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/entities/lib/esm/decode_codepoint.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ decodeCodePoint),
/* harmony export */   fromCodePoint: () => (/* binding */ fromCodePoint),
/* harmony export */   replaceCodePoint: () => (/* binding */ replaceCodePoint)
/* harmony export */ });
// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var _a;
const decodeMap = new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376],
]);
/**
 * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
 */
const fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function (codePoint) {
    let output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }
    output += String.fromCharCode(codePoint);
    return output;
};
/**
 * Replace the given code point with a replacement character if it is a
 * surrogate or is outside the valid range. Otherwise return the code
 * point unchanged.
 */
function replaceCodePoint(codePoint) {
    var _a;
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return 0xfffd;
    }
    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}
/**
 * Replace the code point if relevant, then convert it to a string.
 *
 * @deprecated Use `fromCodePoint(replaceCodePoint(codePoint))` instead.
 * @param codePoint The code point to decode.
 * @returns The decoded code point.
 */
function decodeCodePoint(codePoint) {
    return fromCodePoint(replaceCodePoint(codePoint));
}
//# sourceMappingURL=decode_codepoint.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/entities/lib/esm/encode.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/entities/lib/esm/encode.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeHTML: () => (/* binding */ encodeHTML),
/* harmony export */   encodeNonAsciiHTML: () => (/* binding */ encodeNonAsciiHTML)
/* harmony export */ });
/* harmony import */ var _generated_encode_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generated/encode-html.js */ "./node_modules/cheerio/node_modules/entities/lib/esm/generated/encode-html.js");
/* harmony import */ var _escape_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape.js */ "./node_modules/cheerio/node_modules/entities/lib/esm/escape.js");


const htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
/**
 * Encodes all characters in the input using HTML entities. This includes
 * characters that are valid ASCII characters in HTML documents, such as `#`.
 *
 * To get a more compact output, consider using the `encodeNonAsciiHTML`
 * function, which will only encode characters that are not valid in HTML
 * documents, as well as non-ASCII characters.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
function encodeHTML(data) {
    return encodeHTMLTrieRe(htmlReplacer, data);
}
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities. This function will not encode characters that
 * are valid in HTML documents, such as `#`.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
function encodeNonAsciiHTML(data) {
    return encodeHTMLTrieRe(_escape_js__WEBPACK_IMPORTED_MODULE_1__.xmlReplacer, data);
}
function encodeHTMLTrieRe(regExp, str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while ((match = regExp.exec(str)) !== null) {
        const i = match.index;
        ret += str.substring(lastIdx, i);
        const char = str.charCodeAt(i);
        let next = _generated_encode_html_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(char);
        if (typeof next === "object") {
            // We are in a branch. Try to match the next char.
            if (i + 1 < str.length) {
                const nextChar = str.charCodeAt(i + 1);
                const value = typeof next.n === "number"
                    ? next.n === nextChar
                        ? next.o
                        : undefined
                    : next.n.get(nextChar);
                if (value !== undefined) {
                    ret += value;
                    lastIdx = regExp.lastIndex += 1;
                    continue;
                }
            }
            next = next.v;
        }
        // We might have a tree node without a value; skip and use a numeric entity.
        if (next !== undefined) {
            ret += next;
            lastIdx = i + 1;
        }
        else {
            const cp = (0,_escape_js__WEBPACK_IMPORTED_MODULE_1__.getCodePoint)(str, i);
            ret += `&#x${cp.toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = regExp.lastIndex += Number(cp !== char);
        }
    }
    return ret + str.substr(lastIdx);
}
//# sourceMappingURL=encode.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/entities/lib/esm/escape.js":
/*!**********************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/entities/lib/esm/escape.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeXML: () => (/* binding */ encodeXML),
/* harmony export */   escape: () => (/* binding */ escape),
/* harmony export */   escapeAttribute: () => (/* binding */ escapeAttribute),
/* harmony export */   escapeText: () => (/* binding */ escapeText),
/* harmony export */   escapeUTF8: () => (/* binding */ escapeUTF8),
/* harmony export */   getCodePoint: () => (/* binding */ getCodePoint),
/* harmony export */   xmlReplacer: () => (/* binding */ xmlReplacer)
/* harmony export */ });
const xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
const xmlCodeMap = new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"],
]);
// For compatibility with node < 4, we wrap `codePointAt`
const getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? (str, index) => str.codePointAt(index)
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        (c, index) => (c.charCodeAt(index) & 0xfc00) === 0xd800
            ? (c.charCodeAt(index) - 0xd800) * 0x400 +
                c.charCodeAt(index + 1) -
                0xdc00 +
                0x10000
            : c.charCodeAt(index);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
function encodeXML(str) {
    let ret = "";
    let lastIdx = 0;
    let match;
    while ((match = xmlReplacer.exec(str)) !== null) {
        const i = match.index;
        const char = str.charCodeAt(i);
        const next = xmlCodeMap.get(char);
        if (next !== undefined) {
            ret += str.substring(lastIdx, i) + next;
            lastIdx = i + 1;
        }
        else {
            ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIdx = xmlReplacer.lastIndex += Number((char & 0xfc00) === 0xd800);
        }
    }
    return ret + str.substr(lastIdx);
}
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
const escape = encodeXML;
/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 *
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 *
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */
function getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIdx = 0;
        let result = "";
        while ((match = regex.exec(data))) {
            if (lastIdx !== match.index) {
                result += data.substring(lastIdx, match.index);
            }
            // We know that this character will be in the map.
            result += map.get(match[0].charCodeAt(0));
            // Every match will be of length 1
            lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
    };
}
/**
 * Encodes all characters not valid in XML documents using XML entities.
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
const escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
/**
 * Encodes all characters that have to be escaped in HTML attributes,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
const escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"],
]));
/**
 * Encodes all characters that have to be escaped in HTML text,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
const escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"],
]));
//# sourceMappingURL=escape.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/entities/lib/esm/generated/decode-data-html.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/entities/lib/esm/generated/decode-data-html.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Generated using scripts/write-decode-map.ts
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Uint16Array(
// prettier-ignore
"\u1d41<\xd5\u0131\u028a\u049d\u057b\u05d0\u0675\u06de\u07a2\u07d6\u080f\u0a4a\u0a91\u0da1\u0e6d\u0f09\u0f26\u10ca\u1228\u12e1\u1415\u149d\u14c3\u14df\u1525\0\0\0\0\0\0\u156b\u16cd\u198d\u1c12\u1ddd\u1f7e\u2060\u21b0\u228d\u23c0\u23fb\u2442\u2824\u2912\u2d08\u2e48\u2fce\u3016\u32ba\u3639\u37ac\u38fe\u3a28\u3a71\u3ae0\u3b2e\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803b\xc6\u40c6P\u803b&\u4026cute\u803b\xc1\u40c1reve;\u4102\u0100iyx}rc\u803b\xc2\u40c2;\u4410r;\uc000\ud835\udd04rave\u803b\xc0\u40c0pha;\u4391acr;\u4100d;\u6a53\u0100gp\x9d\xa1on;\u4104f;\uc000\ud835\udd38plyFunction;\u6061ing\u803b\xc5\u40c5\u0100cs\xbe\xc3r;\uc000\ud835\udc9cign;\u6254ilde\u803b\xc3\u40c3ml\u803b\xc4\u40c4\u0400aceforsu\xe5\xfb\xfe\u0117\u011c\u0122\u0127\u012a\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6ae7ed;\u6306y;\u4411\u0180crt\u0105\u010b\u0114ause;\u6235noullis;\u612ca;\u4392r;\uc000\ud835\udd05pf;\uc000\ud835\udd39eve;\u42d8c\xf2\u0113mpeq;\u624e\u0700HOacdefhilorsu\u014d\u0151\u0156\u0180\u019e\u01a2\u01b5\u01b7\u01ba\u01dc\u0215\u0273\u0278\u027ecy;\u4427PY\u803b\xa9\u40a9\u0180cpy\u015d\u0162\u017aute;\u4106\u0100;i\u0167\u0168\u62d2talDifferentialD;\u6145leys;\u612d\u0200aeio\u0189\u018e\u0194\u0198ron;\u410cdil\u803b\xc7\u40c7rc;\u4108nint;\u6230ot;\u410a\u0100dn\u01a7\u01adilla;\u40b8terDot;\u40b7\xf2\u017fi;\u43a7rcle\u0200DMPT\u01c7\u01cb\u01d1\u01d6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01e2\u01f8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020foubleQuote;\u601duote;\u6019\u0200lnpu\u021e\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6a74\u0180git\u022f\u0236\u023aruent;\u6261nt;\u622fourIntegral;\u622e\u0100fr\u024c\u024e;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6a2fcr;\uc000\ud835\udc9ep\u0100;C\u0284\u0285\u62d3ap;\u624d\u0580DJSZacefios\u02a0\u02ac\u02b0\u02b4\u02b8\u02cb\u02d7\u02e1\u02e6\u0333\u048d\u0100;o\u0179\u02a5trahd;\u6911cy;\u4402cy;\u4405cy;\u440f\u0180grs\u02bf\u02c4\u02c7ger;\u6021r;\u61a1hv;\u6ae4\u0100ay\u02d0\u02d5ron;\u410e;\u4414l\u0100;t\u02dd\u02de\u6207a;\u4394r;\uc000\ud835\udd07\u0100af\u02eb\u0327\u0100cm\u02f0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031ccute;\u40b4o\u0174\u030b\u030d;\u42d9bleAcute;\u42ddrave;\u4060ilde;\u42dcond;\u62c4ferentialD;\u6146\u0470\u033d\0\0\0\u0342\u0354\0\u0405f;\uc000\ud835\udd3b\u0180;DE\u0348\u0349\u034d\u40a8ot;\u60dcqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03cf\u03e2\u03f8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037b\xbb\u0349nArrow;\u61d3\u0100eo\u0387\u03a4ft\u0180ART\u0390\u0396\u03a1rrow;\u61d0ightArrow;\u61d4e\xe5\u02cang\u0100LR\u03ab\u03c4eft\u0100AR\u03b3\u03b9rrow;\u67f8ightArrow;\u67faightArrow;\u67f9ight\u0100AT\u03d8\u03derrow;\u61d2ee;\u62a8p\u0241\u03e9\0\0\u03efrrow;\u61d1ownArrow;\u61d5erticalBar;\u6225n\u0300ABLRTa\u0412\u042a\u0430\u045e\u047f\u037crrow\u0180;BU\u041d\u041e\u0422\u6193ar;\u6913pArrow;\u61f5reve;\u4311eft\u02d2\u043a\0\u0446\0\u0450ightVector;\u6950eeVector;\u695eector\u0100;B\u0459\u045a\u61bdar;\u6956ight\u01d4\u0467\0\u0471eeVector;\u695fector\u0100;B\u047a\u047b\u61c1ar;\u6957ee\u0100;A\u0486\u0487\u62a4rrow;\u61a7\u0100ct\u0492\u0497r;\uc000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04bd\u04c0\u04c4\u04cb\u04de\u04e2\u04e7\u04ee\u04f5\u0521\u052f\u0536\u0552\u055d\u0560\u0565G;\u414aH\u803b\xd0\u40d0cute\u803b\xc9\u40c9\u0180aiy\u04d2\u04d7\u04dcron;\u411arc\u803b\xca\u40ca;\u442dot;\u4116r;\uc000\ud835\udd08rave\u803b\xc8\u40c8ement;\u6208\u0100ap\u04fa\u04fecr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65fberySmallSquare;\u65ab\u0100gp\u0526\u052aon;\u4118f;\uc000\ud835\udd3csilon;\u4395u\u0100ai\u053c\u0549l\u0100;T\u0542\u0543\u6a75ilde;\u6242librium;\u61cc\u0100ci\u0557\u055ar;\u6130m;\u6a73a;\u4397ml\u803b\xcb\u40cb\u0100ip\u056a\u056fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058d\u05b2\u05ccy;\u4424r;\uc000\ud835\udd09lled\u0253\u0597\0\0\u05a3mallSquare;\u65fcerySmallSquare;\u65aa\u0370\u05ba\0\u05bf\0\0\u05c4f;\uc000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05cb\u0600JTabcdfgorst\u05e8\u05ec\u05ef\u05fa\u0600\u0612\u0616\u061b\u061d\u0623\u066c\u0672cy;\u4403\u803b>\u403emma\u0100;d\u05f7\u05f8\u4393;\u43dcreve;\u411e\u0180eiy\u0607\u060c\u0610dil;\u4122rc;\u411c;\u4413ot;\u4120r;\uc000\ud835\udd0a;\u62d9pf;\uc000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064e\u0656\u065b\u0666qual\u0100;L\u063e\u063f\u6265ess;\u62dbullEqual;\u6267reater;\u6aa2ess;\u6277lantEqual;\u6a7eilde;\u6273cr;\uc000\ud835\udca2;\u626b\u0400Aacfiosu\u0685\u068b\u0696\u069b\u069e\u06aa\u06be\u06caRDcy;\u442a\u0100ct\u0690\u0694ek;\u42c7;\u405eirc;\u4124r;\u610clbertSpace;\u610b\u01f0\u06af\0\u06b2f;\u610dizontalLine;\u6500\u0100ct\u06c3\u06c5\xf2\u06a9rok;\u4126mp\u0144\u06d0\u06d8ownHum\xf0\u012fqual;\u624f\u0700EJOacdfgmnostu\u06fa\u06fe\u0703\u0707\u070e\u071a\u071e\u0721\u0728\u0744\u0778\u078b\u078f\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803b\xcd\u40cd\u0100iy\u0713\u0718rc\u803b\xce\u40ce;\u4418ot;\u4130r;\u6111rave\u803b\xcc\u40cc\u0180;ap\u0720\u072f\u073f\u0100cg\u0734\u0737r;\u412ainaryI;\u6148lie\xf3\u03dd\u01f4\u0749\0\u0762\u0100;e\u074d\u074e\u622c\u0100gr\u0753\u0758ral;\u622bsection;\u62c2isible\u0100CT\u076c\u0772omma;\u6063imes;\u6062\u0180gpt\u077f\u0783\u0788on;\u412ef;\uc000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01eb\u079a\0\u079ecy;\u4406l\u803b\xcf\u40cf\u0280cfosu\u07ac\u07b7\u07bc\u07c2\u07d0\u0100iy\u07b1\u07b5rc;\u4134;\u4419r;\uc000\ud835\udd0dpf;\uc000\ud835\udd41\u01e3\u07c7\0\u07ccr;\uc000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07e4\u07e8\u07ec\u07f1\u07fd\u0802\u0808cy;\u4425cy;\u440cppa;\u439a\u0100ey\u07f6\u07fbdil;\u4136;\u441ar;\uc000\ud835\udd0epf;\uc000\ud835\udd42cr;\uc000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082c\u0850\u0863\u09b3\u09b8\u09c7\u09cd\u0a37\u0a47cy;\u4409\u803b<\u403c\u0280cmnpr\u0837\u083c\u0841\u0844\u084dute;\u4139bda;\u439bg;\u67ealacetrf;\u6112r;\u619e\u0180aey\u0857\u085c\u0861ron;\u413ddil;\u413b;\u441b\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087e\u08a9\u08b1\u08e0\u08e6\u08fc\u092f\u095b\u0390\u096a\u0100nr\u0883\u088fgleBracket;\u67e8row\u0180;BR\u0899\u089a\u089e\u6190ar;\u61e4ightArrow;\u61c6eiling;\u6308o\u01f5\u08b7\0\u08c3bleBracket;\u67e6n\u01d4\u08c8\0\u08d2eeVector;\u6961ector\u0100;B\u08db\u08dc\u61c3ar;\u6959loor;\u630aight\u0100AV\u08ef\u08f5rrow;\u6194ector;\u694e\u0100er\u0901\u0917e\u0180;AV\u0909\u090a\u0910\u62a3rrow;\u61a4ector;\u695aiangle\u0180;BE\u0924\u0925\u0929\u62b2ar;\u69cfqual;\u62b4p\u0180DTV\u0937\u0942\u094cownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61bfar;\u6958ector\u0100;B\u0965\u0966\u61bcar;\u6952ight\xe1\u039cs\u0300EFGLST\u097e\u098b\u0995\u099d\u09a2\u09adqualGreater;\u62daullEqual;\u6266reater;\u6276ess;\u6aa1lantEqual;\u6a7dilde;\u6272r;\uc000\ud835\udd0f\u0100;e\u09bd\u09be\u62d8ftarrow;\u61daidot;\u413f\u0180npw\u09d4\u0a16\u0a1bg\u0200LRlr\u09de\u09f7\u0a02\u0a10eft\u0100AR\u09e6\u09ecrrow;\u67f5ightArrow;\u67f7ightArrow;\u67f6eft\u0100ar\u03b3\u0a0aight\xe1\u03bfight\xe1\u03caf;\uc000\ud835\udd43er\u0100LR\u0a22\u0a2ceftArrow;\u6199ightArrow;\u6198\u0180cht\u0a3e\u0a40\u0a42\xf2\u084c;\u61b0rok;\u4141;\u626a\u0400acefiosu\u0a5a\u0a5d\u0a60\u0a77\u0a7c\u0a85\u0a8b\u0a8ep;\u6905y;\u441c\u0100dl\u0a65\u0a6fiumSpace;\u605flintrf;\u6133r;\uc000\ud835\udd10nusPlus;\u6213pf;\uc000\ud835\udd44c\xf2\u0a76;\u439c\u0480Jacefostu\u0aa3\u0aa7\u0aad\u0ac0\u0b14\u0b19\u0d91\u0d97\u0d9ecy;\u440acute;\u4143\u0180aey\u0ab4\u0ab9\u0aberon;\u4147dil;\u4145;\u441d\u0180gsw\u0ac7\u0af0\u0b0eative\u0180MTV\u0ad3\u0adf\u0ae8ediumSpace;\u600bhi\u0100cn\u0ae6\u0ad8\xeb\u0ad9eryThi\xee\u0ad9ted\u0100GL\u0af8\u0b06reaterGreate\xf2\u0673essLes\xf3\u0a48Line;\u400ar;\uc000\ud835\udd11\u0200Bnpt\u0b22\u0b28\u0b37\u0b3areak;\u6060BreakingSpace;\u40a0f;\u6115\u0680;CDEGHLNPRSTV\u0b55\u0b56\u0b6a\u0b7c\u0ba1\u0beb\u0c04\u0c5e\u0c84\u0ca6\u0cd8\u0d61\u0d85\u6aec\u0100ou\u0b5b\u0b64ngruent;\u6262pCap;\u626doubleVerticalBar;\u6226\u0180lqx\u0b83\u0b8a\u0b9bement;\u6209ual\u0100;T\u0b92\u0b93\u6260ilde;\uc000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0bb6\u0bb7\u0bbd\u0bc9\u0bd3\u0bd8\u0be5\u626fqual;\u6271ullEqual;\uc000\u2267\u0338reater;\uc000\u226b\u0338ess;\u6279lantEqual;\uc000\u2a7e\u0338ilde;\u6275ump\u0144\u0bf2\u0bfdownHump;\uc000\u224e\u0338qual;\uc000\u224f\u0338e\u0100fs\u0c0a\u0c27tTriangle\u0180;BE\u0c1a\u0c1b\u0c21\u62eaar;\uc000\u29cf\u0338qual;\u62ecs\u0300;EGLST\u0c35\u0c36\u0c3c\u0c44\u0c4b\u0c58\u626equal;\u6270reater;\u6278ess;\uc000\u226a\u0338lantEqual;\uc000\u2a7d\u0338ilde;\u6274ested\u0100GL\u0c68\u0c79reaterGreater;\uc000\u2aa2\u0338essLess;\uc000\u2aa1\u0338recedes\u0180;ES\u0c92\u0c93\u0c9b\u6280qual;\uc000\u2aaf\u0338lantEqual;\u62e0\u0100ei\u0cab\u0cb9verseElement;\u620cghtTriangle\u0180;BE\u0ccb\u0ccc\u0cd2\u62ebar;\uc000\u29d0\u0338qual;\u62ed\u0100qu\u0cdd\u0d0cuareSu\u0100bp\u0ce8\u0cf9set\u0100;E\u0cf0\u0cf3\uc000\u228f\u0338qual;\u62e2erset\u0100;E\u0d03\u0d06\uc000\u2290\u0338qual;\u62e3\u0180bcp\u0d13\u0d24\u0d4eset\u0100;E\u0d1b\u0d1e\uc000\u2282\u20d2qual;\u6288ceeds\u0200;EST\u0d32\u0d33\u0d3b\u0d46\u6281qual;\uc000\u2ab0\u0338lantEqual;\u62e1ilde;\uc000\u227f\u0338erset\u0100;E\u0d58\u0d5b\uc000\u2283\u20d2qual;\u6289ilde\u0200;EFT\u0d6e\u0d6f\u0d75\u0d7f\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uc000\ud835\udca9ilde\u803b\xd1\u40d1;\u439d\u0700Eacdfgmoprstuv\u0dbd\u0dc2\u0dc9\u0dd5\u0ddb\u0de0\u0de7\u0dfc\u0e02\u0e20\u0e22\u0e32\u0e3f\u0e44lig;\u4152cute\u803b\xd3\u40d3\u0100iy\u0dce\u0dd3rc\u803b\xd4\u40d4;\u441eblac;\u4150r;\uc000\ud835\udd12rave\u803b\xd2\u40d2\u0180aei\u0dee\u0df2\u0df6cr;\u414cga;\u43a9cron;\u439fpf;\uc000\ud835\udd46enCurly\u0100DQ\u0e0e\u0e1aoubleQuote;\u601cuote;\u6018;\u6a54\u0100cl\u0e27\u0e2cr;\uc000\ud835\udcaaash\u803b\xd8\u40d8i\u016c\u0e37\u0e3cde\u803b\xd5\u40d5es;\u6a37ml\u803b\xd6\u40d6er\u0100BP\u0e4b\u0e60\u0100ar\u0e50\u0e53r;\u603eac\u0100ek\u0e5a\u0e5c;\u63deet;\u63b4arenthesis;\u63dc\u0480acfhilors\u0e7f\u0e87\u0e8a\u0e8f\u0e92\u0e94\u0e9d\u0eb0\u0efcrtialD;\u6202y;\u441fr;\uc000\ud835\udd13i;\u43a6;\u43a0usMinus;\u40b1\u0100ip\u0ea2\u0eadncareplan\xe5\u069df;\u6119\u0200;eio\u0eb9\u0eba\u0ee0\u0ee4\u6abbcedes\u0200;EST\u0ec8\u0ec9\u0ecf\u0eda\u627aqual;\u6aaflantEqual;\u627cilde;\u627eme;\u6033\u0100dp\u0ee9\u0eeeuct;\u620fortion\u0100;a\u0225\u0ef9l;\u621d\u0100ci\u0f01\u0f06r;\uc000\ud835\udcab;\u43a8\u0200Ufos\u0f11\u0f16\u0f1b\u0f1fOT\u803b\"\u4022r;\uc000\ud835\udd14pf;\u611acr;\uc000\ud835\udcac\u0600BEacefhiorsu\u0f3e\u0f43\u0f47\u0f60\u0f73\u0fa7\u0faa\u0fad\u1096\u10a9\u10b4\u10bearr;\u6910G\u803b\xae\u40ae\u0180cnr\u0f4e\u0f53\u0f56ute;\u4154g;\u67ebr\u0100;t\u0f5c\u0f5d\u61a0l;\u6916\u0180aey\u0f67\u0f6c\u0f71ron;\u4158dil;\u4156;\u4420\u0100;v\u0f78\u0f79\u611cerse\u0100EU\u0f82\u0f99\u0100lq\u0f87\u0f8eement;\u620builibrium;\u61cbpEquilibrium;\u696fr\xbb\u0f79o;\u43a1ght\u0400ACDFTUVa\u0fc1\u0feb\u0ff3\u1022\u1028\u105b\u1087\u03d8\u0100nr\u0fc6\u0fd2gleBracket;\u67e9row\u0180;BL\u0fdc\u0fdd\u0fe1\u6192ar;\u61e5eftArrow;\u61c4eiling;\u6309o\u01f5\u0ff9\0\u1005bleBracket;\u67e7n\u01d4\u100a\0\u1014eeVector;\u695dector\u0100;B\u101d\u101e\u61c2ar;\u6955loor;\u630b\u0100er\u102d\u1043e\u0180;AV\u1035\u1036\u103c\u62a2rrow;\u61a6ector;\u695biangle\u0180;BE\u1050\u1051\u1055\u62b3ar;\u69d0qual;\u62b5p\u0180DTV\u1063\u106e\u1078ownVector;\u694feeVector;\u695cector\u0100;B\u1082\u1083\u61bear;\u6954ector\u0100;B\u1091\u1092\u61c0ar;\u6953\u0100pu\u109b\u109ef;\u611dndImplies;\u6970ightarrow;\u61db\u0100ch\u10b9\u10bcr;\u611b;\u61b1leDelayed;\u69f4\u0680HOacfhimoqstu\u10e4\u10f1\u10f7\u10fd\u1119\u111e\u1151\u1156\u1161\u1167\u11b5\u11bb\u11bf\u0100Cc\u10e9\u10eeHcy;\u4429y;\u4428FTcy;\u442ccute;\u415a\u0280;aeiy\u1108\u1109\u110e\u1113\u1117\u6abcron;\u4160dil;\u415erc;\u415c;\u4421r;\uc000\ud835\udd16ort\u0200DLRU\u112a\u1134\u113e\u1149ownArrow\xbb\u041eeftArrow\xbb\u089aightArrow\xbb\u0fddpArrow;\u6191gma;\u43a3allCircle;\u6218pf;\uc000\ud835\udd4a\u0272\u116d\0\0\u1170t;\u621aare\u0200;ISU\u117b\u117c\u1189\u11af\u65a1ntersection;\u6293u\u0100bp\u118f\u119eset\u0100;E\u1197\u1198\u628fqual;\u6291erset\u0100;E\u11a8\u11a9\u6290qual;\u6292nion;\u6294cr;\uc000\ud835\udcaear;\u62c6\u0200bcmp\u11c8\u11db\u1209\u120b\u0100;s\u11cd\u11ce\u62d0et\u0100;E\u11cd\u11d5qual;\u6286\u0100ch\u11e0\u1205eeds\u0200;EST\u11ed\u11ee\u11f4\u11ff\u627bqual;\u6ab0lantEqual;\u627dilde;\u627fTh\xe1\u0f8c;\u6211\u0180;es\u1212\u1213\u1223\u62d1rset\u0100;E\u121c\u121d\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123e\u1244\u1249\u1255\u125e\u1271\u1276\u129f\u12c2\u12c8\u12d1ORN\u803b\xde\u40deADE;\u6122\u0100Hc\u124e\u1252cy;\u440by;\u4426\u0100bu\u125a\u125c;\u4009;\u43a4\u0180aey\u1265\u126a\u126fron;\u4164dil;\u4162;\u4422r;\uc000\ud835\udd17\u0100ei\u127b\u1289\u01f2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128e\u1298kSpace;\uc000\u205f\u200aSpace;\u6009lde\u0200;EFT\u12ab\u12ac\u12b2\u12bc\u623cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uc000\ud835\udd4bipleDot;\u60db\u0100ct\u12d6\u12dbr;\uc000\ud835\udcafrok;\u4166\u0ae1\u12f7\u130e\u131a\u1326\0\u132c\u1331\0\0\0\0\0\u1338\u133d\u1377\u1385\0\u13ff\u1404\u140a\u1410\u0100cr\u12fb\u1301ute\u803b\xda\u40dar\u0100;o\u1307\u1308\u619fcir;\u6949r\u01e3\u1313\0\u1316y;\u440eve;\u416c\u0100iy\u131e\u1323rc\u803b\xdb\u40db;\u4423blac;\u4170r;\uc000\ud835\udd18rave\u803b\xd9\u40d9acr;\u416a\u0100di\u1341\u1369er\u0100BP\u1348\u135d\u0100ar\u134d\u1350r;\u405fac\u0100ek\u1357\u1359;\u63dfet;\u63b5arenthesis;\u63ddon\u0100;P\u1370\u1371\u62c3lus;\u628e\u0100gp\u137b\u137fon;\u4172f;\uc000\ud835\udd4c\u0400ADETadps\u1395\u13ae\u13b8\u13c4\u03e8\u13d2\u13d7\u13f3rrow\u0180;BD\u1150\u13a0\u13a4ar;\u6912ownArrow;\u61c5ownArrow;\u6195quilibrium;\u696eee\u0100;A\u13cb\u13cc\u62a5rrow;\u61a5own\xe1\u03f3er\u0100LR\u13de\u13e8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13f9\u13fa\u43d2on;\u43a5ing;\u416ecr;\uc000\ud835\udcb0ilde;\u4168ml\u803b\xdc\u40dc\u0480Dbcdefosv\u1427\u142c\u1430\u1433\u143e\u1485\u148a\u1490\u1496ash;\u62abar;\u6aeby;\u4412ash\u0100;l\u143b\u143c\u62a9;\u6ae6\u0100er\u1443\u1445;\u62c1\u0180bty\u144c\u1450\u147aar;\u6016\u0100;i\u144f\u1455cal\u0200BLST\u1461\u1465\u146a\u1474ar;\u6223ine;\u407ceparator;\u6758ilde;\u6240ThinSpace;\u600ar;\uc000\ud835\udd19pf;\uc000\ud835\udd4dcr;\uc000\ud835\udcb1dash;\u62aa\u0280cefos\u14a7\u14ac\u14b1\u14b6\u14bcirc;\u4174dge;\u62c0r;\uc000\ud835\udd1apf;\uc000\ud835\udd4ecr;\uc000\ud835\udcb2\u0200fios\u14cb\u14d0\u14d2\u14d8r;\uc000\ud835\udd1b;\u439epf;\uc000\ud835\udd4fcr;\uc000\ud835\udcb3\u0480AIUacfosu\u14f1\u14f5\u14f9\u14fd\u1504\u150f\u1514\u151a\u1520cy;\u442fcy;\u4407cy;\u442ecute\u803b\xdd\u40dd\u0100iy\u1509\u150drc;\u4176;\u442br;\uc000\ud835\udd1cpf;\uc000\ud835\udd50cr;\uc000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153f\u154b\u154f\u155d\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417d;\u4417ot;\u417b\u01f2\u1554\0\u155boWidt\xe8\u0ad9a;\u4396r;\u6128pf;\u6124cr;\uc000\ud835\udcb5\u0be1\u1583\u158a\u1590\0\u15b0\u15b6\u15bf\0\0\0\0\u15c6\u15db\u15eb\u165f\u166d\0\u1695\u169b\u16b2\u16b9\0\u16becute\u803b\xe1\u40e1reve;\u4103\u0300;Ediuy\u159c\u159d\u15a1\u15a3\u15a8\u15ad\u623e;\uc000\u223e\u0333;\u623frc\u803b\xe2\u40e2te\u80bb\xb4\u0306;\u4430lig\u803b\xe6\u40e6\u0100;r\xb2\u15ba;\uc000\ud835\udd1erave\u803b\xe0\u40e0\u0100ep\u15ca\u15d6\u0100fp\u15cf\u15d4sym;\u6135\xe8\u15d3ha;\u43b1\u0100ap\u15dfc\u0100cl\u15e4\u15e7r;\u4101g;\u6a3f\u0264\u15f0\0\0\u160a\u0280;adsv\u15fa\u15fb\u15ff\u1601\u1607\u6227nd;\u6a55;\u6a5clope;\u6a58;\u6a5a\u0380;elmrsz\u1618\u1619\u161b\u161e\u163f\u164f\u1659\u6220;\u69a4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163a\u163c\u163e;\u69a8;\u69a9;\u69aa;\u69ab;\u69ac;\u69ad;\u69ae;\u69aft\u0100;v\u1645\u1646\u621fb\u0100;d\u164c\u164d\u62be;\u699d\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637c\u0100gp\u1663\u1667on;\u4105f;\uc000\ud835\udd52\u0380;Eaeiop\u12c1\u167b\u167d\u1682\u1684\u1687\u168a;\u6a70cir;\u6a6f;\u624ad;\u624bs;\u4027rox\u0100;e\u12c1\u1692\xf1\u1683ing\u803b\xe5\u40e5\u0180cty\u16a1\u16a6\u16a8r;\uc000\ud835\udcb6;\u402amp\u0100;e\u12c1\u16af\xf1\u0288ilde\u803b\xe3\u40e3ml\u803b\xe4\u40e4\u0100ci\u16c2\u16c8onin\xf4\u0272nt;\u6a11\u0800Nabcdefiklnoprsu\u16ed\u16f1\u1730\u173c\u1743\u1748\u1778\u177d\u17e0\u17e6\u1839\u1850\u170d\u193d\u1948\u1970ot;\u6aed\u0100cr\u16f6\u171ek\u0200ceps\u1700\u1705\u170d\u1713ong;\u624cpsilon;\u43f6rime;\u6035im\u0100;e\u171a\u171b\u623dq;\u62cd\u0176\u1722\u1726ee;\u62bded\u0100;g\u172c\u172d\u6305e\xbb\u172drk\u0100;t\u135c\u1737brk;\u63b6\u0100oy\u1701\u1741;\u4431quo;\u601e\u0280cmprt\u1753\u175b\u1761\u1764\u1768aus\u0100;e\u010a\u0109ptyv;\u69b0s\xe9\u170cno\xf5\u0113\u0180ahw\u176f\u1771\u1773;\u43b2;\u6136een;\u626cr;\uc000\ud835\udd1fg\u0380costuvw\u178d\u179d\u17b3\u17c1\u17d5\u17db\u17de\u0180aiu\u1794\u1796\u179a\xf0\u0760rc;\u65efp\xbb\u1371\u0180dpt\u17a4\u17a8\u17adot;\u6a00lus;\u6a01imes;\u6a02\u0271\u17b9\0\0\u17becup;\u6a06ar;\u6605riangle\u0100du\u17cd\u17d2own;\u65bdp;\u65b3plus;\u6a04e\xe5\u1444\xe5\u14adarow;\u690d\u0180ako\u17ed\u1826\u1835\u0100cn\u17f2\u1823k\u0180lst\u17fa\u05ab\u1802ozenge;\u69ebriangle\u0200;dlr\u1812\u1813\u1818\u181d\u65b4own;\u65beeft;\u65c2ight;\u65b8k;\u6423\u01b1\u182b\0\u1833\u01b2\u182f\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183e\u184d\u0100;q\u1843\u1846\uc000=\u20e5uiv;\uc000\u2261\u20e5t;\u6310\u0200ptwx\u1859\u185e\u1867\u186cf;\uc000\ud835\udd53\u0100;t\u13cb\u1863om\xbb\u13cctie;\u62c8\u0600DHUVbdhmptuv\u1885\u1896\u18aa\u18bb\u18d7\u18db\u18ec\u18ff\u1905\u190a\u1910\u1921\u0200LRlr\u188e\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18a1\u18a2\u18a4\u18a6\u18a8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18b3\u18b5\u18b7\u18b9;\u655d;\u655a;\u655c;\u6559\u0380;HLRhlr\u18ca\u18cb\u18cd\u18cf\u18d1\u18d3\u18d5\u6551;\u656c;\u6563;\u6560;\u656b;\u6562;\u655fox;\u69c9\u0200LRlr\u18e4\u18e6\u18e8\u18ea;\u6555;\u6552;\u6510;\u650c\u0280;DUdu\u06bd\u18f7\u18f9\u18fb\u18fd;\u6565;\u6568;\u652c;\u6534inus;\u629flus;\u629eimes;\u62a0\u0200LRlr\u1919\u191b\u191d\u191f;\u655b;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193b\u6502;\u656a;\u6561;\u655e;\u653c;\u6524;\u651c\u0100ev\u0123\u1942bar\u803b\xa6\u40a6\u0200ceio\u1951\u1956\u195a\u1960r;\uc000\ud835\udcb7mi;\u604fm\u0100;e\u171a\u171cl\u0180;bh\u1968\u1969\u196b\u405c;\u69c5sub;\u67c8\u016c\u1974\u197el\u0100;e\u1979\u197a\u6022t\xbb\u197ap\u0180;Ee\u012f\u1985\u1987;\u6aae\u0100;q\u06dc\u06db\u0ce1\u19a7\0\u19e8\u1a11\u1a15\u1a32\0\u1a37\u1a50\0\0\u1ab4\0\0\u1ac1\0\0\u1b21\u1b2e\u1b4d\u1b52\0\u1bfd\0\u1c0c\u0180cpr\u19ad\u19b2\u19ddute;\u4107\u0300;abcds\u19bf\u19c0\u19c4\u19ca\u19d5\u19d9\u6229nd;\u6a44rcup;\u6a49\u0100au\u19cf\u19d2p;\u6a4bp;\u6a47ot;\u6a40;\uc000\u2229\ufe00\u0100eo\u19e2\u19e5t;\u6041\xee\u0693\u0200aeiu\u19f0\u19fb\u1a01\u1a05\u01f0\u19f5\0\u19f8s;\u6a4don;\u410ddil\u803b\xe7\u40e7rc;\u4109ps\u0100;s\u1a0c\u1a0d\u6a4cm;\u6a50ot;\u410b\u0180dmn\u1a1b\u1a20\u1a26il\u80bb\xb8\u01adptyv;\u69b2t\u8100\xa2;e\u1a2d\u1a2e\u40a2r\xe4\u01b2r;\uc000\ud835\udd20\u0180cei\u1a3d\u1a40\u1a4dy;\u4447ck\u0100;m\u1a47\u1a48\u6713ark\xbb\u1a48;\u43c7r\u0380;Ecefms\u1a5f\u1a60\u1a62\u1a6b\u1aa4\u1aaa\u1aae\u65cb;\u69c3\u0180;el\u1a69\u1a6a\u1a6d\u42c6q;\u6257e\u0261\u1a74\0\0\u1a88rrow\u0100lr\u1a7c\u1a81eft;\u61baight;\u61bb\u0280RSacd\u1a92\u1a94\u1a96\u1a9a\u1a9f\xbb\u0f47;\u64c8st;\u629birc;\u629aash;\u629dnint;\u6a10id;\u6aefcir;\u69c2ubs\u0100;u\u1abb\u1abc\u6663it\xbb\u1abc\u02ec\u1ac7\u1ad4\u1afa\0\u1b0aon\u0100;e\u1acd\u1ace\u403a\u0100;q\xc7\xc6\u026d\u1ad9\0\0\u1ae2a\u0100;t\u1ade\u1adf\u402c;\u4040\u0180;fl\u1ae8\u1ae9\u1aeb\u6201\xee\u1160e\u0100mx\u1af1\u1af6ent\xbb\u1ae9e\xf3\u024d\u01e7\u1afe\0\u1b07\u0100;d\u12bb\u1b02ot;\u6a6dn\xf4\u0246\u0180fry\u1b10\u1b14\u1b17;\uc000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1b1dr;\u6117\u0100ao\u1b25\u1b29rr;\u61b5ss;\u6717\u0100cu\u1b32\u1b37r;\uc000\ud835\udcb8\u0100bp\u1b3c\u1b44\u0100;e\u1b41\u1b42\u6acf;\u6ad1\u0100;e\u1b49\u1b4a\u6ad0;\u6ad2dot;\u62ef\u0380delprvw\u1b60\u1b6c\u1b77\u1b82\u1bac\u1bd4\u1bf9arr\u0100lr\u1b68\u1b6a;\u6938;\u6935\u0270\u1b72\0\0\u1b75r;\u62dec;\u62dfarr\u0100;p\u1b7f\u1b80\u61b6;\u693d\u0300;bcdos\u1b8f\u1b90\u1b96\u1ba1\u1ba5\u1ba8\u622arcap;\u6a48\u0100au\u1b9b\u1b9ep;\u6a46p;\u6a4aot;\u628dr;\u6a45;\uc000\u222a\ufe00\u0200alrv\u1bb5\u1bbf\u1bde\u1be3rr\u0100;m\u1bbc\u1bbd\u61b7;\u693cy\u0180evw\u1bc7\u1bd4\u1bd8q\u0270\u1bce\0\0\u1bd2re\xe3\u1b73u\xe3\u1b75ee;\u62ceedge;\u62cfen\u803b\xa4\u40a4earrow\u0100lr\u1bee\u1bf3eft\xbb\u1b80ight\xbb\u1bbde\xe4\u1bdd\u0100ci\u1c01\u1c07onin\xf4\u01f7nt;\u6231lcty;\u632d\u0980AHabcdefhijlorstuwz\u1c38\u1c3b\u1c3f\u1c5d\u1c69\u1c75\u1c8a\u1c9e\u1cac\u1cb7\u1cfb\u1cff\u1d0d\u1d7b\u1d91\u1dab\u1dbb\u1dc6\u1dcdr\xf2\u0381ar;\u6965\u0200glrs\u1c48\u1c4d\u1c52\u1c54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1c5a\u1c5b\u6010\xbb\u090a\u016b\u1c61\u1c67arow;\u690fa\xe3\u0315\u0100ay\u1c6e\u1c73ron;\u410f;\u4434\u0180;ao\u0332\u1c7c\u1c84\u0100gr\u02bf\u1c81r;\u61catseq;\u6a77\u0180glm\u1c91\u1c94\u1c98\u803b\xb0\u40b0ta;\u43b4ptyv;\u69b1\u0100ir\u1ca3\u1ca8sht;\u697f;\uc000\ud835\udd21ar\u0100lr\u1cb3\u1cb5\xbb\u08dc\xbb\u101e\u0280aegsv\u1cc2\u0378\u1cd6\u1cdc\u1ce0m\u0180;os\u0326\u1cca\u1cd4nd\u0100;s\u0326\u1cd1uit;\u6666amma;\u43ddin;\u62f2\u0180;io\u1ce7\u1ce8\u1cf8\u40f7de\u8100\xf7;o\u1ce7\u1cf0ntimes;\u62c7n\xf8\u1cf7cy;\u4452c\u026f\u1d06\0\0\u1d0arn;\u631eop;\u630d\u0280lptuw\u1d18\u1d1d\u1d22\u1d49\u1d55lar;\u4024f;\uc000\ud835\udd55\u0280;emps\u030b\u1d2d\u1d37\u1d3d\u1d42q\u0100;d\u0352\u1d33ot;\u6251inus;\u6238lus;\u6214quare;\u62a1blebarwedg\xe5\xfan\u0180adh\u112e\u1d5d\u1d67ownarrow\xf3\u1c83arpoon\u0100lr\u1d72\u1d76ef\xf4\u1cb4igh\xf4\u1cb6\u0162\u1d7f\u1d85karo\xf7\u0f42\u026f\u1d8a\0\0\u1d8ern;\u631fop;\u630c\u0180cot\u1d98\u1da3\u1da6\u0100ry\u1d9d\u1da1;\uc000\ud835\udcb9;\u4455l;\u69f6rok;\u4111\u0100dr\u1db0\u1db4ot;\u62f1i\u0100;f\u1dba\u1816\u65bf\u0100ah\u1dc0\u1dc3r\xf2\u0429a\xf2\u0fa6angle;\u69a6\u0100ci\u1dd2\u1dd5y;\u445fgrarr;\u67ff\u0900Dacdefglmnopqrstux\u1e01\u1e09\u1e19\u1e38\u0578\u1e3c\u1e49\u1e61\u1e7e\u1ea5\u1eaf\u1ebd\u1ee1\u1f2a\u1f37\u1f44\u1f4e\u1f5a\u0100Do\u1e06\u1d34o\xf4\u1c89\u0100cs\u1e0e\u1e14ute\u803b\xe9\u40e9ter;\u6a6e\u0200aioy\u1e22\u1e27\u1e31\u1e36ron;\u411br\u0100;c\u1e2d\u1e2e\u6256\u803b\xea\u40ealon;\u6255;\u444dot;\u4117\u0100Dr\u1e41\u1e45ot;\u6252;\uc000\ud835\udd22\u0180;rs\u1e50\u1e51\u1e57\u6a9aave\u803b\xe8\u40e8\u0100;d\u1e5c\u1e5d\u6a96ot;\u6a98\u0200;ils\u1e6a\u1e6b\u1e72\u1e74\u6a99nters;\u63e7;\u6113\u0100;d\u1e79\u1e7a\u6a95ot;\u6a97\u0180aps\u1e85\u1e89\u1e97cr;\u4113ty\u0180;sv\u1e92\u1e93\u1e95\u6205et\xbb\u1e93p\u01001;\u1e9d\u1ea4\u0133\u1ea1\u1ea3;\u6004;\u6005\u6003\u0100gs\u1eaa\u1eac;\u414bp;\u6002\u0100gp\u1eb4\u1eb8on;\u4119f;\uc000\ud835\udd56\u0180als\u1ec4\u1ece\u1ed2r\u0100;s\u1eca\u1ecb\u62d5l;\u69e3us;\u6a71i\u0180;lv\u1eda\u1edb\u1edf\u43b5on\xbb\u1edb;\u43f5\u0200csuv\u1eea\u1ef3\u1f0b\u1f23\u0100io\u1eef\u1e31rc\xbb\u1e2e\u0269\u1ef9\0\0\u1efb\xed\u0548ant\u0100gl\u1f02\u1f06tr\xbb\u1e5dess\xbb\u1e7a\u0180aei\u1f12\u1f16\u1f1als;\u403dst;\u625fv\u0100;D\u0235\u1f20D;\u6a78parsl;\u69e5\u0100Da\u1f2f\u1f33ot;\u6253rr;\u6971\u0180cdi\u1f3e\u1f41\u1ef8r;\u612fo\xf4\u0352\u0100ah\u1f49\u1f4b;\u43b7\u803b\xf0\u40f0\u0100mr\u1f53\u1f57l\u803b\xeb\u40ebo;\u60ac\u0180cip\u1f61\u1f64\u1f67l;\u4021s\xf4\u056e\u0100eo\u1f6c\u1f74ctatio\xee\u0559nential\xe5\u0579\u09e1\u1f92\0\u1f9e\0\u1fa1\u1fa7\0\0\u1fc6\u1fcc\0\u1fd3\0\u1fe6\u1fea\u2000\0\u2008\u205allingdotse\xf1\u1e44y;\u4444male;\u6640\u0180ilr\u1fad\u1fb3\u1fc1lig;\u8000\ufb03\u0269\u1fb9\0\0\u1fbdg;\u8000\ufb00ig;\u8000\ufb04;\uc000\ud835\udd23lig;\u8000\ufb01lig;\uc000fj\u0180alt\u1fd9\u1fdc\u1fe1t;\u666dig;\u8000\ufb02ns;\u65b1of;\u4192\u01f0\u1fee\0\u1ff3f;\uc000\ud835\udd57\u0100ak\u05bf\u1ff7\u0100;v\u1ffc\u1ffd\u62d4;\u6ad9artint;\u6a0d\u0100ao\u200c\u2055\u0100cs\u2011\u2052\u03b1\u201a\u2030\u2038\u2045\u2048\0\u2050\u03b2\u2022\u2025\u2027\u202a\u202c\0\u202e\u803b\xbd\u40bd;\u6153\u803b\xbc\u40bc;\u6155;\u6159;\u615b\u01b3\u2034\0\u2036;\u6154;\u6156\u02b4\u203e\u2041\0\0\u2043\u803b\xbe\u40be;\u6157;\u615c5;\u6158\u01b6\u204c\0\u204e;\u615a;\u615d8;\u615el;\u6044wn;\u6322cr;\uc000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209f\u20a5\u20b0\u20b4\u20f0\u20f5\u20fa\u20ff\u2103\u2112\u2138\u0317\u213e\u2152\u219e\u0100;l\u064d\u2087;\u6a8c\u0180cmp\u2090\u2095\u209dute;\u41f5ma\u0100;d\u209c\u1cda\u43b3;\u6a86reve;\u411f\u0100iy\u20aa\u20aerc;\u411d;\u4433ot;\u4121\u0200;lqs\u063e\u0642\u20bd\u20c9\u0180;qs\u063e\u064c\u20c4lan\xf4\u0665\u0200;cdl\u0665\u20d2\u20d5\u20e5c;\u6aa9ot\u0100;o\u20dc\u20dd\u6a80\u0100;l\u20e2\u20e3\u6a82;\u6a84\u0100;e\u20ea\u20ed\uc000\u22db\ufe00s;\u6a94r;\uc000\ud835\udd24\u0100;g\u0673\u061bmel;\u6137cy;\u4453\u0200;Eaj\u065a\u210c\u210e\u2110;\u6a92;\u6aa5;\u6aa4\u0200Eaes\u211b\u211d\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6a8arox\xbb\u2124\u0100;q\u212e\u212f\u6a88\u0100;q\u212e\u211bim;\u62e7pf;\uc000\ud835\udd58\u0100ci\u2143\u2146r;\u610am\u0180;el\u066b\u214e\u2150;\u6a8e;\u6a90\u8300>;cdlqr\u05ee\u2160\u216a\u216e\u2173\u2179\u0100ci\u2165\u2167;\u6aa7r;\u6a7aot;\u62d7Par;\u6995uest;\u6a7c\u0280adels\u2184\u216a\u2190\u0656\u219b\u01f0\u2189\0\u218epro\xf8\u209er;\u6978q\u0100lq\u063f\u2196les\xf3\u2088i\xed\u066b\u0100en\u21a3\u21adrtneqq;\uc000\u2269\ufe00\xc5\u21aa\u0500Aabcefkosy\u21c4\u21c7\u21f1\u21f5\u21fa\u2218\u221d\u222f\u2268\u227dr\xf2\u03a0\u0200ilmr\u21d0\u21d4\u21d7\u21dbrs\xf0\u1484f\xbb\u2024il\xf4\u06a9\u0100dr\u21e0\u21e4cy;\u444a\u0180;cw\u08f4\u21eb\u21efir;\u6948;\u61adar;\u610firc;\u4125\u0180alr\u2201\u220e\u2213rts\u0100;u\u2209\u220a\u6665it\xbb\u220alip;\u6026con;\u62b9r;\uc000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223a\u223e\u2243\u225e\u2263rr;\u61fftht;\u623bk\u0100lr\u2249\u2253eftarrow;\u61a9ightarrow;\u61aaf;\uc000\ud835\udd59bar;\u6015\u0180clt\u226f\u2274\u2278r;\uc000\ud835\udcbdas\xe8\u21f4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1c5b\u0ae1\u22a3\0\u22aa\0\u22b8\u22c5\u22ce\0\u22d5\u22f3\0\0\u22f8\u2322\u2367\u2362\u237f\0\u2386\u23aa\u23b4cute\u803b\xed\u40ed\u0180;iy\u0771\u22b0\u22b5rc\u803b\xee\u40ee;\u4438\u0100cx\u22bc\u22bfy;\u4435cl\u803b\xa1\u40a1\u0100fr\u039f\u22c9;\uc000\ud835\udd26rave\u803b\xec\u40ec\u0200;ino\u073e\u22dd\u22e9\u22ee\u0100in\u22e2\u22e6nt;\u6a0ct;\u622dfin;\u69dcta;\u6129lig;\u4133\u0180aop\u22fe\u231a\u231d\u0180cgt\u2305\u2308\u2317r;\u412b\u0180elp\u071f\u230f\u2313in\xe5\u078ear\xf4\u0720h;\u4131f;\u62b7ed;\u41b5\u0280;cfot\u04f4\u232c\u2331\u233d\u2341are;\u6105in\u0100;t\u2338\u2339\u621eie;\u69dddo\xf4\u2319\u0280;celp\u0757\u234c\u2350\u235b\u2361al;\u62ba\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234darhk;\u6a17rod;\u6a3c\u0200cgpt\u236f\u2372\u2376\u237by;\u4451on;\u412ff;\uc000\ud835\udd5aa;\u43b9uest\u803b\xbf\u40bf\u0100ci\u238a\u238fr;\uc000\ud835\udcben\u0280;Edsv\u04f4\u239b\u239d\u23a1\u04f3;\u62f9ot;\u62f5\u0100;v\u23a6\u23a7\u62f4;\u62f3\u0100;i\u0777\u23aelde;\u4129\u01eb\u23b8\0\u23bccy;\u4456l\u803b\xef\u40ef\u0300cfmosu\u23cc\u23d7\u23dc\u23e1\u23e7\u23f5\u0100iy\u23d1\u23d5rc;\u4135;\u4439r;\uc000\ud835\udd27ath;\u4237pf;\uc000\ud835\udd5b\u01e3\u23ec\0\u23f1r;\uc000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240b\u2416\u2422\u2427\u242d\u2431\u2435\u243bppa\u0100;v\u2413\u2414\u43ba;\u43f0\u0100ey\u241b\u2420dil;\u4137;\u443ar;\uc000\ud835\udd28reen;\u4138cy;\u4445cy;\u445cpf;\uc000\ud835\udd5ccr;\uc000\ud835\udcc0\u0b80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248d\u2491\u250e\u253d\u255a\u2580\u264e\u265e\u2665\u2679\u267d\u269a\u26b2\u26d8\u275d\u2768\u278b\u27c0\u2801\u2812\u0180art\u2477\u247a\u247cr\xf2\u09c6\xf2\u0395ail;\u691barr;\u690e\u0100;g\u0994\u248b;\u6a8bar;\u6962\u0963\u24a5\0\u24aa\0\u24b1\0\0\0\0\0\u24b5\u24ba\0\u24c6\u24c8\u24cd\0\u24f9ute;\u413amptyv;\u69b4ra\xee\u084cbda;\u43bbg\u0180;dl\u088e\u24c1\u24c3;\u6991\xe5\u088e;\u6a85uo\u803b\xab\u40abr\u0400;bfhlpst\u0899\u24de\u24e6\u24e9\u24eb\u24ee\u24f1\u24f5\u0100;f\u089d\u24e3s;\u691fs;\u691d\xeb\u2252p;\u61abl;\u6939im;\u6973l;\u61a2\u0180;ae\u24ff\u2500\u2504\u6aabil;\u6919\u0100;s\u2509\u250a\u6aad;\uc000\u2aad\ufe00\u0180abr\u2515\u2519\u251drr;\u690crk;\u6772\u0100ak\u2522\u252cc\u0100ek\u2528\u252a;\u407b;\u405b\u0100es\u2531\u2533;\u698bl\u0100du\u2539\u253b;\u698f;\u698d\u0200aeuy\u2546\u254b\u2556\u2558ron;\u413e\u0100di\u2550\u2554il;\u413c\xec\u08b0\xe2\u2529;\u443b\u0200cqrs\u2563\u2566\u256d\u257da;\u6936uo\u0100;r\u0e19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694bh;\u61b2\u0280;fgqs\u258b\u258c\u0989\u25f3\u25ff\u6264t\u0280ahlrt\u2598\u25a4\u25b7\u25c2\u25e8rrow\u0100;t\u0899\u25a1a\xe9\u24f6arpoon\u0100du\u25af\u25b4own\xbb\u045ap\xbb\u0966eftarrows;\u61c7ight\u0180ahs\u25cd\u25d6\u25derrow\u0100;s\u08f4\u08a7arpoon\xf3\u0f98quigarro\xf7\u21f0hreetimes;\u62cb\u0180;qs\u258b\u0993\u25falan\xf4\u09ac\u0280;cdgs\u09ac\u260a\u260d\u261d\u2628c;\u6aa8ot\u0100;o\u2614\u2615\u6a7f\u0100;r\u261a\u261b\u6a81;\u6a83\u0100;e\u2622\u2625\uc000\u22da\ufe00s;\u6a93\u0280adegs\u2633\u2639\u263d\u2649\u264bppro\xf8\u24c6ot;\u62d6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248c\xf4\u099bi\xed\u09b2\u0180ilr\u2655\u08e1\u265asht;\u697c;\uc000\ud835\udd29\u0100;E\u099c\u2663;\u6a91\u0161\u2669\u2676r\u0100du\u25b2\u266e\u0100;l\u0965\u2673;\u696alk;\u6584cy;\u4459\u0280;acht\u0a48\u2688\u268b\u2691\u2696r\xf2\u25c1orne\xf2\u1d08ard;\u696bri;\u65fa\u0100io\u269f\u26a4dot;\u4140ust\u0100;a\u26ac\u26ad\u63b0che\xbb\u26ad\u0200Eaes\u26bb\u26bd\u26c9\u26d4;\u6268p\u0100;p\u26c3\u26c4\u6a89rox\xbb\u26c4\u0100;q\u26ce\u26cf\u6a87\u0100;q\u26ce\u26bbim;\u62e6\u0400abnoptwz\u26e9\u26f4\u26f7\u271a\u272f\u2741\u2747\u2750\u0100nr\u26ee\u26f1g;\u67ecr;\u61fdr\xeb\u08c1g\u0180lmr\u26ff\u270d\u2714eft\u0100ar\u09e6\u2707ight\xe1\u09f2apsto;\u67fcight\xe1\u09fdparrow\u0100lr\u2725\u2729ef\xf4\u24edight;\u61ac\u0180afl\u2736\u2739\u273dr;\u6985;\uc000\ud835\udd5dus;\u6a2dimes;\u6a34\u0161\u274b\u274fst;\u6217\xe1\u134e\u0180;ef\u2757\u2758\u1800\u65cange\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277c\u2785\u2787r\xf2\u08a8orne\xf2\u1d8car\u0100;d\u0f98\u2783;\u696d;\u600eri;\u62bf\u0300achiqt\u2798\u279d\u0a40\u27a2\u27ae\u27bbquo;\u6039r;\uc000\ud835\udcc1m\u0180;eg\u09b2\u27aa\u27ac;\u6a8d;\u6a8f\u0100bu\u252a\u27b3o\u0100;r\u0e1f\u27b9;\u601arok;\u4142\u8400<;cdhilqr\u082b\u27d2\u2639\u27dc\u27e0\u27e5\u27ea\u27f0\u0100ci\u27d7\u27d9;\u6aa6r;\u6a79re\xe5\u25f2mes;\u62c9arr;\u6976uest;\u6a7b\u0100Pi\u27f5\u27f9ar;\u6996\u0180;ef\u2800\u092d\u181b\u65c3r\u0100du\u2807\u280dshar;\u694ahar;\u6966\u0100en\u2817\u2821rtneqq;\uc000\u2268\ufe00\xc5\u281e\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288e\u2893\u28a0\u28a5\u28a8\u28da\u28e2\u28e4\u0a83\u28f3\u2902Dot;\u623a\u0200clpr\u284e\u2852\u2863\u287dr\u803b\xaf\u40af\u0100et\u2857\u2859;\u6642\u0100;e\u285e\u285f\u6720se\xbb\u285f\u0100;s\u103b\u2868to\u0200;dlu\u103b\u2873\u2877\u287bow\xee\u048cef\xf4\u090f\xf0\u13d1ker;\u65ae\u0100oy\u2887\u288cmma;\u6a29;\u443cash;\u6014asuredangle\xbb\u1626r;\uc000\ud835\udd2ao;\u6127\u0180cdn\u28af\u28b4\u28c9ro\u803b\xb5\u40b5\u0200;acd\u1464\u28bd\u28c0\u28c4s\xf4\u16a7ir;\u6af0ot\u80bb\xb7\u01b5us\u0180;bd\u28d2\u1903\u28d3\u6212\u0100;u\u1d3c\u28d8;\u6a2a\u0163\u28de\u28e1p;\u6adb\xf2\u2212\xf0\u0a81\u0100dp\u28e9\u28eeels;\u62a7f;\uc000\ud835\udd5e\u0100ct\u28f8\u28fdr;\uc000\ud835\udcc2pos\xbb\u159d\u0180;lm\u2909\u290a\u290d\u43bctimap;\u62b8\u0c00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297e\u2989\u2998\u29da\u29e9\u2a15\u2a1a\u2a58\u2a5d\u2a83\u2a95\u2aa4\u2aa8\u2b04\u2b07\u2b44\u2b7f\u2bae\u2c34\u2c67\u2c7c\u2ce9\u0100gt\u2947\u294b;\uc000\u22d9\u0338\u0100;v\u2950\u0bcf\uc000\u226b\u20d2\u0180elt\u295a\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61cdightarrow;\u61ce;\uc000\u22d8\u0338\u0100;v\u297b\u0c47\uc000\u226a\u20d2ightarrow;\u61cf\u0100Dd\u298e\u2993ash;\u62afash;\u62ae\u0280bcnpt\u29a3\u29a7\u29ac\u29b1\u29ccla\xbb\u02deute;\u4144g;\uc000\u2220\u20d2\u0280;Eiop\u0d84\u29bc\u29c0\u29c5\u29c8;\uc000\u2a70\u0338d;\uc000\u224b\u0338s;\u4149ro\xf8\u0d84ur\u0100;a\u29d3\u29d4\u666el\u0100;s\u29d3\u0b38\u01f3\u29df\0\u29e3p\u80bb\xa0\u0b37mp\u0100;e\u0bf9\u0c00\u0280aeouy\u29f4\u29fe\u2a03\u2a10\u2a13\u01f0\u29f9\0\u29fb;\u6a43on;\u4148dil;\u4146ng\u0100;d\u0d7e\u2a0aot;\uc000\u2a6d\u0338p;\u6a42;\u443dash;\u6013\u0380;Aadqsx\u0b92\u2a29\u2a2d\u2a3b\u2a41\u2a45\u2a50rr;\u61d7r\u0100hr\u2a33\u2a36k;\u6924\u0100;o\u13f2\u13f0ot;\uc000\u2250\u0338ui\xf6\u0b63\u0100ei\u2a4a\u2a4ear;\u6928\xed\u0b98ist\u0100;s\u0ba0\u0b9fr;\uc000\ud835\udd2b\u0200Eest\u0bc5\u2a66\u2a79\u2a7c\u0180;qs\u0bbc\u2a6d\u0be1\u0180;qs\u0bbc\u0bc5\u2a74lan\xf4\u0be2i\xed\u0bea\u0100;r\u0bb6\u2a81\xbb\u0bb7\u0180Aap\u2a8a\u2a8d\u2a91r\xf2\u2971rr;\u61aear;\u6af2\u0180;sv\u0f8d\u2a9c\u0f8c\u0100;d\u2aa1\u2aa2\u62fc;\u62facy;\u445a\u0380AEadest\u2ab7\u2aba\u2abe\u2ac2\u2ac5\u2af6\u2af9r\xf2\u2966;\uc000\u2266\u0338rr;\u619ar;\u6025\u0200;fqs\u0c3b\u2ace\u2ae3\u2aeft\u0100ar\u2ad4\u2ad9rro\xf7\u2ac1ightarro\xf7\u2a90\u0180;qs\u0c3b\u2aba\u2aealan\xf4\u0c55\u0100;s\u0c55\u2af4\xbb\u0c36i\xed\u0c5d\u0100;r\u0c35\u2afei\u0100;e\u0c1a\u0c25i\xe4\u0d90\u0100pt\u2b0c\u2b11f;\uc000\ud835\udd5f\u8180\xac;in\u2b19\u2b1a\u2b36\u40acn\u0200;Edv\u0b89\u2b24\u2b28\u2b2e;\uc000\u22f9\u0338ot;\uc000\u22f5\u0338\u01e1\u0b89\u2b33\u2b35;\u62f7;\u62f6i\u0100;v\u0cb8\u2b3c\u01e1\u0cb8\u2b41\u2b43;\u62fe;\u62fd\u0180aor\u2b4b\u2b63\u2b69r\u0200;ast\u0b7b\u2b55\u2b5a\u2b5flle\xec\u0b7bl;\uc000\u2afd\u20e5;\uc000\u2202\u0338lint;\u6a14\u0180;ce\u0c92\u2b70\u2b73u\xe5\u0ca5\u0100;c\u0c98\u2b78\u0100;e\u0c92\u2b7d\xf1\u0c98\u0200Aait\u2b88\u2b8b\u2b9d\u2ba7r\xf2\u2988rr\u0180;cw\u2b94\u2b95\u2b99\u619b;\uc000\u2933\u0338;\uc000\u219d\u0338ghtarrow\xbb\u2b95ri\u0100;e\u0ccb\u0cd6\u0380chimpqu\u2bbd\u2bcd\u2bd9\u2b04\u0b78\u2be4\u2bef\u0200;cer\u0d32\u2bc6\u0d37\u2bc9u\xe5\u0d45;\uc000\ud835\udcc3ort\u026d\u2b05\0\0\u2bd6ar\xe1\u2b56m\u0100;e\u0d6e\u2bdf\u0100;q\u0d74\u0d73su\u0100bp\u2beb\u2bed\xe5\u0cf8\xe5\u0d0b\u0180bcp\u2bf6\u2c11\u2c19\u0200;Ees\u2bff\u2c00\u0d22\u2c04\u6284;\uc000\u2ac5\u0338et\u0100;e\u0d1b\u2c0bq\u0100;q\u0d23\u2c00c\u0100;e\u0d32\u2c17\xf1\u0d38\u0200;Ees\u2c22\u2c23\u0d5f\u2c27\u6285;\uc000\u2ac6\u0338et\u0100;e\u0d58\u2c2eq\u0100;q\u0d60\u2c23\u0200gilr\u2c3d\u2c3f\u2c45\u2c47\xec\u0bd7lde\u803b\xf1\u40f1\xe7\u0c43iangle\u0100lr\u2c52\u2c5ceft\u0100;e\u0c1a\u2c5a\xf1\u0c26ight\u0100;e\u0ccb\u2c65\xf1\u0cd7\u0100;m\u2c6c\u2c6d\u43bd\u0180;es\u2c74\u2c75\u2c79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2c8f\u2c94\u2c99\u2c9e\u2ca3\u2cb0\u2cb6\u2cd3\u2ce3ash;\u62adarr;\u6904p;\uc000\u224d\u20d2ash;\u62ac\u0100et\u2ca8\u2cac;\uc000\u2265\u20d2;\uc000>\u20d2nfin;\u69de\u0180Aet\u2cbd\u2cc1\u2cc5rr;\u6902;\uc000\u2264\u20d2\u0100;r\u2cca\u2ccd\uc000<\u20d2ie;\uc000\u22b4\u20d2\u0100At\u2cd8\u2cdcrr;\u6903rie;\uc000\u22b5\u20d2im;\uc000\u223c\u20d2\u0180Aan\u2cf0\u2cf4\u2d02rr;\u61d6r\u0100hr\u2cfa\u2cfdk;\u6923\u0100;o\u13e7\u13e5ear;\u6927\u1253\u1a95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2d2d\0\u2d38\u2d48\u2d60\u2d65\u2d72\u2d84\u1b07\0\0\u2d8d\u2dab\0\u2dc8\u2dce\0\u2ddc\u2e19\u2e2b\u2e3e\u2e43\u0100cs\u2d31\u1a97ute\u803b\xf3\u40f3\u0100iy\u2d3c\u2d45r\u0100;c\u1a9e\u2d42\u803b\xf4\u40f4;\u443e\u0280abios\u1aa0\u2d52\u2d57\u01c8\u2d5alac;\u4151v;\u6a38old;\u69bclig;\u4153\u0100cr\u2d69\u2d6dir;\u69bf;\uc000\ud835\udd2c\u036f\u2d79\0\0\u2d7c\0\u2d82n;\u42dbave\u803b\xf2\u40f2;\u69c1\u0100bm\u2d88\u0df4ar;\u69b5\u0200acit\u2d95\u2d98\u2da5\u2da8r\xf2\u1a80\u0100ir\u2d9d\u2da0r;\u69beoss;\u69bbn\xe5\u0e52;\u69c0\u0180aei\u2db1\u2db5\u2db9cr;\u414dga;\u43c9\u0180cdn\u2dc0\u2dc5\u01cdron;\u43bf;\u69b6pf;\uc000\ud835\udd60\u0180ael\u2dd4\u2dd7\u01d2r;\u69b7rp;\u69b9\u0380;adiosv\u2dea\u2deb\u2dee\u2e08\u2e0d\u2e10\u2e16\u6228r\xf2\u1a86\u0200;efm\u2df7\u2df8\u2e02\u2e05\u6a5dr\u0100;o\u2dfe\u2dff\u6134f\xbb\u2dff\u803b\xaa\u40aa\u803b\xba\u40bagof;\u62b6r;\u6a56lope;\u6a57;\u6a5b\u0180clo\u2e1f\u2e21\u2e27\xf2\u2e01ash\u803b\xf8\u40f8l;\u6298i\u016c\u2e2f\u2e34de\u803b\xf5\u40f5es\u0100;a\u01db\u2e3as;\u6a36ml\u803b\xf6\u40f6bar;\u633d\u0ae1\u2e5e\0\u2e7d\0\u2e80\u2e9d\0\u2ea2\u2eb9\0\0\u2ecb\u0e9c\0\u2f13\0\0\u2f2b\u2fbc\0\u2fc8r\u0200;ast\u0403\u2e67\u2e72\u0e85\u8100\xb6;l\u2e6d\u2e6e\u40b6le\xec\u0403\u0269\u2e78\0\0\u2e7bm;\u6af3;\u6afdy;\u443fr\u0280cimpt\u2e8b\u2e8f\u2e93\u1865\u2e97nt;\u4025od;\u402eil;\u6030enk;\u6031r;\uc000\ud835\udd2d\u0180imo\u2ea8\u2eb0\u2eb4\u0100;v\u2ead\u2eae\u43c6;\u43d5ma\xf4\u0a76ne;\u660e\u0180;tv\u2ebf\u2ec0\u2ec8\u43c0chfork\xbb\u1ffd;\u43d6\u0100au\u2ecf\u2edfn\u0100ck\u2ed5\u2eddk\u0100;h\u21f4\u2edb;\u610e\xf6\u21f4s\u0480;abcdemst\u2ef3\u2ef4\u1908\u2ef9\u2efd\u2f04\u2f06\u2f0a\u2f0e\u402bcir;\u6a23ir;\u6a22\u0100ou\u1d40\u2f02;\u6a25;\u6a72n\u80bb\xb1\u0e9dim;\u6a26wo;\u6a27\u0180ipu\u2f19\u2f20\u2f25ntint;\u6a15f;\uc000\ud835\udd61nd\u803b\xa3\u40a3\u0500;Eaceinosu\u0ec8\u2f3f\u2f41\u2f44\u2f47\u2f81\u2f89\u2f92\u2f7e\u2fb6;\u6ab3p;\u6ab7u\xe5\u0ed9\u0100;c\u0ece\u2f4c\u0300;acens\u0ec8\u2f59\u2f5f\u2f66\u2f68\u2f7eppro\xf8\u2f43urlye\xf1\u0ed9\xf1\u0ece\u0180aes\u2f6f\u2f76\u2f7approx;\u6ab9qq;\u6ab5im;\u62e8i\xed\u0edfme\u0100;s\u2f88\u0eae\u6032\u0180Eas\u2f78\u2f90\u2f7a\xf0\u2f75\u0180dfp\u0eec\u2f99\u2faf\u0180als\u2fa0\u2fa5\u2faalar;\u632eine;\u6312urf;\u6313\u0100;t\u0efb\u2fb4\xef\u0efbrel;\u62b0\u0100ci\u2fc0\u2fc5r;\uc000\ud835\udcc5;\u43c8ncsp;\u6008\u0300fiopsu\u2fda\u22e2\u2fdf\u2fe5\u2feb\u2ff1r;\uc000\ud835\udd2epf;\uc000\ud835\udd62rime;\u6057cr;\uc000\ud835\udcc6\u0180aeo\u2ff8\u3009\u3013t\u0100ei\u2ffe\u3005rnion\xf3\u06b0nt;\u6a16st\u0100;e\u3010\u3011\u403f\xf1\u1f19\xf4\u0f14\u0a80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30e0\u310e\u312b\u3147\u3162\u3172\u318e\u3206\u3215\u3224\u3229\u3258\u326e\u3272\u3290\u32b0\u32b7\u0180art\u3047\u304a\u304cr\xf2\u10b3\xf2\u03ddail;\u691car\xf2\u1c65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307f\u308f\u3094\u30cc\u0100eu\u306d\u3071;\uc000\u223d\u0331te;\u4155i\xe3\u116emptyv;\u69b3g\u0200;del\u0fd1\u3089\u308b\u308d;\u6992;\u69a5\xe5\u0fd1uo\u803b\xbb\u40bbr\u0580;abcfhlpstw\u0fdc\u30ac\u30af\u30b7\u30b9\u30bc\u30be\u30c0\u30c3\u30c7\u30cap;\u6975\u0100;f\u0fe0\u30b4s;\u6920;\u6933s;\u691e\xeb\u225d\xf0\u272el;\u6945im;\u6974l;\u61a3;\u619d\u0100ai\u30d1\u30d5il;\u691ao\u0100;n\u30db\u30dc\u6236al\xf3\u0f1e\u0180abr\u30e7\u30ea\u30eer\xf2\u17e5rk;\u6773\u0100ak\u30f3\u30fdc\u0100ek\u30f9\u30fb;\u407d;\u405d\u0100es\u3102\u3104;\u698cl\u0100du\u310a\u310c;\u698e;\u6990\u0200aeuy\u3117\u311c\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0ff2\xe2\u30fa;\u4440\u0200clqs\u3134\u3137\u313d\u3144a;\u6937dhar;\u6969uo\u0100;r\u020e\u020dh;\u61b3\u0180acg\u314e\u315f\u0f44l\u0200;ips\u0f78\u3158\u315b\u109cn\xe5\u10bbar\xf4\u0fa9t;\u65ad\u0180ilr\u3169\u1023\u316esht;\u697d;\uc000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317d\u317f\xbb\u047b\u0100;l\u1091\u3184;\u696c\u0100;v\u318b\u318c\u43c1;\u43f1\u0180gns\u3195\u31f9\u31fcht\u0300ahlrst\u31a4\u31b0\u31c2\u31d8\u31e4\u31eerrow\u0100;t\u0fdc\u31ada\xe9\u30c8arpoon\u0100du\u31bb\u31bfow\xee\u317ep\xbb\u1092eft\u0100ah\u31ca\u31d0rrow\xf3\u0feaarpoon\xf3\u0551ightarrows;\u61c9quigarro\xf7\u30cbhreetimes;\u62ccg;\u42daingdotse\xf1\u1f32\u0180ahm\u320d\u3210\u3213r\xf2\u0feaa\xf2\u0551;\u600foust\u0100;a\u321e\u321f\u63b1che\xbb\u321fmid;\u6aee\u0200abpt\u3232\u323d\u3240\u3252\u0100nr\u3237\u323ag;\u67edr;\u61fer\xeb\u1003\u0180afl\u3247\u324a\u324er;\u6986;\uc000\ud835\udd63us;\u6a2eimes;\u6a35\u0100ap\u325d\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6a12ar\xf2\u31e3\u0200achq\u327b\u3280\u10bc\u3285quo;\u603ar;\uc000\ud835\udcc7\u0100bu\u30fb\u328ao\u0100;r\u0214\u0213\u0180hir\u3297\u329b\u32a0re\xe5\u31f8mes;\u62cai\u0200;efl\u32aa\u1059\u1821\u32ab\u65b9tri;\u69celuhar;\u6968;\u611e\u0d61\u32d5\u32db\u32df\u332c\u3338\u3371\0\u337a\u33a4\0\0\u33ec\u33f0\0\u3428\u3448\u345a\u34ad\u34b1\u34ca\u34f1\0\u3616\0\0\u3633cute;\u415bqu\xef\u27ba\u0500;Eaceinpsy\u11ed\u32f3\u32f5\u32ff\u3302\u330b\u330f\u331f\u3326\u3329;\u6ab4\u01f0\u32fa\0\u32fc;\u6ab8on;\u4161u\xe5\u11fe\u0100;d\u11f3\u3307il;\u415frc;\u415d\u0180Eas\u3316\u3318\u331b;\u6ab6p;\u6abaim;\u62e9olint;\u6a13i\xed\u1204;\u4441ot\u0180;be\u3334\u1d47\u3335\u62c5;\u6a66\u0380Aacmstx\u3346\u334a\u3357\u335b\u335e\u3363\u336drr;\u61d8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0a36\u0a34t\u803b\xa7\u40a7i;\u403bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uc000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33a0rp;\u666f\u0100hy\u338b\u338fcy;\u4449;\u4448rt\u026d\u3399\0\0\u339ci\xe4\u1464ara\xec\u2e6f\u803b\xad\u40ad\u0100gm\u33a8\u33b4ma\u0180;fv\u33b1\u33b2\u33b2\u43c3;\u43c2\u0400;deglnpr\u12ab\u33c5\u33c9\u33ce\u33d6\u33de\u33e1\u33e6ot;\u6a6a\u0100;q\u12b1\u12b0\u0100;E\u33d3\u33d4\u6a9e;\u6aa0\u0100;E\u33db\u33dc\u6a9d;\u6a9fe;\u6246lus;\u6a24arr;\u6972ar\xf2\u113d\u0200aeit\u33f8\u3408\u340f\u3417\u0100ls\u33fd\u3404lsetm\xe9\u336ahp;\u6a33parsl;\u69e4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341c\u341d\u6aaa\u0100;s\u3422\u3423\u6aac;\uc000\u2aac\ufe00\u0180flp\u342e\u3433\u3442tcy;\u444c\u0100;b\u3438\u3439\u402f\u0100;a\u343e\u343f\u69c4r;\u633ff;\uc000\ud835\udd64a\u0100dr\u344d\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349f\u0100au\u3465\u346fp\u0100;s\u1188\u346b;\uc000\u2293\ufe00p\u0100;s\u11b4\u3475;\uc000\u2294\ufe00u\u0100bp\u347f\u348f\u0180;es\u1197\u119c\u3486et\u0100;e\u1197\u348d\xf1\u119d\u0180;es\u11a8\u11ad\u3496et\u0100;e\u11a8\u349d\xf1\u11ae\u0180;af\u117b\u34a6\u05b0r\u0165\u34ab\u05b1\xbb\u117car\xf2\u1148\u0200cemt\u34b9\u34be\u34c2\u34c5r;\uc000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11be\u0100ar\u34ce\u34d5r\u0100;f\u34d4\u17bf\u6606\u0100an\u34da\u34edight\u0100ep\u34e3\u34eapsilo\xee\u1ee0h\xe9\u2eafs\xbb\u2852\u0280bcmnp\u34fb\u355e\u1209\u358b\u358e\u0480;Edemnprs\u350e\u350f\u3511\u3515\u351e\u3523\u352c\u3531\u3536\u6282;\u6ac5ot;\u6abd\u0100;d\u11da\u351aot;\u6ac3ult;\u6ac1\u0100Ee\u3528\u352a;\u6acb;\u628alus;\u6abfarr;\u6979\u0180eiu\u353d\u3552\u3555t\u0180;en\u350e\u3545\u354bq\u0100;q\u11da\u350feq\u0100;q\u352b\u3528m;\u6ac7\u0100bp\u355a\u355c;\u6ad5;\u6ad3c\u0300;acens\u11ed\u356c\u3572\u3579\u357b\u3326ppro\xf8\u32faurlye\xf1\u11fe\xf1\u11f3\u0180aes\u3582\u3588\u331bppro\xf8\u331aq\xf1\u3317g;\u666a\u0680123;Edehlmnps\u35a9\u35ac\u35af\u121c\u35b2\u35b4\u35c0\u35c9\u35d5\u35da\u35df\u35e8\u35ed\u803b\xb9\u40b9\u803b\xb2\u40b2\u803b\xb3\u40b3;\u6ac6\u0100os\u35b9\u35bct;\u6abeub;\u6ad8\u0100;d\u1222\u35c5ot;\u6ac4s\u0100ou\u35cf\u35d2l;\u67c9b;\u6ad7arr;\u697bult;\u6ac2\u0100Ee\u35e4\u35e6;\u6acc;\u628blus;\u6ac0\u0180eiu\u35f4\u3609\u360ct\u0180;en\u121c\u35fc\u3602q\u0100;q\u1222\u35b2eq\u0100;q\u35e7\u35e4m;\u6ac8\u0100bp\u3611\u3613;\u6ad4;\u6ad6\u0180Aan\u361c\u3620\u362drr;\u61d9r\u0100hr\u3626\u3628\xeb\u222e\u0100;o\u0a2b\u0a29war;\u692alig\u803b\xdf\u40df\u0be1\u3651\u365d\u3660\u12ce\u3673\u3679\0\u367e\u36c2\0\0\0\0\0\u36db\u3703\0\u3709\u376c\0\0\0\u3787\u0272\u3656\0\0\u365bget;\u6316;\u43c4r\xeb\u0e5f\u0180aey\u3666\u366b\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uc000\ud835\udd31\u0200eiko\u3686\u369d\u36b5\u36bc\u01f2\u368b\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369b\u43b8ym;\u43d1\u0100cn\u36a2\u36b2k\u0100as\u36a8\u36aeppro\xf8\u12c1im\xbb\u12acs\xf0\u129e\u0100as\u36ba\u36ae\xf0\u12c1rn\u803b\xfe\u40fe\u01ec\u031f\u36c6\u22e7es\u8180\xd7;bd\u36cf\u36d0\u36d8\u40d7\u0100;a\u190f\u36d5r;\u6a31;\u6a30\u0180eps\u36e1\u36e3\u3700\xe1\u2a4d\u0200;bcf\u0486\u36ec\u36f0\u36f4ot;\u6336ir;\u6af1\u0100;o\u36f9\u36fc\uc000\ud835\udd65rk;\u6ada\xe1\u3362rime;\u6034\u0180aip\u370f\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374d\u3740\u3751\u3757\u375c\u375fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65b5own\xbb\u1dbbeft\u0100;e\u2800\u373e\xf1\u092e;\u625cight\u0100;e\u32aa\u374b\xf1\u105aot;\u65ecinus;\u6a3alus;\u6a39b;\u69cdime;\u6a3bezium;\u63e2\u0180cht\u3772\u377d\u3781\u0100ry\u3777\u377b;\uc000\ud835\udcc9;\u4446cy;\u445brok;\u4167\u0100io\u378b\u378ex\xf4\u1777head\u0100lr\u3797\u37a0eftarro\xf7\u084fightarrow\xbb\u0f5d\u0900AHabcdfghlmoprstuw\u37d0\u37d3\u37d7\u37e4\u37f0\u37fc\u380e\u381c\u3823\u3834\u3851\u385d\u386b\u38a9\u38cc\u38d2\u38ea\u38f6r\xf2\u03edar;\u6963\u0100cr\u37dc\u37e2ute\u803b\xfa\u40fa\xf2\u1150r\u01e3\u37ea\0\u37edy;\u445eve;\u416d\u0100iy\u37f5\u37farc\u803b\xfb\u40fb;\u4443\u0180abh\u3803\u3806\u380br\xf2\u13adlac;\u4171a\xf2\u13c3\u0100ir\u3813\u3818sht;\u697e;\uc000\ud835\udd32rave\u803b\xf9\u40f9\u0161\u3827\u3831r\u0100lr\u382c\u382e\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384d\u026f\u383f\0\0\u384arn\u0100;e\u3845\u3846\u631cr\xbb\u3846op;\u630fri;\u65f8\u0100al\u3856\u385acr;\u416b\u80bb\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uc000\ud835\udd66\u0300adhlsu\u114b\u3878\u387d\u1372\u3891\u38a0own\xe1\u13b3arpoon\u0100lr\u3888\u388cef\xf4\u382digh\xf4\u382fi\u0180;hl\u3899\u389a\u389c\u43c5\xbb\u13faon\xbb\u389aparrows;\u61c8\u0180cit\u38b0\u38c4\u38c8\u026f\u38b6\0\0\u38c1rn\u0100;e\u38bc\u38bd\u631dr\xbb\u38bdop;\u630eng;\u416fri;\u65f9cr;\uc000\ud835\udcca\u0180dir\u38d9\u38dd\u38e2ot;\u62f0lde;\u4169i\u0100;f\u3730\u38e8\xbb\u1813\u0100am\u38ef\u38f2r\xf2\u38a8l\u803b\xfc\u40fcangle;\u69a7\u0780ABDacdeflnoprsz\u391c\u391f\u3929\u392d\u39b5\u39b8\u39bd\u39df\u39e4\u39e8\u39f3\u39f9\u39fd\u3a01\u3a20r\xf2\u03f7ar\u0100;v\u3926\u3927\u6ae8;\u6ae9as\xe8\u03e1\u0100nr\u3932\u3937grt;\u699c\u0380eknprst\u34e3\u3946\u394b\u3952\u395d\u3964\u3996app\xe1\u2415othin\xe7\u1e96\u0180hir\u34eb\u2ec8\u3959op\xf4\u2fb5\u0100;h\u13b7\u3962\xef\u318d\u0100iu\u3969\u396dgm\xe1\u33b3\u0100bp\u3972\u3984setneq\u0100;q\u397d\u3980\uc000\u228a\ufe00;\uc000\u2acb\ufe00setneq\u0100;q\u398f\u3992\uc000\u228b\ufe00;\uc000\u2acc\ufe00\u0100hr\u399b\u399fet\xe1\u369ciangle\u0100lr\u39aa\u39afeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39c4\u39d2\u39d7\u0180;be\u2dea\u39cb\u39cfar;\u62bbq;\u625alip;\u62ee\u0100bt\u39dc\u1468a\xf2\u1469r;\uc000\ud835\udd33tr\xe9\u39aesu\u0100bp\u39ef\u39f1\xbb\u0d1c\xbb\u0d59pf;\uc000\ud835\udd67ro\xf0\u0efbtr\xe9\u39b4\u0100cu\u3a06\u3a0br;\uc000\ud835\udccb\u0100bp\u3a10\u3a18n\u0100Ee\u3980\u3a16\xbb\u397en\u0100Ee\u3992\u3a1e\xbb\u3990igzag;\u699a\u0380cefoprs\u3a36\u3a3b\u3a56\u3a5b\u3a54\u3a61\u3a6airc;\u4175\u0100di\u3a40\u3a51\u0100bg\u3a45\u3a49ar;\u6a5fe\u0100;q\u15fa\u3a4f;\u6259erp;\u6118r;\uc000\ud835\udd34pf;\uc000\ud835\udd68\u0100;e\u1479\u3a66at\xe8\u1479cr;\uc000\ud835\udccc\u0ae3\u178e\u3a87\0\u3a8b\0\u3a90\u3a9b\0\0\u3a9d\u3aa8\u3aab\u3aaf\0\0\u3ac3\u3ace\0\u3ad8\u17dc\u17dftr\xe9\u17d1r;\uc000\ud835\udd35\u0100Aa\u3a94\u3a97r\xf2\u03c3r\xf2\u09f6;\u43be\u0100Aa\u3aa1\u3aa4r\xf2\u03b8r\xf2\u09eba\xf0\u2713is;\u62fb\u0180dpt\u17a4\u3ab5\u3abe\u0100fl\u3aba\u17a9;\uc000\ud835\udd69im\xe5\u17b2\u0100Aa\u3ac7\u3acar\xf2\u03cer\xf2\u0a01\u0100cq\u3ad2\u17b8r;\uc000\ud835\udccd\u0100pt\u17d6\u3adcr\xe9\u17d4\u0400acefiosu\u3af0\u3afd\u3b08\u3b0c\u3b11\u3b15\u3b1b\u3b21c\u0100uy\u3af6\u3afbte\u803b\xfd\u40fd;\u444f\u0100iy\u3b02\u3b06rc;\u4177;\u444bn\u803b\xa5\u40a5r;\uc000\ud835\udd36cy;\u4457pf;\uc000\ud835\udd6acr;\uc000\ud835\udcce\u0100cm\u3b26\u3b29y;\u444el\u803b\xff\u40ff\u0500acdefhiosw\u3b42\u3b48\u3b54\u3b58\u3b64\u3b69\u3b6d\u3b74\u3b7a\u3b80cute;\u417a\u0100ay\u3b4d\u3b52ron;\u417e;\u4437ot;\u417c\u0100et\u3b5d\u3b61tr\xe6\u155fa;\u43b6r;\uc000\ud835\udd37cy;\u4436grarr;\u61ddpf;\uc000\ud835\udd6bcr;\uc000\ud835\udccf\u0100jn\u3b85\u3b87;\u600dj;\u600c"
    .split("")
    .map((c) => c.charCodeAt(0))));
//# sourceMappingURL=decode-data-html.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/entities/lib/esm/generated/decode-data-xml.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/entities/lib/esm/generated/decode-data-xml.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Generated using scripts/write-decode-map.ts
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Uint16Array(
// prettier-ignore
"\u0200aglq\t\x15\x18\x1b\u026d\x0f\0\0\x12p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022"
    .split("")
    .map((c) => c.charCodeAt(0))));
//# sourceMappingURL=decode-data-xml.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/entities/lib/esm/generated/encode-html.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/entities/lib/esm/generated/encode-html.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Generated using scripts/write-encode-map.ts
function restoreDiff(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i][0] += arr[i - 1][0] + 1;
    }
    return arr;
}
// prettier-ignore
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Map(/* #__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* #__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* #__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* #__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]])));
//# sourceMappingURL=encode-html.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/entities/lib/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/entities/lib/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecodingMode: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.DecodingMode),
/* harmony export */   EncodingMode: () => (/* binding */ EncodingMode),
/* harmony export */   EntityDecoder: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.EntityDecoder),
/* harmony export */   EntityLevel: () => (/* binding */ EntityLevel),
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   decodeHTML: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeHTML),
/* harmony export */   decodeHTML4: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeHTML),
/* harmony export */   decodeHTML4Strict: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeHTMLStrict),
/* harmony export */   decodeHTML5: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeHTML),
/* harmony export */   decodeHTML5Strict: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeHTMLStrict),
/* harmony export */   decodeHTMLAttribute: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeHTMLAttribute),
/* harmony export */   decodeHTMLStrict: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeHTMLStrict),
/* harmony export */   decodeStrict: () => (/* binding */ decodeStrict),
/* harmony export */   decodeXML: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeXML),
/* harmony export */   decodeXMLStrict: () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeXML),
/* harmony export */   encode: () => (/* binding */ encode),
/* harmony export */   encodeHTML: () => (/* reexport safe */ _encode_js__WEBPACK_IMPORTED_MODULE_1__.encodeHTML),
/* harmony export */   encodeHTML4: () => (/* reexport safe */ _encode_js__WEBPACK_IMPORTED_MODULE_1__.encodeHTML),
/* harmony export */   encodeHTML5: () => (/* reexport safe */ _encode_js__WEBPACK_IMPORTED_MODULE_1__.encodeHTML),
/* harmony export */   encodeNonAsciiHTML: () => (/* reexport safe */ _encode_js__WEBPACK_IMPORTED_MODULE_1__.encodeNonAsciiHTML),
/* harmony export */   encodeXML: () => (/* reexport safe */ _escape_js__WEBPACK_IMPORTED_MODULE_2__.encodeXML),
/* harmony export */   escape: () => (/* reexport safe */ _escape_js__WEBPACK_IMPORTED_MODULE_2__.escape),
/* harmony export */   escapeAttribute: () => (/* reexport safe */ _escape_js__WEBPACK_IMPORTED_MODULE_2__.escapeAttribute),
/* harmony export */   escapeText: () => (/* reexport safe */ _escape_js__WEBPACK_IMPORTED_MODULE_2__.escapeText),
/* harmony export */   escapeUTF8: () => (/* reexport safe */ _escape_js__WEBPACK_IMPORTED_MODULE_2__.escapeUTF8)
/* harmony export */ });
/* harmony import */ var _decode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decode.js */ "./node_modules/cheerio/node_modules/entities/lib/esm/decode.js");
/* harmony import */ var _encode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encode.js */ "./node_modules/cheerio/node_modules/entities/lib/esm/encode.js");
/* harmony import */ var _escape_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./escape.js */ "./node_modules/cheerio/node_modules/entities/lib/esm/escape.js");



/** The level of entities to support. */
var EntityLevel;
(function (EntityLevel) {
    /** Support only XML entities. */
    EntityLevel[EntityLevel["XML"] = 0] = "XML";
    /** Support HTML entities, which are a superset of XML entities. */
    EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
var EncodingMode;
(function (EncodingMode) {
    /**
     * The output is UTF-8 encoded. Only characters that need escaping within
     * XML will be escaped.
     */
    EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
    /**
     * The output consists only of ASCII characters. Characters that need
     * escaping within HTML, and characters that aren't ASCII characters will
     * be escaped.
     */
    EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
    /**
     * Encode all characters that have an equivalent entity, as well as all
     * characters that are not ASCII characters.
     */
    EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
    /**
     * Encode all characters that have to be escaped in HTML attributes,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */
    EncodingMode[EncodingMode["Attribute"] = 3] = "Attribute";
    /**
     * Encode all characters that have to be escaped in HTML text,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */
    EncodingMode[EncodingMode["Text"] = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 */
function decode(data, options = EntityLevel.XML) {
    const level = typeof options === "number" ? options : options.level;
    if (level === EntityLevel.HTML) {
        const mode = typeof options === "object" ? options.mode : undefined;
        return (0,_decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeHTML)(data, mode);
    }
    return (0,_decode_js__WEBPACK_IMPORTED_MODULE_0__.decodeXML)(data);
}
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 * @deprecated Use `decode` with the `mode` set to `Strict`.
 */
function decodeStrict(data, options = EntityLevel.XML) {
    var _a;
    const opts = typeof options === "number" ? { level: options } : options;
    (_a = opts.mode) !== null && _a !== void 0 ? _a : (opts.mode = _decode_js__WEBPACK_IMPORTED_MODULE_0__.DecodingMode.Strict);
    return decode(data, opts);
}
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param options Encoding options.
 */
function encode(data, options = EntityLevel.XML) {
    const opts = typeof options === "number" ? { level: options } : options;
    // Mode `UTF8` just escapes XML entities
    if (opts.mode === EncodingMode.UTF8)
        return (0,_escape_js__WEBPACK_IMPORTED_MODULE_2__.escapeUTF8)(data);
    if (opts.mode === EncodingMode.Attribute)
        return (0,_escape_js__WEBPACK_IMPORTED_MODULE_2__.escapeAttribute)(data);
    if (opts.mode === EncodingMode.Text)
        return (0,_escape_js__WEBPACK_IMPORTED_MODULE_2__.escapeText)(data);
    if (opts.level === EntityLevel.HTML) {
        if (opts.mode === EncodingMode.ASCII) {
            return (0,_encode_js__WEBPACK_IMPORTED_MODULE_1__.encodeNonAsciiHTML)(data);
        }
        return (0,_encode_js__WEBPACK_IMPORTED_MODULE_1__.encodeHTML)(data);
    }
    // ASCII and Extensive are equivalent
    return (0,_escape_js__WEBPACK_IMPORTED_MODULE_2__.encodeXML)(data);
}



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/htmlparser2/lib/esm/Parser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/htmlparser2/lib/esm/Parser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/cheerio/node_modules/htmlparser2/lib/esm/Tokenizer.js");
/* harmony import */ var entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/lib/decode.js */ "./node_modules/cheerio/node_modules/entities/lib/esm/decode.js");


const formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea",
]);
const pTag = new Set(["p"]);
const tableSectionTags = new Set(["thead", "tbody"]);
const ddtTags = new Set(["dd", "dt"]);
const rtpTags = new Set(["rt", "rp"]);
const openImpliesClose = new Map([
    ["tr", new Set(["tr", "th", "td"])],
    ["th", new Set(["th"])],
    ["td", new Set(["thead", "th", "td"])],
    ["body", new Set(["head", "link", "script"])],
    ["li", new Set(["li"])],
    ["p", pTag],
    ["h1", pTag],
    ["h2", pTag],
    ["h3", pTag],
    ["h4", pTag],
    ["h5", pTag],
    ["h6", pTag],
    ["select", formTags],
    ["input", formTags],
    ["output", formTags],
    ["button", formTags],
    ["datalist", formTags],
    ["textarea", formTags],
    ["option", new Set(["option"])],
    ["optgroup", new Set(["optgroup", "option"])],
    ["dd", ddtTags],
    ["dt", ddtTags],
    ["address", pTag],
    ["article", pTag],
    ["aside", pTag],
    ["blockquote", pTag],
    ["details", pTag],
    ["div", pTag],
    ["dl", pTag],
    ["fieldset", pTag],
    ["figcaption", pTag],
    ["figure", pTag],
    ["footer", pTag],
    ["form", pTag],
    ["header", pTag],
    ["hr", pTag],
    ["main", pTag],
    ["nav", pTag],
    ["ol", pTag],
    ["pre", pTag],
    ["section", pTag],
    ["table", pTag],
    ["ul", pTag],
    ["rt", rtpTags],
    ["rp", rtpTags],
    ["tbody", tableSectionTags],
    ["tfoot", tableSectionTags],
]);
const voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
const foreignContextElements = new Set(["math", "svg"]);
const htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title",
]);
const reNameEnd = /\s|\//;
class Parser {
    constructor(cbs, options = {}) {
        var _a, _b, _c, _d, _e;
        this.options = options;
        /** The start index of the last event. */
        this.startIndex = 0;
        /** The end index of the last event. */
        this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */
        this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.buffers = [];
        this.bufferOffset = 0;
        /** The index of the last written buffer. Used when resuming after a `pause()`. */
        this.writeIndex = 0;
        /** Indicates whether the parser has finished running / `.end` has been called. */
        this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames =
            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
    }
    // Tokenizer event handlers
    /** @internal */
    ontext(start, endIndex) {
        var _a, _b;
        const data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = endIndex;
    }
    /** @internal */
    ontextentity(cp) {
        var _a, _b;
        /*
         * Entities can be emitted on the character, or directly after.
         * We use the section start here to get accurate indices.
         */
        const index = this.tokenizer.getSectionStart();
        this.endIndex = index - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0,entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_1__.fromCodePoint)(cp));
        this.startIndex = index;
    }
    isVoidElement(name) {
        return !this.options.xmlMode && voidElements.has(name);
    }
    /** @internal */
    onopentagname(start, endIndex) {
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    }
    emitOpenTag(name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        const impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while (this.stack.length > 0 &&
                impliesClose.has(this.stack[this.stack.length - 1])) {
                const element = this.stack.pop();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
                this.foreignContext.push(true);
            }
            else if (htmlIntegrationElements.has(name)) {
                this.foreignContext.push(false);
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag)
            this.attribs = {};
    }
    endOpenTag(isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    }
    /** @internal */
    onopentagend(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onclosetag(start, endIndex) {
        var _a, _b, _c, _d, _e, _f;
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) ||
            htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
        }
        if (!this.isVoidElement(name)) {
            const pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    let count = this.stack.length - pos;
                    while (count--) {
                        // We know the stack has sufficient elements.
                        this.cbs.onclosetag(this.stack.pop(), count !== 0);
                    }
                }
                else
                    this.stack.length = pos;
            }
            else if (!this.options.xmlMode && name === "p") {
                // Implicit open before close
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        }
        else if (!this.options.xmlMode && name === "br") {
            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
            (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, "br");
            (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
            (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onselfclosingtag(endIndex) {
        this.endIndex = endIndex;
        if (this.options.xmlMode ||
            this.options.recognizeSelfClosing ||
            this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = endIndex + 1;
        }
        else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend(endIndex);
        }
    }
    closeCurrentTag(isOpenImplied) {
        var _a, _b;
        const name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[this.stack.length - 1] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.pop();
        }
    }
    /** @internal */
    onattribname(start, endIndex) {
        this.startIndex = start;
        const name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames
            ? name.toLowerCase()
            : name;
    }
    /** @internal */
    onattribdata(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    }
    /** @internal */
    onattribentity(cp) {
        this.attribvalue += (0,entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_1__.fromCodePoint)(cp);
    }
    /** @internal */
    onattribend(quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.QuoteType.Double
            ? '"'
            : quote === _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.QuoteType.Single
                ? "'"
                : quote === _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.QuoteType.NoValue
                    ? undefined
                    : null);
        if (this.attribs &&
            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    }
    getInstructionName(value) {
        const index = value.search(reNameEnd);
        let name = index < 0 ? value : value.substr(0, index);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    }
    /** @internal */
    ondeclaration(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onprocessinginstruction(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    oncomment(start, endIndex, offset) {
        var _a, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    oncdata(start, endIndex, offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex - offset);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        }
        else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */
    onend() {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for (let index = this.stack.length; index > 0; this.cbs.onclosetag(this.stack[--index], true))
                ;
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    reset() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    parseComplete(data) {
        this.reset();
        this.end(data);
    }
    getSlice(start, end) {
        while (start - this.bufferOffset >= this.buffers[0].length) {
            this.shiftBuffer();
        }
        let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while (end - this.bufferOffset > this.buffers[0].length) {
            this.shiftBuffer();
            slice += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return slice;
    }
    shiftBuffer() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    write(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    end(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".end() after done!"));
            return;
        }
        if (chunk)
            this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    pause() {
        this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */
    resume() {
        this.tokenizer.resume();
        while (this.tokenizer.running &&
            this.writeIndex < this.buffers.length) {
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended)
            this.tokenizer.end();
    }
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    parseChunk(chunk) {
        this.write(chunk);
    }
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    done(chunk) {
        this.end(chunk);
    }
}
//# sourceMappingURL=Parser.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/htmlparser2/lib/esm/Tokenizer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/htmlparser2/lib/esm/Tokenizer.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteType: () => (/* binding */ QuoteType),
/* harmony export */   "default": () => (/* binding */ Tokenizer)
/* harmony export */ });
/* harmony import */ var entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! entities/lib/decode.js */ "./node_modules/cheerio/node_modules/entities/lib/esm/decode.js");

var CharCodes;
(function (CharCodes) {
    CharCodes[CharCodes["Tab"] = 9] = "Tab";
    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes[CharCodes["Space"] = 32] = "Space";
    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
    CharCodes[CharCodes["Number"] = 35] = "Number";
    CharCodes[CharCodes["Amp"] = 38] = "Amp";
    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
    CharCodes[CharCodes["Dash"] = 45] = "Dash";
    CharCodes[CharCodes["Slash"] = 47] = "Slash";
    CharCodes[CharCodes["Zero"] = 48] = "Zero";
    CharCodes[CharCodes["Nine"] = 57] = "Nine";
    CharCodes[CharCodes["Semi"] = 59] = "Semi";
    CharCodes[CharCodes["Lt"] = 60] = "Lt";
    CharCodes[CharCodes["Eq"] = 61] = "Eq";
    CharCodes[CharCodes["Gt"] = 62] = "Gt";
    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
/** All the states the tokenizer can be in. */
var State;
(function (State) {
    State[State["Text"] = 1] = "Text";
    State[State["BeforeTagName"] = 2] = "BeforeTagName";
    State[State["InTagName"] = 3] = "InTagName";
    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State[State["InClosingTagName"] = 6] = "InClosingTagName";
    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    // Attributes
    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State[State["InAttributeName"] = 9] = "InAttributeName";
    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    // Declarations
    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State[State["InDeclaration"] = 16] = "InDeclaration";
    // Processing instructions
    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    // Comments & CDATA
    State[State["BeforeComment"] = 18] = "BeforeComment";
    State[State["CDATASequence"] = 19] = "CDATASequence";
    State[State["InSpecialComment"] = 20] = "InSpecialComment";
    State[State["InCommentLike"] = 21] = "InCommentLike";
    // Special tags
    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
    State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
    State[State["InSpecialTag"] = 24] = "InSpecialTag";
    State[State["BeforeEntity"] = 25] = "BeforeEntity";
    State[State["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
    State[State["InNamedEntity"] = 27] = "InNamedEntity";
    State[State["InNumericEntity"] = 28] = "InNumericEntity";
    State[State["InHexEntity"] = 29] = "InHexEntity";
})(State || (State = {}));
function isWhitespace(c) {
    return (c === CharCodes.Space ||
        c === CharCodes.NewLine ||
        c === CharCodes.Tab ||
        c === CharCodes.FormFeed ||
        c === CharCodes.CarriageReturn);
}
function isEndOfTagSection(c) {
    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
}
function isNumber(c) {
    return c >= CharCodes.Zero && c <= CharCodes.Nine;
}
function isASCIIAlpha(c) {
    return ((c >= CharCodes.LowerA && c <= CharCodes.LowerZ) ||
        (c >= CharCodes.UpperA && c <= CharCodes.UpperZ));
}
function isHexDigit(c) {
    return ((c >= CharCodes.UpperA && c <= CharCodes.UpperF) ||
        (c >= CharCodes.LowerA && c <= CharCodes.LowerF));
}
var QuoteType;
(function (QuoteType) {
    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
    QuoteType[QuoteType["Single"] = 2] = "Single";
    QuoteType[QuoteType["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */
const Sequences = {
    Cdata: new Uint8Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]),
    CdataEnd: new Uint8Array([0x5d, 0x5d, 0x3e]),
    CommentEnd: new Uint8Array([0x2d, 0x2d, 0x3e]),
    ScriptEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]),
    StyleEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]),
    TitleEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]), // `</title`
};
class Tokenizer {
    constructor({ xmlMode = false, decodeEntities = true, }, cbs) {
        this.cbs = cbs;
        /** The current state the tokenizer is in. */
        this.state = State.Text;
        /** The read buffer. */
        this.buffer = "";
        /** The beginning of the section that is currently being read. */
        this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */
        this.index = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
        this.baseState = State.Text;
        /** For special parsing behavior inside of script and style tags. */
        this.isSpecial = false;
        /** Indicates whether the tokenizer has been paused. */
        this.running = true;
        /** The offset of the current buffer. */
        this.offset = 0;
        this.currentSequence = undefined;
        this.sequenceIndex = 0;
        this.trieIndex = 0;
        this.trieCurrent = 0;
        /** For named entities, the index of the value. For numeric entities, the code point. */
        this.entityResult = 0;
        this.entityExcess = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityTrie = xmlMode ? entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_0__.xmlDecodeTree : entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_0__.htmlDecodeTree;
    }
    reset() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.currentSequence = undefined;
        this.running = true;
        this.offset = 0;
    }
    write(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
    }
    end() {
        if (this.running)
            this.finish();
    }
    pause() {
        this.running = false;
    }
    resume() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
            this.parse();
        }
    }
    /**
     * The current index within all of the written data.
     */
    getIndex() {
        return this.index;
    }
    /**
     * The start of the current section.
     */
    getSectionStart() {
        return this.sectionStart;
    }
    stateText(c) {
        if (c === CharCodes.Lt ||
            (!this.decodeEntities && this.fastForwardTo(CharCodes.Lt))) {
            if (this.index > this.sectionStart) {
                this.cbs.ontext(this.sectionStart, this.index);
            }
            this.state = State.BeforeTagName;
            this.sectionStart = this.index;
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.state = State.BeforeEntity;
        }
    }
    stateSpecialStartSequence(c) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd
            ? // If we are at the end of the sequence, make sure the tag name has ended
                isEndOfTagSection(c)
            : // Otherwise, do a case-insensitive comparison
                (c | 0x20) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) {
            this.isSpecial = false;
        }
        else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> tags, also decode entities. */
    stateInSpecialTag(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === CharCodes.Gt || isWhitespace(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    // Spoof the index so that reported locations match up.
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2; // Skip over the `</`
                this.stateInClosingTagName(c);
                return; // We are done; skip the rest of the function.
            }
            this.sequenceIndex = 0;
        }
        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        }
        else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
                // We have to parse entities in <title> tags.
                if (this.decodeEntities && c === CharCodes.Amp) {
                    this.state = State.BeforeEntity;
                }
            }
            else if (this.fastForwardTo(CharCodes.Lt)) {
                // Outside of <title> tags, we can fast-forward.
                this.sequenceIndex = 1;
            }
        }
        else {
            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
            this.sequenceIndex = Number(c === CharCodes.Lt);
        }
    }
    stateCDATASequence(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = State.InCommentLike;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        }
        else {
            this.sequenceIndex = 0;
            this.state = State.InDeclaration;
            this.stateInDeclaration(c); // Reconsume the character
        }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */
    fastForwardTo(c) {
        while (++this.index < this.buffer.length + this.offset) {
            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
                return true;
            }
        }
        /*
         * We increment the index at the end of the `parse` loop,
         * so set it to `buffer.length - 1` here.
         *
         * TODO: Refactor `parse` to increment index before calling states.
         */
        this.index = this.buffer.length + this.offset - 1;
        return false;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */
    stateInCommentLike(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) {
                    this.cbs.oncdata(this.sectionStart, this.index, 2);
                }
                else {
                    this.cbs.oncomment(this.sectionStart, this.index, 2);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = State.Text;
            }
        }
        else if (this.sequenceIndex === 0) {
            // Fast-forward to the first character of the sequence
            if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
            }
        }
        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            // Allow long sequences, eg. --->, ]]]>
            this.sequenceIndex = 0;
        }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
    isTagStartChar(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
    startSpecial(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this.state = State.SpecialStartSequence;
    }
    stateBeforeTagName(c) {
        if (c === CharCodes.ExclamationMark) {
            this.state = State.BeforeDeclaration;
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.Questionmark) {
            this.state = State.InProcessingInstruction;
            this.sectionStart = this.index + 1;
        }
        else if (this.isTagStartChar(c)) {
            const lower = c | 0x20;
            this.sectionStart = this.index;
            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
                this.startSpecial(Sequences.TitleEnd, 3);
            }
            else {
                this.state =
                    !this.xmlMode && lower === Sequences.ScriptEnd[2]
                        ? State.BeforeSpecialS
                        : State.InTagName;
            }
        }
        else if (c === CharCodes.Slash) {
            this.state = State.BeforeClosingTagName;
        }
        else {
            this.state = State.Text;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateBeforeClosingTagName(c) {
        if (isWhitespace(c)) {
            // Ignore
        }
        else if (c === CharCodes.Gt) {
            this.state = State.Text;
        }
        else {
            this.state = this.isTagStartChar(c)
                ? State.InClosingTagName
                : State.InSpecialComment;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (c === CharCodes.Gt || isWhitespace(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterClosingTagName;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        // Skip everything until ">"
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.state = State.Text;
            this.baseState = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttributeName(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onopentagend(this.index);
            if (this.isSpecial) {
                this.state = State.InSpecialTag;
                this.sequenceIndex = 0;
            }
            else {
                this.state = State.Text;
            }
            this.baseState = this.state;
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.Slash) {
            this.state = State.InSelfClosingTag;
        }
        else if (!isWhitespace(c)) {
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onselfclosingtag(this.index);
            this.state = State.Text;
            this.baseState = State.Text;
            this.sectionStart = this.index + 1;
            this.isSpecial = false; // Reset special state, in case of self-closing special tags
        }
        else if (!isWhitespace(c)) {
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateInAttributeName(c) {
        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        }
    }
    stateAfterAttributeName(c) {
        if (c === CharCodes.Eq) {
            this.state = State.BeforeAttributeValue;
        }
        else if (c === CharCodes.Slash || c === CharCodes.Gt) {
            this.cbs.onattribend(QuoteType.NoValue, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
        else if (!isWhitespace(c)) {
            this.cbs.onattribend(QuoteType.NoValue, this.index);
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateBeforeAttributeValue(c) {
        if (c === CharCodes.DoubleQuote) {
            this.state = State.InAttributeValueDq;
            this.sectionStart = this.index + 1;
        }
        else if (c === CharCodes.SingleQuote) {
            this.state = State.InAttributeValueSq;
            this.sectionStart = this.index + 1;
        }
        else if (!isWhitespace(c)) {
            this.sectionStart = this.index;
            this.state = State.InAttributeValueNq;
            this.stateInAttributeValueNoQuotes(c); // Reconsume token
        }
    }
    handleInAttributeValue(c, quote) {
        if (c === quote ||
            (!this.decodeEntities && this.fastForwardTo(quote))) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === CharCodes.DoubleQuote
                ? QuoteType.Double
                : QuoteType.Single, this.index);
            this.state = State.BeforeAttributeName;
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.baseState = this.state;
            this.state = State.BeforeEntity;
        }
    }
    stateInAttributeValueDoubleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.SingleQuote);
    }
    stateInAttributeValueNoQuotes(c) {
        if (isWhitespace(c) || c === CharCodes.Gt) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(QuoteType.Unquoted, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
        else if (this.decodeEntities && c === CharCodes.Amp) {
            this.baseState = this.state;
            this.state = State.BeforeEntity;
        }
    }
    stateBeforeDeclaration(c) {
        if (c === CharCodes.OpeningSquareBracket) {
            this.state = State.CDATASequence;
            this.sequenceIndex = 0;
        }
        else {
            this.state =
                c === CharCodes.Dash
                    ? State.BeforeComment
                    : State.InDeclaration;
        }
    }
    stateInDeclaration(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.ondeclaration(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === CharCodes.Dash) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CommentEnd;
            // Allow short comments (eg. <!-->)
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
        }
        else {
            this.state = State.InDeclaration;
        }
    }
    stateInSpecialComment(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeSpecialS(c) {
        const lower = c | 0x20;
        if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
        }
        else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
        }
        else {
            this.state = State.InTagName;
            this.stateInTagName(c); // Consume the token again
        }
    }
    stateBeforeEntity(c) {
        // Start excess with 1 to include the '&'
        this.entityExcess = 1;
        this.entityResult = 0;
        if (c === CharCodes.Number) {
            this.state = State.BeforeNumericEntity;
        }
        else if (c === CharCodes.Amp) {
            // We have two `&` characters in a row. Stay in the current state.
        }
        else {
            this.trieIndex = 0;
            this.trieCurrent = this.entityTrie[0];
            this.state = State.InNamedEntity;
            this.stateInNamedEntity(c);
        }
    }
    stateInNamedEntity(c) {
        this.entityExcess += 1;
        this.trieIndex = (0,entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_0__.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
        if (this.trieIndex < 0) {
            this.emitNamedEntity();
            this.index--;
            return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        const masked = this.trieCurrent & entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_0__.BinTrieFlags.VALUE_LENGTH;
        // If the branch is a value, store it and continue
        if (masked) {
            // The mask is the number of bytes of the value, including the current byte.
            const valueLength = (masked >> 14) - 1;
            // If we have a legacy entity while parsing strictly, just skip the number of bytes
            if (!this.allowLegacyEntity() && c !== CharCodes.Semi) {
                this.trieIndex += valueLength;
            }
            else {
                // Add 1 as we have already incremented the excess
                const entityStart = this.index - this.entityExcess + 1;
                if (entityStart > this.sectionStart) {
                    this.emitPartial(this.sectionStart, entityStart);
                }
                // If this is a surrogate pair, consume the next two bytes
                this.entityResult = this.trieIndex;
                this.trieIndex += valueLength;
                this.entityExcess = 0;
                this.sectionStart = this.index + 1;
                if (valueLength === 0) {
                    this.emitNamedEntity();
                }
            }
        }
    }
    emitNamedEntity() {
        this.state = this.baseState;
        if (this.entityResult === 0) {
            return;
        }
        const valueLength = (this.entityTrie[this.entityResult] & entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_0__.BinTrieFlags.VALUE_LENGTH) >>
            14;
        switch (valueLength) {
            case 1: {
                this.emitCodePoint(this.entityTrie[this.entityResult] &
                    ~entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_0__.BinTrieFlags.VALUE_LENGTH);
                break;
            }
            case 2: {
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                break;
            }
            case 3: {
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
            }
        }
    }
    stateBeforeNumericEntity(c) {
        if ((c | 0x20) === CharCodes.LowerX) {
            this.entityExcess++;
            this.state = State.InHexEntity;
        }
        else {
            this.state = State.InNumericEntity;
            this.stateInNumericEntity(c);
        }
    }
    emitNumericEntity(strict) {
        const entityStart = this.index - this.entityExcess - 1;
        const numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
        if (numberStart !== this.index) {
            // Emit leading data if any
            if (entityStart > this.sectionStart) {
                this.emitPartial(this.sectionStart, entityStart);
            }
            this.sectionStart = this.index + Number(strict);
            this.emitCodePoint((0,entities_lib_decode_js__WEBPACK_IMPORTED_MODULE_0__.replaceCodePoint)(this.entityResult));
        }
        this.state = this.baseState;
    }
    stateInNumericEntity(c) {
        if (c === CharCodes.Semi) {
            this.emitNumericEntity(true);
        }
        else if (isNumber(c)) {
            this.entityResult = this.entityResult * 10 + (c - CharCodes.Zero);
            this.entityExcess++;
        }
        else {
            if (this.allowLegacyEntity()) {
                this.emitNumericEntity(false);
            }
            else {
                this.state = this.baseState;
            }
            this.index--;
        }
    }
    stateInHexEntity(c) {
        if (c === CharCodes.Semi) {
            this.emitNumericEntity(true);
        }
        else if (isNumber(c)) {
            this.entityResult = this.entityResult * 16 + (c - CharCodes.Zero);
            this.entityExcess++;
        }
        else if (isHexDigit(c)) {
            this.entityResult =
                this.entityResult * 16 + ((c | 0x20) - CharCodes.LowerA + 10);
            this.entityExcess++;
        }
        else {
            if (this.allowLegacyEntity()) {
                this.emitNumericEntity(false);
            }
            else {
                this.state = this.baseState;
            }
            this.index--;
        }
    }
    allowLegacyEntity() {
        return (!this.xmlMode &&
            (this.baseState === State.Text ||
                this.baseState === State.InSpecialTag));
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */
    cleanup() {
        // If we are inside of text or attributes, emit what we already have.
        if (this.running && this.sectionStart !== this.index) {
            if (this.state === State.Text ||
                (this.state === State.InSpecialTag && this.sequenceIndex === 0)) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
            else if (this.state === State.InAttributeValueDq ||
                this.state === State.InAttributeValueSq ||
                this.state === State.InAttributeValueNq) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    parse() {
        while (this.shouldContinue()) {
            const c = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
                case State.Text: {
                    this.stateText(c);
                    break;
                }
                case State.SpecialStartSequence: {
                    this.stateSpecialStartSequence(c);
                    break;
                }
                case State.InSpecialTag: {
                    this.stateInSpecialTag(c);
                    break;
                }
                case State.CDATASequence: {
                    this.stateCDATASequence(c);
                    break;
                }
                case State.InAttributeValueDq: {
                    this.stateInAttributeValueDoubleQuotes(c);
                    break;
                }
                case State.InAttributeName: {
                    this.stateInAttributeName(c);
                    break;
                }
                case State.InCommentLike: {
                    this.stateInCommentLike(c);
                    break;
                }
                case State.InSpecialComment: {
                    this.stateInSpecialComment(c);
                    break;
                }
                case State.BeforeAttributeName: {
                    this.stateBeforeAttributeName(c);
                    break;
                }
                case State.InTagName: {
                    this.stateInTagName(c);
                    break;
                }
                case State.InClosingTagName: {
                    this.stateInClosingTagName(c);
                    break;
                }
                case State.BeforeTagName: {
                    this.stateBeforeTagName(c);
                    break;
                }
                case State.AfterAttributeName: {
                    this.stateAfterAttributeName(c);
                    break;
                }
                case State.InAttributeValueSq: {
                    this.stateInAttributeValueSingleQuotes(c);
                    break;
                }
                case State.BeforeAttributeValue: {
                    this.stateBeforeAttributeValue(c);
                    break;
                }
                case State.BeforeClosingTagName: {
                    this.stateBeforeClosingTagName(c);
                    break;
                }
                case State.AfterClosingTagName: {
                    this.stateAfterClosingTagName(c);
                    break;
                }
                case State.BeforeSpecialS: {
                    this.stateBeforeSpecialS(c);
                    break;
                }
                case State.InAttributeValueNq: {
                    this.stateInAttributeValueNoQuotes(c);
                    break;
                }
                case State.InSelfClosingTag: {
                    this.stateInSelfClosingTag(c);
                    break;
                }
                case State.InDeclaration: {
                    this.stateInDeclaration(c);
                    break;
                }
                case State.BeforeDeclaration: {
                    this.stateBeforeDeclaration(c);
                    break;
                }
                case State.BeforeComment: {
                    this.stateBeforeComment(c);
                    break;
                }
                case State.InProcessingInstruction: {
                    this.stateInProcessingInstruction(c);
                    break;
                }
                case State.InNamedEntity: {
                    this.stateInNamedEntity(c);
                    break;
                }
                case State.BeforeEntity: {
                    this.stateBeforeEntity(c);
                    break;
                }
                case State.InHexEntity: {
                    this.stateInHexEntity(c);
                    break;
                }
                case State.InNumericEntity: {
                    this.stateInNumericEntity(c);
                    break;
                }
                default: {
                    // `this._state === State.BeforeNumericEntity`
                    this.stateBeforeNumericEntity(c);
                }
            }
            this.index++;
        }
        this.cleanup();
    }
    finish() {
        if (this.state === State.InNamedEntity) {
            this.emitNamedEntity();
        }
        // If there is remaining data, emit it in a reasonable way
        if (this.sectionStart < this.index) {
            this.handleTrailingData();
        }
        this.cbs.onend();
    }
    /** Handle any trailing data. */
    handleTrailingData() {
        const endIndex = this.buffer.length + this.offset;
        if (this.state === State.InCommentLike) {
            if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(this.sectionStart, endIndex, 0);
            }
            else {
                this.cbs.oncomment(this.sectionStart, endIndex, 0);
            }
        }
        else if (this.state === State.InNumericEntity &&
            this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
            // All trailing data will have been consumed
        }
        else if (this.state === State.InHexEntity &&
            this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
            // All trailing data will have been consumed
        }
        else if (this.state === State.InTagName ||
            this.state === State.BeforeAttributeName ||
            this.state === State.BeforeAttributeValue ||
            this.state === State.AfterAttributeName ||
            this.state === State.InAttributeName ||
            this.state === State.InAttributeValueSq ||
            this.state === State.InAttributeValueDq ||
            this.state === State.InAttributeValueNq ||
            this.state === State.InClosingTagName) {
            /*
             * If we are currently in an opening or closing tag, us not calling the
             * respective callback signals that the tag should be ignored.
             */
        }
        else {
            this.cbs.ontext(this.sectionStart, endIndex);
        }
    }
    emitPartial(start, endIndex) {
        if (this.baseState !== State.Text &&
            this.baseState !== State.InSpecialTag) {
            this.cbs.onattribdata(start, endIndex);
        }
        else {
            this.cbs.ontext(start, endIndex);
        }
    }
    emitCodePoint(cp) {
        if (this.baseState !== State.Text &&
            this.baseState !== State.InSpecialTag) {
            this.cbs.onattribentity(cp);
        }
        else {
            this.cbs.ontextentity(cp);
        }
    }
}
//# sourceMappingURL=Tokenizer.js.map

/***/ }),

/***/ "./node_modules/cheerio/node_modules/htmlparser2/lib/esm/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/cheerio/node_modules/htmlparser2/lib/esm/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultHandler: () => (/* reexport safe */ domhandler__WEBPACK_IMPORTED_MODULE_1__.DomHandler),
/* harmony export */   DomHandler: () => (/* reexport safe */ domhandler__WEBPACK_IMPORTED_MODULE_1__.DomHandler),
/* harmony export */   DomUtils: () => (/* reexport module object */ domutils__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   ElementType: () => (/* reexport module object */ domelementtype__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   Parser: () => (/* reexport safe */ _Parser_js__WEBPACK_IMPORTED_MODULE_0__.Parser),
/* harmony export */   Tokenizer: () => (/* reexport safe */ _Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   createDomStream: () => (/* binding */ createDomStream),
/* harmony export */   getFeed: () => (/* reexport safe */ domutils__WEBPACK_IMPORTED_MODULE_4__.getFeed),
/* harmony export */   parseDOM: () => (/* binding */ parseDOM),
/* harmony export */   parseDocument: () => (/* binding */ parseDocument),
/* harmony export */   parseFeed: () => (/* binding */ parseFeed)
/* harmony export */ });
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Parser.js */ "./node_modules/cheerio/node_modules/htmlparser2/lib/esm/Parser.js");
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domhandler */ "./node_modules/cheerio/node_modules/domhandler/lib/esm/index.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/cheerio/node_modules/htmlparser2/lib/esm/Tokenizer.js");
/* harmony import */ var domelementtype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/esm/index.js");
/* harmony import */ var domutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! domutils */ "./node_modules/cheerio/node_modules/domutils/lib/esm/index.js");




// Helper methods
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */
function parseDocument(data, options) {
    const handler = new domhandler__WEBPACK_IMPORTED_MODULE_1__.DomHandler(undefined, options);
    new _Parser_js__WEBPACK_IMPORTED_MODULE_0__.Parser(handler, options).end(data);
    return handler.root;
}
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 * @deprecated Use `parseDocument` instead.
 */
function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param callback A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCallback An optional callback that will be called every time a tag has been completed inside of the DOM.
 */
function createDomStream(callback, options, elementCallback) {
    const handler = new domhandler__WEBPACK_IMPORTED_MODULE_1__.DomHandler(callback, options, elementCallback);
    return new _Parser_js__WEBPACK_IMPORTED_MODULE_0__.Parser(handler, options);
}

/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */



const parseFeedDefaultOptions = { xmlMode: true };
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
 */
function parseFeed(feed, options = parseFeedDefaultOptions) {
    return (0,domutils__WEBPACK_IMPORTED_MODULE_4__.getFeed)(parseDOM(feed, options));
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/domelementtype/lib/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/domelementtype/lib/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDATA: () => (/* binding */ CDATA),
/* harmony export */   Comment: () => (/* binding */ Comment),
/* harmony export */   Directive: () => (/* binding */ Directive),
/* harmony export */   Doctype: () => (/* binding */ Doctype),
/* harmony export */   ElementType: () => (/* binding */ ElementType),
/* harmony export */   Root: () => (/* binding */ Root),
/* harmony export */   Script: () => (/* binding */ Script),
/* harmony export */   Style: () => (/* binding */ Style),
/* harmony export */   Tag: () => (/* binding */ Tag),
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   isTag: () => (/* binding */ isTag)
/* harmony export */ });
/** Types of elements found in htmlparser2's DOM */
var ElementType;
(function (ElementType) {
    /** Type for the root element of a document */
    ElementType["Root"] = "root";
    /** Type for Text */
    ElementType["Text"] = "text";
    /** Type for <? ... ?> */
    ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */
    ElementType["Comment"] = "comment";
    /** Type for <script> tags */
    ElementType["Script"] = "script";
    /** Type for <style> tags */
    ElementType["Style"] = "style";
    /** Type for Any tag */
    ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */
    ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */
    ElementType["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style);
}
// Exports for backwards compatibility
/** Type for the root element of a document */
const Root = ElementType.Root;
/** Type for Text */
const Text = ElementType.Text;
/** Type for <? ... ?> */
const Directive = ElementType.Directive;
/** Type for <!-- ... --> */
const Comment = ElementType.Comment;
/** Type for <script> tags */
const Script = ElementType.Script;
/** Type for <style> tags */
const Style = ElementType.Style;
/** Type for Any tag */
const Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
const CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
const Doctype = ElementType.Doctype;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/scraping.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholder: () => (/* binding */ placeholder),
/* harmony export */   scrapePage: () => (/* binding */ scrapePage)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cheerio */ "./node_modules/cheerio/lib/esm/index.js");



async function scrapePage(bookID) {
  const url = `https://www.goodreads.com/book/show/${bookID}`;

  try {
    // Fetch the HTML content of the page
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(url);
    const html = response.data;

    // Load the HTML content into Cheerio
    const $ = cheerio__WEBPACK_IMPORTED_MODULE_0__["default"].load(html);

    // Extract images
    const images = [];
    $("img.ResponsiveImage").each((index, element) => {
      const imageUrl = $(element).attr("src");
      images.push(imageUrl);
    });

    // array of image URLs for the current page
    console.log(`Images on page ${bookID}:`, images);
  } catch (error) {
    console.error(`Error fetching or parsing page ${bookID}:`, error.message);
  }
}

function placeholder() {
  console.log("test");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUM4QztBQUNvQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywrQ0FBUztBQUN2QixjQUFjLHFEQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0REFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLElBQUksY0FBYztBQUN4QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxrQ0FBa0M7QUFDekM7QUFDQTtBQUNB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LG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzRUFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxtRUFBYTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFpQixpQkFBaUIsaUJBQWlCLGdCQUFnQixlQUFlLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixlQUFlLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGVBQWUsaUJBQWlCLGlCQUFpQixnQkFBZ0IsZUFBZSxjQUFjLGlCQUFpQixpQkFBaUIsaUJBQWlCLGdCQUFnQixpQkFBaUIsZUFBZSxjQUFjLGlCQUFpQixpQkFBaUIsaUJBQWlCLGdCQUFnQixlQUFlLGlCQUFpQixnQkFBZ0IsZUFBZSxnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGdCQUFnQixnQkFBZ0IsZUFBZSxlQUFlLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGdCQUFnQixnQkFBZ0IsZUFBZSxlQUFlLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsZUFBZSxlQUFlLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZUFBZSxnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixnQkFBZ0IsY0FBYyxjQUFjLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGVBQWUsaUJBQWlCLGlCQUFpQixlQUFlLGVBQWUsaUJBQWlCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGtCQUFrQixpQkFBaUIsaUJBQWlCLGdCQUFnQixpQkFBaUIseUJBQXlCLGVBQWUsZUFBZSwyQkFBMkIsZ0JBQWdCLHFCQUFxQixrQkFBa0IsZUFBZSxnQkFBZ0IsZ0JBQWdCLGtCQUFrQixlQUFlLGNBQWMsZ0JBQWdCLGVBQWUsZ0JBQWdCLGlCQUFpQixhQUFhLGFBQWEsYUFBYSxrQkFBa0IsYUFBYSxjQUFjLGdCQUFnQixjQUFjLGtCQUFrQixjQUFjLGNBQWMsY0FBYyxjQUFjLGdCQUFnQixlQUFlLGdCQUFnQixnQkFBZ0IsZUFBZSxlQUFlLGNBQWMsZ0JBQWdCLGVBQWUsZ0JBQWdCLGlCQUFpQixhQUFhLGFBQWEsYUFBYSxrQkFBa0IsYUFBYSxjQUFjLGlCQUFpQixnQkFBZ0IsY0FBYyxlQUFlLGNBQWMsY0FBYyxjQUFjLGdCQUFnQixtQkFBbUIsZUFBZSxlQUFlLGNBQWMsaUJBQWlCLGtCQUFrQixrQkFBa0IsZUFBZSxnQkFBZ0Isc0JBQXNCLGdCQUFnQixlQUFlLGVBQWUsZ0JBQWdCLGVBQWUsZ0JBQWdCLGVBQWUsaUJBQWlCLGVBQWUsZUFBZSxnQkFBZ0IsZUFBZSxnQkFBZ0IsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxlQUFlLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGlCQUFpQixpQkFBaUIsY0FBYyxpQkFBaUIsY0FBYyxlQUFlLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxlQUFlLGVBQWUsZUFBZSxpQkFBaUIsaUJBQWlCLGNBQWMsaUJBQWlCLGNBQWMsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGdCQUFnQixlQUFlLGdCQUFnQixlQUFlLGlCQUFpQixlQUFlLGVBQWUsZ0JBQWdCLGVBQWUsZ0JBQWdCLGVBQWUsa0JBQWtCLGVBQWUsaUJBQWlCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLG9CQUFvQixpQkFBaUIsOEJBQThCLGVBQWUsY0FBYyxjQUFjLGNBQWMsZUFBZSxnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLDBCQUEwQixpQkFBaUIsZ0JBQWdCLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLGlCQUFpQixlQUFlLGVBQWUsaUJBQWlCLGlCQUFpQixrQkFBa0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsb0JBQW9CLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIsVUFBVSxpQkFBaUIsNEJBQTRCLEdBQUcsaUJBQWlCLGFBQWEseUJBQXlCLGFBQWEsZ0JBQWdCLGdCQUFnQixpQkFBaUIscUJBQXFCLGlCQUFpQixlQUFlLGlCQUFpQixjQUFjLGVBQWUsa0JBQWtCLGVBQWUsbUJBQW1CLGNBQWMsaUJBQWlCLGNBQWMsbUJBQW1CLGlCQUFpQixpQkFBaUIsaUJBQWlCLGVBQWUsZUFBZSxrQkFBa0IsZUFBZSxnQkFBZ0IsYUFBYSxnQkFBZ0IsbUJBQW1CLGNBQWMsaUJBQWlCLGdCQUFnQixpQkFBaUIsa0JBQWtCLGVBQWUsZUFBZSxxQkFBcUIsb0JBQW9CLGdCQUFnQixrQkFBa0IsZUFBZSxnQkFBZ0IsaUJBQWlCLGdDQUFnQyxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLGVBQWUsZUFBZSxlQUFlLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLDBCQUEwQix5QkFBeUIsZ0JBQWdCLGdCQUFnQixVQUFVLFdBQVcsdUJBQXVCLEdBQUcsY0FBYyxlQUFlLGVBQWUsZUFBZSxpQkFBaUIsaUJBQWlCLHVCQUF1QixtQkFBbUIsY0FBYyx1QkFBdUIsd0JBQXdCLHlCQUF5QixpQkFBaUIseUJBQXlCLGdCQUFnQixnQkFBZ0IsY0FBYyxjQUFjLGVBQWUsZUFBZSxnQkFBZ0IsaUJBQWlCLGlCQUFpQiwwQkFBMEIsMkJBQTJCLHdCQUF3Qix5QkFBeUIsd0JBQXdCLHVCQUF1QixnQkFBZ0IsMEJBQTBCLGdCQUFnQixnQkFBZ0IsOEJBQThCLGdCQUFnQiw4QkFBOEIseUJBQXlCLHFCQUFxQiwyQkFBMkIsZ0JBQWdCLDRCQUE0QixzQkFBc0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsMEJBQTBCLHdCQUF3QiwyQkFBMkIsZUFBZSwrQkFBK0IsNEJBQTRCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGtCQUFrQixnQkFBZ0IsZ0JBQWdCLDRCQUE0QixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsZUFBZSxVQUFVLFVBQVUsc0JBQXNCLEdBQUcsZUFBZSxpQkFBaUIsZ0JBQWdCLGNBQWMsa0JBQWtCLHFCQUFxQixhQUFhLGdCQUFnQixlQUFlLGlCQUFpQixjQUFjLGdCQUFnQixvQkFBb0Isa0JBQWtCLG9CQUFvQixpQkFBaUIsaUJBQWlCLGdCQUFnQixlQUFlLGdCQUFnQixnQkFBZ0IsVUFBVSxTQUFTLHNCQUFzQixHQUFHLGdCQUFnQixpQkFBaUIsY0FBYyxlQUFlLDRCQUE0QiwrQkFBK0IsY0FBYyxhQUFhLFVBQVUsU0FBUyx1QkFBdUIsR0FBRyxTQUFTLFNBQVMsdUJBQXVCLEdBQUcsYUFBYSxjQUFjLGdCQUFnQixpQkFBaUIsaUJBQWlCLGtCQUFrQixnQkFBZ0IsbUNBQW1DLG1CQUFtQixpQkFBaUIsaUJBQWlCLGdCQUFnQixnQkFBZ0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsVUFBVSxTQUFTLHVCQUF1QixHQUFHLFNBQVMsYUFBYSxxQkFBcUIsR0FBRyxTQUFTLFFBQVEsb0JBQW9CLEdBQUcsYUFBYSx3QkFBd0IsbUJBQW1CLFVBQVUsV0FBVyxzQkFBc0IsR0FBRyxjQUFjLHdCQUF3QixlQUFlLGdCQUFnQixnQkFBZ0IsYUFBYSxjQUFjLGNBQWMsVUFBVSxVQUFVLHNCQUFzQixHQUFHLGtCQUFrQixVQUFVLGFBQWEsc0JBQXNCLEdBQUcsU0FBUyxVQUFVLHNCQUFzQixHQUFHLFNBQVMsV0FBVyx1QkFBdUIsR0FBRyxTQUFTLFdBQVcsc0JBQXNCLEdBQUcsa0JBQWtCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixlQUFlLGlCQUFpQixpQkFBaUIsZ0JBQWdCLG9CQUFvQixpQkFBaUIsYUFBYSxVQUFVLGVBQWUseUJBQXlCLEdBQUcsZ0JBQWdCLFVBQVUsUUFBUSxzQkFBc0IsR0FBRyxTQUFTLFFBQVEsc0JBQXNCLEdBQUcsU0FBUyxRQUFRLG9CQUFvQixHQUFHLFNBQVMsUUFBUSxvQkFBb0IsR0FBRyxTQUFTLFNBQVMsNEJBQTRCLEdBQUcsU0FBUyxTQUFTLDRCQUE0QixHQUFHLFNBQVMsUUFBUSx3REFBd0QsaUJBQWlCLE9BQU8sU0FBUyxRQUFRLHdEQUF3RCxpQkFBaUIsT0FBTyxpQkFBaUIsb0JBQW9CLGdCQUFnQixjQUFjLGNBQWMsY0FBYyxrQkFBa0IsdUJBQXVCLGdCQUFnQixnQkFBZ0Isc0JBQXNCLGFBQWEseUJBQXlCLHlCQUF5QixhQUFhLGFBQWEsZ0JBQWdCLGdCQUFnQix3QkFBd0IsVUFBVSxXQUFXLGlDQUFpQyxHQUFHLHFCQUFxQixzQkFBc0IsVUFBVSxTQUFTLDJCQUEyQixHQUFHLFNBQVMsU0FBUyw2QkFBNkIsR0FBRyxjQUFjLGVBQWUsZUFBZSxlQUFlLHlCQUF5QiwyQkFBMkIsVUFBVSxXQUFXLCtCQUErQixHQUFHLFNBQVMsV0FBVywrQkFBK0IsR0FBRyxnQkFBZ0Isb0JBQW9CLFVBQVUsV0FBVyxnQ0FBZ0MsR0FBRyxTQUFTLFdBQVcsa0NBQWtDLEdBQUcsZ0JBQWdCLGlCQUFpQixVQUFVLFdBQVcseUJBQXlCLEdBQUcsU0FBUyxXQUFXLHlCQUF5QixHQUFHLG9CQUFvQixzQkFBc0Isc0JBQXNCLGVBQWUsb0JBQW9CLHNCQUFzQixxQkFBcUIsc0JBQXNCLGtCQUFrQixtQkFBbUIsbUJBQW1CLG9CQUFvQixtQkFBbUIsZ0JBQWdCLGtCQUFrQixjQUFjLGlCQUFpQix5QkFBeUIsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQix1QkFBdUIsd0JBQXdCLFVBQVUsdUJBQXVCLHlCQUF5QixHQUFHLFNBQVMsd0JBQXdCLHlCQUF5QixHQUFHLGdCQUFnQixlQUFlLG1CQUFtQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsa0JBQWtCLGdCQUFnQixtQkFBbUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsZUFBZSxlQUFlLGlCQUFpQix3QkFBd0IsaUJBQWlCLGlCQUFpQixpQkFBaUIseUJBQXlCLDBCQUEwQixvQkFBb0IsbUJBQW1CLHFCQUFxQixjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsZUFBZSxrQkFBa0IsZ0JBQWdCLFVBQVUsUUFBUSxvQkFBb0IsR0FBRyxTQUFTLFFBQVEsb0JBQW9CLEdBQUcsU0FBUyxTQUFTLHVCQUF1QixHQUFHLFNBQVMsU0FBUyx1QkFBdUIsR0FBRyxlQUFlLGdCQUFnQixnQ0FBZ0MsZ0NBQWdDLCtCQUErQixpQ0FBaUMsZ0JBQWdCLGdCQUFnQixtQkFBbUIsaUJBQWlCLGdCQUFnQiwyQkFBMkIsaUJBQWlCLGdDQUFnQyxpQkFBaUIsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsVUFBVSxhQUFhLHlCQUF5QixHQUFHLGlCQUFpQixrQkFBa0IsVUFBVSxXQUFXLHVCQUF1QixHQUFHLGNBQWMsZUFBZSxjQUFjLGtCQUFrQixrQkFBa0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLG9CQUFvQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGVBQWUsbUJBQW1CLG1CQUFtQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixtQkFBbUIsaUJBQWlCLGdCQUFnQixpQkFBaUIsbUJBQW1CLHNCQUFzQixxQkFBcUIsc0JBQXNCLGVBQWUsbUJBQW1CLDJCQUEyQiwyQkFBMkIsb0JBQW9CLHFCQUFxQixtQkFBbUIsbUJBQW1CLGlCQUFpQixxQkFBcUIsZ0JBQWdCLGVBQWUsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGVBQWUsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0Isa0JBQWtCLHNCQUFzQiwrQkFBK0IsZUFBZSxpQkFBaUIsZ0JBQWdCLHdCQUF3Qix3QkFBd0IsbUJBQW1CLDZCQUE2QixlQUFlLDBCQUEwQiw0QkFBNEIsZUFBZSw0QkFBNEIsZUFBZSxjQUFjLGNBQWMsa0JBQWtCLGtCQUFrQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQiwyQkFBMkIsNEJBQTRCLGtCQUFrQixlQUFlLGdCQUFnQixrQkFBa0IsZUFBZSxrQkFBa0IsZ0JBQWdCLGlCQUFpQixzQkFBc0IsZUFBZSxlQUFlLGtCQUFrQixnQkFBZ0Isa0JBQWtCLGdCQUFnQixlQUFlLGdCQUFnQiw2QkFBNkIsaUJBQWlCLGdCQUFnQixvQkFBb0Isa0JBQWtCLDZCQUE2Qiw2QkFBNkIsZUFBZSxlQUFlLGVBQWUsZUFBZSxnQkFBZ0IsZ0JBQWdCLHdCQUF3Qix5QkFBeUIsNkJBQTZCLDhCQUE4QiwrQkFBK0IsbUNBQW1DLHFCQUFxQixtQkFBbUIsbUJBQW1CLGlCQUFpQixpQkFBaUIsY0FBYyxnQkFBZ0IsaUJBQWlCLGdCQUFnQixrQkFBa0IsbUJBQW1CLG1CQUFtQixxQkFBcUIsdUJBQXVCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixrQkFBa0Isa0JBQWtCLGlCQUFpQixpQkFBaUIsbUJBQW1CLG1CQUFtQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsVUFBVSxXQUFXLHVCQUF1QixHQUFHLGlCQUFpQixlQUFlLGVBQWUsa0JBQWtCLGlCQUFpQixrQkFBa0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsMkJBQTJCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLDZCQUE2Qiw0QkFBNEIsNkJBQTZCLDBCQUEwQiw0QkFBNEIsd0JBQXdCLHlCQUF5QiwyQkFBMkIsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsMEJBQTBCLDRCQUE0QixlQUFlLGVBQWUsZUFBZSxlQUFlLGtCQUFrQixrQkFBa0Isa0JBQWtCLGtCQUFrQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsZ0JBQWdCLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGtCQUFrQixrQkFBa0Isa0JBQWtCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGtCQUFrQixrQkFBa0IsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixrQkFBa0Isa0JBQWtCLGtCQUFrQixrQkFBa0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsa0JBQWtCLGlCQUFpQixtQkFBbUIsZUFBZSxnQkFBZ0Isa0JBQWtCLGtCQUFrQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsbUJBQW1CLGtCQUFrQixrQkFBa0Isa0JBQWtCLG1CQUFtQixtQkFBbUIsZ0JBQWdCLGVBQWUsZUFBZSxnQkFBZ0Isa0JBQWtCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGNBQWMsY0FBYyxrQkFBa0IsZUFBZSxlQUFlLGdCQUFnQixpQkFBaUIsZ0JBQWdCLG1CQUFtQixVQUFVLHFCQUFxQixtQ0FBbUMsR0FBRyxTQUFTLHNCQUFzQixvQ0FBb0MsR0FBRyxpQkFBaUIsbUJBQW1CLGtCQUFrQixpQkFBaUIsbUJBQW1CLG1CQUFtQix1QkFBdUIsc0JBQXNCLGVBQWUsa0JBQWtCLG1CQUFtQixvQkFBb0IsbUJBQW1CLG1CQUFtQixpQkFBaUIsbUJBQW1CLG1CQUFtQixnQkFBZ0IsbUJBQW1CLG1CQUFtQixrQkFBa0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsbUJBQW1CLG1CQUFtQixrQkFBa0IsaUJBQWlCLGtCQUFrQixrQkFBa0IsaUJBQWlCLGtCQUFrQixpQkFBaUIsaUJBQWlCLGdCQUFnQixpQkFBaUIsbUJBQW1CLGlCQUFpQixrQkFBa0Isa0JBQWtCLG1CQUFtQixpQkFBaUIsZUFBZSxrQkFBa0IsbUJBQW1CLGtCQUFrQixrQkFBa0IsZ0JBQWdCLGlCQUFpQixlQUFlLGVBQWUsaUJBQWlCLGdCQUFnQixpQkFBaUIsaUJBQWlCLG1CQUFtQixtQkFBbUIsaUJBQWlCLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGtCQUFrQixjQUFjLGFBQWEsaUJBQWlCLGVBQWUsa0JBQWtCLG1CQUFtQixlQUFlLGNBQWMsZUFBZSxjQUFjLGlCQUFpQixnQkFBZ0IsaUJBQWlCLFVBQVUsYUFBYSx5QkFBeUIsR0FBRyxnQkFBZ0IsaUJBQWlCLFVBQVUsU0FBUyxxQkFBcUIsR0FBRyxlQUFlLGdCQUFnQixlQUFlLGlCQUFpQixnQkFBZ0Isa0JBQWtCLGtCQUFrQixnQkFBZ0IsZ0JBQWdCLGtCQUFrQixrQkFBa0IsVUFBVSxjQUFjLDBCQUEwQixHQUFHLFNBQVMsY0FBYywwQkFBMEIsR0FBRyxnQkFBZ0IsaUJBQWlCLGtCQUFrQixrQkFBa0IsbUJBQW1CLG1CQUFtQixjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsZUFBZSxjQUFjLGNBQWMsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGNBQWMsY0FBYyxpQkFBaUIsaUJBQWlCLGNBQWMsY0FBYyxpQkFBaUIsaUJBQWlCLGFBQWEsYUFBYSxlQUFlLGVBQWUsZ0JBQWdCLGdCQUFnQixVQUFVLGNBQWMsa0NBQWtDLEdBQUcsU0FBUyxvQkFBb0Isd0NBQXdDLEdBQUcsYUFBYSxjQUFjLGVBQWUsZUFBZSxnQkFBZ0IsZ0JBQWdCLGNBQWMsY0FBYyxVQUFVLFVBQVUsd0JBQXdCLEdBQUcsU0FBUyxVQUFVLHdCQUF3QixHQUFHLGVBQWUsVUFBVSxtQkFBbUIsaUNBQWlDLEdBQUcsU0FBUyxTQUFTLGlDQUFpQyxHQUFHLGFBQWEsY0FBYyxtQkFBbUIsZUFBZSxlQUFlLGVBQWUsc0JBQXNCLGdCQUFnQixhQUFhLGFBQWEsaUJBQWlCLGlCQUFpQixrQkFBa0Isa0JBQWtCLGtCQUFrQixrQkFBa0Isa0JBQWtCLGtCQUFrQixVQUFVLFVBQVUsc0JBQXNCLEdBQUcsU0FBUyxVQUFVLHNCQUFzQixHQUFHLGdCQUFnQixpQkFBaUIsVUFBVSxXQUFXLGdDQUFnQyxHQUFHLFNBQVMsV0FBVyxnQ0FBZ0MsR0FBRyxjQUFjLGVBQWUsZ0JBQWdCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsa0JBQWtCLGtCQUFrQixnQkFBZ0Isa0JBQWtCLGVBQWUsZ0JBQWdCLGlCQUFpQixlQUFlLGVBQWUsZ0JBQWdCLGVBQWUsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIsaUJBQWlCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLFVBQVUsV0FBVyx3QkFBd0IsR0FBRyxhQUFhLHVEQUF1RCxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxPQUFPLGtCQUFrQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixpQkFBaUIsS0FBSyxFQUFDO0FBQzlxMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RrRTtBQUNMO0FBQ3FCO0FBQ2xGO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5RUFBeUU7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseUVBQXlFO0FBQzNGO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQVU7QUFDekI7QUFDQSxXQUFXLHFEQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRSxtRUFBbUUsb0RBQVk7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0EsZUFBZSxzREFBVTtBQUN6QjtBQUNBLGVBQWUsMkRBQWU7QUFDOUI7QUFDQSxlQUFlLHNEQUFVO0FBQ3pCO0FBQ0E7QUFDQSxtQkFBbUIsOERBQWtCO0FBQ3JDO0FBQ0EsZUFBZSxzREFBVTtBQUN6QjtBQUNBO0FBQ0EsV0FBVyxxREFBUztBQUNwQjtBQUMwRjtBQUdmO0FBRzRHO0FBQ3ZMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHc0Q7QUFDQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YscURBQVM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RixxRUFBYTtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0dBQXNHO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxRUFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUlBQXlJLG9EQUFTO0FBQ2xKO0FBQ0Esd0JBQXdCLG9EQUFTO0FBQ2pDO0FBQ0EsNEJBQTRCLG9EQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEtBQUssT0FBTyxNQUFNO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEtBQUssT0FBTyxNQUFNO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxNQUFNO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsV0FBVztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGV5SDtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixrQkFBa0IseUNBQXlDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUVBQWEsR0FBRyxrRUFBYztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVFQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxnRUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsZ0VBQVk7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0VBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0VBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbjZCcUM7QUFDQTtBQUNJO0FBR1M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHdCQUF3QixrREFBVTtBQUNsQyxRQUFRLDhDQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHdCQUF3QixrREFBVTtBQUNsQyxlQUFlLDhDQUFNO0FBQ3JCO0FBQ3VEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQzhDO0FBQ1g7QUFDQTtBQUNuQyxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxXQUFXLGlEQUFPO0FBQ2xCO0FBQ3FDO0FBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ087Ozs7Ozs7VUNsRFA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNJO0FBQzlCO0FBQ087QUFDUCxxREFBcUQsT0FBTztBQUM1RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkNBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsY0FBYyxvREFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDLElBQUk7QUFDSixvREFBb0QsT0FBTztBQUMzRDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9saWIvZXNtL2FwaS9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jaGVlcmlvL2xpYi9lc20vYXBpL2Nzcy5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9saWIvZXNtL2FwaS9mb3Jtcy5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9saWIvZXNtL2FwaS9tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbGliL2VzbS9hcGkvdHJhdmVyc2luZy5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9saWIvZXNtL2NoZWVyaW8uanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9saWIvZXNtL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbGliL2VzbS9vcHRpb25zLmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jaGVlcmlvL2xpYi9lc20vcGFyc2UuanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbGliL2VzbS9wYXJzZXJzL3BhcnNlNS1hZGFwdGVyLmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jaGVlcmlvL2xpYi9lc20vc3RhdGljLmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jaGVlcmlvL2xpYi9lc20vdHlwZXMuanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbGliL2VzbS91dGlscy5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9ub2RlX21vZHVsZXMvZG9tLXNlcmlhbGl6ZXIvbGliL2VzbS9mb3JlaWduTmFtZXMuanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbm9kZV9tb2R1bGVzL2RvbS1zZXJpYWxpemVyL2xpYi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9ub2RlX21vZHVsZXMvZG9taGFuZGxlci9saWIvZXNtL25vZGUuanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9lc20vZmVlZHMuanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9lc20vaGVscGVycy5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL2VzbS9sZWdhY3kuanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2xpYi9lc20vbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jaGVlcmlvL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvZXNtL3F1ZXJ5aW5nLmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jaGVlcmlvL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvZXNtL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL2VzbS90cmF2ZXJzYWwuanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9lc20vZGVjb2RlLmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jaGVlcmlvL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZXNtL2RlY29kZV9jb2RlcG9pbnQuanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9lc20vZW5jb2RlLmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jaGVlcmlvL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZXNtL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2VzbS9nZW5lcmF0ZWQvZGVjb2RlLWRhdGEtaHRtbC5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2VzbS9nZW5lcmF0ZWQvZGVjb2RlLWRhdGEteG1sLmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jaGVlcmlvL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZXNtL2dlbmVyYXRlZC9lbmNvZGUtaHRtbC5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY2hlZXJpby9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL2VzbS9QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vcHJvdGVpbi1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2NoZWVyaW8vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9lc20vVG9rZW5pemVyLmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jaGVlcmlvL25vZGVfbW9kdWxlcy9odG1scGFyc2VyMi9saWIvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9kb21lbGVtZW50dHlwZS9saWIvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm90ZWluLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb3RlaW4tY2FsY3VsYXRvci8uL3NyYy9zY3JhcGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1ldGhvZHMgZm9yIGdldHRpbmcgYW5kIG1vZGlmeWluZyBhdHRyaWJ1dGVzLlxuICpcbiAqIEBtb2R1bGUgY2hlZXJpby9hdHRyaWJ1dGVzXG4gKi9cbmltcG9ydCB7IHRleHQgfSBmcm9tICcuLi9zdGF0aWMuanMnO1xuaW1wb3J0IHsgaXNUYWcsIGRvbUVhY2gsIGNhbWVsQ2FzZSwgY3NzQ2FzZSB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IGlubmVyVGV4dCwgdGV4dENvbnRlbnQgfSBmcm9tICdkb211dGlscyc7XG5jb25zdCBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuY29uc3QgcnNwYWNlID0gL1xccysvO1xuY29uc3QgZGF0YUF0dHJQcmVmaXggPSAnZGF0YS0nO1xuLypcbiAqIExvb2t1cCB0YWJsZSBmb3IgY29lcmNpbmcgc3RyaW5nIGRhdGEtKiBhdHRyaWJ1dGVzIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmdcbiAqIEphdmFTY3JpcHQgcHJpbWl0aXZlc1xuICovXG5jb25zdCBwcmltaXRpdmVzID0ge1xuICAgIG51bGw6IG51bGwsXG4gICAgdHJ1ZTogdHJ1ZSxcbiAgICBmYWxzZTogZmFsc2UsXG59O1xuLy8gQXR0cmlidXRlcyB0aGF0IGFyZSBib29sZWFuc1xuY29uc3QgcmJvb2xlYW4gPSAvXig/OmF1dG9mb2N1c3xhdXRvcGxheXxhc3luY3xjaGVja2VkfGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkfHNlbGVjdGVkKSQvaTtcbi8vIE1hdGNoZXMgc3RyaW5ncyB0aGF0IGxvb2sgbGlrZSBKU09OIG9iamVjdHMgb3IgYXJyYXlzXG5jb25zdCByYnJhY2UgPSAvXntbXl0qfSR8XlxcW1teXSpdJC87XG5mdW5jdGlvbiBnZXRBdHRyKGVsZW0sIG5hbWUsIHhtbE1vZGUpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCFlbGVtIHx8ICFpc1RhZyhlbGVtKSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAoX2EgPSBlbGVtLmF0dHJpYnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChlbGVtLmF0dHJpYnMgPSB7fSk7XG4gICAgLy8gUmV0dXJuIHRoZSBlbnRpcmUgYXR0cmlicyBvYmplY3QgaWYgbm8gYXR0cmlidXRlIHNwZWNpZmllZFxuICAgIGlmICghbmFtZSkge1xuICAgICAgICByZXR1cm4gZWxlbS5hdHRyaWJzO1xuICAgIH1cbiAgICBpZiAoaGFzT3duLmNhbGwoZWxlbS5hdHRyaWJzLCBuYW1lKSkge1xuICAgICAgICAvLyBHZXQgdGhlIChkZWNvZGVkKSBhdHRyaWJ1dGVcbiAgICAgICAgcmV0dXJuICF4bWxNb2RlICYmIHJib29sZWFuLnRlc3QobmFtZSkgPyBuYW1lIDogZWxlbS5hdHRyaWJzW25hbWVdO1xuICAgIH1cbiAgICAvLyBNaW1pYyB0aGUgRE9NIGFuZCByZXR1cm4gdGV4dCBjb250ZW50IGFzIHZhbHVlIGZvciBgb3B0aW9uJ3NgXG4gICAgaWYgKGVsZW0ubmFtZSA9PT0gJ29wdGlvbicgJiYgbmFtZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICByZXR1cm4gdGV4dChlbGVtLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gTWltaWMgRE9NIHdpdGggZGVmYXVsdCB2YWx1ZSBmb3IgcmFkaW9zL2NoZWNrYm94ZXNcbiAgICBpZiAoZWxlbS5uYW1lID09PSAnaW5wdXQnICYmXG4gICAgICAgIChlbGVtLmF0dHJpYnNbJ3R5cGUnXSA9PT0gJ3JhZGlvJyB8fCBlbGVtLmF0dHJpYnNbJ3R5cGUnXSA9PT0gJ2NoZWNrYm94JykgJiZcbiAgICAgICAgbmFtZSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICByZXR1cm4gJ29uJztcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbi8qKlxuICogU2V0cyB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlLiBUaGUgYXR0cmlidXRlIHdpbGwgYmUgZGVsZXRlZCBpZiB0aGUgdmFsdWUgaXMgYG51bGxgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gZWwgLSBUaGUgZWxlbWVudCB0byBzZXQgdGhlIGF0dHJpYnV0ZSBvbi5cbiAqIEBwYXJhbSBuYW1lIC0gVGhlIGF0dHJpYnV0ZSdzIG5hbWUuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgYXR0cmlidXRlJ3MgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHNldEF0dHIoZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJlbW92ZUF0dHJpYnV0ZShlbCwgbmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbC5hdHRyaWJzW25hbWVdID0gYCR7dmFsdWV9YDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXR0cihuYW1lLCB2YWx1ZSkge1xuICAgIC8vIFNldCB0aGUgdmFsdWUgKHdpdGggYXR0ciBtYXAgc3VwcG9ydClcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnIHx8IHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgY29tYmluYXRpb24gb2YgYXJndW1lbnRzLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb21FYWNoKHRoaXMsIChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc1RhZyhlbCkpXG4gICAgICAgICAgICAgICAgICAgIHNldEF0dHIoZWwsIG5hbWUsIHZhbHVlLmNhbGwoZWwsIGksIGVsLmF0dHJpYnNbbmFtZV0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb21FYWNoKHRoaXMsIChlbCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc1RhZyhlbCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG5hbWUpLmZvckVhY2goKG9iak5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqVmFsdWUgPSBuYW1lW29iak5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBzZXRBdHRyKGVsLCBvYmpOYW1lLCBvYmpWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRBdHRyKGVsLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgICAgPyB0aGlzXG4gICAgICAgIDogZ2V0QXR0cih0aGlzWzBdLCBuYW1lLCB0aGlzLm9wdGlvbnMueG1sTW9kZSk7XG59XG4vKipcbiAqIEdldHMgYSBub2RlJ3MgcHJvcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEF0dHJpYnV0ZXNcbiAqIEBwYXJhbSBlbCAtIEVsZW1lbnQgdG8gZ2V0IHRoZSBwcm9wIG9mLlxuICogQHBhcmFtIG5hbWUgLSBOYW1lIG9mIHRoZSBwcm9wLlxuICogQHJldHVybnMgVGhlIHByb3AncyB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcChlbCwgbmFtZSwgeG1sTW9kZSkge1xuICAgIHJldHVybiBuYW1lIGluIGVsXG4gICAgICAgID8gLy8gQHRzLWV4cGVjdC1lcnJvciBUUyBkb2Vzbid0IGxpa2UgdXMgYWNjZXNzaW5nIHRoZSB2YWx1ZSBkaXJlY3RseSBoZXJlLlxuICAgICAgICAgICAgZWxbbmFtZV1cbiAgICAgICAgOiAheG1sTW9kZSAmJiByYm9vbGVhbi50ZXN0KG5hbWUpXG4gICAgICAgICAgICA/IGdldEF0dHIoZWwsIG5hbWUsIGZhbHNlKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA6IGdldEF0dHIoZWwsIG5hbWUsIHhtbE1vZGUpO1xufVxuLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHByb3AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBlbCAtIFRoZSBlbGVtZW50IHRvIHNldCB0aGUgcHJvcCBvbi5cbiAqIEBwYXJhbSBuYW1lIC0gVGhlIHByb3AncyBuYW1lLlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHByb3AncyB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2V0UHJvcChlbCwgbmFtZSwgdmFsdWUsIHhtbE1vZGUpIHtcbiAgICBpZiAobmFtZSBpbiBlbCkge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIE92ZXJyaWRpbmcgdmFsdWVcbiAgICAgICAgZWxbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldEF0dHIoZWwsIG5hbWUsICF4bWxNb2RlICYmIHJib29sZWFuLnRlc3QobmFtZSkgPyAodmFsdWUgPyAnJyA6IG51bGwpIDogYCR7dmFsdWV9YCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHByb3AobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpc1swXTtcbiAgICAgICAgaWYgKCFlbCB8fCAhaXNUYWcoZWwpKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdzdHlsZSc6IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuY3NzKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlbaV0gPSBwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHByb3BlcnR5Lmxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3RhZ05hbWUnOlxuICAgICAgICAgICAgY2FzZSAnbm9kZU5hbWUnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2hyZWYnOlxuICAgICAgICAgICAgY2FzZSAnc3JjJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSAoX2EgPSBlbC5hdHRyaWJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbbmFtZV07XG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zICovXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBVUkwgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgICAgICgobmFtZSA9PT0gJ2hyZWYnICYmIChlbC50YWdOYW1lID09PSAnYScgfHwgZWwubmFtZSA9PT0gJ2xpbmsnKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChuYW1lID09PSAnc3JjJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlbC50YWdOYW1lID09PSAnaW1nJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50YWdOYW1lID09PSAnaWZyYW1lJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50YWdOYW1lID09PSAnYXVkaW8nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRhZ05hbWUgPT09ICd2aWRlbycgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudGFnTmFtZSA9PT0gJ3NvdXJjZScpKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5iYXNlVVJJKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVVJMKHByb3AsIHRoaXMub3B0aW9ucy5iYXNlVVJJKS5ocmVmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGlucyAqL1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnaW5uZXJUZXh0Jzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbm5lclRleHQoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAndGV4dENvbnRlbnQnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHRDb250ZW50KGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ291dGVySFRNTCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS53cmFwKCc8Y29udGFpbmVyIC8+JykucGFyZW50KCkuaHRtbCgpO1xuICAgICAgICAgICAgY2FzZSAnaW5uZXJIVE1MJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5odG1sKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRQcm9wKGVsLCBuYW1lLCB0aGlzLm9wdGlvbnMueG1sTW9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBjb21iaW5hdGlvbiBvZiBhcmd1bWVudHMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG9tRWFjaCh0aGlzLCAoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNUYWcoZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFByb3AoZWwsIG5hbWUsIHZhbHVlLmNhbGwoZWwsIGksIGdldFByb3AoZWwsIG5hbWUsIHRoaXMub3B0aW9ucy54bWxNb2RlKSksIHRoaXMub3B0aW9ucy54bWxNb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9tRWFjaCh0aGlzLCAoZWwpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNUYWcoZWwpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhuYW1lKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbmFtZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wKGVsLCBrZXksIHZhbCwgdGhpcy5vcHRpb25zLnhtbE1vZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UHJvcChlbCwgbmFtZSwgdmFsdWUsIHRoaXMub3B0aW9ucy54bWxNb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG4vKipcbiAqIFNldHMgdGhlIHZhbHVlIG9mIGEgZGF0YSBhdHRyaWJ1dGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBlbCAtIFRoZSBlbGVtZW50IHRvIHNldCB0aGUgZGF0YSBhdHRyaWJ1dGUgb24uXG4gKiBAcGFyYW0gbmFtZSAtIFRoZSBkYXRhIGF0dHJpYnV0ZSdzIG5hbWUuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgZGF0YSBhdHRyaWJ1dGUncyB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2V0RGF0YShlbCwgbmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZWxlbSA9IGVsO1xuICAgIChfYSA9IGVsZW0uZGF0YSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKGVsZW0uZGF0YSA9IHt9KTtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKVxuICAgICAgICBPYmplY3QuYXNzaWduKGVsZW0uZGF0YSwgbmFtZSk7XG4gICAgZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZWxlbS5kYXRhW25hbWVdID0gdmFsdWU7XG4gICAgfVxufVxuLyoqXG4gKiBSZWFkIHRoZSBzcGVjaWZpZWQgYXR0cmlidXRlIGZyb20gdGhlIGVxdWl2YWxlbnQgSFRNTDUgYGRhdGEtKmAgYXR0cmlidXRlLFxuICogYW5kIChpZiBwcmVzZW50KSBjYWNoZSB0aGUgdmFsdWUgaW4gdGhlIG5vZGUncyBpbnRlcm5hbCBkYXRhIHN0b3JlLiBJZiBub1xuICogYXR0cmlidXRlIG5hbWUgaXMgc3BlY2lmaWVkLCByZWFkIF9hbGxfIEhUTUw1IGBkYXRhLSpgIGF0dHJpYnV0ZXMgaW4gdGhpcyBtYW5uZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBBdHRyaWJ1dGVzXG4gKiBAcGFyYW0gZWwgLSBFbGVtZW50IHRvIGdldCB0aGUgZGF0YSBhdHRyaWJ1dGUgb2YuXG4gKiBAcGFyYW0gbmFtZSAtIE5hbWUgb2YgdGhlIGRhdGEgYXR0cmlidXRlLlxuICogQHJldHVybnMgVGhlIGRhdGEgYXR0cmlidXRlJ3MgdmFsdWUsIG9yIGEgbWFwIHdpdGggYWxsIG9mIHRoZSBkYXRhIGF0dHJpYnV0ZXMuXG4gKi9cbmZ1bmN0aW9uIHJlYWREYXRhKGVsLCBuYW1lKSB7XG4gICAgbGV0IGRvbU5hbWVzO1xuICAgIGxldCBqc05hbWVzO1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgIGRvbU5hbWVzID0gT2JqZWN0LmtleXMoZWwuYXR0cmlicykuZmlsdGVyKChhdHRyTmFtZSkgPT4gYXR0ck5hbWUuc3RhcnRzV2l0aChkYXRhQXR0clByZWZpeCkpO1xuICAgICAgICBqc05hbWVzID0gZG9tTmFtZXMubWFwKChkb21OYW1lKSA9PiBjYW1lbENhc2UoZG9tTmFtZS5zbGljZShkYXRhQXR0clByZWZpeC5sZW5ndGgpKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb21OYW1lcyA9IFtkYXRhQXR0clByZWZpeCArIGNzc0Nhc2UobmFtZSldO1xuICAgICAgICBqc05hbWVzID0gW25hbWVdO1xuICAgIH1cbiAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBkb21OYW1lcy5sZW5ndGg7ICsraWR4KSB7XG4gICAgICAgIGNvbnN0IGRvbU5hbWUgPSBkb21OYW1lc1tpZHhdO1xuICAgICAgICBjb25zdCBqc05hbWUgPSBqc05hbWVzW2lkeF07XG4gICAgICAgIGlmIChoYXNPd24uY2FsbChlbC5hdHRyaWJzLCBkb21OYW1lKSAmJlxuICAgICAgICAgICAgIWhhc093bi5jYWxsKGVsLmRhdGEsIGpzTmFtZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZWwuYXR0cmlic1tkb21OYW1lXTtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChwcmltaXRpdmVzLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHByaW1pdGl2ZXNbdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IFN0cmluZyhOdW1iZXIodmFsdWUpKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJicmFjZS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIElnbm9yZSAqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsLmRhdGFbanNOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuYW1lID09IG51bGwgPyBlbC5kYXRhIDogdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZGF0YShuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBlbGVtID0gdGhpc1swXTtcbiAgICBpZiAoIWVsZW0gfHwgIWlzVGFnKGVsZW0pKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZGF0YUVsID0gZWxlbTtcbiAgICAoX2EgPSBkYXRhRWwuZGF0YSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKGRhdGFFbC5kYXRhID0ge30pO1xuICAgIC8vIFJldHVybiB0aGUgZW50aXJlIGRhdGEgb2JqZWN0IGlmIG5vIGRhdGEgc3BlY2lmaWVkXG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHJldHVybiByZWFkRGF0YShkYXRhRWwpO1xuICAgIH1cbiAgICAvLyBTZXQgdGhlIHZhbHVlICh3aXRoIGF0dHIgbWFwIHN1cHBvcnQpXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvbUVhY2godGhpcywgKGVsKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUYWcoZWwpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShlbCwgbmFtZSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGVsLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKGhhc093bi5jYWxsKGRhdGFFbC5kYXRhLCBuYW1lKSkge1xuICAgICAgICByZXR1cm4gZGF0YUVsLmRhdGFbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiByZWFkRGF0YShkYXRhRWwsIG5hbWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHZhbCh2YWx1ZSkge1xuICAgIGNvbnN0IHF1ZXJ5aW5nID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMDtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpc1swXTtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIWlzVGFnKGVsZW1lbnQpKVxuICAgICAgICByZXR1cm4gcXVlcnlpbmcgPyB1bmRlZmluZWQgOiB0aGlzO1xuICAgIHN3aXRjaCAoZWxlbWVudC5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQodmFsdWUpO1xuICAgICAgICBjYXNlICdzZWxlY3QnOiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpO1xuICAgICAgICAgICAgaWYgKCFxdWVyeWluZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHIoJ211bHRpcGxlJykgPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZpbmQoJ29wdGlvbicpLnJlbW92ZUF0dHIoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyA/IFt2YWx1ZV0gOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmQoYG9wdGlvblt2YWx1ZT1cIiR7dmFsdWVzW2ldfVwiXWApLmF0dHIoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF0dHIoJ211bHRpcGxlJylcbiAgICAgICAgICAgICAgICA/IG9wdGlvbi50b0FycmF5KCkubWFwKChlbCkgPT4gdGV4dChlbC5jaGlsZHJlbikpXG4gICAgICAgICAgICAgICAgOiBvcHRpb24uYXR0cigndmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgIGNhc2UgJ29wdGlvbic6XG4gICAgICAgICAgICByZXR1cm4gcXVlcnlpbmdcbiAgICAgICAgICAgICAgICA/IHRoaXMuYXR0cigndmFsdWUnKVxuICAgICAgICAgICAgICAgIDogdGhpcy5hdHRyKCd2YWx1ZScsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbi8qKlxuICogUmVtb3ZlIGFuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGVsZW0gLSBOb2RlIHRvIHJlbW92ZSBhdHRyaWJ1dGUgZnJvbS5cbiAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlIHRvIHJlbW92ZS5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKGVsZW0sIG5hbWUpIHtcbiAgICBpZiAoIWVsZW0uYXR0cmlicyB8fCAhaGFzT3duLmNhbGwoZWxlbS5hdHRyaWJzLCBuYW1lKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRlbGV0ZSBlbGVtLmF0dHJpYnNbbmFtZV07XG59XG4vKipcbiAqIFNwbGl0cyBhIHNwYWNlLXNlcGFyYXRlZCBsaXN0IG9mIG5hbWVzIHRvIGluZGl2aWR1YWwgbmFtZXMuXG4gKlxuICogQGNhdGVnb3J5IEF0dHJpYnV0ZXNcbiAqIEBwYXJhbSBuYW1lcyAtIE5hbWVzIHRvIHNwbGl0LlxuICogQHJldHVybnMgLSBTcGxpdCBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gc3BsaXROYW1lcyhuYW1lcykge1xuICAgIHJldHVybiBuYW1lcyA/IG5hbWVzLnRyaW0oKS5zcGxpdChyc3BhY2UpIDogW107XG59XG4vKipcbiAqIE1ldGhvZCBmb3IgcmVtb3ZpbmcgYXR0cmlidXRlcyBieSBgbmFtZWAuXG4gKlxuICogQGNhdGVnb3J5IEF0dHJpYnV0ZXNcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJy5wZWFyJykucmVtb3ZlQXR0cignY2xhc3MnKS5odG1sKCk7XG4gKiAvLz0+IDxsaT5QZWFyPC9saT5cbiAqXG4gKiAkKCcuYXBwbGUnKS5hdHRyKCdpZCcsICdmYXZvcml0ZScpO1xuICogJCgnLmFwcGxlJykucmVtb3ZlQXR0cignaWQgY2xhc3MnKS5odG1sKCk7XG4gKiAvLz0+IDxsaT5BcHBsZTwvbGk+XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gbmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZS5cbiAqIEByZXR1cm5zIFRoZSBpbnN0YW5jZSBpdHNlbGYuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL3JlbW92ZUF0dHIvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXR0cihuYW1lKSB7XG4gICAgY29uc3QgYXR0ck5hbWVzID0gc3BsaXROYW1lcyhuYW1lKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkb21FYWNoKHRoaXMsIChlbGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUYWcoZWxlbSkpXG4gICAgICAgICAgICAgICAgcmVtb3ZlQXR0cmlidXRlKGVsZW0sIGF0dHJOYW1lc1tpXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cbi8qKlxuICogQ2hlY2sgdG8gc2VlIGlmIF9hbnlfIG9mIHRoZSBtYXRjaGVkIGVsZW1lbnRzIGhhdmUgdGhlIGdpdmVuIGBjbGFzc05hbWVgLlxuICpcbiAqIEBjYXRlZ29yeSBBdHRyaWJ1dGVzXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCcucGVhcicpLmhhc0NsYXNzKCdwZWFyJyk7XG4gKiAvLz0+IHRydWVcbiAqXG4gKiAkKCdhcHBsZScpLmhhc0NsYXNzKCdmcnVpdCcpO1xuICogLy89PiBmYWxzZVxuICpcbiAqICQoJ2xpJykuaGFzQ2xhc3MoJ3BlYXInKTtcbiAqIC8vPT4gdHJ1ZVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNsYXNzTmFtZSAtIE5hbWUgb2YgdGhlIGNsYXNzLlxuICogQHJldHVybnMgSW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIHRoZSBnaXZlbiBgY2xhc3NOYW1lYC5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vaGFzQ2xhc3MvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudG9BcnJheSgpLnNvbWUoKGVsZW0pID0+IHtcbiAgICAgICAgY29uc3QgY2xhenogPSBpc1RhZyhlbGVtKSAmJiBlbGVtLmF0dHJpYnNbJ2NsYXNzJ107XG4gICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgaWYgKGNsYXp6ICYmIGNsYXNzTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdoaWxlICgoaWR4ID0gY2xhenouaW5kZXhPZihjbGFzc05hbWUsIGlkeCArIDEpKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gaWR4ICsgY2xhc3NOYW1lLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAoKGlkeCA9PT0gMCB8fCByc3BhY2UudGVzdChjbGF6eltpZHggLSAxXSkpICYmXG4gICAgICAgICAgICAgICAgICAgIChlbmQgPT09IGNsYXp6Lmxlbmd0aCB8fCByc3BhY2UudGVzdChjbGF6eltlbmRdKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn1cbi8qKlxuICogQWRkcyBjbGFzcyhlcykgdG8gYWxsIG9mIHRoZSBtYXRjaGVkIGVsZW1lbnRzLiBBbHNvIGFjY2VwdHMgYSBgZnVuY3Rpb25gLlxuICpcbiAqIEBjYXRlZ29yeSBBdHRyaWJ1dGVzXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCcucGVhcicpLmFkZENsYXNzKCdmcnVpdCcpLmh0bWwoKTtcbiAqIC8vPT4gPGxpIGNsYXNzPVwicGVhciBmcnVpdFwiPlBlYXI8L2xpPlxuICpcbiAqICQoJy5hcHBsZScpLmFkZENsYXNzKCdmcnVpdCByZWQnKS5odG1sKCk7XG4gKiAvLz0+IDxsaSBjbGFzcz1cImFwcGxlIGZydWl0IHJlZFwiPkFwcGxlPC9saT5cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIE5hbWUgb2YgbmV3IGNsYXNzLlxuICogQHJldHVybnMgVGhlIGluc3RhbmNlIGl0c2VsZi5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vYWRkQ2xhc3MvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3ModmFsdWUpIHtcbiAgICAvLyBTdXBwb3J0IGZ1bmN0aW9uc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGRvbUVhY2godGhpcywgKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUYWcoZWwpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWwuYXR0cmlic1snY2xhc3MnXSB8fCAnJztcbiAgICAgICAgICAgICAgICBhZGRDbGFzcy5jYWxsKFtlbF0sIHZhbHVlLmNhbGwoZWwsIGksIGNsYXNzTmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGlmIG5vIHZhbHVlIG9yIG5vdCBhIHN0cmluZyBvciBmdW5jdGlvblxuICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJylcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHZhbHVlLnNwbGl0KHJzcGFjZSk7XG4gICAgY29uc3QgbnVtRWxlbWVudHMgPSB0aGlzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUVsZW1lbnRzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuICAgICAgICAvLyBJZiBzZWxlY3RlZCBlbGVtZW50IGlzbid0IGEgdGFnLCBtb3ZlIG9uXG4gICAgICAgIGlmICghaXNUYWcoZWwpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIC8vIElmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBjbGFzc2VzIOKAlCBhbHdheXMgc2V0IHhtbE1vZGUgdG8gZmFsc2UgaGVyZSwgYXMgaXQgZG9lc24ndCBtYXR0ZXIgZm9yIGNsYXNzZXNcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZ2V0QXR0cihlbCwgJ2NsYXNzJywgZmFsc2UpO1xuICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgc2V0QXR0cihlbCwgJ2NsYXNzJywgY2xhc3NOYW1lcy5qb2luKCcgJykudHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzZXRDbGFzcyA9IGAgJHtjbGFzc05hbWV9IGA7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjbGFzcyBhbHJlYWR5IGV4aXN0c1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjbGFzc05hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwZW5kQ2xhc3MgPSBgJHtjbGFzc05hbWVzW2pdfSBgO1xuICAgICAgICAgICAgICAgIGlmICghc2V0Q2xhc3MuaW5jbHVkZXMoYCAke2FwcGVuZENsYXNzfWApKVxuICAgICAgICAgICAgICAgICAgICBzZXRDbGFzcyArPSBhcHBlbmRDbGFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEF0dHIoZWwsICdjbGFzcycsIHNldENsYXNzLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG4vKipcbiAqIFJlbW92ZXMgb25lIG9yIG1vcmUgc3BhY2Utc2VwYXJhdGVkIGNsYXNzZXMgZnJvbSB0aGUgc2VsZWN0ZWQgZWxlbWVudHMuIElmIG5vXG4gKiBgY2xhc3NOYW1lYCBpcyBkZWZpbmVkLCBhbGwgY2xhc3NlcyB3aWxsIGJlIHJlbW92ZWQuIEFsc28gYWNjZXB0cyBhIGBmdW5jdGlvbmAuXG4gKlxuICogQGNhdGVnb3J5IEF0dHJpYnV0ZXNcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJy5wZWFyJykucmVtb3ZlQ2xhc3MoJ3BlYXInKS5odG1sKCk7XG4gKiAvLz0+IDxsaSBjbGFzcz1cIlwiPlBlYXI8L2xpPlxuICpcbiAqICQoJy5hcHBsZScpLmFkZENsYXNzKCdyZWQnKS5yZW1vdmVDbGFzcygpLmh0bWwoKTtcbiAqIC8vPT4gPGxpIGNsYXNzPVwiXCI+QXBwbGU8L2xpPlxuICogYGBgXG4gKlxuICogQHBhcmFtIG5hbWUgLSBOYW1lIG9mIHRoZSBjbGFzcy4gSWYgbm90IHNwZWNpZmllZCwgcmVtb3ZlcyBhbGwgZWxlbWVudHMuXG4gKiBAcmV0dXJucyBUaGUgaW5zdGFuY2UgaXRzZWxmLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9yZW1vdmVDbGFzcy99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhuYW1lKSB7XG4gICAgLy8gSGFuZGxlIGlmIHZhbHVlIGlzIGEgZnVuY3Rpb25cbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGRvbUVhY2godGhpcywgKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUYWcoZWwpKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MuY2FsbChbZWxdLCBuYW1lLmNhbGwoZWwsIGksIGVsLmF0dHJpYnNbJ2NsYXNzJ10gfHwgJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzZXMgPSBzcGxpdE5hbWVzKG5hbWUpO1xuICAgIGNvbnN0IG51bUNsYXNzZXMgPSBjbGFzc2VzLmxlbmd0aDtcbiAgICBjb25zdCByZW1vdmVBbGwgPSBhcmd1bWVudHMubGVuZ3RoID09PSAwO1xuICAgIHJldHVybiBkb21FYWNoKHRoaXMsIChlbCkgPT4ge1xuICAgICAgICBpZiAoIWlzVGFnKGVsKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHJlbW92ZUFsbCkge1xuICAgICAgICAgICAgLy8gU2hvcnQgY2lyY3VpdCB0aGUgcmVtb3ZlIGFsbCBjYXNlIGFzIHRoaXMgaXMgdGhlIG5pY2Ugb25lXG4gICAgICAgICAgICBlbC5hdHRyaWJzWydjbGFzcyddID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlbENsYXNzZXMgPSBzcGxpdE5hbWVzKGVsLmF0dHJpYnNbJ2NsYXNzJ10pO1xuICAgICAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtQ2xhc3NlczsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlbENsYXNzZXMuaW5kZXhPZihjbGFzc2VzW2pdKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbENsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAqIFdlIGhhdmUgdG8gZG8gYW5vdGhlciBwYXNzIHRvIGVuc3VyZSB0aGF0IHRoZXJlIGFyZSBub3QgZHVwbGljYXRlXG4gICAgICAgICAgICAgICAgICAgICAqIGNsYXNzZXMgbGlzdGVkXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyaWJzWydjbGFzcyddID0gZWxDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBBZGQgb3IgcmVtb3ZlIGNsYXNzKGVzKSBmcm9tIHRoZSBtYXRjaGVkIGVsZW1lbnRzLCBkZXBlbmRpbmcgb24gZWl0aGVyIHRoZVxuICogY2xhc3MncyBwcmVzZW5jZSBvciB0aGUgdmFsdWUgb2YgdGhlIHN3aXRjaCBhcmd1bWVudC4gQWxzbyBhY2NlcHRzIGEgYGZ1bmN0aW9uYC5cbiAqXG4gKiBAY2F0ZWdvcnkgQXR0cmlidXRlc1xuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogJCgnLmFwcGxlLmdyZWVuJykudG9nZ2xlQ2xhc3MoJ2ZydWl0IGdyZWVuIHJlZCcpLmh0bWwoKTtcbiAqIC8vPT4gPGxpIGNsYXNzPVwiYXBwbGUgZnJ1aXQgcmVkXCI+QXBwbGU8L2xpPlxuICpcbiAqICQoJy5hcHBsZS5ncmVlbicpLnRvZ2dsZUNsYXNzKCdmcnVpdCBncmVlbiByZWQnLCB0cnVlKS5odG1sKCk7XG4gKiAvLz0+IDxsaSBjbGFzcz1cImFwcGxlIGdyZWVuIGZydWl0IHJlZFwiPkFwcGxlPC9saT5cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIE5hbWUgb2YgdGhlIGNsYXNzLiBDYW4gYWxzbyBiZSBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHN0YXRlVmFsIC0gSWYgc3BlY2lmaWVkIHRoZSBzdGF0ZSBvZiB0aGUgY2xhc3MuXG4gKiBAcmV0dXJucyBUaGUgaW5zdGFuY2UgaXRzZWxmLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS90b2dnbGVDbGFzcy99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDbGFzcyh2YWx1ZSwgc3RhdGVWYWwpIHtcbiAgICAvLyBTdXBwb3J0IGZ1bmN0aW9uc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGRvbUVhY2godGhpcywgKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUYWcoZWwpKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MuY2FsbChbZWxdLCB2YWx1ZS5jYWxsKGVsLCBpLCBlbC5hdHRyaWJzWydjbGFzcyddIHx8ICcnLCBzdGF0ZVZhbCksIHN0YXRlVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFJldHVybiBpZiBubyB2YWx1ZSBvciBub3QgYSBzdHJpbmcgb3IgZnVuY3Rpb25cbiAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSB2YWx1ZS5zcGxpdChyc3BhY2UpO1xuICAgIGNvbnN0IG51bUNsYXNzZXMgPSBjbGFzc05hbWVzLmxlbmd0aDtcbiAgICBjb25zdCBzdGF0ZSA9IHR5cGVvZiBzdGF0ZVZhbCA9PT0gJ2Jvb2xlYW4nID8gKHN0YXRlVmFsID8gMSA6IC0xKSA6IDA7XG4gICAgY29uc3QgbnVtRWxlbWVudHMgPSB0aGlzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUVsZW1lbnRzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuICAgICAgICAvLyBJZiBzZWxlY3RlZCBlbGVtZW50IGlzbid0IGEgdGFnLCBtb3ZlIG9uXG4gICAgICAgIGlmICghaXNUYWcoZWwpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRDbGFzc2VzID0gc3BsaXROYW1lcyhlbC5hdHRyaWJzWydjbGFzcyddKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgY2xhc3MgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1DbGFzc2VzOyBqKyspIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjbGFzcyBuYW1lIGlzIGN1cnJlbnRseSBkZWZpbmVkXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGVsZW1lbnRDbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lc1tqXSk7XG4gICAgICAgICAgICAvLyBBZGQgaWYgc3RhdGVWYWx1ZSA9PT0gdHJ1ZSBvciB3ZSBhcmUgdG9nZ2xpbmcgYW5kIHRoZXJlIGlzIG5vIHZhbHVlXG4gICAgICAgICAgICBpZiAoc3RhdGUgPj0gMCAmJiBpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPD0gMCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJlbW92ZSBidXQgb25seSBpZiB0aGUgaXRlbSBleGlzdHNcbiAgICAgICAgICAgICAgICBlbGVtZW50Q2xhc3Nlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsLmF0dHJpYnNbJ2NsYXNzJ10gPSBlbGVtZW50Q2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXR0cmlidXRlcy5qcy5tYXAiLCJpbXBvcnQgeyBkb21FYWNoLCBpc1RhZyB9IGZyb20gJy4uL3V0aWxzLmpzJztcbi8qKlxuICogU2V0IG11bHRpcGxlIENTUyBwcm9wZXJ0aWVzIGZvciBldmVyeSBtYXRjaGVkIGVsZW1lbnQuXG4gKlxuICogQGNhdGVnb3J5IENTU1xuICogQHBhcmFtIHByb3AgLSBUaGUgbmFtZXMgb2YgdGhlIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gdmFsIC0gVGhlIG5ldyB2YWx1ZXMuXG4gKiBAcmV0dXJucyBUaGUgaW5zdGFuY2UgaXRzZWxmLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9jc3MvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3NzKHByb3AsIHZhbCkge1xuICAgIGlmICgocHJvcCAhPSBudWxsICYmIHZhbCAhPSBudWxsKSB8fFxuICAgICAgICAvLyBXaGVuIGBwcm9wYCBpcyBhIFwicGxhaW5cIiBvYmplY3RcbiAgICAgICAgKHR5cGVvZiBwcm9wID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShwcm9wKSkpIHtcbiAgICAgICAgcmV0dXJuIGRvbUVhY2godGhpcywgKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNUYWcoZWwpKSB7XG4gICAgICAgICAgICAgICAgLy8gYHByb3BgIGNhbid0IGJlIGFuIGFycmF5IGhlcmUgYW55bW9yZS5cbiAgICAgICAgICAgICAgICBzZXRDc3MoZWwsIHByb3AsIHZhbCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGdldENzcyh0aGlzWzBdLCBwcm9wKTtcbn1cbi8qKlxuICogU2V0IHN0eWxlcyBvZiBhbGwgZWxlbWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBlbCAtIEVsZW1lbnQgdG8gc2V0IHN0eWxlIG9mLlxuICogQHBhcmFtIHByb3AgLSBOYW1lIG9mIHByb3BlcnR5LlxuICogQHBhcmFtIHZhbHVlIC0gVmFsdWUgdG8gc2V0IHByb3BlcnR5IHRvLlxuICogQHBhcmFtIGlkeCAtIE9wdGlvbmFsIGluZGV4IHdpdGhpbiB0aGUgc2VsZWN0aW9uLlxuICovXG5mdW5jdGlvbiBzZXRDc3MoZWwsIHByb3AsIHZhbHVlLCBpZHgpIHtcbiAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldENzcyhlbCk7XG4gICAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmNhbGwoZWwsIGlkeCwgc3R5bGVzW3Byb3BdKSA6IHZhbHVlO1xuICAgICAgICBpZiAodmFsID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlc1twcm9wXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3R5bGVzW3Byb3BdID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGVsLmF0dHJpYnNbJ3N0eWxlJ10gPSBzdHJpbmdpZnkoc3R5bGVzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHByb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3ApLmZvckVhY2goKGssIGkpID0+IHtcbiAgICAgICAgICAgIHNldENzcyhlbCwgaywgcHJvcFtrXSwgaSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldENzcyhlbCwgcHJvcCkge1xuICAgIGlmICghZWwgfHwgIWlzVGFnKGVsKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHN0eWxlcyA9IHBhcnNlKGVsLmF0dHJpYnNbJ3N0eWxlJ10pO1xuICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0eWxlc1twcm9wXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcCkpIHtcbiAgICAgICAgY29uc3QgbmV3U3R5bGVzID0ge307XG4gICAgICAgIHByb3AuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0eWxlc1tpdGVtXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3U3R5bGVzW2l0ZW1dID0gc3R5bGVzW2l0ZW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld1N0eWxlcztcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbn1cbi8qKlxuICogU3RyaW5naWZ5IGBvYmpgIHRvIHN0eWxlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IENTU1xuICogQHBhcmFtIG9iaiAtIE9iamVjdCB0byBzdHJpbmdpZnkuXG4gKiBAcmV0dXJucyBUaGUgc2VyaWFsaXplZCBzdHlsZXMuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ2lmeShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKHN0ciwgcHJvcCkgPT4gYCR7c3RyfSR7c3RyID8gJyAnIDogJyd9JHtwcm9wfTogJHtvYmpbcHJvcF19O2AsICcnKTtcbn1cbi8qKlxuICogUGFyc2UgYHN0eWxlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBDU1NcbiAqIEBwYXJhbSBzdHlsZXMgLSBTdHlsZXMgdG8gYmUgcGFyc2VkLlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBzdHlsZXMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0eWxlcykge1xuICAgIHN0eWxlcyA9IChzdHlsZXMgfHwgJycpLnRyaW0oKTtcbiAgICBpZiAoIXN0eWxlcylcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIGxldCBrZXk7XG4gICAgZm9yIChjb25zdCBzdHIgb2Ygc3R5bGVzLnNwbGl0KCc7JykpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0ci5pbmRleE9mKCc6Jyk7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIDosIG9yIGlmIGl0IGlzIHRoZSBmaXJzdC9sYXN0IGNoYXJhY3RlciwgYWRkIHRvIHRoZSBwcmV2aW91cyBpdGVtJ3MgdmFsdWVcbiAgICAgICAgaWYgKG4gPCAxIHx8IG4gPT09IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBjb25zdCB0cmltbWVkID0gc3RyLnRyaW1FbmQoKTtcbiAgICAgICAgICAgIGlmICh0cmltbWVkLmxlbmd0aCA+IDAgJiYga2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSArPSBgOyR7dHJpbW1lZH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAga2V5ID0gc3RyLnNsaWNlKDAsIG4pLnRyaW0oKTtcbiAgICAgICAgICAgIG9ialtrZXldID0gc3RyLnNsaWNlKG4gKyAxKS50cmltKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy5qcy5tYXAiLCJpbXBvcnQgeyBpc1RhZyB9IGZyb20gJy4uL3V0aWxzLmpzJztcbi8qXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzIuMS4zL3NyYy9tYW5pcHVsYXRpb24vdmFyL3JjaGVja2FibGVUeXBlLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzIuMS4zL3NyYy9zZXJpYWxpemUuanNcbiAqL1xuY29uc3Qgc3VibWl0dGFibGVTZWxlY3RvciA9ICdpbnB1dCxzZWxlY3QsdGV4dGFyZWEsa2V5Z2VuJztcbmNvbnN0IHIyMCA9IC8lMjAvZztcbmNvbnN0IHJDUkxGID0gL1xccj9cXG4vZztcbi8qKlxuICogRW5jb2RlIGEgc2V0IG9mIGZvcm0gZWxlbWVudHMgYXMgYSBzdHJpbmcgZm9yIHN1Ym1pc3Npb24uXG4gKlxuICogQGNhdGVnb3J5IEZvcm1zXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCc8Zm9ybT48aW5wdXQgbmFtZT1cImZvb1wiIHZhbHVlPVwiYmFyXCIgLz48L2Zvcm0+Jykuc2VyaWFsaXplKCk7XG4gKiAvLz0+ICdmb289YmFyJ1xuICogYGBgXG4gKlxuICogQHJldHVybnMgVGhlIHNlcmlhbGl6ZWQgZm9ybS5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vc2VyaWFsaXplL31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZSgpIHtcbiAgICAvLyBDb252ZXJ0IGZvcm0gZWxlbWVudHMgaW50byBuYW1lL3ZhbHVlIG9iamVjdHNcbiAgICBjb25zdCBhcnIgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgLy8gU2VyaWFsaXplIGVhY2ggZWxlbWVudCBpbnRvIGEga2V5L3ZhbHVlIHN0cmluZ1xuICAgIGNvbnN0IHJldEFyciA9IGFyci5tYXAoKGRhdGEpID0+IGAke2VuY29kZVVSSUNvbXBvbmVudChkYXRhLm5hbWUpfT0ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhLnZhbHVlKX1gKTtcbiAgICAvLyBSZXR1cm4gdGhlIHJlc3VsdGluZyBzZXJpYWxpemF0aW9uXG4gICAgcmV0dXJuIHJldEFyci5qb2luKCcmJykucmVwbGFjZShyMjAsICcrJyk7XG59XG4vKipcbiAqIEVuY29kZSBhIHNldCBvZiBmb3JtIGVsZW1lbnRzIGFzIGFuIGFycmF5IG9mIG5hbWVzIGFuZCB2YWx1ZXMuXG4gKlxuICogQGNhdGVnb3J5IEZvcm1zXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCc8Zm9ybT48aW5wdXQgbmFtZT1cImZvb1wiIHZhbHVlPVwiYmFyXCIgLz48L2Zvcm0+Jykuc2VyaWFsaXplQXJyYXkoKTtcbiAqIC8vPT4gWyB7IG5hbWU6ICdmb28nLCB2YWx1ZTogJ2JhcicgfSBdXG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJucyBUaGUgc2VyaWFsaXplZCBmb3JtLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9zZXJpYWxpemVBcnJheS99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVBcnJheSgpIHtcbiAgICAvLyBSZXNvbHZlIGFsbCBmb3JtIGVsZW1lbnRzIGZyb20gZWl0aGVyIGZvcm1zIG9yIGNvbGxlY3Rpb25zIG9mIGZvcm0gZWxlbWVudHNcbiAgICByZXR1cm4gdGhpcy5tYXAoKF8sIGVsZW0pID0+IHtcbiAgICAgICAgY29uc3QgJGVsZW0gPSB0aGlzLl9tYWtlKGVsZW0pO1xuICAgICAgICBpZiAoaXNUYWcoZWxlbSkgJiYgZWxlbS5uYW1lID09PSAnZm9ybScpIHtcbiAgICAgICAgICAgIHJldHVybiAkZWxlbS5maW5kKHN1Ym1pdHRhYmxlU2VsZWN0b3IpLnRvQXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJGVsZW0uZmlsdGVyKHN1Ym1pdHRhYmxlU2VsZWN0b3IpLnRvQXJyYXkoKTtcbiAgICB9KVxuICAgICAgICAuZmlsdGVyKFxuICAgIC8vIFZlcmlmeSBlbGVtZW50cyBoYXZlIGEgbmFtZSAoYGF0dHIubmFtZWApIGFuZCBhcmUgbm90IGRpc2FibGVkIChgOmVuYWJsZWRgKVxuICAgICdbbmFtZSE9XCJcIl06ZW5hYmxlZCcgK1xuICAgICAgICAvLyBBbmQgY2Fubm90IGJlIGNsaWNrZWQgKGBbdHlwZT1zdWJtaXRdYCkgb3IgYXJlIHVzZWQgaW4gYHgtd3d3LWZvcm0tdXJsZW5jb2RlZGAgKGBbdHlwZT1maWxlXWApXG4gICAgICAgICc6bm90KDpzdWJtaXQsIDpidXR0b24sIDppbWFnZSwgOnJlc2V0LCA6ZmlsZSknICtcbiAgICAgICAgLy8gQW5kIGFyZSBlaXRoZXIgY2hlY2tlZC9kb24ndCBoYXZlIGEgY2hlY2thYmxlIHN0YXRlXG4gICAgICAgICc6bWF0Y2hlcyhbY2hlY2tlZF0sIDpub3QoOmNoZWNrYm94LCA6cmFkaW8pKSdcbiAgICAvLyBDb252ZXJ0IGVhY2ggb2YgdGhlIGVsZW1lbnRzIHRvIGl0cyB2YWx1ZShzKVxuICAgIClcbiAgICAgICAgLm1hcCgoXywgZWxlbSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0ICRlbGVtID0gdGhpcy5fbWFrZShlbGVtKTtcbiAgICAgICAgY29uc3QgbmFtZSA9ICRlbGVtLmF0dHIoJ25hbWUnKTsgLy8gV2UgaGF2ZSBmaWx0ZXJlZCBmb3IgZWxlbWVudHMgd2l0aCBhIG5hbWUgYmVmb3JlLlxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyB2YWx1ZSBzZXQgKGUuZy4gYHVuZGVmaW5lZGAsIGBudWxsYCksIHRoZW4gZGVmYXVsdCB2YWx1ZSB0byBlbXB0eVxuICAgICAgICBjb25zdCB2YWx1ZSA9IChfYSA9ICRlbGVtLnZhbCgpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBhcnJheSBvZiB2YWx1ZXMgKGUuZy4gYDxzZWxlY3QgbXVsdGlwbGU+YCksIHJldHVybiBhbiBhcnJheSBvZiBrZXkvdmFsdWUgcGFpcnNcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKCh2YWwpID0+IFxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIFdlIHRyaW0gcmVwbGFjZSBhbnkgbGluZSBlbmRpbmdzIChlLmcuIGBcXHJgIG9yIGBcXHJcXG5gIHdpdGggYFxcclxcbmApIHRvIGd1YXJhbnRlZSBjb25zaXN0ZW5jeSBhY3Jvc3MgcGxhdGZvcm1zXG4gICAgICAgICAgICAgKiBUaGVzZSBjYW4gb2NjdXIgaW5zaWRlIG9mIGA8dGV4dGFyZWE+J3NgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICh7IG5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZShyQ1JMRiwgJ1xcclxcbicpIH0pKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UgKGUuZy4gYDxpbnB1dCB0eXBlPVwidGV4dFwiPmAsIHJldHVybiBvbmx5IG9uZSBrZXkvdmFsdWUgcGFpclxuICAgICAgICByZXR1cm4geyBuYW1lLCB2YWx1ZTogdmFsdWUucmVwbGFjZShyQ1JMRiwgJ1xcclxcbicpIH07XG4gICAgfSlcbiAgICAgICAgLnRvQXJyYXkoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1zLmpzLm1hcCIsIi8qKlxuICogTWV0aG9kcyBmb3IgbW9kaWZ5aW5nIHRoZSBET00gc3RydWN0dXJlLlxuICpcbiAqIEBtb2R1bGUgY2hlZXJpby9tYW5pcHVsYXRpb25cbiAqL1xuaW1wb3J0IHsgVGV4dCwgaGFzQ2hpbGRyZW4gfSBmcm9tICdkb21oYW5kbGVyJztcbmltcG9ydCB7IHVwZGF0ZSBhcyB1cGRhdGVET00gfSBmcm9tICcuLi9wYXJzZS5qcyc7XG5pbXBvcnQgeyB0ZXh0IGFzIHN0YXRpY1RleHQgfSBmcm9tICcuLi9zdGF0aWMuanMnO1xuaW1wb3J0IHsgZG9tRWFjaCwgY2xvbmVEb20sIGlzVGFnLCBpc0h0bWwsIGlzQ2hlZXJpbyB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHJlbW92ZUVsZW1lbnQgfSBmcm9tICdkb211dGlscyc7XG4vKipcbiAqIENyZWF0ZSBhbiBhcnJheSBvZiBub2RlcywgcmVjdXJzaW5nIGludG8gYXJyYXlzIGFuZCBwYXJzaW5nIHN0cmluZ3MgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgTWFuaXB1bGF0aW9uXG4gKiBAcGFyYW0gZWxlbSAtIEVsZW1lbnRzIHRvIG1ha2UgYW4gYXJyYXkgb2YuXG4gKiBAcGFyYW0gY2xvbmUgLSBPcHRpb25hbGx5IGNsb25lIG5vZGVzLlxuICogQHJldHVybnMgVGhlIGFycmF5IG9mIG5vZGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gX21ha2VEb21BcnJheShlbGVtLCBjbG9uZSkge1xuICAgIGlmIChlbGVtID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAoaXNDaGVlcmlvKGVsZW0pKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSA/IGNsb25lRG9tKGVsZW0uZ2V0KCkpIDogZWxlbS5nZXQoKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbSkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW0ucmVkdWNlKChuZXdFbGVtcywgZWwpID0+IG5ld0VsZW1zLmNvbmNhdCh0aGlzLl9tYWtlRG9tQXJyYXkoZWwsIGNsb25lKSksIFtdKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyc2UoZWxlbSwgdGhpcy5vcHRpb25zLCBmYWxzZSwgbnVsbCkuY2hpbGRyZW47XG4gICAgfVxuICAgIHJldHVybiBjbG9uZSA/IGNsb25lRG9tKFtlbGVtXSkgOiBbZWxlbV07XG59XG5mdW5jdGlvbiBfaW5zZXJ0KGNvbmNhdGVuYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uZWxlbXMpIHtcbiAgICAgICAgY29uc3QgbGFzdElkeCA9IHRoaXMubGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIGRvbUVhY2godGhpcywgKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKGVsKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBkb21TcmMgPSB0eXBlb2YgZWxlbXNbMF0gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IGVsZW1zWzBdLmNhbGwoZWwsIGksIHRoaXMuX3JlbmRlcihlbC5jaGlsZHJlbikpXG4gICAgICAgICAgICAgICAgOiBlbGVtcztcbiAgICAgICAgICAgIGNvbnN0IGRvbSA9IHRoaXMuX21ha2VEb21BcnJheShkb21TcmMsIGkgPCBsYXN0SWR4KTtcbiAgICAgICAgICAgIGNvbmNhdGVuYXRvcihkb20sIGVsLmNoaWxkcmVuLCBlbCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG4vKipcbiAqIE1vZGlmeSBhbiBhcnJheSBpbi1wbGFjZSwgcmVtb3Zpbmcgc29tZSBudW1iZXIgb2YgZWxlbWVudHMgYW5kIGFkZGluZyBuZXdcbiAqIGVsZW1lbnRzIGRpcmVjdGx5IGZvbGxvd2luZyB0aGVtLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgTWFuaXB1bGF0aW9uXG4gKiBAcGFyYW0gYXJyYXkgLSBUYXJnZXQgYXJyYXkgdG8gc3BsaWNlLlxuICogQHBhcmFtIHNwbGljZUlkeCAtIEluZGV4IGF0IHdoaWNoIHRvIGJlZ2luIGNoYW5naW5nIHRoZSBhcnJheS5cbiAqIEBwYXJhbSBzcGxpY2VDb3VudCAtIE51bWJlciBvZiBlbGVtZW50cyB0byByZW1vdmUgZnJvbSB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gbmV3RWxlbXMgLSBFbGVtZW50cyB0byBpbnNlcnQgaW50byB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gcGFyZW50IC0gVGhlIHBhcmVudCBvZiB0aGUgbm9kZS5cbiAqIEByZXR1cm5zIFRoZSBzcGxpY2VkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmlxdWVTcGxpY2UoYXJyYXksIHNwbGljZUlkeCwgc3BsaWNlQ291bnQsIG5ld0VsZW1zLCBwYXJlbnQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHNwbGljZUFyZ3MgPSBbXG4gICAgICAgIHNwbGljZUlkeCxcbiAgICAgICAgc3BsaWNlQ291bnQsXG4gICAgICAgIC4uLm5ld0VsZW1zLFxuICAgIF07XG4gICAgY29uc3QgcHJldiA9IHNwbGljZUlkeCA9PT0gMCA/IG51bGwgOiBhcnJheVtzcGxpY2VJZHggLSAxXTtcbiAgICBjb25zdCBuZXh0ID0gc3BsaWNlSWR4ICsgc3BsaWNlQ291bnQgPj0gYXJyYXkubGVuZ3RoXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IGFycmF5W3NwbGljZUlkeCArIHNwbGljZUNvdW50XTtcbiAgICAvKlxuICAgICAqIEJlZm9yZSBzcGxpY2luZyBpbiBuZXcgZWxlbWVudHMsIGVuc3VyZSB0aGV5IGRvIG5vdCBhbHJlYWR5IGFwcGVhciBpbiB0aGVcbiAgICAgKiBjdXJyZW50IGFycmF5LlxuICAgICAqL1xuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IG5ld0VsZW1zLmxlbmd0aDsgKytpZHgpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ld0VsZW1zW2lkeF07XG4gICAgICAgIGNvbnN0IG9sZFBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICBpZiAob2xkUGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBvbGRTaWJsaW5ncyA9IG9sZFBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IHByZXZJZHggPSBvbGRTaWJsaW5ncy5pbmRleE9mKG5vZGUpO1xuICAgICAgICAgICAgaWYgKHByZXZJZHggPiAtMSkge1xuICAgICAgICAgICAgICAgIG9sZFBhcmVudC5jaGlsZHJlbi5zcGxpY2UocHJldklkeCwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCA9PT0gb2xkUGFyZW50ICYmIHNwbGljZUlkeCA+IHByZXZJZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaWNlQXJnc1swXS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgaWYgKG5vZGUucHJldikge1xuICAgICAgICAgICAgbm9kZS5wcmV2Lm5leHQgPSAoX2EgPSBub2RlLm5leHQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUubmV4dCkge1xuICAgICAgICAgICAgbm9kZS5uZXh0LnByZXYgPSAoX2IgPSBub2RlLnByZXYpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5wcmV2ID0gaWR4ID09PSAwID8gcHJldiA6IG5ld0VsZW1zW2lkeCAtIDFdO1xuICAgICAgICBub2RlLm5leHQgPSBpZHggPT09IG5ld0VsZW1zLmxlbmd0aCAtIDEgPyBuZXh0IDogbmV3RWxlbXNbaWR4ICsgMV07XG4gICAgfVxuICAgIGlmIChwcmV2KSB7XG4gICAgICAgIHByZXYubmV4dCA9IG5ld0VsZW1zWzBdO1xuICAgIH1cbiAgICBpZiAobmV4dCkge1xuICAgICAgICBuZXh0LnByZXYgPSBuZXdFbGVtc1tuZXdFbGVtcy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5LnNwbGljZSguLi5zcGxpY2VBcmdzKTtcbn1cbi8qKlxuICogSW5zZXJ0IGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzIHRvIHRoZSBlbmQgb2YgdGhlIHRhcmdldC5cbiAqXG4gKiBAY2F0ZWdvcnkgTWFuaXB1bGF0aW9uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCc8bGkgY2xhc3M9XCJwbHVtXCI+UGx1bTwvbGk+JykuYXBwZW5kVG8oJyNmcnVpdHMnKTtcbiAqICQuaHRtbCgpO1xuICogLy89PiAgPHVsIGlkPVwiZnJ1aXRzXCI+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cImFwcGxlXCI+QXBwbGU8L2xpPlxuICogLy8gICAgICA8bGkgY2xhc3M9XCJvcmFuZ2VcIj5PcmFuZ2U8L2xpPlxuICogLy8gICAgICA8bGkgY2xhc3M9XCJwZWFyXCI+UGVhcjwvbGk+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cInBsdW1cIj5QbHVtPC9saT5cbiAqIC8vICAgIDwvdWw+XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IC0gRWxlbWVudCB0byBhcHBlbmQgZWxlbWVudHMgdG8uXG4gKiBAcmV0dXJucyBUaGUgaW5zdGFuY2UgaXRzZWxmLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9hcHBlbmRUby99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUbyh0YXJnZXQpIHtcbiAgICBjb25zdCBhcHBlbmRUYXJnZXQgPSBpc0NoZWVyaW8odGFyZ2V0KSA/IHRhcmdldCA6IHRoaXMuX21ha2UodGFyZ2V0KTtcbiAgICBhcHBlbmRUYXJnZXQuYXBwZW5kKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xufVxuLyoqXG4gKiBJbnNlcnQgZXZlcnkgZWxlbWVudCBpbiB0aGUgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgdGFyZ2V0LlxuICpcbiAqIEBjYXRlZ29yeSBNYW5pcHVsYXRpb25cbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJzxsaSBjbGFzcz1cInBsdW1cIj5QbHVtPC9saT4nKS5wcmVwZW5kVG8oJyNmcnVpdHMnKTtcbiAqICQuaHRtbCgpO1xuICogLy89PiAgPHVsIGlkPVwiZnJ1aXRzXCI+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cInBsdW1cIj5QbHVtPC9saT5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwiYXBwbGVcIj5BcHBsZTwvbGk+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cIm9yYW5nZVwiPk9yYW5nZTwvbGk+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cInBlYXJcIj5QZWFyPC9saT5cbiAqIC8vICAgIDwvdWw+XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IC0gRWxlbWVudCB0byBwcmVwZW5kIGVsZW1lbnRzIHRvLlxuICogQHJldHVybnMgVGhlIGluc3RhbmNlIGl0c2VsZi5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vcHJlcGVuZFRvL31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmRUbyh0YXJnZXQpIHtcbiAgICBjb25zdCBwcmVwZW5kVGFyZ2V0ID0gaXNDaGVlcmlvKHRhcmdldCkgPyB0YXJnZXQgOiB0aGlzLl9tYWtlKHRhcmdldCk7XG4gICAgcHJlcGVuZFRhcmdldC5wcmVwZW5kKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xufVxuLyoqXG4gKiBJbnNlcnRzIGNvbnRlbnQgYXMgdGhlIF9sYXN0XyBjaGlsZCBvZiBlYWNoIG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50cy5cbiAqXG4gKiBAY2F0ZWdvcnkgTWFuaXB1bGF0aW9uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCd1bCcpLmFwcGVuZCgnPGxpIGNsYXNzPVwicGx1bVwiPlBsdW08L2xpPicpO1xuICogJC5odG1sKCk7XG4gKiAvLz0+ICA8dWwgaWQ9XCJmcnVpdHNcIj5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwiYXBwbGVcIj5BcHBsZTwvbGk+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cIm9yYW5nZVwiPk9yYW5nZTwvbGk+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cInBlYXJcIj5QZWFyPC9saT5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwicGx1bVwiPlBsdW08L2xpPlxuICogLy8gICAgPC91bD5cbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vYXBwZW5kL31cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZCA9IF9pbnNlcnQoKGRvbSwgY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgIHVuaXF1ZVNwbGljZShjaGlsZHJlbiwgY2hpbGRyZW4ubGVuZ3RoLCAwLCBkb20sIHBhcmVudCk7XG59KTtcbi8qKlxuICogSW5zZXJ0cyBjb250ZW50IGFzIHRoZSBfZmlyc3RfIGNoaWxkIG9mIGVhY2ggb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnRzLlxuICpcbiAqIEBjYXRlZ29yeSBNYW5pcHVsYXRpb25cbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJ3VsJykucHJlcGVuZCgnPGxpIGNsYXNzPVwicGx1bVwiPlBsdW08L2xpPicpO1xuICogJC5odG1sKCk7XG4gKiAvLz0+ICA8dWwgaWQ9XCJmcnVpdHNcIj5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwicGx1bVwiPlBsdW08L2xpPlxuICogLy8gICAgICA8bGkgY2xhc3M9XCJhcHBsZVwiPkFwcGxlPC9saT5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwib3JhbmdlXCI+T3JhbmdlPC9saT5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwicGVhclwiPlBlYXI8L2xpPlxuICogLy8gICAgPC91bD5cbiAqIGBgYFxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vcHJlcGVuZC99XG4gKi9cbmV4cG9ydCBjb25zdCBwcmVwZW5kID0gX2luc2VydCgoZG9tLCBjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG4gICAgdW5pcXVlU3BsaWNlKGNoaWxkcmVuLCAwLCAwLCBkb20sIHBhcmVudCk7XG59KTtcbmZ1bmN0aW9uIF93cmFwKGluc2VydCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAod3JhcHBlcikge1xuICAgICAgICBjb25zdCBsYXN0SWR4ID0gdGhpcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBsYXN0UGFyZW50ID0gdGhpcy5wYXJlbnRzKCkubGFzdCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHdyYXAgPSB0eXBlb2Ygd3JhcHBlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gd3JhcHBlci5jYWxsKGVsLCBpLCBlbClcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiB3cmFwcGVyID09PSAnc3RyaW5nJyAmJiAhaXNIdG1sKHdyYXBwZXIpXG4gICAgICAgICAgICAgICAgICAgID8gbGFzdFBhcmVudC5maW5kKHdyYXBwZXIpLmNsb25lKClcbiAgICAgICAgICAgICAgICAgICAgOiB3cmFwcGVyO1xuICAgICAgICAgICAgY29uc3QgW3dyYXBwZXJEb21dID0gdGhpcy5fbWFrZURvbUFycmF5KHdyYXAsIGkgPCBsYXN0SWR4KTtcbiAgICAgICAgICAgIGlmICghd3JhcHBlckRvbSB8fCAhaGFzQ2hpbGRyZW4od3JhcHBlckRvbSkpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBsZXQgZWxJbnNlcnRMb2NhdGlvbiA9IHdyYXBwZXJEb207XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogRmluZCB0aGUgZGVlcGVzdCBjaGlsZC4gT25seSBjb25zaWRlciB0aGUgZmlyc3QgdGFnIGNoaWxkIG9mIGVhY2ggbm9kZVxuICAgICAgICAgICAgICogKGlnbm9yZSB0ZXh0KTsgc3RvcCBpZiBubyBjaGlsZHJlbiBhcmUgZm91bmQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgZWxJbnNlcnRMb2NhdGlvbi5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IGVsSW5zZXJ0TG9jYXRpb24uY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgaWYgKGlzVGFnKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBlbEluc2VydExvY2F0aW9uID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc2VydChlbCwgZWxJbnNlcnRMb2NhdGlvbiwgW3dyYXBwZXJEb21dKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuLyoqXG4gKiBUaGUgLndyYXAoKSBmdW5jdGlvbiBjYW4gdGFrZSBhbnkgc3RyaW5nIG9yIG9iamVjdCB0aGF0IGNvdWxkIGJlIHBhc3NlZCB0b1xuICogdGhlICQoKSBmYWN0b3J5IGZ1bmN0aW9uIHRvIHNwZWNpZnkgYSBET00gc3RydWN0dXJlLiBUaGlzIHN0cnVjdHVyZSBtYXkgYmVcbiAqIG5lc3RlZCBzZXZlcmFsIGxldmVscyBkZWVwLCBidXQgc2hvdWxkIGNvbnRhaW4gb25seSBvbmUgaW5tb3N0IGVsZW1lbnQuIEFcbiAqIGNvcHkgb2YgdGhpcyBzdHJ1Y3R1cmUgd2lsbCBiZSB3cmFwcGVkIGFyb3VuZCBlYWNoIG9mIHRoZSBlbGVtZW50cyBpbiB0aGUgc2V0XG4gKiBvZiBtYXRjaGVkIGVsZW1lbnRzLiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBvcmlnaW5hbCBzZXQgb2YgZWxlbWVudHMgZm9yXG4gKiBjaGFpbmluZyBwdXJwb3Nlcy5cbiAqXG4gKiBAY2F0ZWdvcnkgTWFuaXB1bGF0aW9uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCByZWRGcnVpdCA9ICQoJzxkaXYgY2xhc3M9XCJyZWQtZnJ1aXRcIj48L2Rpdj4nKTtcbiAqICQoJy5hcHBsZScpLndyYXAocmVkRnJ1aXQpO1xuICpcbiAqIC8vPT4gPHVsIGlkPVwiZnJ1aXRzXCI+XG4gKiAvLyAgICAgPGRpdiBjbGFzcz1cInJlZC1mcnVpdFwiPlxuICogLy8gICAgICA8bGkgY2xhc3M9XCJhcHBsZVwiPkFwcGxlPC9saT5cbiAqIC8vICAgICA8L2Rpdj5cbiAqIC8vICAgICA8bGkgY2xhc3M9XCJvcmFuZ2VcIj5PcmFuZ2U8L2xpPlxuICogLy8gICAgIDxsaSBjbGFzcz1cInBsdW1cIj5QbHVtPC9saT5cbiAqIC8vICAgPC91bD5cbiAqXG4gKiBjb25zdCBoZWFsdGh5ID0gJCgnPGRpdiBjbGFzcz1cImhlYWx0aHlcIj48L2Rpdj4nKTtcbiAqICQoJ2xpJykud3JhcChoZWFsdGh5KTtcbiAqXG4gKiAvLz0+IDx1bCBpZD1cImZydWl0c1wiPlxuICogLy8gICAgIDxkaXYgY2xhc3M9XCJoZWFsdGh5XCI+XG4gKiAvLyAgICAgICA8bGkgY2xhc3M9XCJhcHBsZVwiPkFwcGxlPC9saT5cbiAqIC8vICAgICA8L2Rpdj5cbiAqIC8vICAgICA8ZGl2IGNsYXNzPVwiaGVhbHRoeVwiPlxuICogLy8gICAgICAgPGxpIGNsYXNzPVwib3JhbmdlXCI+T3JhbmdlPC9saT5cbiAqIC8vICAgICA8L2Rpdj5cbiAqIC8vICAgICA8ZGl2IGNsYXNzPVwiaGVhbHRoeVwiPlxuICogLy8gICAgICAgIDxsaSBjbGFzcz1cInBsdW1cIj5QbHVtPC9saT5cbiAqIC8vICAgICA8L2Rpdj5cbiAqIC8vICAgPC91bD5cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB3cmFwcGVyIC0gVGhlIERPTSBzdHJ1Y3R1cmUgdG8gd3JhcCBhcm91bmQgZWFjaCBlbGVtZW50IGluIHRoZSBzZWxlY3Rpb24uXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL3dyYXAvfVxuICovXG5leHBvcnQgY29uc3Qgd3JhcCA9IF93cmFwKChlbCwgZWxJbnNlcnRMb2NhdGlvbiwgd3JhcHBlckRvbSkgPT4ge1xuICAgIGNvbnN0IHsgcGFyZW50IH0gPSBlbDtcbiAgICBpZiAoIXBhcmVudClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHNpYmxpbmdzID0gcGFyZW50LmNoaWxkcmVuO1xuICAgIGNvbnN0IGluZGV4ID0gc2libGluZ3MuaW5kZXhPZihlbCk7XG4gICAgdXBkYXRlRE9NKFtlbF0sIGVsSW5zZXJ0TG9jYXRpb24pO1xuICAgIC8qXG4gICAgICogVGhlIHByZXZpb3VzIG9wZXJhdGlvbiByZW1vdmVkIHRoZSBjdXJyZW50IGVsZW1lbnQgZnJvbSB0aGUgYHNpYmxpbmdzYFxuICAgICAqIGFycmF5LCBzbyB0aGUgYGRvbWAgYXJyYXkgY2FuIGJlIGluc2VydGVkIHdpdGhvdXQgcmVtb3ZpbmcgYW55XG4gICAgICogYWRkaXRpb25hbCBlbGVtZW50cy5cbiAgICAgKi9cbiAgICB1bmlxdWVTcGxpY2Uoc2libGluZ3MsIGluZGV4LCAwLCB3cmFwcGVyRG9tLCBwYXJlbnQpO1xufSk7XG4vKipcbiAqIFRoZSAud3JhcElubmVyKCkgZnVuY3Rpb24gY2FuIHRha2UgYW55IHN0cmluZyBvciBvYmplY3QgdGhhdCBjb3VsZCBiZSBwYXNzZWRcbiAqIHRvIHRoZSAkKCkgZmFjdG9yeSBmdW5jdGlvbiB0byBzcGVjaWZ5IGEgRE9NIHN0cnVjdHVyZS4gVGhpcyBzdHJ1Y3R1cmUgbWF5IGJlXG4gKiBuZXN0ZWQgc2V2ZXJhbCBsZXZlbHMgZGVlcCwgYnV0IHNob3VsZCBjb250YWluIG9ubHkgb25lIGlubW9zdCBlbGVtZW50LiBUaGVcbiAqIHN0cnVjdHVyZSB3aWxsIGJlIHdyYXBwZWQgYXJvdW5kIHRoZSBjb250ZW50IG9mIGVhY2ggb2YgdGhlIGVsZW1lbnRzIGluIHRoZVxuICogc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMuXG4gKlxuICogQGNhdGVnb3J5IE1hbmlwdWxhdGlvblxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcmVkRnJ1aXQgPSAkKCc8ZGl2IGNsYXNzPVwicmVkLWZydWl0XCI+PC9kaXY+Jyk7XG4gKiAkKCcuYXBwbGUnKS53cmFwSW5uZXIocmVkRnJ1aXQpO1xuICpcbiAqIC8vPT4gPHVsIGlkPVwiZnJ1aXRzXCI+XG4gKiAvLyAgICAgPGxpIGNsYXNzPVwiYXBwbGVcIj5cbiAqIC8vICAgICAgIDxkaXYgY2xhc3M9XCJyZWQtZnJ1aXRcIj5BcHBsZTwvZGl2PlxuICogLy8gICAgIDwvbGk+XG4gKiAvLyAgICAgPGxpIGNsYXNzPVwib3JhbmdlXCI+T3JhbmdlPC9saT5cbiAqIC8vICAgICA8bGkgY2xhc3M9XCJwZWFyXCI+UGVhcjwvbGk+XG4gKiAvLyAgIDwvdWw+XG4gKlxuICogY29uc3QgaGVhbHRoeSA9ICQoJzxkaXYgY2xhc3M9XCJoZWFsdGh5XCI+PC9kaXY+Jyk7XG4gKiAkKCdsaScpLndyYXBJbm5lcihoZWFsdGh5KTtcbiAqXG4gKiAvLz0+IDx1bCBpZD1cImZydWl0c1wiPlxuICogLy8gICAgIDxsaSBjbGFzcz1cImFwcGxlXCI+XG4gKiAvLyAgICAgICA8ZGl2IGNsYXNzPVwiaGVhbHRoeVwiPkFwcGxlPC9kaXY+XG4gKiAvLyAgICAgPC9saT5cbiAqIC8vICAgICA8bGkgY2xhc3M9XCJvcmFuZ2VcIj5cbiAqIC8vICAgICAgIDxkaXYgY2xhc3M9XCJoZWFsdGh5XCI+T3JhbmdlPC9kaXY+XG4gKiAvLyAgICAgPC9saT5cbiAqIC8vICAgICA8bGkgY2xhc3M9XCJwZWFyXCI+XG4gKiAvLyAgICAgICA8ZGl2IGNsYXNzPVwiaGVhbHRoeVwiPlBlYXI8L2Rpdj5cbiAqIC8vICAgICA8L2xpPlxuICogLy8gICA8L3VsPlxuICogYGBgXG4gKlxuICogQHBhcmFtIHdyYXBwZXIgLSBUaGUgRE9NIHN0cnVjdHVyZSB0byB3cmFwIGFyb3VuZCB0aGUgY29udGVudCBvZiBlYWNoIGVsZW1lbnRcbiAqICAgaW4gdGhlIHNlbGVjdGlvbi5cbiAqIEByZXR1cm5zIFRoZSBpbnN0YW5jZSBpdHNlbGYsIGZvciBjaGFpbmluZy5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vd3JhcElubmVyL31cbiAqL1xuZXhwb3J0IGNvbnN0IHdyYXBJbm5lciA9IF93cmFwKChlbCwgZWxJbnNlcnRMb2NhdGlvbiwgd3JhcHBlckRvbSkgPT4ge1xuICAgIGlmICghaGFzQ2hpbGRyZW4oZWwpKVxuICAgICAgICByZXR1cm47XG4gICAgdXBkYXRlRE9NKGVsLmNoaWxkcmVuLCBlbEluc2VydExvY2F0aW9uKTtcbiAgICB1cGRhdGVET00od3JhcHBlckRvbSwgZWwpO1xufSk7XG4vKipcbiAqIFRoZSAudW53cmFwKCkgZnVuY3Rpb24sIHJlbW92ZXMgdGhlIHBhcmVudHMgb2YgdGhlIHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzXG4gKiBmcm9tIHRoZSBET00sIGxlYXZpbmcgdGhlIG1hdGNoZWQgZWxlbWVudHMgaW4gdGhlaXIgcGxhY2UuXG4gKlxuICogQGNhdGVnb3J5IE1hbmlwdWxhdGlvblxuICogQGV4YW1wbGUgPGNhcHRpb24+d2l0aG91dCBzZWxlY3RvcjwvY2FwdGlvbj5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgJCA9IGNoZWVyaW8ubG9hZChcbiAqICAgJzxkaXYgaWQ9dGVzdD5cXG4gIDxkaXY+PHA+SGVsbG88L3A+PC9kaXY+XFxuICA8ZGl2PjxwPldvcmxkPC9wPjwvZGl2PlxcbjwvZGl2PidcbiAqICk7XG4gKiAkKCcjdGVzdCBwJykudW53cmFwKCk7XG4gKlxuICogLy89PiA8ZGl2IGlkPXRlc3Q+XG4gKiAvLyAgICAgPHA+SGVsbG88L3A+XG4gKiAvLyAgICAgPHA+V29ybGQ8L3A+XG4gKiAvLyAgIDwvZGl2PlxuICogYGBgXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+d2l0aCBzZWxlY3RvcjwvY2FwdGlvbj5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgJCA9IGNoZWVyaW8ubG9hZChcbiAqICAgJzxkaXYgaWQ9dGVzdD5cXG4gIDxwPkhlbGxvPC9wPlxcbiAgPGI+PHA+V29ybGQ8L3A+PC9iPlxcbjwvZGl2PidcbiAqICk7XG4gKiAkKCcjdGVzdCBwJykudW53cmFwKCdiJyk7XG4gKlxuICogLy89PiA8ZGl2IGlkPXRlc3Q+XG4gKiAvLyAgICAgPHA+SGVsbG88L3A+XG4gKiAvLyAgICAgPHA+V29ybGQ8L3A+XG4gKiAvLyAgIDwvZGl2PlxuICogYGBgXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIC0gQSBzZWxlY3RvciB0byBjaGVjayB0aGUgcGFyZW50IGVsZW1lbnQgYWdhaW5zdC4gSWYgYW5cbiAqICAgZWxlbWVudCdzIHBhcmVudCBkb2VzIG5vdCBtYXRjaCB0aGUgc2VsZWN0b3IsIHRoZSBlbGVtZW50IHdvbid0IGJlIHVud3JhcHBlZC5cbiAqIEByZXR1cm5zIFRoZSBpbnN0YW5jZSBpdHNlbGYsIGZvciBjaGFpbmluZy5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vdW53cmFwL31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVud3JhcChzZWxlY3Rvcikge1xuICAgIHRoaXMucGFyZW50KHNlbGVjdG9yKVxuICAgICAgICAubm90KCdib2R5JylcbiAgICAgICAgLmVhY2goKF8sIGVsKSA9PiB7XG4gICAgICAgIHRoaXMuX21ha2UoZWwpLnJlcGxhY2VXaXRoKGVsLmNoaWxkcmVuKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbn1cbi8qKlxuICogVGhlIC53cmFwQWxsKCkgZnVuY3Rpb24gY2FuIHRha2UgYW55IHN0cmluZyBvciBvYmplY3QgdGhhdCBjb3VsZCBiZSBwYXNzZWQgdG9cbiAqIHRoZSAkKCkgZnVuY3Rpb24gdG8gc3BlY2lmeSBhIERPTSBzdHJ1Y3R1cmUuIFRoaXMgc3RydWN0dXJlIG1heSBiZSBuZXN0ZWRcbiAqIHNldmVyYWwgbGV2ZWxzIGRlZXAsIGJ1dCBzaG91bGQgY29udGFpbiBvbmx5IG9uZSBpbm1vc3QgZWxlbWVudC4gVGhlXG4gKiBzdHJ1Y3R1cmUgd2lsbCBiZSB3cmFwcGVkIGFyb3VuZCBhbGwgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBzZXQgb2YgbWF0Y2hlZFxuICogZWxlbWVudHMsIGFzIGEgc2luZ2xlIGdyb3VwLlxuICpcbiAqIEBjYXRlZ29yeSBNYW5pcHVsYXRpb25cbiAqIEBleGFtcGxlIDxjYXB0aW9uPldpdGggbWFya3VwIHBhc3NlZCB0byBgd3JhcEFsbGA8L2NhcHRpb24+XG4gKlxuICogYGBganNcbiAqIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoXG4gKiAgICc8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImlubmVyXCI+Rmlyc3Q8L2Rpdj48ZGl2IGNsYXNzPVwiaW5uZXJcIj5TZWNvbmQ8L2Rpdj48L2Rpdj4nXG4gKiApO1xuICogJCgnLmlubmVyJykud3JhcEFsbChcIjxkaXYgY2xhc3M9J25ldyc+PC9kaXY+XCIpO1xuICpcbiAqIC8vPT4gPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICogLy8gICAgIDxkaXYgY2xhc3M9J25ldyc+XG4gKiAvLyAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5GaXJzdDwvZGl2PlxuICogLy8gICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+U2Vjb25kPC9kaXY+XG4gKiAvLyAgICAgPC9kaXY+XG4gKiAvLyAgIDwvZGl2PlxuICogYGBgXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+V2l0aCBhbiBleGlzdGluZyBjaGVlcmlvIGluc3RhbmNlPC9jYXB0aW9uPlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCAkID0gY2hlZXJpby5sb2FkKFxuICogICAnPHNwYW4+U3BhbiAxPC9zcGFuPjxzdHJvbmc+U3Ryb25nPC9zdHJvbmc+PHNwYW4+U3BhbiAyPC9zcGFuPidcbiAqICk7XG4gKiBjb25zdCB3cmFwID0gJCgnPGRpdj48cD48ZW0+PGI+PC9iPjwvZW0+PC9wPjwvZGl2PicpO1xuICogJCgnc3BhbicpLndyYXBBbGwod3JhcCk7XG4gKlxuICogLy89PiA8ZGl2PlxuICogLy8gICAgIDxwPlxuICogLy8gICAgICAgPGVtPlxuICogLy8gICAgICAgICA8Yj5cbiAqIC8vICAgICAgICAgICA8c3Bhbj5TcGFuIDE8L3NwYW4+XG4gKiAvLyAgICAgICAgICAgPHNwYW4+U3BhbiAyPC9zcGFuPlxuICogLy8gICAgICAgICA8L2I+XG4gKiAvLyAgICAgICA8L2VtPlxuICogLy8gICAgIDwvcD5cbiAqIC8vICAgPC9kaXY+XG4gKiAvLyAgIDxzdHJvbmc+U3Ryb25nPC9zdHJvbmc+XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gd3JhcHBlciAtIFRoZSBET00gc3RydWN0dXJlIHRvIHdyYXAgYXJvdW5kIGFsbCBtYXRjaGVkIGVsZW1lbnRzIGluIHRoZVxuICogICBzZWxlY3Rpb24uXG4gKiBAcmV0dXJucyBUaGUgaW5zdGFuY2UgaXRzZWxmLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS93cmFwQWxsL31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBBbGwod3JhcHBlcikge1xuICAgIGNvbnN0IGVsID0gdGhpc1swXTtcbiAgICBpZiAoZWwpIHtcbiAgICAgICAgY29uc3Qgd3JhcCA9IHRoaXMuX21ha2UodHlwZW9mIHdyYXBwZXIgPT09ICdmdW5jdGlvbicgPyB3cmFwcGVyLmNhbGwoZWwsIDAsIGVsKSA6IHdyYXBwZXIpLmluc2VydEJlZm9yZShlbCk7XG4gICAgICAgIC8vIElmIGh0bWwgaXMgZ2l2ZW4gYXMgd3JhcHBlciwgd3JhcCBtYXkgY29udGFpbiB0ZXh0IGVsZW1lbnRzXG4gICAgICAgIGxldCBlbEluc2VydExvY2F0aW9uO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdyYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh3cmFwW2ldLnR5cGUgPT09ICd0YWcnKVxuICAgICAgICAgICAgICAgIGVsSW5zZXJ0TG9jYXRpb24gPSB3cmFwW2ldO1xuICAgICAgICB9XG4gICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgLypcbiAgICAgICAgICogRmluZCB0aGUgZGVlcGVzdCBjaGlsZC4gT25seSBjb25zaWRlciB0aGUgZmlyc3QgdGFnIGNoaWxkIG9mIGVhY2ggbm9kZVxuICAgICAgICAgKiAoaWdub3JlIHRleHQpOyBzdG9wIGlmIG5vIGNoaWxkcmVuIGFyZSBmb3VuZC5cbiAgICAgICAgICovXG4gICAgICAgIHdoaWxlIChlbEluc2VydExvY2F0aW9uICYmIGogPCBlbEluc2VydExvY2F0aW9uLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBlbEluc2VydExvY2F0aW9uLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICd0YWcnKSB7XG4gICAgICAgICAgICAgICAgZWxJbnNlcnRMb2NhdGlvbiA9IGNoaWxkO1xuICAgICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbEluc2VydExvY2F0aW9uKVxuICAgICAgICAgICAgdGhpcy5fbWFrZShlbEluc2VydExvY2F0aW9uKS5hcHBlbmQodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuLyogZXNsaW50LWRpc2FibGUganNkb2MvY2hlY2stcGFyYW0tbmFtZXMqL1xuLyoqXG4gKiBJbnNlcnQgY29udGVudCBuZXh0IHRvIGVhY2ggZWxlbWVudCBpbiB0aGUgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMuXG4gKlxuICogQGNhdGVnb3J5IE1hbmlwdWxhdGlvblxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogJCgnLmFwcGxlJykuYWZ0ZXIoJzxsaSBjbGFzcz1cInBsdW1cIj5QbHVtPC9saT4nKTtcbiAqICQuaHRtbCgpO1xuICogLy89PiAgPHVsIGlkPVwiZnJ1aXRzXCI+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cImFwcGxlXCI+QXBwbGU8L2xpPlxuICogLy8gICAgICA8bGkgY2xhc3M9XCJwbHVtXCI+UGx1bTwvbGk+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cIm9yYW5nZVwiPk9yYW5nZTwvbGk+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cInBlYXJcIj5QZWFyPC9saT5cbiAqIC8vICAgIDwvdWw+XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29udGVudCAtIEhUTUwgc3RyaW5nLCBET00gZWxlbWVudCwgYXJyYXkgb2YgRE9NIGVsZW1lbnRzIG9yIENoZWVyaW9cbiAqICAgdG8gaW5zZXJ0IGFmdGVyIGVhY2ggZWxlbWVudCBpbiB0aGUgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMuXG4gKiBAcmV0dXJucyBUaGUgaW5zdGFuY2UgaXRzZWxmLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9hZnRlci99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZnRlciguLi5lbGVtcykge1xuICAgIGNvbnN0IGxhc3RJZHggPSB0aGlzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIGRvbUVhY2godGhpcywgKGVsLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGFyZW50IH0gPSBlbDtcbiAgICAgICAgaWYgKCFoYXNDaGlsZHJlbihlbCkgfHwgIXBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpYmxpbmdzID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNpYmxpbmdzLmluZGV4T2YoZWwpO1xuICAgICAgICAvLyBJZiBub3QgZm91bmQsIG1vdmUgb25cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgaWYgKGluZGV4IDwgMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgZG9tU3JjID0gdHlwZW9mIGVsZW1zWzBdID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IGVsZW1zWzBdLmNhbGwoZWwsIGksIHRoaXMuX3JlbmRlcihlbC5jaGlsZHJlbikpXG4gICAgICAgICAgICA6IGVsZW1zO1xuICAgICAgICBjb25zdCBkb20gPSB0aGlzLl9tYWtlRG9tQXJyYXkoZG9tU3JjLCBpIDwgbGFzdElkeCk7XG4gICAgICAgIC8vIEFkZCBlbGVtZW50IGFmdGVyIGB0aGlzYCBlbGVtZW50XG4gICAgICAgIHVuaXF1ZVNwbGljZShzaWJsaW5ncywgaW5kZXggKyAxLCAwLCBkb20sIHBhcmVudCk7XG4gICAgfSk7XG59XG4vKiBlc2xpbnQtZW5hYmxlIGpzZG9jL2NoZWNrLXBhcmFtLW5hbWVzKi9cbi8qKlxuICogSW5zZXJ0IGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzIGFmdGVyIHRoZSB0YXJnZXQuXG4gKlxuICogQGNhdGVnb3J5IE1hbmlwdWxhdGlvblxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogJCgnPGxpIGNsYXNzPVwicGx1bVwiPlBsdW08L2xpPicpLmluc2VydEFmdGVyKCcuYXBwbGUnKTtcbiAqICQuaHRtbCgpO1xuICogLy89PiAgPHVsIGlkPVwiZnJ1aXRzXCI+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cImFwcGxlXCI+QXBwbGU8L2xpPlxuICogLy8gICAgICA8bGkgY2xhc3M9XCJwbHVtXCI+UGx1bTwvbGk+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cIm9yYW5nZVwiPk9yYW5nZTwvbGk+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cInBlYXJcIj5QZWFyPC9saT5cbiAqIC8vICAgIDwvdWw+XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IC0gRWxlbWVudCB0byBpbnNlcnQgZWxlbWVudHMgYWZ0ZXIuXG4gKiBAcmV0dXJucyBUaGUgc2V0IG9mIG5ld2x5IGluc2VydGVkIGVsZW1lbnRzLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9pbnNlcnRBZnRlci99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRBZnRlcih0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGhpcy5fbWFrZSh0YXJnZXQpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIGNvbnN0IGNsb25lcyA9IFtdO1xuICAgIHRoaXMuX21ha2VEb21BcnJheSh0YXJnZXQpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb25lZFNlbGYgPSB0aGlzLmNsb25lKCkudG9BcnJheSgpO1xuICAgICAgICBjb25zdCB7IHBhcmVudCB9ID0gZWw7XG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2libGluZ3MgPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2libGluZ3MuaW5kZXhPZihlbCk7XG4gICAgICAgIC8vIElmIG5vdCBmb3VuZCwgbW92ZSBvblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoaW5kZXggPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBBZGQgY2xvbmVkIGB0aGlzYCBlbGVtZW50KHMpIGFmdGVyIHRhcmdldCBlbGVtZW50XG4gICAgICAgIHVuaXF1ZVNwbGljZShzaWJsaW5ncywgaW5kZXggKyAxLCAwLCBjbG9uZWRTZWxmLCBwYXJlbnQpO1xuICAgICAgICBjbG9uZXMucHVzaCguLi5jbG9uZWRTZWxmKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fbWFrZShjbG9uZXMpO1xufVxuLyogZXNsaW50LWRpc2FibGUganNkb2MvY2hlY2stcGFyYW0tbmFtZXMqL1xuLyoqXG4gKiBJbnNlcnQgY29udGVudCBwcmV2aW91cyB0byBlYWNoIGVsZW1lbnQgaW4gdGhlIHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzLlxuICpcbiAqIEBjYXRlZ29yeSBNYW5pcHVsYXRpb25cbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJy5hcHBsZScpLmJlZm9yZSgnPGxpIGNsYXNzPVwicGx1bVwiPlBsdW08L2xpPicpO1xuICogJC5odG1sKCk7XG4gKiAvLz0+ICA8dWwgaWQ9XCJmcnVpdHNcIj5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwicGx1bVwiPlBsdW08L2xpPlxuICogLy8gICAgICA8bGkgY2xhc3M9XCJhcHBsZVwiPkFwcGxlPC9saT5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwib3JhbmdlXCI+T3JhbmdlPC9saT5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwicGVhclwiPlBlYXI8L2xpPlxuICogLy8gICAgPC91bD5cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb250ZW50IC0gSFRNTCBzdHJpbmcsIERPTSBlbGVtZW50LCBhcnJheSBvZiBET00gZWxlbWVudHMgb3IgQ2hlZXJpb1xuICogICB0byBpbnNlcnQgYmVmb3JlIGVhY2ggZWxlbWVudCBpbiB0aGUgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMuXG4gKiBAcmV0dXJucyBUaGUgaW5zdGFuY2UgaXRzZWxmLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9iZWZvcmUvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmVmb3JlKC4uLmVsZW1zKSB7XG4gICAgY29uc3QgbGFzdElkeCA9IHRoaXMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gZG9tRWFjaCh0aGlzLCAoZWwsIGkpID0+IHtcbiAgICAgICAgY29uc3QgeyBwYXJlbnQgfSA9IGVsO1xuICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKGVsKSB8fCAhcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2libGluZ3MgPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2libGluZ3MuaW5kZXhPZihlbCk7XG4gICAgICAgIC8vIElmIG5vdCBmb3VuZCwgbW92ZSBvblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBpZiAoaW5kZXggPCAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBkb21TcmMgPSB0eXBlb2YgZWxlbXNbMF0gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gZWxlbXNbMF0uY2FsbChlbCwgaSwgdGhpcy5fcmVuZGVyKGVsLmNoaWxkcmVuKSlcbiAgICAgICAgICAgIDogZWxlbXM7XG4gICAgICAgIGNvbnN0IGRvbSA9IHRoaXMuX21ha2VEb21BcnJheShkb21TcmMsIGkgPCBsYXN0SWR4KTtcbiAgICAgICAgLy8gQWRkIGVsZW1lbnQgYmVmb3JlIGBlbGAgZWxlbWVudFxuICAgICAgICB1bmlxdWVTcGxpY2Uoc2libGluZ3MsIGluZGV4LCAwLCBkb20sIHBhcmVudCk7XG4gICAgfSk7XG59XG4vKiBlc2xpbnQtZW5hYmxlIGpzZG9jL2NoZWNrLXBhcmFtLW5hbWVzKi9cbi8qKlxuICogSW5zZXJ0IGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzIGJlZm9yZSB0aGUgdGFyZ2V0LlxuICpcbiAqIEBjYXRlZ29yeSBNYW5pcHVsYXRpb25cbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJzxsaSBjbGFzcz1cInBsdW1cIj5QbHVtPC9saT4nKS5pbnNlcnRCZWZvcmUoJy5hcHBsZScpO1xuICogJC5odG1sKCk7XG4gKiAvLz0+ICA8dWwgaWQ9XCJmcnVpdHNcIj5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwicGx1bVwiPlBsdW08L2xpPlxuICogLy8gICAgICA8bGkgY2xhc3M9XCJhcHBsZVwiPkFwcGxlPC9saT5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwib3JhbmdlXCI+T3JhbmdlPC9saT5cbiAqIC8vICAgICAgPGxpIGNsYXNzPVwicGVhclwiPlBlYXI8L2xpPlxuICogLy8gICAgPC91bD5cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB0YXJnZXQgLSBFbGVtZW50IHRvIGluc2VydCBlbGVtZW50cyBiZWZvcmUuXG4gKiBAcmV0dXJucyBUaGUgc2V0IG9mIG5ld2x5IGluc2VydGVkIGVsZW1lbnRzLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9pbnNlcnRCZWZvcmUvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHRhcmdldCkge1xuICAgIGNvbnN0IHRhcmdldEFyciA9IHRoaXMuX21ha2UodGFyZ2V0KTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIGNvbnN0IGNsb25lcyA9IFtdO1xuICAgIGRvbUVhY2godGFyZ2V0QXJyLCAoZWwpID0+IHtcbiAgICAgICAgY29uc3QgY2xvbmVkU2VsZiA9IHRoaXMuY2xvbmUoKS50b0FycmF5KCk7XG4gICAgICAgIGNvbnN0IHsgcGFyZW50IH0gPSBlbDtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzaWJsaW5ncy5pbmRleE9mKGVsKTtcbiAgICAgICAgLy8gSWYgbm90IGZvdW5kLCBtb3ZlIG9uXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGlmIChpbmRleCA8IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIEFkZCBjbG9uZWQgYHRoaXNgIGVsZW1lbnQocykgYWZ0ZXIgdGFyZ2V0IGVsZW1lbnRcbiAgICAgICAgdW5pcXVlU3BsaWNlKHNpYmxpbmdzLCBpbmRleCwgMCwgY2xvbmVkU2VsZiwgcGFyZW50KTtcbiAgICAgICAgY2xvbmVzLnB1c2goLi4uY2xvbmVkU2VsZik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX21ha2UoY2xvbmVzKTtcbn1cbi8qKlxuICogUmVtb3ZlcyB0aGUgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMgZnJvbSB0aGUgRE9NIGFuZCBhbGwgdGhlaXIgY2hpbGRyZW4uXG4gKiBgc2VsZWN0b3JgIGZpbHRlcnMgdGhlIHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzIHRvIGJlIHJlbW92ZWQuXG4gKlxuICogQGNhdGVnb3J5IE1hbmlwdWxhdGlvblxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogJCgnLnBlYXInKS5yZW1vdmUoKTtcbiAqICQuaHRtbCgpO1xuICogLy89PiAgPHVsIGlkPVwiZnJ1aXRzXCI+XG4gKiAvLyAgICAgIDxsaSBjbGFzcz1cImFwcGxlXCI+QXBwbGU8L2xpPlxuICogLy8gICAgICA8bGkgY2xhc3M9XCJvcmFuZ2VcIj5PcmFuZ2U8L2xpPlxuICogLy8gICAgPC91bD5cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciAtIE9wdGlvbmFsIHNlbGVjdG9yIGZvciBlbGVtZW50cyB0byByZW1vdmUuXG4gKiBAcmV0dXJucyBUaGUgaW5zdGFuY2UgaXRzZWxmLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9yZW1vdmUvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKHNlbGVjdG9yKSB7XG4gICAgLy8gRmlsdGVyIGlmIHdlIGhhdmUgc2VsZWN0b3JcbiAgICBjb25zdCBlbGVtcyA9IHNlbGVjdG9yID8gdGhpcy5maWx0ZXIoc2VsZWN0b3IpIDogdGhpcztcbiAgICBkb21FYWNoKGVsZW1zLCAoZWwpID0+IHtcbiAgICAgICAgcmVtb3ZlRWxlbWVudChlbCk7XG4gICAgICAgIGVsLnByZXYgPSBlbC5uZXh0ID0gZWwucGFyZW50ID0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbn1cbi8qKlxuICogUmVwbGFjZXMgbWF0Y2hlZCBlbGVtZW50cyB3aXRoIGBjb250ZW50YC5cbiAqXG4gKiBAY2F0ZWdvcnkgTWFuaXB1bGF0aW9uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwbHVtID0gJCgnPGxpIGNsYXNzPVwicGx1bVwiPlBsdW08L2xpPicpO1xuICogJCgnLnBlYXInKS5yZXBsYWNlV2l0aChwbHVtKTtcbiAqICQuaHRtbCgpO1xuICogLy89PiA8dWwgaWQ9XCJmcnVpdHNcIj5cbiAqIC8vICAgICA8bGkgY2xhc3M9XCJhcHBsZVwiPkFwcGxlPC9saT5cbiAqIC8vICAgICA8bGkgY2xhc3M9XCJvcmFuZ2VcIj5PcmFuZ2U8L2xpPlxuICogLy8gICAgIDxsaSBjbGFzcz1cInBsdW1cIj5QbHVtPC9saT5cbiAqIC8vICAgPC91bD5cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb250ZW50IC0gUmVwbGFjZW1lbnQgZm9yIG1hdGNoZWQgZWxlbWVudHMuXG4gKiBAcmV0dXJucyBUaGUgaW5zdGFuY2UgaXRzZWxmLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9yZXBsYWNlV2l0aC99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlV2l0aChjb250ZW50KSB7XG4gICAgcmV0dXJuIGRvbUVhY2godGhpcywgKGVsLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGFyZW50IH0gPSBlbDtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgY29udCA9IHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nID8gY29udGVudC5jYWxsKGVsLCBpLCBlbCkgOiBjb250ZW50O1xuICAgICAgICBjb25zdCBkb20gPSB0aGlzLl9tYWtlRG9tQXJyYXkoY29udCk7XG4gICAgICAgIC8qXG4gICAgICAgICAqIEluIHRoZSBjYXNlIHRoYXQgYGRvbWAgY29udGFpbnMgbm9kZXMgdGhhdCBhbHJlYWR5IGV4aXN0IGluIG90aGVyXG4gICAgICAgICAqIHN0cnVjdHVyZXMsIGVuc3VyZSB0aG9zZSBub2RlcyBhcmUgcHJvcGVybHkgcmVtb3ZlZC5cbiAgICAgICAgICovXG4gICAgICAgIHVwZGF0ZURPTShkb20sIG51bGwpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHNpYmxpbmdzLmluZGV4T2YoZWwpO1xuICAgICAgICAvLyBDb21wbGV0ZWx5IHJlbW92ZSBvbGQgZWxlbWVudFxuICAgICAgICB1bmlxdWVTcGxpY2Uoc2libGluZ3MsIGluZGV4LCAxLCBkb20sIHBhcmVudCk7XG4gICAgICAgIGlmICghZG9tLmluY2x1ZGVzKGVsKSkge1xuICAgICAgICAgICAgZWwucGFyZW50ID0gZWwucHJldiA9IGVsLm5leHQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIEVtcHRpZXMgYW4gZWxlbWVudCwgcmVtb3ZpbmcgYWxsIGl0cyBjaGlsZHJlbi5cbiAqXG4gKiBAY2F0ZWdvcnkgTWFuaXB1bGF0aW9uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCd1bCcpLmVtcHR5KCk7XG4gKiAkLmh0bWwoKTtcbiAqIC8vPT4gIDx1bCBpZD1cImZydWl0c1wiPjwvdWw+XG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJucyBUaGUgaW5zdGFuY2UgaXRzZWxmLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9lbXB0eS99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICByZXR1cm4gZG9tRWFjaCh0aGlzLCAoZWwpID0+IHtcbiAgICAgICAgaWYgKCFoYXNDaGlsZHJlbihlbCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZC5uZXh0ID0gY2hpbGQucHJldiA9IGNoaWxkLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5jaGlsZHJlbi5sZW5ndGggPSAwO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGh0bWwoc3RyKSB7XG4gICAgaWYgKHN0ciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpc1swXTtcbiAgICAgICAgaWYgKCFlbCB8fCAhaGFzQ2hpbGRyZW4oZWwpKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIoZWwuY2hpbGRyZW4pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tRWFjaCh0aGlzLCAoZWwpID0+IHtcbiAgICAgICAgaWYgKCFoYXNDaGlsZHJlbihlbCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZC5uZXh0ID0gY2hpbGQucHJldiA9IGNoaWxkLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gaXNDaGVlcmlvKHN0cilcbiAgICAgICAgICAgID8gc3RyLnRvQXJyYXkoKVxuICAgICAgICAgICAgOiB0aGlzLl9wYXJzZShgJHtzdHJ9YCwgdGhpcy5vcHRpb25zLCBmYWxzZSwgZWwpLmNoaWxkcmVuO1xuICAgICAgICB1cGRhdGVET00oY29udGVudCwgZWwpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBUdXJucyB0aGUgY29sbGVjdGlvbiB0byBhIHN0cmluZy4gQWxpYXMgZm9yIGAuaHRtbCgpYC5cbiAqXG4gKiBAY2F0ZWdvcnkgTWFuaXB1bGF0aW9uXG4gKiBAcmV0dXJucyBUaGUgcmVuZGVyZWQgZG9jdW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHRoaXMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRleHQoc3RyKSB7XG4gICAgLy8gSWYgYHN0cmAgaXMgdW5kZWZpbmVkLCBhY3QgYXMgYSBcImdldHRlclwiXG4gICAgaWYgKHN0ciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzdGF0aWNUZXh0KHRoaXMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHN0ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBGdW5jdGlvbiBzdXBwb3J0XG4gICAgICAgIHJldHVybiBkb21FYWNoKHRoaXMsIChlbCwgaSkgPT4gdGhpcy5fbWFrZShlbCkudGV4dChzdHIuY2FsbChlbCwgaSwgc3RhdGljVGV4dChbZWxdKSkpKTtcbiAgICB9XG4gICAgLy8gQXBwZW5kIHRleHQgbm9kZSB0byBlYWNoIHNlbGVjdGVkIGVsZW1lbnRzXG4gICAgcmV0dXJuIGRvbUVhY2godGhpcywgKGVsKSA9PiB7XG4gICAgICAgIGlmICghaGFzQ2hpbGRyZW4oZWwpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBlbC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY2hpbGQubmV4dCA9IGNoaWxkLnByZXYgPSBjaGlsZC5wYXJlbnQgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBuZXcgVGV4dChgJHtzdHJ9YCk7XG4gICAgICAgIHVwZGF0ZURPTSh0ZXh0Tm9kZSwgZWwpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBDbG9uZSB0aGUgY2hlZXJpbyBvYmplY3QuXG4gKlxuICogQGNhdGVnb3J5IE1hbmlwdWxhdGlvblxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW9yZUZydWl0ID0gJCgnI2ZydWl0cycpLmNsb25lKCk7XG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJucyBUaGUgY2xvbmVkIG9iamVjdC5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vY2xvbmUvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21ha2UoY2xvbmVEb20odGhpcy5nZXQoKSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFuaXB1bGF0aW9uLmpzLm1hcCIsIi8qKlxuICogTWV0aG9kcyBmb3IgdHJhdmVyc2luZyB0aGUgRE9NIHN0cnVjdHVyZS5cbiAqXG4gKiBAbW9kdWxlIGNoZWVyaW8vdHJhdmVyc2luZ1xuICovXG5pbXBvcnQgeyBoYXNDaGlsZHJlbiwgaXNEb2N1bWVudCwgfSBmcm9tICdkb21oYW5kbGVyJztcbmltcG9ydCAqIGFzIHNlbGVjdCBmcm9tICdjaGVlcmlvLXNlbGVjdCc7XG5pbXBvcnQgeyBkb21FYWNoLCBpc1RhZywgaXNDaGVlcmlvIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IHsgY29udGFpbnMgfSBmcm9tICcuLi9zdGF0aWMuanMnO1xuaW1wb3J0IHsgZ2V0Q2hpbGRyZW4sIGdldFNpYmxpbmdzLCBuZXh0RWxlbWVudFNpYmxpbmcsIHByZXZFbGVtZW50U2libGluZywgdW5pcXVlU29ydCwgfSBmcm9tICdkb211dGlscyc7XG5jb25zdCByZVNpYmxpbmdTZWxlY3RvciA9IC9eXFxzKlt+K10vO1xuLyoqXG4gKiBHZXQgdGhlIGRlc2NlbmRhbnRzIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY3VycmVudCBzZXQgb2YgbWF0Y2hlZCBlbGVtZW50cyxcbiAqIGZpbHRlcmVkIGJ5IGEgc2VsZWN0b3IsIGpRdWVyeSBvYmplY3QsIG9yIGVsZW1lbnQuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJyNmcnVpdHMnKS5maW5kKCdsaScpLmxlbmd0aDtcbiAqIC8vPT4gM1xuICogJCgnI2ZydWl0cycpLmZpbmQoJCgnLmFwcGxlJykpLmxlbmd0aDtcbiAqIC8vPT4gMVxuICogYGBgXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yT3JIYXlzdGFjayAtIEVsZW1lbnQgdG8gbG9vayBmb3IuXG4gKiBAcmV0dXJucyBUaGUgZm91bmQgZWxlbWVudHMuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL2ZpbmQvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZChzZWxlY3Rvck9ySGF5c3RhY2spIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCFzZWxlY3Rvck9ySGF5c3RhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ha2UoW10pO1xuICAgIH1cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy50b0FycmF5KCk7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3Rvck9ySGF5c3RhY2sgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IGhheXN0YWNrID0gaXNDaGVlcmlvKHNlbGVjdG9yT3JIYXlzdGFjaylcbiAgICAgICAgICAgID8gc2VsZWN0b3JPckhheXN0YWNrLnRvQXJyYXkoKVxuICAgICAgICAgICAgOiBbc2VsZWN0b3JPckhheXN0YWNrXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ha2UoaGF5c3RhY2suZmlsdGVyKChlbGVtKSA9PiBjb250ZXh0LnNvbWUoKG5vZGUpID0+IGNvbnRhaW5zKG5vZGUsIGVsZW0pKSkpO1xuICAgIH1cbiAgICBjb25zdCBlbGVtcyA9IHJlU2libGluZ1NlbGVjdG9yLnRlc3Qoc2VsZWN0b3JPckhheXN0YWNrKVxuICAgICAgICA/IGNvbnRleHRcbiAgICAgICAgOiB0aGlzLmNoaWxkcmVuKCkudG9BcnJheSgpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHJvb3Q6IChfYSA9IHRoaXMuX3Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSxcbiAgICAgICAgLy8gUGFzcyBvcHRpb25zIHRoYXQgYXJlIHJlY29nbml6ZWQgYnkgYGNoZWVyaW8tc2VsZWN0YFxuICAgICAgICB4bWxNb2RlOiB0aGlzLm9wdGlvbnMueG1sTW9kZSxcbiAgICAgICAgbG93ZXJDYXNlVGFnczogdGhpcy5vcHRpb25zLmxvd2VyQ2FzZVRhZ3MsXG4gICAgICAgIGxvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzOiB0aGlzLm9wdGlvbnMubG93ZXJDYXNlQXR0cmlidXRlTmFtZXMsXG4gICAgICAgIHBzZXVkb3M6IHRoaXMub3B0aW9ucy5wc2V1ZG9zLFxuICAgICAgICBxdWlya3NNb2RlOiB0aGlzLm9wdGlvbnMucXVpcmtzTW9kZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9tYWtlKHNlbGVjdC5zZWxlY3Qoc2VsZWN0b3JPckhheXN0YWNrLCBlbGVtcywgb3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0Y2hlciwgdXNpbmcgYSBwYXJ0aWN1bGFyIG1hcHBpbmcgZnVuY3Rpb24uIE1hdGNoZXJzIHByb3ZpZGUgYVxuICogZnVuY3Rpb24gdGhhdCBmaW5kcyBlbGVtZW50cyB1c2luZyBhIGdlbmVyYXRpbmcgZnVuY3Rpb24sIHN1cHBvcnRpbmcgZmlsdGVyaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gbWF0Y2hNYXAgLSBNYXBwaW5nIGZ1bmN0aW9uLlxuICogQHJldHVybnMgLSBGdW5jdGlvbiBmb3Igd3JhcHBpbmcgZ2VuZXJhdGluZyBmdW5jdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIF9nZXRNYXRjaGVyKG1hdGNoTWFwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChmbiwgLi4ucG9zdEZucykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBsZXQgbWF0Y2hlZCA9IG1hdGNoTWFwKGZuLCB0aGlzKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIG1hdGNoZWQgPSBmaWx0ZXJBcnJheShtYXRjaGVkLCBzZWxlY3RvciwgdGhpcy5vcHRpb25zLnhtbE1vZGUsIChfYSA9IHRoaXMuX3Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWFrZShcbiAgICAgICAgICAgIC8vIFBvc3QgcHJvY2Vzc2luZyBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGVsZW1lbnQuXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA+IDEgJiYgbWF0Y2hlZC5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgPyBwb3N0Rm5zLnJlZHVjZSgoZWxlbXMsIGZuKSA9PiBmbihlbGVtcyksIG1hdGNoZWQpXG4gICAgICAgICAgICAgICAgOiBtYXRjaGVkKTtcbiAgICAgICAgfTtcbiAgICB9O1xufVxuLyoqIE1hdGNoZXIgdGhhdCBhZGRzIG11bHRpcGxlIGVsZW1lbnRzIGZvciBlYWNoIGVudHJ5IGluIHRoZSBpbnB1dC4gKi9cbmNvbnN0IF9tYXRjaGVyID0gX2dldE1hdGNoZXIoKGZuLCBlbGVtcykgPT4ge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmbihlbGVtc1tpXSk7XG4gICAgICAgIHJldC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBcnJheSgpLmNvbmNhdCguLi5yZXQpO1xufSk7XG4vKiogTWF0Y2hlciB0aGF0IGFkZHMgYXQgbW9zdCBvbmUgZWxlbWVudCBmb3IgZWFjaCBlbnRyeSBpbiB0aGUgaW5wdXQuICovXG5jb25zdCBfc2luZ2xlTWF0Y2hlciA9IF9nZXRNYXRjaGVyKChmbiwgZWxlbXMpID0+IHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZm4oZWxlbXNbaV0pO1xuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufSk7XG4vKipcbiAqIE1hdGNoZXIgdGhhdCBzdXBwb3J0cyB0cmF2ZXJzaW5nIHVudGlsIGEgY29uZGl0aW9uIGlzIG1ldC5cbiAqXG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHVzYWJsZSBmb3IgYCpVbnRpbGAgbWV0aG9kcy5cbiAqL1xuZnVuY3Rpb24gX21hdGNoVW50aWwobmV4dEVsZW0sIC4uLnBvc3RGbnMpIHtcbiAgICAvLyBXZSB1c2UgYSB2YXJpYWJsZSBoZXJlIHRoYXQgaXMgdXNlZCBmcm9tIHdpdGhpbiB0aGUgbWF0Y2hlci5cbiAgICBsZXQgbWF0Y2hlcyA9IG51bGw7XG4gICAgY29uc3QgaW5uZXJNYXRjaGVyID0gX2dldE1hdGNoZXIoKG5leHRFbGVtLCBlbGVtcykgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVkID0gW107XG4gICAgICAgIGRvbUVhY2goZWxlbXMsIChlbGVtKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBuZXh0OyAobmV4dCA9IG5leHRFbGVtKGVsZW0pKTsgZWxlbSA9IG5leHQpIHtcbiAgICAgICAgICAgICAgICAvLyBGSVhNRTogYG1hdGNoZWRgIG1pZ2h0IGNvbnRhaW4gZHVwbGljYXRlcyBoZXJlIGFuZCB0aGUgaW5kZXggaXMgdG9vIGxhcmdlLlxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzID09PSBudWxsIHx8IG1hdGNoZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1hdGNoZXMobmV4dCwgbWF0Y2hlZC5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBtYXRjaGVkLnB1c2gobmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICB9KShuZXh0RWxlbSwgLi4ucG9zdEZucyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyU2VsZWN0b3IpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgYG1hdGNoZXNgIHZhcmlhYmxlIHdpdGggdGhlIG5ldyB0YXJnZXQuXG4gICAgICAgIG1hdGNoZXMgPVxuICAgICAgICAgICAgdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gKGVsZW0pID0+IHNlbGVjdC5pcyhlbGVtLCBzZWxlY3RvciwgdGhpcy5vcHRpb25zKVxuICAgICAgICAgICAgICAgIDogc2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgPyBnZXRGaWx0ZXJGbihzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBjb25zdCByZXQgPSBpbm5lck1hdGNoZXIuY2FsbCh0aGlzLCBmaWx0ZXJTZWxlY3Rvcik7XG4gICAgICAgIC8vIFNldCBgbWF0Y2hlc2AgdG8gYG51bGxgLCBzbyB3ZSBkb24ndCB3YXN0ZSBtZW1vcnkuXG4gICAgICAgIG1hdGNoZXMgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59XG5mdW5jdGlvbiBfcmVtb3ZlRHVwbGljYXRlcyhlbGVtcykge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoZWxlbXMpKTtcbn1cbi8qKlxuICogR2V0IHRoZSBwYXJlbnQgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzLFxuICogb3B0aW9uYWxseSBmaWx0ZXJlZCBieSBhIHNlbGVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCcucGVhcicpLnBhcmVudCgpLmF0dHIoJ2lkJyk7XG4gKiAvLz0+IGZydWl0c1xuICogYGBgXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIC0gSWYgc3BlY2lmaWVkIGZpbHRlciBmb3IgcGFyZW50LlxuICogQHJldHVybnMgVGhlIHBhcmVudHMuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL3BhcmVudC99XG4gKi9cbmV4cG9ydCBjb25zdCBwYXJlbnQgPSBfc2luZ2xlTWF0Y2hlcigoeyBwYXJlbnQgfSkgPT4gKHBhcmVudCAmJiAhaXNEb2N1bWVudChwYXJlbnQpID8gcGFyZW50IDogbnVsbCksIF9yZW1vdmVEdXBsaWNhdGVzKTtcbi8qKlxuICogR2V0IGEgc2V0IG9mIHBhcmVudHMgZmlsdGVyZWQgYnkgYHNlbGVjdG9yYCBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnRcbiAqIHNldCBvZiBtYXRjaCBlbGVtZW50cy5cbiAqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2luZ1xuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogJCgnLm9yYW5nZScpLnBhcmVudHMoKS5sZW5ndGg7XG4gKiAvLz0+IDJcbiAqICQoJy5vcmFuZ2UnKS5wYXJlbnRzKCcjZnJ1aXRzJykubGVuZ3RoO1xuICogLy89PiAxXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgLSBJZiBzcGVjaWZpZWQgZmlsdGVyIGZvciBwYXJlbnRzLlxuICogQHJldHVybnMgVGhlIHBhcmVudHMuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL3BhcmVudHMvfVxuICovXG5leHBvcnQgY29uc3QgcGFyZW50cyA9IF9tYXRjaGVyKChlbGVtKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZCA9IFtdO1xuICAgIHdoaWxlIChlbGVtLnBhcmVudCAmJiAhaXNEb2N1bWVudChlbGVtLnBhcmVudCkpIHtcbiAgICAgICAgbWF0Y2hlZC5wdXNoKGVsZW0ucGFyZW50KTtcbiAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlZDtcbn0sIHVuaXF1ZVNvcnQsIChlbGVtcykgPT4gZWxlbXMucmV2ZXJzZSgpKTtcbi8qKlxuICogR2V0IHRoZSBhbmNlc3RvcnMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjdXJyZW50IHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzLCB1cFxuICogdG8gYnV0IG5vdCBpbmNsdWRpbmcgdGhlIGVsZW1lbnQgbWF0Y2hlZCBieSB0aGUgc2VsZWN0b3IsIERPTSBub2RlLCBvciBjaGVlcmlvIG9iamVjdC5cbiAqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2luZ1xuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogJCgnLm9yYW5nZScpLnBhcmVudHNVbnRpbCgnI2Zvb2QnKS5sZW5ndGg7XG4gKiAvLz0+IDFcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciAtIFNlbGVjdG9yIGZvciBlbGVtZW50IHRvIHN0b3AgYXQuXG4gKiBAcGFyYW0gZmlsdGVyU2VsZWN0b3IgLSBPcHRpb25hbCBmaWx0ZXIgZm9yIHBhcmVudHMuXG4gKiBAcmV0dXJucyBUaGUgcGFyZW50cy5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vcGFyZW50c1VudGlsL31cbiAqL1xuZXhwb3J0IGNvbnN0IHBhcmVudHNVbnRpbCA9IF9tYXRjaFVudGlsKCh7IHBhcmVudCB9KSA9PiAocGFyZW50ICYmICFpc0RvY3VtZW50KHBhcmVudCkgPyBwYXJlbnQgOiBudWxsKSwgdW5pcXVlU29ydCwgKGVsZW1zKSA9PiBlbGVtcy5yZXZlcnNlKCkpO1xuLyoqXG4gKiBGb3IgZWFjaCBlbGVtZW50IGluIHRoZSBzZXQsIGdldCB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHNlbGVjdG9yXG4gKiBieSB0ZXN0aW5nIHRoZSBlbGVtZW50IGl0c2VsZiBhbmQgdHJhdmVyc2luZyB1cCB0aHJvdWdoIGl0cyBhbmNlc3RvcnMgaW4gdGhlIERPTSB0cmVlLlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCcub3JhbmdlJykuY2xvc2VzdCgpO1xuICogLy89PiBbXVxuICpcbiAqICQoJy5vcmFuZ2UnKS5jbG9zZXN0KCcuYXBwbGUnKTtcbiAqIC8vID0+IFtdXG4gKlxuICogJCgnLm9yYW5nZScpLmNsb3Nlc3QoJ2xpJyk7XG4gKiAvLz0+IFs8bGkgY2xhc3M9XCJvcmFuZ2VcIj5PcmFuZ2U8L2xpPl1cbiAqXG4gKiAkKCcub3JhbmdlJykuY2xvc2VzdCgnI2ZydWl0cycpO1xuICogLy89PiBbPHVsIGlkPVwiZnJ1aXRzXCI+IC4uLiA8L3VsPl1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciAtIFNlbGVjdG9yIGZvciB0aGUgZWxlbWVudCB0byBmaW5kLlxuICogQHJldHVybnMgVGhlIGNsb3Nlc3Qgbm9kZXMuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL2Nsb3Nlc3QvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBzZXQgPSBbXTtcbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYWtlKHNldCk7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdE9wdHMgPSB7XG4gICAgICAgIHhtbE1vZGU6IHRoaXMub3B0aW9ucy54bWxNb2RlLFxuICAgICAgICByb290OiAoX2EgPSB0aGlzLl9yb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0sXG4gICAgfTtcbiAgICBjb25zdCBzZWxlY3RGbiA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZydcbiAgICAgICAgPyAoZWxlbSkgPT4gc2VsZWN0LmlzKGVsZW0sIHNlbGVjdG9yLCBzZWxlY3RPcHRzKVxuICAgICAgICA6IGdldEZpbHRlckZuKHNlbGVjdG9yKTtcbiAgICBkb21FYWNoKHRoaXMsIChlbGVtKSA9PiB7XG4gICAgICAgIHdoaWxlIChlbGVtICYmIGlzVGFnKGVsZW0pKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0Rm4oZWxlbSwgMCkpIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgYWRkIGR1cGxpY2F0ZSBlbGVtZW50cyB0byB0aGUgc2V0XG4gICAgICAgICAgICAgICAgaWYgKCFzZXQuaW5jbHVkZXMoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0LnB1c2goZWxlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX21ha2Uoc2V0KTtcbn1cbi8qKlxuICogR2V0cyB0aGUgbmV4dCBzaWJsaW5nIG9mIHRoZSBmaXJzdCBzZWxlY3RlZCBlbGVtZW50LCBvcHRpb25hbGx5IGZpbHRlcmVkIGJ5IGEgc2VsZWN0b3IuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJy5hcHBsZScpLm5leHQoKS5oYXNDbGFzcygnb3JhbmdlJyk7XG4gKiAvLz0+IHRydWVcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciAtIElmIHNwZWNpZmllZCBmaWx0ZXIgZm9yIHNpYmxpbmcuXG4gKiBAcmV0dXJucyBUaGUgbmV4dCBub2Rlcy5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vbmV4dC99XG4gKi9cbmV4cG9ydCBjb25zdCBuZXh0ID0gX3NpbmdsZU1hdGNoZXIoKGVsZW0pID0+IG5leHRFbGVtZW50U2libGluZyhlbGVtKSk7XG4vKipcbiAqIEdldHMgYWxsIHRoZSBmb2xsb3dpbmcgc2libGluZ3Mgb2YgdGhlIGZpcnN0IHNlbGVjdGVkIGVsZW1lbnQsIG9wdGlvbmFsbHlcbiAqIGZpbHRlcmVkIGJ5IGEgc2VsZWN0b3IuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJy5hcHBsZScpLm5leHRBbGwoKTtcbiAqIC8vPT4gWzxsaSBjbGFzcz1cIm9yYW5nZVwiPk9yYW5nZTwvbGk+LCA8bGkgY2xhc3M9XCJwZWFyXCI+UGVhcjwvbGk+XVxuICogJCgnLmFwcGxlJykubmV4dEFsbCgnLm9yYW5nZScpO1xuICogLy89PiBbPGxpIGNsYXNzPVwib3JhbmdlXCI+T3JhbmdlPC9saT5dXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgLSBJZiBzcGVjaWZpZWQgZmlsdGVyIGZvciBzaWJsaW5ncy5cbiAqIEByZXR1cm5zIFRoZSBuZXh0IG5vZGVzLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9uZXh0QWxsL31cbiAqL1xuZXhwb3J0IGNvbnN0IG5leHRBbGwgPSBfbWF0Y2hlcigoZWxlbSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZWQgPSBbXTtcbiAgICB3aGlsZSAoZWxlbS5uZXh0KSB7XG4gICAgICAgIGVsZW0gPSBlbGVtLm5leHQ7XG4gICAgICAgIGlmIChpc1RhZyhlbGVtKSlcbiAgICAgICAgICAgIG1hdGNoZWQucHVzaChlbGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZWQ7XG59LCBfcmVtb3ZlRHVwbGljYXRlcyk7XG4vKipcbiAqIEdldHMgYWxsIHRoZSBmb2xsb3dpbmcgc2libGluZ3MgdXAgdG8gYnV0IG5vdCBpbmNsdWRpbmcgdGhlIGVsZW1lbnQgbWF0Y2hlZFxuICogYnkgdGhlIHNlbGVjdG9yLCBvcHRpb25hbGx5IGZpbHRlcmVkIGJ5IGFub3RoZXIgc2VsZWN0b3IuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJy5hcHBsZScpLm5leHRVbnRpbCgnLnBlYXInKTtcbiAqIC8vPT4gWzxsaSBjbGFzcz1cIm9yYW5nZVwiPk9yYW5nZTwvbGk+XVxuICogYGBgXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIC0gU2VsZWN0b3IgZm9yIGVsZW1lbnQgdG8gc3RvcCBhdC5cbiAqIEBwYXJhbSBmaWx0ZXJTZWxlY3RvciAtIElmIHNwZWNpZmllZCBmaWx0ZXIgZm9yIHNpYmxpbmdzLlxuICogQHJldHVybnMgVGhlIG5leHQgbm9kZXMuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL25leHRVbnRpbC99XG4gKi9cbmV4cG9ydCBjb25zdCBuZXh0VW50aWwgPSBfbWF0Y2hVbnRpbCgoZWwpID0+IG5leHRFbGVtZW50U2libGluZyhlbCksIF9yZW1vdmVEdXBsaWNhdGVzKTtcbi8qKlxuICogR2V0cyB0aGUgcHJldmlvdXMgc2libGluZyBvZiB0aGUgZmlyc3Qgc2VsZWN0ZWQgZWxlbWVudCBvcHRpb25hbGx5IGZpbHRlcmVkXG4gKiBieSBhIHNlbGVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCcub3JhbmdlJykucHJldigpLmhhc0NsYXNzKCdhcHBsZScpO1xuICogLy89PiB0cnVlXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgLSBJZiBzcGVjaWZpZWQgZmlsdGVyIGZvciBzaWJsaW5ncy5cbiAqIEByZXR1cm5zIFRoZSBwcmV2aW91cyBub2Rlcy5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vcHJldi99XG4gKi9cbmV4cG9ydCBjb25zdCBwcmV2ID0gX3NpbmdsZU1hdGNoZXIoKGVsZW0pID0+IHByZXZFbGVtZW50U2libGluZyhlbGVtKSk7XG4vKipcbiAqIEdldHMgYWxsIHRoZSBwcmVjZWRpbmcgc2libGluZ3Mgb2YgdGhlIGZpcnN0IHNlbGVjdGVkIGVsZW1lbnQsIG9wdGlvbmFsbHlcbiAqIGZpbHRlcmVkIGJ5IGEgc2VsZWN0b3IuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJy5wZWFyJykucHJldkFsbCgpO1xuICogLy89PiBbPGxpIGNsYXNzPVwib3JhbmdlXCI+T3JhbmdlPC9saT4sIDxsaSBjbGFzcz1cImFwcGxlXCI+QXBwbGU8L2xpPl1cbiAqXG4gKiAkKCcucGVhcicpLnByZXZBbGwoJy5vcmFuZ2UnKTtcbiAqIC8vPT4gWzxsaSBjbGFzcz1cIm9yYW5nZVwiPk9yYW5nZTwvbGk+XVxuICogYGBgXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIC0gSWYgc3BlY2lmaWVkIGZpbHRlciBmb3Igc2libGluZ3MuXG4gKiBAcmV0dXJucyBUaGUgcHJldmlvdXMgbm9kZXMuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL3ByZXZBbGwvfVxuICovXG5leHBvcnQgY29uc3QgcHJldkFsbCA9IF9tYXRjaGVyKChlbGVtKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlZCA9IFtdO1xuICAgIHdoaWxlIChlbGVtLnByZXYpIHtcbiAgICAgICAgZWxlbSA9IGVsZW0ucHJldjtcbiAgICAgICAgaWYgKGlzVGFnKGVsZW0pKVxuICAgICAgICAgICAgbWF0Y2hlZC5wdXNoKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlZDtcbn0sIF9yZW1vdmVEdXBsaWNhdGVzKTtcbi8qKlxuICogR2V0cyBhbGwgdGhlIHByZWNlZGluZyBzaWJsaW5ncyB1cCB0byBidXQgbm90IGluY2x1ZGluZyB0aGUgZWxlbWVudCBtYXRjaGVkXG4gKiBieSB0aGUgc2VsZWN0b3IsIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgYW5vdGhlciBzZWxlY3Rvci5cbiAqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2luZ1xuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogJCgnLnBlYXInKS5wcmV2VW50aWwoJy5hcHBsZScpO1xuICogLy89PiBbPGxpIGNsYXNzPVwib3JhbmdlXCI+T3JhbmdlPC9saT5dXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgLSBTZWxlY3RvciBmb3IgZWxlbWVudCB0byBzdG9wIGF0LlxuICogQHBhcmFtIGZpbHRlclNlbGVjdG9yIC0gSWYgc3BlY2lmaWVkIGZpbHRlciBmb3Igc2libGluZ3MuXG4gKiBAcmV0dXJucyBUaGUgcHJldmlvdXMgbm9kZXMuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL3ByZXZVbnRpbC99XG4gKi9cbmV4cG9ydCBjb25zdCBwcmV2VW50aWwgPSBfbWF0Y2hVbnRpbCgoZWwpID0+IHByZXZFbGVtZW50U2libGluZyhlbCksIF9yZW1vdmVEdXBsaWNhdGVzKTtcbi8qKlxuICogR2V0IHRoZSBzaWJsaW5ncyBvZiBlYWNoIGVsZW1lbnQgKGV4Y2x1ZGluZyB0aGUgZWxlbWVudCkgaW4gdGhlIHNldCBvZlxuICogbWF0Y2hlZCBlbGVtZW50cywgb3B0aW9uYWxseSBmaWx0ZXJlZCBieSBhIHNlbGVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCcucGVhcicpLnNpYmxpbmdzKCkubGVuZ3RoO1xuICogLy89PiAyXG4gKlxuICogJCgnLnBlYXInKS5zaWJsaW5ncygnLm9yYW5nZScpLmxlbmd0aDtcbiAqIC8vPT4gMVxuICogYGBgXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIC0gSWYgc3BlY2lmaWVkIGZpbHRlciBmb3Igc2libGluZ3MuXG4gKiBAcmV0dXJucyBUaGUgc2libGluZ3MuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL3NpYmxpbmdzL31cbiAqL1xuZXhwb3J0IGNvbnN0IHNpYmxpbmdzID0gX21hdGNoZXIoKGVsZW0pID0+IGdldFNpYmxpbmdzKGVsZW0pLmZpbHRlcigoZWwpID0+IGlzVGFnKGVsKSAmJiBlbCAhPT0gZWxlbSksIHVuaXF1ZVNvcnQpO1xuLyoqXG4gKiBHZXRzIHRoZSBlbGVtZW50IGNoaWxkcmVuIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJyNmcnVpdHMnKS5jaGlsZHJlbigpLmxlbmd0aDtcbiAqIC8vPT4gM1xuICpcbiAqICQoJyNmcnVpdHMnKS5jaGlsZHJlbignLnBlYXInKS50ZXh0KCk7XG4gKiAvLz0+IFBlYXJcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciAtIElmIHNwZWNpZmllZCBmaWx0ZXIgZm9yIGNoaWxkcmVuLlxuICogQHJldHVybnMgVGhlIGNoaWxkcmVuLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9jaGlsZHJlbi99XG4gKi9cbmV4cG9ydCBjb25zdCBjaGlsZHJlbiA9IF9tYXRjaGVyKChlbGVtKSA9PiBnZXRDaGlsZHJlbihlbGVtKS5maWx0ZXIoaXNUYWcpLCBfcmVtb3ZlRHVwbGljYXRlcyk7XG4vKipcbiAqIEdldHMgdGhlIGNoaWxkcmVuIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMsIGluY2x1ZGluZ1xuICogdGV4dCBhbmQgY29tbWVudCBub2Rlcy5cbiAqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2luZ1xuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogJCgnI2ZydWl0cycpLmNvbnRlbnRzKCkubGVuZ3RoO1xuICogLy89PiAzXG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJucyBUaGUgY2hpbGRyZW4uXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL2NvbnRlbnRzL31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRlbnRzKCkge1xuICAgIGNvbnN0IGVsZW1zID0gdGhpcy50b0FycmF5KCkucmVkdWNlKChuZXdFbGVtcywgZWxlbSkgPT4gaGFzQ2hpbGRyZW4oZWxlbSkgPyBuZXdFbGVtcy5jb25jYXQoZWxlbS5jaGlsZHJlbikgOiBuZXdFbGVtcywgW10pO1xuICAgIHJldHVybiB0aGlzLl9tYWtlKGVsZW1zKTtcbn1cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBhIGNoZWVyaW8gb2JqZWN0LCBleGVjdXRpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBtYXRjaGVkXG4gKiBlbGVtZW50LiBXaGVuIHRoZSBjYWxsYmFjayBpcyBmaXJlZCwgdGhlIGZ1bmN0aW9uIGlzIGZpcmVkIGluIHRoZSBjb250ZXh0IG9mXG4gKiB0aGUgRE9NIGVsZW1lbnQsIHNvIGB0aGlzYCByZWZlcnMgdG8gdGhlIGN1cnJlbnQgZWxlbWVudCwgd2hpY2ggaXMgZXF1aXZhbGVudFxuICogdG8gdGhlIGZ1bmN0aW9uIHBhcmFtZXRlciBgZWxlbWVudGAuIFRvIGJyZWFrIG91dCBvZiB0aGUgYGVhY2hgIGxvb3AgZWFybHksXG4gKiByZXR1cm4gd2l0aCBgZmFsc2VgLlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBmcnVpdHMgPSBbXTtcbiAqXG4gKiAkKCdsaScpLmVhY2goZnVuY3Rpb24gKGksIGVsZW0pIHtcbiAqICAgZnJ1aXRzW2ldID0gJCh0aGlzKS50ZXh0KCk7XG4gKiB9KTtcbiAqXG4gKiBmcnVpdHMuam9pbignLCAnKTtcbiAqIC8vPT4gQXBwbGUsIE9yYW5nZSwgUGVhclxuICogYGBgXG4gKlxuICogQHBhcmFtIGZuIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZS5cbiAqIEByZXR1cm5zIFRoZSBpbnN0YW5jZSBpdHNlbGYsIHVzZWZ1bCBmb3IgY2hhaW5pbmcuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL2VhY2gvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFjaChmbikge1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGxlbiAmJiBmbi5jYWxsKHRoaXNbaV0sIGksIHRoaXNbaV0pICE9PSBmYWxzZSlcbiAgICAgICAgKytpO1xuICAgIHJldHVybiB0aGlzO1xufVxuLyoqXG4gKiBQYXNzIGVhY2ggZWxlbWVudCBpbiB0aGUgY3VycmVudCBtYXRjaGVkIHNldCB0aHJvdWdoIGEgZnVuY3Rpb24sIHByb2R1Y2luZyBhXG4gKiBuZXcgQ2hlZXJpbyBvYmplY3QgY29udGFpbmluZyB0aGUgcmV0dXJuIHZhbHVlcy4gVGhlIGZ1bmN0aW9uIGNhbiByZXR1cm4gYW5cbiAqIGluZGl2aWR1YWwgZGF0YSBpdGVtIG9yIGFuIGFycmF5IG9mIGRhdGEgaXRlbXMgdG8gYmUgaW5zZXJ0ZWQgaW50byB0aGVcbiAqIHJlc3VsdGluZyBzZXQuIElmIGFuIGFycmF5IGlzIHJldHVybmVkLCB0aGUgZWxlbWVudHMgaW5zaWRlIHRoZSBhcnJheSBhcmVcbiAqIGluc2VydGVkIGludG8gdGhlIHNldC4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgbnVsbCBvciB1bmRlZmluZWQsIG5vIGVsZW1lbnRcbiAqIHdpbGwgYmUgaW5zZXJ0ZWQuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJ2xpJylcbiAqICAgLm1hcChmdW5jdGlvbiAoaSwgZWwpIHtcbiAqICAgICAvLyB0aGlzID09PSBlbFxuICogICAgIHJldHVybiAkKHRoaXMpLnRleHQoKTtcbiAqICAgfSlcbiAqICAgLnRvQXJyYXkoKVxuICogICAuam9pbignICcpO1xuICogLy89PiBcImFwcGxlIG9yYW5nZSBwZWFyXCJcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBmbiAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUuXG4gKiBAcmV0dXJucyBUaGUgbWFwcGVkIGVsZW1lbnRzLCB3cmFwcGVkIGluIGEgQ2hlZXJpbyBjb2xsZWN0aW9uLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9tYXAvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwKGZuKSB7XG4gICAgbGV0IGVsZW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpc1tpXTtcbiAgICAgICAgY29uc3QgdmFsID0gZm4uY2FsbChlbCwgaSwgZWwpO1xuICAgICAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGVsZW1zID0gZWxlbXMuY29uY2F0KHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21ha2UoZWxlbXMpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdG8gdGVzdCBpZiBhIGZpbHRlciBpcyBtYXRjaGVkLlxuICpcbiAqIEBwYXJhbSBtYXRjaCAtIEEgZmlsdGVyLlxuICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgaWYgYSBmaWx0ZXIgaGFzIGJlZW4gbWF0Y2hlZC5cbiAqL1xuZnVuY3Rpb24gZ2V0RmlsdGVyRm4obWF0Y2gpIHtcbiAgICBpZiAodHlwZW9mIG1hdGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiAoZWwsIGkpID0+IG1hdGNoLmNhbGwoZWwsIGksIGVsKTtcbiAgICB9XG4gICAgaWYgKGlzQ2hlZXJpbyhtYXRjaCkpIHtcbiAgICAgICAgcmV0dXJuIChlbCkgPT4gQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzLmNhbGwobWF0Y2gsIGVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gbWF0Y2ggPT09IGVsO1xuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKG1hdGNoKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiB0aGlzLl9tYWtlKGZpbHRlckFycmF5KHRoaXMudG9BcnJheSgpLCBtYXRjaCwgdGhpcy5vcHRpb25zLnhtbE1vZGUsIChfYSA9IHRoaXMuX3Jvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckFycmF5KG5vZGVzLCBtYXRjaCwgeG1sTW9kZSwgcm9vdCkge1xuICAgIHJldHVybiB0eXBlb2YgbWF0Y2ggPT09ICdzdHJpbmcnXG4gICAgICAgID8gc2VsZWN0LmZpbHRlcihtYXRjaCwgbm9kZXMsIHsgeG1sTW9kZSwgcm9vdCB9KVxuICAgICAgICA6IG5vZGVzLmZpbHRlcihnZXRGaWx0ZXJGbihtYXRjaCkpO1xufVxuLyoqXG4gKiBDaGVja3MgdGhlIGN1cnJlbnQgbGlzdCBvZiBlbGVtZW50cyBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgX2FueV8gb2YgdGhlXG4gKiBlbGVtZW50cyBtYXRjaCB0aGUgc2VsZWN0b3IuIElmIHVzaW5nIGFuIGVsZW1lbnQgb3IgQ2hlZXJpbyBzZWxlY3Rpb24sXG4gKiByZXR1cm5zIGB0cnVlYCBpZiBfYW55XyBvZiB0aGUgZWxlbWVudHMgbWF0Y2guIElmIHVzaW5nIGEgcHJlZGljYXRlIGZ1bmN0aW9uLFxuICogdGhlIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIHRoZSBzZWxlY3RlZCBlbGVtZW50LCBzbyBgdGhpc2BcbiAqIHJlZmVycyB0byB0aGUgY3VycmVudCBlbGVtZW50LlxuICpcbiAqIEBjYXRlZ29yeSBBdHRyaWJ1dGVzXG4gKiBAcGFyYW0gc2VsZWN0b3IgLSBTZWxlY3RvciBmb3IgdGhlIHNlbGVjdGlvbi5cbiAqIEByZXR1cm5zIFdoZXRoZXIgb3Igbm90IHRoZSBzZWxlY3RvciBtYXRjaGVzIGFuIGVsZW1lbnQgb2YgdGhlIGluc3RhbmNlLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9pcy99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy50b0FycmF5KCk7XG4gICAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBzZWxlY3Quc29tZShub2Rlcy5maWx0ZXIoaXNUYWcpLCBzZWxlY3RvciwgdGhpcy5vcHRpb25zKVxuICAgICAgICA6IHNlbGVjdG9yXG4gICAgICAgICAgICA/IG5vZGVzLnNvbWUoZ2V0RmlsdGVyRm4oc2VsZWN0b3IpKVxuICAgICAgICAgICAgOiBmYWxzZTtcbn1cbi8qKlxuICogUmVtb3ZlIGVsZW1lbnRzIGZyb20gdGhlIHNldCBvZiBtYXRjaGVkIGVsZW1lbnRzLiBHaXZlbiBhIENoZWVyaW8gb2JqZWN0IHRoYXRcbiAqIHJlcHJlc2VudHMgYSBzZXQgb2YgRE9NIGVsZW1lbnRzLCB0aGUgYC5ub3QoKWAgbWV0aG9kIGNvbnN0cnVjdHMgYSBuZXdcbiAqIENoZWVyaW8gb2JqZWN0IGZyb20gYSBzdWJzZXQgb2YgdGhlIG1hdGNoaW5nIGVsZW1lbnRzLiBUaGUgc3VwcGxpZWQgc2VsZWN0b3JcbiAqIGlzIHRlc3RlZCBhZ2FpbnN0IGVhY2ggZWxlbWVudDsgdGhlIGVsZW1lbnRzIHRoYXQgZG9uJ3QgbWF0Y2ggdGhlIHNlbGVjdG9yXG4gKiB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSByZXN1bHQuXG4gKlxuICogVGhlIGAubm90KClgIG1ldGhvZCBjYW4gdGFrZSBhIGZ1bmN0aW9uIGFzIGl0cyBhcmd1bWVudCBpbiB0aGUgc2FtZSB3YXkgdGhhdFxuICogYC5maWx0ZXIoKWAgZG9lcy4gRWxlbWVudHMgZm9yIHdoaWNoIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCBhcmUgZXhjbHVkZWRcbiAqIGZyb20gdGhlIGZpbHRlcmVkIHNldDsgYWxsIG90aGVyIGVsZW1lbnRzIGFyZSBpbmNsdWRlZC5cbiAqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2luZ1xuICogQGV4YW1wbGUgPGNhcHRpb24+U2VsZWN0b3I8L2NhcHRpb24+XG4gKlxuICogYGBganNcbiAqICQoJ2xpJykubm90KCcuYXBwbGUnKS5sZW5ndGg7XG4gKiAvLz0+IDJcbiAqIGBgYFxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkZ1bmN0aW9uPC9jYXB0aW9uPlxuICpcbiAqIGBgYGpzXG4gKiAkKCdsaScpLm5vdChmdW5jdGlvbiAoaSwgZWwpIHtcbiAqICAgLy8gdGhpcyA9PT0gZWxcbiAqICAgcmV0dXJuICQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ29yYW5nZSc7XG4gKiB9KS5sZW5ndGg7IC8vPT4gMlxuICogYGBgXG4gKlxuICogQHBhcmFtIG1hdGNoIC0gVmFsdWUgdG8gbG9vayBmb3IsIGZvbGxvd2luZyB0aGUgcnVsZXMgYWJvdmUuXG4gKiBAcGFyYW0gY29udGFpbmVyIC0gT3B0aW9uYWwgbm9kZSB0byBmaWx0ZXIgaW5zdGVhZC5cbiAqIEByZXR1cm5zIFRoZSBmaWx0ZXJlZCBjb2xsZWN0aW9uLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9ub3QvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90KG1hdGNoKSB7XG4gICAgbGV0IG5vZGVzID0gdGhpcy50b0FycmF5KCk7XG4gICAgaWYgKHR5cGVvZiBtYXRjaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG5ldyBTZXQoc2VsZWN0LmZpbHRlcihtYXRjaCwgbm9kZXMsIHRoaXMub3B0aW9ucykpO1xuICAgICAgICBub2RlcyA9IG5vZGVzLmZpbHRlcigoZWwpID0+ICFtYXRjaGVzLmhhcyhlbCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVyRm4gPSBnZXRGaWx0ZXJGbihtYXRjaCk7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuZmlsdGVyKChlbCwgaSkgPT4gIWZpbHRlckZuKGVsLCBpKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tYWtlKG5vZGVzKTtcbn1cbi8qKlxuICogRmlsdGVycyB0aGUgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMgdG8gb25seSB0aG9zZSB3aGljaCBoYXZlIHRoZSBnaXZlbiBET01cbiAqIGVsZW1lbnQgYXMgYSBkZXNjZW5kYW50IG9yIHdoaWNoIGhhdmUgYSBkZXNjZW5kYW50IHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW5cbiAqIHNlbGVjdG9yLiBFcXVpdmFsZW50IHRvIGAuZmlsdGVyKCc6aGFzKHNlbGVjdG9yKScpYC5cbiAqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2luZ1xuICogQGV4YW1wbGUgPGNhcHRpb24+U2VsZWN0b3I8L2NhcHRpb24+XG4gKlxuICogYGBganNcbiAqICQoJ3VsJykuaGFzKCcucGVhcicpLmF0dHIoJ2lkJyk7XG4gKiAvLz0+IGZydWl0c1xuICogYGBgXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+RWxlbWVudDwvY2FwdGlvbj5cbiAqXG4gKiBgYGBqc1xuICogJCgndWwnKS5oYXMoJCgnLnBlYXInKVswXSkuYXR0cignaWQnKTtcbiAqIC8vPT4gZnJ1aXRzXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JPckhheXN0YWNrIC0gRWxlbWVudCB0byBsb29rIGZvci5cbiAqIEByZXR1cm5zIFRoZSBmaWx0ZXJlZCBjb2xsZWN0aW9uLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9oYXMvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzKHNlbGVjdG9yT3JIYXlzdGFjaykge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcih0eXBlb2Ygc2VsZWN0b3JPckhheXN0YWNrID09PSAnc3RyaW5nJ1xuICAgICAgICA/IC8vIFVzaW5nIHRoZSBgOmhhc2Agc2VsZWN0b3IgaGVyZSBzaG9ydC1jaXJjdWl0cyBzZWFyY2hlcy5cbiAgICAgICAgICAgIGA6aGFzKCR7c2VsZWN0b3JPckhheXN0YWNrfSlgXG4gICAgICAgIDogKF8sIGVsKSA9PiB0aGlzLl9tYWtlKGVsKS5maW5kKHNlbGVjdG9yT3JIYXlzdGFjaykubGVuZ3RoID4gMCk7XG59XG4vKipcbiAqIFdpbGwgc2VsZWN0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGEgY2hlZXJpbyBvYmplY3QuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJyNmcnVpdHMnKS5jaGlsZHJlbigpLmZpcnN0KCkudGV4dCgpO1xuICogLy89PiBBcHBsZVxuICogYGBgXG4gKlxuICogQHJldHVybnMgVGhlIGZpcnN0IGVsZW1lbnQuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL2ZpcnN0L31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCA+IDEgPyB0aGlzLl9tYWtlKHRoaXNbMF0pIDogdGhpcztcbn1cbi8qKlxuICogV2lsbCBzZWxlY3QgdGhlIGxhc3QgZWxlbWVudCBvZiBhIGNoZWVyaW8gb2JqZWN0LlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCcjZnJ1aXRzJykuY2hpbGRyZW4oKS5sYXN0KCkudGV4dCgpO1xuICogLy89PiBQZWFyXG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJucyBUaGUgbGFzdCBlbGVtZW50LlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9sYXN0L31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoID4gMCA/IHRoaXMuX21ha2UodGhpc1t0aGlzLmxlbmd0aCAtIDFdKSA6IHRoaXM7XG59XG4vKipcbiAqIFJlZHVjZSB0aGUgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMgdG8gdGhlIG9uZSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LiBVc2VcbiAqIGAuZXEoLWkpYCB0byBjb3VudCBiYWNrd2FyZHMgZnJvbSB0aGUgbGFzdCBzZWxlY3RlZCBlbGVtZW50LlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCdsaScpLmVxKDApLnRleHQoKTtcbiAqIC8vPT4gQXBwbGVcbiAqXG4gKiAkKCdsaScpLmVxKC0xKS50ZXh0KCk7XG4gKiAvLz0+IFBlYXJcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBpIC0gSW5kZXggb2YgdGhlIGVsZW1lbnQgdG8gc2VsZWN0LlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQgYXQgdGhlIGBpYHRoIHBvc2l0aW9uLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9lcS99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcShpKSB7XG4gICAgdmFyIF9hO1xuICAgIGkgPSAraTtcbiAgICAvLyBVc2UgdGhlIGZpcnN0IGlkZW50aXR5IG9wdGltaXphdGlvbiBpZiBwb3NzaWJsZVxuICAgIGlmIChpID09PSAwICYmIHRoaXMubGVuZ3RoIDw9IDEpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIGlmIChpIDwgMClcbiAgICAgICAgaSA9IHRoaXMubGVuZ3RoICsgaTtcbiAgICByZXR1cm4gdGhpcy5fbWFrZSgoX2EgPSB0aGlzW2ldKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0KGkpIHtcbiAgICBpZiAoaSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvQXJyYXkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbaSA8IDAgPyB0aGlzLmxlbmd0aCArIGkgOiBpXTtcbn1cbi8qKlxuICogUmV0cmlldmUgYWxsIHRoZSBET00gZWxlbWVudHMgY29udGFpbmVkIGluIHRoZSBqUXVlcnkgc2V0IGFzIGFuIGFycmF5LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJ2xpJykudG9BcnJheSgpO1xuICogLy89PiBbIHsuLi59LCB7Li4ufSwgey4uLn0gXVxuICogYGBgXG4gKlxuICogQHJldHVybnMgVGhlIGNvbnRhaW5lZCBpdGVtcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMpO1xufVxuLyoqXG4gKiBTZWFyY2ggZm9yIGEgZ2l2ZW4gZWxlbWVudCBmcm9tIGFtb25nIHRoZSBtYXRjaGVkIGVsZW1lbnRzLlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCcucGVhcicpLmluZGV4KCk7XG4gKiAvLz0+IDIgJCgnLm9yYW5nZScpLmluZGV4KCdsaScpO1xuICogLy89PiAxXG4gKiAkKCcuYXBwbGUnKS5pbmRleCgkKCcjZnJ1aXQsIGxpJykpO1xuICogLy89PiAxXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JPck5lZWRsZSAtIEVsZW1lbnQgdG8gbG9vayBmb3IuXG4gKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnQuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL2luZGV4L31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGV4KHNlbGVjdG9yT3JOZWVkbGUpIHtcbiAgICBsZXQgJGhheXN0YWNrO1xuICAgIGxldCBuZWVkbGU7XG4gICAgaWYgKHNlbGVjdG9yT3JOZWVkbGUgPT0gbnVsbCkge1xuICAgICAgICAkaGF5c3RhY2sgPSB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKCk7XG4gICAgICAgIG5lZWRsZSA9IHRoaXNbMF07XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxlY3Rvck9yTmVlZGxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAkaGF5c3RhY2sgPSB0aGlzLl9tYWtlKHNlbGVjdG9yT3JOZWVkbGUpO1xuICAgICAgICBuZWVkbGUgPSB0aGlzWzBdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICRoYXlzdGFjayA9IHRoaXM7XG4gICAgICAgIG5lZWRsZSA9IGlzQ2hlZXJpbyhzZWxlY3Rvck9yTmVlZGxlKVxuICAgICAgICAgICAgPyBzZWxlY3Rvck9yTmVlZGxlWzBdXG4gICAgICAgICAgICA6IHNlbGVjdG9yT3JOZWVkbGU7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKCRoYXlzdGFjaywgbmVlZGxlKTtcbn1cbi8qKlxuICogR2V0cyB0aGUgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHNwZWNpZmllZCByYW5nZSAoMC1iYXNlZCBwb3NpdGlvbikuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJ2xpJykuc2xpY2UoMSkuZXEoMCkudGV4dCgpO1xuICogLy89PiAnT3JhbmdlJ1xuICpcbiAqICQoJ2xpJykuc2xpY2UoMSwgMikubGVuZ3RoO1xuICogLy89PiAxXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gc3RhcnQgLSBBIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSBlbGVtZW50cyBiZWdpbiB0byBiZSBzZWxlY3RlZC4gSWZcbiAqICAgbmVnYXRpdmUsIGl0IGluZGljYXRlcyBhbiBvZmZzZXQgZnJvbSB0aGUgZW5kIG9mIHRoZSBzZXQuXG4gKiBAcGFyYW0gZW5kIC0gQSBwb3NpdGlvbiBhdCB3aGljaCB0aGUgZWxlbWVudHMgc3RvcCBiZWluZyBzZWxlY3RlZC4gSWZcbiAqICAgbmVnYXRpdmUsIGl0IGluZGljYXRlcyBhbiBvZmZzZXQgZnJvbSB0aGUgZW5kIG9mIHRoZSBzZXQuIElmIG9taXR0ZWQsIHRoZVxuICogICByYW5nZSBjb250aW51ZXMgdW50aWwgdGhlIGVuZCBvZiB0aGUgc2V0LlxuICogQHJldHVybnMgVGhlIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL3NsaWNlL31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFrZShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLCBzdGFydCwgZW5kKSk7XG59XG4vKipcbiAqIEVuZCB0aGUgbW9zdCByZWNlbnQgZmlsdGVyaW5nIG9wZXJhdGlvbiBpbiB0aGUgY3VycmVudCBjaGFpbiBhbmQgcmV0dXJuIHRoZVxuICogc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMgdG8gaXRzIHByZXZpb3VzIHN0YXRlLlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCdsaScpLmVxKDApLmVuZCgpLmxlbmd0aDtcbiAqIC8vPT4gM1xuICogYGBgXG4gKlxuICogQHJldHVybnMgVGhlIHByZXZpb3VzIHN0YXRlIG9mIHRoZSBzZXQgb2YgbWF0Y2hlZCBlbGVtZW50cy5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vZW5kL31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuZCgpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIChfYSA9IHRoaXMucHJldk9iamVjdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5fbWFrZShbXSk7XG59XG4vKipcbiAqIEFkZCBlbGVtZW50cyB0byB0aGUgc2V0IG9mIG1hdGNoZWQgZWxlbWVudHMuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNpbmdcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQoJy5hcHBsZScpLmFkZCgnLm9yYW5nZScpLmxlbmd0aDtcbiAqIC8vPT4gMlxuICogYGBgXG4gKlxuICogQHBhcmFtIG90aGVyIC0gRWxlbWVudHMgdG8gYWRkLlxuICogQHBhcmFtIGNvbnRleHQgLSBPcHRpb25hbGx5IHRoZSBjb250ZXh0IG9mIHRoZSBuZXcgc2VsZWN0aW9uLlxuICogQHJldHVybnMgVGhlIGNvbWJpbmVkIHNldC5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vYWRkL31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdGhlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuX21ha2Uob3RoZXIsIGNvbnRleHQpO1xuICAgIGNvbnN0IGNvbnRlbnRzID0gdW5pcXVlU29ydChbLi4udGhpcy5nZXQoKSwgLi4uc2VsZWN0aW9uLmdldCgpXSk7XG4gICAgcmV0dXJuIHRoaXMuX21ha2UoY29udGVudHMpO1xufVxuLyoqXG4gKiBBZGQgdGhlIHByZXZpb3VzIHNldCBvZiBlbGVtZW50cyBvbiB0aGUgc3RhY2sgdG8gdGhlIGN1cnJlbnQgc2V0LCBvcHRpb25hbGx5XG4gKiBmaWx0ZXJlZCBieSBhIHNlbGVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzaW5nXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGpzXG4gKiAkKCdsaScpLmVxKDApLmFkZEJhY2soJy5vcmFuZ2UnKS5sZW5ndGg7XG4gKiAvLz0+IDJcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciAtIFNlbGVjdG9yIGZvciB0aGUgZWxlbWVudHMgdG8gYWRkLlxuICogQHJldHVybnMgVGhlIGNvbWJpbmVkIHNldC5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vYXBpLmpxdWVyeS5jb20vYWRkQmFjay99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYWNrKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMucHJldk9iamVjdFxuICAgICAgICA/IHRoaXMuYWRkKHNlbGVjdG9yID8gdGhpcy5wcmV2T2JqZWN0LmZpbHRlcihzZWxlY3RvcikgOiB0aGlzLnByZXZPYmplY3QpXG4gICAgICAgIDogdGhpcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYXZlcnNpbmcuanMubWFwIiwiaW1wb3J0ICogYXMgQXR0cmlidXRlcyBmcm9tICcuL2FwaS9hdHRyaWJ1dGVzLmpzJztcbmltcG9ydCAqIGFzIFRyYXZlcnNpbmcgZnJvbSAnLi9hcGkvdHJhdmVyc2luZy5qcyc7XG5pbXBvcnQgKiBhcyBNYW5pcHVsYXRpb24gZnJvbSAnLi9hcGkvbWFuaXB1bGF0aW9uLmpzJztcbmltcG9ydCAqIGFzIENzcyBmcm9tICcuL2FwaS9jc3MuanMnO1xuaW1wb3J0ICogYXMgRm9ybXMgZnJvbSAnLi9hcGkvZm9ybXMuanMnO1xuZXhwb3J0IGNsYXNzIENoZWVyaW8ge1xuICAgIC8qKlxuICAgICAqIEluc3RhbmNlIG9mIGNoZWVyaW8uIE1ldGhvZHMgYXJlIHNwZWNpZmllZCBpbiB0aGUgbW9kdWxlcy4gVXNhZ2Ugb2YgdGhpc1xuICAgICAqIGNvbnN0cnVjdG9yIGlzIG5vdCByZWNvbW1lbmRlZC4gUGxlYXNlIHVzZSBgJC5sb2FkYCBpbnN0ZWFkLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0gZWxlbWVudHMgLSBUaGUgbmV3IHNlbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0gcm9vdCAtIFNldHMgdGhlIHJvb3Qgbm9kZS5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50cywgcm9vdCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSByb290O1xuICAgICAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVsZW1lbnRzLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzW2lkeF0gPSBlbGVtZW50c1tpZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSBlbGVtZW50cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKiogU2V0IGEgc2lnbmF0dXJlIG9mIHRoZSBvYmplY3QuICovXG5DaGVlcmlvLnByb3RvdHlwZS5jaGVlcmlvID0gJ1tjaGVlcmlvIG9iamVjdF0nO1xuLypcbiAqIE1ha2UgY2hlZXJpbyBhbiBhcnJheS1saWtlIG9iamVjdFxuICovXG5DaGVlcmlvLnByb3RvdHlwZS5zcGxpY2UgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlO1xuLy8gU3VwcG9ydCBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJCguLi4pKSBpdGVyYXRpb246XG5DaGVlcmlvLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gQXJyYXkucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XG4vLyBQbHVnIGluIHRoZSBBUElcbk9iamVjdC5hc3NpZ24oQ2hlZXJpby5wcm90b3R5cGUsIEF0dHJpYnV0ZXMsIFRyYXZlcnNpbmcsIE1hbmlwdWxhdGlvbiwgQ3NzLCBGb3Jtcyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGVlcmlvLmpzLm1hcCIsIi8qKlxuICogVHlwZXMgdXNlZCBpbiBzaWduYXR1cmVzIG9mIENoZWVyaW8gbWV0aG9kcy5cbiAqXG4gKiBAY2F0ZWdvcnkgQ2hlZXJpb1xuICovXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzLmpzJztcbmltcG9ydCB7IGdldExvYWQgfSBmcm9tICcuL2xvYWQuanMnO1xuaW1wb3J0IHsgZ2V0UGFyc2UgfSBmcm9tICcuL3BhcnNlLmpzJztcbmltcG9ydCB7IHJlbmRlcldpdGhQYXJzZTUsIHBhcnNlV2l0aFBhcnNlNSB9IGZyb20gJy4vcGFyc2Vycy9wYXJzZTUtYWRhcHRlci5qcyc7XG5pbXBvcnQgcmVuZGVyV2l0aEh0bWxwYXJzZXIyIGZyb20gJ2RvbS1zZXJpYWxpemVyJztcbmltcG9ydCB7IHBhcnNlRG9jdW1lbnQgYXMgcGFyc2VXaXRoSHRtbHBhcnNlcjIgfSBmcm9tICdodG1scGFyc2VyMic7XG5jb25zdCBwYXJzZSA9IGdldFBhcnNlKChjb250ZW50LCBvcHRpb25zLCBpc0RvY3VtZW50LCBjb250ZXh0KSA9PiBvcHRpb25zLnhtbE1vZGUgfHwgb3B0aW9ucy5fdXNlSHRtbFBhcnNlcjJcbiAgICA/IHBhcnNlV2l0aEh0bWxwYXJzZXIyKGNvbnRlbnQsIG9wdGlvbnMpXG4gICAgOiBwYXJzZVdpdGhQYXJzZTUoY29udGVudCwgb3B0aW9ucywgaXNEb2N1bWVudCwgY29udGV4dCkpO1xuLy8gRHVwbGljYXRlIGRvY3MgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9UeXBlU3Ryb25nL3R5cGVkb2MvaXNzdWVzLzE2MTZcbi8qKlxuICogQ3JlYXRlIGEgcXVlcnlpbmcgZnVuY3Rpb24sIGJvdW5kIHRvIGEgZG9jdW1lbnQgY3JlYXRlZCBmcm9tIHRoZSBwcm92aWRlZCBtYXJrdXAuXG4gKlxuICogTm90ZSB0aGF0IHNpbWlsYXIgdG8gd2ViIGJyb3dzZXIgY29udGV4dHMsIHRoaXMgb3BlcmF0aW9uIG1heSBpbnRyb2R1Y2VcbiAqIGA8aHRtbD5gLCBgPGhlYWQ+YCwgYW5kIGA8Ym9keT5gIGVsZW1lbnRzOyBzZXQgYGlzRG9jdW1lbnRgIHRvIGBmYWxzZWAgdG9cbiAqIHN3aXRjaCB0byBmcmFnbWVudCBtb2RlIGFuZCBkaXNhYmxlIHRoaXMuXG4gKlxuICogQHBhcmFtIGNvbnRlbnQgLSBNYXJrdXAgdG8gYmUgbG9hZGVkLlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgY3JlYXRlZCBpbnN0YW5jZS5cbiAqIEBwYXJhbSBpc0RvY3VtZW50IC0gQWxsb3dzIHBhcnNlciB0byBiZSBzd2l0Y2hlZCB0byBmcmFnbWVudCBtb2RlLlxuICogQHJldHVybnMgVGhlIGxvYWRlZCBkb2N1bWVudC5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vY2hlZXJpby5qcy5vcmcjbG9hZGluZ30gZm9yIGFkZGl0aW9uYWwgdXNhZ2UgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkID0gZ2V0TG9hZChwYXJzZSwgKGRvbSwgb3B0aW9ucykgPT4gb3B0aW9ucy54bWxNb2RlIHx8IG9wdGlvbnMuX3VzZUh0bWxQYXJzZXIyXG4gICAgPyByZW5kZXJXaXRoSHRtbHBhcnNlcjIoZG9tLCBvcHRpb25zKVxuICAgIDogcmVuZGVyV2l0aFBhcnNlNShkb20pKTtcbi8qKlxuICogVGhlIGRlZmF1bHQgY2hlZXJpbyBpbnN0YW5jZS5cbiAqXG4gKiBAZGVwcmVjYXRlZCBVc2UgdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBsb2FkYCBpbnN0ZWFkLlxuICovXG5leHBvcnQgZGVmYXVsdCBsb2FkKFtdKTtcbmV4cG9ydCB7IGh0bWwsIHhtbCwgdGV4dCB9IGZyb20gJy4vc3RhdGljLmpzJztcbmltcG9ydCAqIGFzIHN0YXRpY01ldGhvZHMgZnJvbSAnLi9zdGF0aWMuanMnO1xuLyoqXG4gKiBJbiBvcmRlciB0byBwcm9tb3RlIGNvbnNpc3RlbmN5IHdpdGggdGhlIGpRdWVyeSBsaWJyYXJ5LCB1c2VycyBhcmUgZW5jb3VyYWdlZFxuICogdG8gaW5zdGVhZCB1c2UgdGhlIHN0YXRpYyBtZXRob2Qgb2YgdGhlIHNhbWUgbmFtZS5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgJCA9IGNoZWVyaW8ubG9hZCgnPGRpdj48cD48L3A+PC9kaXY+Jyk7XG4gKlxuICogJC5jb250YWlucygkKCdkaXYnKS5nZXQoMCksICQoJ3AnKS5nZXQoMCkpO1xuICogLy89PiB0cnVlXG4gKlxuICogJC5jb250YWlucygkKCdwJykuZ2V0KDApLCAkKCdkaXYnKS5nZXQoMCkpO1xuICogLy89PiBmYWxzZVxuICogYGBgXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCB7IGNvbnRhaW5zIH0gPSBzdGF0aWNNZXRob2RzO1xuLyoqXG4gKiBJbiBvcmRlciB0byBwcm9tb3RlIGNvbnNpc3RlbmN5IHdpdGggdGhlIGpRdWVyeSBsaWJyYXJ5LCB1c2VycyBhcmUgZW5jb3VyYWdlZFxuICogdG8gaW5zdGVhZCB1c2UgdGhlIHN0YXRpYyBtZXRob2Qgb2YgdGhlIHNhbWUgbmFtZS5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgJCA9IGNoZWVyaW8ubG9hZCgnJyk7XG4gKlxuICogJC5tZXJnZShbMSwgMl0sIFszLCA0XSk7XG4gKiAvLz0+IFsxLCAyLCAzLCA0XVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCB7IG1lcmdlIH0gPSBzdGF0aWNNZXRob2RzO1xuLyoqXG4gKiBJbiBvcmRlciB0byBwcm9tb3RlIGNvbnNpc3RlbmN5IHdpdGggdGhlIGpRdWVyeSBsaWJyYXJ5LCB1c2VycyBhcmUgZW5jb3VyYWdlZFxuICogdG8gaW5zdGVhZCB1c2UgdGhlIHN0YXRpYyBtZXRob2Qgb2YgdGhlIHNhbWUgbmFtZSBhcyBpdCBpcyBkZWZpbmVkIG9uIHRoZVxuICogXCJsb2FkZWRcIiBDaGVlcmlvIGZhY3RvcnkgZnVuY3Rpb24uXG4gKlxuICogQGRlcHJlY2F0ZWQgU2VlIHtAbGluayBzdGF0aWMvcGFyc2VIVE1MfS5cbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoJycpO1xuICogJC5wYXJzZUhUTUwoJzxiPm1hcmt1cDwvYj4nKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgeyBwYXJzZUhUTUwgfSA9IHN0YXRpY01ldGhvZHM7XG4vKipcbiAqIFVzZXJzIHNlZWtpbmcgdG8gYWNjZXNzIHRoZSB0b3AtbGV2ZWwgZWxlbWVudCBvZiBhIHBhcnNlZCBkb2N1bWVudCBzaG91bGRcbiAqIGluc3RlYWQgdXNlIHRoZSBgcm9vdGAgc3RhdGljIG1ldGhvZCBvZiBhIFwibG9hZGVkXCIgQ2hlZXJpbyBmdW5jdGlvbi5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqc1xuICogY29uc3QgJCA9IGNoZWVyaW8ubG9hZCgnJyk7XG4gKiAkLnJvb3QoKTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgeyByb290IH0gPSBzdGF0aWNNZXRob2RzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0T3B0aW9ucywgZmxhdHRlbiBhcyBmbGF0dGVuT3B0aW9ucywgfSBmcm9tICcuL29wdGlvbnMuanMnO1xuaW1wb3J0ICogYXMgc3RhdGljTWV0aG9kcyBmcm9tICcuL3N0YXRpYy5qcyc7XG5pbXBvcnQgeyBDaGVlcmlvIH0gZnJvbSAnLi9jaGVlcmlvLmpzJztcbmltcG9ydCB7IGlzSHRtbCwgaXNDaGVlcmlvIH0gZnJvbSAnLi91dGlscy5qcyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9hZChwYXJzZSwgcmVuZGVyKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcXVlcnlpbmcgZnVuY3Rpb24sIGJvdW5kIHRvIGEgZG9jdW1lbnQgY3JlYXRlZCBmcm9tIHRoZSBwcm92aWRlZCBtYXJrdXAuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgc2ltaWxhciB0byB3ZWIgYnJvd3NlciBjb250ZXh0cywgdGhpcyBvcGVyYXRpb24gbWF5IGludHJvZHVjZVxuICAgICAqIGA8aHRtbD5gLCBgPGhlYWQ+YCwgYW5kIGA8Ym9keT5gIGVsZW1lbnRzOyBzZXQgYGlzRG9jdW1lbnRgIHRvIGBmYWxzZWAgdG9cbiAgICAgKiBzd2l0Y2ggdG8gZnJhZ21lbnQgbW9kZSBhbmQgZGlzYWJsZSB0aGlzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRlbnQgLSBNYXJrdXAgdG8gYmUgbG9hZGVkLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIGNyZWF0ZWQgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIGlzRG9jdW1lbnQgLSBBbGxvd3MgcGFyc2VyIHRvIGJlIHN3aXRjaGVkIHRvIGZyYWdtZW50IG1vZGUuXG4gICAgICogQHJldHVybnMgVGhlIGxvYWRlZCBkb2N1bWVudC5cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL2NoZWVyaW8uanMub3JnI2xvYWRpbmd9IGZvciBhZGRpdGlvbmFsIHVzYWdlIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBsb2FkKGNvbnRlbnQsIG9wdGlvbnMsIGlzRG9jdW1lbnQgPSB0cnVlKSB7XG4gICAgICAgIGlmIChjb250ZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2hlZXJpby5sb2FkKCkgZXhwZWN0cyBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGludGVybmFsT3B0cyA9IHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLmZsYXR0ZW5PcHRpb25zKG9wdGlvbnMpIH07XG4gICAgICAgIGNvbnN0IGluaXRpYWxSb290ID0gcGFyc2UoY29udGVudCwgaW50ZXJuYWxPcHRzLCBpc0RvY3VtZW50LCBudWxsKTtcbiAgICAgICAgLyoqIENyZWF0ZSBhbiBleHRlbmRlZCBjbGFzcyBoZXJlLCBzbyB0aGF0IGV4dGVuc2lvbnMgb25seSBsaXZlIG9uIG9uZSBpbnN0YW5jZS4gKi9cbiAgICAgICAgY2xhc3MgTG9hZGVkQ2hlZXJpbyBleHRlbmRzIENoZWVyaW8ge1xuICAgICAgICAgICAgX21ha2Uoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVlcmlvID0gaW5pdGlhbGl6ZShzZWxlY3RvciwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgY2hlZXJpby5wcmV2T2JqZWN0ID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hlZXJpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9wYXJzZShjb250ZW50LCBvcHRpb25zLCBpc0RvY3VtZW50LCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlKGNvbnRlbnQsIG9wdGlvbnMsIGlzRG9jdW1lbnQsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3JlbmRlcihkb20pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyKGRvbSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpbml0aWFsaXplKHNlbGVjdG9yLCBjb250ZXh0LCByb290ID0gaW5pdGlhbFJvb3QsIG9wdHMpIHtcbiAgICAgICAgICAgIC8vICQoJClcbiAgICAgICAgICAgIGlmIChzZWxlY3RvciAmJiBpc0NoZWVyaW8oc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgLi4uaW50ZXJuYWxPcHRzLFxuICAgICAgICAgICAgICAgIC4uLmZsYXR0ZW5PcHRpb25zKG9wdHMpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0eXBlb2Ygcm9vdCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IFtwYXJzZShyb290LCBvcHRpb25zLCBmYWxzZSwgbnVsbCldXG4gICAgICAgICAgICAgICAgOiAnbGVuZ3RoJyBpbiByb290XG4gICAgICAgICAgICAgICAgICAgID8gcm9vdFxuICAgICAgICAgICAgICAgICAgICA6IFtyb290XTtcbiAgICAgICAgICAgIGNvbnN0IHJvb3RJbnN0YW5jZSA9IGlzQ2hlZXJpbyhyKVxuICAgICAgICAgICAgICAgID8gclxuICAgICAgICAgICAgICAgIDogbmV3IExvYWRlZENoZWVyaW8ociwgbnVsbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAvLyBBZGQgYSBjeWNsaWMgcmVmZXJlbmNlLCBzbyB0aGF0IGNhbGxpbmcgbWV0aG9kcyBvbiBgX3Jvb3RgIG5ldmVyIGZhaWxzLlxuICAgICAgICAgICAgcm9vdEluc3RhbmNlLl9yb290ID0gcm9vdEluc3RhbmNlO1xuICAgICAgICAgICAgLy8gJCgpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMb2FkZWRDaGVlcmlvKHVuZGVmaW5lZCwgcm9vdEluc3RhbmNlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyAmJiBpc0h0bWwoc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgPyAvLyAkKDxodG1sPilcbiAgICAgICAgICAgICAgICAgICAgcGFyc2Uoc2VsZWN0b3IsIG9wdGlvbnMsIGZhbHNlLCBudWxsKS5jaGlsZHJlblxuICAgICAgICAgICAgICAgIDogaXNOb2RlKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICA/IC8vICQoZG9tKVxuICAgICAgICAgICAgICAgICAgICAgICAgW3NlbGVjdG9yXVxuICAgICAgICAgICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IC8vICQoW2RvbV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTG9hZGVkQ2hlZXJpbyhlbGVtZW50cywgcm9vdEluc3RhbmNlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIHR5cGUgb2Ygc2VsZWN0b3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIGtub3cgdGhhdCBvdXIgc2VsZWN0b3IgaXMgYSBzdHJpbmcgbm93LlxuICAgICAgICAgICAgbGV0IHNlYXJjaCA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoQ29udGV4dCA9ICFjb250ZXh0XG4gICAgICAgICAgICAgICAgPyAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgY29udGV4dCwgbWF5YmUgd2UgaGF2ZSBhIHJvb3QsIGZyb20gbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICByb290SW5zdGFuY2VcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiBjb250ZXh0ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICA/IGlzSHRtbChjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAvLyAkKCdsaScsICc8dWw+Li4uPC91bD4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMb2FkZWRDaGVlcmlvKFtwYXJzZShjb250ZXh0LCBvcHRpb25zLCBmYWxzZSwgbnVsbCldLCByb290SW5zdGFuY2UsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IC8vICQoJ2xpJywgJ3VsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHNlYXJjaCA9IGAke2NvbnRleHR9ICR7c2VhcmNofWApLCByb290SW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgICAgIDogaXNDaGVlcmlvKGNvbnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IC8vICQoJ2xpJywgJClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICA6IC8vICQoJ2xpJywgbm9kZSksICQoJ2xpJywgW25vZGVzXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTG9hZGVkQ2hlZXJpbyhBcnJheS5pc0FycmF5KGNvbnRleHQpID8gY29udGV4dCA6IFtjb250ZXh0XSwgcm9vdEluc3RhbmNlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIC8vIElmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSBjb250ZXh0LCByZXR1cm5cbiAgICAgICAgICAgIGlmICghc2VhcmNoQ29udGV4dClcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogI2lkLCAuY2xhc3MsIHRhZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQ29udGV4dC5maW5kKHNlYXJjaCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGluIHN0YXRpYyBtZXRob2RzICYgcHJvcGVydGllc1xuICAgICAgICBPYmplY3QuYXNzaWduKGluaXRpYWxpemUsIHN0YXRpY01ldGhvZHMsIHtcbiAgICAgICAgICAgIGxvYWQsXG4gICAgICAgICAgICAvLyBgX3Jvb3RgIGFuZCBgX29wdGlvbnNgIGFyZSB1c2VkIGluIHN0YXRpYyBtZXRob2RzLlxuICAgICAgICAgICAgX3Jvb3Q6IGluaXRpYWxSb290LFxuICAgICAgICAgICAgX29wdGlvbnM6IGludGVybmFsT3B0cyxcbiAgICAgICAgICAgIC8vIEFkZCBgZm5gIGZvciBwbHVnaW5zXG4gICAgICAgICAgICBmbjogTG9hZGVkQ2hlZXJpby5wcm90b3R5cGUsXG4gICAgICAgICAgICAvLyBBZGQgdGhlIHByb3RvdHlwZSBoZXJlIHRvIG1haW50YWluIGBpbnN0YW5jZW9mYCBiZWhhdmlvci5cbiAgICAgICAgICAgIHByb3RvdHlwZTogTG9hZGVkQ2hlZXJpby5wcm90b3R5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW5pdGlhbGl6ZTtcbiAgICB9O1xufVxuZnVuY3Rpb24gaXNOb2RlKG9iaikge1xuICAgIHJldHVybiAoISFvYmoubmFtZSB8fFxuICAgICAgICBvYmoudHlwZSA9PT0gJ3Jvb3QnIHx8XG4gICAgICAgIG9iai50eXBlID09PSAndGV4dCcgfHxcbiAgICAgICAgb2JqLnR5cGUgPT09ICdjb21tZW50Jyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2FkLmpzLm1hcCIsImNvbnN0IGRlZmF1bHRPcHRzID0ge1xuICAgIHhtbDogZmFsc2UsXG4gICAgZGVjb2RlRW50aXRpZXM6IHRydWUsXG59O1xuLyoqIENoZWVyaW8gZGVmYXVsdCBvcHRpb25zLiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdE9wdHM7XG5jb25zdCB4bWxNb2RlRGVmYXVsdCA9IHtcbiAgICBfdXNlSHRtbFBhcnNlcjI6IHRydWUsXG4gICAgeG1sTW9kZTogdHJ1ZSxcbn07XG4vKipcbiAqIEZsYXR0ZW4gdGhlIG9wdGlvbnMgZm9yIENoZWVyaW8uXG4gKlxuICogVGhpcyB3aWxsIHNldCBgX3VzZUh0bWxQYXJzZXIyYCB0byB0cnVlIGlmIGB4bWxgIGlzIHNldCB0byB0cnVlLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgdG8gZmxhdHRlbi5cbiAqIEByZXR1cm5zIFRoZSBmbGF0dGVuZWQgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4ob3B0aW9ucykge1xuICAgIHJldHVybiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnhtbClcbiAgICAgICAgPyB0eXBlb2Ygb3B0aW9ucy54bWwgPT09ICdib29sZWFuJ1xuICAgICAgICAgICAgPyB4bWxNb2RlRGVmYXVsdFxuICAgICAgICAgICAgOiB7IC4uLnhtbE1vZGVEZWZhdWx0LCAuLi5vcHRpb25zLnhtbCB9XG4gICAgICAgIDogb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDogdW5kZWZpbmVkO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3B0aW9ucy5qcy5tYXAiLCJpbXBvcnQgeyByZW1vdmVFbGVtZW50IH0gZnJvbSAnZG9tdXRpbHMnO1xuaW1wb3J0IHsgRG9jdW1lbnQsIGlzRG9jdW1lbnQgYXMgY2hlY2tJc0RvY3VtZW50LCB9IGZyb20gJ2RvbWhhbmRsZXInO1xuLyoqXG4gKiBHZXQgdGhlIHBhcnNlIGZ1bmN0aW9uIHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gcGFyc2VyIC0gVGhlIHBhcnNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIFRoZSBwYXJzZSBmdW5jdGlvbiB3aXRoIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJzZShwYXJzZXIpIHtcbiAgICAvKipcbiAgICAgKiBQYXJzZSBhIEhUTUwgc3RyaW5nIG9yIGEgbm9kZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZW50IC0gVGhlIEhUTUwgc3RyaW5nIG9yIG5vZGUuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgcGFyc2VyIG9wdGlvbnMuXG4gICAgICogQHBhcmFtIGlzRG9jdW1lbnQgLSBJZiBgY29udGVudGAgaXMgYSBkb2N1bWVudC5cbiAgICAgKiBAcGFyYW0gY29udGV4dCAtIFRoZSBjb250ZXh0IG5vZGUgaW4gdGhlIERPTSB0cmVlLlxuICAgICAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZG9jdW1lbnQgbm9kZS5cbiAgICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gcGFyc2UoY29udGVudCwgb3B0aW9ucywgaXNEb2N1bWVudCwgY29udGV4dCkge1xuICAgICAgICBpZiAodHlwZW9mIEJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgQnVmZmVyLmlzQnVmZmVyKGNvbnRlbnQpKSB7XG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZXIoY29udGVudCwgb3B0aW9ucywgaXNEb2N1bWVudCwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZG9jID0gY29udGVudDtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRvYykgJiYgY2hlY2tJc0RvY3VtZW50KGRvYykpIHtcbiAgICAgICAgICAgIC8vIElmIGBkb2NgIGlzIGFscmVhZHkgYSByb290LCBqdXN0IHJldHVybiBpdFxuICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgY29uZW50IHRvIG5ldyByb290IGVsZW1lbnRcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBEb2N1bWVudChbXSk7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgRE9NIHVzaW5nIHRoZSByb290XG4gICAgICAgIHVwZGF0ZShkb2MsIHJvb3QpO1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9O1xufVxuLyoqXG4gKiBVcGRhdGUgdGhlIGRvbSBzdHJ1Y3R1cmUsIGZvciBvbmUgY2hhbmdlZCBsYXllci5cbiAqXG4gKiBAcGFyYW0gbmV3Q2hpbGRzIC0gVGhlIG5ldyBjaGlsZHJlbi5cbiAqIEBwYXJhbSBwYXJlbnQgLSBUaGUgbmV3IHBhcmVudC5cbiAqIEByZXR1cm5zIFRoZSBwYXJlbnQgbm9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShuZXdDaGlsZHMsIHBhcmVudCkge1xuICAgIC8vIE5vcm1hbGl6ZVxuICAgIGNvbnN0IGFyciA9IEFycmF5LmlzQXJyYXkobmV3Q2hpbGRzKSA/IG5ld0NoaWxkcyA6IFtuZXdDaGlsZHNdO1xuICAgIC8vIFVwZGF0ZSBwYXJlbnRcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IGFycjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBhcmVudCA9IG51bGw7XG4gICAgfVxuICAgIC8vIFVwZGF0ZSBuZWlnaGJvcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBub2RlID0gYXJyW2ldO1xuICAgICAgICAvLyBDbGVhbmx5IHJlbW92ZSBleGlzdGluZyBub2RlcyBmcm9tIHRoZWlyIHByZXZpb3VzIHN0cnVjdHVyZXMuXG4gICAgICAgIGlmIChub2RlLnBhcmVudCAmJiBub2RlLnBhcmVudC5jaGlsZHJlbiAhPT0gYXJyKSB7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50KG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIG5vZGUucHJldiA9IGFycltpIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgICAgIG5vZGUubmV4dCA9IGFycltpICsgMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUucHJldiA9IG5vZGUubmV4dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS5qcy5tYXAiLCJpbXBvcnQgeyBpc0RvY3VtZW50IH0gZnJvbSAnZG9taGFuZGxlcic7XG5pbXBvcnQgeyBwYXJzZSBhcyBwYXJzZURvY3VtZW50LCBwYXJzZUZyYWdtZW50LCBzZXJpYWxpemVPdXRlciB9IGZyb20gJ3BhcnNlNSc7XG5pbXBvcnQgeyBhZGFwdGVyIGFzIGh0bWxwYXJzZXIyQWRhcHRlciB9IGZyb20gJ3BhcnNlNS1odG1scGFyc2VyMi10cmVlLWFkYXB0ZXInO1xuLyoqXG4gKiBQYXJzZSB0aGUgY29udGVudCB3aXRoIGBwYXJzZTVgIGluIHRoZSBjb250ZXh0IG9mIHRoZSBnaXZlbiBgUGFyZW50Tm9kZWAuXG4gKlxuICogQHBhcmFtIGNvbnRlbnQgLSBUaGUgY29udGVudCB0byBwYXJzZS5cbiAqIEBwYXJhbSBvcHRpb25zIC0gQSBzZXQgb2Ygb3B0aW9ucyB0byB1c2UgdG8gcGFyc2UuXG4gKiBAcGFyYW0gaXNEb2N1bWVudCAtIFdoZXRoZXIgdG8gcGFyc2UgdGhlIGNvbnRlbnQgYXMgYSBmdWxsIEhUTUwgZG9jdW1lbnQuXG4gKiBAcGFyYW0gY29udGV4dCAtIFRoZSBjb250ZXh0IGluIHdoaWNoIHRvIHBhcnNlIHRoZSBjb250ZW50LlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBjb250ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VXaXRoUGFyc2U1KGNvbnRlbnQsIG9wdGlvbnMsIGlzRG9jdW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICBzY3JpcHRpbmdFbmFibGVkOiB0eXBlb2Ygb3B0aW9ucy5zY3JpcHRpbmdFbmFibGVkID09PSAnYm9vbGVhbidcbiAgICAgICAgICAgID8gb3B0aW9ucy5zY3JpcHRpbmdFbmFibGVkXG4gICAgICAgICAgICA6IHRydWUsXG4gICAgICAgIHRyZWVBZGFwdGVyOiBodG1scGFyc2VyMkFkYXB0ZXIsXG4gICAgICAgIHNvdXJjZUNvZGVMb2NhdGlvbkluZm86IG9wdGlvbnMuc291cmNlQ29kZUxvY2F0aW9uSW5mbyxcbiAgICB9O1xuICAgIHJldHVybiBpc0RvY3VtZW50XG4gICAgICAgID8gcGFyc2VEb2N1bWVudChjb250ZW50LCBvcHRzKVxuICAgICAgICA6IHBhcnNlRnJhZ21lbnQoY29udGV4dCwgY29udGVudCwgb3B0cyk7XG59XG5jb25zdCByZW5kZXJPcHRzID0geyB0cmVlQWRhcHRlcjogaHRtbHBhcnNlcjJBZGFwdGVyIH07XG4vKipcbiAqIFJlbmRlcnMgdGhlIGdpdmVuIERPTSB0cmVlIHdpdGggYHBhcnNlNWAgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBhcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gZG9tIC0gVGhlIERPTSB0cmVlIHRvIHJlbmRlci5cbiAqIEByZXR1cm5zIFRoZSByZW5kZXJlZCBkb2N1bWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldpdGhQYXJzZTUoZG9tKSB7XG4gICAgLypcbiAgICAgKiBgZG9tLXNlcmlhbGl6ZXJgIHBhc3NlcyBvdmVyIHRoZSBzcGVjaWFsIFwicm9vdFwiIG5vZGUgYW5kIHJlbmRlcnMgdGhlXG4gICAgICogbm9kZSdzIGNoaWxkcmVuIGluIGl0cyBwbGFjZS4gVG8gbWltaWMgdGhpcyBiZWhhdmlvciB3aXRoIGBwYXJzZTVgLCBhblxuICAgICAqIGVxdWl2YWxlbnQgb3BlcmF0aW9uIG11c3QgYmUgYXBwbGllZCB0byB0aGUgaW5wdXQgYXJyYXkuXG4gICAgICovXG4gICAgY29uc3Qgbm9kZXMgPSAnbGVuZ3RoJyBpbiBkb20gPyBkb20gOiBbZG9tXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZXMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpbmRleF07XG4gICAgICAgIGlmIChpc0RvY3VtZW50KG5vZGUpKSB7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwobm9kZXMsIGluZGV4LCAxLCAuLi5ub2RlLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaW5kZXhdO1xuICAgICAgICByZXN1bHQgKz0gc2VyaWFsaXplT3V0ZXIobm9kZSwgcmVuZGVyT3B0cyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZTUtYWRhcHRlci5qcy5tYXAiLCJpbXBvcnQgeyB0ZXh0Q29udGVudCB9IGZyb20gJ2RvbXV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdE9wdGlvbnMsIGZsYXR0ZW4gYXMgZmxhdHRlbk9wdGlvbnMsIH0gZnJvbSAnLi9vcHRpb25zLmpzJztcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHJlbmRlciBhIERPTS5cbiAqXG4gKiBAcGFyYW0gdGhhdCAtIENoZWVyaW8gaW5zdGFuY2UgdG8gcmVuZGVyLlxuICogQHBhcmFtIGRvbSAtIFRoZSBET00gdG8gcmVuZGVyLiBEZWZhdWx0cyB0byBgdGhhdGAncyByb290LlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIGZvciByZW5kZXJpbmcuXG4gKiBAcmV0dXJucyBUaGUgcmVuZGVyZWQgZG9jdW1lbnQuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlcih0aGF0LCBkb20sIG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoYXQpXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gdGhhdChkb20gIT09IG51bGwgJiYgZG9tICE9PSB2b2lkIDAgPyBkb20gOiB0aGF0Ll9yb290LmNoaWxkcmVuLCBudWxsLCB1bmRlZmluZWQsIG9wdGlvbnMpLnRvU3RyaW5nKCk7XG59XG4vKipcbiAqIENoZWNrcyBpZiBhIHBhc3NlZCBvYmplY3QgaXMgYW4gb3B0aW9ucyBvYmplY3QuXG4gKlxuICogQHBhcmFtIGRvbSAtIE9iamVjdCB0byBjaGVjayBpZiBpdCBpcyBhbiBvcHRpb25zIG9iamVjdC5cbiAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIG9iamVjdCBpcyBhbiBvcHRpb25zIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNPcHRpb25zKGRvbSwgb3B0aW9ucykge1xuICAgIHJldHVybiAoIW9wdGlvbnMgJiZcbiAgICAgICAgdHlwZW9mIGRvbSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgZG9tICE9IG51bGwgJiZcbiAgICAgICAgISgnbGVuZ3RoJyBpbiBkb20pICYmXG4gICAgICAgICEoJ3R5cGUnIGluIGRvbSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGh0bWwoZG9tLCBvcHRpb25zKSB7XG4gICAgLypcbiAgICAgKiBCZSBmbGV4aWJsZSBhYm91dCBwYXJhbWV0ZXJzLCBzb21ldGltZXMgd2UgY2FsbCBodG1sKCksXG4gICAgICogd2l0aCBvcHRpb25zIGFzIG9ubHkgcGFyYW1ldGVyXG4gICAgICogY2hlY2sgZG9tIGFyZ3VtZW50IGZvciBkb20gZWxlbWVudCBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gICAgICogYXNzdW1lIHRoZXJlIGlzIG5vICdsZW5ndGgnIG9yICd0eXBlJyBwcm9wZXJ0aWVzIGluIHRoZSBvcHRpb25zIG9iamVjdFxuICAgICAqL1xuICAgIGNvbnN0IHRvUmVuZGVyID0gaXNPcHRpb25zKGRvbSkgPyAoKG9wdGlvbnMgPSBkb20pLCB1bmRlZmluZWQpIDogZG9tO1xuICAgIC8qXG4gICAgICogU29tZXRpbWVzIGAkLmh0bWwoKWAgaXMgdXNlZCB3aXRob3V0IHByZWxvYWRpbmcgaHRtbCxcbiAgICAgKiBzbyBmYWxsYmFjayBub24tZXhpc3Rpbmcgb3B0aW9ucyB0byB0aGUgZGVmYXVsdCBvbmVzLlxuICAgICAqL1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgICAuLi50aGlzID09PSBudWxsIHx8IHRoaXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRoaXMuX29wdGlvbnMsXG4gICAgICAgIC4uLmZsYXR0ZW5PcHRpb25zKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9KSxcbiAgICB9O1xuICAgIHJldHVybiByZW5kZXIodGhpcywgdG9SZW5kZXIsIG9wdHMpO1xufVxuLyoqXG4gKiBSZW5kZXIgdGhlIGRvY3VtZW50IGFzIFhNTC5cbiAqXG4gKiBAcGFyYW0gZG9tIC0gRWxlbWVudCB0byByZW5kZXIuXG4gKiBAcmV0dXJucyBUSGUgcmVuZGVyZWQgZG9jdW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB4bWwoZG9tKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgLi4udGhpcy5fb3B0aW9ucywgeG1sTW9kZTogdHJ1ZSB9O1xuICAgIHJldHVybiByZW5kZXIodGhpcywgZG9tLCBvcHRpb25zKTtcbn1cbi8qKlxuICogUmVuZGVyIHRoZSBkb2N1bWVudCBhcyB0ZXh0LlxuICpcbiAqIFRoaXMgcmV0dXJucyB0aGUgYHRleHRDb250ZW50YCBvZiB0aGUgcGFzc2VkIGVsZW1lbnRzLiBUaGUgcmVzdWx0IHdpbGxcbiAqIGluY2x1ZGUgdGhlIGNvbnRlbnRzIG9mIGBzY3JpcHRgIGFuZCBgc3R5cGVgIGVsZW1lbnRzLiBUbyBhdm9pZCB0aGlzLCB1c2VcbiAqIGAucHJvcCgnaW5uZXJUZXh0JylgIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIGVsZW1lbnRzIC0gRWxlbWVudHMgdG8gcmVuZGVyLlxuICogQHJldHVybnMgVGhlIHJlbmRlcmVkIGRvY3VtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGV4dChlbGVtZW50cykge1xuICAgIGNvbnN0IGVsZW1zID0gZWxlbWVudHMgPyBlbGVtZW50cyA6IHRoaXMgPyB0aGlzLnJvb3QoKSA6IFtdO1xuICAgIGxldCByZXQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJldCArPSB0ZXh0Q29udGVudChlbGVtc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIVE1MKGRhdGEsIGNvbnRleHQsIGtlZXBTY3JpcHRzID0gdHlwZW9mIGNvbnRleHQgPT09ICdib29sZWFuJyA/IGNvbnRleHQgOiBmYWxzZSkge1xuICAgIGlmICghZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY29udGV4dCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGtlZXBTY3JpcHRzID0gY29udGV4dDtcbiAgICB9XG4gICAgY29uc3QgcGFyc2VkID0gdGhpcy5sb2FkKGRhdGEsIGRlZmF1bHRPcHRpb25zLCBmYWxzZSk7XG4gICAgaWYgKCFrZWVwU2NyaXB0cykge1xuICAgICAgICBwYXJzZWQoJ3NjcmlwdCcpLnJlbW92ZSgpO1xuICAgIH1cbiAgICAvKlxuICAgICAqIFRoZSBgY2hpbGRyZW5gIGFycmF5IGlzIHVzZWQgYnkgQ2hlZXJpbyBpbnRlcm5hbGx5IHRvIGdyb3VwIGVsZW1lbnRzIHRoYXRcbiAgICAgKiBzaGFyZSB0aGUgc2FtZSBwYXJlbnRzLiBXaGVuIG5vZGVzIGNyZWF0ZWQgdGhyb3VnaCBgcGFyc2VIVE1MYCBhcmVcbiAgICAgKiBpbnNlcnRlZCBpbnRvIHByZXZpb3VzbHktZXhpc3RpbmcgRE9NIHN0cnVjdHVyZXMsIHRoZXkgd2lsbCBiZSByZW1vdmVkXG4gICAgICogZnJvbSB0aGUgYGNoaWxkcmVuYCBhcnJheS4gVGhlIHJlc3VsdHMgb2YgYHBhcnNlSFRNTGAgc2hvdWxkIHJlbWFpblxuICAgICAqIGNvbnN0YW50IGFjcm9zcyB0aGVzZSBvcGVyYXRpb25zLCBzbyBhIHNoYWxsb3cgY29weSBzaG91bGQgYmUgcmV0dXJuZWQuXG4gICAgICovXG4gICAgcmV0dXJuIHBhcnNlZC5yb290KClbMF0uY2hpbGRyZW4uc2xpY2UoKTtcbn1cbi8qKlxuICogU29tZXRpbWVzIHlvdSBuZWVkIHRvIHdvcmsgd2l0aCB0aGUgdG9wLWxldmVsIHJvb3QgZWxlbWVudC4gVG8gcXVlcnkgaXQsIHlvdVxuICogY2FuIHVzZSBgJC5yb290KClgLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBganNcbiAqICQucm9vdCgpLmFwcGVuZCgnPHVsIGlkPVwidmVnZXRhYmxlc1wiPjwvdWw+JykuaHRtbCgpO1xuICogLy89PiA8dWwgaWQ9XCJmcnVpdHNcIj4uLi48L3VsPjx1bCBpZD1cInZlZ2V0YWJsZXNcIj48L3VsPlxuICogYGBgXG4gKlxuICogQHJldHVybnMgQ2hlZXJpbyBpbnN0YW5jZSB3cmFwcGluZyB0aGUgcm9vdCBub2RlLlxuICogQGFsaWFzIENoZWVyaW8ucm9vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcyh0aGlzLl9yb290KTtcbn1cbi8qKlxuICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgYGNvbnRhaW5lZGAgRE9NIGVsZW1lbnQgaXMgYSBkZXNjZW5kYW50IG9mIHRoZVxuICogYGNvbnRhaW5lcmAgRE9NIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIGNvbnRhaW5lciAtIFBvdGVudGlhbCBwYXJlbnQgbm9kZS5cbiAqIEBwYXJhbSBjb250YWluZWQgLSBQb3RlbnRpYWwgY2hpbGQgbm9kZS5cbiAqIEByZXR1cm5zIEluZGljYXRlcyBpZiB0aGUgbm9kZXMgY29udGFpbiBvbmUgYW5vdGhlci5cbiAqIEBhbGlhcyBDaGVlcmlvLmNvbnRhaW5zXG4gKiBAc2VlIHtAbGluayBodHRwczovL2FwaS5qcXVlcnkuY29tL2pRdWVyeS5jb250YWlucy99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250YWlucyhjb250YWluZXIsIGNvbnRhaW5lZCkge1xuICAgIC8vIEFjY29yZGluZyB0byB0aGUgalF1ZXJ5IEFQSSwgYW4gZWxlbWVudCBkb2VzIG5vdCBcImNvbnRhaW5cIiBpdHNlbGZcbiAgICBpZiAoY29udGFpbmVkID09PSBjb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvKlxuICAgICAqIFN0ZXAgdXAgdGhlIGRlc2NlbmRhbnRzLCBzdG9wcGluZyB3aGVuIHRoZSByb290IGVsZW1lbnQgaXMgcmVhY2hlZFxuICAgICAqIChzaWduYWxlZCBieSBgLnBhcmVudGAgcmV0dXJuaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBzYW1lIG9iamVjdClcbiAgICAgKi9cbiAgICBsZXQgbmV4dCA9IGNvbnRhaW5lZDtcbiAgICB3aGlsZSAobmV4dCAmJiBuZXh0ICE9PSBuZXh0LnBhcmVudCkge1xuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnQ7XG4gICAgICAgIGlmIChuZXh0ID09PSBjb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogJC5tZXJnZSgpLlxuICpcbiAqIEBwYXJhbSBhcnIxIC0gRmlyc3QgYXJyYXkuXG4gKiBAcGFyYW0gYXJyMiAtIFNlY29uZCBhcnJheS5cbiAqIEByZXR1cm5zIGBhcnIxYCwgd2l0aCBlbGVtZW50cyBvZiBgYXJyMmAgaW5zZXJ0ZWQuXG4gKiBAYWxpYXMgQ2hlZXJpby5tZXJnZVxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9qUXVlcnkubWVyZ2UvfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyMSwgYXJyMikge1xuICAgIGlmICghaXNBcnJheUxpa2UoYXJyMSkgfHwgIWlzQXJyYXlMaWtlKGFycjIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG5ld0xlbmd0aCA9IGFycjEubGVuZ3RoO1xuICAgIGNvbnN0IGxlbiA9ICthcnIyLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFycjFbbmV3TGVuZ3RoKytdID0gYXJyMltpXTtcbiAgICB9XG4gICAgYXJyMS5sZW5ndGggPSBuZXdMZW5ndGg7XG4gICAgcmV0dXJuIGFycjE7XG59XG4vKipcbiAqIENoZWNrcyBpZiBhbiBvYmplY3QgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcGFyYW0gaXRlbSAtIEl0ZW0gdG8gY2hlY2suXG4gKiBAcmV0dXJucyBJbmRpY2F0ZXMgaWYgdGhlIGl0ZW0gaXMgYXJyYXktbGlrZS5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UoaXRlbSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGl0ZW0gIT09ICdvYmplY3QnIHx8XG4gICAgICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaXRlbSwgJ2xlbmd0aCcpIHx8XG4gICAgICAgIHR5cGVvZiBpdGVtLmxlbmd0aCAhPT0gJ251bWJlcicgfHxcbiAgICAgICAgaXRlbS5sZW5ndGggPCAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghKGkgaW4gaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRpYy5qcy5tYXAiLCJleHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJpbXBvcnQgeyBjbG9uZU5vZGUsIERvY3VtZW50IH0gZnJvbSAnZG9taGFuZGxlcic7XG4vKipcbiAqIENoZWNrIGlmIHRoZSBET00gZWxlbWVudCBpcyBhIHRhZy5cbiAqXG4gKiBgaXNUYWcodHlwZSlgIGluY2x1ZGVzIGA8c2NyaXB0PmAgYW5kIGA8c3R5bGU+YCB0YWdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgVXRpbHNcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIERPTSBub2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgV2hldGhlciB0aGUgbm9kZSBpcyBhIHRhZy5cbiAqL1xuZXhwb3J0IHsgaXNUYWcgfSBmcm9tICdkb21oYW5kbGVyJztcbi8qKlxuICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpcyBhIENoZWVyaW8gaW5zdGFuY2UuXG4gKlxuICogQGNhdGVnb3J5IFV0aWxzXG4gKiBAcGFyYW0gbWF5YmVDaGVlcmlvIC0gVGhlIG9iamVjdCB0byBjaGVjay5cbiAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIG9iamVjdCBpcyBhIENoZWVyaW8gaW5zdGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0NoZWVyaW8obWF5YmVDaGVlcmlvKSB7XG4gICAgcmV0dXJuIG1heWJlQ2hlZXJpby5jaGVlcmlvICE9IG51bGw7XG59XG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgdG8gY2FtZWwgY2FzZSBub3RhdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IFV0aWxzXG4gKiBAcGFyYW0gc3RyIC0gVGhlIHN0cmluZyB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcmV0dXJucyBTdHJpbmcgaW4gY2FtZWwgY2FzZSBub3RhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tfLi1dKFxcd3wkKS9nLCAoXywgeCkgPT4geC50b1VwcGVyQ2FzZSgpKTtcbn1cbi8qKlxuICogQ29udmVydCBhIHN0cmluZyBmcm9tIGNhbWVsIGNhc2UgdG8gXCJDU1MgY2FzZVwiLCB3aGVyZSB3b3JkIGJvdW5kYXJpZXMgYXJlXG4gKiBkZXNjcmliZWQgYnkgaHlwaGVucyAoXCItXCIpIGFuZCBhbGwgY2hhcmFjdGVycyBhcmUgbG93ZXItY2FzZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IFV0aWxzXG4gKiBAcGFyYW0gc3RyIC0gVGhlIHN0cmluZyB0byBiZSBjb252ZXJ0ZWQuXG4gKiBAcmV0dXJucyBTdHJpbmcgaW4gXCJDU1MgY2FzZVwiLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3NzQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1tBLVpdL2csICctJCYnKS50b0xvd2VyQ2FzZSgpO1xufVxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgZWFjaCBET00gZWxlbWVudCB3aXRob3V0IGNyZWF0aW5nIGludGVybWVkaWFyeSBDaGVlcmlvIGluc3RhbmNlcy5cbiAqXG4gKiBUaGlzIGlzIGluZGVudGVkIGZvciB1c2UgaW50ZXJuYWxseSB0byBhdm9pZCBvdGhlcndpc2UgdW5uZWNlc3NhcnkgbWVtb3J5XG4gKiBwcmVzc3VyZSBpbnRyb2R1Y2VkIGJ5IF9tYWtlLlxuICpcbiAqIEBjYXRlZ29yeSBVdGlsc1xuICogQHBhcmFtIGFycmF5IC0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSBmbiAtIEZ1bmN0aW9uIHRvIGNhbGwuXG4gKiBAcmV0dXJucyBUaGUgb3JpZ2luYWwgaW5zdGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkb21FYWNoKGFycmF5LCBmbikge1xuICAgIGNvbnN0IGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgICBmbihhcnJheVtpXSwgaSk7XG4gICAgcmV0dXJuIGFycmF5O1xufVxuLyoqXG4gKiBDcmVhdGUgYSBkZWVwIGNvcHkgb2YgdGhlIGdpdmVuIERPTSBzdHJ1Y3R1cmUuIFNldHMgdGhlIHBhcmVudHMgb2YgdGhlIGNvcGllc1xuICogb2YgdGhlIHBhc3NlZCBub2RlcyB0byBgbnVsbGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBVdGlsc1xuICogQHBhcmFtIGRvbSAtIFRoZSBkb21oYW5kbGVyLWNvbXBsaWFudCBET00gc3RydWN0dXJlLlxuICogQHJldHVybnMgLSBUaGUgY2xvbmVkIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRG9tKGRvbSkge1xuICAgIGNvbnN0IGNsb25lID0gJ2xlbmd0aCcgaW4gZG9tXG4gICAgICAgID8gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGRvbSwgKGVsKSA9PiBjbG9uZU5vZGUoZWwsIHRydWUpKVxuICAgICAgICA6IFtjbG9uZU5vZGUoZG9tLCB0cnVlKV07XG4gICAgLy8gQWRkIGEgcm9vdCBub2RlIGFyb3VuZCB0aGUgY2xvbmVkIG5vZGVzXG4gICAgY29uc3Qgcm9vdCA9IG5ldyBEb2N1bWVudChjbG9uZSk7XG4gICAgY2xvbmUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLnBhcmVudCA9IHJvb3Q7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsb25lO1xufVxudmFyIENoYXJhY3RlckNvZGVzO1xuKGZ1bmN0aW9uIChDaGFyYWN0ZXJDb2Rlcykge1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiTG93ZXJBXCJdID0gOTddID0gXCJMb3dlckFcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcIkxvd2VyWlwiXSA9IDEyMl0gPSBcIkxvd2VyWlwiO1xuICAgIENoYXJhY3RlckNvZGVzW0NoYXJhY3RlckNvZGVzW1wiVXBwZXJBXCJdID0gNjVdID0gXCJVcHBlckFcIjtcbiAgICBDaGFyYWN0ZXJDb2Rlc1tDaGFyYWN0ZXJDb2Rlc1tcIlVwcGVyWlwiXSA9IDkwXSA9IFwiVXBwZXJaXCI7XG4gICAgQ2hhcmFjdGVyQ29kZXNbQ2hhcmFjdGVyQ29kZXNbXCJFeGNsYW1hdGlvblwiXSA9IDMzXSA9IFwiRXhjbGFtYXRpb25cIjtcbn0pKENoYXJhY3RlckNvZGVzIHx8IChDaGFyYWN0ZXJDb2RlcyA9IHt9KSk7XG4vKipcbiAqIENoZWNrIGlmIHN0cmluZyBpcyBIVE1MLlxuICpcbiAqIFRlc3RzIGZvciBhIGA8YCB3aXRoaW4gYSBzdHJpbmcsIGltbWVkaWF0ZSBmb2xsb3dlZCBieSBhIGxldHRlciBhbmRcbiAqIGV2ZW50dWFsbHkgZm9sbG93ZWQgYnkgYSBgPmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBVdGlsc1xuICogQHBhcmFtIHN0ciAtIFRoZSBzdHJpbmcgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBJbmRpY2F0ZXMgaWYgYHN0cmAgaXMgSFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSHRtbChzdHIpIHtcbiAgICBjb25zdCB0YWdTdGFydCA9IHN0ci5pbmRleE9mKCc8Jyk7XG4gICAgaWYgKHRhZ1N0YXJ0IDwgMCB8fCB0YWdTdGFydCA+IHN0ci5sZW5ndGggLSAzKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgdGFnQ2hhciA9IHN0ci5jaGFyQ29kZUF0KHRhZ1N0YXJ0ICsgMSk7XG4gICAgcmV0dXJuICgoKHRhZ0NoYXIgPj0gQ2hhcmFjdGVyQ29kZXMuTG93ZXJBICYmIHRhZ0NoYXIgPD0gQ2hhcmFjdGVyQ29kZXMuTG93ZXJaKSB8fFxuICAgICAgICAodGFnQ2hhciA+PSBDaGFyYWN0ZXJDb2Rlcy5VcHBlckEgJiYgdGFnQ2hhciA8PSBDaGFyYWN0ZXJDb2Rlcy5VcHBlclopIHx8XG4gICAgICAgIHRhZ0NoYXIgPT09IENoYXJhY3RlckNvZGVzLkV4Y2xhbWF0aW9uKSAmJlxuICAgICAgICBzdHIuaW5jbHVkZXMoJz4nLCB0YWdTdGFydCArIDIpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImV4cG9ydCBjb25zdCBlbGVtZW50TmFtZXMgPSBuZXcgTWFwKFtcbiAgICBcImFsdEdseXBoXCIsXG4gICAgXCJhbHRHbHlwaERlZlwiLFxuICAgIFwiYWx0R2x5cGhJdGVtXCIsXG4gICAgXCJhbmltYXRlQ29sb3JcIixcbiAgICBcImFuaW1hdGVNb3Rpb25cIixcbiAgICBcImFuaW1hdGVUcmFuc2Zvcm1cIixcbiAgICBcImNsaXBQYXRoXCIsXG4gICAgXCJmZUJsZW5kXCIsXG4gICAgXCJmZUNvbG9yTWF0cml4XCIsXG4gICAgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsXG4gICAgXCJmZUNvbXBvc2l0ZVwiLFxuICAgIFwiZmVDb252b2x2ZU1hdHJpeFwiLFxuICAgIFwiZmVEaWZmdXNlTGlnaHRpbmdcIixcbiAgICBcImZlRGlzcGxhY2VtZW50TWFwXCIsXG4gICAgXCJmZURpc3RhbnRMaWdodFwiLFxuICAgIFwiZmVEcm9wU2hhZG93XCIsXG4gICAgXCJmZUZsb29kXCIsXG4gICAgXCJmZUZ1bmNBXCIsXG4gICAgXCJmZUZ1bmNCXCIsXG4gICAgXCJmZUZ1bmNHXCIsXG4gICAgXCJmZUZ1bmNSXCIsXG4gICAgXCJmZUdhdXNzaWFuQmx1clwiLFxuICAgIFwiZmVJbWFnZVwiLFxuICAgIFwiZmVNZXJnZVwiLFxuICAgIFwiZmVNZXJnZU5vZGVcIixcbiAgICBcImZlTW9ycGhvbG9neVwiLFxuICAgIFwiZmVPZmZzZXRcIixcbiAgICBcImZlUG9pbnRMaWdodFwiLFxuICAgIFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsXG4gICAgXCJmZVNwb3RMaWdodFwiLFxuICAgIFwiZmVUaWxlXCIsXG4gICAgXCJmZVR1cmJ1bGVuY2VcIixcbiAgICBcImZvcmVpZ25PYmplY3RcIixcbiAgICBcImdseXBoUmVmXCIsXG4gICAgXCJsaW5lYXJHcmFkaWVudFwiLFxuICAgIFwicmFkaWFsR3JhZGllbnRcIixcbiAgICBcInRleHRQYXRoXCIsXG5dLm1hcCgodmFsKSA9PiBbdmFsLnRvTG93ZXJDYXNlKCksIHZhbF0pKTtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVOYW1lcyA9IG5ldyBNYXAoW1xuICAgIFwiZGVmaW5pdGlvblVSTFwiLFxuICAgIFwiYXR0cmlidXRlTmFtZVwiLFxuICAgIFwiYXR0cmlidXRlVHlwZVwiLFxuICAgIFwiYmFzZUZyZXF1ZW5jeVwiLFxuICAgIFwiYmFzZVByb2ZpbGVcIixcbiAgICBcImNhbGNNb2RlXCIsXG4gICAgXCJjbGlwUGF0aFVuaXRzXCIsXG4gICAgXCJkaWZmdXNlQ29uc3RhbnRcIixcbiAgICBcImVkZ2VNb2RlXCIsXG4gICAgXCJmaWx0ZXJVbml0c1wiLFxuICAgIFwiZ2x5cGhSZWZcIixcbiAgICBcImdyYWRpZW50VHJhbnNmb3JtXCIsXG4gICAgXCJncmFkaWVudFVuaXRzXCIsXG4gICAgXCJrZXJuZWxNYXRyaXhcIixcbiAgICBcImtlcm5lbFVuaXRMZW5ndGhcIixcbiAgICBcImtleVBvaW50c1wiLFxuICAgIFwia2V5U3BsaW5lc1wiLFxuICAgIFwia2V5VGltZXNcIixcbiAgICBcImxlbmd0aEFkanVzdFwiLFxuICAgIFwibGltaXRpbmdDb25lQW5nbGVcIixcbiAgICBcIm1hcmtlckhlaWdodFwiLFxuICAgIFwibWFya2VyVW5pdHNcIixcbiAgICBcIm1hcmtlcldpZHRoXCIsXG4gICAgXCJtYXNrQ29udGVudFVuaXRzXCIsXG4gICAgXCJtYXNrVW5pdHNcIixcbiAgICBcIm51bU9jdGF2ZXNcIixcbiAgICBcInBhdGhMZW5ndGhcIixcbiAgICBcInBhdHRlcm5Db250ZW50VW5pdHNcIixcbiAgICBcInBhdHRlcm5UcmFuc2Zvcm1cIixcbiAgICBcInBhdHRlcm5Vbml0c1wiLFxuICAgIFwicG9pbnRzQXRYXCIsXG4gICAgXCJwb2ludHNBdFlcIixcbiAgICBcInBvaW50c0F0WlwiLFxuICAgIFwicHJlc2VydmVBbHBoYVwiLFxuICAgIFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLFxuICAgIFwicHJpbWl0aXZlVW5pdHNcIixcbiAgICBcInJlZlhcIixcbiAgICBcInJlZllcIixcbiAgICBcInJlcGVhdENvdW50XCIsXG4gICAgXCJyZXBlYXREdXJcIixcbiAgICBcInJlcXVpcmVkRXh0ZW5zaW9uc1wiLFxuICAgIFwicmVxdWlyZWRGZWF0dXJlc1wiLFxuICAgIFwic3BlY3VsYXJDb25zdGFudFwiLFxuICAgIFwic3BlY3VsYXJFeHBvbmVudFwiLFxuICAgIFwic3ByZWFkTWV0aG9kXCIsXG4gICAgXCJzdGFydE9mZnNldFwiLFxuICAgIFwic3RkRGV2aWF0aW9uXCIsXG4gICAgXCJzdGl0Y2hUaWxlc1wiLFxuICAgIFwic3VyZmFjZVNjYWxlXCIsXG4gICAgXCJzeXN0ZW1MYW5ndWFnZVwiLFxuICAgIFwidGFibGVWYWx1ZXNcIixcbiAgICBcInRhcmdldFhcIixcbiAgICBcInRhcmdldFlcIixcbiAgICBcInRleHRMZW5ndGhcIixcbiAgICBcInZpZXdCb3hcIixcbiAgICBcInZpZXdUYXJnZXRcIixcbiAgICBcInhDaGFubmVsU2VsZWN0b3JcIixcbiAgICBcInlDaGFubmVsU2VsZWN0b3JcIixcbiAgICBcInpvb21BbmRQYW5cIixcbl0ubWFwKCh2YWwpID0+IFt2YWwudG9Mb3dlckNhc2UoKSwgdmFsXSkpO1xuIiwiLypcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICogYXMgRWxlbWVudFR5cGUgZnJvbSBcImRvbWVsZW1lbnR0eXBlXCI7XG5pbXBvcnQgeyBlbmNvZGVYTUwsIGVzY2FwZUF0dHJpYnV0ZSwgZXNjYXBlVGV4dCB9IGZyb20gXCJlbnRpdGllc1wiO1xuLyoqXG4gKiBNaXhlZC1jYXNlIFNWRyBhbmQgTWF0aE1MIHRhZ3MgJiBhdHRyaWJ1dGVzXG4gKiByZWNvZ25pemVkIGJ5IHRoZSBIVE1MIHBhcnNlci5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3BhcnNpbmcuaHRtbCNwYXJzaW5nLW1haW4taW5mb3JlaWduXG4gKi9cbmltcG9ydCB7IGVsZW1lbnROYW1lcywgYXR0cmlidXRlTmFtZXMgfSBmcm9tIFwiLi9mb3JlaWduTmFtZXMuanNcIjtcbmNvbnN0IHVuZW5jb2RlZEVsZW1lbnRzID0gbmV3IFNldChbXG4gICAgXCJzdHlsZVwiLFxuICAgIFwic2NyaXB0XCIsXG4gICAgXCJ4bXBcIixcbiAgICBcImlmcmFtZVwiLFxuICAgIFwibm9lbWJlZFwiLFxuICAgIFwibm9mcmFtZXNcIixcbiAgICBcInBsYWludGV4dFwiLFxuICAgIFwibm9zY3JpcHRcIixcbl0pO1xuZnVuY3Rpb24gcmVwbGFjZVF1b3Rlcyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKTtcbn1cbi8qKlxuICogRm9ybWF0IGF0dHJpYnV0ZXNcbiAqL1xuZnVuY3Rpb24gZm9ybWF0QXR0cmlidXRlcyhhdHRyaWJ1dGVzLCBvcHRzKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghYXR0cmlidXRlcylcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGVuY29kZSA9ICgoX2EgPSBvcHRzLmVuY29kZUVudGl0aWVzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBvcHRzLmRlY29kZUVudGl0aWVzKSA9PT0gZmFsc2VcbiAgICAgICAgPyByZXBsYWNlUXVvdGVzXG4gICAgICAgIDogb3B0cy54bWxNb2RlIHx8IG9wdHMuZW5jb2RlRW50aXRpZXMgIT09IFwidXRmOFwiXG4gICAgICAgICAgICA/IGVuY29kZVhNTFxuICAgICAgICAgICAgOiBlc2NhcGVBdHRyaWJ1dGU7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpXG4gICAgICAgIC5tYXAoKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IChfYSA9IGF0dHJpYnV0ZXNba2V5XSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCJcIjtcbiAgICAgICAgaWYgKG9wdHMueG1sTW9kZSA9PT0gXCJmb3JlaWduXCIpIHtcbiAgICAgICAgICAgIC8qIEZpeCB1cCBtaXhlZC1jYXNlIGF0dHJpYnV0ZSBuYW1lcyAqL1xuICAgICAgICAgICAga2V5ID0gKF9iID0gYXR0cmlidXRlTmFtZXMuZ2V0KGtleSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGtleTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdHMuZW1wdHlBdHRycyAmJiAhb3B0cy54bWxNb2RlICYmIHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtrZXl9PVwiJHtlbmNvZGUodmFsdWUpfVwiYDtcbiAgICB9KVxuICAgICAgICAuam9pbihcIiBcIik7XG59XG4vKipcbiAqIFNlbGYtZW5jbG9zaW5nIHRhZ3NcbiAqL1xuY29uc3Qgc2luZ2xlVGFnID0gbmV3IFNldChbXG4gICAgXCJhcmVhXCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJiYXNlZm9udFwiLFxuICAgIFwiYnJcIixcbiAgICBcImNvbFwiLFxuICAgIFwiY29tbWFuZFwiLFxuICAgIFwiZW1iZWRcIixcbiAgICBcImZyYW1lXCIsXG4gICAgXCJoclwiLFxuICAgIFwiaW1nXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaXNpbmRleFwiLFxuICAgIFwia2V5Z2VuXCIsXG4gICAgXCJsaW5rXCIsXG4gICAgXCJtZXRhXCIsXG4gICAgXCJwYXJhbVwiLFxuICAgIFwic291cmNlXCIsXG4gICAgXCJ0cmFja1wiLFxuICAgIFwid2JyXCIsXG5dKTtcbi8qKlxuICogUmVuZGVycyBhIERPTSBub2RlIG9yIGFuIGFycmF5IG9mIERPTSBub2RlcyB0byBhIHN0cmluZy5cbiAqXG4gKiBDYW4gYmUgdGhvdWdodCBvZiBhcyB0aGUgZXF1aXZhbGVudCBvZiB0aGUgYG91dGVySFRNTGAgb2YgdGhlIHBhc3NlZCBub2RlKHMpLlxuICpcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gYmUgcmVuZGVyZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyBDaGFuZ2VzIHNlcmlhbGl6YXRpb24gYmVoYXZpb3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihub2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBub2RlcyA9IFwibGVuZ3RoXCIgaW4gbm9kZSA/IG5vZGUgOiBbbm9kZV07XG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBvdXRwdXQgKz0gcmVuZGVyTm9kZShub2Rlc1tpXSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG5mdW5jdGlvbiByZW5kZXJOb2RlKG5vZGUsIG9wdGlvbnMpIHtcbiAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICBjYXNlIEVsZW1lbnRUeXBlLlJvb3Q6XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKG5vZGUuY2hpbGRyZW4sIG9wdGlvbnMpO1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGRvbid0IHVzZSBgRG9jdHlwZWAgeWV0XG4gICAgICAgIGNhc2UgRWxlbWVudFR5cGUuRG9jdHlwZTpcbiAgICAgICAgY2FzZSBFbGVtZW50VHlwZS5EaXJlY3RpdmU6XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyRGlyZWN0aXZlKG5vZGUpO1xuICAgICAgICBjYXNlIEVsZW1lbnRUeXBlLkNvbW1lbnQ6XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyQ29tbWVudChub2RlKTtcbiAgICAgICAgY2FzZSBFbGVtZW50VHlwZS5DREFUQTpcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJDZGF0YShub2RlKTtcbiAgICAgICAgY2FzZSBFbGVtZW50VHlwZS5TY3JpcHQ6XG4gICAgICAgIGNhc2UgRWxlbWVudFR5cGUuU3R5bGU6XG4gICAgICAgIGNhc2UgRWxlbWVudFR5cGUuVGFnOlxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRhZyhub2RlLCBvcHRpb25zKTtcbiAgICAgICAgY2FzZSBFbGVtZW50VHlwZS5UZXh0OlxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRleHQobm9kZSwgb3B0aW9ucyk7XG4gICAgfVxufVxuY29uc3QgZm9yZWlnbk1vZGVJbnRlZ3JhdGlvblBvaW50cyA9IG5ldyBTZXQoW1xuICAgIFwibWlcIixcbiAgICBcIm1vXCIsXG4gICAgXCJtblwiLFxuICAgIFwibXNcIixcbiAgICBcIm10ZXh0XCIsXG4gICAgXCJhbm5vdGF0aW9uLXhtbFwiLFxuICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgIFwiZGVzY1wiLFxuICAgIFwidGl0bGVcIixcbl0pO1xuY29uc3QgZm9yZWlnbkVsZW1lbnRzID0gbmV3IFNldChbXCJzdmdcIiwgXCJtYXRoXCJdKTtcbmZ1bmN0aW9uIHJlbmRlclRhZyhlbGVtLCBvcHRzKSB7XG4gICAgdmFyIF9hO1xuICAgIC8vIEhhbmRsZSBTVkcgLyBNYXRoTUwgaW4gSFRNTFxuICAgIGlmIChvcHRzLnhtbE1vZGUgPT09IFwiZm9yZWlnblwiKSB7XG4gICAgICAgIC8qIEZpeCB1cCBtaXhlZC1jYXNlIGVsZW1lbnQgbmFtZXMgKi9cbiAgICAgICAgZWxlbS5uYW1lID0gKF9hID0gZWxlbWVudE5hbWVzLmdldChlbGVtLm5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBlbGVtLm5hbWU7XG4gICAgICAgIC8qIEV4aXQgZm9yZWlnbiBtb2RlIGF0IGludGVncmF0aW9uIHBvaW50cyAqL1xuICAgICAgICBpZiAoZWxlbS5wYXJlbnQgJiZcbiAgICAgICAgICAgIGZvcmVpZ25Nb2RlSW50ZWdyYXRpb25Qb2ludHMuaGFzKGVsZW0ucGFyZW50Lm5hbWUpKSB7XG4gICAgICAgICAgICBvcHRzID0geyAuLi5vcHRzLCB4bWxNb2RlOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghb3B0cy54bWxNb2RlICYmIGZvcmVpZ25FbGVtZW50cy5oYXMoZWxlbS5uYW1lKSkge1xuICAgICAgICBvcHRzID0geyAuLi5vcHRzLCB4bWxNb2RlOiBcImZvcmVpZ25cIiB9O1xuICAgIH1cbiAgICBsZXQgdGFnID0gYDwke2VsZW0ubmFtZX1gO1xuICAgIGNvbnN0IGF0dHJpYnMgPSBmb3JtYXRBdHRyaWJ1dGVzKGVsZW0uYXR0cmlicywgb3B0cyk7XG4gICAgaWYgKGF0dHJpYnMpIHtcbiAgICAgICAgdGFnICs9IGAgJHthdHRyaWJzfWA7XG4gICAgfVxuICAgIGlmIChlbGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAob3B0cy54bWxNb2RlXG4gICAgICAgICAgICA/IC8vIEluIFhNTCBtb2RlIG9yIGZvcmVpZ24gbW9kZSwgYW5kIHVzZXIgaGFzbid0IGV4cGxpY2l0bHkgdHVybmVkIG9mZiBzZWxmLWNsb3NpbmcgdGFnc1xuICAgICAgICAgICAgICAgIG9wdHMuc2VsZkNsb3NpbmdUYWdzICE9PSBmYWxzZVxuICAgICAgICAgICAgOiAvLyBVc2VyIGV4cGxpY2l0bHkgYXNrZWQgZm9yIHNlbGYtY2xvc2luZyB0YWdzLCBldmVuIGluIEhUTUwgbW9kZVxuICAgICAgICAgICAgICAgIG9wdHMuc2VsZkNsb3NpbmdUYWdzICYmIHNpbmdsZVRhZy5oYXMoZWxlbS5uYW1lKSkpIHtcbiAgICAgICAgaWYgKCFvcHRzLnhtbE1vZGUpXG4gICAgICAgICAgICB0YWcgKz0gXCIgXCI7XG4gICAgICAgIHRhZyArPSBcIi8+XCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YWcgKz0gXCI+XCI7XG4gICAgICAgIGlmIChlbGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhZyArPSByZW5kZXIoZWxlbS5jaGlsZHJlbiwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMueG1sTW9kZSB8fCAhc2luZ2xlVGFnLmhhcyhlbGVtLm5hbWUpKSB7XG4gICAgICAgICAgICB0YWcgKz0gYDwvJHtlbGVtLm5hbWV9PmA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhZztcbn1cbmZ1bmN0aW9uIHJlbmRlckRpcmVjdGl2ZShlbGVtKSB7XG4gICAgcmV0dXJuIGA8JHtlbGVtLmRhdGF9PmA7XG59XG5mdW5jdGlvbiByZW5kZXJUZXh0KGVsZW0sIG9wdHMpIHtcbiAgICB2YXIgX2E7XG4gICAgbGV0IGRhdGEgPSBlbGVtLmRhdGEgfHwgXCJcIjtcbiAgICAvLyBJZiBlbnRpdGllcyB3ZXJlbid0IGRlY29kZWQsIG5vIG5lZWQgdG8gZW5jb2RlIHRoZW0gYmFja1xuICAgIGlmICgoKF9hID0gb3B0cy5lbmNvZGVFbnRpdGllcykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogb3B0cy5kZWNvZGVFbnRpdGllcykgIT09IGZhbHNlICYmXG4gICAgICAgICEoIW9wdHMueG1sTW9kZSAmJlxuICAgICAgICAgICAgZWxlbS5wYXJlbnQgJiZcbiAgICAgICAgICAgIHVuZW5jb2RlZEVsZW1lbnRzLmhhcyhlbGVtLnBhcmVudC5uYW1lKSkpIHtcbiAgICAgICAgZGF0YSA9XG4gICAgICAgICAgICBvcHRzLnhtbE1vZGUgfHwgb3B0cy5lbmNvZGVFbnRpdGllcyAhPT0gXCJ1dGY4XCJcbiAgICAgICAgICAgICAgICA/IGVuY29kZVhNTChkYXRhKVxuICAgICAgICAgICAgICAgIDogZXNjYXBlVGV4dChkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG5mdW5jdGlvbiByZW5kZXJDZGF0YShlbGVtKSB7XG4gICAgcmV0dXJuIGA8IVtDREFUQVske2VsZW0uY2hpbGRyZW5bMF0uZGF0YX1dXT5gO1xufVxuZnVuY3Rpb24gcmVuZGVyQ29tbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGA8IS0tJHtlbGVtLmRhdGF9LS0+YDtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnRUeXBlIH0gZnJvbSBcImRvbWVsZW1lbnR0eXBlXCI7XG5pbXBvcnQgeyBFbGVtZW50LCBUZXh0LCBDb21tZW50LCBDREFUQSwgRG9jdW1lbnQsIFByb2Nlc3NpbmdJbnN0cnVjdGlvbiwgfSBmcm9tIFwiLi9ub2RlLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ub2RlLmpzXCI7XG4vLyBEZWZhdWx0IG9wdGlvbnNcbmNvbnN0IGRlZmF1bHRPcHRzID0ge1xuICAgIHdpdGhTdGFydEluZGljZXM6IGZhbHNlLFxuICAgIHdpdGhFbmRJbmRpY2VzOiBmYWxzZSxcbiAgICB4bWxNb2RlOiBmYWxzZSxcbn07XG5leHBvcnQgY2xhc3MgRG9tSGFuZGxlciB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxlZCBvbmNlIHBhcnNpbmcgaGFzIGNvbXBsZXRlZC5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBTZXR0aW5ncyBmb3IgdGhlIGhhbmRsZXIuXG4gICAgICogQHBhcmFtIGVsZW1lbnRDQiBDYWxsYmFjayB3aGVuZXZlciBhIHRhZyBpcyBjbG9zZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2ssIG9wdGlvbnMsIGVsZW1lbnRDQikge1xuICAgICAgICAvKiogVGhlIGVsZW1lbnRzIG9mIHRoZSBET00gKi9cbiAgICAgICAgdGhpcy5kb20gPSBbXTtcbiAgICAgICAgLyoqIFRoZSByb290IGVsZW1lbnQgZm9yIHRoZSBET00gKi9cbiAgICAgICAgdGhpcy5yb290ID0gbmV3IERvY3VtZW50KHRoaXMuZG9tKTtcbiAgICAgICAgLyoqIEluZGljYXRlZCB3aGV0aGVyIHBhcnNpbmcgaGFzIGJlZW4gY29tcGxldGVkLiAqL1xuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgLyoqIFN0YWNrIG9mIG9wZW4gdGFncy4gKi9cbiAgICAgICAgdGhpcy50YWdTdGFjayA9IFt0aGlzLnJvb3RdO1xuICAgICAgICAvKiogQSBkYXRhIG5vZGUgdGhhdCBpcyBzdGlsbCBiZWluZyB3cml0dGVuIHRvLiAqL1xuICAgICAgICB0aGlzLmxhc3ROb2RlID0gbnVsbDtcbiAgICAgICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgcGFyc2VyIGluc3RhbmNlLiBVc2VkIGZvciBsb2NhdGlvbiBpbmZvcm1hdGlvbi4gKi9cbiAgICAgICAgdGhpcy5wYXJzZXIgPSBudWxsO1xuICAgICAgICAvLyBNYWtlIGl0IHBvc3NpYmxlIHRvIHNraXAgYXJndW1lbnRzLCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHlcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnRDQiA9IG9wdGlvbnM7XG4gICAgICAgICAgICBvcHRpb25zID0gZGVmYXVsdE9wdHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgb3B0aW9ucyA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgY2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrICE9PSBudWxsICYmIGNhbGxiYWNrICE9PSB2b2lkIDAgPyBjYWxsYmFjayA6IG51bGw7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IGRlZmF1bHRPcHRzO1xuICAgICAgICB0aGlzLmVsZW1lbnRDQiA9IGVsZW1lbnRDQiAhPT0gbnVsbCAmJiBlbGVtZW50Q0IgIT09IHZvaWQgMCA/IGVsZW1lbnRDQiA6IG51bGw7XG4gICAgfVxuICAgIG9ucGFyc2VyaW5pdChwYXJzZXIpIHtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgfVxuICAgIC8vIFJlc2V0cyB0aGUgaGFuZGxlciBiYWNrIHRvIHN0YXJ0aW5nIHN0YXRlXG4gICAgb25yZXNldCgpIHtcbiAgICAgICAgdGhpcy5kb20gPSBbXTtcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IERvY3VtZW50KHRoaXMuZG9tKTtcbiAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGFnU3RhY2sgPSBbdGhpcy5yb290XTtcbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyc2VyID0gbnVsbDtcbiAgICB9XG4gICAgLy8gU2lnbmFscyB0aGUgaGFuZGxlciB0aGF0IHBhcnNpbmcgaXMgZG9uZVxuICAgIG9uZW5kKCkge1xuICAgICAgICBpZiAodGhpcy5kb25lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhcnNlciA9IG51bGw7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICAgIG9uZXJyb3IoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxsYmFjayhlcnJvcik7XG4gICAgfVxuICAgIG9uY2xvc2V0YWcoKSB7XG4gICAgICAgIHRoaXMubGFzdE5vZGUgPSBudWxsO1xuICAgICAgICBjb25zdCBlbGVtID0gdGhpcy50YWdTdGFjay5wb3AoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy53aXRoRW5kSW5kaWNlcykge1xuICAgICAgICAgICAgZWxlbS5lbmRJbmRleCA9IHRoaXMucGFyc2VyLmVuZEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRDQilcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudENCKGVsZW0pO1xuICAgIH1cbiAgICBvbm9wZW50YWcobmFtZSwgYXR0cmlicykge1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5vcHRpb25zLnhtbE1vZGUgPyBFbGVtZW50VHlwZS5UYWcgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgRWxlbWVudChuYW1lLCBhdHRyaWJzLCB1bmRlZmluZWQsIHR5cGUpO1xuICAgICAgICB0aGlzLmFkZE5vZGUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMudGFnU3RhY2sucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgb250ZXh0KGRhdGEpIHtcbiAgICAgICAgY29uc3QgeyBsYXN0Tm9kZSB9ID0gdGhpcztcbiAgICAgICAgaWYgKGxhc3ROb2RlICYmIGxhc3ROb2RlLnR5cGUgPT09IEVsZW1lbnRUeXBlLlRleHQpIHtcbiAgICAgICAgICAgIGxhc3ROb2RlLmRhdGEgKz0gZGF0YTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2l0aEVuZEluZGljZXMpIHtcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZS5lbmRJbmRleCA9IHRoaXMucGFyc2VyLmVuZEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBUZXh0KGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5hZGROb2RlKG5vZGUpO1xuICAgICAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25jb21tZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdE5vZGUgJiYgdGhpcy5sYXN0Tm9kZS50eXBlID09PSBFbGVtZW50VHlwZS5Db21tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmxhc3ROb2RlLmRhdGEgKz0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub2RlID0gbmV3IENvbW1lbnQoZGF0YSk7XG4gICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG5vZGU7XG4gICAgfVxuICAgIG9uY29tbWVudGVuZCgpIHtcbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgfVxuICAgIG9uY2RhdGFzdGFydCgpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBUZXh0KFwiXCIpO1xuICAgICAgICBjb25zdCBub2RlID0gbmV3IENEQVRBKFt0ZXh0XSk7XG4gICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICAgICAgdGV4dC5wYXJlbnQgPSBub2RlO1xuICAgICAgICB0aGlzLmxhc3ROb2RlID0gdGV4dDtcbiAgICB9XG4gICAgb25jZGF0YWVuZCgpIHtcbiAgICAgICAgdGhpcy5sYXN0Tm9kZSA9IG51bGw7XG4gICAgfVxuICAgIG9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obmFtZSwgZGF0YSk7XG4gICAgICAgIHRoaXMuYWRkTm9kZShub2RlKTtcbiAgICB9XG4gICAgaGFuZGxlQ2FsbGJhY2soZXJyb3IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soZXJyb3IsIHRoaXMuZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkTm9kZShub2RlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMudGFnU3RhY2tbdGhpcy50YWdTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNTaWJsaW5nID0gcGFyZW50LmNoaWxkcmVuW3BhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy53aXRoU3RhcnRJbmRpY2VzKSB7XG4gICAgICAgICAgICBub2RlLnN0YXJ0SW5kZXggPSB0aGlzLnBhcnNlci5zdGFydEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMud2l0aEVuZEluZGljZXMpIHtcbiAgICAgICAgICAgIG5vZGUuZW5kSW5kZXggPSB0aGlzLnBhcnNlci5lbmRJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgICAgaWYgKHByZXZpb3VzU2libGluZykge1xuICAgICAgICAgICAgbm9kZS5wcmV2ID0gcHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nLm5leHQgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmxhc3ROb2RlID0gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBEb21IYW5kbGVyO1xuIiwiaW1wb3J0IHsgRWxlbWVudFR5cGUsIGlzVGFnIGFzIGlzVGFnUmF3IH0gZnJvbSBcImRvbWVsZW1lbnR0eXBlXCI7XG4vKipcbiAqIFRoaXMgb2JqZWN0IHdpbGwgYmUgdXNlZCBhcyB0aGUgcHJvdG90eXBlIGZvciBOb2RlcyB3aGVuIGNyZWF0aW5nIGFcbiAqIERPTS1MZXZlbC0xLWNvbXBsaWFudCBzdHJ1Y3R1cmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqIFBhcmVudCBvZiB0aGUgbm9kZSAqL1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIC8qKiBQcmV2aW91cyBzaWJsaW5nICovXG4gICAgICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgICAgIC8qKiBOZXh0IHNpYmxpbmcgKi9cbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgLyoqIFRoZSBzdGFydCBpbmRleCBvZiB0aGUgbm9kZS4gUmVxdWlyZXMgYHdpdGhTdGFydEluZGljZXNgIG9uIHRoZSBoYW5kbGVyIHRvIGJlIGB0cnVlLiAqL1xuICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSBudWxsO1xuICAgICAgICAvKiogVGhlIGVuZCBpbmRleCBvZiB0aGUgbm9kZS4gUmVxdWlyZXMgYHdpdGhFbmRJbmRpY2VzYCBvbiB0aGUgaGFuZGxlciB0byBiZSBgdHJ1ZS4gKi9cbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IG51bGw7XG4gICAgfVxuICAgIC8vIFJlYWQtd3JpdGUgYWxpYXNlcyBmb3IgcHJvcGVydGllc1xuICAgIC8qKlxuICAgICAqIFNhbWUgYXMge0BsaW5rIHBhcmVudH0uXG4gICAgICogW0RPTSBzcGVjXShodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcpLWNvbXBhdGlibGUgYWxpYXMuXG4gICAgICovXG4gICAgZ2V0IHBhcmVudE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgICB9XG4gICAgc2V0IHBhcmVudE5vZGUocGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIHtAbGluayBwcmV2fS5cbiAgICAgKiBbRE9NIHNwZWNdKGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZyktY29tcGF0aWJsZSBhbGlhcy5cbiAgICAgKi9cbiAgICBnZXQgcHJldmlvdXNTaWJsaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmV2O1xuICAgIH1cbiAgICBzZXQgcHJldmlvdXNTaWJsaW5nKHByZXYpIHtcbiAgICAgICAgdGhpcy5wcmV2ID0gcHJldjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2FtZSBhcyB7QGxpbmsgbmV4dH0uXG4gICAgICogW0RPTSBzcGVjXShodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcpLWNvbXBhdGlibGUgYWxpYXMuXG4gICAgICovXG4gICAgZ2V0IG5leHRTaWJsaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uZXh0O1xuICAgIH1cbiAgICBzZXQgbmV4dFNpYmxpbmcobmV4dCkge1xuICAgICAgICB0aGlzLm5leHQgPSBuZXh0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbG9uZSB0aGlzIG5vZGUsIGFuZCBvcHRpb25hbGx5IGl0cyBjaGlsZHJlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWN1cnNpdmUgQ2xvbmUgY2hpbGQgbm9kZXMgYXMgd2VsbC5cbiAgICAgKiBAcmV0dXJucyBBIGNsb25lIG9mIHRoZSBub2RlLlxuICAgICAqL1xuICAgIGNsb25lTm9kZShyZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gY2xvbmVOb2RlKHRoaXMsIHJlY3Vyc2l2ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBBIG5vZGUgdGhhdCBjb250YWlucyBzb21lIGRhdGEuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRhTm9kZSBleHRlbmRzIE5vZGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBjb250ZW50IG9mIHRoZSBkYXRhIG5vZGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMge0BsaW5rIGRhdGF9LlxuICAgICAqIFtET00gc3BlY10oaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnKS1jb21wYXRpYmxlIGFsaWFzLlxuICAgICAqL1xuICAgIGdldCBub2RlVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICAgIHNldCBub2RlVmFsdWUoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cbi8qKlxuICogVGV4dCB3aXRoaW4gdGhlIGRvY3VtZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIERhdGFOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gRWxlbWVudFR5cGUuVGV4dDtcbiAgICB9XG4gICAgZ2V0IG5vZGVUeXBlKCkge1xuICAgICAgICByZXR1cm4gMztcbiAgICB9XG59XG4vKipcbiAqIENvbW1lbnRzIHdpdGhpbiB0aGUgZG9jdW1lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21tZW50IGV4dGVuZHMgRGF0YU5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBFbGVtZW50VHlwZS5Db21tZW50O1xuICAgIH1cbiAgICBnZXQgbm9kZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiA4O1xuICAgIH1cbn1cbi8qKlxuICogUHJvY2Vzc2luZyBpbnN0cnVjdGlvbnMsIGluY2x1ZGluZyBkb2MgdHlwZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gZXh0ZW5kcyBEYXRhTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0YSkge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50eXBlID0gRWxlbWVudFR5cGUuRGlyZWN0aXZlO1xuICAgIH1cbiAgICBnZXQgbm9kZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbn1cbi8qKlxuICogQSBgTm9kZWAgdGhhdCBjYW4gaGF2ZSBjaGlsZHJlbi5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGVXaXRoQ2hpbGRyZW4gZXh0ZW5kcyBOb2RlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY2hpbGRyZW4gQ2hpbGRyZW4gb2YgdGhlIG5vZGUuIE9ubHkgY2VydGFpbiBub2RlIHR5cGVzIGNhbiBoYXZlIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG4gICAgLy8gQWxpYXNlc1xuICAgIC8qKiBGaXJzdCBjaGlsZCBvZiB0aGUgbm9kZS4gKi9cbiAgICBnZXQgZmlyc3RDaGlsZCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5jaGlsZHJlblswXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcbiAgICB9XG4gICAgLyoqIExhc3QgY2hpbGQgb2YgdGhlIG5vZGUuICovXG4gICAgZ2V0IGxhc3RDaGlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB0aGlzLmNoaWxkcmVuW3RoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2FtZSBhcyB7QGxpbmsgY2hpbGRyZW59LlxuICAgICAqIFtET00gc3BlY10oaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnKS1jb21wYXRpYmxlIGFsaWFzLlxuICAgICAqL1xuICAgIGdldCBjaGlsZE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgICB9XG4gICAgc2V0IGNoaWxkTm9kZXMoY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDREFUQSBleHRlbmRzIE5vZGVXaXRoQ2hpbGRyZW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBFbGVtZW50VHlwZS5DREFUQTtcbiAgICB9XG4gICAgZ2V0IG5vZGVUeXBlKCkge1xuICAgICAgICByZXR1cm4gNDtcbiAgICB9XG59XG4vKipcbiAqIFRoZSByb290IG5vZGUgb2YgdGhlIGRvY3VtZW50LlxuICovXG5leHBvcnQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBOb2RlV2l0aENoaWxkcmVuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gRWxlbWVudFR5cGUuUm9vdDtcbiAgICB9XG4gICAgZ2V0IG5vZGVUeXBlKCkge1xuICAgICAgICByZXR1cm4gOTtcbiAgICB9XG59XG4vKipcbiAqIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjbGFzcyBFbGVtZW50IGV4dGVuZHMgTm9kZVdpdGhDaGlsZHJlbiB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgdGFnLCBlZy4gYGRpdmAsIGBzcGFuYC5cbiAgICAgKiBAcGFyYW0gYXR0cmlicyBPYmplY3QgbWFwcGluZyBhdHRyaWJ1dGUgbmFtZXMgdG8gYXR0cmlidXRlIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0gY2hpbGRyZW4gQ2hpbGRyZW4gb2YgdGhlIG5vZGUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgYXR0cmlicywgY2hpbGRyZW4gPSBbXSwgdHlwZSA9IG5hbWUgPT09IFwic2NyaXB0XCJcbiAgICAgICAgPyBFbGVtZW50VHlwZS5TY3JpcHRcbiAgICAgICAgOiBuYW1lID09PSBcInN0eWxlXCJcbiAgICAgICAgICAgID8gRWxlbWVudFR5cGUuU3R5bGVcbiAgICAgICAgICAgIDogRWxlbWVudFR5cGUuVGFnKSB7XG4gICAgICAgIHN1cGVyKGNoaWxkcmVuKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hdHRyaWJzID0gYXR0cmlicztcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgZ2V0IG5vZGVUeXBlKCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgLy8gRE9NIExldmVsIDEgYWxpYXNlc1xuICAgIC8qKlxuICAgICAqIFNhbWUgYXMge0BsaW5rIG5hbWV9LlxuICAgICAqIFtET00gc3BlY10oaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnKS1jb21wYXRpYmxlIGFsaWFzLlxuICAgICAqL1xuICAgIGdldCB0YWdOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBzZXQgdGFnTmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5hdHRyaWJzKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmF0dHJpYnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlOiAoX2EgPSB0aGlzW1wieC1hdHRyaWJzTmFtZXNwYWNlXCJdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbbmFtZV0sXG4gICAgICAgICAgICAgICAgcHJlZml4OiAoX2IgPSB0aGlzW1wieC1hdHRyaWJzUHJlZml4XCJdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbbmFtZV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLyoqXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIGNoZWNrLlxuICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBub2RlIGlzIGEgYEVsZW1lbnRgLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGFnKG5vZGUpIHtcbiAgICByZXR1cm4gaXNUYWdSYXcobm9kZSk7XG59XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBDREFUQWAsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNDREFUQShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gRWxlbWVudFR5cGUuQ0RBVEE7XG59XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBUZXh0YCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RleHQobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IEVsZW1lbnRUeXBlLlRleHQ7XG59XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBDb21tZW50YCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbW1lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IEVsZW1lbnRUeXBlLkNvbW1lbnQ7XG59XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb25gLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGlyZWN0aXZlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBFbGVtZW50VHlwZS5EaXJlY3RpdmU7XG59XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIHRoZSB0eXBlIGBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb25gLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRG9jdW1lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09IEVsZW1lbnRUeXBlLlJvb3Q7XG59XG4vKipcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG5vZGUgaGFzIGNoaWxkcmVuLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0NoaWxkcmVuKG5vZGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5vZGUsIFwiY2hpbGRyZW5cIik7XG59XG4vKipcbiAqIENsb25lIGEgbm9kZSwgYW5kIG9wdGlvbmFsbHkgaXRzIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSByZWN1cnNpdmUgQ2xvbmUgY2hpbGQgbm9kZXMgYXMgd2VsbC5cbiAqIEByZXR1cm5zIEEgY2xvbmUgb2YgdGhlIG5vZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZU5vZGUobm9kZSwgcmVjdXJzaXZlID0gZmFsc2UpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChpc1RleHQobm9kZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gbmV3IFRleHQobm9kZS5kYXRhKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNDb21tZW50KG5vZGUpKSB7XG4gICAgICAgIHJlc3VsdCA9IG5ldyBDb21tZW50KG5vZGUuZGF0YSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVGFnKG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcmVjdXJzaXZlID8gY2xvbmVDaGlsZHJlbihub2RlLmNoaWxkcmVuKSA6IFtdO1xuICAgICAgICBjb25zdCBjbG9uZSA9IG5ldyBFbGVtZW50KG5vZGUubmFtZSwgeyAuLi5ub2RlLmF0dHJpYnMgfSwgY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gKGNoaWxkLnBhcmVudCA9IGNsb25lKSk7XG4gICAgICAgIGlmIChub2RlLm5hbWVzcGFjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbG9uZS5uYW1lc3BhY2UgPSBub2RlLm5hbWVzcGFjZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZVtcIngtYXR0cmlic05hbWVzcGFjZVwiXSkge1xuICAgICAgICAgICAgY2xvbmVbXCJ4LWF0dHJpYnNOYW1lc3BhY2VcIl0gPSB7IC4uLm5vZGVbXCJ4LWF0dHJpYnNOYW1lc3BhY2VcIl0gfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZVtcIngtYXR0cmlic1ByZWZpeFwiXSkge1xuICAgICAgICAgICAgY2xvbmVbXCJ4LWF0dHJpYnNQcmVmaXhcIl0gPSB7IC4uLm5vZGVbXCJ4LWF0dHJpYnNQcmVmaXhcIl0gfTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBjbG9uZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNDREFUQShub2RlKSkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlY3Vyc2l2ZSA/IGNsb25lQ2hpbGRyZW4obm9kZS5jaGlsZHJlbikgOiBbXTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBuZXcgQ0RBVEEoY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gKGNoaWxkLnBhcmVudCA9IGNsb25lKSk7XG4gICAgICAgIHJlc3VsdCA9IGNsb25lO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0RvY3VtZW50KG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcmVjdXJzaXZlID8gY2xvbmVDaGlsZHJlbihub2RlLmNoaWxkcmVuKSA6IFtdO1xuICAgICAgICBjb25zdCBjbG9uZSA9IG5ldyBEb2N1bWVudChjaGlsZHJlbik7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiAoY2hpbGQucGFyZW50ID0gY2xvbmUpKTtcbiAgICAgICAgaWYgKG5vZGVbXCJ4LW1vZGVcIl0pIHtcbiAgICAgICAgICAgIGNsb25lW1wieC1tb2RlXCJdID0gbm9kZVtcIngtbW9kZVwiXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBjbG9uZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNEaXJlY3RpdmUobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBuZXcgUHJvY2Vzc2luZ0luc3RydWN0aW9uKG5vZGUubmFtZSwgbm9kZS5kYXRhKTtcbiAgICAgICAgaWYgKG5vZGVbXCJ4LW5hbWVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25bXCJ4LW5hbWVcIl0gPSBub2RlW1wieC1uYW1lXCJdO1xuICAgICAgICAgICAgaW5zdHJ1Y3Rpb25bXCJ4LXB1YmxpY0lkXCJdID0gbm9kZVtcIngtcHVibGljSWRcIl07XG4gICAgICAgICAgICBpbnN0cnVjdGlvbltcIngtc3lzdGVtSWRcIl0gPSBub2RlW1wieC1zeXN0ZW1JZFwiXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBpbnN0cnVjdGlvbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGltcGxlbWVudGVkIHlldDogJHtub2RlLnR5cGV9YCk7XG4gICAgfVxuICAgIHJlc3VsdC5zdGFydEluZGV4ID0gbm9kZS5zdGFydEluZGV4O1xuICAgIHJlc3VsdC5lbmRJbmRleCA9IG5vZGUuZW5kSW5kZXg7XG4gICAgaWYgKG5vZGUuc291cmNlQ29kZUxvY2F0aW9uICE9IG51bGwpIHtcbiAgICAgICAgcmVzdWx0LnNvdXJjZUNvZGVMb2NhdGlvbiA9IG5vZGUuc291cmNlQ29kZUxvY2F0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xvbmVDaGlsZHJlbihjaGlsZHMpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcy5tYXAoKGNoaWxkKSA9PiBjbG9uZU5vZGUoY2hpbGQsIHRydWUpKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoaWxkcmVuW2ldLnByZXYgPSBjaGlsZHJlbltpIC0gMV07XG4gICAgICAgIGNoaWxkcmVuW2kgLSAxXS5uZXh0ID0gY2hpbGRyZW5baV07XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbn1cbiIsImltcG9ydCB7IHRleHRDb250ZW50IH0gZnJvbSBcIi4vc3RyaW5naWZ5LmpzXCI7XG5pbXBvcnQgeyBnZXRFbGVtZW50c0J5VGFnTmFtZSB9IGZyb20gXCIuL2xlZ2FjeS5qc1wiO1xuLyoqXG4gKiBHZXQgdGhlIGZlZWQgb2JqZWN0IGZyb20gdGhlIHJvb3Qgb2YgYSBET00gdHJlZS5cbiAqXG4gKiBAY2F0ZWdvcnkgRmVlZHNcbiAqIEBwYXJhbSBkb2MgLSBUaGUgRE9NIHRvIHRvIGV4dHJhY3QgdGhlIGZlZWQgZnJvbS5cbiAqIEByZXR1cm5zIFRoZSBmZWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmVlZChkb2MpIHtcbiAgICBjb25zdCBmZWVkUm9vdCA9IGdldE9uZUVsZW1lbnQoaXNWYWxpZEZlZWQsIGRvYyk7XG4gICAgcmV0dXJuICFmZWVkUm9vdFxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBmZWVkUm9vdC5uYW1lID09PSBcImZlZWRcIlxuICAgICAgICAgICAgPyBnZXRBdG9tRmVlZChmZWVkUm9vdClcbiAgICAgICAgICAgIDogZ2V0UnNzRmVlZChmZWVkUm9vdCk7XG59XG4vKipcbiAqIFBhcnNlIGFuIEF0b20gZmVlZC5cbiAqXG4gKiBAcGFyYW0gZmVlZFJvb3QgVGhlIHJvb3Qgb2YgdGhlIGZlZWQuXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGZlZWQuXG4gKi9cbmZ1bmN0aW9uIGdldEF0b21GZWVkKGZlZWRSb290KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGNoaWxkcyA9IGZlZWRSb290LmNoaWxkcmVuO1xuICAgIGNvbnN0IGZlZWQgPSB7XG4gICAgICAgIHR5cGU6IFwiYXRvbVwiLFxuICAgICAgICBpdGVtczogZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJlbnRyeVwiLCBjaGlsZHMpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gaXRlbTtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0geyBtZWRpYTogZ2V0TWVkaWFFbGVtZW50cyhjaGlsZHJlbikgfTtcbiAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwiaWRcIiwgXCJpZFwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGVudHJ5LCBcInRpdGxlXCIsIFwidGl0bGVcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IChfYSA9IGdldE9uZUVsZW1lbnQoXCJsaW5rXCIsIGNoaWxkcmVuKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmF0dHJpYnNbXCJocmVmXCJdO1xuICAgICAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS5saW5rID0gaHJlZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZmV0Y2goXCJzdW1tYXJ5XCIsIGNoaWxkcmVuKSB8fCBmZXRjaChcImNvbnRlbnRcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgZW50cnkuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHB1YkRhdGUgPSBmZXRjaChcInVwZGF0ZWRcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgaWYgKHB1YkRhdGUpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS5wdWJEYXRlID0gbmV3IERhdGUocHViRGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH0pLFxuICAgIH07XG4gICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImlkXCIsIFwiaWRcIiwgY2hpbGRzKTtcbiAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwidGl0bGVcIiwgXCJ0aXRsZVwiLCBjaGlsZHMpO1xuICAgIGNvbnN0IGhyZWYgPSAoX2EgPSBnZXRPbmVFbGVtZW50KFwibGlua1wiLCBjaGlsZHMpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXR0cmlic1tcImhyZWZcIl07XG4gICAgaWYgKGhyZWYpIHtcbiAgICAgICAgZmVlZC5saW5rID0gaHJlZjtcbiAgICB9XG4gICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImRlc2NyaXB0aW9uXCIsIFwic3VidGl0bGVcIiwgY2hpbGRzKTtcbiAgICBjb25zdCB1cGRhdGVkID0gZmV0Y2goXCJ1cGRhdGVkXCIsIGNoaWxkcyk7XG4gICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgZmVlZC51cGRhdGVkID0gbmV3IERhdGUodXBkYXRlZCk7XG4gICAgfVxuICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJhdXRob3JcIiwgXCJlbWFpbFwiLCBjaGlsZHMsIHRydWUpO1xuICAgIHJldHVybiBmZWVkO1xufVxuLyoqXG4gKiBQYXJzZSBhIFJTUyBmZWVkLlxuICpcbiAqIEBwYXJhbSBmZWVkUm9vdCBUaGUgcm9vdCBvZiB0aGUgZmVlZC5cbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZmVlZC5cbiAqL1xuZnVuY3Rpb24gZ2V0UnNzRmVlZChmZWVkUm9vdCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgY2hpbGRzID0gKF9iID0gKF9hID0gZ2V0T25lRWxlbWVudChcImNoYW5uZWxcIiwgZmVlZFJvb3QuY2hpbGRyZW4pKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hpbGRyZW4pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFtdO1xuICAgIGNvbnN0IGZlZWQgPSB7XG4gICAgICAgIHR5cGU6IGZlZWRSb290Lm5hbWUuc3Vic3RyKDAsIDMpLFxuICAgICAgICBpZDogXCJcIixcbiAgICAgICAgaXRlbXM6IGdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaXRlbVwiLCBmZWVkUm9vdC5jaGlsZHJlbikubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBpdGVtO1xuICAgICAgICAgICAgY29uc3QgZW50cnkgPSB7IG1lZGlhOiBnZXRNZWRpYUVsZW1lbnRzKGNoaWxkcmVuKSB9O1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJpZFwiLCBcImd1aWRcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJ0aXRsZVwiLCBcInRpdGxlXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwibGlua1wiLCBcImxpbmtcIiwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uXCIsIGNoaWxkcmVuKTtcbiAgICAgICAgICAgIGNvbnN0IHB1YkRhdGUgPSBmZXRjaChcInB1YkRhdGVcIiwgY2hpbGRyZW4pIHx8IGZldGNoKFwiZGM6ZGF0ZVwiLCBjaGlsZHJlbik7XG4gICAgICAgICAgICBpZiAocHViRGF0ZSlcbiAgICAgICAgICAgICAgICBlbnRyeS5wdWJEYXRlID0gbmV3IERhdGUocHViRGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH0pLFxuICAgIH07XG4gICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcInRpdGxlXCIsIFwidGl0bGVcIiwgY2hpbGRzKTtcbiAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwibGlua1wiLCBcImxpbmtcIiwgY2hpbGRzKTtcbiAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwiZGVzY3JpcHRpb25cIiwgXCJkZXNjcmlwdGlvblwiLCBjaGlsZHMpO1xuICAgIGNvbnN0IHVwZGF0ZWQgPSBmZXRjaChcImxhc3RCdWlsZERhdGVcIiwgY2hpbGRzKTtcbiAgICBpZiAodXBkYXRlZCkge1xuICAgICAgICBmZWVkLnVwZGF0ZWQgPSBuZXcgRGF0ZSh1cGRhdGVkKTtcbiAgICB9XG4gICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImF1dGhvclwiLCBcIm1hbmFnaW5nRWRpdG9yXCIsIGNoaWxkcywgdHJ1ZSk7XG4gICAgcmV0dXJuIGZlZWQ7XG59XG5jb25zdCBNRURJQV9LRVlTX1NUUklORyA9IFtcInVybFwiLCBcInR5cGVcIiwgXCJsYW5nXCJdO1xuY29uc3QgTUVESUFfS0VZU19JTlQgPSBbXG4gICAgXCJmaWxlU2l6ZVwiLFxuICAgIFwiYml0cmF0ZVwiLFxuICAgIFwiZnJhbWVyYXRlXCIsXG4gICAgXCJzYW1wbGluZ3JhdGVcIixcbiAgICBcImNoYW5uZWxzXCIsXG4gICAgXCJkdXJhdGlvblwiLFxuICAgIFwiaGVpZ2h0XCIsXG4gICAgXCJ3aWR0aFwiLFxuXTtcbi8qKlxuICogR2V0IGFsbCBtZWRpYSBlbGVtZW50cyBvZiBhIGZlZWQgaXRlbS5cbiAqXG4gKiBAcGFyYW0gd2hlcmUgTm9kZXMgdG8gc2VhcmNoIGluLlxuICogQHJldHVybnMgTWVkaWEgZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGdldE1lZGlhRWxlbWVudHMod2hlcmUpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJtZWRpYTpjb250ZW50XCIsIHdoZXJlKS5tYXAoKGVsZW0pID0+IHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJzIH0gPSBlbGVtO1xuICAgICAgICBjb25zdCBtZWRpYSA9IHtcbiAgICAgICAgICAgIG1lZGl1bTogYXR0cmlic1tcIm1lZGl1bVwiXSxcbiAgICAgICAgICAgIGlzRGVmYXVsdDogISFhdHRyaWJzW1wiaXNEZWZhdWx0XCJdLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYiBvZiBNRURJQV9LRVlTX1NUUklORykge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnNbYXR0cmliXSkge1xuICAgICAgICAgICAgICAgIG1lZGlhW2F0dHJpYl0gPSBhdHRyaWJzW2F0dHJpYl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWIgb2YgTUVESUFfS0VZU19JTlQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJzW2F0dHJpYl0pIHtcbiAgICAgICAgICAgICAgICBtZWRpYVthdHRyaWJdID0gcGFyc2VJbnQoYXR0cmlic1thdHRyaWJdLCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnNbXCJleHByZXNzaW9uXCJdKSB7XG4gICAgICAgICAgICBtZWRpYS5leHByZXNzaW9uID0gYXR0cmlic1tcImV4cHJlc3Npb25cIl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgIH0pO1xufVxuLyoqXG4gKiBHZXQgb25lIGVsZW1lbnQgYnkgdGFnIG5hbWUuXG4gKlxuICogQHBhcmFtIHRhZ05hbWUgVGFnIG5hbWUgdG8gbG9vayBmb3JcbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gc2VhcmNoIGluXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCBvciBudWxsXG4gKi9cbmZ1bmN0aW9uIGdldE9uZUVsZW1lbnQodGFnTmFtZSwgbm9kZSkge1xuICAgIHJldHVybiBnZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lLCBub2RlLCB0cnVlLCAxKVswXTtcbn1cbi8qKlxuICogR2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgYW4gZWxlbWVudCB3aXRoIGEgY2VydGFpbiB0YWcgbmFtZS5cbiAqXG4gKiBAcGFyYW0gdGFnTmFtZSBUYWcgbmFtZSB0byBsb29rIGZvci5cbiAqIEBwYXJhbSB3aGVyZSBOb2RlIHRvIHNlYXJjaCBpbi5cbiAqIEBwYXJhbSByZWN1cnNlIFdoZXRoZXIgdG8gcmVjdXJzZSBpbnRvIGNoaWxkIG5vZGVzLlxuICogQHJldHVybnMgVGhlIHRleHQgY29udGVudCBvZiB0aGUgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZmV0Y2godGFnTmFtZSwgd2hlcmUsIHJlY3Vyc2UgPSBmYWxzZSkge1xuICAgIHJldHVybiB0ZXh0Q29udGVudChnZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lLCB3aGVyZSwgcmVjdXJzZSwgMSkpLnRyaW0oKTtcbn1cbi8qKlxuICogQWRkcyBhIHByb3BlcnR5IHRvIGFuIG9iamVjdCBpZiBpdCBoYXMgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gb2JqIE9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHByb3AgUHJvcGVydHkgbmFtZVxuICogQHBhcmFtIHRhZ05hbWUgVGFnIG5hbWUgdGhhdCBjb250YWlucyB0aGUgY29uZGl0aW9uYWxseSBhZGRlZCBwcm9wZXJ0eVxuICogQHBhcmFtIHdoZXJlIEVsZW1lbnQgdG8gc2VhcmNoIGZvciB0aGUgcHJvcGVydHlcbiAqIEBwYXJhbSByZWN1cnNlIFdoZXRoZXIgdG8gcmVjdXJzZSBpbnRvIGNoaWxkIG5vZGVzLlxuICovXG5mdW5jdGlvbiBhZGRDb25kaXRpb25hbGx5KG9iaiwgcHJvcCwgdGFnTmFtZSwgd2hlcmUsIHJlY3Vyc2UgPSBmYWxzZSkge1xuICAgIGNvbnN0IHZhbCA9IGZldGNoKHRhZ05hbWUsIHdoZXJlLCByZWN1cnNlKTtcbiAgICBpZiAodmFsKVxuICAgICAgICBvYmpbcHJvcF0gPSB2YWw7XG59XG4vKipcbiAqIENoZWNrcyBpZiBhbiBlbGVtZW50IGlzIGEgZmVlZCByb290IG5vZGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGNoZWNrLlxuICogQHJldHVybnMgV2hldGhlciBhbiBlbGVtZW50IGlzIGEgZmVlZCByb290IG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRGZWVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBcInJzc1wiIHx8IHZhbHVlID09PSBcImZlZWRcIiB8fCB2YWx1ZSA9PT0gXCJyZGY6UkRGXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZWVkcy5qcy5tYXAiLCJpbXBvcnQgeyBoYXNDaGlsZHJlbiB9IGZyb20gXCJkb21oYW5kbGVyXCI7XG4vKipcbiAqIEdpdmVuIGFuIGFycmF5IG9mIG5vZGVzLCByZW1vdmUgYW55IG1lbWJlciB0aGF0IGlzIGNvbnRhaW5lZCBieSBhbm90aGVyXG4gKiBtZW1iZXIuXG4gKlxuICogQGNhdGVnb3J5IEhlbHBlcnNcbiAqIEBwYXJhbSBub2RlcyBOb2RlcyB0byBmaWx0ZXIuXG4gKiBAcmV0dXJucyBSZW1haW5pbmcgbm9kZXMgdGhhdCBhcmVuJ3QgY29udGFpbmVkIGJ5IG90aGVyIG5vZGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU3Vic2V0cyhub2Rlcykge1xuICAgIGxldCBpZHggPSBub2Rlcy5sZW5ndGg7XG4gICAgLypcbiAgICAgKiBDaGVjayBpZiBlYWNoIG5vZGUgKG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzKSBpcyBhbHJlYWR5IGNvbnRhaW5lZCBpbiB0aGVcbiAgICAgKiBhcnJheS5cbiAgICAgKi9cbiAgICB3aGlsZSAoLS1pZHggPj0gMCkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaWR4XTtcbiAgICAgICAgLypcbiAgICAgICAgICogUmVtb3ZlIHRoZSBub2RlIGlmIGl0IGlzIG5vdCB1bmlxdWUuXG4gICAgICAgICAqIFdlIGFyZSBnb2luZyB0aHJvdWdoIHRoZSBhcnJheSBmcm9tIHRoZSBlbmQsIHNvIHdlIG9ubHlcbiAgICAgICAgICogaGF2ZSB0byBjaGVjayBub2RlcyB0aGF0IHByZWNlZWQgdGhlIG5vZGUgdW5kZXIgY29uc2lkZXJhdGlvbiBpbiB0aGUgYXJyYXkuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoaWR4ID4gMCAmJiBub2Rlcy5sYXN0SW5kZXhPZihub2RlLCBpZHggLSAxKSA+PSAwKSB7XG4gICAgICAgICAgICBub2Rlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGFuY2VzdG9yID0gbm9kZS5wYXJlbnQ7IGFuY2VzdG9yOyBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudCkge1xuICAgICAgICAgICAgaWYgKG5vZGVzLmluY2x1ZGVzKGFuY2VzdG9yKSkge1xuICAgICAgICAgICAgICAgIG5vZGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2Rlcztcbn1cbi8qKlxuICogQGNhdGVnb3J5IEhlbHBlcnNcbiAqIEBzZWUge0BsaW5rIGh0dHA6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tbm9kZS1jb21wYXJlZG9jdW1lbnRwb3NpdGlvbn1cbiAqL1xuZXhwb3J0IHZhciBEb2N1bWVudFBvc2l0aW9uO1xuKGZ1bmN0aW9uIChEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgRG9jdW1lbnRQb3NpdGlvbltEb2N1bWVudFBvc2l0aW9uW1wiRElTQ09OTkVDVEVEXCJdID0gMV0gPSBcIkRJU0NPTk5FQ1RFRFwiO1xuICAgIERvY3VtZW50UG9zaXRpb25bRG9jdW1lbnRQb3NpdGlvbltcIlBSRUNFRElOR1wiXSA9IDJdID0gXCJQUkVDRURJTkdcIjtcbiAgICBEb2N1bWVudFBvc2l0aW9uW0RvY3VtZW50UG9zaXRpb25bXCJGT0xMT1dJTkdcIl0gPSA0XSA9IFwiRk9MTE9XSU5HXCI7XG4gICAgRG9jdW1lbnRQb3NpdGlvbltEb2N1bWVudFBvc2l0aW9uW1wiQ09OVEFJTlNcIl0gPSA4XSA9IFwiQ09OVEFJTlNcIjtcbiAgICBEb2N1bWVudFBvc2l0aW9uW0RvY3VtZW50UG9zaXRpb25bXCJDT05UQUlORURfQllcIl0gPSAxNl0gPSBcIkNPTlRBSU5FRF9CWVwiO1xufSkoRG9jdW1lbnRQb3NpdGlvbiB8fCAoRG9jdW1lbnRQb3NpdGlvbiA9IHt9KSk7XG4vKipcbiAqIENvbXBhcmUgdGhlIHBvc2l0aW9uIG9mIG9uZSBub2RlIGFnYWluc3QgYW5vdGhlciBub2RlIGluIGFueSBvdGhlciBkb2N1bWVudCxcbiAqIHJldHVybmluZyBhIGJpdG1hc2sgd2l0aCB0aGUgdmFsdWVzIGZyb20ge0BsaW5rIERvY3VtZW50UG9zaXRpb259LlxuICpcbiAqIERvY3VtZW50IG9yZGVyOlxuICogPiBUaGVyZSBpcyBhbiBvcmRlcmluZywgZG9jdW1lbnQgb3JkZXIsIGRlZmluZWQgb24gYWxsIHRoZSBub2RlcyBpbiB0aGVcbiAqID4gZG9jdW1lbnQgY29ycmVzcG9uZGluZyB0byB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIGZpcnN0IGNoYXJhY3RlciBvZiB0aGVcbiAqID4gWE1MIHJlcHJlc2VudGF0aW9uIG9mIGVhY2ggbm9kZSBvY2N1cnMgaW4gdGhlIFhNTCByZXByZXNlbnRhdGlvbiBvZiB0aGVcbiAqID4gZG9jdW1lbnQgYWZ0ZXIgZXhwYW5zaW9uIG9mIGdlbmVyYWwgZW50aXRpZXMuIFRodXMsIHRoZSBkb2N1bWVudCBlbGVtZW50XG4gKiA+IG5vZGUgd2lsbCBiZSB0aGUgZmlyc3Qgbm9kZS4gRWxlbWVudCBub2RlcyBvY2N1ciBiZWZvcmUgdGhlaXIgY2hpbGRyZW4uXG4gKiA+IFRodXMsIGRvY3VtZW50IG9yZGVyIG9yZGVycyBlbGVtZW50IG5vZGVzIGluIG9yZGVyIG9mIHRoZSBvY2N1cnJlbmNlIG9mXG4gKiA+IHRoZWlyIHN0YXJ0LXRhZyBpbiB0aGUgWE1MIChhZnRlciBleHBhbnNpb24gb2YgZW50aXRpZXMpLiBUaGUgYXR0cmlidXRlXG4gKiA+IG5vZGVzIG9mIGFuIGVsZW1lbnQgb2NjdXIgYWZ0ZXIgdGhlIGVsZW1lbnQgYW5kIGJlZm9yZSBpdHMgY2hpbGRyZW4uIFRoZVxuICogPiByZWxhdGl2ZSBvcmRlciBvZiBhdHRyaWJ1dGUgbm9kZXMgaXMgaW1wbGVtZW50YXRpb24tZGVwZW5kZW50LlxuICpcbiAqIFNvdXJjZTpcbiAqIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvZ2xvc3NhcnkuaHRtbCNkdC1kb2N1bWVudC1vcmRlclxuICpcbiAqIEBjYXRlZ29yeSBIZWxwZXJzXG4gKiBAcGFyYW0gbm9kZUEgVGhlIGZpcnN0IG5vZGUgdG8gdXNlIGluIHRoZSBjb21wYXJpc29uXG4gKiBAcGFyYW0gbm9kZUIgVGhlIHNlY29uZCBub2RlIHRvIHVzZSBpbiB0aGUgY29tcGFyaXNvblxuICogQHJldHVybnMgQSBiaXRtYXNrIGRlc2NyaWJpbmcgdGhlIGlucHV0IG5vZGVzJyByZWxhdGl2ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgaHR0cDovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1ub2RlLWNvbXBhcmVkb2N1bWVudHBvc2l0aW9uIGZvclxuICogYSBkZXNjcmlwdGlvbiBvZiB0aGVzZSB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2RlQSwgbm9kZUIpIHtcbiAgICBjb25zdCBhUGFyZW50cyA9IFtdO1xuICAgIGNvbnN0IGJQYXJlbnRzID0gW107XG4gICAgaWYgKG5vZGVBID09PSBub2RlQikge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnQgPSBoYXNDaGlsZHJlbihub2RlQSkgPyBub2RlQSA6IG5vZGVBLnBhcmVudDtcbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICBhUGFyZW50cy51bnNoaWZ0KGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIGN1cnJlbnQgPSBoYXNDaGlsZHJlbihub2RlQikgPyBub2RlQiA6IG5vZGVCLnBhcmVudDtcbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICBiUGFyZW50cy51bnNoaWZ0KGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIGNvbnN0IG1heElkeCA9IE1hdGgubWluKGFQYXJlbnRzLmxlbmd0aCwgYlBhcmVudHMubGVuZ3RoKTtcbiAgICBsZXQgaWR4ID0gMDtcbiAgICB3aGlsZSAoaWR4IDwgbWF4SWR4ICYmIGFQYXJlbnRzW2lkeF0gPT09IGJQYXJlbnRzW2lkeF0pIHtcbiAgICAgICAgaWR4Kys7XG4gICAgfVxuICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIERvY3VtZW50UG9zaXRpb24uRElTQ09OTkVDVEVEO1xuICAgIH1cbiAgICBjb25zdCBzaGFyZWRQYXJlbnQgPSBhUGFyZW50c1tpZHggLSAxXTtcbiAgICBjb25zdCBzaWJsaW5ncyA9IHNoYXJlZFBhcmVudC5jaGlsZHJlbjtcbiAgICBjb25zdCBhU2libGluZyA9IGFQYXJlbnRzW2lkeF07XG4gICAgY29uc3QgYlNpYmxpbmcgPSBiUGFyZW50c1tpZHhdO1xuICAgIGlmIChzaWJsaW5ncy5pbmRleE9mKGFTaWJsaW5nKSA+IHNpYmxpbmdzLmluZGV4T2YoYlNpYmxpbmcpKSB7XG4gICAgICAgIGlmIChzaGFyZWRQYXJlbnQgPT09IG5vZGVCKSB7XG4gICAgICAgICAgICByZXR1cm4gRG9jdW1lbnRQb3NpdGlvbi5GT0xMT1dJTkcgfCBEb2N1bWVudFBvc2l0aW9uLkNPTlRBSU5FRF9CWTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRG9jdW1lbnRQb3NpdGlvbi5GT0xMT1dJTkc7XG4gICAgfVxuICAgIGlmIChzaGFyZWRQYXJlbnQgPT09IG5vZGVBKSB7XG4gICAgICAgIHJldHVybiBEb2N1bWVudFBvc2l0aW9uLlBSRUNFRElORyB8IERvY3VtZW50UG9zaXRpb24uQ09OVEFJTlM7XG4gICAgfVxuICAgIHJldHVybiBEb2N1bWVudFBvc2l0aW9uLlBSRUNFRElORztcbn1cbi8qKlxuICogU29ydCBhbiBhcnJheSBvZiBub2RlcyBiYXNlZCBvbiB0aGVpciByZWxhdGl2ZSBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQsXG4gKiByZW1vdmluZyBhbnkgZHVwbGljYXRlIG5vZGVzLiBJZiB0aGUgYXJyYXkgY29udGFpbnMgbm9kZXMgdGhhdCBkbyBub3QgYmVsb25nXG4gKiB0byB0aGUgc2FtZSBkb2N1bWVudCwgc29ydCBvcmRlciBpcyB1bnNwZWNpZmllZC5cbiAqXG4gKiBAY2F0ZWdvcnkgSGVscGVyc1xuICogQHBhcmFtIG5vZGVzIEFycmF5IG9mIERPTSBub2Rlcy5cbiAqIEByZXR1cm5zIENvbGxlY3Rpb24gb2YgdW5pcXVlIG5vZGVzLCBzb3J0ZWQgaW4gZG9jdW1lbnQgb3JkZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVTb3J0KG5vZGVzKSB7XG4gICAgbm9kZXMgPSBub2Rlcy5maWx0ZXIoKG5vZGUsIGksIGFycikgPT4gIWFyci5pbmNsdWRlcyhub2RlLCBpICsgMSkpO1xuICAgIG5vZGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmUgPSBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhLCBiKTtcbiAgICAgICAgaWYgKHJlbGF0aXZlICYgRG9jdW1lbnRQb3NpdGlvbi5QUkVDRURJTkcpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWxhdGl2ZSAmIERvY3VtZW50UG9zaXRpb24uRk9MTE9XSU5HKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWxwZXJzLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gXCIuL3N0cmluZ2lmeS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdHJhdmVyc2FsLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tYW5pcHVsYXRpb24uanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3F1ZXJ5aW5nLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9sZWdhY3kuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2hlbHBlcnMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2ZlZWRzLmpzXCI7XG4vKiogQGRlcHJlY2F0ZWQgVXNlIHRoZXNlIG1ldGhvZHMgZnJvbSBgZG9taGFuZGxlcmAgZGlyZWN0bHkuICovXG5leHBvcnQgeyBpc1RhZywgaXNDREFUQSwgaXNUZXh0LCBpc0NvbW1lbnQsIGlzRG9jdW1lbnQsIGhhc0NoaWxkcmVuLCB9IGZyb20gXCJkb21oYW5kbGVyXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBpc1RhZywgaXNUZXh0IH0gZnJvbSBcImRvbWhhbmRsZXJcIjtcbmltcG9ydCB7IGZpbHRlciwgZmluZE9uZSB9IGZyb20gXCIuL3F1ZXJ5aW5nLmpzXCI7XG4vKipcbiAqIEEgbWFwIG9mIGZ1bmN0aW9ucyB0byBjaGVjayBub2RlcyBhZ2FpbnN0LlxuICovXG5jb25zdCBDaGVja3MgPSB7XG4gICAgdGFnX25hbWUobmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIChlbGVtKSA9PiBpc1RhZyhlbGVtKSAmJiBuYW1lKGVsZW0ubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1RhZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGVsZW0pID0+IGlzVGFnKGVsZW0pICYmIGVsZW0ubmFtZSA9PT0gbmFtZTtcbiAgICB9LFxuICAgIHRhZ190eXBlKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoZWxlbSkgPT4gdHlwZShlbGVtLnR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoZWxlbSkgPT4gZWxlbS50eXBlID09PSB0eXBlO1xuICAgIH0sXG4gICAgdGFnX2NvbnRhaW5zKGRhdGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoZWxlbSkgPT4gaXNUZXh0KGVsZW0pICYmIGRhdGEoZWxlbS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGVsZW0pID0+IGlzVGV4dChlbGVtKSAmJiBlbGVtLmRhdGEgPT09IGRhdGE7XG4gICAgfSxcbn07XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byBjaGVjayB3aGV0aGVyIGEgbm9kZSBoYXMgYW4gYXR0cmlidXRlIHdpdGggYSBwYXJ0aWN1bGFyXG4gKiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gYXR0cmliIEF0dHJpYnV0ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB2YWx1ZSBBdHRyaWJ1dGUgdmFsdWUgdG8gbG9vayBmb3IuXG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRvIGNoZWNrIHdoZXRoZXIgdGhlIGEgbm9kZSBoYXMgYW4gYXR0cmlidXRlIHdpdGggYVxuICogICBwYXJ0aWN1bGFyIHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRBdHRyaWJDaGVjayhhdHRyaWIsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiAoZWxlbSkgPT4gaXNUYWcoZWxlbSkgJiYgdmFsdWUoZWxlbS5hdHRyaWJzW2F0dHJpYl0pO1xuICAgIH1cbiAgICByZXR1cm4gKGVsZW0pID0+IGlzVGFnKGVsZW0pICYmIGVsZW0uYXR0cmlic1thdHRyaWJdID09PSB2YWx1ZTtcbn1cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdHJ1ZWAgaWYgZWl0aGVyIG9mIHRoZSBpbnB1dCBmdW5jdGlvbnNcbiAqIHJldHVybnMgYHRydWVgIGZvciBhIG5vZGUuXG4gKlxuICogQHBhcmFtIGEgRmlyc3QgZnVuY3Rpb24gdG8gY29tYmluZS5cbiAqIEBwYXJhbSBiIFNlY29uZCBmdW5jdGlvbiB0byBjb21iaW5lLlxuICogQHJldHVybnMgQSBmdW5jdGlvbiB0YWtpbmcgYSBub2RlIGFuZCByZXR1cm5pbmcgYHRydWVgIGlmIGVpdGhlciBvZiB0aGUgaW5wdXRcbiAqICAgZnVuY3Rpb25zIHJldHVybnMgYHRydWVgIGZvciB0aGUgbm9kZS5cbiAqL1xuZnVuY3Rpb24gY29tYmluZUZ1bmNzKGEsIGIpIHtcbiAgICByZXR1cm4gKGVsZW0pID0+IGEoZWxlbSkgfHwgYihlbGVtKTtcbn1cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgYWxsIGNoZWNrcyBpbiBgb3B0aW9uc2AgYW5kIHJldHVybnMgYHRydWVgXG4gKiBpZiBhbnkgb2YgdGhlbSBtYXRjaCBhIG5vZGUuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IGRlc2NyaWJpbmcgbm9kZXMgdG8gbG9vayBmb3IuXG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgYWxsIGNoZWNrcyBpbiBgb3B0aW9uc2AgYW5kIHJldHVybnMgYHRydWVgXG4gKiAgIGlmIGFueSBvZiB0aGVtIG1hdGNoIGEgbm9kZS5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZVRlc3Qob3B0aW9ucykge1xuICAgIGNvbnN0IGZ1bmNzID0gT2JqZWN0LmtleXMob3B0aW9ucykubWFwKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW2tleV07XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoQ2hlY2tzLCBrZXkpXG4gICAgICAgICAgICA/IENoZWNrc1trZXldKHZhbHVlKVxuICAgICAgICAgICAgOiBnZXRBdHRyaWJDaGVjayhrZXksIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3MubGVuZ3RoID09PSAwID8gbnVsbCA6IGZ1bmNzLnJlZHVjZShjb21iaW5lRnVuY3MpO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIG5vZGUgbWF0Y2hlcyB0aGUgZGVzY3JpcHRpb24gaW4gYG9wdGlvbnNgLlxuICpcbiAqIEBjYXRlZ29yeSBMZWdhY3kgUXVlcnkgRnVuY3Rpb25zXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgZGVzY3JpYmluZyBub2RlcyB0byBsb29rIGZvci5cbiAqIEBwYXJhbSBub2RlIFRoZSBlbGVtZW50IHRvIHRlc3QuXG4gKiBAcmV0dXJucyBXaGV0aGVyIHRoZSBlbGVtZW50IG1hdGNoZXMgdGhlIGRlc2NyaXB0aW9uIGluIGBvcHRpb25zYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlc3RFbGVtZW50KG9wdGlvbnMsIG5vZGUpIHtcbiAgICBjb25zdCB0ZXN0ID0gY29tcGlsZVRlc3Qob3B0aW9ucyk7XG4gICAgcmV0dXJuIHRlc3QgPyB0ZXN0KG5vZGUpIDogdHJ1ZTtcbn1cbi8qKlxuICogUmV0dXJucyBhbGwgbm9kZXMgdGhhdCBtYXRjaCBgb3B0aW9uc2AuXG4gKlxuICogQGNhdGVnb3J5IExlZ2FjeSBRdWVyeSBGdW5jdGlvbnNcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCBkZXNjcmliaW5nIG5vZGVzIHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIG5vZGVzIE5vZGVzIHRvIHNlYXJjaCB0aHJvdWdoLlxuICogQHBhcmFtIHJlY3Vyc2UgQWxzbyBjb25zaWRlciBjaGlsZCBub2Rlcy5cbiAqIEBwYXJhbSBsaW1pdCBNYXhpbXVtIG51bWJlciBvZiBub2RlcyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyBBbGwgbm9kZXMgdGhhdCBtYXRjaCBgb3B0aW9uc2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50cyhvcHRpb25zLCBub2RlcywgcmVjdXJzZSwgbGltaXQgPSBJbmZpbml0eSkge1xuICAgIGNvbnN0IHRlc3QgPSBjb21waWxlVGVzdChvcHRpb25zKTtcbiAgICByZXR1cm4gdGVzdCA/IGZpbHRlcih0ZXN0LCBub2RlcywgcmVjdXJzZSwgbGltaXQpIDogW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIG5vZGUgd2l0aCB0aGUgc3VwcGxpZWQgSUQuXG4gKlxuICogQGNhdGVnb3J5IExlZ2FjeSBRdWVyeSBGdW5jdGlvbnNcbiAqIEBwYXJhbSBpZCBUaGUgdW5pcXVlIElEIGF0dHJpYnV0ZSB2YWx1ZSB0byBsb29rIGZvci5cbiAqIEBwYXJhbSBub2RlcyBOb2RlcyB0byBzZWFyY2ggdGhyb3VnaC5cbiAqIEBwYXJhbSByZWN1cnNlIEFsc28gY29uc2lkZXIgY2hpbGQgbm9kZXMuXG4gKiBAcmV0dXJucyBUaGUgbm9kZSB3aXRoIHRoZSBzdXBwbGllZCBJRC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkKGlkLCBub2RlcywgcmVjdXJzZSA9IHRydWUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobm9kZXMpKVxuICAgICAgICBub2RlcyA9IFtub2Rlc107XG4gICAgcmV0dXJuIGZpbmRPbmUoZ2V0QXR0cmliQ2hlY2soXCJpZFwiLCBpZCksIG5vZGVzLCByZWN1cnNlKTtcbn1cbi8qKlxuICogUmV0dXJucyBhbGwgbm9kZXMgd2l0aCB0aGUgc3VwcGxpZWQgYHRhZ05hbWVgLlxuICpcbiAqIEBjYXRlZ29yeSBMZWdhY3kgUXVlcnkgRnVuY3Rpb25zXG4gKiBAcGFyYW0gdGFnTmFtZSBUYWcgbmFtZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIG5vZGVzIE5vZGVzIHRvIHNlYXJjaCB0aHJvdWdoLlxuICogQHBhcmFtIHJlY3Vyc2UgQWxzbyBjb25zaWRlciBjaGlsZCBub2Rlcy5cbiAqIEBwYXJhbSBsaW1pdCBNYXhpbXVtIG51bWJlciBvZiBub2RlcyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyBBbGwgbm9kZXMgd2l0aCB0aGUgc3VwcGxpZWQgYHRhZ05hbWVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSwgbm9kZXMsIHJlY3Vyc2UgPSB0cnVlLCBsaW1pdCA9IEluZmluaXR5KSB7XG4gICAgcmV0dXJuIGZpbHRlcihDaGVja3NbXCJ0YWdfbmFtZVwiXSh0YWdOYW1lKSwgbm9kZXMsIHJlY3Vyc2UsIGxpbWl0KTtcbn1cbi8qKlxuICogUmV0dXJucyBhbGwgbm9kZXMgd2l0aCB0aGUgc3VwcGxpZWQgYHR5cGVgLlxuICpcbiAqIEBjYXRlZ29yeSBMZWdhY3kgUXVlcnkgRnVuY3Rpb25zXG4gKiBAcGFyYW0gdHlwZSBFbGVtZW50IHR5cGUgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0gbm9kZXMgTm9kZXMgdG8gc2VhcmNoIHRocm91Z2guXG4gKiBAcGFyYW0gcmVjdXJzZSBBbHNvIGNvbnNpZGVyIGNoaWxkIG5vZGVzLlxuICogQHBhcmFtIGxpbWl0IE1heGltdW0gbnVtYmVyIG9mIG5vZGVzIHRvIHJldHVybi5cbiAqIEByZXR1cm5zIEFsbCBub2RlcyB3aXRoIHRoZSBzdXBwbGllZCBgdHlwZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnVHlwZSh0eXBlLCBub2RlcywgcmVjdXJzZSA9IHRydWUsIGxpbWl0ID0gSW5maW5pdHkpIHtcbiAgICByZXR1cm4gZmlsdGVyKENoZWNrc1tcInRhZ190eXBlXCJdKHR5cGUpLCBub2RlcywgcmVjdXJzZSwgbGltaXQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGVnYWN5LmpzLm1hcCIsIi8qKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSB0aGUgZG9tXG4gKlxuICogQGNhdGVnb3J5IE1hbmlwdWxhdGlvblxuICogQHBhcmFtIGVsZW0gVGhlIGVsZW1lbnQgdG8gYmUgcmVtb3ZlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbGVtKSB7XG4gICAgaWYgKGVsZW0ucHJldilcbiAgICAgICAgZWxlbS5wcmV2Lm5leHQgPSBlbGVtLm5leHQ7XG4gICAgaWYgKGVsZW0ubmV4dClcbiAgICAgICAgZWxlbS5uZXh0LnByZXYgPSBlbGVtLnByZXY7XG4gICAgaWYgKGVsZW0ucGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcyA9IGVsZW0ucGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBjaGlsZHNJbmRleCA9IGNoaWxkcy5sYXN0SW5kZXhPZihlbGVtKTtcbiAgICAgICAgaWYgKGNoaWxkc0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIGNoaWxkcy5zcGxpY2UoY2hpbGRzSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsZW0ubmV4dCA9IG51bGw7XG4gICAgZWxlbS5wcmV2ID0gbnVsbDtcbiAgICBlbGVtLnBhcmVudCA9IG51bGw7XG59XG4vKipcbiAqIFJlcGxhY2UgYW4gZWxlbWVudCBpbiB0aGUgZG9tXG4gKlxuICogQGNhdGVnb3J5IE1hbmlwdWxhdGlvblxuICogQHBhcmFtIGVsZW0gVGhlIGVsZW1lbnQgdG8gYmUgcmVwbGFjZWRcbiAqIEBwYXJhbSByZXBsYWNlbWVudCBUaGUgZWxlbWVudCB0byBiZSBhZGRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxlbSwgcmVwbGFjZW1lbnQpIHtcbiAgICBjb25zdCBwcmV2ID0gKHJlcGxhY2VtZW50LnByZXYgPSBlbGVtLnByZXYpO1xuICAgIGlmIChwcmV2KSB7XG4gICAgICAgIHByZXYubmV4dCA9IHJlcGxhY2VtZW50O1xuICAgIH1cbiAgICBjb25zdCBuZXh0ID0gKHJlcGxhY2VtZW50Lm5leHQgPSBlbGVtLm5leHQpO1xuICAgIGlmIChuZXh0KSB7XG4gICAgICAgIG5leHQucHJldiA9IHJlcGxhY2VtZW50O1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnQgPSAocmVwbGFjZW1lbnQucGFyZW50ID0gZWxlbS5wYXJlbnQpO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRzID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBjaGlsZHNbY2hpbGRzLmxhc3RJbmRleE9mKGVsZW0pXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICBlbGVtLnBhcmVudCA9IG51bGw7XG4gICAgfVxufVxuLyoqXG4gKiBBcHBlbmQgYSBjaGlsZCB0byBhbiBlbGVtZW50LlxuICpcbiAqIEBjYXRlZ29yeSBNYW5pcHVsYXRpb25cbiAqIEBwYXJhbSBwYXJlbnQgVGhlIGVsZW1lbnQgdG8gYXBwZW5kIHRvLlxuICogQHBhcmFtIGNoaWxkIFRoZSBlbGVtZW50IHRvIGJlIGFkZGVkIGFzIGEgY2hpbGQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG4gICAgcmVtb3ZlRWxlbWVudChjaGlsZCk7XG4gICAgY2hpbGQubmV4dCA9IG51bGw7XG4gICAgY2hpbGQucGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCkgPiAxKSB7XG4gICAgICAgIGNvbnN0IHNpYmxpbmcgPSBwYXJlbnQuY2hpbGRyZW5bcGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDJdO1xuICAgICAgICBzaWJsaW5nLm5leHQgPSBjaGlsZDtcbiAgICAgICAgY2hpbGQucHJldiA9IHNpYmxpbmc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjaGlsZC5wcmV2ID0gbnVsbDtcbiAgICB9XG59XG4vKipcbiAqIEFwcGVuZCBhbiBlbGVtZW50IGFmdGVyIGFub3RoZXIuXG4gKlxuICogQGNhdGVnb3J5IE1hbmlwdWxhdGlvblxuICogQHBhcmFtIGVsZW0gVGhlIGVsZW1lbnQgdG8gYXBwZW5kIGFmdGVyLlxuICogQHBhcmFtIG5leHQgVGhlIGVsZW1lbnQgYmUgYWRkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQoZWxlbSwgbmV4dCkge1xuICAgIHJlbW92ZUVsZW1lbnQobmV4dCk7XG4gICAgY29uc3QgeyBwYXJlbnQgfSA9IGVsZW07XG4gICAgY29uc3QgY3Vyck5leHQgPSBlbGVtLm5leHQ7XG4gICAgbmV4dC5uZXh0ID0gY3Vyck5leHQ7XG4gICAgbmV4dC5wcmV2ID0gZWxlbTtcbiAgICBlbGVtLm5leHQgPSBuZXh0O1xuICAgIG5leHQucGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChjdXJyTmV4dCkge1xuICAgICAgICBjdXJyTmV4dC5wcmV2ID0gbmV4dDtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRzID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGRzLnNwbGljZShjaGlsZHMubGFzdEluZGV4T2YoY3Vyck5leHQpLCAwLCBuZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2gobmV4dCk7XG4gICAgfVxufVxuLyoqXG4gKiBQcmVwZW5kIGEgY2hpbGQgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBAY2F0ZWdvcnkgTWFuaXB1bGF0aW9uXG4gKiBAcGFyYW0gcGFyZW50IFRoZSBlbGVtZW50IHRvIHByZXBlbmQgYmVmb3JlLlxuICogQHBhcmFtIGNoaWxkIFRoZSBlbGVtZW50IHRvIGJlIGFkZGVkIGFzIGEgY2hpbGQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kQ2hpbGQocGFyZW50LCBjaGlsZCkge1xuICAgIHJlbW92ZUVsZW1lbnQoY2hpbGQpO1xuICAgIGNoaWxkLnBhcmVudCA9IHBhcmVudDtcbiAgICBjaGlsZC5wcmV2ID0gbnVsbDtcbiAgICBpZiAocGFyZW50LmNoaWxkcmVuLnVuc2hpZnQoY2hpbGQpICE9PSAxKSB7XG4gICAgICAgIGNvbnN0IHNpYmxpbmcgPSBwYXJlbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIHNpYmxpbmcucHJldiA9IGNoaWxkO1xuICAgICAgICBjaGlsZC5uZXh0ID0gc2libGluZztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNoaWxkLm5leHQgPSBudWxsO1xuICAgIH1cbn1cbi8qKlxuICogUHJlcGVuZCBhbiBlbGVtZW50IGJlZm9yZSBhbm90aGVyLlxuICpcbiAqIEBjYXRlZ29yeSBNYW5pcHVsYXRpb25cbiAqIEBwYXJhbSBlbGVtIFRoZSBlbGVtZW50IHRvIHByZXBlbmQgYmVmb3JlLlxuICogQHBhcmFtIHByZXYgVGhlIGVsZW1lbnQgYmUgYWRkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kKGVsZW0sIHByZXYpIHtcbiAgICByZW1vdmVFbGVtZW50KHByZXYpO1xuICAgIGNvbnN0IHsgcGFyZW50IH0gPSBlbGVtO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRzID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBjaGlsZHMuc3BsaWNlKGNoaWxkcy5pbmRleE9mKGVsZW0pLCAwLCBwcmV2KTtcbiAgICB9XG4gICAgaWYgKGVsZW0ucHJldikge1xuICAgICAgICBlbGVtLnByZXYubmV4dCA9IHByZXY7XG4gICAgfVxuICAgIHByZXYucGFyZW50ID0gcGFyZW50O1xuICAgIHByZXYucHJldiA9IGVsZW0ucHJldjtcbiAgICBwcmV2Lm5leHQgPSBlbGVtO1xuICAgIGVsZW0ucHJldiA9IHByZXY7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYW5pcHVsYXRpb24uanMubWFwIiwiaW1wb3J0IHsgaXNUYWcsIGhhc0NoaWxkcmVuIH0gZnJvbSBcImRvbWhhbmRsZXJcIjtcbi8qKlxuICogU2VhcmNoIGEgbm9kZSBhbmQgaXRzIGNoaWxkcmVuIGZvciBub2RlcyBwYXNzaW5nIGEgdGVzdCBmdW5jdGlvbi4gSWYgYG5vZGVgIGlzIG5vdCBhbiBhcnJheSwgaXQgd2lsbCBiZSB3cmFwcGVkIGluIG9uZS5cbiAqXG4gKiBAY2F0ZWdvcnkgUXVlcnlpbmdcbiAqIEBwYXJhbSB0ZXN0IEZ1bmN0aW9uIHRvIHRlc3Qgbm9kZXMgb24uXG4gKiBAcGFyYW0gbm9kZSBOb2RlIHRvIHNlYXJjaC4gV2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0IHNldCBpZiBpdCBtYXRjaGVzLlxuICogQHBhcmFtIHJlY3Vyc2UgQWxzbyBjb25zaWRlciBjaGlsZCBub2Rlcy5cbiAqIEBwYXJhbSBsaW1pdCBNYXhpbXVtIG51bWJlciBvZiBub2RlcyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyBBbGwgbm9kZXMgcGFzc2luZyBgdGVzdGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIodGVzdCwgbm9kZSwgcmVjdXJzZSA9IHRydWUsIGxpbWl0ID0gSW5maW5pdHkpIHtcbiAgICByZXR1cm4gZmluZCh0ZXN0LCBBcnJheS5pc0FycmF5KG5vZGUpID8gbm9kZSA6IFtub2RlXSwgcmVjdXJzZSwgbGltaXQpO1xufVxuLyoqXG4gKiBTZWFyY2ggYW4gYXJyYXkgb2Ygbm9kZXMgYW5kIHRoZWlyIGNoaWxkcmVuIGZvciBub2RlcyBwYXNzaW5nIGEgdGVzdCBmdW5jdGlvbi5cbiAqXG4gKiBAY2F0ZWdvcnkgUXVlcnlpbmdcbiAqIEBwYXJhbSB0ZXN0IEZ1bmN0aW9uIHRvIHRlc3Qgbm9kZXMgb24uXG4gKiBAcGFyYW0gbm9kZXMgQXJyYXkgb2Ygbm9kZXMgdG8gc2VhcmNoLlxuICogQHBhcmFtIHJlY3Vyc2UgQWxzbyBjb25zaWRlciBjaGlsZCBub2Rlcy5cbiAqIEBwYXJhbSBsaW1pdCBNYXhpbXVtIG51bWJlciBvZiBub2RlcyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyBBbGwgbm9kZXMgcGFzc2luZyBgdGVzdGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKHRlc3QsIG5vZGVzLCByZWN1cnNlLCBsaW1pdCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIC8qKiBTdGFjayBvZiB0aGUgYXJyYXlzIHdlIGFyZSBsb29raW5nIGF0LiAqL1xuICAgIGNvbnN0IG5vZGVTdGFjayA9IFtub2Rlc107XG4gICAgLyoqIFN0YWNrIG9mIHRoZSBpbmRpY2VzIHdpdGhpbiB0aGUgYXJyYXlzLiAqL1xuICAgIGNvbnN0IGluZGV4U3RhY2sgPSBbMF07XG4gICAgZm9yICg7Oykge1xuICAgICAgICAvLyBGaXJzdCwgY2hlY2sgaWYgdGhlIGN1cnJlbnQgYXJyYXkgaGFzIGFueSBtb3JlIGVsZW1lbnRzIHRvIGxvb2sgYXQuXG4gICAgICAgIGlmIChpbmRleFN0YWNrWzBdID49IG5vZGVTdGFja1swXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgbm8gbW9yZSBhcnJheXMgdG8gbG9vayBhdCwgd2UgYXJlIGRvbmUuXG4gICAgICAgICAgICBpZiAoaW5kZXhTdGFjay5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgdGhlIGN1cnJlbnQgYXJyYXkgZnJvbSB0aGUgc3RhY2suXG4gICAgICAgICAgICBub2RlU3RhY2suc2hpZnQoKTtcbiAgICAgICAgICAgIGluZGV4U3RhY2suc2hpZnQoKTtcbiAgICAgICAgICAgIC8vIExvb3AgYmFjayB0byB0aGUgc3RhcnQgdG8gY29udGludWUgd2l0aCB0aGUgbmV4dCBhcnJheS5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW0gPSBub2RlU3RhY2tbMF1baW5kZXhTdGFja1swXSsrXTtcbiAgICAgICAgaWYgKHRlc3QoZWxlbSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgaWYgKC0tbGltaXQgPD0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWN1cnNlICYmIGhhc0NoaWxkcmVuKGVsZW0pICYmIGVsZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIEFkZCB0aGUgY2hpbGRyZW4gdG8gdGhlIHN0YWNrLiBXZSBhcmUgZGVwdGgtZmlyc3QsIHNvIHRoaXMgaXNcbiAgICAgICAgICAgICAqIHRoZSBuZXh0IGFycmF5IHdlIGxvb2sgYXQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGluZGV4U3RhY2sudW5zaGlmdCgwKTtcbiAgICAgICAgICAgIG5vZGVTdGFjay51bnNoaWZ0KGVsZW0uY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgZWxlbWVudCBpbnNpZGUgb2YgYW4gYXJyYXkgdGhhdCBtYXRjaGVzIGEgdGVzdCBmdW5jdGlvbi4gVGhpcyBpcyBhbiBhbGlhcyBmb3IgYEFycmF5LnByb3RvdHlwZS5maW5kYC5cbiAqXG4gKiBAY2F0ZWdvcnkgUXVlcnlpbmdcbiAqIEBwYXJhbSB0ZXN0IEZ1bmN0aW9uIHRvIHRlc3Qgbm9kZXMgb24uXG4gKiBAcGFyYW0gbm9kZXMgQXJyYXkgb2Ygbm9kZXMgdG8gc2VhcmNoLlxuICogQHJldHVybnMgVGhlIGZpcnN0IG5vZGUgaW4gdGhlIGFycmF5IHRoYXQgcGFzc2VzIGB0ZXN0YC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgQXJyYXkucHJvdG90eXBlLmZpbmRgIGRpcmVjdGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZE9uZUNoaWxkKHRlc3QsIG5vZGVzKSB7XG4gICAgcmV0dXJuIG5vZGVzLmZpbmQodGVzdCk7XG59XG4vKipcbiAqIEZpbmRzIG9uZSBlbGVtZW50IGluIGEgdHJlZSB0aGF0IHBhc3NlcyBhIHRlc3QuXG4gKlxuICogQGNhdGVnb3J5IFF1ZXJ5aW5nXG4gKiBAcGFyYW0gdGVzdCBGdW5jdGlvbiB0byB0ZXN0IG5vZGVzIG9uLlxuICogQHBhcmFtIG5vZGVzIE5vZGUgb3IgYXJyYXkgb2Ygbm9kZXMgdG8gc2VhcmNoLlxuICogQHBhcmFtIHJlY3Vyc2UgQWxzbyBjb25zaWRlciBjaGlsZCBub2Rlcy5cbiAqIEByZXR1cm5zIFRoZSBmaXJzdCBub2RlIHRoYXQgcGFzc2VzIGB0ZXN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRPbmUodGVzdCwgbm9kZXMsIHJlY3Vyc2UgPSB0cnVlKSB7XG4gICAgbGV0IGVsZW0gPSBudWxsO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoICYmICFlbGVtOyBpKyspIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAoIWlzVGFnKG5vZGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0ZXN0KG5vZGUpKSB7XG4gICAgICAgICAgICBlbGVtID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWN1cnNlICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZWxlbSA9IGZpbmRPbmUodGVzdCwgbm9kZS5jaGlsZHJlbiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW07XG59XG4vKipcbiAqIENoZWNrcyBpZiBhIHRyZWUgb2Ygbm9kZXMgY29udGFpbnMgYXQgbGVhc3Qgb25lIG5vZGUgcGFzc2luZyBhIHRlc3QuXG4gKlxuICogQGNhdGVnb3J5IFF1ZXJ5aW5nXG4gKiBAcGFyYW0gdGVzdCBGdW5jdGlvbiB0byB0ZXN0IG5vZGVzIG9uLlxuICogQHBhcmFtIG5vZGVzIEFycmF5IG9mIG5vZGVzIHRvIHNlYXJjaC5cbiAqIEByZXR1cm5zIFdoZXRoZXIgYSB0cmVlIG9mIG5vZGVzIGNvbnRhaW5zIGF0IGxlYXN0IG9uZSBub2RlIHBhc3NpbmcgdGhlIHRlc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGlzdHNPbmUodGVzdCwgbm9kZXMpIHtcbiAgICByZXR1cm4gbm9kZXMuc29tZSgoY2hlY2tlZCkgPT4gaXNUYWcoY2hlY2tlZCkgJiZcbiAgICAgICAgKHRlc3QoY2hlY2tlZCkgfHwgZXhpc3RzT25lKHRlc3QsIGNoZWNrZWQuY2hpbGRyZW4pKSk7XG59XG4vKipcbiAqIFNlYXJjaCBhbiBhcnJheSBvZiBub2RlcyBhbmQgdGhlaXIgY2hpbGRyZW4gZm9yIGVsZW1lbnRzIHBhc3NpbmcgYSB0ZXN0IGZ1bmN0aW9uLlxuICpcbiAqIFNhbWUgYXMgYGZpbmRgLCBidXQgbGltaXRlZCB0byBlbGVtZW50cyBhbmQgd2l0aCBsZXNzIG9wdGlvbnMsIGxlYWRpbmcgdG8gcmVkdWNlZCBjb21wbGV4aXR5LlxuICpcbiAqIEBjYXRlZ29yeSBRdWVyeWluZ1xuICogQHBhcmFtIHRlc3QgRnVuY3Rpb24gdG8gdGVzdCBub2RlcyBvbi5cbiAqIEBwYXJhbSBub2RlcyBBcnJheSBvZiBub2RlcyB0byBzZWFyY2guXG4gKiBAcmV0dXJucyBBbGwgbm9kZXMgcGFzc2luZyBgdGVzdGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQWxsKHRlc3QsIG5vZGVzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3Qgbm9kZVN0YWNrID0gW25vZGVzXTtcbiAgICBjb25zdCBpbmRleFN0YWNrID0gWzBdO1xuICAgIGZvciAoOzspIHtcbiAgICAgICAgaWYgKGluZGV4U3RhY2tbMF0gPj0gbm9kZVN0YWNrWzBdLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKG5vZGVTdGFjay5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgdGhlIGN1cnJlbnQgYXJyYXkgZnJvbSB0aGUgc3RhY2suXG4gICAgICAgICAgICBub2RlU3RhY2suc2hpZnQoKTtcbiAgICAgICAgICAgIGluZGV4U3RhY2suc2hpZnQoKTtcbiAgICAgICAgICAgIC8vIExvb3AgYmFjayB0byB0aGUgc3RhcnQgdG8gY29udGludWUgd2l0aCB0aGUgbmV4dCBhcnJheS5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW0gPSBub2RlU3RhY2tbMF1baW5kZXhTdGFja1swXSsrXTtcbiAgICAgICAgaWYgKCFpc1RhZyhlbGVtKSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBpZiAodGVzdChlbGVtKSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsZW0pO1xuICAgICAgICBpZiAoZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpbmRleFN0YWNrLnVuc2hpZnQoMCk7XG4gICAgICAgICAgICBub2RlU3RhY2sudW5zaGlmdChlbGVtLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5aW5nLmpzLm1hcCIsImltcG9ydCB7IGlzVGFnLCBpc0NEQVRBLCBpc1RleHQsIGhhc0NoaWxkcmVuLCBpc0NvbW1lbnQsIH0gZnJvbSBcImRvbWhhbmRsZXJcIjtcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gXCJkb20tc2VyaWFsaXplclwiO1xuaW1wb3J0IHsgRWxlbWVudFR5cGUgfSBmcm9tIFwiZG9tZWxlbWVudHR5cGVcIjtcbi8qKlxuICogQGNhdGVnb3J5IFN0cmluZ2lmeVxuICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBgZG9tLXNlcmlhbGl6ZXJgIG1vZHVsZSBkaXJlY3RseS5cbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gZ2V0IHRoZSBvdXRlciBIVE1MIG9mLlxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3Igc2VyaWFsaXphdGlvbi5cbiAqIEByZXR1cm5zIGBub2RlYCdzIG91dGVyIEhUTUwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPdXRlckhUTUwobm9kZSwgb3B0aW9ucykge1xuICAgIHJldHVybiByZW5kZXJIVE1MKG5vZGUsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBAY2F0ZWdvcnkgU3RyaW5naWZ5XG4gKiBAZGVwcmVjYXRlZCBVc2UgdGhlIGBkb20tc2VyaWFsaXplcmAgbW9kdWxlIGRpcmVjdGx5LlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBnZXQgdGhlIGlubmVyIEhUTUwgb2YuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBzZXJpYWxpemF0aW9uLlxuICogQHJldHVybnMgYG5vZGVgJ3MgaW5uZXIgSFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElubmVySFRNTChub2RlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGhhc0NoaWxkcmVuKG5vZGUpXG4gICAgICAgID8gbm9kZS5jaGlsZHJlbi5tYXAoKG5vZGUpID0+IGdldE91dGVySFRNTChub2RlLCBvcHRpb25zKSkuam9pbihcIlwiKVxuICAgICAgICA6IFwiXCI7XG59XG4vKipcbiAqIEdldCBhIG5vZGUncyBpbm5lciB0ZXh0LiBTYW1lIGFzIGB0ZXh0Q29udGVudGAsIGJ1dCBpbnNlcnRzIG5ld2xpbmVzIGZvciBgPGJyPmAgdGFncy4gSWdub3JlcyBjb21tZW50cy5cbiAqXG4gKiBAY2F0ZWdvcnkgU3RyaW5naWZ5XG4gKiBAZGVwcmVjYXRlZCBVc2UgYHRleHRDb250ZW50YCBpbnN0ZWFkLlxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBnZXQgdGhlIGlubmVyIHRleHQgb2YuXG4gKiBAcmV0dXJucyBgbm9kZWAncyBpbm5lciB0ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dChub2RlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpXG4gICAgICAgIHJldHVybiBub2RlLm1hcChnZXRUZXh0KS5qb2luKFwiXCIpO1xuICAgIGlmIChpc1RhZyhub2RlKSlcbiAgICAgICAgcmV0dXJuIG5vZGUubmFtZSA9PT0gXCJiclwiID8gXCJcXG5cIiA6IGdldFRleHQobm9kZS5jaGlsZHJlbik7XG4gICAgaWYgKGlzQ0RBVEEobm9kZSkpXG4gICAgICAgIHJldHVybiBnZXRUZXh0KG5vZGUuY2hpbGRyZW4pO1xuICAgIGlmIChpc1RleHQobm9kZSkpXG4gICAgICAgIHJldHVybiBub2RlLmRhdGE7XG4gICAgcmV0dXJuIFwiXCI7XG59XG4vKipcbiAqIEdldCBhIG5vZGUncyB0ZXh0IGNvbnRlbnQuIElnbm9yZXMgY29tbWVudHMuXG4gKlxuICogQGNhdGVnb3J5IFN0cmluZ2lmeVxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBnZXQgdGhlIHRleHQgY29udGVudCBvZi5cbiAqIEByZXR1cm5zIGBub2RlYCdzIHRleHQgY29udGVudC5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Ob2RlL3RleHRDb250ZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGV4dENvbnRlbnQobm9kZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZS5tYXAodGV4dENvbnRlbnQpLmpvaW4oXCJcIik7XG4gICAgaWYgKGhhc0NoaWxkcmVuKG5vZGUpICYmICFpc0NvbW1lbnQobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIHRleHRDb250ZW50KG5vZGUuY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAoaXNUZXh0KG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZS5kYXRhO1xuICAgIHJldHVybiBcIlwiO1xufVxuLyoqXG4gKiBHZXQgYSBub2RlJ3MgaW5uZXIgdGV4dCwgaWdub3JpbmcgYDxzY3JpcHQ+YCBhbmQgYDxzdHlsZT5gIHRhZ3MuIElnbm9yZXMgY29tbWVudHMuXG4gKlxuICogQGNhdGVnb3J5IFN0cmluZ2lmeVxuICogQHBhcmFtIG5vZGUgTm9kZSB0byBnZXQgdGhlIGlubmVyIHRleHQgb2YuXG4gKiBAcmV0dXJucyBgbm9kZWAncyBpbm5lciB0ZXh0LlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05vZGUvaW5uZXJUZXh0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5uZXJUZXh0KG5vZGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSlcbiAgICAgICAgcmV0dXJuIG5vZGUubWFwKGlubmVyVGV4dCkuam9pbihcIlwiKTtcbiAgICBpZiAoaGFzQ2hpbGRyZW4obm9kZSkgJiYgKG5vZGUudHlwZSA9PT0gRWxlbWVudFR5cGUuVGFnIHx8IGlzQ0RBVEEobm9kZSkpKSB7XG4gICAgICAgIHJldHVybiBpbm5lclRleHQobm9kZS5jaGlsZHJlbik7XG4gICAgfVxuICAgIGlmIChpc1RleHQobm9kZSkpXG4gICAgICAgIHJldHVybiBub2RlLmRhdGE7XG4gICAgcmV0dXJuIFwiXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJpbmdpZnkuanMubWFwIiwiaW1wb3J0IHsgaXNUYWcsIGhhc0NoaWxkcmVuLCB9IGZyb20gXCJkb21oYW5kbGVyXCI7XG4vKipcbiAqIEdldCBhIG5vZGUncyBjaGlsZHJlbi5cbiAqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2FsXG4gKiBAcGFyYW0gZWxlbSBOb2RlIHRvIGdldCB0aGUgY2hpbGRyZW4gb2YuXG4gKiBAcmV0dXJucyBgZWxlbWAncyBjaGlsZHJlbiwgb3IgYW4gZW1wdHkgYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZHJlbihlbGVtKSB7XG4gICAgcmV0dXJuIGhhc0NoaWxkcmVuKGVsZW0pID8gZWxlbS5jaGlsZHJlbiA6IFtdO1xufVxuLyoqXG4gKiBHZXQgYSBub2RlJ3MgcGFyZW50LlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzYWxcbiAqIEBwYXJhbSBlbGVtIE5vZGUgdG8gZ2V0IHRoZSBwYXJlbnQgb2YuXG4gKiBAcmV0dXJucyBgZWxlbWAncyBwYXJlbnQgbm9kZSwgb3IgYG51bGxgIGlmIGBlbGVtYCBpcyBhIHJvb3Qgbm9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0ucGFyZW50IHx8IG51bGw7XG59XG4vKipcbiAqIEdldHMgYW4gZWxlbWVudHMgc2libGluZ3MsIGluY2x1ZGluZyB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKlxuICogQXR0ZW1wdHMgdG8gZ2V0IHRoZSBjaGlsZHJlbiB0aHJvdWdoIHRoZSBlbGVtZW50J3MgcGFyZW50IGZpcnN0LiBJZiB3ZSBkb24ndFxuICogaGF2ZSBhIHBhcmVudCAodGhlIGVsZW1lbnQgaXMgYSByb290IG5vZGUpLCB3ZSB3YWxrIHRoZSBlbGVtZW50J3MgYHByZXZgICZcbiAqIGBuZXh0YCB0byBnZXQgYWxsIHJlbWFpbmluZyBub2Rlcy5cbiAqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2FsXG4gKiBAcGFyYW0gZWxlbSBFbGVtZW50IHRvIGdldCB0aGUgc2libGluZ3Mgb2YuXG4gKiBAcmV0dXJucyBgZWxlbWAncyBzaWJsaW5ncywgaW5jbHVkaW5nIGBlbGVtYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNpYmxpbmdzKGVsZW0pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnQoZWxlbSk7XG4gICAgaWYgKHBhcmVudCAhPSBudWxsKVxuICAgICAgICByZXR1cm4gZ2V0Q2hpbGRyZW4ocGFyZW50KTtcbiAgICBjb25zdCBzaWJsaW5ncyA9IFtlbGVtXTtcbiAgICBsZXQgeyBwcmV2LCBuZXh0IH0gPSBlbGVtO1xuICAgIHdoaWxlIChwcmV2ICE9IG51bGwpIHtcbiAgICAgICAgc2libGluZ3MudW5zaGlmdChwcmV2KTtcbiAgICAgICAgKHsgcHJldiB9ID0gcHJldik7XG4gICAgfVxuICAgIHdoaWxlIChuZXh0ICE9IG51bGwpIHtcbiAgICAgICAgc2libGluZ3MucHVzaChuZXh0KTtcbiAgICAgICAgKHsgbmV4dCB9ID0gbmV4dCk7XG4gICAgfVxuICAgIHJldHVybiBzaWJsaW5ncztcbn1cbi8qKlxuICogR2V0cyBhbiBhdHRyaWJ1dGUgZnJvbSBhbiBlbGVtZW50LlxuICpcbiAqIEBjYXRlZ29yeSBUcmF2ZXJzYWxcbiAqIEBwYXJhbSBlbGVtIEVsZW1lbnQgdG8gY2hlY2suXG4gKiBAcGFyYW0gbmFtZSBBdHRyaWJ1dGUgbmFtZSB0byByZXRyaWV2ZS5cbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50J3MgYXR0cmlidXRlIHZhbHVlLCBvciBgdW5kZWZpbmVkYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZVZhbHVlKGVsZW0sIG5hbWUpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIChfYSA9IGVsZW0uYXR0cmlicykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW25hbWVdO1xufVxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhbiBlbGVtZW50IGhhcyBhbiBhdHRyaWJ1dGUuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNhbFxuICogQHBhcmFtIGVsZW0gRWxlbWVudCB0byBjaGVjay5cbiAqIEBwYXJhbSBuYW1lIEF0dHJpYnV0ZSBuYW1lIHRvIGxvb2sgZm9yLlxuICogQHJldHVybnMgUmV0dXJucyB3aGV0aGVyIGBlbGVtYCBoYXMgdGhlIGF0dHJpYnV0ZSBgbmFtZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNBdHRyaWIoZWxlbSwgbmFtZSkge1xuICAgIHJldHVybiAoZWxlbS5hdHRyaWJzICE9IG51bGwgJiZcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVsZW0uYXR0cmlicywgbmFtZSkgJiZcbiAgICAgICAgZWxlbS5hdHRyaWJzW25hbWVdICE9IG51bGwpO1xufVxuLyoqXG4gKiBHZXQgdGhlIHRhZyBuYW1lIG9mIGFuIGVsZW1lbnQuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNhbFxuICogQHBhcmFtIGVsZW0gVGhlIGVsZW1lbnQgdG8gZ2V0IHRoZSBuYW1lIGZvci5cbiAqIEByZXR1cm5zIFRoZSB0YWcgbmFtZSBvZiBgZWxlbWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5uYW1lO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGVsZW1lbnQgc2libGluZyBvZiBhIG5vZGUuXG4gKlxuICogQGNhdGVnb3J5IFRyYXZlcnNhbFxuICogQHBhcmFtIGVsZW0gVGhlIGVsZW1lbnQgdG8gZ2V0IHRoZSBuZXh0IHNpYmxpbmcgb2YuXG4gKiBAcmV0dXJucyBgZWxlbWAncyBuZXh0IHNpYmxpbmcgdGhhdCBpcyBhIHRhZywgb3IgYG51bGxgIGlmIHRoZXJlIGlzIG5vIG5leHRcbiAqIHNpYmxpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0RWxlbWVudFNpYmxpbmcoZWxlbSkge1xuICAgIGxldCB7IG5leHQgfSA9IGVsZW07XG4gICAgd2hpbGUgKG5leHQgIT09IG51bGwgJiYgIWlzVGFnKG5leHQpKVxuICAgICAgICAoeyBuZXh0IH0gPSBuZXh0KTtcbiAgICByZXR1cm4gbmV4dDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgcHJldmlvdXMgZWxlbWVudCBzaWJsaW5nIG9mIGEgbm9kZS5cbiAqXG4gKiBAY2F0ZWdvcnkgVHJhdmVyc2FsXG4gKiBAcGFyYW0gZWxlbSBUaGUgZWxlbWVudCB0byBnZXQgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YuXG4gKiBAcmV0dXJucyBgZWxlbWAncyBwcmV2aW91cyBzaWJsaW5nIHRoYXQgaXMgYSB0YWcsIG9yIGBudWxsYCBpZiB0aGVyZSBpcyBub1xuICogcHJldmlvdXMgc2libGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXZFbGVtZW50U2libGluZyhlbGVtKSB7XG4gICAgbGV0IHsgcHJldiB9ID0gZWxlbTtcbiAgICB3aGlsZSAocHJldiAhPT0gbnVsbCAmJiAhaXNUYWcocHJldikpXG4gICAgICAgICh7IHByZXYgfSA9IHByZXYpO1xuICAgIHJldHVybiBwcmV2O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhdmVyc2FsLmpzLm1hcCIsImltcG9ydCBodG1sRGVjb2RlVHJlZSBmcm9tIFwiLi9nZW5lcmF0ZWQvZGVjb2RlLWRhdGEtaHRtbC5qc1wiO1xuaW1wb3J0IHhtbERlY29kZVRyZWUgZnJvbSBcIi4vZ2VuZXJhdGVkL2RlY29kZS1kYXRhLXhtbC5qc1wiO1xuaW1wb3J0IGRlY29kZUNvZGVQb2ludCwgeyByZXBsYWNlQ29kZVBvaW50LCBmcm9tQ29kZVBvaW50LCB9IGZyb20gXCIuL2RlY29kZV9jb2RlcG9pbnQuanNcIjtcbi8vIFJlLWV4cG9ydCBmb3IgdXNlIGJ5IGVnLiBodG1scGFyc2VyMlxuZXhwb3J0IHsgaHRtbERlY29kZVRyZWUsIHhtbERlY29kZVRyZWUsIGRlY29kZUNvZGVQb2ludCB9O1xuZXhwb3J0IHsgcmVwbGFjZUNvZGVQb2ludCwgZnJvbUNvZGVQb2ludCB9IGZyb20gXCIuL2RlY29kZV9jb2RlcG9pbnQuanNcIjtcbnZhciBDaGFyQ29kZXM7XG4oZnVuY3Rpb24gKENoYXJDb2Rlcykge1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJOVU1cIl0gPSAzNV0gPSBcIk5VTVwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJTRU1JXCJdID0gNTldID0gXCJTRU1JXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkVRVUFMU1wiXSA9IDYxXSA9IFwiRVFVQUxTXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIlpFUk9cIl0gPSA0OF0gPSBcIlpFUk9cIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiTklORVwiXSA9IDU3XSA9IFwiTklORVwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJMT1dFUl9BXCJdID0gOTddID0gXCJMT1dFUl9BXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkxPV0VSX0ZcIl0gPSAxMDJdID0gXCJMT1dFUl9GXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkxPV0VSX1hcIl0gPSAxMjBdID0gXCJMT1dFUl9YXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkxPV0VSX1pcIl0gPSAxMjJdID0gXCJMT1dFUl9aXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIlVQUEVSX0FcIl0gPSA2NV0gPSBcIlVQUEVSX0FcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiVVBQRVJfRlwiXSA9IDcwXSA9IFwiVVBQRVJfRlwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJVUFBFUl9aXCJdID0gOTBdID0gXCJVUFBFUl9aXCI7XG59KShDaGFyQ29kZXMgfHwgKENoYXJDb2RlcyA9IHt9KSk7XG4vKiogQml0IHRoYXQgbmVlZHMgdG8gYmUgc2V0IHRvIGNvbnZlcnQgYW4gdXBwZXIgY2FzZSBBU0NJSSBjaGFyYWN0ZXIgdG8gbG93ZXIgY2FzZSAqL1xuY29uc3QgVE9fTE9XRVJfQklUID0gMGIxMDAwMDA7XG5leHBvcnQgdmFyIEJpblRyaWVGbGFncztcbihmdW5jdGlvbiAoQmluVHJpZUZsYWdzKSB7XG4gICAgQmluVHJpZUZsYWdzW0JpblRyaWVGbGFnc1tcIlZBTFVFX0xFTkdUSFwiXSA9IDQ5MTUyXSA9IFwiVkFMVUVfTEVOR1RIXCI7XG4gICAgQmluVHJpZUZsYWdzW0JpblRyaWVGbGFnc1tcIkJSQU5DSF9MRU5HVEhcIl0gPSAxNjI1Nl0gPSBcIkJSQU5DSF9MRU5HVEhcIjtcbiAgICBCaW5UcmllRmxhZ3NbQmluVHJpZUZsYWdzW1wiSlVNUF9UQUJMRVwiXSA9IDEyN10gPSBcIkpVTVBfVEFCTEVcIjtcbn0pKEJpblRyaWVGbGFncyB8fCAoQmluVHJpZUZsYWdzID0ge30pKTtcbmZ1bmN0aW9uIGlzTnVtYmVyKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA+PSBDaGFyQ29kZXMuWkVSTyAmJiBjb2RlIDw9IENoYXJDb2Rlcy5OSU5FO1xufVxuZnVuY3Rpb24gaXNIZXhhZGVjaW1hbENoYXJhY3Rlcihjb2RlKSB7XG4gICAgcmV0dXJuICgoY29kZSA+PSBDaGFyQ29kZXMuVVBQRVJfQSAmJiBjb2RlIDw9IENoYXJDb2Rlcy5VUFBFUl9GKSB8fFxuICAgICAgICAoY29kZSA+PSBDaGFyQ29kZXMuTE9XRVJfQSAmJiBjb2RlIDw9IENoYXJDb2Rlcy5MT1dFUl9GKSk7XG59XG5mdW5jdGlvbiBpc0FzY2lpQWxwaGFOdW1lcmljKGNvZGUpIHtcbiAgICByZXR1cm4gKChjb2RlID49IENoYXJDb2Rlcy5VUFBFUl9BICYmIGNvZGUgPD0gQ2hhckNvZGVzLlVQUEVSX1opIHx8XG4gICAgICAgIChjb2RlID49IENoYXJDb2Rlcy5MT1dFUl9BICYmIGNvZGUgPD0gQ2hhckNvZGVzLkxPV0VSX1opIHx8XG4gICAgICAgIGlzTnVtYmVyKGNvZGUpKTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgaXMgYSB2YWxpZCBlbmQgY2hhcmFjdGVyIGZvciBhbiBlbnRpdHkgaW4gYW4gYXR0cmlidXRlLlxuICpcbiAqIEF0dHJpYnV0ZSB2YWx1ZXMgdGhhdCBhcmVuJ3QgdGVybWluYXRlZCBwcm9wZXJseSBhcmVuJ3QgcGFyc2VkLCBhbmQgc2hvdWxkbid0IGxlYWQgdG8gYSBwYXJzZXIgZXJyb3IuXG4gKiBTZWUgdGhlIGV4YW1wbGUgaW4gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvcGFyc2luZy5odG1sI25hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2Utc3RhdGVcbiAqL1xuZnVuY3Rpb24gaXNFbnRpdHlJbkF0dHJpYnV0ZUludmFsaWRFbmQoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSBDaGFyQ29kZXMuRVFVQUxTIHx8IGlzQXNjaWlBbHBoYU51bWVyaWMoY29kZSk7XG59XG52YXIgRW50aXR5RGVjb2RlclN0YXRlO1xuKGZ1bmN0aW9uIChFbnRpdHlEZWNvZGVyU3RhdGUpIHtcbiAgICBFbnRpdHlEZWNvZGVyU3RhdGVbRW50aXR5RGVjb2RlclN0YXRlW1wiRW50aXR5U3RhcnRcIl0gPSAwXSA9IFwiRW50aXR5U3RhcnRcIjtcbiAgICBFbnRpdHlEZWNvZGVyU3RhdGVbRW50aXR5RGVjb2RlclN0YXRlW1wiTnVtZXJpY1N0YXJ0XCJdID0gMV0gPSBcIk51bWVyaWNTdGFydFwiO1xuICAgIEVudGl0eURlY29kZXJTdGF0ZVtFbnRpdHlEZWNvZGVyU3RhdGVbXCJOdW1lcmljRGVjaW1hbFwiXSA9IDJdID0gXCJOdW1lcmljRGVjaW1hbFwiO1xuICAgIEVudGl0eURlY29kZXJTdGF0ZVtFbnRpdHlEZWNvZGVyU3RhdGVbXCJOdW1lcmljSGV4XCJdID0gM10gPSBcIk51bWVyaWNIZXhcIjtcbiAgICBFbnRpdHlEZWNvZGVyU3RhdGVbRW50aXR5RGVjb2RlclN0YXRlW1wiTmFtZWRFbnRpdHlcIl0gPSA0XSA9IFwiTmFtZWRFbnRpdHlcIjtcbn0pKEVudGl0eURlY29kZXJTdGF0ZSB8fCAoRW50aXR5RGVjb2RlclN0YXRlID0ge30pKTtcbmV4cG9ydCB2YXIgRGVjb2RpbmdNb2RlO1xuKGZ1bmN0aW9uIChEZWNvZGluZ01vZGUpIHtcbiAgICAvKiogRW50aXRpZXMgaW4gdGV4dCBub2RlcyB0aGF0IGNhbiBlbmQgd2l0aCBhbnkgY2hhcmFjdGVyLiAqL1xuICAgIERlY29kaW5nTW9kZVtEZWNvZGluZ01vZGVbXCJMZWdhY3lcIl0gPSAwXSA9IFwiTGVnYWN5XCI7XG4gICAgLyoqIE9ubHkgYWxsb3cgZW50aXRpZXMgdGVybWluYXRlZCB3aXRoIGEgc2VtaWNvbG9uLiAqL1xuICAgIERlY29kaW5nTW9kZVtEZWNvZGluZ01vZGVbXCJTdHJpY3RcIl0gPSAxXSA9IFwiU3RyaWN0XCI7XG4gICAgLyoqIEVudGl0aWVzIGluIGF0dHJpYnV0ZXMgaGF2ZSBsaW1pdGF0aW9ucyBvbiBlbmRpbmcgY2hhcmFjdGVycy4gKi9cbiAgICBEZWNvZGluZ01vZGVbRGVjb2RpbmdNb2RlW1wiQXR0cmlidXRlXCJdID0gMl0gPSBcIkF0dHJpYnV0ZVwiO1xufSkoRGVjb2RpbmdNb2RlIHx8IChEZWNvZGluZ01vZGUgPSB7fSkpO1xuLyoqXG4gKiBUb2tlbiBkZWNvZGVyIHdpdGggc3VwcG9ydCBvZiB3cml0aW5nIHBhcnRpYWwgZW50aXRpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnRpdHlEZWNvZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAvKiogVGhlIHRyZWUgdXNlZCB0byBkZWNvZGUgZW50aXRpZXMuICovXG4gICAgZGVjb2RlVHJlZSwgXG4gICAgLyoqXG4gICAgICogVGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBjb2RlcG9pbnQgaXMgZGVjb2RlZC5cbiAgICAgKlxuICAgICAqIEZvciBtdWx0aS1ieXRlIG5hbWVkIGVudGl0aWVzLCB0aGlzIHdpbGwgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLFxuICAgICAqIHdpdGggdGhlIHNlY29uZCBjb2RlcG9pbnQsIGFuZCB0aGUgc2FtZSBgY29uc3VtZWRgIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvZGVwb2ludCBUaGUgZGVjb2RlZCBjb2RlcG9pbnQuXG4gICAgICogQHBhcmFtIGNvbnN1bWVkIFRoZSBudW1iZXIgb2YgYnl0ZXMgY29uc3VtZWQgYnkgdGhlIGRlY29kZXIuXG4gICAgICovXG4gICAgZW1pdENvZGVQb2ludCwgXG4gICAgLyoqIEFuIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gcHJvZHVjZSBlcnJvcnMuICovXG4gICAgZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZGVjb2RlVHJlZSA9IGRlY29kZVRyZWU7XG4gICAgICAgIHRoaXMuZW1pdENvZGVQb2ludCA9IGVtaXRDb2RlUG9pbnQ7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICAvKiogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGRlY29kZXIuICovXG4gICAgICAgIHRoaXMuc3RhdGUgPSBFbnRpdHlEZWNvZGVyU3RhdGUuRW50aXR5U3RhcnQ7XG4gICAgICAgIC8qKiBDaGFyYWN0ZXJzIHRoYXQgd2VyZSBjb25zdW1lZCB3aGlsZSBwYXJzaW5nIGFuIGVudGl0eS4gKi9cbiAgICAgICAgdGhpcy5jb25zdW1lZCA9IDE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmVzdWx0IG9mIHRoZSBlbnRpdHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEVpdGhlciB0aGUgcmVzdWx0IGluZGV4IG9mIGEgbnVtZXJpYyBlbnRpdHksIG9yIHRoZSBjb2RlcG9pbnQgb2YgYVxuICAgICAgICAgKiBudW1lcmljIGVudGl0eS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVzdWx0ID0gMDtcbiAgICAgICAgLyoqIFRoZSBjdXJyZW50IGluZGV4IGluIHRoZSBkZWNvZGUgdHJlZS4gKi9cbiAgICAgICAgdGhpcy50cmVlSW5kZXggPSAwO1xuICAgICAgICAvKiogVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgd2VyZSBjb25zdW1lZCBpbiBleGNlc3MuICovXG4gICAgICAgIHRoaXMuZXhjZXNzID0gMTtcbiAgICAgICAgLyoqIFRoZSBtb2RlIGluIHdoaWNoIHRoZSBkZWNvZGVyIGlzIG9wZXJhdGluZy4gKi9cbiAgICAgICAgdGhpcy5kZWNvZGVNb2RlID0gRGVjb2RpbmdNb2RlLlN0cmljdDtcbiAgICB9XG4gICAgLyoqIFJlc2V0cyB0aGUgaW5zdGFuY2UgdG8gbWFrZSBpdCByZXVzYWJsZS4gKi9cbiAgICBzdGFydEVudGl0eShkZWNvZGVNb2RlKSB7XG4gICAgICAgIHRoaXMuZGVjb2RlTW9kZSA9IGRlY29kZU1vZGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBFbnRpdHlEZWNvZGVyU3RhdGUuRW50aXR5U3RhcnQ7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gMDtcbiAgICAgICAgdGhpcy50cmVlSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmV4Y2VzcyA9IDE7XG4gICAgICAgIHRoaXMuY29uc3VtZWQgPSAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXcml0ZSBhbiBlbnRpdHkgdG8gdGhlIGRlY29kZXIuIFRoaXMgY2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIHBhcnRpYWwgZW50aXRpZXMuXG4gICAgICogSWYgdGhlIGVudGl0eSBpcyBpbmNvbXBsZXRlLCB0aGUgZGVjb2RlciB3aWxsIHJldHVybiAtMS5cbiAgICAgKlxuICAgICAqIE1pcnJvcnMgdGhlIGltcGxlbWVudGF0aW9uIG9mIGBnZXREZWNvZGVyYCwgYnV0IHdpdGggdGhlIGFiaWxpdHkgdG8gc3RvcCBkZWNvZGluZyBpZiB0aGVcbiAgICAgKiBlbnRpdHkgaXMgaW5jb21wbGV0ZSwgYW5kIHJlc3VtZSB3aGVuIHRoZSBuZXh0IHN0cmluZyBpcyB3cml0dGVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZyBUaGUgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGVudGl0eSAob3IgYSBjb250aW51YXRpb24gb2YgdGhlIGVudGl0eSkuXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGF0IHdoaWNoIHRoZSBlbnRpdHkgYmVnaW5zLiBTaG91bGQgYmUgMCBpZiB0aGlzIGlzIG5vdCB0aGUgZmlyc3QgY2FsbC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3ZXJlIGNvbnN1bWVkLCBvciAtMSBpZiB0aGUgZW50aXR5IGlzIGluY29tcGxldGUuXG4gICAgICovXG4gICAgd3JpdGUoc3RyLCBvZmZzZXQpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5FbnRpdHlTdGFydDoge1xuICAgICAgICAgICAgICAgIGlmIChzdHIuY2hhckNvZGVBdChvZmZzZXQpID09PSBDaGFyQ29kZXMuTlVNKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBFbnRpdHlEZWNvZGVyU3RhdGUuTnVtZXJpY1N0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlTnVtZXJpY1N0YXJ0KHN0ciwgb2Zmc2V0ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBFbnRpdHlEZWNvZGVyU3RhdGUuTmFtZWRFbnRpdHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVOYW1lZEVudGl0eShzdHIsIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZU51bWVyaWNTdGFydChzdHIsIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljRGVjaW1hbDoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlTnVtZXJpY0RlY2ltYWwoc3RyLCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBFbnRpdHlEZWNvZGVyU3RhdGUuTnVtZXJpY0hleDoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlTnVtZXJpY0hleChzdHIsIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OYW1lZEVudGl0eToge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlTmFtZWRFbnRpdHkoc3RyLCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIGJldHdlZW4gdGhlIG51bWVyaWMgZGVjaW1hbCBhbmQgaGV4YWRlY2ltYWwgc3RhdGVzLlxuICAgICAqXG4gICAgICogRXF1aXZhbGVudCB0byB0aGUgYE51bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZSBzdGF0ZWAgaW4gdGhlIEhUTUwgc3BlYy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHIgVGhlIHN0cmluZyBjb250YWluaW5nIHRoZSBlbnRpdHkgKG9yIGEgY29udGludWF0aW9uIG9mIHRoZSBlbnRpdHkpLlxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIGN1cnJlbnQgb2Zmc2V0LlxuICAgICAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IHdlcmUgY29uc3VtZWQsIG9yIC0xIGlmIHRoZSBlbnRpdHkgaXMgaW5jb21wbGV0ZS5cbiAgICAgKi9cbiAgICBzdGF0ZU51bWVyaWNTdGFydChzdHIsIG9mZnNldCkge1xuICAgICAgICBpZiAob2Zmc2V0ID49IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN0ci5jaGFyQ29kZUF0KG9mZnNldCkgfCBUT19MT1dFUl9CSVQpID09PSBDaGFyQ29kZXMuTE9XRVJfWCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljSGV4O1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lZCArPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVOdW1lcmljSGV4KHN0ciwgb2Zmc2V0ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljRGVjaW1hbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVOdW1lcmljRGVjaW1hbChzdHIsIG9mZnNldCk7XG4gICAgfVxuICAgIGFkZFRvTnVtZXJpY1Jlc3VsdChzdHIsIHN0YXJ0LCBlbmQsIGJhc2UpIHtcbiAgICAgICAgaWYgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZ2l0Q291bnQgPSBlbmQgLSBzdGFydDtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID1cbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCAqIE1hdGgucG93KGJhc2UsIGRpZ2l0Q291bnQpICtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoc3RyLnN1YnN0cihzdGFydCwgZGlnaXRDb3VudCksIGJhc2UpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lZCArPSBkaWdpdENvdW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIGhleGFkZWNpbWFsIG51bWVyaWMgZW50aXR5LlxuICAgICAqXG4gICAgICogRXF1aXZhbGVudCB0byB0aGUgYEhleGFkZW1pY2FsIGNoYXJhY3RlciByZWZlcmVuY2Ugc3RhdGVgIGluIHRoZSBIVE1MIHNwZWMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgY29udGFpbmluZyB0aGUgZW50aXR5IChvciBhIGNvbnRpbnVhdGlvbiBvZiB0aGUgZW50aXR5KS5cbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBjdXJyZW50IG9mZnNldC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3ZXJlIGNvbnN1bWVkLCBvciAtMSBpZiB0aGUgZW50aXR5IGlzIGluY29tcGxldGUuXG4gICAgICovXG4gICAgc3RhdGVOdW1lcmljSGV4KHN0ciwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SWR4ID0gb2Zmc2V0O1xuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IHN0ci5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgICAgICBpZiAoaXNOdW1iZXIoY2hhcikgfHwgaXNIZXhhZGVjaW1hbENoYXJhY3RlcihjaGFyKSkge1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb051bWVyaWNSZXN1bHQoc3RyLCBzdGFydElkeCwgb2Zmc2V0LCAxNik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdE51bWVyaWNFbnRpdHkoY2hhciwgMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRUb051bWVyaWNSZXN1bHQoc3RyLCBzdGFydElkeCwgb2Zmc2V0LCAxNik7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgZGVjaW1hbCBudW1lcmljIGVudGl0eS5cbiAgICAgKlxuICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIGBEZWNpbWFsIGNoYXJhY3RlciByZWZlcmVuY2Ugc3RhdGVgIGluIHRoZSBIVE1MIHNwZWMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgY29udGFpbmluZyB0aGUgZW50aXR5IChvciBhIGNvbnRpbnVhdGlvbiBvZiB0aGUgZW50aXR5KS5cbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBjdXJyZW50IG9mZnNldC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3ZXJlIGNvbnN1bWVkLCBvciAtMSBpZiB0aGUgZW50aXR5IGlzIGluY29tcGxldGUuXG4gICAgICovXG4gICAgc3RhdGVOdW1lcmljRGVjaW1hbChzdHIsIG9mZnNldCkge1xuICAgICAgICBjb25zdCBzdGFydElkeCA9IG9mZnNldDtcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBzdHIuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICAgICAgaWYgKGlzTnVtYmVyKGNoYXIpKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvTnVtZXJpY1Jlc3VsdChzdHIsIHN0YXJ0SWR4LCBvZmZzZXQsIDEwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0TnVtZXJpY0VudGl0eShjaGFyLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZFRvTnVtZXJpY1Jlc3VsdChzdHIsIHN0YXJ0SWR4LCBvZmZzZXQsIDEwKTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBhbmQgZW1pdCBhIG51bWVyaWMgZW50aXR5LlxuICAgICAqXG4gICAgICogSW1wbGVtZW50cyB0aGUgbG9naWMgZnJvbSB0aGUgYEhleGFkZW1pY2FsIGNoYXJhY3RlciByZWZlcmVuY2Ugc3RhcnRcbiAgICAgKiBzdGF0ZWAgYW5kIGBOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2UgZW5kIHN0YXRlYCBpbiB0aGUgSFRNTCBzcGVjLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxhc3RDcCBUaGUgbGFzdCBjb2RlIHBvaW50IG9mIHRoZSBlbnRpdHkuIFVzZWQgdG8gc2VlIGlmIHRoZVxuICAgICAqICAgICAgICAgICAgICAgZW50aXR5IHdhcyB0ZXJtaW5hdGVkIHdpdGggYSBzZW1pY29sb24uXG4gICAgICogQHBhcmFtIGV4cGVjdGVkTGVuZ3RoIFRoZSBtaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgc2hvdWxkIGJlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bWVkLiBVc2VkIHRvIHZhbGlkYXRlIHRoYXQgYXQgbGVhc3Qgb25lIGRpZ2l0XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgIHdhcyBjb25zdW1lZC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3ZXJlIGNvbnN1bWVkLlxuICAgICAqL1xuICAgIGVtaXROdW1lcmljRW50aXR5KGxhc3RDcCwgZXhwZWN0ZWRMZW5ndGgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBFbnN1cmUgd2UgY29uc3VtZWQgYXQgbGVhc3Qgb25lIGRpZ2l0LlxuICAgICAgICBpZiAodGhpcy5jb25zdW1lZCA8PSBleHBlY3RlZExlbmd0aCkge1xuICAgICAgICAgICAgKF9hID0gdGhpcy5lcnJvcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hYnNlbmNlT2ZEaWdpdHNJbk51bWVyaWNDaGFyYWN0ZXJSZWZlcmVuY2UodGhpcy5jb25zdW1lZCk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaWd1cmUgb3V0IGlmIHRoaXMgaXMgYSBsZWdpdCBlbmQgb2YgdGhlIGVudGl0eVxuICAgICAgICBpZiAobGFzdENwID09PSBDaGFyQ29kZXMuU0VNSSkge1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lZCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGVjb2RlTW9kZSA9PT0gRGVjb2RpbmdNb2RlLlN0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0Q29kZVBvaW50KHJlcGxhY2VDb2RlUG9pbnQodGhpcy5yZXN1bHQpLCB0aGlzLmNvbnN1bWVkKTtcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAobGFzdENwICE9PSBDaGFyQ29kZXMuU0VNSSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLm1pc3NpbmdTZW1pY29sb25BZnRlckNoYXJhY3RlclJlZmVyZW5jZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lcnJvcnMudmFsaWRhdGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlKHRoaXMucmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdW1lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgbmFtZWQgZW50aXR5LlxuICAgICAqXG4gICAgICogRXF1aXZhbGVudCB0byB0aGUgYE5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2Ugc3RhdGVgIGluIHRoZSBIVE1MIHNwZWMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgY29udGFpbmluZyB0aGUgZW50aXR5IChvciBhIGNvbnRpbnVhdGlvbiBvZiB0aGUgZW50aXR5KS5cbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBjdXJyZW50IG9mZnNldC5cbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3ZXJlIGNvbnN1bWVkLCBvciAtMSBpZiB0aGUgZW50aXR5IGlzIGluY29tcGxldGUuXG4gICAgICovXG4gICAgc3RhdGVOYW1lZEVudGl0eShzdHIsIG9mZnNldCkge1xuICAgICAgICBjb25zdCB7IGRlY29kZVRyZWUgfSA9IHRoaXM7XG4gICAgICAgIGxldCBjdXJyZW50ID0gZGVjb2RlVHJlZVt0aGlzLnRyZWVJbmRleF07XG4gICAgICAgIC8vIFRoZSBtYXNrIGlzIHRoZSBudW1iZXIgb2YgYnl0ZXMgb2YgdGhlIHZhbHVlLCBpbmNsdWRpbmcgdGhlIGN1cnJlbnQgYnl0ZS5cbiAgICAgICAgbGV0IHZhbHVlTGVuZ3RoID0gKGN1cnJlbnQgJiBCaW5UcmllRmxhZ3MuVkFMVUVfTEVOR1RIKSA+PiAxNDtcbiAgICAgICAgZm9yICg7IG9mZnNldCA8IHN0ci5sZW5ndGg7IG9mZnNldCsrLCB0aGlzLmV4Y2VzcysrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gc3RyLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMudHJlZUluZGV4ID0gZGV0ZXJtaW5lQnJhbmNoKGRlY29kZVRyZWUsIGN1cnJlbnQsIHRoaXMudHJlZUluZGV4ICsgTWF0aC5tYXgoMSwgdmFsdWVMZW5ndGgpLCBjaGFyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyZWVJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQgPT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIHBhcnNpbmcgYW4gYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmRlY29kZU1vZGUgPT09IERlY29kaW5nTW9kZS5BdHRyaWJ1dGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZG4ndCBoYXZlIGNvbnN1bWVkIGFueSBjaGFyYWN0ZXJzIGFmdGVyIHRoZSBlbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWVMZW5ndGggPT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbmQgdGhlcmUgc2hvdWxkIGJlIG5vIGludmFsaWQgY2hhcmFjdGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VudGl0eUluQXR0cmlidXRlSW52YWxpZEVuZChjaGFyKSkpXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZW1pdE5vdFRlcm1pbmF0ZWROYW1lZEVudGl0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudCA9IGRlY29kZVRyZWVbdGhpcy50cmVlSW5kZXhdO1xuICAgICAgICAgICAgdmFsdWVMZW5ndGggPSAoY3VycmVudCAmIEJpblRyaWVGbGFncy5WQUxVRV9MRU5HVEgpID4+IDE0O1xuICAgICAgICAgICAgLy8gSWYgdGhlIGJyYW5jaCBpcyBhIHZhbHVlLCBzdG9yZSBpdCBhbmQgY29udGludWVcbiAgICAgICAgICAgIGlmICh2YWx1ZUxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBlbnRpdHkgaXMgdGVybWluYXRlZCBieSBhIHNlbWljb2xvbiwgd2UgYXJlIGRvbmUuXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09IENoYXJDb2Rlcy5TRU1JKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVtaXROYW1lZEVudGl0eURhdGEodGhpcy50cmVlSW5kZXgsIHZhbHVlTGVuZ3RoLCB0aGlzLmNvbnN1bWVkICsgdGhpcy5leGNlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBlbmNvdW50ZXIgYSBub24tdGVybWluYXRlZCAobGVnYWN5KSBlbnRpdHkgd2hpbGUgcGFyc2luZyBzdHJpY3RseSwgdGhlbiBpZ25vcmUgaXQuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVjb2RlTW9kZSAhPT0gRGVjb2RpbmdNb2RlLlN0cmljdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMudHJlZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWVkICs9IHRoaXMuZXhjZXNzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4Y2VzcyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdCBhIG5hbWVkIGVudGl0eSB0aGF0IHdhcyBub3QgdGVybWluYXRlZCB3aXRoIGEgc2VtaWNvbG9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGNvbnN1bWVkLlxuICAgICAqL1xuICAgIGVtaXROb3RUZXJtaW5hdGVkTmFtZWRFbnRpdHkoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgeyByZXN1bHQsIGRlY29kZVRyZWUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHZhbHVlTGVuZ3RoID0gKGRlY29kZVRyZWVbcmVzdWx0XSAmIEJpblRyaWVGbGFncy5WQUxVRV9MRU5HVEgpID4+IDE0O1xuICAgICAgICB0aGlzLmVtaXROYW1lZEVudGl0eURhdGEocmVzdWx0LCB2YWx1ZUxlbmd0aCwgdGhpcy5jb25zdW1lZCk7XG4gICAgICAgIChfYSA9IHRoaXMuZXJyb3JzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWlzc2luZ1NlbWljb2xvbkFmdGVyQ2hhcmFjdGVyUmVmZXJlbmNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN1bWVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0IGEgbmFtZWQgZW50aXR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlc3VsdCBUaGUgaW5kZXggb2YgdGhlIGVudGl0eSBpbiB0aGUgZGVjb2RlIHRyZWUuXG4gICAgICogQHBhcmFtIHZhbHVlTGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgaW4gdGhlIGVudGl0eS5cbiAgICAgKiBAcGFyYW0gY29uc3VtZWQgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGNvbnN1bWVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGNvbnN1bWVkLlxuICAgICAqL1xuICAgIGVtaXROYW1lZEVudGl0eURhdGEocmVzdWx0LCB2YWx1ZUxlbmd0aCwgY29uc3VtZWQpIHtcbiAgICAgICAgY29uc3QgeyBkZWNvZGVUcmVlIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmVtaXRDb2RlUG9pbnQodmFsdWVMZW5ndGggPT09IDFcbiAgICAgICAgICAgID8gZGVjb2RlVHJlZVtyZXN1bHRdICYgfkJpblRyaWVGbGFncy5WQUxVRV9MRU5HVEhcbiAgICAgICAgICAgIDogZGVjb2RlVHJlZVtyZXN1bHQgKyAxXSwgY29uc3VtZWQpO1xuICAgICAgICBpZiAodmFsdWVMZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIC8vIEZvciBtdWx0aS1ieXRlIHZhbHVlcywgd2UgbmVlZCB0byBlbWl0IHRoZSBzZWNvbmQgYnl0ZS5cbiAgICAgICAgICAgIHRoaXMuZW1pdENvZGVQb2ludChkZWNvZGVUcmVlW3Jlc3VsdCArIDJdLCBjb25zdW1lZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnN1bWVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaWduYWwgdG8gdGhlIHBhcnNlciB0aGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IHdhcyByZWFjaGVkLlxuICAgICAqXG4gICAgICogUmVtYWluaW5nIGRhdGEgd2lsbCBiZSBlbWl0dGVkIGFuZCByZWxldmFudCBlcnJvcnMgd2lsbCBiZSBwcm9kdWNlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBjb25zdW1lZC5cbiAgICAgKi9cbiAgICBlbmQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OYW1lZEVudGl0eToge1xuICAgICAgICAgICAgICAgIC8vIEVtaXQgYSBuYW1lZCBlbnRpdHkgaWYgd2UgaGF2ZSBvbmUuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0ICE9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmRlY29kZU1vZGUgIT09IERlY29kaW5nTW9kZS5BdHRyaWJ1dGUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID09PSB0aGlzLnRyZWVJbmRleClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmVtaXROb3RUZXJtaW5hdGVkTmFtZWRFbnRpdHkoKVxuICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGVtaXQgYSBudW1lcmljIGVudGl0eSBpZiB3ZSBoYXZlIG9uZS5cbiAgICAgICAgICAgIGNhc2UgRW50aXR5RGVjb2RlclN0YXRlLk51bWVyaWNEZWNpbWFsOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdE51bWVyaWNFbnRpdHkoMCwgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljSGV4OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdE51bWVyaWNFbnRpdHkoMCwgMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEVudGl0eURlY29kZXJTdGF0ZS5OdW1lcmljU3RhcnQ6IHtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmVycm9ycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFic2VuY2VPZkRpZ2l0c0luTnVtZXJpY0NoYXJhY3RlclJlZmVyZW5jZSh0aGlzLmNvbnN1bWVkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgRW50aXR5RGVjb2RlclN0YXRlLkVudGl0eVN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIDAgaWYgd2UgaGF2ZSBubyBlbnRpdHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGRlY29kZXMgZW50aXRpZXMgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIGRlY29kZVRyZWUgVGhlIGRlY29kZSB0cmVlLlxuICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0IGRlY29kZXMgZW50aXRpZXMgaW4gYSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGdldERlY29kZXIoZGVjb2RlVHJlZSkge1xuICAgIGxldCByZXQgPSBcIlwiO1xuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgRW50aXR5RGVjb2RlcihkZWNvZGVUcmVlLCAoc3RyKSA9PiAocmV0ICs9IGZyb21Db2RlUG9pbnQoc3RyKSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiBkZWNvZGVXaXRoVHJpZShzdHIsIGRlY29kZU1vZGUpIHtcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICB3aGlsZSAoKG9mZnNldCA9IHN0ci5pbmRleE9mKFwiJlwiLCBvZmZzZXQpKSA+PSAwKSB7XG4gICAgICAgICAgICByZXQgKz0gc3RyLnNsaWNlKGxhc3RJbmRleCwgb2Zmc2V0KTtcbiAgICAgICAgICAgIGRlY29kZXIuc3RhcnRFbnRpdHkoZGVjb2RlTW9kZSk7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBkZWNvZGVyLndyaXRlKHN0ciwgXG4gICAgICAgICAgICAvLyBTa2lwIHRoZSBcIiZcIlxuICAgICAgICAgICAgb2Zmc2V0ICsgMSk7XG4gICAgICAgICAgICBpZiAobGVuIDwgMCkge1xuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IG9mZnNldCArIGRlY29kZXIuZW5kKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0SW5kZXggPSBvZmZzZXQgKyBsZW47XG4gICAgICAgICAgICAvLyBJZiBgbGVuYCBpcyAwLCBza2lwIHRoZSBjdXJyZW50IGAmYCBhbmQgY29udGludWUuXG4gICAgICAgICAgICBvZmZzZXQgPSBsZW4gPT09IDAgPyBsYXN0SW5kZXggKyAxIDogbGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJldCArIHN0ci5zbGljZShsYXN0SW5kZXgpO1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3Qga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgZmluYWwgc3RyaW5nLlxuICAgICAgICByZXQgPSBcIlwiO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59XG4vKipcbiAqIERldGVybWluZXMgdGhlIGJyYW5jaCBvZiB0aGUgY3VycmVudCBub2RlIHRoYXQgaXMgdGFrZW4gZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIGNoYXJhY3Rlci4gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHRyYXZlcnNlIHRoZSB0cmllLlxuICpcbiAqIEBwYXJhbSBkZWNvZGVUcmVlIFRoZSB0cmllLlxuICogQHBhcmFtIGN1cnJlbnQgVGhlIGN1cnJlbnQgbm9kZS5cbiAqIEBwYXJhbSBub2RlSWR4IFRoZSBpbmRleCByaWdodCBhZnRlciB0aGUgY3VycmVudCBub2RlIGFuZCBpdHMgdmFsdWUuXG4gKiBAcGFyYW0gY2hhciBUaGUgY3VycmVudCBjaGFyYWN0ZXIuXG4gKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIG5leHQgbm9kZSwgb3IgLTEgaWYgbm8gYnJhbmNoIGlzIHRha2VuLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5lQnJhbmNoKGRlY29kZVRyZWUsIGN1cnJlbnQsIG5vZGVJZHgsIGNoYXIpIHtcbiAgICBjb25zdCBicmFuY2hDb3VudCA9IChjdXJyZW50ICYgQmluVHJpZUZsYWdzLkJSQU5DSF9MRU5HVEgpID4+IDc7XG4gICAgY29uc3QganVtcE9mZnNldCA9IGN1cnJlbnQgJiBCaW5UcmllRmxhZ3MuSlVNUF9UQUJMRTtcbiAgICAvLyBDYXNlIDE6IFNpbmdsZSBicmFuY2ggZW5jb2RlZCBpbiBqdW1wIG9mZnNldFxuICAgIGlmIChicmFuY2hDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ganVtcE9mZnNldCAhPT0gMCAmJiBjaGFyID09PSBqdW1wT2Zmc2V0ID8gbm9kZUlkeCA6IC0xO1xuICAgIH1cbiAgICAvLyBDYXNlIDI6IE11bHRpcGxlIGJyYW5jaGVzIGVuY29kZWQgaW4ganVtcCB0YWJsZVxuICAgIGlmIChqdW1wT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY2hhciAtIGp1bXBPZmZzZXQ7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IDAgfHwgdmFsdWUgPj0gYnJhbmNoQ291bnRcbiAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgIDogZGVjb2RlVHJlZVtub2RlSWR4ICsgdmFsdWVdIC0gMTtcbiAgICB9XG4gICAgLy8gQ2FzZSAzOiBNdWx0aXBsZSBicmFuY2hlcyBlbmNvZGVkIGluIGRpY3Rpb25hcnlcbiAgICAvLyBCaW5hcnkgc2VhcmNoIGZvciB0aGUgY2hhcmFjdGVyLlxuICAgIGxldCBsbyA9IG5vZGVJZHg7XG4gICAgbGV0IGhpID0gbG8gKyBicmFuY2hDb3VudCAtIDE7XG4gICAgd2hpbGUgKGxvIDw9IGhpKSB7XG4gICAgICAgIGNvbnN0IG1pZCA9IChsbyArIGhpKSA+Pj4gMTtcbiAgICAgICAgY29uc3QgbWlkVmFsID0gZGVjb2RlVHJlZVttaWRdO1xuICAgICAgICBpZiAobWlkVmFsIDwgY2hhcikge1xuICAgICAgICAgICAgbG8gPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1pZFZhbCA+IGNoYXIpIHtcbiAgICAgICAgICAgIGhpID0gbWlkIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVUcmVlW21pZCArIGJyYW5jaENvdW50XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5jb25zdCBodG1sRGVjb2RlciA9IGdldERlY29kZXIoaHRtbERlY29kZVRyZWUpO1xuY29uc3QgeG1sRGVjb2RlciA9IGdldERlY29kZXIoeG1sRGVjb2RlVHJlZSk7XG4vKipcbiAqIERlY29kZXMgYW4gSFRNTCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHN0ciBUaGUgc3RyaW5nIHRvIGRlY29kZS5cbiAqIEBwYXJhbSBtb2RlIFRoZSBkZWNvZGluZyBtb2RlLlxuICogQHJldHVybnMgVGhlIGRlY29kZWQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSFRNTChzdHIsIG1vZGUgPSBEZWNvZGluZ01vZGUuTGVnYWN5KSB7XG4gICAgcmV0dXJuIGh0bWxEZWNvZGVyKHN0ciwgbW9kZSk7XG59XG4vKipcbiAqIERlY29kZXMgYW4gSFRNTCBzdHJpbmcgaW4gYW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSBzdHIgVGhlIHN0cmluZyB0byBkZWNvZGUuXG4gKiBAcmV0dXJucyBUaGUgZGVjb2RlZCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVIVE1MQXR0cmlidXRlKHN0cikge1xuICAgIHJldHVybiBodG1sRGVjb2RlcihzdHIsIERlY29kaW5nTW9kZS5BdHRyaWJ1dGUpO1xufVxuLyoqXG4gKiBEZWNvZGVzIGFuIEhUTUwgc3RyaW5nLCByZXF1aXJpbmcgYWxsIGVudGl0aWVzIHRvIGJlIHRlcm1pbmF0ZWQgYnkgYSBzZW1pY29sb24uXG4gKlxuICogQHBhcmFtIHN0ciBUaGUgc3RyaW5nIHRvIGRlY29kZS5cbiAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUhUTUxTdHJpY3Qoc3RyKSB7XG4gICAgcmV0dXJuIGh0bWxEZWNvZGVyKHN0ciwgRGVjb2RpbmdNb2RlLlN0cmljdCk7XG59XG4vKipcbiAqIERlY29kZXMgYW4gWE1MIHN0cmluZywgcmVxdWlyaW5nIGFsbCBlbnRpdGllcyB0byBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICpcbiAqIEBwYXJhbSBzdHIgVGhlIHN0cmluZyB0byBkZWNvZGUuXG4gKiBAcmV0dXJucyBUaGUgZGVjb2RlZCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVYTUwoc3RyKSB7XG4gICAgcmV0dXJuIHhtbERlY29kZXIoc3RyLCBEZWNvZGluZ01vZGUuU3RyaWN0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29kZS5qcy5tYXAiLCIvLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvaGUvYmxvYi8zNmFmZTE3OTM5MjIyNmNmMWI2Y2NkYjE2ZWJiYjdhNWE4NDRkOTNhL3NyYy9oZS5qcyNMMTA2LUwxMzRcbnZhciBfYTtcbmNvbnN0IGRlY29kZU1hcCA9IG5ldyBNYXAoW1xuICAgIFswLCA2NTUzM10sXG4gICAgLy8gQzEgVW5pY29kZSBjb250cm9sIGNoYXJhY3RlciByZWZlcmVuY2UgcmVwbGFjZW1lbnRzXG4gICAgWzEyOCwgODM2NF0sXG4gICAgWzEzMCwgODIxOF0sXG4gICAgWzEzMSwgNDAyXSxcbiAgICBbMTMyLCA4MjIyXSxcbiAgICBbMTMzLCA4MjMwXSxcbiAgICBbMTM0LCA4MjI0XSxcbiAgICBbMTM1LCA4MjI1XSxcbiAgICBbMTM2LCA3MTBdLFxuICAgIFsxMzcsIDgyNDBdLFxuICAgIFsxMzgsIDM1Ml0sXG4gICAgWzEzOSwgODI0OV0sXG4gICAgWzE0MCwgMzM4XSxcbiAgICBbMTQyLCAzODFdLFxuICAgIFsxNDUsIDgyMTZdLFxuICAgIFsxNDYsIDgyMTddLFxuICAgIFsxNDcsIDgyMjBdLFxuICAgIFsxNDgsIDgyMjFdLFxuICAgIFsxNDksIDgyMjZdLFxuICAgIFsxNTAsIDgyMTFdLFxuICAgIFsxNTEsIDgyMTJdLFxuICAgIFsxNTIsIDczMl0sXG4gICAgWzE1MywgODQ4Ml0sXG4gICAgWzE1NCwgMzUzXSxcbiAgICBbMTU1LCA4MjUwXSxcbiAgICBbMTU2LCAzMzldLFxuICAgIFsxNTgsIDM4Ml0sXG4gICAgWzE1OSwgMzc2XSxcbl0pO1xuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgYFN0cmluZy5mcm9tQ29kZVBvaW50YC4gSXQgaXMgdXNlZCB0byBjcmVhdGUgYSBzdHJpbmcgZnJvbSBhIFVuaWNvZGUgY29kZSBwb2ludC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21Db2RlUG9pbnQgPSBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5uZWNlc3NhcnktY29uZGl0aW9uLCBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL2VzLWJ1aWx0aW5zXG4oX2EgPSBTdHJpbmcuZnJvbUNvZGVQb2ludCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZnVuY3Rpb24gKGNvZGVQb2ludCkge1xuICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuICAgIGlmIChjb2RlUG9pbnQgPiAweGZmZmYpIHtcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDA7XG4gICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+PiAxMCkgJiAweDNmZikgfCAweGQ4MDApO1xuICAgICAgICBjb2RlUG9pbnQgPSAweGRjMDAgfCAoY29kZVBvaW50ICYgMHgzZmYpO1xuICAgIH1cbiAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgIHJldHVybiBvdXRwdXQ7XG59O1xuLyoqXG4gKiBSZXBsYWNlIHRoZSBnaXZlbiBjb2RlIHBvaW50IHdpdGggYSByZXBsYWNlbWVudCBjaGFyYWN0ZXIgaWYgaXQgaXMgYVxuICogc3Vycm9nYXRlIG9yIGlzIG91dHNpZGUgdGhlIHZhbGlkIHJhbmdlLiBPdGhlcndpc2UgcmV0dXJuIHRoZSBjb2RlXG4gKiBwb2ludCB1bmNoYW5nZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ29kZVBvaW50KGNvZGVQb2ludCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoKGNvZGVQb2ludCA+PSAweGQ4MDAgJiYgY29kZVBvaW50IDw9IDB4ZGZmZikgfHwgY29kZVBvaW50ID4gMHgxMGZmZmYpIHtcbiAgICAgICAgcmV0dXJuIDB4ZmZmZDtcbiAgICB9XG4gICAgcmV0dXJuIChfYSA9IGRlY29kZU1hcC5nZXQoY29kZVBvaW50KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogY29kZVBvaW50O1xufVxuLyoqXG4gKiBSZXBsYWNlIHRoZSBjb2RlIHBvaW50IGlmIHJlbGV2YW50LCB0aGVuIGNvbnZlcnQgaXQgdG8gYSBzdHJpbmcuXG4gKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBmcm9tQ29kZVBvaW50KHJlcGxhY2VDb2RlUG9pbnQoY29kZVBvaW50KSlgIGluc3RlYWQuXG4gKiBAcGFyYW0gY29kZVBvaW50IFRoZSBjb2RlIHBvaW50IHRvIGRlY29kZS5cbiAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIGNvZGUgcG9pbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludChjb2RlUG9pbnQpIHtcbiAgICByZXR1cm4gZnJvbUNvZGVQb2ludChyZXBsYWNlQ29kZVBvaW50KGNvZGVQb2ludCkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVjb2RlX2NvZGVwb2ludC5qcy5tYXAiLCJpbXBvcnQgaHRtbFRyaWUgZnJvbSBcIi4vZ2VuZXJhdGVkL2VuY29kZS1odG1sLmpzXCI7XG5pbXBvcnQgeyB4bWxSZXBsYWNlciwgZ2V0Q29kZVBvaW50IH0gZnJvbSBcIi4vZXNjYXBlLmpzXCI7XG5jb25zdCBodG1sUmVwbGFjZXIgPSAvW1xcdFxcbiEtLC4vOi1AWy1gXFxmey19JFxceDgwLVxcdUZGRkZdL2c7XG4vKipcbiAqIEVuY29kZXMgYWxsIGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0IHVzaW5nIEhUTUwgZW50aXRpZXMuIFRoaXMgaW5jbHVkZXNcbiAqIGNoYXJhY3RlcnMgdGhhdCBhcmUgdmFsaWQgQVNDSUkgY2hhcmFjdGVycyBpbiBIVE1MIGRvY3VtZW50cywgc3VjaCBhcyBgI2AuXG4gKlxuICogVG8gZ2V0IGEgbW9yZSBjb21wYWN0IG91dHB1dCwgY29uc2lkZXIgdXNpbmcgdGhlIGBlbmNvZGVOb25Bc2NpaUhUTUxgXG4gKiBmdW5jdGlvbiwgd2hpY2ggd2lsbCBvbmx5IGVuY29kZSBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCB2YWxpZCBpbiBIVE1MXG4gKiBkb2N1bWVudHMsIGFzIHdlbGwgYXMgbm9uLUFTQ0lJIGNoYXJhY3RlcnMuXG4gKlxuICogSWYgYSBjaGFyYWN0ZXIgaGFzIG5vIGVxdWl2YWxlbnQgZW50aXR5LCBhIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlXG4gKiAoZWcuIGAmI3hmYztgKSB3aWxsIGJlIHVzZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIVE1MKGRhdGEpIHtcbiAgICByZXR1cm4gZW5jb2RlSFRNTFRyaWVSZShodG1sUmVwbGFjZXIsIGRhdGEpO1xufVxuLyoqXG4gKiBFbmNvZGVzIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycywgYXMgd2VsbCBhcyBjaGFyYWN0ZXJzIG5vdCB2YWxpZCBpbiBIVE1MXG4gKiBkb2N1bWVudHMgdXNpbmcgSFRNTCBlbnRpdGllcy4gVGhpcyBmdW5jdGlvbiB3aWxsIG5vdCBlbmNvZGUgY2hhcmFjdGVycyB0aGF0XG4gKiBhcmUgdmFsaWQgaW4gSFRNTCBkb2N1bWVudHMsIHN1Y2ggYXMgYCNgLlxuICpcbiAqIElmIGEgY2hhcmFjdGVyIGhhcyBubyBlcXVpdmFsZW50IGVudGl0eSwgYSBudW1lcmljIGhleGFkZWNpbWFsIHJlZmVyZW5jZVxuICogKGVnLiBgJiN4ZmM7YCkgd2lsbCBiZSB1c2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlTm9uQXNjaWlIVE1MKGRhdGEpIHtcbiAgICByZXR1cm4gZW5jb2RlSFRNTFRyaWVSZSh4bWxSZXBsYWNlciwgZGF0YSk7XG59XG5mdW5jdGlvbiBlbmNvZGVIVE1MVHJpZVJlKHJlZ0V4cCwgc3RyKSB7XG4gICAgbGV0IHJldCA9IFwiXCI7XG4gICAgbGV0IGxhc3RJZHggPSAwO1xuICAgIGxldCBtYXRjaDtcbiAgICB3aGlsZSAoKG1hdGNoID0gcmVnRXhwLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgaSA9IG1hdGNoLmluZGV4O1xuICAgICAgICByZXQgKz0gc3RyLnN1YnN0cmluZyhsYXN0SWR4LCBpKTtcbiAgICAgICAgY29uc3QgY2hhciA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBsZXQgbmV4dCA9IGh0bWxUcmllLmdldChjaGFyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXh0ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvLyBXZSBhcmUgaW4gYSBicmFuY2guIFRyeSB0byBtYXRjaCB0aGUgbmV4dCBjaGFyLlxuICAgICAgICAgICAgaWYgKGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRDaGFyID0gc3RyLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIG5leHQubiA9PT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICA/IG5leHQubiA9PT0gbmV4dENoYXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV4dC5vXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA6IG5leHQubi5nZXQobmV4dENoYXIpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCArPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdElkeCA9IHJlZ0V4cC5sYXN0SW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dCA9IG5leHQudjtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBtaWdodCBoYXZlIGEgdHJlZSBub2RlIHdpdGhvdXQgYSB2YWx1ZTsgc2tpcCBhbmQgdXNlIGEgbnVtZXJpYyBlbnRpdHkuXG4gICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldCArPSBuZXh0O1xuICAgICAgICAgICAgbGFzdElkeCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3AgPSBnZXRDb2RlUG9pbnQoc3RyLCBpKTtcbiAgICAgICAgICAgIHJldCArPSBgJiN4JHtjcC50b1N0cmluZygxNil9O2A7XG4gICAgICAgICAgICAvLyBJbmNyZWFzZSBieSAxIGlmIHdlIGhhdmUgYSBzdXJyb2dhdGUgcGFpclxuICAgICAgICAgICAgbGFzdElkeCA9IHJlZ0V4cC5sYXN0SW5kZXggKz0gTnVtYmVyKGNwICE9PSBjaGFyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0ICsgc3RyLnN1YnN0cihsYXN0SWR4KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVuY29kZS5qcy5tYXAiLCJleHBvcnQgY29uc3QgeG1sUmVwbGFjZXIgPSAvW1wiJic8PiRcXHg4MC1cXHVGRkZGXS9nO1xuY29uc3QgeG1sQ29kZU1hcCA9IG5ldyBNYXAoW1xuICAgIFszNCwgXCImcXVvdDtcIl0sXG4gICAgWzM4LCBcIiZhbXA7XCJdLFxuICAgIFszOSwgXCImYXBvcztcIl0sXG4gICAgWzYwLCBcIiZsdDtcIl0sXG4gICAgWzYyLCBcIiZndDtcIl0sXG5dKTtcbi8vIEZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9kZSA8IDQsIHdlIHdyYXAgYGNvZGVQb2ludEF0YFxuZXhwb3J0IGNvbnN0IGdldENvZGVQb2ludCA9IFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS1jb25kaXRpb25cblN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQgIT0gbnVsbFxuICAgID8gKHN0ciwgaW5kZXgpID0+IHN0ci5jb2RlUG9pbnRBdChpbmRleClcbiAgICA6IC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgIChjLCBpbmRleCkgPT4gKGMuY2hhckNvZGVBdChpbmRleCkgJiAweGZjMDApID09PSAweGQ4MDBcbiAgICAgICAgICAgID8gKGMuY2hhckNvZGVBdChpbmRleCkgLSAweGQ4MDApICogMHg0MDAgK1xuICAgICAgICAgICAgICAgIGMuY2hhckNvZGVBdChpbmRleCArIDEpIC1cbiAgICAgICAgICAgICAgICAweGRjMDAgK1xuICAgICAgICAgICAgICAgIDB4MTAwMDBcbiAgICAgICAgICAgIDogYy5jaGFyQ29kZUF0KGluZGV4KTtcbi8qKlxuICogRW5jb2RlcyBhbGwgbm9uLUFTQ0lJIGNoYXJhY3RlcnMsIGFzIHdlbGwgYXMgY2hhcmFjdGVycyBub3QgdmFsaWQgaW4gWE1MXG4gKiBkb2N1bWVudHMgdXNpbmcgWE1MIGVudGl0aWVzLlxuICpcbiAqIElmIGEgY2hhcmFjdGVyIGhhcyBubyBlcXVpdmFsZW50IGVudGl0eSwgYVxuICogbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkgd2lsbCBiZSB1c2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlWE1MKHN0cikge1xuICAgIGxldCByZXQgPSBcIlwiO1xuICAgIGxldCBsYXN0SWR4ID0gMDtcbiAgICBsZXQgbWF0Y2g7XG4gICAgd2hpbGUgKChtYXRjaCA9IHhtbFJlcGxhY2VyLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgaSA9IG1hdGNoLmluZGV4O1xuICAgICAgICBjb25zdCBjaGFyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGNvbnN0IG5leHQgPSB4bWxDb2RlTWFwLmdldChjaGFyKTtcbiAgICAgICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0ICs9IHN0ci5zdWJzdHJpbmcobGFzdElkeCwgaSkgKyBuZXh0O1xuICAgICAgICAgICAgbGFzdElkeCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0ICs9IGAke3N0ci5zdWJzdHJpbmcobGFzdElkeCwgaSl9JiN4JHtnZXRDb2RlUG9pbnQoc3RyLCBpKS50b1N0cmluZygxNil9O2A7XG4gICAgICAgICAgICAvLyBJbmNyZWFzZSBieSAxIGlmIHdlIGhhdmUgYSBzdXJyb2dhdGUgcGFpclxuICAgICAgICAgICAgbGFzdElkeCA9IHhtbFJlcGxhY2VyLmxhc3RJbmRleCArPSBOdW1iZXIoKGNoYXIgJiAweGZjMDApID09PSAweGQ4MDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQgKyBzdHIuc3Vic3RyKGxhc3RJZHgpO1xufVxuLyoqXG4gKiBFbmNvZGVzIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycywgYXMgd2VsbCBhcyBjaGFyYWN0ZXJzIG5vdCB2YWxpZCBpbiBYTUxcbiAqIGRvY3VtZW50cyB1c2luZyBudW1lcmljIGhleGFkZWNpbWFsIHJlZmVyZW5jZSAoZWcuIGAmI3hmYztgKS5cbiAqXG4gKiBIYXZlIGEgbG9vayBhdCBgZXNjYXBlVVRGOGAgaWYgeW91IHdhbnQgYSBtb3JlIGNvbmNpc2Ugb3V0cHV0IGF0IHRoZSBleHBlbnNlXG4gKiBvZiByZWR1Y2VkIHRyYW5zcG9ydGFiaWxpdHkuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGVzY2FwZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVzY2FwZSA9IGVuY29kZVhNTDtcbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgZXNjYXBlcyBhbGwgY2hhcmFjdGVycyBtYXRjaGVkIGJ5IHRoZSBnaXZlbiByZWd1bGFyXG4gKiBleHByZXNzaW9uIHVzaW5nIHRoZSBnaXZlbiBtYXAgb2YgY2hhcmFjdGVycyB0byBlc2NhcGUgdG8gdGhlaXIgZW50aXRpZXMuXG4gKlxuICogQHBhcmFtIHJlZ2V4IFJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBjaGFyYWN0ZXJzIHRvIGVzY2FwZS5cbiAqIEBwYXJhbSBtYXAgTWFwIG9mIGNoYXJhY3RlcnMgdG8gZXNjYXBlIHRvIHRoZWlyIGVudGl0aWVzLlxuICpcbiAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgZXNjYXBlcyBhbGwgY2hhcmFjdGVycyBtYXRjaGVkIGJ5IHRoZSBnaXZlbiByZWd1bGFyXG4gKiBleHByZXNzaW9uIHVzaW5nIHRoZSBnaXZlbiBtYXAgb2YgY2hhcmFjdGVycyB0byBlc2NhcGUgdG8gdGhlaXIgZW50aXRpZXMuXG4gKi9cbmZ1bmN0aW9uIGdldEVzY2FwZXIocmVnZXgsIG1hcCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBlc2NhcGUoZGF0YSkge1xuICAgICAgICBsZXQgbWF0Y2g7XG4gICAgICAgIGxldCBsYXN0SWR4ID0gMDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSByZWdleC5leGVjKGRhdGEpKSkge1xuICAgICAgICAgICAgaWYgKGxhc3RJZHggIT09IG1hdGNoLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGRhdGEuc3Vic3RyaW5nKGxhc3RJZHgsIG1hdGNoLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIGtub3cgdGhhdCB0aGlzIGNoYXJhY3RlciB3aWxsIGJlIGluIHRoZSBtYXAuXG4gICAgICAgICAgICByZXN1bHQgKz0gbWFwLmdldChtYXRjaFswXS5jaGFyQ29kZUF0KDApKTtcbiAgICAgICAgICAgIC8vIEV2ZXJ5IG1hdGNoIHdpbGwgYmUgb2YgbGVuZ3RoIDFcbiAgICAgICAgICAgIGxhc3RJZHggPSBtYXRjaC5pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIGRhdGEuc3Vic3RyaW5nKGxhc3RJZHgpO1xuICAgIH07XG59XG4vKipcbiAqIEVuY29kZXMgYWxsIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTCBkb2N1bWVudHMgdXNpbmcgWE1MIGVudGl0aWVzLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgb3V0cHV0IHdpbGwgYmUgY2hhcmFjdGVyLXNldCBkZXBlbmRlbnQuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGVzY2FwZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVzY2FwZVVURjggPSBnZXRFc2NhcGVyKC9bJjw+J1wiXS9nLCB4bWxDb2RlTWFwKTtcbi8qKlxuICogRW5jb2RlcyBhbGwgY2hhcmFjdGVycyB0aGF0IGhhdmUgdG8gYmUgZXNjYXBlZCBpbiBIVE1MIGF0dHJpYnV0ZXMsXG4gKiBmb2xsb3dpbmcge0BsaW5rIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3BhcnNpbmcuaHRtbCNlc2NhcGluZ1N0cmluZ30uXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGVzY2FwZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVzY2FwZUF0dHJpYnV0ZSA9IGdldEVzY2FwZXIoL1tcIiZcXHUwMEEwXS9nLCBuZXcgTWFwKFtcbiAgICBbMzQsIFwiJnF1b3Q7XCJdLFxuICAgIFszOCwgXCImYW1wO1wiXSxcbiAgICBbMTYwLCBcIiZuYnNwO1wiXSxcbl0pKTtcbi8qKlxuICogRW5jb2RlcyBhbGwgY2hhcmFjdGVycyB0aGF0IGhhdmUgdG8gYmUgZXNjYXBlZCBpbiBIVE1MIHRleHQsXG4gKiBmb2xsb3dpbmcge0BsaW5rIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3BhcnNpbmcuaHRtbCNlc2NhcGluZ1N0cmluZ30uXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGVzY2FwZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVzY2FwZVRleHQgPSBnZXRFc2NhcGVyKC9bJjw+XFx1MDBBMF0vZywgbmV3IE1hcChbXG4gICAgWzM4LCBcIiZhbXA7XCJdLFxuICAgIFs2MCwgXCImbHQ7XCJdLFxuICAgIFs2MiwgXCImZ3Q7XCJdLFxuICAgIFsxNjAsIFwiJm5ic3A7XCJdLFxuXSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXNjYXBlLmpzLm1hcCIsIi8vIEdlbmVyYXRlZCB1c2luZyBzY3JpcHRzL3dyaXRlLWRlY29kZS1tYXAudHNcbmV4cG9ydCBkZWZhdWx0IG5ldyBVaW50MTZBcnJheShcbi8vIHByZXR0aWVyLWlnbm9yZVxuXCJcXHUxZDQxPFxceGQ1XFx1MDEzMVxcdTAyOGFcXHUwNDlkXFx1MDU3YlxcdTA1ZDBcXHUwNjc1XFx1MDZkZVxcdTA3YTJcXHUwN2Q2XFx1MDgwZlxcdTBhNGFcXHUwYTkxXFx1MGRhMVxcdTBlNmRcXHUwZjA5XFx1MGYyNlxcdTEwY2FcXHUxMjI4XFx1MTJlMVxcdTE0MTVcXHUxNDlkXFx1MTRjM1xcdTE0ZGZcXHUxNTI1XFwwXFwwXFwwXFwwXFwwXFwwXFx1MTU2YlxcdTE2Y2RcXHUxOThkXFx1MWMxMlxcdTFkZGRcXHUxZjdlXFx1MjA2MFxcdTIxYjBcXHUyMjhkXFx1MjNjMFxcdTIzZmJcXHUyNDQyXFx1MjgyNFxcdTI5MTJcXHUyZDA4XFx1MmU0OFxcdTJmY2VcXHUzMDE2XFx1MzJiYVxcdTM2MzlcXHUzN2FjXFx1MzhmZVxcdTNhMjhcXHUzYTcxXFx1M2FlMFxcdTNiMmVcXHUwODAwRU1hYmNmZ2xtbm9wcnN0dVxcXFxiZm1zXFx4N2ZcXHg4NFxceDhiXFx4OTBcXHg5NVxceDk4XFx4YTZcXHhiM1xceGI5XFx4YzhcXHhjZmxpZ1xcdTgwM2JcXHhjNlxcdTQwYzZQXFx1ODAzYiZcXHU0MDI2Y3V0ZVxcdTgwM2JcXHhjMVxcdTQwYzFyZXZlO1xcdTQxMDJcXHUwMTAwaXl4fXJjXFx1ODAzYlxceGMyXFx1NDBjMjtcXHU0NDEwcjtcXHVjMDAwXFx1ZDgzNVxcdWRkMDRyYXZlXFx1ODAzYlxceGMwXFx1NDBjMHBoYTtcXHU0MzkxYWNyO1xcdTQxMDBkO1xcdTZhNTNcXHUwMTAwZ3BcXHg5ZFxceGExb247XFx1NDEwNGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDM4cGx5RnVuY3Rpb247XFx1NjA2MWluZ1xcdTgwM2JcXHhjNVxcdTQwYzVcXHUwMTAwY3NcXHhiZVxceGMzcjtcXHVjMDAwXFx1ZDgzNVxcdWRjOWNpZ247XFx1NjI1NGlsZGVcXHU4MDNiXFx4YzNcXHU0MGMzbWxcXHU4MDNiXFx4YzRcXHU0MGM0XFx1MDQwMGFjZWZvcnN1XFx4ZTVcXHhmYlxceGZlXFx1MDExN1xcdTAxMWNcXHUwMTIyXFx1MDEyN1xcdTAxMmFcXHUwMTAwY3JcXHhlYVxceGYya3NsYXNoO1xcdTYyMTZcXHUwMTc2XFx4ZjZcXHhmODtcXHU2YWU3ZWQ7XFx1NjMwNnk7XFx1NDQxMVxcdTAxODBjcnRcXHUwMTA1XFx1MDEwYlxcdTAxMTRhdXNlO1xcdTYyMzVub3VsbGlzO1xcdTYxMmNhO1xcdTQzOTJyO1xcdWMwMDBcXHVkODM1XFx1ZGQwNXBmO1xcdWMwMDBcXHVkODM1XFx1ZGQzOWV2ZTtcXHU0MmQ4Y1xceGYyXFx1MDExM21wZXE7XFx1NjI0ZVxcdTA3MDBIT2FjZGVmaGlsb3JzdVxcdTAxNGRcXHUwMTUxXFx1MDE1NlxcdTAxODBcXHUwMTllXFx1MDFhMlxcdTAxYjVcXHUwMWI3XFx1MDFiYVxcdTAxZGNcXHUwMjE1XFx1MDI3M1xcdTAyNzhcXHUwMjdlY3k7XFx1NDQyN1BZXFx1ODAzYlxceGE5XFx1NDBhOVxcdTAxODBjcHlcXHUwMTVkXFx1MDE2MlxcdTAxN2F1dGU7XFx1NDEwNlxcdTAxMDA7aVxcdTAxNjdcXHUwMTY4XFx1NjJkMnRhbERpZmZlcmVudGlhbEQ7XFx1NjE0NWxleXM7XFx1NjEyZFxcdTAyMDBhZWlvXFx1MDE4OVxcdTAxOGVcXHUwMTk0XFx1MDE5OHJvbjtcXHU0MTBjZGlsXFx1ODAzYlxceGM3XFx1NDBjN3JjO1xcdTQxMDhuaW50O1xcdTYyMzBvdDtcXHU0MTBhXFx1MDEwMGRuXFx1MDFhN1xcdTAxYWRpbGxhO1xcdTQwYjh0ZXJEb3Q7XFx1NDBiN1xceGYyXFx1MDE3Zmk7XFx1NDNhN3JjbGVcXHUwMjAwRE1QVFxcdTAxYzdcXHUwMWNiXFx1MDFkMVxcdTAxZDZvdDtcXHU2Mjk5aW51cztcXHU2Mjk2bHVzO1xcdTYyOTVpbWVzO1xcdTYyOTdvXFx1MDEwMGNzXFx1MDFlMlxcdTAxZjhrd2lzZUNvbnRvdXJJbnRlZ3JhbDtcXHU2MjMyZUN1cmx5XFx1MDEwMERRXFx1MDIwM1xcdTAyMGZvdWJsZVF1b3RlO1xcdTYwMWR1b3RlO1xcdTYwMTlcXHUwMjAwbG5wdVxcdTAyMWVcXHUwMjI4XFx1MDI0N1xcdTAyNTVvblxcdTAxMDA7ZVxcdTAyMjVcXHUwMjI2XFx1NjIzNztcXHU2YTc0XFx1MDE4MGdpdFxcdTAyMmZcXHUwMjM2XFx1MDIzYXJ1ZW50O1xcdTYyNjFudDtcXHU2MjJmb3VySW50ZWdyYWw7XFx1NjIyZVxcdTAxMDBmclxcdTAyNGNcXHUwMjRlO1xcdTYxMDJvZHVjdDtcXHU2MjEwbnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDtcXHU2MjMzb3NzO1xcdTZhMmZjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjOWVwXFx1MDEwMDtDXFx1MDI4NFxcdTAyODVcXHU2MmQzYXA7XFx1NjI0ZFxcdTA1ODBESlNaYWNlZmlvc1xcdTAyYTBcXHUwMmFjXFx1MDJiMFxcdTAyYjRcXHUwMmI4XFx1MDJjYlxcdTAyZDdcXHUwMmUxXFx1MDJlNlxcdTAzMzNcXHUwNDhkXFx1MDEwMDtvXFx1MDE3OVxcdTAyYTV0cmFoZDtcXHU2OTExY3k7XFx1NDQwMmN5O1xcdTQ0MDVjeTtcXHU0NDBmXFx1MDE4MGdyc1xcdTAyYmZcXHUwMmM0XFx1MDJjN2dlcjtcXHU2MDIxcjtcXHU2MWExaHY7XFx1NmFlNFxcdTAxMDBheVxcdTAyZDBcXHUwMmQ1cm9uO1xcdTQxMGU7XFx1NDQxNGxcXHUwMTAwO3RcXHUwMmRkXFx1MDJkZVxcdTYyMDdhO1xcdTQzOTRyO1xcdWMwMDBcXHVkODM1XFx1ZGQwN1xcdTAxMDBhZlxcdTAyZWJcXHUwMzI3XFx1MDEwMGNtXFx1MDJmMFxcdTAzMjJyaXRpY2FsXFx1MDIwMEFER1RcXHUwMzAwXFx1MDMwNlxcdTAzMTZcXHUwMzFjY3V0ZTtcXHU0MGI0b1xcdTAxNzRcXHUwMzBiXFx1MDMwZDtcXHU0MmQ5YmxlQWN1dGU7XFx1NDJkZHJhdmU7XFx1NDA2MGlsZGU7XFx1NDJkY29uZDtcXHU2MmM0ZmVyZW50aWFsRDtcXHU2MTQ2XFx1MDQ3MFxcdTAzM2RcXDBcXDBcXDBcXHUwMzQyXFx1MDM1NFxcMFxcdTA0MDVmO1xcdWMwMDBcXHVkODM1XFx1ZGQzYlxcdTAxODA7REVcXHUwMzQ4XFx1MDM0OVxcdTAzNGRcXHU0MGE4b3Q7XFx1NjBkY3F1YWw7XFx1NjI1MGJsZVxcdTAzMDBDRExSVVZcXHUwMzYzXFx1MDM3MlxcdTAzODJcXHUwM2NmXFx1MDNlMlxcdTAzZjhvbnRvdXJJbnRlZ3JhXFx4ZWNcXHUwMjM5b1xcdTAyNzRcXHUwMzc5XFwwXFwwXFx1MDM3YlxceGJiXFx1MDM0OW5BcnJvdztcXHU2MWQzXFx1MDEwMGVvXFx1MDM4N1xcdTAzYTRmdFxcdTAxODBBUlRcXHUwMzkwXFx1MDM5NlxcdTAzYTFycm93O1xcdTYxZDBpZ2h0QXJyb3c7XFx1NjFkNGVcXHhlNVxcdTAyY2FuZ1xcdTAxMDBMUlxcdTAzYWJcXHUwM2M0ZWZ0XFx1MDEwMEFSXFx1MDNiM1xcdTAzYjlycm93O1xcdTY3ZjhpZ2h0QXJyb3c7XFx1NjdmYWlnaHRBcnJvdztcXHU2N2Y5aWdodFxcdTAxMDBBVFxcdTAzZDhcXHUwM2RlcnJvdztcXHU2MWQyZWU7XFx1NjJhOHBcXHUwMjQxXFx1MDNlOVxcMFxcMFxcdTAzZWZycm93O1xcdTYxZDFvd25BcnJvdztcXHU2MWQ1ZXJ0aWNhbEJhcjtcXHU2MjI1blxcdTAzMDBBQkxSVGFcXHUwNDEyXFx1MDQyYVxcdTA0MzBcXHUwNDVlXFx1MDQ3ZlxcdTAzN2Nycm93XFx1MDE4MDtCVVxcdTA0MWRcXHUwNDFlXFx1MDQyMlxcdTYxOTNhcjtcXHU2OTEzcEFycm93O1xcdTYxZjVyZXZlO1xcdTQzMTFlZnRcXHUwMmQyXFx1MDQzYVxcMFxcdTA0NDZcXDBcXHUwNDUwaWdodFZlY3RvcjtcXHU2OTUwZWVWZWN0b3I7XFx1Njk1ZWVjdG9yXFx1MDEwMDtCXFx1MDQ1OVxcdTA0NWFcXHU2MWJkYXI7XFx1Njk1NmlnaHRcXHUwMWQ0XFx1MDQ2N1xcMFxcdTA0NzFlZVZlY3RvcjtcXHU2OTVmZWN0b3JcXHUwMTAwO0JcXHUwNDdhXFx1MDQ3YlxcdTYxYzFhcjtcXHU2OTU3ZWVcXHUwMTAwO0FcXHUwNDg2XFx1MDQ4N1xcdTYyYTRycm93O1xcdTYxYTdcXHUwMTAwY3RcXHUwNDkyXFx1MDQ5N3I7XFx1YzAwMFxcdWQ4MzVcXHVkYzlmcm9rO1xcdTQxMTBcXHUwODAwTlRhY2RmZ2xtb3Bxc3R1eFxcdTA0YmRcXHUwNGMwXFx1MDRjNFxcdTA0Y2JcXHUwNGRlXFx1MDRlMlxcdTA0ZTdcXHUwNGVlXFx1MDRmNVxcdTA1MjFcXHUwNTJmXFx1MDUzNlxcdTA1NTJcXHUwNTVkXFx1MDU2MFxcdTA1NjVHO1xcdTQxNGFIXFx1ODAzYlxceGQwXFx1NDBkMGN1dGVcXHU4MDNiXFx4YzlcXHU0MGM5XFx1MDE4MGFpeVxcdTA0ZDJcXHUwNGQ3XFx1MDRkY3JvbjtcXHU0MTFhcmNcXHU4MDNiXFx4Y2FcXHU0MGNhO1xcdTQ0MmRvdDtcXHU0MTE2cjtcXHVjMDAwXFx1ZDgzNVxcdWRkMDhyYXZlXFx1ODAzYlxceGM4XFx1NDBjOGVtZW50O1xcdTYyMDhcXHUwMTAwYXBcXHUwNGZhXFx1MDRmZWNyO1xcdTQxMTJ0eVxcdTAyNTNcXHUwNTA2XFwwXFwwXFx1MDUxMm1hbGxTcXVhcmU7XFx1NjVmYmVyeVNtYWxsU3F1YXJlO1xcdTY1YWJcXHUwMTAwZ3BcXHUwNTI2XFx1MDUyYW9uO1xcdTQxMThmO1xcdWMwMDBcXHVkODM1XFx1ZGQzY3NpbG9uO1xcdTQzOTV1XFx1MDEwMGFpXFx1MDUzY1xcdTA1NDlsXFx1MDEwMDtUXFx1MDU0MlxcdTA1NDNcXHU2YTc1aWxkZTtcXHU2MjQybGlicml1bTtcXHU2MWNjXFx1MDEwMGNpXFx1MDU1N1xcdTA1NWFyO1xcdTYxMzBtO1xcdTZhNzNhO1xcdTQzOTdtbFxcdTgwM2JcXHhjYlxcdTQwY2JcXHUwMTAwaXBcXHUwNTZhXFx1MDU2ZnN0cztcXHU2MjAzb25lbnRpYWxFO1xcdTYxNDdcXHUwMjgwY2Zpb3NcXHUwNTg1XFx1MDU4OFxcdTA1OGRcXHUwNWIyXFx1MDVjY3k7XFx1NDQyNHI7XFx1YzAwMFxcdWQ4MzVcXHVkZDA5bGxlZFxcdTAyNTNcXHUwNTk3XFwwXFwwXFx1MDVhM21hbGxTcXVhcmU7XFx1NjVmY2VyeVNtYWxsU3F1YXJlO1xcdTY1YWFcXHUwMzcwXFx1MDViYVxcMFxcdTA1YmZcXDBcXDBcXHUwNWM0ZjtcXHVjMDAwXFx1ZDgzNVxcdWRkM2RBbGw7XFx1NjIwMHJpZXJ0cmY7XFx1NjEzMWNcXHhmMlxcdTA1Y2JcXHUwNjAwSlRhYmNkZmdvcnN0XFx1MDVlOFxcdTA1ZWNcXHUwNWVmXFx1MDVmYVxcdTA2MDBcXHUwNjEyXFx1MDYxNlxcdTA2MWJcXHUwNjFkXFx1MDYyM1xcdTA2NmNcXHUwNjcyY3k7XFx1NDQwM1xcdTgwM2I+XFx1NDAzZW1tYVxcdTAxMDA7ZFxcdTA1ZjdcXHUwNWY4XFx1NDM5MztcXHU0M2RjcmV2ZTtcXHU0MTFlXFx1MDE4MGVpeVxcdTA2MDdcXHUwNjBjXFx1MDYxMGRpbDtcXHU0MTIycmM7XFx1NDExYztcXHU0NDEzb3Q7XFx1NDEyMHI7XFx1YzAwMFxcdWQ4MzVcXHVkZDBhO1xcdTYyZDlwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkM2VlYXRlclxcdTAzMDBFRkdMU1RcXHUwNjM1XFx1MDY0NFxcdTA2NGVcXHUwNjU2XFx1MDY1YlxcdTA2NjZxdWFsXFx1MDEwMDtMXFx1MDYzZVxcdTA2M2ZcXHU2MjY1ZXNzO1xcdTYyZGJ1bGxFcXVhbDtcXHU2MjY3cmVhdGVyO1xcdTZhYTJlc3M7XFx1NjI3N2xhbnRFcXVhbDtcXHU2YTdlaWxkZTtcXHU2MjczY3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2EyO1xcdTYyNmJcXHUwNDAwQWFjZmlvc3VcXHUwNjg1XFx1MDY4YlxcdTA2OTZcXHUwNjliXFx1MDY5ZVxcdTA2YWFcXHUwNmJlXFx1MDZjYVJEY3k7XFx1NDQyYVxcdTAxMDBjdFxcdTA2OTBcXHUwNjk0ZWs7XFx1NDJjNztcXHU0MDVlaXJjO1xcdTQxMjRyO1xcdTYxMGNsYmVydFNwYWNlO1xcdTYxMGJcXHUwMWYwXFx1MDZhZlxcMFxcdTA2YjJmO1xcdTYxMGRpem9udGFsTGluZTtcXHU2NTAwXFx1MDEwMGN0XFx1MDZjM1xcdTA2YzVcXHhmMlxcdTA2YTlyb2s7XFx1NDEyNm1wXFx1MDE0NFxcdTA2ZDBcXHUwNmQ4b3duSHVtXFx4ZjBcXHUwMTJmcXVhbDtcXHU2MjRmXFx1MDcwMEVKT2FjZGZnbW5vc3R1XFx1MDZmYVxcdTA2ZmVcXHUwNzAzXFx1MDcwN1xcdTA3MGVcXHUwNzFhXFx1MDcxZVxcdTA3MjFcXHUwNzI4XFx1MDc0NFxcdTA3NzhcXHUwNzhiXFx1MDc4ZlxcdTA3OTVjeTtcXHU0NDE1bGlnO1xcdTQxMzJjeTtcXHU0NDAxY3V0ZVxcdTgwM2JcXHhjZFxcdTQwY2RcXHUwMTAwaXlcXHUwNzEzXFx1MDcxOHJjXFx1ODAzYlxceGNlXFx1NDBjZTtcXHU0NDE4b3Q7XFx1NDEzMHI7XFx1NjExMXJhdmVcXHU4MDNiXFx4Y2NcXHU0MGNjXFx1MDE4MDthcFxcdTA3MjBcXHUwNzJmXFx1MDczZlxcdTAxMDBjZ1xcdTA3MzRcXHUwNzM3cjtcXHU0MTJhaW5hcnlJO1xcdTYxNDhsaWVcXHhmM1xcdTAzZGRcXHUwMWY0XFx1MDc0OVxcMFxcdTA3NjJcXHUwMTAwO2VcXHUwNzRkXFx1MDc0ZVxcdTYyMmNcXHUwMTAwZ3JcXHUwNzUzXFx1MDc1OHJhbDtcXHU2MjJic2VjdGlvbjtcXHU2MmMyaXNpYmxlXFx1MDEwMENUXFx1MDc2Y1xcdTA3NzJvbW1hO1xcdTYwNjNpbWVzO1xcdTYwNjJcXHUwMTgwZ3B0XFx1MDc3ZlxcdTA3ODNcXHUwNzg4b247XFx1NDEyZWY7XFx1YzAwMFxcdWQ4MzVcXHVkZDQwYTtcXHU0Mzk5Y3I7XFx1NjExMGlsZGU7XFx1NDEyOFxcdTAxZWJcXHUwNzlhXFwwXFx1MDc5ZWN5O1xcdTQ0MDZsXFx1ODAzYlxceGNmXFx1NDBjZlxcdTAyODBjZm9zdVxcdTA3YWNcXHUwN2I3XFx1MDdiY1xcdTA3YzJcXHUwN2QwXFx1MDEwMGl5XFx1MDdiMVxcdTA3YjVyYztcXHU0MTM0O1xcdTQ0MTlyO1xcdWMwMDBcXHVkODM1XFx1ZGQwZHBmO1xcdWMwMDBcXHVkODM1XFx1ZGQ0MVxcdTAxZTNcXHUwN2M3XFwwXFx1MDdjY3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2E1cmN5O1xcdTQ0MDhrY3k7XFx1NDQwNFxcdTAzODBISmFjZm9zXFx1MDdlNFxcdTA3ZThcXHUwN2VjXFx1MDdmMVxcdTA3ZmRcXHUwODAyXFx1MDgwOGN5O1xcdTQ0MjVjeTtcXHU0NDBjcHBhO1xcdTQzOWFcXHUwMTAwZXlcXHUwN2Y2XFx1MDdmYmRpbDtcXHU0MTM2O1xcdTQ0MWFyO1xcdWMwMDBcXHVkODM1XFx1ZGQwZXBmO1xcdWMwMDBcXHVkODM1XFx1ZGQ0MmNyO1xcdWMwMDBcXHVkODM1XFx1ZGNhNlxcdTA1ODBKVGFjZWZsbW9zdFxcdTA4MjVcXHUwODI5XFx1MDgyY1xcdTA4NTBcXHUwODYzXFx1MDliM1xcdTA5YjhcXHUwOWM3XFx1MDljZFxcdTBhMzdcXHUwYTQ3Y3k7XFx1NDQwOVxcdTgwM2I8XFx1NDAzY1xcdTAyODBjbW5wclxcdTA4MzdcXHUwODNjXFx1MDg0MVxcdTA4NDRcXHUwODRkdXRlO1xcdTQxMzliZGE7XFx1NDM5Ymc7XFx1NjdlYWxhY2V0cmY7XFx1NjExMnI7XFx1NjE5ZVxcdTAxODBhZXlcXHUwODU3XFx1MDg1Y1xcdTA4NjFyb247XFx1NDEzZGRpbDtcXHU0MTNiO1xcdTQ0MWJcXHUwMTAwZnNcXHUwODY4XFx1MDk3MHRcXHUwNTAwQUNERlJUVVZhclxcdTA4N2VcXHUwOGE5XFx1MDhiMVxcdTA4ZTBcXHUwOGU2XFx1MDhmY1xcdTA5MmZcXHUwOTViXFx1MDM5MFxcdTA5NmFcXHUwMTAwbnJcXHUwODgzXFx1MDg4ZmdsZUJyYWNrZXQ7XFx1NjdlOHJvd1xcdTAxODA7QlJcXHUwODk5XFx1MDg5YVxcdTA4OWVcXHU2MTkwYXI7XFx1NjFlNGlnaHRBcnJvdztcXHU2MWM2ZWlsaW5nO1xcdTYzMDhvXFx1MDFmNVxcdTA4YjdcXDBcXHUwOGMzYmxlQnJhY2tldDtcXHU2N2U2blxcdTAxZDRcXHUwOGM4XFwwXFx1MDhkMmVlVmVjdG9yO1xcdTY5NjFlY3RvclxcdTAxMDA7QlxcdTA4ZGJcXHUwOGRjXFx1NjFjM2FyO1xcdTY5NTlsb29yO1xcdTYzMGFpZ2h0XFx1MDEwMEFWXFx1MDhlZlxcdTA4ZjVycm93O1xcdTYxOTRlY3RvcjtcXHU2OTRlXFx1MDEwMGVyXFx1MDkwMVxcdTA5MTdlXFx1MDE4MDtBVlxcdTA5MDlcXHUwOTBhXFx1MDkxMFxcdTYyYTNycm93O1xcdTYxYTRlY3RvcjtcXHU2OTVhaWFuZ2xlXFx1MDE4MDtCRVxcdTA5MjRcXHUwOTI1XFx1MDkyOVxcdTYyYjJhcjtcXHU2OWNmcXVhbDtcXHU2MmI0cFxcdTAxODBEVFZcXHUwOTM3XFx1MDk0MlxcdTA5NGNvd25WZWN0b3I7XFx1Njk1MWVlVmVjdG9yO1xcdTY5NjBlY3RvclxcdTAxMDA7QlxcdTA5NTZcXHUwOTU3XFx1NjFiZmFyO1xcdTY5NThlY3RvclxcdTAxMDA7QlxcdTA5NjVcXHUwOTY2XFx1NjFiY2FyO1xcdTY5NTJpZ2h0XFx4ZTFcXHUwMzljc1xcdTAzMDBFRkdMU1RcXHUwOTdlXFx1MDk4YlxcdTA5OTVcXHUwOTlkXFx1MDlhMlxcdTA5YWRxdWFsR3JlYXRlcjtcXHU2MmRhdWxsRXF1YWw7XFx1NjI2NnJlYXRlcjtcXHU2Mjc2ZXNzO1xcdTZhYTFsYW50RXF1YWw7XFx1NmE3ZGlsZGU7XFx1NjI3MnI7XFx1YzAwMFxcdWQ4MzVcXHVkZDBmXFx1MDEwMDtlXFx1MDliZFxcdTA5YmVcXHU2MmQ4ZnRhcnJvdztcXHU2MWRhaWRvdDtcXHU0MTNmXFx1MDE4MG5wd1xcdTA5ZDRcXHUwYTE2XFx1MGExYmdcXHUwMjAwTFJsclxcdTA5ZGVcXHUwOWY3XFx1MGEwMlxcdTBhMTBlZnRcXHUwMTAwQVJcXHUwOWU2XFx1MDllY3Jyb3c7XFx1NjdmNWlnaHRBcnJvdztcXHU2N2Y3aWdodEFycm93O1xcdTY3ZjZlZnRcXHUwMTAwYXJcXHUwM2IzXFx1MGEwYWlnaHRcXHhlMVxcdTAzYmZpZ2h0XFx4ZTFcXHUwM2NhZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNDNlclxcdTAxMDBMUlxcdTBhMjJcXHUwYTJjZWZ0QXJyb3c7XFx1NjE5OWlnaHRBcnJvdztcXHU2MTk4XFx1MDE4MGNodFxcdTBhM2VcXHUwYTQwXFx1MGE0MlxceGYyXFx1MDg0YztcXHU2MWIwcm9rO1xcdTQxNDE7XFx1NjI2YVxcdTA0MDBhY2VmaW9zdVxcdTBhNWFcXHUwYTVkXFx1MGE2MFxcdTBhNzdcXHUwYTdjXFx1MGE4NVxcdTBhOGJcXHUwYThlcDtcXHU2OTA1eTtcXHU0NDFjXFx1MDEwMGRsXFx1MGE2NVxcdTBhNmZpdW1TcGFjZTtcXHU2MDVmbGludHJmO1xcdTYxMzNyO1xcdWMwMDBcXHVkODM1XFx1ZGQxMG51c1BsdXM7XFx1NjIxM3BmO1xcdWMwMDBcXHVkODM1XFx1ZGQ0NGNcXHhmMlxcdTBhNzY7XFx1NDM5Y1xcdTA0ODBKYWNlZm9zdHVcXHUwYWEzXFx1MGFhN1xcdTBhYWRcXHUwYWMwXFx1MGIxNFxcdTBiMTlcXHUwZDkxXFx1MGQ5N1xcdTBkOWVjeTtcXHU0NDBhY3V0ZTtcXHU0MTQzXFx1MDE4MGFleVxcdTBhYjRcXHUwYWI5XFx1MGFiZXJvbjtcXHU0MTQ3ZGlsO1xcdTQxNDU7XFx1NDQxZFxcdTAxODBnc3dcXHUwYWM3XFx1MGFmMFxcdTBiMGVhdGl2ZVxcdTAxODBNVFZcXHUwYWQzXFx1MGFkZlxcdTBhZThlZGl1bVNwYWNlO1xcdTYwMGJoaVxcdTAxMDBjblxcdTBhZTZcXHUwYWQ4XFx4ZWJcXHUwYWQ5ZXJ5VGhpXFx4ZWVcXHUwYWQ5dGVkXFx1MDEwMEdMXFx1MGFmOFxcdTBiMDZyZWF0ZXJHcmVhdGVcXHhmMlxcdTA2NzNlc3NMZXNcXHhmM1xcdTBhNDhMaW5lO1xcdTQwMGFyO1xcdWMwMDBcXHVkODM1XFx1ZGQxMVxcdTAyMDBCbnB0XFx1MGIyMlxcdTBiMjhcXHUwYjM3XFx1MGIzYXJlYWs7XFx1NjA2MEJyZWFraW5nU3BhY2U7XFx1NDBhMGY7XFx1NjExNVxcdTA2ODA7Q0RFR0hMTlBSU1RWXFx1MGI1NVxcdTBiNTZcXHUwYjZhXFx1MGI3Y1xcdTBiYTFcXHUwYmViXFx1MGMwNFxcdTBjNWVcXHUwYzg0XFx1MGNhNlxcdTBjZDhcXHUwZDYxXFx1MGQ4NVxcdTZhZWNcXHUwMTAwb3VcXHUwYjViXFx1MGI2NG5ncnVlbnQ7XFx1NjI2MnBDYXA7XFx1NjI2ZG91YmxlVmVydGljYWxCYXI7XFx1NjIyNlxcdTAxODBscXhcXHUwYjgzXFx1MGI4YVxcdTBiOWJlbWVudDtcXHU2MjA5dWFsXFx1MDEwMDtUXFx1MGI5MlxcdTBiOTNcXHU2MjYwaWxkZTtcXHVjMDAwXFx1MjI0MlxcdTAzMzhpc3RzO1xcdTYyMDRyZWF0ZXJcXHUwMzgwO0VGR0xTVFxcdTBiYjZcXHUwYmI3XFx1MGJiZFxcdTBiYzlcXHUwYmQzXFx1MGJkOFxcdTBiZTVcXHU2MjZmcXVhbDtcXHU2MjcxdWxsRXF1YWw7XFx1YzAwMFxcdTIyNjdcXHUwMzM4cmVhdGVyO1xcdWMwMDBcXHUyMjZiXFx1MDMzOGVzcztcXHU2Mjc5bGFudEVxdWFsO1xcdWMwMDBcXHUyYTdlXFx1MDMzOGlsZGU7XFx1NjI3NXVtcFxcdTAxNDRcXHUwYmYyXFx1MGJmZG93bkh1bXA7XFx1YzAwMFxcdTIyNGVcXHUwMzM4cXVhbDtcXHVjMDAwXFx1MjI0ZlxcdTAzMzhlXFx1MDEwMGZzXFx1MGMwYVxcdTBjMjd0VHJpYW5nbGVcXHUwMTgwO0JFXFx1MGMxYVxcdTBjMWJcXHUwYzIxXFx1NjJlYWFyO1xcdWMwMDBcXHUyOWNmXFx1MDMzOHF1YWw7XFx1NjJlY3NcXHUwMzAwO0VHTFNUXFx1MGMzNVxcdTBjMzZcXHUwYzNjXFx1MGM0NFxcdTBjNGJcXHUwYzU4XFx1NjI2ZXF1YWw7XFx1NjI3MHJlYXRlcjtcXHU2Mjc4ZXNzO1xcdWMwMDBcXHUyMjZhXFx1MDMzOGxhbnRFcXVhbDtcXHVjMDAwXFx1MmE3ZFxcdTAzMzhpbGRlO1xcdTYyNzRlc3RlZFxcdTAxMDBHTFxcdTBjNjhcXHUwYzc5cmVhdGVyR3JlYXRlcjtcXHVjMDAwXFx1MmFhMlxcdTAzMzhlc3NMZXNzO1xcdWMwMDBcXHUyYWExXFx1MDMzOHJlY2VkZXNcXHUwMTgwO0VTXFx1MGM5MlxcdTBjOTNcXHUwYzliXFx1NjI4MHF1YWw7XFx1YzAwMFxcdTJhYWZcXHUwMzM4bGFudEVxdWFsO1xcdTYyZTBcXHUwMTAwZWlcXHUwY2FiXFx1MGNiOXZlcnNlRWxlbWVudDtcXHU2MjBjZ2h0VHJpYW5nbGVcXHUwMTgwO0JFXFx1MGNjYlxcdTBjY2NcXHUwY2QyXFx1NjJlYmFyO1xcdWMwMDBcXHUyOWQwXFx1MDMzOHF1YWw7XFx1NjJlZFxcdTAxMDBxdVxcdTBjZGRcXHUwZDBjdWFyZVN1XFx1MDEwMGJwXFx1MGNlOFxcdTBjZjlzZXRcXHUwMTAwO0VcXHUwY2YwXFx1MGNmM1xcdWMwMDBcXHUyMjhmXFx1MDMzOHF1YWw7XFx1NjJlMmVyc2V0XFx1MDEwMDtFXFx1MGQwM1xcdTBkMDZcXHVjMDAwXFx1MjI5MFxcdTAzMzhxdWFsO1xcdTYyZTNcXHUwMTgwYmNwXFx1MGQxM1xcdTBkMjRcXHUwZDRlc2V0XFx1MDEwMDtFXFx1MGQxYlxcdTBkMWVcXHVjMDAwXFx1MjI4MlxcdTIwZDJxdWFsO1xcdTYyODhjZWVkc1xcdTAyMDA7RVNUXFx1MGQzMlxcdTBkMzNcXHUwZDNiXFx1MGQ0NlxcdTYyODFxdWFsO1xcdWMwMDBcXHUyYWIwXFx1MDMzOGxhbnRFcXVhbDtcXHU2MmUxaWxkZTtcXHVjMDAwXFx1MjI3ZlxcdTAzMzhlcnNldFxcdTAxMDA7RVxcdTBkNThcXHUwZDViXFx1YzAwMFxcdTIyODNcXHUyMGQycXVhbDtcXHU2Mjg5aWxkZVxcdTAyMDA7RUZUXFx1MGQ2ZVxcdTBkNmZcXHUwZDc1XFx1MGQ3ZlxcdTYyNDFxdWFsO1xcdTYyNDR1bGxFcXVhbDtcXHU2MjQ3aWxkZTtcXHU2MjQ5ZXJ0aWNhbEJhcjtcXHU2MjI0Y3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2E5aWxkZVxcdTgwM2JcXHhkMVxcdTQwZDE7XFx1NDM5ZFxcdTA3MDBFYWNkZmdtb3Byc3R1dlxcdTBkYmRcXHUwZGMyXFx1MGRjOVxcdTBkZDVcXHUwZGRiXFx1MGRlMFxcdTBkZTdcXHUwZGZjXFx1MGUwMlxcdTBlMjBcXHUwZTIyXFx1MGUzMlxcdTBlM2ZcXHUwZTQ0bGlnO1xcdTQxNTJjdXRlXFx1ODAzYlxceGQzXFx1NDBkM1xcdTAxMDBpeVxcdTBkY2VcXHUwZGQzcmNcXHU4MDNiXFx4ZDRcXHU0MGQ0O1xcdTQ0MWVibGFjO1xcdTQxNTByO1xcdWMwMDBcXHVkODM1XFx1ZGQxMnJhdmVcXHU4MDNiXFx4ZDJcXHU0MGQyXFx1MDE4MGFlaVxcdTBkZWVcXHUwZGYyXFx1MGRmNmNyO1xcdTQxNGNnYTtcXHU0M2E5Y3JvbjtcXHU0MzlmcGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDQ2ZW5DdXJseVxcdTAxMDBEUVxcdTBlMGVcXHUwZTFhb3VibGVRdW90ZTtcXHU2MDFjdW90ZTtcXHU2MDE4O1xcdTZhNTRcXHUwMTAwY2xcXHUwZTI3XFx1MGUyY3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2FhYXNoXFx1ODAzYlxceGQ4XFx1NDBkOGlcXHUwMTZjXFx1MGUzN1xcdTBlM2NkZVxcdTgwM2JcXHhkNVxcdTQwZDVlcztcXHU2YTM3bWxcXHU4MDNiXFx4ZDZcXHU0MGQ2ZXJcXHUwMTAwQlBcXHUwZTRiXFx1MGU2MFxcdTAxMDBhclxcdTBlNTBcXHUwZTUzcjtcXHU2MDNlYWNcXHUwMTAwZWtcXHUwZTVhXFx1MGU1YztcXHU2M2RlZXQ7XFx1NjNiNGFyZW50aGVzaXM7XFx1NjNkY1xcdTA0ODBhY2ZoaWxvcnNcXHUwZTdmXFx1MGU4N1xcdTBlOGFcXHUwZThmXFx1MGU5MlxcdTBlOTRcXHUwZTlkXFx1MGViMFxcdTBlZmNydGlhbEQ7XFx1NjIwMnk7XFx1NDQxZnI7XFx1YzAwMFxcdWQ4MzVcXHVkZDEzaTtcXHU0M2E2O1xcdTQzYTB1c01pbnVzO1xcdTQwYjFcXHUwMTAwaXBcXHUwZWEyXFx1MGVhZG5jYXJlcGxhblxceGU1XFx1MDY5ZGY7XFx1NjExOVxcdTAyMDA7ZWlvXFx1MGViOVxcdTBlYmFcXHUwZWUwXFx1MGVlNFxcdTZhYmJjZWRlc1xcdTAyMDA7RVNUXFx1MGVjOFxcdTBlYzlcXHUwZWNmXFx1MGVkYVxcdTYyN2FxdWFsO1xcdTZhYWZsYW50RXF1YWw7XFx1NjI3Y2lsZGU7XFx1NjI3ZW1lO1xcdTYwMzNcXHUwMTAwZHBcXHUwZWU5XFx1MGVlZXVjdDtcXHU2MjBmb3J0aW9uXFx1MDEwMDthXFx1MDIyNVxcdTBlZjlsO1xcdTYyMWRcXHUwMTAwY2lcXHUwZjAxXFx1MGYwNnI7XFx1YzAwMFxcdWQ4MzVcXHVkY2FiO1xcdTQzYThcXHUwMjAwVWZvc1xcdTBmMTFcXHUwZjE2XFx1MGYxYlxcdTBmMWZPVFxcdTgwM2JcXFwiXFx1NDAyMnI7XFx1YzAwMFxcdWQ4MzVcXHVkZDE0cGY7XFx1NjExYWNyO1xcdWMwMDBcXHVkODM1XFx1ZGNhY1xcdTA2MDBCRWFjZWZoaW9yc3VcXHUwZjNlXFx1MGY0M1xcdTBmNDdcXHUwZjYwXFx1MGY3M1xcdTBmYTdcXHUwZmFhXFx1MGZhZFxcdTEwOTZcXHUxMGE5XFx1MTBiNFxcdTEwYmVhcnI7XFx1NjkxMEdcXHU4MDNiXFx4YWVcXHU0MGFlXFx1MDE4MGNuclxcdTBmNGVcXHUwZjUzXFx1MGY1NnV0ZTtcXHU0MTU0ZztcXHU2N2ViclxcdTAxMDA7dFxcdTBmNWNcXHUwZjVkXFx1NjFhMGw7XFx1NjkxNlxcdTAxODBhZXlcXHUwZjY3XFx1MGY2Y1xcdTBmNzFyb247XFx1NDE1OGRpbDtcXHU0MTU2O1xcdTQ0MjBcXHUwMTAwO3ZcXHUwZjc4XFx1MGY3OVxcdTYxMWNlcnNlXFx1MDEwMEVVXFx1MGY4MlxcdTBmOTlcXHUwMTAwbHFcXHUwZjg3XFx1MGY4ZWVtZW50O1xcdTYyMGJ1aWxpYnJpdW07XFx1NjFjYnBFcXVpbGlicml1bTtcXHU2OTZmclxceGJiXFx1MGY3OW87XFx1NDNhMWdodFxcdTA0MDBBQ0RGVFVWYVxcdTBmYzFcXHUwZmViXFx1MGZmM1xcdTEwMjJcXHUxMDI4XFx1MTA1YlxcdTEwODdcXHUwM2Q4XFx1MDEwMG5yXFx1MGZjNlxcdTBmZDJnbGVCcmFja2V0O1xcdTY3ZTlyb3dcXHUwMTgwO0JMXFx1MGZkY1xcdTBmZGRcXHUwZmUxXFx1NjE5MmFyO1xcdTYxZTVlZnRBcnJvdztcXHU2MWM0ZWlsaW5nO1xcdTYzMDlvXFx1MDFmNVxcdTBmZjlcXDBcXHUxMDA1YmxlQnJhY2tldDtcXHU2N2U3blxcdTAxZDRcXHUxMDBhXFwwXFx1MTAxNGVlVmVjdG9yO1xcdTY5NWRlY3RvclxcdTAxMDA7QlxcdTEwMWRcXHUxMDFlXFx1NjFjMmFyO1xcdTY5NTVsb29yO1xcdTYzMGJcXHUwMTAwZXJcXHUxMDJkXFx1MTA0M2VcXHUwMTgwO0FWXFx1MTAzNVxcdTEwMzZcXHUxMDNjXFx1NjJhMnJyb3c7XFx1NjFhNmVjdG9yO1xcdTY5NWJpYW5nbGVcXHUwMTgwO0JFXFx1MTA1MFxcdTEwNTFcXHUxMDU1XFx1NjJiM2FyO1xcdTY5ZDBxdWFsO1xcdTYyYjVwXFx1MDE4MERUVlxcdTEwNjNcXHUxMDZlXFx1MTA3OG93blZlY3RvcjtcXHU2OTRmZWVWZWN0b3I7XFx1Njk1Y2VjdG9yXFx1MDEwMDtCXFx1MTA4MlxcdTEwODNcXHU2MWJlYXI7XFx1Njk1NGVjdG9yXFx1MDEwMDtCXFx1MTA5MVxcdTEwOTJcXHU2MWMwYXI7XFx1Njk1M1xcdTAxMDBwdVxcdTEwOWJcXHUxMDllZjtcXHU2MTFkbmRJbXBsaWVzO1xcdTY5NzBpZ2h0YXJyb3c7XFx1NjFkYlxcdTAxMDBjaFxcdTEwYjlcXHUxMGJjcjtcXHU2MTFiO1xcdTYxYjFsZURlbGF5ZWQ7XFx1NjlmNFxcdTA2ODBIT2FjZmhpbW9xc3R1XFx1MTBlNFxcdTEwZjFcXHUxMGY3XFx1MTBmZFxcdTExMTlcXHUxMTFlXFx1MTE1MVxcdTExNTZcXHUxMTYxXFx1MTE2N1xcdTExYjVcXHUxMWJiXFx1MTFiZlxcdTAxMDBDY1xcdTEwZTlcXHUxMGVlSGN5O1xcdTQ0Mjl5O1xcdTQ0MjhGVGN5O1xcdTQ0MmNjdXRlO1xcdTQxNWFcXHUwMjgwO2FlaXlcXHUxMTA4XFx1MTEwOVxcdTExMGVcXHUxMTEzXFx1MTExN1xcdTZhYmNyb247XFx1NDE2MGRpbDtcXHU0MTVlcmM7XFx1NDE1YztcXHU0NDIxcjtcXHVjMDAwXFx1ZDgzNVxcdWRkMTZvcnRcXHUwMjAwRExSVVxcdTExMmFcXHUxMTM0XFx1MTEzZVxcdTExNDlvd25BcnJvd1xceGJiXFx1MDQxZWVmdEFycm93XFx4YmJcXHUwODlhaWdodEFycm93XFx4YmJcXHUwZmRkcEFycm93O1xcdTYxOTFnbWE7XFx1NDNhM2FsbENpcmNsZTtcXHU2MjE4cGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDRhXFx1MDI3MlxcdTExNmRcXDBcXDBcXHUxMTcwdDtcXHU2MjFhYXJlXFx1MDIwMDtJU1VcXHUxMTdiXFx1MTE3Y1xcdTExODlcXHUxMWFmXFx1NjVhMW50ZXJzZWN0aW9uO1xcdTYyOTN1XFx1MDEwMGJwXFx1MTE4ZlxcdTExOWVzZXRcXHUwMTAwO0VcXHUxMTk3XFx1MTE5OFxcdTYyOGZxdWFsO1xcdTYyOTFlcnNldFxcdTAxMDA7RVxcdTExYThcXHUxMWE5XFx1NjI5MHF1YWw7XFx1NjI5Mm5pb247XFx1NjI5NGNyO1xcdWMwMDBcXHVkODM1XFx1ZGNhZWFyO1xcdTYyYzZcXHUwMjAwYmNtcFxcdTExYzhcXHUxMWRiXFx1MTIwOVxcdTEyMGJcXHUwMTAwO3NcXHUxMWNkXFx1MTFjZVxcdTYyZDBldFxcdTAxMDA7RVxcdTExY2RcXHUxMWQ1cXVhbDtcXHU2Mjg2XFx1MDEwMGNoXFx1MTFlMFxcdTEyMDVlZWRzXFx1MDIwMDtFU1RcXHUxMWVkXFx1MTFlZVxcdTExZjRcXHUxMWZmXFx1NjI3YnF1YWw7XFx1NmFiMGxhbnRFcXVhbDtcXHU2MjdkaWxkZTtcXHU2MjdmVGhcXHhlMVxcdTBmOGM7XFx1NjIxMVxcdTAxODA7ZXNcXHUxMjEyXFx1MTIxM1xcdTEyMjNcXHU2MmQxcnNldFxcdTAxMDA7RVxcdTEyMWNcXHUxMjFkXFx1NjI4M3F1YWw7XFx1NjI4N2V0XFx4YmJcXHUxMjEzXFx1MDU4MEhSU2FjZmhpb3JzXFx1MTIzZVxcdTEyNDRcXHUxMjQ5XFx1MTI1NVxcdTEyNWVcXHUxMjcxXFx1MTI3NlxcdTEyOWZcXHUxMmMyXFx1MTJjOFxcdTEyZDFPUk5cXHU4MDNiXFx4ZGVcXHU0MGRlQURFO1xcdTYxMjJcXHUwMTAwSGNcXHUxMjRlXFx1MTI1MmN5O1xcdTQ0MGJ5O1xcdTQ0MjZcXHUwMTAwYnVcXHUxMjVhXFx1MTI1YztcXHU0MDA5O1xcdTQzYTRcXHUwMTgwYWV5XFx1MTI2NVxcdTEyNmFcXHUxMjZmcm9uO1xcdTQxNjRkaWw7XFx1NDE2MjtcXHU0NDIycjtcXHVjMDAwXFx1ZDgzNVxcdWRkMTdcXHUwMTAwZWlcXHUxMjdiXFx1MTI4OVxcdTAxZjJcXHUxMjgwXFwwXFx1MTI4N2Vmb3JlO1xcdTYyMzRhO1xcdTQzOThcXHUwMTAwY25cXHUxMjhlXFx1MTI5OGtTcGFjZTtcXHVjMDAwXFx1MjA1ZlxcdTIwMGFTcGFjZTtcXHU2MDA5bGRlXFx1MDIwMDtFRlRcXHUxMmFiXFx1MTJhY1xcdTEyYjJcXHUxMmJjXFx1NjIzY3F1YWw7XFx1NjI0M3VsbEVxdWFsO1xcdTYyNDVpbGRlO1xcdTYyNDhwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNGJpcGxlRG90O1xcdTYwZGJcXHUwMTAwY3RcXHUxMmQ2XFx1MTJkYnI7XFx1YzAwMFxcdWQ4MzVcXHVkY2Fmcm9rO1xcdTQxNjZcXHUwYWUxXFx1MTJmN1xcdTEzMGVcXHUxMzFhXFx1MTMyNlxcMFxcdTEzMmNcXHUxMzMxXFwwXFwwXFwwXFwwXFwwXFx1MTMzOFxcdTEzM2RcXHUxMzc3XFx1MTM4NVxcMFxcdTEzZmZcXHUxNDA0XFx1MTQwYVxcdTE0MTBcXHUwMTAwY3JcXHUxMmZiXFx1MTMwMXV0ZVxcdTgwM2JcXHhkYVxcdTQwZGFyXFx1MDEwMDtvXFx1MTMwN1xcdTEzMDhcXHU2MTlmY2lyO1xcdTY5NDlyXFx1MDFlM1xcdTEzMTNcXDBcXHUxMzE2eTtcXHU0NDBldmU7XFx1NDE2Y1xcdTAxMDBpeVxcdTEzMWVcXHUxMzIzcmNcXHU4MDNiXFx4ZGJcXHU0MGRiO1xcdTQ0MjNibGFjO1xcdTQxNzByO1xcdWMwMDBcXHVkODM1XFx1ZGQxOHJhdmVcXHU4MDNiXFx4ZDlcXHU0MGQ5YWNyO1xcdTQxNmFcXHUwMTAwZGlcXHUxMzQxXFx1MTM2OWVyXFx1MDEwMEJQXFx1MTM0OFxcdTEzNWRcXHUwMTAwYXJcXHUxMzRkXFx1MTM1MHI7XFx1NDA1ZmFjXFx1MDEwMGVrXFx1MTM1N1xcdTEzNTk7XFx1NjNkZmV0O1xcdTYzYjVhcmVudGhlc2lzO1xcdTYzZGRvblxcdTAxMDA7UFxcdTEzNzBcXHUxMzcxXFx1NjJjM2x1cztcXHU2MjhlXFx1MDEwMGdwXFx1MTM3YlxcdTEzN2ZvbjtcXHU0MTcyZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNGNcXHUwNDAwQURFVGFkcHNcXHUxMzk1XFx1MTNhZVxcdTEzYjhcXHUxM2M0XFx1MDNlOFxcdTEzZDJcXHUxM2Q3XFx1MTNmM3Jyb3dcXHUwMTgwO0JEXFx1MTE1MFxcdTEzYTBcXHUxM2E0YXI7XFx1NjkxMm93bkFycm93O1xcdTYxYzVvd25BcnJvdztcXHU2MTk1cXVpbGlicml1bTtcXHU2OTZlZWVcXHUwMTAwO0FcXHUxM2NiXFx1MTNjY1xcdTYyYTVycm93O1xcdTYxYTVvd25cXHhlMVxcdTAzZjNlclxcdTAxMDBMUlxcdTEzZGVcXHUxM2U4ZWZ0QXJyb3c7XFx1NjE5NmlnaHRBcnJvdztcXHU2MTk3aVxcdTAxMDA7bFxcdTEzZjlcXHUxM2ZhXFx1NDNkMm9uO1xcdTQzYTVpbmc7XFx1NDE2ZWNyO1xcdWMwMDBcXHVkODM1XFx1ZGNiMGlsZGU7XFx1NDE2OG1sXFx1ODAzYlxceGRjXFx1NDBkY1xcdTA0ODBEYmNkZWZvc3ZcXHUxNDI3XFx1MTQyY1xcdTE0MzBcXHUxNDMzXFx1MTQzZVxcdTE0ODVcXHUxNDhhXFx1MTQ5MFxcdTE0OTZhc2g7XFx1NjJhYmFyO1xcdTZhZWJ5O1xcdTQ0MTJhc2hcXHUwMTAwO2xcXHUxNDNiXFx1MTQzY1xcdTYyYTk7XFx1NmFlNlxcdTAxMDBlclxcdTE0NDNcXHUxNDQ1O1xcdTYyYzFcXHUwMTgwYnR5XFx1MTQ0Y1xcdTE0NTBcXHUxNDdhYXI7XFx1NjAxNlxcdTAxMDA7aVxcdTE0NGZcXHUxNDU1Y2FsXFx1MDIwMEJMU1RcXHUxNDYxXFx1MTQ2NVxcdTE0NmFcXHUxNDc0YXI7XFx1NjIyM2luZTtcXHU0MDdjZXBhcmF0b3I7XFx1Njc1OGlsZGU7XFx1NjI0MFRoaW5TcGFjZTtcXHU2MDBhcjtcXHVjMDAwXFx1ZDgzNVxcdWRkMTlwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNGRjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYjFkYXNoO1xcdTYyYWFcXHUwMjgwY2Vmb3NcXHUxNGE3XFx1MTRhY1xcdTE0YjFcXHUxNGI2XFx1MTRiY2lyYztcXHU0MTc0ZGdlO1xcdTYyYzByO1xcdWMwMDBcXHVkODM1XFx1ZGQxYXBmO1xcdWMwMDBcXHVkODM1XFx1ZGQ0ZWNyO1xcdWMwMDBcXHVkODM1XFx1ZGNiMlxcdTAyMDBmaW9zXFx1MTRjYlxcdTE0ZDBcXHUxNGQyXFx1MTRkOHI7XFx1YzAwMFxcdWQ4MzVcXHVkZDFiO1xcdTQzOWVwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNGZjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYjNcXHUwNDgwQUlVYWNmb3N1XFx1MTRmMVxcdTE0ZjVcXHUxNGY5XFx1MTRmZFxcdTE1MDRcXHUxNTBmXFx1MTUxNFxcdTE1MWFcXHUxNTIwY3k7XFx1NDQyZmN5O1xcdTQ0MDdjeTtcXHU0NDJlY3V0ZVxcdTgwM2JcXHhkZFxcdTQwZGRcXHUwMTAwaXlcXHUxNTA5XFx1MTUwZHJjO1xcdTQxNzY7XFx1NDQyYnI7XFx1YzAwMFxcdWQ4MzVcXHVkZDFjcGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDUwY3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2I0bWw7XFx1NDE3OFxcdTA0MDBIYWNkZWZvc1xcdTE1MzVcXHUxNTM5XFx1MTUzZlxcdTE1NGJcXHUxNTRmXFx1MTU1ZFxcdTE1NjBcXHUxNTY0Y3k7XFx1NDQxNmN1dGU7XFx1NDE3OVxcdTAxMDBheVxcdTE1NDRcXHUxNTQ5cm9uO1xcdTQxN2Q7XFx1NDQxN290O1xcdTQxN2JcXHUwMWYyXFx1MTU1NFxcMFxcdTE1NWJvV2lkdFxceGU4XFx1MGFkOWE7XFx1NDM5NnI7XFx1NjEyOHBmO1xcdTYxMjRjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYjVcXHUwYmUxXFx1MTU4M1xcdTE1OGFcXHUxNTkwXFwwXFx1MTViMFxcdTE1YjZcXHUxNWJmXFwwXFwwXFwwXFwwXFx1MTVjNlxcdTE1ZGJcXHUxNWViXFx1MTY1ZlxcdTE2NmRcXDBcXHUxNjk1XFx1MTY5YlxcdTE2YjJcXHUxNmI5XFwwXFx1MTZiZWN1dGVcXHU4MDNiXFx4ZTFcXHU0MGUxcmV2ZTtcXHU0MTAzXFx1MDMwMDtFZGl1eVxcdTE1OWNcXHUxNTlkXFx1MTVhMVxcdTE1YTNcXHUxNWE4XFx1MTVhZFxcdTYyM2U7XFx1YzAwMFxcdTIyM2VcXHUwMzMzO1xcdTYyM2ZyY1xcdTgwM2JcXHhlMlxcdTQwZTJ0ZVxcdTgwYmJcXHhiNFxcdTAzMDY7XFx1NDQzMGxpZ1xcdTgwM2JcXHhlNlxcdTQwZTZcXHUwMTAwO3JcXHhiMlxcdTE1YmE7XFx1YzAwMFxcdWQ4MzVcXHVkZDFlcmF2ZVxcdTgwM2JcXHhlMFxcdTQwZTBcXHUwMTAwZXBcXHUxNWNhXFx1MTVkNlxcdTAxMDBmcFxcdTE1Y2ZcXHUxNWQ0c3ltO1xcdTYxMzVcXHhlOFxcdTE1ZDNoYTtcXHU0M2IxXFx1MDEwMGFwXFx1MTVkZmNcXHUwMTAwY2xcXHUxNWU0XFx1MTVlN3I7XFx1NDEwMWc7XFx1NmEzZlxcdTAyNjRcXHUxNWYwXFwwXFwwXFx1MTYwYVxcdTAyODA7YWRzdlxcdTE1ZmFcXHUxNWZiXFx1MTVmZlxcdTE2MDFcXHUxNjA3XFx1NjIyN25kO1xcdTZhNTU7XFx1NmE1Y2xvcGU7XFx1NmE1ODtcXHU2YTVhXFx1MDM4MDtlbG1yc3pcXHUxNjE4XFx1MTYxOVxcdTE2MWJcXHUxNjFlXFx1MTYzZlxcdTE2NGZcXHUxNjU5XFx1NjIyMDtcXHU2OWE0ZVxceGJiXFx1MTYxOXNkXFx1MDEwMDthXFx1MTYyNVxcdTE2MjZcXHU2MjIxXFx1MDQ2MVxcdTE2MzBcXHUxNjMyXFx1MTYzNFxcdTE2MzZcXHUxNjM4XFx1MTYzYVxcdTE2M2NcXHUxNjNlO1xcdTY5YTg7XFx1NjlhOTtcXHU2OWFhO1xcdTY5YWI7XFx1NjlhYztcXHU2OWFkO1xcdTY5YWU7XFx1NjlhZnRcXHUwMTAwO3ZcXHUxNjQ1XFx1MTY0NlxcdTYyMWZiXFx1MDEwMDtkXFx1MTY0Y1xcdTE2NGRcXHU2MmJlO1xcdTY5OWRcXHUwMTAwcHRcXHUxNjU0XFx1MTY1N2g7XFx1NjIyMlxceGJiXFx4YjlhcnI7XFx1NjM3Y1xcdTAxMDBncFxcdTE2NjNcXHUxNjY3b247XFx1NDEwNWY7XFx1YzAwMFxcdWQ4MzVcXHVkZDUyXFx1MDM4MDtFYWVpb3BcXHUxMmMxXFx1MTY3YlxcdTE2N2RcXHUxNjgyXFx1MTY4NFxcdTE2ODdcXHUxNjhhO1xcdTZhNzBjaXI7XFx1NmE2ZjtcXHU2MjRhZDtcXHU2MjRicztcXHU0MDI3cm94XFx1MDEwMDtlXFx1MTJjMVxcdTE2OTJcXHhmMVxcdTE2ODNpbmdcXHU4MDNiXFx4ZTVcXHU0MGU1XFx1MDE4MGN0eVxcdTE2YTFcXHUxNmE2XFx1MTZhOHI7XFx1YzAwMFxcdWQ4MzVcXHVkY2I2O1xcdTQwMmFtcFxcdTAxMDA7ZVxcdTEyYzFcXHUxNmFmXFx4ZjFcXHUwMjg4aWxkZVxcdTgwM2JcXHhlM1xcdTQwZTNtbFxcdTgwM2JcXHhlNFxcdTQwZTRcXHUwMTAwY2lcXHUxNmMyXFx1MTZjOG9uaW5cXHhmNFxcdTAyNzJudDtcXHU2YTExXFx1MDgwME5hYmNkZWZpa2xub3Byc3VcXHUxNmVkXFx1MTZmMVxcdTE3MzBcXHUxNzNjXFx1MTc0M1xcdTE3NDhcXHUxNzc4XFx1MTc3ZFxcdTE3ZTBcXHUxN2U2XFx1MTgzOVxcdTE4NTBcXHUxNzBkXFx1MTkzZFxcdTE5NDhcXHUxOTcwb3Q7XFx1NmFlZFxcdTAxMDBjclxcdTE2ZjZcXHUxNzFla1xcdTAyMDBjZXBzXFx1MTcwMFxcdTE3MDVcXHUxNzBkXFx1MTcxM29uZztcXHU2MjRjcHNpbG9uO1xcdTQzZjZyaW1lO1xcdTYwMzVpbVxcdTAxMDA7ZVxcdTE3MWFcXHUxNzFiXFx1NjIzZHE7XFx1NjJjZFxcdTAxNzZcXHUxNzIyXFx1MTcyNmVlO1xcdTYyYmRlZFxcdTAxMDA7Z1xcdTE3MmNcXHUxNzJkXFx1NjMwNWVcXHhiYlxcdTE3MmRya1xcdTAxMDA7dFxcdTEzNWNcXHUxNzM3YnJrO1xcdTYzYjZcXHUwMTAwb3lcXHUxNzAxXFx1MTc0MTtcXHU0NDMxcXVvO1xcdTYwMWVcXHUwMjgwY21wcnRcXHUxNzUzXFx1MTc1YlxcdTE3NjFcXHUxNzY0XFx1MTc2OGF1c1xcdTAxMDA7ZVxcdTAxMGFcXHUwMTA5cHR5djtcXHU2OWIwc1xceGU5XFx1MTcwY25vXFx4ZjVcXHUwMTEzXFx1MDE4MGFod1xcdTE3NmZcXHUxNzcxXFx1MTc3MztcXHU0M2IyO1xcdTYxMzZlZW47XFx1NjI2Y3I7XFx1YzAwMFxcdWQ4MzVcXHVkZDFmZ1xcdTAzODBjb3N0dXZ3XFx1MTc4ZFxcdTE3OWRcXHUxN2IzXFx1MTdjMVxcdTE3ZDVcXHUxN2RiXFx1MTdkZVxcdTAxODBhaXVcXHUxNzk0XFx1MTc5NlxcdTE3OWFcXHhmMFxcdTA3NjByYztcXHU2NWVmcFxceGJiXFx1MTM3MVxcdTAxODBkcHRcXHUxN2E0XFx1MTdhOFxcdTE3YWRvdDtcXHU2YTAwbHVzO1xcdTZhMDFpbWVzO1xcdTZhMDJcXHUwMjcxXFx1MTdiOVxcMFxcMFxcdTE3YmVjdXA7XFx1NmEwNmFyO1xcdTY2MDVyaWFuZ2xlXFx1MDEwMGR1XFx1MTdjZFxcdTE3ZDJvd247XFx1NjViZHA7XFx1NjViM3BsdXM7XFx1NmEwNGVcXHhlNVxcdTE0NDRcXHhlNVxcdTE0YWRhcm93O1xcdTY5MGRcXHUwMTgwYWtvXFx1MTdlZFxcdTE4MjZcXHUxODM1XFx1MDEwMGNuXFx1MTdmMlxcdTE4MjNrXFx1MDE4MGxzdFxcdTE3ZmFcXHUwNWFiXFx1MTgwMm96ZW5nZTtcXHU2OWVicmlhbmdsZVxcdTAyMDA7ZGxyXFx1MTgxMlxcdTE4MTNcXHUxODE4XFx1MTgxZFxcdTY1YjRvd247XFx1NjViZWVmdDtcXHU2NWMyaWdodDtcXHU2NWI4aztcXHU2NDIzXFx1MDFiMVxcdTE4MmJcXDBcXHUxODMzXFx1MDFiMlxcdTE4MmZcXDBcXHUxODMxO1xcdTY1OTI7XFx1NjU5MTQ7XFx1NjU5M2NrO1xcdTY1ODhcXHUwMTAwZW9cXHUxODNlXFx1MTg0ZFxcdTAxMDA7cVxcdTE4NDNcXHUxODQ2XFx1YzAwMD1cXHUyMGU1dWl2O1xcdWMwMDBcXHUyMjYxXFx1MjBlNXQ7XFx1NjMxMFxcdTAyMDBwdHd4XFx1MTg1OVxcdTE4NWVcXHUxODY3XFx1MTg2Y2Y7XFx1YzAwMFxcdWQ4MzVcXHVkZDUzXFx1MDEwMDt0XFx1MTNjYlxcdTE4NjNvbVxceGJiXFx1MTNjY3RpZTtcXHU2MmM4XFx1MDYwMERIVVZiZGhtcHR1dlxcdTE4ODVcXHUxODk2XFx1MThhYVxcdTE4YmJcXHUxOGQ3XFx1MThkYlxcdTE4ZWNcXHUxOGZmXFx1MTkwNVxcdTE5MGFcXHUxOTEwXFx1MTkyMVxcdTAyMDBMUmxyXFx1MTg4ZVxcdTE4OTBcXHUxODkyXFx1MTg5NDtcXHU2NTU3O1xcdTY1NTQ7XFx1NjU1NjtcXHU2NTUzXFx1MDI4MDtEVWR1XFx1MThhMVxcdTE4YTJcXHUxOGE0XFx1MThhNlxcdTE4YThcXHU2NTUwO1xcdTY1NjY7XFx1NjU2OTtcXHU2NTY0O1xcdTY1NjdcXHUwMjAwTFJsclxcdTE4YjNcXHUxOGI1XFx1MThiN1xcdTE4Yjk7XFx1NjU1ZDtcXHU2NTVhO1xcdTY1NWM7XFx1NjU1OVxcdTAzODA7SExSaGxyXFx1MThjYVxcdTE4Y2JcXHUxOGNkXFx1MThjZlxcdTE4ZDFcXHUxOGQzXFx1MThkNVxcdTY1NTE7XFx1NjU2YztcXHU2NTYzO1xcdTY1NjA7XFx1NjU2YjtcXHU2NTYyO1xcdTY1NWZveDtcXHU2OWM5XFx1MDIwMExSbHJcXHUxOGU0XFx1MThlNlxcdTE4ZThcXHUxOGVhO1xcdTY1NTU7XFx1NjU1MjtcXHU2NTEwO1xcdTY1MGNcXHUwMjgwO0RVZHVcXHUwNmJkXFx1MThmN1xcdTE4ZjlcXHUxOGZiXFx1MThmZDtcXHU2NTY1O1xcdTY1Njg7XFx1NjUyYztcXHU2NTM0aW51cztcXHU2MjlmbHVzO1xcdTYyOWVpbWVzO1xcdTYyYTBcXHUwMjAwTFJsclxcdTE5MTlcXHUxOTFiXFx1MTkxZFxcdTE5MWY7XFx1NjU1YjtcXHU2NTU4O1xcdTY1MTg7XFx1NjUxNFxcdTAzODA7SExSaGxyXFx1MTkzMFxcdTE5MzFcXHUxOTMzXFx1MTkzNVxcdTE5MzdcXHUxOTM5XFx1MTkzYlxcdTY1MDI7XFx1NjU2YTtcXHU2NTYxO1xcdTY1NWU7XFx1NjUzYztcXHU2NTI0O1xcdTY1MWNcXHUwMTAwZXZcXHUwMTIzXFx1MTk0MmJhclxcdTgwM2JcXHhhNlxcdTQwYTZcXHUwMjAwY2Vpb1xcdTE5NTFcXHUxOTU2XFx1MTk1YVxcdTE5NjByO1xcdWMwMDBcXHVkODM1XFx1ZGNiN21pO1xcdTYwNGZtXFx1MDEwMDtlXFx1MTcxYVxcdTE3MWNsXFx1MDE4MDtiaFxcdTE5NjhcXHUxOTY5XFx1MTk2YlxcdTQwNWM7XFx1NjljNXN1YjtcXHU2N2M4XFx1MDE2Y1xcdTE5NzRcXHUxOTdlbFxcdTAxMDA7ZVxcdTE5NzlcXHUxOTdhXFx1NjAyMnRcXHhiYlxcdTE5N2FwXFx1MDE4MDtFZVxcdTAxMmZcXHUxOTg1XFx1MTk4NztcXHU2YWFlXFx1MDEwMDtxXFx1MDZkY1xcdTA2ZGJcXHUwY2UxXFx1MTlhN1xcMFxcdTE5ZThcXHUxYTExXFx1MWExNVxcdTFhMzJcXDBcXHUxYTM3XFx1MWE1MFxcMFxcMFxcdTFhYjRcXDBcXDBcXHUxYWMxXFwwXFwwXFx1MWIyMVxcdTFiMmVcXHUxYjRkXFx1MWI1MlxcMFxcdTFiZmRcXDBcXHUxYzBjXFx1MDE4MGNwclxcdTE5YWRcXHUxOWIyXFx1MTlkZHV0ZTtcXHU0MTA3XFx1MDMwMDthYmNkc1xcdTE5YmZcXHUxOWMwXFx1MTljNFxcdTE5Y2FcXHUxOWQ1XFx1MTlkOVxcdTYyMjluZDtcXHU2YTQ0cmN1cDtcXHU2YTQ5XFx1MDEwMGF1XFx1MTljZlxcdTE5ZDJwO1xcdTZhNGJwO1xcdTZhNDdvdDtcXHU2YTQwO1xcdWMwMDBcXHUyMjI5XFx1ZmUwMFxcdTAxMDBlb1xcdTE5ZTJcXHUxOWU1dDtcXHU2MDQxXFx4ZWVcXHUwNjkzXFx1MDIwMGFlaXVcXHUxOWYwXFx1MTlmYlxcdTFhMDFcXHUxYTA1XFx1MDFmMFxcdTE5ZjVcXDBcXHUxOWY4cztcXHU2YTRkb247XFx1NDEwZGRpbFxcdTgwM2JcXHhlN1xcdTQwZTdyYztcXHU0MTA5cHNcXHUwMTAwO3NcXHUxYTBjXFx1MWEwZFxcdTZhNGNtO1xcdTZhNTBvdDtcXHU0MTBiXFx1MDE4MGRtblxcdTFhMWJcXHUxYTIwXFx1MWEyNmlsXFx1ODBiYlxceGI4XFx1MDFhZHB0eXY7XFx1NjliMnRcXHU4MTAwXFx4YTI7ZVxcdTFhMmRcXHUxYTJlXFx1NDBhMnJcXHhlNFxcdTAxYjJyO1xcdWMwMDBcXHVkODM1XFx1ZGQyMFxcdTAxODBjZWlcXHUxYTNkXFx1MWE0MFxcdTFhNGR5O1xcdTQ0NDdja1xcdTAxMDA7bVxcdTFhNDdcXHUxYTQ4XFx1NjcxM2Fya1xceGJiXFx1MWE0ODtcXHU0M2M3clxcdTAzODA7RWNlZm1zXFx1MWE1ZlxcdTFhNjBcXHUxYTYyXFx1MWE2YlxcdTFhYTRcXHUxYWFhXFx1MWFhZVxcdTY1Y2I7XFx1NjljM1xcdTAxODA7ZWxcXHUxYTY5XFx1MWE2YVxcdTFhNmRcXHU0MmM2cTtcXHU2MjU3ZVxcdTAyNjFcXHUxYTc0XFwwXFwwXFx1MWE4OHJyb3dcXHUwMTAwbHJcXHUxYTdjXFx1MWE4MWVmdDtcXHU2MWJhaWdodDtcXHU2MWJiXFx1MDI4MFJTYWNkXFx1MWE5MlxcdTFhOTRcXHUxYTk2XFx1MWE5YVxcdTFhOWZcXHhiYlxcdTBmNDc7XFx1NjRjOHN0O1xcdTYyOWJpcmM7XFx1NjI5YWFzaDtcXHU2MjlkbmludDtcXHU2YTEwaWQ7XFx1NmFlZmNpcjtcXHU2OWMydWJzXFx1MDEwMDt1XFx1MWFiYlxcdTFhYmNcXHU2NjYzaXRcXHhiYlxcdTFhYmNcXHUwMmVjXFx1MWFjN1xcdTFhZDRcXHUxYWZhXFwwXFx1MWIwYW9uXFx1MDEwMDtlXFx1MWFjZFxcdTFhY2VcXHU0MDNhXFx1MDEwMDtxXFx4YzdcXHhjNlxcdTAyNmRcXHUxYWQ5XFwwXFwwXFx1MWFlMmFcXHUwMTAwO3RcXHUxYWRlXFx1MWFkZlxcdTQwMmM7XFx1NDA0MFxcdTAxODA7ZmxcXHUxYWU4XFx1MWFlOVxcdTFhZWJcXHU2MjAxXFx4ZWVcXHUxMTYwZVxcdTAxMDBteFxcdTFhZjFcXHUxYWY2ZW50XFx4YmJcXHUxYWU5ZVxceGYzXFx1MDI0ZFxcdTAxZTdcXHUxYWZlXFwwXFx1MWIwN1xcdTAxMDA7ZFxcdTEyYmJcXHUxYjAyb3Q7XFx1NmE2ZG5cXHhmNFxcdTAyNDZcXHUwMTgwZnJ5XFx1MWIxMFxcdTFiMTRcXHUxYjE3O1xcdWMwMDBcXHVkODM1XFx1ZGQ1NG9cXHhlNFxcdTAyNTRcXHU4MTAwXFx4YTk7c1xcdTAxNTVcXHUxYjFkcjtcXHU2MTE3XFx1MDEwMGFvXFx1MWIyNVxcdTFiMjlycjtcXHU2MWI1c3M7XFx1NjcxN1xcdTAxMDBjdVxcdTFiMzJcXHUxYjM3cjtcXHVjMDAwXFx1ZDgzNVxcdWRjYjhcXHUwMTAwYnBcXHUxYjNjXFx1MWI0NFxcdTAxMDA7ZVxcdTFiNDFcXHUxYjQyXFx1NmFjZjtcXHU2YWQxXFx1MDEwMDtlXFx1MWI0OVxcdTFiNGFcXHU2YWQwO1xcdTZhZDJkb3Q7XFx1NjJlZlxcdTAzODBkZWxwcnZ3XFx1MWI2MFxcdTFiNmNcXHUxYjc3XFx1MWI4MlxcdTFiYWNcXHUxYmQ0XFx1MWJmOWFyclxcdTAxMDBsclxcdTFiNjhcXHUxYjZhO1xcdTY5Mzg7XFx1NjkzNVxcdTAyNzBcXHUxYjcyXFwwXFwwXFx1MWI3NXI7XFx1NjJkZWM7XFx1NjJkZmFyclxcdTAxMDA7cFxcdTFiN2ZcXHUxYjgwXFx1NjFiNjtcXHU2OTNkXFx1MDMwMDtiY2Rvc1xcdTFiOGZcXHUxYjkwXFx1MWI5NlxcdTFiYTFcXHUxYmE1XFx1MWJhOFxcdTYyMmFyY2FwO1xcdTZhNDhcXHUwMTAwYXVcXHUxYjliXFx1MWI5ZXA7XFx1NmE0NnA7XFx1NmE0YW90O1xcdTYyOGRyO1xcdTZhNDU7XFx1YzAwMFxcdTIyMmFcXHVmZTAwXFx1MDIwMGFscnZcXHUxYmI1XFx1MWJiZlxcdTFiZGVcXHUxYmUzcnJcXHUwMTAwO21cXHUxYmJjXFx1MWJiZFxcdTYxYjc7XFx1NjkzY3lcXHUwMTgwZXZ3XFx1MWJjN1xcdTFiZDRcXHUxYmQ4cVxcdTAyNzBcXHUxYmNlXFwwXFwwXFx1MWJkMnJlXFx4ZTNcXHUxYjczdVxceGUzXFx1MWI3NWVlO1xcdTYyY2VlZGdlO1xcdTYyY2ZlblxcdTgwM2JcXHhhNFxcdTQwYTRlYXJyb3dcXHUwMTAwbHJcXHUxYmVlXFx1MWJmM2VmdFxceGJiXFx1MWI4MGlnaHRcXHhiYlxcdTFiYmRlXFx4ZTRcXHUxYmRkXFx1MDEwMGNpXFx1MWMwMVxcdTFjMDdvbmluXFx4ZjRcXHUwMWY3bnQ7XFx1NjIzMWxjdHk7XFx1NjMyZFxcdTA5ODBBSGFiY2RlZmhpamxvcnN0dXd6XFx1MWMzOFxcdTFjM2JcXHUxYzNmXFx1MWM1ZFxcdTFjNjlcXHUxYzc1XFx1MWM4YVxcdTFjOWVcXHUxY2FjXFx1MWNiN1xcdTFjZmJcXHUxY2ZmXFx1MWQwZFxcdTFkN2JcXHUxZDkxXFx1MWRhYlxcdTFkYmJcXHUxZGM2XFx1MWRjZHJcXHhmMlxcdTAzODFhcjtcXHU2OTY1XFx1MDIwMGdscnNcXHUxYzQ4XFx1MWM0ZFxcdTFjNTJcXHUxYzU0Z2VyO1xcdTYwMjBldGg7XFx1NjEzOFxceGYyXFx1MTEzM2hcXHUwMTAwO3ZcXHUxYzVhXFx1MWM1YlxcdTYwMTBcXHhiYlxcdTA5MGFcXHUwMTZiXFx1MWM2MVxcdTFjNjdhcm93O1xcdTY5MGZhXFx4ZTNcXHUwMzE1XFx1MDEwMGF5XFx1MWM2ZVxcdTFjNzNyb247XFx1NDEwZjtcXHU0NDM0XFx1MDE4MDthb1xcdTAzMzJcXHUxYzdjXFx1MWM4NFxcdTAxMDBnclxcdTAyYmZcXHUxYzgxcjtcXHU2MWNhdHNlcTtcXHU2YTc3XFx1MDE4MGdsbVxcdTFjOTFcXHUxYzk0XFx1MWM5OFxcdTgwM2JcXHhiMFxcdTQwYjB0YTtcXHU0M2I0cHR5djtcXHU2OWIxXFx1MDEwMGlyXFx1MWNhM1xcdTFjYThzaHQ7XFx1Njk3ZjtcXHVjMDAwXFx1ZDgzNVxcdWRkMjFhclxcdTAxMDBsclxcdTFjYjNcXHUxY2I1XFx4YmJcXHUwOGRjXFx4YmJcXHUxMDFlXFx1MDI4MGFlZ3N2XFx1MWNjMlxcdTAzNzhcXHUxY2Q2XFx1MWNkY1xcdTFjZTBtXFx1MDE4MDtvc1xcdTAzMjZcXHUxY2NhXFx1MWNkNG5kXFx1MDEwMDtzXFx1MDMyNlxcdTFjZDF1aXQ7XFx1NjY2NmFtbWE7XFx1NDNkZGluO1xcdTYyZjJcXHUwMTgwO2lvXFx1MWNlN1xcdTFjZThcXHUxY2Y4XFx1NDBmN2RlXFx1ODEwMFxceGY3O29cXHUxY2U3XFx1MWNmMG50aW1lcztcXHU2MmM3blxceGY4XFx1MWNmN2N5O1xcdTQ0NTJjXFx1MDI2ZlxcdTFkMDZcXDBcXDBcXHUxZDBhcm47XFx1NjMxZW9wO1xcdTYzMGRcXHUwMjgwbHB0dXdcXHUxZDE4XFx1MWQxZFxcdTFkMjJcXHUxZDQ5XFx1MWQ1NWxhcjtcXHU0MDI0ZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNTVcXHUwMjgwO2VtcHNcXHUwMzBiXFx1MWQyZFxcdTFkMzdcXHUxZDNkXFx1MWQ0MnFcXHUwMTAwO2RcXHUwMzUyXFx1MWQzM290O1xcdTYyNTFpbnVzO1xcdTYyMzhsdXM7XFx1NjIxNHF1YXJlO1xcdTYyYTFibGViYXJ3ZWRnXFx4ZTVcXHhmYW5cXHUwMTgwYWRoXFx1MTEyZVxcdTFkNWRcXHUxZDY3b3duYXJyb3dcXHhmM1xcdTFjODNhcnBvb25cXHUwMTAwbHJcXHUxZDcyXFx1MWQ3NmVmXFx4ZjRcXHUxY2I0aWdoXFx4ZjRcXHUxY2I2XFx1MDE2MlxcdTFkN2ZcXHUxZDg1a2Fyb1xceGY3XFx1MGY0MlxcdTAyNmZcXHUxZDhhXFwwXFwwXFx1MWQ4ZXJuO1xcdTYzMWZvcDtcXHU2MzBjXFx1MDE4MGNvdFxcdTFkOThcXHUxZGEzXFx1MWRhNlxcdTAxMDByeVxcdTFkOWRcXHUxZGExO1xcdWMwMDBcXHVkODM1XFx1ZGNiOTtcXHU0NDU1bDtcXHU2OWY2cm9rO1xcdTQxMTFcXHUwMTAwZHJcXHUxZGIwXFx1MWRiNG90O1xcdTYyZjFpXFx1MDEwMDtmXFx1MWRiYVxcdTE4MTZcXHU2NWJmXFx1MDEwMGFoXFx1MWRjMFxcdTFkYzNyXFx4ZjJcXHUwNDI5YVxceGYyXFx1MGZhNmFuZ2xlO1xcdTY5YTZcXHUwMTAwY2lcXHUxZGQyXFx1MWRkNXk7XFx1NDQ1ZmdyYXJyO1xcdTY3ZmZcXHUwOTAwRGFjZGVmZ2xtbm9wcXJzdHV4XFx1MWUwMVxcdTFlMDlcXHUxZTE5XFx1MWUzOFxcdTA1NzhcXHUxZTNjXFx1MWU0OVxcdTFlNjFcXHUxZTdlXFx1MWVhNVxcdTFlYWZcXHUxZWJkXFx1MWVlMVxcdTFmMmFcXHUxZjM3XFx1MWY0NFxcdTFmNGVcXHUxZjVhXFx1MDEwMERvXFx1MWUwNlxcdTFkMzRvXFx4ZjRcXHUxYzg5XFx1MDEwMGNzXFx1MWUwZVxcdTFlMTR1dGVcXHU4MDNiXFx4ZTlcXHU0MGU5dGVyO1xcdTZhNmVcXHUwMjAwYWlveVxcdTFlMjJcXHUxZTI3XFx1MWUzMVxcdTFlMzZyb247XFx1NDExYnJcXHUwMTAwO2NcXHUxZTJkXFx1MWUyZVxcdTYyNTZcXHU4MDNiXFx4ZWFcXHU0MGVhbG9uO1xcdTYyNTU7XFx1NDQ0ZG90O1xcdTQxMTdcXHUwMTAwRHJcXHUxZTQxXFx1MWU0NW90O1xcdTYyNTI7XFx1YzAwMFxcdWQ4MzVcXHVkZDIyXFx1MDE4MDtyc1xcdTFlNTBcXHUxZTUxXFx1MWU1N1xcdTZhOWFhdmVcXHU4MDNiXFx4ZThcXHU0MGU4XFx1MDEwMDtkXFx1MWU1Y1xcdTFlNWRcXHU2YTk2b3Q7XFx1NmE5OFxcdTAyMDA7aWxzXFx1MWU2YVxcdTFlNmJcXHUxZTcyXFx1MWU3NFxcdTZhOTludGVycztcXHU2M2U3O1xcdTYxMTNcXHUwMTAwO2RcXHUxZTc5XFx1MWU3YVxcdTZhOTVvdDtcXHU2YTk3XFx1MDE4MGFwc1xcdTFlODVcXHUxZTg5XFx1MWU5N2NyO1xcdTQxMTN0eVxcdTAxODA7c3ZcXHUxZTkyXFx1MWU5M1xcdTFlOTVcXHU2MjA1ZXRcXHhiYlxcdTFlOTNwXFx1MDEwMDE7XFx1MWU5ZFxcdTFlYTRcXHUwMTMzXFx1MWVhMVxcdTFlYTM7XFx1NjAwNDtcXHU2MDA1XFx1NjAwM1xcdTAxMDBnc1xcdTFlYWFcXHUxZWFjO1xcdTQxNGJwO1xcdTYwMDJcXHUwMTAwZ3BcXHUxZWI0XFx1MWViOG9uO1xcdTQxMTlmO1xcdWMwMDBcXHVkODM1XFx1ZGQ1NlxcdTAxODBhbHNcXHUxZWM0XFx1MWVjZVxcdTFlZDJyXFx1MDEwMDtzXFx1MWVjYVxcdTFlY2JcXHU2MmQ1bDtcXHU2OWUzdXM7XFx1NmE3MWlcXHUwMTgwO2x2XFx1MWVkYVxcdTFlZGJcXHUxZWRmXFx1NDNiNW9uXFx4YmJcXHUxZWRiO1xcdTQzZjVcXHUwMjAwY3N1dlxcdTFlZWFcXHUxZWYzXFx1MWYwYlxcdTFmMjNcXHUwMTAwaW9cXHUxZWVmXFx1MWUzMXJjXFx4YmJcXHUxZTJlXFx1MDI2OVxcdTFlZjlcXDBcXDBcXHUxZWZiXFx4ZWRcXHUwNTQ4YW50XFx1MDEwMGdsXFx1MWYwMlxcdTFmMDZ0clxceGJiXFx1MWU1ZGVzc1xceGJiXFx1MWU3YVxcdTAxODBhZWlcXHUxZjEyXFx1MWYxNlxcdTFmMWFscztcXHU0MDNkc3Q7XFx1NjI1ZnZcXHUwMTAwO0RcXHUwMjM1XFx1MWYyMEQ7XFx1NmE3OHBhcnNsO1xcdTY5ZTVcXHUwMTAwRGFcXHUxZjJmXFx1MWYzM290O1xcdTYyNTNycjtcXHU2OTcxXFx1MDE4MGNkaVxcdTFmM2VcXHUxZjQxXFx1MWVmOHI7XFx1NjEyZm9cXHhmNFxcdTAzNTJcXHUwMTAwYWhcXHUxZjQ5XFx1MWY0YjtcXHU0M2I3XFx1ODAzYlxceGYwXFx1NDBmMFxcdTAxMDBtclxcdTFmNTNcXHUxZjU3bFxcdTgwM2JcXHhlYlxcdTQwZWJvO1xcdTYwYWNcXHUwMTgwY2lwXFx1MWY2MVxcdTFmNjRcXHUxZjY3bDtcXHU0MDIxc1xceGY0XFx1MDU2ZVxcdTAxMDBlb1xcdTFmNmNcXHUxZjc0Y3RhdGlvXFx4ZWVcXHUwNTU5bmVudGlhbFxceGU1XFx1MDU3OVxcdTA5ZTFcXHUxZjkyXFwwXFx1MWY5ZVxcMFxcdTFmYTFcXHUxZmE3XFwwXFwwXFx1MWZjNlxcdTFmY2NcXDBcXHUxZmQzXFwwXFx1MWZlNlxcdTFmZWFcXHUyMDAwXFwwXFx1MjAwOFxcdTIwNWFsbGluZ2RvdHNlXFx4ZjFcXHUxZTQ0eTtcXHU0NDQ0bWFsZTtcXHU2NjQwXFx1MDE4MGlsclxcdTFmYWRcXHUxZmIzXFx1MWZjMWxpZztcXHU4MDAwXFx1ZmIwM1xcdTAyNjlcXHUxZmI5XFwwXFwwXFx1MWZiZGc7XFx1ODAwMFxcdWZiMDBpZztcXHU4MDAwXFx1ZmIwNDtcXHVjMDAwXFx1ZDgzNVxcdWRkMjNsaWc7XFx1ODAwMFxcdWZiMDFsaWc7XFx1YzAwMGZqXFx1MDE4MGFsdFxcdTFmZDlcXHUxZmRjXFx1MWZlMXQ7XFx1NjY2ZGlnO1xcdTgwMDBcXHVmYjAybnM7XFx1NjViMW9mO1xcdTQxOTJcXHUwMWYwXFx1MWZlZVxcMFxcdTFmZjNmO1xcdWMwMDBcXHVkODM1XFx1ZGQ1N1xcdTAxMDBha1xcdTA1YmZcXHUxZmY3XFx1MDEwMDt2XFx1MWZmY1xcdTFmZmRcXHU2MmQ0O1xcdTZhZDlhcnRpbnQ7XFx1NmEwZFxcdTAxMDBhb1xcdTIwMGNcXHUyMDU1XFx1MDEwMGNzXFx1MjAxMVxcdTIwNTJcXHUwM2IxXFx1MjAxYVxcdTIwMzBcXHUyMDM4XFx1MjA0NVxcdTIwNDhcXDBcXHUyMDUwXFx1MDNiMlxcdTIwMjJcXHUyMDI1XFx1MjAyN1xcdTIwMmFcXHUyMDJjXFwwXFx1MjAyZVxcdTgwM2JcXHhiZFxcdTQwYmQ7XFx1NjE1M1xcdTgwM2JcXHhiY1xcdTQwYmM7XFx1NjE1NTtcXHU2MTU5O1xcdTYxNWJcXHUwMWIzXFx1MjAzNFxcMFxcdTIwMzY7XFx1NjE1NDtcXHU2MTU2XFx1MDJiNFxcdTIwM2VcXHUyMDQxXFwwXFwwXFx1MjA0M1xcdTgwM2JcXHhiZVxcdTQwYmU7XFx1NjE1NztcXHU2MTVjNTtcXHU2MTU4XFx1MDFiNlxcdTIwNGNcXDBcXHUyMDRlO1xcdTYxNWE7XFx1NjE1ZDg7XFx1NjE1ZWw7XFx1NjA0NHduO1xcdTYzMjJjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYmJcXHUwODgwRWFiY2RlZmdpamxub3JzdHZcXHUyMDgyXFx1MjA4OVxcdTIwOWZcXHUyMGE1XFx1MjBiMFxcdTIwYjRcXHUyMGYwXFx1MjBmNVxcdTIwZmFcXHUyMGZmXFx1MjEwM1xcdTIxMTJcXHUyMTM4XFx1MDMxN1xcdTIxM2VcXHUyMTUyXFx1MjE5ZVxcdTAxMDA7bFxcdTA2NGRcXHUyMDg3O1xcdTZhOGNcXHUwMTgwY21wXFx1MjA5MFxcdTIwOTVcXHUyMDlkdXRlO1xcdTQxZjVtYVxcdTAxMDA7ZFxcdTIwOWNcXHUxY2RhXFx1NDNiMztcXHU2YTg2cmV2ZTtcXHU0MTFmXFx1MDEwMGl5XFx1MjBhYVxcdTIwYWVyYztcXHU0MTFkO1xcdTQ0MzNvdDtcXHU0MTIxXFx1MDIwMDtscXNcXHUwNjNlXFx1MDY0MlxcdTIwYmRcXHUyMGM5XFx1MDE4MDtxc1xcdTA2M2VcXHUwNjRjXFx1MjBjNGxhblxceGY0XFx1MDY2NVxcdTAyMDA7Y2RsXFx1MDY2NVxcdTIwZDJcXHUyMGQ1XFx1MjBlNWM7XFx1NmFhOW90XFx1MDEwMDtvXFx1MjBkY1xcdTIwZGRcXHU2YTgwXFx1MDEwMDtsXFx1MjBlMlxcdTIwZTNcXHU2YTgyO1xcdTZhODRcXHUwMTAwO2VcXHUyMGVhXFx1MjBlZFxcdWMwMDBcXHUyMmRiXFx1ZmUwMHM7XFx1NmE5NHI7XFx1YzAwMFxcdWQ4MzVcXHVkZDI0XFx1MDEwMDtnXFx1MDY3M1xcdTA2MWJtZWw7XFx1NjEzN2N5O1xcdTQ0NTNcXHUwMjAwO0VhalxcdTA2NWFcXHUyMTBjXFx1MjEwZVxcdTIxMTA7XFx1NmE5MjtcXHU2YWE1O1xcdTZhYTRcXHUwMjAwRWFlc1xcdTIxMWJcXHUyMTFkXFx1MjEyOVxcdTIxMzQ7XFx1NjI2OXBcXHUwMTAwO3BcXHUyMTIzXFx1MjEyNFxcdTZhOGFyb3hcXHhiYlxcdTIxMjRcXHUwMTAwO3FcXHUyMTJlXFx1MjEyZlxcdTZhODhcXHUwMTAwO3FcXHUyMTJlXFx1MjExYmltO1xcdTYyZTdwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNThcXHUwMTAwY2lcXHUyMTQzXFx1MjE0NnI7XFx1NjEwYW1cXHUwMTgwO2VsXFx1MDY2YlxcdTIxNGVcXHUyMTUwO1xcdTZhOGU7XFx1NmE5MFxcdTgzMDA+O2NkbHFyXFx1MDVlZVxcdTIxNjBcXHUyMTZhXFx1MjE2ZVxcdTIxNzNcXHUyMTc5XFx1MDEwMGNpXFx1MjE2NVxcdTIxNjc7XFx1NmFhN3I7XFx1NmE3YW90O1xcdTYyZDdQYXI7XFx1Njk5NXVlc3Q7XFx1NmE3Y1xcdTAyODBhZGVsc1xcdTIxODRcXHUyMTZhXFx1MjE5MFxcdTA2NTZcXHUyMTliXFx1MDFmMFxcdTIxODlcXDBcXHUyMThlcHJvXFx4ZjhcXHUyMDllcjtcXHU2OTc4cVxcdTAxMDBscVxcdTA2M2ZcXHUyMTk2bGVzXFx4ZjNcXHUyMDg4aVxceGVkXFx1MDY2YlxcdTAxMDBlblxcdTIxYTNcXHUyMWFkcnRuZXFxO1xcdWMwMDBcXHUyMjY5XFx1ZmUwMFxceGM1XFx1MjFhYVxcdTA1MDBBYWJjZWZrb3N5XFx1MjFjNFxcdTIxYzdcXHUyMWYxXFx1MjFmNVxcdTIxZmFcXHUyMjE4XFx1MjIxZFxcdTIyMmZcXHUyMjY4XFx1MjI3ZHJcXHhmMlxcdTAzYTBcXHUwMjAwaWxtclxcdTIxZDBcXHUyMWQ0XFx1MjFkN1xcdTIxZGJyc1xceGYwXFx1MTQ4NGZcXHhiYlxcdTIwMjRpbFxceGY0XFx1MDZhOVxcdTAxMDBkclxcdTIxZTBcXHUyMWU0Y3k7XFx1NDQ0YVxcdTAxODA7Y3dcXHUwOGY0XFx1MjFlYlxcdTIxZWZpcjtcXHU2OTQ4O1xcdTYxYWRhcjtcXHU2MTBmaXJjO1xcdTQxMjVcXHUwMTgwYWxyXFx1MjIwMVxcdTIyMGVcXHUyMjEzcnRzXFx1MDEwMDt1XFx1MjIwOVxcdTIyMGFcXHU2NjY1aXRcXHhiYlxcdTIyMGFsaXA7XFx1NjAyNmNvbjtcXHU2MmI5cjtcXHVjMDAwXFx1ZDgzNVxcdWRkMjVzXFx1MDEwMGV3XFx1MjIyM1xcdTIyMjlhcm93O1xcdTY5MjVhcm93O1xcdTY5MjZcXHUwMjgwYW1vcHJcXHUyMjNhXFx1MjIzZVxcdTIyNDNcXHUyMjVlXFx1MjI2M3JyO1xcdTYxZmZ0aHQ7XFx1NjIzYmtcXHUwMTAwbHJcXHUyMjQ5XFx1MjI1M2VmdGFycm93O1xcdTYxYTlpZ2h0YXJyb3c7XFx1NjFhYWY7XFx1YzAwMFxcdWQ4MzVcXHVkZDU5YmFyO1xcdTYwMTVcXHUwMTgwY2x0XFx1MjI2ZlxcdTIyNzRcXHUyMjc4cjtcXHVjMDAwXFx1ZDgzNVxcdWRjYmRhc1xceGU4XFx1MjFmNHJvaztcXHU0MTI3XFx1MDEwMGJwXFx1MjI4MlxcdTIyODd1bGw7XFx1NjA0M2hlblxceGJiXFx1MWM1YlxcdTBhZTFcXHUyMmEzXFwwXFx1MjJhYVxcMFxcdTIyYjhcXHUyMmM1XFx1MjJjZVxcMFxcdTIyZDVcXHUyMmYzXFwwXFwwXFx1MjJmOFxcdTIzMjJcXHUyMzY3XFx1MjM2MlxcdTIzN2ZcXDBcXHUyMzg2XFx1MjNhYVxcdTIzYjRjdXRlXFx1ODAzYlxceGVkXFx1NDBlZFxcdTAxODA7aXlcXHUwNzcxXFx1MjJiMFxcdTIyYjVyY1xcdTgwM2JcXHhlZVxcdTQwZWU7XFx1NDQzOFxcdTAxMDBjeFxcdTIyYmNcXHUyMmJmeTtcXHU0NDM1Y2xcXHU4MDNiXFx4YTFcXHU0MGExXFx1MDEwMGZyXFx1MDM5ZlxcdTIyYzk7XFx1YzAwMFxcdWQ4MzVcXHVkZDI2cmF2ZVxcdTgwM2JcXHhlY1xcdTQwZWNcXHUwMjAwO2lub1xcdTA3M2VcXHUyMmRkXFx1MjJlOVxcdTIyZWVcXHUwMTAwaW5cXHUyMmUyXFx1MjJlNm50O1xcdTZhMGN0O1xcdTYyMmRmaW47XFx1NjlkY3RhO1xcdTYxMjlsaWc7XFx1NDEzM1xcdTAxODBhb3BcXHUyMmZlXFx1MjMxYVxcdTIzMWRcXHUwMTgwY2d0XFx1MjMwNVxcdTIzMDhcXHUyMzE3cjtcXHU0MTJiXFx1MDE4MGVscFxcdTA3MWZcXHUyMzBmXFx1MjMxM2luXFx4ZTVcXHUwNzhlYXJcXHhmNFxcdTA3MjBoO1xcdTQxMzFmO1xcdTYyYjdlZDtcXHU0MWI1XFx1MDI4MDtjZm90XFx1MDRmNFxcdTIzMmNcXHUyMzMxXFx1MjMzZFxcdTIzNDFhcmU7XFx1NjEwNWluXFx1MDEwMDt0XFx1MjMzOFxcdTIzMzlcXHU2MjFlaWU7XFx1NjlkZGRvXFx4ZjRcXHUyMzE5XFx1MDI4MDtjZWxwXFx1MDc1N1xcdTIzNGNcXHUyMzUwXFx1MjM1YlxcdTIzNjFhbDtcXHU2MmJhXFx1MDEwMGdyXFx1MjM1NVxcdTIzNTllclxceGYzXFx1MTU2M1xceGUzXFx1MjM0ZGFyaGs7XFx1NmExN3JvZDtcXHU2YTNjXFx1MDIwMGNncHRcXHUyMzZmXFx1MjM3MlxcdTIzNzZcXHUyMzdieTtcXHU0NDUxb247XFx1NDEyZmY7XFx1YzAwMFxcdWQ4MzVcXHVkZDVhYTtcXHU0M2I5dWVzdFxcdTgwM2JcXHhiZlxcdTQwYmZcXHUwMTAwY2lcXHUyMzhhXFx1MjM4ZnI7XFx1YzAwMFxcdWQ4MzVcXHVkY2JlblxcdTAyODA7RWRzdlxcdTA0ZjRcXHUyMzliXFx1MjM5ZFxcdTIzYTFcXHUwNGYzO1xcdTYyZjlvdDtcXHU2MmY1XFx1MDEwMDt2XFx1MjNhNlxcdTIzYTdcXHU2MmY0O1xcdTYyZjNcXHUwMTAwO2lcXHUwNzc3XFx1MjNhZWxkZTtcXHU0MTI5XFx1MDFlYlxcdTIzYjhcXDBcXHUyM2JjY3k7XFx1NDQ1NmxcXHU4MDNiXFx4ZWZcXHU0MGVmXFx1MDMwMGNmbW9zdVxcdTIzY2NcXHUyM2Q3XFx1MjNkY1xcdTIzZTFcXHUyM2U3XFx1MjNmNVxcdTAxMDBpeVxcdTIzZDFcXHUyM2Q1cmM7XFx1NDEzNTtcXHU0NDM5cjtcXHVjMDAwXFx1ZDgzNVxcdWRkMjdhdGg7XFx1NDIzN3BmO1xcdWMwMDBcXHVkODM1XFx1ZGQ1YlxcdTAxZTNcXHUyM2VjXFwwXFx1MjNmMXI7XFx1YzAwMFxcdWQ4MzVcXHVkY2JmcmN5O1xcdTQ0NThrY3k7XFx1NDQ1NFxcdTA0MDBhY2ZnaGpvc1xcdTI0MGJcXHUyNDE2XFx1MjQyMlxcdTI0MjdcXHUyNDJkXFx1MjQzMVxcdTI0MzVcXHUyNDNicHBhXFx1MDEwMDt2XFx1MjQxM1xcdTI0MTRcXHU0M2JhO1xcdTQzZjBcXHUwMTAwZXlcXHUyNDFiXFx1MjQyMGRpbDtcXHU0MTM3O1xcdTQ0M2FyO1xcdWMwMDBcXHVkODM1XFx1ZGQyOHJlZW47XFx1NDEzOGN5O1xcdTQ0NDVjeTtcXHU0NDVjcGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDVjY3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2MwXFx1MGI4MEFCRUhhYmNkZWZnaGpsbW5vcHJzdHV2XFx1MjQ3MFxcdTI0ODFcXHUyNDg2XFx1MjQ4ZFxcdTI0OTFcXHUyNTBlXFx1MjUzZFxcdTI1NWFcXHUyNTgwXFx1MjY0ZVxcdTI2NWVcXHUyNjY1XFx1MjY3OVxcdTI2N2RcXHUyNjlhXFx1MjZiMlxcdTI2ZDhcXHUyNzVkXFx1Mjc2OFxcdTI3OGJcXHUyN2MwXFx1MjgwMVxcdTI4MTJcXHUwMTgwYXJ0XFx1MjQ3N1xcdTI0N2FcXHUyNDdjclxceGYyXFx1MDljNlxceGYyXFx1MDM5NWFpbDtcXHU2OTFiYXJyO1xcdTY5MGVcXHUwMTAwO2dcXHUwOTk0XFx1MjQ4YjtcXHU2YThiYXI7XFx1Njk2MlxcdTA5NjNcXHUyNGE1XFwwXFx1MjRhYVxcMFxcdTI0YjFcXDBcXDBcXDBcXDBcXDBcXHUyNGI1XFx1MjRiYVxcMFxcdTI0YzZcXHUyNGM4XFx1MjRjZFxcMFxcdTI0Zjl1dGU7XFx1NDEzYW1wdHl2O1xcdTY5YjRyYVxceGVlXFx1MDg0Y2JkYTtcXHU0M2JiZ1xcdTAxODA7ZGxcXHUwODhlXFx1MjRjMVxcdTI0YzM7XFx1Njk5MVxceGU1XFx1MDg4ZTtcXHU2YTg1dW9cXHU4MDNiXFx4YWJcXHU0MGFiclxcdTA0MDA7YmZobHBzdFxcdTA4OTlcXHUyNGRlXFx1MjRlNlxcdTI0ZTlcXHUyNGViXFx1MjRlZVxcdTI0ZjFcXHUyNGY1XFx1MDEwMDtmXFx1MDg5ZFxcdTI0ZTNzO1xcdTY5MWZzO1xcdTY5MWRcXHhlYlxcdTIyNTJwO1xcdTYxYWJsO1xcdTY5MzlpbTtcXHU2OTczbDtcXHU2MWEyXFx1MDE4MDthZVxcdTI0ZmZcXHUyNTAwXFx1MjUwNFxcdTZhYWJpbDtcXHU2OTE5XFx1MDEwMDtzXFx1MjUwOVxcdTI1MGFcXHU2YWFkO1xcdWMwMDBcXHUyYWFkXFx1ZmUwMFxcdTAxODBhYnJcXHUyNTE1XFx1MjUxOVxcdTI1MWRycjtcXHU2OTBjcms7XFx1Njc3MlxcdTAxMDBha1xcdTI1MjJcXHUyNTJjY1xcdTAxMDBla1xcdTI1MjhcXHUyNTJhO1xcdTQwN2I7XFx1NDA1YlxcdTAxMDBlc1xcdTI1MzFcXHUyNTMzO1xcdTY5OGJsXFx1MDEwMGR1XFx1MjUzOVxcdTI1M2I7XFx1Njk4ZjtcXHU2OThkXFx1MDIwMGFldXlcXHUyNTQ2XFx1MjU0YlxcdTI1NTZcXHUyNTU4cm9uO1xcdTQxM2VcXHUwMTAwZGlcXHUyNTUwXFx1MjU1NGlsO1xcdTQxM2NcXHhlY1xcdTA4YjBcXHhlMlxcdTI1Mjk7XFx1NDQzYlxcdTAyMDBjcXJzXFx1MjU2M1xcdTI1NjZcXHUyNTZkXFx1MjU3ZGE7XFx1NjkzNnVvXFx1MDEwMDtyXFx1MGUxOVxcdTE3NDZcXHUwMTAwZHVcXHUyNTcyXFx1MjU3N2hhcjtcXHU2OTY3c2hhcjtcXHU2OTRiaDtcXHU2MWIyXFx1MDI4MDtmZ3FzXFx1MjU4YlxcdTI1OGNcXHUwOTg5XFx1MjVmM1xcdTI1ZmZcXHU2MjY0dFxcdTAyODBhaGxydFxcdTI1OThcXHUyNWE0XFx1MjViN1xcdTI1YzJcXHUyNWU4cnJvd1xcdTAxMDA7dFxcdTA4OTlcXHUyNWExYVxceGU5XFx1MjRmNmFycG9vblxcdTAxMDBkdVxcdTI1YWZcXHUyNWI0b3duXFx4YmJcXHUwNDVhcFxceGJiXFx1MDk2NmVmdGFycm93cztcXHU2MWM3aWdodFxcdTAxODBhaHNcXHUyNWNkXFx1MjVkNlxcdTI1ZGVycm93XFx1MDEwMDtzXFx1MDhmNFxcdTA4YTdhcnBvb25cXHhmM1xcdTBmOThxdWlnYXJyb1xceGY3XFx1MjFmMGhyZWV0aW1lcztcXHU2MmNiXFx1MDE4MDtxc1xcdTI1OGJcXHUwOTkzXFx1MjVmYWxhblxceGY0XFx1MDlhY1xcdTAyODA7Y2Rnc1xcdTA5YWNcXHUyNjBhXFx1MjYwZFxcdTI2MWRcXHUyNjI4YztcXHU2YWE4b3RcXHUwMTAwO29cXHUyNjE0XFx1MjYxNVxcdTZhN2ZcXHUwMTAwO3JcXHUyNjFhXFx1MjYxYlxcdTZhODE7XFx1NmE4M1xcdTAxMDA7ZVxcdTI2MjJcXHUyNjI1XFx1YzAwMFxcdTIyZGFcXHVmZTAwcztcXHU2YTkzXFx1MDI4MGFkZWdzXFx1MjYzM1xcdTI2MzlcXHUyNjNkXFx1MjY0OVxcdTI2NGJwcHJvXFx4ZjhcXHUyNGM2b3Q7XFx1NjJkNnFcXHUwMTAwZ3FcXHUyNjQzXFx1MjY0NVxceGY0XFx1MDk4OWd0XFx4ZjJcXHUyNDhjXFx4ZjRcXHUwOTliaVxceGVkXFx1MDliMlxcdTAxODBpbHJcXHUyNjU1XFx1MDhlMVxcdTI2NWFzaHQ7XFx1Njk3YztcXHVjMDAwXFx1ZDgzNVxcdWRkMjlcXHUwMTAwO0VcXHUwOTljXFx1MjY2MztcXHU2YTkxXFx1MDE2MVxcdTI2NjlcXHUyNjc2clxcdTAxMDBkdVxcdTI1YjJcXHUyNjZlXFx1MDEwMDtsXFx1MDk2NVxcdTI2NzM7XFx1Njk2YWxrO1xcdTY1ODRjeTtcXHU0NDU5XFx1MDI4MDthY2h0XFx1MGE0OFxcdTI2ODhcXHUyNjhiXFx1MjY5MVxcdTI2OTZyXFx4ZjJcXHUyNWMxb3JuZVxceGYyXFx1MWQwOGFyZDtcXHU2OTZicmk7XFx1NjVmYVxcdTAxMDBpb1xcdTI2OWZcXHUyNmE0ZG90O1xcdTQxNDB1c3RcXHUwMTAwO2FcXHUyNmFjXFx1MjZhZFxcdTYzYjBjaGVcXHhiYlxcdTI2YWRcXHUwMjAwRWFlc1xcdTI2YmJcXHUyNmJkXFx1MjZjOVxcdTI2ZDQ7XFx1NjI2OHBcXHUwMTAwO3BcXHUyNmMzXFx1MjZjNFxcdTZhODlyb3hcXHhiYlxcdTI2YzRcXHUwMTAwO3FcXHUyNmNlXFx1MjZjZlxcdTZhODdcXHUwMTAwO3FcXHUyNmNlXFx1MjZiYmltO1xcdTYyZTZcXHUwNDAwYWJub3B0d3pcXHUyNmU5XFx1MjZmNFxcdTI2ZjdcXHUyNzFhXFx1MjcyZlxcdTI3NDFcXHUyNzQ3XFx1Mjc1MFxcdTAxMDBuclxcdTI2ZWVcXHUyNmYxZztcXHU2N2VjcjtcXHU2MWZkclxceGViXFx1MDhjMWdcXHUwMTgwbG1yXFx1MjZmZlxcdTI3MGRcXHUyNzE0ZWZ0XFx1MDEwMGFyXFx1MDllNlxcdTI3MDdpZ2h0XFx4ZTFcXHUwOWYyYXBzdG87XFx1NjdmY2lnaHRcXHhlMVxcdTA5ZmRwYXJyb3dcXHUwMTAwbHJcXHUyNzI1XFx1MjcyOWVmXFx4ZjRcXHUyNGVkaWdodDtcXHU2MWFjXFx1MDE4MGFmbFxcdTI3MzZcXHUyNzM5XFx1MjczZHI7XFx1Njk4NTtcXHVjMDAwXFx1ZDgzNVxcdWRkNWR1cztcXHU2YTJkaW1lcztcXHU2YTM0XFx1MDE2MVxcdTI3NGJcXHUyNzRmc3Q7XFx1NjIxN1xceGUxXFx1MTM0ZVxcdTAxODA7ZWZcXHUyNzU3XFx1Mjc1OFxcdTE4MDBcXHU2NWNhbmdlXFx4YmJcXHUyNzU4YXJcXHUwMTAwO2xcXHUyNzY0XFx1Mjc2NVxcdTQwMjh0O1xcdTY5OTNcXHUwMjgwYWNobXRcXHUyNzczXFx1Mjc3NlxcdTI3N2NcXHUyNzg1XFx1Mjc4N3JcXHhmMlxcdTA4YThvcm5lXFx4ZjJcXHUxZDhjYXJcXHUwMTAwO2RcXHUwZjk4XFx1Mjc4MztcXHU2OTZkO1xcdTYwMGVyaTtcXHU2MmJmXFx1MDMwMGFjaGlxdFxcdTI3OThcXHUyNzlkXFx1MGE0MFxcdTI3YTJcXHUyN2FlXFx1MjdiYnF1bztcXHU2MDM5cjtcXHVjMDAwXFx1ZDgzNVxcdWRjYzFtXFx1MDE4MDtlZ1xcdTA5YjJcXHUyN2FhXFx1MjdhYztcXHU2YThkO1xcdTZhOGZcXHUwMTAwYnVcXHUyNTJhXFx1MjdiM29cXHUwMTAwO3JcXHUwZTFmXFx1MjdiOTtcXHU2MDFhcm9rO1xcdTQxNDJcXHU4NDAwPDtjZGhpbHFyXFx1MDgyYlxcdTI3ZDJcXHUyNjM5XFx1MjdkY1xcdTI3ZTBcXHUyN2U1XFx1MjdlYVxcdTI3ZjBcXHUwMTAwY2lcXHUyN2Q3XFx1MjdkOTtcXHU2YWE2cjtcXHU2YTc5cmVcXHhlNVxcdTI1ZjJtZXM7XFx1NjJjOWFycjtcXHU2OTc2dWVzdDtcXHU2YTdiXFx1MDEwMFBpXFx1MjdmNVxcdTI3ZjlhcjtcXHU2OTk2XFx1MDE4MDtlZlxcdTI4MDBcXHUwOTJkXFx1MTgxYlxcdTY1YzNyXFx1MDEwMGR1XFx1MjgwN1xcdTI4MGRzaGFyO1xcdTY5NGFoYXI7XFx1Njk2NlxcdTAxMDBlblxcdTI4MTdcXHUyODIxcnRuZXFxO1xcdWMwMDBcXHUyMjY4XFx1ZmUwMFxceGM1XFx1MjgxZVxcdTA3MDBEYWNkZWZoaWxub3BzdVxcdTI4NDBcXHUyODQ1XFx1Mjg4MlxcdTI4OGVcXHUyODkzXFx1MjhhMFxcdTI4YTVcXHUyOGE4XFx1MjhkYVxcdTI4ZTJcXHUyOGU0XFx1MGE4M1xcdTI4ZjNcXHUyOTAyRG90O1xcdTYyM2FcXHUwMjAwY2xwclxcdTI4NGVcXHUyODUyXFx1Mjg2M1xcdTI4N2RyXFx1ODAzYlxceGFmXFx1NDBhZlxcdTAxMDBldFxcdTI4NTdcXHUyODU5O1xcdTY2NDJcXHUwMTAwO2VcXHUyODVlXFx1Mjg1ZlxcdTY3MjBzZVxceGJiXFx1Mjg1ZlxcdTAxMDA7c1xcdTEwM2JcXHUyODY4dG9cXHUwMjAwO2RsdVxcdTEwM2JcXHUyODczXFx1Mjg3N1xcdTI4N2Jvd1xceGVlXFx1MDQ4Y2VmXFx4ZjRcXHUwOTBmXFx4ZjBcXHUxM2Qxa2VyO1xcdTY1YWVcXHUwMTAwb3lcXHUyODg3XFx1Mjg4Y21tYTtcXHU2YTI5O1xcdTQ0M2Nhc2g7XFx1NjAxNGFzdXJlZGFuZ2xlXFx4YmJcXHUxNjI2cjtcXHVjMDAwXFx1ZDgzNVxcdWRkMmFvO1xcdTYxMjdcXHUwMTgwY2RuXFx1MjhhZlxcdTI4YjRcXHUyOGM5cm9cXHU4MDNiXFx4YjVcXHU0MGI1XFx1MDIwMDthY2RcXHUxNDY0XFx1MjhiZFxcdTI4YzBcXHUyOGM0c1xceGY0XFx1MTZhN2lyO1xcdTZhZjBvdFxcdTgwYmJcXHhiN1xcdTAxYjV1c1xcdTAxODA7YmRcXHUyOGQyXFx1MTkwM1xcdTI4ZDNcXHU2MjEyXFx1MDEwMDt1XFx1MWQzY1xcdTI4ZDg7XFx1NmEyYVxcdTAxNjNcXHUyOGRlXFx1MjhlMXA7XFx1NmFkYlxceGYyXFx1MjIxMlxceGYwXFx1MGE4MVxcdTAxMDBkcFxcdTI4ZTlcXHUyOGVlZWxzO1xcdTYyYTdmO1xcdWMwMDBcXHVkODM1XFx1ZGQ1ZVxcdTAxMDBjdFxcdTI4ZjhcXHUyOGZkcjtcXHVjMDAwXFx1ZDgzNVxcdWRjYzJwb3NcXHhiYlxcdTE1OWRcXHUwMTgwO2xtXFx1MjkwOVxcdTI5MGFcXHUyOTBkXFx1NDNiY3RpbWFwO1xcdTYyYjhcXHUwYzAwR0xSVmFiY2RlZmdoaWpsbW9wcnN0dXZ3XFx1Mjk0MlxcdTI5NTNcXHUyOTdlXFx1Mjk4OVxcdTI5OThcXHUyOWRhXFx1MjllOVxcdTJhMTVcXHUyYTFhXFx1MmE1OFxcdTJhNWRcXHUyYTgzXFx1MmE5NVxcdTJhYTRcXHUyYWE4XFx1MmIwNFxcdTJiMDdcXHUyYjQ0XFx1MmI3ZlxcdTJiYWVcXHUyYzM0XFx1MmM2N1xcdTJjN2NcXHUyY2U5XFx1MDEwMGd0XFx1Mjk0N1xcdTI5NGI7XFx1YzAwMFxcdTIyZDlcXHUwMzM4XFx1MDEwMDt2XFx1Mjk1MFxcdTBiY2ZcXHVjMDAwXFx1MjI2YlxcdTIwZDJcXHUwMTgwZWx0XFx1Mjk1YVxcdTI5NzJcXHUyOTc2ZnRcXHUwMTAwYXJcXHUyOTYxXFx1Mjk2N3Jyb3c7XFx1NjFjZGlnaHRhcnJvdztcXHU2MWNlO1xcdWMwMDBcXHUyMmQ4XFx1MDMzOFxcdTAxMDA7dlxcdTI5N2JcXHUwYzQ3XFx1YzAwMFxcdTIyNmFcXHUyMGQyaWdodGFycm93O1xcdTYxY2ZcXHUwMTAwRGRcXHUyOThlXFx1Mjk5M2FzaDtcXHU2MmFmYXNoO1xcdTYyYWVcXHUwMjgwYmNucHRcXHUyOWEzXFx1MjlhN1xcdTI5YWNcXHUyOWIxXFx1MjljY2xhXFx4YmJcXHUwMmRldXRlO1xcdTQxNDRnO1xcdWMwMDBcXHUyMjIwXFx1MjBkMlxcdTAyODA7RWlvcFxcdTBkODRcXHUyOWJjXFx1MjljMFxcdTI5YzVcXHUyOWM4O1xcdWMwMDBcXHUyYTcwXFx1MDMzOGQ7XFx1YzAwMFxcdTIyNGJcXHUwMzM4cztcXHU0MTQ5cm9cXHhmOFxcdTBkODR1clxcdTAxMDA7YVxcdTI5ZDNcXHUyOWQ0XFx1NjY2ZWxcXHUwMTAwO3NcXHUyOWQzXFx1MGIzOFxcdTAxZjNcXHUyOWRmXFwwXFx1MjllM3BcXHU4MGJiXFx4YTBcXHUwYjM3bXBcXHUwMTAwO2VcXHUwYmY5XFx1MGMwMFxcdTAyODBhZW91eVxcdTI5ZjRcXHUyOWZlXFx1MmEwM1xcdTJhMTBcXHUyYTEzXFx1MDFmMFxcdTI5ZjlcXDBcXHUyOWZiO1xcdTZhNDNvbjtcXHU0MTQ4ZGlsO1xcdTQxNDZuZ1xcdTAxMDA7ZFxcdTBkN2VcXHUyYTBhb3Q7XFx1YzAwMFxcdTJhNmRcXHUwMzM4cDtcXHU2YTQyO1xcdTQ0M2Rhc2g7XFx1NjAxM1xcdTAzODA7QWFkcXN4XFx1MGI5MlxcdTJhMjlcXHUyYTJkXFx1MmEzYlxcdTJhNDFcXHUyYTQ1XFx1MmE1MHJyO1xcdTYxZDdyXFx1MDEwMGhyXFx1MmEzM1xcdTJhMzZrO1xcdTY5MjRcXHUwMTAwO29cXHUxM2YyXFx1MTNmMG90O1xcdWMwMDBcXHUyMjUwXFx1MDMzOHVpXFx4ZjZcXHUwYjYzXFx1MDEwMGVpXFx1MmE0YVxcdTJhNGVhcjtcXHU2OTI4XFx4ZWRcXHUwYjk4aXN0XFx1MDEwMDtzXFx1MGJhMFxcdTBiOWZyO1xcdWMwMDBcXHVkODM1XFx1ZGQyYlxcdTAyMDBFZXN0XFx1MGJjNVxcdTJhNjZcXHUyYTc5XFx1MmE3Y1xcdTAxODA7cXNcXHUwYmJjXFx1MmE2ZFxcdTBiZTFcXHUwMTgwO3FzXFx1MGJiY1xcdTBiYzVcXHUyYTc0bGFuXFx4ZjRcXHUwYmUyaVxceGVkXFx1MGJlYVxcdTAxMDA7clxcdTBiYjZcXHUyYTgxXFx4YmJcXHUwYmI3XFx1MDE4MEFhcFxcdTJhOGFcXHUyYThkXFx1MmE5MXJcXHhmMlxcdTI5NzFycjtcXHU2MWFlYXI7XFx1NmFmMlxcdTAxODA7c3ZcXHUwZjhkXFx1MmE5Y1xcdTBmOGNcXHUwMTAwO2RcXHUyYWExXFx1MmFhMlxcdTYyZmM7XFx1NjJmYWN5O1xcdTQ0NWFcXHUwMzgwQUVhZGVzdFxcdTJhYjdcXHUyYWJhXFx1MmFiZVxcdTJhYzJcXHUyYWM1XFx1MmFmNlxcdTJhZjlyXFx4ZjJcXHUyOTY2O1xcdWMwMDBcXHUyMjY2XFx1MDMzOHJyO1xcdTYxOWFyO1xcdTYwMjVcXHUwMjAwO2Zxc1xcdTBjM2JcXHUyYWNlXFx1MmFlM1xcdTJhZWZ0XFx1MDEwMGFyXFx1MmFkNFxcdTJhZDlycm9cXHhmN1xcdTJhYzFpZ2h0YXJyb1xceGY3XFx1MmE5MFxcdTAxODA7cXNcXHUwYzNiXFx1MmFiYVxcdTJhZWFsYW5cXHhmNFxcdTBjNTVcXHUwMTAwO3NcXHUwYzU1XFx1MmFmNFxceGJiXFx1MGMzNmlcXHhlZFxcdTBjNWRcXHUwMTAwO3JcXHUwYzM1XFx1MmFmZWlcXHUwMTAwO2VcXHUwYzFhXFx1MGMyNWlcXHhlNFxcdTBkOTBcXHUwMTAwcHRcXHUyYjBjXFx1MmIxMWY7XFx1YzAwMFxcdWQ4MzVcXHVkZDVmXFx1ODE4MFxceGFjO2luXFx1MmIxOVxcdTJiMWFcXHUyYjM2XFx1NDBhY25cXHUwMjAwO0VkdlxcdTBiODlcXHUyYjI0XFx1MmIyOFxcdTJiMmU7XFx1YzAwMFxcdTIyZjlcXHUwMzM4b3Q7XFx1YzAwMFxcdTIyZjVcXHUwMzM4XFx1MDFlMVxcdTBiODlcXHUyYjMzXFx1MmIzNTtcXHU2MmY3O1xcdTYyZjZpXFx1MDEwMDt2XFx1MGNiOFxcdTJiM2NcXHUwMWUxXFx1MGNiOFxcdTJiNDFcXHUyYjQzO1xcdTYyZmU7XFx1NjJmZFxcdTAxODBhb3JcXHUyYjRiXFx1MmI2M1xcdTJiNjlyXFx1MDIwMDthc3RcXHUwYjdiXFx1MmI1NVxcdTJiNWFcXHUyYjVmbGxlXFx4ZWNcXHUwYjdibDtcXHVjMDAwXFx1MmFmZFxcdTIwZTU7XFx1YzAwMFxcdTIyMDJcXHUwMzM4bGludDtcXHU2YTE0XFx1MDE4MDtjZVxcdTBjOTJcXHUyYjcwXFx1MmI3M3VcXHhlNVxcdTBjYTVcXHUwMTAwO2NcXHUwYzk4XFx1MmI3OFxcdTAxMDA7ZVxcdTBjOTJcXHUyYjdkXFx4ZjFcXHUwYzk4XFx1MDIwMEFhaXRcXHUyYjg4XFx1MmI4YlxcdTJiOWRcXHUyYmE3clxceGYyXFx1Mjk4OHJyXFx1MDE4MDtjd1xcdTJiOTRcXHUyYjk1XFx1MmI5OVxcdTYxOWI7XFx1YzAwMFxcdTI5MzNcXHUwMzM4O1xcdWMwMDBcXHUyMTlkXFx1MDMzOGdodGFycm93XFx4YmJcXHUyYjk1cmlcXHUwMTAwO2VcXHUwY2NiXFx1MGNkNlxcdTAzODBjaGltcHF1XFx1MmJiZFxcdTJiY2RcXHUyYmQ5XFx1MmIwNFxcdTBiNzhcXHUyYmU0XFx1MmJlZlxcdTAyMDA7Y2VyXFx1MGQzMlxcdTJiYzZcXHUwZDM3XFx1MmJjOXVcXHhlNVxcdTBkNDU7XFx1YzAwMFxcdWQ4MzVcXHVkY2Mzb3J0XFx1MDI2ZFxcdTJiMDVcXDBcXDBcXHUyYmQ2YXJcXHhlMVxcdTJiNTZtXFx1MDEwMDtlXFx1MGQ2ZVxcdTJiZGZcXHUwMTAwO3FcXHUwZDc0XFx1MGQ3M3N1XFx1MDEwMGJwXFx1MmJlYlxcdTJiZWRcXHhlNVxcdTBjZjhcXHhlNVxcdTBkMGJcXHUwMTgwYmNwXFx1MmJmNlxcdTJjMTFcXHUyYzE5XFx1MDIwMDtFZXNcXHUyYmZmXFx1MmMwMFxcdTBkMjJcXHUyYzA0XFx1NjI4NDtcXHVjMDAwXFx1MmFjNVxcdTAzMzhldFxcdTAxMDA7ZVxcdTBkMWJcXHUyYzBicVxcdTAxMDA7cVxcdTBkMjNcXHUyYzAwY1xcdTAxMDA7ZVxcdTBkMzJcXHUyYzE3XFx4ZjFcXHUwZDM4XFx1MDIwMDtFZXNcXHUyYzIyXFx1MmMyM1xcdTBkNWZcXHUyYzI3XFx1NjI4NTtcXHVjMDAwXFx1MmFjNlxcdTAzMzhldFxcdTAxMDA7ZVxcdTBkNThcXHUyYzJlcVxcdTAxMDA7cVxcdTBkNjBcXHUyYzIzXFx1MDIwMGdpbHJcXHUyYzNkXFx1MmMzZlxcdTJjNDVcXHUyYzQ3XFx4ZWNcXHUwYmQ3bGRlXFx1ODAzYlxceGYxXFx1NDBmMVxceGU3XFx1MGM0M2lhbmdsZVxcdTAxMDBsclxcdTJjNTJcXHUyYzVjZWZ0XFx1MDEwMDtlXFx1MGMxYVxcdTJjNWFcXHhmMVxcdTBjMjZpZ2h0XFx1MDEwMDtlXFx1MGNjYlxcdTJjNjVcXHhmMVxcdTBjZDdcXHUwMTAwO21cXHUyYzZjXFx1MmM2ZFxcdTQzYmRcXHUwMTgwO2VzXFx1MmM3NFxcdTJjNzVcXHUyYzc5XFx1NDAyM3JvO1xcdTYxMTZwO1xcdTYwMDdcXHUwNDgwREhhZGdpbHJzXFx1MmM4ZlxcdTJjOTRcXHUyYzk5XFx1MmM5ZVxcdTJjYTNcXHUyY2IwXFx1MmNiNlxcdTJjZDNcXHUyY2UzYXNoO1xcdTYyYWRhcnI7XFx1NjkwNHA7XFx1YzAwMFxcdTIyNGRcXHUyMGQyYXNoO1xcdTYyYWNcXHUwMTAwZXRcXHUyY2E4XFx1MmNhYztcXHVjMDAwXFx1MjI2NVxcdTIwZDI7XFx1YzAwMD5cXHUyMGQybmZpbjtcXHU2OWRlXFx1MDE4MEFldFxcdTJjYmRcXHUyY2MxXFx1MmNjNXJyO1xcdTY5MDI7XFx1YzAwMFxcdTIyNjRcXHUyMGQyXFx1MDEwMDtyXFx1MmNjYVxcdTJjY2RcXHVjMDAwPFxcdTIwZDJpZTtcXHVjMDAwXFx1MjJiNFxcdTIwZDJcXHUwMTAwQXRcXHUyY2Q4XFx1MmNkY3JyO1xcdTY5MDNyaWU7XFx1YzAwMFxcdTIyYjVcXHUyMGQyaW07XFx1YzAwMFxcdTIyM2NcXHUyMGQyXFx1MDE4MEFhblxcdTJjZjBcXHUyY2Y0XFx1MmQwMnJyO1xcdTYxZDZyXFx1MDEwMGhyXFx1MmNmYVxcdTJjZmRrO1xcdTY5MjNcXHUwMTAwO29cXHUxM2U3XFx1MTNlNWVhcjtcXHU2OTI3XFx1MTI1M1xcdTFhOTVcXDBcXDBcXDBcXDBcXDBcXDBcXDBcXDBcXDBcXDBcXDBcXDBcXDBcXHUyZDJkXFwwXFx1MmQzOFxcdTJkNDhcXHUyZDYwXFx1MmQ2NVxcdTJkNzJcXHUyZDg0XFx1MWIwN1xcMFxcMFxcdTJkOGRcXHUyZGFiXFwwXFx1MmRjOFxcdTJkY2VcXDBcXHUyZGRjXFx1MmUxOVxcdTJlMmJcXHUyZTNlXFx1MmU0M1xcdTAxMDBjc1xcdTJkMzFcXHUxYTk3dXRlXFx1ODAzYlxceGYzXFx1NDBmM1xcdTAxMDBpeVxcdTJkM2NcXHUyZDQ1clxcdTAxMDA7Y1xcdTFhOWVcXHUyZDQyXFx1ODAzYlxceGY0XFx1NDBmNDtcXHU0NDNlXFx1MDI4MGFiaW9zXFx1MWFhMFxcdTJkNTJcXHUyZDU3XFx1MDFjOFxcdTJkNWFsYWM7XFx1NDE1MXY7XFx1NmEzOG9sZDtcXHU2OWJjbGlnO1xcdTQxNTNcXHUwMTAwY3JcXHUyZDY5XFx1MmQ2ZGlyO1xcdTY5YmY7XFx1YzAwMFxcdWQ4MzVcXHVkZDJjXFx1MDM2ZlxcdTJkNzlcXDBcXDBcXHUyZDdjXFwwXFx1MmQ4Mm47XFx1NDJkYmF2ZVxcdTgwM2JcXHhmMlxcdTQwZjI7XFx1NjljMVxcdTAxMDBibVxcdTJkODhcXHUwZGY0YXI7XFx1NjliNVxcdTAyMDBhY2l0XFx1MmQ5NVxcdTJkOThcXHUyZGE1XFx1MmRhOHJcXHhmMlxcdTFhODBcXHUwMTAwaXJcXHUyZDlkXFx1MmRhMHI7XFx1NjliZW9zcztcXHU2OWJiblxceGU1XFx1MGU1MjtcXHU2OWMwXFx1MDE4MGFlaVxcdTJkYjFcXHUyZGI1XFx1MmRiOWNyO1xcdTQxNGRnYTtcXHU0M2M5XFx1MDE4MGNkblxcdTJkYzBcXHUyZGM1XFx1MDFjZHJvbjtcXHU0M2JmO1xcdTY5YjZwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNjBcXHUwMTgwYWVsXFx1MmRkNFxcdTJkZDdcXHUwMWQycjtcXHU2OWI3cnA7XFx1NjliOVxcdTAzODA7YWRpb3N2XFx1MmRlYVxcdTJkZWJcXHUyZGVlXFx1MmUwOFxcdTJlMGRcXHUyZTEwXFx1MmUxNlxcdTYyMjhyXFx4ZjJcXHUxYTg2XFx1MDIwMDtlZm1cXHUyZGY3XFx1MmRmOFxcdTJlMDJcXHUyZTA1XFx1NmE1ZHJcXHUwMTAwO29cXHUyZGZlXFx1MmRmZlxcdTYxMzRmXFx4YmJcXHUyZGZmXFx1ODAzYlxceGFhXFx1NDBhYVxcdTgwM2JcXHhiYVxcdTQwYmFnb2Y7XFx1NjJiNnI7XFx1NmE1NmxvcGU7XFx1NmE1NztcXHU2YTViXFx1MDE4MGNsb1xcdTJlMWZcXHUyZTIxXFx1MmUyN1xceGYyXFx1MmUwMWFzaFxcdTgwM2JcXHhmOFxcdTQwZjhsO1xcdTYyOThpXFx1MDE2Y1xcdTJlMmZcXHUyZTM0ZGVcXHU4MDNiXFx4ZjVcXHU0MGY1ZXNcXHUwMTAwO2FcXHUwMWRiXFx1MmUzYXM7XFx1NmEzNm1sXFx1ODAzYlxceGY2XFx1NDBmNmJhcjtcXHU2MzNkXFx1MGFlMVxcdTJlNWVcXDBcXHUyZTdkXFwwXFx1MmU4MFxcdTJlOWRcXDBcXHUyZWEyXFx1MmViOVxcMFxcMFxcdTJlY2JcXHUwZTljXFwwXFx1MmYxM1xcMFxcMFxcdTJmMmJcXHUyZmJjXFwwXFx1MmZjOHJcXHUwMjAwO2FzdFxcdTA0MDNcXHUyZTY3XFx1MmU3MlxcdTBlODVcXHU4MTAwXFx4YjY7bFxcdTJlNmRcXHUyZTZlXFx1NDBiNmxlXFx4ZWNcXHUwNDAzXFx1MDI2OVxcdTJlNzhcXDBcXDBcXHUyZTdibTtcXHU2YWYzO1xcdTZhZmR5O1xcdTQ0M2ZyXFx1MDI4MGNpbXB0XFx1MmU4YlxcdTJlOGZcXHUyZTkzXFx1MTg2NVxcdTJlOTdudDtcXHU0MDI1b2Q7XFx1NDAyZWlsO1xcdTYwMzBlbms7XFx1NjAzMXI7XFx1YzAwMFxcdWQ4MzVcXHVkZDJkXFx1MDE4MGltb1xcdTJlYThcXHUyZWIwXFx1MmViNFxcdTAxMDA7dlxcdTJlYWRcXHUyZWFlXFx1NDNjNjtcXHU0M2Q1bWFcXHhmNFxcdTBhNzZuZTtcXHU2NjBlXFx1MDE4MDt0dlxcdTJlYmZcXHUyZWMwXFx1MmVjOFxcdTQzYzBjaGZvcmtcXHhiYlxcdTFmZmQ7XFx1NDNkNlxcdTAxMDBhdVxcdTJlY2ZcXHUyZWRmblxcdTAxMDBja1xcdTJlZDVcXHUyZWRka1xcdTAxMDA7aFxcdTIxZjRcXHUyZWRiO1xcdTYxMGVcXHhmNlxcdTIxZjRzXFx1MDQ4MDthYmNkZW1zdFxcdTJlZjNcXHUyZWY0XFx1MTkwOFxcdTJlZjlcXHUyZWZkXFx1MmYwNFxcdTJmMDZcXHUyZjBhXFx1MmYwZVxcdTQwMmJjaXI7XFx1NmEyM2lyO1xcdTZhMjJcXHUwMTAwb3VcXHUxZDQwXFx1MmYwMjtcXHU2YTI1O1xcdTZhNzJuXFx1ODBiYlxceGIxXFx1MGU5ZGltO1xcdTZhMjZ3bztcXHU2YTI3XFx1MDE4MGlwdVxcdTJmMTlcXHUyZjIwXFx1MmYyNW50aW50O1xcdTZhMTVmO1xcdWMwMDBcXHVkODM1XFx1ZGQ2MW5kXFx1ODAzYlxceGEzXFx1NDBhM1xcdTA1MDA7RWFjZWlub3N1XFx1MGVjOFxcdTJmM2ZcXHUyZjQxXFx1MmY0NFxcdTJmNDdcXHUyZjgxXFx1MmY4OVxcdTJmOTJcXHUyZjdlXFx1MmZiNjtcXHU2YWIzcDtcXHU2YWI3dVxceGU1XFx1MGVkOVxcdTAxMDA7Y1xcdTBlY2VcXHUyZjRjXFx1MDMwMDthY2Vuc1xcdTBlYzhcXHUyZjU5XFx1MmY1ZlxcdTJmNjZcXHUyZjY4XFx1MmY3ZXBwcm9cXHhmOFxcdTJmNDN1cmx5ZVxceGYxXFx1MGVkOVxceGYxXFx1MGVjZVxcdTAxODBhZXNcXHUyZjZmXFx1MmY3NlxcdTJmN2FwcHJveDtcXHU2YWI5cXE7XFx1NmFiNWltO1xcdTYyZThpXFx4ZWRcXHUwZWRmbWVcXHUwMTAwO3NcXHUyZjg4XFx1MGVhZVxcdTYwMzJcXHUwMTgwRWFzXFx1MmY3OFxcdTJmOTBcXHUyZjdhXFx4ZjBcXHUyZjc1XFx1MDE4MGRmcFxcdTBlZWNcXHUyZjk5XFx1MmZhZlxcdTAxODBhbHNcXHUyZmEwXFx1MmZhNVxcdTJmYWFsYXI7XFx1NjMyZWluZTtcXHU2MzEydXJmO1xcdTYzMTNcXHUwMTAwO3RcXHUwZWZiXFx1MmZiNFxceGVmXFx1MGVmYnJlbDtcXHU2MmIwXFx1MDEwMGNpXFx1MmZjMFxcdTJmYzVyO1xcdWMwMDBcXHVkODM1XFx1ZGNjNTtcXHU0M2M4bmNzcDtcXHU2MDA4XFx1MDMwMGZpb3BzdVxcdTJmZGFcXHUyMmUyXFx1MmZkZlxcdTJmZTVcXHUyZmViXFx1MmZmMXI7XFx1YzAwMFxcdWQ4MzVcXHVkZDJlcGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDYycmltZTtcXHU2MDU3Y3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2M2XFx1MDE4MGFlb1xcdTJmZjhcXHUzMDA5XFx1MzAxM3RcXHUwMTAwZWlcXHUyZmZlXFx1MzAwNXJuaW9uXFx4ZjNcXHUwNmIwbnQ7XFx1NmExNnN0XFx1MDEwMDtlXFx1MzAxMFxcdTMwMTFcXHU0MDNmXFx4ZjFcXHUxZjE5XFx4ZjRcXHUwZjE0XFx1MGE4MEFCSGFiY2RlZmhpbG1ub3Byc3R1eFxcdTMwNDBcXHUzMDUxXFx1MzA1NVxcdTMwNTlcXHUzMGUwXFx1MzEwZVxcdTMxMmJcXHUzMTQ3XFx1MzE2MlxcdTMxNzJcXHUzMThlXFx1MzIwNlxcdTMyMTVcXHUzMjI0XFx1MzIyOVxcdTMyNThcXHUzMjZlXFx1MzI3MlxcdTMyOTBcXHUzMmIwXFx1MzJiN1xcdTAxODBhcnRcXHUzMDQ3XFx1MzA0YVxcdTMwNGNyXFx4ZjJcXHUxMGIzXFx4ZjJcXHUwM2RkYWlsO1xcdTY5MWNhclxceGYyXFx1MWM2NWFyO1xcdTY5NjRcXHUwMzgwY2RlbnFydFxcdTMwNjhcXHUzMDc1XFx1MzA3OFxcdTMwN2ZcXHUzMDhmXFx1MzA5NFxcdTMwY2NcXHUwMTAwZXVcXHUzMDZkXFx1MzA3MTtcXHVjMDAwXFx1MjIzZFxcdTAzMzF0ZTtcXHU0MTU1aVxceGUzXFx1MTE2ZW1wdHl2O1xcdTY5YjNnXFx1MDIwMDtkZWxcXHUwZmQxXFx1MzA4OVxcdTMwOGJcXHUzMDhkO1xcdTY5OTI7XFx1NjlhNVxceGU1XFx1MGZkMXVvXFx1ODAzYlxceGJiXFx1NDBiYnJcXHUwNTgwO2FiY2ZobHBzdHdcXHUwZmRjXFx1MzBhY1xcdTMwYWZcXHUzMGI3XFx1MzBiOVxcdTMwYmNcXHUzMGJlXFx1MzBjMFxcdTMwYzNcXHUzMGM3XFx1MzBjYXA7XFx1Njk3NVxcdTAxMDA7ZlxcdTBmZTBcXHUzMGI0cztcXHU2OTIwO1xcdTY5MzNzO1xcdTY5MWVcXHhlYlxcdTIyNWRcXHhmMFxcdTI3MmVsO1xcdTY5NDVpbTtcXHU2OTc0bDtcXHU2MWEzO1xcdTYxOWRcXHUwMTAwYWlcXHUzMGQxXFx1MzBkNWlsO1xcdTY5MWFvXFx1MDEwMDtuXFx1MzBkYlxcdTMwZGNcXHU2MjM2YWxcXHhmM1xcdTBmMWVcXHUwMTgwYWJyXFx1MzBlN1xcdTMwZWFcXHUzMGVlclxceGYyXFx1MTdlNXJrO1xcdTY3NzNcXHUwMTAwYWtcXHUzMGYzXFx1MzBmZGNcXHUwMTAwZWtcXHUzMGY5XFx1MzBmYjtcXHU0MDdkO1xcdTQwNWRcXHUwMTAwZXNcXHUzMTAyXFx1MzEwNDtcXHU2OThjbFxcdTAxMDBkdVxcdTMxMGFcXHUzMTBjO1xcdTY5OGU7XFx1Njk5MFxcdTAyMDBhZXV5XFx1MzExN1xcdTMxMWNcXHUzMTI3XFx1MzEyOXJvbjtcXHU0MTU5XFx1MDEwMGRpXFx1MzEyMVxcdTMxMjVpbDtcXHU0MTU3XFx4ZWNcXHUwZmYyXFx4ZTJcXHUzMGZhO1xcdTQ0NDBcXHUwMjAwY2xxc1xcdTMxMzRcXHUzMTM3XFx1MzEzZFxcdTMxNDRhO1xcdTY5MzdkaGFyO1xcdTY5Njl1b1xcdTAxMDA7clxcdTAyMGVcXHUwMjBkaDtcXHU2MWIzXFx1MDE4MGFjZ1xcdTMxNGVcXHUzMTVmXFx1MGY0NGxcXHUwMjAwO2lwc1xcdTBmNzhcXHUzMTU4XFx1MzE1YlxcdTEwOWNuXFx4ZTVcXHUxMGJiYXJcXHhmNFxcdTBmYTl0O1xcdTY1YWRcXHUwMTgwaWxyXFx1MzE2OVxcdTEwMjNcXHUzMTZlc2h0O1xcdTY5N2Q7XFx1YzAwMFxcdWQ4MzVcXHVkZDJmXFx1MDEwMGFvXFx1MzE3N1xcdTMxODZyXFx1MDEwMGR1XFx1MzE3ZFxcdTMxN2ZcXHhiYlxcdTA0N2JcXHUwMTAwO2xcXHUxMDkxXFx1MzE4NDtcXHU2OTZjXFx1MDEwMDt2XFx1MzE4YlxcdTMxOGNcXHU0M2MxO1xcdTQzZjFcXHUwMTgwZ25zXFx1MzE5NVxcdTMxZjlcXHUzMWZjaHRcXHUwMzAwYWhscnN0XFx1MzFhNFxcdTMxYjBcXHUzMWMyXFx1MzFkOFxcdTMxZTRcXHUzMWVlcnJvd1xcdTAxMDA7dFxcdTBmZGNcXHUzMWFkYVxceGU5XFx1MzBjOGFycG9vblxcdTAxMDBkdVxcdTMxYmJcXHUzMWJmb3dcXHhlZVxcdTMxN2VwXFx4YmJcXHUxMDkyZWZ0XFx1MDEwMGFoXFx1MzFjYVxcdTMxZDBycm93XFx4ZjNcXHUwZmVhYXJwb29uXFx4ZjNcXHUwNTUxaWdodGFycm93cztcXHU2MWM5cXVpZ2Fycm9cXHhmN1xcdTMwY2JocmVldGltZXM7XFx1NjJjY2c7XFx1NDJkYWluZ2RvdHNlXFx4ZjFcXHUxZjMyXFx1MDE4MGFobVxcdTMyMGRcXHUzMjEwXFx1MzIxM3JcXHhmMlxcdTBmZWFhXFx4ZjJcXHUwNTUxO1xcdTYwMGZvdXN0XFx1MDEwMDthXFx1MzIxZVxcdTMyMWZcXHU2M2IxY2hlXFx4YmJcXHUzMjFmbWlkO1xcdTZhZWVcXHUwMjAwYWJwdFxcdTMyMzJcXHUzMjNkXFx1MzI0MFxcdTMyNTJcXHUwMTAwbnJcXHUzMjM3XFx1MzIzYWc7XFx1NjdlZHI7XFx1NjFmZXJcXHhlYlxcdTEwMDNcXHUwMTgwYWZsXFx1MzI0N1xcdTMyNGFcXHUzMjRlcjtcXHU2OTg2O1xcdWMwMDBcXHVkODM1XFx1ZGQ2M3VzO1xcdTZhMmVpbWVzO1xcdTZhMzVcXHUwMTAwYXBcXHUzMjVkXFx1MzI2N3JcXHUwMTAwO2dcXHUzMjYzXFx1MzI2NFxcdTQwMjl0O1xcdTY5OTRvbGludDtcXHU2YTEyYXJcXHhmMlxcdTMxZTNcXHUwMjAwYWNocVxcdTMyN2JcXHUzMjgwXFx1MTBiY1xcdTMyODVxdW87XFx1NjAzYXI7XFx1YzAwMFxcdWQ4MzVcXHVkY2M3XFx1MDEwMGJ1XFx1MzBmYlxcdTMyOGFvXFx1MDEwMDtyXFx1MDIxNFxcdTAyMTNcXHUwMTgwaGlyXFx1MzI5N1xcdTMyOWJcXHUzMmEwcmVcXHhlNVxcdTMxZjhtZXM7XFx1NjJjYWlcXHUwMjAwO2VmbFxcdTMyYWFcXHUxMDU5XFx1MTgyMVxcdTMyYWJcXHU2NWI5dHJpO1xcdTY5Y2VsdWhhcjtcXHU2OTY4O1xcdTYxMWVcXHUwZDYxXFx1MzJkNVxcdTMyZGJcXHUzMmRmXFx1MzMyY1xcdTMzMzhcXHUzMzcxXFwwXFx1MzM3YVxcdTMzYTRcXDBcXDBcXHUzM2VjXFx1MzNmMFxcMFxcdTM0MjhcXHUzNDQ4XFx1MzQ1YVxcdTM0YWRcXHUzNGIxXFx1MzRjYVxcdTM0ZjFcXDBcXHUzNjE2XFwwXFwwXFx1MzYzM2N1dGU7XFx1NDE1YnF1XFx4ZWZcXHUyN2JhXFx1MDUwMDtFYWNlaW5wc3lcXHUxMWVkXFx1MzJmM1xcdTMyZjVcXHUzMmZmXFx1MzMwMlxcdTMzMGJcXHUzMzBmXFx1MzMxZlxcdTMzMjZcXHUzMzI5O1xcdTZhYjRcXHUwMWYwXFx1MzJmYVxcMFxcdTMyZmM7XFx1NmFiOG9uO1xcdTQxNjF1XFx4ZTVcXHUxMWZlXFx1MDEwMDtkXFx1MTFmM1xcdTMzMDdpbDtcXHU0MTVmcmM7XFx1NDE1ZFxcdTAxODBFYXNcXHUzMzE2XFx1MzMxOFxcdTMzMWI7XFx1NmFiNnA7XFx1NmFiYWltO1xcdTYyZTlvbGludDtcXHU2YTEzaVxceGVkXFx1MTIwNDtcXHU0NDQxb3RcXHUwMTgwO2JlXFx1MzMzNFxcdTFkNDdcXHUzMzM1XFx1NjJjNTtcXHU2YTY2XFx1MDM4MEFhY21zdHhcXHUzMzQ2XFx1MzM0YVxcdTMzNTdcXHUzMzViXFx1MzM1ZVxcdTMzNjNcXHUzMzZkcnI7XFx1NjFkOHJcXHUwMTAwaHJcXHUzMzUwXFx1MzM1MlxceGViXFx1MjIyOFxcdTAxMDA7b1xcdTBhMzZcXHUwYTM0dFxcdTgwM2JcXHhhN1xcdTQwYTdpO1xcdTQwM2J3YXI7XFx1NjkyOW1cXHUwMTAwaW5cXHUzMzY5XFx4ZjBudVxceGYzXFx4ZjF0O1xcdTY3MzZyXFx1MDEwMDtvXFx1MzM3NlxcdTIwNTVcXHVjMDAwXFx1ZDgzNVxcdWRkMzBcXHUwMjAwYWNveVxcdTMzODJcXHUzMzg2XFx1MzM5MVxcdTMzYTBycDtcXHU2NjZmXFx1MDEwMGh5XFx1MzM4YlxcdTMzOGZjeTtcXHU0NDQ5O1xcdTQ0NDhydFxcdTAyNmRcXHUzMzk5XFwwXFwwXFx1MzM5Y2lcXHhlNFxcdTE0NjRhcmFcXHhlY1xcdTJlNmZcXHU4MDNiXFx4YWRcXHU0MGFkXFx1MDEwMGdtXFx1MzNhOFxcdTMzYjRtYVxcdTAxODA7ZnZcXHUzM2IxXFx1MzNiMlxcdTMzYjJcXHU0M2MzO1xcdTQzYzJcXHUwNDAwO2RlZ2xucHJcXHUxMmFiXFx1MzNjNVxcdTMzYzlcXHUzM2NlXFx1MzNkNlxcdTMzZGVcXHUzM2UxXFx1MzNlNm90O1xcdTZhNmFcXHUwMTAwO3FcXHUxMmIxXFx1MTJiMFxcdTAxMDA7RVxcdTMzZDNcXHUzM2Q0XFx1NmE5ZTtcXHU2YWEwXFx1MDEwMDtFXFx1MzNkYlxcdTMzZGNcXHU2YTlkO1xcdTZhOWZlO1xcdTYyNDZsdXM7XFx1NmEyNGFycjtcXHU2OTcyYXJcXHhmMlxcdTExM2RcXHUwMjAwYWVpdFxcdTMzZjhcXHUzNDA4XFx1MzQwZlxcdTM0MTdcXHUwMTAwbHNcXHUzM2ZkXFx1MzQwNGxzZXRtXFx4ZTlcXHUzMzZhaHA7XFx1NmEzM3BhcnNsO1xcdTY5ZTRcXHUwMTAwZGxcXHUxNDYzXFx1MzQxNGU7XFx1NjMyM1xcdTAxMDA7ZVxcdTM0MWNcXHUzNDFkXFx1NmFhYVxcdTAxMDA7c1xcdTM0MjJcXHUzNDIzXFx1NmFhYztcXHVjMDAwXFx1MmFhY1xcdWZlMDBcXHUwMTgwZmxwXFx1MzQyZVxcdTM0MzNcXHUzNDQydGN5O1xcdTQ0NGNcXHUwMTAwO2JcXHUzNDM4XFx1MzQzOVxcdTQwMmZcXHUwMTAwO2FcXHUzNDNlXFx1MzQzZlxcdTY5YzRyO1xcdTYzM2ZmO1xcdWMwMDBcXHVkODM1XFx1ZGQ2NGFcXHUwMTAwZHJcXHUzNDRkXFx1MDQwMmVzXFx1MDEwMDt1XFx1MzQ1NFxcdTM0NTVcXHU2NjYwaXRcXHhiYlxcdTM0NTVcXHUwMTgwY3N1XFx1MzQ2MFxcdTM0NzlcXHUzNDlmXFx1MDEwMGF1XFx1MzQ2NVxcdTM0NmZwXFx1MDEwMDtzXFx1MTE4OFxcdTM0NmI7XFx1YzAwMFxcdTIyOTNcXHVmZTAwcFxcdTAxMDA7c1xcdTExYjRcXHUzNDc1O1xcdWMwMDBcXHUyMjk0XFx1ZmUwMHVcXHUwMTAwYnBcXHUzNDdmXFx1MzQ4ZlxcdTAxODA7ZXNcXHUxMTk3XFx1MTE5Y1xcdTM0ODZldFxcdTAxMDA7ZVxcdTExOTdcXHUzNDhkXFx4ZjFcXHUxMTlkXFx1MDE4MDtlc1xcdTExYThcXHUxMWFkXFx1MzQ5NmV0XFx1MDEwMDtlXFx1MTFhOFxcdTM0OWRcXHhmMVxcdTExYWVcXHUwMTgwO2FmXFx1MTE3YlxcdTM0YTZcXHUwNWIwclxcdTAxNjVcXHUzNGFiXFx1MDViMVxceGJiXFx1MTE3Y2FyXFx4ZjJcXHUxMTQ4XFx1MDIwMGNlbXRcXHUzNGI5XFx1MzRiZVxcdTM0YzJcXHUzNGM1cjtcXHVjMDAwXFx1ZDgzNVxcdWRjYzh0bVxceGVlXFx4ZjFpXFx4ZWNcXHUzNDE1YXJcXHhlNlxcdTExYmVcXHUwMTAwYXJcXHUzNGNlXFx1MzRkNXJcXHUwMTAwO2ZcXHUzNGQ0XFx1MTdiZlxcdTY2MDZcXHUwMTAwYW5cXHUzNGRhXFx1MzRlZGlnaHRcXHUwMTAwZXBcXHUzNGUzXFx1MzRlYXBzaWxvXFx4ZWVcXHUxZWUwaFxceGU5XFx1MmVhZnNcXHhiYlxcdTI4NTJcXHUwMjgwYmNtbnBcXHUzNGZiXFx1MzU1ZVxcdTEyMDlcXHUzNThiXFx1MzU4ZVxcdTA0ODA7RWRlbW5wcnNcXHUzNTBlXFx1MzUwZlxcdTM1MTFcXHUzNTE1XFx1MzUxZVxcdTM1MjNcXHUzNTJjXFx1MzUzMVxcdTM1MzZcXHU2MjgyO1xcdTZhYzVvdDtcXHU2YWJkXFx1MDEwMDtkXFx1MTFkYVxcdTM1MWFvdDtcXHU2YWMzdWx0O1xcdTZhYzFcXHUwMTAwRWVcXHUzNTI4XFx1MzUyYTtcXHU2YWNiO1xcdTYyOGFsdXM7XFx1NmFiZmFycjtcXHU2OTc5XFx1MDE4MGVpdVxcdTM1M2RcXHUzNTUyXFx1MzU1NXRcXHUwMTgwO2VuXFx1MzUwZVxcdTM1NDVcXHUzNTRicVxcdTAxMDA7cVxcdTExZGFcXHUzNTBmZXFcXHUwMTAwO3FcXHUzNTJiXFx1MzUyOG07XFx1NmFjN1xcdTAxMDBicFxcdTM1NWFcXHUzNTVjO1xcdTZhZDU7XFx1NmFkM2NcXHUwMzAwO2FjZW5zXFx1MTFlZFxcdTM1NmNcXHUzNTcyXFx1MzU3OVxcdTM1N2JcXHUzMzI2cHByb1xceGY4XFx1MzJmYXVybHllXFx4ZjFcXHUxMWZlXFx4ZjFcXHUxMWYzXFx1MDE4MGFlc1xcdTM1ODJcXHUzNTg4XFx1MzMxYnBwcm9cXHhmOFxcdTMzMWFxXFx4ZjFcXHUzMzE3ZztcXHU2NjZhXFx1MDY4MDEyMztFZGVobG1ucHNcXHUzNWE5XFx1MzVhY1xcdTM1YWZcXHUxMjFjXFx1MzViMlxcdTM1YjRcXHUzNWMwXFx1MzVjOVxcdTM1ZDVcXHUzNWRhXFx1MzVkZlxcdTM1ZThcXHUzNWVkXFx1ODAzYlxceGI5XFx1NDBiOVxcdTgwM2JcXHhiMlxcdTQwYjJcXHU4MDNiXFx4YjNcXHU0MGIzO1xcdTZhYzZcXHUwMTAwb3NcXHUzNWI5XFx1MzViY3Q7XFx1NmFiZXViO1xcdTZhZDhcXHUwMTAwO2RcXHUxMjIyXFx1MzVjNW90O1xcdTZhYzRzXFx1MDEwMG91XFx1MzVjZlxcdTM1ZDJsO1xcdTY3YzliO1xcdTZhZDdhcnI7XFx1Njk3YnVsdDtcXHU2YWMyXFx1MDEwMEVlXFx1MzVlNFxcdTM1ZTY7XFx1NmFjYztcXHU2MjhibHVzO1xcdTZhYzBcXHUwMTgwZWl1XFx1MzVmNFxcdTM2MDlcXHUzNjBjdFxcdTAxODA7ZW5cXHUxMjFjXFx1MzVmY1xcdTM2MDJxXFx1MDEwMDtxXFx1MTIyMlxcdTM1YjJlcVxcdTAxMDA7cVxcdTM1ZTdcXHUzNWU0bTtcXHU2YWM4XFx1MDEwMGJwXFx1MzYxMVxcdTM2MTM7XFx1NmFkNDtcXHU2YWQ2XFx1MDE4MEFhblxcdTM2MWNcXHUzNjIwXFx1MzYyZHJyO1xcdTYxZDlyXFx1MDEwMGhyXFx1MzYyNlxcdTM2MjhcXHhlYlxcdTIyMmVcXHUwMTAwO29cXHUwYTJiXFx1MGEyOXdhcjtcXHU2OTJhbGlnXFx1ODAzYlxceGRmXFx1NDBkZlxcdTBiZTFcXHUzNjUxXFx1MzY1ZFxcdTM2NjBcXHUxMmNlXFx1MzY3M1xcdTM2NzlcXDBcXHUzNjdlXFx1MzZjMlxcMFxcMFxcMFxcMFxcMFxcdTM2ZGJcXHUzNzAzXFwwXFx1MzcwOVxcdTM3NmNcXDBcXDBcXDBcXHUzNzg3XFx1MDI3MlxcdTM2NTZcXDBcXDBcXHUzNjViZ2V0O1xcdTYzMTY7XFx1NDNjNHJcXHhlYlxcdTBlNWZcXHUwMTgwYWV5XFx1MzY2NlxcdTM2NmJcXHUzNjcwcm9uO1xcdTQxNjVkaWw7XFx1NDE2MztcXHU0NDQybHJlYztcXHU2MzE1cjtcXHVjMDAwXFx1ZDgzNVxcdWRkMzFcXHUwMjAwZWlrb1xcdTM2ODZcXHUzNjlkXFx1MzZiNVxcdTM2YmNcXHUwMWYyXFx1MzY4YlxcMFxcdTM2OTFlXFx1MDEwMDRmXFx1MTI4NFxcdTEyODFhXFx1MDE4MDtzdlxcdTM2OThcXHUzNjk5XFx1MzY5YlxcdTQzYjh5bTtcXHU0M2QxXFx1MDEwMGNuXFx1MzZhMlxcdTM2YjJrXFx1MDEwMGFzXFx1MzZhOFxcdTM2YWVwcHJvXFx4ZjhcXHUxMmMxaW1cXHhiYlxcdTEyYWNzXFx4ZjBcXHUxMjllXFx1MDEwMGFzXFx1MzZiYVxcdTM2YWVcXHhmMFxcdTEyYzFyblxcdTgwM2JcXHhmZVxcdTQwZmVcXHUwMWVjXFx1MDMxZlxcdTM2YzZcXHUyMmU3ZXNcXHU4MTgwXFx4ZDc7YmRcXHUzNmNmXFx1MzZkMFxcdTM2ZDhcXHU0MGQ3XFx1MDEwMDthXFx1MTkwZlxcdTM2ZDVyO1xcdTZhMzE7XFx1NmEzMFxcdTAxODBlcHNcXHUzNmUxXFx1MzZlM1xcdTM3MDBcXHhlMVxcdTJhNGRcXHUwMjAwO2JjZlxcdTA0ODZcXHUzNmVjXFx1MzZmMFxcdTM2ZjRvdDtcXHU2MzM2aXI7XFx1NmFmMVxcdTAxMDA7b1xcdTM2ZjlcXHUzNmZjXFx1YzAwMFxcdWQ4MzVcXHVkZDY1cms7XFx1NmFkYVxceGUxXFx1MzM2MnJpbWU7XFx1NjAzNFxcdTAxODBhaXBcXHUzNzBmXFx1MzcxMlxcdTM3NjRkXFx4ZTVcXHUxMjQ4XFx1MDM4MGFkZW1wc3RcXHUzNzIxXFx1Mzc0ZFxcdTM3NDBcXHUzNzUxXFx1Mzc1N1xcdTM3NWNcXHUzNzVmbmdsZVxcdTAyODA7ZGxxclxcdTM3MzBcXHUzNzMxXFx1MzczNlxcdTM3NDBcXHUzNzQyXFx1NjViNW93blxceGJiXFx1MWRiYmVmdFxcdTAxMDA7ZVxcdTI4MDBcXHUzNzNlXFx4ZjFcXHUwOTJlO1xcdTYyNWNpZ2h0XFx1MDEwMDtlXFx1MzJhYVxcdTM3NGJcXHhmMVxcdTEwNWFvdDtcXHU2NWVjaW51cztcXHU2YTNhbHVzO1xcdTZhMzliO1xcdTY5Y2RpbWU7XFx1NmEzYmV6aXVtO1xcdTYzZTJcXHUwMTgwY2h0XFx1Mzc3MlxcdTM3N2RcXHUzNzgxXFx1MDEwMHJ5XFx1Mzc3N1xcdTM3N2I7XFx1YzAwMFxcdWQ4MzVcXHVkY2M5O1xcdTQ0NDZjeTtcXHU0NDVicm9rO1xcdTQxNjdcXHUwMTAwaW9cXHUzNzhiXFx1Mzc4ZXhcXHhmNFxcdTE3NzdoZWFkXFx1MDEwMGxyXFx1Mzc5N1xcdTM3YTBlZnRhcnJvXFx4ZjdcXHUwODRmaWdodGFycm93XFx4YmJcXHUwZjVkXFx1MDkwMEFIYWJjZGZnaGxtb3Byc3R1d1xcdTM3ZDBcXHUzN2QzXFx1MzdkN1xcdTM3ZTRcXHUzN2YwXFx1MzdmY1xcdTM4MGVcXHUzODFjXFx1MzgyM1xcdTM4MzRcXHUzODUxXFx1Mzg1ZFxcdTM4NmJcXHUzOGE5XFx1MzhjY1xcdTM4ZDJcXHUzOGVhXFx1MzhmNnJcXHhmMlxcdTAzZWRhcjtcXHU2OTYzXFx1MDEwMGNyXFx1MzdkY1xcdTM3ZTJ1dGVcXHU4MDNiXFx4ZmFcXHU0MGZhXFx4ZjJcXHUxMTUwclxcdTAxZTNcXHUzN2VhXFwwXFx1MzdlZHk7XFx1NDQ1ZXZlO1xcdTQxNmRcXHUwMTAwaXlcXHUzN2Y1XFx1MzdmYXJjXFx1ODAzYlxceGZiXFx1NDBmYjtcXHU0NDQzXFx1MDE4MGFiaFxcdTM4MDNcXHUzODA2XFx1MzgwYnJcXHhmMlxcdTEzYWRsYWM7XFx1NDE3MWFcXHhmMlxcdTEzYzNcXHUwMTAwaXJcXHUzODEzXFx1MzgxOHNodDtcXHU2OTdlO1xcdWMwMDBcXHVkODM1XFx1ZGQzMnJhdmVcXHU4MDNiXFx4ZjlcXHU0MGY5XFx1MDE2MVxcdTM4MjdcXHUzODMxclxcdTAxMDBsclxcdTM4MmNcXHUzODJlXFx4YmJcXHUwOTU3XFx4YmJcXHUxMDgzbGs7XFx1NjU4MFxcdTAxMDBjdFxcdTM4MzlcXHUzODRkXFx1MDI2ZlxcdTM4M2ZcXDBcXDBcXHUzODRhcm5cXHUwMTAwO2VcXHUzODQ1XFx1Mzg0NlxcdTYzMWNyXFx4YmJcXHUzODQ2b3A7XFx1NjMwZnJpO1xcdTY1ZjhcXHUwMTAwYWxcXHUzODU2XFx1Mzg1YWNyO1xcdTQxNmJcXHU4MGJiXFx4YThcXHUwMzQ5XFx1MDEwMGdwXFx1Mzg2MlxcdTM4NjZvbjtcXHU0MTczZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNjZcXHUwMzAwYWRobHN1XFx1MTE0YlxcdTM4NzhcXHUzODdkXFx1MTM3MlxcdTM4OTFcXHUzOGEwb3duXFx4ZTFcXHUxM2IzYXJwb29uXFx1MDEwMGxyXFx1Mzg4OFxcdTM4OGNlZlxceGY0XFx1MzgyZGlnaFxceGY0XFx1MzgyZmlcXHUwMTgwO2hsXFx1Mzg5OVxcdTM4OWFcXHUzODljXFx1NDNjNVxceGJiXFx1MTNmYW9uXFx4YmJcXHUzODlhcGFycm93cztcXHU2MWM4XFx1MDE4MGNpdFxcdTM4YjBcXHUzOGM0XFx1MzhjOFxcdTAyNmZcXHUzOGI2XFwwXFwwXFx1MzhjMXJuXFx1MDEwMDtlXFx1MzhiY1xcdTM4YmRcXHU2MzFkclxceGJiXFx1MzhiZG9wO1xcdTYzMGVuZztcXHU0MTZmcmk7XFx1NjVmOWNyO1xcdWMwMDBcXHVkODM1XFx1ZGNjYVxcdTAxODBkaXJcXHUzOGQ5XFx1MzhkZFxcdTM4ZTJvdDtcXHU2MmYwbGRlO1xcdTQxNjlpXFx1MDEwMDtmXFx1MzczMFxcdTM4ZThcXHhiYlxcdTE4MTNcXHUwMTAwYW1cXHUzOGVmXFx1MzhmMnJcXHhmMlxcdTM4YThsXFx1ODAzYlxceGZjXFx1NDBmY2FuZ2xlO1xcdTY5YTdcXHUwNzgwQUJEYWNkZWZsbm9wcnN6XFx1MzkxY1xcdTM5MWZcXHUzOTI5XFx1MzkyZFxcdTM5YjVcXHUzOWI4XFx1MzliZFxcdTM5ZGZcXHUzOWU0XFx1MzllOFxcdTM5ZjNcXHUzOWY5XFx1MzlmZFxcdTNhMDFcXHUzYTIwclxceGYyXFx1MDNmN2FyXFx1MDEwMDt2XFx1MzkyNlxcdTM5MjdcXHU2YWU4O1xcdTZhZTlhc1xceGU4XFx1MDNlMVxcdTAxMDBuclxcdTM5MzJcXHUzOTM3Z3J0O1xcdTY5OWNcXHUwMzgwZWtucHJzdFxcdTM0ZTNcXHUzOTQ2XFx1Mzk0YlxcdTM5NTJcXHUzOTVkXFx1Mzk2NFxcdTM5OTZhcHBcXHhlMVxcdTI0MTVvdGhpblxceGU3XFx1MWU5NlxcdTAxODBoaXJcXHUzNGViXFx1MmVjOFxcdTM5NTlvcFxceGY0XFx1MmZiNVxcdTAxMDA7aFxcdTEzYjdcXHUzOTYyXFx4ZWZcXHUzMThkXFx1MDEwMGl1XFx1Mzk2OVxcdTM5NmRnbVxceGUxXFx1MzNiM1xcdTAxMDBicFxcdTM5NzJcXHUzOTg0c2V0bmVxXFx1MDEwMDtxXFx1Mzk3ZFxcdTM5ODBcXHVjMDAwXFx1MjI4YVxcdWZlMDA7XFx1YzAwMFxcdTJhY2JcXHVmZTAwc2V0bmVxXFx1MDEwMDtxXFx1Mzk4ZlxcdTM5OTJcXHVjMDAwXFx1MjI4YlxcdWZlMDA7XFx1YzAwMFxcdTJhY2NcXHVmZTAwXFx1MDEwMGhyXFx1Mzk5YlxcdTM5OWZldFxceGUxXFx1MzY5Y2lhbmdsZVxcdTAxMDBsclxcdTM5YWFcXHUzOWFmZWZ0XFx4YmJcXHUwOTI1aWdodFxceGJiXFx1MTA1MXk7XFx1NDQzMmFzaFxceGJiXFx1MTAzNlxcdTAxODBlbHJcXHUzOWM0XFx1MzlkMlxcdTM5ZDdcXHUwMTgwO2JlXFx1MmRlYVxcdTM5Y2JcXHUzOWNmYXI7XFx1NjJiYnE7XFx1NjI1YWxpcDtcXHU2MmVlXFx1MDEwMGJ0XFx1MzlkY1xcdTE0NjhhXFx4ZjJcXHUxNDY5cjtcXHVjMDAwXFx1ZDgzNVxcdWRkMzN0clxceGU5XFx1MzlhZXN1XFx1MDEwMGJwXFx1MzllZlxcdTM5ZjFcXHhiYlxcdTBkMWNcXHhiYlxcdTBkNTlwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNjdyb1xceGYwXFx1MGVmYnRyXFx4ZTlcXHUzOWI0XFx1MDEwMGN1XFx1M2EwNlxcdTNhMGJyO1xcdWMwMDBcXHVkODM1XFx1ZGNjYlxcdTAxMDBicFxcdTNhMTBcXHUzYTE4blxcdTAxMDBFZVxcdTM5ODBcXHUzYTE2XFx4YmJcXHUzOTdlblxcdTAxMDBFZVxcdTM5OTJcXHUzYTFlXFx4YmJcXHUzOTkwaWd6YWc7XFx1Njk5YVxcdTAzODBjZWZvcHJzXFx1M2EzNlxcdTNhM2JcXHUzYTU2XFx1M2E1YlxcdTNhNTRcXHUzYTYxXFx1M2E2YWlyYztcXHU0MTc1XFx1MDEwMGRpXFx1M2E0MFxcdTNhNTFcXHUwMTAwYmdcXHUzYTQ1XFx1M2E0OWFyO1xcdTZhNWZlXFx1MDEwMDtxXFx1MTVmYVxcdTNhNGY7XFx1NjI1OWVycDtcXHU2MTE4cjtcXHVjMDAwXFx1ZDgzNVxcdWRkMzRwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNjhcXHUwMTAwO2VcXHUxNDc5XFx1M2E2NmF0XFx4ZThcXHUxNDc5Y3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2NjXFx1MGFlM1xcdTE3OGVcXHUzYTg3XFwwXFx1M2E4YlxcMFxcdTNhOTBcXHUzYTliXFwwXFwwXFx1M2E5ZFxcdTNhYThcXHUzYWFiXFx1M2FhZlxcMFxcMFxcdTNhYzNcXHUzYWNlXFwwXFx1M2FkOFxcdTE3ZGNcXHUxN2RmdHJcXHhlOVxcdTE3ZDFyO1xcdWMwMDBcXHVkODM1XFx1ZGQzNVxcdTAxMDBBYVxcdTNhOTRcXHUzYTk3clxceGYyXFx1MDNjM3JcXHhmMlxcdTA5ZjY7XFx1NDNiZVxcdTAxMDBBYVxcdTNhYTFcXHUzYWE0clxceGYyXFx1MDNiOHJcXHhmMlxcdTA5ZWJhXFx4ZjBcXHUyNzEzaXM7XFx1NjJmYlxcdTAxODBkcHRcXHUxN2E0XFx1M2FiNVxcdTNhYmVcXHUwMTAwZmxcXHUzYWJhXFx1MTdhOTtcXHVjMDAwXFx1ZDgzNVxcdWRkNjlpbVxceGU1XFx1MTdiMlxcdTAxMDBBYVxcdTNhYzdcXHUzYWNhclxceGYyXFx1MDNjZXJcXHhmMlxcdTBhMDFcXHUwMTAwY3FcXHUzYWQyXFx1MTdiOHI7XFx1YzAwMFxcdWQ4MzVcXHVkY2NkXFx1MDEwMHB0XFx1MTdkNlxcdTNhZGNyXFx4ZTlcXHUxN2Q0XFx1MDQwMGFjZWZpb3N1XFx1M2FmMFxcdTNhZmRcXHUzYjA4XFx1M2IwY1xcdTNiMTFcXHUzYjE1XFx1M2IxYlxcdTNiMjFjXFx1MDEwMHV5XFx1M2FmNlxcdTNhZmJ0ZVxcdTgwM2JcXHhmZFxcdTQwZmQ7XFx1NDQ0ZlxcdTAxMDBpeVxcdTNiMDJcXHUzYjA2cmM7XFx1NDE3NztcXHU0NDRiblxcdTgwM2JcXHhhNVxcdTQwYTVyO1xcdWMwMDBcXHVkODM1XFx1ZGQzNmN5O1xcdTQ0NTdwZjtcXHVjMDAwXFx1ZDgzNVxcdWRkNmFjcjtcXHVjMDAwXFx1ZDgzNVxcdWRjY2VcXHUwMTAwY21cXHUzYjI2XFx1M2IyOXk7XFx1NDQ0ZWxcXHU4MDNiXFx4ZmZcXHU0MGZmXFx1MDUwMGFjZGVmaGlvc3dcXHUzYjQyXFx1M2I0OFxcdTNiNTRcXHUzYjU4XFx1M2I2NFxcdTNiNjlcXHUzYjZkXFx1M2I3NFxcdTNiN2FcXHUzYjgwY3V0ZTtcXHU0MTdhXFx1MDEwMGF5XFx1M2I0ZFxcdTNiNTJyb247XFx1NDE3ZTtcXHU0NDM3b3Q7XFx1NDE3Y1xcdTAxMDBldFxcdTNiNWRcXHUzYjYxdHJcXHhlNlxcdTE1NWZhO1xcdTQzYjZyO1xcdWMwMDBcXHVkODM1XFx1ZGQzN2N5O1xcdTQ0MzZncmFycjtcXHU2MWRkcGY7XFx1YzAwMFxcdWQ4MzVcXHVkZDZiY3I7XFx1YzAwMFxcdWQ4MzVcXHVkY2NmXFx1MDEwMGpuXFx1M2I4NVxcdTNiODc7XFx1NjAwZGo7XFx1NjAwY1wiXG4gICAgLnNwbGl0KFwiXCIpXG4gICAgLm1hcCgoYykgPT4gYy5jaGFyQ29kZUF0KDApKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvZGUtZGF0YS1odG1sLmpzLm1hcCIsIi8vIEdlbmVyYXRlZCB1c2luZyBzY3JpcHRzL3dyaXRlLWRlY29kZS1tYXAudHNcbmV4cG9ydCBkZWZhdWx0IG5ldyBVaW50MTZBcnJheShcbi8vIHByZXR0aWVyLWlnbm9yZVxuXCJcXHUwMjAwYWdscVxcdFxceDE1XFx4MThcXHgxYlxcdTAyNmRcXHgwZlxcMFxcMFxceDEycDtcXHU0MDI2b3M7XFx1NDAyN3Q7XFx1NDAzZXQ7XFx1NDAzY3VvdDtcXHU0MDIyXCJcbiAgICAuc3BsaXQoXCJcIilcbiAgICAubWFwKChjKSA9PiBjLmNoYXJDb2RlQXQoMCkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29kZS1kYXRhLXhtbC5qcy5tYXAiLCIvLyBHZW5lcmF0ZWQgdXNpbmcgc2NyaXB0cy93cml0ZS1lbmNvZGUtbWFwLnRzXG5mdW5jdGlvbiByZXN0b3JlRGlmZihhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJbaV1bMF0gKz0gYXJyW2kgLSAxXVswXSArIDE7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBkZWZhdWx0IG5ldyBNYXAoLyogI19fUFVSRV9fICovIHJlc3RvcmVEaWZmKFtbOSwgXCImVGFiO1wiXSwgWzAsIFwiJk5ld0xpbmU7XCJdLCBbMjIsIFwiJmV4Y2w7XCJdLCBbMCwgXCImcXVvdDtcIl0sIFswLCBcIiZudW07XCJdLCBbMCwgXCImZG9sbGFyO1wiXSwgWzAsIFwiJnBlcmNudDtcIl0sIFswLCBcIiZhbXA7XCJdLCBbMCwgXCImYXBvcztcIl0sIFswLCBcIiZscGFyO1wiXSwgWzAsIFwiJnJwYXI7XCJdLCBbMCwgXCImYXN0O1wiXSwgWzAsIFwiJnBsdXM7XCJdLCBbMCwgXCImY29tbWE7XCJdLCBbMSwgXCImcGVyaW9kO1wiXSwgWzAsIFwiJnNvbDtcIl0sIFsxMCwgXCImY29sb247XCJdLCBbMCwgXCImc2VtaTtcIl0sIFswLCB7IHY6IFwiJmx0O1wiLCBuOiA4NDAyLCBvOiBcIiZudmx0O1wiIH1dLCBbMCwgeyB2OiBcIiZlcXVhbHM7XCIsIG46IDg0MjEsIG86IFwiJmJuZTtcIiB9XSwgWzAsIHsgdjogXCImZ3Q7XCIsIG46IDg0MDIsIG86IFwiJm52Z3Q7XCIgfV0sIFswLCBcIiZxdWVzdDtcIl0sIFswLCBcIiZjb21tYXQ7XCJdLCBbMjYsIFwiJmxicmFjaztcIl0sIFswLCBcIiZic29sO1wiXSwgWzAsIFwiJnJicmFjaztcIl0sIFswLCBcIiZIYXQ7XCJdLCBbMCwgXCImbG93YmFyO1wiXSwgWzAsIFwiJkRpYWNyaXRpY2FsR3JhdmU7XCJdLCBbNSwgeyBuOiAxMDYsIG86IFwiJmZqbGlnO1wiIH1dLCBbMjAsIFwiJmxicmFjZTtcIl0sIFswLCBcIiZ2ZXJiYXI7XCJdLCBbMCwgXCImcmJyYWNlO1wiXSwgWzM0LCBcIiZuYnNwO1wiXSwgWzAsIFwiJmlleGNsO1wiXSwgWzAsIFwiJmNlbnQ7XCJdLCBbMCwgXCImcG91bmQ7XCJdLCBbMCwgXCImY3VycmVuO1wiXSwgWzAsIFwiJnllbjtcIl0sIFswLCBcIiZicnZiYXI7XCJdLCBbMCwgXCImc2VjdDtcIl0sIFswLCBcIiZkaWU7XCJdLCBbMCwgXCImY29weTtcIl0sIFswLCBcIiZvcmRmO1wiXSwgWzAsIFwiJmxhcXVvO1wiXSwgWzAsIFwiJm5vdDtcIl0sIFswLCBcIiZzaHk7XCJdLCBbMCwgXCImY2lyY2xlZFI7XCJdLCBbMCwgXCImbWFjcjtcIl0sIFswLCBcIiZkZWc7XCJdLCBbMCwgXCImUGx1c01pbnVzO1wiXSwgWzAsIFwiJnN1cDI7XCJdLCBbMCwgXCImc3VwMztcIl0sIFswLCBcIiZhY3V0ZTtcIl0sIFswLCBcIiZtaWNybztcIl0sIFswLCBcIiZwYXJhO1wiXSwgWzAsIFwiJmNlbnRlcmRvdDtcIl0sIFswLCBcIiZjZWRpbDtcIl0sIFswLCBcIiZzdXAxO1wiXSwgWzAsIFwiJm9yZG07XCJdLCBbMCwgXCImcmFxdW87XCJdLCBbMCwgXCImZnJhYzE0O1wiXSwgWzAsIFwiJmZyYWMxMjtcIl0sIFswLCBcIiZmcmFjMzQ7XCJdLCBbMCwgXCImaXF1ZXN0O1wiXSwgWzAsIFwiJkFncmF2ZTtcIl0sIFswLCBcIiZBYWN1dGU7XCJdLCBbMCwgXCImQWNpcmM7XCJdLCBbMCwgXCImQXRpbGRlO1wiXSwgWzAsIFwiJkF1bWw7XCJdLCBbMCwgXCImYW5nc3Q7XCJdLCBbMCwgXCImQUVsaWc7XCJdLCBbMCwgXCImQ2NlZGlsO1wiXSwgWzAsIFwiJkVncmF2ZTtcIl0sIFswLCBcIiZFYWN1dGU7XCJdLCBbMCwgXCImRWNpcmM7XCJdLCBbMCwgXCImRXVtbDtcIl0sIFswLCBcIiZJZ3JhdmU7XCJdLCBbMCwgXCImSWFjdXRlO1wiXSwgWzAsIFwiJkljaXJjO1wiXSwgWzAsIFwiJkl1bWw7XCJdLCBbMCwgXCImRVRIO1wiXSwgWzAsIFwiJk50aWxkZTtcIl0sIFswLCBcIiZPZ3JhdmU7XCJdLCBbMCwgXCImT2FjdXRlO1wiXSwgWzAsIFwiJk9jaXJjO1wiXSwgWzAsIFwiJk90aWxkZTtcIl0sIFswLCBcIiZPdW1sO1wiXSwgWzAsIFwiJnRpbWVzO1wiXSwgWzAsIFwiJk9zbGFzaDtcIl0sIFswLCBcIiZVZ3JhdmU7XCJdLCBbMCwgXCImVWFjdXRlO1wiXSwgWzAsIFwiJlVjaXJjO1wiXSwgWzAsIFwiJlV1bWw7XCJdLCBbMCwgXCImWWFjdXRlO1wiXSwgWzAsIFwiJlRIT1JOO1wiXSwgWzAsIFwiJnN6bGlnO1wiXSwgWzAsIFwiJmFncmF2ZTtcIl0sIFswLCBcIiZhYWN1dGU7XCJdLCBbMCwgXCImYWNpcmM7XCJdLCBbMCwgXCImYXRpbGRlO1wiXSwgWzAsIFwiJmF1bWw7XCJdLCBbMCwgXCImYXJpbmc7XCJdLCBbMCwgXCImYWVsaWc7XCJdLCBbMCwgXCImY2NlZGlsO1wiXSwgWzAsIFwiJmVncmF2ZTtcIl0sIFswLCBcIiZlYWN1dGU7XCJdLCBbMCwgXCImZWNpcmM7XCJdLCBbMCwgXCImZXVtbDtcIl0sIFswLCBcIiZpZ3JhdmU7XCJdLCBbMCwgXCImaWFjdXRlO1wiXSwgWzAsIFwiJmljaXJjO1wiXSwgWzAsIFwiJml1bWw7XCJdLCBbMCwgXCImZXRoO1wiXSwgWzAsIFwiJm50aWxkZTtcIl0sIFswLCBcIiZvZ3JhdmU7XCJdLCBbMCwgXCImb2FjdXRlO1wiXSwgWzAsIFwiJm9jaXJjO1wiXSwgWzAsIFwiJm90aWxkZTtcIl0sIFswLCBcIiZvdW1sO1wiXSwgWzAsIFwiJmRpdjtcIl0sIFswLCBcIiZvc2xhc2g7XCJdLCBbMCwgXCImdWdyYXZlO1wiXSwgWzAsIFwiJnVhY3V0ZTtcIl0sIFswLCBcIiZ1Y2lyYztcIl0sIFswLCBcIiZ1dW1sO1wiXSwgWzAsIFwiJnlhY3V0ZTtcIl0sIFswLCBcIiZ0aG9ybjtcIl0sIFswLCBcIiZ5dW1sO1wiXSwgWzAsIFwiJkFtYWNyO1wiXSwgWzAsIFwiJmFtYWNyO1wiXSwgWzAsIFwiJkFicmV2ZTtcIl0sIFswLCBcIiZhYnJldmU7XCJdLCBbMCwgXCImQW9nb247XCJdLCBbMCwgXCImYW9nb247XCJdLCBbMCwgXCImQ2FjdXRlO1wiXSwgWzAsIFwiJmNhY3V0ZTtcIl0sIFswLCBcIiZDY2lyYztcIl0sIFswLCBcIiZjY2lyYztcIl0sIFswLCBcIiZDZG90O1wiXSwgWzAsIFwiJmNkb3Q7XCJdLCBbMCwgXCImQ2Nhcm9uO1wiXSwgWzAsIFwiJmNjYXJvbjtcIl0sIFswLCBcIiZEY2Fyb247XCJdLCBbMCwgXCImZGNhcm9uO1wiXSwgWzAsIFwiJkRzdHJvaztcIl0sIFswLCBcIiZkc3Ryb2s7XCJdLCBbMCwgXCImRW1hY3I7XCJdLCBbMCwgXCImZW1hY3I7XCJdLCBbMiwgXCImRWRvdDtcIl0sIFswLCBcIiZlZG90O1wiXSwgWzAsIFwiJkVvZ29uO1wiXSwgWzAsIFwiJmVvZ29uO1wiXSwgWzAsIFwiJkVjYXJvbjtcIl0sIFswLCBcIiZlY2Fyb247XCJdLCBbMCwgXCImR2NpcmM7XCJdLCBbMCwgXCImZ2NpcmM7XCJdLCBbMCwgXCImR2JyZXZlO1wiXSwgWzAsIFwiJmdicmV2ZTtcIl0sIFswLCBcIiZHZG90O1wiXSwgWzAsIFwiJmdkb3Q7XCJdLCBbMCwgXCImR2NlZGlsO1wiXSwgWzEsIFwiJkhjaXJjO1wiXSwgWzAsIFwiJmhjaXJjO1wiXSwgWzAsIFwiJkhzdHJvaztcIl0sIFswLCBcIiZoc3Ryb2s7XCJdLCBbMCwgXCImSXRpbGRlO1wiXSwgWzAsIFwiJml0aWxkZTtcIl0sIFswLCBcIiZJbWFjcjtcIl0sIFswLCBcIiZpbWFjcjtcIl0sIFsyLCBcIiZJb2dvbjtcIl0sIFswLCBcIiZpb2dvbjtcIl0sIFswLCBcIiZJZG90O1wiXSwgWzAsIFwiJmltYXRoO1wiXSwgWzAsIFwiJklKbGlnO1wiXSwgWzAsIFwiJmlqbGlnO1wiXSwgWzAsIFwiJkpjaXJjO1wiXSwgWzAsIFwiJmpjaXJjO1wiXSwgWzAsIFwiJktjZWRpbDtcIl0sIFswLCBcIiZrY2VkaWw7XCJdLCBbMCwgXCIma2dyZWVuO1wiXSwgWzAsIFwiJkxhY3V0ZTtcIl0sIFswLCBcIiZsYWN1dGU7XCJdLCBbMCwgXCImTGNlZGlsO1wiXSwgWzAsIFwiJmxjZWRpbDtcIl0sIFswLCBcIiZMY2Fyb247XCJdLCBbMCwgXCImbGNhcm9uO1wiXSwgWzAsIFwiJkxtaWRvdDtcIl0sIFswLCBcIiZsbWlkb3Q7XCJdLCBbMCwgXCImTHN0cm9rO1wiXSwgWzAsIFwiJmxzdHJvaztcIl0sIFswLCBcIiZOYWN1dGU7XCJdLCBbMCwgXCImbmFjdXRlO1wiXSwgWzAsIFwiJk5jZWRpbDtcIl0sIFswLCBcIiZuY2VkaWw7XCJdLCBbMCwgXCImTmNhcm9uO1wiXSwgWzAsIFwiJm5jYXJvbjtcIl0sIFswLCBcIiZuYXBvcztcIl0sIFswLCBcIiZFTkc7XCJdLCBbMCwgXCImZW5nO1wiXSwgWzAsIFwiJk9tYWNyO1wiXSwgWzAsIFwiJm9tYWNyO1wiXSwgWzIsIFwiJk9kYmxhYztcIl0sIFswLCBcIiZvZGJsYWM7XCJdLCBbMCwgXCImT0VsaWc7XCJdLCBbMCwgXCImb2VsaWc7XCJdLCBbMCwgXCImUmFjdXRlO1wiXSwgWzAsIFwiJnJhY3V0ZTtcIl0sIFswLCBcIiZSY2VkaWw7XCJdLCBbMCwgXCImcmNlZGlsO1wiXSwgWzAsIFwiJlJjYXJvbjtcIl0sIFswLCBcIiZyY2Fyb247XCJdLCBbMCwgXCImU2FjdXRlO1wiXSwgWzAsIFwiJnNhY3V0ZTtcIl0sIFswLCBcIiZTY2lyYztcIl0sIFswLCBcIiZzY2lyYztcIl0sIFswLCBcIiZTY2VkaWw7XCJdLCBbMCwgXCImc2NlZGlsO1wiXSwgWzAsIFwiJlNjYXJvbjtcIl0sIFswLCBcIiZzY2Fyb247XCJdLCBbMCwgXCImVGNlZGlsO1wiXSwgWzAsIFwiJnRjZWRpbDtcIl0sIFswLCBcIiZUY2Fyb247XCJdLCBbMCwgXCImdGNhcm9uO1wiXSwgWzAsIFwiJlRzdHJvaztcIl0sIFswLCBcIiZ0c3Ryb2s7XCJdLCBbMCwgXCImVXRpbGRlO1wiXSwgWzAsIFwiJnV0aWxkZTtcIl0sIFswLCBcIiZVbWFjcjtcIl0sIFswLCBcIiZ1bWFjcjtcIl0sIFswLCBcIiZVYnJldmU7XCJdLCBbMCwgXCImdWJyZXZlO1wiXSwgWzAsIFwiJlVyaW5nO1wiXSwgWzAsIFwiJnVyaW5nO1wiXSwgWzAsIFwiJlVkYmxhYztcIl0sIFswLCBcIiZ1ZGJsYWM7XCJdLCBbMCwgXCImVW9nb247XCJdLCBbMCwgXCImdW9nb247XCJdLCBbMCwgXCImV2NpcmM7XCJdLCBbMCwgXCImd2NpcmM7XCJdLCBbMCwgXCImWWNpcmM7XCJdLCBbMCwgXCImeWNpcmM7XCJdLCBbMCwgXCImWXVtbDtcIl0sIFswLCBcIiZaYWN1dGU7XCJdLCBbMCwgXCImemFjdXRlO1wiXSwgWzAsIFwiJlpkb3Q7XCJdLCBbMCwgXCImemRvdDtcIl0sIFswLCBcIiZaY2Fyb247XCJdLCBbMCwgXCImemNhcm9uO1wiXSwgWzE5LCBcIiZmbm9mO1wiXSwgWzM0LCBcIiZpbXBlZDtcIl0sIFs2MywgXCImZ2FjdXRlO1wiXSwgWzY1LCBcIiZqbWF0aDtcIl0sIFsxNDIsIFwiJmNpcmM7XCJdLCBbMCwgXCImY2Fyb247XCJdLCBbMTYsIFwiJmJyZXZlO1wiXSwgWzAsIFwiJkRpYWNyaXRpY2FsRG90O1wiXSwgWzAsIFwiJnJpbmc7XCJdLCBbMCwgXCImb2dvbjtcIl0sIFswLCBcIiZEaWFjcml0aWNhbFRpbGRlO1wiXSwgWzAsIFwiJmRibGFjO1wiXSwgWzUxLCBcIiZEb3duQnJldmU7XCJdLCBbMTI3LCBcIiZBbHBoYTtcIl0sIFswLCBcIiZCZXRhO1wiXSwgWzAsIFwiJkdhbW1hO1wiXSwgWzAsIFwiJkRlbHRhO1wiXSwgWzAsIFwiJkVwc2lsb247XCJdLCBbMCwgXCImWmV0YTtcIl0sIFswLCBcIiZFdGE7XCJdLCBbMCwgXCImVGhldGE7XCJdLCBbMCwgXCImSW90YTtcIl0sIFswLCBcIiZLYXBwYTtcIl0sIFswLCBcIiZMYW1iZGE7XCJdLCBbMCwgXCImTXU7XCJdLCBbMCwgXCImTnU7XCJdLCBbMCwgXCImWGk7XCJdLCBbMCwgXCImT21pY3JvbjtcIl0sIFswLCBcIiZQaTtcIl0sIFswLCBcIiZSaG87XCJdLCBbMSwgXCImU2lnbWE7XCJdLCBbMCwgXCImVGF1O1wiXSwgWzAsIFwiJlVwc2lsb247XCJdLCBbMCwgXCImUGhpO1wiXSwgWzAsIFwiJkNoaTtcIl0sIFswLCBcIiZQc2k7XCJdLCBbMCwgXCImb2htO1wiXSwgWzcsIFwiJmFscGhhO1wiXSwgWzAsIFwiJmJldGE7XCJdLCBbMCwgXCImZ2FtbWE7XCJdLCBbMCwgXCImZGVsdGE7XCJdLCBbMCwgXCImZXBzaTtcIl0sIFswLCBcIiZ6ZXRhO1wiXSwgWzAsIFwiJmV0YTtcIl0sIFswLCBcIiZ0aGV0YTtcIl0sIFswLCBcIiZpb3RhO1wiXSwgWzAsIFwiJmthcHBhO1wiXSwgWzAsIFwiJmxhbWJkYTtcIl0sIFswLCBcIiZtdTtcIl0sIFswLCBcIiZudTtcIl0sIFswLCBcIiZ4aTtcIl0sIFswLCBcIiZvbWljcm9uO1wiXSwgWzAsIFwiJnBpO1wiXSwgWzAsIFwiJnJobztcIl0sIFswLCBcIiZzaWdtYWY7XCJdLCBbMCwgXCImc2lnbWE7XCJdLCBbMCwgXCImdGF1O1wiXSwgWzAsIFwiJnVwc2k7XCJdLCBbMCwgXCImcGhpO1wiXSwgWzAsIFwiJmNoaTtcIl0sIFswLCBcIiZwc2k7XCJdLCBbMCwgXCImb21lZ2E7XCJdLCBbNywgXCImdGhldGFzeW07XCJdLCBbMCwgXCImVXBzaTtcIl0sIFsyLCBcIiZwaGl2O1wiXSwgWzAsIFwiJnBpdjtcIl0sIFs1LCBcIiZHYW1tYWQ7XCJdLCBbMCwgXCImZGlnYW1tYTtcIl0sIFsxOCwgXCIma2FwcGF2O1wiXSwgWzAsIFwiJnJob3Y7XCJdLCBbMywgXCImZXBzaXY7XCJdLCBbMCwgXCImYmFja2Vwc2lsb247XCJdLCBbMTAsIFwiJklPY3k7XCJdLCBbMCwgXCImREpjeTtcIl0sIFswLCBcIiZHSmN5O1wiXSwgWzAsIFwiJkp1a2N5O1wiXSwgWzAsIFwiJkRTY3k7XCJdLCBbMCwgXCImSXVrY3k7XCJdLCBbMCwgXCImWUljeTtcIl0sIFswLCBcIiZKc2VyY3k7XCJdLCBbMCwgXCImTEpjeTtcIl0sIFswLCBcIiZOSmN5O1wiXSwgWzAsIFwiJlRTSGN5O1wiXSwgWzAsIFwiJktKY3k7XCJdLCBbMSwgXCImVWJyY3k7XCJdLCBbMCwgXCImRFpjeTtcIl0sIFswLCBcIiZBY3k7XCJdLCBbMCwgXCImQmN5O1wiXSwgWzAsIFwiJlZjeTtcIl0sIFswLCBcIiZHY3k7XCJdLCBbMCwgXCImRGN5O1wiXSwgWzAsIFwiJklFY3k7XCJdLCBbMCwgXCImWkhjeTtcIl0sIFswLCBcIiZaY3k7XCJdLCBbMCwgXCImSWN5O1wiXSwgWzAsIFwiJkpjeTtcIl0sIFswLCBcIiZLY3k7XCJdLCBbMCwgXCImTGN5O1wiXSwgWzAsIFwiJk1jeTtcIl0sIFswLCBcIiZOY3k7XCJdLCBbMCwgXCImT2N5O1wiXSwgWzAsIFwiJlBjeTtcIl0sIFswLCBcIiZSY3k7XCJdLCBbMCwgXCImU2N5O1wiXSwgWzAsIFwiJlRjeTtcIl0sIFswLCBcIiZVY3k7XCJdLCBbMCwgXCImRmN5O1wiXSwgWzAsIFwiJktIY3k7XCJdLCBbMCwgXCImVFNjeTtcIl0sIFswLCBcIiZDSGN5O1wiXSwgWzAsIFwiJlNIY3k7XCJdLCBbMCwgXCImU0hDSGN5O1wiXSwgWzAsIFwiJkhBUkRjeTtcIl0sIFswLCBcIiZZY3k7XCJdLCBbMCwgXCImU09GVGN5O1wiXSwgWzAsIFwiJkVjeTtcIl0sIFswLCBcIiZZVWN5O1wiXSwgWzAsIFwiJllBY3k7XCJdLCBbMCwgXCImYWN5O1wiXSwgWzAsIFwiJmJjeTtcIl0sIFswLCBcIiZ2Y3k7XCJdLCBbMCwgXCImZ2N5O1wiXSwgWzAsIFwiJmRjeTtcIl0sIFswLCBcIiZpZWN5O1wiXSwgWzAsIFwiJnpoY3k7XCJdLCBbMCwgXCImemN5O1wiXSwgWzAsIFwiJmljeTtcIl0sIFswLCBcIiZqY3k7XCJdLCBbMCwgXCIma2N5O1wiXSwgWzAsIFwiJmxjeTtcIl0sIFswLCBcIiZtY3k7XCJdLCBbMCwgXCImbmN5O1wiXSwgWzAsIFwiJm9jeTtcIl0sIFswLCBcIiZwY3k7XCJdLCBbMCwgXCImcmN5O1wiXSwgWzAsIFwiJnNjeTtcIl0sIFswLCBcIiZ0Y3k7XCJdLCBbMCwgXCImdWN5O1wiXSwgWzAsIFwiJmZjeTtcIl0sIFswLCBcIiZraGN5O1wiXSwgWzAsIFwiJnRzY3k7XCJdLCBbMCwgXCImY2hjeTtcIl0sIFswLCBcIiZzaGN5O1wiXSwgWzAsIFwiJnNoY2hjeTtcIl0sIFswLCBcIiZoYXJkY3k7XCJdLCBbMCwgXCImeWN5O1wiXSwgWzAsIFwiJnNvZnRjeTtcIl0sIFswLCBcIiZlY3k7XCJdLCBbMCwgXCImeXVjeTtcIl0sIFswLCBcIiZ5YWN5O1wiXSwgWzEsIFwiJmlvY3k7XCJdLCBbMCwgXCImZGpjeTtcIl0sIFswLCBcIiZnamN5O1wiXSwgWzAsIFwiJmp1a2N5O1wiXSwgWzAsIFwiJmRzY3k7XCJdLCBbMCwgXCImaXVrY3k7XCJdLCBbMCwgXCImeWljeTtcIl0sIFswLCBcIiZqc2VyY3k7XCJdLCBbMCwgXCImbGpjeTtcIl0sIFswLCBcIiZuamN5O1wiXSwgWzAsIFwiJnRzaGN5O1wiXSwgWzAsIFwiJmtqY3k7XCJdLCBbMSwgXCImdWJyY3k7XCJdLCBbMCwgXCImZHpjeTtcIl0sIFs3MDc0LCBcIiZlbnNwO1wiXSwgWzAsIFwiJmVtc3A7XCJdLCBbMCwgXCImZW1zcDEzO1wiXSwgWzAsIFwiJmVtc3AxNDtcIl0sIFsxLCBcIiZudW1zcDtcIl0sIFswLCBcIiZwdW5jc3A7XCJdLCBbMCwgXCImVGhpblNwYWNlO1wiXSwgWzAsIFwiJmhhaXJzcDtcIl0sIFswLCBcIiZOZWdhdGl2ZU1lZGl1bVNwYWNlO1wiXSwgWzAsIFwiJnp3bmo7XCJdLCBbMCwgXCImendqO1wiXSwgWzAsIFwiJmxybTtcIl0sIFswLCBcIiZybG07XCJdLCBbMCwgXCImZGFzaDtcIl0sIFsyLCBcIiZuZGFzaDtcIl0sIFswLCBcIiZtZGFzaDtcIl0sIFswLCBcIiZob3JiYXI7XCJdLCBbMCwgXCImVmVyYmFyO1wiXSwgWzEsIFwiJmxzcXVvO1wiXSwgWzAsIFwiJkNsb3NlQ3VybHlRdW90ZTtcIl0sIFswLCBcIiZsc3F1b3I7XCJdLCBbMSwgXCImbGRxdW87XCJdLCBbMCwgXCImQ2xvc2VDdXJseURvdWJsZVF1b3RlO1wiXSwgWzAsIFwiJmJkcXVvO1wiXSwgWzEsIFwiJmRhZ2dlcjtcIl0sIFswLCBcIiZEYWdnZXI7XCJdLCBbMCwgXCImYnVsbDtcIl0sIFsyLCBcIiZubGRyO1wiXSwgWzAsIFwiJmhlbGxpcDtcIl0sIFs5LCBcIiZwZXJtaWw7XCJdLCBbMCwgXCImcGVydGVuaztcIl0sIFswLCBcIiZwcmltZTtcIl0sIFswLCBcIiZQcmltZTtcIl0sIFswLCBcIiZ0cHJpbWU7XCJdLCBbMCwgXCImYmFja3ByaW1lO1wiXSwgWzMsIFwiJmxzYXF1bztcIl0sIFswLCBcIiZyc2FxdW87XCJdLCBbMywgXCImb2xpbmU7XCJdLCBbMiwgXCImY2FyZXQ7XCJdLCBbMSwgXCImaHlidWxsO1wiXSwgWzAsIFwiJmZyYXNsO1wiXSwgWzEwLCBcIiZic2VtaTtcIl0sIFs3LCBcIiZxcHJpbWU7XCJdLCBbNywgeyB2OiBcIiZNZWRpdW1TcGFjZTtcIiwgbjogODIwMiwgbzogXCImVGhpY2tTcGFjZTtcIiB9XSwgWzAsIFwiJk5vQnJlYWs7XCJdLCBbMCwgXCImYWY7XCJdLCBbMCwgXCImSW52aXNpYmxlVGltZXM7XCJdLCBbMCwgXCImaWM7XCJdLCBbNzIsIFwiJmV1cm87XCJdLCBbNDYsIFwiJnRkb3Q7XCJdLCBbMCwgXCImRG90RG90O1wiXSwgWzM3LCBcIiZjb21wbGV4ZXM7XCJdLCBbMiwgXCImaW5jYXJlO1wiXSwgWzQsIFwiJmdzY3I7XCJdLCBbMCwgXCImaGFtaWx0O1wiXSwgWzAsIFwiJkhmcjtcIl0sIFswLCBcIiZIb3BmO1wiXSwgWzAsIFwiJnBsYW5ja2g7XCJdLCBbMCwgXCImaGJhcjtcIl0sIFswLCBcIiZpbWFnbGluZTtcIl0sIFswLCBcIiZJZnI7XCJdLCBbMCwgXCImbGFncmFuO1wiXSwgWzAsIFwiJmVsbDtcIl0sIFsxLCBcIiZuYXR1cmFscztcIl0sIFswLCBcIiZudW1lcm87XCJdLCBbMCwgXCImY29weXNyO1wiXSwgWzAsIFwiJndlaWVycDtcIl0sIFswLCBcIiZQb3BmO1wiXSwgWzAsIFwiJlFvcGY7XCJdLCBbMCwgXCImcmVhbGluZTtcIl0sIFswLCBcIiZyZWFsO1wiXSwgWzAsIFwiJnJlYWxzO1wiXSwgWzAsIFwiJnJ4O1wiXSwgWzMsIFwiJnRyYWRlO1wiXSwgWzEsIFwiJmludGVnZXJzO1wiXSwgWzIsIFwiJm1obztcIl0sIFswLCBcIiZ6ZWV0cmY7XCJdLCBbMCwgXCImaWlvdGE7XCJdLCBbMiwgXCImYmVybm91O1wiXSwgWzAsIFwiJkNheWxleXM7XCJdLCBbMSwgXCImZXNjcjtcIl0sIFswLCBcIiZFc2NyO1wiXSwgWzAsIFwiJkZvdXJpZXJ0cmY7XCJdLCBbMSwgXCImTWVsbGludHJmO1wiXSwgWzAsIFwiJm9yZGVyO1wiXSwgWzAsIFwiJmFsZWZzeW07XCJdLCBbMCwgXCImYmV0aDtcIl0sIFswLCBcIiZnaW1lbDtcIl0sIFswLCBcIiZkYWxldGg7XCJdLCBbMTIsIFwiJkNhcGl0YWxEaWZmZXJlbnRpYWxEO1wiXSwgWzAsIFwiJmRkO1wiXSwgWzAsIFwiJmVlO1wiXSwgWzAsIFwiJmlpO1wiXSwgWzEwLCBcIiZmcmFjMTM7XCJdLCBbMCwgXCImZnJhYzIzO1wiXSwgWzAsIFwiJmZyYWMxNTtcIl0sIFswLCBcIiZmcmFjMjU7XCJdLCBbMCwgXCImZnJhYzM1O1wiXSwgWzAsIFwiJmZyYWM0NTtcIl0sIFswLCBcIiZmcmFjMTY7XCJdLCBbMCwgXCImZnJhYzU2O1wiXSwgWzAsIFwiJmZyYWMxODtcIl0sIFswLCBcIiZmcmFjMzg7XCJdLCBbMCwgXCImZnJhYzU4O1wiXSwgWzAsIFwiJmZyYWM3ODtcIl0sIFs0OSwgXCImbGFycjtcIl0sIFswLCBcIiZTaG9ydFVwQXJyb3c7XCJdLCBbMCwgXCImcmFycjtcIl0sIFswLCBcIiZkYXJyO1wiXSwgWzAsIFwiJmhhcnI7XCJdLCBbMCwgXCImdXBkb3duYXJyb3c7XCJdLCBbMCwgXCImbndhcnI7XCJdLCBbMCwgXCImbmVhcnI7XCJdLCBbMCwgXCImTG93ZXJSaWdodEFycm93O1wiXSwgWzAsIFwiJkxvd2VyTGVmdEFycm93O1wiXSwgWzAsIFwiJm5sYXJyO1wiXSwgWzAsIFwiJm5yYXJyO1wiXSwgWzEsIHsgdjogXCImcmFycnc7XCIsIG46IDgyNCwgbzogXCImbnJhcnJ3O1wiIH1dLCBbMCwgXCImTGFycjtcIl0sIFswLCBcIiZVYXJyO1wiXSwgWzAsIFwiJlJhcnI7XCJdLCBbMCwgXCImRGFycjtcIl0sIFswLCBcIiZsYXJydGw7XCJdLCBbMCwgXCImcmFycnRsO1wiXSwgWzAsIFwiJkxlZnRUZWVBcnJvdztcIl0sIFswLCBcIiZtYXBzdG91cDtcIl0sIFswLCBcIiZtYXA7XCJdLCBbMCwgXCImRG93blRlZUFycm93O1wiXSwgWzEsIFwiJmhvb2tsZWZ0YXJyb3c7XCJdLCBbMCwgXCImaG9va3JpZ2h0YXJyb3c7XCJdLCBbMCwgXCImbGFycmxwO1wiXSwgWzAsIFwiJmxvb3BhcnJvd3JpZ2h0O1wiXSwgWzAsIFwiJmhhcnJ3O1wiXSwgWzAsIFwiJm5oYXJyO1wiXSwgWzEsIFwiJmxzaDtcIl0sIFswLCBcIiZyc2g7XCJdLCBbMCwgXCImbGRzaDtcIl0sIFswLCBcIiZyZHNoO1wiXSwgWzEsIFwiJmNyYXJyO1wiXSwgWzAsIFwiJmN1bGFycjtcIl0sIFswLCBcIiZjdXJhcnI7XCJdLCBbMiwgXCImY2lyY2xlYXJyb3dsZWZ0O1wiXSwgWzAsIFwiJmNpcmNsZWFycm93cmlnaHQ7XCJdLCBbMCwgXCImbGVmdGhhcnBvb251cDtcIl0sIFswLCBcIiZEb3duTGVmdFZlY3RvcjtcIl0sIFswLCBcIiZSaWdodFVwVmVjdG9yO1wiXSwgWzAsIFwiJkxlZnRVcFZlY3RvcjtcIl0sIFswLCBcIiZyaGFydTtcIl0sIFswLCBcIiZEb3duUmlnaHRWZWN0b3I7XCJdLCBbMCwgXCImZGhhcnI7XCJdLCBbMCwgXCImZGhhcmw7XCJdLCBbMCwgXCImUmlnaHRBcnJvd0xlZnRBcnJvdztcIl0sIFswLCBcIiZ1ZGFycjtcIl0sIFswLCBcIiZMZWZ0QXJyb3dSaWdodEFycm93O1wiXSwgWzAsIFwiJmxlZnRsZWZ0YXJyb3dzO1wiXSwgWzAsIFwiJnVwdXBhcnJvd3M7XCJdLCBbMCwgXCImcmlnaHRyaWdodGFycm93cztcIl0sIFswLCBcIiZkZGFycjtcIl0sIFswLCBcIiZsZWZ0cmlnaHRoYXJwb29ucztcIl0sIFswLCBcIiZFcXVpbGlicml1bTtcIl0sIFswLCBcIiZubEFycjtcIl0sIFswLCBcIiZuaEFycjtcIl0sIFswLCBcIiZuckFycjtcIl0sIFswLCBcIiZEb3VibGVMZWZ0QXJyb3c7XCJdLCBbMCwgXCImRG91YmxlVXBBcnJvdztcIl0sIFswLCBcIiZEb3VibGVSaWdodEFycm93O1wiXSwgWzAsIFwiJmRBcnI7XCJdLCBbMCwgXCImRG91YmxlTGVmdFJpZ2h0QXJyb3c7XCJdLCBbMCwgXCImRG91YmxlVXBEb3duQXJyb3c7XCJdLCBbMCwgXCImbndBcnI7XCJdLCBbMCwgXCImbmVBcnI7XCJdLCBbMCwgXCImc2VBcnI7XCJdLCBbMCwgXCImc3dBcnI7XCJdLCBbMCwgXCImbEFhcnI7XCJdLCBbMCwgXCImckFhcnI7XCJdLCBbMSwgXCImemlncmFycjtcIl0sIFs2LCBcIiZsYXJyYjtcIl0sIFswLCBcIiZyYXJyYjtcIl0sIFsxNSwgXCImRG93bkFycm93VXBBcnJvdztcIl0sIFs3LCBcIiZsb2FycjtcIl0sIFswLCBcIiZyb2FycjtcIl0sIFswLCBcIiZob2FycjtcIl0sIFswLCBcIiZmb3JhbGw7XCJdLCBbMCwgXCImY29tcDtcIl0sIFswLCB7IHY6IFwiJnBhcnQ7XCIsIG46IDgyNCwgbzogXCImbnBhcnQ7XCIgfV0sIFswLCBcIiZleGlzdDtcIl0sIFswLCBcIiZuZXhpc3Q7XCJdLCBbMCwgXCImZW1wdHk7XCJdLCBbMSwgXCImRGVsO1wiXSwgWzAsIFwiJkVsZW1lbnQ7XCJdLCBbMCwgXCImTm90RWxlbWVudDtcIl0sIFsxLCBcIiZuaTtcIl0sIFswLCBcIiZub3RuaTtcIl0sIFsyLCBcIiZwcm9kO1wiXSwgWzAsIFwiJmNvcHJvZDtcIl0sIFswLCBcIiZzdW07XCJdLCBbMCwgXCImbWludXM7XCJdLCBbMCwgXCImTWludXNQbHVzO1wiXSwgWzAsIFwiJmRvdHBsdXM7XCJdLCBbMSwgXCImQmFja3NsYXNoO1wiXSwgWzAsIFwiJmxvd2FzdDtcIl0sIFswLCBcIiZjb21wZm47XCJdLCBbMSwgXCImcmFkaWM7XCJdLCBbMiwgXCImcHJvcDtcIl0sIFswLCBcIiZpbmZpbjtcIl0sIFswLCBcIiZhbmdydDtcIl0sIFswLCB7IHY6IFwiJmFuZztcIiwgbjogODQwMiwgbzogXCImbmFuZztcIiB9XSwgWzAsIFwiJmFuZ21zZDtcIl0sIFswLCBcIiZhbmdzcGg7XCJdLCBbMCwgXCImbWlkO1wiXSwgWzAsIFwiJm5taWQ7XCJdLCBbMCwgXCImRG91YmxlVmVydGljYWxCYXI7XCJdLCBbMCwgXCImTm90RG91YmxlVmVydGljYWxCYXI7XCJdLCBbMCwgXCImYW5kO1wiXSwgWzAsIFwiJm9yO1wiXSwgWzAsIHsgdjogXCImY2FwO1wiLCBuOiA2NTAyNCwgbzogXCImY2FwcztcIiB9XSwgWzAsIHsgdjogXCImY3VwO1wiLCBuOiA2NTAyNCwgbzogXCImY3VwcztcIiB9XSwgWzAsIFwiJmludDtcIl0sIFswLCBcIiZJbnQ7XCJdLCBbMCwgXCImaWlpbnQ7XCJdLCBbMCwgXCImY29uaW50O1wiXSwgWzAsIFwiJkNvbmludDtcIl0sIFswLCBcIiZDY29uaW50O1wiXSwgWzAsIFwiJmN3aW50O1wiXSwgWzAsIFwiJkNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDtcIl0sIFswLCBcIiZhd2NvbmludDtcIl0sIFswLCBcIiZ0aGVyZTQ7XCJdLCBbMCwgXCImYmVjYXVzO1wiXSwgWzAsIFwiJnJhdGlvO1wiXSwgWzAsIFwiJkNvbG9uO1wiXSwgWzAsIFwiJmRvdG1pbnVzO1wiXSwgWzEsIFwiJm1ERG90O1wiXSwgWzAsIFwiJmhvbXRodDtcIl0sIFswLCB7IHY6IFwiJnNpbTtcIiwgbjogODQwMiwgbzogXCImbnZzaW07XCIgfV0sIFswLCB7IHY6IFwiJmJhY2tzaW07XCIsIG46IDgxNywgbzogXCImcmFjZTtcIiB9XSwgWzAsIHsgdjogXCImYWM7XCIsIG46IDgxOSwgbzogXCImYWNFO1wiIH1dLCBbMCwgXCImYWNkO1wiXSwgWzAsIFwiJlZlcnRpY2FsVGlsZGU7XCJdLCBbMCwgXCImTm90VGlsZGU7XCJdLCBbMCwgeyB2OiBcIiZlcXNpbTtcIiwgbjogODI0LCBvOiBcIiZuZXNpbTtcIiB9XSwgWzAsIFwiJnNpbWU7XCJdLCBbMCwgXCImTm90VGlsZGVFcXVhbDtcIl0sIFswLCBcIiZjb25nO1wiXSwgWzAsIFwiJnNpbW5lO1wiXSwgWzAsIFwiJm5jb25nO1wiXSwgWzAsIFwiJmFwO1wiXSwgWzAsIFwiJm5hcDtcIl0sIFswLCBcIiZhcGU7XCJdLCBbMCwgeyB2OiBcIiZhcGlkO1wiLCBuOiA4MjQsIG86IFwiJm5hcGlkO1wiIH1dLCBbMCwgXCImYmFja2Nvbmc7XCJdLCBbMCwgeyB2OiBcIiZhc3ltcGVxO1wiLCBuOiA4NDAyLCBvOiBcIiZudmFwO1wiIH1dLCBbMCwgeyB2OiBcIiZidW1wO1wiLCBuOiA4MjQsIG86IFwiJm5idW1wO1wiIH1dLCBbMCwgeyB2OiBcIiZidW1wZTtcIiwgbjogODI0LCBvOiBcIiZuYnVtcGU7XCIgfV0sIFswLCB7IHY6IFwiJmRvdGVxO1wiLCBuOiA4MjQsIG86IFwiJm5lZG90O1wiIH1dLCBbMCwgXCImZG90ZXFkb3Q7XCJdLCBbMCwgXCImZWZEb3Q7XCJdLCBbMCwgXCImZXJEb3Q7XCJdLCBbMCwgXCImQXNzaWduO1wiXSwgWzAsIFwiJmVjb2xvbjtcIl0sIFswLCBcIiZlY2lyO1wiXSwgWzAsIFwiJmNpcmNlcTtcIl0sIFsxLCBcIiZ3ZWRnZXE7XCJdLCBbMCwgXCImdmVlZXE7XCJdLCBbMSwgXCImdHJpYW5nbGVxO1wiXSwgWzIsIFwiJmVxdWVzdDtcIl0sIFswLCBcIiZuZTtcIl0sIFswLCB7IHY6IFwiJkNvbmdydWVudDtcIiwgbjogODQyMSwgbzogXCImYm5lcXVpdjtcIiB9XSwgWzAsIFwiJm5lcXVpdjtcIl0sIFsxLCB7IHY6IFwiJmxlO1wiLCBuOiA4NDAyLCBvOiBcIiZudmxlO1wiIH1dLCBbMCwgeyB2OiBcIiZnZTtcIiwgbjogODQwMiwgbzogXCImbnZnZTtcIiB9XSwgWzAsIHsgdjogXCImbEU7XCIsIG46IDgyNCwgbzogXCImbmxFO1wiIH1dLCBbMCwgeyB2OiBcIiZnRTtcIiwgbjogODI0LCBvOiBcIiZuZ0U7XCIgfV0sIFswLCB7IHY6IFwiJmxuRTtcIiwgbjogNjUwMjQsIG86IFwiJmx2ZXJ0bmVxcTtcIiB9XSwgWzAsIHsgdjogXCImZ25FO1wiLCBuOiA2NTAyNCwgbzogXCImZ3ZlcnRuZXFxO1wiIH1dLCBbMCwgeyB2OiBcIiZsbDtcIiwgbjogbmV3IE1hcCgvKiAjX19QVVJFX18gKi8gcmVzdG9yZURpZmYoW1s4MjQsIFwiJm5MdHY7XCJdLCBbNzU3NywgXCImbkx0O1wiXV0pKSB9XSwgWzAsIHsgdjogXCImZ2c7XCIsIG46IG5ldyBNYXAoLyogI19fUFVSRV9fICovIHJlc3RvcmVEaWZmKFtbODI0LCBcIiZuR3R2O1wiXSwgWzc1NzcsIFwiJm5HdDtcIl1dKSkgfV0sIFswLCBcIiZiZXR3ZWVuO1wiXSwgWzAsIFwiJk5vdEN1cENhcDtcIl0sIFswLCBcIiZubGVzcztcIl0sIFswLCBcIiZuZ3Q7XCJdLCBbMCwgXCImbmxlO1wiXSwgWzAsIFwiJm5nZTtcIl0sIFswLCBcIiZsZXNzc2ltO1wiXSwgWzAsIFwiJkdyZWF0ZXJUaWxkZTtcIl0sIFswLCBcIiZubHNpbTtcIl0sIFswLCBcIiZuZ3NpbTtcIl0sIFswLCBcIiZMZXNzR3JlYXRlcjtcIl0sIFswLCBcIiZnbDtcIl0sIFswLCBcIiZOb3RMZXNzR3JlYXRlcjtcIl0sIFswLCBcIiZOb3RHcmVhdGVyTGVzcztcIl0sIFswLCBcIiZwcjtcIl0sIFswLCBcIiZzYztcIl0sIFswLCBcIiZwcmN1ZTtcIl0sIFswLCBcIiZzY2N1ZTtcIl0sIFswLCBcIiZQcmVjZWRlc1RpbGRlO1wiXSwgWzAsIHsgdjogXCImc2NzaW07XCIsIG46IDgyNCwgbzogXCImTm90U3VjY2VlZHNUaWxkZTtcIiB9XSwgWzAsIFwiJk5vdFByZWNlZGVzO1wiXSwgWzAsIFwiJk5vdFN1Y2NlZWRzO1wiXSwgWzAsIHsgdjogXCImc3ViO1wiLCBuOiA4NDAyLCBvOiBcIiZOb3RTdWJzZXQ7XCIgfV0sIFswLCB7IHY6IFwiJnN1cDtcIiwgbjogODQwMiwgbzogXCImTm90U3VwZXJzZXQ7XCIgfV0sIFswLCBcIiZuc3ViO1wiXSwgWzAsIFwiJm5zdXA7XCJdLCBbMCwgXCImc3ViZTtcIl0sIFswLCBcIiZzdXBlO1wiXSwgWzAsIFwiJk5vdFN1YnNldEVxdWFsO1wiXSwgWzAsIFwiJk5vdFN1cGVyc2V0RXF1YWw7XCJdLCBbMCwgeyB2OiBcIiZzdWJuZTtcIiwgbjogNjUwMjQsIG86IFwiJnZhcnN1YnNldG5lcTtcIiB9XSwgWzAsIHsgdjogXCImc3VwbmU7XCIsIG46IDY1MDI0LCBvOiBcIiZ2YXJzdXBzZXRuZXE7XCIgfV0sIFsxLCBcIiZjdXBkb3Q7XCJdLCBbMCwgXCImVW5pb25QbHVzO1wiXSwgWzAsIHsgdjogXCImc3FzdWI7XCIsIG46IDgyNCwgbzogXCImTm90U3F1YXJlU3Vic2V0O1wiIH1dLCBbMCwgeyB2OiBcIiZzcXN1cDtcIiwgbjogODI0LCBvOiBcIiZOb3RTcXVhcmVTdXBlcnNldDtcIiB9XSwgWzAsIFwiJnNxc3ViZTtcIl0sIFswLCBcIiZzcXN1cGU7XCJdLCBbMCwgeyB2OiBcIiZzcWNhcDtcIiwgbjogNjUwMjQsIG86IFwiJnNxY2FwcztcIiB9XSwgWzAsIHsgdjogXCImc3FjdXA7XCIsIG46IDY1MDI0LCBvOiBcIiZzcWN1cHM7XCIgfV0sIFswLCBcIiZDaXJjbGVQbHVzO1wiXSwgWzAsIFwiJkNpcmNsZU1pbnVzO1wiXSwgWzAsIFwiJkNpcmNsZVRpbWVzO1wiXSwgWzAsIFwiJm9zb2w7XCJdLCBbMCwgXCImQ2lyY2xlRG90O1wiXSwgWzAsIFwiJmNpcmNsZWRjaXJjO1wiXSwgWzAsIFwiJmNpcmNsZWRhc3Q7XCJdLCBbMSwgXCImY2lyY2xlZGRhc2g7XCJdLCBbMCwgXCImYm94cGx1cztcIl0sIFswLCBcIiZib3htaW51cztcIl0sIFswLCBcIiZib3h0aW1lcztcIl0sIFswLCBcIiZkb3RzcXVhcmU7XCJdLCBbMCwgXCImUmlnaHRUZWU7XCJdLCBbMCwgXCImZGFzaHY7XCJdLCBbMCwgXCImRG93blRlZTtcIl0sIFswLCBcIiZib3Q7XCJdLCBbMSwgXCImbW9kZWxzO1wiXSwgWzAsIFwiJkRvdWJsZVJpZ2h0VGVlO1wiXSwgWzAsIFwiJlZkYXNoO1wiXSwgWzAsIFwiJlZ2ZGFzaDtcIl0sIFswLCBcIiZWRGFzaDtcIl0sIFswLCBcIiZudmRhc2g7XCJdLCBbMCwgXCImbnZEYXNoO1wiXSwgWzAsIFwiJm5WZGFzaDtcIl0sIFswLCBcIiZuVkRhc2g7XCJdLCBbMCwgXCImcHJ1cmVsO1wiXSwgWzEsIFwiJkxlZnRUcmlhbmdsZTtcIl0sIFswLCBcIiZSaWdodFRyaWFuZ2xlO1wiXSwgWzAsIHsgdjogXCImTGVmdFRyaWFuZ2xlRXF1YWw7XCIsIG46IDg0MDIsIG86IFwiJm52bHRyaWU7XCIgfV0sIFswLCB7IHY6IFwiJlJpZ2h0VHJpYW5nbGVFcXVhbDtcIiwgbjogODQwMiwgbzogXCImbnZydHJpZTtcIiB9XSwgWzAsIFwiJm9yaWdvZjtcIl0sIFswLCBcIiZpbW9mO1wiXSwgWzAsIFwiJm11bHRpbWFwO1wiXSwgWzAsIFwiJmhlcmNvbjtcIl0sIFswLCBcIiZpbnRjYWw7XCJdLCBbMCwgXCImdmVlYmFyO1wiXSwgWzEsIFwiJmJhcnZlZTtcIl0sIFswLCBcIiZhbmdydHZiO1wiXSwgWzAsIFwiJmxydHJpO1wiXSwgWzAsIFwiJmJpZ3dlZGdlO1wiXSwgWzAsIFwiJmJpZ3ZlZTtcIl0sIFswLCBcIiZiaWdjYXA7XCJdLCBbMCwgXCImYmlnY3VwO1wiXSwgWzAsIFwiJmRpYW07XCJdLCBbMCwgXCImc2RvdDtcIl0sIFswLCBcIiZzc3RhcmY7XCJdLCBbMCwgXCImZGl2aWRlb250aW1lcztcIl0sIFswLCBcIiZib3d0aWU7XCJdLCBbMCwgXCImbHRpbWVzO1wiXSwgWzAsIFwiJnJ0aW1lcztcIl0sIFswLCBcIiZsZWZ0dGhyZWV0aW1lcztcIl0sIFswLCBcIiZyaWdodHRocmVldGltZXM7XCJdLCBbMCwgXCImYmFja3NpbWVxO1wiXSwgWzAsIFwiJmN1cmx5dmVlO1wiXSwgWzAsIFwiJmN1cmx5d2VkZ2U7XCJdLCBbMCwgXCImU3ViO1wiXSwgWzAsIFwiJlN1cDtcIl0sIFswLCBcIiZDYXA7XCJdLCBbMCwgXCImQ3VwO1wiXSwgWzAsIFwiJmZvcms7XCJdLCBbMCwgXCImZXBhcjtcIl0sIFswLCBcIiZsZXNzZG90O1wiXSwgWzAsIFwiJmd0ZG90O1wiXSwgWzAsIHsgdjogXCImTGw7XCIsIG46IDgyNCwgbzogXCImbkxsO1wiIH1dLCBbMCwgeyB2OiBcIiZHZztcIiwgbjogODI0LCBvOiBcIiZuR2c7XCIgfV0sIFswLCB7IHY6IFwiJmxlZztcIiwgbjogNjUwMjQsIG86IFwiJmxlc2c7XCIgfV0sIFswLCB7IHY6IFwiJmdlbDtcIiwgbjogNjUwMjQsIG86IFwiJmdlc2w7XCIgfV0sIFsyLCBcIiZjdWVwcjtcIl0sIFswLCBcIiZjdWVzYztcIl0sIFswLCBcIiZOb3RQcmVjZWRlc1NsYW50RXF1YWw7XCJdLCBbMCwgXCImTm90U3VjY2VlZHNTbGFudEVxdWFsO1wiXSwgWzAsIFwiJk5vdFNxdWFyZVN1YnNldEVxdWFsO1wiXSwgWzAsIFwiJk5vdFNxdWFyZVN1cGVyc2V0RXF1YWw7XCJdLCBbMiwgXCImbG5zaW07XCJdLCBbMCwgXCImZ25zaW07XCJdLCBbMCwgXCImcHJlY25zaW07XCJdLCBbMCwgXCImc2Nuc2ltO1wiXSwgWzAsIFwiJm5sdHJpO1wiXSwgWzAsIFwiJk5vdFJpZ2h0VHJpYW5nbGU7XCJdLCBbMCwgXCImbmx0cmllO1wiXSwgWzAsIFwiJk5vdFJpZ2h0VHJpYW5nbGVFcXVhbDtcIl0sIFswLCBcIiZ2ZWxsaXA7XCJdLCBbMCwgXCImY3Rkb3Q7XCJdLCBbMCwgXCImdXRkb3Q7XCJdLCBbMCwgXCImZHRkb3Q7XCJdLCBbMCwgXCImZGlzaW47XCJdLCBbMCwgXCImaXNpbnN2O1wiXSwgWzAsIFwiJmlzaW5zO1wiXSwgWzAsIHsgdjogXCImaXNpbmRvdDtcIiwgbjogODI0LCBvOiBcIiZub3RpbmRvdDtcIiB9XSwgWzAsIFwiJm5vdGludmM7XCJdLCBbMCwgXCImbm90aW52YjtcIl0sIFsxLCB7IHY6IFwiJmlzaW5FO1wiLCBuOiA4MjQsIG86IFwiJm5vdGluRTtcIiB9XSwgWzAsIFwiJm5pc2Q7XCJdLCBbMCwgXCImeG5pcztcIl0sIFswLCBcIiZuaXM7XCJdLCBbMCwgXCImbm90bml2YztcIl0sIFswLCBcIiZub3RuaXZiO1wiXSwgWzYsIFwiJmJhcndlZDtcIl0sIFswLCBcIiZCYXJ3ZWQ7XCJdLCBbMSwgXCImbGNlaWw7XCJdLCBbMCwgXCImcmNlaWw7XCJdLCBbMCwgXCImTGVmdEZsb29yO1wiXSwgWzAsIFwiJnJmbG9vcjtcIl0sIFswLCBcIiZkcmNyb3A7XCJdLCBbMCwgXCImZGxjcm9wO1wiXSwgWzAsIFwiJnVyY3JvcDtcIl0sIFswLCBcIiZ1bGNyb3A7XCJdLCBbMCwgXCImYm5vdDtcIl0sIFsxLCBcIiZwcm9mbGluZTtcIl0sIFswLCBcIiZwcm9mc3VyZjtcIl0sIFsxLCBcIiZ0ZWxyZWM7XCJdLCBbMCwgXCImdGFyZ2V0O1wiXSwgWzUsIFwiJnVsY29ybjtcIl0sIFswLCBcIiZ1cmNvcm47XCJdLCBbMCwgXCImZGxjb3JuO1wiXSwgWzAsIFwiJmRyY29ybjtcIl0sIFsyLCBcIiZmcm93bjtcIl0sIFswLCBcIiZzbWlsZTtcIl0sIFs5LCBcIiZjeWxjdHk7XCJdLCBbMCwgXCImcHJvZmFsYXI7XCJdLCBbNywgXCImdG9wYm90O1wiXSwgWzYsIFwiJm92YmFyO1wiXSwgWzEsIFwiJnNvbGJhcjtcIl0sIFs2MCwgXCImYW5nemFycjtcIl0sIFs1MSwgXCImbG1vdXN0YWNoZTtcIl0sIFswLCBcIiZybW91c3RhY2hlO1wiXSwgWzIsIFwiJk92ZXJCcmFja2V0O1wiXSwgWzAsIFwiJmJicms7XCJdLCBbMCwgXCImYmJya3Ricms7XCJdLCBbMzcsIFwiJk92ZXJQYXJlbnRoZXNpcztcIl0sIFswLCBcIiZVbmRlclBhcmVudGhlc2lzO1wiXSwgWzAsIFwiJk92ZXJCcmFjZTtcIl0sIFswLCBcIiZVbmRlckJyYWNlO1wiXSwgWzIsIFwiJnRycGV6aXVtO1wiXSwgWzQsIFwiJmVsaW50ZXJzO1wiXSwgWzU5LCBcIiZibGFuaztcIl0sIFsxNjQsIFwiJmNpcmNsZWRTO1wiXSwgWzU1LCBcIiZib3hoO1wiXSwgWzEsIFwiJmJveHY7XCJdLCBbOSwgXCImYm94ZHI7XCJdLCBbMywgXCImYm94ZGw7XCJdLCBbMywgXCImYm94dXI7XCJdLCBbMywgXCImYm94dWw7XCJdLCBbMywgXCImYm94dnI7XCJdLCBbNywgXCImYm94dmw7XCJdLCBbNywgXCImYm94aGQ7XCJdLCBbNywgXCImYm94aHU7XCJdLCBbNywgXCImYm94dmg7XCJdLCBbMTksIFwiJmJveEg7XCJdLCBbMCwgXCImYm94VjtcIl0sIFswLCBcIiZib3hkUjtcIl0sIFswLCBcIiZib3hEcjtcIl0sIFswLCBcIiZib3hEUjtcIl0sIFswLCBcIiZib3hkTDtcIl0sIFswLCBcIiZib3hEbDtcIl0sIFswLCBcIiZib3hETDtcIl0sIFswLCBcIiZib3h1UjtcIl0sIFswLCBcIiZib3hVcjtcIl0sIFswLCBcIiZib3hVUjtcIl0sIFswLCBcIiZib3h1TDtcIl0sIFswLCBcIiZib3hVbDtcIl0sIFswLCBcIiZib3hVTDtcIl0sIFswLCBcIiZib3h2UjtcIl0sIFswLCBcIiZib3hWcjtcIl0sIFswLCBcIiZib3hWUjtcIl0sIFswLCBcIiZib3h2TDtcIl0sIFswLCBcIiZib3hWbDtcIl0sIFswLCBcIiZib3hWTDtcIl0sIFswLCBcIiZib3hIZDtcIl0sIFswLCBcIiZib3hoRDtcIl0sIFswLCBcIiZib3hIRDtcIl0sIFswLCBcIiZib3hIdTtcIl0sIFswLCBcIiZib3hoVTtcIl0sIFswLCBcIiZib3hIVTtcIl0sIFswLCBcIiZib3h2SDtcIl0sIFswLCBcIiZib3hWaDtcIl0sIFswLCBcIiZib3hWSDtcIl0sIFsxOSwgXCImdWhibGs7XCJdLCBbMywgXCImbGhibGs7XCJdLCBbMywgXCImYmxvY2s7XCJdLCBbOCwgXCImYmxrMTQ7XCJdLCBbMCwgXCImYmxrMTI7XCJdLCBbMCwgXCImYmxrMzQ7XCJdLCBbMTMsIFwiJnNxdWFyZTtcIl0sIFs4LCBcIiZibGFja3NxdWFyZTtcIl0sIFswLCBcIiZFbXB0eVZlcnlTbWFsbFNxdWFyZTtcIl0sIFsxLCBcIiZyZWN0O1wiXSwgWzAsIFwiJm1hcmtlcjtcIl0sIFsyLCBcIiZmbHRucztcIl0sIFsxLCBcIiZiaWd0cmlhbmdsZXVwO1wiXSwgWzAsIFwiJmJsYWNrdHJpYW5nbGU7XCJdLCBbMCwgXCImdHJpYW5nbGU7XCJdLCBbMiwgXCImYmxhY2t0cmlhbmdsZXJpZ2h0O1wiXSwgWzAsIFwiJnJ0cmk7XCJdLCBbMywgXCImYmlndHJpYW5nbGVkb3duO1wiXSwgWzAsIFwiJmJsYWNrdHJpYW5nbGVkb3duO1wiXSwgWzAsIFwiJmR0cmk7XCJdLCBbMiwgXCImYmxhY2t0cmlhbmdsZWxlZnQ7XCJdLCBbMCwgXCImbHRyaTtcIl0sIFs2LCBcIiZsb3o7XCJdLCBbMCwgXCImY2lyO1wiXSwgWzMyLCBcIiZ0cmlkb3Q7XCJdLCBbMiwgXCImYmlnY2lyYztcIl0sIFs4LCBcIiZ1bHRyaTtcIl0sIFswLCBcIiZ1cnRyaTtcIl0sIFswLCBcIiZsbHRyaTtcIl0sIFswLCBcIiZFbXB0eVNtYWxsU3F1YXJlO1wiXSwgWzAsIFwiJkZpbGxlZFNtYWxsU3F1YXJlO1wiXSwgWzgsIFwiJmJpZ3N0YXI7XCJdLCBbMCwgXCImc3RhcjtcIl0sIFs3LCBcIiZwaG9uZTtcIl0sIFs0OSwgXCImZmVtYWxlO1wiXSwgWzEsIFwiJm1hbGU7XCJdLCBbMjksIFwiJnNwYWRlcztcIl0sIFsyLCBcIiZjbHVicztcIl0sIFsxLCBcIiZoZWFydHM7XCJdLCBbMCwgXCImZGlhbW9uZHN1aXQ7XCJdLCBbMywgXCImc3VuZztcIl0sIFsyLCBcIiZmbGF0O1wiXSwgWzAsIFwiJm5hdHVyYWw7XCJdLCBbMCwgXCImc2hhcnA7XCJdLCBbMTYzLCBcIiZjaGVjaztcIl0sIFszLCBcIiZjcm9zcztcIl0sIFs4LCBcIiZtYWx0O1wiXSwgWzIxLCBcIiZzZXh0O1wiXSwgWzMzLCBcIiZWZXJ0aWNhbFNlcGFyYXRvcjtcIl0sIFsyNSwgXCImbGJicms7XCJdLCBbMCwgXCImcmJicms7XCJdLCBbODQsIFwiJmJzb2xoc3ViO1wiXSwgWzAsIFwiJnN1cGhzb2w7XCJdLCBbMjgsIFwiJkxlZnREb3VibGVCcmFja2V0O1wiXSwgWzAsIFwiJlJpZ2h0RG91YmxlQnJhY2tldDtcIl0sIFswLCBcIiZsYW5nO1wiXSwgWzAsIFwiJnJhbmc7XCJdLCBbMCwgXCImTGFuZztcIl0sIFswLCBcIiZSYW5nO1wiXSwgWzAsIFwiJmxvYW5nO1wiXSwgWzAsIFwiJnJvYW5nO1wiXSwgWzcsIFwiJmxvbmdsZWZ0YXJyb3c7XCJdLCBbMCwgXCImbG9uZ3JpZ2h0YXJyb3c7XCJdLCBbMCwgXCImbG9uZ2xlZnRyaWdodGFycm93O1wiXSwgWzAsIFwiJkRvdWJsZUxvbmdMZWZ0QXJyb3c7XCJdLCBbMCwgXCImRG91YmxlTG9uZ1JpZ2h0QXJyb3c7XCJdLCBbMCwgXCImRG91YmxlTG9uZ0xlZnRSaWdodEFycm93O1wiXSwgWzEsIFwiJmxvbmdtYXBzdG87XCJdLCBbMiwgXCImZHppZ3JhcnI7XCJdLCBbMjU4LCBcIiZudmxBcnI7XCJdLCBbMCwgXCImbnZyQXJyO1wiXSwgWzAsIFwiJm52SGFycjtcIl0sIFswLCBcIiZNYXA7XCJdLCBbNiwgXCImbGJhcnI7XCJdLCBbMCwgXCImYmthcm93O1wiXSwgWzAsIFwiJmxCYXJyO1wiXSwgWzAsIFwiJmRia2Fyb3c7XCJdLCBbMCwgXCImZHJia2Fyb3c7XCJdLCBbMCwgXCImRERvdHJhaGQ7XCJdLCBbMCwgXCImVXBBcnJvd0JhcjtcIl0sIFswLCBcIiZEb3duQXJyb3dCYXI7XCJdLCBbMiwgXCImUmFycnRsO1wiXSwgWzIsIFwiJmxhdGFpbDtcIl0sIFswLCBcIiZyYXRhaWw7XCJdLCBbMCwgXCImbEF0YWlsO1wiXSwgWzAsIFwiJnJBdGFpbDtcIl0sIFswLCBcIiZsYXJyZnM7XCJdLCBbMCwgXCImcmFycmZzO1wiXSwgWzAsIFwiJmxhcnJiZnM7XCJdLCBbMCwgXCImcmFycmJmcztcIl0sIFsyLCBcIiZud2FyaGs7XCJdLCBbMCwgXCImbmVhcmhrO1wiXSwgWzAsIFwiJmhrc2Vhcm93O1wiXSwgWzAsIFwiJmhrc3dhcm93O1wiXSwgWzAsIFwiJm53bmVhcjtcIl0sIFswLCBcIiZuZXNlYXI7XCJdLCBbMCwgXCImc2Vzd2FyO1wiXSwgWzAsIFwiJnN3bndhcjtcIl0sIFs4LCB7IHY6IFwiJnJhcnJjO1wiLCBuOiA4MjQsIG86IFwiJm5yYXJyYztcIiB9XSwgWzEsIFwiJmN1ZGFycnI7XCJdLCBbMCwgXCImbGRjYTtcIl0sIFswLCBcIiZyZGNhO1wiXSwgWzAsIFwiJmN1ZGFycmw7XCJdLCBbMCwgXCImbGFycnBsO1wiXSwgWzIsIFwiJmN1cmFycm07XCJdLCBbMCwgXCImY3VsYXJycDtcIl0sIFs3LCBcIiZyYXJycGw7XCJdLCBbMiwgXCImaGFycmNpcjtcIl0sIFswLCBcIiZVYXJyb2NpcjtcIl0sIFswLCBcIiZsdXJkc2hhcjtcIl0sIFswLCBcIiZsZHJ1c2hhcjtcIl0sIFsyLCBcIiZMZWZ0UmlnaHRWZWN0b3I7XCJdLCBbMCwgXCImUmlnaHRVcERvd25WZWN0b3I7XCJdLCBbMCwgXCImRG93bkxlZnRSaWdodFZlY3RvcjtcIl0sIFswLCBcIiZMZWZ0VXBEb3duVmVjdG9yO1wiXSwgWzAsIFwiJkxlZnRWZWN0b3JCYXI7XCJdLCBbMCwgXCImUmlnaHRWZWN0b3JCYXI7XCJdLCBbMCwgXCImUmlnaHRVcFZlY3RvckJhcjtcIl0sIFswLCBcIiZSaWdodERvd25WZWN0b3JCYXI7XCJdLCBbMCwgXCImRG93bkxlZnRWZWN0b3JCYXI7XCJdLCBbMCwgXCImRG93blJpZ2h0VmVjdG9yQmFyO1wiXSwgWzAsIFwiJkxlZnRVcFZlY3RvckJhcjtcIl0sIFswLCBcIiZMZWZ0RG93blZlY3RvckJhcjtcIl0sIFswLCBcIiZMZWZ0VGVlVmVjdG9yO1wiXSwgWzAsIFwiJlJpZ2h0VGVlVmVjdG9yO1wiXSwgWzAsIFwiJlJpZ2h0VXBUZWVWZWN0b3I7XCJdLCBbMCwgXCImUmlnaHREb3duVGVlVmVjdG9yO1wiXSwgWzAsIFwiJkRvd25MZWZ0VGVlVmVjdG9yO1wiXSwgWzAsIFwiJkRvd25SaWdodFRlZVZlY3RvcjtcIl0sIFswLCBcIiZMZWZ0VXBUZWVWZWN0b3I7XCJdLCBbMCwgXCImTGVmdERvd25UZWVWZWN0b3I7XCJdLCBbMCwgXCImbEhhcjtcIl0sIFswLCBcIiZ1SGFyO1wiXSwgWzAsIFwiJnJIYXI7XCJdLCBbMCwgXCImZEhhcjtcIl0sIFswLCBcIiZsdXJ1aGFyO1wiXSwgWzAsIFwiJmxkcmRoYXI7XCJdLCBbMCwgXCImcnVsdWhhcjtcIl0sIFswLCBcIiZyZGxkaGFyO1wiXSwgWzAsIFwiJmxoYXJ1bDtcIl0sIFswLCBcIiZsbGhhcmQ7XCJdLCBbMCwgXCImcmhhcnVsO1wiXSwgWzAsIFwiJmxyaGFyZDtcIl0sIFswLCBcIiZ1ZGhhcjtcIl0sIFswLCBcIiZkdWhhcjtcIl0sIFswLCBcIiZSb3VuZEltcGxpZXM7XCJdLCBbMCwgXCImZXJhcnI7XCJdLCBbMCwgXCImc2ltcmFycjtcIl0sIFswLCBcIiZsYXJyc2ltO1wiXSwgWzAsIFwiJnJhcnJzaW07XCJdLCBbMCwgXCImcmFycmFwO1wiXSwgWzAsIFwiJmx0bGFycjtcIl0sIFsxLCBcIiZndHJhcnI7XCJdLCBbMCwgXCImc3VicmFycjtcIl0sIFsxLCBcIiZzdXBsYXJyO1wiXSwgWzAsIFwiJmxmaXNodDtcIl0sIFswLCBcIiZyZmlzaHQ7XCJdLCBbMCwgXCImdWZpc2h0O1wiXSwgWzAsIFwiJmRmaXNodDtcIl0sIFs1LCBcIiZsb3BhcjtcIl0sIFswLCBcIiZyb3BhcjtcIl0sIFs0LCBcIiZsYnJrZTtcIl0sIFswLCBcIiZyYnJrZTtcIl0sIFswLCBcIiZsYnJrc2x1O1wiXSwgWzAsIFwiJnJicmtzbGQ7XCJdLCBbMCwgXCImbGJya3NsZDtcIl0sIFswLCBcIiZyYnJrc2x1O1wiXSwgWzAsIFwiJmxhbmdkO1wiXSwgWzAsIFwiJnJhbmdkO1wiXSwgWzAsIFwiJmxwYXJsdDtcIl0sIFswLCBcIiZycGFyZ3Q7XCJdLCBbMCwgXCImZ3RsUGFyO1wiXSwgWzAsIFwiJmx0clBhcjtcIl0sIFszLCBcIiZ2emlnemFnO1wiXSwgWzEsIFwiJnZhbmdydDtcIl0sIFswLCBcIiZhbmdydHZiZDtcIl0sIFs2LCBcIiZhbmdlO1wiXSwgWzAsIFwiJnJhbmdlO1wiXSwgWzAsIFwiJmR3YW5nbGU7XCJdLCBbMCwgXCImdXdhbmdsZTtcIl0sIFswLCBcIiZhbmdtc2RhYTtcIl0sIFswLCBcIiZhbmdtc2RhYjtcIl0sIFswLCBcIiZhbmdtc2RhYztcIl0sIFswLCBcIiZhbmdtc2RhZDtcIl0sIFswLCBcIiZhbmdtc2RhZTtcIl0sIFswLCBcIiZhbmdtc2RhZjtcIl0sIFswLCBcIiZhbmdtc2RhZztcIl0sIFswLCBcIiZhbmdtc2RhaDtcIl0sIFswLCBcIiZiZW1wdHl2O1wiXSwgWzAsIFwiJmRlbXB0eXY7XCJdLCBbMCwgXCImY2VtcHR5djtcIl0sIFswLCBcIiZyYWVtcHR5djtcIl0sIFswLCBcIiZsYWVtcHR5djtcIl0sIFswLCBcIiZvaGJhcjtcIl0sIFswLCBcIiZvbWlkO1wiXSwgWzAsIFwiJm9wYXI7XCJdLCBbMSwgXCImb3BlcnA7XCJdLCBbMSwgXCImb2xjcm9zcztcIl0sIFswLCBcIiZvZHNvbGQ7XCJdLCBbMSwgXCImb2xjaXI7XCJdLCBbMCwgXCImb2ZjaXI7XCJdLCBbMCwgXCImb2x0O1wiXSwgWzAsIFwiJm9ndDtcIl0sIFswLCBcIiZjaXJzY2lyO1wiXSwgWzAsIFwiJmNpckU7XCJdLCBbMCwgXCImc29sYjtcIl0sIFswLCBcIiZic29sYjtcIl0sIFszLCBcIiZib3hib3g7XCJdLCBbMywgXCImdHJpc2I7XCJdLCBbMCwgXCImcnRyaWx0cmk7XCJdLCBbMCwgeyB2OiBcIiZMZWZ0VHJpYW5nbGVCYXI7XCIsIG46IDgyNCwgbzogXCImTm90TGVmdFRyaWFuZ2xlQmFyO1wiIH1dLCBbMCwgeyB2OiBcIiZSaWdodFRyaWFuZ2xlQmFyO1wiLCBuOiA4MjQsIG86IFwiJk5vdFJpZ2h0VHJpYW5nbGVCYXI7XCIgfV0sIFsxMSwgXCImaWluZmluO1wiXSwgWzAsIFwiJmluZmludGllO1wiXSwgWzAsIFwiJm52aW5maW47XCJdLCBbNCwgXCImZXBhcnNsO1wiXSwgWzAsIFwiJnNtZXBhcnNsO1wiXSwgWzAsIFwiJmVxdnBhcnNsO1wiXSwgWzUsIFwiJmJsYWNrbG96ZW5nZTtcIl0sIFs4LCBcIiZSdWxlRGVsYXllZDtcIl0sIFsxLCBcIiZkc29sO1wiXSwgWzksIFwiJmJpZ29kb3Q7XCJdLCBbMCwgXCImYmlnb3BsdXM7XCJdLCBbMCwgXCImYmlnb3RpbWVzO1wiXSwgWzEsIFwiJmJpZ3VwbHVzO1wiXSwgWzEsIFwiJmJpZ3NxY3VwO1wiXSwgWzUsIFwiJmlpaWludDtcIl0sIFswLCBcIiZmcGFydGludDtcIl0sIFsyLCBcIiZjaXJmbmludDtcIl0sIFswLCBcIiZhd2ludDtcIl0sIFswLCBcIiZycHBvbGludDtcIl0sIFswLCBcIiZzY3BvbGludDtcIl0sIFswLCBcIiZucG9saW50O1wiXSwgWzAsIFwiJnBvaW50aW50O1wiXSwgWzAsIFwiJnF1YXRpbnQ7XCJdLCBbMCwgXCImaW50bGFyaGs7XCJdLCBbMTAsIFwiJnBsdXNjaXI7XCJdLCBbMCwgXCImcGx1c2FjaXI7XCJdLCBbMCwgXCImc2ltcGx1cztcIl0sIFswLCBcIiZwbHVzZHU7XCJdLCBbMCwgXCImcGx1c3NpbTtcIl0sIFswLCBcIiZwbHVzdHdvO1wiXSwgWzEsIFwiJm1jb21tYTtcIl0sIFswLCBcIiZtaW51c2R1O1wiXSwgWzIsIFwiJmxvcGx1cztcIl0sIFswLCBcIiZyb3BsdXM7XCJdLCBbMCwgXCImQ3Jvc3M7XCJdLCBbMCwgXCImdGltZXNkO1wiXSwgWzAsIFwiJnRpbWVzYmFyO1wiXSwgWzEsIFwiJnNtYXNocDtcIl0sIFswLCBcIiZsb3RpbWVzO1wiXSwgWzAsIFwiJnJvdGltZXM7XCJdLCBbMCwgXCImb3RpbWVzYXM7XCJdLCBbMCwgXCImT3RpbWVzO1wiXSwgWzAsIFwiJm9kaXY7XCJdLCBbMCwgXCImdHJpcGx1cztcIl0sIFswLCBcIiZ0cmltaW51cztcIl0sIFswLCBcIiZ0cml0aW1lO1wiXSwgWzAsIFwiJmludHByb2Q7XCJdLCBbMiwgXCImYW1hbGc7XCJdLCBbMCwgXCImY2FwZG90O1wiXSwgWzEsIFwiJm5jdXA7XCJdLCBbMCwgXCImbmNhcDtcIl0sIFswLCBcIiZjYXBhbmQ7XCJdLCBbMCwgXCImY3Vwb3I7XCJdLCBbMCwgXCImY3VwY2FwO1wiXSwgWzAsIFwiJmNhcGN1cDtcIl0sIFswLCBcIiZjdXBicmNhcDtcIl0sIFswLCBcIiZjYXBicmN1cDtcIl0sIFswLCBcIiZjdXBjdXA7XCJdLCBbMCwgXCImY2FwY2FwO1wiXSwgWzAsIFwiJmNjdXBzO1wiXSwgWzAsIFwiJmNjYXBzO1wiXSwgWzIsIFwiJmNjdXBzc207XCJdLCBbMiwgXCImQW5kO1wiXSwgWzAsIFwiJk9yO1wiXSwgWzAsIFwiJmFuZGFuZDtcIl0sIFswLCBcIiZvcm9yO1wiXSwgWzAsIFwiJm9yc2xvcGU7XCJdLCBbMCwgXCImYW5kc2xvcGU7XCJdLCBbMSwgXCImYW5kdjtcIl0sIFswLCBcIiZvcnY7XCJdLCBbMCwgXCImYW5kZDtcIl0sIFswLCBcIiZvcmQ7XCJdLCBbMSwgXCImd2VkYmFyO1wiXSwgWzYsIFwiJnNkb3RlO1wiXSwgWzMsIFwiJnNpbWRvdDtcIl0sIFsyLCB7IHY6IFwiJmNvbmdkb3Q7XCIsIG46IDgyNCwgbzogXCImbmNvbmdkb3Q7XCIgfV0sIFswLCBcIiZlYXN0ZXI7XCJdLCBbMCwgXCImYXBhY2lyO1wiXSwgWzAsIHsgdjogXCImYXBFO1wiLCBuOiA4MjQsIG86IFwiJm5hcEU7XCIgfV0sIFswLCBcIiZlcGx1cztcIl0sIFswLCBcIiZwbHVzZTtcIl0sIFswLCBcIiZFc2ltO1wiXSwgWzAsIFwiJkNvbG9uZTtcIl0sIFswLCBcIiZFcXVhbDtcIl0sIFsxLCBcIiZkZG90c2VxO1wiXSwgWzAsIFwiJmVxdWl2REQ7XCJdLCBbMCwgXCImbHRjaXI7XCJdLCBbMCwgXCImZ3RjaXI7XCJdLCBbMCwgXCImbHRxdWVzdDtcIl0sIFswLCBcIiZndHF1ZXN0O1wiXSwgWzAsIHsgdjogXCImbGVxc2xhbnQ7XCIsIG46IDgyNCwgbzogXCImbmxlcXNsYW50O1wiIH1dLCBbMCwgeyB2OiBcIiZnZXFzbGFudDtcIiwgbjogODI0LCBvOiBcIiZuZ2Vxc2xhbnQ7XCIgfV0sIFswLCBcIiZsZXNkb3Q7XCJdLCBbMCwgXCImZ2VzZG90O1wiXSwgWzAsIFwiJmxlc2RvdG87XCJdLCBbMCwgXCImZ2VzZG90bztcIl0sIFswLCBcIiZsZXNkb3RvcjtcIl0sIFswLCBcIiZnZXNkb3RvbDtcIl0sIFswLCBcIiZsYXA7XCJdLCBbMCwgXCImZ2FwO1wiXSwgWzAsIFwiJmxuZTtcIl0sIFswLCBcIiZnbmU7XCJdLCBbMCwgXCImbG5hcDtcIl0sIFswLCBcIiZnbmFwO1wiXSwgWzAsIFwiJmxFZztcIl0sIFswLCBcIiZnRWw7XCJdLCBbMCwgXCImbHNpbWU7XCJdLCBbMCwgXCImZ3NpbWU7XCJdLCBbMCwgXCImbHNpbWc7XCJdLCBbMCwgXCImZ3NpbWw7XCJdLCBbMCwgXCImbGdFO1wiXSwgWzAsIFwiJmdsRTtcIl0sIFswLCBcIiZsZXNnZXM7XCJdLCBbMCwgXCImZ2VzbGVzO1wiXSwgWzAsIFwiJmVscztcIl0sIFswLCBcIiZlZ3M7XCJdLCBbMCwgXCImZWxzZG90O1wiXSwgWzAsIFwiJmVnc2RvdDtcIl0sIFswLCBcIiZlbDtcIl0sIFswLCBcIiZlZztcIl0sIFsyLCBcIiZzaW1sO1wiXSwgWzAsIFwiJnNpbWc7XCJdLCBbMCwgXCImc2ltbEU7XCJdLCBbMCwgXCImc2ltZ0U7XCJdLCBbMCwgeyB2OiBcIiZMZXNzTGVzcztcIiwgbjogODI0LCBvOiBcIiZOb3ROZXN0ZWRMZXNzTGVzcztcIiB9XSwgWzAsIHsgdjogXCImR3JlYXRlckdyZWF0ZXI7XCIsIG46IDgyNCwgbzogXCImTm90TmVzdGVkR3JlYXRlckdyZWF0ZXI7XCIgfV0sIFsxLCBcIiZnbGo7XCJdLCBbMCwgXCImZ2xhO1wiXSwgWzAsIFwiJmx0Y2M7XCJdLCBbMCwgXCImZ3RjYztcIl0sIFswLCBcIiZsZXNjYztcIl0sIFswLCBcIiZnZXNjYztcIl0sIFswLCBcIiZzbXQ7XCJdLCBbMCwgXCImbGF0O1wiXSwgWzAsIHsgdjogXCImc210ZTtcIiwgbjogNjUwMjQsIG86IFwiJnNtdGVzO1wiIH1dLCBbMCwgeyB2OiBcIiZsYXRlO1wiLCBuOiA2NTAyNCwgbzogXCImbGF0ZXM7XCIgfV0sIFswLCBcIiZidW1wRTtcIl0sIFswLCB7IHY6IFwiJlByZWNlZGVzRXF1YWw7XCIsIG46IDgyNCwgbzogXCImTm90UHJlY2VkZXNFcXVhbDtcIiB9XSwgWzAsIHsgdjogXCImc2NlO1wiLCBuOiA4MjQsIG86IFwiJk5vdFN1Y2NlZWRzRXF1YWw7XCIgfV0sIFsyLCBcIiZwckU7XCJdLCBbMCwgXCImc2NFO1wiXSwgWzAsIFwiJnByZWNuZXFxO1wiXSwgWzAsIFwiJnNjbkU7XCJdLCBbMCwgXCImcHJhcDtcIl0sIFswLCBcIiZzY2FwO1wiXSwgWzAsIFwiJnByZWNuYXBwcm94O1wiXSwgWzAsIFwiJnNjbmFwO1wiXSwgWzAsIFwiJlByO1wiXSwgWzAsIFwiJlNjO1wiXSwgWzAsIFwiJnN1YmRvdDtcIl0sIFswLCBcIiZzdXBkb3Q7XCJdLCBbMCwgXCImc3VicGx1cztcIl0sIFswLCBcIiZzdXBwbHVzO1wiXSwgWzAsIFwiJnN1Ym11bHQ7XCJdLCBbMCwgXCImc3VwbXVsdDtcIl0sIFswLCBcIiZzdWJlZG90O1wiXSwgWzAsIFwiJnN1cGVkb3Q7XCJdLCBbMCwgeyB2OiBcIiZzdWJFO1wiLCBuOiA4MjQsIG86IFwiJm5zdWJFO1wiIH1dLCBbMCwgeyB2OiBcIiZzdXBFO1wiLCBuOiA4MjQsIG86IFwiJm5zdXBFO1wiIH1dLCBbMCwgXCImc3Vic2ltO1wiXSwgWzAsIFwiJnN1cHNpbTtcIl0sIFsyLCB7IHY6IFwiJnN1Ym5FO1wiLCBuOiA2NTAyNCwgbzogXCImdmFyc3Vic2V0bmVxcTtcIiB9XSwgWzAsIHsgdjogXCImc3VwbkU7XCIsIG46IDY1MDI0LCBvOiBcIiZ2YXJzdXBzZXRuZXFxO1wiIH1dLCBbMiwgXCImY3N1YjtcIl0sIFswLCBcIiZjc3VwO1wiXSwgWzAsIFwiJmNzdWJlO1wiXSwgWzAsIFwiJmNzdXBlO1wiXSwgWzAsIFwiJnN1YnN1cDtcIl0sIFswLCBcIiZzdXBzdWI7XCJdLCBbMCwgXCImc3Vic3ViO1wiXSwgWzAsIFwiJnN1cHN1cDtcIl0sIFswLCBcIiZzdXBoc3ViO1wiXSwgWzAsIFwiJnN1cGRzdWI7XCJdLCBbMCwgXCImZm9ya3Y7XCJdLCBbMCwgXCImdG9wZm9yaztcIl0sIFswLCBcIiZtbGNwO1wiXSwgWzgsIFwiJkRhc2h2O1wiXSwgWzEsIFwiJlZkYXNobDtcIl0sIFswLCBcIiZCYXJ2O1wiXSwgWzAsIFwiJnZCYXI7XCJdLCBbMCwgXCImdkJhcnY7XCJdLCBbMSwgXCImVmJhcjtcIl0sIFswLCBcIiZOb3Q7XCJdLCBbMCwgXCImYk5vdDtcIl0sIFswLCBcIiZybm1pZDtcIl0sIFswLCBcIiZjaXJtaWQ7XCJdLCBbMCwgXCImbWlkY2lyO1wiXSwgWzAsIFwiJnRvcGNpcjtcIl0sIFswLCBcIiZuaHBhcjtcIl0sIFswLCBcIiZwYXJzaW07XCJdLCBbOSwgeyB2OiBcIiZwYXJzbDtcIiwgbjogODQyMSwgbzogXCImbnBhcnNsO1wiIH1dLCBbNDQzNDMsIHsgbjogbmV3IE1hcCgvKiAjX19QVVJFX18gKi8gcmVzdG9yZURpZmYoW1s1NjQ3NiwgXCImQXNjcjtcIl0sIFsxLCBcIiZDc2NyO1wiXSwgWzAsIFwiJkRzY3I7XCJdLCBbMiwgXCImR3NjcjtcIl0sIFsyLCBcIiZKc2NyO1wiXSwgWzAsIFwiJktzY3I7XCJdLCBbMiwgXCImTnNjcjtcIl0sIFswLCBcIiZPc2NyO1wiXSwgWzAsIFwiJlBzY3I7XCJdLCBbMCwgXCImUXNjcjtcIl0sIFsxLCBcIiZTc2NyO1wiXSwgWzAsIFwiJlRzY3I7XCJdLCBbMCwgXCImVXNjcjtcIl0sIFswLCBcIiZWc2NyO1wiXSwgWzAsIFwiJldzY3I7XCJdLCBbMCwgXCImWHNjcjtcIl0sIFswLCBcIiZZc2NyO1wiXSwgWzAsIFwiJlpzY3I7XCJdLCBbMCwgXCImYXNjcjtcIl0sIFswLCBcIiZic2NyO1wiXSwgWzAsIFwiJmNzY3I7XCJdLCBbMCwgXCImZHNjcjtcIl0sIFsxLCBcIiZmc2NyO1wiXSwgWzEsIFwiJmhzY3I7XCJdLCBbMCwgXCImaXNjcjtcIl0sIFswLCBcIiZqc2NyO1wiXSwgWzAsIFwiJmtzY3I7XCJdLCBbMCwgXCImbHNjcjtcIl0sIFswLCBcIiZtc2NyO1wiXSwgWzAsIFwiJm5zY3I7XCJdLCBbMSwgXCImcHNjcjtcIl0sIFswLCBcIiZxc2NyO1wiXSwgWzAsIFwiJnJzY3I7XCJdLCBbMCwgXCImc3NjcjtcIl0sIFswLCBcIiZ0c2NyO1wiXSwgWzAsIFwiJnVzY3I7XCJdLCBbMCwgXCImdnNjcjtcIl0sIFswLCBcIiZ3c2NyO1wiXSwgWzAsIFwiJnhzY3I7XCJdLCBbMCwgXCImeXNjcjtcIl0sIFswLCBcIiZ6c2NyO1wiXSwgWzUyLCBcIiZBZnI7XCJdLCBbMCwgXCImQmZyO1wiXSwgWzEsIFwiJkRmcjtcIl0sIFswLCBcIiZFZnI7XCJdLCBbMCwgXCImRmZyO1wiXSwgWzAsIFwiJkdmcjtcIl0sIFsyLCBcIiZKZnI7XCJdLCBbMCwgXCImS2ZyO1wiXSwgWzAsIFwiJkxmcjtcIl0sIFswLCBcIiZNZnI7XCJdLCBbMCwgXCImTmZyO1wiXSwgWzAsIFwiJk9mcjtcIl0sIFswLCBcIiZQZnI7XCJdLCBbMCwgXCImUWZyO1wiXSwgWzEsIFwiJlNmcjtcIl0sIFswLCBcIiZUZnI7XCJdLCBbMCwgXCImVWZyO1wiXSwgWzAsIFwiJlZmcjtcIl0sIFswLCBcIiZXZnI7XCJdLCBbMCwgXCImWGZyO1wiXSwgWzAsIFwiJllmcjtcIl0sIFsxLCBcIiZhZnI7XCJdLCBbMCwgXCImYmZyO1wiXSwgWzAsIFwiJmNmcjtcIl0sIFswLCBcIiZkZnI7XCJdLCBbMCwgXCImZWZyO1wiXSwgWzAsIFwiJmZmcjtcIl0sIFswLCBcIiZnZnI7XCJdLCBbMCwgXCImaGZyO1wiXSwgWzAsIFwiJmlmcjtcIl0sIFswLCBcIiZqZnI7XCJdLCBbMCwgXCIma2ZyO1wiXSwgWzAsIFwiJmxmcjtcIl0sIFswLCBcIiZtZnI7XCJdLCBbMCwgXCImbmZyO1wiXSwgWzAsIFwiJm9mcjtcIl0sIFswLCBcIiZwZnI7XCJdLCBbMCwgXCImcWZyO1wiXSwgWzAsIFwiJnJmcjtcIl0sIFswLCBcIiZzZnI7XCJdLCBbMCwgXCImdGZyO1wiXSwgWzAsIFwiJnVmcjtcIl0sIFswLCBcIiZ2ZnI7XCJdLCBbMCwgXCImd2ZyO1wiXSwgWzAsIFwiJnhmcjtcIl0sIFswLCBcIiZ5ZnI7XCJdLCBbMCwgXCImemZyO1wiXSwgWzAsIFwiJkFvcGY7XCJdLCBbMCwgXCImQm9wZjtcIl0sIFsxLCBcIiZEb3BmO1wiXSwgWzAsIFwiJkVvcGY7XCJdLCBbMCwgXCImRm9wZjtcIl0sIFswLCBcIiZHb3BmO1wiXSwgWzEsIFwiJklvcGY7XCJdLCBbMCwgXCImSm9wZjtcIl0sIFswLCBcIiZLb3BmO1wiXSwgWzAsIFwiJkxvcGY7XCJdLCBbMCwgXCImTW9wZjtcIl0sIFsxLCBcIiZPb3BmO1wiXSwgWzMsIFwiJlNvcGY7XCJdLCBbMCwgXCImVG9wZjtcIl0sIFswLCBcIiZVb3BmO1wiXSwgWzAsIFwiJlZvcGY7XCJdLCBbMCwgXCImV29wZjtcIl0sIFswLCBcIiZYb3BmO1wiXSwgWzAsIFwiJllvcGY7XCJdLCBbMSwgXCImYW9wZjtcIl0sIFswLCBcIiZib3BmO1wiXSwgWzAsIFwiJmNvcGY7XCJdLCBbMCwgXCImZG9wZjtcIl0sIFswLCBcIiZlb3BmO1wiXSwgWzAsIFwiJmZvcGY7XCJdLCBbMCwgXCImZ29wZjtcIl0sIFswLCBcIiZob3BmO1wiXSwgWzAsIFwiJmlvcGY7XCJdLCBbMCwgXCImam9wZjtcIl0sIFswLCBcIiZrb3BmO1wiXSwgWzAsIFwiJmxvcGY7XCJdLCBbMCwgXCImbW9wZjtcIl0sIFswLCBcIiZub3BmO1wiXSwgWzAsIFwiJm9vcGY7XCJdLCBbMCwgXCImcG9wZjtcIl0sIFswLCBcIiZxb3BmO1wiXSwgWzAsIFwiJnJvcGY7XCJdLCBbMCwgXCImc29wZjtcIl0sIFswLCBcIiZ0b3BmO1wiXSwgWzAsIFwiJnVvcGY7XCJdLCBbMCwgXCImdm9wZjtcIl0sIFswLCBcIiZ3b3BmO1wiXSwgWzAsIFwiJnhvcGY7XCJdLCBbMCwgXCImeW9wZjtcIl0sIFswLCBcIiZ6b3BmO1wiXV0pKSB9XSwgWzg5MDYsIFwiJmZmbGlnO1wiXSwgWzAsIFwiJmZpbGlnO1wiXSwgWzAsIFwiJmZsbGlnO1wiXSwgWzAsIFwiJmZmaWxpZztcIl0sIFswLCBcIiZmZmxsaWc7XCJdXSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5jb2RlLWh0bWwuanMubWFwIiwiaW1wb3J0IHsgZGVjb2RlWE1MLCBkZWNvZGVIVE1MLCBEZWNvZGluZ01vZGUgfSBmcm9tIFwiLi9kZWNvZGUuanNcIjtcbmltcG9ydCB7IGVuY29kZUhUTUwsIGVuY29kZU5vbkFzY2lpSFRNTCB9IGZyb20gXCIuL2VuY29kZS5qc1wiO1xuaW1wb3J0IHsgZW5jb2RlWE1MLCBlc2NhcGVVVEY4LCBlc2NhcGVBdHRyaWJ1dGUsIGVzY2FwZVRleHQsIH0gZnJvbSBcIi4vZXNjYXBlLmpzXCI7XG4vKiogVGhlIGxldmVsIG9mIGVudGl0aWVzIHRvIHN1cHBvcnQuICovXG5leHBvcnQgdmFyIEVudGl0eUxldmVsO1xuKGZ1bmN0aW9uIChFbnRpdHlMZXZlbCkge1xuICAgIC8qKiBTdXBwb3J0IG9ubHkgWE1MIGVudGl0aWVzLiAqL1xuICAgIEVudGl0eUxldmVsW0VudGl0eUxldmVsW1wiWE1MXCJdID0gMF0gPSBcIlhNTFwiO1xuICAgIC8qKiBTdXBwb3J0IEhUTUwgZW50aXRpZXMsIHdoaWNoIGFyZSBhIHN1cGVyc2V0IG9mIFhNTCBlbnRpdGllcy4gKi9cbiAgICBFbnRpdHlMZXZlbFtFbnRpdHlMZXZlbFtcIkhUTUxcIl0gPSAxXSA9IFwiSFRNTFwiO1xufSkoRW50aXR5TGV2ZWwgfHwgKEVudGl0eUxldmVsID0ge30pKTtcbmV4cG9ydCB2YXIgRW5jb2RpbmdNb2RlO1xuKGZ1bmN0aW9uIChFbmNvZGluZ01vZGUpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgb3V0cHV0IGlzIFVURi04IGVuY29kZWQuIE9ubHkgY2hhcmFjdGVycyB0aGF0IG5lZWQgZXNjYXBpbmcgd2l0aGluXG4gICAgICogWE1MIHdpbGwgYmUgZXNjYXBlZC5cbiAgICAgKi9cbiAgICBFbmNvZGluZ01vZGVbRW5jb2RpbmdNb2RlW1wiVVRGOFwiXSA9IDBdID0gXCJVVEY4XCI7XG4gICAgLyoqXG4gICAgICogVGhlIG91dHB1dCBjb25zaXN0cyBvbmx5IG9mIEFTQ0lJIGNoYXJhY3RlcnMuIENoYXJhY3RlcnMgdGhhdCBuZWVkXG4gICAgICogZXNjYXBpbmcgd2l0aGluIEhUTUwsIGFuZCBjaGFyYWN0ZXJzIHRoYXQgYXJlbid0IEFTQ0lJIGNoYXJhY3RlcnMgd2lsbFxuICAgICAqIGJlIGVzY2FwZWQuXG4gICAgICovXG4gICAgRW5jb2RpbmdNb2RlW0VuY29kaW5nTW9kZVtcIkFTQ0lJXCJdID0gMV0gPSBcIkFTQ0lJXCI7XG4gICAgLyoqXG4gICAgICogRW5jb2RlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSBhbiBlcXVpdmFsZW50IGVudGl0eSwgYXMgd2VsbCBhcyBhbGxcbiAgICAgKiBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBBU0NJSSBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIEVuY29kaW5nTW9kZVtFbmNvZGluZ01vZGVbXCJFeHRlbnNpdmVcIl0gPSAyXSA9IFwiRXh0ZW5zaXZlXCI7XG4gICAgLyoqXG4gICAgICogRW5jb2RlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSB0byBiZSBlc2NhcGVkIGluIEhUTUwgYXR0cmlidXRlcyxcbiAgICAgKiBmb2xsb3dpbmcge0BsaW5rIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3BhcnNpbmcuaHRtbCNlc2NhcGluZ1N0cmluZ30uXG4gICAgICovXG4gICAgRW5jb2RpbmdNb2RlW0VuY29kaW5nTW9kZVtcIkF0dHJpYnV0ZVwiXSA9IDNdID0gXCJBdHRyaWJ1dGVcIjtcbiAgICAvKipcbiAgICAgKiBFbmNvZGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBoYXZlIHRvIGJlIGVzY2FwZWQgaW4gSFRNTCB0ZXh0LFxuICAgICAqIGZvbGxvd2luZyB7QGxpbmsgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvcGFyc2luZy5odG1sI2VzY2FwaW5nU3RyaW5nfS5cbiAgICAgKi9cbiAgICBFbmNvZGluZ01vZGVbRW5jb2RpbmdNb2RlW1wiVGV4dFwiXSA9IDRdID0gXCJUZXh0XCI7XG59KShFbmNvZGluZ01vZGUgfHwgKEVuY29kaW5nTW9kZSA9IHt9KSk7XG4vKipcbiAqIERlY29kZXMgYSBzdHJpbmcgd2l0aCBlbnRpdGllcy5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZGVjb2RlLlxuICogQHBhcmFtIG9wdGlvbnMgRGVjb2Rpbmcgb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZShkYXRhLCBvcHRpb25zID0gRW50aXR5TGV2ZWwuWE1MKSB7XG4gICAgY29uc3QgbGV2ZWwgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJudW1iZXJcIiA/IG9wdGlvbnMgOiBvcHRpb25zLmxldmVsO1xuICAgIGlmIChsZXZlbCA9PT0gRW50aXR5TGV2ZWwuSFRNTCkge1xuICAgICAgICBjb25zdCBtb2RlID0gdHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLm1vZGUgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBkZWNvZGVIVE1MKGRhdGEsIG1vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlWE1MKGRhdGEpO1xufVxuLyoqXG4gKiBEZWNvZGVzIGEgc3RyaW5nIHdpdGggZW50aXRpZXMuIERvZXMgbm90IGFsbG93IG1pc3NpbmcgdHJhaWxpbmcgc2VtaWNvbG9ucyBmb3IgZW50aXRpZXMuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGRlY29kZS5cbiAqIEBwYXJhbSBvcHRpb25zIERlY29kaW5nIG9wdGlvbnMuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGRlY29kZWAgd2l0aCB0aGUgYG1vZGVgIHNldCB0byBgU3RyaWN0YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVN0cmljdChkYXRhLCBvcHRpb25zID0gRW50aXR5TGV2ZWwuWE1MKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IG9wdHMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJudW1iZXJcIiA/IHsgbGV2ZWw6IG9wdGlvbnMgfSA6IG9wdGlvbnM7XG4gICAgKF9hID0gb3B0cy5tb2RlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAob3B0cy5tb2RlID0gRGVjb2RpbmdNb2RlLlN0cmljdCk7XG4gICAgcmV0dXJuIGRlY29kZShkYXRhLCBvcHRzKTtcbn1cbi8qKlxuICogRW5jb2RlcyBhIHN0cmluZyB3aXRoIGVudGl0aWVzLlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBlbmNvZGUuXG4gKiBAcGFyYW0gb3B0aW9ucyBFbmNvZGluZyBvcHRpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlKGRhdGEsIG9wdGlvbnMgPSBFbnRpdHlMZXZlbC5YTUwpIHtcbiAgICBjb25zdCBvcHRzID0gdHlwZW9mIG9wdGlvbnMgPT09IFwibnVtYmVyXCIgPyB7IGxldmVsOiBvcHRpb25zIH0gOiBvcHRpb25zO1xuICAgIC8vIE1vZGUgYFVURjhgIGp1c3QgZXNjYXBlcyBYTUwgZW50aXRpZXNcbiAgICBpZiAob3B0cy5tb2RlID09PSBFbmNvZGluZ01vZGUuVVRGOClcbiAgICAgICAgcmV0dXJuIGVzY2FwZVVURjgoZGF0YSk7XG4gICAgaWYgKG9wdHMubW9kZSA9PT0gRW5jb2RpbmdNb2RlLkF0dHJpYnV0ZSlcbiAgICAgICAgcmV0dXJuIGVzY2FwZUF0dHJpYnV0ZShkYXRhKTtcbiAgICBpZiAob3B0cy5tb2RlID09PSBFbmNvZGluZ01vZGUuVGV4dClcbiAgICAgICAgcmV0dXJuIGVzY2FwZVRleHQoZGF0YSk7XG4gICAgaWYgKG9wdHMubGV2ZWwgPT09IEVudGl0eUxldmVsLkhUTUwpIHtcbiAgICAgICAgaWYgKG9wdHMubW9kZSA9PT0gRW5jb2RpbmdNb2RlLkFTQ0lJKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlTm9uQXNjaWlIVE1MKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmNvZGVIVE1MKGRhdGEpO1xuICAgIH1cbiAgICAvLyBBU0NJSSBhbmQgRXh0ZW5zaXZlIGFyZSBlcXVpdmFsZW50XG4gICAgcmV0dXJuIGVuY29kZVhNTChkYXRhKTtcbn1cbmV4cG9ydCB7IGVuY29kZVhNTCwgZXNjYXBlLCBlc2NhcGVVVEY4LCBlc2NhcGVBdHRyaWJ1dGUsIGVzY2FwZVRleHQsIH0gZnJvbSBcIi4vZXNjYXBlLmpzXCI7XG5leHBvcnQgeyBlbmNvZGVIVE1MLCBlbmNvZGVOb25Bc2NpaUhUTUwsIFxuLy8gTGVnYWN5IGFsaWFzZXMgKGRlcHJlY2F0ZWQpXG5lbmNvZGVIVE1MIGFzIGVuY29kZUhUTUw0LCBlbmNvZGVIVE1MIGFzIGVuY29kZUhUTUw1LCB9IGZyb20gXCIuL2VuY29kZS5qc1wiO1xuZXhwb3J0IHsgRW50aXR5RGVjb2RlciwgRGVjb2RpbmdNb2RlLCBkZWNvZGVYTUwsIGRlY29kZUhUTUwsIGRlY29kZUhUTUxTdHJpY3QsIGRlY29kZUhUTUxBdHRyaWJ1dGUsIFxuLy8gTGVnYWN5IGFsaWFzZXMgKGRlcHJlY2F0ZWQpXG5kZWNvZGVIVE1MIGFzIGRlY29kZUhUTUw0LCBkZWNvZGVIVE1MIGFzIGRlY29kZUhUTUw1LCBkZWNvZGVIVE1MU3RyaWN0IGFzIGRlY29kZUhUTUw0U3RyaWN0LCBkZWNvZGVIVE1MU3RyaWN0IGFzIGRlY29kZUhUTUw1U3RyaWN0LCBkZWNvZGVYTUwgYXMgZGVjb2RlWE1MU3RyaWN0LCB9IGZyb20gXCIuL2RlY29kZS5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IFRva2VuaXplciwgeyBRdW90ZVR5cGUgfSBmcm9tIFwiLi9Ub2tlbml6ZXIuanNcIjtcbmltcG9ydCB7IGZyb21Db2RlUG9pbnQgfSBmcm9tIFwiZW50aXRpZXMvbGliL2RlY29kZS5qc1wiO1xuY29uc3QgZm9ybVRhZ3MgPSBuZXcgU2V0KFtcbiAgICBcImlucHV0XCIsXG4gICAgXCJvcHRpb25cIixcbiAgICBcIm9wdGdyb3VwXCIsXG4gICAgXCJzZWxlY3RcIixcbiAgICBcImJ1dHRvblwiLFxuICAgIFwiZGF0YWxpc3RcIixcbiAgICBcInRleHRhcmVhXCIsXG5dKTtcbmNvbnN0IHBUYWcgPSBuZXcgU2V0KFtcInBcIl0pO1xuY29uc3QgdGFibGVTZWN0aW9uVGFncyA9IG5ldyBTZXQoW1widGhlYWRcIiwgXCJ0Ym9keVwiXSk7XG5jb25zdCBkZHRUYWdzID0gbmV3IFNldChbXCJkZFwiLCBcImR0XCJdKTtcbmNvbnN0IHJ0cFRhZ3MgPSBuZXcgU2V0KFtcInJ0XCIsIFwicnBcIl0pO1xuY29uc3Qgb3BlbkltcGxpZXNDbG9zZSA9IG5ldyBNYXAoW1xuICAgIFtcInRyXCIsIG5ldyBTZXQoW1widHJcIiwgXCJ0aFwiLCBcInRkXCJdKV0sXG4gICAgW1widGhcIiwgbmV3IFNldChbXCJ0aFwiXSldLFxuICAgIFtcInRkXCIsIG5ldyBTZXQoW1widGhlYWRcIiwgXCJ0aFwiLCBcInRkXCJdKV0sXG4gICAgW1wiYm9keVwiLCBuZXcgU2V0KFtcImhlYWRcIiwgXCJsaW5rXCIsIFwic2NyaXB0XCJdKV0sXG4gICAgW1wibGlcIiwgbmV3IFNldChbXCJsaVwiXSldLFxuICAgIFtcInBcIiwgcFRhZ10sXG4gICAgW1wiaDFcIiwgcFRhZ10sXG4gICAgW1wiaDJcIiwgcFRhZ10sXG4gICAgW1wiaDNcIiwgcFRhZ10sXG4gICAgW1wiaDRcIiwgcFRhZ10sXG4gICAgW1wiaDVcIiwgcFRhZ10sXG4gICAgW1wiaDZcIiwgcFRhZ10sXG4gICAgW1wic2VsZWN0XCIsIGZvcm1UYWdzXSxcbiAgICBbXCJpbnB1dFwiLCBmb3JtVGFnc10sXG4gICAgW1wib3V0cHV0XCIsIGZvcm1UYWdzXSxcbiAgICBbXCJidXR0b25cIiwgZm9ybVRhZ3NdLFxuICAgIFtcImRhdGFsaXN0XCIsIGZvcm1UYWdzXSxcbiAgICBbXCJ0ZXh0YXJlYVwiLCBmb3JtVGFnc10sXG4gICAgW1wib3B0aW9uXCIsIG5ldyBTZXQoW1wib3B0aW9uXCJdKV0sXG4gICAgW1wib3B0Z3JvdXBcIiwgbmV3IFNldChbXCJvcHRncm91cFwiLCBcIm9wdGlvblwiXSldLFxuICAgIFtcImRkXCIsIGRkdFRhZ3NdLFxuICAgIFtcImR0XCIsIGRkdFRhZ3NdLFxuICAgIFtcImFkZHJlc3NcIiwgcFRhZ10sXG4gICAgW1wiYXJ0aWNsZVwiLCBwVGFnXSxcbiAgICBbXCJhc2lkZVwiLCBwVGFnXSxcbiAgICBbXCJibG9ja3F1b3RlXCIsIHBUYWddLFxuICAgIFtcImRldGFpbHNcIiwgcFRhZ10sXG4gICAgW1wiZGl2XCIsIHBUYWddLFxuICAgIFtcImRsXCIsIHBUYWddLFxuICAgIFtcImZpZWxkc2V0XCIsIHBUYWddLFxuICAgIFtcImZpZ2NhcHRpb25cIiwgcFRhZ10sXG4gICAgW1wiZmlndXJlXCIsIHBUYWddLFxuICAgIFtcImZvb3RlclwiLCBwVGFnXSxcbiAgICBbXCJmb3JtXCIsIHBUYWddLFxuICAgIFtcImhlYWRlclwiLCBwVGFnXSxcbiAgICBbXCJoclwiLCBwVGFnXSxcbiAgICBbXCJtYWluXCIsIHBUYWddLFxuICAgIFtcIm5hdlwiLCBwVGFnXSxcbiAgICBbXCJvbFwiLCBwVGFnXSxcbiAgICBbXCJwcmVcIiwgcFRhZ10sXG4gICAgW1wic2VjdGlvblwiLCBwVGFnXSxcbiAgICBbXCJ0YWJsZVwiLCBwVGFnXSxcbiAgICBbXCJ1bFwiLCBwVGFnXSxcbiAgICBbXCJydFwiLCBydHBUYWdzXSxcbiAgICBbXCJycFwiLCBydHBUYWdzXSxcbiAgICBbXCJ0Ym9keVwiLCB0YWJsZVNlY3Rpb25UYWdzXSxcbiAgICBbXCJ0Zm9vdFwiLCB0YWJsZVNlY3Rpb25UYWdzXSxcbl0pO1xuY29uc3Qgdm9pZEVsZW1lbnRzID0gbmV3IFNldChbXG4gICAgXCJhcmVhXCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJiYXNlZm9udFwiLFxuICAgIFwiYnJcIixcbiAgICBcImNvbFwiLFxuICAgIFwiY29tbWFuZFwiLFxuICAgIFwiZW1iZWRcIixcbiAgICBcImZyYW1lXCIsXG4gICAgXCJoclwiLFxuICAgIFwiaW1nXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaXNpbmRleFwiLFxuICAgIFwia2V5Z2VuXCIsXG4gICAgXCJsaW5rXCIsXG4gICAgXCJtZXRhXCIsXG4gICAgXCJwYXJhbVwiLFxuICAgIFwic291cmNlXCIsXG4gICAgXCJ0cmFja1wiLFxuICAgIFwid2JyXCIsXG5dKTtcbmNvbnN0IGZvcmVpZ25Db250ZXh0RWxlbWVudHMgPSBuZXcgU2V0KFtcIm1hdGhcIiwgXCJzdmdcIl0pO1xuY29uc3QgaHRtbEludGVncmF0aW9uRWxlbWVudHMgPSBuZXcgU2V0KFtcbiAgICBcIm1pXCIsXG4gICAgXCJtb1wiLFxuICAgIFwibW5cIixcbiAgICBcIm1zXCIsXG4gICAgXCJtdGV4dFwiLFxuICAgIFwiYW5ub3RhdGlvbi14bWxcIixcbiAgICBcImZvcmVpZ25vYmplY3RcIixcbiAgICBcImRlc2NcIixcbiAgICBcInRpdGxlXCIsXG5dKTtcbmNvbnN0IHJlTmFtZUVuZCA9IC9cXHN8XFwvLztcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKGNicywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIC8qKiBUaGUgc3RhcnQgaW5kZXggb2YgdGhlIGxhc3QgZXZlbnQuICovXG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIC8qKiBUaGUgZW5kIGluZGV4IG9mIHRoZSBsYXN0IGV2ZW50LiAqL1xuICAgICAgICB0aGlzLmVuZEluZGV4ID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JlIHRoZSBzdGFydCBpbmRleCBvZiB0aGUgY3VycmVudCBvcGVuIHRhZyxcbiAgICAgICAgICogc28gd2UgY2FuIHVwZGF0ZSB0aGUgc3RhcnQgaW5kZXggZm9yIGF0dHJpYnV0ZXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9wZW5UYWdTdGFydCA9IDA7XG4gICAgICAgIHRoaXMudGFnbmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuYXR0cmlibmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuYXR0cmlidmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLmF0dHJpYnMgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YWNrID0gW107XG4gICAgICAgIHRoaXMuZm9yZWlnbkNvbnRleHQgPSBbXTtcbiAgICAgICAgdGhpcy5idWZmZXJzID0gW107XG4gICAgICAgIHRoaXMuYnVmZmVyT2Zmc2V0ID0gMDtcbiAgICAgICAgLyoqIFRoZSBpbmRleCBvZiB0aGUgbGFzdCB3cml0dGVuIGJ1ZmZlci4gVXNlZCB3aGVuIHJlc3VtaW5nIGFmdGVyIGEgYHBhdXNlKClgLiAqL1xuICAgICAgICB0aGlzLndyaXRlSW5kZXggPSAwO1xuICAgICAgICAvKiogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHBhcnNlciBoYXMgZmluaXNoZWQgcnVubmluZyAvIGAuZW5kYCBoYXMgYmVlbiBjYWxsZWQuICovXG4gICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYnMgPSBjYnMgIT09IG51bGwgJiYgY2JzICE9PSB2b2lkIDAgPyBjYnMgOiB7fTtcbiAgICAgICAgdGhpcy5sb3dlckNhc2VUYWdOYW1lcyA9IChfYSA9IG9wdGlvbnMubG93ZXJDYXNlVGFncykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogIW9wdGlvbnMueG1sTW9kZTtcbiAgICAgICAgdGhpcy5sb3dlckNhc2VBdHRyaWJ1dGVOYW1lcyA9XG4gICAgICAgICAgICAoX2IgPSBvcHRpb25zLmxvd2VyQ2FzZUF0dHJpYnV0ZU5hbWVzKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAhb3B0aW9ucy54bWxNb2RlO1xuICAgICAgICB0aGlzLnRva2VuaXplciA9IG5ldyAoKF9jID0gb3B0aW9ucy5Ub2tlbml6ZXIpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFRva2VuaXplcikodGhpcy5vcHRpb25zLCB0aGlzKTtcbiAgICAgICAgKF9lID0gKF9kID0gdGhpcy5jYnMpLm9ucGFyc2VyaW5pdCkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmNhbGwoX2QsIHRoaXMpO1xuICAgIH1cbiAgICAvLyBUb2tlbml6ZXIgZXZlbnQgaGFuZGxlcnNcbiAgICAvKiogQGludGVybmFsICovXG4gICAgb250ZXh0KHN0YXJ0LCBlbmRJbmRleCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRTbGljZShzdGFydCwgZW5kSW5kZXgpO1xuICAgICAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXggLSAxO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmNicykub250ZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgZGF0YSk7XG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IGVuZEluZGV4O1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgb250ZXh0ZW50aXR5KGNwKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8qXG4gICAgICAgICAqIEVudGl0aWVzIGNhbiBiZSBlbWl0dGVkIG9uIHRoZSBjaGFyYWN0ZXIsIG9yIGRpcmVjdGx5IGFmdGVyLlxuICAgICAgICAgKiBXZSB1c2UgdGhlIHNlY3Rpb24gc3RhcnQgaGVyZSB0byBnZXQgYWNjdXJhdGUgaW5kaWNlcy5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2tlbml6ZXIuZ2V0U2VjdGlvblN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZW5kSW5kZXggPSBpbmRleCAtIDE7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuY2JzKS5vbnRleHQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBmcm9tQ29kZVBvaW50KGNwKSk7XG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgICBpc1ZvaWRFbGVtZW50KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLm9wdGlvbnMueG1sTW9kZSAmJiB2b2lkRWxlbWVudHMuaGFzKG5hbWUpO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgb25vcGVudGFnbmFtZShzdGFydCwgZW5kSW5kZXgpIHtcbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZ2V0U2xpY2Uoc3RhcnQsIGVuZEluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMubG93ZXJDYXNlVGFnTmFtZXMpIHtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbWl0T3BlblRhZyhuYW1lKTtcbiAgICB9XG4gICAgZW1pdE9wZW5UYWcobmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgIHRoaXMub3BlblRhZ1N0YXJ0ID0gdGhpcy5zdGFydEluZGV4O1xuICAgICAgICB0aGlzLnRhZ25hbWUgPSBuYW1lO1xuICAgICAgICBjb25zdCBpbXBsaWVzQ2xvc2UgPSAhdGhpcy5vcHRpb25zLnhtbE1vZGUgJiYgb3BlbkltcGxpZXNDbG9zZS5nZXQobmFtZSk7XG4gICAgICAgIGlmIChpbXBsaWVzQ2xvc2UpIHtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICBpbXBsaWVzQ2xvc2UuaGFzKHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5zdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmNicykub25jbG9zZXRhZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1ZvaWRFbGVtZW50KG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2gobmFtZSk7XG4gICAgICAgICAgICBpZiAoZm9yZWlnbkNvbnRleHRFbGVtZW50cy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmVpZ25Db250ZXh0LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChodG1sSW50ZWdyYXRpb25FbGVtZW50cy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmVpZ25Db250ZXh0LnB1c2goZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIChfZCA9IChfYyA9IHRoaXMuY2JzKS5vbm9wZW50YWduYW1lKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2FsbChfYywgbmFtZSk7XG4gICAgICAgIGlmICh0aGlzLmNicy5vbm9wZW50YWcpXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnMgPSB7fTtcbiAgICB9XG4gICAgZW5kT3BlblRhZyhpc0ltcGxpZWQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gdGhpcy5vcGVuVGFnU3RhcnQ7XG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnMpIHtcbiAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuY2JzKS5vbm9wZW50YWcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLnRhZ25hbWUsIHRoaXMuYXR0cmlicywgaXNJbXBsaWVkKTtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlicyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2JzLm9uY2xvc2V0YWcgJiYgdGhpcy5pc1ZvaWRFbGVtZW50KHRoaXMudGFnbmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2JzLm9uY2xvc2V0YWcodGhpcy50YWduYW1lLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhZ25hbWUgPSBcIlwiO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgb25vcGVudGFnZW5kKGVuZEluZGV4KSB7XG4gICAgICAgIHRoaXMuZW5kSW5kZXggPSBlbmRJbmRleDtcbiAgICAgICAgdGhpcy5lbmRPcGVuVGFnKGZhbHNlKTtcbiAgICAgICAgLy8gU2V0IGBzdGFydEluZGV4YCBmb3IgbmV4dCBub2RlXG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IGVuZEluZGV4ICsgMTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG9uY2xvc2V0YWcoc3RhcnQsIGVuZEluZGV4KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgICAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5nZXRTbGljZShzdGFydCwgZW5kSW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5sb3dlckNhc2VUYWdOYW1lcykge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9yZWlnbkNvbnRleHRFbGVtZW50cy5oYXMobmFtZSkgfHxcbiAgICAgICAgICAgIGh0bWxJbnRlZ3JhdGlvbkVsZW1lbnRzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5mb3JlaWduQ29udGV4dC5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNWb2lkRWxlbWVudChuYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5zdGFjay5sYXN0SW5kZXhPZihuYW1lKTtcbiAgICAgICAgICAgIGlmIChwb3MgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2JzLm9uY2xvc2V0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5zdGFjay5sZW5ndGggLSBwb3M7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBrbm93IHRoZSBzdGFjayBoYXMgc3VmZmljaWVudCBlbGVtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2JzLm9uY2xvc2V0YWcodGhpcy5zdGFjay5wb3AoKSwgY291bnQgIT09IDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFjay5sZW5ndGggPSBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5vcHRpb25zLnhtbE1vZGUgJiYgbmFtZSA9PT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJbXBsaWNpdCBvcGVuIGJlZm9yZSBjbG9zZVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE9wZW5UYWcoXCJwXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VDdXJyZW50VGFnKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMueG1sTW9kZSAmJiBuYW1lID09PSBcImJyXCIpIHtcbiAgICAgICAgICAgIC8vIFdlIGNhbid0IHVzZSBgZW1pdE9wZW5UYWdgIGZvciBpbXBsaWNpdCBvcGVuLCBhcyBgYnJgIHdvdWxkIGJlIGltcGxpY2l0bHkgY2xvc2VkLlxuICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5jYnMpLm9ub3BlbnRhZ25hbWUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBcImJyXCIpO1xuICAgICAgICAgICAgKF9kID0gKF9jID0gdGhpcy5jYnMpLm9ub3BlbnRhZykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNhbGwoX2MsIFwiYnJcIiwge30sIHRydWUpO1xuICAgICAgICAgICAgKF9mID0gKF9lID0gdGhpcy5jYnMpLm9uY2xvc2V0YWcpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jYWxsKF9lLCBcImJyXCIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgYHN0YXJ0SW5kZXhgIGZvciBuZXh0IG5vZGVcbiAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gZW5kSW5kZXggKyAxO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgb25zZWxmY2xvc2luZ3RhZyhlbmRJbmRleCkge1xuICAgICAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMueG1sTW9kZSB8fFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlY29nbml6ZVNlbGZDbG9zaW5nIHx8XG4gICAgICAgICAgICB0aGlzLmZvcmVpZ25Db250ZXh0W3RoaXMuZm9yZWlnbkNvbnRleHQubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDdXJyZW50VGFnKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIFNldCBgc3RhcnRJbmRleGAgZm9yIG5leHQgbm9kZVxuICAgICAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gZW5kSW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSWdub3JlIHRoZSBmYWN0IHRoYXQgdGhlIHRhZyBpcyBzZWxmLWNsb3NpbmcuXG4gICAgICAgICAgICB0aGlzLm9ub3BlbnRhZ2VuZChlbmRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xvc2VDdXJyZW50VGFnKGlzT3BlbkltcGxpZWQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMudGFnbmFtZTtcbiAgICAgICAgdGhpcy5lbmRPcGVuVGFnKGlzT3BlbkltcGxpZWQpO1xuICAgICAgICAvLyBTZWxmLWNsb3NpbmcgdGFncyB3aWxsIGJlIG9uIHRoZSB0b3Agb2YgdGhlIHN0YWNrXG4gICAgICAgIGlmICh0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0gPT09IG5hbWUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBvcGVuaW5nIHRhZyBpc24ndCBpbXBsaWVkLCB0aGUgY2xvc2luZyB0YWcgaGFzIHRvIGJlIGltcGxpZWQuXG4gICAgICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmNicykub25jbG9zZXRhZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIG5hbWUsICFpc09wZW5JbXBsaWVkKTtcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG9uYXR0cmlibmFtZShzdGFydCwgZW5kSW5kZXgpIHtcbiAgICAgICAgdGhpcy5zdGFydEluZGV4ID0gc3RhcnQ7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldFNsaWNlKHN0YXJ0LCBlbmRJbmRleCk7XG4gICAgICAgIHRoaXMuYXR0cmlibmFtZSA9IHRoaXMubG93ZXJDYXNlQXR0cmlidXRlTmFtZXNcbiAgICAgICAgICAgID8gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICA6IG5hbWU7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBvbmF0dHJpYmRhdGEoc3RhcnQsIGVuZEluZGV4KSB7XG4gICAgICAgIHRoaXMuYXR0cmlidmFsdWUgKz0gdGhpcy5nZXRTbGljZShzdGFydCwgZW5kSW5kZXgpO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgb25hdHRyaWJlbnRpdHkoY3ApIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ2YWx1ZSArPSBmcm9tQ29kZVBvaW50KGNwKTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG9uYXR0cmliZW5kKHF1b3RlLCBlbmRJbmRleCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuY2JzKS5vbmF0dHJpYnV0ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIHRoaXMuYXR0cmlibmFtZSwgdGhpcy5hdHRyaWJ2YWx1ZSwgcXVvdGUgPT09IFF1b3RlVHlwZS5Eb3VibGVcbiAgICAgICAgICAgID8gJ1wiJ1xuICAgICAgICAgICAgOiBxdW90ZSA9PT0gUXVvdGVUeXBlLlNpbmdsZVxuICAgICAgICAgICAgICAgID8gXCInXCJcbiAgICAgICAgICAgICAgICA6IHF1b3RlID09PSBRdW90ZVR5cGUuTm9WYWx1ZVxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA6IG51bGwpO1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJzICYmXG4gICAgICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuYXR0cmlicywgdGhpcy5hdHRyaWJuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJzW3RoaXMuYXR0cmlibmFtZV0gPSB0aGlzLmF0dHJpYnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0cmlidmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICBnZXRJbnN0cnVjdGlvbk5hbWUodmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZS5zZWFyY2gocmVOYW1lRW5kKTtcbiAgICAgICAgbGV0IG5hbWUgPSBpbmRleCA8IDAgPyB2YWx1ZSA6IHZhbHVlLnN1YnN0cigwLCBpbmRleCk7XG4gICAgICAgIGlmICh0aGlzLmxvd2VyQ2FzZVRhZ05hbWVzKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgb25kZWNsYXJhdGlvbihzdGFydCwgZW5kSW5kZXgpIHtcbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U2xpY2Uoc3RhcnQsIGVuZEluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMuY2JzLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRJbnN0cnVjdGlvbk5hbWUodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24oYCEke25hbWV9YCwgYCEke3ZhbHVlfWApO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCBgc3RhcnRJbmRleGAgZm9yIG5leHQgbm9kZVxuICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSBlbmRJbmRleCArIDE7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBvbnByb2Nlc3NpbmdpbnN0cnVjdGlvbihzdGFydCwgZW5kSW5kZXgpIHtcbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U2xpY2Uoc3RhcnQsIGVuZEluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMuY2JzLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRJbnN0cnVjdGlvbk5hbWUodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24oYD8ke25hbWV9YCwgYD8ke3ZhbHVlfWApO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNldCBgc3RhcnRJbmRleGAgZm9yIG5leHQgbm9kZVxuICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSBlbmRJbmRleCArIDE7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBvbmNvbW1lbnQoc3RhcnQsIGVuZEluZGV4LCBvZmZzZXQpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICB0aGlzLmVuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuY2JzKS5vbmNvbW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB0aGlzLmdldFNsaWNlKHN0YXJ0LCBlbmRJbmRleCAtIG9mZnNldCkpO1xuICAgICAgICAoX2QgPSAoX2MgPSB0aGlzLmNicykub25jb21tZW50ZW5kKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2FsbChfYyk7XG4gICAgICAgIC8vIFNldCBgc3RhcnRJbmRleGAgZm9yIG5leHQgbm9kZVxuICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSBlbmRJbmRleCArIDE7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBvbmNkYXRhKHN0YXJ0LCBlbmRJbmRleCwgb2Zmc2V0KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qLCBfaztcbiAgICAgICAgdGhpcy5lbmRJbmRleCA9IGVuZEluZGV4O1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U2xpY2Uoc3RhcnQsIGVuZEluZGV4IC0gb2Zmc2V0KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy54bWxNb2RlIHx8IHRoaXMub3B0aW9ucy5yZWNvZ25pemVDREFUQSkge1xuICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5jYnMpLm9uY2RhdGFzdGFydCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xuICAgICAgICAgICAgKF9kID0gKF9jID0gdGhpcy5jYnMpLm9udGV4dCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNhbGwoX2MsIHZhbHVlKTtcbiAgICAgICAgICAgIChfZiA9IChfZSA9IHRoaXMuY2JzKS5vbmNkYXRhZW5kKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY2FsbChfZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAoX2ggPSAoX2cgPSB0aGlzLmNicykub25jb21tZW50KSA9PT0gbnVsbCB8fCBfaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2guY2FsbChfZywgYFtDREFUQVske3ZhbHVlfV1dYCk7XG4gICAgICAgICAgICAoX2sgPSAoX2ogPSB0aGlzLmNicykub25jb21tZW50ZW5kKSA9PT0gbnVsbCB8fCBfayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2suY2FsbChfaik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IGBzdGFydEluZGV4YCBmb3IgbmV4dCBub2RlXG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IGVuZEluZGV4ICsgMTtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIG9uZW5kKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodGhpcy5jYnMub25jbG9zZXRhZykge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBlbmQgaW5kZXggZm9yIGFsbCByZW1haW5pbmcgdGFnc1xuICAgICAgICAgICAgdGhpcy5lbmRJbmRleCA9IHRoaXMuc3RhcnRJbmRleDtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5zdGFjay5sZW5ndGg7IGluZGV4ID4gMDsgdGhpcy5jYnMub25jbG9zZXRhZyh0aGlzLnN0YWNrWy0taW5kZXhdLCB0cnVlKSlcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5jYnMpLm9uZW5kKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgcGFyc2VyIHRvIGEgYmxhbmsgc3RhdGUsIHJlYWR5IHRvIHBhcnNlIGEgbmV3IEhUTUwgZG9jdW1lbnRcbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAoX2IgPSAoX2EgPSB0aGlzLmNicykub25yZXNldCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xuICAgICAgICB0aGlzLnRva2VuaXplci5yZXNldCgpO1xuICAgICAgICB0aGlzLnRhZ25hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLmF0dHJpYm5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLmF0dHJpYnMgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YWNrLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuZW5kSW5kZXggPSAwO1xuICAgICAgICAoX2QgPSAoX2MgPSB0aGlzLmNicykub25wYXJzZXJpbml0KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2FsbChfYywgdGhpcyk7XG4gICAgICAgIHRoaXMuYnVmZmVycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmJ1ZmZlck9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMud3JpdGVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBwYXJzZXIsIHRoZW4gcGFyc2VzIGEgY29tcGxldGUgZG9jdW1lbnQgYW5kXG4gICAgICogcHVzaGVzIGl0IHRvIHRoZSBoYW5kbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgRG9jdW1lbnQgdG8gcGFyc2UuXG4gICAgICovXG4gICAgcGFyc2VDb21wbGV0ZShkYXRhKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5lbmQoZGF0YSk7XG4gICAgfVxuICAgIGdldFNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgd2hpbGUgKHN0YXJ0IC0gdGhpcy5idWZmZXJPZmZzZXQgPj0gdGhpcy5idWZmZXJzWzBdLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zaGlmdEJ1ZmZlcigpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzbGljZSA9IHRoaXMuYnVmZmVyc1swXS5zbGljZShzdGFydCAtIHRoaXMuYnVmZmVyT2Zmc2V0LCBlbmQgLSB0aGlzLmJ1ZmZlck9mZnNldCk7XG4gICAgICAgIHdoaWxlIChlbmQgLSB0aGlzLmJ1ZmZlck9mZnNldCA+IHRoaXMuYnVmZmVyc1swXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpZnRCdWZmZXIoKTtcbiAgICAgICAgICAgIHNsaWNlICs9IHRoaXMuYnVmZmVyc1swXS5zbGljZSgwLCBlbmQgLSB0aGlzLmJ1ZmZlck9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNsaWNlO1xuICAgIH1cbiAgICBzaGlmdEJ1ZmZlcigpIHtcbiAgICAgICAgdGhpcy5idWZmZXJPZmZzZXQgKz0gdGhpcy5idWZmZXJzWzBdLmxlbmd0aDtcbiAgICAgICAgdGhpcy53cml0ZUluZGV4LS07XG4gICAgICAgIHRoaXMuYnVmZmVycy5zaGlmdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBjaHVuayBvZiBkYXRhIGFuZCBjYWxscyB0aGUgY29ycmVzcG9uZGluZyBjYWxsYmFja3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2h1bmsgQ2h1bmsgdG8gcGFyc2UuXG4gICAgICovXG4gICAgd3JpdGUoY2h1bmspIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuY2JzKS5vbmVycm9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgbmV3IEVycm9yKFwiLndyaXRlKCkgYWZ0ZXIgZG9uZSFcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnVmZmVycy5wdXNoKGNodW5rKTtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5pemVyLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5pemVyLndyaXRlKGNodW5rKTtcbiAgICAgICAgICAgIHRoaXMud3JpdGVJbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZW5kIG9mIHRoZSBidWZmZXIgYW5kIGNsZWFycyB0aGUgc3RhY2ssIGNhbGxzIG9uZW5kLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNodW5rIE9wdGlvbmFsIGZpbmFsIGNodW5rIHRvIHBhcnNlLlxuICAgICAqL1xuICAgIGVuZChjaHVuaykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgKF9iID0gKF9hID0gdGhpcy5jYnMpLm9uZXJyb3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBuZXcgRXJyb3IoXCIuZW5kKCkgYWZ0ZXIgZG9uZSFcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaHVuaylcbiAgICAgICAgICAgIHRoaXMud3JpdGUoY2h1bmspO1xuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2tlbml6ZXIuZW5kKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhdXNlcyBwYXJzaW5nLiBUaGUgcGFyc2VyIHdvbid0IGVtaXQgZXZlbnRzIHVudGlsIGByZXN1bWVgIGlzIGNhbGxlZC5cbiAgICAgKi9cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy50b2tlbml6ZXIucGF1c2UoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzdW1lcyBwYXJzaW5nIGFmdGVyIGBwYXVzZWAgd2FzIGNhbGxlZC5cbiAgICAgKi9cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMudG9rZW5pemVyLnJlc3VtZSgpO1xuICAgICAgICB3aGlsZSAodGhpcy50b2tlbml6ZXIucnVubmluZyAmJlxuICAgICAgICAgICAgdGhpcy53cml0ZUluZGV4IDwgdGhpcy5idWZmZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy50b2tlbml6ZXIud3JpdGUodGhpcy5idWZmZXJzW3RoaXMud3JpdGVJbmRleCsrXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpXG4gICAgICAgICAgICB0aGlzLnRva2VuaXplci5lbmQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgb2YgYHdyaXRlYCwgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGNodW5rIENodW5rIHRvIHBhcnNlLlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgcGFyc2VDaHVuayhjaHVuaykge1xuICAgICAgICB0aGlzLndyaXRlKGNodW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxpYXMgb2YgYGVuZGAsIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjaHVuayBPcHRpb25hbCBmaW5hbCBjaHVuayB0byBwYXJzZS5cbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqL1xuICAgIGRvbmUoY2h1bmspIHtcbiAgICAgICAgdGhpcy5lbmQoY2h1bmspO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBhcnNlci5qcy5tYXAiLCJpbXBvcnQgeyBodG1sRGVjb2RlVHJlZSwgeG1sRGVjb2RlVHJlZSwgQmluVHJpZUZsYWdzLCBkZXRlcm1pbmVCcmFuY2gsIHJlcGxhY2VDb2RlUG9pbnQsIH0gZnJvbSBcImVudGl0aWVzL2xpYi9kZWNvZGUuanNcIjtcbnZhciBDaGFyQ29kZXM7XG4oZnVuY3Rpb24gKENoYXJDb2Rlcykge1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJUYWJcIl0gPSA5XSA9IFwiVGFiXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIk5ld0xpbmVcIl0gPSAxMF0gPSBcIk5ld0xpbmVcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiRm9ybUZlZWRcIl0gPSAxMl0gPSBcIkZvcm1GZWVkXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkNhcnJpYWdlUmV0dXJuXCJdID0gMTNdID0gXCJDYXJyaWFnZVJldHVyblwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJTcGFjZVwiXSA9IDMyXSA9IFwiU3BhY2VcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiRXhjbGFtYXRpb25NYXJrXCJdID0gMzNdID0gXCJFeGNsYW1hdGlvbk1hcmtcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiTnVtYmVyXCJdID0gMzVdID0gXCJOdW1iZXJcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiQW1wXCJdID0gMzhdID0gXCJBbXBcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiU2luZ2xlUXVvdGVcIl0gPSAzOV0gPSBcIlNpbmdsZVF1b3RlXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkRvdWJsZVF1b3RlXCJdID0gMzRdID0gXCJEb3VibGVRdW90ZVwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJEYXNoXCJdID0gNDVdID0gXCJEYXNoXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIlNsYXNoXCJdID0gNDddID0gXCJTbGFzaFwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJaZXJvXCJdID0gNDhdID0gXCJaZXJvXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIk5pbmVcIl0gPSA1N10gPSBcIk5pbmVcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiU2VtaVwiXSA9IDU5XSA9IFwiU2VtaVwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJMdFwiXSA9IDYwXSA9IFwiTHRcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiRXFcIl0gPSA2MV0gPSBcIkVxXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkd0XCJdID0gNjJdID0gXCJHdFwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJRdWVzdGlvbm1hcmtcIl0gPSA2M10gPSBcIlF1ZXN0aW9ubWFya1wiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJVcHBlckFcIl0gPSA2NV0gPSBcIlVwcGVyQVwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJMb3dlckFcIl0gPSA5N10gPSBcIkxvd2VyQVwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJVcHBlckZcIl0gPSA3MF0gPSBcIlVwcGVyRlwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJMb3dlckZcIl0gPSAxMDJdID0gXCJMb3dlckZcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiVXBwZXJaXCJdID0gOTBdID0gXCJVcHBlclpcIjtcbiAgICBDaGFyQ29kZXNbQ2hhckNvZGVzW1wiTG93ZXJaXCJdID0gMTIyXSA9IFwiTG93ZXJaXCI7XG4gICAgQ2hhckNvZGVzW0NoYXJDb2Rlc1tcIkxvd2VyWFwiXSA9IDEyMF0gPSBcIkxvd2VyWFwiO1xuICAgIENoYXJDb2Rlc1tDaGFyQ29kZXNbXCJPcGVuaW5nU3F1YXJlQnJhY2tldFwiXSA9IDkxXSA9IFwiT3BlbmluZ1NxdWFyZUJyYWNrZXRcIjtcbn0pKENoYXJDb2RlcyB8fCAoQ2hhckNvZGVzID0ge30pKTtcbi8qKiBBbGwgdGhlIHN0YXRlcyB0aGUgdG9rZW5pemVyIGNhbiBiZSBpbi4gKi9cbnZhciBTdGF0ZTtcbihmdW5jdGlvbiAoU3RhdGUpIHtcbiAgICBTdGF0ZVtTdGF0ZVtcIlRleHRcIl0gPSAxXSA9IFwiVGV4dFwiO1xuICAgIFN0YXRlW1N0YXRlW1wiQmVmb3JlVGFnTmFtZVwiXSA9IDJdID0gXCJCZWZvcmVUYWdOYW1lXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJJblRhZ05hbWVcIl0gPSAzXSA9IFwiSW5UYWdOYW1lXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJJblNlbGZDbG9zaW5nVGFnXCJdID0gNF0gPSBcIkluU2VsZkNsb3NpbmdUYWdcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkJlZm9yZUNsb3NpbmdUYWdOYW1lXCJdID0gNV0gPSBcIkJlZm9yZUNsb3NpbmdUYWdOYW1lXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJJbkNsb3NpbmdUYWdOYW1lXCJdID0gNl0gPSBcIkluQ2xvc2luZ1RhZ05hbWVcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkFmdGVyQ2xvc2luZ1RhZ05hbWVcIl0gPSA3XSA9IFwiQWZ0ZXJDbG9zaW5nVGFnTmFtZVwiO1xuICAgIC8vIEF0dHJpYnV0ZXNcbiAgICBTdGF0ZVtTdGF0ZVtcIkJlZm9yZUF0dHJpYnV0ZU5hbWVcIl0gPSA4XSA9IFwiQmVmb3JlQXR0cmlidXRlTmFtZVwiO1xuICAgIFN0YXRlW1N0YXRlW1wiSW5BdHRyaWJ1dGVOYW1lXCJdID0gOV0gPSBcIkluQXR0cmlidXRlTmFtZVwiO1xuICAgIFN0YXRlW1N0YXRlW1wiQWZ0ZXJBdHRyaWJ1dGVOYW1lXCJdID0gMTBdID0gXCJBZnRlckF0dHJpYnV0ZU5hbWVcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkJlZm9yZUF0dHJpYnV0ZVZhbHVlXCJdID0gMTFdID0gXCJCZWZvcmVBdHRyaWJ1dGVWYWx1ZVwiO1xuICAgIFN0YXRlW1N0YXRlW1wiSW5BdHRyaWJ1dGVWYWx1ZURxXCJdID0gMTJdID0gXCJJbkF0dHJpYnV0ZVZhbHVlRHFcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkluQXR0cmlidXRlVmFsdWVTcVwiXSA9IDEzXSA9IFwiSW5BdHRyaWJ1dGVWYWx1ZVNxXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJJbkF0dHJpYnV0ZVZhbHVlTnFcIl0gPSAxNF0gPSBcIkluQXR0cmlidXRlVmFsdWVOcVwiO1xuICAgIC8vIERlY2xhcmF0aW9uc1xuICAgIFN0YXRlW1N0YXRlW1wiQmVmb3JlRGVjbGFyYXRpb25cIl0gPSAxNV0gPSBcIkJlZm9yZURlY2xhcmF0aW9uXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJJbkRlY2xhcmF0aW9uXCJdID0gMTZdID0gXCJJbkRlY2xhcmF0aW9uXCI7XG4gICAgLy8gUHJvY2Vzc2luZyBpbnN0cnVjdGlvbnNcbiAgICBTdGF0ZVtTdGF0ZVtcIkluUHJvY2Vzc2luZ0luc3RydWN0aW9uXCJdID0gMTddID0gXCJJblByb2Nlc3NpbmdJbnN0cnVjdGlvblwiO1xuICAgIC8vIENvbW1lbnRzICYgQ0RBVEFcbiAgICBTdGF0ZVtTdGF0ZVtcIkJlZm9yZUNvbW1lbnRcIl0gPSAxOF0gPSBcIkJlZm9yZUNvbW1lbnRcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNEQVRBU2VxdWVuY2VcIl0gPSAxOV0gPSBcIkNEQVRBU2VxdWVuY2VcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkluU3BlY2lhbENvbW1lbnRcIl0gPSAyMF0gPSBcIkluU3BlY2lhbENvbW1lbnRcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkluQ29tbWVudExpa2VcIl0gPSAyMV0gPSBcIkluQ29tbWVudExpa2VcIjtcbiAgICAvLyBTcGVjaWFsIHRhZ3NcbiAgICBTdGF0ZVtTdGF0ZVtcIkJlZm9yZVNwZWNpYWxTXCJdID0gMjJdID0gXCJCZWZvcmVTcGVjaWFsU1wiO1xuICAgIFN0YXRlW1N0YXRlW1wiU3BlY2lhbFN0YXJ0U2VxdWVuY2VcIl0gPSAyM10gPSBcIlNwZWNpYWxTdGFydFNlcXVlbmNlXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJJblNwZWNpYWxUYWdcIl0gPSAyNF0gPSBcIkluU3BlY2lhbFRhZ1wiO1xuICAgIFN0YXRlW1N0YXRlW1wiQmVmb3JlRW50aXR5XCJdID0gMjVdID0gXCJCZWZvcmVFbnRpdHlcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkJlZm9yZU51bWVyaWNFbnRpdHlcIl0gPSAyNl0gPSBcIkJlZm9yZU51bWVyaWNFbnRpdHlcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkluTmFtZWRFbnRpdHlcIl0gPSAyN10gPSBcIkluTmFtZWRFbnRpdHlcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkluTnVtZXJpY0VudGl0eVwiXSA9IDI4XSA9IFwiSW5OdW1lcmljRW50aXR5XCI7XG4gICAgU3RhdGVbU3RhdGVbXCJJbkhleEVudGl0eVwiXSA9IDI5XSA9IFwiSW5IZXhFbnRpdHlcIjtcbn0pKFN0YXRlIHx8IChTdGF0ZSA9IHt9KSk7XG5mdW5jdGlvbiBpc1doaXRlc3BhY2UoYykge1xuICAgIHJldHVybiAoYyA9PT0gQ2hhckNvZGVzLlNwYWNlIHx8XG4gICAgICAgIGMgPT09IENoYXJDb2Rlcy5OZXdMaW5lIHx8XG4gICAgICAgIGMgPT09IENoYXJDb2Rlcy5UYWIgfHxcbiAgICAgICAgYyA9PT0gQ2hhckNvZGVzLkZvcm1GZWVkIHx8XG4gICAgICAgIGMgPT09IENoYXJDb2Rlcy5DYXJyaWFnZVJldHVybik7XG59XG5mdW5jdGlvbiBpc0VuZE9mVGFnU2VjdGlvbihjKSB7XG4gICAgcmV0dXJuIGMgPT09IENoYXJDb2Rlcy5TbGFzaCB8fCBjID09PSBDaGFyQ29kZXMuR3QgfHwgaXNXaGl0ZXNwYWNlKGMpO1xufVxuZnVuY3Rpb24gaXNOdW1iZXIoYykge1xuICAgIHJldHVybiBjID49IENoYXJDb2Rlcy5aZXJvICYmIGMgPD0gQ2hhckNvZGVzLk5pbmU7XG59XG5mdW5jdGlvbiBpc0FTQ0lJQWxwaGEoYykge1xuICAgIHJldHVybiAoKGMgPj0gQ2hhckNvZGVzLkxvd2VyQSAmJiBjIDw9IENoYXJDb2Rlcy5Mb3dlclopIHx8XG4gICAgICAgIChjID49IENoYXJDb2Rlcy5VcHBlckEgJiYgYyA8PSBDaGFyQ29kZXMuVXBwZXJaKSk7XG59XG5mdW5jdGlvbiBpc0hleERpZ2l0KGMpIHtcbiAgICByZXR1cm4gKChjID49IENoYXJDb2Rlcy5VcHBlckEgJiYgYyA8PSBDaGFyQ29kZXMuVXBwZXJGKSB8fFxuICAgICAgICAoYyA+PSBDaGFyQ29kZXMuTG93ZXJBICYmIGMgPD0gQ2hhckNvZGVzLkxvd2VyRikpO1xufVxuZXhwb3J0IHZhciBRdW90ZVR5cGU7XG4oZnVuY3Rpb24gKFF1b3RlVHlwZSkge1xuICAgIFF1b3RlVHlwZVtRdW90ZVR5cGVbXCJOb1ZhbHVlXCJdID0gMF0gPSBcIk5vVmFsdWVcIjtcbiAgICBRdW90ZVR5cGVbUXVvdGVUeXBlW1wiVW5xdW90ZWRcIl0gPSAxXSA9IFwiVW5xdW90ZWRcIjtcbiAgICBRdW90ZVR5cGVbUXVvdGVUeXBlW1wiU2luZ2xlXCJdID0gMl0gPSBcIlNpbmdsZVwiO1xuICAgIFF1b3RlVHlwZVtRdW90ZVR5cGVbXCJEb3VibGVcIl0gPSAzXSA9IFwiRG91YmxlXCI7XG59KShRdW90ZVR5cGUgfHwgKFF1b3RlVHlwZSA9IHt9KSk7XG4vKipcbiAqIFNlcXVlbmNlcyB1c2VkIHRvIG1hdGNoIGxvbmdlciBzdHJpbmdzLlxuICpcbiAqIFdlIGRvbid0IGhhdmUgYFNjcmlwdGAsIGBTdHlsZWAsIG9yIGBUaXRsZWAgaGVyZS4gSW5zdGVhZCwgd2UgcmUtdXNlIHRoZSAqRW5kXG4gKiBzZXF1ZW5jZXMgd2l0aCBhbiBpbmNyZWFzZWQgb2Zmc2V0LlxuICovXG5jb25zdCBTZXF1ZW5jZXMgPSB7XG4gICAgQ2RhdGE6IG5ldyBVaW50OEFycmF5KFsweDQzLCAweDQ0LCAweDQxLCAweDU0LCAweDQxLCAweDViXSksXG4gICAgQ2RhdGFFbmQ6IG5ldyBVaW50OEFycmF5KFsweDVkLCAweDVkLCAweDNlXSksXG4gICAgQ29tbWVudEVuZDogbmV3IFVpbnQ4QXJyYXkoWzB4MmQsIDB4MmQsIDB4M2VdKSxcbiAgICBTY3JpcHRFbmQ6IG5ldyBVaW50OEFycmF5KFsweDNjLCAweDJmLCAweDczLCAweDYzLCAweDcyLCAweDY5LCAweDcwLCAweDc0XSksXG4gICAgU3R5bGVFbmQ6IG5ldyBVaW50OEFycmF5KFsweDNjLCAweDJmLCAweDczLCAweDc0LCAweDc5LCAweDZjLCAweDY1XSksXG4gICAgVGl0bGVFbmQ6IG5ldyBVaW50OEFycmF5KFsweDNjLCAweDJmLCAweDc0LCAweDY5LCAweDc0LCAweDZjLCAweDY1XSksIC8vIGA8L3RpdGxlYFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2VuaXplciB7XG4gICAgY29uc3RydWN0b3IoeyB4bWxNb2RlID0gZmFsc2UsIGRlY29kZUVudGl0aWVzID0gdHJ1ZSwgfSwgY2JzKSB7XG4gICAgICAgIHRoaXMuY2JzID0gY2JzO1xuICAgICAgICAvKiogVGhlIGN1cnJlbnQgc3RhdGUgdGhlIHRva2VuaXplciBpcyBpbi4gKi9cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLlRleHQ7XG4gICAgICAgIC8qKiBUaGUgcmVhZCBidWZmZXIuICovXG4gICAgICAgIHRoaXMuYnVmZmVyID0gXCJcIjtcbiAgICAgICAgLyoqIFRoZSBiZWdpbm5pbmcgb2YgdGhlIHNlY3Rpb24gdGhhdCBpcyBjdXJyZW50bHkgYmVpbmcgcmVhZC4gKi9cbiAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSAwO1xuICAgICAgICAvKiogVGhlIGluZGV4IHdpdGhpbiB0aGUgYnVmZmVyIHRoYXQgd2UgYXJlIGN1cnJlbnRseSBsb29raW5nIGF0LiAqL1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgLyoqIFNvbWUgYmVoYXZpb3IsIGVnLiB3aGVuIGRlY29kaW5nIGVudGl0aWVzLCBpcyBkb25lIHdoaWxlIHdlIGFyZSBpbiBhbm90aGVyIHN0YXRlLiBUaGlzIGtlZXBzIHRyYWNrIG9mIHRoZSBvdGhlciBzdGF0ZSB0eXBlLiAqL1xuICAgICAgICB0aGlzLmJhc2VTdGF0ZSA9IFN0YXRlLlRleHQ7XG4gICAgICAgIC8qKiBGb3Igc3BlY2lhbCBwYXJzaW5nIGJlaGF2aW9yIGluc2lkZSBvZiBzY3JpcHQgYW5kIHN0eWxlIHRhZ3MuICovXG4gICAgICAgIHRoaXMuaXNTcGVjaWFsID0gZmFsc2U7XG4gICAgICAgIC8qKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdG9rZW5pemVyIGhhcyBiZWVuIHBhdXNlZC4gKi9cbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgLyoqIFRoZSBvZmZzZXQgb2YgdGhlIGN1cnJlbnQgYnVmZmVyLiAqL1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNlcXVlbmNlSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRyaWVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMudHJpZUN1cnJlbnQgPSAwO1xuICAgICAgICAvKiogRm9yIG5hbWVkIGVudGl0aWVzLCB0aGUgaW5kZXggb2YgdGhlIHZhbHVlLiBGb3IgbnVtZXJpYyBlbnRpdGllcywgdGhlIGNvZGUgcG9pbnQuICovXG4gICAgICAgIHRoaXMuZW50aXR5UmVzdWx0ID0gMDtcbiAgICAgICAgdGhpcy5lbnRpdHlFeGNlc3MgPSAwO1xuICAgICAgICB0aGlzLnhtbE1vZGUgPSB4bWxNb2RlO1xuICAgICAgICB0aGlzLmRlY29kZUVudGl0aWVzID0gZGVjb2RlRW50aXRpZXM7XG4gICAgICAgIHRoaXMuZW50aXR5VHJpZSA9IHhtbE1vZGUgPyB4bWxEZWNvZGVUcmVlIDogaHRtbERlY29kZVRyZWU7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuVGV4dDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBcIlwiO1xuICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IDA7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLmJhc2VTdGF0ZSA9IFN0YXRlLlRleHQ7XG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgfVxuICAgIHdyaXRlKGNodW5rKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ICs9IHRoaXMuYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBjaHVuaztcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgIH1cbiAgICBlbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpXG4gICAgICAgICAgICB0aGlzLmZpbmlzaCgpO1xuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLmJ1ZmZlci5sZW5ndGggKyB0aGlzLm9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGluZGV4IHdpdGhpbiBhbGwgb2YgdGhlIHdyaXR0ZW4gZGF0YS5cbiAgICAgKi9cbiAgICBnZXRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBzdGFydCBvZiB0aGUgY3VycmVudCBzZWN0aW9uLlxuICAgICAqL1xuICAgIGdldFNlY3Rpb25TdGFydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VjdGlvblN0YXJ0O1xuICAgIH1cbiAgICBzdGF0ZVRleHQoYykge1xuICAgICAgICBpZiAoYyA9PT0gQ2hhckNvZGVzLkx0IHx8XG4gICAgICAgICAgICAoIXRoaXMuZGVjb2RlRW50aXRpZXMgJiYgdGhpcy5mYXN0Rm9yd2FyZFRvKENoYXJDb2Rlcy5MdCkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA+IHRoaXMuc2VjdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYnMub250ZXh0KHRoaXMuc2VjdGlvblN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5CZWZvcmVUYWdOYW1lO1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGVjb2RlRW50aXRpZXMgJiYgYyA9PT0gQ2hhckNvZGVzLkFtcCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkJlZm9yZUVudGl0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZVNwZWNpYWxTdGFydFNlcXVlbmNlKGMpIHtcbiAgICAgICAgY29uc3QgaXNFbmQgPSB0aGlzLnNlcXVlbmNlSW5kZXggPT09IHRoaXMuY3VycmVudFNlcXVlbmNlLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaXNNYXRjaCA9IGlzRW5kXG4gICAgICAgICAgICA/IC8vIElmIHdlIGFyZSBhdCB0aGUgZW5kIG9mIHRoZSBzZXF1ZW5jZSwgbWFrZSBzdXJlIHRoZSB0YWcgbmFtZSBoYXMgZW5kZWRcbiAgICAgICAgICAgICAgICBpc0VuZE9mVGFnU2VjdGlvbihjKVxuICAgICAgICAgICAgOiAvLyBPdGhlcndpc2UsIGRvIGEgY2FzZS1pbnNlbnNpdGl2ZSBjb21wYXJpc29uXG4gICAgICAgICAgICAgICAgKGMgfCAweDIwKSA9PT0gdGhpcy5jdXJyZW50U2VxdWVuY2VbdGhpcy5zZXF1ZW5jZUluZGV4XTtcbiAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BlY2lhbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc0VuZCkge1xuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZUluZGV4Kys7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXF1ZW5jZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkluVGFnTmFtZTtcbiAgICAgICAgdGhpcy5zdGF0ZUluVGFnTmFtZShjKTtcbiAgICB9XG4gICAgLyoqIExvb2sgZm9yIGFuIGVuZCB0YWcuIEZvciA8dGl0bGU+IHRhZ3MsIGFsc28gZGVjb2RlIGVudGl0aWVzLiAqL1xuICAgIHN0YXRlSW5TcGVjaWFsVGFnKGMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VxdWVuY2VJbmRleCA9PT0gdGhpcy5jdXJyZW50U2VxdWVuY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoYyA9PT0gQ2hhckNvZGVzLkd0IHx8IGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZE9mVGV4dCA9IHRoaXMuaW5kZXggLSB0aGlzLmN1cnJlbnRTZXF1ZW5jZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvblN0YXJ0IDwgZW5kT2ZUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNwb29mIHRoZSBpbmRleCBzbyB0aGF0IHJlcG9ydGVkIGxvY2F0aW9ucyBtYXRjaCB1cC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0dWFsSW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gZW5kT2ZUZXh0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNicy5vbnRleHQodGhpcy5zZWN0aW9uU3RhcnQsIGVuZE9mVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBhY3R1YWxJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NwZWNpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IGVuZE9mVGV4dCArIDI7IC8vIFNraXAgb3ZlciB0aGUgYDwvYFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVJbkNsb3NpbmdUYWdOYW1lKGMpO1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gV2UgYXJlIGRvbmU7IHNraXAgdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZUluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGMgfCAweDIwKSA9PT0gdGhpcy5jdXJyZW50U2VxdWVuY2VbdGhpcy5zZXF1ZW5jZUluZGV4XSkge1xuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZUluZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXF1ZW5jZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2VxdWVuY2UgPT09IFNlcXVlbmNlcy5UaXRsZUVuZCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcGFyc2UgZW50aXRpZXMgaW4gPHRpdGxlPiB0YWdzLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlY29kZUVudGl0aWVzICYmIGMgPT09IENoYXJDb2Rlcy5BbXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkJlZm9yZUVudGl0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZhc3RGb3J3YXJkVG8oQ2hhckNvZGVzLkx0KSkge1xuICAgICAgICAgICAgICAgIC8vIE91dHNpZGUgb2YgPHRpdGxlPiB0YWdzLCB3ZSBjYW4gZmFzdC1mb3J3YXJkLlxuICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VJbmRleCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBzZWUgYSBgPGAsIHNldCB0aGUgc2VxdWVuY2UgaW5kZXggdG8gMTsgdXNlZnVsIGZvciBlZy4gYDw8L3NjcmlwdD5gLlxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZUluZGV4ID0gTnVtYmVyKGMgPT09IENoYXJDb2Rlcy5MdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGVDREFUQVNlcXVlbmNlKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IFNlcXVlbmNlcy5DZGF0YVt0aGlzLnNlcXVlbmNlSW5kZXhdKSB7XG4gICAgICAgICAgICBpZiAoKyt0aGlzLnNlcXVlbmNlSW5kZXggPT09IFNlcXVlbmNlcy5DZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuSW5Db21tZW50TGlrZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZSA9IFNlcXVlbmNlcy5DZGF0YUVuZDtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkluRGVjbGFyYXRpb247XG4gICAgICAgICAgICB0aGlzLnN0YXRlSW5EZWNsYXJhdGlvbihjKTsgLy8gUmVjb25zdW1lIHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGVuIHdlIHdhaXQgZm9yIG9uZSBzcGVjaWZpYyBjaGFyYWN0ZXIsIHdlIGNhbiBzcGVlZCB0aGluZ3MgdXBcbiAgICAgKiBieSBza2lwcGluZyB0aHJvdWdoIHRoZSBidWZmZXIgdW50aWwgd2UgZmluZCBpdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIGNoYXJhY3RlciB3YXMgZm91bmQuXG4gICAgICovXG4gICAgZmFzdEZvcndhcmRUbyhjKSB7XG4gICAgICAgIHdoaWxlICgrK3RoaXMuaW5kZXggPCB0aGlzLmJ1ZmZlci5sZW5ndGggKyB0aGlzLm9mZnNldCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnVmZmVyLmNoYXJDb2RlQXQodGhpcy5pbmRleCAtIHRoaXMub2Zmc2V0KSA9PT0gYykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAqIFdlIGluY3JlbWVudCB0aGUgaW5kZXggYXQgdGhlIGVuZCBvZiB0aGUgYHBhcnNlYCBsb29wLFxuICAgICAgICAgKiBzbyBzZXQgaXQgdG8gYGJ1ZmZlci5sZW5ndGggLSAxYCBoZXJlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUT0RPOiBSZWZhY3RvciBgcGFyc2VgIHRvIGluY3JlbWVudCBpbmRleCBiZWZvcmUgY2FsbGluZyBzdGF0ZXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5idWZmZXIubGVuZ3RoICsgdGhpcy5vZmZzZXQgLSAxO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbW1lbnRzIGFuZCBDREFUQSBlbmQgd2l0aCBgLS0+YCBhbmQgYF1dPmAuXG4gICAgICpcbiAgICAgKiBUaGVpciBjb21tb24gcXVhbGl0aWVzIGFyZTpcbiAgICAgKiAtIFRoZWlyIGVuZCBzZXF1ZW5jZXMgaGF2ZSBhIGRpc3RpbmN0IGNoYXJhY3RlciB0aGV5IHN0YXJ0IHdpdGguXG4gICAgICogLSBUaGF0IGNoYXJhY3RlciBpcyB0aGVuIHJlcGVhdGVkLCBzbyB3ZSBoYXZlIHRvIGNoZWNrIG11bHRpcGxlIHJlcGVhdHMuXG4gICAgICogLSBBbGwgY2hhcmFjdGVycyBidXQgdGhlIHN0YXJ0IGNoYXJhY3RlciBvZiB0aGUgc2VxdWVuY2UgY2FuIGJlIHNraXBwZWQuXG4gICAgICovXG4gICAgc3RhdGVJbkNvbW1lbnRMaWtlKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IHRoaXMuY3VycmVudFNlcXVlbmNlW3RoaXMuc2VxdWVuY2VJbmRleF0pIHtcbiAgICAgICAgICAgIGlmICgrK3RoaXMuc2VxdWVuY2VJbmRleCA9PT0gdGhpcy5jdXJyZW50U2VxdWVuY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNlcXVlbmNlID09PSBTZXF1ZW5jZXMuQ2RhdGFFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYnMub25jZGF0YSh0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCwgMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNicy5vbmNvbW1lbnQodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgsIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLlRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXF1ZW5jZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAvLyBGYXN0LWZvcndhcmQgdG8gdGhlIGZpcnN0IGNoYXJhY3RlciBvZiB0aGUgc2VxdWVuY2VcbiAgICAgICAgICAgIGlmICh0aGlzLmZhc3RGb3J3YXJkVG8odGhpcy5jdXJyZW50U2VxdWVuY2VbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZUluZGV4ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjICE9PSB0aGlzLmN1cnJlbnRTZXF1ZW5jZVt0aGlzLnNlcXVlbmNlSW5kZXggLSAxXSkge1xuICAgICAgICAgICAgLy8gQWxsb3cgbG9uZyBzZXF1ZW5jZXMsIGVnLiAtLS0+LCBdXV0+XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhUTUwgb25seSBhbGxvd3MgQVNDSUkgYWxwaGEgY2hhcmFjdGVycyAoYS16IGFuZCBBLVopIGF0IHRoZSBiZWdpbm5pbmcgb2YgYSB0YWcgbmFtZS5cbiAgICAgKlxuICAgICAqIFhNTCBhbGxvd3MgYSBsb3QgbW9yZSBjaGFyYWN0ZXJzIGhlcmUgKEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy14bWwvI05ULU5hbWVTdGFydENoYXIpLlxuICAgICAqIFdlIGFsbG93IGFueXRoaW5nIHRoYXQgd291bGRuJ3QgZW5kIHRoZSB0YWcuXG4gICAgICovXG4gICAgaXNUYWdTdGFydENoYXIoYykge1xuICAgICAgICByZXR1cm4gdGhpcy54bWxNb2RlID8gIWlzRW5kT2ZUYWdTZWN0aW9uKGMpIDogaXNBU0NJSUFscGhhKGMpO1xuICAgIH1cbiAgICBzdGFydFNwZWNpYWwoc2VxdWVuY2UsIG9mZnNldCkge1xuICAgICAgICB0aGlzLmlzU3BlY2lhbCA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gc2VxdWVuY2U7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VJbmRleCA9IG9mZnNldDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLlNwZWNpYWxTdGFydFNlcXVlbmNlO1xuICAgIH1cbiAgICBzdGF0ZUJlZm9yZVRhZ05hbWUoYykge1xuICAgICAgICBpZiAoYyA9PT0gQ2hhckNvZGVzLkV4Y2xhbWF0aW9uTWFyaykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkJlZm9yZURlY2xhcmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBDaGFyQ29kZXMuUXVlc3Rpb25tYXJrKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb247XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNUYWdTdGFydENoYXIoYykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyID0gYyB8IDB4MjA7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICBpZiAoIXRoaXMueG1sTW9kZSAmJiBsb3dlciA9PT0gU2VxdWVuY2VzLlRpdGxlRW5kWzJdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFNwZWNpYWwoU2VxdWVuY2VzLlRpdGxlRW5kLCAzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPVxuICAgICAgICAgICAgICAgICAgICAhdGhpcy54bWxNb2RlICYmIGxvd2VyID09PSBTZXF1ZW5jZXMuU2NyaXB0RW5kWzJdXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFN0YXRlLkJlZm9yZVNwZWNpYWxTXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFN0YXRlLkluVGFnTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBDaGFyQ29kZXMuU2xhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5CZWZvcmVDbG9zaW5nVGFnTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5UZXh0O1xuICAgICAgICAgICAgdGhpcy5zdGF0ZVRleHQoYyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGVJblRhZ05hbWUoYykge1xuICAgICAgICBpZiAoaXNFbmRPZlRhZ1NlY3Rpb24oYykpIHtcbiAgICAgICAgICAgIHRoaXMuY2JzLm9ub3BlbnRhZ25hbWUodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSAtMTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5CZWZvcmVBdHRyaWJ1dGVOYW1lO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZUJlZm9yZUF0dHJpYnV0ZU5hbWUoYyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGVCZWZvcmVDbG9zaW5nVGFnTmFtZShjKSB7XG4gICAgICAgIGlmIChpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IENoYXJDb2Rlcy5HdCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLlRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5pc1RhZ1N0YXJ0Q2hhcihjKVxuICAgICAgICAgICAgICAgID8gU3RhdGUuSW5DbG9zaW5nVGFnTmFtZVxuICAgICAgICAgICAgICAgIDogU3RhdGUuSW5TcGVjaWFsQ29tbWVudDtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZUluQ2xvc2luZ1RhZ05hbWUoYykge1xuICAgICAgICBpZiAoYyA9PT0gQ2hhckNvZGVzLkd0IHx8IGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5jYnMub25jbG9zZXRhZyh0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkFmdGVyQ2xvc2luZ1RhZ05hbWU7XG4gICAgICAgICAgICB0aGlzLnN0YXRlQWZ0ZXJDbG9zaW5nVGFnTmFtZShjKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZUFmdGVyQ2xvc2luZ1RhZ05hbWUoYykge1xuICAgICAgICAvLyBTa2lwIGV2ZXJ5dGhpbmcgdW50aWwgXCI+XCJcbiAgICAgICAgaWYgKGMgPT09IENoYXJDb2Rlcy5HdCB8fCB0aGlzLmZhc3RGb3J3YXJkVG8oQ2hhckNvZGVzLkd0KSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLlRleHQ7XG4gICAgICAgICAgICB0aGlzLmJhc2VTdGF0ZSA9IFN0YXRlLlRleHQ7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRlQmVmb3JlQXR0cmlidXRlTmFtZShjKSB7XG4gICAgICAgIGlmIChjID09PSBDaGFyQ29kZXMuR3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2JzLm9ub3BlbnRhZ2VuZCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3BlY2lhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5JblNwZWNpYWxUYWc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZUluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5UZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iYXNlU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID09PSBDaGFyQ29kZXMuU2xhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5JblNlbGZDbG9zaW5nVGFnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5JbkF0dHJpYnV0ZU5hbWU7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGVJblNlbGZDbG9zaW5nVGFnKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IENoYXJDb2Rlcy5HdCkge1xuICAgICAgICAgICAgdGhpcy5jYnMub25zZWxmY2xvc2luZ3RhZyh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5UZXh0O1xuICAgICAgICAgICAgdGhpcy5iYXNlU3RhdGUgPSBTdGF0ZS5UZXh0O1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICAgICAgICAgIHRoaXMuaXNTcGVjaWFsID0gZmFsc2U7IC8vIFJlc2V0IHNwZWNpYWwgc3RhdGUsIGluIGNhc2Ugb2Ygc2VsZi1jbG9zaW5nIHNwZWNpYWwgdGFnc1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5CZWZvcmVBdHRyaWJ1dGVOYW1lO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZUJlZm9yZUF0dHJpYnV0ZU5hbWUoYyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGVJbkF0dHJpYnV0ZU5hbWUoYykge1xuICAgICAgICBpZiAoYyA9PT0gQ2hhckNvZGVzLkVxIHx8IGlzRW5kT2ZUYWdTZWN0aW9uKGMpKSB7XG4gICAgICAgICAgICB0aGlzLmNicy5vbmF0dHJpYm5hbWUodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSAtMTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5BZnRlckF0dHJpYnV0ZU5hbWU7XG4gICAgICAgICAgICB0aGlzLnN0YXRlQWZ0ZXJBdHRyaWJ1dGVOYW1lKGMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRlQWZ0ZXJBdHRyaWJ1dGVOYW1lKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IENoYXJDb2Rlcy5FcSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkJlZm9yZUF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPT09IENoYXJDb2Rlcy5TbGFzaCB8fCBjID09PSBDaGFyQ29kZXMuR3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2JzLm9uYXR0cmliZW5kKFF1b3RlVHlwZS5Ob1ZhbHVlLCB0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5CZWZvcmVBdHRyaWJ1dGVOYW1lO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZUJlZm9yZUF0dHJpYnV0ZU5hbWUoYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgdGhpcy5jYnMub25hdHRyaWJlbmQoUXVvdGVUeXBlLk5vVmFsdWUsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkluQXR0cmlidXRlTmFtZTtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZUJlZm9yZUF0dHJpYnV0ZVZhbHVlKGMpIHtcbiAgICAgICAgaWYgKGMgPT09IENoYXJDb2Rlcy5Eb3VibGVRdW90ZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkluQXR0cmlidXRlVmFsdWVEcTtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gQ2hhckNvZGVzLlNpbmdsZVF1b3RlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuSW5BdHRyaWJ1dGVWYWx1ZVNxO1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaXNXaGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuSW5BdHRyaWJ1dGVWYWx1ZU5xO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZUluQXR0cmlidXRlVmFsdWVOb1F1b3RlcyhjKTsgLy8gUmVjb25zdW1lIHRva2VuXG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlSW5BdHRyaWJ1dGVWYWx1ZShjLCBxdW90ZSkge1xuICAgICAgICBpZiAoYyA9PT0gcXVvdGUgfHxcbiAgICAgICAgICAgICghdGhpcy5kZWNvZGVFbnRpdGllcyAmJiB0aGlzLmZhc3RGb3J3YXJkVG8ocXVvdGUpKSkge1xuICAgICAgICAgICAgdGhpcy5jYnMub25hdHRyaWJkYXRhKHRoaXMuc2VjdGlvblN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gLTE7XG4gICAgICAgICAgICB0aGlzLmNicy5vbmF0dHJpYmVuZChxdW90ZSA9PT0gQ2hhckNvZGVzLkRvdWJsZVF1b3RlXG4gICAgICAgICAgICAgICAgPyBRdW90ZVR5cGUuRG91YmxlXG4gICAgICAgICAgICAgICAgOiBRdW90ZVR5cGUuU2luZ2xlLCB0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5CZWZvcmVBdHRyaWJ1dGVOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGVjb2RlRW50aXRpZXMgJiYgYyA9PT0gQ2hhckNvZGVzLkFtcCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkJlZm9yZUVudGl0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZUluQXR0cmlidXRlVmFsdWVEb3VibGVRdW90ZXMoYykge1xuICAgICAgICB0aGlzLmhhbmRsZUluQXR0cmlidXRlVmFsdWUoYywgQ2hhckNvZGVzLkRvdWJsZVF1b3RlKTtcbiAgICB9XG4gICAgc3RhdGVJbkF0dHJpYnV0ZVZhbHVlU2luZ2xlUXVvdGVzKGMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVJbkF0dHJpYnV0ZVZhbHVlKGMsIENoYXJDb2Rlcy5TaW5nbGVRdW90ZSk7XG4gICAgfVxuICAgIHN0YXRlSW5BdHRyaWJ1dGVWYWx1ZU5vUXVvdGVzKGMpIHtcbiAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjKSB8fCBjID09PSBDaGFyQ29kZXMuR3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2JzLm9uYXR0cmliZGF0YSh0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5jYnMub25hdHRyaWJlbmQoUXVvdGVUeXBlLlVucXVvdGVkLCB0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5CZWZvcmVBdHRyaWJ1dGVOYW1lO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZUJlZm9yZUF0dHJpYnV0ZU5hbWUoYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5kZWNvZGVFbnRpdGllcyAmJiBjID09PSBDaGFyQ29kZXMuQW1wKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuQmVmb3JlRW50aXR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRlQmVmb3JlRGVjbGFyYXRpb24oYykge1xuICAgICAgICBpZiAoYyA9PT0gQ2hhckNvZGVzLk9wZW5pbmdTcXVhcmVCcmFja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuQ0RBVEFTZXF1ZW5jZTtcbiAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID1cbiAgICAgICAgICAgICAgICBjID09PSBDaGFyQ29kZXMuRGFzaFxuICAgICAgICAgICAgICAgICAgICA/IFN0YXRlLkJlZm9yZUNvbW1lbnRcbiAgICAgICAgICAgICAgICAgICAgOiBTdGF0ZS5JbkRlY2xhcmF0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRlSW5EZWNsYXJhdGlvbihjKSB7XG4gICAgICAgIGlmIChjID09PSBDaGFyQ29kZXMuR3QgfHwgdGhpcy5mYXN0Rm9yd2FyZFRvKENoYXJDb2Rlcy5HdCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2JzLm9uZGVjbGFyYXRpb24odGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLlRleHQ7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRlSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oYykge1xuICAgICAgICBpZiAoYyA9PT0gQ2hhckNvZGVzLkd0IHx8IHRoaXMuZmFzdEZvcndhcmRUbyhDaGFyQ29kZXMuR3QpKSB7XG4gICAgICAgICAgICB0aGlzLmNicy5vbnByb2Nlc3NpbmdpbnN0cnVjdGlvbih0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuVGV4dDtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGVCZWZvcmVDb21tZW50KGMpIHtcbiAgICAgICAgaWYgKGMgPT09IENoYXJDb2Rlcy5EYXNoKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuSW5Db21tZW50TGlrZTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNlcXVlbmNlID0gU2VxdWVuY2VzLkNvbW1lbnRFbmQ7XG4gICAgICAgICAgICAvLyBBbGxvdyBzaG9ydCBjb21tZW50cyAoZWcuIDwhLS0+KVxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZUluZGV4ID0gMjtcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuSW5EZWNsYXJhdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZUluU3BlY2lhbENvbW1lbnQoYykge1xuICAgICAgICBpZiAoYyA9PT0gQ2hhckNvZGVzLkd0IHx8IHRoaXMuZmFzdEZvcndhcmRUbyhDaGFyQ29kZXMuR3QpKSB7XG4gICAgICAgICAgICB0aGlzLmNicy5vbmNvbW1lbnQodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgsIDApO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLlRleHQ7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25TdGFydCA9IHRoaXMuaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRlQmVmb3JlU3BlY2lhbFMoYykge1xuICAgICAgICBjb25zdCBsb3dlciA9IGMgfCAweDIwO1xuICAgICAgICBpZiAobG93ZXIgPT09IFNlcXVlbmNlcy5TY3JpcHRFbmRbM10pIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTcGVjaWFsKFNlcXVlbmNlcy5TY3JpcHRFbmQsIDQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxvd2VyID09PSBTZXF1ZW5jZXMuU3R5bGVFbmRbM10pIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTcGVjaWFsKFNlcXVlbmNlcy5TdHlsZUVuZCwgNCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuSW5UYWdOYW1lO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZUluVGFnTmFtZShjKTsgLy8gQ29uc3VtZSB0aGUgdG9rZW4gYWdhaW5cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZUJlZm9yZUVudGl0eShjKSB7XG4gICAgICAgIC8vIFN0YXJ0IGV4Y2VzcyB3aXRoIDEgdG8gaW5jbHVkZSB0aGUgJyYnXG4gICAgICAgIHRoaXMuZW50aXR5RXhjZXNzID0gMTtcbiAgICAgICAgdGhpcy5lbnRpdHlSZXN1bHQgPSAwO1xuICAgICAgICBpZiAoYyA9PT0gQ2hhckNvZGVzLk51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkJlZm9yZU51bWVyaWNFbnRpdHk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA9PT0gQ2hhckNvZGVzLkFtcCkge1xuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0d28gYCZgIGNoYXJhY3RlcnMgaW4gYSByb3cuIFN0YXkgaW4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRyaWVJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRyaWVDdXJyZW50ID0gdGhpcy5lbnRpdHlUcmllWzBdO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkluTmFtZWRFbnRpdHk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlSW5OYW1lZEVudGl0eShjKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZUluTmFtZWRFbnRpdHkoYykge1xuICAgICAgICB0aGlzLmVudGl0eUV4Y2VzcyArPSAxO1xuICAgICAgICB0aGlzLnRyaWVJbmRleCA9IGRldGVybWluZUJyYW5jaCh0aGlzLmVudGl0eVRyaWUsIHRoaXMudHJpZUN1cnJlbnQsIHRoaXMudHJpZUluZGV4ICsgMSwgYyk7XG4gICAgICAgIGlmICh0aGlzLnRyaWVJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE5hbWVkRW50aXR5KCk7XG4gICAgICAgICAgICB0aGlzLmluZGV4LS07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmllQ3VycmVudCA9IHRoaXMuZW50aXR5VHJpZVt0aGlzLnRyaWVJbmRleF07XG4gICAgICAgIGNvbnN0IG1hc2tlZCA9IHRoaXMudHJpZUN1cnJlbnQgJiBCaW5UcmllRmxhZ3MuVkFMVUVfTEVOR1RIO1xuICAgICAgICAvLyBJZiB0aGUgYnJhbmNoIGlzIGEgdmFsdWUsIHN0b3JlIGl0IGFuZCBjb250aW51ZVxuICAgICAgICBpZiAobWFza2VkKSB7XG4gICAgICAgICAgICAvLyBUaGUgbWFzayBpcyB0aGUgbnVtYmVyIG9mIGJ5dGVzIG9mIHRoZSB2YWx1ZSwgaW5jbHVkaW5nIHRoZSBjdXJyZW50IGJ5dGUuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUxlbmd0aCA9IChtYXNrZWQgPj4gMTQpIC0gMTtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBsZWdhY3kgZW50aXR5IHdoaWxlIHBhcnNpbmcgc3RyaWN0bHksIGp1c3Qgc2tpcCB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4gICAgICAgICAgICBpZiAoIXRoaXMuYWxsb3dMZWdhY3lFbnRpdHkoKSAmJiBjICE9PSBDaGFyQ29kZXMuU2VtaSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZUluZGV4ICs9IHZhbHVlTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIDEgYXMgd2UgaGF2ZSBhbHJlYWR5IGluY3JlbWVudGVkIHRoZSBleGNlc3NcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRpdHlTdGFydCA9IHRoaXMuaW5kZXggLSB0aGlzLmVudGl0eUV4Y2VzcyArIDE7XG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eVN0YXJ0ID4gdGhpcy5zZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UGFydGlhbCh0aGlzLnNlY3Rpb25TdGFydCwgZW50aXR5U3RhcnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3Vycm9nYXRlIHBhaXIsIGNvbnN1bWUgdGhlIG5leHQgdHdvIGJ5dGVzXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdHlSZXN1bHQgPSB0aGlzLnRyaWVJbmRleDtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWVJbmRleCArPSB2YWx1ZUxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eUV4Y2VzcyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0TmFtZWRFbnRpdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdE5hbWVkRW50aXR5KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5iYXNlU3RhdGU7XG4gICAgICAgIGlmICh0aGlzLmVudGl0eVJlc3VsdCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlTGVuZ3RoID0gKHRoaXMuZW50aXR5VHJpZVt0aGlzLmVudGl0eVJlc3VsdF0gJiBCaW5UcmllRmxhZ3MuVkFMVUVfTEVOR1RIKSA+PlxuICAgICAgICAgICAgMTQ7XG4gICAgICAgIHN3aXRjaCAodmFsdWVMZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENvZGVQb2ludCh0aGlzLmVudGl0eVRyaWVbdGhpcy5lbnRpdHlSZXN1bHRdICZcbiAgICAgICAgICAgICAgICAgICAgfkJpblRyaWVGbGFncy5WQUxVRV9MRU5HVEgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q29kZVBvaW50KHRoaXMuZW50aXR5VHJpZVt0aGlzLmVudGl0eVJlc3VsdCArIDFdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENvZGVQb2ludCh0aGlzLmVudGl0eVRyaWVbdGhpcy5lbnRpdHlSZXN1bHQgKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q29kZVBvaW50KHRoaXMuZW50aXR5VHJpZVt0aGlzLmVudGl0eVJlc3VsdCArIDJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZUJlZm9yZU51bWVyaWNFbnRpdHkoYykge1xuICAgICAgICBpZiAoKGMgfCAweDIwKSA9PT0gQ2hhckNvZGVzLkxvd2VyWCkge1xuICAgICAgICAgICAgdGhpcy5lbnRpdHlFeGNlc3MrKztcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5JbkhleEVudGl0eTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5Jbk51bWVyaWNFbnRpdHk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlSW5OdW1lcmljRW50aXR5KGMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVtaXROdW1lcmljRW50aXR5KHN0cmljdCkge1xuICAgICAgICBjb25zdCBlbnRpdHlTdGFydCA9IHRoaXMuaW5kZXggLSB0aGlzLmVudGl0eUV4Y2VzcyAtIDE7XG4gICAgICAgIGNvbnN0IG51bWJlclN0YXJ0ID0gZW50aXR5U3RhcnQgKyAyICsgTnVtYmVyKHRoaXMuc3RhdGUgPT09IFN0YXRlLkluSGV4RW50aXR5KTtcbiAgICAgICAgaWYgKG51bWJlclN0YXJ0ICE9PSB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgICAvLyBFbWl0IGxlYWRpbmcgZGF0YSBpZiBhbnlcbiAgICAgICAgICAgIGlmIChlbnRpdHlTdGFydCA+IHRoaXMuc2VjdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UGFydGlhbCh0aGlzLnNlY3Rpb25TdGFydCwgZW50aXR5U3RhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4ICsgTnVtYmVyKHN0cmljdCk7XG4gICAgICAgICAgICB0aGlzLmVtaXRDb2RlUG9pbnQocmVwbGFjZUNvZGVQb2ludCh0aGlzLmVudGl0eVJlc3VsdCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmJhc2VTdGF0ZTtcbiAgICB9XG4gICAgc3RhdGVJbk51bWVyaWNFbnRpdHkoYykge1xuICAgICAgICBpZiAoYyA9PT0gQ2hhckNvZGVzLlNlbWkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE51bWVyaWNFbnRpdHkodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNOdW1iZXIoYykpIHtcbiAgICAgICAgICAgIHRoaXMuZW50aXR5UmVzdWx0ID0gdGhpcy5lbnRpdHlSZXN1bHQgKiAxMCArIChjIC0gQ2hhckNvZGVzLlplcm8pO1xuICAgICAgICAgICAgdGhpcy5lbnRpdHlFeGNlc3MrKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93TGVnYWN5RW50aXR5KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXROdW1lcmljRW50aXR5KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmJhc2VTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgtLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZUluSGV4RW50aXR5KGMpIHtcbiAgICAgICAgaWYgKGMgPT09IENoYXJDb2Rlcy5TZW1pKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXROdW1lcmljRW50aXR5KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzTnVtYmVyKGMpKSB7XG4gICAgICAgICAgICB0aGlzLmVudGl0eVJlc3VsdCA9IHRoaXMuZW50aXR5UmVzdWx0ICogMTYgKyAoYyAtIENoYXJDb2Rlcy5aZXJvKTtcbiAgICAgICAgICAgIHRoaXMuZW50aXR5RXhjZXNzKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNIZXhEaWdpdChjKSkge1xuICAgICAgICAgICAgdGhpcy5lbnRpdHlSZXN1bHQgPVxuICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5UmVzdWx0ICogMTYgKyAoKGMgfCAweDIwKSAtIENoYXJDb2Rlcy5Mb3dlckEgKyAxMCk7XG4gICAgICAgICAgICB0aGlzLmVudGl0eUV4Y2VzcysrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dMZWdhY3lFbnRpdHkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE51bWVyaWNFbnRpdHkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuYmFzZVN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFsbG93TGVnYWN5RW50aXR5KCkge1xuICAgICAgICByZXR1cm4gKCF0aGlzLnhtbE1vZGUgJiZcbiAgICAgICAgICAgICh0aGlzLmJhc2VTdGF0ZSA9PT0gU3RhdGUuVGV4dCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZVN0YXRlID09PSBTdGF0ZS5JblNwZWNpYWxUYWcpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGRhdGEgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGNvbnN1bWVkIGZyb20gdGhlIGJ1ZmZlci5cbiAgICAgKi9cbiAgICBjbGVhbnVwKCkge1xuICAgICAgICAvLyBJZiB3ZSBhcmUgaW5zaWRlIG9mIHRleHQgb3IgYXR0cmlidXRlcywgZW1pdCB3aGF0IHdlIGFscmVhZHkgaGF2ZS5cbiAgICAgICAgaWYgKHRoaXMucnVubmluZyAmJiB0aGlzLnNlY3Rpb25TdGFydCAhPT0gdGhpcy5pbmRleCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFN0YXRlLlRleHQgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZSA9PT0gU3RhdGUuSW5TcGVjaWFsVGFnICYmIHRoaXMuc2VxdWVuY2VJbmRleCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNicy5vbnRleHQodGhpcy5zZWN0aW9uU3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvblN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IFN0YXRlLkluQXR0cmlidXRlVmFsdWVEcSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPT09IFN0YXRlLkluQXR0cmlidXRlVmFsdWVTcSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPT09IFN0YXRlLkluQXR0cmlidXRlVmFsdWVOcSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2JzLm9uYXR0cmliZGF0YSh0aGlzLnNlY3Rpb25TdGFydCwgdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uU3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNob3VsZENvbnRpbnVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA8IHRoaXMuYnVmZmVyLmxlbmd0aCArIHRoaXMub2Zmc2V0ICYmIHRoaXMucnVubmluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSXRlcmF0ZXMgdGhyb3VnaCB0aGUgYnVmZmVyLCBjYWxsaW5nIHRoZSBmdW5jdGlvbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogU3RhdGVzIHRoYXQgYXJlIG1vcmUgbGlrZWx5IHRvIGJlIGhpdCBhcmUgaGlnaGVyIHVwLCBhcyBhIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50LlxuICAgICAqL1xuICAgIHBhcnNlKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5zaG91bGRDb250aW51ZSgpKSB7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5idWZmZXIuY2hhckNvZGVBdCh0aGlzLmluZGV4IC0gdGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5UZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVUZXh0KGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5TcGVjaWFsU3RhcnRTZXF1ZW5jZToge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlU3BlY2lhbFN0YXJ0U2VxdWVuY2UoYyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLkluU3BlY2lhbFRhZzoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlSW5TcGVjaWFsVGFnKGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5DREFUQVNlcXVlbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVDREFUQVNlcXVlbmNlKGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5JbkF0dHJpYnV0ZVZhbHVlRHE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUluQXR0cmlidXRlVmFsdWVEb3VibGVRdW90ZXMoYyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLkluQXR0cmlidXRlTmFtZToge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlSW5BdHRyaWJ1dGVOYW1lKGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5JbkNvbW1lbnRMaWtlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVJbkNvbW1lbnRMaWtlKGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5JblNwZWNpYWxDb21tZW50OiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVJblNwZWNpYWxDb21tZW50KGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5CZWZvcmVBdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVCZWZvcmVBdHRyaWJ1dGVOYW1lKGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5JblRhZ05hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUluVGFnTmFtZShjKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdGUuSW5DbG9zaW5nVGFnTmFtZToge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlSW5DbG9zaW5nVGFnTmFtZShjKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdGUuQmVmb3JlVGFnTmFtZToge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlQmVmb3JlVGFnTmFtZShjKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdGUuQWZ0ZXJBdHRyaWJ1dGVOYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVBZnRlckF0dHJpYnV0ZU5hbWUoYyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLkluQXR0cmlidXRlVmFsdWVTcToge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlSW5BdHRyaWJ1dGVWYWx1ZVNpbmdsZVF1b3RlcyhjKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdGUuQmVmb3JlQXR0cmlidXRlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUJlZm9yZUF0dHJpYnV0ZVZhbHVlKGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5CZWZvcmVDbG9zaW5nVGFnTmFtZToge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlQmVmb3JlQ2xvc2luZ1RhZ05hbWUoYyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLkFmdGVyQ2xvc2luZ1RhZ05hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUFmdGVyQ2xvc2luZ1RhZ05hbWUoYyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLkJlZm9yZVNwZWNpYWxTOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVCZWZvcmVTcGVjaWFsUyhjKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdGUuSW5BdHRyaWJ1dGVWYWx1ZU5xOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVJbkF0dHJpYnV0ZVZhbHVlTm9RdW90ZXMoYyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLkluU2VsZkNsb3NpbmdUYWc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUluU2VsZkNsb3NpbmdUYWcoYyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLkluRGVjbGFyYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUluRGVjbGFyYXRpb24oYyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLkJlZm9yZURlY2xhcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVCZWZvcmVEZWNsYXJhdGlvbihjKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdGUuQmVmb3JlQ29tbWVudDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlQmVmb3JlQ29tbWVudChjKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdGUuSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUluUHJvY2Vzc2luZ0luc3RydWN0aW9uKGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5Jbk5hbWVkRW50aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVJbk5hbWVkRW50aXR5KGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5CZWZvcmVFbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUJlZm9yZUVudGl0eShjKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU3RhdGUuSW5IZXhFbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUluSGV4RW50aXR5KGMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5Jbk51bWVyaWNFbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUluTnVtZXJpY0VudGl0eShjKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYHRoaXMuX3N0YXRlID09PSBTdGF0ZS5CZWZvcmVOdW1lcmljRW50aXR5YFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlQmVmb3JlTnVtZXJpY0VudGl0eShjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgfVxuICAgIGZpbmlzaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFN0YXRlLkluTmFtZWRFbnRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE5hbWVkRW50aXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgcmVtYWluaW5nIGRhdGEsIGVtaXQgaXQgaW4gYSByZWFzb25hYmxlIHdheVxuICAgICAgICBpZiAodGhpcy5zZWN0aW9uU3RhcnQgPCB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRyYWlsaW5nRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2JzLm9uZW5kKCk7XG4gICAgfVxuICAgIC8qKiBIYW5kbGUgYW55IHRyYWlsaW5nIGRhdGEuICovXG4gICAgaGFuZGxlVHJhaWxpbmdEYXRhKCkge1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IHRoaXMuYnVmZmVyLmxlbmd0aCArIHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU3RhdGUuSW5Db21tZW50TGlrZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNlcXVlbmNlID09PSBTZXF1ZW5jZXMuQ2RhdGFFbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNicy5vbmNkYXRhKHRoaXMuc2VjdGlvblN0YXJ0LCBlbmRJbmRleCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNicy5vbmNvbW1lbnQodGhpcy5zZWN0aW9uU3RhcnQsIGVuZEluZGV4LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTdGF0ZS5Jbk51bWVyaWNFbnRpdHkgJiZcbiAgICAgICAgICAgIHRoaXMuYWxsb3dMZWdhY3lFbnRpdHkoKSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0TnVtZXJpY0VudGl0eShmYWxzZSk7XG4gICAgICAgICAgICAvLyBBbGwgdHJhaWxpbmcgZGF0YSB3aWxsIGhhdmUgYmVlbiBjb25zdW1lZFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IFN0YXRlLkluSGV4RW50aXR5ICYmXG4gICAgICAgICAgICB0aGlzLmFsbG93TGVnYWN5RW50aXR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE51bWVyaWNFbnRpdHkoZmFsc2UpO1xuICAgICAgICAgICAgLy8gQWxsIHRyYWlsaW5nIGRhdGEgd2lsbCBoYXZlIGJlZW4gY29uc3VtZWRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTdGF0ZS5JblRhZ05hbWUgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPT09IFN0YXRlLkJlZm9yZUF0dHJpYnV0ZU5hbWUgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPT09IFN0YXRlLkJlZm9yZUF0dHJpYnV0ZVZhbHVlIHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlID09PSBTdGF0ZS5BZnRlckF0dHJpYnV0ZU5hbWUgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPT09IFN0YXRlLkluQXR0cmlidXRlTmFtZSB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9PT0gU3RhdGUuSW5BdHRyaWJ1dGVWYWx1ZVNxIHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlID09PSBTdGF0ZS5JbkF0dHJpYnV0ZVZhbHVlRHEgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPT09IFN0YXRlLkluQXR0cmlidXRlVmFsdWVOcSB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9PT0gU3RhdGUuSW5DbG9zaW5nVGFnTmFtZSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIElmIHdlIGFyZSBjdXJyZW50bHkgaW4gYW4gb3BlbmluZyBvciBjbG9zaW5nIHRhZywgdXMgbm90IGNhbGxpbmcgdGhlXG4gICAgICAgICAgICAgKiByZXNwZWN0aXZlIGNhbGxiYWNrIHNpZ25hbHMgdGhhdCB0aGUgdGFnIHNob3VsZCBiZSBpZ25vcmVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNicy5vbnRleHQodGhpcy5zZWN0aW9uU3RhcnQsIGVuZEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0UGFydGlhbChzdGFydCwgZW5kSW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFzZVN0YXRlICE9PSBTdGF0ZS5UZXh0ICYmXG4gICAgICAgICAgICB0aGlzLmJhc2VTdGF0ZSAhPT0gU3RhdGUuSW5TcGVjaWFsVGFnKSB7XG4gICAgICAgICAgICB0aGlzLmNicy5vbmF0dHJpYmRhdGEoc3RhcnQsIGVuZEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2JzLm9udGV4dChzdGFydCwgZW5kSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVtaXRDb2RlUG9pbnQoY3ApIHtcbiAgICAgICAgaWYgKHRoaXMuYmFzZVN0YXRlICE9PSBTdGF0ZS5UZXh0ICYmXG4gICAgICAgICAgICB0aGlzLmJhc2VTdGF0ZSAhPT0gU3RhdGUuSW5TcGVjaWFsVGFnKSB7XG4gICAgICAgICAgICB0aGlzLmNicy5vbmF0dHJpYmVudGl0eShjcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNicy5vbnRleHRlbnRpdHkoY3ApO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VG9rZW5pemVyLmpzLm1hcCIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuL1BhcnNlci5qc1wiO1xuZXhwb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vUGFyc2VyLmpzXCI7XG5pbXBvcnQgeyBEb21IYW5kbGVyLCB9IGZyb20gXCJkb21oYW5kbGVyXCI7XG5leHBvcnQgeyBEb21IYW5kbGVyLCBcbi8vIE9sZCBuYW1lIGZvciBEb21IYW5kbGVyXG5Eb21IYW5kbGVyIGFzIERlZmF1bHRIYW5kbGVyLCB9IGZyb20gXCJkb21oYW5kbGVyXCI7XG4vLyBIZWxwZXIgbWV0aG9kc1xuLyoqXG4gKiBQYXJzZXMgdGhlIGRhdGEsIHJldHVybnMgdGhlIHJlc3VsdGluZyBkb2N1bWVudC5cbiAqXG4gKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0aGF0IHNob3VsZCBiZSBwYXJzZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIGZvciB0aGUgcGFyc2VyIGFuZCBET00gYnVpbGRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRG9jdW1lbnQoZGF0YSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgRG9tSGFuZGxlcih1bmRlZmluZWQsIG9wdGlvbnMpO1xuICAgIG5ldyBQYXJzZXIoaGFuZGxlciwgb3B0aW9ucykuZW5kKGRhdGEpO1xuICAgIHJldHVybiBoYW5kbGVyLnJvb3Q7XG59XG4vKipcbiAqIFBhcnNlcyBkYXRhLCByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSByb290IG5vZGVzLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgcm9vdCBub2RlcyBzdGlsbCBoYXZlIGEgYERvY3VtZW50YCBub2RlIGFzIHRoZWlyIHBhcmVudC5cbiAqIFVzZSBgcGFyc2VEb2N1bWVudGAgdG8gZ2V0IHRoZSBgRG9jdW1lbnRgIG5vZGUgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0aGF0IHNob3VsZCBiZSBwYXJzZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIGZvciB0aGUgcGFyc2VyIGFuZCBET00gYnVpbGRlci5cbiAqIEBkZXByZWNhdGVkIFVzZSBgcGFyc2VEb2N1bWVudGAgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRE9NKGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcGFyc2VEb2N1bWVudChkYXRhLCBvcHRpb25zKS5jaGlsZHJlbjtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciBpbnN0YW5jZSwgd2l0aCBhbiBhdHRhY2hlZCBET00gaGFuZGxlci5cbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIG9uY2UgcGFyc2luZyBoYXMgYmVlbiBjb21wbGV0ZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIGZvciB0aGUgcGFyc2VyIGFuZCBET00gYnVpbGRlci5cbiAqIEBwYXJhbSBlbGVtZW50Q2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCBldmVyeSB0aW1lIGEgdGFnIGhhcyBiZWVuIGNvbXBsZXRlZCBpbnNpZGUgb2YgdGhlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvbVN0cmVhbShjYWxsYmFjaywgb3B0aW9ucywgZWxlbWVudENhbGxiYWNrKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IG5ldyBEb21IYW5kbGVyKGNhbGxiYWNrLCBvcHRpb25zLCBlbGVtZW50Q2FsbGJhY2spO1xuICAgIHJldHVybiBuZXcgUGFyc2VyKGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2tlbml6ZXIsIH0gZnJvbSBcIi4vVG9rZW5pemVyLmpzXCI7XG4vKlxuICogQWxsIG9mIHRoZSBmb2xsb3dpbmcgZXhwb3J0cyBleGlzdCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHkuXG4gKiBUaGV5IHNob3VsZCBwcm9iYWJseSBiZSByZW1vdmVkIGV2ZW50dWFsbHkuXG4gKi9cbmV4cG9ydCAqIGFzIEVsZW1lbnRUeXBlIGZyb20gXCJkb21lbGVtZW50dHlwZVwiO1xuaW1wb3J0IHsgZ2V0RmVlZCB9IGZyb20gXCJkb211dGlsc1wiO1xuZXhwb3J0IHsgZ2V0RmVlZCB9IGZyb20gXCJkb211dGlsc1wiO1xuY29uc3QgcGFyc2VGZWVkRGVmYXVsdE9wdGlvbnMgPSB7IHhtbE1vZGU6IHRydWUgfTtcbi8qKlxuICogUGFyc2UgYSBmZWVkLlxuICpcbiAqIEBwYXJhbSBmZWVkIFRoZSBmZWVkIHRoYXQgc2hvdWxkIGJlIHBhcnNlZCwgYXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbGx5LCBvcHRpb25zIGZvciBwYXJzaW5nLiBXaGVuIHVzaW5nIHRoaXMsIHlvdSBzaG91bGQgc2V0IGB4bWxNb2RlYCB0byBgdHJ1ZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUZlZWQoZmVlZCwgb3B0aW9ucyA9IHBhcnNlRmVlZERlZmF1bHRPcHRpb25zKSB7XG4gICAgcmV0dXJuIGdldEZlZWQocGFyc2VET00oZmVlZCwgb3B0aW9ucykpO1xufVxuZXhwb3J0ICogYXMgRG9tVXRpbHMgZnJvbSBcImRvbXV0aWxzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKiogVHlwZXMgb2YgZWxlbWVudHMgZm91bmQgaW4gaHRtbHBhcnNlcjIncyBET00gKi9cbmV4cG9ydCB2YXIgRWxlbWVudFR5cGU7XG4oZnVuY3Rpb24gKEVsZW1lbnRUeXBlKSB7XG4gICAgLyoqIFR5cGUgZm9yIHRoZSByb290IGVsZW1lbnQgb2YgYSBkb2N1bWVudCAqL1xuICAgIEVsZW1lbnRUeXBlW1wiUm9vdFwiXSA9IFwicm9vdFwiO1xuICAgIC8qKiBUeXBlIGZvciBUZXh0ICovXG4gICAgRWxlbWVudFR5cGVbXCJUZXh0XCJdID0gXCJ0ZXh0XCI7XG4gICAgLyoqIFR5cGUgZm9yIDw/IC4uLiA/PiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiRGlyZWN0aXZlXCJdID0gXCJkaXJlY3RpdmVcIjtcbiAgICAvKiogVHlwZSBmb3IgPCEtLSAuLi4gLS0+ICovXG4gICAgRWxlbWVudFR5cGVbXCJDb21tZW50XCJdID0gXCJjb21tZW50XCI7XG4gICAgLyoqIFR5cGUgZm9yIDxzY3JpcHQ+IHRhZ3MgKi9cbiAgICBFbGVtZW50VHlwZVtcIlNjcmlwdFwiXSA9IFwic2NyaXB0XCI7XG4gICAgLyoqIFR5cGUgZm9yIDxzdHlsZT4gdGFncyAqL1xuICAgIEVsZW1lbnRUeXBlW1wiU3R5bGVcIl0gPSBcInN0eWxlXCI7XG4gICAgLyoqIFR5cGUgZm9yIEFueSB0YWcgKi9cbiAgICBFbGVtZW50VHlwZVtcIlRhZ1wiXSA9IFwidGFnXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhW0NEQVRBWyAuLi4gXV0+ICovXG4gICAgRWxlbWVudFR5cGVbXCJDREFUQVwiXSA9IFwiY2RhdGFcIjtcbiAgICAvKiogVHlwZSBmb3IgPCFkb2N0eXBlIC4uLj4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkRvY3R5cGVcIl0gPSBcImRvY3R5cGVcIjtcbn0pKEVsZW1lbnRUeXBlIHx8IChFbGVtZW50VHlwZSA9IHt9KSk7XG4vKipcbiAqIFRlc3RzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBhIHRhZyBvciBub3QuXG4gKlxuICogQHBhcmFtIGVsZW0gRWxlbWVudCB0byB0ZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RhZyhlbGVtKSB7XG4gICAgcmV0dXJuIChlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlRhZyB8fFxuICAgICAgICBlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlNjcmlwdCB8fFxuICAgICAgICBlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlN0eWxlKTtcbn1cbi8vIEV4cG9ydHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4vKiogVHlwZSBmb3IgdGhlIHJvb3QgZWxlbWVudCBvZiBhIGRvY3VtZW50ICovXG5leHBvcnQgY29uc3QgUm9vdCA9IEVsZW1lbnRUeXBlLlJvb3Q7XG4vKiogVHlwZSBmb3IgVGV4dCAqL1xuZXhwb3J0IGNvbnN0IFRleHQgPSBFbGVtZW50VHlwZS5UZXh0O1xuLyoqIFR5cGUgZm9yIDw/IC4uLiA/PiAqL1xuZXhwb3J0IGNvbnN0IERpcmVjdGl2ZSA9IEVsZW1lbnRUeXBlLkRpcmVjdGl2ZTtcbi8qKiBUeXBlIGZvciA8IS0tIC4uLiAtLT4gKi9cbmV4cG9ydCBjb25zdCBDb21tZW50ID0gRWxlbWVudFR5cGUuQ29tbWVudDtcbi8qKiBUeXBlIGZvciA8c2NyaXB0PiB0YWdzICovXG5leHBvcnQgY29uc3QgU2NyaXB0ID0gRWxlbWVudFR5cGUuU2NyaXB0O1xuLyoqIFR5cGUgZm9yIDxzdHlsZT4gdGFncyAqL1xuZXhwb3J0IGNvbnN0IFN0eWxlID0gRWxlbWVudFR5cGUuU3R5bGU7XG4vKiogVHlwZSBmb3IgQW55IHRhZyAqL1xuZXhwb3J0IGNvbnN0IFRhZyA9IEVsZW1lbnRUeXBlLlRhZztcbi8qKiBUeXBlIGZvciA8IVtDREFUQVsgLi4uIF1dPiAqL1xuZXhwb3J0IGNvbnN0IENEQVRBID0gRWxlbWVudFR5cGUuQ0RBVEE7XG4vKiogVHlwZSBmb3IgPCFkb2N0eXBlIC4uLj4gKi9cbmV4cG9ydCBjb25zdCBEb2N0eXBlID0gRWxlbWVudFR5cGUuRG9jdHlwZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY2hlZXJpbyBmcm9tIFwiY2hlZXJpb1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNjcmFwZVBhZ2UoYm9va0lEKSB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3Lmdvb2RyZWFkcy5jb20vYm9vay9zaG93LyR7Ym9va0lEfWA7XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBGZXRjaCB0aGUgSFRNTCBjb250ZW50IG9mIHRoZSBwYWdlXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xyXG4gICAgY29uc3QgaHRtbCA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgLy8gTG9hZCB0aGUgSFRNTCBjb250ZW50IGludG8gQ2hlZXJpb1xyXG4gICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChodG1sKTtcclxuXHJcbiAgICAvLyBFeHRyYWN0IGltYWdlc1xyXG4gICAgY29uc3QgaW1hZ2VzID0gW107XHJcbiAgICAkKFwiaW1nLlJlc3BvbnNpdmVJbWFnZVwiKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZVVybCA9ICQoZWxlbWVudCkuYXR0cihcInNyY1wiKTtcclxuICAgICAgaW1hZ2VzLnB1c2goaW1hZ2VVcmwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYXJyYXkgb2YgaW1hZ2UgVVJMcyBmb3IgdGhlIGN1cnJlbnQgcGFnZVxyXG4gICAgY29uc29sZS5sb2coYEltYWdlcyBvbiBwYWdlICR7Ym9va0lEfTpgLCBpbWFnZXMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBvciBwYXJzaW5nIHBhZ2UgJHtib29rSUR9OmAsIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlaG9sZGVyKCkge1xyXG4gIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=