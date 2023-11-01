      //kiki라는 클래스명을 가진 모든 객체를 boxes에 담습니다.
      const boxes = document.querySelectorAll('.kiki');
      
      const titleBox = function(entries, observer) {
        //각 요소를 나눠 isIntersecting과 target을 entries에 담습니다.
        const [{isIntersecting, target}] = entries;
        // intersectionRatio의 값이 0 이상일 경우 root영역에 대상이 겹쳤음을 의미하고, 이는 isIntersecting 값이 true인 경우와 같다고 볼 수 있다.
        if (isIntersecting) {
          //isIntersecting값이 참일경우 visible 클래스를 추가한다
          target.classList.add('visible');
        } else {
          target.classList.remove('visible');
          //isIntersecting값이 거짓일경우 visible 클래스를 제거한다
        }
      };
     
      const io = new IntersectionObserver(titleBox, {
        //intersection observer 생성자 초기화 (관찰자)
        root: null,
        //threshold는 얼마나 겹쳤나 0부터 1까지 백분율로 나눠 정한다
        threshold: 1,
      });

      //모든 boxes객체에 반복문을 통해 kiki클래스를 감시합니다.
      boxes.forEach(e => {
        io.observe(e);
      });