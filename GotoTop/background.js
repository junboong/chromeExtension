  
  // 상단 이동 함수
  async function goTop() {

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

  
  // Alt + Q 로 확장프로그램 팝업 실행시
  window.onload = goTop();

  // 버튼 단축키
  chrome.commands.onCommand.addListener(function(command) {
    if (command === 'my_command') { // 등록한 단축키의 이름
      goTop();
      }
    });

  // 버튼 클릭 이벤트 핸들러 등록
  document.getElementById('topBtn').addEventListener('click', goTop);