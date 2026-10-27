// Frame: let layout-card mediaqueries also switch height/padding/margin and --custom properties.
// layout-card applies only grid-* keys from a matching mediaquery; height/padding/margin stay at their desktop values.
// Apply them too, so e.g. a 100vh kiosk layout can become height:auto on a phone.
{
const fix = (P) => {
if (!P || P.__frameMQ || typeof P._setGridStyles !== 'function') return;
P.__frameMQ = true;
const orig = P._setGridStyles;
P._setGridStyles = function () {
orig.call(this);
const lay = (this._config && this._config.layout) || {};
const mq = (this._layoutMQs || []).find((m) => m.matches);
const over = (mq && lay.mediaquery && lay.mediaquery[mq.media]) || {};
['margin', 'padding', 'height'].forEach((k) => {
if (over[k] != null) this.style.setProperty('--layout-' + k, String(over[k]));
else this.style.removeProperty('--layout-' + k);
});
if (over.height != null) this.style.setProperty('--layout-overflow', over.height === 'auto' ? 'visible' : 'auto');
else this.style.removeProperty('--layout-overflow');
// custom properties (e.g. --f-span used in view_layout grid-column) from base layout and the matching mediaquery
const vars = Object.assign({}, ...Object.keys(lay).filter((k) => k.startsWith('--')).map((k) => ({ [k]: lay[k] })), over);
(this.__frameVars || []).forEach((k) => { if (!(k in vars)) this.style.removeProperty(k); });
this.__frameVars = Object.keys(vars).filter((k) => k.startsWith('--'));
this.__frameVars.forEach((k) => this.style.setProperty(k, String(vars[k])));
};
};
// layout-card defines one class per layout type; patch them all
['grid-layout', 'masonry-layout', 'horizontal-layout', 'vertical-layout'].forEach((n) => customElements.whenDefined(n).then(() => {
const C = customElements.get(n);
fix(C && C.prototype);
const all = (root) => { root.querySelectorAll('*').forEach((el) => { if (el.tagName === n.toUpperCase() && el._setGridStyles && el.shadowRoot) el._setGridStyles(); if (el.shadowRoot) all(el.shadowRoot); }); };
all(document);
}));
}
