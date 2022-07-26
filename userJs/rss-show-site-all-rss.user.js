// ==UserScript==
// @name         RSS+ : Show Site All RSS
// @name:zh      RSS+ : 显示当前网站所有的 RSS
// @name:zh-CN   RSS+ : 显示当前网站所有的 RSS
// @name:zh-TW   RSS+ : 顯示當前網站所有的 RSS
// @name:ja      RSS+ : 現在のサイトのRSSを表示
// @name:ko      RSS+ : 현재 사이트의 RSS 표시
// @description         Show All RSS Of The Site (If Any)
// @description:zh      显示当前网站的所有 RSS（如果有的话）
// @description:zh-CN   显示当前网站的所有 RSS（如果有的话）
// @description:zh-TW   顯示當前網站的所有 RSS（如果有的话）
// @description:ja      サイトのすべてのRSSを表示します (あれば)
// @description:ko      웹 사이트의 모든 RSS 를 표시합니다 (있는 경우)
// @license      GPL3.0
// @version      1.0.4.1
// @downloadURL  https://raw.iqiq.io/anaer/Sub/main/userJs/rss-show-site-all-rss.user.js
// @icon         data:image/png;base64,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
// @author       Wizos
// @namespace    https://blog.wizos.me
// @supportURL   wizos@qq.com
// @match        http://*/*
// @match        https://*/*
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/js-base64@3.6.0/base64.min.js
// @require      https://cdn.jsdelivr.net/npm/greensock@1.20.2/dist/TweenMax.min.js
// @require      https://cdn.jsdelivr.net/npm/qrcode@1.5.0/build/qrcode.min.js
// @resource     RulerJs  https://cdn.jsdelivr.net/gh/wizos/rssplus@2.0.0/Ruler.js?_=16249895782
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_setClipboard
// @grant        GM_notification
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        unsafeWindow
// @connect      rssfinder.vercel.app
// @connect      rssplus.vercel.app
// @noframes
// @run-at     document-idle
// @downloadURL none
// ==/UserScript==

// 2022.04.18_1.0.4  尝试修复导致网页加载卡顿的问题。
// 2022.04.05_1.0.2  1.受unsafe-eval影响，无法本地执行规则时使用远程规则。2.调整 UI，每次获取到新 RSS 都同步到 UI 中。3.精简设置项。4.监听 URL 变化，同步获取新的 RSS。
// 2022.04.02_1.0.0  1.将远程规则放到 GitHub。2.修复订阅 RSS 网址的转义问题。
// 2021.12.17_0.9.2  1.支持设置 FreshRSS 一键订阅。2.支持设置带端口的网址。
// 2021.02.24_0.9.1  1.支持开启/关闭二维码。
// 2021.02.19_0.9.0  1.支持鼠标悬停在订阅链接上时展示其二维码，方便扫码订阅。
// 2021.02.05_0.8.1  1.url参数用base64编码，防止服务端获取url参数时，漏掉query部分的数据。
// 2021.02.03_0.8.0  1.支持小屏幕展示。2.支持设置 TinyTinyRSS 服务的域名。
// 2021.01.05_0.7.3  1.改用 GM_xmlhttpRequest。2.改用 rssfinder.vercel.app 接口。
// 2020.12.16_0.7.2  1.修复 bug。
// 2020.12.06_0.7.1  1.调整搞定。2.优化代码。
// 2020.11.16_0.7.0  1.支持设置 InoReader 服务的域名。2.在打印页面时隐藏。3.修复影响页面样式的问题。
// 2020.09.11_0.6.4  1.支持 RSSHub 服务器为 IP 地址。2.被识别的 RSS 地址不再转换为小写（因为 news.google.com 的小写地址打不开）
// 2020.04.28_0.6.3  修复改了脚本name导致无法更新的bug。
// 2020.04.27_0.6.2  修复rsshub domain默认为undefined的bug。
// 2020.04.26_0.6.1  支持设置 RSSHub 服务的域名。
// 2020.03.01_0.6    1.可设置点击“订阅”时打开的rss服务商(feedly,inoreadly)。2.修复火狐浏览器下无法展示的问题。
// 2019.09.29_0.5    增加hexo站点的rss嗅探规则。
// 2019.04.26_0.4.2  1.修复默认圆圈状态下宽度太宽，导致遮挡下层页面事件触发的问题。2.将icon由字体改为svg形式，修复部分站点无法显示icon的问题。3.优化RSS没有title时的默认名称。
// 2018.11.10_0.4.1  关闭发现RSS后的h5通知
// 2018.10.29_0.4    1.在无法链接服务器时也能展示本地的RSS；2.针对开启 Content-Security-Policy 的网站直接展示本地的RSS；3.发现RSS后，进行h5通知
// 2018.10.23_0.4    1.增加识别为 wordpress 站点时，尝试使用/feed后缀；2.增加多语言支持
// 2018.10.16_0.3    1.改为iframe方式显示，兼容性更好；2.改为post方式传递页面地址；
// 2018.10.14_0.2    第一版 RSS+ 成型；
// 2018.09.16_0.1    在 RSS+Atom Feed Subscribe Button Generator 脚本基础上增加连接后端获取feed的方式；


// 过滤掉明确不包含 RSS 源的URL
if (location.href.match(/(api\.wizos\.me)|(feedly\.com\/i\/subscription)|(inoreader\.com\/feed\/http)/i)) {
    return;
}


