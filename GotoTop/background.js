
// autoScroll();

  // 버튼 단축키
  chrome.commands.onCommand.addListener(function(command) {
    console.log(command)
    if (command === 'up') { // 등록한 단축키의 이름
      //console.log("up");
      moveUp();
      }
    if(command === 'down'){
      //console.log("dd");
      moveDown();
    }
    });

   // 상단 이동 함수
   async function moveUp() {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tabId = tabs[0].id;

      //console.log(tabId);
    
      chrome.scripting.executeScript({
      target: {tabId: tabId},
      func: () => {
          window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
      }
      })
    });
  }

  // 하단 이동 함수
  async function moveDown() {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tabId = tabs[0].id;
      
      //console.log(tabId);
    
      chrome.scripting.executeScript({
      target: {tabId: tabId},
      func: () => {
          window.scrollTo({ left: 0, top: 999999, behavior: "smooth" })
      }
      })
    });
  }

  function autoScroll(){

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const tabId = tabs[0].id;
      
      //console.log(tabId);
    
      chrome.scripting.executeScript({
      target: {tabId: tabId},
      func: () => {
        let height = document.body.scrollHeight;
        let delay = 0;
        let i = 0;
        //console.log(height)

        var repeat = setInterval(function(){
          window.scrollTo({ left: 0, top: i, behavior: "smooth" });
          i+=10;
          console.log(i)
          if(i > height){
            clearInterval(repeat);
          }

        }, 30)

        // for(let i = 0; i < height; i++){
        //   console.log(i)
        //   delay += 1000;
        //   //setTimeout(async () => window.scrollTo({ left: 0, top: i, behavior: "smooth" }), delay);
        // }

        // console.log(i);
        // let stop = true;
        // while(stop){
        //   if(i < height){
        //     setInterval(() => window.scrollTo({ left: 0, top: i, behavior: "smooth" }), 1000);
        //   }else{
        //     stop = false;
        //   }
        //   i++;
        // }
        
        
      }
      })
    });

    
  }


    // 버튼 클릭 이벤트 핸들러 등록
  document.querySelector('#upBtn').addEventListener('click', moveUp);
  document.querySelector('#downBtn').addEventListener('click', moveDown);