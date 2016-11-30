/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/rich-grid.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import10 from '@angular/core/src/linker/template_ref';
import * as import11 from '@angular/common/src/directives/ng_if';
import * as import12 from 'ag-grid-ng2/lib/agGridNg2';
import * as import13 from '../node_modules/ag-grid-ng2/lib/agGridNg2.ngfactory';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from 'ag-grid-ng2/lib/ng2FrameworkFactory';
export var Wrapper_RichGridComponent = (function () {
    function Wrapper_RichGridComponent() {
        this._changed = false;
        this.context = new import0.RichGridComponent();
    }
    Wrapper_RichGridComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RichGridComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_RichGridComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_RichGridComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RichGridComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RichGridComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RichGridComponent;
}());
var renderType_RichGridComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_RichGridComponent_Host0 = (function (_super) {
    __extends(View_RichGridComponent_Host0, _super);
    function View_RichGridComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_RichGridComponent_Host0, renderType_RichGridComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_RichGridComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'rich-grid', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_RichGridComponent0(this.viewUtils, this, 0, this._el_0);
        this._RichGridComponent_0_3 = new Wrapper_RichGridComponent();
        this.compView_0.create(this._RichGridComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._RichGridComponent_0_3.context);
    };
    View_RichGridComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.RichGridComponent) && (0 === requestNodeIndex))) {
            return this._RichGridComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_RichGridComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RichGridComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_RichGridComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_RichGridComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_RichGridComponent_Host0;
}(import1.AppView));
export var RichGridComponentNgFactory = new import7.ComponentFactory('rich-grid', View_RichGridComponent_Host0, import0.RichGridComponent);
var styles_RichGridComponent = ['.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {margin: 2px; padding: 0px;}'];
var renderType_RichGridComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_RichGridComponent, {});
export var View_RichGridComponent0 = (function (_super) {
    __extends(View_RichGridComponent0, _super);
    function View_RichGridComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_RichGridComponent0, renderType_RichGridComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_32 = import6.UNINITIALIZED;
        this._expr_33 = import6.UNINITIALIZED;
        this._expr_34 = import6.UNINITIALIZED;
    }
    View_RichGridComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'style', 'width: 800px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Rich Grid with Pure JavaScript', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'style', 'padding: 4px;'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'style', 'float: right;'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'input', new import3.InlineArray8(6, 'id', 'quickFilterInput', 'placeholder', 'Type text to filter...', 'type', 'text'), null);
        this._text_10 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_7, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Destroy Grid', null);
        this._text_13 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_7, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'Create Grid', null);
        this._text_16 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_17 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_5, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, '\n            ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'b', import3.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, 'Employees Skills and Contact Details', null);
        this._text_22 = this.renderer.createText(this._el_18, '', null);
        this._text_23 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'style', 'clear: both;'), null);
        this._text_26 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._anchor_27 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_27 = new import8.ViewContainer(27, 0, this, this._anchor_27);
        this._TemplateRef_27_5 = new import10.TemplateRef_(this, 27, this._anchor_27);
        this._NgIf_27_6 = new import9.Wrapper_NgIf(this._vc_27.vcRef, this._TemplateRef_27_5);
        this._text_28 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_9, new import3.InlineArray2(2, 'keyup', null), this.eventHandler(this.handleEvent_9));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_11));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_14, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_14));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._anchor_27,
            this._text_28
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_RichGridComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.TemplateRef) && (27 === requestNodeIndex))) {
            return this._TemplateRef_27_5;
        }
        if (((token === import11.NgIf) && (27 === requestNodeIndex))) {
            return this._NgIf_27_6.context;
        }
        return notFoundResult;
    };
    View_RichGridComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_27_0_0 = this.context.showGrid;
        this._NgIf_27_6.check_ngIf(currVal_27_0_0, throwOnChange, false);
        this._NgIf_27_6.ngDoCheck(this, this._anchor_27, throwOnChange);
        this._vc_27.detectChangesInNestedViews(throwOnChange);
        var currVal_32 = !this.context.showGrid;
        if (import3.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementProperty(this._el_11, 'disabled', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = this.context.showGrid;
        if (import3.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementProperty(this._el_14, 'disabled', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = import3.inlineInterpolate(1, '\n            ', this.context.rowCount, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setText(this._text_22, currVal_34);
            this._expr_34 = currVal_34;
        }
    };
    View_RichGridComponent0.prototype.destroyInternal = function () {
        this._vc_27.destroyNestedViews();
    };
    View_RichGridComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 27)) {
            return new View_RichGridComponent1(this.viewUtils, this, 27, this._anchor_27, this._vc_27);
        }
        return null;
    };
    View_RichGridComponent0.prototype.handleEvent_9 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'keyup')) {
            var pd_sub_0 = (this.context.onQuickFilterChanged($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_RichGridComponent0.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.context.showGrid = false) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_RichGridComponent0.prototype.handleEvent_14 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.context.showGrid = true) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_RichGridComponent0;
}(import1.AppView));
var View_RichGridComponent1 = (function (_super) {
    __extends(View_RichGridComponent1, _super);
    function View_RichGridComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_RichGridComponent1, renderType_RichGridComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_RichGridComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray4(4, 'class', 'toolbar', 'style', 'padding: 4px;'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '\n                Grid API:\n                ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, 'Select All', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n                ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_5, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, 'Clear Selection', null);
        this._text_12 = this.renderer.createText(this._el_5, '\n            ', null);
        this._text_13 = this.renderer.createText(this._el_3, '\n            ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_3, 'span', new import3.InlineArray2(2, 'style', 'margin-left: 20px;'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n                Column API:\n                ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, 'Hide Country Column', null);
        this._text_18 = this.renderer.createText(this._el_14, '\n                ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_14, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, 'Show Country Column', null);
        this._text_21 = this.renderer.createText(this._el_14, '\n            ', null);
        this._text_22 = this.renderer.createText(this._el_3, '\n        ', null);
        this._text_23 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'style', 'clear: both;'), null);
        this._text_25 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray4(4, 'class', 'toolbar', 'style', 'padding: 4px;'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n            ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '\n                ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'input', new import3.InlineArray2(2, 'type', 'checkbox'), null);
        this._text_31 = this.renderer.createText(this._el_28, '\n                Show Tool Panel\n            ', null);
        this._text_32 = this.renderer.createText(this._el_26, '\n            ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_26, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_34 = this.renderer.createText(this._el_33, 'Refresh Data', null);
        this._text_35 = this.renderer.createText(this._el_26, '\n        ', null);
        this._text_36 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'style', 'clear: both;'), null);
        this._text_38 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_0, 'ag-grid-ng2', new import3.InlineArrayDynamic(24, 'class', 'ag-fresh', 'debug', '', 'enableColResize', '', 'enableFilter', '', 'enableSorting', '', 'groupHeaders', '', 'rowHeight', '22', 'rowSelection', 'multiple', 'style', 'width: 100%; height: 350px;', 'suppressRowClickSelection', '', 'toolPanelSuppressGroups', '', 'toolPanelSuppressValues', ''), null);
        this._vc_39 = new import8.ViewContainer(39, 0, this, this._el_39);
        this.compView_39 = new import13.View_AgGridNg20(this.viewUtils, this, 39, this._el_39);
        this._AgGridNg2_39_5 = new import13.Wrapper_AgGridNg2(new import15.ElementRef(this._el_39), this._vc_39.vcRef, this.parentView.parentView.injectorGet(import16.Ng2FrameworkFactory, this.parentView.parentIndex));
        this._query_AgGridColumn_39_0 = new import14.QueryList();
        this._text_40 = this.renderer.createText(null, '\n        ', null);
        this.compView_39.create(this._AgGridNg2_39_5.context);
        this._text_41 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_10));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_16, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_16));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_19, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_19));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_30, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_30));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_33, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_33));
        var disposable_6 = import3.subscribeToRenderElement(this, this._el_39, new import3.InlineArrayDynamic(48, 'modelUpdated', null, 'cellClicked', null, 'cellDoubleClicked', null, 'cellContextMenu', null, 'cellValueChanged', null, 'cellFocused', null, 'rowSelected', null, 'selectionChanged', null, 'beforeFilterChanged', null, 'afterFilterChanged', null, 'filterModified', null, 'beforeSortChanged', null, 'afterSortChanged', null, 'virtualRowRemoved', null, 'rowClicked', null, 'gridReady', null, 'columnEverythingChanged', null, 'columnRowGroupChanged', null, 'columnValueChanged', null, 'columnMoved', null, 'columnVisible', null, 'columnGroupOpened', null, 'columnResized', null, 'columnPinnedCountChanged', null), this.eventHandler(this.handleEvent_39));
        this._AgGridNg2_39_5.subscribe(this, this.eventHandler(this.handleEvent_39), true, true, false, false, true, false, false, true, true, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, false, true, true, true, false, false, false, false, false, false, false);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6
        ]);
        return null;
    };
    View_RichGridComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.AgGridNg2) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._AgGridNg2_39_5.context;
        }
        return notFoundResult;
    };
    View_RichGridComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_39_0_0 = this.parentView.context.gridOptions;
        this._AgGridNg2_39_5.check_gridOptions(currVal_39_0_0, throwOnChange, false);
        var currVal_39_0_1 = this.parentView.context.rowData;
        this._AgGridNg2_39_5.check_rowData(currVal_39_0_1, throwOnChange, false);
        var currVal_39_0_2 = this.parentView.context.columnDefs;
        this._AgGridNg2_39_5.check_columnDefs(currVal_39_0_2, throwOnChange, false);
        var currVal_39_0_3 = 'multiple';
        this._AgGridNg2_39_5.check_rowSelection(currVal_39_0_3, throwOnChange, false);
        var currVal_39_0_4 = '22';
        this._AgGridNg2_39_5.check_rowHeight(currVal_39_0_4, throwOnChange, false);
        var currVal_39_0_5 = '';
        this._AgGridNg2_39_5.check_toolPanelSuppressValues(currVal_39_0_5, throwOnChange, false);
        var currVal_39_0_6 = '';
        this._AgGridNg2_39_5.check_suppressRowClickSelection(currVal_39_0_6, throwOnChange, false);
        var currVal_39_0_7 = '';
        this._AgGridNg2_39_5.check_debug(currVal_39_0_7, throwOnChange, false);
        var currVal_39_0_8 = '';
        this._AgGridNg2_39_5.check_enableColResize(currVal_39_0_8, throwOnChange, false);
        var currVal_39_0_9 = '';
        this._AgGridNg2_39_5.check_enableSorting(currVal_39_0_9, throwOnChange, false);
        var currVal_39_0_10 = '';
        this._AgGridNg2_39_5.check_enableFilter(currVal_39_0_10, throwOnChange, false);
        var currVal_39_0_11 = this.parentView.context.showToolPanel;
        this._AgGridNg2_39_5.check_showToolPanel(currVal_39_0_11, throwOnChange, false);
        this._AgGridNg2_39_5.ngDoCheck(this, this._el_39, throwOnChange);
        this._vc_39.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_AgGridColumn_39_0.dirty) {
                this._query_AgGridColumn_39_0.reset([]);
                this._AgGridNg2_39_5.context.columns = this._query_AgGridColumn_39_0;
                this._query_AgGridColumn_39_0.notifyOnChanges();
            }
        }
        this.compView_39.detectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._AgGridNg2_39_5.context.ngAfterViewInit();
            }
        }
    };
    View_RichGridComponent1.prototype.destroyInternal = function () {
        this._vc_39.destroyNestedViews();
        this.compView_39.destroy();
        this._AgGridNg2_39_5.ngOnDestroy();
    };
    View_RichGridComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_RichGridComponent1.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this._AgGridNg2_39_5.context.api.selectAll() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_RichGridComponent1.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this._AgGridNg2_39_5.context.api.deselectAll() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_RichGridComponent1.prototype.handleEvent_16 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this._AgGridNg2_39_5.context.columnApi.setColumnVisible('country', false) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_RichGridComponent1.prototype.handleEvent_19 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this._AgGridNg2_39_5.context.columnApi.setColumnVisible('country', true) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_RichGridComponent1.prototype.handleEvent_30 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = ((this.parentView.context.showToolPanel = $event.target.checked) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_RichGridComponent1.prototype.handleEvent_33 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.createRowData() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_RichGridComponent1.prototype.handleEvent_39 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'modelUpdated')) {
            var pd_sub_0 = (this.parentView.context.onModelUpdated() !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'cellClicked')) {
            var pd_sub_1 = (this.parentView.context.onCellClicked($event) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'cellDoubleClicked')) {
            var pd_sub_2 = (this.parentView.context.onCellDoubleClicked($event) !== false);
            result = (pd_sub_2 && result);
        }
        if ((eventName == 'cellContextMenu')) {
            var pd_sub_3 = (this.parentView.context.onCellContextMenu($event) !== false);
            result = (pd_sub_3 && result);
        }
        if ((eventName == 'cellValueChanged')) {
            var pd_sub_4 = (this.parentView.context.onCellValueChanged($event) !== false);
            result = (pd_sub_4 && result);
        }
        if ((eventName == 'cellFocused')) {
            var pd_sub_5 = (this.parentView.context.onCellFocused($event) !== false);
            result = (pd_sub_5 && result);
        }
        if ((eventName == 'rowSelected')) {
            var pd_sub_6 = (this.parentView.context.onRowSelected($event) !== false);
            result = (pd_sub_6 && result);
        }
        if ((eventName == 'selectionChanged')) {
            var pd_sub_7 = (this.parentView.context.onSelectionChanged() !== false);
            result = (pd_sub_7 && result);
        }
        if ((eventName == 'beforeFilterChanged')) {
            var pd_sub_8 = (this.parentView.context.onBeforeFilterChanged() !== false);
            result = (pd_sub_8 && result);
        }
        if ((eventName == 'afterFilterChanged')) {
            var pd_sub_9 = (this.parentView.context.onAfterFilterChanged() !== false);
            result = (pd_sub_9 && result);
        }
        if ((eventName == 'filterModified')) {
            var pd_sub_10 = (this.parentView.context.onFilterModified() !== false);
            result = (pd_sub_10 && result);
        }
        if ((eventName == 'beforeSortChanged')) {
            var pd_sub_11 = (this.parentView.context.onBeforeSortChanged() !== false);
            result = (pd_sub_11 && result);
        }
        if ((eventName == 'afterSortChanged')) {
            var pd_sub_12 = (this.parentView.context.onAfterSortChanged() !== false);
            result = (pd_sub_12 && result);
        }
        if ((eventName == 'virtualRowRemoved')) {
            var pd_sub_13 = (this.parentView.context.onVirtualRowRemoved($event) !== false);
            result = (pd_sub_13 && result);
        }
        if ((eventName == 'rowClicked')) {
            var pd_sub_14 = (this.parentView.context.onRowClicked($event) !== false);
            result = (pd_sub_14 && result);
        }
        if ((eventName == 'gridReady')) {
            var pd_sub_15 = (this.parentView.context.onReady($event) !== false);
            result = (pd_sub_15 && result);
        }
        if ((eventName == 'columnEverythingChanged')) {
            var pd_sub_16 = (this.parentView.context.onColumnEvent($event) !== false);
            result = (pd_sub_16 && result);
        }
        if ((eventName == 'columnRowGroupChanged')) {
            var pd_sub_17 = (this.parentView.context.onColumnEvent($event) !== false);
            result = (pd_sub_17 && result);
        }
        if ((eventName == 'columnValueChanged')) {
            var pd_sub_18 = (this.parentView.context.onColumnEvent($event) !== false);
            result = (pd_sub_18 && result);
        }
        if ((eventName == 'columnMoved')) {
            var pd_sub_19 = (this.parentView.context.onColumnEvent($event) !== false);
            result = (pd_sub_19 && result);
        }
        if ((eventName == 'columnVisible')) {
            var pd_sub_20 = (this.parentView.context.onColumnEvent($event) !== false);
            result = (pd_sub_20 && result);
        }
        if ((eventName == 'columnGroupOpened')) {
            var pd_sub_21 = (this.parentView.context.onColumnEvent($event) !== false);
            result = (pd_sub_21 && result);
        }
        if ((eventName == 'columnResized')) {
            var pd_sub_22 = (this.parentView.context.onColumnEvent($event) !== false);
            result = (pd_sub_22 && result);
        }
        if ((eventName == 'columnPinnedCountChanged')) {
            var pd_sub_23 = (this.parentView.context.onColumnEvent($event) !== false);
            result = (pd_sub_23 && result);
        }
        return result;
    };
    return View_RichGridComponent1;
}(import1.AppView));
//# sourceMappingURL=rich-grid.component.ngfactory.js.map