const zhcn = {
    "no_title": "无名称",
    "copied": "已复制",
    "copy": "复制",
    "copy_succeeded": "复制成功",
    "follow": "订阅",
    "found": "发现 ",
    "feed": " 个订阅源",
    "click_the_number_to_view": "点击右下角的数字查看",
    "use_feedly": "使用 Feedly 订阅",
    "use_inoreader": "使用 InoReader 订阅",
    "use_tinytinyrss": "使用 TinyTinyRSS 订阅",
    "use_freshrss": "使用 FreshRSS 订阅",
    "setting_rsshub_domain": "设置 RSSHub 服务的域名",
    "setting_inoreader_domain": "设置 InoReader 服务的域名",
    "setting_tinytinyrss_domain": "设置 TinyTinyRSS 服务的域名",
    "setting_freshrss_domain": "设置 FreshRSS 服务的域名",
    "domain_is_wrong": "服务器地址格式有问题，请检查",
    "enable_qr_code": "启用/禁用二维码",
    "enabled": "已启用",
    "disabled": "已禁用",
    "close": "关闭"
};
const zhtw = {
    "no_title": "無名稱",
    "copied": "已複製",
    "copy": "複製",
    "copy_succeeded": "複製成功",
    "follow": "訂閱",
    "found": "發現 ",
    "feed": " 個訂閱源",
    "click_the_number_to_view": "點擊右下角的數位查看",
    "use_feedly": "使用 Feedly 訂閱",
    "use_inoreader": "使用 InoReader 訂閱",
    "use_tinytinyrss": "使用 TinyTinyRSS 訂閱",
    "use_freshrss": "使用 FreshRSS 訂閱",
    "setting_rsshub_domain": "設定 RSSHub 服務的網域名稱",
    "setting_inoreader_domain": "設定 InoReader 服務的網域名稱",
    "setting_tinytinyrss_domain": "設定 TinyTinyRSS 服務的網域名稱",
    "setting_freshrss_domain": "設定 FreshRSS 服務的網域名稱",
    "domain_is_wrong": "伺服器位址格式有問題，請檢查",
    "enable_qr_code": "啟用/禁用二維碼",
    "enabled": "已啟用",
    "disabled": "已禁用",
    "close": "關閉"
};
const en = {
    "no_title": "NO TITILE",
    "copied": "copied",
    "copy": "copy",
    "copy_succeeded": "copy succeeded",
    "follow": "follow",
    "found": "found ",
    "feed": " feed",
    "click_the_number_to_view": "click on the number in the lower right corner to view it",
    "setting": "setting",
    "use_feedly": "Use Feedly Subscription",
    "use_inoreader": "Use InoReader Subscription",
    "use_tinytinyrss": "Use TinyTinyRSS Subscription",
    "use_freshrss": "Use FreshRSS Subscription",
    "setting_rsshub_domain": "Setting RSSHub Domain",
    "setting_inoreader_domain": "Setting InoReader Domain",
    "setting_tinytinyrss_domain": "Setting TinyTinyRSS Domain",
    "setting_freshrss_domain": "Setting FreshRSS Domain",
    "domain_is_wrong": "Error in domain name format, please check",
    "enable_qr_code": "Enable/disable QR code",
    "enabled": "Enabled",
    "disabled": "Disabled",
    "close": "close"
};
const ja = {
    "no_title": "名前なし",
    "copied": "コピーされました",
    "copy": "コピー",
    "copy_succeeded": "コピー成功",
    "follow": "購読",
    "found": "発見 ",
    "feed": " フィード",
    "click_the_number_to_view": "右下の数字をクリックして表示",
    "use_feedly": "Feedly で購読",
    "use_inoreader": "InoReader で購読",
    "use_tinytinyrss": "TinyTinyRSS で購読",
    "use_freshrss": "FreshRSS で購読",
    "setting_rsshub_domain": "RSSHub サービスのドメイン名を設定する",
    "setting_inoreader_domain": "InoReader サービスのドメイン名を設定する",
    "setting_freshrss_domain": "FreshRSS サービスのドメイン名を設定する",
    "domain_is_wrong": "サーバーのアドレス形式に問題があります。確認してください",
    "enable_qr_code": "QRコードを有効/無効にする",
    "enabled": "有効にした",
    "disabled": "無効にしました",
    "close": "閉じる"
};
const ko = {
    "no_title": "이름 없음",
    "copied": "복사",
    "copy": "복사",
    "copy_succeeded": "복사 성공",
    "follow": "구독",
    "found": "발견 ",
    "feed": "피드",
    "click_the_number_to_view": "오른쪽 하단에있는 숫자를 클릭하면 볼 수 있습니다",
    "use_feedly": "Feedly 로 구독",
    "use_inoreader": "InoReader 로 구독",
    "use_tinytinyrss": "TinyTinyRSS 로 구독",
    "use_freshrss": "FreshRSS 로 구독",
    "setting_rsshub_domain": "RSSub 서비스의 도메인 이름 설정",
    "setting_inoreader_domain": "InoReader 서비스의 도메인 이름 설정",
    "setting_tinytinyrss_domain": "TinyTinyRSS 서비스의 도메인 이름 설정",
    "setting_freshrss_domain": "FreshRSS 서비스의 도메인 이름 설정",
    "domain_is_wrong": "서버 주소 형식에 문제가 있습니다. 확인하십시오",
    "enable_qr_code": "큐알（QR）코드 사용/사용 안 함",
    "enabled": "활성화됨",
    "disabled": "사용 안 함",
    "close": "닫기"
};
var languages = {
    "zh": zhcn,
    "zhcn": zhcn,
    "zhtw": zhtw,
    "ja": ja,
    "ko": ko,
    "en": en
};

var lang = navigator.language.replace('-', "").toLowerCase();
lang = languages[lang];
if (!lang) {
    lang = languages.en;
}


var feedsMap = {};
const feed_suffix = ['/feed', '/rss', '/rss.xml', '/atom.xml', '/feed.xml', '/?feed=rss2', '/?feed=rss'];



setTimeout(function () {
    GM_registerMenuCommand(lang.use_feedly, function () {
        GM_setValue("rss_service", "feedly");
    });
    GM_registerMenuCommand(lang.use_inoreader, function () {
        var domain = GM_getValue("inoreader_domain");
        if (!domain) {
            domain = "https://www.inoreader.com";
        }
        domain = window.prompt(lang.setting_inoreader_domain, domain);
        if (isValidUrl(domain)) {
            GM_setValue("inoreader_domain", domain);
            GM_setValue("rss_service", "inoreader");
        } else {
            alert(lang.domain_is_wrong);
        }
    });
    GM_registerMenuCommand(lang.use_tinytinyrss, function () {
        var domain = GM_getValue("tinytinyrss_domain");
        if (!domain) {
            domain = "https://www.example.com";
        }
        domain = window.prompt(lang.setting_tinytinyrss_domain, domain);
        if (isValidUrl(domain)) {
            GM_setValue("tinytinyrss_domain", domain);
            GM_setValue("rss_service", "tinytinyrss");
        } else {
            alert(lang.domain_is_wrong);
        }
    });
    GM_registerMenuCommand(lang.use_freshrss, function () {
        var domain = GM_getValue("freshrss_domain");
        if (!domain) {
            domain = "https://www.example.com";
        }
        domain = window.prompt(lang.setting_freshrss_domain, domain);
        if (isValidUrl(domain)) {
            GM_setValue("freshrss_domain", domain);
            GM_setValue("rss_service", "freshrss");
        } else {
            alert(lang.domain_is_wrong);
        }
    });

    GM_registerMenuCommand(lang.enable_qr_code, function () {
        if (!GM_getValue("enable_qr_code")) {
            GM_setValue("enable_qr_code", true);
            GM_notification({ text: lang.enabled, title: lang.enable_qr_code, timeout: 2000 });
        } else {
            GM_setValue("enable_qr_code", false);
            GM_notification({ text: lang.disabled, title: lang.enable_qr_code, timeout: 2000 });
        }
    });


    GM_registerMenuCommand(lang.setting_rsshub_domain, function () {
        var domain = GM_getValue("rsshub_domain");
        if (!domain) {
            domain = "https://rsshub.app";
        }
        domain = window.prompt(lang.setting_rsshub_domain, domain);
        if (isValidUrl(domain)) {
            GM_setValue("rsshub_domain", domain);
        } else {
            alert(lang.domain_is_wrong);
        }
    });

    initUrlChangeListener();

    findRSS();

    window.addEventListener('locationchange', function (e) {
        clearRSS();
        findRSS();
    });
}, 0);


function clearRSS() {
    if (!feedsView) {
        return;
    }
    var childs = feedsView.childNodes;
    for (var i = childs.length - 1; i > 0; i--) {
        feedsView.removeChild(childs[i]);
    }
    feedsMap = {};
    Array.from(countLabels).forEach(label => label.innerText = Object.keys(feedsMap).length);
}


