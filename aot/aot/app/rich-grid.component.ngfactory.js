/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/rich-grid.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '../node_modules/ag-grid-ng2/dist/agGridNg2.ngfactory';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from 'ag-grid-ng2/dist/ng2FrameworkFactory';
import * as import17 from 'ag-grid-ng2/dist/agGridNg2';
export var Wrapper_RichGridComponent = (function () {
    function Wrapper_RichGridComponent() {
        this.changed = false;
        this.context = new import0.RichGridComponent();
    }
    Wrapper_RichGridComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_RichGridComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_RichGridComponent;
}());
var renderType_RichGridComponent_Host = null;
var _View_RichGridComponent_Host0 = (function (_super) {
    __extends(_View_RichGridComponent_Host0, _super);
    function _View_RichGridComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RichGridComponent_Host0, renderType_RichGridComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RichGridComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'rich-grid', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_RichGridComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._RichGridComponent_0_4 = new Wrapper_RichGridComponent();
        this._appEl_0.initComponent(this._RichGridComponent_0_4.context, [], compView_0);
        compView_0.create(this._RichGridComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_RichGridComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.RichGridComponent) && (0 === requestNodeIndex))) {
            return this._RichGridComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_RichGridComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RichGridComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RichGridComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_RichGridComponent_Host0;
}(import1.AppView));
function viewFactory_RichGridComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RichGridComponent_Host === null)) {
        (renderType_RichGridComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_RichGridComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var RichGridComponentNgFactory = new import9.ComponentFactory('rich-grid', viewFactory_RichGridComponent_Host0, import0.RichGridComponent);
var styles_RichGridComponent = ['.toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {margin: 2px; padding: 0px;}'];
var renderType_RichGridComponent = null;
var _View_RichGridComponent0 = (function (_super) {
    __extends(_View_RichGridComponent0, _super);
    function _View_RichGridComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RichGridComponent0, renderType_RichGridComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
    }
    _View_RichGridComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'div', new import4.InlineArray2(2, 'style', 'width: 800px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'h1', import4.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Rich Grid with Pure JavaScript', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'style', 'padding: 4px;'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'div', new import4.InlineArray2(2, 'style', 'float: right;'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'input', new import4.InlineArray8(6, 'id', 'quickFilterInput', 'placeholder', 'Type text to filter...', 'type', 'text'), null);
        this._text_10 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_11 = import4.createRenderElement(this.renderer, this._el_7, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, 'Destroy Grid', null);
        this._text_13 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_7, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'Create Grid', null);
        this._text_16 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_17 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_18 = import4.createRenderElement(this.renderer, this._el_5, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, '\n            ', null);
        this._el_20 = import4.createRenderElement(this.renderer, this._el_18, 'b', import4.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, 'Employees Skills and Contact Details', null);
        this._text_22 = this.renderer.createText(this._el_18, '', null);
        this._text_23 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_25 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'style', 'clear: both;'), null);
        this._text_26 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._anchor_27 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_27 = new import3.AppElement(27, 0, this, this._anchor_27);
        this._TemplateRef_27_5 = new import11.TemplateRef_(this._appEl_27, viewFactory_RichGridComponent1);
        this._NgIf_27_6 = new import10.Wrapper_NgIf(this._appEl_27.vcRef, this._TemplateRef_27_5);
        this._text_28 = this.renderer.createText(this._el_0, '\n\n', null);
        var disposable_0 = this.renderer.listen(this._el_9, 'keyup', this.eventHandler(this._handle_keyup_9_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_11, 'click', this.eventHandler(this._handle_click_11_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_14, 'click', this.eventHandler(this._handle_click_14_0.bind(this)));
        this.init([], [
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
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_RichGridComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (27 === requestNodeIndex))) {
            return this._TemplateRef_27_5;
        }
        if (((token === import12.NgIf) && (27 === requestNodeIndex))) {
            return this._NgIf_27_6.context;
        }
        return notFoundResult;
    };
    _View_RichGridComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_27_0_0 = this.context.showGrid;
        this._NgIf_27_6.check_ngIf(currVal_27_0_0, throwOnChange, false);
        this._NgIf_27_6.detectChangesInInputProps(this, this._anchor_27, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_32 = !this.context.showGrid;
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementProperty(this._el_11, 'disabled', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = this.context.showGrid;
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementProperty(this._el_14, 'disabled', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = import4.interpolate(1, '\n            ', this.context.rowCount, '\n        ');
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setText(this._text_22, currVal_34);
            this._expr_34 = currVal_34;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_RichGridComponent0.prototype._handle_keyup_9_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_9_0 = (this.context.onQuickFilterChanged($event) !== false);
        return (true && pd_9_0);
    };
    _View_RichGridComponent0.prototype._handle_click_11_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_11_0 = ((this.context.showGrid = false) !== false);
        return (true && pd_11_0);
    };
    _View_RichGridComponent0.prototype._handle_click_14_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_14_0 = ((this.context.showGrid = true) !== false);
        return (true && pd_14_0);
    };
    return _View_RichGridComponent0;
}(import1.AppView));
export function viewFactory_RichGridComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_RichGridComponent === null)) {
        (renderType_RichGridComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_RichGridComponent, {}));
    }
    return new _View_RichGridComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_RichGridComponent1 = (function (_super) {
    __extends(_View_RichGridComponent1, _super);
    function _View_RichGridComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_RichGridComponent1, renderType_RichGridComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_RichGridComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.createRenderElement(this.renderer, null, 'div', import4.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._el_3 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray4(4, 'class', 'toolbar', 'style', 'padding: 4px;'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n            ', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_3, 'span', import4.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '\n                Grid API:\n                ', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, 'Select All', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n                ', null);
        this._el_10 = import4.createRenderElement(this.renderer, this._el_5, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, 'Clear Selection', null);
        this._text_12 = this.renderer.createText(this._el_5, '\n            ', null);
        this._text_13 = this.renderer.createText(this._el_3, '\n            ', null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_3, 'span', new import4.InlineArray2(2, 'style', 'margin-left: 20px;'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n                Column API:\n                ', null);
        this._el_16 = import4.createRenderElement(this.renderer, this._el_14, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, 'Hide Country Column', null);
        this._text_18 = this.renderer.createText(this._el_14, '\n                ', null);
        this._el_19 = import4.createRenderElement(this.renderer, this._el_14, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, 'Show Country Column', null);
        this._text_21 = this.renderer.createText(this._el_14, '\n            ', null);
        this._text_22 = this.renderer.createText(this._el_3, '\n        ', null);
        this._text_23 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'style', 'clear: both;'), null);
        this._text_25 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_26 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray4(4, 'class', 'toolbar', 'style', 'padding: 4px;'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n            ', null);
        this._el_28 = import4.createRenderElement(this.renderer, this._el_26, 'label', import4.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '\n                ', null);
        this._el_30 = import4.createRenderElement(this.renderer, this._el_28, 'input', new import4.InlineArray2(2, 'type', 'checkbox'), null);
        this._text_31 = this.renderer.createText(this._el_28, '\n                Show Tool Panel\n            ', null);
        this._text_32 = this.renderer.createText(this._el_26, '\n            ', null);
        this._el_33 = import4.createRenderElement(this.renderer, this._el_26, 'button', import4.EMPTY_INLINE_ARRAY, null);
        this._text_34 = this.renderer.createText(this._el_33, 'Refresh Data', null);
        this._text_35 = this.renderer.createText(this._el_26, '\n        ', null);
        this._text_36 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_37 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'style', 'clear: both;'), null);
        this._text_38 = this.renderer.createText(this._el_0, '\n\n        ', null);
        this._el_39 = import4.createRenderElement(this.renderer, this._el_0, 'ag-grid-ng2', new import4.InlineArrayDynamic(24, 'class', 'ag-fresh', 'debug', '', 'enableColResize', '', 'enableFilter', '', 'enableSorting', '', 'groupHeaders', '', 'rowHeight', '22', 'rowSelection', 'multiple', 'style', 'width: 100%; height: 350px;', 'suppressRowClickSelection', '', 'toolPanelSuppressGroups', '', 'toolPanelSuppressValues', ''), null);
        this._appEl_39 = new import3.AppElement(39, 0, this, this._el_39);
        var compView_39 = import13.viewFactory_AgGridNg20(this.viewUtils, this.injector(39), this._appEl_39);
        this._AgGridNg2_39_5 = new import13.Wrapper_AgGridNg2(new import15.ElementRef(this._el_39), this._appEl_39.vcRef, this.parent.parentInjector.get(import16.Ng2FrameworkFactory));
        this._query_AgGridColumn_39_0 = new import14.QueryList();
        this._appEl_39.initComponent(this._AgGridNg2_39_5.context, [], compView_39);
        this._text_40 = this.renderer.createText(null, '\n        ', null);
        compView_39.create(this._AgGridNg2_39_5.context, [], null);
        this._text_41 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_10, 'click', this.eventHandler(this._handle_click_10_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_16, 'click', this.eventHandler(this._handle_click_16_0.bind(this)));
        var disposable_3 = this.renderer.listen(this._el_19, 'click', this.eventHandler(this._handle_click_19_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_30, 'change', this.eventHandler(this._handle_change_30_0.bind(this)));
        var disposable_5 = this.renderer.listen(this._el_33, 'click', this.eventHandler(this._handle_click_33_0.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_39, 'modelUpdated', this.eventHandler(this._handle_modelUpdated_39_0.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_39, 'cellClicked', this.eventHandler(this._handle_cellClicked_39_1.bind(this)));
        var disposable_8 = this.renderer.listen(this._el_39, 'cellDoubleClicked', this.eventHandler(this._handle_cellDoubleClicked_39_2.bind(this)));
        var disposable_9 = this.renderer.listen(this._el_39, 'cellContextMenu', this.eventHandler(this._handle_cellContextMenu_39_3.bind(this)));
        var disposable_10 = this.renderer.listen(this._el_39, 'cellValueChanged', this.eventHandler(this._handle_cellValueChanged_39_4.bind(this)));
        var disposable_11 = this.renderer.listen(this._el_39, 'cellFocused', this.eventHandler(this._handle_cellFocused_39_5.bind(this)));
        var disposable_12 = this.renderer.listen(this._el_39, 'rowSelected', this.eventHandler(this._handle_rowSelected_39_6.bind(this)));
        var disposable_13 = this.renderer.listen(this._el_39, 'selectionChanged', this.eventHandler(this._handle_selectionChanged_39_7.bind(this)));
        var disposable_14 = this.renderer.listen(this._el_39, 'beforeFilterChanged', this.eventHandler(this._handle_beforeFilterChanged_39_8.bind(this)));
        var disposable_15 = this.renderer.listen(this._el_39, 'afterFilterChanged', this.eventHandler(this._handle_afterFilterChanged_39_9.bind(this)));
        var disposable_16 = this.renderer.listen(this._el_39, 'filterModified', this.eventHandler(this._handle_filterModified_39_10.bind(this)));
        var disposable_17 = this.renderer.listen(this._el_39, 'beforeSortChanged', this.eventHandler(this._handle_beforeSortChanged_39_11.bind(this)));
        var disposable_18 = this.renderer.listen(this._el_39, 'afterSortChanged', this.eventHandler(this._handle_afterSortChanged_39_12.bind(this)));
        var disposable_19 = this.renderer.listen(this._el_39, 'virtualRowRemoved', this.eventHandler(this._handle_virtualRowRemoved_39_13.bind(this)));
        var disposable_20 = this.renderer.listen(this._el_39, 'rowClicked', this.eventHandler(this._handle_rowClicked_39_14.bind(this)));
        var disposable_21 = this.renderer.listen(this._el_39, 'gridReady', this.eventHandler(this._handle_gridReady_39_15.bind(this)));
        var disposable_22 = this.renderer.listen(this._el_39, 'columnEverythingChanged', this.eventHandler(this._handle_columnEverythingChanged_39_16.bind(this)));
        var disposable_23 = this.renderer.listen(this._el_39, 'columnRowGroupChanged', this.eventHandler(this._handle_columnRowGroupChanged_39_17.bind(this)));
        var disposable_24 = this.renderer.listen(this._el_39, 'columnValueChanged', this.eventHandler(this._handle_columnValueChanged_39_18.bind(this)));
        var disposable_25 = this.renderer.listen(this._el_39, 'columnMoved', this.eventHandler(this._handle_columnMoved_39_19.bind(this)));
        var disposable_26 = this.renderer.listen(this._el_39, 'columnVisible', this.eventHandler(this._handle_columnVisible_39_20.bind(this)));
        var disposable_27 = this.renderer.listen(this._el_39, 'columnGroupOpened', this.eventHandler(this._handle_columnGroupOpened_39_21.bind(this)));
        var disposable_28 = this.renderer.listen(this._el_39, 'columnResized', this.eventHandler(this._handle_columnResized_39_22.bind(this)));
        var disposable_29 = this.renderer.listen(this._el_39, 'columnPinnedCountChanged', this.eventHandler(this._handle_columnPinnedCountChanged_39_23.bind(this)));
        var subscription_0 = this._AgGridNg2_39_5.context.gridReady.subscribe(this.eventHandler(this._handle_gridReady_39_15.bind(this)));
        var subscription_1 = this._AgGridNg2_39_5.context.columnEverythingChanged.subscribe(this.eventHandler(this._handle_columnEverythingChanged_39_16.bind(this)));
        var subscription_2 = this._AgGridNg2_39_5.context.columnRowGroupChanged.subscribe(this.eventHandler(this._handle_columnRowGroupChanged_39_17.bind(this)));
        var subscription_3 = this._AgGridNg2_39_5.context.columnValueChanged.subscribe(this.eventHandler(this._handle_columnValueChanged_39_18.bind(this)));
        var subscription_4 = this._AgGridNg2_39_5.context.columnMoved.subscribe(this.eventHandler(this._handle_columnMoved_39_19.bind(this)));
        var subscription_5 = this._AgGridNg2_39_5.context.columnVisible.subscribe(this.eventHandler(this._handle_columnVisible_39_20.bind(this)));
        var subscription_6 = this._AgGridNg2_39_5.context.columnGroupOpened.subscribe(this.eventHandler(this._handle_columnGroupOpened_39_21.bind(this)));
        var subscription_7 = this._AgGridNg2_39_5.context.columnResized.subscribe(this.eventHandler(this._handle_columnResized_39_22.bind(this)));
        var subscription_8 = this._AgGridNg2_39_5.context.modelUpdated.subscribe(this.eventHandler(this._handle_modelUpdated_39_0.bind(this)));
        var subscription_9 = this._AgGridNg2_39_5.context.cellClicked.subscribe(this.eventHandler(this._handle_cellClicked_39_1.bind(this)));
        var subscription_10 = this._AgGridNg2_39_5.context.cellDoubleClicked.subscribe(this.eventHandler(this._handle_cellDoubleClicked_39_2.bind(this)));
        var subscription_11 = this._AgGridNg2_39_5.context.cellContextMenu.subscribe(this.eventHandler(this._handle_cellContextMenu_39_3.bind(this)));
        var subscription_12 = this._AgGridNg2_39_5.context.cellValueChanged.subscribe(this.eventHandler(this._handle_cellValueChanged_39_4.bind(this)));
        var subscription_13 = this._AgGridNg2_39_5.context.cellFocused.subscribe(this.eventHandler(this._handle_cellFocused_39_5.bind(this)));
        var subscription_14 = this._AgGridNg2_39_5.context.rowSelected.subscribe(this.eventHandler(this._handle_rowSelected_39_6.bind(this)));
        var subscription_15 = this._AgGridNg2_39_5.context.selectionChanged.subscribe(this.eventHandler(this._handle_selectionChanged_39_7.bind(this)));
        var subscription_16 = this._AgGridNg2_39_5.context.beforeFilterChanged.subscribe(this.eventHandler(this._handle_beforeFilterChanged_39_8.bind(this)));
        var subscription_17 = this._AgGridNg2_39_5.context.afterFilterChanged.subscribe(this.eventHandler(this._handle_afterFilterChanged_39_9.bind(this)));
        var subscription_18 = this._AgGridNg2_39_5.context.filterModified.subscribe(this.eventHandler(this._handle_filterModified_39_10.bind(this)));
        var subscription_19 = this._AgGridNg2_39_5.context.beforeSortChanged.subscribe(this.eventHandler(this._handle_beforeSortChanged_39_11.bind(this)));
        var subscription_20 = this._AgGridNg2_39_5.context.afterSortChanged.subscribe(this.eventHandler(this._handle_afterSortChanged_39_12.bind(this)));
        var subscription_21 = this._AgGridNg2_39_5.context.virtualRowRemoved.subscribe(this.eventHandler(this._handle_virtualRowRemoved_39_13.bind(this)));
        var subscription_22 = this._AgGridNg2_39_5.context.rowClicked.subscribe(this.eventHandler(this._handle_rowClicked_39_14.bind(this)));
        this.init([].concat([this._el_0]), [
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
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10,
            disposable_11,
            disposable_12,
            disposable_13,
            disposable_14,
            disposable_15,
            disposable_16,
            disposable_17,
            disposable_18,
            disposable_19,
            disposable_20,
            disposable_21,
            disposable_22,
            disposable_23,
            disposable_24,
            disposable_25,
            disposable_26,
            disposable_27,
            disposable_28,
            disposable_29
        ], [
            subscription_0,
            subscription_1,
            subscription_2,
            subscription_3,
            subscription_4,
            subscription_5,
            subscription_6,
            subscription_7,
            subscription_8,
            subscription_9,
            subscription_10,
            subscription_11,
            subscription_12,
            subscription_13,
            subscription_14,
            subscription_15,
            subscription_16,
            subscription_17,
            subscription_18,
            subscription_19,
            subscription_20,
            subscription_21,
            subscription_22
        ]);
        return null;
    };
    _View_RichGridComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.AgGridNg2) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._AgGridNg2_39_5.context;
        }
        return notFoundResult;
    };
    _View_RichGridComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_39_0_0 = this.parent.context.gridOptions;
        this._AgGridNg2_39_5.check_gridOptions(currVal_39_0_0, throwOnChange, false);
        var currVal_39_0_1 = this.parent.context.rowData;
        this._AgGridNg2_39_5.check_rowData(currVal_39_0_1, throwOnChange, false);
        var currVal_39_0_2 = this.parent.context.columnDefs;
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
        var currVal_39_0_11 = this.parent.context.showToolPanel;
        this._AgGridNg2_39_5.check_showToolPanel(currVal_39_0_11, throwOnChange, false);
        this._AgGridNg2_39_5.detectChangesInInputProps(this, this._el_39, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_AgGridColumn_39_0.dirty) {
                this._query_AgGridColumn_39_0.reset([]);
                this._AgGridNg2_39_5.context.columns = this._query_AgGridColumn_39_0;
                this._query_AgGridColumn_39_0.notifyOnChanges();
            }
        }
        this._AgGridNg2_39_5.detectChangesInHostProps(this, this._el_39, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._AgGridNg2_39_5.context.ngAfterViewInit();
            }
        }
    };
    _View_RichGridComponent1.prototype.destroyInternal = function () {
        this._AgGridNg2_39_5.context.ngOnDestroy();
    };
    _View_RichGridComponent1.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_7_0 = (this._AgGridNg2_39_5.context.api.selectAll() !== false);
        return (true && pd_7_0);
    };
    _View_RichGridComponent1.prototype._handle_click_10_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_10_0 = (this._AgGridNg2_39_5.context.api.deselectAll() !== false);
        return (true && pd_10_0);
    };
    _View_RichGridComponent1.prototype._handle_click_16_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_16_0 = (this._AgGridNg2_39_5.context.columnApi.setColumnVisible('country', false) !== false);
        return (true && pd_16_0);
    };
    _View_RichGridComponent1.prototype._handle_click_19_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_19_0 = (this._AgGridNg2_39_5.context.columnApi.setColumnVisible('country', true) !== false);
        return (true && pd_19_0);
    };
    _View_RichGridComponent1.prototype._handle_change_30_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_30_0 = ((this.parent.context.showToolPanel = $event.target.checked) !== false);
        return (true && pd_30_0);
    };
    _View_RichGridComponent1.prototype._handle_click_33_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_33_0 = (this.parent.context.createRowData() !== false);
        return (true && pd_33_0);
    };
    _View_RichGridComponent1.prototype._handle_modelUpdated_39_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onModelUpdated() !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_cellClicked_39_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onCellClicked($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_cellDoubleClicked_39_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onCellDoubleClicked($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_cellContextMenu_39_3 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onCellContextMenu($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_cellValueChanged_39_4 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onCellValueChanged($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_cellFocused_39_5 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onCellFocused($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_rowSelected_39_6 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onRowSelected($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_selectionChanged_39_7 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onSelectionChanged() !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_beforeFilterChanged_39_8 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onBeforeFilterChanged() !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_afterFilterChanged_39_9 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onAfterFilterChanged() !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_filterModified_39_10 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onFilterModified() !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_beforeSortChanged_39_11 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onBeforeSortChanged() !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_afterSortChanged_39_12 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onAfterSortChanged() !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_virtualRowRemoved_39_13 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onVirtualRowRemoved($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_rowClicked_39_14 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onRowClicked($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_gridReady_39_15 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onReady($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_columnEverythingChanged_39_16 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onColumnEvent($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_columnRowGroupChanged_39_17 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onColumnEvent($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_columnValueChanged_39_18 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onColumnEvent($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_columnMoved_39_19 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onColumnEvent($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_columnVisible_39_20 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onColumnEvent($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_columnGroupOpened_39_21 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onColumnEvent($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_columnResized_39_22 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onColumnEvent($event) !== false);
        return (true && pd_39_0);
    };
    _View_RichGridComponent1.prototype._handle_columnPinnedCountChanged_39_23 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_39_0 = (this.parent.context.onColumnEvent($event) !== false);
        return (true && pd_39_0);
    };
    return _View_RichGridComponent1;
}(import1.AppView));
function viewFactory_RichGridComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_RichGridComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=rich-grid.component.ngfactory.js.map