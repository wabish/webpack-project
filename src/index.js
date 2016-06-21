
var template = require('artTemplate');
var cat = require('cat');

// 使用了 jquery.nail 插件
$('#leftNav').nail({
    onTop: function(elem) {
        elem.find('li:nth-child(3)').html('我在顶部');
        elem.css('background', '#869EB5');
    },
    onFixed: function(elem) {
        elem.find('li:nth-child(3)').html('我被固定住了');
        elem.css('background', 'rgb(34, 89, 58)');
    },
    onBottom: function(elem) {
        elem.find('li:nth-child(3)').html('我到底部了');
        elem.css('background', '#000');
    }
});

// 使用了 artTemplate 插件
var data = {
    list: ['海贼王', '火影忍者', '死神', '银魂']
};
var html = template('container', data);
$('.right-box').html(html);

// 引用自定义的插件
cat.run('Tom');