function findRSS() {
    getKnowFeeds();
    getUnknownFeeds();
    findCloudFeeds(optimizeLink(location.href), document.documentElement.outerHTML);
}


// 获取在<head>的<link>元素中，已经声明为RSS的链接
function getKnowFeeds() {
    var links = document.getElementsByTagName("link");
    var link, linkHref, linkType, linkTitle;
    for (var i = 0, l = links.length; i < l; i++) {
        link = links[i];
        if (!link) continue;
        linkHref = link.href;
        linkType = link.type;
        linkTitle = link.title;
        if (!linkTitle) {
            linkTitle = document.title;
        }
        if (linkType && linkType.match(/.+\/(rss|rdf|atom)/i)) {
            addRSS(linkTitle, linkHref);
        } else if (linkType && linkType.match(/^text\/xml$/i)) {
            addRSS(linkTitle, linkHref);
        }
    }
}

// 寻找未明确标示的RSS源
function getUnknownFeeds() {
    //var link, linkHref, linkType, linkTitle;
    var links, link, linkhref, linktitle;
    // links 属性返回一个文档中所有具有 href 属性值的 <area> 元素与 <a> 元素的集合
    if (!document.links) { //console.log("页面内没有发现具有 href 属性值的 <area> 元素或 <a> 元素");
        links = document.getElementsByTagName("a");
    } else {
        links = document.links;
    }
    for (var a = 0, len = links.length; a < len; a++) {
        link = links[a];
        linkhref = link.href;
        linktitle = link.title;
        if (!linktitle) {
            linktitle = document.title;
        } else if (link.innerText) {
            linktitle = link.innerText;
        }
        if (linkhref.match(/^(https|http|ftp|feed).*([\.\/]rss([\.\/]xml|\.aspx|\.jsp|\/)?$|\/node\/feed$|\/feed(\.xml|\/$|$)|\/rss\/[a-z0-9]+$|[?&;](rss|xml)=|[?&;]feed=rss[0-9.]*$|[?&;]action=rss_rc$|feeds\.feedburner\.com\/[\w\W]+$)/i)) {
            addRSS(linktitle, linkhref);
        } else if (linkhref.match(/^(https|http|ftp|feed).*\/atom(\.xml|\.aspx|\.jsp|\/)?$|[?&;]feed=atom[0-9.]*$/i)) {
            addRSS(linktitle, linkhref);
        } else if (linkhref.match(/^(https|http|ftp|feed).*(\/feeds?\/[^.\/]*\.xml$|.*\/index\.xml$|feed\/msgs\.xml(\?num=\d+)?$)/i)) {
            addRSS(linktitle, linkhref);
        } else if (linkhref.match(/^(https|http|ftp|feed).*\.rdf$/i)) {
            addRSS(linktitle, linkhref);
        } else if (linkhref.match(/^(rss|feed):\/\//i)) {
            addRSS(linktitle, linkhref);
        } else if (linkhref.match(/^(https|http):\/\/feed\./i)) {
            addRSS(linktitle, linkhref);
        }
    }

    links = document.querySelectorAll("html > head > link");
    for (var i = 0, size = links.length; i < size; i++) {
        link = links[i];
        if (link.href.match(/(wp-content)/i)) {
            checkFeed(document.location.protocol + '//' + document.domain);
            break;
        }
    }

    links = document.querySelectorAll("html > body footer a");
    for (i = 0, size = links.length; i < size; i++) {
        link = links[i];
        if (link.href.match(/(bitcron\.com|typecho\.org|hexo\.io)/i)) {
            checkFeed(document.location.protocol + '//' + document.domain);
            break;
        }
    }
}

function findCloudFeeds(url, res) {
    return function (jsStr, url, res) {
        try {
            if (!jsStr) {
                return;
            }
            //eval(jsStr);
            const Ruler = looseJsonParse(jsStr);

            var list = Ruler.find(url, res);
            if (!list) {
                return;
            }
            list.forEach(element => {
                addRSS(element.title, element.link);
            });
        } catch (e) {
            console.log("请求远程：" + url);
            //console.log(e);
            showWithCloudFeeds(url);
        }
    }.call(window, GM_getResourceText('RulerJs'), url, res);
}

function showWithCloudFeeds(url) {
    GM_xmlhttpRequest({
        method: "get",
        url: "https://rssplus.vercel.app/api/find.js?url=" + encodeURIComponent(url), // https://rssplus.vercel.app/api/find.js，https://rssfinder.vercel.app/find.php
        onload: response => {
            if (response.status != 200) {
                return;
            }

            try {
                var obj = JSON.parse(response.responseText);
                if (!obj) {
                    return;
                }
                obj.forEach(element => {
                    addRSS(element.title, element.link);
                });
            } catch (error) {
                // console.log("解析json异常：" + response.responseText);
            }
        }
    });
}

function looseJsonParse(obj) {
    return Function('"use strict";return (' + obj + ')')();
}

function checkFeed(href) {
    ['/feed', '/rss', '/rss.xml', '/atom.xml', '/feed.xml', '/?feed=rss2', '/?feed=rss'].forEach(suffix => {
        GM_xmlhttpRequest({
            method: "HEAD",
            url: href + suffix,
            onload: response => {
                //console.log("请求api返回状态：" + response.status + " => " + href + flag);
                if (response.status == 200) {
                    addRSS(document.title, href + suffix);
                }
            }
        });
    });
}

function optimizeLink(link) {
    if (link.match(/douban\.com\/people/i)) {
        var src = document.querySelector("#profile > div > div.bd > div.basic-info > div.uhead-wrap > img.userface").src;
        var m = src.match(/ul(\d+)-/i);
        link = "https://www.douban.com/people/" + m[1];
    }
    return link;
}

var feedsBadge;
var feedsDialog;
var countLabels;
var feedsView;
var rssPlusDocument;


function addRSS(title, link) {
    if (link.match(/(api\.wizos\.me)|(feedly\.com\/i\/subscription)|(inoreader\.com\/feed\/http)/i)) {
        return;
    }

    if (Object.keys(feedsMap).length == 0) {
        // 安装 RSS Plus Box 和 RSS Plus Frame
        // console.log("RSSPlus：首次渲染");
        var body = document.getElementsByTagName("body");
        if (body && body[0]) body = body[0];

        var rssPlusStyle = document.createElement("style");
        rssPlusStyle.innerHTML = '@media print {#rss-plus {display: none;}} #rss-plus{position:fixed;top:60px;right:260px;z-index:9999;width:auto;height:auto;} #rss-plus > iframe{display: block!important; max-width: 100%!important;border:0px;margin:0px !important; }';
        body.appendChild(rssPlusStyle);

        var rssPlusDiv = document.createElement("div");
        rssPlusDiv.setAttribute("id", "rss-plus");
        body.appendChild(rssPlusDiv);

        var rssPlusIFrame = document.createElement("iframe");
        rssPlusIFrame.setAttribute("id", "rss-plus-iframe");
        rssPlusIFrame.setAttribute("name", "rssPlusEnvironment");
        rssPlusIFrame.setAttribute("allowTransparency", "true");

        if (navigator.userAgent.indexOf("Firefox") !== -1) {
            rssPlusIFrame.setAttribute("src", "javascript:");
        }
        rssPlusDiv.appendChild(rssPlusIFrame);


        rssPlusDocument = rssPlusEnvironment.window.document;
        var frameBody = rssPlusDocument.getElementsByTagName("body");
        if (frameBody && frameBody[0]) frameBody = frameBody[0];


        var styleEl = document.createElement("style");
        styleEl.innerHTML = BOX_STYLE;
        frameBody.appendChild(styleEl);

        var rssPlusBoxDiv = document.createElement("div");
        rssPlusBoxDiv.setAttribute("id", "rss-plus-box");
        rssPlusBoxDiv.innerHTML = '<div id="rp-feeds-badge" class="rp-card rp-card-bordered"><span class="rp-badge-count rp-feed-count" place="count">0</span></div>'
            + '<div id="rp-feeds-dialog" class="rp-card rp-card-bordered"><div class="rp-table"><table cellspacing="0" cellpadding="0" border="0"><colgroup><col width="70%"><col width="30%"></colgroup><tbody id="rp-table-tbody">'
            + '<tr><th><div id="rp-card-head" class="rp-card-head"><div class="card-title">' + ICON_LOGO + lang.found + '<span class="rp-mark-count rp-feed-count" place="count"></span>' + lang.feed + ' -【RSS+】</div></div></th><th class="rp-table-column-end"><button type="button" id="rp-close-btn" class="rp-btn rp-btn-small endrp-btn-dashed" title="' + lang.close + '"><span>' + ICON_CLOSE + '</span></button></th></tr>'
            + "</tbody></table></div></div>";
        frameBody.appendChild(rssPlusBoxDiv);

        feedsBadge = rssPlusDocument.getElementById("rp-feeds-badge");
        feedsDialog = rssPlusDocument.getElementById("rp-feeds-dialog");

        countLabels = rssPlusDocument.getElementsByClassName("rp-feed-count");
        feedsView = rssPlusDocument.getElementById("rp-table-tbody");

        rssPlusIFrame.style.width = feedsBadge.offsetWidth + "px";
        rssPlusIFrame.style.height = feedsBadge.offsetHeight + "px";

        addEventHandler(rssPlusDocument.getElementById("rp-close-btn"), "click", function () {
            feedsDialog.style.display = "none";
            feedsBadge.style.display = "block";
            rssPlusIFrame.style.width = feedsBadge.offsetWidth + "px";
            rssPlusIFrame.style.height = feedsBadge.offsetHeight + "px";
        });
        addEventHandler(rssPlusDocument.getElementById("rp-feeds-badge"), "click", function () {
            feedsDialog.style.display = "block";
            feedsBadge.style.display = "none";

            if (document.body.clientWidth < 600) {
                feedsDialog.style.width = "100%";
                rssPlusIFrame.style.width = "100%";
            } else {
                rssPlusIFrame.style.width = rssPlusDocument.getElementById("rss-plus-box").offsetWidth + "px";
                rssPlusIFrame.style.height = rssPlusDocument.getElementById("rss-plus-box").offsetHeight + "px";
            }
        });

    }

    //link = link.replace(/\/$/g, "");

    // 防止重复，如果能查找到，证明数组元素重复了
    if (!feedsMap[link.toLowerCase()]) {
        feedsMap[link.toLowerCase()] = 1;
    } else {
        return;
    }

    console.log("发现：" + title + " -> " + link);

    Array.from(countLabels).forEach(label => label.innerText = Object.keys(feedsMap).length);

    if (link.match(/^https*:\/\/rsshub.app/)) {
        var rsshub_domain = GM_getValue("rsshub_domain");
        if (rsshub_domain != null && rsshub_domain != "") {
            link = link.replace(/^https*:\/\/rsshub.app/, rsshub_domain);
        }
    }
    if (!title) {
        title = lang.no_title;
    }

    var item = document.createElement("tr");
    feedsView.appendChild(item);

    item.innerHTML
        = '<td><div class="rp-table-cell"><div class="feed-title">' + title + '</div><div class="feed-tips"><a class="feed-link" href="' + link + '" target="_blank">' + link + '</a></div></div></td>'
        + '<td class="rp-table-column-end">'
        + '<button type="button" class="rp-btn rp-btn-primary rp-btn-small rp-copy-feed-link"><span>' + lang.copy + '</span></button>'
        + '<button type="button" class="rp-btn rp-btn-primary rp-btn-small rp-follow-feed-link"><span>' + lang.follow + '</span></button></td>';

    var copyFeedLinkButton = item.getElementsByClassName("rp-copy-feed-link")[0];
    addEventHandler(copyFeedLinkButton, "click", function () {
        copy(link);
    });

    var followFeedLinkButton = item.getElementsByClassName("rp-follow-feed-link")[0];
    addEventHandler(followFeedLinkButton, "click", function () {
        follow(link); // .replace(/&/g,"%26") 转义&避免RSS链接识别错误
    });

    var feedLinkButton = item.getElementsByClassName("feed-link")[0];
    new HoverImgFx1(feedLinkButton);
}


function isValidUrl(url) {
    if (url && (url.match(/^https*:\/\/.*?\.\w+(:\d+)?(\/|$)/) || url.match(/^https*:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(\:\d+)*(:\d+)?(\/|$)/))) {
        return true;
    } else {
        return false;
    }
}

function initUrlChangeListener() {
    const _historyWrap = function (type) {
        const orig = history[type];
        const e = new Event(type);
        return function () {
            const rv = orig.apply(this, arguments);
            e.arguments = arguments;
            window.dispatchEvent(e);
            return rv;
        };
    };
    history.pushState = _historyWrap('pushState');
    history.replaceState = _historyWrap('replaceState');

    window.addEventListener('pushState', function (e) {
        window.dispatchEvent(new Event('locationchange'));
    });
    window.addEventListener('replaceState', function (e) {
        window.dispatchEvent(new Event('locationchange'));
    });
    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'));
    });
    window.addEventListener('hashchange', function () {
        window.dispatchEvent(new Event('locationchange'));
    }, false);
}

