
import React, { useState, useCallback, useEffect } from 'react';
import JikwonList from './JikwonList';
import axios from 'axios';

const JikwonTem = () => {
    const [isLoaded, setIsLoaded] =useState(false);
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(null);
    const [sum, setSum] = useState(0);
    const [avg, setAvg] = useState("");
    const [search, setSearch] = useState("");

    const handleChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);
  
    const showList = useCallback(() => {
       setIsLoaded(false);
        axios(`/jikwon/${search}`, {method:"GET"})
        .then((res) => {
            let sum = 0;
            setDatas(res.data.datas);
            console.log(res.data.datas);
            res.data.datas.forEach(data => {
              setSum((preSum) => preSum + data.jikwonpay)
            });
            setAvg((sum/res.data.datas.length).toFixed(1));
            setIsLoaded(true);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        });
    showList(); // showlist 호출 
}, [search]); // search 변경될때마다 호출

useEffect(() => {
    if(search) {
        showList();
    }
},[search, showList]);

const handleSubmit = (e) => {
    e.preventDefault();
    showList();
}

    if(!isLoaded) {
        return <div>⌛로딩중⌛</div>
    }
    if(error) {
        return<div>Error : {error.message}</div>;
    }
    return(
        <main>
            <div>
                <h3>직원 자료 출력</h3>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    부서명 : <input id="search" value={search}  onChange={handleChange}/>
                    <button type='submit'> 확 인 </button>
                </div>
            </form>

            <section>
                <JikwonList datas={datas} sum={sum} avg={avg}></JikwonList>
            </section>
        </main>
    )
};

export default JikwonTem;
