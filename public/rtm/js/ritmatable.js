(function ($) {

    $.fn.RitmaTable = function (options) {
        var table = undefined;
        /*!
 FixedColumns 3.2.5
 ©2010-2018 SpryMedia Ltd - datatables.net/license
*/
        (function (d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (p) { return d(p, window, document) }) : "object" === typeof exports ? module.exports = function (p, r) { p || (p = window); if (!r || !r.fn.dataTable) r = require("datatables.net")(p, r).$; return d(r, p, p.document) } : d(jQuery, window, document) })(function (d, p, r, t) {
            var s = d.fn.dataTable, u, m = function (a, b) {
                var c = this; if (this instanceof m) {
                    if (b === t || !0 === b) b = {}; var e = d.fn.dataTable.camelToHungarian; e && (e(m.defaults, m.defaults, !0), e(m.defaults,
                        b)); e = (new d.fn.dataTable.Api(a)).settings()[0]; this.s = { dt: e, iTableColumns: e.aoColumns.length, aiOuterWidths: [], aiInnerWidths: [], rtl: "rtl" === d(e.nTable).css("direction") }; this.dom = { scroller: null, header: null, body: null, footer: null, grid: { wrapper: null, dt: null, left: { wrapper: null, head: null, body: null, foot: null }, right: { wrapper: null, head: null, body: null, foot: null } }, clone: { left: { header: null, body: null, footer: null }, right: { header: null, body: null, footer: null } } }; if (e._oFixedColumns) throw "FixedColumns already initialised on this table";
                    e._oFixedColumns = this; e._bInitComplete ? this._fnConstruct(b) : e.oApi._fnCallbackReg(e, "aoInitComplete", function () { c._fnConstruct(b) }, "FixedColumns")
                } else alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.")
            }; d.extend(m.prototype, {
                fnUpdate: function () { this._fnDraw(!0) }, fnRedrawLayout: function () { this._fnColCalc(); this._fnGridLayout(); this.fnUpdate() }, fnRecalculateHeight: function (a) { delete a._DTTC_iHeight; a.style.height = "auto" }, fnSetRowHeight: function (a, b) {
                    a.style.height =
                        b + "px"
                }, fnGetPosition: function (a) { var b = this.s.dt.oInstance; if (d(a).parents(".DTFC_Cloned").length) { if ("tr" === a.nodeName.toLowerCase()) return a = d(a).index(), b.fnGetPosition(d("tr", this.s.dt.nTBody)[a]); var c = d(a).index(), a = d(a.parentNode).index(); return [b.fnGetPosition(d("tr", this.s.dt.nTBody)[a]), c, b.oApi._fnVisibleToColumnIndex(this.s.dt, c)] } return b.fnGetPosition(a) }, _fnConstruct: function (a) {
                    var b = this; if ("function" != typeof this.s.dt.oInstance.fnVersionCheck || !0 !== this.s.dt.oInstance.fnVersionCheck("1.8.0")) alert("FixedColumns " +
                        m.VERSION + " required DataTables 1.8.0 or later. Please upgrade your DataTables installation"); else if ("" === this.s.dt.oScroll.sX) this.s.dt.oInstance.oApi._fnLog(this.s.dt, 1, "FixedColumns is not needed (no x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for column fixing when scrolling is not enabled"); else {
                            this.s = d.extend(!0, this.s, m.defaults, a); a = this.s.dt.oClasses; this.dom.grid.dt = d(this.s.dt.nTable).parents("div." + a.sScrollWrapper)[0]; this.dom.scroller = d("div." +
                                a.sScrollBody, this.dom.grid.dt)[0]; this._fnColCalc(); this._fnGridSetup(); var c, e = !1; d(this.s.dt.nTableWrapper).on("mousedown.DTFC", function (a) { 0 === a.button && (e = !0, d(r).one("mouseup", function () { e = !1 })) }); d(this.dom.scroller).on("mouseover.DTFC touchstart.DTFC", function () { e || (c = "main") }).on("scroll.DTFC", function (a) { !c && a.originalEvent && (c = "main"); if ("main" === c && (0 < b.s.iLeftColumns && (b.dom.grid.left.liner.scrollTop = b.dom.scroller.scrollTop), 0 < b.s.iRightColumns)) b.dom.grid.right.liner.scrollTop = b.dom.scroller.scrollTop });
                            var f = "onwheel" in r.createElement("div") ? "wheel.DTFC" : "mousewheel.DTFC"; if (0 < b.s.iLeftColumns) d(b.dom.grid.left.liner).on("mouseover.DTFC touchstart.DTFC", function () { e || (c = "left") }).on("scroll.DTFC", function (a) { !c && a.originalEvent && (c = "left"); "left" === c && (b.dom.scroller.scrollTop = b.dom.grid.left.liner.scrollTop, 0 < b.s.iRightColumns && (b.dom.grid.right.liner.scrollTop = b.dom.grid.left.liner.scrollTop)) }).on(f, function (a) { b.dom.scroller.scrollLeft -= "wheel" === a.type ? -a.originalEvent.deltaX : a.originalEvent.wheelDeltaX });
                            if (0 < b.s.iRightColumns) d(b.dom.grid.right.liner).on("mouseover.DTFC touchstart.DTFC", function () { e || (c = "right") }).on("scroll.DTFC", function (a) { !c && a.originalEvent && (c = "right"); "right" === c && (b.dom.scroller.scrollTop = b.dom.grid.right.liner.scrollTop, 0 < b.s.iLeftColumns && (b.dom.grid.left.liner.scrollTop = b.dom.grid.right.liner.scrollTop)) }).on(f, function (a) { b.dom.scroller.scrollLeft -= "wheel" === a.type ? -a.originalEvent.deltaX : a.originalEvent.wheelDeltaX }); d(p).on("resize.DTFC", function () { b._fnGridLayout.call(b) });
                            var g = !0, h = d(this.s.dt.nTable); h.on("draw.dt.DTFC", function () { b._fnColCalc(); b._fnDraw.call(b, g); g = !1 }).on("column-sizing.dt.DTFC", function () { b._fnColCalc(); b._fnGridLayout(b) }).on("column-visibility.dt.DTFC", function (a, c, d, e, f) { if (f === t || f) b._fnColCalc(), b._fnGridLayout(b), b._fnDraw(!0) }).on("select.dt.DTFC deselect.dt.DTFC", function (a) { "dt" === a.namespace && b._fnDraw(!1) }).on("destroy.dt.DTFC", function () {
                                h.off(".DTFC"); d(b.dom.scroller).off(".DTFC"); d(p).off(".DTFC"); d(b.s.dt.nTableWrapper).off(".DTFC");
                                d(b.dom.grid.left.liner).off(".DTFC " + f); d(b.dom.grid.left.wrapper).remove(); d(b.dom.grid.right.liner).off(".DTFC " + f); d(b.dom.grid.right.wrapper).remove()
                            }); this._fnGridLayout(); this.s.dt.oInstance.fnDraw(!1)
                        }
                }, _fnColCalc: function () {
                    var a = this, b = 0, c = 0; this.s.aiInnerWidths = []; this.s.aiOuterWidths = []; d.each(this.s.dt.aoColumns, function (e, f) {
                        var g = d(f.nTh), h; if (g.filter(":visible").length) {
                            var i = g.outerWidth(); 0 === a.s.aiOuterWidths.length && (h = d(a.s.dt.nTable).css("border-left-width"), i += "string" ===
                                typeof h && -1 === h.indexOf("px") ? 1 : parseInt(h, 10)); a.s.aiOuterWidths.length === a.s.dt.aoColumns.length - 1 && (h = d(a.s.dt.nTable).css("border-right-width"), i += "string" === typeof h && -1 === h.indexOf("px") ? 1 : parseInt(h, 10)); a.s.aiOuterWidths.push(i); a.s.aiInnerWidths.push(g.width()); e < a.s.iLeftColumns && (b += i); a.s.iTableColumns - a.s.iRightColumns <= e && (c += i)
                        } else a.s.aiInnerWidths.push(0), a.s.aiOuterWidths.push(0)
                    }); this.s.iLeftWidth = b; this.s.iRightWidth = c
                }, _fnGridSetup: function () {
                    var a = this._fnDTOverflow(), b; this.dom.body =
                        this.s.dt.nTable; this.dom.header = this.s.dt.nTHead.parentNode; this.dom.header.parentNode.parentNode.style.position = "relative"; var c = d('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;"><div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;" aria-hidden="true"><div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div><div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div></div><div class="DTFC_RightWrapper" style="position:absolute; top:0; right:0;" aria-hidden="true"><div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div><div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div></div></div>')[0],
                            e = c.childNodes[0], f = c.childNodes[1]; this.dom.grid.dt.parentNode.insertBefore(c, this.dom.grid.dt); c.appendChild(this.dom.grid.dt); this.dom.grid.wrapper = c; 0 < this.s.iLeftColumns && (this.dom.grid.left.wrapper = e, this.dom.grid.left.head = e.childNodes[0], this.dom.grid.left.body = e.childNodes[1], this.dom.grid.left.liner = d("div.DTFC_LeftBodyLiner", c)[0], c.appendChild(e)); 0 < this.s.iRightColumns && (this.dom.grid.right.wrapper = f, this.dom.grid.right.head = f.childNodes[0], this.dom.grid.right.body = f.childNodes[1], this.dom.grid.right.liner =
                                d("div.DTFC_RightBodyLiner", c)[0], f.style.right = a.bar + "px", b = d("div.DTFC_RightHeadBlocker", c)[0], b.style.width = a.bar + "px", b.style.right = -a.bar + "px", this.dom.grid.right.headBlock = b, b = d("div.DTFC_RightFootBlocker", c)[0], b.style.width = a.bar + "px", b.style.right = -a.bar + "px", this.dom.grid.right.footBlock = b, c.appendChild(f)); if (this.s.dt.nTFoot && (this.dom.footer = this.s.dt.nTFoot.parentNode, 0 < this.s.iLeftColumns && (this.dom.grid.left.foot = e.childNodes[2]), 0 < this.s.iRightColumns)) this.dom.grid.right.foot = f.childNodes[2];
                    this.s.rtl && d("div.DTFC_RightHeadBlocker", c).css({ left: -a.bar + "px", right: "" })
                }, _fnGridLayout: function () {
                    var a = this, b = this.dom.grid; d(b.wrapper).width(); var c = this.s.dt.nTable.parentNode.offsetHeight, e = this.s.dt.nTable.parentNode.parentNode.offsetHeight, f = this._fnDTOverflow(), g = this.s.iLeftWidth, h = this.s.iRightWidth, i = "rtl" === d(this.dom.body).css("direction"), j = function (b, c) {
                        f.bar ? a._firefoxScrollError() ? 34 < d(b).height() && (b.style.width = c + f.bar + "px") : b.style.width = c + f.bar + "px" : (b.style.width = c + 20 +
                            "px", b.style.paddingRight = "20px", b.style.boxSizing = "border-box")
                    }; f.x && (c -= f.bar); b.wrapper.style.height = e + "px"; 0 < this.s.iLeftColumns && (e = b.left.wrapper, e.style.width = g + "px", e.style.height = "1px", i ? (e.style.left = "", e.style.right = 0) : (e.style.left = 0, e.style.right = ""), b.left.body.style.height = c + "px", b.left.foot && (b.left.foot.style.top = (f.x ? f.bar : 0) + "px"), j(b.left.liner, g), b.left.liner.style.height = c + "px", b.left.liner.style.maxHeight = c + "px"); 0 < this.s.iRightColumns && (e = b.right.wrapper, e.style.width = h + "px",
                        e.style.height = "1px", this.s.rtl ? (e.style.left = f.y ? f.bar + "px" : 0, e.style.right = "") : (e.style.left = "", e.style.right = f.y ? f.bar + "px" : 0), b.right.body.style.height = c + "px", b.right.foot && (b.right.foot.style.top = (f.x ? f.bar : 0) + "px"), j(b.right.liner, h), b.right.liner.style.height = c + "px", b.right.liner.style.maxHeight = c + "px", b.right.headBlock.style.display = f.y ? "block" : "none", b.right.footBlock.style.display = f.y ? "block" : "none")
                }, _fnDTOverflow: function () {
                    var a = this.s.dt.nTable, b = a.parentNode, c = { x: !1, y: !1, bar: this.s.dt.oScroll.iBarWidth };
                    a.offsetWidth > b.clientWidth && (c.x = !0); a.offsetHeight > b.clientHeight && (c.y = !0); return c
                }, _fnDraw: function (a) { this._fnGridLayout(); this._fnCloneLeft(a); this._fnCloneRight(a); null !== this.s.fnDrawCallback && this.s.fnDrawCallback.call(this, this.dom.clone.left, this.dom.clone.right); d(this).trigger("draw.dtfc", { leftClone: this.dom.clone.left, rightClone: this.dom.clone.right }) }, _fnCloneRight: function (a) {
                    if (!(0 >= this.s.iRightColumns)) {
                        var b, c = []; for (b = this.s.iTableColumns - this.s.iRightColumns; b < this.s.iTableColumns; b++)this.s.dt.aoColumns[b].bVisible &&
                            c.push(b); this._fnClone(this.dom.clone.right, this.dom.grid.right, c, a)
                    }
                }, _fnCloneLeft: function (a) { if (!(0 >= this.s.iLeftColumns)) { var b, c = []; for (b = 0; b < this.s.iLeftColumns; b++)this.s.dt.aoColumns[b].bVisible && c.push(b); this._fnClone(this.dom.clone.left, this.dom.grid.left, c, a) } }, _fnCopyLayout: function (a, b, c) {
                    for (var e = [], f = [], g = [], h = 0, i = a.length; h < i; h++) {
                        var j = []; j.nTr = d(a[h].nTr).clone(c, !1)[0]; for (var l = 0, o = this.s.iTableColumns; l < o; l++)if (-1 !== d.inArray(l, b)) {
                            var q = d.inArray(a[h][l].cell, g); -1 === q ? (q =
                                d(a[h][l].cell).clone(c, !1)[0], f.push(q), g.push(a[h][l].cell), j.push({ cell: q, unique: a[h][l].unique })) : j.push({ cell: f[q], unique: a[h][l].unique })
                        } e.push(j)
                    } return e
                }, _fnClone: function (a, b, c, e) {
                    var f = this, g, h, i, j, l, o, q, n, m, k = this.s.dt; if (e) {
                        d(a.header).remove(); a.header = d(this.dom.header).clone(!0, !1)[0]; a.header.className += " DTFC_Cloned"; a.header.style.width = "100%"; b.head.appendChild(a.header); n = this._fnCopyLayout(k.aoHeader, c, !0); j = d(">thead", a.header); j.empty(); g = 0; for (h = n.length; g < h; g++)j[0].appendChild(n[g].nTr);
                        k.oApi._fnDrawHead(k, n, !0)
                    } else { n = this._fnCopyLayout(k.aoHeader, c, !1); m = []; k.oApi._fnDetectHeader(m, d(">thead", a.header)[0]); g = 0; for (h = n.length; g < h; g++) { i = 0; for (j = n[g].length; i < j; i++)m[g][i].cell.className = n[g][i].cell.className, d("span.DataTables_sort_icon", m[g][i].cell).each(function () { this.className = d("span.DataTables_sort_icon", n[g][i].cell)[0].className }) } } this._fnEqualiseHeights("thead", this.dom.header, a.header); "auto" == this.s.sHeightMatch && d(">tbody>tr", f.dom.body).css("height", "auto"); null !==
                        a.body && (d(a.body).remove(), a.body = null); a.body = d(this.dom.body).clone(!0)[0]; a.body.className += " DTFC_Cloned"; a.body.style.paddingBottom = k.oScroll.iBarWidth + "px"; a.body.style.marginBottom = 2 * k.oScroll.iBarWidth + "px"; null !== a.body.getAttribute("id") && a.body.removeAttribute("id"); d(">thead>tr", a.body).empty(); d(">tfoot", a.body).remove(); var p = d("tbody", a.body)[0]; d(p).empty(); if (0 < k.aiDisplay.length) {
                            h = d(">thead>tr", a.body)[0]; for (q = 0; q < c.length; q++)l = c[q], o = d(k.aoColumns[l].nTh).clone(!0)[0], o.innerHTML =
                                "", j = o.style, j.paddingTop = "0", j.paddingBottom = "0", j.borderTopWidth = "0", j.borderBottomWidth = "0", j.height = 0, j.width = f.s.aiInnerWidths[l] + "px", h.appendChild(o); d(">tbody>tr", f.dom.body).each(function (a) {
                                    var a = f.s.dt.oFeatures.bServerSide === false ? f.s.dt.aiDisplay[f.s.dt._iDisplayStart + a] : a, b = f.s.dt.aoData[a].anCells || d(this).children("td, th"), e = this.cloneNode(false); e.removeAttribute("id"); e.setAttribute("data-dt-row", a); for (q = 0; q < c.length; q++) {
                                        l = c[q]; if (b.length > 0) {
                                            o = d(b[l]).clone(true, true)[0]; o.removeAttribute("id");
                                            o.setAttribute("data-dt-row", a); o.setAttribute("data-dt-column", l); e.appendChild(o)
                                        }
                                    } p.appendChild(e)
                                })
                        } else d(">tbody>tr", f.dom.body).each(function () { o = this.cloneNode(true); o.className = o.className + " DTFC_NoData"; d("td", o).html(""); p.appendChild(o) }); a.body.style.width = "100%"; a.body.style.margin = "0"; a.body.style.padding = "0"; k.oScroller !== t && (h = k.oScroller.dom.force, b.forcer ? b.forcer.style.height = h.style.height : (b.forcer = h.cloneNode(!0), b.liner.appendChild(b.forcer))); b.liner.appendChild(a.body); this._fnEqualiseHeights("tbody",
                            f.dom.body, a.body); if (null !== k.nTFoot) {
                                if (e) { null !== a.footer && a.footer.parentNode.removeChild(a.footer); a.footer = d(this.dom.footer).clone(!0, !0)[0]; a.footer.className += " DTFC_Cloned"; a.footer.style.width = "100%"; b.foot.appendChild(a.footer); n = this._fnCopyLayout(k.aoFooter, c, !0); b = d(">tfoot", a.footer); b.empty(); g = 0; for (h = n.length; g < h; g++)b[0].appendChild(n[g].nTr); k.oApi._fnDrawHead(k, n, !0) } else {
                                    n = this._fnCopyLayout(k.aoFooter, c, !1); b = []; k.oApi._fnDetectHeader(b, d(">tfoot", a.footer)[0]); g = 0; for (h = n.length; g <
                                        h; g++) { i = 0; for (j = n[g].length; i < j; i++)b[g][i].cell.className = n[g][i].cell.className }
                                } this._fnEqualiseHeights("tfoot", this.dom.footer, a.footer)
                            } b = k.oApi._fnGetUniqueThs(k, d(">thead", a.header)[0]); d(b).each(function (a) { l = c[a]; this.style.width = f.s.aiInnerWidths[l] + "px" }); null !== f.s.dt.nTFoot && (b = k.oApi._fnGetUniqueThs(k, d(">tfoot", a.footer)[0]), d(b).each(function (a) { l = c[a]; this.style.width = f.s.aiInnerWidths[l] + "px" }))
                }, _fnGetTrNodes: function (a) {
                    for (var b = [], c = 0, d = a.childNodes.length; c < d; c++)"TR" == a.childNodes[c].nodeName.toUpperCase() &&
                        b.push(a.childNodes[c]); return b
                }, _fnEqualiseHeights: function (a, b, c) {
                    if (!("none" == this.s.sHeightMatch && "thead" !== a && "tfoot" !== a)) {
                        var e, f, g = b.getElementsByTagName(a)[0], c = c.getElementsByTagName(a)[0], a = d(">" + a + ">tr:eq(0)", b).children(":first"); a.outerHeight(); a.height(); for (var g = this._fnGetTrNodes(g), b = this._fnGetTrNodes(c), h = [], c = 0, a = b.length; c < a; c++)e = g[c].offsetHeight, f = b[c].offsetHeight, e = f > e ? f : e, "semiauto" == this.s.sHeightMatch && (g[c]._DTTC_iHeight = e), h.push(e); c = 0; for (a = b.length; c < a; c++)b[c].style.height =
                            h[c] + "px", g[c].style.height = h[c] + "px"
                    }
                }, _firefoxScrollError: function () { if (u === t) { var a = d("<div/>").css({ position: "absolute", top: 0, left: 0, height: 10, width: 50, overflow: "scroll" }).appendTo("body"); u = a[0].clientWidth === a[0].offsetWidth && 0 !== this._fnDTOverflow().bar; a.remove() } return u }
            }); m.defaults = { iLeftColumns: 1, iRightColumns: 0, fnDrawCallback: null, sHeightMatch: "semiauto" }; m.version = "3.2.5"; s.Api.register("fixedColumns()", function () { return this }); s.Api.register("fixedColumns().update()", function () {
                return this.iterator("table",
                    function (a) { a._oFixedColumns && a._oFixedColumns.fnUpdate() })
            }); s.Api.register("fixedColumns().relayout()", function () { return this.iterator("table", function (a) { a._oFixedColumns && a._oFixedColumns.fnRedrawLayout() }) }); s.Api.register("rows().recalcHeight()", function () { return this.iterator("row", function (a, b) { a._oFixedColumns && a._oFixedColumns.fnRecalculateHeight(this.row(b).node()) }) }); s.Api.register("fixedColumns().rowIndex()", function (a) {
                a = d(a); return a.parents(".DTFC_Cloned").length ? this.rows({ page: "current" }).indexes()[a.index()] :
                    this.row(a).index()
            }); s.Api.register("fixedColumns().cellIndex()", function (a) { a = d(a); if (a.parents(".DTFC_Cloned").length) { var b = a.parent().index(), b = this.rows({ page: "current" }).indexes()[b], a = a.parents(".DTFC_LeftWrapper").length ? a.index() : this.columns().flatten().length - this.context[0]._oFixedColumns.s.iRightColumns + a.index(); return { row: b, column: this.column.index("toData", a), columnVisible: a } } return this.cell(a).index() }); d(r).on("init.dt.fixedColumns", function (a, b) {
                if ("dt" === a.namespace) {
                    var c = b.oInit.fixedColumns,
                        e = s.defaults.fixedColumns; if (c || e) e = d.extend({}, c, e), !1 !== c && new m(b, e)
                }
            }); d.fn.dataTable.FixedColumns = m; return d.fn.DataTable.FixedColumns = m
        });
        /*!
 ColReorder 1.5.1
 ©2010-2018 SpryMedia Ltd - datatables.net/license
*/
        (function (e) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (o) { return e(o, window, document) }) : "object" === typeof exports ? module.exports = function (o, l) { o || (o = window); if (!l || !l.fn.dataTable) l = require("datatables.net")(o, l).$; return e(l, o, o.document) } : e(jQuery, window, document) })(function (e, o, l, r) {
            function q(a) { for (var b = [], c = 0, f = a.length; c < f; c++)b[a[c]] = c; return b } function p(a, b, c) { b = a.splice(b, 1)[0]; a.splice(c, 0, b) } function s(a, b, c) {
                for (var f = [], e = 0, d = a.childNodes.length; e <
                    d; e++)1 == a.childNodes[e].nodeType && f.push(a.childNodes[e]); b = f[b]; null !== c ? a.insertBefore(b, f[c]) : a.appendChild(b)
            } var t = e.fn.dataTable; e.fn.dataTableExt.oApi.fnColReorder = function (a, b, c, f, g) {
                var d, h, j, m, i, l = a.aoColumns.length, k; i = function (a, b, c) { if (a[b] && "function" !== typeof a[b]) { var d = a[b].split("."), f = d.shift(); isNaN(1 * f) || (a[b] = c[1 * f] + "." + d.join(".")) } }; if (b != c) if (0 > b || b >= l) this.oApi._fnLog(a, 1, "ColReorder 'from' index is out of bounds: " + b); else if (0 > c || c >= l) this.oApi._fnLog(a, 1, "ColReorder 'to' index is out of bounds: " +
                    c); else {
                    j = []; d = 0; for (h = l; d < h; d++)j[d] = d; p(j, b, c); var n = q(j); d = 0; for (h = a.aaSorting.length; d < h; d++)a.aaSorting[d][0] = n[a.aaSorting[d][0]]; if (null !== a.aaSortingFixed) { d = 0; for (h = a.aaSortingFixed.length; d < h; d++)a.aaSortingFixed[d][0] = n[a.aaSortingFixed[d][0]] } d = 0; for (h = l; d < h; d++) { k = a.aoColumns[d]; j = 0; for (m = k.aDataSort.length; j < m; j++)k.aDataSort[j] = n[k.aDataSort[j]]; k.idx = n[k.idx] } e.each(a.aLastSort, function (b, c) { a.aLastSort[b].src = n[c.src] }); d = 0; for (h = l; d < h; d++)k = a.aoColumns[d], "number" == typeof k.mData ?
                        k.mData = n[k.mData] : e.isPlainObject(k.mData) && (i(k.mData, "_", n), i(k.mData, "filter", n), i(k.mData, "sort", n), i(k.mData, "type", n)); if (a.aoColumns[b].bVisible) {
                            i = this.oApi._fnColumnIndexToVisible(a, b); m = null; for (d = c < b ? c : c + 1; null === m && d < l;)m = this.oApi._fnColumnIndexToVisible(a, d), d++; j = a.nTHead.getElementsByTagName("tr"); d = 0; for (h = j.length; d < h; d++)s(j[d], i, m); if (null !== a.nTFoot) { j = a.nTFoot.getElementsByTagName("tr"); d = 0; for (h = j.length; d < h; d++)s(j[d], i, m) } d = 0; for (h = a.aoData.length; d < h; d++)null !== a.aoData[d].nTr &&
                                s(a.aoData[d].nTr, i, m)
                        } p(a.aoColumns, b, c); d = 0; for (h = l; d < h; d++)a.oApi._fnColumnOptions(a, d, {}); p(a.aoPreSearchCols, b, c); d = 0; for (h = a.aoData.length; d < h; d++) { m = a.aoData[d]; if (k = m.anCells) { p(k, b, c); j = 0; for (i = k.length; j < i; j++)k[j] && k[j]._DT_CellIndex && (k[j]._DT_CellIndex.column = j) } "dom" !== m.src && e.isArray(m._aData) && p(m._aData, b, c) } d = 0; for (h = a.aoHeader.length; d < h; d++)p(a.aoHeader[d], b, c); if (null !== a.aoFooter) { d = 0; for (h = a.aoFooter.length; d < h; d++)p(a.aoFooter[d], b, c) } (g || g === r) && e.fn.dataTable.Api(a).rows().invalidate();
                    d = 0; for (h = l; d < h; d++)e(a.aoColumns[d].nTh).off(".DT"), this.oApi._fnSortAttachListener(a, a.aoColumns[d].nTh, d); e(a.oInstance).trigger("column-reorder.dt", [a, { from: b, to: c, mapping: n, drop: f, iFrom: b, iTo: c, aiInvertMapping: n }])
                }
            }; var i = function (a, b) {
                var c = (new e.fn.dataTable.Api(a)).settings()[0]; if (c._colReorder) return c._colReorder; !0 === b && (b = {}); var f = e.fn.dataTable.camelToHungarian; f && (f(i.defaults, i.defaults, !0), f(i.defaults, b || {})); this.s = {
                    dt: null, enable: null, init: e.extend(!0, {}, i.defaults, b), fixed: 0,
                    fixedRight: 0, reorderCallback: null, mouse: { startX: -1, startY: -1, offsetX: -1, offsetY: -1, target: -1, targetIndex: -1, fromIndex: -1 }, aoTargets: []
                }; this.dom = { drag: null, pointer: null }; this.s.enable = this.s.init.bEnable; this.s.dt = c; this.s.dt._colReorder = this; this._fnConstruct(); return this
            }; e.extend(i.prototype, {
                fnEnable: function (a) { if (!1 === a) return fnDisable(); this.s.enable = !0 }, fnDisable: function () { this.s.enable = !1 }, fnReset: function () { this._fnOrderColumns(this.fnOrder()); return this }, fnGetCurrentOrder: function () { return this.fnOrder() },
                fnOrder: function (a, b) { var c = [], f, g, d = this.s.dt.aoColumns; if (a === r) { f = 0; for (g = d.length; f < g; f++)c.push(d[f]._ColReorder_iOrigCol); return c } if (b) { d = this.fnOrder(); f = 0; for (g = a.length; f < g; f++)c.push(e.inArray(a[f], d)); a = c } this._fnOrderColumns(q(a)); return this }, fnTranspose: function (a, b) { b || (b = "toCurrent"); var c = this.fnOrder(), f = this.s.dt.aoColumns; return "toCurrent" === b ? !e.isArray(a) ? e.inArray(a, c) : e.map(a, function (a) { return e.inArray(a, c) }) : !e.isArray(a) ? f[a]._ColReorder_iOrigCol : e.map(a, function (a) { return f[a]._ColReorder_iOrigCol }) },
                _fnConstruct: function () {
                    var a = this, b = this.s.dt.aoColumns.length, c = this.s.dt.nTable, f; this.s.init.iFixedColumns && (this.s.fixed = this.s.init.iFixedColumns); this.s.init.iFixedColumnsLeft && (this.s.fixed = this.s.init.iFixedColumnsLeft); this.s.fixedRight = this.s.init.iFixedColumnsRight ? this.s.init.iFixedColumnsRight : 0; this.s.init.fnReorderCallback && (this.s.reorderCallback = this.s.init.fnReorderCallback); for (f = 0; f < b; f++)f > this.s.fixed - 1 && f < b - this.s.fixedRight && this._fnMouseListener(f, this.s.dt.aoColumns[f].nTh),
                        this.s.dt.aoColumns[f]._ColReorder_iOrigCol = f; this.s.dt.oApi._fnCallbackReg(this.s.dt, "aoStateSaveParams", function (b, c) { a._fnStateSave.call(a, c) }, "ColReorder_State"); var g = null; this.s.init.aiOrder && (g = this.s.init.aiOrder.slice()); this.s.dt.oLoadedState && ("undefined" != typeof this.s.dt.oLoadedState.ColReorder && this.s.dt.oLoadedState.ColReorder.length == this.s.dt.aoColumns.length) && (g = this.s.dt.oLoadedState.ColReorder); if (g) if (a.s.dt._bInitComplete) b = q(g), a._fnOrderColumns.call(a, b); else {
                            var d = !1; e(c).on("draw.dt.colReorder",
                                function () { if (!a.s.dt._bInitComplete && !d) { d = true; var b = q(g); a._fnOrderColumns.call(a, b) } })
                        } else this._fnSetColumnIndexes(); e(c).on("destroy.dt.colReorder", function () { e(c).off("destroy.dt.colReorder draw.dt.colReorder"); e.each(a.s.dt.aoColumns, function (a, b) { e(b.nTh).off(".ColReorder"); e(b.nTh).removeAttr("data-column-index") }); a.s.dt._colReorder = null; a.s = null })
                }, _fnOrderColumns: function (a) {
                    var b = !1; if (a.length != this.s.dt.aoColumns.length) this.s.dt.oInstance.oApi._fnLog(this.s.dt, 1, "ColReorder - array reorder does not match known number of columns. Skipping.");
                    else { for (var c = 0, f = a.length; c < f; c++) { var g = e.inArray(c, a); c != g && (p(a, g, c), this.s.dt.oInstance.fnColReorder(g, c, !0, !1), b = !0) } this._fnSetColumnIndexes(); b && (e.fn.dataTable.Api(this.s.dt).rows().invalidate(), ("" !== this.s.dt.oScroll.sX || "" !== this.s.dt.oScroll.sY) && this.s.dt.oInstance.fnAdjustColumnSizing(!1), this.s.dt.oInstance.oApi._fnSaveState(this.s.dt), null !== this.s.reorderCallback && this.s.reorderCallback.call(this)) }
                }, _fnStateSave: function (a) {
                    var b, c, f, g = this.s.dt.aoColumns; a.ColReorder = []; if (a.aaSorting) {
                        for (b =
                            0; b < a.aaSorting.length; b++)a.aaSorting[b][0] = g[a.aaSorting[b][0]]._ColReorder_iOrigCol; var d = e.extend(!0, [], a.aoSearchCols); b = 0; for (c = g.length; b < c; b++)f = g[b]._ColReorder_iOrigCol, a.aoSearchCols[f] = d[b], a.abVisCols[f] = g[b].bVisible, a.ColReorder.push(f)
                    } else if (a.order) { for (b = 0; b < a.order.length; b++)a.order[b][0] = g[a.order[b][0]]._ColReorder_iOrigCol; d = e.extend(!0, [], a.columns); b = 0; for (c = g.length; b < c; b++)f = g[b]._ColReorder_iOrigCol, a.columns[f] = d[b], a.ColReorder.push(f) }
                }, _fnMouseListener: function (a,
                    b) { var c = this; e(b).on("mousedown.ColReorder", function (a) { c.s.enable && c._fnMouseDown.call(c, a, b) }).on("touchstart.ColReorder", function (a) { c.s.enable && c._fnMouseDown.call(c, a, b) }) }, _fnMouseDown: function (a, b) {
                        var c = this, f = e(a.target).closest("th, td").offset(), g = parseInt(e(b).attr("data-column-index"), 10); g !== r && (this.s.mouse.startX = this._fnCursorPosition(a, "pageX"), this.s.mouse.startY = this._fnCursorPosition(a, "pageY"), this.s.mouse.offsetX = this._fnCursorPosition(a, "pageX") - f.left, this.s.mouse.offsetY =
                            this._fnCursorPosition(a, "pageY") - f.top, this.s.mouse.target = this.s.dt.aoColumns[g].nTh, this.s.mouse.targetIndex = g, this.s.mouse.fromIndex = g, this._fnRegions(), e(l).on("mousemove.ColReorder touchmove.ColReorder", function (a) { c._fnMouseMove.call(c, a) }).on("mouseup.ColReorder touchend.ColReorder", function (a) { c._fnMouseUp.call(c, a) }))
                    }, _fnMouseMove: function (a) {
                        if (null === this.dom.drag) {
                            if (5 > Math.pow(Math.pow(this._fnCursorPosition(a, "pageX") - this.s.mouse.startX, 2) + Math.pow(this._fnCursorPosition(a, "pageY") -
                                this.s.mouse.startY, 2), 0.5)) return; this._fnCreateDragNode()
                        } this.dom.drag.css({ left: this._fnCursorPosition(a, "pageX") - this.s.mouse.offsetX, top: this._fnCursorPosition(a, "pageY") - this.s.mouse.offsetY }); for (var b = !1, c = this.s.mouse.toIndex, f = 1, e = this.s.aoTargets.length; f < e; f++)if (this._fnCursorPosition(a, "pageX") < this.s.aoTargets[f - 1].x + (this.s.aoTargets[f].x - this.s.aoTargets[f - 1].x) / 2) { this.dom.pointer.css("left", this.s.aoTargets[f - 1].x); this.s.mouse.toIndex = this.s.aoTargets[f - 1].to; b = !0; break } b || (this.dom.pointer.css("left",
                            this.s.aoTargets[this.s.aoTargets.length - 1].x), this.s.mouse.toIndex = this.s.aoTargets[this.s.aoTargets.length - 1].to); this.s.init.bRealtime && c !== this.s.mouse.toIndex && (this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex), this.s.mouse.fromIndex = this.s.mouse.toIndex, ("" !== this.s.dt.oScroll.sX || "" !== this.s.dt.oScroll.sY) && this.s.dt.oInstance.fnAdjustColumnSizing(!1), this._fnRegions())
                    }, _fnMouseUp: function () {
                        e(l).off(".ColReorder"); null !== this.dom.drag && (this.dom.drag.remove(),
                            this.dom.pointer.remove(), this.dom.drag = null, this.dom.pointer = null, this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex, !0), this._fnSetColumnIndexes(), ("" !== this.s.dt.oScroll.sX || "" !== this.s.dt.oScroll.sY) && this.s.dt.oInstance.fnAdjustColumnSizing(!1), this.s.dt.oInstance.oApi._fnSaveState(this.s.dt), null !== this.s.reorderCallback && this.s.reorderCallback.call(this))
                    }, _fnRegions: function () {
                        var a = this.s.dt.aoColumns; this.s.aoTargets.splice(0, this.s.aoTargets.length); this.s.aoTargets.push({
                            x: e(this.s.dt.nTable).offset().left,
                            to: 0
                        }); for (var b = 0, c = this.s.aoTargets[0].x, f = 0, g = a.length; f < g; f++)f != this.s.mouse.fromIndex && b++ , a[f].bVisible && "none" !== a[f].nTh.style.display && (c += e(a[f].nTh).outerWidth(), this.s.aoTargets.push({ x: c, to: b })); 0 !== this.s.fixedRight && this.s.aoTargets.splice(this.s.aoTargets.length - this.s.fixedRight); 0 !== this.s.fixed && this.s.aoTargets.splice(0, this.s.fixed)
                    }, _fnCreateDragNode: function () {
                        var a = "" !== this.s.dt.oScroll.sX || "" !== this.s.dt.oScroll.sY, b = this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh, c = b.parentNode,
                            f = c.parentNode, g = f.parentNode, d = e(b).clone(); this.dom.drag = e(g.cloneNode(!1)).addClass("DTCR_clonedTable").append(e(f.cloneNode(!1)).append(e(c.cloneNode(!1)).append(d[0]))).css({ position: "absolute", top: 0, left: 0, width: e(b).outerWidth(), height: e(b).outerHeight() }).appendTo("body"); this.dom.pointer = e("<div></div>").addClass("DTCR_pointer").css({
                                position: "absolute", top: a ? e("div.dataTables_scroll", this.s.dt.nTableWrapper).offset().top : e(this.s.dt.nTable).offset().top, height: a ? e("div.dataTables_scroll",
                                    this.s.dt.nTableWrapper).height() : e(this.s.dt.nTable).height()
                            }).appendTo("body")
                    }, _fnSetColumnIndexes: function () { e.each(this.s.dt.aoColumns, function (a, b) { e(b.nTh).attr("data-column-index", a) }) }, _fnCursorPosition: function (a, b) { return -1 !== a.type.indexOf("touch") ? a.originalEvent.touches[0][b] : a[b] }
            }); i.defaults = { aiOrder: null, bEnable: !0, bRealtime: !0, iFixedColumnsLeft: 0, iFixedColumnsRight: 0, fnReorderCallback: null }; i.version = "1.5.1"; e.fn.dataTable.ColReorder = i; e.fn.DataTable.ColReorder = i; "function" == typeof e.fn.dataTable &&
                "function" == typeof e.fn.dataTableExt.fnVersionCheck && e.fn.dataTableExt.fnVersionCheck("1.10.8") ? e.fn.dataTableExt.aoFeatures.push({ fnInit: function (a) { var b = a.oInstance; a._colReorder ? b.oApi._fnLog(a, 1, "ColReorder attempted to initialise twice. Ignoring second") : (b = a.oInit, new i(a, b.colReorder || b.oColReorder || {})); return null }, cFeature: "R", sFeature: "ColReorder" }) : alert("Warning: ColReorder requires DataTables 1.10.8 or greater - www.datatables.net/download"); e(l).on("preInit.dt.colReorder", function (a,
                    b) { if ("dt" === a.namespace) { var c = b.oInit.colReorder, f = t.defaults.colReorder; if (c || f) f = e.extend({}, c, f), !1 !== c && new i(b, f) } }); e.fn.dataTable.Api.register("colReorder.reset()", function () { return this.iterator("table", function (a) { a._colReorder.fnReset() }) }); e.fn.dataTable.Api.register("colReorder.order()", function (a, b) { return a ? this.iterator("table", function (c) { c._colReorder.fnOrder(a, b) }) : this.context.length ? this.context[0]._colReorder.fnOrder() : null }); e.fn.dataTable.Api.register("colReorder.transpose()",
                        function (a, b) { return this.context.length && this.context[0]._colReorder ? this.context[0]._colReorder.fnTranspose(a, b) : a }); e.fn.dataTable.Api.register("colReorder.move()", function (a, b, c, e) { this.context.length && this.context[0]._colReorder.s.dt.oInstance.fnColReorder(a, b, c, e); return this }); e.fn.dataTable.Api.register("colReorder.enable()", function (a) { return this.iterator("table", function (b) { b._colReorder && b._colReorder.fnEnable(a) }) }); e.fn.dataTable.Api.register("colReorder.disable()", function () {
                            return this.iterator("table",
                                function (a) { a._colReorder && a._colReorder.fnDisable() })
                        }); return i
        });
		/*!
 RowReorder 1.2.4
 2015-2018 SpryMedia Ltd - datatables.net/license
 */
        (function (d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (f) { return d(f, window, document) }) : "object" === typeof exports ? module.exports = function (f, g) { f || (f = window); if (!g || !g.fn.dataTable) g = require("datatables.net")(f, g).$; return d(g, f, f.document) } : d(jQuery, window, document) })(function (d, f, g, m) {
            var h = d.fn.dataTable, k = function (c, b) {
                if (!h.versionCheck || !h.versionCheck("1.10.8")) throw "DataTables RowReorder requires DataTables 1.10.8 or newer"; this.c = d.extend(!0, {}, h.defaults.rowReorder,
                    k.defaults, b); this.s = { bodyTop: null, dt: new h.Api(c), getDataFn: h.ext.oApi._fnGetObjectDataFn(this.c.dataSrc), middles: null, scroll: {}, scrollInterval: null, setDataFn: h.ext.oApi._fnSetObjectDataFn(this.c.dataSrc), start: { top: 0, left: 0, offsetTop: 0, offsetLeft: 0, nodes: [] }, windowHeight: 0, documentOuterHeight: 0, domCloneOuterHeight: 0 }; this.dom = { clone: null, dtScroll: d("div.dataTables_scrollBody", this.s.dt.table().container()) }; var a = this.s.dt.settings()[0], e = a.rowreorder; if (e) return e; a.rowreorder = this; this._constructor()
            };
            d.extend(k.prototype, {
                _constructor: function () {
                    var c = this, b = this.s.dt, a = d(b.table().node()); "static" === a.css("position") && a.css("position", "relative"); d(b.table().container()).on("mousedown.rowReorder touchstart.rowReorder", this.c.selector, function (a) { if (c.c.enable) { if (d(a.target).is(c.c.excludedChildren)) return !0; var i = d(this).closest("tr"), j = b.row(i); if (j.any()) return c._emitEvent("pre-row-reorder", { node: j.node(), index: j.index() }), c._mouseDown(a, i), !1 } }); b.on("destroy.rowReorder", function () {
                        d(b.table().container()).off(".rowReorder");
                        b.off(".rowReorder")
                    })
                }, _cachePositions: function () { var c = this.s.dt, b = d(c.table().node()).find("thead").outerHeight(), a = d.unique(c.rows({ page: "current" }).nodes().toArray()), e = d.map(a, function (a) { return d(a).position().top - b }), a = d.map(e, function (a, b) { return e.length < b - 1 ? (a + e[b + 1]) / 2 : (a + a + d(c.row(":last-child").node()).outerHeight()) / 2 }); this.s.middles = a; this.s.bodyTop = d(c.table().body()).offset().top; this.s.windowHeight = d(f).height(); this.s.documentOuterHeight = d(g).outerHeight() }, _clone: function (c) {
                    var b =
                        d(this.s.dt.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(c.clone(!1)), a = c.outerWidth(), e = c.outerHeight(), i = c.children().map(function () { return d(this).width() }); b.width(a).height(e).find("tr").children().each(function (a) { this.style.width = i[a] + "px" }); b.appendTo("body"); this.dom.clone = b; this.s.domCloneOuterHeight = b.outerHeight()
                }, _clonePosition: function (c) {
                    var b = this.s.start, a = this._eventToPage(c, "Y") - b.top, c = this._eventToPage(c, "X") - b.left, e = this.c.snapX, a =
                        a + b.offsetTop, b = !0 === e ? b.offsetLeft : "number" === typeof e ? b.offsetLeft + e : c + b.offsetLeft; 0 > a ? a = 0 : a + this.s.domCloneOuterHeight > this.s.documentOuterHeight && (a = this.s.documentOuterHeight - this.s.domCloneOuterHeight); this.dom.clone.css({ top: a, left: b })
                }, _emitEvent: function (c, b) { this.s.dt.iterator("table", function (a) { d(a.nTable).triggerHandler(c + ".dt", b) }) }, _eventToPage: function (c, b) { return -1 !== c.type.indexOf("touch") ? c.originalEvent.touches[0]["page" + b] : c["page" + b] }, _mouseDown: function (c, b) {
                    var a = this, e = this.s.dt,
                        i = this.s.start, j = b.offset(); i.top = this._eventToPage(c, "Y"); i.left = this._eventToPage(c, "X"); i.offsetTop = j.top; i.offsetLeft = j.left; i.nodes = d.unique(e.rows({ page: "current" }).nodes().toArray()); this._cachePositions(); this._clone(b); this._clonePosition(c); this.dom.target = b; b.addClass("dt-rowReorder-moving"); d(g).on("mouseup.rowReorder touchend.rowReorder", function (b) { a._mouseUp(b) }).on("mousemove.rowReorder touchmove.rowReorder", function (b) { a._mouseMove(b) }); d(f).width() === d(g).width() && d(g.body).addClass("dt-rowReorder-noOverflow");
                    e = this.dom.dtScroll; this.s.scroll = { windowHeight: d(f).height(), windowWidth: d(f).width(), dtTop: e.length ? e.offset().top : null, dtLeft: e.length ? e.offset().left : null, dtHeight: e.length ? e.outerHeight() : null, dtWidth: e.length ? e.outerWidth() : null }
                }, _mouseMove: function (c) {
                    this._clonePosition(c); for (var b = this._eventToPage(c, "Y") - this.s.bodyTop, a = this.s.middles, e = null, i = this.s.dt, j = i.table().body(), g = 0, f = a.length; g < f; g++)if (b < a[g]) { e = g; break } null === e && (e = a.length); if (null === this.s.lastInsert || this.s.lastInsert !==
                        e) 0 === e ? this.dom.target.prependTo(j) : (b = d.unique(i.rows({ page: "current" }).nodes().toArray()), e > this.s.lastInsert ? this.dom.target.insertAfter(b[e - 1]) : this.dom.target.insertBefore(b[e])), this._cachePositions(), this.s.lastInsert = e; this._shiftScroll(c)
                }, _mouseUp: function () {
                    var c = this, b = this.s.dt, a, e, i = this.c.dataSrc; this.dom.clone.remove(); this.dom.clone = null; this.dom.target.removeClass("dt-rowReorder-moving"); d(g).off(".rowReorder"); d(g.body).removeClass("dt-rowReorder-noOverflow"); clearInterval(this.s.scrollInterval);
                    this.s.scrollInterval = null; var j = this.s.start.nodes, f = d.unique(b.rows({ page: "current" }).nodes().toArray()), k = {}, h = [], l = [], n = this.s.getDataFn, m = this.s.setDataFn; a = 0; for (e = j.length; a < e; a++)if (j[a] !== f[a]) { var o = b.row(f[a]).id(), s = b.row(f[a]).data(), p = b.row(j[a]).data(); o && (k[o] = n(p)); h.push({ node: f[a], oldData: n(s), newData: n(p), newPosition: a, oldPosition: d.inArray(f[a], j) }); l.push(f[a]) } var q = [h, { dataSrc: i, nodes: l, values: k, triggerRow: b.row(this.dom.target) }]; this._emitEvent("row-reorder", q); var r = function () {
                        if (c.c.update) {
                            a =
                                0; for (e = h.length; a < e; a++) { var d = b.row(h[a].node).data(); m(d, h[a].newData); b.columns().every(function () { this.dataSrc() === i && b.cell(h[a].node, this.index()).invalidate("data") }) } c._emitEvent("row-reordered", q); b.draw(!1)
                        }
                    }; this.c.editor ? (this.c.enable = !1, this.c.editor.edit(l, !1, d.extend({ submit: "changed" }, this.c.formOptions)).multiSet(i, k).one("preSubmitCancelled.rowReorder", function () { c.c.enable = !0; c.c.editor.off(".rowReorder"); b.draw(!1) }).one("submitUnsuccessful.rowReorder", function () { b.draw(!1) }).one("submitSuccess.rowReorder",
                        function () { r() }).one("submitComplete", function () { c.c.enable = !0; c.c.editor.off(".rowReorder") }).submit()) : r()
                }, _shiftScroll: function (c) {
                    var b = this, a = this.s.scroll, e = !1, d = c.pageY - g.body.scrollTop, f, h; 65 > d ? f = -5 : d > a.windowHeight - 65 && (f = 5); null !== a.dtTop && c.pageY < a.dtTop + 65 ? h = -5 : null !== a.dtTop && c.pageY > a.dtTop + a.dtHeight - 65 && (h = 5); f || h ? (a.windowVert = f, a.dtVert = h, e = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), this.s.scrollInterval = null); !this.s.scrollInterval && e && (this.s.scrollInterval =
                        setInterval(function () { if (a.windowVert) g.body.scrollTop = g.body.scrollTop + a.windowVert; if (a.dtVert) { var c = b.dom.dtScroll[0]; if (a.dtVert) c.scrollTop = c.scrollTop + a.dtVert } }, 20))
                }
            }); k.defaults = { dataSrc: 0, editor: null, enable: !0, formOptions: {}, selector: "td:first-child", snapX: !1, update: !0, excludedChildren: "a" }; var l = d.fn.dataTable.Api; l.register("rowReorder()", function () { return this }); l.register("rowReorder.enable()", function (c) {
                c === m && (c = !0); return this.iterator("table", function (b) {
                    b.rowreorder && (b.rowreorder.c.enable =
                        c)
                })
            }); l.register("rowReorder.disable()", function () { return this.iterator("table", function (c) { c.rowreorder && (c.rowreorder.c.enable = !1) }) }); k.version = "1.2.4"; d.fn.dataTable.RowReorder = k; d.fn.DataTable.RowReorder = k; d(g).on("init.dt.dtr", function (c, b) { if ("dt" === c.namespace) { var a = b.oInit.rowReorder, e = h.defaults.rowReorder; if (a || e) e = d.extend({}, a, e), !1 !== a && new k(b, e) } }); return k
        });


        jQuery.fn.dataTable.Api.register('sum()', function () {
            return this.flatten().reduce(function (a, b) {
                if (typeof a === 'string') {
                    a = a.replace(/[^\d.-]/g, '') * 1;
                }
                if (typeof b === 'string') {
                    b = b.replace(/[^\d.-]/g, '') * 1;
                }

                return a + b;
            }, 0);
        });

        var settings = $.extend({
            // These are the defaults.
            data: undefined,
            "search": false,
            "scrollX": true,
            "scrollY": "200px",
            "scrollCollapse": true,
            "paging": false,
            "rowReorder": {
                update: true
            },
            "addColumn": false

        }, options);


        if (settings.data) {
            table = this.DataTable({
                "sDom": 'tp',
                "ajax": settings.data,
                "rowReorder": {
                    selector: '.la-arrows-v',
                    update: true
                },

                "scrollX": settings.scrollX,
                "scrollY": settings.scrollY,
                "scrollCollapse": settings.scrollCollapse,
                "paging": settings.paging,
                colReorder: {
                    fixedColumnsLeft: 0

                },

            });
        }
        else {
            table = this.DataTable({

                "columnDefs": [
                    {
                        "targets": [0],
                        "visible": false,
                        "searchable": false,
                        "width": "0px",
                    },
                    {
                        "targets": [1],
                        "orderable": false,
                        "width": "50px",
                        'checkboxes': {
                            'selectRow': true
                        }

                    },
                    {
                        "targets": [2],
                        "orderable": false,
                        "width": "100px",
                    },
                    {
                        "targets": [3],
                        "orderable": false,
                        "width": "400px",
                    },
                    {
                        "targets": [4],
                        "orderable": false,
                        "width": "20px",
                    },
                    {
                        "targets": [5],
                        "orderable": false,
                        "width": "30px",
                    },
                    {
                        "targets": [6],
                        "orderable": false,
                        "width": "1px",
                    },
                    {
                        "targets": [7],
                        "visible": false,
                        "searchable": false,
                        "width": "0px",
                        "className": "text-center",

                    },
                    {
                        "targets": [8],
                        "orderable": false,
                        "width": "30px",
                        "className": "text-center",
                    },
                    {
                        "targets": [9],
                        "orderable": false,
                        "width": "50px",
                        "className": "text-right",
                    },




                ],
                drawCallback: function () {
                    $('[data-toggle="popover"]').popover({
                        "html": true,
                        trigger: 'hover',
                        placement: 'left',

                    })
                    $('[data-toggle="tooltip"]').popover({


                        placement: 'left',

                    })
                },
                "footerCallback": function (row, data, start, end, display) {
                    var api = this.api(), data;

                    // Remove the formatting to get integer data for summation
                    var intVal = function (i) {
                        return typeof i === 'string' ?
                            i.replace(/[\$,]/g, '') * 1 :
                            typeof i === 'number' ?
                                i : 0;
                    };

                    // Total over all pages
                    total = api
                        .column(7)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0);


                    // Update footer

                    $(".tt").html(total);


                },
                "targets": 'dt_nowrap_col', "className": "dt_nowrap_col",
                "sDom": 'tp',
                "rowReorder": {
                    selector: '.la-arrows-v',
                    update: true
                },

                colReorder: {
                    fixedColumnsLeft: 0


                },

                "scrollX": settings.scrollX,
                "scrollY": settings.scrollY,
                "scrollCollapse": settings.scrollCollapse,
                "paging": settings.paging
            });

            $('#example').on('click', '.la-times', function () {
                $(".save").show();
                var row = $(this).closest("tr");
                var index = $(this).closest("tbody").find("tr").index(row);
                table.row(row).remove().draw();

                table.rows().every(function (rowIdx, tableLoop, rowLoop) {
                    var data = this.data();

                    table.cell(rowIdx, 0).data(rowIdx).draw();

                    // ... do something with data(), or this.node(), etc
                });

                // //silme fonksiyonu
                // firebase.database().ref('body').orderByChild("0").equalTo(parseInt(index)).once("value").then(function(snapshot) {

                //   // get the key of the respective image
                // var deleteObjectDatabaseNumber=Object.keys(snapshot.val())[0];

                // //firebase.database().ref('body').child(deleteObjectDatabaseNumber).remove();
                // firebase.database().ref('body').on('value', snap => {
                // 	console.log(snap.val())
                // 	for(i=(index+2);i<=snap.val().length;i++){
                // 		console.log(i);


                // 		//firebase.database().ref('body').child(i-1).child(0).set(i-2)

                // 	}
                // });
                // });

            });
            $(settings.search).on('keyup change', function () {
                return table.search(this.value).draw();
            });
            $(settings.addColumn).on('click', function () {
                $(".save").show();
                var data = table
                    .rows()
                    .data();
                var lastindex;

                firebase.database().ref('body').orderByChild("0").limitToLast(1).on('value', snap => {
                    for (var index in snap.val()) {
                        if (snap.val()[index] != undefined) {
                            lastindex = snap.val()[index][0];

                        }
                    }


                });
                console.log("tabloda toplam " + data.length + " kayıt var ve " + lastindex);
                if (data.length <= 0) {
                    table.row.add({
                        "0": 0,
                        "1": "<div class='custom-control custom-checkbox form-check'>"+
								"<input type='checkbox' class='custom-control-input' id='customCheck0' >"+
								"<label class='custom-control-label' for='customCheck0'><i class='la la-arrows-v ' style='margin-top: 6px;'></i></label>"+
							"</div>",
                        "2": "#14124",
                        "3": "ürün Hizmet",
                        "4": "<button class='btn btn-secondary btn-outline btn-exp' >A</button>",
                        "5": "4,235.0",
                        "6": "18%",
                        "7": "dolar",
                        "8": "1",
                        "9": "4,400.0 ",

                    }).draw();
                } else {
                    table.row.add({
                        "0": data.length ,
                        "1": "<div class='custom-control custom-checkbox form-check'>"+
								"<input type='checkbox' class='custom-control-input' id='customCheck"+data.length +"' >"+
								"<label class='custom-control-label' for='customCheck"+data.length +"'><i class='la la-arrows-v ' style='margin-top: 6px;'></i></label>"+
							"</div>",
                        "2": "#14124",
                        "3": "ürün Hizmet",
                        "4": "<button class='btn btn-secondary btn-outline btn-exp'>A</button>",
                        "5": "4,235.0",
                        "6": "18%",
                        "7": "dolar",
                        "8": "1",
                        "9": "4,500.0",

                    }).draw();
                }

                //firebase.database().ref('body').child(data.length).set(table.row(data.length).data());


            });


        }

        return table;

    };

}(jQuery));