function addEventHandler(target, eventName, eventHandler, scope) {
    var f = scope ? function () {
        eventHandler.apply(scope, arguments);
    } : eventHandler;
    if (target.addEventListener) {
        target.addEventListener(eventName, f, true);
    } else if (target.attachEvent) {
        target.attachEvent("on" + eventName, f);
    }
    return f;
}


function notification(size) {
    GM_notification({
        title: lang.found + " " + size + " " + lang.feed,
        text: lang.click_the_number_to_view,
        timeout: 3000
    });
}


function copy(str) {
    GM_setClipboard(str);
    GM_notification({
        text: lang.copied + ": " + str,
        title: lang.copy_succeeded,
        timeout: 2000
    });
}

function follow(link) {
    const rssService = GM_getValue("rss_service", "feedly");
    if (rssService === "feedly") {
        window.open("https://feedly.com/i/subscription/feed/" + encodeURIComponent(link), "_blank");
    } else if (rssService === "inoreader") {
        window.open(GM_getValue("inoreader_domain", "https://www.inoreader.com") + "/?add_feed=" + encodeURIComponent(link), "_blank");
    } else if (rssService === "tinytinyrss") {
        window.open(GM_getValue("tinytinyrss_domain") + "/public.php?op=bookmarklets-subscribe&feed_url=" + link, "_blank");
    } else if (rssService === "freshrss") {
        window.open(GM_getValue("freshrss_domain") + "/i/?c=feed&a=add&url_rss=" + encodeURIComponent(link), "_blank");
    } else if (rssService === "NewsBlur") {
        window.open("http://www.newsblur.com/?url=" + encodeURIComponent(link), "_blank");
    }
    // [tinytinyrss]https://example.com/public.php?op=subscribe&feed_url=https://rsshub.wizos.me/weibo/user/5261556444
    // bookmarklets-subscribe
    // [feedly]https://feedly.com/i/subscription/feed%2Fhttp%3A%2F%2Ffeeds.howtogeek.com%2FHowToGeek
    // [inoreader]http://www.inoreader.com/?add_feed=https%3A%2F%2Fwww.howtogeek.com%2Ffeed%2F
    // [NewsBlur]http://www.newsblur.com/?url=https%3A%2F%2Ffeeds.howtogeek.com%2FHowToGeek
    // [theoldreader]https://theoldreader.com/feeds/subscribe?url=https://api.izgq.net/weibo/rss/1197161814
    // [freshrss]https://rss.iridium.cyou/i/?c=feed&a=add&url_rss=https://rsshub.wizos.me/zhihu/question/20180238
}


