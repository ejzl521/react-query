import {useMutation, useQuery, useQueryClient} from "react-query";
import React, {useRef} from "react";
import axios from "axios";

const App = () => {
  const age_Ref = useRef();
  const height_Ref = useRef();
  // query 인스턴스 생성
  const {data, isSuccess} = useQuery(
    ["people_list"],
    () => axios.get("http://localhost:5008/people"));

  const queryClient = useQueryClient();
  const {mutate} = useMutation(
    (person) => axios.post("http://localhost:5008/people", person), {
      onSuccess: () => {
        //queryClient.invalidateQueries("people_list")
      }
    });

  return (
    <React.Fragment>
      {/*peole_query가 로딩에 성공하면 렌더링*/}
      {isSuccess ? (
        data.data.map((person, index) => (
          <div key={index}>
            age: {person.age} height: {person.height}
          </div>
        ))
      ) : null}
      <input ref={age_Ref}/><span>age 입력</span>
      <input ref={height_Ref}/><span>height 입력</span>
      <button onClick={()=>{
        const person = {
          age: age_Ref.current.value,
          height: height_Ref.current.value
        }
        mutate(person)
      }}>데이터 서버에 추가</button>
    </React.Fragment>
  );
}

export default App;