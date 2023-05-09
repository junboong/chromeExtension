
  // Alt + Q 로 확장프로그램 팝업 실행시
  // window.onload = move();

  // 버튼 단축키
  chrome.commands.onCommand.addListener(function(command) {
    console.log(command)
    if (command === 'up') { // 등록한 단축키의 이름
      console.log("up");
      moveUp();
      }
    if(command === 'down'){
      console.log("dd");
      moveDown();
    }
    });

  // 버튼 클릭 이벤트 핸들러 등록
  document.getElementById('upBtn').addEventListener('click', moveUp());
  document.getElementById('downBtn').addEventListener('click', moveDown());


   // 이동 함수
   async function moveUp() {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tabId = tabs[0].id;

      console.log(tabId);
    
      chrome.scripting.executeScript({
      target: {tabId: tabId},
      func: () => {
          window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
      }
      })
    });
  }

  // 이동 함수
  async function moveDown() {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tabId = tabs[0].id;

      console.log(tabId);
    
      chrome.scripting.executeScript({
      target: {tabId: tabId},
      func: () => {
          window.scrollTo({ left: 0, top: 999999, behavior: "smooth" })
      }
      })
    });
  }