const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return { x: posx, y: posy }
}


// Effect 1
class HoverImgFx1 {
    constructor(el) {
        this.DOM = { el: el };
        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';

        let thisDOM = this.DOM;
        QRCode.toDataURL(this.DOM.el.href, function (error, url) {
            if (error) {
                console.log(error);
            } else {
                thisDOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${url})"></div></div>`
                thisDOM.revealInner = thisDOM.reveal.querySelector('.hover-reveal__inner');
                thisDOM.revealInner.style.overflow = 'hidden';
                thisDOM.revealImg = thisDOM.revealInner.querySelector('.hover-reveal__img');
                thisDOM.el.appendChild(thisDOM.reveal);
            }
        });
        this.initEvents();
    }

    initEvents() {
        this.positionElement = (ev) => {
            const mousePos = getMousePos(ev);
            const docScrolls = {
                left: rssPlusDocument.body.scrollLeft + rssPlusDocument.documentElement.scrollLeft,
                top: rssPlusDocument.body.scrollTop + rssPlusDocument.documentElement.scrollTop
            };
            this.DOM.reveal.style.top = `${mousePos.y - 70 - docScrolls.top}px`;
            this.DOM.reveal.style.left = `${mousePos.x + 10 - docScrolls.left}px`;
        };
        this.mouseenterFn = (ev) => {
            if (!GM_getValue("enable_qr_code")) return;
            this.positionElement(ev);
            this.showImage();
        };
        this.mousemoveFn = ev => requestAnimationFrame(() => {
            if (!GM_getValue("enable_qr_code")) return;
            this.positionElement(ev);
        });
        this.mouseleaveFn = () => {
            if (!GM_getValue("enable_qr_code")) return;
            this.hideImage();
        };
        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    }
    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
            onStart: () => {
                this.DOM.reveal.style.opacity = 1;
                TweenMax.set(this.DOM.el, { zIndex: 1000 });
            }
        })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.2, {
                ease: Sine.easeOut,
                startAt: { x: '-100%' },
                x: '0%'
            }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.2, {
                ease: Sine.easeOut,
                startAt: { x: '100%' },
                x: '0%'
            }), 'begin');
    }
    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
            onStart: () => {
                TweenMax.set(this.DOM.el, { zIndex: 999 });
            },
            onComplete: () => {
                TweenMax.set(this.DOM.el, { zIndex: '' });
                TweenMax.set(this.DOM.reveal, { opacity: 0 });
            }
        })
            .add('begin')
            .add(new TweenMax(this.DOM.revealInner, 0.2, { ease: Sine.easeOut, x: '100%' }), 'begin')
            .add(new TweenMax(this.DOM.revealImg, 0.2, { ease: Sine.easeOut, x: '-100%' }), 'begin');
    }
}

