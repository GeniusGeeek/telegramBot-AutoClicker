/*README.MD
What is this?
**This a Js auto bot clicker for telegram-crypto-bot**

How to use?
**Download the script**
**Goto web.telegram.org, visit your crypto bot page**
**Install custom style script extention on chrome/firefox**
**copy and paste this script to custom style script extention(Recommended) OR paste this script in javascript web developer console to inject and run script**
**Search for "var yourBotLink" without the quotes in this script using ctrl+f and replace it with your custom telegram bot link you see in your browser
**Click on Goto website/veiw ads on telegram bot (only to be done once, after which autoclicker script clicks for you)**

watch your crypto grow:)

DISCLAIMER: for education purposes, you bear the consequences of using this script!

Paying Telegram Bots:
Litecoin clickBot: https://t.me/Litecoin_click_bot?start=egIv
Bitcoin clickBot: https://t.me/BitcoinClick_bot?start=gYzP 

Note: This script was tested on the above telegram bots and a few others.
contact me for bug reporting: graciousemmanuel52@gmail.com

kindly appreciate me if you find this helpful, send eth to 0x885013ea5825c7596AECba3d65239feDaB36c078 on the ECR20 network :)
*/

//start autoclicker
var yourBotLink = "https://web.telegram.org/#/im?p=@Litecoin_click_bot"; // replace this with your telegram bot link you see in your browser(VERY IMPORTANT!)

setInterval(function clickAds() {
  var GoToWebsite = $("a.btn.reply_markup_button:last");
  var VisitSites = $('.reply_markup_button:contains("Visit sites"):last');
  var ClickMenu = $('.reply_markup_button:contains("Menu"):last');
  var ClickKeyboard = $(".icon-keyboard");
  var lastDiv = document.getElementsByClassName("im_message_wrap");
  var lastdiv = lastDiv[lastDiv.length - 1];
  var AdMsg = $(".im_message_text:last");
  var AdMsg = document.getElementsByClassName("im_message_text");
  var admsg = AdMsg[AdMsg.length - 1];
  if (admsg.textContent.includes("there are no new ads available")) {
    return false;
  }

 if (lastdiv.textContent.includes("Go to website")) {
   if (GoToWebsite.length) {
     GoToWebsite.click();
   }
  }

   else {
     if (VisitSites.length) {
    VisitSites.click();
    var adClick = $("a.btn.reply_markup_button:last");
    if (adClick) {
      adClick.click();
    }
  } else if (ClickMenu.length) {
    ClickMenu.click();
    setTimeout(function click_visit_sites() {
      var ClickSite = $('.reply_markup_button:contains("Visit sites"):last');
      ClickSite.click();
    }, 1200);

    var adClick = $("a.btn.reply_markup_button:last");
    if (adClick) {
      adClick.click();
    }
  } else {
    ClickKeyboard.click();
    if ($('.reply_markup_button:contains("Visit sites"):last')) {
      $('.reply_markup_button:contains("Visit sites"):last').click();
      var adClick = $("a.btn.reply_markup_button:last");
      if (adClick) {
        adClick.click();
      }
    } else {
      $('.reply_markup_button:contains("Menu"):last').click();
      var adClick = $('.reply_markup_button:contains("Visit sites"):last' ).click();
      var adClick = $("a.btn.reply_markup_button:last");
      if (adClick) {
        adClick.click();
      }
    }
  }
}
  setTimeout(() => {
    var ok = $(".btn-md-primary:last");
    if (ok) {
      ok.click();
    }
  }, 2000);
}, 60000);

//close tabs after 12 minutes to avoid browser crashing
setInterval(function clearTabs() {
  if (window.location.href != yourBotLink ) {
    window.close();
    close();
  }
}, 720000);

//close non-TG tabs after 1 min  
if (window.location.href != yourBotLink) {
  setTimeout(function closeTab() {
    window.close();
    close();
  }, 60000);
}

//bypass robot checker
var checkCaptcha = document.querySelector(".recaptcha-checkbox-checkmark");
if (checkCaptcha) {
  setTimeout(function captcha() {
    document.querySelector(".recaptcha-checkbox-checkmark").click();
  }, 1200);
}

//reload TG tab  
setInterval(function ReloadTab() {
  if (window.location.href == yourBotLink) {
    location.reload();
  }
}, 1200000);

//close youtube after 30 seconds
if (window.location.hostname == "www.youtube.com") {
  setTimeout(function closeyoutube() {
    window.close();
  }, 30000);
}
