
/*
function MyName2(props) {
    console.log(props, " ", props.name, " ", props.addr);
    return (
        <>
            안녕~ 별명은 {props.name} {/*함수는 this 안써줘도 돼 }
            &nbsp; 주소는 {props.addr} // 반드시 중괄호로 랩핑
        </>
    );
}
*/

const MyName2 = ({name, addr}) => {
    //let aa = name + "님";
    //console.log(aa);
    return(
        <>
            반가워 ~ 별명은 {name} {addr}
        </>
    );
};

export default MyName2;