const ICON_LOGO = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024"><<defs><style type="text/css"></style></defs><path d="M129.832 884.872a381.336 81.488 0 1 0 762.672 0 381.336 81.488 0 1 0-762.672 0Z" fill="#B8CBCD" p-id="1377"></path><path d="M208.52 243.224c-22.608-66.672 13.44-102.72 80.112-80.112l38.12 12.92L459.2 220.944c6.176 2.096 15.192 0.856 20.024-2.744l111.376-83.112 33.68-25.136c56.424-42.104 101.848-18.96 100.952 51.432l-0.512 40.024-1.784 139.96c-0.088 6.584 2.824 14.072 6.456 16.648 3.64 2.568 52.992 38.84 109.672 80.592l41.896 30.864c56.68 41.76 47.664 91.728-20.032 111.056l-41.832 11.936c-67.696 19.32-127.032 36.36-131.848 37.856-4.832 1.504-10.48 8.2-12.56 14.896-2.08 6.696-20.872 67.176-41.776 134.4l-11.424 36.736c-20.896 67.224-71.248 75.2-111.896 17.72l-28.4-40.144-78.176-110.544c-2.344-3.32-9.384-5.976-15.632-5.896l-139.36 1.784-41.216 0.528c-70.4 0.896-93.536-44.528-51.44-100.944l26.032-34.888L264.064 433.2c3.368-4.504 4.312-13.512 2.112-20.016l-45.12-133.04-12.536-36.92z" fill="#F6E89A" p-id="1378"></path><path d="M566.6 896.488c-27.272 0-54.488-17.24-76.616-48.544l-28.4-40.144-75.072-106.16-181.768 2.176c-57.552 0-79.488-26.6-87.44-42.456-8.024-16.008-16.256-49.872 18.808-96.856l107.224-143.688a1.632 1.632 0 0 0-0.032-0.312l-57.528-169.584c-15.696-46.272-5.656-74.584 5.528-90.184 19.992-27.872 59.288-35.856 105.024-20.36l169.752 57.56 0.168-0.016 143.664-107.2c22.928-17.112 45.304-25.792 66.488-25.792 18.512 0 34.968 6.768 47.608 19.576 16.912 17.128 25.624 43.816 25.2 77.192l-0.832 64.472c-0.752 58.376-1.368 107.024-1.464 114.936 13.904 10.144 62.248 45.696 106.352 78.184l41.896 30.864c47.464 34.968 49.192 69.84 46.008 87.52-3.184 17.68-17 49.752-73.688 65.936l-41.832 11.936a35027.144 35027.144 0 0 0-128.04 36.728 0.856 0.856 0 0 0-0.072 0.152l-53.168 171.064c-14.392 46.384-42.744 72.992-77.768 73zM387.088 653.504c11.472 0 27.16 4.208 35.52 16.056l78.168 110.528 28.4 40.144c12.512 17.696 26.504 28.264 37.432 28.256 12.184 0 24.432-15.04 31.952-39.248l53.2-171.128c3.768-12.08 13.984-26.24 28.368-30.704 5.528-1.72 71.656-20.688 132.384-38.024l41.832-11.936c22.792-6.504 37.6-17.08 39.624-28.296 2.024-11.216-8.168-26.304-27.24-40.352l-41.896-30.864c-61.624-45.4-106.256-78.176-109.28-80.312-11.704-8.296-16.768-24.336-16.608-36.568l1.472-115.496 0.832-64.472c0.248-19.664-3.888-35.288-11.36-42.856-3.56-3.616-7.84-5.296-13.456-5.296-10.312 0-23.736 5.776-37.792 16.264L493.552 237.44c-10.912 8.136-28.664 10.784-42.08 6.232L280.92 185.84c-24.128-8.184-43.456-7.104-50.592 2.864-6.36 8.872-6.016 26.368 0.912 46.808l57.648 169.984c4.744 14 2.432 31.304-5.616 42.08L174.584 593.216c-14.136 18.944-19.504 36.376-14.368 46.632 5.016 10 21.664 15.976 44.528 15.976l42.952-0.536 139.368-1.784h0.024z" fill="#8D4520" p-id="1379"></path><path d="M407.296 713.44a23.976 23.976 0 0 1-19.928-10.592l-20.152-29.944H149.624c-10.704 0-20.208-5.672-24.832-14.8-4.864-9.632-3.544-21.144 3.536-30.776l73.568-100.024c34.4-46.768 65.376-88.84 72.896-99.016a1.816 1.816 0 0 0-0.032-0.328c-1.736-5.064-21.912-58.88-49.016-130.296l-4.776-12.592c-22.096-58.224-4.672-87.296 7.688-99.448 11.44-11.248 38.048-27.168 87.744-7.344 57.136 22.792 103.344 40.96 116.336 45.872 1.712-0.664 4.232-1.984 6.384-3.872l15.472-13.584a24 24 0 1 1 31.656 36.08l-15.456 13.56c-12.872 11.304-33.4 20.168-50.24 14.456-7.664-2.6-68.536-26.64-121.928-47.936-19.36-7.728-32.184-7.072-36.312-3.016-5.168 5.088-6.272 22.336 3.536 48.192l4.776 12.592c22.424 59.08 47.152 124.728 49.72 132.304 4.744 14 2.432 31.312-5.624 42.08-3.328 4.472-36.712 49.8-74.152 100.704l-50.872 69.168h181.808c12.728 0 25.84 6.784 32.632 16.88l23.048 34.24a24 24 0 0 1-6.504 33.32 23.744 23.744 0 0 1-13.384 4.12z" fill="#FFFFFF" p-id="1380"></path><path d="M599.296 895.168l-46.592-11.544 33.2-133.96c15.208-61.36 32.44-129.664 34.952-137.752 3.768-12.08 13.984-26.24 28.368-30.704 7.048-2.192 84.76-20.24 135.272-31.832l29.376-6.744c28.376-6.512 37.296-16.584 38.056-20.992 0.76-4.408-4.312-16.872-28.912-32.448l-23.728-15.032c-41.984-26.584-110.544-70.144-115.776-73.84-11.688-8.272-16.752-24.312-16.592-36.552 0.088-7.08 1.384-73.52 2.616-135.488l2.472-123.352 47.984 0.96-2.472 123.344c-1.384 69.672-2.456 125.056-2.592 134.32 12.888 8.352 56.024 35.848 110.048 70.056l23.728 15.032c50.568 32.024 53.368 64.552 50.536 81.096-2.824 16.544-16.288 46.296-74.632 59.68l-29.376 6.744c-64.416 14.784-114.64 26.584-128.552 30.056l-0.008 0.008c-1.712 5.552-16.184 62.416-34.168 134.984l-33.208 133.96z" fill="#8D4520" p-id="1381"></path><path d="M566.6 896.488c-27.272 0-54.488-17.24-76.616-48.544l-28.4-40.144-75.072-106.16-181.768 2.176c-57.552 0-79.488-26.6-87.44-42.456-8.024-16.008-16.256-49.872 18.808-96.856l107.224-143.688a1.632 1.632 0 0 0-0.032-0.312l-57.528-169.584c-15.696-46.272-5.656-74.584 5.528-90.184 19.992-27.872 59.288-35.856 105.024-20.36l169.752 57.56 0.168-0.016 143.664-107.2c22.928-17.112 45.304-25.792 66.488-25.792 18.512 0 34.968 6.768 47.608 19.576 16.912 17.128 25.624 43.816 25.2 77.192l-0.832 64.472c-0.752 58.376-1.368 107.024-1.464 114.936 13.904 10.144 62.248 45.696 106.352 78.184l41.896 30.864c47.464 34.968 49.192 69.84 46.008 87.52-3.184 17.68-17 49.752-73.688 65.936l-41.832 11.936a35027.144 35027.144 0 0 0-128.04 36.728 0.856 0.856 0 0 0-0.072 0.152l-53.168 171.064c-14.392 46.384-42.744 72.992-77.768 73zM387.088 653.504c11.472 0 27.16 4.208 35.52 16.056l78.168 110.528 28.4 40.144c12.512 17.696 26.504 28.264 37.432 28.256 12.184 0 24.432-15.04 31.952-39.248l53.2-171.128c3.768-12.08 13.984-26.24 28.368-30.704 5.528-1.72 71.656-20.688 132.384-38.024l41.832-11.936c22.792-6.504 37.6-17.08 39.624-28.296 2.024-11.216-8.168-26.304-27.24-40.352l-41.896-30.864c-61.624-45.4-106.256-78.176-109.28-80.312-11.704-8.296-16.768-24.336-16.608-36.568l1.472-115.496 0.832-64.472c0.248-19.664-3.888-35.288-11.36-42.856-3.56-3.616-7.84-5.296-13.456-5.296-10.312 0-23.736 5.776-37.792 16.264L493.552 237.44c-10.912 8.136-28.664 10.784-42.08 6.232L280.92 185.84c-24.128-8.184-43.456-7.104-50.592 2.864-6.36 8.872-6.016 26.368 0.912 46.808l57.648 169.984c4.744 14 2.432 31.304-5.616 42.08L174.584 593.216c-14.136 18.944-19.504 36.376-14.368 46.632 5.016 10 21.664 15.976 44.528 15.976l42.952-0.536 139.368-1.784h0.024z" fill="#8D4520" p-id="1382"></path></svg>';
const ICON_CLOSE = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1024 1024"><defs><style type="text/css"></style></defs><path d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z" p-id="3440"></path></svg>';
const BOX_STYLE = '.hover-reveal{position:fixed;width:80px;height:80px;top:0;left:0;pointer-events:none;opacity:0}.hover-reveal__inner,.hover-reveal__img{width:100%;height:100%;position:relative}.hover-reveal__deco{width:100%;height:100%;position:absolute;top:0;left:0;background-color:#181314}.hover-reveal__img{background-size:cover;background-position:50% 50%}; body {margin: 0px;}#rss-plus-box { position:fixed;z-index:99999;bottom:0px; right:0px; }div.feed-title { font-weight: bold;font-size:0.8rem; cursor: pointer;}div.feed-tips,div.feed-tips a { font-size: 0.75rem; color: rgb(158, 158, 158);}.card-title {}.rp-table-body { max-height: 400px; height: auto; overflow-x: hidden;}.table-footer { position: fixed; bottom: 0 ; padding-left: 10px; width: 100%; background-color: #fff;}.table-footer a { color: #ed3f14;}.support-box { height: 28px; line-height: 28px;}#rp-feeds-dialog{display:none;z-index:23333;box-shadow: 1px 1px 2px 2px #4242426b; width:600px;} #rp-feeds-badge{width: 28px; height: 28px; line-height: 28px; border-radius: 14px; float: right;cursor: pointer;z-index:23333;}#rp-feeds-badge:hover{border-color:#e9eaec}.badge{ top:-17px; left: -6%; width: 26px; height: 26px; line-height: 26px; border-radius: 13px;}.rp-card:hover{-webkit-box-shadow:0 1px 6px rgba(0,0,0,.2);box-shadow:0 1px 6px rgba(0,0,0,.2);border-color:#eee}.rp-card{background:#fff;border-radius:4px;font-size:14px;position:relative;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.rp-card-bordered:hover{border-color:#e9eaec}.rp-card-bordered{border:1px solid #dddee1;border-color:#e9eaec}.rp-mark-count{font-weight:bold;color: #ed3f14;}.rp-badge-count{position:relative;display:inline-block;width: 26px;height: 26px;line-height: 26px;border-radius: 15px;min-width: 20px;background:#4b5979;border: 1px solid transparent;color: #fff;text-align: center;font-size: 12px;white-space: nowrap;-webkit-transform-origin: -10% center;-ms-transform-origin: -10% center;transform-origin: -10% center;z-index: 10;-webkit-box-shadow: 0 0 0 1px #fff;box-shadow: 0 0 0 1px #fff;}.rp-badge-count a,.rp-badge-count a:hover{color:#fff}.rp-card-head{font-size: 14px;padding:10px 16px;line-height:1}.rp-tooltip{display:inline-block}.rp-tooltip-rel{display:inline-block;position:relative}.rp-btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;line-height:1.5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:6px 15px;font-size:12px;border-radius:4px;-webkit-transition:color .2s linear,background-color .2s linear,border .2s linear,-webkit-box-shadow .2s linear;transition:color .2s linear,background-color .2s linear,border .2s linear,-webkit-box-shadow .2s linear;transition:color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;transition:color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear,-webkit-box-shadow .2s linear;color:#495060;background-color:#f7f7f7;border-color:#dddee1}.rp-btn>.rp-icon{line-height:1}.rp-btn,.rp-btn:active,.rp-btn:focus{outline:0}.rp-btn:not([disabled]):hover{text-decoration:none}.rp-btn:not([disabled]):active{outline:0}.rp-btn.disabled,.rp-btn[disabled]{cursor:not-allowed}.rp-btn.disabled>*,.rp-btn[disabled]>*{pointer-events:none}.rp-btn>a:only-child{color:currentColor}.rp-btn>a:only-child:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:0 0}.rp-btn:hover{color:#6d7380;background-color:#f9f9f9;border-color:#e4e5e7}.rp-btn:hover>a:only-child{color:currentColor}.rp-btn:hover>a:only-child:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:0 0}.rp-btn.active,.rp-btn:active{color:#454c5b;background-color:#ebebeb;border-color:#ebebeb}.rp-btn.active>a:only-child,.rp-btn:active>a:only-child{color:currentColor}.rp-btn.active>a:only-child:after,.rp-btn:active>a:only-child:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:0 0}.rp-btn.disabled,.rp-btn.disabled.active,.rp-btn.disabled:active,.rp-btn.disabled:focus,.rp-btn.disabled:hover,.rp-btn[disabled],.rp-btn[disabled].active,.rp-btn[disabled]:active,.rp-btn[disabled]:focus,.rp-btn[disabled]:hover,fieldset[disabled] .rp-btn,fieldset[disabled] .rp-btn.active,fieldset[disabled] .rp-btn:active,fieldset[disabled] .rp-btn:focus,fieldset[disabled] .rp-btn:hover{color:#bbbec4;background-color:#f7f7f7;border-color:#dddee1}.rp-btn.disabled.active>a:only-child,.rp-btn.disabled:active>a:only-child,.rp-btn.disabled:focus>a:only-child,.rp-btn.disabled:hover>a:only-child,.rp-btn.disabled>a:only-child,.rp-btn[disabled].active>a:only-child,.rp-btn[disabled]:active>a:only-child,.rp-btn[disabled]:focus>a:only-child,.rp-btn[disabled]:hover>a:only-child,.rp-btn[disabled]>a:only-child,fieldset[disabled] .rp-btn.active>a:only-child,fieldset[disabled] .rp-btn:active>a:only-child,fieldset[disabled] .rp-btn:focus>a:only-child,fieldset[disabled] .rp-btn:hover>a:only-child,fieldset[disabled] .rp-btn>a:only-child{color:currentColor}.rp-btn.disabled.active>a:only-child:after,.rp-btn.disabled:active>a:only-child:after,.rp-btn.disabled:focus>a:only-child:after,.rp-btn.disabled:hover>a:only-child:after,.rp-btn.disabled>a:only-child:after,.rp-btn[disabled].active>a:only-child:after,.rp-btn[disabled]:active>a:only-child:after,.rp-btn[disabled]:focus>a:only-child:after,.rp-btn[disabled]:hover>a:only-child:after,.rp-btn[disabled]>a:only-child:after,fieldset[disabled] .rp-btn.active>a:only-child:after,fieldset[disabled] .rp-btn:active>a:only-child:after,fieldset[disabled] .rp-btn:focus>a:only-child:after,fieldset[disabled] .rp-btn:hover>a:only-child:after,fieldset[disabled] .rp-btn>a:only-child:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:0 0}.rp-btn:hover{color:#57a3f3;background-color:#fff;border-color:#57a3f3}.rp-btn:hover>a:only-child{color:currentColor}.rp-btn:hover>a:only-child:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:0 0}.rp-btn.active,.rp-btn:active{color:#2b85e4;background-color:#fff;border-color:#2b85e4}.rp-btn.active>a:only-child,.rp-btn:active>a:only-child{color:currentColor}.rp-btn.active>a:only-child:after,.rp-btn:active>a:only-child:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:0 0}.rp-btn:focus{-webkit-box-shadow:0 0 0 2px rgba(45,140,240,.2);box-shadow:0 0 0 2px rgba(45,140,240,.2)}.rp-btn-long{width:100%}.rp-btn>.rp-icon+span,.rp-btn>span+.rp-icon{margin-left:4px}.rp-table{width:inherit;max-height:280px;max-width:100%;overflow:auto;color:#495060;font-size:12px;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box}.rp-table:before{content:"";width:100%;height:1px;position:absolute;left:0;bottom:0;background-color:#dddee1;z-index:1}.rp-table:after{content:"";width:1px;height:100%;position:absolute;top:0;right:0;background-color:#dddee1;z-index:3}.rp-table-body{overflow:auto}.rp-table td,.rp-table th{min-width:0;height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left;text-overflow:ellipsis;vertical-align:middle;border-bottom:1px solid #e9eaec}.rp-table th{height:40px;white-space:nowrap;overflow:hidden;background-color:#f8f8f9}.rp-table td{background-color:#fff;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}//.rp-table-cell span{display:none}.rp-table-cell{display:inline-block;word-wrap:normal;vertical-align:middle}.rp-table-cell{padding-top:5px; padding-bottom:5px; padding-left:18px;padding-right:18px;overflow:hidden;text-overflow:ellipsis;white-space:normal;word-break:break-all;-webkit-box-sizing:border-box;box-sizing:border-box}td.rp-table-column-end,th.rp-table-column-end{text-align: end;padding-right: 10px;}td.rp-table-column-right,th.rp-table-column-right{text-align:right}.rp-table table{table-layout:fixed;width: 100%;}.rp-btn-primary{color:#fff;background-color:#2d8cf0;border-color:#2d8cf0;}.rp-btn-primary>a:only-child{color:currentColor}.rp-btn-primary>a:only-child:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:0 0}.rp-btn-primary:hover{color:#fff;background-color:#57a3f3;border-color:#57a3f3}.rp-btn-primary:hover>a:only-child{color:currentColor}.rp-btn-primary:hover>a:only-child:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:0 0}.rp-btn-primary.active,.rp-btn-primary:active{color:#f2f2f2;background-color:#2b85e4;border-color:#2b85e4}.rp-btn-primary.active>a:only-child,.rp-btn-primary:active>a:only-child{color:currentColor}.rp-btn-primary.active>a:only-child:after,.rp-btn-primary:active>a:only-child:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:0 0}.rp-btn-primary.disabled,.rp-btn-primary.disabled.active,.rp-btn-primary.disabled:active,.rp-btn-primary.disabled:focus,.rp-btn-primary.disabled:hover,.rp-btn-primary[disabled],.rp-btn-primary[disabled].active,.rp-btn-primary[disabled]:active,.rp-btn-primary[disabled]:focus,.rp-btn-primary[disabled]:hover,fieldset[disabled] .rp-btn-primary,fieldset[disabled] .rp-btn-primary.active,fieldset[disabled] .rp-btn-primary:active,fieldset[disabled] .rp-btn-primary:focus,fieldset[disabled] .rp-btn-primary:hover{color:#bbbec4;background-color:#f7f7f7;border-color:#dddee1}.rp-btn-primary.disabled.active>a:only-child,.rp-btn-primary.disabled:active>a:only-child,.rp-btn-primary.disabled:focus>a:only-child,.rp-btn-primary.disabled:hover>a:only-child,.rp-btn-primary.disabled>a:only-child,.rp-btn-primary[disabled].active>a:only-child,.rp-btn-primary[disabled]:active>a:only-child,.rp-btn-primary[disabled]:focus>a:only-child,.rp-btn-primary[disabled]:hover>a:only-child,.rp-btn-primary[disabled]>a:only-child,fieldset[disabled] .rp-btn-primary.active>a:only-child,fieldset[disabled] .rp-btn-primary:active>a:only-child,fieldset[disabled] .rp-btn-primary:focus>a:only-child,fieldset[disabled] .rp-btn-primary:hover>a:only-child,fieldset[disabled] .rp-btn-primary>a:only-child{color:currentColor}.rp-btn-primary.disabled.active>a:only-child:after,.rp-btn-primary.disabled:active>a:only-child:after,.rp-btn-primary.disabled:focus>a:only-child:after,.rp-btn-primary.disabled:hover>a:only-child:after,.rp-btn-primary.disabled>a:only-child:after,.rp-btn-primary[disabled].active>a:only-child:after,.rp-btn-primary[disabled]:active>a:only-child:after,.rp-btn-primary[disabled]:focus>a:only-child:after,.rp-btn-primary[disabled]:hover>a:only-child:after,.rp-btn-primary[disabled]>a:only-child:after,fieldset[disabled] .rp-btn-primary.active>a:only-child:after,fieldset[disabled] .rp-btn-primary:active>a:only-child:after,fieldset[disabled] .rp-btn-primary:focus>a:only-child:after,fieldset[disabled] .rp-btn-primary:hover>a:only-child:after,fieldset[disabled] .rp-btn-primary>a:only-child:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:0 0}.rp-btn-primary.active,.rp-btn-primary:active,.rp-btn-primary:hover{color:#fff}.rp-btn-primary:focus{-webkit-box-shadow:0 0 0 2px rgba(45,140,240,.2);box-shadow:0 0 0 2px rgba(45,140,240,.2)}.rp-btn-group:not(.rp-btn-group-vertical) .rp-btn-primary:not(:first-child):not(:last-child){border-right-color:#2b85e4;border-left-color:#2b85e4}.rp-btn-group:not(.rp-btn-group-vertical) .rp-btn-primary:first-child:not(:last-child){border-right-color:#2b85e4}.rp-btn-group:not(.rp-btn-group-vertical) .rp-btn-primary:first-child:not(:last-child)[disabled]{border-right-color:#dddee1}.rp-btn-group:not(.rp-btn-group-vertical) .rp-btn-primary+.rp-btn,.rp-btn-group:not(.rp-btn-group-vertical) .rp-btn-primary:last-child:not(:first-child){border-left-color:#2b85e4}.rp-btn-group:not(.rp-btn-group-vertical) .rp-btn-primary+.rp-btn[disabled],.rp-btn-group:not(.rp-btn-group-vertical) .rp-btn-primary:last-child:not(:first-child)[disabled]{border-left-color:#dddee1}.rp-btn-group-vertical .rp-btn-primary:not(:first-child):not(:last-child){border-top-color:#2b85e4;border-bottom-color:#2b85e4}.rp-btn-group-vertical .rp-btn-primary:first-child:not(:last-child){border-bottom-color:#2b85e4}.rp-btn-group-vertical .rp-btn-primary:first-child:not(:last-child)[disabled]{border-top-color:#dddee1}.rp-btn-group-vertical .rp-btn-primary+.rp-btn,.rp-btn-group-vertical .rp-btn-primary:last-child:not(:first-child){border-top-color:#2b85e4}.rp-btn-group-vertical .rp-btn-primary+.rp-btn[disabled],.rp-btn-group-vertical .rp-btn-primary:last-child:not(:first-child)[disabled]{border-bottom-color:#dddee1}#card-tips{margin-top: 5px;}.rp-btn-small {padding: 2px 7px;font-size: 12px;border-radius: 3px;margin:5px;}';
