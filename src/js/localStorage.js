// Если данные есть в localStorage, обновляем таблицу
if (localStorage.getItem("tableSportData")) {
  tableSport.innerHTML = localStorage.getItem("tableSportData");
}

if (localStorage.getItem("tableMusicData")) {
  tableMusic.innerHTML = localStorage.getItem("tableMusicData");
}

if (localStorage.getItem("tableArtData")) {
  tableArt.innerHTML = localStorage.getItem("tableArtData");
}

if (localStorage.getItem("tableHistoryData")) {
  tableHistory.innerHTML = localStorage.getItem("tableHistoryData");
}
