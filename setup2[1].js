var k = '<div style="position:sticky;overflow:hidden;top:0;z-index:9999;background-color:#000;"><a href="./" class="backbutton" style="animation: 1s ease 0s normal 1 fadeIn;-webkit-animation: 1s ease 0s normal forwards 1 fadeIn;-moz-animation: 1s ease 0s normal forwards 1 fadeIn;-o-animation: 1s ease 0s normal forwards 1 fadeIn;-ms-animation: 1s ease 0s normal forwards 1 fadeIn;">&lt; (Back)</a><br><br><hr noshade style="animation: 2s ease 0s normal 1 fadeIn;-webkit-animation: 2s ease 0s normal forwards 1 fadeIn;-moz-animation: 2s ease 0s normal forwards 1 fadeIn;-o-animation: 2s ease 0s normal forwards 1 fadeIn;-ms-animation: 2s ease 0s normal forwards 1 fadeIn;"></div>';
k+= '<div class="proj" style="animation: fadeIn ease 20s;-webkit-animation: fadeIn ease 2.5s;-moz-animation: fadeIn ease 20s;-o-animation: fadeIn ease 20s;-ms-animation: fadeIn ease 20s;margin:5%;"><h3>' + projectdb[j].title + '</h3>';
k+= '<div class="updatestatus" style="animation: 3.5s ease 0s normal 1 fadeIn;-webkit-animation: 3.5s ease 0s normal forwards 1 fadeIn;-moz-animation: 3.5s ease 0s normal forwards 1 fadeIn;-o-animation: 3.5s ease 0s normal forwards 1 fadeIn;-ms-animation: 3.5s ease 0s normal forwards 1 fadeIn;">' + '<h4>Status: ' + projectdb[j].updatestatus.status + '</h4><p>Version: ' + projectdb[j].updatestatus.version + '</p><p>Last update: ' + projectdb[j].updatestatus.lastupdate.DD + '-' + projectdb[j].updatestatus.lastupdate.MM + '-' + projectdb[j].updatestatus.lastupdate.YYYY + ' ' + projectdb[j].updatestatus.lastupdate.hh + ':' + projectdb[j].updatestatus.lastupdate.mm + ' (DD-MM-YYYY, UTC)</p>' + '</div>';
k+= '<p>' + projectdb[j].desc + '</p>';
var theinfo = projectdb[j].info;
for(i = 0;i < edittricksdb.length; i++)
{
  var lengthoftext = edittricksdb[i].text.length;
  var searched = theinfo.search(edittricksdb[i].text);
  while (searched > -1)
  {
    theinfo = theinfo.substr(0, searched) + edittricksdb[i].replace + theinfo.substr(searched + lengthoftext);
    searched = theinfo.search(edittricksdb[i].text);
  }
};
k+= '<p>' + theinfo + '</p>';
k+= '</div>';
var h = '<style>' + projectdb[j].css + '</style>';
document.head.innerHTML += '<link rel="shortcut icon" type="image/jpg" href="icon.png" />';
document.head.innerHTML += h;
document.head.innerHTML += '<meta property="og:type" content="website"><meta property="og:title" content="' + projectdb[j].title + ' - CI049\'s Projects' + '" /><meta property="og:description" content="Version: ' + projectdb[j].updatestatus.version + ' - ' + projectdb[j].desc + '" /><meta property="og:url" content="https://codeprojects.org/DwWWDwkJ2sodZ2wRsITC1DjJ1E-lr4P1bc-LTIs1yOo/proj.html?id=' + j + '" /><meta property="og:image" content="https://codeprojects.org/DwWWDwkJ2sodZ2wRsITC1DjJ1E-lr4P1bc-LTIs1yOo/' + projectdb[j].image + '" />';
document.getElementById("container1").innerHTML = k;
document.title = projectdb[j].title + ' - CI049\'s Projects';