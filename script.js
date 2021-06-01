// 구글링을 통해 블로그에 있는 내용을 참고했습니다.

//! Create - createElement
//* 질문1. createFragment란?
//* -> "기존 document객체에 비해 비교적 가벼운 임시 node 객체를 만들어준다."
//* -> 빈 node를 만들어 놓고 반복문을 만들어 무언가를 순차적으로 넣어줄때도 사용하는 것 같다.

// 새로운 엘리먼트를 생성하는 메소드 -> createElement 
// tweetDiv라는 변수에 새로운 엘리먼트 'div'를 생성해줌.
const tweetDiv = document.createElement('div');



//! Append - append & appendChild
//* 질문1. append와 prepend의 차이점
//* -> append는 node object와 dom string을 Parents.Node 뒤로 추가한다.
//* -> prepend는 node object와 dom string을 Parents.Node 앞으로 추가한다.

//* 질문2. appendChild와 append의 차이점
//* -> appendChild는 1)dom string만 사용가능, 2) 한번에 한개의 요소만 추가 가능, 3)리턴값 있음
//* -> append는 1)node object와 dom string 사용가능, 2)한번에 여러개 요소 추가 가능, 3)리턴값 없음.

//* 질문3. 같은 엘리먼트를 appendChild하면, 기존 엘리먼트를 복사할까?
//* -> 결론: 복사가 일어나지 않고 이동이 일어난다.
//* -> 한 요소를 다른 부모의 요소로 appendChild했을때, 이동을한다.
//* -> 즉, 한 노드가 문서상의 두 지점에 동시에 존재 할 수 없다! 만약 노드가 이미 부모를 가지고 있다면 우선 삭제되고 새로운 위치로 이동된다.

// 공중부양중인 새로 생성한 엘리먼트를 body의 자식 맨뒤로 추가해줌.
document.body.append(tweetDiv);



//! Read - querySelector & querySelectorAll
//* 질문1. querySelector의 부모는 꼭 document이여야 할까?
//* -> document 하위의 어떤 객체든 자식 엘리먼트를 가지고 있다면, querySelector의 부모가 될 수 있다.

//* 질문2. querySelector의 첫번째 인자에 'div'를 넣으면 어떻게 될까?
//* const qa = document.querySelector('div'); console.log(qa);
//* -> 콘솔을 보면 알 수 있듯 가장 상위의 div가 선택되는데 요소의 자식까지 같이 출력된다.

//? getElementById(아이디명 입력), getElementsByClassName(클래스명 입력), getElementsByTagName(태그이름 입력)등 옛날 방식도 있다. 호환성 따져야 할 때 사용.

// querySelector를 이용해 여러개의 요소가 있는 클레스를 선택했을때, 가장 상위의 요소만 선택된다.
const oneTweet = document.querySelector('.tweet');
//todo console.log(oneTweet);

// 여러개의 엘리먼트를 조회할때는 querySelectorAll을 이용한다. 클레스 이름이 tweet인 모든 html 엘리먼트를 유사 배열로 받아온다.
const tweets = document.querySelectorAll('.tweet');
// 이렇게 출력되는 값들은 '배열이 아닌 배열', '유사 배열', '배열형 객체' 등 여러이름으로 불린다.
// Array-like object
//todo console.log(tweets);

// container의 자식 노드로 tweetDiv를 넣어준다.
let container = document.querySelector('#container');
container.append(tweetDiv);


//! Update - classList.add & textContent
//* 질문1. textContent와 innerHTML의 차이
//* -> textContent는 node의 모든 엘리먼트와 텍스트 콘텐츠를 반환한다. ex) hello
//* -> innerHTML은 이름 그대로 엘리먼트 내에 포함된 모든 HTML을 반환한다. ex) <h1>hello</h1>

//* 질문2. innerHTML의 보안상 단점
//* -> innerHTML은 HTML자체를 반환, 접근할 수 있는 메소드! 태그 자체를 활용할 수 있기 때문에 보안상 단점이 있다.
//* -> 

// classList.add()를 이용해 tweetDiv에 tweet이라는 클래스를 넣어준다.
tweetDiv.classList.add('tweet');
//todo 아이디일 경우
//todo -> tweetDiv.id.add('tweet');

