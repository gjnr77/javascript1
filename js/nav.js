// 네비게이션 (Navigation) : GNB(메인메뉴) & LNB(서브메뉴)
// 마우스를 메인 메뉴에 클릭하면 해당 서브 메뉴가 아래로 노출된다.
// 1. 메인 메뉴 클릭 시 해당 메인 메뉴의 on 클래스가 추가(addClass)된다.
//    그리고 해당 버튼을 제외한 모든 버튼은 on 클래스 제거(removeClass)된다.
// 2. 해당 서브 메뉴에도 on 클래스가 추가(addClass)된다.
//    그리고 해당 서브 메뉴를 제외한 모든 서브 메뉴는 on 클래스 제거(removeClass)된다.
// 3. 해당 메인+서브 메뉴의 영역을 마우스가 떠나면(mouseleave == mouseout) 
//    메인 메뉴와 서브메뉴 모두 초기화된다. (모든 클래스 삭제)
// window.onload = function(){
    
// } -> 이거 쓰면 js를 html 밑에 쓰지 않아도 됨/ 그렇지만 추천하지 않음

var nav = {
    init : function(){
        this.navFn();
        // this.forFn();
    },
    navFn : function(){
      var $mainBtn = document.getElementsByClassName('main-btn');
      var $sub     = document.getElementsByClassName('sub');
      var $navArea = document.getElementsByClassName('nav-area');

        //1. 메인버튼 $mainBtn 요소 배열 처리 : [].slice.call($mainBtn);
        //2. 배열변수에 대입 시킨다 = 자기 자신

        $mainBtn = [].slice.call($mainBtn);

        //3. 베열변수.forEach(function(요소,인덱스,배열){});           //요소,인덱스,배열 => 매개변수
        $mainBtn.forEach(function(el, idx,arr){
            $mainBtn[idx].addEventListener('mouseenter', function(event){ //mouseenter = mouseover
                event.preventDefault();
        
                for(i=0; i<=3; i++){
                    $mainBtn[i].classList.remove('on');
                    $sub[i].classList.remove('on');
                }
    
                $mainBtn[idx].classList.add('on');
                $sub[idx].classList.add('on');
    
               },false);
        });
        


        //메인 0 버튼(첫번째) 클릭 추가 이벤트 리스너 등록
        // $mainBtn[0].addEventListener('mouseenter', function(event){ //mouseenter = mouseover
        //     event.preventDefault();
    
        //     for(i=0; i<=3; i++){
        //         $mainBtn[i].classList.remove('on');
        //         $sub[i].classList.remove('on');
        //     }

        //     $mainBtn[0].classList.add('on');
        //     $sub[0].classList.add('on');

        //    },false);

        // $mainBtn[1].addEventListener('mouseenter', function(event){
        //     event.preventDefault();
            
        //     for(i=0; i<=3; i++){
        //     $mainBtn[i].classList.remove('on');
        //     $sub[i].classList.remove('on');
        //      }
        //     $mainBtn[1].classList.add('on');
        //     $sub[1].classList.add('on');
        //    },false);

        // $mainBtn[2].addEventListener('mouseenter', function(event){
        //     event.preventDefault();
        //     this.classList.add('on'); 

        //     for(i=0; i<=3; i++){
        //     $mainBtn[i].classList.remove('on');
        //     $sub[i].classList.remove('on');
        //     }      
        //     this.classList.add('on');
        //     $sub[2].classList.add('on');
        //    },false);

        // $mainBtn[3].addEventListener('mouseenter', function(event){
        //     event.preventDefault();
            
        //     for(i=0; i<=3; i++){
        //     $mainBtn[i].classList.remove('on');
        //     $sub[i].classList.remove('on');
        //      }
        //     this.classList.add('on'); 
        //     $sub[3].classList.add('on');
        //    },false);



           // 마우스 이벤트로 반복문 처리 안된다.
           // 그래서 li.nav-area 영역 객체를 객체 배열 처리 한다.
           // 객체를 배열로 처리하는건 Array.prototype.slice.call(객체)
           // Arry.prototype = [] =====>          [].slice.call(객체)
           // 그리고 객체 배열 반복문(forEach())을 활용한다.
           // li 안에 들어있는 복잡한 태그들을 간단하게 배열처리하겠다.

        //    var obj = {irum:'김유신'}; //객체 선언 - 리터럴 방식
        //    var arr = ['김유신','이순신','김좌진']; //배열 선언 - 리터럴 방식
        //         console.log(arr[1]);

           //1. 배열 처리 [].slice.call(클래스 요소 객체);

           $navArea = [].slice.call($navArea); // $navArea 의 기존내용(클래스 요소)이 배열로 바뀌어서 $navArea로 다시 들어감!
           console.log( $navArea ); //배열로 바꼈나 결과값 확인확인

           //2. 반복문 처리 -> 배열 처리된 변수.forEach(콜백함수=>function(){});
           //$navArea.forEach(function(태그(클래스)요소 element, 인덱스넘버 index){});

           $navArea.forEach(function(el, idx){
              //  console.log(el, idx); // 확인
                $navArea[idx].addEventListener('mouseleave',function(){
                    $mainBtn[idx].classList.remove('on');         
                    $sub[idx].classList.remove('on');
                   },false);
        
           });


        //    $navArea[0].addEventListener('mouseleave',function(){
        //     $mainBtn[0].classList.remove('on');         
        //     $sub[0].classList.remove('on');
        //    },false);

        //    $navArea[1].addEventListener('mouseleave',function(){
        //     $mainBtn[1].classList.remove('on');         
        //     $sub[1].classList.remove('on');
        //    },false);

        //    $navArea[2].addEventListener('mouseleave',function(){
        //     $mainBtn[2].classList.remove('on');         
        //     $sub[2].classList.remove('on');
        //    },false);

        //    $navArea[3].addEventListener('mouseleave',function(){
        //     $mainBtn[3].classList.remove('on');         
        //     $sub[3].classList.remove('on');
        //    },false);

    },
    forFn : function(){ //반복문 알고리즘
        //1~100까지 1씩 증가하여 출력하는 반복문
        // for(){} 반복문의 기본구조 / 변수이름 i,j,k를 가장많이씀 
        for(var i=1; i<=100; i++ ){
            console.log( i );
        }

        //짝수(Even)
        for(var i=2; i<=100; i+=2 ){ // 2 4 6 ..100
            console.log('짝수' + i );
        }

        //홀수(Odd)
        for(var i=1; i<=100; i+=2 ){
            console.log('홀수' + i ); // 1 3 5 ..99
        }

        //5의 배수 출력
        for(var i=5; i<=100; i+=5 ){
            console.log(`5의 배수: ${i}`);
        }

        //구구단 2단 출력
        for(var i=1; i<=9; i++){
           // console.log('2 * ' + i + '=' + (2*i));
            console.log(`2 * ${i} = ${2*i}`);
        }

        //구구단 3단 출력
        for(var i=1; i<=9; i++){
           // console.log('3 * ' + i + '=' + (3*i));
            console.log(`3 * ${i} = ${3*i}`);
        }
////////////////////////////////////////////////////////////////////////////////////////////////

        var cnt =0;
        var txt = ''; //문자열 공백
        var $outTable = document.querySelector('#out-table');

        //구구단 2 ~ 9단까지 세로 출력
        for(var i=2; i<=9; i++){ //2~9단까지 나오는 '행'
           txt += `<tr><th> ${i} 단</th></tr>`; //콘솔로그 대신 변수로 표현해서 페이지에 출력하게함

            for(var j=1; j<=9; j++){ //1~9까지 나오는 '열'
                cnt++; // 반복 횟수 누적 합
                var x = (i*j) < 10 ? ('0'+ (i*j)) : (i*j); //i*j를 또 다른 변수로 만들어서 넣어주면 편리,깔끔
                // 01과 같이 두자리수로 맞춰주기위해 
              //  console.log(`${i} * ${j} = ${x}`);
           // txt += `<tr><td> ${i} * ${j} = ${x} </td></tr>`;
             txt += '<tr><td>' + i + '*' + j  + '=' + x + '</td></tr>';
            }
        }
        //console.log(txt); 확인절차
       // $outTable.innerHTML = txt; //기존 html에 내용은 싹 지워지고 txt 내용이 들어감

     //   console.log(`총 반복 횟수 = ${cnt}`);

        txt=''; // 변수 내용 삭제=초기화 (위에 txt가 있음!)
     //구구단 2 ~ 9단까지 가로 출력
        for(var j=1; j<=9; j++){ //1~9
            txt += '<tr>'; // 줄 시작 
            for(var i=2; i<=9; i++){ //2~9단
                var x = (i*j) < 10 ? ('0'+(i*j)) : (i*j);
                txt += '<td>' + i +'*'+ j + '=' + x + '</td>'; //8칸
            }
            txt +='</tr>'; //줄 끝  
        }
        $outTable.innerHTML = txt;
    }
};

nav.init(); //로딩 시 실행