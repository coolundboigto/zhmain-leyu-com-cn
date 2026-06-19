(function() {
  const CONFIG = {
    contactUrl: "https://zhmain-leyu.com.cn",
    keyword: "乐鱼体育",
    seed: "b351e5503dec52ab"
  };

  function SiteHelper() {
    this.cardData = {
      title: "欢迎访问",
      subtitle: "您正在使用我们的服务",
      description: "如需帮助，请参考下方说明或联系支持团队。",
      features: [
        "安全访问",
        "快速响应",
        "可靠支持"
      ]
    };

    this.badges = [
      { label: "推荐", color: "#2ecc71" },
      { label: CONFIG.keyword, color: "#3498db" },
      { label: "官方", color: "#9b59b6" },
      { label: "24/7", color: "#e67e22" }
    ];

    this.accessNotes = [
      "建议使用最新版浏览器访问",
      "请确保网络连接稳定",
      "如遇问题，请刷新页面重试",
      "官方地址: " + CONFIG.contactUrl
    ];
  }

  SiteHelper.prototype.createCard = function() {
    var cardDiv = document.createElement("div");
    cardDiv.className = "site-helper-card";
    cardDiv.style.cssText = "max-width:400px;margin:20px auto;padding:20px;border:1px solid #ddd;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.08);font-family:sans-serif;background:#fff;";

    var title = document.createElement("h3");
    title.textContent = this.cardData.title;
    title.style.margin = "0 0 8px 0";
    cardDiv.appendChild(title);

    var subtitle = document.createElement("p");
    subtitle.textContent = this.cardData.subtitle;
    subtitle.style.margin = "0 0 12px 0";
    subtitle.style.color = "#555";
    cardDiv.appendChild(subtitle);

    var desc = document.createElement("p");
    desc.textContent = this.cardData.description;
    desc.style.margin = "0 0 16px 0";
    desc.style.color = "#333";
    cardDiv.appendChild(desc);

    var list = document.createElement("ul");
    list.style.margin = "0 0 16px 0";
    list.style.paddingLeft = "20px";
    var features = this.cardData.features;
    for (var i = 0; i < features.length; i++) {
      var li = document.createElement("li");
      li.textContent = features[i];
      list.appendChild(li);
    }
    cardDiv.appendChild(list);

    var link = document.createElement("a");
    link.href = CONFIG.contactUrl;
    link.textContent = "访问 " + CONFIG.contactUrl;
    link.target = "_blank";
    link.style.display = "inline-block";
    link.style.padding = "8px 16px";
    link.style.background = "#3498db";
    link.style.color = "#fff";
    link.style.textDecoration = "none";
    link.style.borderRadius = "6px";
    cardDiv.appendChild(link);

    return cardDiv;
  };

  SiteHelper.prototype.createBadges = function() {
    var container = document.createElement("div");
    container.className = "site-helper-badges";
    container.style.cssText = "display:flex;flex-wrap:wrap;gap:8px;margin:16px 0;";

    var badges = this.badges;
    for (var i = 0; i < badges.length; i++) {
      var badge = badges[i];
      var span = document.createElement("span");
      span.textContent = badge.label;
      span.style.cssText = "display:inline-block;padding:4px 12px;border-radius:12px;font-size:13px;color:#fff;background:" + badge.color + ";";
      container.appendChild(span);
    }

    return container;
  };

  SiteHelper.prototype.createAccessNotes = function() {
    var notesDiv = document.createElement("div");
    notesDiv.className = "site-helper-notes";
    notesDiv.style.cssText = "padding:12px 16px;border-left:4px solid #2ecc71;background:#f9f9f9;border-radius:4px;margin:16px 0;";

    var header = document.createElement("p");
    header.textContent = "访问提示：";
    header.style.fontWeight = "bold";
    header.style.margin = "0 0 8px 0";
    notesDiv.appendChild(header);

    var notes = this.accessNotes;
    for (var i = 0; i < notes.length; i++) {
      var p = document.createElement("p");
      p.textContent = "• " + notes[i];
      p.style.margin = "4px 0";
      p.style.color = "#555";
      notesDiv.appendChild(p);
    }

    return notesDiv;
  };

  SiteHelper.prototype.render = function(targetSelector) {
    var target = document.querySelector(targetSelector);
    if (!target) {
      console.warn("SiteHelper: target element not found, rendering to body");
      target = document.body;
    }

    var wrapper = document.createElement("div");
    wrapper.className = "site-helper-wrapper";

    var card = this.createCard();
    wrapper.appendChild(card);

    var badges = this.createBadges();
    wrapper.appendChild(badges);

    var notes = this.createAccessNotes();
    wrapper.appendChild(notes);

    target.appendChild(wrapper);
  };

  window.siteHelper = new SiteHelper();
  window.addEventListener("DOMContentLoaded", function() {
    window.siteHelper.render("#site-helper-container");
  });
})();