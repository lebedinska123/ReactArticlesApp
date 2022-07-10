import React, { useMemo } from "react";
import { Button } from "../Button";

export const Pagination = function({ totalCount, currentPage, setCurrentPage, limit }) {
    let paginationBtnCount = Math.ceil(totalCount/limit);

    let paginationBtnsArr = useMemo(() => {
        let paginationBtnsArr = [];

        for (let i = 1; i <= paginationBtnCount; i++) {
            let className = i === currentPage ? 'active' : 'deactvate';

            paginationBtnsArr.push(
                <Button key={ i } className={ className } onClick={ () => setCurrentPage(i) }>{ i }</Button>
            )
        }

        return paginationBtnsArr;
    }, [totalCount, currentPage, setCurrentPage, limit]);

    return (
        <div className="mt-2 mb-2">
            {
                paginationBtnsArr.map(btn => btn)
            }
        </div>
    );
};