﻿var pageLang;

(function () {
    pageLang = function () {
        var langsMap = {};
        var langs = ["en-US", "zh-CN"];
        var divs = document.getElementsByTagName("div");
        var langDivs = [];

        for (var i = 0; i < divs.length; i++) {
            var div = divs[i];
            var lang = div.getAttribute("data-lang");
            if (lang) {
                langDivs.push(div);
                //if (!(lang in langsMap)) {
                //    langs.push(lang);
                //    langsMap[lang] = true;
                //}
            }
        }

        var langName =
            navigator.language ||
            navigator.userLanguage ||
            navigator.browserLanguage ||
            navigator.systemLanguage ||
            langs[0];

        var lang = getLang(langName) || getLang(langName.substr(0, 2)) || langs[0];

        for (var i = 0; i < langDivs.length; i++) {
            var div = langDivs[i];
            var dataLang = div.getAttribute("data-lang");
            if (!dataLang) continue;
            if (dataLang == lang) {
                div.style.display = "block";
                var title = div.getAttribute("data-title");
                if (title)
                    document.title = title;
            }
            else {
                div.parentNode.removeChild(div);
            }
        }

        return lang;

        function getLang(name) {
            for (var i = 0; i < langs.length; i++) {
                if (langs[i].indexOf(name) == 0)
                    return langs[i];
            }
        }
    }();

    if (typeof onlangready == "function")
        onlangready();
})();