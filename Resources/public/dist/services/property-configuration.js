define(["jquery","underscore"],function(a,b){"use strict";var c=function(a,b,c){return c[b.name]?(c[b.name].properties[b.priority]?c[b.name].properties[b.priority].push(a):c[b.name].properties[b.priority]=[a],c[b.name].highestPriority<b.priority&&(c[b.name].highestProperty=a,c[b.name].highestPriority=b.priority),void(c[b.name].lowestPriority>b.priority&&(c[b.name].lowestProperty=a,c[b.name].lowestPriority=b.priority))):(c[b.name]={properties:{},highestProperty:a,highestPriority:b.priority,lowestProperty:a,lowestPriority:b.priority},void(c[b.name].properties[b.priority]=[a]))};return{generate:function(d){var e=d.find("*[data-property]");if(0===e.length)return{};var f={tags:{}};return e.each(function(){var d=a(this),e=d.data("property");return e.$el=d,d.data("property",null),d.removeAttr("data-property"),f[e.name]=e,b.each(e.tags,function(a){c(e,a,f.tags)}),f}),f}}});