// textContent를 이용해 원하는 텍스트를 넣어준다.
tweetDiv.textContent = 'bye'
//? tweetDiv.innerHTML = 'bye' -> innerHTML을 이용해 텍스트를 넣어줄 수도 있지만, 불가피한 상황이 아니라면 보안상의 문제로 textContent를 써주는 것이 좋다.


//! Delete - remove & removeChild
//* 질문1. element와 node의 차이
//* -> 엘리먼트는 노드의 타입 중 하나다. window,div,body같은 특정한 타입을 말한다.
//* -> 노드는 태그노드와 텍스트노드 전체를 가르키고, 엘리먼트는 텍스트노드를 제외하고 흔히 생각하는 태그(<p></p>와 같은)만 가르킨다.

//* 질문2. children과 childNodes의 차이
//* -> 현재 노드에서 그 자식노드에 접근하기 위해 children(텍스트 노드 제외), childNodes(텍스트 노드 포함)을 사용한다.
//* -> 한번 선택할 때는 getElementsByTagName와 같은 메소드가 더 편리하지만, 어떤 노드의 부모를 찾거나, 자식을 찾을때는 이름을 모르기 떄문에 children을 사용한다.

//* 질문3. removeChild와 remove의 차이
//* -> removeChild: 삭제할 노드의 부모노드.removeChild(삭제할 노드)
//* -> remove: 삭제할 노드.remove()

//* 질문4. firstChild와 lastChild / firstElementChild와 lastElementChild
//* -> 모든 자식을 선택하는 대신, 첫번째 자식만 선택하고 싶다면 firstChild를 마지막 자식만 선택하고 싶다면 lastChild를 이용한다.
//* -> firstChild, lastChild와 같은 역할을 하지만 텍스트 노드는 무시합니다.

//* 질문5. parentNode와 parentElement
//* -> 부모를 찾을때 사용하는 속성.
//* -> 자식은 여러개일수 있기 때문에 복수형 단어를 사용하지만 부모는 항상 하나이기 때문에 단수형인 parent를 사용합니다.

//* 질문6. tweets에 forEach는 되는데, reduce는 안되는 이유
//* -> NodeList는 배열이 아니라 node의 콜렉션이기 때문에, 배열 메소드는 사용할 수 없다.
//* -> node의 메소드에는 NodeList.length, NodeList.item(), NodeList.entries(), NodeList.forEach(), NodeList.values, NodeList.keys()가 있다.

//* 질문7. tweets를 유사 배열에서 배열로 바꾸는 방법
//* -> Array.from(), Spread Operator, Array.prototype.slice(), Array.prototype.slice.call() 가 있다.

// 삭제 하려는 엘리먼트 위치를 알고 있는 경우 remove()를 사용한다.
//todo tweetDiv.remove();

// removeChild()  lastChild와 함께 사용하여 마지막 자식을 삭제합니다.
//todo container.removeChild(container.lastChild);

//? 여러개의 자식 엘리먼트를 지우려면 innerHTML을 사용한다. -> 하지만 보안상의 문제!
//? document.querySelector('#container').innerHTML = '';

// 반복문을 이용해 삭제하는 방법(1) -> container의 자식 엘리먼트가 1개만 남을 때까지, 마지막 자식 엘리먼트를 제거한다.
//todo 1)
//  while(container.children.length > 1){ 
//     container.removeChild(container.lastChild);
//  }

// 반복문을 이용해 삭제하는 방법(2) -> 클래스 이름이 tweet인 엘리먼트만 찾아서 제거한다.
const tweets1 = document.querySelectorAll('.tweet')
//todo 1)
// tweets1.forEach(function(tweet){
//     tweet.remove();
// })
//todo 2)
// for(let tweet of tweets1){
//     tweet.remove();
// }

//! 그외의 메소드
//* insertBefore: 부모.insertBefore(넣을 태그, 기준 태그)
//* -> 자신 이전의 자신의 형제 태그로 집어 넣는다. 

//* cloneNode: 자기 자신을 복사한다
//* -> 복사한 것을 저장해서 집어 넣을 수 있다.
