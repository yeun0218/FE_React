import React from "react";

const VisitListTemplate = ({form, children}) => {
    return (
        <main className="visit-list-template">
            <div className="title" style={{textAlign:'center'}}>
                <h3>거래처 정보 입력</h3>
            </div>

            <section className="form-wrapper">
                {form}
            </section>

            <section className="visits-wrapper">
                {children}
            </section>
        </main>
    )
};
export default VisitListTemplate;
