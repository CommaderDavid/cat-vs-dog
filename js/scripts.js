$(document).ready(function() {
  $("button#loud").click(function() {
    $("ul#cat").prepend("<li>Moew!</li>");
    $("ul#dog").prepend("<li>Woof, woof!</li>");
  });

  $("button#hiss").click(function() {
    $("ul#cat").prepend("<li>Hiiissss!! 'Swipe!'</li>");
    $("ul#dog").prepend("<li>Bark, bar- 'Whine, whine!'</li>");
  });

  $("button#chuff").click(function() {
    $("ul#dog").prepend("<li>Chuff, chuff!</li>");
    $("ul#cat").prepend("<li>'Angry moew...'</li>");
  });

  $("button#angry").click(function() {
    $("ul#dog").prepend("<li>bark, barK, baRK, BARK!</li>");
    $("ul#cat").prepend("<li>Rrreeeaaaannnn!! 'Scamper!'</li>");
  });
});
