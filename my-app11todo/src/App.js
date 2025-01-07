import React, { useState, useCallback } from 'react';
import TodoListTemplate from "./mydir/TodoTemplate";
import Form from "./mydir/Form";
import TodoItemList from "./mydir/TodoItemList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {id:0, text:"출근(09:00)", checked:true},
    {id:1, text:"팀 회의(09:30)", checked:false},
    {id:2, text:"점심시간(12:00)", checked:false},
  ]);

  const [nextId, setNextId] = useState(3); // 다음번 id 값

  // useCallback : hook의 일종.Memoization을 구서
  // 메모이제이션은 함수의 결과를 캐싱하여 동일한 입력에 대해 반복 계산을 방지하는 기법입니다.
  // [] : 의존성 배열 값이 변경되지 않으면 동일 함수 인스턴스를 반환
  //      즉, 불필요한 함수 재생성을 방지 
  // 할일을 입력할 때 
  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []); // 의존성 배열

  // 새로윤  todo항목을 생성하고, 상태틑 업데이트하기 위한 함수. Memoization을 사용
  const handleCreate = useCallback(() => {
    if(input.trim() === "") return; // 비어있을 땐 아무것도 반환 안해

    setTodos((prevTodos) =>  // 이전 항목에 대한 매개변수
      // 입력한 내용 추가 
      // push : 기존 배열에 값을 추가하여 원본을 바꾼다.
      // concat : 기존 배열을 토대로 변경한 새로운 배열이 리턴, 기존 배열을 바뀌지 않는다.
      prevTodos.concat({
        id:nextId,
        text:input,
        checked:false,
      })

    );
    setInput("") ; // 입력필드 초기화
    setNextId((prevId) => prevId+1); // 아이디 1씩 증가
  }, [input, nextId]); // 아이디가 바뀌거나, 새로운 값이 입력될 때마다 handleCreate가 재생성

  const handleKeyDown = useCallback((e) => { // 엔터키했을때도 입력될 수 있게
    if(e.key === "Enter") {
      handleCreate(); // 엔터키 누르면 handleCreate 수행 
    }
  },[handleCreate]); //handleCreate함수가 변경될때 마다 handleKeydown이 재생성 

  // 할일(todo) 목록의 특정 항목의 완료상태를 토글하는 함수 
  // 사용자가 할 일 목록에서 항목을 클릭하면 해당 항목의 상태가 변경
  const handleToggle = useCallback((id) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => // todos 배열을 순회하면서  id가 전달된id와 일치하는지 확인
        todo.id === id?{...todo, checked : !todo.checked} : todo))
        // 일치하면 checked 토글, 아니면 그대로 반환 
        // checked 속성만 변경 ( 전개연산자, 삼항연산자 사용 )
  },[]); // mount될 때 딱 한번만 실행 

  // 할일 목록의 특정 항목 삭제
  const handleRemove = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    // 삭제하려는 항목과 일치하는 id를 제외한 항목들만 가지고 다시 목록 만들어 

  }, []);


  return (
    /*템플레이트 안에 입력창과 나열창 만들어줘 : 틀 역할 */
    <TodoListTemplate // 첫번째 컴포넌트
      form = { // 두번째 컴포넌트
        <Form value={input}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onCreate={handleCreate}
        />
      }>
      
      <TodoItemList  // 3번째 컴포넌트 ( 여러개 랜더링 )
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />

    </TodoListTemplate>
  );
}

export default App;
