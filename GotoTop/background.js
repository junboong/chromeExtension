


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

   // 이동 함수
   async function moveUp() {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tabId = tabs[0].id;
      console.log("moveUp()");
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
      console.log("moveDown()");
      console.log(tabId);
    
      chrome.scripting.executeScript({
      target: {tabId: tabId},
      func: () => {
          window.scrollTo({ left: 0, top: 999999, behavior: "smooth" })
      }
      })
    });
  }


    // 버튼 클릭 이벤트 핸들러 등록
  //  document.getElementById('upBtn').onclick = moveUp();
  //  document.getElementById('downBtn').onclick = moveDown();
  document.querySelector('#upBtn').addEventListener('click', moveUp);
  document.querySelector('#downBtn').addEventListener('click', moveDown);

  //  let clickUp = document.querySelector("#upBtn");
  //  clickUp.onClick = moveUp();
  //  let clickDown = document.querySelector("#downBtn");
  //  clickDown.onClick = moveDown();