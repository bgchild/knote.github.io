(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{885:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("Mysql创建函数参考")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CREATE DEFINER=`root`@`%` FUNCTION `GetChildCatList`(rootId CHAR(32)) RETURNS varchar(1000) CHARSET utf8\nBEGIN\n    DECLARE sTemp VARCHAR(1000);\n    DECLARE sTempChd VARCHAR(1000);\n    SET sTemp = '$';\n    SET sTempChd =cast(rootId as CHAR);\n    WHILE sTempChd is not null DO\n        SET sTemp = concat(sTemp,',',sTempChd);\n        SELECT group_concat(mccode) INTO sTempChd FROM t_materialclass where FIND_IN_SET(mcpcode,sTempChd)>0;\n    END WHILE;\nRETURN sTemp; \nEND\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);