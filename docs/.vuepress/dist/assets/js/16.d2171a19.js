(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{361:function(s,t,a){"use strict";a.r(t);var n=a(43),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sp變數帶null的where問題"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sp變數帶null的where問題"}},[s._v("#")]),s._v(" SP變數帶null的where問題")]),s._v(" "),a("p",[s._v("之前最怕遇到的就是選擇的參數有時候會帶null")]),s._v(" "),a("p",[s._v("那時候遇到這種的都改用字串寫法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Student_Get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--班級")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" NOCOUNT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Declare")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@strexec")]),s._v(" nvarchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@strexec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Select * From TB_Student Where 1=1'")]),s._v("\t\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("If")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("Is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("Not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("Null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Begin")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@strexec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@strexec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'And Class = '")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("convert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("End")]),s._v("\t\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@strexec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("br"),s._v(" "),a("blockquote",[a("p",[s._v("真的很難維護，如果變數一多，就會變的很恐怖")])]),s._v(" "),a("br"),s._v(" "),a("p",[s._v("後來發現爬文")]),s._v(" "),a("br"),s._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/4224991/checking-an-input-param-if-not-null-and-using-it-in-where-in-sql-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("參考網站"),a("OutboundLink")],1)]),s._v(" "),a("br"),s._v(" "),a("p",[s._v("發現還能這樣寫~")]),s._v(" "),a("br"),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Student_Get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--班級")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" NOCOUNT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" TB_Student\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@Class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Class"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("就再也離不開這種寫法拉😅~~~")])])}),[],!1,null,null,null);t.default=e.exports}}]);