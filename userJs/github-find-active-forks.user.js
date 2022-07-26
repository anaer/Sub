// ==UserScript==
// @name                Github Find Active Forks
// @name:zh-CN          Github查找活跃的Forks列表
// @namespace           http://tampermonkey.net/
// @version             1.0.1
// @description         allows you to find the most active forks of a repository.
// @description:zh-CN   Github显示活跃的Forks列表，可以快速了解各个分叉的热度，比如在主项目存档不维护时，就能知道有哪个新分叉有更新，
// @author              AndyWu
// @homepageURL         https://github.com/andywu188/
// @downloadURL         https://fastly.jsdelivr.net/gh/anaer/Sub@main/userJs/github-find-active-forks.user.js
// @match               https://github.com/*
// @run-at              document-end
// @grant               none
// @license             LGPLv3
// ==/UserScript==
 
(function () {
    'use strict'
    function applyNodeActivefork () {
        var activeforkNode = document.querySelector("#active-forks-button-repo");
        if (activeforkNode == null) {
            var pageheadaction = document.querySelector(".pagehead-actions");
            if (pageheadaction != null) {
                  var tempNode = document.createElement('li');
                  var repositoryLinkNode = document.querySelector("meta[name='octolytics-dimension-repository_network_root_nwo']");
                  if (repositoryLinkNode != null) {
                    var repositoryLink = repositoryLinkNode.content;
                    console.log(repositoryLink)
                      tempNode.innerHTML = '<details class="details-reset details-overlay f5 position-relative"><summary id="active-forks-button-repo" class="btn btn-sm"><svg class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path></svg><font><a href="https://techgaun.github.io/active-forks/index.html#'+ repositoryLink +'" target="_blank">Active Forks</a></font></summary></details>';
                      pageheadaction.appendChild(tempNode);
                  }
                  
            }
        }
    }
 
 
    var main = document.querySelector('main');
    if (main != null) {
        var observer = new MutationObserver(function (mutations, observer) {
            applyNodeActivefork();
        })
        observer.observe(main, {
            childList: true
        })
        applyNodeActivefork();
    }
 
})()