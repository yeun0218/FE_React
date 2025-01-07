import axios from "axios";
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function List() {
    const [list, setList] = useState([]);

    const refresh = () => {
        axios.get("/list")
        .then(res => {
            setList(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        refresh();
    }, []); // 한번만 수행

    const handleDelete = (id) => {
        axios.delete(`/list/` + id)
        .then(res => {
            refresh(); // 삭제 후 목록보기
        })
        .catch(error => {
            console.log(error);
        })
    }

    const navigate = useNavigate();

    return (
        <>
            <Link to="/">전체자료 읽기</Link>&nbsp;&nbsp;
        </>
    )

}
