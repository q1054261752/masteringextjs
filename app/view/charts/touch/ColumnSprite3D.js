/**
 * From http://dev.sencha.com/ext/5.0.1/examples/kitchensink/?charts=true#column-3d
 */
Ext.define('Packt.view.charts.touch.ColumnSprite3D', {
    alias: 'sprite.columnSeries3d',
    extend: 'Ext.chart.series.sprite.Bar',
    inheritableStatics: {
        def: {
            defaults: {
                transformFillStroke: true
            }
        }
    },
    lastClip: null,

    drawBar: function (ctx, surface, clip, left, top, right, bottom, itemId) {
        var me = this,
            attr = me.attr,
            center = (left + right) / 2,
            barWidth = (right - left) * 0.33333,
            depthWidth = barWidth * 0.5,
            color = Ext.draw.Color.create(attr.fillStyle),
            darkerColor = color.createDarker(0.05),
            lighterColor = color.createLighter(0.25);

        // top
        ctx.beginPath();
        ctx.moveTo(center - barWidth, top);
        ctx.lineTo(center - barWidth + depthWidth, top + depthWidth);
        ctx.lineTo(center + barWidth + depthWidth, top + depthWidth);
        ctx.lineTo(center + barWidth, top);
        ctx.lineTo(center - barWidth, top);
        ctx.fillStyle = lighterColor.toString();
        ctx.fillStroke(attr);

        // right side
        ctx.beginPath();
        ctx.moveTo(center + barWidth, top);
        ctx.lineTo(center + barWidth + depthWidth, top + depthWidth);
        ctx.lineTo(center + barWidth + depthWidth, bottom + depthWidth);
        ctx.lineTo(center + barWidth, bottom);
        ctx.lineTo(center + barWidth, top);
        ctx.fillStyle = darkerColor.toString();
        ctx.fillStroke(attr);

        // front
        ctx.beginPath();
        ctx.moveTo(center - barWidth, bottom);
        ctx.lineTo(center - barWidth, top);
        ctx.lineTo(center + barWidth, top);
        ctx.lineTo(center + barWidth, bottom);
        ctx.lineTo(center - barWidth, bottom);
        ctx.fillStyle = darkerColor.toString();
        ctx.fillStyle = color.toString();
        ctx.fillStroke(attr);
    }
});