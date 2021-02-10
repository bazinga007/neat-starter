$(document).ready(function() {
  var headerEle = $("header");
  var liEle = $("header ul.header-list li a")

  function getScroll() {
    let pageYOffset;
    if (pageYOffset !== undefined) {
      return [pageYOffset];
    } else {
      let sy, d = document,
        r = d.documentElement,
        b = d.body;
      sy = r.scrollTop || b.scrollTop || 0;
      return sy
    }
  }
  window.addEventListener('scroll', handleHeader)

  function handleHeader() {
    const currTopScrollVal = getScroll();
    if (currTopScrollVal > 60 && currTopScrollVal < window.outerHeight) {
      headerEle.css({
        'background-color': "rgba(0,0,0,0.9)",
        "box-shadow": "none"
      })
      liEle.css({
        "color": "#e2e2e2",
      });
    } else if (currTopScrollVal > window.outerHeight) {
      headerEle.css({
        'background-color': "rgba(255,255,255,0.9)",
        "box-shadow": "0 0 12px #e2e2e2"
      })
      liEle.css({
        "color": "#727272",
      });
    } else {
      headerEle.css({
        'background-color': "rgba(0,0,0,0)",
        "box-shadow": "none"
      })
      liEle.css({
        "color": "#e2e2e2",
      });
    }
  }

  // document.getElementById("video").playbackRate = 10

  $("span#pm-read").click(function() {
    $("#pm").fadeIn();
    $("#pm").css({ "display": "flex" });
  })

  $("span#vr-read").click(function() {
    $("#vr").fadeIn();
    $("#vr").css({ "display": "flex" });
  })

  $("span#rent-read").click(function() {
    $("#rent").fadeIn();
    $("#rent").css({ "display": "flex" });
  })

  $("span#install-read").click(function() {
    $("#install").fadeIn();
    $("#install").css({ "display": "flex" });
  })

  $("span#rfid-read").click(function() {
    $("#rfid").fadeIn();
    $("#rfid").css({ "display": "flex" });
  })

  $("span#soft-read").click(function() {
    $("#soft").fadeIn();
    $("#soft").css({ "display": "flex" });
  })

  $(".close").click(function() {
    $(".modal").fadeOut();
  });

  $(".close-sidebar, .sidebar ul li").click(function() {
    $(".sidebar").fadeOut();
  });

  $(".menu").click(function() {
    $(".sidebar").fadeIn();
    $(".sidebar").css({ "display": "flex" });
  })

  $(".video-wrap").click(function(){
    $(".vid-modal").fadeIn();
    $(".vid-modal").css({ "display": "flex" });

  })

  $(".vid-close").click(function() {
    $(".vid-modal").fadeOut();
  });

})
