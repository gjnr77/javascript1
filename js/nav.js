// 네비게이션 (Navigation) : GNB(메인메뉴) & LNB(서브메뉴)
// 마우스를 메인 메뉴에 클릭하면 해당 서브 메뉴가 아래로 노출된다.
// 1. 메인 메뉴 클릭 시 해당 메인 메뉴의 on 클래스가 추가(addClass)된다.
//    그리고 해당 버튼을 제외한 모든 버튼은 on 클래스 제거(removeClass)된다.
// 2. 해당 서브 메뉴에도 on 클래스가 추가(addClass)된다.
//    그리고 해당 서브 메뉴를 제외한 모든 서브 메뉴는 on 클래스 제거(removeClass)된다.
// 3. 해당 메인+서브 메뉴의 영역을 마우스가 떠나면(mouseleave == mouseout) 
//    메인 메뉴와 서브메뉴 모두 초기화된다. (모든 클래스 삭제)

var nav = {
    init:function(){
        this.navFn();
    },
    navFn:function(){
      var $mainBtn = document.getElementsByClassName('main-btn');
      var $sub     = document.getElementsByClassName('sub');
      var $navArea = document.getElementsByClassName('nav-area');

        //메인 0 버튼(첫번째) 클릭 추가 이벤트 리스너 등록
        $mainBtn[0].addEventListener('mouseenter', function(event){ //mouseenter = mouseover
            event.preventDefault();
            this.classList.add('on'); //addClass   ----> 메인1버튼을 누르면, on 클래스를 추가한다 = css에 적용된 on 실행됨
            //= $mainBtn[0].classList.add('on');
            $mainBtn[1].classList.remove('on');
            $mainBtn[2].classList.remove('on');
            $mainBtn[3].classList.remove('on');

            //서브 메뉴 보이기(show)
            $sub[0].classList.add('on');
            $sub[1].classList.remove('on');
            $sub[2].classList.remove('on');
            $sub[3].classList.remove('on');

           },false);

        $mainBtn[1].addEventListener('mouseenter', function(event){
            event.preventDefault();
            this.classList.add('on'); 
            $mainBtn[0].classList.remove('on');
            $mainBtn[2].classList.remove('on');
            $mainBtn[3].classList.remove('on');

            $sub[1].classList.add('on');
            $sub[0].classList.remove('on');
            $sub[2].classList.remove('on');
            $sub[3].classList.remove('on');

           },false);

        $mainBtn[2].addEventListener('mouseenter', function(event){
            event.preventDefault();
            this.classList.add('on'); 
            $mainBtn[0].classList.remove('on');
            $mainBtn[1].classList.remove('on');
            $mainBtn[3].classList.remove('on');

            $sub[2].classList.add('on');
            $sub[0].classList.remove('on');
            $sub[1].classList.remove('on');
            $sub[3].classList.remove('on');

           },false);

        $mainBtn[3].addEventListener('mouseenter', function(event){
            event.preventDefault();
            this.classList.add('on'); 
            $mainBtn[0].classList.remove('on');
            $mainBtn[1].classList.remove('on');
            $mainBtn[2].classList.remove('on');

            $sub[3].classList.add('on');
            $sub[0].classList.remove('on');
            $sub[1].classList.remove('on');
            $sub[2].classList.remove('on');

           },false);

           //li.nav-area 영역을 떠나면, 메인 메뉴+서브 메뉴 모든 on 클래스 삭제
           
           $navArea[0].addEventListener('mouseleave',function(){
            $mainBtn[0].classList.remove('on');         
            $sub[0].classList.remove('on');
           },false);

           $navArea[1].addEventListener('mouseleave',function(){
            $mainBtn[1].classList.remove('on');         
            $sub[1].classList.remove('on');
           },false);

           $navArea[2].addEventListener('mouseleave',function(){
            $mainBtn[2].classList.remove('on');         
            $sub[2].classList.remove('on');
           },false);

           $navArea[3].addEventListener('mouseleave',function(){
            $mainBtn[3].classList.remove('on');         
            $sub[3].classList.remove('on');
           },false);

    }
};

nav.init();