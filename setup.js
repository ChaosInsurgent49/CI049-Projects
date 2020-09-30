var k = '<h1 class="title" style="animation: 1s ease 0s normal 1 fadeIn;-webkit-animation: 1s ease 0s normal forwards 1 fadeIn;-moz-animation: 1s ease 0s normal forwards 1 fadeIn;-o-animation: 1s ease 0s normal forwards 1 fadeIn;-ms-animation: 1s ease 0s normal forwards 1 fadeIn;">CI049\'s Projects</h1><h2 class="title" style="animation: 2s ease 0s normal 1 fadeIn;-webkit-animation: 2s ease 0s normal forwards 1 fadeIn;-moz-animation: 2s ease 0s normal forwards 1 fadeIn;-o-animation: 2s ease 0s normal forwards 1 fadeIn;-ms-animation: 2s ease 0s normal forwards 1 fadeIn;">This is where CI049 stores projects.</h2>';
var lengthoftext = 0;
var searched = 0;
var theinfo = '';
for(j = 0;j < projectdb.length; j++)
{
  k+= '<div class="proj" style="animation: 3s ease 0s normal 1 fadeIn;-webkit-animation: 3s ease 0s normal forwards 1 fadeIn;-moz-animation: 3s ease 0s normal forwards 1 fadeIn;-o-animation: 3s ease 0s normal forwards fadeIn ease 2.5s;-ms-animation: 3s ease 0s normal forwards 1 fadeIn;display:inline-block;margin-right:40%;margin-left:30px;' + projectdb[j].css + '">';
  k+= '<h3>' + projectdb[j].title + '</h3>';
  k+= '<div class="updatestatus" style="animation: 3.5s ease 0s normal 1 fadeIn;-webkit-animation: 3.5s ease 0s normal forwards 1 fadeIn;-moz-animation: 3.5s ease 0s normal forwards 1 fadeIn;-o-animation: 3.5s ease 0s normal forwards 1 fadeIn;-ms-animation: 3.5s ease 0s normal forwards 1 fadeIn;"><h4>Status: ' + projectdb[j].updatestatus.status + '</h4><p>Version: ' + projectdb[j].updatestatus.version + '</p><p>Last update: ' + projectdb[j].updatestatus.lastupdate.DD + '-' + projectdb[j].updatestatus.lastupdate.MM + '-' + projectdb[j].updatestatus.lastupdate.YYYY + ' ' + projectdb[j].updatestatus.lastupdate.hh + ':' + projectdb[j].updatestatus.lastupdate.mm + ' (DD-MM-YYYY, UTC)</p></div>';
  k+= '<p>' + projectdb[j].desc + '</p>';
  theinfo = projectdb[j].info;
  for(i = 0;i < edittricksdb.length; i++)
  {
    lengthoftext = edittricksdb[i].text.length;
    searched = theinfo.search(edittricksdb[i].text);
    while (searched != -1)
    {
      theinfo = theinfo.substr(0, searched) + edittricksdb[i].replace + theinfo.substr(searched + lengthoftext);
      searched = theinfo.search(edittricksdb[i].text);
    }
  }
  k+= '<a class="frwbutton" href="./proj.html?id=' + j + '">Expand</a>';
  k+= '</div>';
}
document.head.innerHTML += '<link rel="shortcut icon" type="image/jpg" href="icon.png" /><style>.proj:hover{transform: scale(1.025);}</style>';
k+= '<div id="alert-msg"></div>';
document.getElementById("container1").innerHTML = k;
document.title = 'CI049\'s Projects';
if (backuped === true) {
  document.getElementById("alert-msg").innerHTML = "<p>Note: This is fallback data.</p>";
} else {
  document.getElementById("alert-msg").parentNode.removeChild(document.getElementById("alert-msg"));
}
